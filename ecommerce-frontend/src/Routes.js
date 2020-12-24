import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./core/Shop";
import Product from "./core/Product";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import adminNewCustomer from "./admin/NewCustomer";
import adminSalesCustomers from "./admin/SalesCustomers";
import adminUpdateCustomersDetails from "./admin/UpdateCustomersDetails";
import adminSalesUsers from "./admin/SalesUsers";
import adminNewSalesUsers from "./admin/NewSalesUsers";
import adminUpdateSalesDetails from "./admin/UpdateSalesDetails";


import SalesAdminRoute from "./auth/SalesAdminRoute";
import SalesAdminDashboard from "./user/SalesAdminDashboard";
import SalesUsers from "./salesadmin/SalesUsers";
import SalesCustomers from "./salesadmin/SalesCustomers";
import UpdateCustomersDetails from "./salesadmin/UpdateCustomersDetails";
import NewCustomer from "./salesadmin/NewCustomer";
import SalesNewSalesUsers from "./salesadmin/NewSalesUsers";
import UpdateSalesDetails from "./salesadmin/UpdateSalesDetails";

import SalesRoute from "./auth/SalesRoute";
import SalesDashboard from "./user/SalesDashboard";
import SaleCustomers from "./sales/SalesCustomers";
import UpdateSaleCustomersDetails from "./sales/UpdateCustomersDetails";
import NewSaleCustomer from "./sales/NewCustomer";

import AccountRoute from "./auth/AccountRoute";
import AccountDashboard from "./user/AccountDashboard";

import How from "./user/How";
import Pricing from "./user/Pricing";
import Menuorder from "./user/Menuorder";
import Resources from "./user/Resources";
import Questions from "./user/Questions";
import Disclaimer from "./user/Disclaimer";
import Contacts from "./user/Contacts";
import Whatitis from "./user/Whatitis";
import Howdoesitwork from "./user/Howdoesitwork";
import Anysideeffect from "./user/Anysideeffect";
import Howlongdoesittake from "./user/Howlongdoesittake";
import Whathappenedatend from "./user/Whathappenedatend";
import Isthecurepermanent from "./user/Isthecurepermanent";
import Howdoistart from "./user/Howdoistart";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/how" exact component={How} />
                <Route path="/pricing" exact component={Pricing} />
                <Route path="/menuorder" exact component={Menuorder} />
                <Route path="/resources" exact component={Resources} />
                <Route path="/questions" exact component={Questions} />
                <Route path="/disclaimer" exact component={Disclaimer} />
                <Route path="/contacts" exact component={Contacts} />
                <Route path="/whatitis" exact component={Whatitis} />
                <Route path="/howdoesitwork" exact component={Howdoesitwork} />
                <Route path="/anysideeffect" exact component={Anysideeffect} />
                <Route path="/howlongdoesittake" exact component={Howlongdoesittake} />
                <Route path="/whathappenedatend" exact component={Whathappenedatend} />
                <Route path="/isthecurepermanent" exact component={Isthecurepermanent} />
                <Route path="/howdoistart" exact component={Howdoistart} />
                <PrivateRoute
                    path="/user/dashboard"
                    exact
                    component={Dashboard}
                />
                <AdminRoute
                    path="/admin/dashboard"
                    exact
                    component={AdminDashboard}
                />
                <AdminRoute
                    path="/create/category"
                    exact
                    component={AddCategory}
                />
                <AdminRoute
                    path="/create/product"
                    exact
                    component={AddProduct}
                />
                <AdminRoute
                    path="/admin/product/update/:productId"
                    exact
                    component={UpdateProduct}
                />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/cart" exact component={Cart} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <PrivateRoute
                    path="/profile/:userId"
                    exact
                    component={Profile}
                />
                <AdminRoute
                    path="/admin/products"
                    exact
                    component={ManageProducts}
                />
                <AdminRoute
                    path="/admin/newcustomer"
                    exact
                    component={adminNewCustomer}
                />
                <AdminRoute
                    path="/admin/newsalescustomer"
                    exact
                    component={adminNewSalesUsers}
                />
                <AdminRoute
                    path="/admin/customers"
                    exact
                    component={adminSalesCustomers}
                />
                <AdminRoute
                    path="/admin/salesusers"
                    exact
                    component={adminSalesUsers}
                />
                <AdminRoute
                    path="/admin/salescustomersdetails/:userId"
                    exact
                    component={adminUpdateCustomersDetails}
                />
                <AdminRoute
                    path="/admin/salespersonupdate/:userId"
                    exact
                    component={adminUpdateSalesDetails}
                />

                <SalesAdminRoute
                    path="/salesadmin/dashboard"
                    exact
                    component={SalesAdminDashboard}
                />
                <SalesAdminRoute
                    path="/salesadmin/salesusers"
                    exact
                    component={SalesUsers}
                />
                <SalesAdminRoute
                    path="/salesadmin/customers"
                    exact
                    component={SalesCustomers}
                />
                <SalesAdminRoute
                    path="/salesadmin/newsalescustomer"
                    exact
                    component={SalesNewSalesUsers}
                />
                <SalesAdminRoute
                    path="/salesadmin/salescustomersdetails/:userId"
                    exact
                    component={UpdateCustomersDetails}
                />
                <SalesAdminRoute
                    path="/salesadmin/newcustomer"
                    exact
                    component={NewCustomer}
                />
                <SalesAdminRoute
                    path="/salesadmin/salespersonupdate/:userId"
                    exact
                    component={UpdateSalesDetails}
                />


                <SalesRoute
                    path="/sales/dashboard"
                    exact
                    component={SalesDashboard}
                />
                <SalesRoute
                    path="/sales/customers"
                    exact
                    component={SaleCustomers}
                />
                <SalesRoute
                    path="/sales/salescustomersdetails/:userId"
                    exact
                    component={UpdateSaleCustomersDetails}
                />
                <SalesRoute
                    path="/sales/newcustomer"
                    exact
                    component={NewSaleCustomer}
                />
                <AccountRoute
                    path="/account/dashboard"
                    exact
                    component={AccountDashboard}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
