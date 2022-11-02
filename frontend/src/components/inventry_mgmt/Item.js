import React from "react"
import { TextField, Button, Stack, Paper, TextareaAutosize } from "@mui/material";
import { textAlign } from "@mui/system";

function Item() {
    return (
        <diV>

            <Stack direction={'row'} flex={1} sx={{ marginTop: 10 }}>
                <Stack direction={'col'} flex={1}></Stack>
                <Stack direction={'col'}>
                    <Paper variant="elevation" sx={{ padding: '30px', marginTop: '30px', backgroundColor: 'whitesmoke' }} >
                        <Stack spacing={2} direction={'row'}>
                            <h2 style={{ fontFamily: 'sans-serif', color: 'black' }}>ADD ITEM DETAILS</h2>
                        </Stack><br />
                        <div>
                            <form class="form-card" >


                                <div class="row justify-content-between text-left" >
                                    <Stack spacing={2} direction={'row'}>
                                        <TextField sx={{ backgroundColor: 'white' }} label="Item ID" size="small" id="item_id" name="item_id" placeholder="Item ID">
                                        </TextField>
                                        <TextField  sx={{ backgroundColor: 'white' }} label="Item Name" size="small" id="item_name" name="item_name" placeholder="Item Name" onblur="validate(2)" >
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'} >
                                        <TextField sx={{ backgroundColor: 'white' }} label="Item Code" size="small" id="item_code" name="item_code" placeholder="Item Code" onblur="validate(3)">
                                        </TextField>

                                        <TextField label="Supplier Id" size="small" id="supplier_id" name="supplier_id" placeholder="Supplier Id" onblur="validate(3)" sx={{ backgroundColor: 'white' }}>
                                        </TextField>
                                       
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                      <Stack spacing={2} direction={'row'} >
                                        <TextField label="Item Count" size="small" id="item_count" name="item_count" placeholder="Item Qty" onblur="validate(3)" sx={{ backgroundColor: 'white' }}>
                                        </TextField>

                                        <TextField  sx={{ backgroundColor: 'white' }} label="Item Price" size="small" id="item_price" name="item_price" placeholder="Item Price" onblur="validate(4)" >
                                        </TextField>
                                      </Stack>
                                       <Stack>
                                      <br/>
                                       </Stack>
                                      <Stack spacing={2} direction={'row'} >
                                        <TextField label="Item Total Price" size="small" id="total_price" name="total_price" placeholder="Total Price" onblur="validate(3)" sx={{ backgroundColor: 'white' }}>
                                        </TextField>
                                        <Button type="submit" size="medium" variant="contained" color='secondary' onClick={() => window.location.href = ""} sx={{ width: '49%' }}> CALCULATE </Button>
                                      </Stack>
                                </div><br />



                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'}>
                                        <Button type="submit" size="medium" variant="contained" color="error" onClick={() => window.location.href = ""} sx={{ width: '49%' }}> Cancel </Button>
                                        <Button type="submit" size="medium" variant="contained" color="primary" sx={{ width: '49%' }}>ADD Item</Button>
                                    </Stack>

                                </div>


                            </form>



                        </div>
                    </Paper>
                </Stack>
                <Stack direction={'col'} flex={1}></Stack>
            </Stack>
            <Stack spacing={1} >

                <Button type="submit" size="medium" variant="contained" color="success" sx={{ width: '15%', marginLeft: 120, marginTop: 5 }}>VIEW ITEM DETAILS</Button>
            </Stack>


        </diV>

    )
}

export default Item