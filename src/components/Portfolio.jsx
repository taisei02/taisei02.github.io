import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <p className="section-heading">PORTFOLIO</p>
        <h2 className="section-title">今までに模写したサイトです。</h2>
        <div className={styles.empty}>
          <p>準備中です。近日公開予定です。</p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
