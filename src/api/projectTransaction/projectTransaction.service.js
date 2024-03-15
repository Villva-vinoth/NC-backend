const pool = require("../../config/database");

module.exports = {
  createProjectTransaction: (data, callBack) => {
    try {
      pool.query(
        `insert into projecttransaction(user_id, project_id, transaction_type,transaction_details,project_quote) 
                          values(?,?,?,?,?)`,
        [
          data.user_id,
          data.project_id,
          data.transaction_type,
          data.transaction_details,
          data.project_quote,
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

  getAdminProjectTransactionDetails: (data,callBack) => {
    try {
      pool.query(`select pt.project_transaction_id,pt.transaction_type,pt.transaction_details,pt.project_quote,pt.createAt,pt.approve_status,um.firstname,pm.project_id from projecttransaction pt join usermaster um on pt.user_id =um.user_id join projectmaster pm on pt.project_id = pm.project_id and pt.project_id =? and pt.deleteflag=0 order by project_transaction_id desc`,[data.project_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  getAccountProjectTransactionDetails: (data,callBack) => {
    try {
      pool.query(`select pt.project_transaction_id,pt.transaction_type,pt.transaction_details,pt.project_quote,pt.createAt,pt.approve_status from projectTransaction pt join projectmaster pm on pt.project_id=pm.project_id and pt.deleteflag=0 and pt.project_id=? and pt.user_id=? order by project_transaction_id desc`,[data.project_id,data.user_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  updateAdminProjectTransactionApproveDetailById: (data, callBack) => {
    try {
      pool.query(`update projectTransaction set approve_status=? where project_transaction_id =?`,
        [data.approve_status,data.project_transaction_id], (err, result) => {
          if (err) return callBack(err);
          return callBack(null, result);
        })
    } catch (error) {
      return callBack(error)
    }
  },
  updateAccountantProjectDataDetailById: (data, callBack) => {
    try {
      pool.query(`update projectMaster set project_title=?,project_site_location=?,project_details=? where project_id =?`,
        [data.project_title,
        data.project_site_location,
        data.project_details,
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
      pool.query(`update projectMaster set deleteflag = 1 where project_id=?`, [data.market_data_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    } catch (error) {
      return callBack(error)
    }
  },
  getCreditProjectTransactionDetails: (data,callBack) => {
    try {
      pool.query(`select sum(project_quote) as credit from projectTransaction where deleteflag=0 and project_id=? and approve_status=2 and transaction_type='cr'`,[data.project_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  getDebitProjectTransactionDetails: (data,callBack) => {
    try {
      pool.query(`select sum(project_quote) as debit from projectTransaction where deleteflag=0 and project_id=? and approve_status=2 and transaction_type='dr'`,[data.project_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
};
