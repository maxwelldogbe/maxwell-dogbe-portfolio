import Card from './Card'

const ProjectCard = ({ title, description, tags, image, demoLink, repoLink }) => {
  return (
    <Card className="project-card">
      <div className="project-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="project-links">
        <a href={demoLink} target="_blank" rel="noreferrer">
          View demo
        </a>
        {repoLink ? (
          <a href={repoLink} target="_blank" rel="noreferrer">
            Repository
          </a>
        ) : null}
      </div>
    </Card>
  )
}

export default ProjectCard
