const mysql = require('mysql');//requiring the sql module

//connectin to database
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"userinfo",
})
conn.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log("connection sucessfull...");
    }
})

//fetching api
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=> {
    if(res.ok){
        console.log("successful");
    }else{
        console.log("Not succesful");
    }
    return res.json()})
.then(data => { 
    data.forEach(data =>{

    const id = data.id;
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const website = data.website;

    conn.query('insert into userapi2 values(?,?,?,?,?)',[id,name,email,phone,website],(err,res)=>{
        if(err){
            throw err;
        }
        return console.log(res);
    })

})})
.catch(error => console.log('Error'));

//display data
conn.query("select * from userapi2",(err,res)=>{
    if(err){
        throw err;
    }
    return console.log(res);
})




