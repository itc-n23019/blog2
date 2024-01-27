import styles from 'styles/social.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Social = ({iconSize='initial'}) => {
  return (
    <ul className={styles.list} style={{ '--icon-size' : iconSize }}>      <li>
        <Link href='https://twitter.com/'>
          <FontAwesomeIcon icon={faTwitter} />
          <span className='sr-only'>Twitter</span>
        </Link>
      </li>
      <li>
        <Link href='https://www.facebook.com/'>
          <FontAwesomeIcon icon={faFacebookF} />
          <span className='sr-only'>Facebook</span>
        </Link>
      </li>
      <li>
        <Link href='https://github.com/'>
          <FontAwesomeIcon icon={faGithub} />
          <span className='sr-only'>GitHub</span>
        </Link>
      </li>
    </ul>
  )
}
export default Social
