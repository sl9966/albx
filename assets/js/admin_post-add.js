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
})