import type { GetServerSideProps, NextPage } from 'next'
import Footer from '../components/Footer'
import Logo from '../components/logo'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return <>
    <div id="Container">
    <Navbar />
      <div className={styles.logoDiv}>
        <div className={styles.logoContainer}>
        <Logo />

        </div>
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
      return {
        redirect: {
          destination: '/SignIn',
          permanent: false
        },
        props: {}
      }
    }
  } catch (error) {
    console.error(error);
    return {
      redirect: {
        destination: '/SignIn',
        permanent: false
      },
      props: {}
    }
  }
  return { props: {} }
}

export default Home
