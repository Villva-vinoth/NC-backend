const pool = require("../../config/database");

module.exports = {
  createData: (data, callBack) => {
    try {
      let date = new Date();
      date = date.toISOString().split('T')[0];
      pool.query(
        `insert into marketData(user_id,name, gender, comments,phoneno,createAt) 
                          values(?,?,?,?,?,?)`,
        [
          data.user_id,
          data.name,
          data.gender,
          data.comments,
          data.phoneno,
          date
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

  getAdminDataDetails: (callBack) => {

    try {
      pool.query(`select * from marketData where createAt = current_date and deleteflag=0 order by market_data_id desc`, (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  getTelecomDataDetailById: (data, callBack) => {
    try {
      pool.query(`select market_data_id,name,comments,phoneno,gender,status from marketData where user_id=? and createAt=current_date and deleteflag=0 order by market_data_id desc`, [data.user_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  updateAdminDataDetailById: (data, callBack) => {
    try {
      pool.query(`update marketData set name=?,comments=?,phoneno=?,gender=?,status=?,correction='' where market_data_id =?`, [data.name,
      data.comments,
      data.phoneno,
      data.gender,
      data.status,
      data.market_data_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    } catch (error) {
      return callBack(error)
    }
  },
  updateTelecomDataDetailById: (data, callBack) => {
    try {
      pool.query(`update marketData set correction=?,status='false' where market_data_id=?`, [data.correction,
      data.market_data_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    } catch (error) {
      return callBack(error)
    }
  },
  deleteAdminDataDetailById: (data, callBack) => {
    try {
      pool.query(`update marketData set deleteflag = 1 where market_data_id=?`,[data.market_data_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    } catch (error) {
      return callBack(error)
    }
  }
};
