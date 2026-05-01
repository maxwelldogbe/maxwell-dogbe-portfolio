const Navigation = ({ name, links, isOpen, onToggle, onLinkClick }) => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <span className="brand">{name}</span>
        <nav className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={onLinkClick}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="nav-toggle"
          onClick={onToggle}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          Menu
        </button>
      </div>
    </header>
  )
}

export default Navigation
