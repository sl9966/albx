const mysql = require('mysql');
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user : 'root',
  password : 'root',
  database : 'albx'
})


let sql = '';
module.exports = {
  getCates(callback){
    sql = 'select * from categories';
    conn.query(sql,(err,result)=>{
      if(err){
        callback(err);
      }else{
        callback(null,result);
      }
    })
  }
}