import type { NextComponentType } from 'next'
import Image from 'next/image'
import styles from "../styles/Footer.module.css"

const Footer: NextComponentType = () => {
    return <footer className={styles.footerContainer}>
        <div >
            <Image src="/Logo.webp" width="195px" height="190px" objectFit="cover" alt="Logo"/>
        </div>
        <h4>© All Rights Reserved.</h4>
    </footer>
}

export default Footer