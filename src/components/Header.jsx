import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../data/content'
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
  return <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
    <div className="header-inner">
      <a href="#inicio" className="brand" aria-label="OutBox - início"><img src="/assets/logo.svg" alt="OutBox" /></a>
      <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Navegação principal">
        {navigation.map(item => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>
      <div className="header-cta"><Button>Fale conosco</Button></div>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
    </div>
  </header>
}
