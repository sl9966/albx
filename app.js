const express = require('express');
const app = express();
const router = require('./router');

//监听端口
app.listen(3382,()=>{
  console.log('http://127.0.0.1:3382');
});

//静态资源托管
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));

//设置ejs
app.set('view engine','ejs');
//设置访问目录
app.set('views','views');

app.use(router);