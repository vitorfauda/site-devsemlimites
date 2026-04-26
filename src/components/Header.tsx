import { Link, useLocation } from 'react-router-dom';
import { ButtonLink } from '@/components/ui';

export function Header() {
  const { pathname } = useLocation();
  const onLanding = pathname === '/';

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[var(--color-bg)]/80 border-b border-[var(--color-border)]">
      <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-md overflow-hidden">
            <img src="/logo.png" alt="DSL" className="h-full w-full object-contain" />
          </div>
          <span className="font-semibold tracking-tight">Dev Sem Limites</span>
        </Link>

        {onLanding && (
          <nav className="hidden md:flex items-center gap-7 text-sm text-[var(--color-text-muted)]">
            <a href="#features" className="hover:text-[var(--color-text)] transition-colors">Recursos</a>
            <a href="#como-funciona" className="hover:text-[var(--color-text)] transition-colors">Como funciona</a>
            <a href="#planos" className="hover:text-[var(--color-text)] transition-colors">Preços</a>
            <a href="#faq" className="hover:text-[var(--color-text)] transition-colors">FAQ</a>
            <a
              href="https://rev.devsemlimites.site/seja-revenda"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-text)] transition-colors"
            >
              Para revendas
            </a>
          </nav>
        )}

        <div className="flex items-center gap-2">
          <ButtonLink href="https://pay.devsemlimites.site" size="sm">
            Comprar →
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
