const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createTransaction, getTransactionDetails, updateTransactionDataDetailById, deleteTransactionDataDetailById } = require("./transactionMaster.controller");

router.post("/createTransaction",checkToken, createTransaction);
router.get('/getTransactionDetails',checkToken,getTransactionDetails);
router.patch('/updateTransactionDataDetailById',checkToken,updateTransactionDataDetailById);
router.patch('/deleteTransactionDataDetailById/:transaction_id',checkToken,deleteTransactionDataDetailById);


module.exports = router;
