import Card from './Card'

const EducationCard = ({ school, program, duration, details }) => {
  return (
    <Card className="education-card">
      <div className="education-header">
        <div>
          <h3>{program}</h3>
          <p className="education-school">{school}</p>
        </div>
        <span className="education-duration">{duration}</span>
      </div>
      <p>{details}</p>
    </Card>
  )
}

export default EducationCard
