import React, {useState, useEffect} from "react";
import Layout from "../core/Layout";
import {isAuthenticated} from "../auth";
import {Link} from "react-router-dom";
import moment from "moment";
import {getSalesusers, listCustomers, getCategories} from "../salesadmin/apiSalesAdmin";
import ReactTable from 'react-table';
import "react-table/react-table.css";

const SalesCustomers = () => {
    const [salesusers, setSalesusers] = useState([]);
    const {user, token} = isAuthenticated();

    let roles = "0";
    const loadSalesusers = () => {
        getSalesusers(user._id, token, {roles}).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setSalesusers(data);
            }
        });
    }; 

    const goBack = () => (
        <div className="mt-3 mb-3 bradcrum">
            <Link  to="/admin/dashboard" className="text-warning">
                Dashboard >
            </Link><span>  &nbsp;  </span>
            <Link to="/admin/customers" className="text-warning">
                Manage Customer
            </Link>
        </div>
    );

    const newCustomer = () => (
        <div className="mt-3 mb-3">
            <Link to="/admin/newcustomer"> Create New Customer </Link>
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
            Header: "Mobile",
            accessor: "mobile",
            filterable: true,
            sortable:true
        },
        {
            Header: "Package (in Days)",
            accessor: "packagedays",
            filterable: true,
            sortable:true
        },
        {
            id: "packagestartedfrom",
            Header: "Package start Date",
            accessor: d => {
              return ( <span>{moment(d.packagestartedfrom).format('DD-MMM-YYYY')} </span>)
            }
        },
        {
            Header: "Target Cal",
            accessor: "targetcalory",
            filterable: true,
            sortable:true
        },
        {
            Header: "Sales Person",
            accessor: "salehandleby",
            filterable: true,
            sortable:true
        },
        {
            Header: "Status",
            accessor: "status",
            filterable: true,
            sortable:true
        },
        {
            Header: "Hold Or Trail for (in Days)",
            accessor: "holdortrialdays",
            filterable: true,
            sortable:true
        },
        {
            id: "holdortrialstartdate",
            Header: "Hold Start From",
            accessor: d => {
              return ( <span>{moment(d.holdortrialstartdate).format('DD-MMM-YYYY')} </span>)
            }
        },
        {
            id: "holdortrialenddate",
            Header: "Hold Or Trail end at",
            accessor: d => {
              return ( <span>{moment(d.holdortrialenddate).format('DD-MMM-YYYY')} </span>)
            }
        },
        { 
            Header: "Edit",
            Cell: e =><Link to={`/admin/salescustomersdetails/${e.original._id}`}>
                        <span className="badge badge-warning badge-pill">
                            Update
                        </span>
                    </Link>,                    
            filterable: false,
            sortable:false
        },
        { 
            Header: "synch",
            Cell: e =><Link to={`/admin/salescustomersdetails/${e.original._id}`}>
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
                <div className="col-12">
                    <div className="col-12">{goBack()} </div>
                    <h2 className="text-center">
                        Total {salesusers.length} Customers
                    </h2>

                    <hr/>
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

export default SalesCustomers;
