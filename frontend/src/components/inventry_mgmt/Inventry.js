import React, { useEffect, useState } from "react"
import { TextField, Button, Stack, Paper, TextareaAutosize, Alert, InputLabel, Select, FormControl, MenuItem } from "@mui/material";
import axios from "axios";


function Inventry() {

    const [warehouse_id, setWareHouseId] = useState("");
    const [inventory_type, setInventoryType] = useState("");
    const [inventory_location, setLocation] = useState("");
    const [inventory_name, setInventoryName] = useState("");
    const [inventory_description, setDescription] = useState("");

    const handleWarehouseChanges = (event) => {
        setWareHouseId(event.target.value);
    }

    function sendData(e) {
        e.preventDefault();

        const newinventory = {

            warehouse_id, inventory_type, inventory_location, inventory_name, inventory_description

        }

        axios.post("http://localhost:4000/inventory/insert", newinventory).then(() => {
            alert("Inventory Details Successfully added.");

        }).catch((err) => {
            alert(err)
        })
    }

    //API CALL
    const [warehouseList,setWarehouseList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/warehouse')
        .then((res)=>{
            setWarehouseList(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err.message);
        })
    },[])

    return (
        <diV>

            <Stack direction={'row'} flex={1} sx={{ marginTop: 10 }}>
                <Stack direction={'col'} flex={1}></Stack>
                <Stack direction={'col'}>
                    <Paper variant="elevation" sx={{ padding: '30px', marginTop: '30px', backgroundColor: 'whitesmoke' }} >
                        <Stack spacing={2} direction={'row'}>
                            <h2 style={{ fontFamily: 'sans-serif', color: 'black' }}>ADD INVENTRY DETAILS</h2>
                        </Stack><br />
                        <div>
                            <form class="form-card" onSubmit={sendData} >


                                <div class="row justify-content-between text-left" >
                                    <Stack spacing={2} direction={'row'}>
                                        {/* <TextField sx={{ backgroundColor: 'white' }} label="WareHouse ID" size="small" id="warehouse_id" name="warehouse_id" placeholder="WareHouse ID" required onChange={
                                            (e) => {
                                                setWareHouseId(e.target.value);
                                            }}>
                                        </TextField> */}



                                        <FormControl fullWidth>
                                            <Stack direction={'row'}>
                                                <InputLabel id="select-label-warehouse" sx={{ mt: '-6px' }}>Warehouse ID</InputLabel>
                                                <Select
                                                    placeholder="Select one Warehouse"
                                                    size="small" sx={{ width: '69%', backgroundColor: 'white' }}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={warehouse_id}
                                                    label="Warehouse"
                                                    onChange={handleWarehouseChanges}
                                                >
                                                    {
                                                        warehouseList.map((value, index) => {
                                                            return (
                                                                <MenuItem value={value.warehouse_id}>{value.warehouse_name}</MenuItem>
                                                            )
                                                        })

                                                    }
                                                </Select>
                                            </Stack>
                                        </FormControl><br /><br />



                                        <TextField sx={{ backgroundColor: 'white',width:'79%' }} label="Inventory_Type" size="small" id="inventory_type" name="inventory_type" placeholder="Inventory Type" onblur="validate(2)" required onChange={
                                            (e) => {
                                                setInventoryType(e.target.value);
                                            }}>
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <TextField sx={{ backgroundColor: 'white' }} label="Inventory Location" size="small" id="inventory_location" name="inventory_location" placeholder="Inventory Location" onblur="validate(3)" required onChange={
                                            (e) => {
                                                setLocation(e.target.value);
                                            }}>
                                        </TextField>
                                        <TextField sx={{ backgroundColor: 'white' }} label="Inventory_Name" size="small" id="inventory_name" name="inventory_name" placeholder="Inventory Name" onblur="validate(4)" required onChange={
                                            (e) => {
                                                setInventoryName(e.target.value);
                                            }} >
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} s>

                                        <TextareaAutosize sx={{ backgroundColor: 'white' }} style={{ height: 60 }} size="small" id="inventory_description" name="inventory_description" placeholder="Description" onblur="validate(5)" required onChange={
                                            (e) => {
                                                setDescription(e.target.value);
                                            }}>
                                        </TextareaAutosize>
                                    </Stack>
                                </div><br />



                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <Button type="submit" size="medium" variant="contained" color="error" onClick={() => window.location.href = "/"} sx={{ width: '49%' }}> Cancel </Button>
                                        <Button type="submit" size="medium" variant="contained" color="primary" sx={{ width: '49%' }} >ADD INVENTRY</Button>
                                    </Stack>

                                </div>


                            </form>



                        </div>
                    </Paper>
                </Stack>
                <Stack direction={'col'} flex={1}></Stack>
            </Stack>
            <Stack spacing={1} >

                <Button type="submit" size="medium" variant="contained" color="success" sx={{ width: '10%', marginLeft: 120, marginTop: 5 }} onClick={() => window.location.href = "/viewinventry"}>VIEW INVENTRY</Button>
            </Stack>


        </diV>

    )
}

export default Inventry