import React from "react"
import { TextField, Button, Stack, Paper, TextareaAutosize } from "@mui/material";
import { textAlign } from "@mui/system";

function UpdateInventry() {
    return (
        <diV>

            <Stack direction={'row'} flex={1} sx={{ marginTop: 10 }}>
                <Stack direction={'col'} flex={1}></Stack>
                <Stack direction={'col'}>
                    <Paper variant="elevation" sx={{ padding: '30px', marginTop: '30px', backgroundColor: 'whitesmoke' }} >
                        <Stack spacing={2} direction={'row'}>
                            <h2 style={{ fontFamily: 'sans-serif', color: 'black' }}>UPDATE INVENTRY DETAILS</h2>
                        </Stack><br />
                        <div>
                            <form class="form-card" >


                                <div class="row justify-content-between text-left" >
                                    <Stack spacing={2} direction={'row'} >
                                        <TextField sx={{ backgroundColor: 'white' }} label="Inventory ID" size="small" id="inventory_id" name="inventory_id" placeholder="Inventry ID">
                                        </TextField>
                                        <TextField sx={{ backgroundColor: 'white' }} label="Inventory_Type" size="small" id="inventory_type" name="inventory_type" placeholder="Inventory Type" onblur="validate(2)" >
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'} >
                                        <TextField sx={{ backgroundColor: 'white' }} label="Inventory Location" size="small" id="inventory_location" name="inventory_location" placeholder="Inventory Location" onblur="validate(3)">
                                        </TextField>
                                        <TextField sx={{ backgroundColor: 'white' }} label="Inventory_Name" size="small" id="inventory_name" name="inventory_name" placeholder="Inventory Name" onblur="validate(4)" >
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} >

                                        <TextareaAutosize sx={{ backgroundColor: 'white' }} style={{ height: 60 }} size="small" id="inventory_description" name="inventory_description" placeholder="Description" onblur="validate(5)" >
                                        </TextareaAutosize>
                                    </Stack>
                                </div><br />



                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <Button type="submit" size="medium" variant="contained" color="error" onClick={() => window.location.href = ""} sx={{ width: '49%' }}> Cancel </Button>
                                        <Button type="submit" size="medium" variant="contained" color="success" sx={{ width: '49%' }}>UPDATE INVENTRY</Button>
                                    </Stack>

                                </div>


                            </form>



                        </div>
                    </Paper>
                </Stack>
                <Stack direction={'col'} flex={1}></Stack>
            </Stack>
            <Stack spacing={1} >

                <Button type="submit" size="medium" variant="contained" color='warning' sx={{ width: '15%', marginLeft: 120, marginTop: 5 }}>Back</Button>
            </Stack>



        </diV>

    )
}

export default UpdateInventry