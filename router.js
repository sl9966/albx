const express = require('express');
const router = express.Router();
const pagesController = require('./controllers/pagesController');

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



//暴露路由
module.exports = router;