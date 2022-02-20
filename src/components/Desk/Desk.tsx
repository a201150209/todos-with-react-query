import { FC } from 'react'
import styles from './Desk.module.css'

const Desk: FC = ({ children }) => {
    return <div className={styles.desk}>{children}</div>
}
export default Desk
