import { useEffect } from 'react'
import Lenis from 'lenis'
import { Check, MapPin, Mouse } from 'lucide-react'
import { cssVariables } from './theme'
import { Header } from './components/Header'
import { ArrowLink, Button, Eyebrow, SectionHeading } from './components/UI'
import { ImageCard, TestimonialCard } from './components/Cards'
import { audiences, categories, experiences, faqs, reviews, steps, whatsappUrl } from './data/content'

const experienceLink = name => `https://wa.me/5548991109531?text=${encodeURIComponent(`Olá! Encontrei a Conexão EXO pelo site e quero saber mais sobre ${name}.`)}`

function App() {
  useEffect(() => {
    Object.entries(cssVariables).forEach(([key, value]) => document.documentElement.style.setProperty(key, value))
    const lenis = new Lenis({ autoRaf: true, lerp: 0.075, smoothWheel: true, wheelMultiplier: 0.85, anchors: { duration: 1.2 } })
    window.lenis = lenis
    return () => {
      lenis.destroy()
      delete window.lenis
    }
  }, [])

  useEffect(() => {
    const selectors = [
      '.hero__content > *', '.section-heading > *', '.manifesto__grid > *',
      '.problem .split > *', '.card-grid .image-card', '.experience-grid .image-card',
      '.journey__content > *', '.difference-card', '.testimonial-card',
      '.beyond .split > *', '.nationwide .split > *', '.faq details',
      '.contact__grid > *', '.footer__grid > *',
    ]
    const elements = [...document.querySelectorAll(selectors.join(','))]
    elements.forEach((element, index) => {
      element.classList.add('scroll-reveal')
      element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`)
    })
    document.documentElement.classList.add('reveal-ready')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12, rootMargin: '0px 0px -7% 0px' })
    const frame = requestAnimationFrame(() => elements.forEach(element => observer.observe(element)))
    return () => { cancelAnimationFrame(frame); observer.disconnect(); document.documentElement.classList.remove('reveal-ready') }
  }, [])

  return <>
    <Header />
    <main>
      <section className="hero" id="inicio">
        <div className="hero__media" />
        <div className="hero__shade" />
        <div className="hero__content wrap">
          <Eyebrow dark>Turismo de Natureza em Florianópolis e Região</Eyebrow>
          <h1>Você está vivendo — ou apenas <em>sobrevivendo</em> até o próximo boleto?</h1>
          <p>Trabalho, tela, trânsito, boleto. Mais um ano passa e o que você viveu de verdade? O tempo não volta.</p>
          <div className="hero__actions"><Button href={whatsappUrl}>Quero parar de adiar minha vida</Button><Button href="#vivencias" variant="outline">Escolher como quero viver</Button></div>
        </div>
        <div className="hero__stamp" aria-hidden="true"><span>CONEXÃO<br/>EXO</span><b>∞</b></div>
        <div className="scroll-hint"><Mouse size={18}/><span>Role para explorar</span></div>
      </section>

      <section className="manifesto section" id="sobre"><div className="wrap manifesto__grid"><div><Eyebrow>Conexão EXO</Eyebrow><h2>Você já perdeu tempo demais vivendo sempre o mesmo dia.</h2></div><div className="prose"><p>Você acorda, resolve problemas, cumpre horários e chega ao fim do dia sem ter vivido nada que gostaria de guardar. Quando percebe, a semana acabou. Depois o mês. Depois mais um ano.</p><p>Se continuar esperando a agenda esvaziar ou a coragem aparecer sozinha, sua vida continuará empurrada para uma data que não existe.</p><strong>A Conexão EXO interrompe esse ciclo com experiências no mar, no ar e na terra.</strong><br/><ArrowLink href={whatsappUrl}>Quero quebrar esse ciclo</ArrowLink></div></div></section>

      <section className="problem section section--dark"><div className="wrap split"><div className="problem__image"/><div><Eyebrow dark>O tempo não volta</Eyebrow><h2>Planejar viver não cria memória.</h2><p>Você não precisa mudar a vida inteira hoje. Precisa apenas parar de entregar todos os seus dias ao automático.</p><p>Conte o que gostaria de viver. A equipe entende o seu momento e ajuda a encontrar uma experiência possível em Florianópolis.</p><Button href={whatsappUrl}>Falar com a Conexão EXO</Button></div></div></section>

      <section className="section" id="vivencias"><div className="wrap"><SectionHeading eyebrow="Escolha sua conexão" title="Qual elemento chama você hoje?" copy="Você pode continuar olhando a vida dos outros por uma tela. Ou escolher como quer sentir Florianópolis na própria pele."/><div className="card-grid">{categories.slice(0,3).map((item, index) => <ImageCard item={item} index={index} key={item.title}/>)}</div><div className="single-feature"><ImageCard item={categories[3]} index={3}/></div></div></section>

      <section className="experiences section section--soft"><div className="wrap"><SectionHeading eyebrow="Por onde começar" title="Experiências para viver Floripa de verdade." copy="Algumas possibilidades para transformar um dia comum em uma nova memória."/><div className="experience-grid">{experiences.slice(0,5).map((item, index) => <ImageCard compact item={{...item, href: experienceLink(item.message)}} index={index} key={item.title}/>)}</div><div className="section-cta"><ArrowLink href="/vivencias">Consultar todas as vivências</ArrowLink></div></div></section>

      <section className="journey section" id="veleiro"><div className="journey__image"/><div className="wrap journey__content"><Eyebrow dark>Veleiro Crevette</Eyebrow><h2>O tempo muda quando você navega.</h2><p>Até cinco pessoas navegando pela Baía Norte de Florianópolis, com privacidade e roteiro combinado.</p><div className="benefit-chips sailing-chips">{['Até 5 pessoas','Baía Norte','Rota de 4 horas','Rota de 8 horas','Roteiro personalizado'].map(item => <span key={item}><Check size={14}/>{item}</span>)}</div><Button href="/passeio-de-veleiro">Conhecer o passeio</Button></div></section>

      <section className="reasons section"><div className="wrap"><SectionHeading eyebrow="Do seu jeito" title="Há muitas formas de viver uma nova conexão."/><div className="difference-list">{audiences.slice(0,4).map(([title,text], index) => <article className={`difference-card ${index === 1 ? 'difference-card--family' : ''}`} key={title} style={{backgroundImage:`url('${['/assets/experiencias/familia-caiaque.jpg','/assets/experiencias/familia-natureza.jpg','/assets/experiencias/amigos-trilha.jpg','/assets/floripa/ilha-do-frances.jpg'][index]}')`}}><div className="difference-card__shade"/><div className="difference-card__content"><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section className="testimonials section section--dark" id="avaliacoes"><div className="wrap"><SectionHeading eyebrow="Quem já viveu" title="Experiências contadas por quem esteve aqui." copy="Avaliações reais de pessoas que escolheram viver Florianópolis com a Conexão EXO." light align="center"/><div className="testimonial-grid">{reviews.slice(0,3).map(item => <TestimonialCard item={{quote:item.text,author:item.author,role:'Avaliação no Google'}} key={item.author}/>)}</div></div></section>

      <section className="beyond section"><div className="wrap split"><div><Eyebrow>Da vontade à vivência</Eyebrow><h2>Sua próxima experiência começa com uma conversa.</h2></div><div className="prose steps-list">{steps.map(([number,title,text]) => <article className="lightspot" key={number}><span>{number}</span><div><strong>{title}</strong><p>{text}</p></div></article>)}<ArrowLink href={whatsappUrl}>Consultar uma experiência</ArrowLink></div></div></section>

      <section className="nationwide section"><div className="wrap split"><div><Eyebrow>No coração de Jurerê</Eyebrow><h2>Sua conexão começa em Florianópolis.</h2><p>A Conexão EXO está perto do mar e de muitas paisagens que tornam o norte da ilha especial para viver ao ar livre.</p><address><MapPin size={20}/><span>Alameda César Nascimento, 646<br/>Jurerê — Florianópolis — SC<br/>CEP 88053-500</span></address><Button href={whatsappUrl}>Chamar no WhatsApp</Button></div><div className="nationwide__visual map-floripa"><img src="/assets/floripa/floripa%20ilha%20mapa.jpg" alt="Mapa da Ilha de Florianópolis em destaque"/></div></div></section>

      <section className="faq section section--dark"><div className="wrap faq-grid"><SectionHeading eyebrow="Antes de viver" title="Dúvidas frequentes." light/><div>{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="contact section" id="contato"><div className="wrap contact__grid"><div><Eyebrow>Seu próximo momento começa aqui</Eyebrow><h2>Quantos dias você ainda vai esperar para viver a vida que merece?</h2><p>Conte o que gostaria de viver, quando estará em Florianópolis e com quem quer compartilhar esse momento.</p></div><div className="contact-callout"><p>Descubra uma experiência que combine com o seu momento e aproveite Florianópolis de um jeito especial.</p><h3>A próxima memória pode começar agora.</h3><Button href={whatsappUrl} variant="dark">Vou viver agora</Button><small>Fale com a equipe para consultar opções, datas e disponibilidade.</small></div></div></section>
    </main>
    <Footer />
  </>
}

function Footer(){return <footer className="footer"><div className="wrap footer__grid"><div><a className="footer-brand" href="#inicio">CONEXÃO <b>EXO</b><span>∞</span></a><p>Turismo de Natureza em Florianópolis e Região.<br/>Vivências no Mar, no Ar e na Terra.</p><img className="cadastur-logo" src="/assets/cadastur%20logo.jpeg" alt="Cadastur — Fazendo o turismo legal"/></div><div><h3>Contato</h3><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: +55 (48) 99110-9531</a><a href="https://instagram.com/conexaoexo" target="_blank" rel="noreferrer">@conexaoexo</a></div><div><h3>Onde estamos</h3><p>Alameda César Nascimento, 646<br/>Jurerê — Florianópolis — SC<br/>CEP 88053-500</p></div></div><div className="wrap footer__bottom"><span>© Conexão EXO. Todos os direitos reservados.</span><span>CNPJ 42.766.551/0001-00</span></div></footer>}

export default App
