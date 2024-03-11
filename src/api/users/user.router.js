const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUsersDetails,
  getUserDetailById,
  updateUserDetailById,
  deleteUserDetailById,
  getUserpasswordById,
  updatePersonalDetailById,
  updateAdminPasswordById
} = require("./user.controller");

router.post("/register", createUser);
router.post("/login", login);
router.get('/getUserDetails',checkToken,getUsersDetails);
router.get('/getUserDetailById/:user_id',checkToken,getUserDetailById);
router.put('/updateUserDetailById',checkToken,updateUserDetailById);
router.patch('/deleteUserDetailById/:user_id',checkToken,deleteUserDetailById);
router.get('/getUserPasswordById/:user_id',checkToken,getUserpasswordById);
router.put('/updatePersonalDetailById',checkToken,updatePersonalDetailById);
router.patch('/updateAdminPasswordById',checkToken,updateAdminPasswordById);

module.exports = router;
