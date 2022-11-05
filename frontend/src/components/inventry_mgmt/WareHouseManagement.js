import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '@mui/material';
import { borderColor } from '@mui/system';

export default function WManagement() {

    const [warehouseData, setWarehouseData] = useState([]);

    //Search
    const [searchTerm, setsearchTerm] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:4000/warehouse/`)
            .then((res) => {
                setWarehouseData(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    function deletewarehouse(id) {
        axios.delete(`http://localhost:4000/warehouse/delete/${id}`).then(() => {
            alert(" WareHouse Details Successfully deleted");
            window.location.href = "/wmanagement";
        }).catch((err) => {
            alert(err);
        })
    }



    return (
        <Card style={{width:900, height:600  ,marginLeft:300, marginRight:300, marginTop:100}}>
        <div>
            <div>
            <div class="container">
                    <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body  color-dark">
                        <div class="row ">
                        <div class="col-sm-3 mt-5 mb-4 text-dark" >
                                <div className="search">
                                    <form class="form-inline">
                                        <input class=" mr-sm-2 border border-dark" type="search" placeholder="Search" aria-label="Search" name="searchTerm"

                                            onChange={(e) => {

                                                setsearchTerm(e.target.value);

                                            }}
                                        />


                                    </form>

                                </div>
                            </div>
                            <div class="col-sm-3 offset-sm-2  mb-4 text-gred text-danger" ><h2><b>WAREHOUSE DETAILS</b></h2></div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">

            </div>
                        </div>
                        <div class="row">
                            <div class="table-responsive">

                                <table     class="table table-striped table-hover table-bordered" style={{ 'overflow': 'scroll', 'width': '900px',borderColor:'black',backgroundColor:'ghostwhite' }}>
                                    <thead>
                                        <tr>
                                            <th> ID</th>
                                            <th> Name</th>
                                            <th> Address</th>
                                            <th> Company</th>
                                            <th>Contact Number</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            warehouseData.filter(val => {

                                                if (searchTerm === "") {

                                                    return val;

                                                } else if (

                                                    val.warehouse_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                    val.warehouse_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                    val.warehouse_address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                    val.warehouse_company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                    val.warehouse_contactno.toLowerCase().includes(searchTerm.toLowerCase())


                                                ) {

                                                    return val;

                                                }

                                            })
                                                .map((val, key) => {
                                                    return (
                                                        <tr className="bg-light  text-dark">
                                                            <td>{val.warehouse_id}</td>
                                                            <td>{val.warehouse_name}</td>
                                                            <td>{val.warehouse_address}</td>
                                                            <td>{val.warehouse_company}</td>
                                                            <td>{val.warehouse_contactno}</td>

                                                            <td><button style={{ 'border': 'none' }}><a href={`/updatewmanagement/` + val._id}><img src="https://img.icons8.com/external-febrian-hidayat-glyph-febrian-hidayat/30/000000/external-edit-user-interface-febrian-hidayat-glyph-febrian-hidayat.png" /></a></button>
                                                                <button style={{ 'border': 'none' }} onClick={() => deletewarehouse(val._id)}><img src="https://img.icons8.com/metro/25/ff0000/trash.png" /></button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                        }

                                    </tbody>
                                </table>

                            </div>
                        </div>


                    </div>




                </div>



            </div>

        </div>
        </Card>
    )
}
