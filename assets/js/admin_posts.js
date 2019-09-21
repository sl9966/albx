$(function(){
  $.ajax({
    type : 'get',
    url : '/getPosts',
    success : function(res){
      let html = template('tp',res);
      $('tbody').html(html);
    }
  })
})