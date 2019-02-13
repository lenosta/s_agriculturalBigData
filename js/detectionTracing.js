$(document).ready(function () {
    var winH = $(window).height();
    var module6H = $(".module6").height();
    //if(winH <= 600 + module6H){
    //    $("body").height(520 + module6H);
    //}else{
    //    $("body").height(winH - 80);
    //};
    $("body").height(winH - 80);
    $("body").height(1000);
    $(".leftBar li").removeClass("active").eq(4).addClass("active");
    $(".headerR_l").hide();
    charts3(yantai);   //农产品预警批次检测项目
    charts4(yantai);   //农产品预警批次检测样品品种
  //  var _charts3 = charts.init({id: 852, container: "chart3"});
   // var _charts4 = charts.init({id: 853, container: "chart4"});
    showshandongMap("山东"); //地图初始化
});

function selectTime(){
    showshandongMap("山东");
    charts3(weihai);
    charts4(weihai);
    $("#listContent1").hide();
    $("#listContent2").show();
};
function selectArea(name){
    if(name=="山东"){
        showshandongMap(name);
    }else{
        $("#map").html("");
        cmap = showMap('china', true);  //地图初始化
    }
};

function openbox(type){
    $(".meng,.module8").hide();
    if(type=="芹菜"){
        $("#jsmind_container img").attr("src","../images/jiancebaicai.png")
    };
    if(type=="黄瓜"){
        $("#jsmind_container img").attr("src","../images/jiancehuanggua_03.png")
    };
    $("body").height(1500);
    $(".meng,.module8").show();
    document.body.scrollTop=document.documentElement.scrollTop=850;
};


function closed(){
    $(".meng, .module8").hide();
}


var yantai={
    xiangmu:[
        {value:1, name:'微生物'},
        {value:2, name:'重金属污染'},
        {value:1, name:'有害无机物'},
        {value:10, name:'农药残留'},
        {value:2, name:'其他'}
    ],
    pingzhong:[
        {value: 234, name: '菠菜'},
        {value: 392, name: '菜豆'},
        {value: 118, name: '大白菜'},
        {value: 328, name: '大蒜'},
        {value: 76, name: '甘蓝'},
        {value: 107, name: '黄瓜'},
        {value: 343, name: '辣椒'},
        {value: 667, name: '萝卜'},
        {value: 296, name: '芹菜'}
    ]
};

var weihai={
    xiangmu:[
        {value:2, name:'微生物'},
        {value:3, name:'重金属污染'},
        {value:3, name:'有害无机物'},
        {value:12, name:'农药残留'},
        {value:2, name:'其他'}
    ],
    pingzhong:[
        {value: 134, name: '菠菜'},
        {value: 292, name: '菜豆'},
        {value: 138, name: '大白菜'},
        {value: 128, name: '大蒜'},
        {value: 76, name: '甘蓝'},
        {value: 107, name: '黄瓜'},
        {value: 343, name: '辣椒'},
        {value: 667, name: '萝卜'},
        {value: 296, name: '芹菜'}
    ]
}



var mapData={
    infoWindow: [
        {   "name":"济南",
            "log": "117.024967",
            "lat": "36.682785",
            htmlStr: '<div class="info"><p>24批次</p></div>'
        },
        {   "name":"青岛市",
            "log": "120.184428",
            "lat": "36.205215",
            htmlStr: '<div class="info"><p>65批次</p></div>'
        },
        {   "name":"淄博市",
            "log": "117.909134",
            "lat": "36.554685",
            htmlStr: '<div class="info"><p>8批次</p></div>'
        },
        {   "name":"枣庄市",
            "log": "117.279305",
            "lat": "34.887883",
            htmlStr: '<div class="info"><p>21批次</p></div>'
        },
        {   "name":"东营市",
            "log": "118.583926",
            "lat": "37.587121",
            htmlStr: '<div class="info"><p>9批次</p></div>'
        },
        {   "name":"烟台市",
            "log": "120.709555",
            "lat": "37.236562",
            htmlStr: '<div class="info"><p>52批次</p></div>'
        },
        {   "name":"潍坊市",
            "log": "119.042634",
            "lat": "36.516115",
            htmlStr: '<div class="info"><p>40批次</p></div>'
        },
        {   "name":"济宁市",
            "log": "116.600798",
            "lat": "35.342122",
            htmlStr: '<div class="info"><p>29批次</p></div>'
        },
        {   "name":"泰安市",
            "log": "117.009415",
            "lat": "36.000078",
            htmlStr: '<div class="info"><p>13批次</p></div>'
        },
        {   "name":"威海市",
            "log": "122.003958",
            "lat": "37.028787",
            htmlStr: '<div class="info"><p>22批次</p></div>'
        },
        {   "name":"日照市",
            "log": "119.20718",
            "lat": "35.420225",
            htmlStr: '<div class="info"><p>4批次</p></div>'
        },
        {   "name":"莱芜市",
            "log": "117.684667",
            "lat": "36.233654",
            htmlStr: '<div class="info"><p>6批次</p></div>'
        },
        {   "name":"临沂市",
            "log": "118.340768",
            "lat": "35.072409",
            htmlStr: '<div class="info"><p>54批次</p></div>'
        },
        {   "name":"德州市",
            "log": "116.428161",
            "lat": "37.160826",
            htmlStr: '<div class="info"><p>18批次</p></div>'
        },
        {   "name":"聊城市",
            "log": "115.80770",
            "lat": "36.45583",
            htmlStr: '<div class="info"><p>9批次</p></div>'
        },
        {   "name":"滨州市",
            "log": "117.768292",
            "lat": "37.505314",
            htmlStr: '<div class="info"><p>3批次</p></div>'
        },
        {   "name":"菏泽市",
            "log": "115.56336",
            "lat": "35.11244",
            htmlStr: '<div class="info"><p>40批次</p></div>'
        },


    ]
};



