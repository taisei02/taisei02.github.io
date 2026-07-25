import styles from './About.module.css'

const SKILLS = ['HTML5', 'CSS3', 'jQuery', 'PHP']

function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-heading">ABOUT</p>
        <h2 className="section-title">簡単なプロフィールです。</h2>
        <div className={styles.grid}>
          <div className={styles.text}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Profile</h3>
              <p className={styles.line}><span className={styles.tag}>1998年</span>広島県出身</p>
              <p className={styles.line}><span className={styles.tag}>2019年</span>国立大学在学中</p>
              <p className={styles.body}>
                雇われでなく個人の力で稼げるようになりたいと思い、
                独学でプログラミングを始めました。
                <br />
                簡単なLP制作案件とwordpressの案件の受注をお受けします。
                <br />
                仕事を受けるに当たっては、丁寧なコミュニケーションと、ご希望のデザインに忠実なコーディングを心がけたいと思います。
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Skill</h3>
              <ul className={styles.skillList}>
                {SKILLS.map((skill) => (
                  <li key={skill} className={styles.skillChip}>{skill}</li>
                ))}
              </ul>
              <p className={styles.body}>
                まだまだ扱える言語は少ないですがこれからPHP、Rubyなどを学習し、簡単なWebサービスを作れるレベルを目指していく予定です。
              </p>
            </div>
          </div>
          <div className={styles.imageWrap}>
            <img src="/img/introduce.jpeg" alt="" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
