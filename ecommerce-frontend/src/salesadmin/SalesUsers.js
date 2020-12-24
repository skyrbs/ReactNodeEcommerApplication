import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import moment from "moment";
import { getSalesusers, listCustomers, getCategories } from "./apiSalesAdmin";
import ReactTable from 'react-table';
import "react-table/react-table.css";


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
        <div className="col-12">
        <div className="mt-3 mb-3">
            <Link to="/salesadmin/newsalescustomer"> Create New Sales User </Link>
        </div>
        <div className="mt-3 mb-3">
        <h2 className="text-center">
            Total {salesusers.length} 
        </h2>
        </div></div>
    );
    const goBack = () => (
        <div className="mt-3 mb-3 bradcrum">
            <Link  to="/salesadmin/dashboard" className="text-warning">
                Dashboard 
            </Link><span>  &nbsp;  </span>
        </div>
    );

    useEffect(() => {
        loadSalesusers();
    }, []); 

    const columns =[
        {
            Header: "Name",
            accessor: "name",
            filterable: true,
            sortable:true
        },
        {
            Header: "Email",
            accessor: "email",
            filterable: true,
            sortable:true
        },
        {
            Header: "Mobile",
            accessor: "mobile",
            filterable: true,
            sortable:true
        },
        { 
            Header: "Edit",
            Cell: e =><Link to={`/salesadmin/salespersonupdate/${e.original._id}`}>
                        <span className="badge badge-warning badge-pill">
                            Update
                        </span>
                    </Link>,                    
            filterable: false,
            sortable:false
        },
        { 
            Header: "synch",
            Cell: e =><Link to={`/salesadmin/salespersonupdate/${e.original._id}`}>
                        <span className="badge badge-warning badge-pill">
                            Update in magento
                        </span>
                    </Link>,                    
            filterable: false,
            sortable:false
        }
    ]  

    return (
        <Layout
            title="Manage Sales Users"
            description="Perform CRUD on Sales Users"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-12"> {goBack()} </div>
                <div className="col-12">
                    <hr />
                    {newCustomer()}
                    <ReactTable 
                        columns={columns}
                        data = {salesusers}
                        filterable
                        sortable
                        defaultPageSize={5}
                        noDataText={"Please wait ...loading"}
                    >
                    </ReactTable>
                            
                </div>
            </div>
        </Layout>
    );
};

export default SalesUsers;
