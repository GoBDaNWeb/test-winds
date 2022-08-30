// * react
import React, { PropsWithChildren, useContext } from 'react';
import RowCtx from 'context/AppContext';
import { IRowButtonProps } from './types';

// * icons
import File from '../icons/File';

// * styles
import styles from './Rowbutton.module.scss';

const RowButton: React.FC<PropsWithChildren<IRowButtonProps>> = ({
    children,
    isEdit,
    id,
    canCreate,
}) => {
    const { saveRow, rowsData, rowData } = useContext(RowCtx);

    const handleCreateRow = () => {
        if (canCreate) {
            saveRow(rowData(id, 'level'), rowsData);
        }
    };

    return (
        <div className={`${styles.btns} ${isEdit && styles.editing}`}>
            <button onClick={handleCreateRow} className={styles.btn}>
                {children}
            </button>
            <button
                onClick={() => saveRow(rowData(id, 'row'), rowsData)}
                className={`${styles.btn} ${styles.btnFile}`}
            >
                <File />
            </button>
        </div>
    );
};

export default RowButton;
