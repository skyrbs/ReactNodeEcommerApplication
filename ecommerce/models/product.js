const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        shortdescription: {
            type: String,
            maxlength: 8000
        },
        sku: {
            type: String,
            trim: true,
            maxlength: 32
        },
        weight: {
            type: String,
            trim: true,
            maxlength: 32
        },
        description: {
            type: String,
            required: false,
            maxlength: 2000
        },
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        specialprice: {
            type: Number,
            trim: true,
            required: false,
            maxlength: 32
        },
        status: {
            required: false,
            type: Number,
            default: 1
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
        sold: {
            type: Number,
            default: 0
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        shipping: {
            required: false,
            type: Boolean
        },
        seotitle: {
            type: String,
            maxlength: 8000
        },
        seokeyword: {
            type: String,
            maxlength: 8000
        },
        seodescription: {
            type: String,
            maxlength: 8000
        },
        quantity: {
            type: Number
        },
        isinstock: {
            required: false,
            type: Number,
            default: 1
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
