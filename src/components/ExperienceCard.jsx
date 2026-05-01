import Card from './Card'

const ExperienceCard = ({ company, role, duration, achievements }) => {
  return (
    <Card className="experience-card">
      <div className="experience-header">
        <div>
          <h3>{role}</h3>
          <p className="experience-company">{company}</p>
        </div>
        <span className="experience-duration">{duration}</span>
      </div>
      <ul className="experience-list">
        {achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  )
}

export default ExperienceCard
