import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import ResponsiveAppBar from '../../components/user_mgmt/header';
function InvoiceManagement() {

    const [invoicedata, setinvoicedata] = useState([]);
    const [res, setres] = useState([]);
    const [searchData, setSearchData] = useState("approve");
    useEffect(() => {
        axios.get(`http://localhost:4000/order/`)
            .then((invoicedata) => {
                setinvoicedata(invoicedata.data.data);
                console.log(invoicedata.data.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:4000/order/`)
            .then((res) => {
                setres(res.data.data.items);
                console.log(res.data.data.items);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);



    

    return (



        <div className='container-table100'>
 <ResponsiveAppBar></ResponsiveAppBar>
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Admin: Manage Invoice</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Invoice Details</p>
                </div>
            </div>
        </header>
        <br></br>
        <br></br>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
           
        
        </div>
        <br></br>
        <br></br>

        <div class="row">
            <div class="col-md-12">
                <div class="table-wrap">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Site Id</th>
                                <th scope="col">Supplier id</th>
                                <th scope="col">Site Manager id</th>
                                <th scope="col">ware House ID</th>
                                <th scope="col">Items</th>
                                <th scope="col">note</th>
                                <th scope="col">staff Status</th>
                                <th scope="col">Total Amount</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                invoicedata.filter(value => {

                                    if (searchData === "") {

                                        return value;

                                    } else if (

                                        value.staffStatus.toLowerCase().includes(searchData.toLowerCase()) 

                                    ) {

                                        return value;

                                    }

                                })
                                .map((val, key) => {
                                    return (
                                        <tr>
                                            <td style={{ width: "100px" }}>{val.siteId}</td>
                                            <td style={{ width: "100px" }}>{val.supplierId}</td>
                                            <td style={{ width: "100px" }}>{val.siteManagerId}</td>
                                            <td style={{ width: "100px" }}>{val.wareHouseId}</td>
                                             <td style={{ width: "100px" }}>{val.items.map((val,int)=>{
                                                console.log(val.itemId);
                                                console.log(val.quantity);
                                                console.log(val.total);
                                                return(
                                                    <table class="table">
                                                    <thead class="thead-dark">
                                                        <tr>
                                                            <th scope="col">Item ID</th>
                                                            <th scope="col">Quentity</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <td>{val.itemId}</td>
                                                        <td>{val.quantity}</td>
                                                        <td>{val.total}</td>
                                                    </tbody>
                                                    </table>
                                                )
                                             })}</td>  
                                            <td style={{ width: "100px" }}>{val.note}</td>
                                            <td style={{ width: "100px" }}>{val.staffStatus}</td>
                                           
                                            <td style={{ width: "100px" }}>{val.totalAmount}</td>
                                            <td style={{ width: "100px" }}>{val.createdAt}</td>

                                            <td style={{ width: "100px" }}>
                                           
                                               
                                                <Popup
                                                    trigger={<button className="btn btn-info"> View Detail </button>}
                                                    modal
                                                    nested
                                                >
                                                    {close => (
                                                        <div className="container-fluid" style={{ padding: 5 }}>



                                                            <div className="h-100 p-5 bg-light border rounded-3">
                                                                <h1 className="card-title">Site ID: {val.siteId}</h1>
                                                                <p className="card-text">supplier id: {val.supplierId}</p>
                                                                <p className="card-text">Site Manager id: {val.siteManagerId}</p>
                                                                <span className="card-text">warehouse id: {val.wareHouseId}</span> <br />
                                                                {/* <span className="card-text">items: {val.items}</span><br /> */}
                                                                <span className="card-text">date :{val.createdAt}</span> <br />
                                                                <span className="card-text">Amount: {val.totalAmount}</span><br />
                                                                <div className>
                                                                    <br></br>
                                                                    <button
                                                                        className="btn btn-outline-danger"
                                                                        onClick={() => {
                                                                            console.log('modal closed ');
                                                                            close();
                                                                        }}
                                                                    >
                                                                        Close
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Popup>


                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div >
            </div >
        </div >
    </div >












    );
}

export default InvoiceManagement;