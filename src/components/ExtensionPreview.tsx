import { ArrowRight } from 'lucide-react';

export function ExtensionPreview() {
  return (
    <div className="relative rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-2xl">
      {/* Window chrome */}
      <div className="h-9 flex items-center gap-2 px-4 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
        <span className="size-2.5 rounded-full bg-red-500/60" />
        <span className="size-2.5 rounded-full bg-amber-500/60" />
        <span className="size-2.5 rounded-full bg-emerald-500/60" />
        <div className="ml-4 flex-1 max-w-md mx-auto h-5 rounded bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[10px] text-[var(--color-text-dim)] font-mono">
          lovable.dev/projects/my-saas
        </div>
      </div>

      {/* Editor body */}
      <div className="grid grid-cols-[200px_1fr] h-[420px] sm:h-[440px] md:grid-cols-[260px_1fr]">
        <div className="border-r border-[var(--color-border)] p-4 space-y-3 bg-[var(--color-surface)]/50 hidden sm:block">
          <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-dim)]">
            Conversa
          </div>
          {['Crie um saas de pets', 'Adiciona auth', 'Stripe checkout', 'Dashboard analytics'].map((t, i) => (
            <div
              key={i}
              className={`text-xs p-2 rounded transition-colors ${
                i === 1
                  ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20'
                  : 'text-[var(--color-text-muted)]'
              }`}
            >
              {t}
            </div>
          ))}
        </div>

        <div className="p-6 space-y-4 relative overflow-hidden">
          <div className="flex items-center gap-3 p-3 rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5">
            <div className="size-2 rounded-full bg-[var(--color-primary)] pulse-soft" />
            <div className="text-sm">
              <span className="text-[var(--color-primary)] font-medium">DSL ativo</span>
              <span className="text-[var(--color-text-dim)] ml-2 hidden sm:inline">· Mensagens ilimitadas</span>
            </div>
            <div className="ml-auto text-[10px] font-mono text-[var(--color-text-dim)]">v2.4</div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-end">
              <div className="max-w-[80%] bg-[var(--color-surface-2)] rounded-lg px-3 py-2 text-sm">
                Adiciona autenticação com Google e magic link
              </div>
            </div>
            <div className="flex">
              <div className="max-w-[85%] rounded-lg px-3 py-2 text-sm text-[var(--color-text-muted)] bg-[var(--color-bg)] border border-[var(--color-border)]">
                Configurando Supabase auth com providers Google + Email…
                <div className="mt-2 flex gap-1">
                  <span className="typing-dot size-1.5 rounded-full bg-[var(--color-primary)]" />
                  <span className="typing-dot size-1.5 rounded-full bg-[var(--color-primary)]" />
                  <span className="typing-dot size-1.5 rounded-full bg-[var(--color-primary)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 h-11 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 flex items-center gap-2">
            <div className="text-sm text-[var(--color-text-dim)] flex-1 truncate">Pergunte qualquer coisa…</div>
            <div className="size-7 rounded-md bg-[var(--color-primary)] flex items-center justify-center shrink-0">
              <ArrowRight size={14} className="text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
