import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export function OrderTable() {

    function createData(
        id: number,
        symbol: string,
        position: string,
        type: string,
        quantity: number,
        price: number,
        takeProfit: number,
        stopLoss: number,
        pnl: number,
        status: string
    ) {
        return { id, symbol, position, type, quantity, price, takeProfit, stopLoss, pnl, status };
    }

    const rows = [
        createData(1, 'BTC/USDT', 'Long', 'Limit', 100, 100, 100, 100, 100, 'Open'),
        createData(2, 'BTC/USDT', 'Short', 'Limit', 100, 100, 100, 100, 100, 'Open'),
        createData(3, 'BTC/USDT', 'Long', 'Market', 100, 100, 100, 100, 100, 'Open'),
        createData(4, 'BTC/USDT', 'Short', 'Market', 100, 100, 100, 100, 100, 'Open')
    ];

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'symbol',
            headerName: 'Symbol',
            width: 150,
            editable: true,
        },
        {
            field: 'position',
            headerName: 'Position',
            width: 150,
            editable: true,
        },
        {
            field: 'type',
            headerName: 'Type',
            type: 'string',
            width: 110,
            editable: true,
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            type: 'number',
            width: 110,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 110,
        },

        {
            field: 'takeProfit',
            headerName: 'Take profit',
            type: 'number',
            width: 110,
        },
        {
            field: 'stopLoss',
            headerName: 'Stop loss',
            type: 'number',
            width: 110,
        },
        {
            field: 'pnl',
            headerName: 'P&L',
            type: 'number',
            width: 110,
        },
        {
            field: 'status',
            headerName: 'Status',
            type: 'string',
            width: 110,
        }
    ];

    return <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell key={column.field}>{column.headerName}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="left">{row.symbol}</TableCell>
                        <TableCell align="left">{row.position}</TableCell>
                        <TableCell align="left">{row.type}</TableCell>
                        <TableCell align="left">{row.quantity}</TableCell>
                        <TableCell align="left">{row.price}</TableCell>
                        <TableCell align="left">{row.takeProfit}</TableCell>
                        <TableCell align="left">{row.stopLoss}</TableCell>
                        <TableCell align="left">{row.pnl}</TableCell>
                        <TableCell align="left">{row.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}

