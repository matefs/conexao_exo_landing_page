import { useEffect } from 'react'
import Lenis from 'lenis'
import { ArrowUpRight, Mountain, ShipWheel, Waves, Wind } from 'lucide-react'
import { Button, Eyebrow } from './components/UI'
import { cssVariables } from './theme'

const whatsapp = activity => `https://wa.me/5548991109531?text=${encodeURIComponent(`Olá! Encontrei a Conexão EXO pelo site e quero saber mais sobre ${activity}.`)}`

const groups = [
  { title: 'Água', icon: Waves, copy: 'Experiências para remar, explorar o mar e conhecer cachoeiras da região.', image: '/assets/experiencias/familia-caiaque.jpg', activities: ['Stand up paddle em Jurerê', 'Expedição de stand up paddle à Ilha do Francês', 'Caiaque', 'Rafting', 'Mergulho', 'Rapel na Cachoeira da Ressurreição', 'Rapel na Cachoeira Rio do Salto'] },
  { title: 'Terra', icon: Mountain, copy: 'Caminhos para se movimentar, respirar e descobrir a natureza de perto.', image: '/assets/experiencias/amigos-trilha.jpg', activities: ['Trilha do Forte até a Praia da Daniela', 'Trilha da Praia do Gravatá', 'Trilha da Lagoinha do Leste', 'Trilha do Cambirela', 'Trilha da Costa da Lagoa', 'Arvorismo', 'Arvorismo kids'] },
  { title: 'Ar', icon: Wind, copy: 'Florianópolis vista do alto em experiências acompanhadas por profissionais.', image: '/assets/experiencias/voo-duplo-parapente.jpg', activities: ['Voo duplo de parapente', 'Salto duplo de paraquedismo'] },
  { title: 'Navegação', icon: ShipWheel, copy: 'Uma alternativa para aproveitar o litoral com conforto e outro ponto de vista.', image: '/assets/floripa/ilha-do-frances.jpg', activities: ['Passeio de lancha'] },
]

export default function ExperiencesPage() {
  useEffect(() => {
    Object.entries(cssVariables).forEach(([key, value]) => document.documentElement.style.setProperty(key, value))
    document.title = 'Vivências em Florianópolis | Conexão EXO'
    const lenis = new Lenis({ autoRaf: true, lerp: 0.075, smoothWheel: true, wheelMultiplier: 0.85, anchors: { duration: 1.1 } })
    return () => lenis.destroy()
  }, [])

  return <div className="all-experiences-page">
    <header className="sail-header">
      <div className="wrap sail-header__inner">
        <a className="footer-brand" href="/" aria-label="Conexão EXO — página inicial">CONEXÃO <b>EXO</b><span>∞</span></a>
        <a className="sail-header__back" href="/">Voltar ao site</a>
        <Button href={whatsapp('as vivências disponíveis')}>Consultar</Button>
      </div>
    </header>

    <main>
      <section className="experiences-hero">
        <div className="experiences-hero__media" />
        <div className="experiences-hero__shade" />
        <div className="wrap experiences-hero__content">
          <Eyebrow dark>Conexão EXO · Florianópolis</Eyebrow>
          <h1>Escolha como você quer viver a <em>natureza.</em></h1>
          <p>Água, terra, ar e navegação: encontre uma experiência para sair do automático e conhecer a Ilha da Magia de verdade.</p>
          <a className="sail-text-link" href="#atividades">Ver todas as atividades</a>
        </div>
      </section>

      <section className="experiences-catalog section" id="atividades">
        <div className="wrap">
          <div className="experiences-catalog__heading"><Eyebrow>Todas as vivências</Eyebrow><h2>Há mais de um jeito de se conectar.</h2><p>Escolha uma atividade e fale com a equipe para confirmar local, data, disponibilidade e condições de participação.</p></div>
          <div className="activity-groups">{groups.map(({ title, icon: Icon, copy, image, activities }) => <article className="activity-group" key={title}>
            <div className="activity-group__image" style={{ backgroundImage: `linear-gradient(0deg, rgba(3,20,30,.72), transparent 70%), url('${image}')` }}><Icon size={34}/><h3>{title}</h3><p>{copy}</p></div>
            <div className="activity-group__list">{activities.map(activity => <a href={whatsapp(activity)} target="_blank" rel="noreferrer" key={activity}><span>{activity}</span><ArrowUpRight size={18}/></a>)}</div>
          </article>)}</div>
        </div>
      </section>

      <section className="experiences-note section">
        <div className="wrap experiences-note__inner"><div><Eyebrow dark>Antes de reservar</Eyebrow><h2>A equipe ajuda você a encontrar a experiência certa.</h2></div><div><p>As atividades ao ar livre dependem de disponibilidade, clima e condições específicas. Idade mínima, preparo físico, acessibilidade, equipamentos, duração e ponto de encontro variam conforme a vivência.</p><Button href={whatsapp('as vivências disponíveis')}>Falar com a equipe</Button></div></div>
      </section>
    </main>

    <footer className="sail-footer"><div className="wrap"><a className="footer-brand" href="/">CONEXÃO <b>EXO</b><span>∞</span></a><img src="/assets/cadastur%20logo.jpeg" alt="Cadastur — Fazendo o turismo legal"/><p>© Conexão EXO. Todos os direitos reservados.</p></div></footer>
  </div>
}
