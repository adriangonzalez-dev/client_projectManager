import styles from './spinner.module.css'

export const Spinner = ({message, size}) => {

    const sizeSpinner = {
        width: `${size}px`,
        height: `${size}px`
    }
  return (
    <div className={styles.containerSpinner}>
        <div className={styles.ring} style={sizeSpinner}></div>
        <div className={styles.ring} style={sizeSpinner}></div>
        <div className={styles.ring} style={sizeSpinner}></div>
        <span className={styles.loading}>{message}</span>
    </div>
  )
}
