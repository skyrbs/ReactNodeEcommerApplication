import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { read, getPurchaseHistory } from "./apiUser";
import moment from "moment";

const Dashboard = () => {
    const [history, setHistory] = useState([]);
    const [values, setValues] = useState({
        mobile: "",
        packagedays: "",
        packagestartedfrom: "",
        salehandleby: "", 
        targetcalory: "",       
        error: false,
        success: false
    });
    const { mobile, packagedays, packagestartedfrom, salehandleby,
     targetcalory, error, success } = values;
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();
    const token = isAuthenticated().token;

    const init = (userId, token) => {
        getPurchaseHistory(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setHistory(data);
            }
        });
    };
    

    const readprofiledata = userId => {
        // console.log(userId);
        read(userId, token).then(profiledata => {
            if (profiledata.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ ...values, name: profiledata.name, email: profiledata.email,
                mobile: profiledata.mobile, packagedays: profiledata.packagedays, 
                packagestartedfrom: profiledata.packagestartedfrom, 
                salehandleby: profiledata.salehandleby, targetcalory: profiledata.targetcalory});
            }
        });
    };

    useEffect(() => {        
        readprofiledata(_id);
        init(_id, token);
    }, []);

    const userLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/cart">
                            My Cart
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to={`/profile/${_id}`}>
                            Update Profile
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item"><label> Name: </label> {name}</li>
                    <li className="list-group-item"><label> Email: </label> {email}</li>
                    <li className="list-group-item"><label> Mobile: </label> {mobile}</li>
                    <li className="list-group-item"><label> Susbscribe Package: </label>
                         {packagedays === 0 ? "No Package": packagedays } Days</li>
                    <li className="list-group-item"> <label> Package Starting Date: </label>
                       {moment(packagestartedfrom).format('DD/MMM/YYYY')}</li>
                    <li className="list-group-item"> <label> Calory Target: </label>
                      {targetcalory === 0 ? "No Calory Target": targetcalory }</li>
                    <li className="list-group-item"><label> User Role: </label>
                         {role === 1 ? " Admin" : " Registered User"}
                    </li>
                </ul>
            </div>
        );
    };

    const purchaseHistory = history => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Purchase history</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        {history.map((h, i) => {
                            return (
                                <div key={i}>
                                    <hr />
                                    {h.products.map((p, i) => {
                                        return (
                                            <div key={i}>
                                                <h6>Product name: {p.name}</h6>
                                                <h6>
                                                    Product price: ${p.price}
                                                </h6>
                                                <h6>
                                                    Purchased date:{" "}
                                                    {moment(
                                                        p.createdAt
                                                    ).fromNow()}
                                                </h6>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Layout
            title="Dashboard"
            description={`G'day ${name}!`}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-3 sidebardash">{userLinks()}</div>
                <div className="col-9 rightbardash">
                    {userInfo()}
                    {purchaseHistory(history)}
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
