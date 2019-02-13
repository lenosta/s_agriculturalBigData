/**
 * Created by ly on 2016/12/29.
 */


var _charts1DataSc = {
    qiugou:[2800,3100,2700,2500,2400,2300,2000],
    gongying:[2300,2600,3300,3100,4000,2300,2200]
};
var _charts1DataLy = {
    qiugou:[3300,3600,3200,3300,3500,3700,3400],
    gongying:[2800,3100,3800,3900,5100,3700,3600]
};
var _charts2DataSc = {
    chengjiao:[2500,2800,2900,2700,2500,2300,2100],
    jiage:[100,105,103,107,111,115,124]
};
var _charts2DataLy = {
    chengjiao:[3000,3300,3400,3500,3600,3700,3500],
    jiage:[90,95,93,98,103,108,117]
};
var date;
function timepick(d){
    console.log(d.cal.getNewDateStr());
    date = d.cal.getNewDateStr();
    if(date == "2016-12-13"){
        date13();
        mapChina();
    }else{
        date14();
        mapChina();
    }
}

$(function(){
   
    date13();
    mapChina();
});

function date13(){
    var _charts1=charts.init({id:817,container:"chart1",option:{
        series: [
            {
                data: _charts1DataSc.qiugou
            },
            {
                data: _charts1DataSc.gongying
            }
        ]
    }});
    $(".charts1DataSc").click(function(){
        var _charts1=charts.init({id:817,container:"chart1",option:{
            series: [
                {
                    data: _charts1DataSc.qiugou
                },
                {
                    data: _charts1DataSc.gongying
                }
            ]
        }})
    });
    $(".charts1DataLy").click(function(){
        var _charts1=charts.init({id:817,container:"chart1",option:{
            series: [
                {
                    data: _charts1DataLy.qiugou
                },
                {
                    data: _charts1DataLy.gongying
                }
            ]
        }})
    });

    var _charts2=charts.init({id:816,container:"chart2",option:{
        series: [
            {
                data: _charts2DataSc.chengjiao
            },{
                data: _charts2DataSc.jiage
            }
        ]
    }});
    $(".charts2DataSc").click(function(){
        var _charts2=charts.init({id:816,container:"chart2",option:{
            series: [
                {
                    data: _charts2DataSc.chengjiao
                },
                {
                    data: _charts2DataSc.jiage
                }
            ]
        }})
    });
    $(".charts2DataLy").click(function(){
        var _charts2=charts.init({id:816,container:"chart2",option:{
            series: [
                {
                    data: _charts2DataLy.chengjiao
                },
                {
                    data: _charts2DataLy.jiage
                }
            ]
        }})
    });

    bubbleChartWordCloud({
        // 标识
        id : 'bubbleWordCloud-chart',
        // 高
        height : '151',
        // 排斥力
        repulsion : '100',
        // 数据
        data : [
            // value    数值，可选参数
            // color    颜色，可选参数
            // name     名称，必选参数
            {value : 1, color : '#ffde00', name : '土鸡蛋'},
            {value : .8, color : '#00c1ff', name : '粮食价格上'},
            {value : .6, color : '#54fc33', name : '淘宝村'},
            {value :.4, color : '#54fc33', name : '电子商务'},
            {value : .2, color : '#ffde00', name : '毛鸡蛋'},
            {value : 0, color : '#ffde00', name : '亩产增加'},
            {value : 0, color : '#54fc33', name : '农民劳动力缺失'},
            {value : 0, color : '#00c1ff', name : '农民老龄化'}
        ]
    });

    bubbleChartWordCloud1({
        // 标识
        id : 'bubbleCloud',
        // 高
        height : '155',
        tooltip:{
            show:true,
            formatter:function (params) {
                return params.data.label.data.name+'<br/>'+'涨跌幅：'+params.data.label.data.zhangfu+'<br/>'+'均价：'+params.data.label.data.junjia+'<br/>'+'正相关：'+params.data.label.data.zheng+'<br/>'+'负相关：'+params.data.label.data.fu;

            }
        },

        // 数据
        data : [
            {
                r: 1.2,
                color:'rgba(84,252,51,.5)',
                zhangfu:'-40%',
                junjia:'3.8元/公斤',
                zheng:'白菜、西兰花',
                fu:'冬瓜、菠菜',
                name: '西红柿'
            },
            {
                r: 1,
                color:'rgba(255,81,28,.5)',
                zhangfu:'30%',
                junjia:'13元/公斤',
                zheng:'菠菜、白条鸡',
                fu:'香菜、洋白菜',
                name: '香菇'
            },
            {
                r :.8,
                color:'rgba(255,81,28,.5)',
                zhangfu:'8%',
                junjia:'4元/公斤',
                zheng:'茼蒿、大米',
                fu:'香菜、洋白菜',
                name : '富士苹果'
            },
            {
                r : .6,
                color:'rgba(84,252,51,.5)',
                zhangfu:'-5%',
                junjia:'3元/公斤',
                zheng:'白条鸡、大带鱼',
                fu:'猪前腿肌肉、花生油',
                name : '茼蒿'
            },
            {
                r : .4,
                color:'rgba(84,252,51,.5)',
                zhangfu:'-5%',
                junjia:'12元/公斤',
                zheng:'大蒜、油麦菜',
                fu:'洋白菜、长茄子',
                name : '白条鸡'
            },
            {
                r : .2,
                color:'rgba(255,81,28,.5)',
                zhangfu:'2%',
                junjia:'15.5元/公斤',
                zheng:'大米、菠菜',
                fu:'西洋芹、生菜',
                name : '大蒜'
            }
        ]
    });

    var html = "";
   $(".module2Cont").html(html);
    html = '<dl class="lanse">'+
        '<dt><i class="shuangdong"></i>霜冻</dt>'+
        '<dd><span class="green">解除</span>蓝色霜冻预警</dd>'+
        '<dd>17时</dd>'+
    '</dl>'+
    '<dl class="chengse">'+
        '<dt><i class="jiebing"></i>结冰</dt>'+
        '<dd><span class="green">解除</span>橙色结冰预警</dd>'+
        '<dd>17时</dd>'+
    '</dl>'+
    '<dl class="chengse">'+
        '<dt><i class="wumai"></i>雾霾</dt>'+
        '<dd><span class="red">发布</span>橙色雾霾预警</dd>'+
        '<dd>16时</dd>'+
    '</dl>'+
    '<dl class="lanse">'+
        '<dt><i class="dafeng"></i>大风</dt>'+
        '<dd><span class="green">解除</span>蓝色大风预警</dd>'+
        '<dd>14时</dd>'+
    '</dl>'+
    '<dl class="huangse">'+
        '<dt><i class="dawu"></i>大雾</dt>'+
        '<dd><span class="red">发布</span>黄色大雾预警</dd>'+
        '<dd>12时</dd>'+
    '</dl>'+
    '<dl class="lanse">'+
        '<dt><i class="hanchao"></i>寒潮</dt>'+
        '<dd><span class="green">解除</span>蓝色寒潮预警</dd>'+
        '<dd>10时</dd>'+
    '</dl>';
    $(".module2Cont").html(html);
}

