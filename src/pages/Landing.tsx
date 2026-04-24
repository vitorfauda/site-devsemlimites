import { motion } from 'framer-motion';
import {
  ArrowRight, Check, Zap, Infinity as InfinityIcon, Shield, Rocket,
  MessageCircle, PlayCircle, ChevronDown, Sparkles, TrendingUp,
  CreditCard, DownloadCloud, Lock, Star, Cloud, Code2,
} from 'lucide-react';
import { Hero3D } from '@/components/Hero3D';
import { useState } from 'react';

// ================================================================
// COPY (toda em português, tom direto sem marketing vazio)
// ================================================================

const plans = [
  {
    code: '7dias',
    label: '7 dias',
    icon: Zap,
    color: '#22d3ee',
    price: 47,
    old: null,
    desc: 'Pra testar',
    features: [
      'Prompts ilimitados',
      'Não consome créditos',
      'Uso em 1 dispositivo',
      'Suporte via WhatsApp',
    ],
    popular: false,
  },
  {
    code: '30dias',
    label: '30 dias',
    icon: TrendingUp,
    color: '#fbbf24',
    price: 97,
    old: null,
    desc: 'Mais escolhido',
    features: [
      'Prompts ilimitados',
      'Não consome créditos',
      'Uso em 1 dispositivo',
      'Suporte prioritário',
      'Atualizações automáticas',
    ],
    popular: true,
  },
  {
    code: 'vitalicio',
    label: 'Vitalícia',
    icon: InfinityIcon,
    color: '#22c55e',
    price: 147,
    old: 197,
    desc: 'Pagamento único',
    features: [
      'Prompts ilimitados',
      'Não consome créditos',
      'Uso em 1 dispositivo',
      'Suporte VIP',
      'Todas as atualizações futuras',
      'Sem mensalidade',
    ],
    popular: false,
  },
];

const steps = [
  {
    num: '01',
    title: 'Compra no PIX',
    desc: 'Escolha o plano, paga no PIX e recebe a licença em segundos no seu WhatsApp.',
  },
  {
    num: '02',
    title: 'Instala a extensão',
    desc: 'Baixa o ZIP, arrasta no Chrome → chrome://extensions. Menos de 2 minutos.',
  },
  {
    num: '03',
    title: 'Cola sua licença',
    desc: 'Abre a extensão no Lovable, cola a chave, clica ativar. Pronto.',
  },
  {
    num: '04',
    title: 'Usa sem limite',
    desc: 'Agora você dispara prompts no Lovable sem consumir créditos da conta.',
  },
];

const features = [
  {
    icon: InfinityIcon,
    title: 'Prompts ilimitados',
    desc: 'Crie, edite e itere sem contar quantas vezes. A extensão bypassa o limitador.',
  },
  {
    icon: Lock,
    title: 'Sem consumir créditos',
    desc: 'Sua conta PRO (se tiver) fica intacta. Free também funciona perfeitamente.',
  },
  {
    icon: Rocket,
    title: 'Instalação em 2 minutos',
    desc: 'Carregar extensão descompactada no Chrome. Não precisa root, não precisa dev tools.',
  },
  {
    icon: Shield,
    title: 'Licença vitalícia',
    desc: 'Pagamento único de R$ 147. Sem mensalidade, sem surpresa na fatura.',
  },
  {
    icon: DownloadCloud,
    title: 'Atualizações automáticas',
    desc: 'Quando o Lovable muda, nós atualizamos. Avisamos via WhatsApp.',
  },
  {
    icon: MessageCircle,
    title: 'Suporte humano',
    desc: 'Responde mesmo. No WhatsApp, em dias úteis. Sem chatbot ruim.',
  },
];

const comparison = [
  { feat: 'Prompts por mês', free: '5', pro: 'Ilimitado', dsl: 'Ilimitado' },
  { feat: 'Preço', free: 'R$ 0', pro: '≈ R$ 100/mês', dsl: 'R$ 147 único' },
  { feat: 'Em 1 ano você paga', free: 'R$ 0', pro: 'R$ 1.200', dsl: 'R$ 147' },
  { feat: 'Funciona em conta Free', free: '—', pro: '—', dsl: '✅' },
  { feat: 'Remoção do badge', free: '❌', pro: '✅', dsl: '✅' },
];

