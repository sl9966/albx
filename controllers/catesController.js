const catesModel = require('../models/catesModel');

module.exports = {
  getCates(req,res){
    catesModel.getCates((err,data)=>{
      if(err){
        res.json({
          code : 400,
          msg : '获取数据失败'
        })
      }else{
        res.json({
          code : 200,
          msg : '获取数据成功',
          data
        })
      }
    });
  },
}