import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createProduct, getCategories } from "./apiAdmin";

const AddProduct = () => { 
    const [producttab, setProducttab] = useState(true);
    const [productpricetab, setProductpricetab] = useState(false);
    const [productseotab, setProductseotab] = useState(false);
    const [productphototab, setProductphototab] = useState(false);
    const [productinventorytab, setProductinventorytab] = useState(false);
    const [productattributestab, setProductattributestab] = useState(false);
    const [productdatetab, setProductdatetab] = useState(false);

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        specialprice:"",
        categories: [],
        shortdescription:"",
        sku:"",
        weight:"",
        status:"",
        seotitle:"",
        seokeyword:"",
        seodescription:"",
        isinstock:"",
        category: "",
        shipping: "",
        quantity: "",
        photo: "",
        loading: false,
        error: "",
        createdProduct: "",
        redirectToProfile: false,
        formData: ""
    });

    const { user, token } = isAuthenticated();
    const {
        name,
        description,
        shortdescription,
        price,
        specialprice,
        sku,
        weight,
        status,
        seotitle,
        seokeyword,
        seodescription,
        isinstock,
        categories,
        category,
        shipping,
        quantity,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
    } = values;

    // load categories and set form data
    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    categories: data,
                    formData: new FormData()
                });
            }
        });
    };

    useEffect(() => {
        init();
    }, []);

    const handleChange = name => event => {
        const value =
            name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });

        createProduct(user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: "",
                    description: "",
                    price: "",
                    specialprice:"",
                    shortdescription:"",
                    sku:"",
                    weight:"",
                    status:"",
                    seotitle:"",
                    seokeyword:"",
                    seodescription:"",
                    isinstock:"",
                    category: "",
                    shipping: "",
                    quantity: "",
                    photo: "",
                    loading: false,
                    createdProduct: data.name
                });
            }
        });
    };

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <div className="producttab " style={{ display: (producttab ? 'block' : 'none') }}>

            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={handleChange("name")}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">SKU</label>
                <input
                    onChange={handleChange("sku")}
                    type="text"
                    className="form-control"
                    value={sku}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Status</label>
                <select
                    onChange={handleChange("status")}
                    className="form-control"
                >
                    <option>Please select</option>
                    <option value="0">Disable</option>
                    <option value="1">Enable</option>
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Weight</label>
                <input
                    onChange={handleChange("weight")}
                    type="text"
                    className="form-control"
                    value={weight}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Short Description</label>
                <textarea
                    onChange={handleChange("shortdescription")}
                    className="form-control"
                    value={shortdescription}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea
                    onChange={handleChange("description")}
                    className="form-control"
                    value={description}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Category</label>
                <select
                    onChange={handleChange("category")}
                    className="form-control"
                >
                    <option>Please select</option>
                    {categories &&
                        categories.map((c, i) => (
                            <option key={i} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Shipping</label>
                <select
                    onChange={handleChange("shipping")}
                    className="form-control"
                >
                    <option>Please select</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>

            </div>

            <div className="productphototab" style={{ display: (productphototab ? 'block' : 'none') }}>
            <h4>Post Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image/*"
                    />
                </label>
            </div>

            </div>

            <div className="productpricetab" style={{ display: (productpricetab ? 'block' : 'none') }}>
            <div className="form-group">
                <label className="text-muted">Price</label>
                <input
                    onChange={handleChange("price")}
                    type="number"
                    className="form-control"
                    value={price}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Special Price</label>
                <input
                    onChange={handleChange("specialprice")}
                    type="number"
                    className="form-control"
                    value={specialprice}
                />
            </div>

            </div>

            <div className="productseotab" style={{ display: (productseotab ? 'block' : 'none') }}>
            <h4>SEO Details</h4>
            <div className="form-group">
            <label className="text-muted">Title</label>
            <input
                onChange={handleChange("seotitle")}
                type="text"
                className="form-control"
                value={seotitle}
            />
            </div>

            <div className="form-group">
            <label className="text-muted">Keyword</label>
            <input
                onChange={handleChange("seokeyword")}
                type="text"
                className="form-control"
                value={seokeyword}
            />
            </div>

            <div className="form-group">
            <label className="text-muted">Description</label>
            <textarea
                onChange={handleChange("seodescription")}
                className="form-control"
                value={seodescription}
            />
            </div>

            </div>

            <div className="productinventorytab" style={{ display: (productinventorytab ? 'block' : 'none') }}>
            <div className="form-group">
                <label className="text-muted">Quantity</label>
                <input
                    onChange={handleChange("quantity")}
                    type="number"
                    className="form-control"
                    value={quantity}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Stock Availability</label>
                <select
                    onChange={handleChange("isinstock")}
                    className="form-control"
                >
                    <option>Please select</option>
                    <option value="0">Out of Stock</option>
                    <option value="1">In Stock</option>
                </select>
            </div>

            </div>

            <div className="productattributestab" style={{ display: (productattributestab ? 'block' : 'none') }}>
                <div className="form-group">
                <label className="text-muted">Per 100 grams Protein </label>
                <input type="text"
                    onChange={handleChange("seodescription")}
                    className="form-control"
                />
                </div>

                <div className="form-group">
                <label className="text-muted">Per 100 grams Fat </label>
                <input type="text"
                    onChange={handleChange("seodescription")}
                    className="form-control"
                />
                </div>

                <div className="form-group">
                <label className="text-muted">Per 100 grams Carbohydrates </label>
                <input type="text"
                    onChange={handleChange("seodescription")}
                    className="form-control"
                />
                </div>

                <div className="form-group">
                <label className="text-muted">Per 100 grams Calories </label>
                <input type="text"
                    onChange={handleChange("seodescription")}
                    className="form-control"
                />
                </div>

                <div className="form-group">
                <label className="text-muted">Per 100 grams Fiber </label>
                <input type="text"
                    onChange={handleChange("seodescription")}
                    className="form-control"
                />
                </div>

                <div className="form-group">
                <label className="text-muted">Label </label>
                <input type="text"
                    onChange={handleChange("seodescription")}
                    className="form-control"
                />
                </div>

                <div className="form-group">
                <label className="text-muted">Menucode </label>
                <input type="text"
                    onChange={handleChange("seodescription")}
                    className="form-control"
                />
                </div>

                <div className="form-group">
                <label className="text-muted">Menu Position </label>
                <input type="text"
                    onChange={handleChange("seodescription")}
                    className="form-control"
                />
                </div>

                <div className="form-group">
                <label className="text-muted">Unit Of Measure </label>
                <input type="text"
                    onChange={handleChange("seodescription")}
                    className="form-control"
                />
                </div>

                <div className="form-group">
                <label className="text-muted">Packing Type </label>
                <input type="text"
                    onChange={handleChange("seodescription")}
                    className="form-control"
                />
                </div>

            </div>

            <div className="productdatetab" style={{ display: (productdatetab ? 'block' : 'none') }}>
                <div className="form-group">
                <label className="text-muted">Date </label>
                <input type="text"
                    onChange={handleChange("seodescription")}
                    className="form-control"
                    value={seodescription}
                />
                </div>

            </div>

            <button className="btn btn-outline-primary">Create Product</button>
        </form>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showSuccess = () => (
        <div
            className="alert alert-info"
            style={{ display: createdProduct ? "" : "none" }}
        >
            <h2>{`${createdProduct}`} is created!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
    );

    const goBack = () => (
        <div className="mt-3 mb-3 bradcrum">
            <Link  to="/admin/dashboard" className="text-warning">
                Dashboard >
            </Link><span>  &nbsp;  </span>
            <Link to="/admin/products" className="text-warning">
                Manage Products
            </Link>
        </div>
    );

    const ShowHideTabs = tabname => {
        if(tabname == 'producttab'){
            setProducttab(true);
            setProductpricetab(false);
            setProductseotab(false);
            setProductphototab(false);
            setProductinventorytab(false);
            setProductattributestab(false);
            setProductdatetab(false);
        }
        if(tabname == 'productpricetab'){
            setProducttab(false);
            setProductpricetab(true);
            setProductseotab(false);
            setProductphototab(false);
            setProductinventorytab(false);
            setProductattributestab(false);
            setProductdatetab(false);
        }
        if(tabname == 'productseotab'){
            setProducttab(false);
            setProductpricetab(false);
            setProductseotab(true);
            setProductphototab(false);
            setProductinventorytab(false);
            setProductattributestab(false);
            setProductdatetab(false);
        }
        if(tabname == 'productphototab'){
            setProducttab(false);
            setProductpricetab(false);
            setProductseotab(false);
            setProductphototab(true);
            setProductinventorytab(false);
            setProductattributestab(false);
            setProductdatetab(false);
        }
        if(tabname == 'productinventorytab'){
            setProducttab(false);
            setProductpricetab(false);
            setProductseotab(false);
            setProductphototab(false);
            setProductinventorytab(true);
            setProductattributestab(false);
            setProductdatetab(false);
        }
        if(tabname == 'productattributestab'){
            setProducttab(false);
            setProductpricetab(false);
            setProductseotab(false);
            setProductphototab(false);
            setProductinventorytab(false);
            setProductattributestab(true);
            setProductdatetab(false);
        }
        if(tabname == 'productdatetab'){
            setProducttab(false);
            setProductpricetab(false);
            setProductseotab(false);
            setProductphototab(false);
            setProductinventorytab(false);
            setProductattributestab(false);
            setProductdatetab(true);
        }
        
    }

    const profiletabs = () => {
        return (
            <div className="card">
                <h4 className="card-header">Product Tabs</h4>
                <ul className="list-group">
                    <li className={ (producttab ? ' highlighttab list-group-item' : 'list-group-item') } onClick={ () => ShowHideTabs('producttab') }>
                       <a className="nav-link" >
                            Product
                        </a>
                    </li>
                    <li className={ (productpricetab ? ' highlighttab list-group-item' : 'list-group-item') } onClick={ () => ShowHideTabs('productpricetab') }>
                        <a className="nav-link" >
                            Price
                        </a>
                    </li>
                    <li className={ (productphototab ? ' highlighttab list-group-item' : 'list-group-item') } onClick={ () => ShowHideTabs('productphototab') }>
                        <a className="nav-link" >
                            Image Upload
                        </a>
                    </li>
                    <li className={ (productinventorytab ? ' highlighttab list-group-item' : 'list-group-item') } onClick={ () => ShowHideTabs('productinventorytab') }>
                        <a className="nav-link" >
                            Inventory
                        </a>
                    </li>
                    <li className={ (productseotab ? ' highlighttab list-group-item' : 'list-group-item') } onClick={ () => ShowHideTabs('productseotab') }>
                        <a className="nav-link" >
                            Meta Information
                        </a>
                    </li>
                    <li className={ (productattributestab ? ' highlighttab list-group-item' : 'list-group-item') } onClick={ () => ShowHideTabs('productattributestab') }>
                        <a className="nav-link" >
                            Recepies Ingredients
                        </a>
                    </li>
                    <li className={ (productdatetab ? ' highlighttab list-group-item' : 'list-group-item') } onClick={ () => ShowHideTabs('productdatetab') }>
                        <a className="nav-link" >
                            Menu Available Date
                        </a>
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Layout
            title="Add a new product"
            description={`G day ${user.name}, ready to add a new product?`}
          className="container-fluid" >
            <div className="row">
                <div className="col-12">{goBack()} </div>
                <div className="col-2">{profiletabs()}</div>
                <div className="col-10">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                </div>
            </div>
        </Layout>
    );
};

export default AddProduct;