function date14(){
    var _charts1=charts.init({id:817,container:"chart1",option:{
        series: [
            {
                data: _charts1DataSc.qiugou
            },
            {
                data: _charts1DataSc.gongying
            }
        ]
    }});
    $(".charts1DataSc").click(function(){
        var _charts1=charts.init({id:817,container:"chart1",option:{
            series: [
                {
                    data: _charts1DataSc.qiugou
                },
                {
                    data: _charts1DataSc.gongying
                }
            ]
        }})
    });
    $(".charts1DataLy").click(function(){
        var _charts1=charts.init({id:817,container:"chart1",option:{
            series: [
                {
                    data: _charts1DataLy.qiugou
                },
                {
                    data: _charts1DataLy.gongying
                }
            ]
        }})
    });

    var _charts2=charts.init({id:816,container:"chart2",option:{
        series: [
            {
                data: _charts2DataSc.chengjiao
            },{
                data: _charts2DataSc.jiage
            }
        ]
    }});
    $(".charts2DataSc").click(function(){
        var _charts2=charts.init({id:816,container:"chart2",option:{
            series: [
                {
                    data: _charts2DataSc.chengjiao
                },
                {
                    data: _charts2DataSc.jiage
                }
            ]
        }})
    });
    $(".charts2DataLy").click(function(){
        var _charts2=charts.init({id:816,container:"chart2",option:{
            series: [
                {
                    data: _charts2DataLy.chengjiao
                },
                {
                    data: _charts2DataLy.jiage
                }
            ]
        }})
    });

    bubbleChartWordCloud({
        // 标识
        id : 'bubbleWordCloud-chart',
        // 高
        height : '151',
        // 排斥力
        repulsion : '100',
        // 数据
        data : [
            // value    数值，可选参数
            // color    颜色，可选参数
            // name     名称，必选参数
            {value :  1, color : '#ffde00', name : '农特名优'},
            {value : .8, color : '#00c1ff', name : '无公害产品'},
            {value : .6, color : '#54fc33', name : '东北大豆'},
            {value : .4, color : '#54fc33', name : '规模农场'},
            {value : .2, color : '#ffde00', name : '疯牛病'},
            {value : .0, color : '#ffde00', name : '禽流感'},
            {value :  0, color : '#54fc33', name : '生猪压栏'},
            {value : .0, color : '#00c1ff', name : '滞销菠萝'}
        ]
    });

    bubbleChartWordCloud1({
        // 标识
        id : 'bubbleCloud',
        // 高
        height : '155',
        // 数据
        data : [
            {
                r: 1.2,
                color:'rgba(255,81,28,.5)',
                zhangfu:'40%',
                junjia:'4.2元/公斤',
                zheng:'富士苹果、大带鱼',
                fu:'面粉、猪肉(白条猪)',
                name: '丝瓜'
            },
            {
                r: 1,
                color:'rgba(84,252,51,.5)',
                zhangfu:'-10%',
                junjia:'4.4元/公斤',
                zheng:'大带鱼、生菜',
                fu:'猪肉(白条猪)、长茄子',
                name: '富士苹果'
            },
            {
                r :.8,
                color:'rgba(255,81,28,.5)',
                zhangfu:'10%',
                junjia:'44元/公斤',
                zheng:'生菜、洋白菜',
                fu:'长茄子、油麦菜',
                name : '大带鱼'
            },
            {
                r : .6,
                color:'rgba(255,81,28,.5)',
                zhangfu:'6.67%',
                junjia:'3.2元/公斤',
                zheng:'洋白菜、猪后腿肌肉',
                fu:'油麦菜、茼蒿',
                name : '生菜'
            },
            {
                r : .4,
                color:'rgba(255,81,28,.5)',
                zhangfu:'6.25%',
                junjia:'3.4元/公斤',
                zheng:'猪后腿肌肉、富士苹果',
                fu:'茼蒿、山药',
                name : '洋白菜'
            },
            {
                r : .2,
                color:'rgba(84,252,51,.5)',
                zhangfu:'-3.77%',
                junjia:'27.5元/公斤',
                zheng:'牛肉、丝瓜',
                fu:'山药、香菇',
                name : '猪后腿肌肉'
            }
        ]
    });

    var html = "";
    $(".module2Cont").html(html);
    html = '<dl class="lanse">'+
        '<dt><i class="shuangdong"></i>霜冻</dt>'+
        '<dd><span class="green">解除</span>蓝色霜冻预警</dd>'+
        '<dd>18时</dd>'+
        '</dl>'+
        '<dl class="chengse">'+
        '<dt><i class="jiebing"></i>结冰</dt>'+
        '<dd><span class="green">解除</span>橙色结冰预警</dd>'+
        '<dd>17时</dd>'+
        '</dl>'+
        '<dl class="chengse">'+
        '<dt><i class="wumai"></i>雾霾</dt>'+
        '<dd><span class="red">发布</span>橙色雾霾预警</dd>'+
        '<dd>13时</dd>'+
        '</dl>'+
        '<dl class="lanse">'+
        '<dt><i class="dafeng"></i>大风</dt>'+
        '<dd><span class="green">解除</span>蓝色大风预警</dd>'+
        '<dd>09时</dd>'+
        '</dl>';
    $(".module2Cont").html(html);
}


