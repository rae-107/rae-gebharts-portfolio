import './Project.css'

export const Project = ({ name, img }) => {
  return (
    <div className='project' >
      <img className='project-image' alt={`${name}'s home page`} src={img} />
      <h3 className='project-name' >{name}</h3>
    </div>
  )
}