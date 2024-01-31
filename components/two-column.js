import styles from 'styles/two-column.module.css'

const Twocolumn = ({ children }) => {
  return <div className={styles.flexContainer}>{children}</div>
}

const TwocolumnMain = ({ children }) => {
  return <div className={styles.main}>{children}</div>
}

const TwocolumnSidebar = ({ children }) => {
  return <div className={styles.sidebar}>{children}</div>
}
export { Twocolumn, TwocolumnMain, TwocolumnSidebar }
