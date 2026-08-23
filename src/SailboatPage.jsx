import { useEffect } from 'react'
import Lenis from 'lenis'
import { Anchor, Check, Compass, MapPin, ShieldCheck, ShipWheel, Users, Waves } from 'lucide-react'
import { Button, Eyebrow } from './components/UI'
import { cssVariables } from './theme'

const bookingUrl = `https://wa.me/5548991109531?text=${encodeURIComponent('Olá! Vim pelo site da Conexão EXO e quero reservar o passeio privativo de veleiro pela Baía Norte de Florianópolis.')}`

const benefits = [
  [Users, 'Passeio privativo', 'Uma experiência exclusiva para até quatro pessoas.'],
  [Waves, 'Paradas para banho', 'Tempo para aproveitar o mar durante o roteiro.'],
  [Compass, 'Vistas panorâmicas', 'A Baía Norte vista de uma perspectiva inesquecível.'],
  [ShieldCheck, 'Conforto e segurança', 'Veleiro confortável para navegar com tranquilidade.'],
]

const route = ['Santo Antônio de Lisboa', 'Jurerê', 'Praia da Daniela', 'Ilha do Francês', 'Fortalezas Históricas']

export default function SailboatPage() {
  useEffect(() => {
    Object.entries(cssVariables).forEach(([key, value]) => document.documentElement.style.setProperty(key, value))
    document.title = 'Passeio de Veleiro em Florianópolis | Conexão EXO'
    const lenis = new Lenis({ autoRaf: true, lerp: 0.075, smoothWheel: true, wheelMultiplier: 0.85 })
    return () => lenis.destroy()
  }, [])

  return <div className="sail-page">
    <header className="sail-header">
      <div className="wrap sail-header__inner">
        <a className="footer-brand" href="/" aria-label="Conexão EXO — página inicial"><img className="exo-logo" src="/assets/logo-exo-horiz.png" alt="Conexão EXO" /></a>
        <a className="sail-header__back" href="/">Voltar ao site</a>
        <Button href={bookingUrl}>Reservar passeio</Button>
      </div>
    </header>

    <main>
      <section className="sail-hero" id="inicio">
        <div className="sail-hero__media" />
        <div className="sail-hero__shade" />
        <div className="wrap sail-hero__content">
          <Eyebrow dark>Conexão EXO · Turismo de Natureza</Eyebrow>
          <p className="sail-hero__label">Passeio de veleiro · Florianópolis</p>
          <h1>Viva a Baía Norte de um jeito <em>inesquecível.</em></h1>
          <p className="sail-hero__lead"><MapPin size={19}/> Embarque em Santo Antônio de Lisboa</p>
          <div className="sail-hero__actions"><Button href={bookingUrl}>Reserve seu passeio</Button><a href="#roteiro" className="sail-text-link">Conhecer o roteiro</a></div>
        </div>
      </section>

      <section className="sail-intro section compass-bg">
        <div className="wrap sail-intro__grid">
          <div><Eyebrow>Uma experiência só sua</Eyebrow><h2>Navegue com conforto, privacidade e momentos autênticos.</h2></div>
          <div className="sail-intro__copy"><p>Um passeio privativo para até quatro pessoas, com paradas para banho e vistas panorâmicas da Baía Norte.</p><p>Conheça fortalezas históricas, Jurerê, Praia da Daniela e Ilha do Francês em uma experiência feita para ser lembrada.</p></div>
        </div>
        <div className="wrap sail-benefits">{benefits.map(([Icon,title,text]) => <article key={title}><Icon size={28}/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="sail-offer section">
        <div className="wrap sail-offer__grid">
          <div className="sail-offer__visual"><span><ShipWheel size={22}/> Baía Norte</span></div>
          <div className="sail-offer__card">
            <span className="sail-offer__deadline">Passeio sob consulta</span>
            <p>Uma experiência privativa</p>
            <h2>Até 4 pessoas</h2>
            <ul><li><Check size={17}/> Veleiro confortável e seguro</li><li><Check size={17}/> Belezas da Baía Norte</li><li><Check size={17}/> Conforto e privacidade durante a navegação</li></ul>
            <Button href={bookingUrl}>Quero reservar</Button>
            <small>Passeio sujeito a disponibilidade e condições de navegação e climáticas.</small>
          </div>
        </div>
      </section>

      <section className="sail-route section compass-bg" id="roteiro">
        <div className="wrap">
          <Eyebrow>Roteiro e destaques</Eyebrow>
          <div className="sail-route__heading"><h2>Da história ao mar aberto.</h2><p>Cinco pontos especiais em uma travessia pela Baía Norte de Florianópolis.</p></div>
          <div className="sail-route__list">{route.map((place,index) => <article key={place}><span>0{index + 1}</span><h3>{place}</h3><Anchor size={22}/></article>)}</div>
        </div>
      </section>

      <section className="sail-final section compass-bg">
        <div className="wrap sail-final__inner">
          <ShipWheel size={46}/>
          <p>Vagas limitadas</p>
          <h2>Reserve seu passeio!</h2>
          <Button href={bookingUrl} variant="dark">Chamar no WhatsApp</Button>
          <div className="sail-final__links"><a href="https://instagram.com/conexaoexo" target="_blank" rel="noreferrer">Instagram: @conexaoexo</a><a href="https://www.conexaoexo.com.br">Site: www.conexaoexo.com.br</a></div>
          <strong>Navegue. Descubra. Conecte-se.</strong>
        </div>
      </section>
    </main>

    <footer className="sail-footer"><div className="wrap"><a className="footer-brand" href="/" aria-label="Conexão EXO — página inicial"><img className="exo-logo" src="/assets/logo-exo-horiz.png" alt="Conexão EXO" /></a><img src="/assets/logo-cadastur-trans.png" alt="Cadastur — Fazendo o turismo legal"/><p>© Conexão EXO. Todos os direitos reservados.</p></div></footer>
  </div>
}
