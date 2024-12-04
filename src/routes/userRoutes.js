const express = require("express");
const verify =require("../middlewares/authMiddleware");
const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const router = express.Router();

//Only admin can access this router
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({ message: "Welcome Admin"});
});

//Both admin and manager can  access this router
router.get("/manager", verifyToken, authorizeRoles("manager", "admin"), (req, res) => {
    res.json({ message: "Welcome Manager"});
});
//All can access this route
router.get("/user", verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
    res.json({ message: "Welcome User"});
});

module.exports = router;
