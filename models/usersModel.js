const mysql = require('mysql');
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user : 'root',
  password : 'root',
  database : 'albx'
})


module.exports = {
  login(email,callback){
    let sql = `select * from users where email = '${email}'`;
    conn.query(sql,(err,result)=>{
      err ? callback(err) : callback(null,result[0]);
      // if(err){
      //   callback(err);
      // }else{
      //   callback(err,result[0]);
      // }
    })
  },
}