import {NavLink,useNavigate} from 'react-router-dom'


const Header = () => {
    // hooks
    const navigate = useNavigate()

    // functions
    const toContacts = () => {
        navigate('/contacts')
    }

    // active link style
    const activeLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            // borderColor: isActive ? 'rgb(168, 168, 168)' : 'transparent'
        }
    }

  return (
    <header>
        <div className="sub-container header">
            <div className="site-logo">
                <NavLink to='/' className='logo'><span>addis</span><span>Pictures</span></NavLink>
            </div>
            <div className="navigations">
                <ul>
                    <li>
                        <NavLink to='/' className='link' style={activeLinkStyle}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services' className='link' style={activeLinkStyle}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects' className='link' style={activeLinkStyle}>Projects</NavLink>
                    </li>
                </ul>
                <div className="contact-link">
                    <button onClick={toContacts}>Contact</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
