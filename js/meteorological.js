$(function(){
    /*var winH = $(window).height();
    if(winH <= 760){
        $(".contMap").height(500);
    }else{
        $(".contMap").height(winH - 280);
    }*/
    mapChina();
    zwsyq1();
    tq1();
    tljsl();
    var mlmodule1Cont = charts.init({id:854,container:"mlmodule1Cont",option:{}});
    var mlmodule2Cont = charts.init({id:855,container:"mlmodule2Cont",option:{}});
    var mlmodule4Cont = charts.init({id:856,container:"mlmodule4Cont",option:{}});

    $(document).on("click",".nzwmh",function(){
        mapChina();
        zwsyq1();
    });
    $(document).on("click",".nzwym",function(){
        mapChinaXym();
        zwsyq2();
    })

    $(".mljsl").click(function(){
        mapChina();
        tljsl();
    })
    $(".mlqw").click(function(){
        mapChinaWd();
        tlwd();
    })
    $(".mlrz").click(function(){
        mapChinaRz();
        tlrz();
    })
    $(".mltr").click(function(){
        mapChinaTr();
        tltr();
    })

    $('.mapChina').on('click', function() {
        var mlqxlxHtml = $("#mlqxlx").find("span").text();
        if(mlqxlxHtml == "降水量（mm）"){
            mapChina();
        }else if(mlqxlxHtml == "气温（℃）"){
            mapChinaWd();
        }
        else if(mlqxlxHtml == "日照（h）"){
            mapChinaRz();
        }
        else if(mlqxlxHtml == "土壤相对湿度（%）"){
            mapChinaTr();
        }
    });
    $('.mapShandong').on('click', function() {
        var mlqxlxHtml = $("#mlqxlx").find("span").text();
        if(mlqxlxHtml == "降水量（mm）"){
            mapShandong();
        }else if(mlqxlxHtml == "气温（℃）"){
            mapShandongWd();
        }
        else if(mlqxlxHtml == "日照（h）"){
            mapShandongRz();
        }
        else if(mlqxlxHtml == "土壤相对湿度（%）"){
            mapShandongTr();
        }
    });

});

var date;
function timepick(d){
    console.log(d.cal.getNewDateStr());
    date = d.cal.getNewDateStr();
    if(date == "2016-8-16"){
        tq1();
        var mlmodule1Cont = charts.init({id:854,container:"mlmodule1Cont",option:{}});
        var mlmodule2Cont = charts.init({id:855,container:"mlmodule2Cont",option:{}});
        var mlmodule4Cont = charts.init({id:856,container:"mlmodule4Cont",option:{}});
    }else{
        tq2();
        var mlmodule1Cont = charts.init({id:854,container:"mlmodule1Cont",option:{
            data : ['济宁市','淄博','威海','青岛市','济南市', '日照', '潍坊', '莱芜', '德州'],
            series: [
                {
                    data:[0.035, 0.084, 0.077, 0.175, 0.161, 0.084, 0.042, 0, 0.042]
                },
                {
                    data:[1.5, 3.3, 1.2, 0.9, 6, 10.5, 4.5, 2.1, 0]
                },
                {
                    data:[9, 7.2, 4.8, 5.4, 7.8, 9.6, 7.2, 0, 9]
                },
                {
                    data:[1.5, 1.05, 0.45, 1.2, 1.2, 1.65, 7.5, 0, 0.45]
                },
                {
                    data:[0.024, 0.108, 0.048, 0.168,0.156,0.072, 0.006,0.012, 0.006]
                }
            ]
        }});
        var mlmodule2Cont = charts.init({id:855,container:"mlmodule2Cont",option:{
            series : [
                {
                    color:['#e3eb07','#d7144b','#2a80cd','#21e3c7','#31d180'],
                    data:[
                        {
                            value:60
                        },
                        {
                            value:15
                        },
                        {
                            value:0.6
                        },
                        {
                            value:0.7
                        },
                        {
                            value:30
                        }
                    ]
                }
            ]
        }});
        var mlmodule4Cont = charts.init({id:856,container:"mlmodule4Cont",option:{}});
    }
}

function tq1(){
    var html = "";
    $(".mlmodule3Cont").html(html);
    html = '<table cellpadding="0" cellspacing="0" border="0">'+
        '<tr>'+
        '<th class="leidian">雷电</th>'+
        '<td class="fabu"><span>发布</span>黄色雷电预警</td>'+
        '<td>16时</td>'+
    '</tr>'+
    '<tr>'+
    '<th class="baoyu">暴雨</th>'+
        '<td class="fabu"><span>发布</span>黄色暴雨预警</td>'+
        '<td>15时</td>'+
    '</tr>'+
    '<tr>'+
    '<th class="bingbao">冰雹</th>'+
        '<td class="fabu"><span>发布</span>橙色冰雹预警</td>'+
        '<td>14时</td>'+
    '</tr>'+
    '<tr>'+
    '<th class="dafeng">大风</th>'+
        '<td class="fabu"><span>发布</span>蓝色大风预警</td>'+
        '<td>13时</td>'+
    '</tr>'+
    '<tr>'+
    '<th class="gaowen">高温</th>'+
        '<td class="jiechu"><span>解除</span>橙色高温预警</td>'+
        '<td>10时</td>'+
    '</tr>'+
    '<tr>'+
    '<th class="taifeng">台风</th>'+
        '<td class="jiechu"><span>解除</span>蓝色台风预警</td>'+
        '<td>09时</td>'+
    '</tr>'+
    '</table>';
    $(".mlmodule3Cont").html(html);
}
function tq2(){
    var html = "";
    $(".mlmodule3Cont").html(html);
    html = '<table cellpadding="0" cellspacing="0" border="0">'+
        '<tr>'+
        '<th class="leidian">雷电</th>'+
        '<td class="fabu"><span>发布</span>黄色雷电预警</td>'+
        '<td>16时</td>'+
        '</tr>'+
        '<tr>'+
        '<th class="baoyu">暴雨</th>'+
        '<td class="fabu"><span>发布</span>黄色暴雨预警</td>'+
        '<td>15时</td>'+
        '</tr>'+
        '<tr>'+
        '<th class="bingbao">冰雹</th>'+
        '<td class="jiechu"><span>解除</span>橙色冰雹预警</td>'+
        '<td>14时</td>'+
        '</tr>'+
        '<tr>'+
        '<th class="dafeng">大风</th>'+
        '<td class="jiechu"><span>解除</span>蓝色大风预警</td>'+
        '<td>13时</td>'+
        '</tr>'+
        '<tr>'+
        '<th class="gaowen">高温</th>'+
        '<td class="jiechu"><span>解除</span>橙色高温预警</td>'+
        '<td>10时</td>'+
        '</tr>'+
        '</table>';
    $(".mlmodule3Cont").html(html);
}

function zwsyq1() {
    var html2 = "";
    $(".visualMap_3 ul").html(html2);
    html2 = '<li class="bg1">出苗</li>'+
        '<li class="bg2">现蕾</li>'+
        '<li class="bg3">开花</li>'+
        '<li class="bg4">裂铃</li>'+
        '<li class="bg5">吐絮</li>';
    $(".visualMap_3 ul").html(html2);
}
function zwsyq2() {
    var html2 = "";
    $(".visualMap_3 ul").html(html2);
    html2 = '<li class="bg1">拔节</li>'+
        '<li class="bg2">抽雄</li>'+
        '<li class="bg3">开花</li>'+
        '<li class="bg4">吐丝</li>'+
        '<li class="bg5">乳熟</li>';
    $(".visualMap_3 ul").html(html2);
}

