import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";
import ReactTable from 'react-table';
import "react-table/react-table.css";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const destroy = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const columns =[
        {
            Header: "Product Name",
            accessor: "name",
            filterable: true,
            sortable:true
        },
        {
            Header: "Price",
            accessor: "price",
            filterable: true,
            sortable:true
        },
        {
            Header: "Special Price",
            accessor: "specialprice",
            filterable: true,
            sortable:true
        },
        {
            Header: "Quantity",
            accessor: "quantity",
            filterable: true,
            sortable:true
        },
        {
            Header: "Status",
            id: 'status',
            accessor: d => { return d.status == 1 ? 'Enable' : 'Disable' },
            filterable: true,
            sortable:true
        },
        {
            Header: "Availability",
            id: 'isinstock',
            accessor: d => { return d.isinstock == 1 ? 'in stock' : 'Out of Stock' },
            filterable: true,
            sortable:true
        },
        { 
            Header: "Edit",
            Cell: e =><Link to={`/admin/product/update/${e.original._id}`}>
                        <span className="badge badge-warning badge-pill">
                            Update
                        </span>
                    </Link>,                    
            filterable: false,
            sortable:false
        },
        { 
            Header: "Delete",
            Cell: e =><span className="badge badge-danger badge-pill"  >
                            Delete
                        </span>,                    
            filterable: false,
            sortable:false
        }
    ]

    const goBack = () => (
        <div className="mt-3 mb-3 bradcrum">
            <Link  to="/admin/dashboard" className="text-warning">
                Back to Dashboard
            </Link>
        </div>
    );

    const newProduct = () => (
        <div className="mt-3 mb-3">
            <Link className="nav-link" to="/create/product">
                Create Product
            </Link>
        </div>
    );

    return (
        <Layout
            title="Manage Products"
            description="Perform CRUD on products"
            className="container-fluid"
        >
            <div className="row">
               <div className="col-12">{goBack()} </div>
                <div className="col-12">
                    <h2 className="text-center">
                        Total {products.length} Products
                    </h2>
                    <hr />
                    {newProduct()}
                    <ReactTable 
                        columns={columns}
                        data = {products}
                        filterable
                        sortable
                        defaultPageSize={10}
                        noDataText={"Please wait ...loading"}
                    >

                    </ReactTable>

                    {/*<ul className="list-group">
                                            {products.map((p, i) => (
                                                <li
                                                    key={i}
                                                    className="list-group-item d-flex justify-content-between align-items-center"
                                                >
                                                    <strong>{p.name}</strong>
                                                    <Link to={`/admin/product/update/${p._id}`}>
                                                        <span className="badge badge-warning badge-pill">
                                                            Update
                                                        </span>
                                                    </Link>
                                                    <span
                                                        onClick={() => destroy(p._id)}
                                                        className="badge badge-danger badge-pill"
                                                    >
                                                        Delete
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>*/}
                    <br />
                </div>
            </div>
        </Layout>
    );
};

export default ManageProducts;
