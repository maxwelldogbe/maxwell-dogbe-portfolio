import Card from './Card'

const GalleryCard = ({ title, description, image, meta }) => {
  return (
    <Card className="gallery-card">
      <div className="gallery-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="gallery-body">
        <h3>{title}</h3>
        <p>{description}</p>
        {meta ? <p className="gallery-meta">{meta}</p> : null}
      </div>
    </Card>
  )
}

export default GalleryCard