function tljsl(){
    var html3 = "";
    $(".visualMap_2").html(html3);
    html3 = '<p>降水量（mm）</p>'+
        '<dl>'+
        '<dt>0</dt>'+
        '<dd></dd>'+
        '<dt>100</dt>'+
        '</dl>';
    $(".visualMap_2").html(html3);
}
function tlwd(){
    var html3 = "";
    $(".visualMap_2").html(html3);
    html3 = '<p>温度(℃)</p>'+
        '<dl>'+
        '<dt>20</dt>'+
        '<dd></dd>'+
        '<dt>35</dt>'+
        '</dl>';
    $(".visualMap_2").html(html3);
}
function tlrz(){
    var html3 = "";
    $(".visualMap_2").html(html3);
    html3 = '<p>日照(h)</p>'+
        '<dl>'+
        '<dt>10</dt>'+
        '<dd></dd>'+
        '<dt>15</dt>'+
        '</dl>';
    $(".visualMap_2").html(html3);
}
function tltr(){
    var html3 = "";
    $(".visualMap_2").html(html3);
    html3 = '<p>土壤相对湿度(%)</p>'+
        '<dl>'+
        '<dt>65</dt>'+
        '<dd></dd>'+
        '<dt>80</dt>'+
        '</dl>';
    $(".visualMap_2").html(html3);
}

function mapChina(){
    var mapColor = ['#00edff','#00c9ff','#009bff','#0072eb','#003a78']
    var mapjsl = {
        '济南市':56,
        '青岛市':60,
        '淄博市':80,
        '枣庄市':15,
        '东营市':25,
        '烟台市':10,
        '潍坊市':45,
        '济宁市':40,
        '泰安市':30,
        '威海市':100,
        '日照市':80,
        '莱芜市':47,
        '临沂市':30,
        '德州市':46,
        '聊城市':36,
        '滨州市':28,
        '菏泽市':18
    }
    var mapjsyj = {
        '济南市':'暴雨',
        '青岛市':'暴雨',
        '淄博市':'暴雨到大暴雨',
        '枣庄市':'小到中雨',
        '东营市':'中到大雨',
        '烟台市':'小到中雨',
        '潍坊市':'大雨',
        '济宁市':'大雨',
        '泰安市':'中到大雨',
        '威海市':'大暴雨',
        '日照市':'暴雨到大暴雨',
        '莱芜市':'大雨',
        '临沂市':'中到大雨',
        '德州市':'大雨',
        '聊城市':'中到大雨',
        '滨州市':'中到大雨',
        '菏泽市':'中雨'
    }
    var data = {
        points: [
            {
                "title": "邹平县",
                "log": "117.670806",
                "lat": "36.956593",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "夏津县",
                "log": "116.037322",
                "lat": "37.016689",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "利津县",
                "log": "118.400337",
                "lat": "37.655326",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "鄄城县",
                "log": "115.552871",
                "lat": "35.555043",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "商河县",
                "log": "117.208714",
                "lat": "37.325947",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泗水县",
                "log": "117.345264",
                "lat": "35.640741",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱城区",
                "log": "117.645913",
                "lat": "36.313395",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "冠县",
                "log": "115.540837",
                "lat": "36.536357",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "费县",
                "log": "118.340768",
                "lat": "35.072409",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱西市",
                "log": "120.442831",
                "lat": "36.863637",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "五莲县",
                "log": "119.249433",
                "lat": "35.744383",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泰山区",
                "log": "117.183902",
                "lat": "36.215457",
                syq: '裂龄',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "寿光市",
                "log": "118.852534",
                "lat": "37.029892",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱阳市",
                "log": "120.751343",
                "lat": "36.905533",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "台儿庄区",
                "log": "117.638243",
                "lat": "34.587964",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "博山区",
                "log": "117.965553",
                "lat": "36.425427",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            }
        ]
    };

    function clickHandle(event, data, cmap) {
        if (data._type == 'area') {
            var level = cmap.option.level + 1;
            showMap(data.properties.name, level);
        } else if(data._type == 'point'){
            if(data.sf == '山东'){
                showMap(data.sf, 2);
            }
        }
    }


    function mouseOverHandle(event, data) {
        if (data._type == 'point') {
            var rect = event.target.getBoundingClientRect();
            var $tip = $('#map_popOver');
            if (!$tip.length) {
                $tip = $('<div id="map_popOver">');
                $('#map').append($tip);
            }
            $tip.html(popOver(data));
            var offset = $('#map svg').offset();
            $tip.css({
                left: (rect.right - rect.width / 2 - offset.left + window.scrollX) + 'px',
                top: (rect.bottom - rect.height / 2 - offset.top + window.scrollY) + 'px',
                display: 'block'
            });
        }else if (data._type == 'area') {
            if(areaFlag){
                var $tip = $('#map_tooltip');
                if (!$tip.length) {
                    $tip = $('<div id="map_tooltip">');
                    $('#map').append($tip);
                }
                d3.select("#map_tooltip").transition().duration(200).style("opacity", 0.9);
                d3.select("#map_tooltip").html(tooltipHtml(data.properties.name))
                    .style("left", (d3.event.pageX - 400) + "px")
                    .style("top", (d3.event.pageY - 130) + "px");
            }
        }
    }

    function mouseOutHandle(event, data) {
        if (!$(event.toElement).is('#map_popOver')) {
            $('#map_popOver').css({
                display: 'none'
            });
        }
        if (!$(event.toElement).is('#map_tooltip')) {
            d3.select("#map_tooltip").transition().duration(500).style("opacity", 0);
        }
        if (!$(event.toElement).is('#bar_tooltip')) {
            $('#bar_tooltip').stop().fadeOut();
        }
    }

    function popOver(param) {
        return '<h4 class="tl" style="color: yellow">' + (param.title) + '</h4>' +
            '<div class="tl" style="font-size:14px;color:#FFF">棉花</div>'+
            '<div class="tl" style="font-size:14px;color:#FFF;font-weight: bold;">' + (param.syq) + '期</div>'
    }

    function tooltipHtml(n) {
        return "<h4 style='color: yellow'>" + n + "</h4>" +
            '<div class="tl cfff" style="color: #FFF;">'+ mapjsyj[n] +'</div>'+
            '<div class="tl cfff" style="color: #FFF;">降水量：'+ mapjsl[n] +'mm</div>'
    }

    commonLib.CMap.config.baseDir = '../geoJson/'

    function showMap(name, level) {
        if(level>2){data={}};

        if(name === '山东'&& level == 2){
            areaFlag = true;
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                areaColor: function(d) {
                    var i = Math.round(Math.random()*4);
                    return mapColor[i]
                },
                level: level == undefined ? 1 : level
            });
        }else {
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                level: level == undefined ? 1 : level
            });
            areaFlag = false;
        }
        return map;
    }

    var cmap = showMap('china', 1);
}
function mapShandong(){
    var mapColor = ['#00edff','#00c9ff','#009bff','#0072eb','#003a78']
    var mapjsl = {
        '济南市':56,
        '青岛市':60,
        '淄博市':80,
        '枣庄市':15,
        '东营市':25,
        '烟台市':10,
        '潍坊市':45,
        '济宁市':40,
        '泰安市':30,
        '威海市':100,
        '日照市':80,
        '莱芜市':47,
        '临沂市':30,
        '德州市':46,
        '聊城市':36,
        '滨州市':28,
        '菏泽市':18
    }
    var mapjsyj = {
        '济南市':'暴雨',
        '青岛市':'暴雨',
        '淄博市':'暴雨到大暴雨',
        '枣庄市':'小到中雨',
        '东营市':'中到大雨',
        '烟台市':'小到中雨',
        '潍坊市':'大雨',
        '济宁市':'大雨',
        '泰安市':'中到大雨',
        '威海市':'大暴雨',
        '日照市':'暴雨到大暴雨',
        '莱芜市':'大雨',
        '临沂市':'中到大雨',
        '德州市':'大雨',
        '聊城市':'中到大雨',
        '滨州市':'中到大雨',
        '菏泽市':'中雨'
    }
    var data = {
        points: [
            {
                "title": "邹平县",
                "log": "117.670806",
                "lat": "36.956593",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "夏津县",
                "log": "116.037322",
                "lat": "37.016689",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "利津县",
                "log": "118.400337",
                "lat": "37.655326",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "鄄城县",
                "log": "115.552871",
                "lat": "35.555043",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "商河县",
                "log": "117.208714",
                "lat": "37.325947",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泗水县",
                "log": "117.345264",
                "lat": "35.640741",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱城区",
                "log": "117.645913",
                "lat": "36.313395",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "冠县",
                "log": "115.540837",
                "lat": "36.536357",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "费县",
                "log": "118.340768",
                "lat": "35.072409",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱西市",
                "log": "120.442831",
                "lat": "36.863637",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "五莲县",
                "log": "119.249433",
                "lat": "35.744383",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泰山区",
                "log": "117.183902",
                "lat": "36.215457",
                syq: '裂龄',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "寿光市",
                "log": "118.852534",
                "lat": "37.029892",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱阳市",
                "log": "120.751343",
                "lat": "36.905533",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "台儿庄区",
                "log": "117.638243",
                "lat": "34.587964",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "博山区",
                "log": "117.965553",
                "lat": "36.425427",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            }
        ]
    };

    function clickHandle(event, data, cmap) {
        if (data._type == 'area') {
            var level = cmap.option.level + 1;
            showMap(data.properties.name, level);
        } else if(data._type == 'point'){
            if(data.sf == '山东'){
                showMap(data.sf, 2);
            }
        }
    }


    function mouseOverHandle(event, data) {
        if (data._type == 'point') {
            var rect = event.target.getBoundingClientRect();
            var $tip = $('#map_popOver');
            if (!$tip.length) {
                $tip = $('<div id="map_popOver">');
                $('#map').append($tip);
            }
            $tip.html(popOver(data));
            var offset = $('#map svg').offset();
            $tip.css({
                left: (rect.right - rect.width / 2 - offset.left + window.scrollX) + 'px',
                top: (rect.bottom - rect.height / 2 - offset.top + window.scrollY) + 'px',
                display: 'block'
            });
        }else if (data._type == 'area') {
            if(areaFlag){
                var $tip = $('#map_tooltip');
                if (!$tip.length) {
                    $tip = $('<div id="map_tooltip">');
                    $('#map').append($tip);
                }
                d3.select("#map_tooltip").transition().duration(200).style("opacity", 0.9);
                d3.select("#map_tooltip").html(tooltipHtml(data.properties.name))
                    .style("left", (d3.event.pageX - 400) + "px")
                    .style("top", (d3.event.pageY - 130) + "px");
            }
        }
    }

    function mouseOutHandle(event, data) {
        if (!$(event.toElement).is('#map_popOver')) {
            $('#map_popOver').css({
                display: 'none'
            });
        }
        if (!$(event.toElement).is('#map_tooltip')) {
            d3.select("#map_tooltip").transition().duration(500).style("opacity", 0);
        }
        if (!$(event.toElement).is('#bar_tooltip')) {
            $('#bar_tooltip').stop().fadeOut();
        }
    }

    function popOver(param) {
        return '<h4 class="tl" style="color: yellow">' + (param.title) + '</h4>' +
            '<div class="tl" style="font-size:14px;color:#FFF">棉花</div>'+
            '<div class="tl" style="font-size:14px;color:#FFF;font-weight: bold;">' + (param.syq) + '期</div>'
    }

    function tooltipHtml(n) {
        return "<h4 style='color: yellow'>" + n + "</h4>" +
            '<div class="tl cfff" style="color:#FFF;">'+ mapjsyj[n] +'</div>'+
            '<div class="tl cfff" style="color:#FFF;">降水量：'+ mapjsl[n] +'mm</div>'
    }

    commonLib.CMap.config.baseDir = '../geoJson/'

    function showMap(name, level) {
        if(level>2){data={}};
        if(name === '山东'&& level == 2){
            areaFlag = true;
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                areaColor: function(d) {
                    var i = Math.round(Math.random()*4);
                    return mapColor[i]
                },
                level: level == undefined ? 1 : level
            });
        }else {
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                level: level == undefined ? 1 : level
            });
            areaFlag = false;
        }
        return map;
    }

    var cmap = showMap('山东', 2);
}

