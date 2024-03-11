const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createData, getAdminDataDetails, getTelecomDataDetailById, updateAdminDataDetailById, updateTelecomDataDetailById, deleteAdminDataDetailById } = require("./marketing.controller");

router.post("/createMarketData", createData);
router.get('/getAdminDataDetails',checkToken,getAdminDataDetails);
router.get('/getTelecomDetailById/:user_id',checkToken,getTelecomDataDetailById);
router.patch('/updateAdminDataDetailById',checkToken,updateAdminDataDetailById);
router.patch('/updateTelecomDataDetailById',checkToken,updateTelecomDataDetailById);
router.patch('/deleteAdminDataDetailById/:market_data_id',checkToken,deleteAdminDataDetailById);

module.exports = router;
