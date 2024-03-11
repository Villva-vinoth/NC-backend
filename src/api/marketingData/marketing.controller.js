const {createData, getAdminDataDetails, getTelecomDataDetailById, updateAdminDataDetailById, updateTelecomDataDetailById, deleteAdminDataDetailById } = require("./marketing.service");

module.exports = {
  createData: (req, res) => {
    const body = req.body;
    createData(body, (err, results) => {
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
  getAdminDataDetails: (req, res) => {
    getAdminDataDetails((err, result) => {
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
  getTelecomDataDetailById: (req, res) => {
    const body = req.params;
    getTelecomDataDetailById(body, (err, result) => {
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
  updateAdminDataDetailById: (req, res) => {
    const body = req.body;
    updateAdminDataDetailById(body, (err, result) => {
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
  updateTelecomDataDetailById: (req, res) => {
    const body = req.body;
    updateTelecomDataDetailById(body, (err, result) => {
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
  deleteAdminDataDetailById: (req, res) => {
    const body = req.params;
    deleteAdminDataDetailById(body, (err, result) => {
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
  }


};
