const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { createProject, getProjectDetails, updateProjectDataDetailById, deleteProjectDataDetailById, getRecentProjectDetails } = require("./projectMaster.controller");

router.post("/createProjectData",checkToken, createProject);
router.get('/getProjectDataDetails',checkToken,getProjectDetails);
router.patch('/updateAdminProjectDetailById',checkToken,updateProjectDataDetailById);
router.patch('/deleteAdminProjectDetailById/:project_id',checkToken,deleteProjectDataDetailById);
router.get('/getRecentProjectDataDetails',checkToken,getRecentProjectDetails);


module.exports = router;
