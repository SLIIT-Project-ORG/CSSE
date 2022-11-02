import React from "react"
import { TextField, Button, Stack, Paper } from "@mui/material";
import StickyHeadTable from "../Common/StickyHeadTable";


function ViewInventry() {
    return (
        <diV>

            <Stack direction={'row'} flex={1} sx={{ marginTop:2}}>
                <Stack direction={'col'} flex={1}></Stack>
                <Stack direction={'col'}>
                    <Paper variant="elevation" sx={{ padding: '20px', marginTop: '10px', backgroundColor: 'whitesmoke' }} >
                        <Stack spacing={2} direction={'row'}>
                            <h2 style={{ fontFamily: 'sans-serif', color: 'black' }}>ITEM DETAILS</h2>
                        </Stack><br />
                        <div>
                            <StickyHeadTable/>

                             


                



                        </div>
                    </Paper>
                </Stack>
                <Stack direction={'col'} flex={1}></Stack>
            </Stack>
            <Stack spacing={1} >

                <Button type="submit" size="medium" variant="contained" color='warning' sx={{ width: '15%', marginLeft: 120, marginTop:2 }}>Back</Button>
            </Stack>


        </diV>

    )
}

export default ViewInventry