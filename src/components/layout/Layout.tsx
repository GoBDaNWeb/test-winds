// * react
import React, { PropsWithChildren } from 'react';

// * styles
import styles from './Layout.module.scss';

// * components
import Header from './Header';
import Sidebar from './Sidebar';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />

            <div className={styles.mainContent}>
                <Sidebar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
