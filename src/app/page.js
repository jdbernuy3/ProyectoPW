'use client'
import Image from 'next/image'
import styles from './page.module.css'
import MyAppBar from './components/MyAppBar/MyAppBar'
import { dataInicial } from '@/data/data'
import { useEffect, useState } from 'react'

export default function Home() {

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("libros"));
    console.log(datos);
    if (datos === null) {
      window.localStorage.setItem("libros", JSON.stringify(dataInicial));
    }
  }, [])

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("users"));
    console.log(datos);
    if (datos === null) {
      window.localStorage.setItem("users", JSON.stringify(dataInicial));
    }
  }, [])

  return (
    <>
      <MyAppBar></MyAppBar>
    </>
  )
}
