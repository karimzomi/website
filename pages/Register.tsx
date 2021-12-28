import type { NextPage, GetServerSideProps } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SignCard from '../components/SignCard'
import styles from '../styles/Register.module.css'
import TopNavbar from '../components/TopNavbar'
import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Register: NextPage = () => {
  const router = useRouter()

  const [FirstName, SetFirstName] = useState<string>("")
  const [LastName, SetLastName] = useState<string>("")
  const [Email, SetEmail] = useState<string>("")
  const [Password, SetPassword] = useState<string>("")
  const [rPassword, SetRPassword] = useState<string>("")

  const [disabled, SetDisabled] = useState(false)

  const SignUp = (e: any) => {
    SetDisabled(false)
    e.preventDefault()
    fetch("http://localhost:5000/account/register", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        FirstName,
        LastName,
        Email,
        Password
      })
    }).then(async (res) => {
      if (res.status == 201) {
        const { token } = await res.json()
        document.cookie = `Token=${token}`
        // localStorage.setItem("Token", token)
        SetDisabled(false)
        router.push("/")
      }

    })
      .catch((err) => {
        console.log(err);

      })

  }

  return <>
    <Head>
      <title>Register</title>
    </Head>
    <div id="Container">
      <TopNavbar />
      <Navbar />
      <div className={styles.formContainer}>
        <form onSubmit={e => SignUp(e)} >
          <SignCard />
          <div>
            <input type="text" value={FirstName} onChange={(e) => SetFirstName(e.target.value)} placeholder="First Name*" required name="FirstName" id="FirstName" />
            <input type="text" value={LastName} onChange={(e) => SetLastName(e.target.value)} placeholder="Last Name*" required name="LastName" id="LastName" />
          </div>
          <input type="Email" value={Email} onChange={(e) => SetEmail(e.target.value)} placeholder="Email*" required name="Email" id="Email" />
          <input type="password" value={Password} onChange={(e) => SetPassword(e.target.value)} placeholder="password*" required name="password" id="password" />
          <input type="password" value={rPassword} onChange={(e) => SetRPassword(e.target.value)} placeholder="Repeat password*" required name="vpassword" id="vpassword" />
          <button type="submit" disabled={disabled}>Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  </>
}
export const getServerSideProps: GetServerSideProps = async (context) => {

  //Easy way to send cookies to another backend api
  try {
    const res = await fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: context.req.cookies.Token
      })
    })
    if (res.status != 201) {
      return {props: {}}
    }
  } catch (error) {
    console.error(error);
    return {props: {}}
  }
  return {
    props: {}, redirect: {
      permanent: false,
      destination: '/'
    }
  }
}
export default Register