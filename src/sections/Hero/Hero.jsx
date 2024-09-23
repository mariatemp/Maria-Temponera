import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg'
import linkedInIcon from '../../assets/linkedin-light.svg'
import githubIcon from '../../assets/github-light.svg'
import CV from '../../assets/CV-TEMPONERA.pdf'

function Hero() {
  return (
    <section id="hero">
      <div className={styles.colorModeContainer}><img className={styles.hero} src={heroImg} alt='Profile picture of Maria Temponera'></img>
      <img className={styles.colorMode} src={themeIcon} alt='Color mode icon'></img>
      </div>
      <div className={styles.info}>
        <h1>
          Maria
          <br />
          Temponera
        </h1>
        <h2>Frontend Developer</h2>
        <span>
        <a href='https://www.linkedin.com/in/maria-temponera-5b25ab2ab/' target='_blank'>
        <img src={linkedInIcon} alt='LinkendIn icon'></img>
        </a>
        <a href='https://github.com/mariatemp' target='_blank'>
        <img src={githubIcon} alt='GitHub icon'></img>
        </a>
        </span>
        <p>Enthusiastic about exploring the vast world of programming, from front-end development with React and JavaScript to back-end solutions with Java and C#. Passionate about building well-structured databases using SQL and open to diving into new technologies. Continuously learning and experimenting to find the best fit for my skills and interests.</p>
        <a href={CV} download>
          <button className='hover' >Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero;