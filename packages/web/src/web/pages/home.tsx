import { useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowRight, Check, ChevronDown, CircuitBoard, Code2, Cpu, Globe, Laptop, Mail, MapPin, Menu, Monitor, Phone, ShieldCheck, Wrench, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const whatsapp = 'https://wa.me/5545991468649';
const directLink = `${whatsapp}?text=${encodeURIComponent('Olá, Ags Solutions! Gostaria de saber mais sobre os serviços.')}`;
const services = [
  { number: '01', icon: Laptop, title: 'Computadores & notebooks', description: 'Seu equipamento com o desempenho que você precisa para trabalhar, estudar e ir além.', items: ['Manutenção preventiva e corretiva', 'Formatação e instalação de sistemas', 'Limpeza, upgrades e otimização'], value: 'Manutenção de computadores e notebooks', label: 'Cuidar do meu equipamento' },
  { number: '02', icon: ShieldCheck, title: 'Sistemas de segurança', description: 'Mais tranquilidade para você. Mais proteção para sua casa ou sua empresa.', items: ['Instalação de câmeras e CFTV', 'Configuração de acesso remoto', 'Manutenção de sistemas de segurança'], value: 'Sistemas de segurança', label: 'Proteger meu espaço' },
  { number: '03', icon: Code2, title: 'Criação de sites', description: 'Sua empresa conectada a novas oportunidades com uma presença digital profissional.', items: ['Sites institucionais e landing pages', 'Design responsivo para todos os dispositivos', 'Performance e experiência do usuário'], value: 'Criação de sites', label: 'Tirar meu site do papel' },
];

function Brand() {
  return <a className="brand" href="#inicio" aria-label="Ags Solutions — início"><span className="brand-symbol"><CircuitBoard size={35} strokeWidth={1.5}/></span><span className="brand-text">AGS<span>SOLUTIONS</span></span></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [messageLink, setMessageLink] = useState('');

  function selectService(value: string) {
    setService(value);
    setSubmitted(false);
  }

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `Olá, Ags Solutions! Gostaria de solicitar um orçamento.\n\nNome: ${data.get('name')}\nWhatsApp: ${data.get('phone')}\nServiço: ${service}\n\nSobre o que preciso:\n${data.get('description')}`;
    const link = `${whatsapp}?text=${encodeURIComponent(text)}`;
    setMessageLink(link);
    window.open(link, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  }

  return <>
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Menu principal">
          <a href="#inicio" className="nav-active" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Nossos serviços</a>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
        <a className="button header-cta" href={directLink} target="_blank" rel="noreferrer"><FaWhatsapp size={17}/> Fale com a gente <ArrowUpRight size={16}/></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true"/>
        <div className="hero-image"><img src="/images/hardware.webp" alt="Componentes internos de um computador com iluminação azul" fetchPriority="high"/><div className="image-fade"/></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> TECNOLOGIA EM FOZ DO IGUAÇU.</div>
            <h1>Seu mundo mais<br/><span>conectado.</span><br/>Seu dia mais simples.</h1>
            <p>Do cuidado com seu computador à segurança do seu espaço e à presença digital da sua empresa.<br className="desktop-break"/> A solução certa está aqui.</p>
            <div className="hero-actions"><a href="#contato" className="button">Solicitar orçamento <ArrowUpRight size={19}/></a><a href="#servicos" className="button button-outline">Conhecer serviços <ArrowRight size={18}/></a></div>
            <div className="hero-assurances"><span><Check/> Atendimento personalizado</span><span><Check/> Soluções para você e sua empresa</span></div>
          </div>
          <div className="tech-label"><span className="tech-label-icon"><Cpu size={24}/></span><div>Tecnologia em boas mãos.<span>CUIDADO EM CADA DETALHE</span></div><span className="status-dot"/></div>
          <div className="image-coordinate" aria-hidden="true">AGS / TECH SOLUTIONS <span>01 — 03</span></div>
        </div>
      </section>

      <div className="expertise-strip"><div className="container expertise-inner"><span className="strip-label">UM PARCEIRO. VÁRIAS SOLUÇÕES.</span><span><Monitor/> Informática</span><i/><span><ShieldCheck/> Segurança</span><i/><span><Globe/> Desenvolvimento web</span><a href="#servicos" aria-label="Ver nossos serviços"><ArrowRight size={21}/></a></div></div>

      <section className="services section-pad" id="servicos">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow"><span className="tiny-line"/> O QUE FAZEMOS</div><h2>Soluções completas.<br/><span>Sem complicação.</span></h2></div><p>Cuidamos da tecnologia para você focar no que<br className="desktop-break"/> realmente importa.</p></div>
          <div className="service-grid">{services.map(item => <article className="service-card" key={item.number}>
            <div className="service-top"><span className="service-icon"><item.icon size={29} strokeWidth={1.5}/></span><span className="service-number">/{item.number}</span></div>
            <h3>{item.title}</h3><p>{item.description}</p>
            <ul>{item.items.map(text => <li key={text}><Check size={14}/>{text}</li>)}</ul>
            <a href="#contato" onClick={() => selectService(item.value)}>{item.label}<ArrowUpRight size={19}/></a>
          </article>)}</div>
          <div className="service-note"><Wrench size={17}/><p>Não sabe qual solução precisa? <a href={directLink} target="_blank" rel="noreferrer">Converse com a gente. Vamos te ajudar.</a></p><ArrowUpRight size={17}/></div>
        </div>
      </section>

      <section className="process-section" id="como-funciona"><div className="container">
        <div className="section-heading"><div><div className="eyebrow"><span className="tiny-line"/> DO PRIMEIRO CONTATO À SOLUÇÃO</div><h2>Tecnologia é complexa.<br/><span>Resolver não precisa ser.</span></h2></div><a className="text-link" href="#contato">Vamos conversar <ArrowUpRight size={19}/></a></div>
        <div className="process-grid">{[{n:'01', title:'Conte o que você precisa', text:'Fale com a gente e explique seu problema ou a ideia que quer colocar em prática.'}, {n:'02',title:'Encontre a solução certa',text:'Entendemos sua necessidade e preparamos uma proposta clara para você avaliar.'}, {n:'03',title:'Deixe a tecnologia com a gente',text:'Com o orçamento aprovado, cuidamos dos detalhes para colocar tudo para funcionar.'}].map(step => <div className="process-step" key={step.n}><div className="process-track"><span>{step.n}</span><div/><ArrowRight size={17}/></div><h3>{step.title}</h3><p>{step.text}</p></div>)}</div>
      </div></section>

      <section className="contact-section section-pad" id="contato"><div className="container contact-grid">
        <div className="contact-copy"><div className="eyebrow"><span className="tiny-line"/> VAMOS RESOLVER?</div><h2>O próximo passo<br/>começa com uma<br/><span>boa conversa.</span></h2><p>Conte o que você precisa. Vamos encontrar juntos a melhor solução para você ou sua empresa.</p>
          <a className="contact-method" href={directLink} target="_blank" rel="noreferrer"><span className="contact-icon"><FaWhatsapp size={23}/></span><span><small>FALE PELO WHATSAPP</small>(45) 99146-8649</span><ArrowUpRight size={19}/></a>
          <a className="contact-method" href="mailto:ag290331@gmail.com"><span className="contact-icon"><Mail size={23}/></span><span><small>PREFERE E-MAIL?</small>ag290331@gmail.com</span><ArrowUpRight size={19}/></a>
          <div className="contact-method"><span className="contact-icon"><MapPin size={23}/></span><span><small>NOSSA CIDADE</small>Foz do Iguaçu — PR</span></div>
          <div className="contact-footnote"><ShieldCheck size={16}/> Atendimento direto, humano e sem complicação.</div>
        </div>
        <form className="quote-form" onSubmit={submitQuote}>
          <div className="form-heading"><h3>Vamos falar do seu projeto?</h3><p>Preencha os campos para solicitar seu orçamento.</p></div>
          <label htmlFor="name">Seu nome <span>*</span></label><input id="name" name="name" aria-label="Seu nome" placeholder="Como podemos te chamar?" required maxLength={100} autoComplete="name" onChange={() => setSubmitted(false)}/>
          <label htmlFor="phone">WhatsApp <span>*</span></label><div className="input-icon"><Phone size={16}/><input id="phone" name="phone" aria-label="WhatsApp" placeholder="(45) 99999-9999" type="tel" autoComplete="tel" required minLength={10} title="Informe um telefone válido com DDD" maxLength={20} onChange={() => setSubmitted(false)}/></div>
          <label htmlFor="service">Do que você precisa? <span>*</span></label><div className="select-wrap"><select id="service" name="service" value={service} required onChange={e => selectService(e.target.value)}><option value="" disabled>Selecione um serviço</option>{services.map(s => <option key={s.value} value={s.value}>{s.value}</option>)}<option value="Outra solução">Outra solução / preciso de orientação</option></select><ChevronDown size={17}/></div>
          <label htmlFor="description">Conte um pouco mais <span>*</span></label><textarea id="description" name="description" aria-label="Conte um pouco mais" rows={3} placeholder="Descreva o problema ou a sua ideia..." required maxLength={2000} onChange={() => setSubmitted(false)}/>
          <button className="button form-submit" type="submit"><FaWhatsapp size={19}/> Solicitar orçamento pelo WhatsApp <ArrowUpRight size={19}/></button>
          <p className="privacy-note">Você será direcionado ao WhatsApp com a mensagem pronta.<br/>Seus dados não são armazenados neste site.</p>
          {submitted && <output className="form-success" aria-live="polite"><Check size={18}/><span>Seu pedido está pronto! Confirme o envio no WhatsApp. <a href={messageLink} target="_blank" rel="noreferrer">Se não abriu, clique aqui.</a></span></output>}
        </form>
      </div></section>
    </main>
    <footer className="footer"><div className="container footer-top"><Brand/><p>Conectando tecnologia.<br/>Simplificando a sua vida.</p><a href="#inicio">Voltar ao topo <ArrowUpRight size={17}/></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Ags Solutions. Todos os direitos reservados.</span><span>Informática <i/> Segurança <i/> Sites</span></div></footer>
    <a href={directLink} className="floating-whatsapp" target="_blank" rel="noreferrer" aria-label="Conversar com a Ags Solutions pelo WhatsApp"><FaWhatsapp size={26}/></a>
  </>;
}