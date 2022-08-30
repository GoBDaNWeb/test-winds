// * mui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const HeaderRow = () => {
    return (
        <TableRow>
            <TableCell
                sx={{
                    color: '#a1a1aa',
                    borderBottom: '1px solid #414144',
                    width: '110px',
                    background: '#202124',
                }}
            >
                Уровень
            </TableCell>
            <TableCell
                align="left"
                sx={{
                    color: '#a1a1aa',
                    borderBottom: '1px solid #414144',
                    background: '#202124',
                }}
            >
                Наименование работ
            </TableCell>
            <TableCell
                align="left"
                sx={{
                    color: '#a1a1aa',
                    borderBottom: '1px solid #414144',
                    background: '#202124',
                }}
            >
                Ед. изм.
            </TableCell>
            <TableCell
                align="left"
                sx={{
                    color: '#a1a1aa',
                    borderBottom: '1px solid #414144',
                    background: '#202124',
                }}
            >
                Количество
            </TableCell>
            <TableCell
                align="left"
                sx={{
                    color: '#a1a1aa',
                    borderBottom: '1px solid #414144',
                    background: '#202124',
                }}
            >
                Цена за ед.
            </TableCell>
            <TableCell
                align="left"
                sx={{
                    color: '#a1a1aa',
                    borderBottom: '1px solid #414144',
                    background: '#202124',
                }}
            >
                Стоимость
            </TableCell>
        </TableRow>
    );
};

export default HeaderRow;
