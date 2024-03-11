const sql = require('../config/database');

module.exports ={
    createUser : ()=>{
        let data = `create table if not exists usermaster(
            p_id int primary key auto_increment,
            user_id varchar(400),
            firstname varchar(45) not null,
            roletype int not null,
            email varchar(45) not null,
            createAt varchar(45),
            password varchar(45),
            lastname varchar(45),
            phoneno varchar(10),
            gender varchar(10),
            address varchar(200),
            city varchar(45),
            state varchar(45),
            deleteflag int default 0
        )`
       try{
        sql.query(data, (err,results)=>{
            if(err){
                console.log(err.message);
            }
            else{
                console.log("table usermaster created Successfully !");
            }
            sql.end();
        })
       }
       catch(err){
        console.log(err);
       }
    }
}