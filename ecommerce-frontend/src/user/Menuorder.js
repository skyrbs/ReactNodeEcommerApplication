import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";

const How = () => {

    const showSuccess = () => (
        <div className="container-fluid">
           <h1 className="arial default-transform large headinghow"> Mennu Order</h1>
        </div>
    );

    return (
        <Layout
            title="How"
            description="HOW WE WORK"
            className="container col-md-12"
        >
            {showSuccess()}
        </Layout>
    );
};

export default How;
