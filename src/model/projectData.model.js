const sql = require('../config/database');

module.exports ={
    createProject :()=>{
        let data = `create table if not exists projectMaster(
            project_id int auto_increment primary key,
            project_title varchar(100) not null,
            project_site_location varchar(500) not null,
            project_details text,
            user_id varchar(45) references usermaster(user_id),
            deleteflag int default 0,
            createAt timestamp default now()
        )`
        sql.query( data,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(`table projectMaster create Successfully`);
            }
            sql.end();
        })
    },
    createProjectTransaction:()=>{
        let data =`create table if not exists projectTransaction(
            project_transaction_id int auto_increment primary key,
            transaction_type varchar(2) not null,
            approve_status int default 1,
            deleteflag int default 0,
            project_id int references projectMaster(project_id),
            user_id varchar(40) references usermaster(user_id),
            project_quote decimal(65,3) not null,
            transaction_details varchar(200) not null,
            createAt timestamp default now() 
        )`
        sql.query(data,(err,result)=>{
            if(err) {
                console.log(err);
            }
            else{
                console.log(`table project transaction created successfully!`);
                sql.end();
            }
        })
    }
}