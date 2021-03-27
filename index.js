const sql=require('mssql');
const express=require('express');
const app=express();
var mysql = require('mysql');  
    

var con = mysql.createConnection({  
    host: "localhost",  
    user: "root",  
    password: "",  
    database: "pgdac"  
    });  

    con.connect((err)=>{
        if(err)
        console.log(err);
    });

   app.get('/:id',(req,res)=>{
    var id=req.params.id;
    var sql='SELECT a.emp_name,b.dept_name from Employee_master a inner join Department_master b on a.emp_dept_id=b.dept_id and a.emp_id=?';
    con.query(sql,[id] ,function (err, result) {  
    if (err) throw err;  
    res.send(result) ;
    });  


})


app.listen(5000,()=>{
    console.log("Server started at 5000");
})