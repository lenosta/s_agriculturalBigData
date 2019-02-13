
$(document).ready(function () {

    var winH = $(window).height();
    var module6H = $(".module6").height();
    $(".leftBar li").removeClass("active").eq(2).addClass("active");
    $(".headerR_l").hide();
    cmap = tabcontent1map("china",true)// 中国地图
    //加载滚动条
    $('.selList').mCustomScrollbar({
        axis:"y",
        theme:"minimal-dark",
        autoHideScrollbar:true
    });


});

function showTab1(obj,className){
  $(".tabtitle li").removeClass("active");
    $(obj).addClass("active");
    $(".tabcontentc").hide();
    $("."+className).show();
    cmap = tabcontent1map("china",true)// 中国地图
}
function showTab2(obj,className){
    $(".tabtitle li").removeClass("active");
    $(obj).addClass("active");
    $(".tabcontentc").hide();
    $("."+className).show();
}

function selectTime(){
    cmap = tabcontent1map("china",true)// 中国地图
};
function selectArea(name){
    cmap = tabcontent1map("china",true)// 中国地图
    $(".xianjiming").html(name);
};
function selectPinzhong(){
    cmap = tabcontent1map("china",true)// 中国地图
    var str="";
    $("#pingzhong .active b").each(function(index,item){
        if(index>0){
            str+=" , "
        }
        str+=item.innerHTML;
    });
    $(".pingzhongming").html(str);
};

