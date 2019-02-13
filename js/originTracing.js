
$(document).ready(function () {
    var winH = $(window).height();
    var module6H = $(".module6").height();
    if(winH <= 600 + module6H){
        $("body").height(520 + module6H);
    }else{
        $("body").height(winH - 80);
    };
    $(".leftBar li").removeClass("active").eq(1).addClass("active");
    $(".headerR_l").hide();
});

function selectTime(){
    clickbox1();
};
function selectArea(){
    clickbox2();
};

function openbox(type){

    $(".meng,.module7").hide();
    if(type=="白菜"){
$("#jsmind_container img").attr("src","../images/dabaicai_03.png")
    };
    if(type=="黄瓜"){
        $("#jsmind_container img").attr("src","../images/dahuanggua_03.png")
    };
    $("body").height(1500);
$(".meng,.module7").show();
    document.body.scrollTop=document.documentElement.scrollTop=850;
};


function clickbox1(){
$("#listContent2").hide();
$("#listContent1").show();
    $("#map img").attr("src","../images/chandizhuisu1.png")
}

function clickbox2(){
    $("#listContent1").hide();
    $("#listContent2").show();
    $("#map img").attr("src","../images/chandizhuisu2.png")
}


