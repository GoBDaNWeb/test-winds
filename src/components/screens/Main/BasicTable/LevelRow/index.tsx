// * react
import React, { useContext } from 'react';
import RowCtx from '../../../../../context/AppContext';
import { ILevelRowProps } from './types';

// * mui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

// * styles
import styles from './LevelRow.module.scss';

// * components
import LvlOne from '@components/ui/icons/LvlOne';
import LvlTwo from '@components/ui/icons/LvlTwo';
import Input from '@components/ui/Input';
import RowButton from '@components/ui/RowButton';

const LevelRow: React.FC<ILevelRowProps> = ({ row }) => {
    const {
        saveRow,
        rowData,
        editableRow,
        handleSelectEditRow,
        rowsData,
        title,
    } = useContext(RowCtx);

    return (
        <TableRow
            className={styles.row}
            sx={{
                '&:last-child td, &:last-child th': {
                    border: 0,
                },
                color: '#fff',
            }}
        >
            <TableCell
                className={`${row.parent && styles.row2}`}
                sx={{
                    color: '#fff',
                    borderBottom: '1px solid #414144',
                    width: '10%',
                }}
                component="th"
                scope="row"
            >
                {row.parent === null ? (
                    <button
                        className={styles.mainRowBtn}
                        onClick={() =>
                            saveRow(rowData(row.id, 'level'), rowsData)
                        }
                    >
                        <LvlOne />
                    </button>
                ) : (
                    <RowButton
                        isEdit={editableRow === row.id}
                        id={row.id}
                        canCreate={false}
                    >
                        <LvlTwo />
                    </RowButton>
                )}
            </TableCell>
            <TableCell
                onDoubleClick={() => handleSelectEditRow(row.id, rowsData)}
                sx={{
                    color: '#fff',
                    borderBottom: '1px solid #414144',
                    margin: 0,
                    width: '40%',
                    padding: 0,
                    paddingLeft: '20px',
                }}
                align="left"
            >
                {editableRow === row.id ? (
                    <Input
                        placeholder="Наименование работ"
                        name="title"
                        value={title}
                    />
                ) : (
                    <>
                        {row.title.length > 0 ? (
                            row.title
                        ) : (
                            // eslint-disable-next-line react/jsx-one-expression-per-line
                            <>Наименование работ № {row.id}</>
                        )}
                    </>
                )}
            </TableCell>
            <TableCell
                onDoubleClick={() => handleSelectEditRow(row.id, rowsData)}
                sx={{
                    color: '#fff',
                    borderBottom: '1px solid #414144',
                }}
                align="left"
            >
                {null}
            </TableCell>
            <TableCell
                onDoubleClick={() => handleSelectEditRow(row.id, rowsData)}
                sx={{
                    color: '#fff',
                    borderBottom: '1px solid #414144',
                }}
                align="left"
            >
                {null}
            </TableCell>
            <TableCell
                onDoubleClick={() => handleSelectEditRow(row.id, rowsData)}
                sx={{
                    color: '#fff',
                    borderBottom: '1px solid #414144',
                }}
                align="left"
            >
                {null}
            </TableCell>
            <TableCell
                onDoubleClick={() => handleSelectEditRow(row.id, rowsData)}
                sx={{
                    color: '#fff',
                    borderBottom: '1px solid #414144',
                    padding: 0,
                    paddingLeft: '20px',
                }}
                align="left"
            >
                {row.price}
            </TableCell>
        </TableRow>
    );
};

export default LevelRow;
