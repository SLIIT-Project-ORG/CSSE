import React, { useState } from "react"
import { TextField, Button, Stack, Paper, TextareaAutosize, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useParams } from 'react-router-dom';

function UpdateOrder(props) {

    const { id } = useParams();

    const [site, setSite] = useState('');
    const [supplier, setSupplier] = useState('');
    const [inventory, setInventory] = useState('');
    const [items, setItems] = useState();

    const siteId = site;
    const supplierId = supplier;
    const siteManagerId = "1";
    const wareHouseId = "1";

    const updateDataSet = {
        siteId: siteId,
        supplierId: supplierId,
        siteManagerId: siteManagerId,
        wareHouseId: wareHouseId,
        items: [
            {
                "item": 1,
                "quantity": 4,
            },
            {
                "item": 2,
                "quantity": 5,
            },
            {
                "item": 3,
                "quantity": 2,
            },
            {
                "item": 4,
                "quantity": 6,
            }
        ]
    }

    const updateOrder = (id) => {
    
        axios.put(`http://localhost:4000/order/update/${id}`, updateDataSet)
            .then(() => {
                alert("Update successfully");
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    const handleSiteChanges = (event) => {
        setSite(event.target.value);
    };

    const handleSupplierChanges = (event) => {
        setSupplier(event.target.value);
    }

    const handleInventoryChanges = (event) => {
        setInventory(event.target.value);
    }

    const handleItemsChanges = (event) => {
        setItems(event.target.value);
    }

    return (
        <diV>

            <Stack direction={'row'} flex={1} sx={{ marginTop: 10 }}>
                <Stack direction={'col'} flex={1}></Stack>
                <Stack direction={'col'}>
                    <Paper variant="elevation" sx={{ padding: '30px', marginTop: '30px', backgroundColor: 'whitesmoke' }} >
                        <Stack spacing={2} direction={'row'}>
                            <h2 style={{ fontFamily: 'sans-serif', color: 'black' }}>UPDATE ORDER DETAILS</h2>
                        </Stack><br />
                        <div>
                            <form class="form-card" onSubmit={updateOrder}>

                                <div className="row justify-content-between text-left" >
                                    <Stack spacing={2} direction={'row'}>
                                        <Select
                                            placeholder="Site"
                                            size="small" sx={{ width: '49%' }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={site}
                                            label="Site"
                                            onChange={handleSiteChanges}
                                        >
                                            <MenuItem value={1}>Industry Central</MenuItem>
                                            <MenuItem value={2}>Meteonex</MenuItem>
                                            <MenuItem value={3}>Dinotrec</MenuItem>
                                            <MenuItem value={4}>PrimeEight</MenuItem>
                                            <MenuItem value={5}>OneX</MenuItem>
                                        </Select>

                                        <Select
                                            size="small" sx={{ width: '49%' }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={supplier}
                                            label="Supplier"
                                            onChange={handleSupplierChanges}
                                        >
                                            <MenuItem value={1}>Sajith Sameera</MenuItem>
                                            <MenuItem value={2}>Ajith Gamlath</MenuItem>
                                            <MenuItem value={3}>Kamal Senanayake</MenuItem>
                                            <MenuItem value={4}>Nuwan Chinthaka</MenuItem>
                                            <MenuItem value={5}>Thenabadu</MenuItem>
                                        </Select>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <Select
                                            size="small" sx={{ width: '49%' }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={inventory}
                                            label="Inventory"
                                            onChange={handleInventoryChanges}
                                        >
                                            <MenuItem value={1}>Kandy</MenuItem>
                                            <MenuItem value={2}>Ampara</MenuItem>
                                            <MenuItem value={3}>Colombo 07</MenuItem>
                                            <MenuItem value={4}>Matara</MenuItem>
                                            <MenuItem value={5}>Jaffna</MenuItem>
                                        </Select>
                                        <Select
                                            size="small" sx={{ width: '49%' }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={items}
                                            label="Items"
                                            onChange={handleItemsChanges}
                                        >
                                            <MenuItem value={1}>Cement</MenuItem>
                                            <MenuItem value={2}>Glass</MenuItem>
                                            <MenuItem value={3}>Wood</MenuItem>
                                            <MenuItem value={4}>Plastic</MenuItem>
                                            <MenuItem value={5}>Steel</MenuItem>
                                        </Select>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} >

                                        <TextareaAutosize label="Description" sx={{ backgroundColor: 'white' }} style={{ height: 60 }} size="small" id="note" name="note" placeholder="Note" onblur="validate(5)" >
                                        </TextareaAutosize>
                                    </Stack>
                                </div><br />

                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <Button type="submit" size="medium" variant="contained" color="error" onClick={() => window.location.href = ""} sx={{ width: '49%' }}> CANCEL </Button>
                                        <Button type="submit" size="medium" variant="contained" color="primary" sx={{ width: '49%' }}>UPDATE ORDER</Button>
                                    </Stack>

                                </div>

                            </form>

                        </div>
                    </Paper>
                </Stack>
                <Stack direction={'col'} flex={1}></Stack>
            </Stack>
            <Stack spacing={1} >

                <Button type="submit" size="medium" variant="contained" color='warning' sx={{ width: '10%', marginLeft: 120, marginTop: 5 }}>BACK</Button>
            </Stack>


        </diV>

    )
}

export default UpdateOrder
