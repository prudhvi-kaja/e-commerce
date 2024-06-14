const express = require('express');
const router = express.Router();
const userApi = require('../apis/userApis');

router.post("/insertuser", userApi.insert_user);
router.post("/login", userApi.login);

module.exports = router;
