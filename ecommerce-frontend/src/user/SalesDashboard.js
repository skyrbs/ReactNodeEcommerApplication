import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const SalesDashboard = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();

    const salesLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Management</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/sales/customers">
                            Manage Customers
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/sales/customerorders">
                            View Meals
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const salesInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Welcome in Sales Panel</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 6 ? "Sales User" : "Registered User"}
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
                <div className="col-3 sidebardash">{salesLinks()}</div>
                <div className="col-9 rightbardash">{salesInfo()}</div>
            </div>
        </Layout>
    );
};

export default SalesDashboard;
