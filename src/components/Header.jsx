import { useState, useEffect } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#pricing', label: 'Цены' },
    { href: '#contact', label: 'Контакты' },
  ]

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <span className="header__logo-icon">🧹</span>
          CleanPro
        </a>

        <nav className="header__nav" aria-label="Основная навигация">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="header__nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="tel:+79991234567" className="header__phone">
          +7 (999) 123-45-67
        </a>

        <button
          className={`burger ${menuOpen ? 'burger--active' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <a href="#services" onClick={closeMenu}>Услуги</a>
        <a href="#pricing" onClick={closeMenu}>Цены</a>
        <a href="#contact" onClick={closeMenu}>Контакты</a>
        <a href="tel:+79991234567">+7 (999) 123-45-67</a>
      </div>
    </header>
  )
}

export default Header