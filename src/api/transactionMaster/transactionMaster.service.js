const pool = require("../../config/database");

module.exports = {
  createTransaction: (data, callBack) => {
    try {
      pool.query(
        `insert into transaction_master(user_id,accountant_id, quote, details,transaction_type) 
                          values(?,?,?,?,?)`,
        [
          data.user_id,
          data.accountant_id,
          data.quote,
          data.details,
          data.transaction_type
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

  getTransactionDetails: (callBack) => {
    try {
      pool.query(`SELECT um.user_id as user_id,
      tm.transaction_type,
      tm.transaction_id,
      am.user_id as accountant_id,
      case WHEN tm.user_id = um.user_id THEN um.firstname 
      ELSE 'N/a' 
      end as admin_name,
      case WHEN tm.accountant_id = am.user_id THEN am.firstname 
      ELSE 'N/A'
      end as accountant_name,
      tm.quote,
      tm.details
      from transaction_master tm
      join usermaster um on tm.user_id = um.user_id
      join usermaster am on tm.accountant_id = am.user_id 
      where tm.deleteflag =0
      ORDER by tm.transaction_id asc`, (err, result) => {
        if (err) {
          return callBack(err)
        };
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  updateTransactionDataDetailById: (data, callBack) => {
    try {
      pool.query(`update transaction_master set user_id=?,accountant_id=?,quote=?,details=?, transaction_type=? where transaction_id =?`,
        [
          data.user_id,
          data.accountant_id,
          data.quote,
          data.details,
          data.transaction_type,
          data.transaction_id], (err, result) => {
            if (err) return callBack(err);
            return callBack(null, result);
          })
    } catch (error) {
      return callBack(error)
    }
  },
  deleteTransactionDataDetailById: (data, callBack) => {
    try {
      pool.query(`update transaction_master set deleteflag = 1 where transaction_id=?`, [data.transaction_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    } catch (error) {
      return callBack(error)
    }
  },
};
