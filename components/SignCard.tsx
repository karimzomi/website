import type { NextPage } from 'next'
import Image from 'next/image'

import styles from '../styles/SignCard.module.css'
interface Cardprops {
    Signin?: boolean;
}

/**
 *
 * @param Login it's an optional paramater whenever it's selected 
 * Sign In will be Checked otherwise Register is Checked
 * 
 */
const SignCard: NextPage<Cardprops> = (props) => {
    return <div className={styles.CardContainer}>
        <div>
            {props.Signin?null:<span className={styles.checked} />}
            <span>
                <Image width={27} height={27} src="/Register.webp" alt="register_icon" />
            </span>
            <h1>Register</h1>
            <p>Already have an account, then welcome back.</p>

        </div>
        <div>
        {props.Signin?<span className={styles.checked} />:null}
            <span>
                <Image width={27} height={27} src="/login_black_24dp.svg" alt="login_icon" />
            </span>
            <h1>SignIn</h1>
            <p>Already have an account, then welcome back.</p>
        </div>
    </div>
}

export default SignCard