export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, project } = body ?? {};

    if (!name || !email || !project) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const formEndpoint = process.env.FORM_ENDPOINT;
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (formEndpoint) {
      const forwarded = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message: project,
          source: 'portfolio-site',
        }),
      });

      if (!forwarded.ok) {
        const text = await forwarded.text();
        console.error('Formspree forward failed:', text);
      }
    }

    if (resendApiKey && contactEmail) {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Inquiry <onboarding@resend.dev>',
          to: [contactEmail],
          reply_to: email,
          subject: `New project inquiry from ${name}`,
          html: `
            <h2>New portfolio inquiry</h2>
            <p><strong>Name:</strong> ${String(name)}</p>
            <p><strong>Email:</strong> ${String(email)}</p>
            <p><strong>Project:</strong></p>
            <p>${String(project).replace(/\n/g, '<br />')}</p>
          `,
        }),
      });

      if (!emailResponse.ok) {
        const text = await emailResponse.text();
        console.error('Resend email failed:', text);
      }
    }

    console.log('Portfolio form submitted:', { name, email, project });

    return Response.json({
      success: true,
      message: 'Thanks! Your inquiry has been sent. I’ll get back to you soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Failed to send inquiry.' }, { status: 500 });
  }
}
