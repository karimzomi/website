import type { NextComponentType } from 'next'
import Link from 'next/link'
import styles from "../styles/Navbar.module.css"


const TopNavbar:NextComponentType =  ()=>{
    return <nav className={styles.TopNavbarContainer}>
        <ul>
            <li><Link href="/Register">Register</Link></li>
            <li><Link href="/SignIn">Sign In</Link></li>
        </ul>
    </nav>
}

export default TopNavbar