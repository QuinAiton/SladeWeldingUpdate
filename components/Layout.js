import styles from '../styles/layout.module.css';
const Layout = ({ children }) => {
  return (
    <div className={styles.conatiner}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
export default Layout;
