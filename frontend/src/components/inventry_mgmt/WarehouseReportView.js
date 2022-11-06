import React, { useEffect, useState } from "react";
import ReportGenerator from "./ReportGenerator";
import axios from "axios";

export default  function WareHouseReporttView() {

    const [warehouse, setwarehouse] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:4000/warehouse/").then(res => {
            setwarehouse(res.data)
        })

    },[]);

        return (

            <div>
                <div className="container p-3" style={{marginLeft:"650px",marginTop:"-40px"}}>
                    <div className="row">
                        {
                            <div className="row">
                                {(
                                    <button className="btn btn-primary col-lg-2 p-2" style={{width:'300px'}}  onClick={() => ReportGenerator(warehouse)}>
                                        Download PDF
                                    </button>
                                )}
                            </div>
                        }
                    </div>
                </div>
            </div>

        )

}
