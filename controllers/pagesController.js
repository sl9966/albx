//这是处理页面的控制器
const querystring = require('querystring');

module.exports = {
  //前台页面
  getIndexPage(req,res){
    res.render('index',{});
  },

  getDetailPage(req,res){
    res.render('detail',{});
  },

  getListPage(req,res){
    res.render('list',{});
  },

  //后台页面
  getAdminCategoriesPage(req,res){
    res.render('admin/categories',{});
  },


  getAdminCommentsPage(req,res){
    res.render('admin/comments',{});
  },


  getAdminIndexPage(req,res){
    let obj = querystring.parse(req.headers.cookie);
    if(obj.isLogin && obj.isLogin == 'true'){
      res.render('admin/index',{});
    }else{
      res.redirect('/login');
    }
  },


  getAdminNavMenusPage(req,res){
    res.render('admin/nav-menus',{});
  },


  getAdminPasswordResetPage(req,res){
    res.render('admin/password-reset',{});
  },


  getAdminPostAddPage(req,res){
    res.render('admin/post-add',{});
  },


  getAdminPostsPage(req,res){
    res.render('admin/posts',{});
  },


  getAdminProfilePage(req,res){
    res.render('admin/profile',{});
  },


  getAdminSettingsPage(req,res){
    res.render('admin/settings',{});
  },


  getAdminSlidesPage(req,res){
    res.render('admin/slides',{});
  },


  getAdminUsersPage(req,res){
    res.render('admin/users',{});
  },

  getAdminLoginPage(req,res){
    res.render('admin/login',{});
  }

}