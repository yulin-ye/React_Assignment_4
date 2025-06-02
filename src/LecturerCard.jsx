import './LecturerCard.css'

const LecturerCard = ({lecturer}) => {
  const {title, name} = lecturer

  return (
    <div className="lecturer-card">
      <table>
        <tr>
          <td>Name:</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Title:</td>
          <td>{title}</td>
        </tr>
      </table>
    </div>
  )
}

export default LecturerCard