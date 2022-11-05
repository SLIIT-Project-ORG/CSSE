import React, { Component } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import ResponsiveAppBar from '../../components/user_mgmt/header';

export const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};


class UpdateSiteDetails extends Component {

  constructor(props) {
    super(props);

    this.onChangesitename = this.onChangesitename.bind(this);

    this.onChangesite_location = this.onChangesite_location.bind(this);
    this.onChangesiteManager = this.onChangesiteManager.bind(this);
    this.onChangeemp_num = this.onChangeemp_num.bind(this);
    this.onChangecon_type = this.onChangecon_type.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      sitename: "",
      emp_num: "",
      site_location: "",
      siteManager: "",
      con_type: "",
      records: [],
    };
  }

  componentDidMount() {

    axios
      .get("http://localhost:4000/site/get/" + this.props.params.id)
      .then((response) => {
        this.setState({
          sitename: response.data.sitename,
          emp_num: response.data.emp_num,
          con_type: response.data.con_type,
          site_location: response.data.site_location,
          siteManager: response.data.siteManager,
         
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  onChangesitename(e) {
    this.setState({
      sitename: e.target.value,
    });
  }



  onChangeemp_num(e) {
    this.setState({
      emp_num: e.target.value,
    });
  }
  onChangecon_type(e) {
    this.setState({
      con_type: e.target.value,
    });
  }
  onChangesite_location(e) {
    this.setState({
      site_location: e.target.value,
    });
  }
  onChangesiteManager(e) {
    this.setState({
      siteManager: e.target.value,
    });
  }
 


  onSubmit(e) {
    e.preventDefault();
    const newEditedProduct = {
      sitename: this.state.sitename,
      emp_num: this.state.emp_num,
      con_type: this.state.con_type,
      site_location: this.state.site_location,
      siteManager: this.state.siteManager,
      
    };
    console.log(newEditedProduct);


    axios
      .put(
        "http://localhost:4000/site/update/" + this.props.params.id,
        newEditedProduct
      )
      .then((res) => console.log(res.data));


    //this.props.history.push("");
  }
  render() {
    return (
        <div>
 <ResponsiveAppBar></ResponsiveAppBar>
                <header class="bg-dark py-5">
                  <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                      <h1 class="display-4 fw-bolder">Admin: Update Site Details</h1>
                      <p class="lead fw-normal text-white-50 mb-0">Site Details</p>
                    </div>
                  </div>
                </header>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <a href="/managesite" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> Go Back</a>


                </div>
                <div className="container">

                  <div className="row align-items-md-stretch">

                    <div className="col-md-6">
                      <div className="h-100 p-5 bg-light border rounded-3">
                        <form onSubmit={this.onSubmit}>
                          <div class="form-row">


                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-form-label">Site Name </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.sitename}
                                  onChange={this.onChangesitename}
                                />
                              </div>
                            </div>



                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-form-label">Site location: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.site_location}
                                  onChange={this.onChangesite_location}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-form-label">Site Manager Name: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.siteManager}
                                  onChange={this.onChangesiteManager}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-form-label">Number of employees: </label>
                                <input
                                  type="Number"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.emp_num}
                                  onChange={this.onChangeemp_num}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-form-label">Construcyion Type: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.con_type}
                                  onChange={this.onChangecon_type}
                                />
                              </div>
                            </div>
                          

                            <br />

                            <div className="form-group row">
                              <input
                                type="submit"
                                value="Update Record"
                                className="btn btn-primary"

                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <img src={`https://www.kindpng.com/picc/m/382-3824380_engineer-clipart-house-construction-construction-building-png-transparent.png`} class="img-fluid" alt="..." />
                    </div>
                  </div>
                </div>
              </div>



    );
  }


}
export default withRouter(UpdateSiteDetails);