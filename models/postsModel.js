const mysql = require('mysql');
const conn = mysql.createConnection({
  host : '127.0.0.1',
  user : 'root',
  password : 'root',
  database : 'albx',
  dateStrings : true
})

let sql = '';
module.exports = {
  getAllPosts(query,callback){
    // sql = `select posts.*,users.nickname,categories.name from posts,users,categories where posts.user_id = users.id and posts.category_id = categories.id`;
    sql = `select posts.*,users.nickname,categories.name
            from posts
            join users on posts.user_id = users.id 
            join categories on posts.category_id = categories.id 
            where 1=1 `;
          if(query.category_id && query.category_id != 'all'){
            sql += ` and posts.category_id = '${query.category_id}'`;
          }
          if(query.status && query.status != 'all'){
            sql += ` and posts.status = '${query.status}'`;
          }
          
          sql +=` order by posts.id desc limit ${(query.pageNum -1)*query.pageSize},${query.pageSize} `;
    conn.query(sql,(err,result)=>{
      if(err){
        callback(err);
      }else{
        sql = 'select count(*) as cnt from posts where 1=1 '
        if(query.category_id && query.category_id != 'all'){
          sql += ` and posts.category_id = '${query.category_id}'`;
        }
        if(query.status && query.status != 'all'){
          sql += ` and posts.status = '${query.status}'`;
        }
        conn.query(sql,(err,cnt)=>{
          if(err){
            callback(err);
          }else{
            callback(null,{data:result,cnt:cnt[0].cnt});
          }
        })
      }
    })
  },
  addPost(query,callback){
    sql = 'insert into posts set ?';
    conn.query(sql,query,(err,result)=>{
      if(err){
        console.log(err);
        callback(err);
      }else{
        callback(null)
      }
    })
  }
}