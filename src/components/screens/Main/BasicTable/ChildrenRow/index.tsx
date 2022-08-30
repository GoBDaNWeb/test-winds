// * react
import React, { useContext } from 'react';
import RowCtx from '../../../../../context/AppContext';
import { IChildreRowProps } from './types';

// * mui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

// * styles
import styles from './style.module.scss';

// * components
import File from '@components/ui/icons/File';
import Input from '@components/ui/Input';

const ChildrenRow: React.FC<IChildreRowProps> = ({ row }) => {
    const {
        editableRow,
        handleSelectEditRow,
        rowsData,
        title,
        unit,
        quantity,
        unitPrice,
    } = useContext(RowCtx);

    return (
        <TableRow
            className={styles.children}
            key={row.id}
            sx={{
                '&:last-child td, &:last-child th': {
                    border: 0,
                },
                margin: 0,
                padding: 0,
                height: '54px',
                width: '10%',

                color: '#fff',
            }}
        >
            <TableCell
                className={`${
                    row.parent === 1 ? styles.children2 : styles.children3
                }`}
                sx={{
                    color: '#fff',
                    borderBottom: '1px solid #414144',
                    margin: 0,
                    padding: 0,
                }}
                component="th"
            >
                <File />
            </TableCell>
            <TableCell
                onDoubleClick={() => handleSelectEditRow(row.id, rowsData)}
                sx={{
                    color: '#fff',
                    borderBottom: '1px solid #414144',
                    margin: 0,
                    padding: 0,
                    width: '40%',
                    height: '54px',
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
                    margin: 0,
                    width: '10%',
                    padding: 0,
                    paddingLeft: '20px',
                }}
                align="left"
            >
                {row.type === 'row' && (
                    <>
                        {editableRow === row.id ? (
                            <Input
                                placeholder="Ед. Изм."
                                name="unit"
                                value={unit}
                            />
                        ) : (
                            <>
                                {row.unit.length > 0 ? row.unit : <>Ед. Изм.</>}
                            </>
                        )}
                    </>
                )}
            </TableCell>
            <TableCell
                onDoubleClick={() => handleSelectEditRow(row.id, rowsData)}
                sx={{
                    color: '#fff',
                    borderBottom: '1px solid #414144',
                    margin: 0,
                    width: '10%',
                    padding: 0,
                    paddingLeft: '20px',
                }}
                align="left"
            >
                {editableRow === row.id ? (
                    <Input
                        placeholder="Количество"
                        name="quantity"
                        value={quantity}
                    />
                ) : (
                    <>{row.quantity}</>
                )}
            </TableCell>
            <TableCell
                onDoubleClick={() => handleSelectEditRow(row.id, rowsData)}
                sx={{
                    color: '#fff',
                    borderBottom: '1px solid #414144',
                    margin: 0,
                    width: '10%',
                    padding: 0,
                    paddingLeft: '20px',
                }}
                align="left"
            >
                {editableRow === row.id ? (
                    <Input
                        placeholder="Цена за ед."
                        name="unitPrice"
                        value={unitPrice}
                    />
                ) : (
                    <>{row.unitPrice}</>
                )}
            </TableCell>
            <TableCell
                onDoubleClick={() => handleSelectEditRow(row.id, rowsData)}
                sx={{
                    color: '#fff',
                    borderBottom: '1px solid #414144',
                    margin: 0,
                    padding: 0,
                    paddingLeft: '20px',
                    width: '20%',
                }}
                align="left"
            >
                {row.price}
            </TableCell>
        </TableRow>
    );
};

export default ChildrenRow;