var tabcontent1mapData = {
    points: [{                          //第一条线路开始
        "name": "山东**县农产品生产区",
        "direct": "流出量",
        "num": "40000",
        "className": "qidian",
        "flag": ["flag1", "flag2", "flag3", "flag4", "flag5", "flag6", "flag7", "flag8"],
        "log": "120.385339",
        "lat": "36.306948",
        "icon": {
            url: '../images/icon_2.png',
            hoverUrl:'../images/icon_2.png',
            width: 50,
            height: 50
        }
    },
        {                          //第一条线路开始
            "name": "武汉**农产品批发市场",
            "direct": "流入量",
            "className": "zhongdian",
            flag: ['flag1'],
            "num": "3116",
            "log": "114.3162",
            "lat": "30.581084",
            "icon": {
                url: '../images/huangse.png',
                hoverUrl:'../images/huangse.png',
                width: 15,
                height: 15
            }
        },
        {                          //第一条线路开始
            "name": "沧州**农产品批发市场",
            "direct": "流入量",
            "className": "liujingdian",
            flag: ['flag2'],
            "num": "5000",
            "log": "116.863806",
            "lat": "39.904214",
            "icon": {
                url: '../images/zhuisuTabicon_03_07.png',
                hoverUrl:'../images/zhuisuTabicon_03_07.png',
                width: 10,
                height: 10
            }
        }
        ,
        {                          //第一条线路开始
            "name": "哈尔滨**农产品批发市场",
            "direct": "流入量",
            "num": "3993",
            "className": "zhongdian",
            flag: ['flag2'],
            "log": "126.657717",
            "lat": "45.773225",
            "icon": {
                url: '../images/huangse.png',
                hoverUrl:'../images/huangse.png',
                width: 15,
                height: 15
            }
        }
        ,
        {                          //第一条线路开始
            "name": "北京**农产品批发市场",
            "direct": "流入量",
            "num": "5530",
            "className": "zhongdian",
            flag: ['flag3'],
            "log": "116.395645",
            "lat": "39.929986",
            "icon": {
                url: '../images/huangse.png',
                hoverUrl:'../images/huangse.png',
                width: 15,
                height: 15
            }
        }
        ,
        {                          //第一条线路开始
            "name": "郑州**农产品批发市场",
            "direct": "流入量",
            "flag": ['flag4', 'flag5', 'flag6'],
            "num": "20000",
            "className": "liujingdian",
            "log": "113.649644",
            "lat": "34.75661",
            "icon": {
                url: '../images/zhuisuTabicon_03_07.png',
                hoverUrl:'../images/zhuisuTabicon_03_07.png',
                width: 10,
                height: 10
            }
        }
        ,
        {                          //第一条线路开始
            "name": "长沙**农产品批发市场",
            "direct": "流入量",
            "num": "3630",
            "className": "zhongdian",
            "flag": ['flag4'],
            "log": "112.979353",
            "lat": "28.213478",
            "icon": {
                url: '../images/huangse.png',
                hoverUrl:'../images/huangse.png',
                width: 15,
                height: 15
            }
        }
        ,
        {                          //第一条线路开始
            "name": "广州**农产品批发市场",
            "direct": "流入量",
            "num": "5710",
            "className": "zhongdian",
            "flag": ['flag5'],
            "log": "113.30765",
            "lat": "23.120049",
            "icon": {
                url: '../images/huangse.png',
                hoverUrl:'../images/huangse.png',
                width: 15,
                height: 15
            }
        }
        ,
        {                          //第一条线路开始
            "name": "成都**农产品批发市场",
            "direct": "流入量",
            "num": "4458",
            "className": "zhongdian",
            "flag": ['flag6'],
            "log": "104.067923",
            "lat": "30.679943",
            "icon": {
                url: '../images/huangse.png',
                hoverUrl:'../images/huangse.png',
                width: 15,
                height: 15
            }
        }
        ,
        {                          //第一条线路开始
            "name": "苏州**农产品批发市场",
            "direct": "流入量",
            "num": "4272",
            "className": "zhongdian",
            "flag": ['flag7'],
            "log": "120.619907",
            "lat": "31.317987",
            "icon": {
                url: '../images/huangse.png',
                hoverUrl:'../images/huangse.png',
                width: 15,
                height: 15
            }
        }
        ,
        {                          //第一条线路开始
            "name": "石家庄**农产品批发市场",
            "direct": "流入量",
            "num": "3993",
            "className": "zhongdian",
            "flag": ['flag8'],
            "log": "114.522082",
            "lat": "38.048958",
            "icon": {
                url: '../images/huangse.png',
                hoverUrl:'../images/huangse.png',
                width: 15,
                height: 15
            }
        }
    ],
    lines: [
        {
            className: 'line1',
            "flag": ['flag1'],
            source: {
                "name": "山东",
                "log": "120.385339",
                "lat": "36.306948"
            },
            target: {
                "name": "武汉",
                "log": "114.3162",
                "lat": "30.581084"
            }
        },
        {
            className: 'line1',
            "flag": ['flag2'],
            source: {
                "name": "山东",
                "log": "120.385339",
                "lat": "36.306948"
            },
            target: {
                "name": "沧州",
                "log": "116.863806",
                "lat": "39.904214"
            }
        }
        ,
        {
            className: 'line1',
            "flag": ['flag2'],
            source: {
                "name": "沧州",
                "log": "116.863806",
                "lat": "39.904214"
            },
            target: {
                "name": "哈尔滨",
                "log": "126.657717",
                "lat": "45.773225"
            }
        },
        {
            className: 'line1',
            "flag": ['flag3'],
            source: {
                "name": "山东",
                "log": "120.385339",
                "lat": "36.306948"
            },
            target: {
                "name": "北京",
                "log": "116.395645",
                "lat": "39.929986"
            }
        }
        ,
        {
            className: 'line1',
            "flag": ['flag4', 'flag5', 'flag6'],
            source: {
                "name": "山东",
                "log": "120.385339",
                "lat": "36.306948"
            },
            target: {
                "name": "郑州",
                "log": "113.649644",
                "lat": "34.75661"
            }
        }
        ,
        {
            className: 'line1',
            "flag": ['flag4'],
            source: {
                "name": "郑州",
                "log": "113.649644",
                "lat": "34.75661"
            },
            target: {
                "name": "长沙",
                "log": "112.979353",
                "lat": "28.213478",
            }
        }
        ,
        {
            className: 'line1',
            "flag": ['flag5'],
            source: {
                "name": "郑州",
                "log": "113.649644",
                "lat": "34.75661"
            },
            target: {
                "name": "广州",
                "log": "113.30765",
                "lat": "23.120049",
            }
        }
        ,
        {
            className: 'line1',
            "flag": ['flag6'],
            source: {
                "name": "郑州",
                "log": "113.649644",
                "lat": "34.75661"
            },
            target: {
                "name": "成都",
                "log": "104.067923",
                "lat": "30.679943",
            }
        },
        {
            className: 'line1',
            "flag": ['flag7'],
            source: {
                "name": "山东",
                "log": "120.385339",
                "lat": "36.306948"
            },
            target: {
                "name": "苏州",
                "log": "120.619907",
                "lat": "31.317987"
            }
        }
        ,
        {
            className: 'line1',
            "flag": ['flag8'],
            source: {
                "name": "山东",
                "log": "120.385339",
                "lat": "36.306948"
            },
            target: {
                "name": "石家庄",
                "log": "114.522082",
                "lat": "38.048958",
            }
        }

    ]
};
function clickHandle(event, data) {
    if(!data.properties.childNum){return;};
    if (data._type == 'area') {

        if(data.properties.name=="山东"){
            tabcontent1map(data.properties.name,true);
        }else{
            tabcontent1map(data.properties.name,true);
        }
    };

    if(data._type == 'point'){
        if(data.sf == '山东'){
            tabcontent1map(data.sf,true);
        }
    }

};
commonLib.CMap.config.baseDir = '../geoJson/'
function mouseOverHandle(event, data) {
     if (data._type == 'point') {
         var rect = event.target.getBoundingClientRect();
         var $tip = $('#map_popOver');
         if (!$tip.length) {
             $tip = $('<div id="map_popOver">');
             $('#tabcontent1map').append($tip);
         }
         $tip.html(popOver(data));
         var offset = $('#tabcontent1map svg').offset();
         $tip.css({
             left: (rect.right - rect.width / 2 - offset.left + window.scrollX) + 'px',
             top: (rect.bottom - rect.height / 2 - offset.top + window.scrollY) + 'px',
             display: 'block'
         });
         var lineDomArr = linePath(data.flag);

         lineDomArr.forEach(function (d) {
             d3.select(d).attr('class', 'line1 line-hover').attr('filter', 'url(#line_filter)')
         })
     };

}

