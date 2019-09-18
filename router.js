const express = require('express');
const router = express.Router();
const pagesController = require('./controllers/pagesController');

//获取前台页面
router.get('/',(req,res)=>{
        pagesController.getIndexPage(req,res);
      })

      .get('/detail',(req,res)=>{
        pagesController.getDetailPage(req,res);
      })

      .get('/list',(req,res)=>{
        pagesController.getListPage(req,res);
      })


      //获取后台页面
      .get('/admin/categories',(req,res)=>{
        pagesController.getAdminCategoriesPage(req,res);
      })
    
      .get('/admin/comments',(req,res)=>{
        pagesController.getAdminCommentsPage(req,res);
      })
    
      .get('/admin/index',(req,res)=>{
        pagesController.getAdminIndexPage(req,res);
      })
    
      .get('/admin/nav-menus',(req,res)=>{
        pagesController.getAdminNavMenusPage(req,res);
      })
    
      .get('/admin/password-reset',(req,res)=>{
        pagesController.getAdminPasswordResetPage(req,res);
      })
    
      .get('/admin/post-add',(req,res)=>{
        pagesController.getAdminPostAddPage(req,res);
      })
    
      .get('/admin/posts',(req,res)=>{
        pagesController.getAdminPostsPage(req,res);
      })
    
      .get('/admin/profile',(req,res)=>{
        pagesController.getAdminProfilePage(req,res);
      })
    
      .get('/admin/settings',(req,res)=>{
        pagesController.getAdminSettingsPage(req,res);
      })
    
      .get('/admin/slides',(req,res)=>{
        pagesController.getAdminSlidesPage(req,res);
      })
    
      .get('/admin/users',(req,res)=>{
        pagesController.getAdminUsersPage(req,res);
      })



//暴露路由
module.exports = router;