function mapChinaXym(){
    var mapColor = ['#00edff','#00c9ff','#009bff','#0072eb','#003a78']
    var mapjsl = {
        '济南市':56,
        '青岛市':60,
        '淄博市':80,
        '枣庄市':15,
        '东营市':25,
        '烟台市':10,
        '潍坊市':45,
        '济宁市':40,
        '泰安市':30,
        '威海市':100,
        '日照市':80,
        '莱芜市':47,
        '临沂市':30,
        '德州市':46,
        '聊城市':36,
        '滨州市':28,
        '菏泽市':18
    }
    var mapjsyj = {
        '济南市':'暴雨',
        '青岛市':'暴雨',
        '淄博市':'暴雨到大暴雨',
        '枣庄市':'小到中雨',
        '东营市':'中到大雨',
        '烟台市':'小到中雨',
        '潍坊市':'大雨',
        '济宁市':'大雨',
        '泰安市':'中到大雨',
        '威海市':'大暴雨',
        '日照市':'暴雨到大暴雨',
        '莱芜市':'大雨',
        '临沂市':'中到大雨',
        '德州市':'大雨',
        '聊城市':'中到大雨',
        '滨州市':'中到大雨',
        '菏泽市':'中雨'
    }
    var data = {
        points: [
            {
                "title": "邹平县",
                "log": "117.670806",
                "lat": "36.956593",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "夏津县",
                "log": "116.037322",
                "lat": "37.016689",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "利津县",
                "log": "118.400337",
                "lat": "37.655326",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "鄄城县",
                "log": "115.552871",
                "lat": "35.555043",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "商河县",
                "log": "117.208714",
                "lat": "37.325947",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泗水县",
                "log": "117.345264",
                "lat": "35.640741",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱城区",
                "log": "117.645913",
                "lat": "36.313395",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "冠县",
                "log": "115.540837",
                "lat": "36.536357",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "费县",
                "log": "118.340768",
                "lat": "35.072409",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱西市",
                "log": "120.442831",
                "lat": "36.863637",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "五莲县",
                "log": "119.249433",
                "lat": "35.744383",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泰山区",
                "log": "117.183902",
                "lat": "36.215457",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "寿光市",
                "log": "118.852534",
                "lat": "37.029892",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱阳市",
                "log": "120.751343",
                "lat": "36.905533",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "台儿庄区",
                "log": "117.638243",
                "lat": "34.587964",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "博山区",
                "log": "117.965553",
                "lat": "36.425427",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            }
        ]
    };

    function clickHandle(event, data, cmap) {
        if (data._type == 'area') {
            var level = cmap.option.level + 1;
            showMap(data.properties.name, level);
        } else if(data._type == 'point'){
            if(data.sf == '山东'){
                showMap(data.sf, 2);
            }
        }
    }


    function mouseOverHandle(event, data) {
        if (data._type == 'point') {
            var rect = event.target.getBoundingClientRect();
            var $tip = $('#map_popOver');
            if (!$tip.length) {
                $tip = $('<div id="map_popOver">');
                $('#map').append($tip);
            }
            $tip.html(popOver(data));
            var offset = $('#map svg').offset();
            $tip.css({
                left: (rect.right - rect.width / 2 - offset.left + window.scrollX) + 'px',
                top: (rect.bottom - rect.height / 2 - offset.top + window.scrollY) + 'px',
                display: 'block'
            });
        }else if (data._type == 'area') {
            if(areaFlag){
                var $tip = $('#map_tooltip');
                if (!$tip.length) {
                    $tip = $('<div id="map_tooltip">');
                    $('#map').append($tip);
                }
                d3.select("#map_tooltip").transition().duration(200).style("opacity", 0.9);
                d3.select("#map_tooltip").html(tooltipHtml(data.properties.name))
                    .style("left", (d3.event.pageX - 400) + "px")
                    .style("top", (d3.event.pageY - 130) + "px");
            }
        }
    }

    function mouseOutHandle(event, data) {
        if (!$(event.toElement).is('#map_popOver')) {
            $('#map_popOver').css({
                display: 'none'
            });
        }
        if (!$(event.toElement).is('#map_tooltip')) {
            d3.select("#map_tooltip").transition().duration(500).style("opacity", 0);
        }
        if (!$(event.toElement).is('#bar_tooltip')) {
            $('#bar_tooltip').stop().fadeOut();
        }
    }

    function popOver(param) {
        return '<h4 class="tl" style="color: yellow">' + (param.title) + '</h4>' +
            '<div class="tl" style="font-size:14px;color:#fff">夏玉米</div>'+
            '<div class="tl" style="font-size:14px;color:#fff;font-weight: bold;">' + (param.syq) + '期</div>'
    }

    function tooltipHtml(n) {
        return "<h4>" + n + "</h4>" +
            '<div class="tl cfff">'+ mapjsyj[n] +'</div>'+
            '<div class="tl cfff">降水量：'+ mapjsl[n] +'mm</div>'
    }

    commonLib.CMap.config.baseDir = '../geoJson/'

    function showMap(name, level) {
        if(level>2){data={}};
        if(name === '山东'&& level == 2){
            areaFlag = true;
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                areaColor: function(d) {
                    var i = Math.round(Math.random()*4);
                    return mapColor[i]
                },
                level: level == undefined ? 1 : level
            });
        }else {
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                level: level == undefined ? 1 : level
            });
            areaFlag = false;
        }
        return map;
    }

    var cmap = showMap('china', 1);
}
function mapShandongXym(){
    var mapColor = ['#00edff','#00c9ff','#009bff','#0072eb','#003a78']
    var mapjsl = {
        '济南市':56,
        '青岛市':60,
        '淄博市':80,
        '枣庄市':15,
        '东营市':25,
        '烟台市':10,
        '潍坊市':45,
        '济宁市':40,
        '泰安市':30,
        '威海市':100,
        '日照市':80,
        '莱芜市':47,
        '临沂市':30,
        '德州市':46,
        '聊城市':36,
        '滨州市':28,
        '菏泽市':18
    }
    var mapjsyj = {
        '济南市':'暴雨',
        '青岛市':'暴雨',
        '淄博市':'暴雨到大暴雨',
        '枣庄市':'小到中雨',
        '东营市':'中到大雨',
        '烟台市':'小到中雨',
        '潍坊市':'大雨',
        '济宁市':'大雨',
        '泰安市':'中到大雨',
        '威海市':'大暴雨',
        '日照市':'暴雨到大暴雨',
        '莱芜市':'大雨',
        '临沂市':'中到大雨',
        '德州市':'大雨',
        '聊城市':'中到大雨',
        '滨州市':'中到大雨',
        '菏泽市':'中雨'
    }
    var data = {
        points: [
            {
                "title": "邹平县",
                "log": "117.670806",
                "lat": "36.956593",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "夏津县",
                "log": "116.037322",
                "lat": "37.016689",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "利津县",
                "log": "118.400337",
                "lat": "37.655326",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "鄄城县",
                "log": "115.552871",
                "lat": "35.555043",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "商河县",
                "log": "117.208714",
                "lat": "37.325947",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泗水县",
                "log": "117.345264",
                "lat": "35.640741",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱城区",
                "log": "117.645913",
                "lat": "36.313395",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "冠县",
                "log": "115.540837",
                "lat": "36.536357",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "费县",
                "log": "118.340768",
                "lat": "35.072409",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱西市",
                "log": "120.442831",
                "lat": "36.863637",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "五莲县",
                "log": "119.249433",
                "lat": "35.744383",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泰山区",
                "log": "117.183902",
                "lat": "36.215457",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "寿光市",
                "log": "118.852534",
                "lat": "37.029892",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱阳市",
                "log": "120.751343",
                "lat": "36.905533",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "台儿庄区",
                "log": "117.638243",
                "lat": "34.587964",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "博山区",
                "log": "117.965553",
                "lat": "36.425427",
                syq: '吐丝',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            }
        ]
    };

    function clickHandle(event, data, cmap) {
        if (data._type == 'area') {
            var level = cmap.option.level + 1;
            showMap(data.properties.name, level);
        } else if(data._type == 'point'){
            if(data.sf == '山东'){
                showMap(data.sf, 2);
            }
        }
    }


    function mouseOverHandle(event, data) {
        if (data._type == 'point') {
            var rect = event.target.getBoundingClientRect();
            var $tip = $('#map_popOver');
            if (!$tip.length) {
                $tip = $('<div id="map_popOver">');
                $('#map').append($tip);
            }
            $tip.html(popOver(data));
            var offset = $('#map svg').offset();
            $tip.css({
                left: (rect.right - rect.width / 2 - offset.left + window.scrollX) + 'px',
                top: (rect.bottom - rect.height / 2 - offset.top + window.scrollY) + 'px',
                display: 'block'
            });
        }else if (data._type == 'area') {
            if(areaFlag){
                var $tip = $('#map_tooltip');
                if (!$tip.length) {
                    $tip = $('<div id="map_tooltip">');
                    $('#map').append($tip);
                }
                d3.select("#map_tooltip").transition().duration(200).style("opacity", 0.9);
                d3.select("#map_tooltip").html(tooltipHtml(data.properties.name))
                    .style("left", (d3.event.pageX - 400) + "px")
                    .style("top", (d3.event.pageY - 130) + "px");
            }
        }
    }

    function mouseOutHandle(event, data) {
        if (!$(event.toElement).is('#map_popOver')) {
            $('#map_popOver').css({
                display: 'none'
            });
        }
        if (!$(event.toElement).is('#map_tooltip')) {
            d3.select("#map_tooltip").transition().duration(500).style("opacity", 0);
        }
        if (!$(event.toElement).is('#bar_tooltip')) {
            $('#bar_tooltip').stop().fadeOut();
        }
    }

    function popOver(param) {
        return '<h4 class="tl" style="color: yellow">' + (param.title) + '</h4>' +
            '<div class="tl" style="font-size:14px;color:#fff">夏玉米</div>'+
            '<div class="tl" style="font-size:14px;color:#fff;font-weight: bold;">' + (param.syq) + '期</div>'
    }

    function tooltipHtml(n) {
        return "<h4>" + n + "</h4>" +
            '<div class="tl cfff">'+ mapjsyj[n] +'</div>'+
            '<div class="tl cfff">降水量：'+ mapjsl[n] +'mm</div>'
    }

    commonLib.CMap.config.baseDir = '../geoJson/'

    function showMap(name, level) {
        if(level>2){data={}};
        if(name === '山东'&& level == 2){
            areaFlag = true;
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                areaColor: function(d) {
                    var i = Math.round(Math.random()*4);
                    return mapColor[i]
                },
                level: level == undefined ? 1 : level
            });
        }else {
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                level: level == undefined ? 1 : level
            });
            areaFlag = false;
        }
        return map;
    }

    var cmap = showMap('山东', 2);
}

