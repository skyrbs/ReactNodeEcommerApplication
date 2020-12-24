const User = require("../models/user");
const { Order } = require("../models/order");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        req.profile = user;
        next();
    });
};


exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined; 
    return res.json(req.profile);
};

exports.update = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.profile._id },
        { $set: req.body },
        { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "You are not authorized to perform this action"
                });
            }
            user.hashed_password = undefined;
            user.salt = undefined;
            res.json(user);
        }
    );
};

exports.addOrderToUserHistory = (req, res, next) => {
    let history = [];

    req.body.order.products.forEach(item => {
        history.push({
            _id: item._id,
            name: item.name,
            description: item.description,
            category: item.category,
            quantity: item.count,
            transaction_id: req.body.order.transaction_id,
            amount: req.body.order.amount
        });
    });

    User.findOneAndUpdate(
        { _id: req.profile._id },
        { $push: { history: history } },
        { new: true },
        (error, data) => {
            if (error) {
                return res.status(400).json({
                    error: "Could not update user purchase history"
                });
            }
            next();
        }
    );
};

exports.purchaseHistory = (req, res) => {
    Order.find({ user: req.profile._id })
        .populate("user", "_id name")
        .sort("-created")
        .exec((err, orders) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(orders);
        });
};

exports.bulkimportcustomer = (req, res, next) => {
     const { email} = req.body;
     User.findOne({email}, (err, user) => {
         if (!err || user) { 
            User.findOneAndUpdate(
            { email: email },
            { $set: req.body },
            { new: true },
            (err, user) => {
                if (err) {
                    return res.status(400).json({
                        error: "You are not authorized to perform this action"
                    });
                } 
                return next(); 
            }
        ); 
        }
        // if user email  not find then insert records.
        const newuser = new User(req.body); 
        newuser.save((err, newuser) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            return next();
        });

     }); // findOne is closing here
};


exports.userByRole = (req, res) => {
    let role = req.body.roles ? parseInt(req.body.roles) : 0;
    let findArgs = {"role": role};
    User.find(findArgs)
        .populate("user", "hashed_password")
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Users not found"
                });
            }
            res.json(data);
        });
};

exports.getUserById = (req, res) => { 
    let userId = req.body.id;
    User.findById(userId)
        .exec((err, User) => {
            if (err || !User) {
                return res.status(400).json({
                    error: "User not found"
                });
            }
            User.hashed_password = undefined;
            User.salt = undefined;
            data = User
            res.json(data);
        });
};

exports.updateuserbysales = (req, res) => { 
    User.findById(req.params.customerId).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        let form = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
        user = _.extend(user, fields);
        console.log(fields);
        let form = new formidable.IncomingForm();
            user.save((err, result) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                res.json(result);
            });
        });
    });

};