
  function shareToWeChat(event){
   $('.WeChat').append(
    '<div class="bounced-main">'+
      '<div class="bounced-box">'+   
          '<div class="bounced-content">'+ 
              '<h6>微信扫一扫 分享朋友圈</h6>'+    
              '<div id="qrcode"></div>'+
              '<p class="bounced-text">(在微信中请长按二维码)</p>'+
          '</div>'+  
          '<div class="close">'+ 
            '<svg t="1553064665406" class="icon ico"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3368" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style>'+
              '</defs>'+
              '<path d="M512 12C235.9 12 12 235.9 12 512s223.9 500 500 500 500-223.9 500-500S788.1 12 512 12z m166.3 609.7c15.6 15.6 15.6 40.9 0 56.6-7.8 7.8-18 11.7-28.3 11.7s-20.5-3.9-28.3-11.7L512 568.6 402.3 678.3c-7.8 7.8-18 11.7-28.3 11.7s-20.5-3.9-28.3-11.7c-15.6-15.6-15.6-40.9 0-56.6L455.4 512 345.7 402.3c-15.6-15.6-15.6-40.9 0-56.6 15.6-15.6 40.9-15.6 56.6 0L512 455.4l109.7-109.7c15.6-15.6 40.9-15.6 56.6 0 15.6 15.6 15.6 40.9 0 56.6L568.6 512l109.7 109.7z" p-id="3369">'+
              '</path>'+
            '</svg>'+    
        '</div>'+  
      '</div>'+
    '</div>'  
  )
   //初始化存放二维码的div
  var qrcode = new QRCode(document.getElementById("qrcode"), {
       width : 100,
       height : 100
     });
     //window.location.href获取到URL
     qrcode.makeCode(window.location.href);
      $('.close').click(function(){
        $('.bounced-main').remove();
    }); 
  }
  function shareToSinaWB(event){
      event.preventDefault();
      var _shareUrl = 'http://service.weibo.com/share/share.php?';    
          _shareUrl += '&url='+ window.location.href;     
          _shareUrl += '&appkey=' + "SunYang的博客";
          _shareUrl += '&title=' +  $(".MainTitle").text();    
          _shareUrl += '&content=' + 'utf-8';   
          _shareUrl += '&pic=' + $(".picPng").attr("src");  
          window.open(_shareUrl,'_blank');
  }
  function shareToQzone(event){
    event.preventDefault();
    var _shareUrl = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
        _shareUrl += 'url=' + window.location.href;  
        _shareUrl += '&showcount=' + 0 ; 
        _shareUrl += '&title=' + $(".MainTitle").text();
        _shareUrl += '&site=' + "SunYang的博客";  
          _shareUrl += '&content=' + "utf-8";   
        _shareUrl += '&pics=' + $(".picPng").attr("src");    
        window.open(_shareUrl,'_blank');
  }
  new Valine({
    el: '#vcomments', 
    app_id: 'BDMNhQVBVrPSk0sPtuoES5pR-gzGzoHsz', // 这里填写上面得到的APP ID
    app_key: 'dTioucSGHIUy0DkUYcXgqloj', // 这里填写上面得到的APP KEY
    master: 'd65bb3695502d69d2103c6a9dbf63b54',
    tagMeta: ["博主","小伙伴","访客"],
    friends:'d87c947f01bbcf3e2ba83a3d1ea05d17',
    placeholder: '@SunYang \n在昵称中留下QQ号（系统自动获取QQ昵称、QQ邮箱、QQ头像等信息) 以便收到回复。', 
    path: window.location.pathname,
    avatar:'wavatar', // 头像
    lang: 'zh-cn',
    recordIP:true, // 是否记录评论者IP
    visitor: true, // 文章访问量统计
    enableQQ: true, // 自动获取QQ昵称和QQ头像
    serverURLs: "",
    pageSize:'10', // 评论列表分页，每页条数
    metaPlaceholder: {"nick":"昵称/QQ号（必填）","mail":"邮箱（必填）"},
});
var strUrl=window.location.href;
var arrUrl=strUrl.split("/");
var strPage=arrUrl[arrUrl.length-1];
$('.leancloud_visitors').attr('id','/'+strPage);

  $('.footer').load('footer.html');

    //添加title
    document.title = $('#title').text();