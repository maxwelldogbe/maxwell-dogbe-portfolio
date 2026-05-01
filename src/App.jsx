import { useMemo, useState } from 'react'
import './App.css'
import {
  personalInfo,
  experience,
  projects,
  skills,
  education,
} from './data'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import SectionHeader from './components/SectionHeader'
import ExperienceCard from './components/ExperienceCard'
import ProjectCard from './components/ProjectCard'
import SkillGroup from './components/SkillGroup'
import EducationCard from './components/EducationCard'
import Contact from './components/Contact'

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [isNavOpen, setIsNavOpen] = useState(false)

  const categories = useMemo(() => {
    const unique = new Set(projects.map((project) => project.category))
    return ['All', ...unique]
  }, [projects])

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  const navLinks = [
    { label: 'Work', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavToggle = () => setIsNavOpen((prev) => !prev)
  const handleNavClose = () => {
    if (isNavOpen) {
      setIsNavOpen(false)
    }
  }

  return (
    <div className="app">
      <Navigation
        name={personalInfo.name}
        links={navLinks}
        isOpen={isNavOpen}
        onToggle={handleNavToggle}
        onLinkClick={handleNavClose}
      />

      <main>
        <div className="container">
          <Hero {...personalInfo} />

          <section id="experience" className="section">
            <SectionHeader
              eyebrow="Experience"
              title="Selected work history"
              subtitle="Hands-on leadership across product, engineering, and design."
            />
            <div className="stack">
              {experience.map((item) => (
                <ExperienceCard key={item.company} {...item} />
              ))}
            </div>
          </section>

          <section id="projects" className="section">
            <SectionHeader
              eyebrow="Projects"
              title="Portfolio highlights"
              subtitle="A focused selection of product, brand, and growth work."
            />
            <div className="filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter-btn ${
                    category === activeCategory ? 'is-active' : ''
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>

          <section id="skills" className="section">
            <SectionHeader
              eyebrow="Skills"
              title="Technical and creative focus"
              subtitle="Balanced capabilities across engineering, design, and growth."
            />
            <div className="skills-grid">
              {skills.map((group) => (
                <SkillGroup key={group.categoryName} {...group} />
              ))}
            </div>
          </section>

          <section id="education" className="section">
            <SectionHeader
              eyebrow="Education"
              title="Academic background"
              subtitle="Grounded in systems thinking and human-centered design."
            />
            <div className="stack">
              {education.map((item) => (
                <EducationCard key={item.school} {...item} />
              ))}
            </div>
          </section>
        </div>

        <Contact
          email={personalInfo.email}
          socialLinks={personalInfo.socialLinks}
          callNumber={personalInfo.callNumber}
        />
      </main>
    </div>
  )
}

export default App
