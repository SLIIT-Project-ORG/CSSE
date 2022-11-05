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
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneSharpIcon from '@mui/icons-material/RemoveDoneSharp';

export default function StaffOrderView() {

    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:4000/order")
            .then((res) => {
                setRows(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <div>
            <Paper variant='outlined' sx={{ width: 1200, height: 400, margin: 'auto', marginTop: 10 }}>
                <Box sx={{ width: 1200, height: 400}}>
                <h2 style={{ fontFamily: 'sans-serif' }}>STAFF ORDER VIEW</h2>
                <TableContainer component={Paper} onScroll>
                    <Table sx={{ minWidth: 1300 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold', width: 800 }}>
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
                        <TableBody sx={{ height: 300 }}>
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
                                        <Button startIcon={<DoneAllIcon />} size={'small'} variant='contained' color='success'>Approve</Button>
                                        <Button startIcon={<RemoveDoneSharpIcon />} size={'small'} variant='contained' color='error'>Reject</Button>
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
