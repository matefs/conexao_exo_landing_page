import { ArrowRight, ArrowUpRight } from 'lucide-react'

export function Button({ children, href = '#form', variant = 'lime' }) {
  const external = href.startsWith('http')
  return <a className={`button button--${variant}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}<ArrowUpRight size={17} aria-hidden="true" /></a>
}

export function Eyebrow({ children, dark = false }) {
  return <p className={`eyebrow ${dark ? 'eyebrow--dark' : ''}`}><span />{children}</p>
}

export function SectionHeading({ eyebrow, title, copy, light = false, align = 'left' }) {
  return <header className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}>
    {eyebrow && <Eyebrow dark={light}>{eyebrow}</Eyebrow>}
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </header>
}

export function ArrowLink({ children, href = '#form' }) {
  return <a className="arrow-link" href={href}>{children}<ArrowRight size={17} aria-hidden="true" /></a>
}
