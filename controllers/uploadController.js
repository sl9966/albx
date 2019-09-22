const uploadModel = require('../models/postsModel');
const formidable = require('formidable');

module.exports = {
  uploadFiles(req,res){
    let form = formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = './uploads/temp';
    form.keepExtensions = true;
    form.parse(req,(err,fields,files)=>{
      if(err){
        res.json({
          code : 400,
          msg : '上传失败'
        })
      }else{
        res.json({
          code : 200,
          msg : '上传成功',
          data : files.feature.path
        })
      }
    });
  },
}