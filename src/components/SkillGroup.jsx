import Card from './Card'
import SkillBadge from './SkillBadge'

const SkillGroup = ({ categoryName, skillsList }) => {
  return (
    <Card className="skill-group">
      <h3>{categoryName}</h3>
      <div className="skill-list">
        {skillsList.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </div>
    </Card>
  )
}

export default SkillGroup
