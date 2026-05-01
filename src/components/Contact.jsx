const Contact = ({ email, socialLinks, callNumber }) => {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-inner">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let's build something clear and calm.</h2>
        </div>
        <div className="contact-actions">
          <a className="btn btn-outline" href={`mailto:${email}`}>
            {email}
          </a>
          <a className="btn btn-outline" href={`tel:${callNumber}`}>
            Call {callNumber}
          </a>
          <div className="contact-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
