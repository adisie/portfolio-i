import {useNavigate} from 'react-router-dom'

const Contacts = () => {
    // hooks
    const navigate = useNavigate()

    // functions
    // to origin
    const toOrigin = () => {
        navigate(-1)
    }
  return (
    <div>
      contacts
      <button onClick={toOrigin}>back</button>
    </div>
  )
}

export default Contacts
