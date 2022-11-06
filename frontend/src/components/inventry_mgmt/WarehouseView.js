import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';


import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Box } from '@mui/material';

export default function SimpleAccordion() {

  const [warehouseList, setWarehouseList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/warehouse`)
      .then((res) => {
        setWarehouseList(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  const [InventoryData, setInventryData] = useState([]);
  const [id, setId] = useState('');

  useEffect(onclick = () => {
    axios.get(`http://localhost:4000/inventory/getInventoryByWarehouse/${id}`).then((res) => {

      setInventryData(res.data);
      console.log(res.data);

    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div>
      {
        warehouseList.map((value) => {
          return (
           <Box sx={{height:'350',width:900 }}>
            <Accordion>
              <AccordionSummary sx={{ width: 900 }} onClick={() => setId(value.warehouse_id)}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography   style={{color:'blue' ,fontWeight:'bold'}} flex={1}>{value.warehouse_name}</Typography>

                <Typography  style={{color:'blue' ,fontWeight:'bold'}} flex={1} >{value.warehouse_address}</Typography>
                <Typography  style={{color:'blue' ,fontWeight:'bold'}}flex={1} >{value.warehouse_company}</Typography>

              </AccordionSummary>
              <AccordionDetails>

                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Inventory Name</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Inventory Type</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Inventory Location</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Inventory Description</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody >
                      {InventoryData.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell sx={{ fontWeight: 'bold', backgroundColor:'lightgray' }}>{row.inventory_name}</TableCell>
                          <TableCell sx={{ fontWeight: 'bold', backgroundColor:'lightgray' }}>{row.inventory_type}</TableCell>
                          <TableCell sx={{ fontWeight: 'bold', backgroundColor:'lightgray' }}>{row.inventory_location}</TableCell>
                          <TableCell sx={{ fontWeight: 'bold', backgroundColor:'lightgray' }}>{row.inventory_description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

              </AccordionDetails>
            </Accordion>
            </Box>
          )
        }
        )
      }
    </div>
  )
}
