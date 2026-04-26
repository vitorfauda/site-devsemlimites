import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const nav = [
  { href: '#features', label: 'O que faz' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#planos', label: 'Planos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300`}
      style={{
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        background: scrolled ? 'rgba(5,7,13,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <div className="relative">
            <div className="h-8 w-8 rounded-lg overflow-hidden">
              <img src="/logo.png" alt="DSL" className="h-full w-full object-contain" />
            </div>
            <div className="absolute inset-0 rounded-lg bg-primary/30 blur-md -z-10" />
          </div>
          <span className="text-text-primary">Dev Sem Limites</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-xl text-sm font-medium text-text-muted hover:text-text-primary hover:bg-white/5 transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://rev.devsemlimites.site"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex text-sm text-text-muted hover:text-primary transition-all px-3 py-2"
          >
            Revenda
          </a>
          <a
            href="https://pay.devsemlimites.site"
            className="cta-neon text-sm !py-2.5"
          >
            <span className="relative z-10">Comprar agora</span>
          </a>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t backdrop-blur-xl" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(5,7,13,0.95)' }}>
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-text-muted hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://rev.devsemlimites.site"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-xl text-sm font-medium text-text-muted hover:bg-white/5"
            >
              Área do revendedor
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
