const pool = require("../../config/database");

module.exports = {
  createProject: (data, callBack) => {
    try {

      pool.query(
        `insert into projectmaster(user_id,project_title, project_site_location,project_details,project_estimation) 
                          values(?,?,?,?,?)`,
        [
          data.user_id,
          data.project_title,
          data.project_site_location,
          data.project_details,
          data.project_estimation,
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    }
    catch (err) {
      return callBack(err);
    }

  },

  getProjectDetails: (callBack) => {
    try {
      pool.query(`select * from projectmaster where deleteflag = 0 order by project_id desc`, (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  updateProjectDataDetailById: (data, callBack) => {
    try {
      pool.query(`update projectMaster set project_title=?,project_site_location=?,project_details=?,project_estimation=? where project_id =?`,
       [data.project_title,
      data.project_site_location,
      data.project_details,
      data.project_estimation,
      data.project_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    } catch (error) {
      return callBack(error)
    }
  },
  deleteProjectDataDetailById: (data, callBack) => {
    try {
      pool.query(`update projectMaster set deleteflag = 1 where project_id=?`,[data.project_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    } catch (error) {
      return callBack(error)
    }
  },
  getRecentProjectDetails:(callBack)=>{
    try {
      pool.query(`select * from projectmaster order by project_id desc`, (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  }
};
