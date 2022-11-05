import React, { useState } from "react"
import { TextField, Button, Stack, Paper } from "@mui/material";
import axios from "axios";



function WareHouse() {

    const [warehouse_id, setWareHouseId] = useState("");
    const [warehouse_name, setWareHouseName] = useState("");
    const [warehouse_address, setWareHouseAddress] = useState("");
    const [warehouse_company, setWareHouseCompany] = useState("");
    const [warehouse_contactno, setWareHouseContactNo] = useState("");



    function sendData(e) {
        e.preventDefault();

        const newwarehouse = {

            warehouse_id, warehouse_name, warehouse_address, warehouse_company, warehouse_contactno

        }

        axios.post("http://localhost:4000/warehouse/insert", newwarehouse).then(() => {
            alert("WareHouse Details Successfully added.");

        }).catch((err) => {
            alert(err)
        })
    }
    return (
        <diV>

            <Stack direction={'row'} flex={1} sx={{ marginTop: 10 }}>
                <Stack direction={'col'} flex={1}></Stack>
                <Stack direction={'col'}>
                    <Paper variant="elevation" sx={{ padding: '30px', marginTop: '30px', backgroundColor: 'whitesmoke' }} >
                        <Stack spacing={2} direction={'row'}>
                            <h2 style={{ fontFamily: 'sans-serif', color: 'black' }}>ADD WAREHOUSE DETAILS</h2>
                        </Stack><br />
                        <div>
                            <form class="form-card" onSubmit={sendData} >


                                <div class="row justify-content-between text-left" >
                                    <Stack spacing={2} direction={'row'}>
                                    <TextField sx={{ backgroundColor: 'white' }} label="WareHouse ID" size="large" id="warehouse_id" name="warehouse_id" placeholder="WareHouse ID" onblur="validate(2)" required onChange={
                                            (e) => {
                                                setWareHouseId(e.target.value);
                                            }}>
                                        </TextField>
                                        

                                        <TextField sx={{ backgroundColor: 'white' }} label="WareHouse Name" size="large" id="warehouse_name" name="warehouse_name" placeholder="WareHouse Name" onblur="validate(2)" required onChange={
                                            (e) => {
                                                setWareHouseName(e.target.value);
                                            }}>
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <TextField sx={{ backgroundColor: 'white' }} label="WareHouse Address " size="small" id="warehouse_address" name="warehouse_address" placeholder="WareHouse Address" onblur="validate(3)" required onChange={
                                            (e) => {
                                                setWareHouseAddress(e.target.value);
                                            }}>
                                        </TextField>
                                        <TextField sx={{ backgroundColor: 'white' }} label="WareHouse Company" size="small" id="warehouse_company" name="warehouse_company" placeholder="WareHouse Company" onblur="validate(4)" required onChange={
                                            (e) => {
                                                setWareHouseCompany(e.target.value);
                                            }} >
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} s>
                                      
                                        <TextField label="Contact No" sx={{ backgroundColor: 'white' }} size="small"  id="warehouse_contactno" name="warehouse_contactno" placeholder="Contact No" onblur="validate(5)" required onChange={
                                            (e) => {
                                                setWareHouseContactNo(e.target.value);
                                            }}>
                                        </TextField>
                                    </Stack>
                                </div><br />



                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <Button type="submit" size="medium" variant="contained" color="error" onClick={() => window.location.href = ""} sx={{ width: '49%' }}> Cancel </Button>
                                        <Button type="submit" size="medium" variant="contained" color="primary" sx={{ width: '49%' }}>ADD WAREHOUSE</Button>
                                    </Stack>

                                </div>


                            </form>



                        </div>
                    </Paper>
                </Stack>
                <Stack direction={'col'} flex={1}></Stack>
            </Stack>
            <Stack spacing={1} >

                <Button type="submit" size="medium" variant="contained" color="success" sx={{ width: '15%', marginLeft: 120, marginTop: 5 }}   onClick={() => window.location.href = '/wmanagement'} >VIEW WAREHOUSE</Button>
            </Stack>


        </diV>

    )
}

export default WareHouse