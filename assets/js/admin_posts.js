$(function(){
  let pageSize = $('.pageSize')[0].value, pageNum = 1;
  function init(obj){
    $.ajax({
      type : 'get',
      url : '/getPosts',
      data : {
        pageNum,
        pageSize,
        ...obj
      },
      dataType : 'json',
      success : function(res){
        if(res.code == 200){
          if(res.data.cnt != 0){
            setPage(Math.ceil(res.data.cnt / pageSize));
            let html = template('tp',res.data);
            $('tbody').html(html);
          }else{
            $('tbody').html(` <tr><td colspan="7" style="text-algin:center">无数据</td></tr>`);
          }
        }
      }
    })
  };
  init();

  //筛选处理
  let searchData = {};
  $('.postsCate').on('change',(e)=>{
    searchData.category_id = e.target.value;
  });
  $('.postsStatu').on('change',e=>{
    searchData.status = e.target.value;
  });


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
        init(searchData);
      }
    })
  };

  $('.pageSize').on('change',(e)=>{
    pageSize = e.target.value;
    pageNum = 1;
    init(searchData);
  });


  $('.searchBtn').on('click',(e)=>{
    e.preventDefault();
    pageNum = 1;
    init(searchData);
  })
})