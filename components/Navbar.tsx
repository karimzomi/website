import type { NextComponentType } from 'next'
import Link from 'next/link'
import styles from "../styles/Navbar.module.css"
import Image from 'next/image'

const Navbar:NextComponentType =  ()=>{
    return <nav className={styles.NavbarContainer}>
        <ul>
            <li><Image src="/Logo.webp" width="100%" height="100%" objectFit="cover" alt="Logo"/></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/AboutUs">About us</Link></li>
            <li><Link href="/ContactUs">Contact us</Link></li>
        </ul>
        <div className={styles.Ar}>
        <h3>Ar</h3>
        </div>
    </nav>
}

export default Navbar