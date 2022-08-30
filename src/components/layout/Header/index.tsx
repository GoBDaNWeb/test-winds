// * styles
import styles from './Header.module.scss';

// * components
import ArrowBack from '@components/ui/icons/ArrowBack';
import Table from '@components/ui/icons/Table';
import ArrowDown from '@components/ui/icons/ArrowDown';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.navigation}>
                <Table />
                <ArrowBack />
                <ul className={styles.navigationLinks}>
                    <li className={styles.active}>Просмотр</li>
                    <li>Управление</li>
                </ul>
            </div>
            <div className={styles.profile}>
                <img src="userPhoto.png" alt="avatar" />
                <h4>Антон петров</h4>
                <ArrowDown />
            </div>
        </div>
    );
};

export default Header;