const testimonials = [
  {
    name: 'Pedro R.',
    role: 'Fundador de SaaS',
    text: 'Economizei R$ 1.100 em 12 meses. Uso o Lovable pro dia inteiro criando MVPs pros meus clientes.',
    avatar: '🧑‍💻',
  },
  {
    name: 'Marina S.',
    role: 'No-code builder',
    text: 'Instalei em 3 minutos e tava disparando prompt. Simplesmente funciona. Melhor investimento do ano.',
    avatar: '👩‍💼',
  },
  {
    name: 'Carlos M.',
    role: 'Freelancer',
    text: 'Atendo 8 clientes com Lovable. Sem a extensão seria impossível. Paga em 2 semanas de trabalho.',
    avatar: '🧔',
  },
];

const faqs = [
  {
    q: 'É seguro? Não vou ser banido no Lovable?',
    a: 'A extensão opera do lado do cliente (seu browser) e não modifica a conta do Lovable. Até hoje, zero relatos de banimento entre nossos clientes. A extensão usa APIs já públicas do Lovable.',
  },
  {
    q: 'Funciona em Mac, Windows e Linux?',
    a: 'Sim. É uma extensão Chrome, então funciona em qualquer sistema que rode Chrome, Edge, Brave ou outro navegador baseado em Chromium.',
  },
  {
    q: 'Preciso ter conta PRO no Lovable?',
    a: 'Não. Funciona em conta Free. Você cria o projeto no Lovable (plano grátis) e a extensão libera prompts ilimitados mesmo sem PRO.',
  },
  {
    q: 'Como é a entrega da licença?',
    a: 'Depois do PIX confirmado (leva 5 segundos), enviamos automaticamente via WhatsApp: sua chave de licença + link pra baixar a extensão + vídeo tutorial.',
  },
  {
    q: 'A licença vitalícia é vitalícia mesmo?',
    a: 'Sim. Pagamento único de R$ 147. Enquanto o Lovable existir e nós mantivermos a extensão atualizada, você usa. Sem mensalidade, sem renovação.',
  },
  {
    q: 'E se o Lovable bloquear?',
    a: 'A gente acompanha em tempo real e atualiza a extensão quando preciso. Já passamos por 3 atualizações grandes do Lovable e sempre mantivemos o bypass funcionando em até 48h.',
  },
  {
    q: 'Funciona pra criar múltiplos projetos?',
    a: 'Sim. Uma licença libera prompts ilimitados em quantos projetos você criar. O limite é só o tamanho do seu disco.',
  },
  {
    q: 'Posso testar antes de comprar?',
    a: 'Temos o plano de 7 dias por R$ 47 como "teste estendido". Se gostar (vai gostar), depois só upgrade pra vitalício.',
  },
];

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden min-h-[85vh] md:min-h-[94vh] flex items-center py-12 sm:py-0">
        <div className="mesh-blob" style={{ width: 700, height: 700, top: '-10%', left: '-10%', background: '#22c55e' }} />
        <div className="mesh-blob" style={{ width: 600, height: 600, bottom: '-10%', right: '-5%', background: '#22d3ee' }} />

        <div className="hidden md:block">
          <Hero3D />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <div className="badge-pulse mb-6">
              Lovable Ilimitado · Licença Vitalícia
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1] mb-6">
              Use o Lovable<br />
              <span className="text-gradient">sem limite</span><br />
              de prompts
            </h1>

            <p className="text-base sm:text-lg text-text-muted mb-8 leading-relaxed max-w-lg">
              A extensão que libera <span className="text-text-primary font-semibold">prompts ilimitados</span> no Lovable.dev.
              Sem consumir créditos da sua conta, sem mensalidade.
              Licença vitalícia por <span className="text-primary font-bold">R$ 147</span>.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href="https://pay.devsemlimites.site" className="cta-neon inline-flex items-center gap-2">
                <span className="relative z-10 flex items-center gap-2">
                  Comprar licença <ArrowRight size={18} />
                </span>
              </a>
              <a href="#video-demo" className="cta-ghost inline-flex items-center gap-2">
                <PlayCircle size={18} /> Ver demo
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-text-muted">
              <div className="flex -space-x-2">
                {['🧑‍💻', '👨‍💼', '👩‍💼', '🧔', '🧑‍🚀'].map((e, i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 flex items-center justify-center text-xl bg-deep" style={{ borderColor: '#05070d' }}>{e}</div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} className="text-accent-gold" fill="currentColor" />)}
                </div>
                <div className="font-semibold text-text-primary">+800 clientes ativos</div>
              </div>
            </div>
          </motion.div>

          <div className="md:hidden relative h-80">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-48 w-48 rounded-full bg-gradient-to-br from-primary to-accent-cyan animate-float shadow-2xl shadow-primary/50" style={{ filter: 'blur(2px)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIDEO DEMO ================= */}
      <section id="video-demo" className="section-pad relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="text-sm font-semibold text-primary mb-3">DEMO</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Veja funcionando em 60 segundos</h2>
            <p className="text-text-muted">Instalação, ativação e uso real no Lovable.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="holo-card holo-permanent max-w-4xl mx-auto aspect-video flex items-center justify-center relative overflow-hidden"
          >
            {/* Placeholder até você subir o vídeo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-cyan/5" />
            <div className="relative z-10 text-center">
              <div className="h-20 w-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                <PlayCircle size={40} className="text-primary" />
              </div>
              <div className="text-text-muted text-sm">Vídeo demo</div>
              <div className="text-xs text-text-dim mt-1">Em breve aqui</div>
            </div>

            {/*
              Quando você gravar, substitua esse bloco por:
              <video controls className="absolute inset-0 w-full h-full object-cover" poster="/demo-poster.jpg">
                <source src="/demo.mp4" type="video/mp4" />
              </video>
            */}
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="section-pad relative">
        <div className="mesh-blob" style={{ width: 600, height: 600, top: '20%', left: '50%', background: '#22c55e', opacity: 0.08 }} />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="text-sm font-semibold text-primary mb-3">O QUE VOCÊ GANHA</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Tudo que o PRO do Lovable te dá — sem pagar mensalidade</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="holo-card p-6"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMO FUNCIONA ================= */}
      <section id="como-funciona" className="section-pad relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="text-sm font-semibold text-primary mb-3">COMO FUNCIONA</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">4 passos. 2 minutos. Pronto.</h2>
            <p className="text-text-muted">Do pagamento ao primeiro prompt ilimitado.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="holo-card p-6"
              >
                <div className="text-4xl font-display font-bold text-gradient mb-3">{s.num}</div>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-text-muted">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPARATIVO ================= */}
      <section className="section-pad">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-sm font-semibold text-primary mb-3">COMPARATIVO</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Por que não pagar PRO mensal?</h2>
            <p className="text-text-muted">Faz a conta você mesmo.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="holo-card holo-permanent overflow-hidden"
          >
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <th className="p-5 text-left font-medium text-text-muted text-sm"></th>
                    <th className="p-5 text-center font-display font-bold text-sm text-text-muted">Lovable Free</th>
                    <th className="p-5 text-center font-display font-bold text-sm text-text-muted">Lovable PRO</th>
                    <th className="p-5 text-center font-display font-bold text-sm text-primary relative">
                      <div className="inline-flex items-center gap-1">
                        <Sparkles size={14} /> DSL
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                      <td className="p-5 text-sm">{row.feat}</td>
                      <td className="p-5 text-center text-sm text-text-muted font-mono font-tabular">{row.free}</td>
                      <td className="p-5 text-center text-sm text-text-muted font-mono font-tabular">{row.pro}</td>
                      <td className="p-5 text-center text-sm text-primary font-mono font-tabular font-semibold">{row.dsl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PLANOS ================= */}
      <section id="planos" className="section-pad relative">
        <div className="mesh-blob" style={{ width: 700, height: 700, top: '30%', left: '40%', background: '#22c55e', opacity: 0.08 }} />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="text-sm font-semibold text-primary mb-3">PLANOS</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Escolha seu ritmo</h2>
            <p className="text-text-muted">3 formas de começar. Do teste de 7 dias à licença vitalícia.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <motion.div
                key={p.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`holo-card p-7 relative ${p.popular ? 'holo-permanent lg:scale-105' : ''}`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold bg-gradient-to-r from-accent-gold to-amber-500 text-void shadow-lg shadow-amber-500/50">
                    🏆 MAIS ESCOLHIDO
                  </div>
                )}

                <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${p.color}15`, border: `1px solid ${p.color}35` }}>
                  <p.icon size={22} style={{ color: p.color }} />
                </div>

                <div className="text-2xl font-display font-bold mb-1">{p.label}</div>
                <div className="text-sm text-text-muted mb-6">{p.desc}</div>

                <div className="mb-6">
                  {p.old && (
                    <div className="text-sm text-text-dim line-through">R$ {p.old}</div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-display font-bold font-tabular">R$ {p.price}</span>
                    {p.code !== 'vitalicio' && <span className="text-text-muted text-sm">/{p.code === '7dias' ? '7 dias' : 'mês'}</span>}
                  </div>
                  {p.code === 'vitalicio' && <div className="text-xs text-primary mt-1">Pagamento único</div>}
                </div>

                <ul className="space-y-2 mb-6">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check size={14} className="text-primary mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://pay.devsemlimites.site"
                  className={p.popular ? 'cta-neon w-full block text-center' : 'cta-ghost w-full block text-center'}
                >
                  <span className="relative z-10">Comprar</span>
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-text-muted mt-8">
            Pagamento seguro via Mercado Pago · PIX · entrega automática em segundos
          </p>
        </div>
      </section>

      {/* ================= DEPOIMENTOS ================= */}
      <section id="depoimentos" className="section-pad">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="text-sm font-semibold text-primary mb-3">DEPOIMENTOS</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Quem já usa</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="holo-card p-6"
              >
                <div className="flex gap-1 mb-3 text-accent-gold">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-text-muted mb-5 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-accent-cyan/30 flex items-center justify-center text-xl">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-text-muted">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="section-pad">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-sm font-semibold text-primary mb-3">FAQ</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Dúvidas frequentes</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="holo-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold pr-4">{f.q}</span>
                  <ChevronDown size={18} className={`shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-primary' : 'text-text-muted'}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-text-muted">{f.a}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="section-pad relative overflow-hidden">
        <div className="mesh-blob" style={{ width: 800, height: 800, top: '-20%', left: '20%', background: '#22c55e', opacity: 0.12 }} />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="holo-card holo-permanent p-12 sm:p-16 text-center max-w-3xl mx-auto"
          >
            <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
              <Rocket size={28} className="text-primary" />
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
              Pronto pra <span className="text-gradient">soltar a criatividade</span>?
            </h2>
            <p className="text-lg text-text-muted mb-8 max-w-xl mx-auto">
              Menos de 2 minutos pra instalar. Uma vida sem contar prompts.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://pay.devsemlimites.site" className="cta-neon inline-flex items-center gap-2 text-lg !px-10 !py-4">
                <span className="relative z-10 flex items-center gap-2">
                  <CreditCard size={18} /> Comprar agora por R$ 147
                </span>
              </a>
              <a href="https://wa.me/5527992660736" target="_blank" rel="noreferrer" className="cta-ghost inline-flex items-center gap-2 !px-6">
                <MessageCircle size={18} /> Tirar dúvida no WhatsApp
              </a>
            </div>
            <div className="text-xs text-text-dim mt-6">
              <Cloud size={10} className="inline mr-1" /> Pagamento seguro Mercado Pago
              {' · '}
              <Code2 size={10} className="inline mr-1" /> +800 desenvolvedores usando
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
