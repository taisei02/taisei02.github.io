import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="section-heading">CONTACT</p>
        <h2 className="section-title">お気軽にお問い合わせください。</h2>
        <p className="section-sub">以下に受け付け可能な業務を載せておりますのでお気軽にお問い合わせください。</p>
        <div className={styles.empty}>
          <p>お問い合わせフォームは準備中です。</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
