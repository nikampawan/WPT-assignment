const mysql = require('mysql2');
let dbparams = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'wpt',
    port: '3306'
}
const con = mysql.createConnection(dbparams);

let category = 'Video Game';

con.query('select * from item where category = ?',[category],
(err, res)=>{
    if(err){
        console.log(err);
    } else {
        console.log('Done');
     
        for (let i = 0; i < res.length; i++){
            console.log(res[i].itemno);
            console.log(res[i].itemname);
            console.log(res[i].price);
            console.log(res[i].category);
        }
        
    }
});