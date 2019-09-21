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
}