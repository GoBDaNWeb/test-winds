// * styles
import styles from './Sidebar.module.scss';

// * components
import SidebarItem from './SidebarItem';
import ArrowDown from '@components/ui/icons/ArrowDown';

const sidebarItemsNames = [
    { name: 'По проекту', isActive: false },
    { name: 'Объекты', isActive: false },
    { name: 'РД', isActive: false },
    { name: 'МТО', isActive: false },
    { name: 'СМР', isActive: true },
    { name: 'График', isActive: false },
    { name: 'МиМ', isActive: false },
    { name: 'Рабочие', isActive: false },
    { name: 'Капвложения', isActive: false },
    { name: 'Бюджет', isActive: false },
    { name: 'Финансирование', isActive: false },
    { name: 'Панорамы', isActive: false },
    { name: 'Камеры', isActive: false },
    { name: 'Поручения', isActive: false },
    { name: 'Контрагенты', isActive: false },
];

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <div>
                    <h4>Название проекта</h4>
                    <span>Аббревиатура</span>
                </div>
                <ArrowDown />
            </div>
            <div className={styles.sidebarContent}>
                {sidebarItemsNames.map((item) => (
                    <SidebarItem
                        key={item.name}
                        name={item.name}
                        isActive={item.isActive}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
