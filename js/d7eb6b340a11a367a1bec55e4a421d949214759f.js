$(function () {
    function get_info() {
        var data;
        $.ajax({
            url: 'https://cdn.jsdelivr.net/gh/svnyang/svnyang.github.io@master/js/05d97e6e9834ccf063c552e404b9ecafc5e4d662X.json',
            type: 'GET',
            dataType: "json",
            async: false,
            success: function (res) {
                // console.log(res)
                data = res;
            }
        })
        return data;
    }
    var data = get_info();
    for (var dataKey in data['data']) {
        var sub_data = data['data'][dataKey];
        var title = sub_data['title'];
        var images = sub_data['images'];
        var href = sub_data['href'];
        // console.log(images)
        var MarHtml = 
        '<li class="site-thumbnail-container">'+
        '<div class="site-thumbnail-base">'+
        '<figure style="background-color: #F1F3F7;" class="site-thumbnail-placeholder">'+
        '<img src="'+ images +'" alt="">'+
        '</figure>'+
        '<a class="site-thumbnail-link" href="'+href+'" ></a>'+
        '<div class="site-thumbnail-overlay">'+
        '<div class="site-thumbnail-overlay-content">'+
        '<div class="site-title">'+title+'</div>'+
        '<div class="site-actions-container">'+
        '<div class="site-action leancloud_visitors"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none" role="img" class="icon-read fill-current shot-tools-icon"><path d="M7 3.45833C5.87242 3.45833 4.95833 4.37242 4.95833 5.5C4.95833 6.62758 5.87242 7.54167 7 7.54167C8.12758 7.54167 9.04167 6.62758 9.04167 5.5C9.04167 4.37242 8.12758 3.45833 7 3.45833ZM7 0.25C3.13425 0.25 0 4.625 0 5.5C0 6.375 3.13425 10.75 7 10.75C10.8657 10.75 14 6.375 14 5.5C14 4.625 10.8657 0.25 7 0.25ZM7 8.70833C5.22783 8.70833 3.79167 7.27217 3.79167 5.5C3.79167 3.72783 5.22783 2.29167 7 2.29167C8.77217 2.29167 10.2083 3.72783 10.2083 5.5C10.2083 7.27217 8.77217 8.70833 7 8.70833Z"></path></svg><span class="site-text leancloud-visitors-count"></span></div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        ' </li>'
        $('.site-box').append(MarHtml);
        $(".site-thumbnail-base a").each(function(){
            var _hreh = $(this).attr('href');
            // console.log(_hreh)
            $(this).next().children().children().children(".leancloud_visitors").attr("id",'/'+_hreh)
        });       
// $(".site-thumbnail-placeholder img").each(function(){
//     var img = $(this).attr('src');
//     console.log(img)
//     if(img != 'undefinde'){
//         $(this).parent().css("background-color","#ffffff")
//     }else{
//         alert('1')
//     }
// });
        var a = [];
        var obj = {};
        var prev = null;
        var next = null;
        $('.site-thumbnail-link').each(function(){
            var data = $(this).attr('href');
            // console.log(data)
            a.push(data);
        })

        for (var x in a) {
        x = parseInt(x);
        prev = a[x - 1] ? a[x - 1] : null;
        next = a[x + 1] ? a[x + 1] : null;

        obj[a[x]] = {'prev': prev, 'next': next};
        }
        // console.table(obj);
        localStorage.setItem('key',JSON.stringify(obj));

    };
})

new Valine({
    el: '#vcomments', 
    app_id: 'BDMNhQVBVrPSk0sPtuoES5pR-gzGzoHsz', // 这里填写上面得到的APP ID
    app_key: 'dTioucSGHIUy0DkUYcXgqloj', // 这里填写上面得到的APP KEY
    visitor: true, // 文章访问量统计
});

$('.footer-box').load('/footer.html');