function mapChinaWd(){
    var mapColor = ['#00edff','#00c9ff','#009bff','#0072eb','#003a78']
    var mapzgwd = {
        '济南市':31,
        '青岛市':31,
        '淄博市':31,
        '枣庄市':33,
        '东营市':30,
        '烟台市':28,
        '潍坊市':29,
        '济宁市':32,
        '泰安市':34,
        '威海市':35,
        '日照市':35,
        '莱芜市':34,
        '临沂市':33,
        '德州市':29,
        '聊城市':27,
        '滨州市':27,
        '菏泽市':32
    }
    var mapzdwd = {
        '济南市':23,
        '青岛市':23,
        '淄博市':24,
        '枣庄市':24,
        '东营市':24,
        '烟台市':24,
        '潍坊市':24,
        '济宁市':24,
        '泰安市':26,
        '威海市':27,
        '日照市':27,
        '莱芜市':26,
        '临沂市':24,
        '德州市':24,
        '聊城市':23,
        '滨州市':25,
        '菏泽市':26
    }
    var mappjwd = {
        '济南市':25,
        '青岛市':25,
        '淄博市':26,
        '枣庄市':26,
        '东营市':26,
        '烟台市':26,
        '潍坊市':26,
        '济宁市':26,
        '泰安市':28,
        '威海市':29,
        '日照市':29,
        '莱芜市':28,
        '临沂市':26,
        '德州市':26,
        '聊城市':25,
        '滨州市':27,
        '菏泽市':28
    }
    var data = {
        points: [
            {
                "title": "邹平县",
                "log": "117.670806",
                "lat": "36.956593",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "夏津县",
                "log": "116.037322",
                "lat": "37.016689",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "利津县",
                "log": "118.400337",
                "lat": "37.655326",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "鄄城县",
                "log": "115.552871",
                "lat": "35.555043",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "商河县",
                "log": "117.208714",
                "lat": "37.325947",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泗水县",
                "log": "117.345264",
                "lat": "35.640741",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱城区",
                "log": "117.645913",
                "lat": "36.313395",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "冠县",
                "log": "115.540837",
                "lat": "36.536357",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "费县",
                "log": "118.340768",
                "lat": "35.072409",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱西市",
                "log": "120.442831",
                "lat": "36.863637",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "五莲县",
                "log": "119.249433",
                "lat": "35.744383",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泰山区",
                "log": "117.183902",
                "lat": "36.215457",
                syq: '裂龄',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "寿光市",
                "log": "118.852534",
                "lat": "37.029892",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱阳市",
                "log": "120.751343",
                "lat": "36.905533",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "台儿庄区",
                "log": "117.638243",
                "lat": "34.587964",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "博山区",
                "log": "117.965553",
                "lat": "36.425427",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            }
        ]
    };

    function clickHandle(event, data, cmap) {
        if (data._type == 'area') {
            var level = cmap.option.level + 1;
            showMap(data.properties.name, level);
        } else if(data._type == 'point'){
            if(data.sf == '山东'){
                showMap(data.sf, 2);
            }
        }
    }


    function mouseOverHandle(event, data) {
        if (data._type == 'point') {
            var rect = event.target.getBoundingClientRect();
            var $tip = $('#map_popOver');
            if (!$tip.length) {
                $tip = $('<div id="map_popOver">');
                $('#map').append($tip);
            }
            $tip.html(popOver(data));
            var offset = $('#map svg').offset();
            $tip.css({
                left: (rect.right - rect.width / 2 - offset.left + window.scrollX) + 'px',
                top: (rect.bottom - rect.height / 2 - offset.top + window.scrollY) + 'px',
                display: 'block'
            });
        }else if (data._type == 'area') {
            if(areaFlag){
                var $tip = $('#map_tooltip');
                if (!$tip.length) {
                    $tip = $('<div id="map_tooltip">');
                    $('#map').append($tip);
                }
                d3.select("#map_tooltip").transition().duration(200).style("opacity", 0.9);
                d3.select("#map_tooltip").html(tooltipHtml(data.properties.name))
                    .style("left", (d3.event.pageX - 400) + "px")
                    .style("top", (d3.event.pageY - 130) + "px");
            }
        }
    }

    function mouseOutHandle(event, data) {
        if (!$(event.toElement).is('#map_popOver')) {
            $('#map_popOver').css({
                display: 'none'
            });
        }
        if (!$(event.toElement).is('#map_tooltip')) {
            d3.select("#map_tooltip").transition().duration(500).style("opacity", 0);
        }
        if (!$(event.toElement).is('#bar_tooltip')) {
            $('#bar_tooltip').stop().fadeOut();
        }
    }

    function popOver(param) {
        return '<h4 class="tl" style="color: yellow">' + (param.title) + '</h4>' +
            '<div class="tl" style="font-size:14px;color:#fff">棉花</div>'+
            '<div class="tl" style="font-size:14px;color:#fff;font-weight: bold;">' + (param.syq) + '期</div>'
    }

    function tooltipHtml(n) {
        return "<h4>" + n + "</h4>" +
            '<div class="tl cfff">最高温度：'+ mapzgwd[n] +'℃</div>'+
            '<div class="tl cfff">最低温度：'+ mapzdwd[n] +'℃</div>'+
            '<div class="tl cfff">平均温度：'+ mappjwd[n] +'℃</div>'
    }

    commonLib.CMap.config.baseDir = '../geoJson/'

    function showMap(name, level) {
        if(level>2){data={}};
        if(name === '山东'&& level == 2){
            areaFlag = true;
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                areaColor: function(d) {
                    var i = Math.round(Math.random()*4);
                    return mapColor[i]
                },
                level: level == undefined ? 1 : level
            });
        }else {
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                level: level == undefined ? 1 : level
            });
            areaFlag = false;
        }
        return map;
    }

    var cmap = showMap('china', 1);
}
function mapShandongWd(){
    var mapColor = ['#00edff','#00c9ff','#009bff','#0072eb','#003a78']
    var mapzgwd = {
        '济南市':31,
        '青岛市':31,
        '淄博市':31,
        '枣庄市':33,
        '东营市':30,
        '烟台市':28,
        '潍坊市':29,
        '济宁市':32,
        '泰安市':34,
        '威海市':35,
        '日照市':35,
        '莱芜市':34,
        '临沂市':33,
        '德州市':29,
        '聊城市':27,
        '滨州市':27,
        '菏泽市':32
    }
    var mapzdwd = {
        '济南市':23,
        '青岛市':23,
        '淄博市':24,
        '枣庄市':24,
        '东营市':24,
        '烟台市':24,
        '潍坊市':24,
        '济宁市':24,
        '泰安市':26,
        '威海市':27,
        '日照市':27,
        '莱芜市':26,
        '临沂市':24,
        '德州市':24,
        '聊城市':23,
        '滨州市':25,
        '菏泽市':26
    }
    var mappjwd = {
        '济南市':25,
        '青岛市':25,
        '淄博市':26,
        '枣庄市':26,
        '东营市':26,
        '烟台市':26,
        '潍坊市':26,
        '济宁市':26,
        '泰安市':28,
        '威海市':29,
        '日照市':29,
        '莱芜市':28,
        '临沂市':26,
        '德州市':26,
        '聊城市':25,
        '滨州市':27,
        '菏泽市':28
    }
    var data = {
        points: [
            {
                "title": "邹平县",
                "log": "117.670806",
                "lat": "36.956593",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "夏津县",
                "log": "116.037322",
                "lat": "37.016689",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "利津县",
                "log": "118.400337",
                "lat": "37.655326",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "鄄城县",
                "log": "115.552871",
                "lat": "35.555043",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "商河县",
                "log": "117.208714",
                "lat": "37.325947",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泗水县",
                "log": "117.345264",
                "lat": "35.640741",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱城区",
                "log": "117.645913",
                "lat": "36.313395",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "冠县",
                "log": "115.540837",
                "lat": "36.536357",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "费县",
                "log": "118.340768",
                "lat": "35.072409",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱西市",
                "log": "120.442831",
                "lat": "36.863637",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "五莲县",
                "log": "119.249433",
                "lat": "35.744383",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泰山区",
                "log": "117.183902",
                "lat": "36.215457",
                syq: '裂龄',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "寿光市",
                "log": "118.852534",
                "lat": "37.029892",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱阳市",
                "log": "120.751343",
                "lat": "36.905533",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "台儿庄区",
                "log": "117.638243",
                "lat": "34.587964",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "博山区",
                "log": "117.965553",
                "lat": "36.425427",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            }
        ]
    };

    function clickHandle(event, data, cmap) {
        if (data._type == 'area') {
            var level = cmap.option.level + 1;
            showMap(data.properties.name, level);
        } else if(data._type == 'point'){
            if(data.sf == '山东'){
                showMap(data.sf, 2);
            }
        }
    }


    function mouseOverHandle(event, data) {
        if (data._type == 'point') {
            var rect = event.target.getBoundingClientRect();
            var $tip = $('#map_popOver');
            if (!$tip.length) {
                $tip = $('<div id="map_popOver">');
                $('#map').append($tip);
            }
            $tip.html(popOver(data));
            var offset = $('#map svg').offset();
            $tip.css({
                left: (rect.right - rect.width / 2 - offset.left + window.scrollX) + 'px',
                top: (rect.bottom - rect.height / 2 - offset.top + window.scrollY) + 'px',
                display: 'block'
            });
        }else if (data._type == 'area') {
            if(areaFlag){
                var $tip = $('#map_tooltip');
                if (!$tip.length) {
                    $tip = $('<div id="map_tooltip">');
                    $('#map').append($tip);
                }
                d3.select("#map_tooltip").transition().duration(200).style("opacity", 0.9);
                d3.select("#map_tooltip").html(tooltipHtml(data.properties.name))
                    .style("left", (d3.event.pageX - 400) + "px")
                    .style("top", (d3.event.pageY - 130) + "px");
            }
        }
    }

    function mouseOutHandle(event, data) {
        if (!$(event.toElement).is('#map_popOver')) {
            $('#map_popOver').css({
                display: 'none'
            });
        }
        if (!$(event.toElement).is('#map_tooltip')) {
            d3.select("#map_tooltip").transition().duration(500).style("opacity", 0);
        }
        if (!$(event.toElement).is('#bar_tooltip')) {
            $('#bar_tooltip').stop().fadeOut();
        }
    }

    function popOver(param) {
        return '<h4 class="tl" style="color: yellow">' + (param.title) + '</h4>' +
            '<div class="tl" style="font-size:14px;color:#fff">棉花</div>'+
            '<div class="tl" style="font-size:14px;color:#fff;font-weight: bold;">' + (param.syq) + '期</div>'
    }

    function tooltipHtml(n) {
        return "<h4>" + n + "</h4>" +
            '<div class="tl cfff">最高温度：'+ mapzgwd[n] +'℃</div>'+
            '<div class="tl cfff">最低温度：'+ mapzdwd[n] +'℃</div>'+
            '<div class="tl cfff">平均温度：'+ mappjwd[n] +'℃</div>'
    }

    commonLib.CMap.config.baseDir = '../geoJson/'

    function showMap(name, level) {
        if(level>2){data={}};
        if(name === '山东'&& level == 2){
            areaFlag = true;
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                areaColor: function(d) {
                    var i = Math.round(Math.random()*4);
                    return mapColor[i]
                },
                level: level == undefined ? 1 : level
            });
        }else {
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                level: level == undefined ? 1 : level
            });
            areaFlag = false;
        }
        return map;
    }

    var cmap = showMap('山东', 2);
}

