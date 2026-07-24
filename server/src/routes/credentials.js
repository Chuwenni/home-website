const express = require('express')
const router = express.Router();
const getUser = require("../controller/credentials")
const verifyJWT = require("../middleware/accessVerify")
router.get('/getUser',verifyJWT, getUser)


module.exports= router