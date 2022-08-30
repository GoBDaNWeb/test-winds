// * react
import React from 'react';

// * styles
import styles from './SidebarItem.module.scss';

// * components
import Dashboard from '@components/ui/icons/Dashboard';

const SidebarItem: React.FC<any> = ({ name, isActive }) => {
    return (
        <div className={`${styles.sidebarItem} ${isActive && styles.active}`}>
            <Dashboard />
            <h3>{name}</h3>
        </div>
    );
};

export default SidebarItem;
