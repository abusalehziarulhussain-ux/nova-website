import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1020]/80">
      <div className="container-shell flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-r from-blue to-accent shadow-[0_0_18px_rgba(124,156,255,0.9)]" />
          <span className="text-sm font-bold tracking-[0.2em] text-white">NOVA</span>
        </div>

        <div className="text-sm text-slate-400">© {new Date().getFullYear()} Nova Studio. All rights reserved.</div>

        <div className="flex items-center gap-5 text-sm text-slate-300">
          <Link href="#services" className="transition hover:text-white">Services</Link>
          <Link href="#work" className="transition hover:text-white">Work</Link>
          <Link href="#pricing" className="transition hover:text-white">Pricing</Link>
        </div>
      </div>
    </footer>
  );
}
