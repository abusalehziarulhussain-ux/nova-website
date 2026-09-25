import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="container-shell flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-xs font-bold text-white">
            AV
          </span>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">Ari Vale</div>
          </div>
        </div>

        <div className="text-sm text-stone-500">© {new Date().getFullYear()} Ari Vale. All rights reserved.</div>

        <div className="flex items-center gap-5 text-sm text-stone-600">
          <Link href="#work" className="transition hover:text-stone-900">Work</Link>
          <Link href="#services" className="transition hover:text-stone-900">Services</Link>
          <Link href="#contact" className="transition hover:text-stone-900">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
