// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Box } from '@mui/material';
// import axios from 'axios';


// export default function OrderView() {

//     const [rows,setRows] = React.useState([]);

//     React.useEffect(()=>{
//         axios.get("http://localhost:4000/order")
//         .then((data)=>{
//             setRows(data.data);
//         })
//         .catch((err)=>{
//             console.log(err.message);
//         })
//     },[])

//     return (
//         <Box width={900} height={500} sx={{margin:'auto',marginTop:10}}>
//             <Paper>
//                 <TableContainer component={Paper}>
//                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>Dessert (100g serving)</TableCell>
//                                 <TableCell align="right">Calories</TableCell>
//                                 <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                                 <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                                 <TableCell align="right">Protein&nbsp;(g)</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {rows.map((row) => (
//                                 <TableRow
//                                     key={row.name}
//                                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                 >
//                                     <TableCell component="th" scope="row">
//                                         {row.name}
//                                     </TableCell>
//                                     <TableCell align="right">{row.siteId}</TableCell>
//                                     <TableCell align="right">{row.siteManagerId}</TableCell>
//                                     <TableCell align="right">{row.supplierId}</TableCell>
//                                     <TableCell align="right">{row.wareHouseId}</TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Paper>
//         </Box>
//     );
// }
