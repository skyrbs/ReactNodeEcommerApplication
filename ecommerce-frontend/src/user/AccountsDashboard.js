import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const AccountsDashboard = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();

    const accountLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Account User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/account/customers">
                            View Customers
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/account/customerorders">
                            Invoices
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/account/customerorders">
                            Payment
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const accountInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Account User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 7 ? "Account User" : "Registered User"}
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
                <div className="col-3 sidebardash">{accountLinks()}</div>
                <div className="col-9 rightbardash">{accountInfo()}</div>
            </div>
        </Layout>
    );
};

export default AccountsDashboard;
