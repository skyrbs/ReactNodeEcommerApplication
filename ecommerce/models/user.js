const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        magentocustomerid: {
            type: String,
            trim: true,
        },
        hashed_password: {
            type: String,
            required: true
        },
        about: {
            type: String,
            trim: true
        },
        salt: String,
        role: {
            type: Number,
            default: 0
        },
        packagedays: {
            type: Number,
            default: 0
        },
        mobile: {
            type: Number,
            default: '0',
            unique: true
        },
        packagestartedfrom: {
            type: Date,
            default: 0
        },
        salehandleby: {
            type: String,
            trim: true,
            maxlength: 40
        },
        targetcalory: {
            type: Number,
            default: 0
        },
        history: {
            type: Array,
            default: []
        },
        addresses: {
            type: Array,
            default: []
        },
        status: {
            type: String,
            trim: true,
            maxlength: 40
        },
        holdortrialdays: {
            type: Number,
            default: 0
        },
        holdortrialstartdate: {
            type: Date,
            default: 0
        },
        holdortrialenddate: {
            type: Date,
            default: 0
        },
        diagnosis: {
            type: String,
            trim: true,
            maxlength: 40
        },
        specialconsideration: {
            type: String,
            trim: true,
            maxlength: 40
        },
        location: {
            type: String,
            trim: true,
            maxlength: 40
        },
        typeofprogram: {
            type: String,
            trim: true,
            maxlength: 40
        },
        lastupdateduser: {
            type: String,
            trim: true
        },

    },
    { timestamps: true }
);

// virtual field
userSchema
    .virtual("password")
    .set(function(password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

userSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function(password) {
        if (!password) return "";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch (err) {
            return "";
        }
    }
};

module.exports = mongoose.model("User", userSchema);
