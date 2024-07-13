require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./src/api/users/user.router");
const ProjectRouter =require("./src/api/projectMaster/projectMaster.router");
const ProjectTransactionRouter =require("./src/api/projectTransaction/projectTransaction.router");
const TransactionRouter =require("./src/api/transactionMaster/transactionMaster.router");
const bodyParser = require("body-parser");
const cors = require('cors');
const sql = require('./src/config/database');
const { createUser } =require('./src/model/users.model');
const { createProject, createProjectTransaction, createOverAllTransaction }=require('./src/model/projectData.model')
app.use(cors({
  origin: '*'
}))
app.use(bodyParser.json());

sql.getConnection((err, connection) => {
  if (err) {
    console.log(err)
  }
  if (connection) {
    console.log("connected to mysql")
    // createUser()
    // createProject()
    // createProjectTransaction()
    // createOverAllTransaction()
  }
})

app.use("/api/users", userRouter);
app.use('/api/projectData', ProjectRouter);
app.use('/api/projectTransaction',ProjectTransactionRouter);
app.use('/api/transactionMaster',TransactionRouter);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
