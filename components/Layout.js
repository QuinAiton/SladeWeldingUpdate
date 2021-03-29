import Nav from './Nav';
import styles from '../styles/layout.module.css';
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.conatiner}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
export default Layout;
