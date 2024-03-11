const sql = require('../config/database');

module.exports ={
    createMarket : ()=>{
        let data = `create table if not exists marketData(
            market_data_id int auto_increment primary key,
            name varchar(45) not null,
            gender varchar(10) not null,
            comments varchar(500) not null,
            status varchar(10) not null default 'true',
            phoneno varchar(10) not null,
            user_id varchar(400) references usermaster(user_id),
            deleteflag int default 0,
            correction varchar(500) not null,
            createAt varchar(45)
        )`
       try{
        sql.query(data, (err,results)=>{
            if(err){
                console.log(err.message);
            }
            else{
                console.log("table marketData created Successfully !");
            }
            sql.end();
        })
       }
       catch(err){
        console.log(err);
       }
    }
}