import { ArrowLink } from './UI'
import { Compass, Mountain, ShipWheel, Users, Waves, Wind } from 'lucide-react'

const cardIcons = { compass: Compass, mountain: Mountain, ship: ShipWheel, users: Users, waves: Waves, wind: Wind }

export function ImageCard({ item, index, compact = false }) {
  const Icon = cardIcons[item.icon]
  const CardTag = item.href ? 'a' : 'article'
  const isExternal = item.href?.startsWith('http')
  const ctaLabel = item.ctaText || (item.href === '/vivencias' ? 'Ver vivências' : item.href === '/passeio-de-veleiro' ? 'Conhecer passeio' : item.href?.includes('wa.me') ? 'Consultar vivência' : 'Saiba mais')

  return (
    <CardTag
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={`image-card ${compact ? 'image-card--compact' : ''}`}
      style={{ backgroundImage: `linear-gradient(180deg, transparent 20%, rgba(0,0,0,.9) 100%), url("${item.image}")` }}
    >
      <div className="image-card__top">
        {Icon && <span className="image-card__icon"><Icon size={20}/></span>}
        <span className="image-card__number">0{index + 1}</span>
      </div>
      <div>
        <h3>{item.title}</h3>
        {item.lead && <p style={{ color: 'var(--lime)', fontWeight: 500 }}>{item.lead}</p>}
        <p>{item.text}</p>
        <span className="arrow-link">
          {ctaLabel}
          <span>→</span>
        </span>
      </div>
    </CardTag>
  )
}

export function TestimonialCard({ item }) {
  return <article className="testimonial-card">
    <div className="testimonial-mark">“</div>
    <blockquote>“{item.quote}”</blockquote>
    <footer><span className="testimonial-initials">{item.author.split(' ').map(word => word[0]).slice(0, 2).join('')}</span><div><strong>{item.author}</strong><span>{item.role}</span></div></footer>
  </article>
}
