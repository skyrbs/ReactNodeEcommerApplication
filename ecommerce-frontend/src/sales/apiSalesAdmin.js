import { API } from "../config";

export const getSalesusers  = (userId, token, roles) => {
    return fetch(`${API}/user/by/role/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(roles)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};


export const customerdetail = (userId, token) => { 
    return fetch(`${API}/user/by/id/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({"id": userId})
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateCustomer = ( customerId, userId, token, users) => {
    return fetch(`${API}/updateuserbysales/${customerId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: users
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const newCustomer = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};