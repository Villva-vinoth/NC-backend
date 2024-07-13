const {
  create,
  getUserByUserEmail,
  getUsersDetails,
  getUserDetailById,
  updateUserDetailById,
  deleteUserDetailById,
  getUserpasswordById,
  updatePersonalDetailById,
  updateAdminPasswordById,
  getAllAccountant

} = require("./user.service");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    // const salt = bcrypt.genSaltSync(10);
    // body.password =bcrypt.hashSync(body.password,salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
      }
      if (results === 'already Exits!') {
        return res.status(409).json({
          success: 0,
          data: "User Already Exists",
          message:"User Already Exists"
        });
      }
      else {
        return res.status(200).json({
          success: 1,
          message: "user registered Successfully",
          data: results
        });
      }
    });
  },
  login: (req, res) => {
    const body = req.body;
    // console.log("controller",body.email)
    getUserByUserEmail(body.email, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
      }
      if (!results) {
        return res.status(422).json({
          success: 0,
          message: "Invalid email"
        });
      }
      const result = (body.password === results.password ? true : false);

      if (result) {
        const jsontoken = sign({ email: body.email }, "vk@123", {
          expiresIn: "7h"
        });
        return res.status(200).json({
          success: 1,
          // message: "login successfully",
          userID: results.user_id,
          roleType: results.roletype,
          token: jsontoken,
        });
      } else {
        return res.status(422).json({
          success: 0,
          message: "Invalid password"
        });
      }
    });
  },
  getUsersDetails: (req, res) => {
    getUsersDetails((err, result) => {
      if (err)
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error"
        })
      return res.status(200).json({
        success: 1,
        data: result
      })
    })
  },
  getUserDetailById: (req, res) => {
    const body = req.params;
    getUserDetailById(body, (err, result) => {
      if (err)
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error"
        })
      return res.status(200).json({
        success: 1,
        data: result
      })
    })
  },
  updateUserDetailById: (req, res) => {
    const body = req.body;
    updateUserDetailById(body, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error"
        })
      }
      return res.status(200).json({
        success: 1,
        data: result
      })
    })
  },
  deleteUserDetailById: (req, res) => {
    const body = req.params;
    deleteUserDetailById(body, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error"
        })
      }
      return res.status(200).json({
        success: 1,
        data: result
      })
    })
  },
   getUserpasswordById: (req, res) => {
    const body =req.params
    getUserpasswordById(body, (err, result) => {
      if (err)
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error"
        })
      return res.status(200).json({
        success: 1,
        data: result
      })
    })
  }
  ,
  updatePersonalDetailById: (req, res) => {
    const body = req.body;
    updatePersonalDetailById(body, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error"
        })
      }
      return res.status(200).json({
        success: 1,
        data: result
      })
    })
  },
  updateAdminPasswordById:(req,res)=>{
    const body =req.body;
    updateAdminPasswordById(body,(err,result)=>{
      if(err){
        return res.status(500).json({
          success:0,
          message:"Database Connect Error"
        })
      }
      return res.status(200).json({
        success:1,
        data:result
      })
    })
  },
  getAllAccountant: (req, res) => {
    getAllAccountant((err, result) => {
      if (err)
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error"
        })
      return res.status(200).json({
        success: 1,
        data: result
      })
    })
  },

};
