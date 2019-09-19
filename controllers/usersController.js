const usersModel = require('../models/usersModel');

module.exports = {
  //登录验证
  login(req,res){
    let obj = req.body;
    usersModel.login(obj.email,(err,data)=>{
      if(err){
        console.log(err);
        res.json({
          code : 400,
          msg : '服务器异常，请重启'
        })
      }else{
        if(data){
          if(data.password === obj.password){
            req.session.isLogin = 'true';
            console.log(req.session);
            res.json({
              code : 200,
              msg : '登录成功'
            })
          }else{
            res.json({
              code : 400,
              msg : '密码错误'
            })
          }
        }else{
          res.json({
            code : 400,
            msg : '邮箱错误'
          })
        }
      }
    })
  },
}