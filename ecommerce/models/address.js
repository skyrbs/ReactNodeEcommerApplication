const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const AddressSchema = new mongoose.Schema(
    {
        userid: {
            type: ObjectId,
            ref: "User",
            required: true
        },
        contactperson: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        contact: {
            type: Number
        },
        street1: {
            type: String,
            trim: true,
            maxlength: 32
        },
        street2: {
            type: String,
            trim: true,
            maxlength: 32
        },
        citi: {
            type: String,
            trim: true,
            maxlength: 32
        },
        state: {
            type: String,
            trim: true,
            maxlength: 32
        },
        country: {
            type: String,
            trim: true,
            default: 'india'
        },
        zipcode: {
            type: Number,
            trim: true,
            maxlength: 32
        },
        addresstype: {
            type: String,
            trim: true,
            maxlength: 32
        },
        addressdefault: {
            type: String,
            trim: true,
            maxlength: 32
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Addresses", AddressSchema);
