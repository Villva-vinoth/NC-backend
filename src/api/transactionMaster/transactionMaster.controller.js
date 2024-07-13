const {createTransaction, getTransactionDetails,  updateTransactionDataDetailById, deleteTransactionDataDetailById } = require("./transactionMaster.service");

module.exports = {
  createTransaction: (req, res) => {
    const body = req.body;
    createTransaction(body, (err, results) => {
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
  getTransactionDetails: (req, res) => {
    getTransactionDetails((err, result) => {
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
 
  updateTransactionDataDetailById: (req, res) => {
    const body = req.body;
    updateTransactionDataDetailById(body, (err, result) => {
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
  deleteTransactionDataDetailById: (req, res) => {
    const body = req.params;
    deleteTransactionDataDetailById(body, (err, result) => {
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



};
