const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createProjectTransaction, getAdminProjectTransactionDetails,getAccountProjectTransactionDetails, updateAdminProjectTransactionApproveDetailById, deleteProjectDataDetailById, getCreditProjectTransactionDetails, getDebitProjectTransactionDetails, getDebitAndCreditDetails, getAdminProjectDetails } = require("./projectTransaction.controller");

router.post("/createProjectTransactionTransaction",checkToken, createProjectTransaction);
router.get('/getAdminProjectTransactionDetails/:project_id',checkToken,getAdminProjectTransactionDetails);
router.get('/getAccountantProjectTransactionDetails/:user_id&:project_id',checkToken,getAccountProjectTransactionDetails);
router.patch('/updateAdminApproveProjectTransactionDetailById',checkToken,updateAdminProjectTransactionApproveDetailById);
router.patch('/deleteAdminDataDetailById/:project_id',checkToken,deleteProjectDataDetailById);
router.get('/getCreditProjectTransactionDetails/:project_id',checkToken,getCreditProjectTransactionDetails);
router.get('/getDebitProjectTransactionDetails/:project_id',checkToken,getDebitProjectTransactionDetails);
router.get('/getDebitAndCreditDetails/:project_id',checkToken,getDebitAndCreditDetails);
router.get('/getAdminProjectDetails',checkToken,getAdminProjectDetails);



module.exports = router;
