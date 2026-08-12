import { useEffect } from 'react'
import Lenis from 'lenis'
import { BrainCircuit, UsersRound, Sparkles, Fingerprint, Check, MapPin, Mouse } from 'lucide-react'
import { cssVariables } from './theme'
import { Header } from './components/Header'
import { ArrowLink, Button, Eyebrow, SectionHeading } from './components/UI'
import { ImageCard, TestimonialCard } from './components/Cards'
import { clients, experiences, methodology, reasons, solutions, testimonials } from './data/content'

function App() {
  useEffect(() => {
    Object.entries(cssVariables).forEach(([key, value]) => document.documentElement.style.setProperty(key, value))
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      syncTouch: false,
      overscroll: true,
      anchors: { offset: -78, duration: 1.2 },
    })
    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    const selectors = [
      '.hero__content > *', '.section-heading > *', '.manifesto__grid > *',
      '.problem .split > *', '.client-row img', '.method-grid article',
      '.card-grid .image-card', '.experience-grid .image-card',
      '.journey__content > *', '.difference-card',
      '.testimonial-card', '.beyond .split > *', '.nationwide .split > *',
      '.contact__grid > *', '.footer__grid > *',
    ]
    const elements = [...document.querySelectorAll(selectors.join(','))]
    elements.forEach((element, index) => {
      element.classList.add('scroll-reveal')
      element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`)
    })
    document.documentElement.classList.add('reveal-ready')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' })

    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => elements.forEach(element => observer.observe(element)))
    })
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      document.documentElement.classList.remove('reveal-ready')
      elements.forEach(element => {
        element.classList.remove('scroll-reveal', 'is-visible')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [])

  return <>
    <Header />
    <main>
      <section className="hero" id="inicio">
        <div className="hero__media" />
        <div className="hero__shade" />
        <div className="hero__content wrap">
          <Eyebrow dark>Treinamentos corporativos de alto impacto</Eyebrow>
          <h1>Experiências desenhadas para <em>transformar seu time</em></h1>
          <p>Jornadas de aprendizagem feitas para a realidade da sua empresa.</p>
          <Button>Conheça a OutBox</Button>
        </div>
        <div className="hero__stamp" aria-hidden="true"><span>OUTSIDE<br/>THE BOX</span><b>↘</b></div>
        <div className="scroll-hint"><Mouse size={18}/><span>Role para explorar</span></div>
      </section>

      <section className="manifesto section" id="sobre">
        <div className="wrap manifesto__grid">
          <div><Eyebrow>A OutBox</Eyebrow><h2>Acreditamos que a transformação acontece quando as pessoas vivem aquilo que precisam aprender.</h2></div>
          <div className="prose"><p>A OutBox nasceu da convicção de que desenvolver pessoas vai muito além de transmitir conhecimento. Mudanças reais acontecem quando criamos experiências capazes de despertar consciência, fortalecer relações e transformar a forma como as pessoas se conectam consigo mesmas, com os outros e com o trabalho.</p><p>Por isso, não desenhamos apenas treinamentos. Desenhamos experiências que tornam a aprendizagem natural, significativa e memorável.</p><p>Independentemente do formato — ao ar livre, em uma sala ou em um ambiente digital — buscamos criar contextos onde as pessoas possam sair do piloto automático, participar por inteiro e construir conhecimento juntas.</p><strong>É nesse espaço que a transformação acontece.</strong></div>
        </div>
      </section>

      <section className="problem section section--dark">
        <div className="wrap split"><div className="problem__image"/><div><Eyebrow dark>Uma nova forma de aprender</Eyebrow><h2>Cansado de treinamentos corporativos previsíveis e ineficazes?</h2><p>Slides intermináveis e conteúdos genéricos dificilmente geram mudanças reais.</p><p>Na OutBox, substituímos modelos tradicionais por experiências de aprendizagem cuidadosamente desenhadas que despertam engajamento, fortalecem equipes e criam aprendizados que permanecem muito depois do evento.</p><Button>Transforme seu time</Button></div></div>
      </section>

      <section className="clients section">
        <div className="wrap"><SectionHeading eyebrow="Quem confia" title="Empresas que estão transformando seus times" copy="Grandes organizações já escolheram a OutBox para desenvolver lideranças, fortalecer equipes e construir culturas de alta performance." align="center"/><div className="client-row">{clients.map(([name, file]) => <img key={name} src={`/assets/${file}`} alt={name}/>)}</div></div>
      </section>

      <section className="method section section--dark" id="metodologia">
        <div className="wrap"><SectionHeading eyebrow="Nossa forma de fazer" title="Metodologia 4D OutBox" copy="Toda experiência da OutBox é desenhada para responder às grandes questões do desenvolvimento humano nas organizações. Combinamos quatro dimensões que atuam de forma integrada para transformar experiências em mudanças reais." light/>
        <div className="method-grid">{methodology.map(item => <article key={item.number}><div className="method-icon"><MethodIcon name={item.icon}/><span>{item.number}</span></div><h3>{item.title}</h3><strong>{item.lead}</strong><p>{item.text}</p></article>)}</div>
        <p className="method__closing">Quando essas quatro dimensões trabalham juntas, a aprendizagem deixa de ser algo que as pessoas recebem e passa a ser algo que elas vivem.</p></div>
      </section>

      <section className="section" id="solucoes"><div className="wrap"><SectionHeading eyebrow="O que fazemos" title="Soluções para desenvolver pessoas e fortalecer organizações"/><div className="card-grid">{solutions.map((item, i) => <ImageCard item={item} index={i} key={item.title}/>)}</div></div></section>

      <section className="experiences section section--soft" id="experiencias"><div className="wrap"><SectionHeading eyebrow="Experiências OutBox" title="Experiências desenvolvidas para diferentes desafios" copy="Conheça alguns dos programas que ajudam empresas a desenvolver equipes de forma prática, dinâmica e memorável."/><div className="experience-grid">{experiences.map((item, i) => <ImageCard compact item={item} index={i} key={item.title}/>)}</div></div></section>

      <section className="journey section"><div className="journey__image"/><div className="wrap journey__content"><Eyebrow dark>Do desafio à mudança</Eyebrow><h2>Transformamos desafios em jornadas de aprendizagem</h2><p>Cada jornada nasce dos desafios reais da sua organização e é desenhada para unir aprendizagem, emoção e prática, promovendo mudanças reais no comportamento das equipes.</p><p>Porque desenvolver pessoas vai muito além de transmitir conhecimento.</p><Button>Construa sua jornada</Button></div></section>

      <section className="reasons section"><div className="wrap"><SectionHeading eyebrow="Diferenciais OutBox" title="Por que empresas escolhem a OutBox?"/><div className="difference-list">{reasons.map((item, i) => <article className="difference-card" key={item.title} style={{ backgroundImage: `url("${item.image}")` }}><div className="difference-card__shade"/><div className="difference-card__content"><span>0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>

      <section className="testimonials section section--dark" id="depoimentos"><div className="wrap"><SectionHeading eyebrow="Histórias reais" title="O que nossos clientes dizem" copy="Os melhores resultados são aqueles percebidos por quem vive a experiência." light align="center"/><div className="testimonial-grid">{testimonials.map(item => <TestimonialCard item={item} key={item.author}/>)}</div></div></section>

      <section className="beyond section"><div className="wrap split"><div><Eyebrow>Muito além</Eyebrow><h2>Muito além de um treinamento.</h2></div><div className="prose"><p>Desenhamos experiências de aprendizagem que conectam pessoas, desenvolvem comportamentos e fortalecem culturas organizacionais.</p><p>Cada jornada combina aprendizagem ativa, desafios reais e reflexão estruturada para gerar aplicação prática e resultados duradouros.</p><div className="benefit-chips">{['Aprendizagem ativa','Desenvolvimento comportamental','Aplicação prática','Resultados mensuráveis'].map(item => <span key={item}><Check size={14}/>{item}</span>)}</div><ArrowLink href="#form">Descubra uma nova forma de desenvolver pessoas</ArrowLink></div></div></section>

      <section className="nationwide section"><div className="wrap split"><div><Eyebrow>Em todo o Brasil</Eyebrow><h2>Levamos experiências transformadoras para qualquer lugar.</h2><p>Atendemos empresas de todos os portes em todo o território nacional, adaptando cada projeto à realidade da organização e ao contexto de cada equipe.</p><p>Onde houver pessoas dispostas a evoluir, estaremos prontos para criar experiências que geram resultados.</p><Button>Fale com um especialista</Button></div><div className="nationwide__visual"><img src="/assets/brasil.webp" alt="Atuação da OutBox em todo o Brasil"/><span><MapPin size={18}/> Todo o território nacional</span></div></div></section>

      <section className="contact section" id="form"><div className="wrap contact__grid"><div><Eyebrow>Vamos conversar</Eyebrow><h2>Vamos transformar<br/><em>seu time?</em></h2><p>Conte para nossa equipe quais são os desafios da sua empresa. Juntos, construiremos uma experiência personalizada para desenvolver pessoas, fortalecer equipes e impulsionar resultados.</p></div><ContactForm/></div></section>
    </main>
    <Footer />
  </>
}

const methodIcons = { brain: BrainCircuit, users: UsersRound, sparkles: Sparkles, fingerprint: Fingerprint }
function MethodIcon({ name }) { const Icon = methodIcons[name]; return <Icon size={27} strokeWidth={1.6}/> }

function ContactForm() {
  const fields = [['Nome completo','Digite seu nome','text'],['E-mail corporativo','exemplo@empresa.com.br','email'],['Telefone / WhatsApp','(00) 00000-0000','tel'],['Empresa','Nome da empresa','text']]
  return <form className="contact-form" onSubmit={e => e.preventDefault()}>{fields.map(([label, placeholder, type]) => <label key={label}>{label}<input type={type} placeholder={placeholder}/></label>)}<label className="wide">Quantidade de colaboradores *<select defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Até 10 colaboradores</option><option>11 a 50 colaboradores</option><option>51 a 100 colaboradores</option><option>101 a 500 colaboradores</option><option>Mais de 500 colaboradores</option></select></label><fieldset className="wide"><legend>Sua empresa já realizou treinamentos de liderança ou desenvolvimento de equipes? *</legend><div>{['Sim','Não','Em andamento'].map(v => <label key={v}><input type="radio" name="training"/> {v}</label>)}</div></fieldset><label className="wide">Como podemos ajudar?<textarea rows="4" placeholder="Conte um pouco sobre o desafio da sua empresa, os objetivos do treinamento ou qualquer informação que possa nos ajudar a preparar uma proposta personalizada."/></label><button className="submit" type="submit">Quero receber uma proposta personalizada <span>↗</span></button></form>
}

function Footer() { return <footer className="footer"><div className="wrap footer__grid"><div><img src="/assets/logo.svg" alt="OutBox"/><p>Treinamentos Corporativos<br/>de Alto Impacto</p></div><div><h3>Contatos</h3><p>São Paulo - SP<br/><a href="tel:+5511912372202">(11) 91237 2202</a></p><p>Florianópolis - SC<br/><a href="tel:+5548999912972">(48) 99991 2972</a></p><p>Curitiba - PR<br/><a href="tel:+5541992452202">(41) 99245 2202</a></p></div><div><h3>Saiba mais</h3><a href="#solucoes">Treinamento de Lideranças</a><a href="#experiencias">Team Building</a><a href="#solucoes">Saúde Mental e NR1</a></div></div><div className="wrap footer__bottom"><span>Copyright 2025 OutBox Treinamento</span><span>Todos os direitos reservados</span></div></footer> }

export default App
