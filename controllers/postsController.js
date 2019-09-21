const postsModel = require('../models/postsModel');

module.exports = {
  getAllPosts(req,res){
    postsModel.getAllPosts((err,result) =>{
      if(err){
        res.json({
          code : 400,
          msg : '请重试'
        })
      }else{
        res.json({
          code : 200,
          msg : '成功',
          data : result
        })
      }
    });
  },
}