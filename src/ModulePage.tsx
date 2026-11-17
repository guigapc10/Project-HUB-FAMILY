import { useState } from 'react'
import {
  ArrowDownLeft, ArrowRight, ArrowUpRight, Baby, CalendarDays, Check, ChevronLeft,
  ChevronRight, CirclePlus, Clock3, Gamepad2, Heart, Home, Sparkles,
  Users, Wallet,
} from 'lucide-react'

type Props = { active: string; onBack: () => void }

const members = [
  { initials: 'MO', name: 'Mariana Oliveira', role: 'Administradora', color: 'rose' },
  { initials: 'RO', name: 'Rafael Oliveira', role: 'Responsável', color: 'blue' },
  { initials: 'SO', name: 'Sofia Oliveira', role: 'Filha', color: 'lilac' },
  { initials: 'PO', name: 'Pedro Oliveira', role: 'Filho', color: 'mint' },
]
const expenses = [
  { title: 'Mercado do bairro', category: 'Alimentação', date: 'Hoje · 10:42', value: 284.5, icon: '🛒' },
  { title: 'Mesada da Sofia', category: 'Educação', date: 'Hoje · 09:15', value: 50, icon: '🎒' },
  { title: 'Conta de internet', category: 'Casa', date: 'Ontem · 18:20', value: 119.9, icon: '⌂' },
  { title: 'Farmácia Central', category: 'Saúde', date: 'Ontem · 14:08', value: 68.35, icon: '✚' },
  { title: 'Padaria da praça', category: 'Alimentação', date: '16 nov · 08:31', value: 32.8, icon: '🥐' },
]
const events = [
  { day: '18', month: 'NOV', title: 'Compromisso da família', detail: '09:30 · Consultório', tag: 'Saúde', tone: 'coral' },
  { day: '20', month: 'NOV', title: 'Jantar em família', detail: '19:00 · Casa da vovó', tag: 'Família', tone: 'lilac' },
  { day: '23', month: 'NOV', title: 'Aniversário do Pedro', detail: '15:00 · Salão do prédio', tag: 'Celebração', tone: 'mint' },
]
const categories = ['Todos', 'Casa', 'Alimentação', 'Educação', 'Saúde']

function PageHeading({ eyebrow, title, detail, action }: { eyebrow: string; title: string; detail: string; action?: string }) {
  return <div className="module-heading"><div><div className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</div><h1>{title}</h1><p>{detail}</p></div>{action && <button className="primary-button"><CirclePlus size={16}/>{action}</button>}</div>
}

