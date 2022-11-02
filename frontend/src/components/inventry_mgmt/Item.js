import React ,{useState} from "react"
import { TextField, Button, Stack, Paper } from "@mui/material";
import axios from "axios";

function Item() {

    const [item_id, setItemId] = useState("");
    const [item_name, setItemName] = useState("");
    const [item_code, setItemCode] = useState("");
    const [item_price, setItemPrice] = useState("");
    const [supplier_id, setSupplierId] = useState("");
    const [item_count, setItemCount] = useState("");
    const [total_price,setTotalPrice] = useState("");
    

    function sendData(e) {
        e.preventDefault();

        const newitem = {
          
            item_name,item_code,item_price,supplier_id,item_count,item_id,total_price
            
        }

        axios.post("http://localhost:4000/item/insert", newitem).then(() => {
            alert("Item Details Successfully added.");

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
                            <h2 style={{ fontFamily: 'sans-serif', color: 'black' }}>ADD ITEM DETAILS</h2>
                        </Stack><br />
                        <div>
                            <form class="form-card" onSubmit={sendData}>


                                <div class="row justify-content-between text-left" >
                                    <Stack spacing={2} direction={'row'}>
                                        <TextField sx={{ backgroundColor: 'white' }} label="Item ID" size="small" id="item_id" name="item_id" placeholder="Item ID"  required onChange={
                                            (e) => {
                                                setItemId(e.target.value);
                                            }}>
                                        </TextField>
                                        <TextField  sx={{ backgroundColor: 'white' }} label="Item Name" size="small" id="item_name" name="item_name" placeholder="Item Name" onblur="validate(2)"  required onChange={
                                            (e) => {
                                                setItemName(e.target.value);
                                            }} >
                                        </TextField>
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                    <Stack spacing={2} direction={'row'} >
                                        <TextField sx={{ backgroundColor: 'white' }} label="Item Code" size="small" id="item_code" name="item_code" placeholder="Item Code" onblur="validate(3)" required onChange={
                                            (e) => {
                                                setItemCode(e.target.value);
                                            }}>
                                        </TextField>

                                        <TextField label="Supplier Id" size="small" id="supplier_id" name="supplier_id" placeholder="Supplier Id" onblur="validate(3)" sx={{ backgroundColor: 'white' }}  required onChange={
                                            (e) => {
                                                setSupplierId(e.target.value);
                                            }}>
                                        </TextField>
                                       
                                    </Stack>
                                </div><br />
                                <div class="row justify-content-between text-left">
                                      <Stack spacing={2} direction={'row'} >
                                        <TextField label="Item Count" size="small" id="item_count" name="item_count" placeholder="Item Qty" onblur="validate(3)" sx={{ backgroundColor: 'white' }}  required onChange={
                                            (e) => {
                                                setItemCount(e.target.value);
                                            }}>
                                        </TextField>

                                        <TextField  sx={{ backgroundColor: 'white' }} label="Item Price" size="small" id="item_price" name="item_price" placeholder="Item Price" onblur="validate(4)"  required onChange={
                                            (e) => {
                                                setItemPrice(e.target.value);
                                            }} >
                                        </TextField>
                                      </Stack>
                                       <Stack>
                                      <br/>
                                       </Stack>
                                      <Stack spacing={2} direction={'row'} >
                                        <TextField label="Item Total Price" size="small" id="total_price" name="total_price" placeholder="Total Price" onblur="validate(3)" sx={{ backgroundColor: 'white' }}  required onChange={
                                            (e) => {
                                                setTotalPrice(e.target.value);
                                            }}>
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