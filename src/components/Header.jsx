import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation, whatsappUrl } from '../data/content'
import { Button } from './UI'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const handleNavClick = (e, href) => {
    setOpen(false)
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        setTimeout(() => {
          if (window.lenis) {
            window.lenis.scrollTo(target, { offset: -70, duration: 1.1 })
          } else {
            target.scrollIntoView({ behavior: 'smooth' })
          }
        }, 60)
      }
    }
  }

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''} ${open ? 'site-header--open' : ''}`}>
      <div className="header-inner">
        <a
          href="#inicio"
          className="brand exo-brand"
          aria-label="Conexão EXO - início"
          onClick={(e) => handleNavClick(e, '#inicio')}
        >
          CONEXÃO <b>EXO</b><span>∞</span>
        </a>
        <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Navegação principal">
          <div className="nav__links">
            {navigation.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav__mobile-footer">
            <Button href={whatsappUrl}>Chamar no WhatsApp</Button>
            <p className="nav__mobile-location">Florianópolis · SC · Jurerê</p>
          </div>
        </nav>
        <div className="header-cta">
          <Button href={whatsappUrl}>Chamar no WhatsApp</Button>
        </div>
        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
