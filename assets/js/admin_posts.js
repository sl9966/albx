$(function(){
  let pageSize = $('.pageSize')[0].value, pageNum = 1;
  function init(){
    $.ajax({
      type : 'get',
      url : '/getPosts',
      data : {
        pageNum,
        pageSize
      },
      dataType : 'json',
      success : function(res){
        setPage(Math.ceil(res.data.cnt / pageSize));
        let html = template('tp',res.data);
        $('tbody').html(html);
      }
    })
  };
  init();
  function setPage(total){
    $('.pagination').bootstrapPaginator({
      //设置版本号
      bootstrapMajorVersion: 3,
      // 显示第几页
      currentPage: pageNum,
      // 总页数
      totalPages: total,
      //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
      onPageClicked: function(event,originalEvent,type,page) {
        pageNum = page;
        init();
      }
    })
  };

  $('.pageSize').on('change',(e)=>{
    pageSize = e.target.value;
    pageNum = 1;
    init();
  })
})