var areaFlag = '';
var mapColor = ['#00edff','#0072eb','#003a78'];
var jccs = {
    '济南市':[24,1],
    '青岛市':[65,2],
    '淄博市':[8,0],
    '枣庄市':[21,1],
    '东营市':[9,0],
    '烟台市':[52,2],
    '潍坊市':[40,1],
    '济宁市':[29,1],
    '泰安市':[13,1],
    '威海市':[22,1],
    '日照市':[4,0],
    '莱芜市':[6,0],
    '临沂市':[54,2],
    '德州市':[18,1],
    '聊城市':[9,0],
    '滨州市':[3,0],
    '菏泽市':[40,1]
};

function showshandongMap(name) {
    areaFlag = true;
    var map = new commonLib.CMap({
        dom: document.getElementById('map'),
        data: mapData,
        mouseOutHandle: mouseOutHandle,
        mouseOverHandle: mouseOverHandle,
        clickHandle:shangdongclickHandle,
        name: name,
        areaColor: function(params) {
            var i=jccs[params.properties.name][1];
            return mapColor[i]
        }
    });
    return map;
}

function showMap(name,isDrill) {
    areaFlag = false;
        var map = new commonLib.CMap({
            dom: document.getElementById('map'),
            data: {},
            mouseOutHandle: mouseOutHandle,
            mouseOverHandle: mouseOverHandle,
            clickHandle: isDrill ? clickHandle : null,
            name: name
        });

};

function shangdongclickHandle(event, data) {
        var cityName=data.properties.name;
    $(".cityName").html(cityName);
        charts3(weihai);
        charts4(weihai);
    if($("#listContent1").hasClass("asdfasdf")){
        $("#listContent1").show();
        $("#listContent1").removeClass("asdfasdf");
        $("#listContent2").hide();
    }else{
        $("#listContent1").hide();
        $("#listContent1").addClass("asdfasdf");
        $("#listContent2").show();
    }


}


function clickHandle(event, data) {
    if (data._type == 'area') {

        if (data.properties.name == "山东") {
            showshandongMap(data.properties.name, false);
        } else {
            showMap(data.properties.name, false);
        }
    }
    ;

}
commonLib.CMap.config.baseDir = '../geoJson/'
function mouseOverHandle(event, data) {
    if (data._type == 'area') {
        if(areaFlag){
            //var $tip = $('#map_tooltip');
            //if (!$tip.length) {
            //    $tip = $('<div id="map_tooltip">');
            //    $('#map').append($tip);
            //}
            //d3.select("#map_tooltip").transition().duration(200).style("opacity", 0.9);
            //d3.select("#map_tooltip").html(tooltipHtml(data.properties.name))
            //    .style("left", (d3.event.pageX - 100) + "px")
            //    .style("top", (d3.event.pageY -330) + "px");
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
};

function tooltipHtml(n) {
    //return "<h4>" + n + "</h4><table>" +
    //    '<div class="tl cfff">' + jccs[n][0] + '<span> 批次</span></div>'
}


function popOver(param) {

    return '<h3 class="' + (param.className) + '">' + (param.num) + '吨</h3>' +
        '<p>' + (param.name + param.direct) + '</p>'
}



function charts3(data) {
        var _charts3 = charts.init({
            id: 852,
            container: "chart3",
            option: {
                series: [{
                    name: "检测项目",
                    data:data.xiangmu
                }

                ]
            }
        });
}  ;


function charts4(data) {
    var _charts4 = charts.init({
        id: 853,
        container: "chart4",
        option: {
            series: [{
                name: "检测品种",
                data:data.pingzhong
            }

            ]
        }
    });
}
