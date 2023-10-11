'use client'
import Image from 'next/image'
import styles from './page.module.css'
import MyAppBar from './components/MyAppBar/MyAppBar'
import { dataInicial } from '@/data/data'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    window.localStorage.setItem("libros", JSON.stringify(dataInicial))
  }, [])

  return (
    <>
      <MyAppBar></MyAppBar>
    </>
  )
}
