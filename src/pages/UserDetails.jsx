import { useParams } from "react-router-dom"

const UserDetails = () => {
  const { id } = useParams()
  
  return (
    <div>
      This is Users Details Page {id}
    </div>
  )
}

export default UserDetails