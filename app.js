const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');

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

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.use(session({ 
    secret: '加密方法', 
    //重新保存：强制会话保存即使是未修改的。默认为true但是得写上
    resave: false, 
    //强制“未初始化”的会话保存到存储。 
    saveUninitialized: false,
  }))


app.use(router);