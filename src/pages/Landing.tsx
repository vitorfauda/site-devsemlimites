import { useState } from 'react';
import {
  ArrowRight, Check, Zap, Infinity as InfinityIcon, Shield, Rocket,
  MessageCircle, ChevronDown, TrendingUp, CreditCard, DownloadCloud, Lock,
  Code2,
} from 'lucide-react';
import { Badge, Button, ButtonLink, Card } from '@/components/ui';
import { ExtensionPreview } from '@/components/ExtensionPreview';

// =====================================================
// Conteúdo (preservado do site original)
// =====================================================

const plans = [
  {
    code: '7dias',
    label: '7 dias',
    price: 67,
    desc: 'Pra testar',
    period: '/única',
    features: ['Prompts ilimitados', 'Não consome créditos', 'Uso em 1 dispositivo', 'Suporte via WhatsApp'],
    popular: false,
  },
  {
    code: 'monthly',
    label: 'Mensal',
    price: 97,
    desc: 'Mais escolhido',
    period: '/mês',
    features: ['Prompts ilimitados', 'Não consome créditos', 'Uso em 1 dispositivo', 'Suporte prioritário', 'Atualizações automáticas', 'Renovação automática'],
    popular: true,
  },
  {
    code: 'yearly',
    label: 'Anual',
    price: 147,
    old: 397,
    desc: 'Promo de lançamento',
    period: '/ano',
    features: ['Prompts ilimitados', 'Não consome créditos', 'Uso em 1 dispositivo', 'Suporte VIP', 'Todas as atualizações', 'Economia: ~R$ 1.017/ano'],
    popular: false,
  },
];

const steps = [
  { num: '01', title: 'Compra no PIX', desc: 'Escolha o plano, paga no PIX e recebe a licença em segundos no seu WhatsApp.' },
  { num: '02', title: 'Instala a extensão', desc: 'Baixa o ZIP, arrasta no Chrome → chrome://extensions. Menos de 2 minutos.' },
  { num: '03', title: 'Cola sua licença', desc: 'Abre a extensão no Lovable, cola a chave, clica ativar. Pronto.' },
  { num: '04', title: 'Usa sem limite', desc: 'Agora você dispara prompts no Lovable sem consumir créditos da conta.' },
];

const features = [
  { icon: InfinityIcon, title: 'Prompts ilimitados', desc: 'Crie, edite e itere sem contar quantas vezes. A extensão bypassa o limitador.' },
  { icon: Lock, title: 'Sem consumir créditos', desc: 'Sua conta PRO (se tiver) fica intacta. Free também funciona perfeitamente.' },
  { icon: Rocket, title: 'Instalação em 2 minutos', desc: 'Carregar extensão descompactada no Chrome. Não precisa root, não precisa dev tools.' },
  { icon: Shield, title: 'Licença vitalícia', desc: 'Pagamento único de R$ 147. Sem mensalidade, sem surpresa na fatura.' },
  { icon: DownloadCloud, title: 'Atualizações automáticas', desc: 'Quando o Lovable muda, nós atualizamos. Avisamos via WhatsApp.' },
  { icon: MessageCircle, title: 'Suporte humano', desc: 'Responde mesmo. No WhatsApp, em dias úteis. Sem chatbot ruim.' },
];

const comparison = [
  { feat: 'Mensagens por dia', free: '5', pro: '~30 (créditos limitados)', dsl: 'Ilimitado' },
  { feat: 'Sistema de cobrança', free: 'Limite diário', pro: 'Por créditos consumidos', dsl: 'Sem créditos' },
  { feat: 'Preço', free: 'US$ 0', pro: 'US$ 25/mês (~R$ 130)', dsl: 'R$ 147 único' },
  { feat: 'Em 1 ano você paga', free: 'R$ 0', pro: '~R$ 1.560', dsl: 'R$ 147' },
  { feat: 'Roda na sua conta Free', free: '—', pro: '—', dsl: 'Sim' },
  { feat: 'Remoção do badge "Edit with Lovable"', free: '—', pro: 'Sim', dsl: 'Sim' },
];

const testimonials = [
  { name: 'Pedro R.', role: 'Fundador de SaaS', text: 'Economizei R$ 1.100 em 12 meses. Uso o Lovable o dia inteiro criando MVPs pros meus clientes.' },
  { name: 'Marina S.', role: 'No-code builder', text: 'Instalei em 3 minutos e tava disparando prompt. Simplesmente funciona. Melhor investimento do ano.' },
  { name: 'Carlos M.', role: 'Freelancer', text: 'Atendo 8 clientes com Lovable. Sem a extensão seria impossível. Paga em 2 semanas de trabalho.' },
];