function AppModule({ active, onBack }: Props) {
  const [category, setCategory] = useState('Todos')
  const filteredExpenses = category === 'Todos' ? expenses : expenses.filter((item) => item.category === category)

  if (active === 'Família') return <div className="module-content">
    <PageHeading eyebrow="NOSSA FAMÍLIA" title="Quem faz parte" detail="As pessoas que compartilham este espaço com você." action="Convidar familiar" />
    <div className="module-stats three">
      <article><span className="module-stat-icon lilac"><Users size={18}/></span><small>Membros</small><strong>4 pessoas</strong><span>Todos ativos</span></article>
      <article><span className="module-stat-icon mint"><Check size={18}/></span><small>Convites</small><strong>Nenhum pendente</strong><span>Família conectada</span></article>
      <article><span className="module-stat-icon peach"><Heart size={18}/></span><small>Nosso espaço</small><strong>Desde 2024</strong><span>Momentos compartilhados</span></article>
    </div>
    <section className="panel module-panel"><div className="panel-heading"><div><h2>Membros da família</h2><p>Gerencie quem participa do HUB</p></div><button className="text-link">Ver configurações <ArrowRight size={14}/></button></div><div className="member-list">{members.map((m) => <div className="member-row" key={m.initials}><div className={`member-avatar ${m.color}`}>{m.initials}</div><div className="member-info"><strong>{m.name}</strong><span>{m.role}</span></div><span className="online-label"><i/>Ativo</span><button className="member-more" aria-label={`Opções de ${m.name}`}>···</button></div>)}</div></section>
    <div className="module-note"><Sparkles size={16}/><span>Seu espaço familiar é privado. Os dados aqui são apenas demonstrativos nesta versão.</span></div>
  </div>

  if (active === 'Rotina') return <div className="module-content">
    <PageHeading eyebrow="NOSSA ROTINA" title="Agenda da família" detail="Compromissos e momentos importantes em um só lugar." action="Criar evento" />
    <div className="calendar-toolbar"><button className="calendar-switch"><ChevronLeft size={16}/><strong>Novembro 2026</strong><ChevronRight size={16}/></button><div className="calendar-legend"><span><i className="legend-dot income-dot"/>Família</span><span><i className="legend-dot expense-dot"/>Compromissos</span></div></div>
    <section className="panel module-panel"><div className="panel-heading"><div><h2>Próximos eventos</h2><p>3 momentos chegando</p></div><button className="select-button">Este mês <ChevronRight size={14}/></button></div><div className="module-event-list">{events.map((e) => <div className="module-event-row" key={e.title}><div className={`event-date ${e.tone}`}><strong>{e.day}</strong><span>{e.month}</span></div><div className="module-event-copy"><strong>{e.title}</strong><span><Clock3 size={13}/>{e.detail}</span></div><span className="event-tag">{e.tag}</span><ChevronRight className="event-chevron" size={17}/></div>)}</div></section>
    <div className="routine-tip"><CalendarDays size={17}/><span><strong>Dica da família</strong> Adicione eventos para que todos possam se organizar juntos.</span></div>
  </div>

  if (active === 'Saúde') return <div className="module-content">
    <PageHeading eyebrow="CUIDADO EM FAMÍLIA" title="Saúde e bem-estar" detail="Lembretes e cuidados importantes para todos." action="Adicionar lembrete" />
    <div className="module-stats three">
      <article><span className="module-stat-icon mint"><Heart size={18}/></span><small>Lembretes este mês</small><strong>2 lembretes</strong><span>Organize os cuidados</span></article>
      <article><span className="module-stat-icon peach"><CalendarDays size={18}/></span><small>Próximo compromisso</small><strong>18 de novembro</strong><span>09:30 · Agenda familiar</span></article>
      <article><span className="module-stat-icon lilac"><Baby size={18}/></span><small>Bem-estar</small><strong>Rotina em dia</strong><span>Continue cuidando juntos</span></article>
    </div>
    <section className="panel module-panel"><div className="panel-heading"><div><h2>Lembretes da família</h2><p>Informações demonstrativas, sem dados médicos</p></div><button className="text-link">Ver calendário <ArrowRight size={14}/></button></div><div className="care-list"><div className="care-row"><span className="module-stat-icon peach"><CalendarDays size={17}/></span><div><strong>Compromisso de rotina</strong><span>Terça-feira, 18 de novembro · 09:30</span></div><span className="care-status">Próximo</span></div><div className="care-row"><span className="module-stat-icon mint"><Heart size={17}/></span><div><strong>Lembrete de bem-estar</strong><span>Sexta-feira, 28 de novembro</span></div><span className="care-status done"><Check size={12}/>Organizado</span></div></div></section>
    <div className="module-note"><Heart size={16}/><span>Este módulo é apenas uma agenda de lembretes. Não armazena prontuários ou informações médicas.</span></div>
  </div>

  if (active === 'Despesas') return <div className="module-content">
    <PageHeading eyebrow="FINANÇAS DA FAMÍLIA" title="Despesas" detail="Acompanhe os gastos e mantenha tudo organizado." action="Adicionar despesa" />
    <div className="module-stats three">
      <article><span className="module-stat-icon lilac"><Wallet size={18}/></span><small>Saldo disponível</small><strong>R$ 12.480,50</strong><span>Visão demonstrativa</span></article>
      <article><span className="module-stat-icon mint"><ArrowDownLeft size={18}/></span><small>Entradas em novembro</small><strong>R$ 8.750,00</strong><span>+4,6% em relação ao mês anterior</span></article>
      <article><span className="module-stat-icon peach"><ArrowUpRight size={18}/></span><small>Despesas em novembro</small><strong>R$ 5.320,80</strong><span>Dentro do planejado</span></article>
    </div>
    <section className="panel module-panel expense-panel"><div className="panel-heading"><div><h2>Movimentações recentes</h2><p>Dados fictícios para visualização</p></div><button className="select-button">Novembro <ChevronRight size={14}/></button></div><div className="filter-row">{categories.map((item) => <button className={`filter-chip ${category === item ? 'selected' : ''}`} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="expense-list">{filteredExpenses.map((e) => <div className="expense-row" key={e.title}><span className="expense-emoji">{e.icon}</span><div className="expense-copy"><strong>{e.title}</strong><span>{e.date} · {e.category}</span></div><strong className="expense-amount">− R$ {e.value.toLocaleString('pt-BR',{minimumFractionDigits:2})}</strong></div>)}</div></section>
  </div>

  if (active === 'Jogos') return <div className="module-content">
    <PageHeading eyebrow="TEMPO LIVRE" title="Jogos em família" detail="Uma pausa para se divertir juntos." />
    <div className="games-grid"><article className="game-card game-blue"><span className="game-art"><Gamepad2 size={30}/></span><span className="game-kicker">JOGO RÁPIDO</span><h2>Desafio em família</h2><p>Uma rodada de perguntas para descobrir o quanto vocês se conhecem.</p><button>Em breve <ArrowRight size={15}/></button></article><article className="game-card game-peach"><span className="game-art"><Sparkles size={29}/></span><span className="game-kicker">CLÁSSICO DE CARTAS</span><h2>Pife</h2><p>Um espaço imersivo e independente para jogar Pife com a família.</p><button className="disabled-game">Planejado <ArrowRight size={15}/></button><span className="game-badge">EM BREVE</span></article></div>
    <div className="module-note"><Users size={16}/><span>Os jogos serão pensados para momentos compartilhados entre membros da mesma família.</span></div>
  </div>

  if (active === 'Pife') return <div className="pife-stage"><div className="pife-glow"/><button className="pife-back" onClick={onBack}><ChevronLeft size={17}/> Voltar ao HUB</button><div className="pife-content"><span className="pife-emblem"><Sparkles size={25}/></span><span className="eyebrow">HUB FAMÍLIA · JOGOS</span><h1>Pife</h1><p>Uma mesa só de vocês, para jogar, conversar e criar boas lembranças.</p><span className="pife-soon">MÓDULO PLANEJADO</span></div><div className="pife-table-art"><div className="playing-card card-one">♠<b>A</b></div><div className="playing-card card-two">♥<b>7</b></div><div className="playing-card card-three">♣<b>Q</b></div></div></div>

  return <div className="module-content"><PageHeading eyebrow="HUB FAMÍLIA" title={active || 'Ajuda'} detail="Um espaço para deixar o dia a dia da família mais leve."/><section className="panel module-panel"><div className="panel-heading"><div><h2>Como podemos ajudar?</h2><p>Estamos preparando novos recursos para vocês.</p></div></div><div className="help-module-content"><Home size={22}/><strong>Seu HUB está tomando forma</strong><span>Novos recursos chegam aos poucos. Enquanto isso, explore os módulos da família.</span><button className="primary-button" onClick={onBack}>Voltar ao início <ArrowRight size={15}/></button></div></section></div>
}

export default AppModule
