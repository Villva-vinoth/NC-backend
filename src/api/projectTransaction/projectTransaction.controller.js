const { createProjectTransaction, getAdminProjectTransactionDetails, getAccountProjectTransactionDetails, updateAdminProjectTransactionApproveDetailById, getCreditProjectTransactionDetails, getDebitProjectTransactionDetails } = require("./projectTransaction.service");

module.exports = {
  createProjectTransaction: (req, res) => {
    const body = req.body;
    createProjectTransaction(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror"
        });
      }
      else {
        return res.status(200).json({
          success: 1,
          message: "Data added Successfully",
          data: results
        });
      }
    });
  },
  getAdminProjectTransactionDetails: (req, res) => {
    const body = req.params
    getAdminProjectTransactionDetails(body,(err, result) => {
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
  getAccountProjectTransactionDetails: (req, res) => {
    const body =req.params
    getAccountProjectTransactionDetails(body,(err, result) => {
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
 
  updateAdminProjectTransactionApproveDetailById: (req, res) => {
    const body = req.body;
    updateAdminProjectTransactionApproveDetailById(body, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database Connection Error"
        })
      }
      return res.status(200).json({
        success: 1,
        message:"Updated Successfully!"
      })
    })
  },
  deleteProjectDataDetailById: (req, res) => {
    const body = req.params;
    deleteProjectDataDetailById(body, (err, result) => {
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
  getCreditProjectTransactionDetails: (req, res) => {
    const body =req.params
    getCreditProjectTransactionDetails(body,(err, result) => {
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
  getDebitProjectTransactionDetails: (req, res) => {
    const body =req.params
    getDebitProjectTransactionDetails(body,(err, result) => {
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
