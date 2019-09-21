const mysql = require('mysql');
const conn = mysql.createConnection({
  host : '127.0.0.1',
  user : 'root',
  password : 'root',
  database : 'albx'
})

let sql = '';
module.exports = {
  getAllPosts(callback){
    // sql = `select posts.*,users.nickname,categories.name from posts,users,categories where posts.user_id = users.id and posts.category_id = categories.id`;
    sql = `select posts.*,users.nickname,categories.name
            from posts
            join users on posts.user_id = users.id 
            join categories on posts.category_id = categories.id`;
    conn.query(sql,(err,result)=>{
      if(err){
        callback(err);
      }else{
        callback(null,result);
      }
    })
  },
}