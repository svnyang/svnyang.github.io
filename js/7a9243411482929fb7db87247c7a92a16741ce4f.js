
function getScrollbarWidth() {
  var odiv = document.createElement('div'),//创建一个div
      styles = {
          width: '100px',
          height: '100px',
          overflowY: 'scroll'//让他有滚动条
      }, i, scrollbarWidth;
  for (i in styles) odiv.style[i] = styles[i];
  document.body.appendChild(odiv);//把div添加到body中
  scrollbarWidth = odiv.offsetWidth - odiv.clientWidth;//相减
  odiv.remove();//移除创建的div
  return scrollbarWidth;//返回滚动条宽度
}
  function shareToWeChat(event){
    $('body').addClass('modal-active');
    $('body').css("padding-right",getScrollbarWidth()+"px");
    $('.WeChat').append(
      '<div class="bounced-main fade-in">'+
        '<div class="bounced-box">'+   
            '<div class="bounced-content fade-in-bottom">'+ 
                '<div class="bounced-qrcode">'+
                  '<div id="qrcode"></div>'+
                '</div>'+
                '<div class="bounced-txt">'+
                  '<h6>微信扫一扫 分享朋友圈</h6>'+    
                  '<p class="bounced-text">(在微信中请长按二维码)</p>'+
                  '<button class="sy-io-action QQ"  onclick="shareToQzone(event)">'+ 
                  '<svg t="1625032510314" class="icon qq" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4598"><path d="M785.066667 725.333333c-4.266667 55.466667-29.866667 106.666667-72.533334 140.8 38.4 17.066667 93.866667 34.133333 93.866667 72.533334H217.6c0-34.133333 55.466667-55.466667 89.6-72.533334-38.4-38.4-64-89.6-72.533333-140.8v-17.066666l-72.533334 72.533333c-17.066667 17.066667-34.133333 17.066667-34.133333-38.4 0-34.133333 110.933333-302.933333 110.933333-302.933333v-85.333334c4.266667-153.6 128-273.066667 281.6-268.8 145.066667 4.266667 260.266667 119.466667 264.533334 264.533334v89.6s110.933333 268.8 110.933333 302.933333c0 55.466667-17.066667 55.466667-38.4 34.133333-55.466667-51.2-72.533333-72.533333-72.533333-72.533333v21.333333z" p-id="4599" fill="#1abbf8"></path></svg>'+ 
                  '</button>'+ 
                  '<button class="sy-io-action wb"  onclick="shareToSinaWB(event)">'+ 
                  '<svg t="1624948595233" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6996"><path d="M676.16 232.48s113.28-12 161.44 58.24 27.36 158.56 27.36 158.56a21.92 21.92 0 0 0 22.56 26.08h11.2A30.4 30.4 0 0 0 928 449.12s26.08-138.56-54.4-215.68c-62.72-60.32-148.64-66.88-183.04-66.88h-15.2a27.04 27.04 0 0 0-26.4 26.88v13.12a25.6 25.6 0 0 0 27.2 25.92zM453.12 758.08c79.04-16 132.48-81.92 119.52-148.64-11.2-57.44-67.84-96-133.76-96a163.52 163.52 0 0 0-32 3.2c-79.04 16-132.48 81.92-119.52 148.64s86.88 108.16 165.76 92.8z m2.24-171.68A24.64 24.64 0 1 1 432 611.04a24.48 24.48 0 0 1 23.36-24.64zM368 624.96c24.32-11.36 51.04-5.6 59.52 12.96s-3.52 42.72-27.52 54.08a60.96 60.96 0 0 1-25.12 5.76 36 36 0 0 1-34.4-18.88c-8.96-18.4 3.68-42.56 27.52-53.92z" fill="#e24040" p-id="6997"></path><path d="M467.52 857.44c208 0 374.4-110.24 374.4-246.4 0-114.88-141.76-114.88-141.76-122.4s70.72-74.08 0-115.68c-42.24-24.96-105.6-12.16-148.8 0a330.24 330.24 0 0 1-47.04 14.4c55.68-97.12-23.68-128-64-128-96 0-348.64 214.88-348.64 350.88s168.16 247.2 375.84 247.2z m-34.4-392.64c132.64-18.72 250.24 37.28 262.56 124.8s-85.28 173.76-218.08 192a365.28 365.28 0 0 1-50.72 3.52c-110.72 0-200.96-52.16-211.68-128-12.32-87.52 85.28-173.76 217.92-192.32z" fill="#e24040" p-id="6998"></path><path d="M780.64 444.16h16a21.44 21.44 0 0 0 20.64-17.44s18.88-73.12-24.96-113.12a111.04 111.04 0 0 0-75.84-28.16 108.32 108.32 0 0 0-25.28 2.56 21.12 21.12 0 0 0-17.44 20.16v6.88a16 16 0 0 0 17.92 16.8s48-6.56 71.36 21.6 5.12 73.76 5.12 73.76a12.32 12.32 0 0 0 12.48 16.96z" fill="#e24040" p-id="6999"></path></svg>'+ 
                  '</button>'+
                '</div>'+
            '</div>'+  
        '</div>'+
      '</div>'  
    )
   //初始化存放二维码的div
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      width : 100,
      height : 100
    });
    qrcode.makeCode(window.location.href);
    $('.bounced-main').click(function(){
      $('.bounced-main').remove();
      $('body').removeClass('modal-active');
      $('body').removeAttr("style","");
  }); 
  }
  function shareToSinaWB(event){
      event.preventDefault();
      var _shareUrl = 'http://service.weibo.com/share/share.php?';    
          _shareUrl += '&url='+ window.location.href;     
          _shareUrl += '&appkey=' + "SunYang的博客";
          _shareUrl += '&title=' +  $(".title").text();    
          _shareUrl += '&content=' + 'utf-8';   
          _shareUrl += '&pic=' + $(".image").attr("src");  
          window.open(_shareUrl,'_blank');
  }
  function shareToQzone(event){
    event.preventDefault();
    var _shareUrl = 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
        _shareUrl += 'url=' + window.location.href;  
        _shareUrl += '&showcount=' + 0 ; 
        _shareUrl += '&title=' + $(".title").text();
        _shareUrl += '&site=' + "SunYang的博客";  
          _shareUrl += '&content=' + "utf-8";   
        _shareUrl += '&pics=' + $(".image").attr("src");    
        window.open(_shareUrl,'_blank');
  }
  new Valine({
    el: '#vcomments', 
    app_id: 'BDMNhQVBVrPSk0sPtuoES5pR-gzGzoHsz', // 这里填写上面得到的APP ID
    app_key: 'dTioucSGHIUy0DkUYcXgqloj', // 这里填写上面得到的APP KEY
    master: 'd65bb3695502d69d2103c6a9dbf63b54',
    tagMeta: ["博主","小伙伴","访客"],
    friends:'d87c947f01bbcf3e2ba83a3d1ea05d17',
    placeholder: '说点什么... \n', 
    path: window.location.pathname,
    avatar:'wavatar', // 头像
    lang: 'zh-cn',
    recordIP:true, // 是否记录评论者IP
    visitor: true, // 文章访问量统计
    enableQQ: true, // 自动获取QQ昵称和QQ头像
    serverURLs: "",
    pageSize:'10', // 评论列表分页，每页条数
    metaPlaceholder: {"nick":"昵称","mail":"邮箱"},
});
var stUrl=window.location.href;
var arUrl=stUrl.split("/");
var stPage=arUrl[arUrl.length-1];
$('.leancloud_visitors').attr('id','/'+stPage);
$('.footer-box').load('/footer.html');
//添加title
document.title = $('#title').text();

var strUrl=window.location.href;
var arrUrl=strUrl.split("/");
var strPage=arrUrl[arrUrl.length-1];

var fileList = window.localStorage.getItem('key');
data = JSON.parse(fileList);
var prev = data[strPage].prev;
var next = data[strPage].next;

$(document).keydown(function(event){
    if(event.keyCode==13){
      location.href='index.html'; 
    }
    if(event.keyCode==37){
        if(prev == null){
          return false;
        }else{
          location.href= prev; 
        }
    }
    if(event.keyCode==39){
      if(next == null){
        return false;
      }else{
        location.href= next; 
      }
    
    }
});