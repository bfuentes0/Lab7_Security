import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="app-header">
      <nav className="app-nav">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/employee-mgmt" className="nav-link">
          EmployeeMgmt
        </NavLink>
      </nav>
    </header>
  )
}

export default Header