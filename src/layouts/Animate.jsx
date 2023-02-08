import React from 'react'
import styles from './animate.module.css'

export const Animate = () => {
  return (
    <>
        <div className={`${styles.circulo} ${styles.xxlarge} ${styles.sombra1}`}></div>
        <div className={`${styles.circulo} ${styles.xlarge} ${styles.sombra2}`}></div>
        <div className={`${styles.circulo} ${styles.large} ${styles.sombra3}`}></div>
        <div className={`${styles.circulo} ${styles.medium} ${styles.sombra4}`}></div>
        <div className={`${styles.circulo} ${styles.small} ${styles.sombra5}`}></div>
    </>
  )
}
