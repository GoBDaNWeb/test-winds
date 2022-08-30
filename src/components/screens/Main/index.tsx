// * styles
import styles from './Main.module.scss';

// * components
import BasicTable from '@components/screens/Main/BasicTable';

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.mainHeader}>
                <h3>Строительно-монтажные работы</h3>
            </div>
            <div className={styles.mainContent}>
                <BasicTable />
            </div>
        </div>
    );
};

export default Main;
