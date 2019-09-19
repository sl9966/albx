$(function(){
  //处理左侧导航正常显示样式的问题
  let urlStr = location.href;
  let routername = '';
  //判断存不存在参数
  if(urlStr.indexOf('?') === -1){
    routername = urlStr.substring(urlStr.lastIndexOf('/')+1);
  }else{
    let index = urlStr.indexOf('?');
    routername = urlStr.substring(urlStr.lastIndexOf('/')+1,index);
  }

  //处理二级菜单
  if(routername === 'post-add' || routername === 'posts' || routername === 'categories'){
    $('#'+routername).parent().addClass('in').attr('aria-expanded','true').siblings('a').removeClass('collapsed');
  }
  if(routername === 'nav-menus' || routername === 'slides' || routername === 'settings'){
    $('#'+routername).parent().addClass('in').attr('aria-expanded','true').siblings('a').removeClass('collapsed');
  }

  $('#'+routername).addClass('active');
})