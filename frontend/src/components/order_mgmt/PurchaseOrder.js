import React, { useEffect, useState } from "react"
import { Button, Stack, Paper, TextareaAutosize, MenuItem, Select, InputLabel, FormLabel, FormControl, TextField, Input } from "@mui/material";
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function Order() {

    const handleSiteChanges = (event) => {
        setSite(event.target.value);
    };

    const handleSupplierChanges = (event) => {
        setSupplier(event.target.value);
    }

    // const { items } = useDemoData({
    //     dataSet: 'Commodity',
    //     rowLength: 10,
    //     maxColumns: 5
    // });

    // const [selectionModel, setSelectionModel] = React.useState([]);


    const [siteId, setSite] = useState('');
    const [supplierId, setSupplier] = useState('');
    const [date, setDateValue] = useState('');
    const [note, setNote] = useState('');

    const [siteList, setSiteList] = useState([]);
    const [tableItems, setTableItems] = useState([]);
    const [supplierList, setSupplierList] = useState([]);


    //custom field
    const CustomField = (props) => {
        return (
            <div>
                <TextField id="outlined-basic" label="Quantity" variant="outlined" size="small" />
            </div>
        )
    }

    const columns = [
        { field: 'item_name', headerName: 'Item Code' },
        { field: 'item_code', headerName: 'Item Name', width: 200 },
        { field: 'quantity', headerName: 'Quantity', renderCell: CustomField, width: 200 }
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

    useEffect(() => {
        axios.get(`http://localhost:4000/user/usertype/Supplier`)
            .then((res) => {
                setSupplierList(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])

    const items = [
        {
            item_name:"Cement",
            item_code:"ITEM001",
            quantity:"10"
        },
        {
            item_name:"Paints",
            item_code:"ITEM002",
            quantity:"2"
        },
    ]

    const siteManagerId = "63611d5b1928b59524679ad9";

    const createOrder = (e) => {
        e.preventDefault();
        const obj = {
            siteId, supplierId,siteManagerId, items, note, date
        }

        console.log(obj);
        axios.post(`http://localhost:4000/order/create`,obj)
        .then((res)=>{
            console.log(res.data);
            alert(res.data.message);
        })
        .catch((err)=>{
            console.log(err.message);
        })

    }

    // const getTotalValue = () =>{
    //     axios.post('http://localhost:4000/order/count')
    //     .then((data)=>{
    //         console.log(data);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }

    return (
        <diV>

            <Stack direction={'row'} flex={1} sx={{ marginTop: 10 }}>
                <Stack direction={'col'} flex={1}></Stack>
                <Stack direction={'col'}>
                    <Paper variant="elevation" sx={{ padding: '40px', backgroundColor: 'whitesmoke' }} >
                        <Stack spacing={2} direction={'row'}>
                            <h2 style={{ fontFamily: 'sans-serif', color: 'black' }}>PURCHASE ORDER</h2>
                        </Stack><br />
                        <div>
                            <form class="form-card" onSubmit={createOrder} style={{ width: '600px' }}>
                                <div className="row justify-content-between text-left" >
                                    <FormControl fullWidth>
                                        <Stack direction={'row'}>
                                            <TextField
                                                id="date"
                                                name="date"
                                                label="Date"
                                                type="date"
                                                sx={{ width: '49%', backgroundColor: 'white' }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                size="small"
                                                onChange={(e) => { setDateValue(e.target.valueAsDate) }}
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
                                                id="supplierId"
                                                name="supplierId"
                                                value={supplierId}
                                                label="Supplier"
                                                onChange={handleSupplierChanges}
                                            >
                                                {
                                                    supplierList.map((value, index) => {
                                                        return (
                                                            <MenuItem value={value.fullname}>{value.fullname}</MenuItem>
                                                        )
                                                    })

                                                }
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
                                                id="siteId"
                                                name="siteId"
                                                value={siteId}
                                                label="Site"
                                                onChange={handleSiteChanges}
                                            >
                                                {
                                                    siteList.map((value, index) => {
                                                        return (
                                                            <MenuItem value={value.sitename}>{value.sitename}</MenuItem>
                                                        )
                                                    })

                                                }
                                            </Select>
                                        </Stack>
                                    </FormControl><br /><br />
                                    <FormControl fullWidth>
                                        <Stack direction={'row'} style={{ height: 200, width: '100%' }}>
                                            <DataGrid
                                                sx={{ backgroundColor: 'white' }}
                                                rows={rows}
                                                columns={columns}
                                                pageSize={5}
                                                rowsPerPageOptions={[5]}
                                                checkboxSelection
                                                getRowId={(row) => row._id}
                                                // onSelectionModelChange={(newSelectionModel) => {
                                                //     setSelectionModel(newSelectionModel);
                                                // }}
                                                // selectionModel={selectionModel}
                                                // {...items}
                                            />

                                        </Stack>
                                    </FormControl><br /><br />

                                    {/* <FormControl fullWidth>
                                        <Button type="button" size="medium" variant="contained" color="warning" sx={{ width: '20%', marginLeft: 60 }} onClick={()=>getTotalValue()}>CALCULATE</Button>
                                    </FormControl><br /><br /> */}

                                    <FormControl fullWidth>
                                        <Stack direction={'row'} mt={5}>
                                            <TextField
                                                id="note"
                                                label="Note"
                                                type="text"
                                                sx={{ width: '100%', backgroundColor: 'white' }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                size="small"
                                                onChange={(e) => { setNote(e.target.value) }}
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