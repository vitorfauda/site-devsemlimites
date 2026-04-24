import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t mt-20 relative z-10" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display font-bold text-lg mb-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center">
                <span className="text-void font-black text-sm">D</span>
              </div>
              Dev Sem Limites
            </div>
            <p className="text-sm text-text-muted max-w-md leading-relaxed">
              A extensão que libera prompts ilimitados no Lovable.dev. Pagamento único,
              licença vitalícia, sem consumir créditos da sua conta.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-text-primary">Produto</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a href="https://pay.devsemlimites.site" className="hover:text-primary flex items-center gap-1.5">
                  Comprar licença <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="https://rev.devsemlimites.site" target="_blank" rel="noreferrer" className="hover:text-primary flex items-center gap-1.5">
                  Seja revendedor <ArrowUpRight size={12} />
                </a>
              </li>
              <li><a href="#faq" className="hover:text-primary">Perguntas frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-text-primary">Suporte</h4>
            <div className="flex gap-2">
              <a
                href="https://wa.me/5527992660736"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl flex items-center justify-center border hover:border-primary hover:text-primary transition-all"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                title="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="mailto:contato@devsemlimites.site"
                className="h-10 w-10 rounded-xl flex items-center justify-center border hover:border-primary hover:text-primary transition-all"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>
            <p className="text-xs text-text-dim mt-3">Atendimento em dias úteis, 9h–20h.</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between gap-4 text-xs text-text-dim" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <p>© {new Date().getFullYear()} Dev Sem Limites. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-text-muted">Termos</a>
            <a href="#" className="hover:text-text-muted">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