function mapChinaRz(){
    var mapColor = ['#00edff','#00c9ff','#009bff','#0072eb','#003a78']
    var maprzsc = {
        '济南市':13.28,
        '青岛市':13.3,
        '淄博市':13.32,
        '枣庄市':13.34,
        '东营市':13.36,
        '烟台市':13.38,
        '潍坊市':13.4,
        '济宁市':13.42,
        '泰安市':13.44,
        '威海市':13.46,
        '日照市':13.48,
        '莱芜市':13.5,
        '临沂市':13.52,
        '德州市':13.54,
        '聊城市':13.56,
        '滨州市':13.58,
        '菏泽市':13.6
    }
    var data = {
        points: [
            {
                "title": "邹平县",
                "log": "117.670806",
                "lat": "36.956593",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "夏津县",
                "log": "116.037322",
                "lat": "37.016689",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "利津县",
                "log": "118.400337",
                "lat": "37.655326",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "鄄城县",
                "log": "115.552871",
                "lat": "35.555043",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "商河县",
                "log": "117.208714",
                "lat": "37.325947",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泗水县",
                "log": "117.345264",
                "lat": "35.640741",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱城区",
                "log": "117.645913",
                "lat": "36.313395",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "冠县",
                "log": "115.540837",
                "lat": "36.536357",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "费县",
                "log": "118.340768",
                "lat": "35.072409",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱西市",
                "log": "120.442831",
                "lat": "36.863637",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "五莲县",
                "log": "119.249433",
                "lat": "35.744383",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泰山区",
                "log": "117.183902",
                "lat": "36.215457",
                syq: '裂龄',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "寿光市",
                "log": "118.852534",
                "lat": "37.029892",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱阳市",
                "log": "120.751343",
                "lat": "36.905533",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "台儿庄区",
                "log": "117.638243",
                "lat": "34.587964",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "博山区",
                "log": "117.965553",
                "lat": "36.425427",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            }
        ]
    };

    function clickHandle(event, data, cmap) {
        if (data._type == 'area') {
            var level = cmap.option.level + 1;
            showMap(data.properties.name, level);
        } else if(data._type == 'point'){
            if(data.sf == '山东'){
                showMap(data.sf, 2);
            }
        }
    }


    function mouseOverHandle(event, data) {
        if (data._type == 'point') {
            var rect = event.target.getBoundingClientRect();
            var $tip = $('#map_popOver');
            if (!$tip.length) {
                $tip = $('<div id="map_popOver">');
                $('#map').append($tip);
            }
            $tip.html(popOver(data));
            var offset = $('#map svg').offset();
            $tip.css({
                left: (rect.right - rect.width / 2 - offset.left + window.scrollX) + 'px',
                top: (rect.bottom - rect.height / 2 - offset.top + window.scrollY) + 'px',
                display: 'block'
            });
        }else if (data._type == 'area') {
            if(areaFlag){
                var $tip = $('#map_tooltip');
                if (!$tip.length) {
                    $tip = $('<div id="map_tooltip">');
                    $('#map').append($tip);
                }
                d3.select("#map_tooltip").transition().duration(200).style("opacity", 0.9);
                d3.select("#map_tooltip").html(tooltipHtml(data.properties.name))
                    .style("left", (d3.event.pageX - 400) + "px")
                    .style("top", (d3.event.pageY - 130) + "px");
            }
        }
    }

    function mouseOutHandle(event, data) {
        if (!$(event.toElement).is('#map_popOver')) {
            $('#map_popOver').css({
                display: 'none'
            });
        }
        if (!$(event.toElement).is('#map_tooltip')) {
            d3.select("#map_tooltip").transition().duration(500).style("opacity", 0);
        }
        if (!$(event.toElement).is('#bar_tooltip')) {
            $('#bar_tooltip').stop().fadeOut();
        }
    }

    function popOver(param) {
        return '<h4 class="tl" style="color: yellow">' + (param.title) + '</h4>' +
            '<div class="tl" style="font-size:14px;color:#fff">棉花</div>'+
            '<div class="tl" style="font-size:14px;color:#fff;font-weight: bold;">' + (param.syq) + '期</div>'
    }

    function tooltipHtml(n) {
        return "<h4>" + n + "</h4>" +
            '<div class="tl cfff">日照时长：'+ maprzsc[n] +'h</div>'
    }

    commonLib.CMap.config.baseDir = '../geoJson/'

    function showMap(name, level) {
        if(level>2){data={}};
        if(name === '山东'&& level == 2){
            areaFlag = true;
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                areaColor: function(d) {
                    var i = Math.round(Math.random()*4);
                    return mapColor[i]
                },
                level: level == undefined ? 1 : level
            });
        }else {
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                level: level == undefined ? 1 : level
            });
            areaFlag = false;
        }
        return map;
    }

    var cmap = showMap('china', 1);
}
function mapShandongRz(){
    var mapColor = ['#00edff','#00c9ff','#009bff','#0072eb','#003a78']
    var maprzsc = {
        '济南市':13.28,
        '青岛市':13.3,
        '淄博市':13.32,
        '枣庄市':13.34,
        '东营市':13.36,
        '烟台市':13.38,
        '潍坊市':13.4,
        '济宁市':13.42,
        '泰安市':13.44,
        '威海市':13.46,
        '日照市':13.48,
        '莱芜市':13.5,
        '临沂市':13.52,
        '德州市':13.54,
        '聊城市':13.56,
        '滨州市':13.58,
        '菏泽市':13.6
    }
    var data = {
        points: [
            {
                "title": "邹平县",
                "log": "117.670806",
                "lat": "36.956593",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "夏津县",
                "log": "116.037322",
                "lat": "37.016689",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "利津县",
                "log": "118.400337",
                "lat": "37.655326",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "鄄城县",
                "log": "115.552871",
                "lat": "35.555043",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "商河县",
                "log": "117.208714",
                "lat": "37.325947",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泗水县",
                "log": "117.345264",
                "lat": "35.640741",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱城区",
                "log": "117.645913",
                "lat": "36.313395",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "冠县",
                "log": "115.540837",
                "lat": "36.536357",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "费县",
                "log": "118.340768",
                "lat": "35.072409",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱西市",
                "log": "120.442831",
                "lat": "36.863637",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "五莲县",
                "log": "119.249433",
                "lat": "35.744383",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泰山区",
                "log": "117.183902",
                "lat": "36.215457",
                syq: '裂龄',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "寿光市",
                "log": "118.852534",
                "lat": "37.029892",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱阳市",
                "log": "120.751343",
                "lat": "36.905533",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "台儿庄区",
                "log": "117.638243",
                "lat": "34.587964",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "博山区",
                "log": "117.965553",
                "lat": "36.425427",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            }
        ]
    };

    function clickHandle(event, data, cmap) {
        if (data._type == 'area') {
            var level = cmap.option.level + 1;
            showMap(data.properties.name, level);
        } else if(data._type == 'point'){
            if(data.sf == '山东'){
                showMap(data.sf, 2);
            }
        }
    }


    function mouseOverHandle(event, data) {
        if (data._type == 'point') {
            var rect = event.target.getBoundingClientRect();
            var $tip = $('#map_popOver');
            if (!$tip.length) {
                $tip = $('<div id="map_popOver">');
                $('#map').append($tip);
            }
            $tip.html(popOver(data));
            var offset = $('#map svg').offset();
            $tip.css({
                left: (rect.right - rect.width / 2 - offset.left + window.scrollX) + 'px',
                top: (rect.bottom - rect.height / 2 - offset.top + window.scrollY) + 'px',
                display: 'block'
            });
        }else if (data._type == 'area') {
            if(areaFlag){
                var $tip = $('#map_tooltip');
                if (!$tip.length) {
                    $tip = $('<div id="map_tooltip">');
                    $('#map').append($tip);
                }
                d3.select("#map_tooltip").transition().duration(200).style("opacity", 0.9);
                d3.select("#map_tooltip").html(tooltipHtml(data.properties.name))
                    .style("left", (d3.event.pageX - 400) + "px")
                    .style("top", (d3.event.pageY - 130) + "px");
            }
        }
    }

    function mouseOutHandle(event, data) {
        if (!$(event.toElement).is('#map_popOver')) {
            $('#map_popOver').css({
                display: 'none'
            });
        }
        if (!$(event.toElement).is('#map_tooltip')) {
            d3.select("#map_tooltip").transition().duration(500).style("opacity", 0);
        }
        if (!$(event.toElement).is('#bar_tooltip')) {
            $('#bar_tooltip').stop().fadeOut();
        }
    }

    function popOver(param) {
        return '<h4 class="tl" style="color: yellow">' + (param.title) + '</h4>' +
            '<div class="tl" style="font-size:14px;color:#fff">棉花</div>'+
            '<div class="tl" style="font-size:14px;color:#fff;font-weight: bold;">' + (param.syq) + '期</div>'
    }

    function tooltipHtml(n) {
        return "<h4>" + n + "</h4>" +
            '<div class="tl cfff">日照时长：'+ maprzsc[n] +'h</div>'
    }

    commonLib.CMap.config.baseDir = '../geoJson/'

    function showMap(name, level) {
        if(level>2){data={}};
        if(name === '山东'&& level == 2){
            areaFlag = true;
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                areaColor: function(d) {
                    var i = Math.round(Math.random()*4);
                    return mapColor[i]
                },
                level: level == undefined ? 1 : level
            });
        }else {
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                level: level == undefined ? 1 : level
            });
            areaFlag = false;
        }
        return map;
    }

    var cmap = showMap('山东',2);
}

