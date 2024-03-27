//CSS
import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o mini spam <span>blog</span></h2>
        <p>este projeto consiste em react em front e firebase no back end</p>
        <Link to="/posts/create" className='btn'>Criar Post</Link>
    </div>
  )
}

export default About