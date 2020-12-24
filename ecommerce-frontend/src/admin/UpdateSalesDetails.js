import React, {useState, useEffect} from "react";
import Layout from "../core/Layout";
import {isAuthenticated} from "../auth";
import {Link, Redirect} from "react-router-dom";
import moment from "moment";
import {updateCustomer, customerdetail, getSalesusers} from "../salesadmin/apiSalesAdmin";
    
const UpdateCustomersDetails = props => {

    const [prifletab, setPrifletab] = useState(true);
    const [addressestab, setAddressestab] = useState(false);
    
    const [values, setValues] = useState({
        name: "",
        email: "",
        mobile: "",
        role:"",
        packagedays:"",
        history: [],
        addresses: [],
        targetcalory: "",
        packagestartedfrom: "",
        about: "",
        salehandleby: "",
        salehandlers:[],
        holdortrialdays:"",
        holdortrialstartdate:"",
        holdortrialenddate:"",
        diagnosis:"",
        specialconsideration:"",
        typeofprogram:"",
        status:"",
        lastupdateduser:"",
        contactperson:"",
        contact:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        loading: false,
        error: false,
        redirectToProfile: false,
        formData: ""
    });
    const { user, token } = isAuthenticated();

    const {
        name,
        email,
        mobile,
        history,
        addresses,
        role,
        targetcalory,
        packagedays,
        packagestartedfrom,
        about,
        salehandleby,
        salehandlers,
        holdortrialdays,
        holdortrialstartdate,
        holdortrialenddate,
        diagnosis,
        specialconsideration,
        typeofprogram,
        status,
        contactperson,
        contact,
        street,
        city,
        state,
        zipcode,
        lastupdateduser,
        loading,
        error,
        redirectToProfile,
        createdCustomer,
        formData
    } = values;


    const handleChange = name => event => { 
        const value =
            name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });  
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });
        updateCustomer(props.match.params.userId, user._id, token, formData).then(
            data => {
                if (data.error) {
                    setValues({ ...values, error: data.error });
                } else {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        mobile: "",
                        role:"",
                        history: [],
                        addresses: [],
                        targetcalory: "",
                        packagedays: "",
                        packagestartedfrom: "",
                        about: "",
                        salehandleby:"",
                        salehandlers:[],
                        holdortrialdays:"",
                        holdortrialstartdate:"",
                        holdortrialenddate:"",
                        diagnosis:"",
                        specialconsideration:"",
                        typeofprogram:"",
                        status:"",
                        lastupdateduser:"",
                        loading: false,
                        error: false,
                        createdCustomer: data.name,
                        redirectToProfile: true
                        
                    });
                }
            }
        );
    };

    const init = userId => {
        customerdetail(userId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                // populate the state
                setValues({
                    ...values,
                    name: data.name,
                    email: data.email,
                    mobile: data.mobile,
                    role: data.role,
                    targetcalory: data.targetcalory,
                    packagedays: data.packagedays,
                    packagestartedfrom: data.packagestartedfrom,
                    about: data.about,
                    holdortrialdays:data.holdortrialdays,
                    holdortrialstartdate:data.holdortrialstartdate,
                    holdortrialenddate:data.holdortrialenddate,
                    diagnosis:data.diagnosis,
                    specialconsideration:data.specialconsideration,
                    typeofprogram:data.typeofprogram,
                    status:data.status,
                    createdCustomer: data.name,
                    formData: new FormData()
                });
                
                // load sales users
                loadSalesUsers();
            }
        });
    };

    // load sales users or person and set form data
    let roles ="6";
    const loadSalesUsers = () => { 
        getSalesusers(user._id, token, { roles }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    salehandlers: data,
                    formData: new FormData()
                });
            }
        });
    };

    useEffect(() => {
        const userId = props.match.params.userId;
        init(userId);
    }, []);


    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <h3>{createdCustomer} Profile Update  </h3>
            <div className="prifletab" style={{ display: (prifletab ? 'block' : 'none') }}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={handleChange("name")}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    onChange={handleChange("email")}
                    className="form-control"
                    value={email}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Mobile</label>
                <input
                    onChange={handleChange("mobile")}
                    type="number"
                    className="form-control"
                    value={mobile}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Role</label>
                <select
                    onChange={handleChange("role")}
                    className="form-control"
                >
                    <option>Please select</option>
                    <option value="6">Sales Person</option>
                </select>
            </div>
            
            <div className="form-group">
                <label className="text-muted">Modified By</label>
                <input readOnly
                    onChange={handleChange("lastupdateduser")}
                    type="text"
                    className="form-control"
                    value={user.name}
                />
            </div>
            </div>

            <button className="btn btn-outline-primary">Update</button>
        </form>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showSuccess = () => (
        <div
            className="alert alert-info"
            style={{ display: createdCustomer ? "" : "none" }}
        >
            <h2>{`${createdCustomer}`} profile is updated!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/admin/salesusers" />;
            }
        }
    };

    const goBack = () => (
        <div className="mt-3 mb-3 bradcrum">
            <Link  to="/admin/dashboard" className="text-warning">
                Dashboard >
            </Link><span>  &nbsp;  </span>
            <Link to="/admin/salesusers" className="text-warning">
                Manage Sales Person
            </Link>
        </div>
    );

    const ShowHideTabs = tabname => {
        if(tabname == 'addressestab'){
            setAddressestab(true);
            setPrifletab(false);
        }
        if(tabname == 'prifletab'){
            setAddressestab(false);
            setPrifletab(true);
        }
        
    }

    const profiletabs = () => {
        return (
            <div className="card">
                <h4 className="card-header">Update Profile Tabs</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <a className="nav-link" onClick={ () => ShowHideTabs('prifletab') }>
                            Profile
                        </a>
                    </li>
                </ul>
            </div>
        );
    };
    
    return (
        <Layout
            title="Manage Sales Users"
            description="Perform CRUD on Sales Users"
            className="container-fluid"
        >    
            <div className="row">
                <div className="col-12">{goBack()} </div>
                <div className="col-3">{profiletabs()}</div>
                <div className="col-9">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                    {redirectUser()}
                </div>
            </div>
        </Layout>
    );
};

export default UpdateCustomersDetails;