function mapChinaTr(){
    var mapColor = ['#00edff','#00c9ff','#009bff','#0072eb','#003a78']
    var maprzsc = {
        '济南市':68,
        '青岛市':74,
        '淄博市':71,
        '枣庄市':70,
        '东营市':65,
        '烟台市':77,
        '潍坊市':66,
        '济宁市':73,
        '泰安市':74,
        '威海市':70,
        '日照市':69,
        '莱芜市':67,
        '临沂市':72,
        '德州市':74,
        '聊城市':71,
        '滨州市':73,
        '菏泽市':69
    }
    var data = {
        points: [
            {
                "title": "邹平县",
                "log": "117.670806",
                "lat": "36.956593",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "夏津县",
                "log": "116.037322",
                "lat": "37.016689",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "利津县",
                "log": "118.400337",
                "lat": "37.655326",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "鄄城县",
                "log": "115.552871",
                "lat": "35.555043",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "商河县",
                "log": "117.208714",
                "lat": "37.325947",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泗水县",
                "log": "117.345264",
                "lat": "35.640741",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱城区",
                "log": "117.645913",
                "lat": "36.313395",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "冠县",
                "log": "115.540837",
                "lat": "36.536357",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "费县",
                "log": "118.340768",
                "lat": "35.072409",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱西市",
                "log": "120.442831",
                "lat": "36.863637",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "五莲县",
                "log": "119.249433",
                "lat": "35.744383",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泰山区",
                "log": "117.183902",
                "lat": "36.215457",
                syq: '裂龄',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "寿光市",
                "log": "118.852534",
                "lat": "37.029892",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱阳市",
                "log": "120.751343",
                "lat": "36.905533",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "台儿庄区",
                "log": "117.638243",
                "lat": "34.587964",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "博山区",
                "log": "117.965553",
                "lat": "36.425427",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            }
        ]
    };

    function clickHandle(event, data, cmap) {
        if (data._type == 'area') {
            var level = cmap.option.level + 1;
            showMap(data.properties.name, level);
        } else if(data._type == 'point'){
            if(data.sf == '山东'){
                showMap(data.sf, 2);
            }
        }
    }


    function mouseOverHandle(event, data) {
        if (data._type == 'point') {
            var rect = event.target.getBoundingClientRect();
            var $tip = $('#map_popOver');
            if (!$tip.length) {
                $tip = $('<div id="map_popOver">');
                $('#map').append($tip);
            }
            $tip.html(popOver(data));
            var offset = $('#map svg').offset();
            $tip.css({
                left: (rect.right - rect.width / 2 - offset.left + window.scrollX) + 'px',
                top: (rect.bottom - rect.height / 2 - offset.top + window.scrollY) + 'px',
                display: 'block'
            });
        }else if (data._type == 'area') {
            if(areaFlag){
                var $tip = $('#map_tooltip');
                if (!$tip.length) {
                    $tip = $('<div id="map_tooltip">');
                    $('#map').append($tip);
                }
                d3.select("#map_tooltip").transition().duration(200).style("opacity", 0.9);
                d3.select("#map_tooltip").html(tooltipHtml(data.properties.name))
                    .style("left", (d3.event.pageX - 400) + "px")
                    .style("top", (d3.event.pageY - 130) + "px");
            }
        }
    }

    function mouseOutHandle(event, data) {
        if (!$(event.toElement).is('#map_popOver')) {
            $('#map_popOver').css({
                display: 'none'
            });
        }
        if (!$(event.toElement).is('#map_tooltip')) {
            d3.select("#map_tooltip").transition().duration(500).style("opacity", 0);
        }
        if (!$(event.toElement).is('#bar_tooltip')) {
            $('#bar_tooltip').stop().fadeOut();
        }
    }

    function popOver(param) {
        return '<h4 class="tl" style="color: yellow">' + (param.title) + '</h4>' +
            '<div class="tl" style="font-size:14px;color:#fff">棉花</div>'+
            '<div class="tl" style="font-size:14px;color:#fff;font-weight: bold;">' + (param.syq) + '期</div>'
    }

    function tooltipHtml(n) {
        return "<h4 style='color: yellow;'>" + n + "</h4>" +
            '<div class="tl cfff" style="color:#FFF">土壤相对湿度：'+ maprzsc[n] +'%</div>'
    }

    commonLib.CMap.config.baseDir = '../geoJson/'

    function showMap(name, level) {
        if(level>2){data={}};
        if(name === '山东'&& level == 2){
            areaFlag = true;
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                areaColor: function(d) {
                    var i = Math.round(Math.random()*4);
                    return mapColor[i]
                },
                level: level == undefined ? 1 : level
            });
        }else {
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                level: level == undefined ? 1 : level
            });
            areaFlag = false;
        }
        return map;
    }

    var cmap = showMap('china', 1);
}
function mapShandongTr(){
    var mapColor = ['#00edff','#00c9ff','#009bff','#0072eb','#003a78']
    var maprzsc = {
        '济南市':68,
        '青岛市':74,
        '淄博市':71,
        '枣庄市':70,
        '东营市':65,
        '烟台市':77,
        '潍坊市':66,
        '济宁市':73,
        '泰安市':74,
        '威海市':70,
        '日照市':69,
        '莱芜市':67,
        '临沂市':72,
        '德州市':74,
        '聊城市':71,
        '滨州市':73,
        '菏泽市':69
    }
    var data = {
        points: [
            {
                "title": "邹平县",
                "log": "117.670806",
                "lat": "36.956593",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "夏津县",
                "log": "116.037322",
                "lat": "37.016689",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "利津县",
                "log": "118.400337",
                "lat": "37.655326",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "鄄城县",
                "log": "115.552871",
                "lat": "35.555043",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "商河县",
                "log": "117.208714",
                "lat": "37.325947",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泗水县",
                "log": "117.345264",
                "lat": "35.640741",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱城区",
                "log": "117.645913",
                "lat": "36.313395",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "冠县",
                "log": "115.540837",
                "lat": "36.536357",
                syq: '吐絮',
                sf:'山东',
                "icon": {
                    url: '../images/icon_5.png',
                    hoverUrl: '../images/icon_5.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "费县",
                "log": "118.340768",
                "lat": "35.072409",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱西市",
                "log": "120.442831",
                "lat": "36.863637",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "五莲县",
                "log": "119.249433",
                "lat": "35.744383",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "泰山区",
                "log": "117.183902",
                "lat": "36.215457",
                syq: '裂龄',
                sf:'山东',
                "icon": {
                    url: '../images/icon_4.png',
                    hoverUrl: '../images/icon_4.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "寿光市",
                "log": "118.852534",
                "lat": "37.029892",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "莱阳市",
                "log": "120.751343",
                "lat": "36.905533",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "台儿庄区",
                "log": "117.638243",
                "lat": "34.587964",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "博山区",
                "log": "117.965553",
                "lat": "36.425427",
                syq: '开花',
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            }
        ]
    };

    function clickHandle(event, data, cmap) {
        if (data._type == 'area') {
            var level = cmap.option.level + 1;
            showMap(data.properties.name, level);
        } else if(data._type == 'point'){
            if(data.sf == '山东'){
                showMap(data.sf, 2);
            }
        }
    }


    function mouseOverHandle(event, data) {
        if (data._type == 'point') {
            var rect = event.target.getBoundingClientRect();
            var $tip = $('#map_popOver');
            if (!$tip.length) {
                $tip = $('<div id="map_popOver">');
                $('#map').append($tip);
            }
            $tip.html(popOver(data));
            var offset = $('#map svg').offset();
            $tip.css({
                left: (rect.right - rect.width / 2 - offset.left + window.scrollX) + 'px',
                top: (rect.bottom - rect.height / 2 - offset.top + window.scrollY) + 'px',
                display: 'block'
            });
        }else if (data._type == 'area') {
            if(areaFlag){
                var $tip = $('#map_tooltip');
                if (!$tip.length) {
                    $tip = $('<div id="map_tooltip">');
                    $('#map').append($tip);
                }
                d3.select("#map_tooltip").transition().duration(200).style("opacity", 0.9);
                d3.select("#map_tooltip").html(tooltipHtml(data.properties.name))
                    .style("left", (d3.event.pageX - 400) + "px")
                    .style("top", (d3.event.pageY - 130) + "px");
            }
        }
    }

    function mouseOutHandle(event, data) {
        if (!$(event.toElement).is('#map_popOver')) {
            $('#map_popOver').css({
                display: 'none'
            });
        }
        if (!$(event.toElement).is('#map_tooltip')) {
            d3.select("#map_tooltip").transition().duration(500).style("opacity", 0);
        }
        if (!$(event.toElement).is('#bar_tooltip')) {
            $('#bar_tooltip').stop().fadeOut();
        }
    }

    function popOver(param) {
        return '<h4 class="tl" style="color: yellow">' + (param.title) + '</h4>' +
            '<div class="tl" style="font-size:14px;color:#fff">棉花</div>'+
            '<div class="tl" style="font-size:14px;color:#fff;font-weight: bold;">' + (param.syq) + '期</div>'
    }

    function tooltipHtml(n) {
        return "<h4 style='color:yellow'>" + n + "</h4>" +
            '<div class="tl cfff" style="color:#FFF">土壤相对湿度：'+ maprzsc[n] +'%</div>'
    }

    commonLib.CMap.config.baseDir = '../geoJson/'

    function showMap(name, level) {
        if(level>2){data={}};
        if(name === '山东'&& level == 2){
            areaFlag = true;
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                areaColor: function(d) {
                    var i = Math.round(Math.random()*4);
                    return mapColor[i]
                },
                level: level == undefined ? 1 : level
            });
        }else {
            var map = new commonLib.CMap({
                dom: document.getElementById('map'),
                data: data,
                mouseOutHandle: mouseOutHandle,
                mouseOverHandle: mouseOverHandle,
                clickHandle: level <= 2 ? clickHandle : null,
                name: name,
                level: level == undefined ? 1 : level
            });
            areaFlag = false;
        }
        return map;
    }

    var cmap = showMap('山东', 2);
}

function tablist(el)
{
    switch(el)
    {
        case "纤维作物":
            var dom = "<li class='nzwmh'>棉花</li>";
            $("#secondMenu").html(dom);
            break;
        case "粮食作物":
            var dom = "<li class='nzwym'>夏玉米</li>";
            $("#secondMenu").html(dom);
            break;
        default:

    }
}
