// * react
import { useContext } from 'react';
import RowCtx from '../../../../context/AppContext';
import { RowData } from '@modules/types';

// * mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

// * styles
import styles from './BasicTable.module.scss';

// * components
import ChildrenRow from './ChildrenRow';
import LevelRow from './LevelRow';
import HeaderRow from './HeaderRow';

const BasicTable = () => {
    const { rowsData } = useContext(RowCtx);

    const childrenRows = rowsData.filter(
        (row: RowData) => row.parent !== null && row.type === 'row',
    );

    return (
        <TableContainer className={styles.table} sx={{ maxHeight: '90vh' }}>
            <Table
                sx={{ minWidth: 650 }}
                stickyHeader
                aria-label="sticky table"
            >
                <TableHead className={styles.tableHead}>
                    <HeaderRow />
                </TableHead>
                <TableBody>
                    {rowsData.map((row: RowData) => (
                        <>
                            {row.parent === null && (
                                <LevelRow row={row} key={row.id} />
                            )}
                            {row.parent !== null && row.type === 'level' && (
                                <LevelRow row={row} key={row.id} />
                            )}
                            {childrenRows.map((rowChildren: RowData) => (
                                <>
                                    {row.id === rowChildren.parent && (
                                        <ChildrenRow
                                            row={rowChildren}
                                            key={rowChildren.id}
                                        />
                                    )}
                                </>
                            ))}
                        </>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BasicTable;
