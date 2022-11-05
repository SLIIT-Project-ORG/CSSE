import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';
import axios from 'axios';

export default function OrderView() {

    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:4000/order")
            .then((res) => {
                setRows(res.data.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    rows.map((val)=>{
        console.log(val.quantity);
    })

    return (
        <div>
            <Paper variant='outlined' sx={{ width: 1000, height: 500, margin: 'auto' }}>
                <h1 style={{ fontFamily: 'sans-serif' }}>ORDER VIEW</h1>
                <Box width={900} m={'auto'} height={400}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 900 }} aria-label="simple table">
                            <TableHead sx={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold', width: 1000 }}>
                                <TableRow>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>MANAGER</TableCell>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>SITE</TableCell>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>SUPPLIER</TableCell>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>NOTE</TableCell>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>TOTAL AMOUNT</TableCell>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>STAFF STATUS</TableCell>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>SUPPLIER STATUS</TableCell>
                                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ACTIONS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (

                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{row.siteManagerId}</TableCell>
                                        <TableCell>{row.site_id}</TableCell>
                                        <TableCell>{row.supplierId}</TableCell>
                                        <TableCell>{row.note}</TableCell>
                                        <TableCell>{row.totalAmount}</TableCell>
                                        <TableCell>{row.staffStatus}</TableCell>
                                        <TableCell>{row.supplierStatus}</TableCell>
                                        <TableCell>
                                            <Button variant='contained' color='error'>DELETE</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Paper>
        </div>
    );
}
