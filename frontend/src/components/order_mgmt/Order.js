import React from "react"
import { TextField, Button, Stack, Paper, TextareaAutosize} from "@mui/material";



function Order() {
    return (
        <diV>

            <Stack direction={'row'} flex={1} sx={{ marginTop: 10 }}>
                <Stack direction={'col'} flex={1}></Stack>
                <Stack direction={'col'}>
                    <Paper variant="elevation" sx={{ padding: '30px', marginTop: '30px', backgroundColor: 'whitesmoke' }} >
                        <Stack spacing={2} direction={'row'}>
                            <h2 style={{ fontFamily: 'sans-serif', color: 'black' }}>CREATE ORDER DETAILS</h2>
                        </Stack><br />
                        <div>
                            <form class="form-card" >


                                <div class="row justify-content-between text-left" >
                                    <Stack spacing={2} direction={'row'}>
                                        <TextField sx={{ backgroundColor: 'white' }} label="Site" size="small" id="siteId" name="siteId" placeholder="Site ID">
                                        
                                        </TextField>
                                      
                                        <TextField  sx={{ backgroundColor: 'white' }} label="Supplier" size="small" id="supplierId" name="supplierId" placeholder="SupplierID" onblur="validate(2)" >
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <TextField sx={{ backgroundColor: 'white' }} label="Inventory" size="small" id="wareHouseId" name="wareHouseId" placeholder="Inventory ID" onblur="validate(3)">
                                        </TextField>
                                        <TextField  sx={{ backgroundColor: 'white' }} label="Items" size="small" id="items" name="items" placeholder="Items" onblur="validate(4)" >
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} >

                                        <TextareaAutosize  label="Description" sx={{ backgroundColor: 'white' }} style={{ height: 60 }} size="small" id="note" name="note" placeholder="//Comments" onblur="validate(5)" >
                                        </TextareaAutosize>
                                    </Stack>
                                </div><br />
                               
                             


                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <Button type="submit" size="medium" variant="contained" color="error" onClick={() => window.location.href = ""} sx={{ width: '49%' }}> CANCEL </Button>
                                        <Button type="submit" size="medium" variant="contained" color="primary" sx={{ width: '49%' }}>CREATE ORDER</Button>
                                    </Stack>

                                </div>


                            </form>



                        </div>
                    </Paper>
                </Stack>
                <Stack direction={'col'} flex={1}></Stack>
            </Stack>
            <Stack spacing={1} >

                <Button type="submit" size="medium" variant="contained" color="success" sx={{ width: '10%', marginLeft: 120, marginTop: 5 }}>VIEW ORDERS</Button>
            </Stack>


        </diV>

    )
}

export default Order