const faqs = [
  { q: 'É seguro? Não vou ser banido no Lovable?', a: 'A extensão opera do lado do cliente (seu browser) e não modifica a conta do Lovable. Até hoje, zero relatos de banimento entre nossos clientes. A extensão usa APIs já públicas do Lovable.' },
  { q: 'Funciona em Mac, Windows e Linux?', a: 'Sim. É uma extensão Chrome, então funciona em qualquer sistema que rode Chrome, Edge, Brave ou outro navegador baseado em Chromium.' },
  { q: 'Preciso ter conta PRO no Lovable?', a: 'Não. Funciona em conta Free. Você cria o projeto no Lovable (plano grátis) e a extensão libera prompts ilimitados mesmo sem PRO.' },
  { q: 'Como é a entrega da licença?', a: 'Depois do PIX confirmado (leva 5 segundos), enviamos automaticamente via WhatsApp: sua chave de licença + link pra baixar a extensão + vídeo tutorial.' },
  { q: 'O plano Anual de R$ 147 é promo mesmo?', a: 'É. Promo de lançamento. Valor cheio depois é R$ 397/ano. Quem pega na promo paga R$ 147 só no primeiro ano — renovação no preço cheio com 1 mês de aviso prévio.' },
  { q: 'E se o Lovable bloquear?', a: 'A gente acompanha em tempo real e atualiza a extensão quando preciso. Já passamos por 3 atualizações grandes do Lovable e sempre mantivemos o bypass funcionando em até 48h.' },
  { q: 'Funciona pra criar múltiplos projetos?', a: 'Sim. Uma licença libera prompts ilimitados em quantos projetos você criar. O limite é só o tamanho do seu disco.' },
  { q: 'Posso testar antes de comprar?', a: 'Temos o plano de 7 dias por R$ 67 como "teste estendido". Se gostar (vai gostar), depois só upgrade pra mensal ou anual.' },
  { q: 'Quero indicar pra outras pessoas e ganhar comissão. Como faço?', a: 'Temos programa de revendas com comissão de até 70% por venda. Entrada única de R$ 9,90, sem mensalidade. Olha em rev.devsemlimites.site/seja-revenda.' },
];

