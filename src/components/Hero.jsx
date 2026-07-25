import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>PORTFOLIO</p>
        <h1 className={styles.title}>Welcome to my Portfolio!</h1>
      </div>
    </div>
  )
}

export default Hero
