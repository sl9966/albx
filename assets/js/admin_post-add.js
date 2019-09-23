$(function(){
  $('#feature').on('change',()=>{
    let formdata = new FormData();
    // console.log($('#feature')[0].files);
    let img = $('#feature')[0].files[0];
    formdata.append('feature',img)
    $.ajax({
      type : 'post',
      url : '/uploadFiles',
      dataType : 'json',
      data : formdata,
      processData : false,
      contentType : false,
      success : function(res){
        //uploads\upload_d5a3bf582e3e37caeff3eeb241cd9d66  获取到的路径格式，在数据库存储时存在问题
        let imgSrc = res.data;
        //只保留文件名
        imgSrc = imgSrc.substring(imgSrc.lastIndexOf('\\')+1);
        $('.thumbnail').attr('src','/uploads/temp/'+imgSrc).show();
        $('input[name=feature]').val(imgSrc);
      }
    })
  })
  //获取分类数据
  $.ajax({
    type : 'get',
    url : '/getCates',
    data : {},
    dataType : 'json',
    success : function(res){
      console.log(res.data);
      let str = '';
      res.data.forEach(e => {
        str += `<option value="${e.id}">${e.name}</option>`
      });
      $('#category').html(str);
    }
  })

  //富文本框
  CKEDITOR.replace('content');

  //友情提示
  function tips(str){
    $('.alert-danger').show().children('span').html(str);
      setTimeout(()=>{
        $('.alert-danger').hide();
      },1000)
  }

  $('.btn').on('click',(e)=>{
    e.preventDefault();
    //数据同步
    CKEDITOR.instances.content.updateElement();
    // console.log($('form').serialize());
    // console.log($('form')[0][0].value);
    if($('form')[0][1].value == ''){
      tips('请输入标题');
    }else{
      $.ajax({
        type : 'post',
        url : '/addPost',
        data : $('form').serialize(),
        dataType : 'json',
        success : function(res){
          if(res.code == 200){
            tips('新增成功');
          }else{
            tips('新增失败');
          }
        }
      })
    }

  })
})