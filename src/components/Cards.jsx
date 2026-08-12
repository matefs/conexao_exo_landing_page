import { ArrowLink } from './UI'

export function ImageCard({ item, index, compact = false }) {
  return <article className={`image-card ${compact ? 'image-card--compact' : ''}`} style={{ backgroundImage: `linear-gradient(180deg, transparent 20%, rgba(0,0,0,.9) 100%), url("${item.image}")` }}>
    <span className="image-card__number">0{index + 1}</span>
    <div><h3>{item.title}</h3><p>{item.text}</p><ArrowLink>Saiba mais</ArrowLink></div>
  </article>
}

export function TestimonialCard({ item }) {
  return <article className="testimonial-card">
    <div className="testimonial-mark">“</div>
    <blockquote>“{item.quote}”</blockquote>
    <footer><span className="testimonial-initials">{item.author.split(' ').map(word => word[0]).slice(0, 2).join('')}</span><div><strong>{item.author}</strong><span>{item.role}</span></div></footer>
  </article>
}