// =====================================================

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="max-w-[1100px] mx-auto px-6 pt-20 sm:pt-28 pb-20">
        <div className="flex flex-col items-center text-center">
          <Badge tone="success">
            <span className="size-1.5 rounded-full bg-emerald-400 inline-block" />
            Lovable Ilimitado · Licença Vitalícia
          </Badge>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
            Use o Lovable{' '}
            <span className="text-[var(--color-primary)]">sem limite</span>
            <br />
            de prompts.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed">
            A extensão que libera prompts ilimitados no Lovable.dev. Sem consumir créditos da sua
            conta, sem mensalidade. Licença vitalícia por{' '}
            <span className="text-[var(--color-text)] font-medium">R$ 147</span>.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="https://pay.devsemlimites.site" size="lg">
              Comprar licença <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href="#video-demo" size="lg" variant="secondary">
              Ver como funciona
            </ButtonLink>
          </div>
          <div className="mt-6 text-xs text-[var(--color-text-dim)] flex flex-wrap justify-center items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Check size={12} className="text-[var(--color-primary)]" /> Garantia 7 dias
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={12} className="text-[var(--color-primary)]" /> Pagamento único
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={12} className="text-[var(--color-primary)]" /> Atualizações grátis
            </span>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-x-12 -top-8 -bottom-8 bg-[var(--color-primary)]/10 blur-3xl rounded-full" />
          <ExtensionPreview />
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/40">
        <div className="max-w-[1100px] mx-auto px-6 py-10 flex flex-col items-center gap-5">
          <div className="text-xs text-[var(--color-text-dim)] uppercase tracking-widest">
            Mais de 800 desenvolvedores ativos
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 opacity-60">
            <span className="text-sm font-mono">~/lovable</span>
            <span className="text-sm font-mono">~/v0.dev</span>
            <span className="text-sm font-mono">~/bolt.new</span>
            <span className="text-sm font-mono">~/cursor</span>
            <span className="text-sm font-mono">~/replit</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-[1100px] mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14">
          <Badge>Recursos</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            Tudo que o PRO do Lovable te dá — sem mensalidade
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-[var(--color-border)] rounded-lg overflow-hidden">
          {features.map((f, i) => (
            <div key={i} className="bg-[var(--color-bg)] p-7 hover:bg-[var(--color-surface)] transition-colors">
              <div className="h-9 w-9 rounded-md bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center mb-4">
                <f.icon size={16} className="text-[var(--color-primary)]" />
              </div>
              <div className="font-medium mb-1.5">{f.title}</div>
              <div className="text-sm text-[var(--color-text-muted)] leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="max-w-[1100px] mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14">
          <Badge>Como funciona</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            4 passos. 2 minutos. Pronto.
          </h2>
          <p className="mt-3 text-[var(--color-text-muted)]">Do pagamento ao primeiro prompt ilimitado.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <Card key={s.num} className="p-6">
              <div className="text-xs font-mono text-[var(--color-text-dim)] mb-3">{s.num}</div>
              <div className="font-medium mb-1.5">{s.title}</div>
              <div className="text-sm text-[var(--color-text-muted)] leading-relaxed">{s.desc}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="max-w-[900px] mx-auto px-6 py-24">
        <div className="max-w-2xl mb-10">
          <Badge>Comparativo</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            Por que não pagar PRO mensal?
          </h2>
          <p className="mt-3 text-[var(--color-text-muted)]">Faz a conta você mesmo.</p>
        </div>

        <Card>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-[var(--color-text-dim)] border-b border-[var(--color-border)]">
                <th className="font-normal text-left py-3 pl-6">&nbsp;</th>
                <th className="font-normal text-center py-3">Lovable Free</th>
                <th className="font-normal text-center py-3">Lovable Básico</th>
                <th className="font-normal text-center py-3 pr-6 text-[var(--color-primary)]">DSL</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className="border-b border-[var(--color-border)] last:border-0">
                  <td className="py-3 pl-6">{row.feat}</td>
                  <td className="text-center text-[var(--color-text-muted)] font-mono">{row.free}</td>
                  <td className="text-center text-[var(--color-text-muted)] font-mono">{row.pro}</td>
                  <td className="text-center pr-6 text-[var(--color-primary)] font-mono font-medium">{row.dsl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>

      {/* PLANOS */}
      <section id="planos" className="max-w-[1100px] mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <Badge>Preços</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            Pague uma vez. Use pra sempre.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.code}
              className={
                'rounded-lg border p-6 ' +
                (p.popular
                  ? 'border-[var(--color-primary)]/40 bg-[var(--color-surface)]'
                  : 'border-[var(--color-border)] bg-[var(--color-surface)]/50')
              }
            >
              {p.popular && (
                <div className="mb-3">
                  <Badge tone="success">Mais escolhido</Badge>
                </div>
              )}
              <div className="text-sm text-[var(--color-text-muted)]">{p.label}</div>
              <div className="mt-2 flex items-baseline gap-2">
                {p.old && <span className="text-sm text-[var(--color-text-dim)] line-through">R$ {p.old}</span>}
                <span className="text-3xl font-semibold tracking-tight">R$ {p.price}</span>
              </div>
              <div className="mt-1 text-xs text-[var(--color-text-dim)]">{p.desc}</div>

              <ul className="mt-5 space-y-2">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                    <Check size={13} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href="https://pay.devsemlimites.site"
                variant={p.popular ? 'primary' : 'secondary'}
                className="w-full mt-6"
              >
                Comprar
              </ButtonLink>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[var(--color-text-dim)] mt-8">
          Pagamento seguro · PIX e Cartão · Entrega automática em segundos
        </p>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="max-w-[1100px] mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14">
          <Badge>Depoimentos</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">Quem já usa</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-6">
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="size-8 rounded-full bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center text-xs font-medium">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-[var(--color-text-dim)]">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* REVENDA */}
      <section className="max-w-[900px] mx-auto px-6 py-24">
        <Card className="p-10 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/8 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <Badge tone="success">
              <TrendingUp size={11} /> Programa de revendas
            </Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              Quer ganhar comissão recorrente?
            </h2>
            <p className="mt-3 text-[var(--color-text-muted)] max-w-xl">
              Indica DSL e ganha até <span className="text-[var(--color-text)] font-medium">70% de comissão</span> em
              cada cliente. Eles pagam todo mês. Você recebe todo mês.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ButtonLink
                href="https://rev.devsemlimites.site/seja-revenda"
                target="_blank"
                rel="noreferrer"
              >
                Quero ser revenda <ArrowRight size={16} />
              </ButtonLink>
              <span className="text-xs text-[var(--color-text-dim)]">
                Entrada única R$ 9,90 · sem mensalidade
              </span>
            </div>
          </div>
        </Card>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-[800px] mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <Badge>FAQ</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">Dúvidas frequentes</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <Card key={i}>
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium pr-4">{f.q}</span>
                  <ChevronDown
                    size={16}
                    className={
                      'shrink-0 transition-transform ' +
                      (open ? 'rotate-180 text-[var(--color-primary)]' : 'text-[var(--color-text-dim)]')
                    }
                  />
                </button>
                {open && (
                  <div className="px-5 pb-5 text-sm text-[var(--color-text-muted)] leading-relaxed">{f.a}</div>
                )}
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-[900px] mx-auto px-6 py-24">
        <Card className="p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-primary)]/5" />
          <div className="relative">
            <Rocket size={28} className="text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Pronto pra programar sem freio?
            </h2>
            <p className="mt-4 text-[var(--color-text-muted)] max-w-xl mx-auto">
              Menos de 2 minutos pra instalar. Uma vida sem contar prompts.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="https://pay.devsemlimites.site" size="lg">
                <CreditCard size={16} /> Comprar agora por R$ 147
              </ButtonLink>
              <ButtonLink
                href="https://wa.me/5527992660736"
                target="_blank"
                rel="noreferrer"
                size="lg"
                variant="secondary"
              >
                <MessageCircle size={16} /> Tirar dúvida
              </ButtonLink>
            </div>
            <div className="mt-6 text-xs text-[var(--color-text-dim)] flex justify-center items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Lock size={11} /> Pagamento seguro
              </span>
              <span className="flex items-center gap-1.5">
                <Code2 size={11} /> +800 desenvolvedores
              </span>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}
