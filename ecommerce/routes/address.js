const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin, isSalesAdmin } = require("../controllers/auth");

const {
    addressId,
    create,
    read,
    update
} = require("../controllers/address");
const { userById } = require("../controllers/user");

router.post("/address/create/:userId", requireSignin, create);
router.get("/address/:userId", requireSignin, read);
router.put("/address/:addressId/:userId", requireSignin,update);

router.param("userId", userById);
router.param("addressId", addressId);

module.exports = router;
