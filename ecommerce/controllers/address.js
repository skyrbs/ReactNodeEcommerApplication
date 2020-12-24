const User = require("../models/user");
const Address  = require("../models/address");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const { errorHandler } = require("../helpers/dbErrorHandler");


exports.addressId = (req, res, next, id) => {
    Address.findById(id)
        .exec((err, address) => {
            if (err || !address) {
                return res.status(400).json({
                    error: "Product not found"
                });
            }
            req.address = address;
            next();
        });
};

exports.read = (req, res) => {
    Address.findOne({ userid: req.params.userId })
        .exec((err, Address) => {
            if (err || !Address) {
                return res.status(400).json({
                    error: "No Address, Please update the address"
                });
            }
            data = Address
            res.json(data);
        });
};

exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
        // check for all fields
        const {
            userid,
            contactperson
        } = fields;

        if ( !userid || !contactperson ) {
            return res.status(400).json({
                error: "All fields are required"
            });
        }

        let address = new Address(fields);
        address.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};

exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }

        let address = req.address;
        address = _.extend(address, fields);

        address.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    });
};
