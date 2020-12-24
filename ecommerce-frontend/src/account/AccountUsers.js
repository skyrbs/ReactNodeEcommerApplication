import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getSalesusers, listCustomers, getCategories } from "./apiSalesAdmin";

const AccountUsers = () => {
    const [salesusers, setSalesusers] = useState([]);

    const { user, token } = isAuthenticated();

    const loadSalesusers = () => { 
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setSalesusers(data);
            }
        });
    };
/*
    const destroy = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadSalesusers();
            }
        });
    };*/

    useEffect(() => {
        loadSalesusers();
    }, []); 

    return (
        <Layout
            title="Manage Sales Users"
            description="Perform CRUD on Sales Users"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">
                        Total 20 products
                    </h2>
                    <hr />
                    <ul className="list-group">
                        {salesusers.map((p, i) => (
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
                                    className="badge badge-danger badge-pill"
                                >
                                    Delete
                                </span>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            </div>
        </Layout>
    );
};

export default AccountUsers;
