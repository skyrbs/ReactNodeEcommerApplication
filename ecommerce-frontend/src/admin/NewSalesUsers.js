import React, {useState, useEffect} from "react";
import {Link, Redirect} from "react-router-dom";
import Layout from "../core/Layout";
import {signup,isAuthenticated } from "../auth";
import {getSalesusers} from "../salesadmin/apiSalesAdmin";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewCustomer = () => {
    const [prifletab, setPrifletab] = useState(true);
    const [addressestab, setAddressestab] = useState(false);

    const {user, token} = isAuthenticated();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        role:"",
        mobile:"",
        packagedays:"",
        packagestartedfrom:new Date(),
        targetcalory:"",
        about:"",
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
        redirectToProfile: false,
        error: "",
        success: false
    });

    const { name, email, password,role,mobile, packagedays, packagestartedfrom,
        targetcalory, about,salehandleby, salehandlers,holdortrialdays,holdortrialstartdate,
        holdortrialenddate,
        diagnosis, specialconsideration, typeofprogram,status,lastupdateduser,
         redirectToProfile,
        success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password,role,mobile,packagedays,packagestartedfrom,
        targetcalory, about,salehandleby, salehandlers,holdortrialdays,holdortrialstartdate,
        holdortrialenddate, diagnosis, specialconsideration,typeofprogram,
        status,lastupdateduser, redirectToProfile}).
        then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: "",
                    email: "",
                    password: "",
                    role:"",
                    mobile:"",
                    packagedays:"",
                    packagestartedfrom:"",
                    targetcalory:"",
                    about:"",
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
                    redirectToProfile: true,
                    success: true
                });
            }
        });
    };

    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/admin/salesusers" />;
            }
        }
    };

    // load sales users or person and set form data
    let roles ="6";
    const loadSalesUsers = () => { 
        getSalesusers(user._id, token, { roles }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    salehandlers: data
                });
            }
        });
    };

    useEffect(() => {
        loadSalesUsers();
    }, []);

    const signUpForm = () => (
        <form>
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
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Mobile</label>
                <input
                    onChange={handleChange("mobile")}
                    type="text"
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
                <label className="text-muted">Password</label>
                <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
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

            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
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
            style={{ display: success ? "" : "none" }}
        >
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );

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
                <h4 className="card-header">Create  Sales Person</h4>
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
            title="Signup"
            description="Signup to Node React E-commerce App"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-12">{goBack()} </div>
                <div className="col-3">{profiletabs()}</div>
                <div className="col-9">

                    {showSuccess()}
                    {showError()}
                    {signUpForm()}
                    {redirectUser()}
                </div>
            </div>
        </Layout>
    );
};

export default NewCustomer;
