import {Link} from 'react-router-dom'
import styles from './link.module.css'

export const LinkForm = ({linkTo, name}) => {
  return (
    <Link to={linkTo} className={styles.link}>{name}</Link>
  )
}