//中间地图初始化

function mapChina(){

    var data = {
        points: [
            {
                "title": "山东登海种业股份有限公司",
                "log": "119.948643",
                "lat": "37.175024",
                cp: '种子',
                mj: 2000,
                zhzs: 98,
                jccs: 10,
                sf:'山东',
                "icon": {
                    url: '../images/icon_3.png',
                    hoverUrl: '../images/icon_3.png',
                    width: 50,
                    height: 50
                }
            },
            {
                "title": "招远市关权蔬菜种植专业合作社",
                "log": "120.427958",
                "lat": "37.310915",
                cp: '蔬菜',
                mj: 1000,
                zhzs: 96,
                jccs: 15,
                sf:'山东',
                "icon": {
                    url: '../images/icon_1.png',
                    hoverUrl: '../images/icon_1.png',
                    width: 50,
                    height: 50
                }
            },
            {
                "title": "山东青岛城阳蔬菜水产品批发市场",
                "log": "120.384428",
                "lat": "36.105215",
                cp: '农副产品',
                mj: 360,
                zhzs: 92,
                jccs: 10,
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },
            {
                "title": "山东济南市堤口果品批发市场",
                "log": "116.968862",
                "lat": "36.677179",
                cp: '果品',
                mj: 162,
                zhzs: 94,
                jccs: 13,
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },
            {
                "title": "济南维尔康肉类水产品发市场",
                "log": "117.024967",
                "lat": "36.682785",
                cp: '肉类',
                mj: 500,
                zhzs: 90,
                jccs: 10,
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },{
                "title": "重庆观音桥市场",
                "log": "106.530635",
                "lat": "29.544606",
                cp: '综合',
                mj: 450,
                zhzs: 95,
                jccs: 1,
                "icon": {
                    url: '../images/icon_3.png',
                    hoverUrl: '../images/icon_3.png',
                    width: 50,
                    height: 50
                }
            },
            {
                "title": "乌鲁木齐北园春农产品中心批发市场",
                "log": "87.557026",
                "lat": "43.820729",
                cp: '果蔬',
                mj: 100,
                zhzs: 70,
                jccs: 4,
                "icon": {
                    url: '../images/icon_3.png',
                    hoverUrl: '../images/icon_3.png',
                    width: 50,
                    height: 50
                }
            },
            {
                "title": "哈尔滨哈达农副产品股份有限公司 ",
                "log": "126.62534",
                "lat": "45.685485",
                cp: '综合',
                mj: 800,
                zhzs: 99,
                jccs: 30,
                "icon": {
                    url: '../images/icon_1.png',
                    hoverUrl: '../images/icon_1.png',
                    width: 50,
                    height: 50
                }
            },
            {
                "title": "东莞市信立实业有限公司 ",
                "log": "113.80231",
                "lat": "22.94144",
                cp: '肉类',
                mj: 100,
                zhzs: 60,
                jccs: 2,
                "icon": {
                    url: '../images/icon_1.png',
                    hoverUrl: '../images/icon_1.png',
                    width: 50,
                    height: 50
                }
            },
            {
                "title": "陕西西部欣桥农产品物流中心",
                "log": "108.849099",
                "lat": "34.254847",
                cp: '蔬菜',
                mj: 300,
                zhzs: 88,
                jccs: 6,
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
        }else if(data._type == 'point'){
            if(levelFlag){
                if(data.sf == '山东'){
                    showMap(data.sf, 2);
                }
            }else{
                return false;
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
        }
    }

    function mouseOutHandle(event, data) {
        if (!$(event.toElement).is('#map_popOver')) {
            $('#map_popOver').css({
                display: 'none'
            });
        }
    }

    function popOver(param) {
        return '<h4>' + (param.title) + '</h4>' +
            '<p><span class="pbiaoqian1">' + (param.cp) + '</span><span>主营产品</span></p>' +
            '<p><span class="pbiaoqian2">' + (param.mj) + '</span><span>占地面积（亩）</span></p>'+
            '<p><span class="pbiaoqian3">' + (param.zhzs) + '</span><span>质量安全<br>综合指数</span></p>'+
            '<p><span class="pbiaoqian4">' + (param.jccs) + '</span><span>质量安全<br>检测次数</span></p>'
    }
    commonLib.CMap.config.baseDir = '../geoJson/'

    function showMap(name, level) {
        if(level>2){data={}};

        if(level == 1) {
            levelFlag = true;
        }else{
            levelFlag = false;
        }
        var map = new commonLib.CMap({
            dom: document.getElementById('map'),
            data: data,
            mouseOutHandle: mouseOutHandle,
            mouseOverHandle: mouseOverHandle,
            clickHandle: level <= 2 ? clickHandle : null,
            name: name,
            // areaColor: function(d) {
            //   console.log(d);
            //   return '#f00'
            // },
            level: level == undefined ? 1 : level
        });
        return map;
    }

    var cmap = showMap('china', 1);
}

function mapShandong(){

    var data = {
        points: [
            {
                "title": "山东登海种业股份有限公司",
                "log": "119.948643",
                "lat": "37.175024",
                cp: '种子',
                mj: 2000,
                zhzs: 98,
                jccs: 10,
                sf:'山东',
                "icon": {
                    url: '../images/icon_3.png',
                    hoverUrl: '../images/icon_3.png',
                    width: 50,
                    height: 50
                }
            },
            {
                "title": "招远市关权蔬菜种植专业合作社",
                "log": "120.427958",
                "lat": "37.310915",
                cp: '蔬菜',
                mj: 1000,
                zhzs: 96,
                jccs: 15,
                sf:'山东',
                "icon": {
                    url: '../images/icon_1.png',
                    hoverUrl: '../images/icon_1.png',
                    width: 50,
                    height: 50
                }
            },
            {
                "title": "山东青岛城阳蔬菜水产品批发市场",
                "log": "120.384428",
                "lat": "36.105215",
                cp: '农副产品',
                mj: 360,
                zhzs: 92,
                jccs: 10,
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },
            {
                "title": "山东济南市堤口果品批发市场",
                "log": "116.968862",
                "lat": "36.677179",
                cp: '果品',
                mj: 162,
                zhzs: 94,
                jccs: 13,
                sf:'山东',
                "icon": {
                    url: '../images/icon_2.png',
                    hoverUrl: '../images/icon_2.png',
                    width: 50,
                    height: 50
                }
            },
            {
                "title": "济南维尔康肉类水产品发市场",
                "log": "117.024967",
                "lat": "36.682785",
                cp: '肉类',
                mj: 500,
                zhzs: 90,
                jccs: 10,
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

    function clickHandle(event, data) {
        if (data._type == 'area') {
            showMap(data.properties.name, false);
        }}


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
        }
    }

    function mouseOutHandle(event, data) {
        if (!$(event.toElement).is('#map_popOver')) {
            $('#map_popOver').css({
                display: 'none'
            });
        }
    }

    function popOver(param) {
        var star = '';
        for (var i = 0, len = param.star; i < len; i++) {
            star += '★';
        }
        return '<h4>' + (param.title) + '</h4>' +
            '<p><span class="pbiaoqian1">' + (param.cp) + '</span><span>主营产品</span></p>' +
            '<p><span class="pbiaoqian2">' + (param.mj) + '</span><span>占地面积（亩）</span></p>'+
            '<p><span class="pbiaoqian3">' + (param.zhzs) + '</span><span>质量安全<br>综合指数</span></p>'+
            '<p><span class="pbiaoqian4">' + (param.jccs) + '</span><span>质量安全<br>检测次数</span></p>'
    }
    commonLib.CMap.config.baseDir = '../geoJson/'

    function showMap(name, isDrill) {
        var map = new commonLib.CMap({
            dom: document.getElementById('map'),
            data: data,
            mouseOutHandle: mouseOutHandle,
            mouseOverHandle: mouseOverHandle,
            clickHandle: isDrill ? clickHandle : null,
            name: name
        });
        return map;
    }

    var cmap = showMap('山东', 2);
}

$('.mapChina').on('click', function() {
    mapChina();
});
$('.mapShandong').on('click', function() {
    mapShandong();
});