$(function(){
  let tips = $('.tips');
  tips.css('display','none');
  $('.btnLogin').on('click',()=>{
    tips.children('span').text('');
    if($('#email').val() === ''){
      tips.children('span').text('请输入邮箱账号');
      tips.fadeIn(1000).fadeOut();
    }else if($('#email').val() !== ''){
      if($('#password').val() === ''){
        tips.children('span').text('请输入密码');
        tips.fadeIn(1000).fadeOut();
      }else{
        $.ajax({
          type : 'post',
          url : 'login',
          data : $('form').serialize(),
          datatypr : 'json',
          success : (res)=>{
            if(res.code === 400){
              tips.children('span').text(res.msg);
              tips.fadeIn(1000).fadeOut();
            }
            if(res.code === 200){
              location.href = '/admin';
            }
          }
        })
      }
    }
  })
})