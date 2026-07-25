import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Taisei Akamatsu</p>
      </div>
    </footer>
  )
}

export default Footer