function mouseOutHandle(event, data) {
    if (!$(event.toElement).is('#map_popOver')) {
        $('#map_popOver').css({
            display: 'none'
        });
        if (data._type == 'point') {
            var lineDomArr = cmap.lines.dom;
            lineDomArr.forEach(function (d) {
                d3.select(d).attr('class', 'line1').attr('filter', '')
            })
        }
    }
}

function popOver(param) {
    return '<h4>' + (param.name) + '</h4>'
}

function tabcontent1map(name,isDrill) {
    if(name!="china"){lastData={}}else{
        lastData= tabcontent1mapData;
    };
    var map = new commonLib.CMap({
        dom: document.getElementById('tabcontent1map'),
        data: lastData,
        mouseOutHandle: mouseOutHandle,
        mouseOverHandle: mouseOverHandle,
      clickHandle: isDrill ? clickHandle : null,
        name: name,
    });
    return map;

};




function linePath(flag) {
    var lineDomArr = [];
    var obj = {};

    for (var i = flag.length; i--;) {
        obj[flag[i]] = true;
    }
    cmap.lines.data.forEach(function (data, i) {
        if (!data.flag) return;
        var exist;
        for (var m = 0, mlen = data.flag.length; m < mlen; m++) {
            exist = obj.hasOwnProperty(data.flag[m]);
            if (exist) {
                lineDomArr.push(cmap.lines.dom[i]);
                break;
            }
        }
    });
    return lineDomArr;

}
