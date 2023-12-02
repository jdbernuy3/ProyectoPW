'use client'
import Image from 'next/image'
import styles from './page.module.css'
import MyAppBar from './components/MyAppBar/MyAppBar'
import Login from './Login/page'
import InicioAdmin from './inicio/admin/page'


export default function Home() {

  const user = (typeof localStorage !== 'undefined') ? JSON.parse(localStorage.getItem('user')) || {} : {};

  return (
    <>
      {
        user ? (
          <MyAppBar></MyAppBar>
          ) :
          <Login></Login>
      }
    </>
  )
}
