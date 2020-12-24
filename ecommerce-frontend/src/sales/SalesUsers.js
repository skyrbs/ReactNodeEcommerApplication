import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import moment from "moment";
import { getSalesusers, listCustomers, getCategories } from "./apiSalesAdmin";
import {MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable, MDBDataTable, MDBNavLink} from "mdbreact";



const SalesUsers = () => {
    const [salesusers, setSalesusers] = useState([]);
    const { user, token } = isAuthenticated();
    
    let roles ="6";
    const loadSalesusers = () => { 
        getSalesusers(user._id, token, { roles }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setSalesusers(data);
            }
        });
    };
    const newCustomer = () => (
        <div className="mt-3 mb-3">
            <Link to="/sales/newcustomer"> Create New User </Link>
        </div>
    );
    const goBack = () => (
        <div className="mt-3 mb-3 bradcrum">
            <Link to="/sales/dashboard" className="text-warning">
                Back to Dashboard
            </Link>
        </div>
    );

    useEffect(() => {
        loadSalesusers();
    }, []); 

    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc'
            },
            {
                label: 'Mobile',
                field: 'mobile',
                sort: 'asc'
            }
            
        ],
        rows: salesusers.map((data, index) => ({
            name: <MDBNavLink key={index} to={`/sales/salescustomersdetails/${data._id}`}  >{data.name}</MDBNavLink>,
            link: <MDBNavLink  to={`/sales/salescustomersdetails/${data._id}`} >{data.link}</MDBNavLink>,
            mobile: <MDBNavLink>{data.mobile}</MDBNavLink>,
           
        })) 
    };

    return (
        <Layout
            title="Manage Sales Users"
            description="Perform CRUD on Sales Users"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">
                        Sales team members are: {salesusers.length}
                    </h2>
                    
                    <hr />
                    {newCustomer()}
                    <MDBDataTable 
                      striped
                      bordered
                      small
                      data={data}
                    /> 
                    {goBack()}
                            
                </div>
            </div>
        </Layout>
    );
};

export default SalesUsers;
