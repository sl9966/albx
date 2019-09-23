const postsModel = require('../models/postsModel');

module.exports = {
  getAllPosts(req,res){
    let query = req.query;
    postsModel.getAllPosts(query,(err,data) =>{
      if(err){
        res.json({
          code : 400,
          msg : '请重试'
        })
      }else{
        res.json({
          code : 200,
          msg : '成功',
          data
        })
      }
    });
  },
  addPost(req,res){
    let query = req.body;
    query.id = null;
    query.views = 0;
    query.likes = 0;
    query.user_id = req.session.currentUser.id;
    postsModel.addPost(query,err=>{
      if(err){
        res.json({
          code : 400,
          msg : '添加失败'
        })
      }else{
        res.json({
          code : 200,
          msg : '添加成功'
        })
      }
    })
  },
}