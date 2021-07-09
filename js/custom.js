

window.addEventListener("load", function() {
  console.log("\n%cSunYang's Blog%cv5.1%c\n\n", "padding: 8px; background: #09203f; font-family: 'Sitka Heading'; font-weight: bold; font-size: large; color: white;", "padding: 8px; background: #ff5450; font-family: 'Sitka Text'; font-size: large; color: #eee;", "");
  console.log("联系请发邮件至%c svnyang@163.com（ 邮件标题请以“姓名-原因-来自Sy”命名）", "color:#537895");
  console.log(`页面加载完毕消耗了${Math.round(performance.now() * 100) / 100}ms`);
  $(".line").each(function(i, o) {
    str = $(o).html();
    if (str.substring(0, 2) == "$ ") {
      $(o).html('<span style="user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;">$ </span>' + str.substring(2));
    }
  });
});