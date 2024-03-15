const {createProject, getProjectDetails,  updateProjectDataDetailById, deleteProjectDataDetailById, getRecentProjectDetails } = require("./projectMaster.service");

module.exports = {
  createProject: (req, res) => {
    const body = req.body;
    createProject(body, (err, results) => {
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
  getProjectDetails: (req, res) => {
    getProjectDetails((err, result) => {
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
 
  updateProjectDataDetailById: (req, res) => {
    const body = req.body;
    updateProjectDataDetailById(body, (err, result) => {
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
  getRecentProjectDetails: (req, res) => {
    getRecentProjectDetails((err, result) => {
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
