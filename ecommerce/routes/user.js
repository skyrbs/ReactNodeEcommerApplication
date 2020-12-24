const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin, isSalesAdmin } = require("../controllers/auth");

const {
    userById,
    read,
    update,
    purchaseHistory,
    bulkimportcustomer,
    userByRole,
    getUserById,
    updateuserbysales
} = require("../controllers/user");

router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});

router.get("/user/:userId", requireSignin, isAuth, read);
router.put("/user/:userId", requireSignin, isAuth, update);
router.get("/orders/by/user/:userId", requireSignin, isAuth, purchaseHistory);
router.post("/bulkimportcustomer", bulkimportcustomer);
router.post("/user/by/role/:userId", requireSignin, userByRole);
router.post("/user/by/id/:userId", requireSignin, getUserById);
router.put(
    "/updateuserbysales/:customerId/:userId",
    requireSignin,
    updateuserbysales
);

router.param("userId", userById);

module.exports = router;
