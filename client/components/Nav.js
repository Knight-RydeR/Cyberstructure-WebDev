import Link from 'next/link'
// import { Button } from '../../react-bootstrap'
import navStyles from '../styles/Nav.module.css'
import drop from '../components/Dropdown.js'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <h1>DROPDOWN</h1>
                </li>
                <li>
                    <h1>NAME OF PAGE</h1>
                </li>
                <li>
                    {/* Search Bar */}
                </li>
                <li>
                    {/* Login button */}
                </li>
            </ul>

        </nav>
    )
}

export default Nav;