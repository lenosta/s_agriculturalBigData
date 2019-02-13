/**
 * Created by admin on 2016/10/31.
 */

$(function() {
    //判断浏览器是否是IE9以下
    var ua = (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE9.0");

    var html = '<div class="ieTips" style="position:fixed;top:0;left:0;width: 100%; height: 38px; line-height: 38px; background: #fff7d9;z-index:1000;">' +
                    '<div style="float:left;margin-left:20px;">' +
                        '<span> 为了使您获得本平台最佳使用体验，建议使用如下浏览器：' +
                            ' Internet Explorer 10/11、&nbsp;&nbsp;' +
                            ' Mozilla Firefox 最新版本、&nbsp;&nbsp;' +
                            ' Chrome 最新版本。' +
                        '</span>' +
                    '</div>' +
                    '<div style="float:right;margin-right:20px;">' +
                        '<button type="button" class="close_prompt" style="border: 1px solid #ccc;padding:0 10px;line-height:36px;height:36px;">关闭提示</button>' +
                    '</div>' +
                '</div>';


    $(".ieTips").hide();
    if (ua){
        $(".ieTips").show();
        $("body").append(html).css({'padding-top':'38px'});
    }

    $(".close_prompt").on("click", function () {
        $(this).parents(".ieTips").slideUp();
        $("body").css({'padding-top':'0px'});
    });

});