import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
function SitedetailsManagement() {

    const [sitedetails, setsitedetails] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/site/`)
            .then((sitedetails) => {
                setsitedetails(sitedetails.data);
                console.log(sitedetails.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);


    function deleteMovie(id) {
        axios.delete(`http://localhost:4000/site/delete/${id}`)
            .then(() => {
                alert("Deleted Successfully");
            }).catch((err) => {
                alert("error : " + err);
            });
        window.location.reload();
    }

    return (



        <div className='container-table100'>

        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Admin: Manage Site Details</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Site Details</p>
                </div>
            </div>
        </header>
        <br></br>
        <br></br>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a href="/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> + Add New Fuel Details</a>


        </div>
        <br></br>
        <br></br>

        <div class="row">
            <div class="col-md-12">
                <div class="table-wrap">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Site Name</th>
                                <th scope="col">Site Location</th>
                                <th scope="col">Site Manager</th>
                                <th scope="col">Construction Type</th>
                                <th scope="col">Number of Employees</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sitedetails.map((val, key) => {
                                    return (
                                        <tr>
                                            <td style={{ width: "100px" }}>{val.sitename}</td>
                                            <td style={{ width: "100px" }}>{val.site_location}</td>
                                            <td style={{ width: "100px" }}>{val.siteManager}</td>
                                            <td style={{ width: "100px" }}>{val.con_type}</td>
                                            <td style={{ width: "100px" }}>{val.emp_num}</td>
                                            <td style={{ width: "100px" }}>{val.description}</td>
                                            <td style={{ width: "100px" }}><a href={`/updatesitedetails/` + val._id} className='btn btn-warning'>Update</a>
                                                <Popup
                                                    trigger={<button className="btn btn-danger"> Delete </button>}
                                                    modal
                                                    nested
                                                >
                                                    {close => (
                                                        <div className="container-fluid" style={{ padding: 5 }}>



                                                            <div className="h-100 p-5 bg-light border rounded-3">
                                                                <h1 className="card-title">Delete This Field ?</h1>
                                                                <div className>
                                                                    <br></br>
                                                                    <button
                                                                        className="btn btn-success"
                                                                        onClick={() => {
                                                                            console.log('modal closed ');
                                                                            close();
                                                                        }}
                                                                    >
                                                                        Cancle
                                                                    </button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                    <button className='btn btn-danger' onClick={() => deleteMovie(val._id)}>Delete</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Popup>
                                                <Popup
                                                    trigger={<button className="btn btn-info"> View Detail </button>}
                                                    modal
                                                    nested
                                                >
                                                    {close => (
                                                        <div className="container-fluid" style={{ padding: 5 }}>



                                                            <div className="h-100 p-5 bg-light border rounded-3">
                                                                <h1 className="card-title">Site Name: {val.sitename}</h1>
                                                                <p className="card-text">Site Location: {val.site_location}</p>
                                                                <p className="card-text">Site Manager: {val.siteManager}</p>
                                                                <span className="card-text">Construction Type: {val.con_type}</span> <br />
                                                                <span className="card-text">Number of Employees: {val.emp_num}</span><br />
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

export default SitedetailsManagement;