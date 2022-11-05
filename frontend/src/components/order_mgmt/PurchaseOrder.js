import React, { useEffect, useState } from "react"
import { Button, Stack, Paper, TextareaAutosize, MenuItem, Select, InputLabel, FormLabel, FormControl, TextField, Input } from "@mui/material";
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

function Order() {

    const handleSiteChanges = (event) => {
        setSite(event.target.value);
    };

    const handleSupplierChanges = (event) => {
        setSupplier(event.target.value);
    }

    const handleItemsChanges = (event) => {
        setItems(event.target.value);
    }

    const [site, setSite] = useState('');
    const [supplier, setSupplier] = useState('');
    const [items, setItems] = useState([]);
    const [siteList, setSiteList] = useState([]);
    const [tableItems, setTableItems] = useState([]);
    const [dateValue, setDateValue] = useState('');

    const handleDateChange = (newValue) => {
        setDateValue(newValue);
    };

    //custom field
    const CustomField = (props) => {
        return (
            <div>
                <TextField id="outlined-basic" label="Quantity" variant="outlined" size="small" />
            </div>
        )
    }

    const columns = [
        { field: 'item_name', headerName: 'Item Code'},
        { field: 'item_code', headerName: 'Item Name',width:200},
        { field: 'quantity', headerName: 'Quantity', renderCell: CustomField,width:200 }
    ];

    const rows = tableItems;

    //Site backend GET API call
    useEffect(() => {
        axios.get(`http://localhost:4000/site`)
            .then((res) => {
                setSiteList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        fetch(`http://localhost:4000/item`)
            .then((data) => data.json())
            .then((data) => setTableItems(data))
    }, []);



    return (
        <diV>

            <Stack direction={'row'} flex={1} sx={{ marginTop: 10 }}>
                <Stack direction={'col'} flex={1}></Stack>
                <Stack direction={'col'}>
                    <Paper variant="elevation" sx={{ padding: '20px',backgroundColor: 'whitesmoke' }} >
                        <Stack spacing={2} direction={'row'}>
                            <h2 style={{ fontFamily: 'sans-serif', color: 'black' }}>PURCHASE ORDER</h2>
                        </Stack><br />
                        <div>
                            <form class="form-card" style={{ width: '600px' }}>

                                <div className="row justify-content-between text-left" >
                                    <FormControl fullWidth>
                                        <Stack direction={'row'}>
                                            <TextField
                                                id="date"
                                                label="Date"
                                                type="date"
                                                sx={{ width: '49%', backgroundColor: 'white' }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                size="small"
                                            />
                                        </Stack>
                                    </FormControl><br /><br />
                                    <FormControl fullWidth>
                                        <Stack direction={'row'}>
                                            <InputLabel id="select-label-supplier" sx={{ mt: '-6px' }}>Supplier</InputLabel>
                                            <Select
                                                placeholder="Select one Site"
                                                size="small" sx={{ width: '49%', backgroundColor: 'white' }}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={supplier}
                                                label="Supplier"
                                                onChange={handleSupplierChanges}
                                            >
                                                {/* {
                                                    siteList.map((value, index) => {
                                                        return (
                                                            <MenuItem value={value._id}>{value.supplierName}</MenuItem>
                                                        )
                                                    })

                                                } */}
                                            </Select>
                                        </Stack>
                                    </FormControl><br /><br />
                                    <FormControl fullWidth>
                                        <Stack direction={'row'}>
                                            <InputLabel id="select-label-site" sx={{ mt: '-6px' }}>Site</InputLabel>
                                            <Select
                                                placeholder="Select one Site"
                                                size="small" sx={{ width: '49%', backgroundColor: 'white' }}
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={site}
                                                label="Site"
                                                onChange={handleSiteChanges}
                                            >
                                                {
                                                    siteList.map((value, index) => {
                                                        return (
                                                            <MenuItem value={value._id}>{value.sitename}</MenuItem>
                                                        )
                                                    })

                                                }
                                            </Select>
                                        </Stack>
                                    </FormControl><br /><br />
                                    <FormControl fullWidth>
                                        <Stack direction={'row'} style={{ height: 200, width: '100%' }}>
                                            <DataGrid
                                                sx={{backgroundColor:'white'}}
                                                rows={rows}
                                                columns={columns}
                                                pageSize={5}
                                                rowsPerPageOptions={[5]}
                                                checkboxSelection
                                                getRowId={(row) => row._id}
                                            />

                                        </Stack>
                                    </FormControl><br/><br/>

                                    <FormControl fullWidth>
                                    <Button type="submit" size="medium" variant="contained" color="warning" sx={{ width: '20%',marginLeft:60}}>CALCULATE</Button>
                                    </FormControl><br/><br/>

                                    <FormControl fullWidth>
                                        <Stack direction={'row'}>
                                            <TextField
                                                id="note"
                                                label="Note"
                                                type="text"
                                                sx={{ width: '100%', backgroundColor: 'white' }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                size="small"
                                            />
                                        </Stack>
                                    </FormControl><br />
                                </div><br />

                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <Button type="submit" size="medium" variant="contained" color="error" onClick={() => window.location.href = ""} sx={{ width: '49%' }}> CANCEL </Button>
                                        <Button type="submit" size="medium" variant="contained" color="primary" sx={{ width: '49%' }}>CONFIRM</Button>
                                    </Stack>

                                </div>


                            </form>



                        </div>
                    </Paper>
                </Stack>
                <Stack direction={'col'} flex={1}></Stack>
            </Stack >
    
        </diV >

    )
}

export default Order