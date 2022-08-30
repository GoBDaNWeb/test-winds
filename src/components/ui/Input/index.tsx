// * react
import React, { useContext } from 'react';
import RowCtx from 'context/AppContext';
import { IInputProps } from './types';

// * styles
import styles from './Input.module.scss';

const Input: React.FC<IInputProps> = ({ placeholder, name, value }) => {
    const { handleSelectEditRow, handleEditRow, onChange } = useContext(RowCtx);

    return (
        <input
            onChange={onChange}
            onKeyDown={(e) => {
                if (e.code === 'Enter') {
                    handleSelectEditRow(-1, []);
                    handleEditRow();
                }
            }}
            value={value}
            className={styles.input}
            type="text"
            name={name}
            placeholder={placeholder}
        />
    );
};

export default Input;
