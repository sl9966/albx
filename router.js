const express = require('express');
const router = express.Router();
const pagesController = require('./controllers/pagesController');
const usersController = require('./controllers/usersController');
const postsController = require('./controllers/postsController');
const catesController = require('./controllers/catesController');
const uploadController = require('./controllers/uploadController');

//获取前台页面
router.get('/',pagesController.getIndexPage)

      .get('/detail',pagesController.getDetailPage)

      .get('/list', pagesController.getListPage)


      //获取后台页面
      .get('/admin/categories',pagesController.getAdminCategoriesPage)
    
      .get('/admin/comments',pagesController.getAdminCommentsPage)
    
      .get('/admin',pagesController.getAdminIndexPage)
    
      .get('/admin/nav-menus',pagesController.getAdminNavMenusPage)
    
      .get('/admin/password-reset',pagesController.getAdminPasswordResetPage)
    
      .get('/admin/post-add',pagesController.getAdminPostAddPage)
    
      .get('/admin/posts',pagesController.getAdminPostsPage)
    
      .get('/admin/profile',pagesController.getAdminProfilePage)
    
      .get('/admin/settings',pagesController.getAdminSettingsPage)
    
      .get('/admin/slides',pagesController.getAdminSlidesPage)
    
      .get('/admin/users',pagesController.getAdminUsersPage)

      .get('/login',pagesController.getAdminLoginPage)

      //登录业务
      .post('/login',usersController.login)
      //登出业务
      .get('/logout',usersController.logout)


      //获取posts数据
      .get('/getPosts',postsController.getAllPosts)

      //获取分类数据
      .get('/getCates',catesController.getCates)


      //上传文件
      .post('/uploadFiles',uploadController.uploadFiles)

      //添加文章
      .post('/addPost',postsController.addPost)

//暴露路由
module.exports = router;