import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const SalesAdminDashboard = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();

    const salesadminLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Sales Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/salesadmin/salesusers">
                            Manage Sales Team
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/salesadmin/customers">
                            Manage Customers
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/saleadmin/customerorders">
                            View Meal Plans
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const salesadminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Welcome in Sales Admin Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 5 ? "Sales Admin" : "Registered User"}
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
                <div className="col-3 sidebardash">{salesadminLinks()}</div>
                <div className="col-9 rightbardash">{salesadminInfo()}</div>
            </div>
        </Layout>
    );
};

export default SalesAdminDashboard;
