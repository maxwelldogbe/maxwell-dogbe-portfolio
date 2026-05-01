const Hero = ({
  name,
  title,
  position,
  summary,
  location,
  email,
  socialLinks,
  heroImage,
}) => {
  return (
    <section id="hero" className="section hero-section">
      <div className="hero-content">
        {/* <p className="eyebrow">Portfolio</p> */}
        <h1 className="hero-title">{name}</h1>
        <p className="hero-role">{title}</p>
        <p className="hero-position">{position}</p>
        <p className="hero-summary">{summary}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${email}`}>
            Book a project
          </a>
          <span className="hero-location">Based in {location}</span>
        </div>
      </div>
      <div className="hero-panel">
        <div className="hero-panel-inner">
          <span className="hero-panel-label">Now</span>
          <div className="hero-panel-media">
            <img src={heroImage} alt={`${name} portrait`} loading="lazy" />
          </div>
          <div className="hero-panel-detail">{title}</div>
          <div className="hero-panel-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="hero-panel-tag"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
