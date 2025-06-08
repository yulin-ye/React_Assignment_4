import './LecturerCard.css'

const LecturerCard = ({lecturer}) => {
  const {title, name} = lecturer

  return (
    <div className="lecturer-card">
      <div>
        <div>
          <span>Name: </span>
          <span>{name}</span>
        </div>
        <div>
          <span>Title: </span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  )
}

export default LecturerCard