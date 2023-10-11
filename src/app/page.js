'use client'
import Image from 'next/image'
import styles from './page.module.css'
import MyAppBar from './components/MyAppBar/MyAppBar'
import { dataInicial } from '@/data/data'
import { useEffect, useState } from 'react'

export default function Home() {

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("libros"));
    if (datos === null) {
      setLibros(window.localStorage.setItem("libros", JSON.stringify(dataInicial)));
    }
  }, [])

  return (
    <>
      <MyAppBar></MyAppBar>
    </>
  )
}
