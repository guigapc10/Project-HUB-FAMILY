import { useState } from 'react'
import AppModule from './ModulePage'
import {
  Activity, ArrowDownLeft, ArrowRight, ArrowUpRight, Baby, Bell, CalendarDays,
  ChevronDown, ChevronLeft, ChevronRight, CircleHelp, Coins, CreditCard,
  Gamepad2, Heart, Home, Menu, MoreHorizontal, PiggyBank, Plus, Search,
  ShoppingBasket, Sparkles, Users, Wallet, X,
} from 'lucide-react'
import {
  Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts'

const navGroups = [
  { title: 'VISÃO GERAL', items: [{ label: 'Início', icon: Home }] },
  { title: 'NOSSA FAMÍLIA', items: [
    { label: 'Família', icon: Users }, { label: 'Rotina', icon: CalendarDays },
    { label: 'Saúde', icon: Heart }, { label: 'Despesas', icon: Wallet },
  ] },
  { title: 'TEMPO LIVRE', items: [
    { label: 'Jogos', icon: Gamepad2 }, { label: 'Pife', icon: Sparkles, tag: 'EM BREVE' },
  ] },
]
const chartData = [
  { month: 'Jan', receitas: 7800, despesas: 5100 }, { month: 'Fev', receitas: 8200, despesas: 5800 },
  { month: 'Mar', receitas: 7600, despesas: 5400 }, { month: 'Abr', receitas: 9100, despesas: 6200 },
  { month: 'Mai', receitas: 8700, despesas: 5900 }, { month: 'Jun', receitas: 9800, despesas: 6400 },
]
const activity = [
  { icon: ShoppingBasket, tint: 'peach', title: 'Mercado do bairro', detail: 'Hoje, 10:42 · Alimentação', value: '− R$ 284,50' },
  { icon: Wallet, tint: 'mint', title: 'Mesada da Sofia', detail: 'Hoje, 09:15 · Transferência', value: '− R$ 50,00' },
  { icon: CreditCard, tint: 'blue', title: 'Conta de internet', detail: 'Ontem, 18:20 · Casa', value: '− R$ 119,90' },
]
const events = [
  { day: '18', month: 'NOV', title: 'Consulta da Helena', detail: '09:30 · Pediatra' },
  { day: '20', month: 'NOV', title: 'Jantar em família', detail: '19:00 · Casa da vovó' },
  { day: '23', month: 'NOV', title: 'Aniversário do Pedro', detail: '15:00 · Salão do prédio' },
]

function App() {
  const [active, setActive] = useState('Início')
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = active === 'Início'

  return (
    <div className="app-shell">
      {mobileOpen && <button className="mobile-scrim" aria-label="Fechar menu" onClick={() => setMobileOpen(false)} />}
      <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
        <div className="brand-row">
          <div className="brand-mark"><Home size={19} strokeWidth={2.5} /></div>
          <div className="brand-name">HUB <span>Família</span></div>
          <button className="icon-button mobile-close" aria-label="Fechar menu" onClick={() => setMobileOpen(false)}><X size={19} /></button>
        </div>
        <button className="family-switcher">
          <div className="family-avatar"><Users size={18} /></div>
          <span><strong>Família Oliveira</strong><small>Plano família</small></span>
          <ChevronDown size={16} className="switch-chevron" />
        </button>
        <nav className="side-nav">
          {navGroups.map((group) => <div className="nav-group" key={group.title}>
            <div className="nav-heading">{group.title}</div>
            {group.items.map(({ label, icon: Icon, tag }) => <button
              key={label} onClick={() => { setActive(label); setMobileOpen(false) }}
              className={`nav-item ${active === label ? 'nav-active' : ''} ${tag ? 'nav-coming' : ''}`}>
              <Icon size={18} strokeWidth={1.8} /><span>{label}</span>{tag && <small>{tag}</small>}
            </button>)}
          </div>)}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><div className="help-icon"><CircleHelp size={17} /></div><strong>Precisa de ajuda?</strong><span>Estamos aqui para vocês.</span><button onClick={() => setActive('Ajuda')}>Acessar central <ArrowRight size={14} /></button></div>
          <button className="profile-row"><div className="profile-avatar">MO</div><span><strong>Mariana Oliveira</strong><small>Administradora</small></span><MoreHorizontal size={19} /></button>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button className="icon-button mobile-menu" aria-label="Abrir menu" onClick={() => setMobileOpen(true)}><Menu size={21} /></button>
          <div className="breadcrumb">HUB Família <ChevronRight size={14} /> <strong>{active}</strong></div>
          <div className="top-actions"><div className="date-chip"><CalendarDays size={15} /><span>Segunda-feira, 17 de novembro</span></div><button className="icon-button search-button" aria-label="Buscar"><Search size={19} /></button><button className="icon-button notification-button" aria-label="Notificações"><Bell size={19} /><i /></button><div className="top-avatar">MO</div></div>
        </header>

        {isHome ? <div className="page-content">
          <div className="welcome-row"><div><div className="eyebrow"><span className="eyebrow-dot" /> SEGUNDA-FEIRA, 17 DE NOVEMBRO DE 2025</div><h1>Bom dia, Mariana <span className="wave">✦</span></h1><p>Um resumo do que está acontecendo com a sua família.</p></div><button className="primary-button" onClick={() => setActive('Família')}><Plus size={17} /> Convidar familiar</button></div>

          <section className="stats-grid">
            <article className="stat-card balance-card"><div className="stat-top"><div className="stat-label"><span className="stat-icon navy"><Wallet size={17} /></span> Saldo da família</div><button className="card-menu" aria-label="Mais opções"><MoreHorizontal size={19} /></button></div><div className="stat-value">R$ 12.480<span>,50</span></div><div className="stat-foot"><span className="trend positive"><ArrowUpRight size={14} /> 8,2%</span><span>em relação ao mês passado</span></div><div className="balance-decoration" /></article>
            <article className="stat-card"><div className="stat-top"><div className="stat-label"><span className="stat-icon green"><ArrowDownLeft size={17} /></span> Entradas do mês</div><button className="card-menu" aria-label="Mais opções"><MoreHorizontal size={19} /></button></div><div className="stat-value">R$ 8.750<span>,00</span></div><div className="stat-foot"><span className="trend positive"><ArrowUpRight size={14} /> 4,6%</span><span>em relação ao mês passado</span></div><div className="mini-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></article>
            <article className="stat-card"><div className="stat-top"><div className="stat-label"><span className="stat-icon orange"><ArrowUpRight size={17} /></span> Saídas do mês</div><button className="card-menu" aria-label="Mais opções"><MoreHorizontal size={19} /></button></div><div className="stat-value">R$ 5.320<span>,80</span></div><div className="stat-foot"><span className="trend negative"><ArrowUpRight size={14} /> 2,1%</span><span>em relação ao mês passado</span></div><div className="mini-bars orange-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></article>
            <article className="stat-card"><div className="stat-top"><div className="stat-label"><span className="stat-icon purple"><PiggyBank size={17} /></span> Meta da família</div><button className="card-menu" aria-label="Mais opções"><MoreHorizontal size={19} /></button></div><div className="stat-value">68<span className="percent">%</span></div><div className="goal-track"><i /></div><div className="stat-foot goal-foot"><span>Viagem de férias</span><strong>R$ 3.400 de R$ 5.000</strong></div></article>
          </section>

          <section className="middle-grid">
            <article className="panel chart-panel"><div className="panel-heading"><div><h2>Visão financeira</h2><p>Acompanhe entradas e saídas da família</p></div><button className="select-button">Últimos 6 meses <ChevronDown size={15} /></button></div><div className="chart-legend"><span><i className="legend-dot income-dot" /> Entradas</span><span><i className="legend-dot expense-dot" /> Saídas</span><span className="chart-total">Saldo positivo <strong>+ R$ 3.429,20</strong></span></div><div className="chart-wrap"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chartData} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}><defs><linearGradient id="incomeFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#319d79" stopOpacity={0.16}/><stop offset="100%" stopColor="#319d79" stopOpacity={0}/></linearGradient><linearGradient id="expenseFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ec9b72" stopOpacity={0.14}/><stop offset="100%" stopColor="#ec9b72" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#edf0f3" vertical={false} /><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#8a93a4', fontSize: 12 }} dy={9} /><YAxis axisLine={false} tickLine={false} tick={{ fill: '#a0a7b4', fontSize: 11 }} tickFormatter={(v) => `R$${v / 1000}k`} /><Tooltip formatter={(v) => `R$ ${Number(v).toLocaleString('pt-BR')}`} contentStyle={{ borderRadius: 12, borderColor: '#edf0f3', fontSize: 12 }} /><Area type="monotone" dataKey="receitas" stroke="#319d79" strokeWidth={2.5} fill="url(#incomeFill)" /><Area type="monotone" dataKey="despesas" stroke="#e69a71" strokeWidth={2.5} fill="url(#expenseFill)" /></AreaChart></ResponsiveContainer></div></article>
            <article className="panel activity-panel"><div className="panel-heading"><div><h2>Atividade recente</h2><p>Movimentações da família</p></div><button className="text-link" onClick={() => setActive('Despesas')}>Ver todas <ArrowRight size={14} /></button></div><div className="activity-list">{activity.map((item) => <div className="activity-row" key={item.title}><div className={`activity-icon ${item.tint}`}><item.icon size={17} /></div><div className="activity-copy"><strong>{item.title}</strong><span>{item.detail}</span></div><strong className="activity-value">{item.value}</strong></div>)}</div><button className="all-activity" onClick={() => setActive('Despesas')}>Ver todas as movimentações <ArrowRight size={15} /></button></article>
          </section>

          <section className="bottom-grid">
            <article className="panel events-panel"><div className="panel-heading"><div><h2>Próximos eventos</h2><p>Momentos especiais chegando</p></div><button className="text-link" onClick={() => setActive('Rotina')}>Ver calendário <ArrowRight size={14} /></button></div><div className="event-list">{events.map((event) => <div className="event-row" key={event.title}><div className="event-date"><strong>{event.day}</strong><span>{event.month}</span></div><div className="event-copy"><strong>{event.title}</strong><span>{event.detail}</span></div><ChevronRight size={17} className="event-chevron" /></div>)}</div></article>
            <article className="panel shortcuts-panel"><div className="panel-heading"><div><h2>Um toque rápido</h2><p>O que vamos fazer hoje?</p></div></div><div className="shortcut-grid"><button onClick={() => setActive('Despesas')}><span className="shortcut-icon lilac"><Coins size={19} /></span><strong>Adicionar<br/>despesa</strong><ArrowRight size={14} /></button><button onClick={() => setActive('Rotina')}><span className="shortcut-icon peach"><CalendarDays size={19} /></span><strong>Criar<br/>evento</strong><ArrowRight size={14} /></button><button onClick={() => setActive('Jogos')}><span className="shortcut-icon mint"><Gamepad2 size={19} /></span><strong>Jogar com<br/>a família</strong><ArrowRight size={14} /></button><button onClick={() => setActive('Família')}><span className="shortcut-icon sky"><Baby size={19} /></span><strong>Ver nossa<br/>família</strong><ArrowRight size={14} /></button></div></article>
          </section>
          <footer className="page-footer"><span>Feito com carinho para a sua família <Heart size={13} fill="currentColor" /></span><span>HUB Família <b>·</b> Versão 1.0</span></footer>
        </div> : <AppModule active={active} onBack={() => setActive('Início')} />}</main>
    </div>
  )
}

export default App
