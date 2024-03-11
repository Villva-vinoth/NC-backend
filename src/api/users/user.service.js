const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    try {
      pool.query(`select count(*) as count from usermaster`, (err, result) => {
        if (err) callBack(err)
        // if (result) {
        let counts = result[0].count
        let gsrID = `gsr-${counts + 1}`
        pool.query(`select email from usermaster where email=? and deleteflag=0`, [data.email], (err, result) => {
          if (err) callBack(err)
          if (result.length === 0) {
            let date = new Date();
            date = date.toISOString().split('T')[0];
            pool.query(
              `insert into usermaster(user_id,firstname, email, password,roletype,createAt) 
                          values(?,?,?,?,?,?)`,
              [
                gsrID,
                data.firstName,
                data.email,
                data.password,
                data.roleType,
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
          else {
            return callBack(null, "already Exits!");
          }
        })
        // }
      })


    }
    catch (err) {
      return callBack(err);
    }

  },
  getUserByUserEmail: (email, callBack) => {
    try {
      pool.query(
        `select * from usermaster where email = ? and deleteflag=0`,
        [email],
        (error, results) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    }
    catch (err) {
      return callBack(err);
    }

  },
  getUsersDetails: (callBack) => {

    try {
      pool.query(`select  user_id,firstname,roleType,createAt,email,password from usermaster where deleteflag=0 and roletype !=0  ORDER BY p_id DESC `, (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  getUserDetailById: (data, callBack) => {

    try {
      pool.query(`select user_id,firstname,lastname,phoneno,gender,address,city,state,roleType,createAt,email from usermaster where user_id=? and deleteflag=0`, [data.user_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result[0]);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  updateUserDetailById: (data, callBack) => {
    try {
      pool.query(`update usermaster set firstname=?,email=?,roletype=?,password=? where user_id=?`, [data.firstName,
      data.email,
      data.roleType,
      data.password, data.user_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    } catch (error) {
      return callBack(error)
    }
  },
  deleteUserDetailById: (data, callBack) => {
    try {
      pool.query(`update usermaster set deleteflag = 1 where user_id=?`, [data.user_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    } catch (error) {
      return callBack(error)
    }
  },
  getUserpasswordById: (data, callBack) => {
    try {
      pool.query(`select password from usermaster where user_id=?`, [data.user_id], (err, result) => {
        if (err) return callBack(err);
        return callBack(null, result);
      })
    }
    catch (err) {
      return callBack(err);
    }
  },
  updatePersonalDetailById: (data, callBack) => {

    try {
      pool.query(`update usermaster set firstname=?,lastname=?,phoneno=?,gender=?,address=?,city=?,state=? where user_id=?`,
        [data.firstName,
        data.lastName,
        data.phoneno,
        data.gender,
        data.address,
        data.city,
        data.state,
        data.user_id], (err, result) => {
          if (err) return callBack(err);
        
          return callBack(null, result);
        })
    } catch (error) {
      return callBack(error)
    }
  },
  updateAdminPasswordById :(data,callback)=>{
    try{
      pool.query(`update usermaster set password=? where user_id=?`,
      [data.password,
      data.user_id], (err, result) => {
        if (err) return callback(err);
        return callback(null, result);
      })
    }
    catch(error){
      return callback(error);
    }
  }
};
