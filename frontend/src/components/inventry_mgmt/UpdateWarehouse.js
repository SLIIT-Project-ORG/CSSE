import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Stack, Button, TextField, FormLabel, InputLabel, FormControl, } from '@mui/material';
import { borderColor } from '@mui/system';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

export default function UpdateWManagement() {

    const { id } = useParams();

    const [data, setData] = useState('');

    const sendData = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:4000/warehouse/update/${id}`, data).then(() => {
            swal({

                title: "Update",
                text: "WareHouse Details  Update Successfully",
                icon: "Success",
                button: "OK",
            });

        }).catch((err) => {
            alert(err)
        })

    }

    useEffect(() => {
        axios.get(`http://localhost:4000/warehouse/${id}`).then((res) => {
            setData(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])




    const handleChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }



    return (
        <diV>

            <Stack direction={'row'} flex={2} sx={{ marginTop: 10 }}>
                <Stack direction={'col'} flex={1}></Stack>
                <Stack direction={'col'}>
                    <Paper variant="elevation" sx={{ padding: '30px', marginTop: '30px', backgroundColor: 'whitesmoke' }} >
                        <Stack spacing={2} direction={'row'}>
                            <h2 style={{ fontFamily: 'sans-serif', color: 'black' }}>UPDATE WAREHOUSE DETAILS</h2>
                        </Stack><br />
                        <div>
                            <FormControl>
                            <form class="form-card" onSubmit={sendData} >



                               <Stack spacing={2} direction={'row'}>
                                       <FormControl>
                                       <FormLabel style={{color:'black',fontWeight:'bold'}}>   ID </FormLabel>
                                       <TextField sx={{ backgroundColor: 'white' }} size="small" id="warehouse_id" name="warehouse_id" value={data.warehouse_id} onblur="validate(2)" onChange={handleChange}>
                                       </TextField>

                                       <FormLabel style={{color:'black',fontWeight:'bold'}}>  Name </FormLabel>
                                       <TextField sx={{ backgroundColor: 'white' }} size="small" id="warehouse_name" name="warehouse_name" value={data.warehouse_name} onblur="validate(2)" onChange={handleChange}>
                                       </TextField>
                                       </FormControl>
                                   </Stack>
                              <br />

                              
                                   
                               
                               <div class="row"/>
                              
                                    <Stack spacing={2} direction={'row'}>
                                        <FormControl>
                                        <FormLabel style={{color:'black',fontWeight:'bold'}}>Address</FormLabel>
                                        
                                        <TextField sx={{ backgroundColor: 'white'}} size="small" id="warehouse_address" name="warehouse_address"  value={data.warehouse_address} onblur="validate(3)" onChange={handleChange}>
                                        </TextField>

                                      
                                        <FormLabel style={{color:'black',fontWeight:'bold'}}>   Company </FormLabel>
                                        <TextField sx={{ backgroundColor: 'white'}} size="small" id="warehouse_company" name="warehouse_company" value={data.warehouse_company} onblur="validate(4)" onChange={handleChange} >
                                        </TextField>
                                        </FormControl>
                                    </Stack>
                                 <br />
                               
                            
                                
                                <div class="row justify-content-between text-left ">
                                   
                                    <Stack spacing={2} direction={'row'}>
                                    <FormControl>
                                        <FormLabel style={{color:'black',fontWeight:'bold'}}>MobileNo</FormLabel>
                                        <TextField sx={{ backgroundColor: 'white' }} size="small" id="warehouse_contactno" name="warehouse_contactno" value={data.warehouse_contactno} placeholder="Contact No" onblur="validate(5)" onChange={handleChange}>
                                        </TextField>
                                        </FormControl>
                                    </Stack>
                                </div><br />
                             
                          



                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        
                                        <Button type="submit" size="small" variant="contained" color="error" onClick={() => window.location.href = ""} sx={{ width: '50%' }}> Cancel </Button>
                                        <Button type="submit" size="small" variant="contained" color="success" sx={{ width: '50%' }}>UPDATE</Button>
                                     
                                    </Stack>

                                </div>


                            </form>
</FormControl>


                        </div>
                    </Paper>
                </Stack>
                <Stack direction={'col'} flex={1}></Stack>
            </Stack>
            <Stack spacing={1} >

                <Button type="submit" size="medium" variant="contained" color="success" sx={{ width: '15%', marginLeft: 120, marginTop: 5 }} onClick={() => window.location.href = "/wmanagement"}>VIEW WAREHOUSE</Button>
            </Stack>


        </diV>
    )
}
