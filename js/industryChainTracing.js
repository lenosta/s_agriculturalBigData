var date1 = "2016-11";
var date2 = "2016-12";
$(document).ready(function () {
    $(".leftBar li").removeClass("active").eq(0).addClass("active");
    charts1(0)    //可追溯农产品生产销售指数
    charts2(0)    //主要农产品追溯信息D级异常占比预警
    charts3(0)    //山东农产品区域销售结构
    charts4("广州", "蔬菜");   //销售区域广州农产品销售量占比
    charts5(0)    //农产品质量安全监测预警
    creatList("农药残留", "蔬菜");//
    cmap = showMap('china', "蔬菜", true);  //地图初始化
    $("body").height(1200);
});

function startpick(dp) {

    charts1(0);
    charts2(0);
    charts3(0);
    charts4("广州", "蔬菜");
    charts5(0);
    creatList("农药残留", "蔬菜");
    cmap = showMap('china', "蔬菜", true);
};


function endpick(dp) {
    charts1(0);
    charts2(0);
    charts3(0);
    charts4("广州", "蔬菜");
    charts5(0);
    cmap = showMap('china', "蔬菜", true);

};

function select1(type) {
    if (type == "蔬菜") {
        charts1(0);
        charts2(0);
        charts3(0);
        charts4("广州", "蔬菜");
        charts5(0);
        creatList("农药残留", "蔬菜");
        cmap = showMap('china', "蔬菜", true);
    }
    ;
    if (type == "禽畜") {
        charts1(1);
        charts2(1);
        charts3(1);
        charts4("广州", "禽畜");
        charts5(1);
        creatList("瘦肉精", "禽畜");
        cmap = showMap('china', "禽畜", true);
    }
    ;

}


function selectArea(areaName) {
    if (areaName == "山东") {
        cmap = showshandongMap('山东', true);
    }
    ;
    if (areaName == "全国") {
        cmap = showMap('china', "蔬菜", true);
    }
};

function charts1(num) {

    var Vegetables = [
        {
            nameArr: ["大白菜", "黄瓜", "菜豆", "甘蓝", "萝卜", "大蒜"],
            dataArr: [0.35, -0.05, 0.25, 0.08, 0.15, 0.12]
        }
    ]
    var livestock = [
        {
            nameArr: ["猪肉", "鸭蛋", "白条鸡", "羊肉", "牛肉", "牛奶", "肉鸭", "鸡蛋"],
            dataArr: [0.08, 0.15, -0.17, 0.05, 0.1, 0.18, -0.04, 0.13]
        }
    ];

    if (num == 0) {
        var _charts1 = charts.init({
            id: 818,
            container: "chart1",
            option: {
                yAxis: [{
                    interval: 0.5,
                    max: 0.5,
                    min: -0.5,

                }],
                xAxis: [{
                    data: Vegetables[0].nameArr

                }],
                series: [{

                    data: Vegetables[0].dataArr,
                    markPoint: {
                        data: [
                            {
                                type: 'max', name: '最大值',
                                symbolSize: 20,
                                itemStyle: {
                                    normal: {

                                        color: 'rgba(255,0,0,.8)'
                                    }
                                }
                            },

                            {
                                type: 'min', name: '最小值',
                                symbolSize: 1,
                                itemStyle: {
                                    normal: {
                                        color: 'rgba(255,0,0,.8)'
                                    }
                                }
                            },
                            {
                                name: '',
                                value: Vegetables[0].dataArr[2],
                                xAxis: '菜豆',
                                yAxis: Vegetables[0].dataArr[2],
                                symbolSize: 10,
                            },
                            {
                                name: '',
                                value: Vegetables[0].dataArr[3],
                                xAxis: '甘蓝',
                                yAxis: Vegetables[0].dataArr[3],
                                symbolSize: 10,
                            },
                            {
                                name: '',
                                value: Vegetables[0].dataArr[4],
                                xAxis: '萝卜',
                                yAxis: Vegetables[0].dataArr[4],
                                symbolSize: 10,
                            },
                            {
                                name: '',
                                value: Vegetables[0].dataArr[5],
                                xAxis: '大蒜',
                                yAxis: Vegetables[0].dataArr[5],
                                symbolSize: 10,
                            },
                        ],

                    },
                }
                ],
            }
        });
    }
    ;
    if (num == 1) {
        var _charts1 = charts.init({
            id: 818,
            container: "chart1",
            option: {
                yAxis: [{
                    interval: 0.5,
                    max: 0.5,
                    min: -0.5,

                }],
                xAxis: [{
                    data: livestock[0].nameArr

                }],
                series: [{
                    data: livestock[0].dataArr,
                    markPoint: {
                        data: [
                            {
                                type: 'max', name: '最大值',
                                symbolSize: 1,
                                itemStyle: {
                                    normal: {

                                        color: 'rgba(255,0,0,.8)'
                                    }
                                }
                            },

                            {
                                type: 'min', name: '最小值',
                                symbolSize: 1,
                                itemStyle: {
                                    normal: {
                                        color: 'rgba(255,0,0,.8)'
                                    }
                                }
                            },
                            {
                                name: '',
                                value: livestock[0].dataArr[0],
                                xAxis: '猪肉',
                                yAxis: livestock[0].dataArr[0],
                                symbolSize: 10,
                            },
                            {
                                name: '',
                                value: livestock[0].dataArr[1],
                                xAxis: '鸭蛋',
                                yAxis: livestock[0].dataArr[1],
                                symbolSize: 10,
                            },
                            {
                                name: '',
                                value: livestock[0].dataArr[3],
                                xAxis: '羊肉',
                                yAxis: livestock[0].dataArr[3],
                                symbolSize: 10,
                            },
                            {
                                name: '',
                                value: livestock[0].dataArr[4],
                                xAxis: '牛肉',
                                yAxis: livestock[0].dataArr[4],
                                symbolSize: 10,
                            },
                            {
                                name: '',
                                value: livestock[0].dataArr[6],
                                xAxis: '肉鸭',
                                yAxis: livestock[0].dataArr[6],
                                symbolSize: 10,
                            },
                            {
                                name: '',
                                value: livestock[0].dataArr[7],
                                xAxis: '鸡蛋',
                                yAxis: livestock[0].dataArr[7],
                                symbolSize: 10,
                            },
                        ],

                    },
                }
                ],
            }
        });
    }
    ;
};

function charts2(num) {
    $("#areaName").html("广州");
    var Vegetables = [
        {
            name: "大白菜",
            data: [0.15, 0.2, 0.12, 0.328]
        },
        {
            name: "黄瓜",
            data: [0.12, 0.13, 0.09, 0.148]
        },
        {
            name: "菜豆",
            data: [0.23, 0.02, 0.22, 0.118]
        },
        {
            name: "甘蓝",
            data: [0.08, 0.34, 0.29, 0.038]
        },
        {
            name: "萝卜",
            data: [0.05, 0.09, 0.24, 0.038]
        },
        {
            name: "大蒜",
            data: [0.18, 0.16, 0.39, 0.118]
        }
    ]
    var livestock = [
        {
            name: "猪肉",
            data: [0.18, 0.08, 0.07, 0.238]
        },
        {
            name: "鸡蛋",
            data: [0.15, 0.05, 0.14, 0.188]
        },
        {
            name: "白条鸡",
            data: [0.26, 0.18, 0.11, 0.338]
        },
        {
            name: "羊肉",
            data: [0.11, 0.25, 0.22, 0.06]
        },
        {
            name: "牛肉",
            data: [0.08, 0.2, 0.33, 0.06]
        },
        {
            name: "牛奶",
            data: [0.21, 0.35, 0.32, 0.19]
        }
    ];
    if (num == 0) {
        var legendArr = [];
        var seriesArr = [];
        Vegetables.forEach(function (item) {
            legendArr.push(item.name);
            var seriesobj = {
                name: item.name,
                data: item.data,
                markPoint: {
                    data: [
                        {name: '生产环节', value: item.data[0], xAxis: '生产环节', yAxis: item.data[0]},
                        {name: '加工环节', value: item.data[1], xAxis: '加工环节', yAxis: item.data[1]},
                        {name: '流通环节', value: item.data[2], xAxis: '流通环节', yAxis: item.data[2]},
                        {name: '销售环节', value: item.data[3], xAxis: '销售环节', yAxis: item.data[3]}
                    ]
                }
            };
            seriesArr.push(seriesobj);
        });
        var option = {
            legend: {
                data: legendArr
            },
            series: seriesArr
        };
        var _charts2 = charts.init({
            id: 819,
            container: "chart2",
            option: option
        });
    }
    ;
    if (num == 1) {
        var legendArr = [];
        var seriesArr = [];
        livestock.forEach(function (item) {
            legendArr.push(item.name);
            var seriesobj = {
                name: item.name,
                data: item.data,
                markPoint: {
                    data: [
                        {name: '生产环节', value: item.data[0], xAxis: '生产环节', yAxis: item.data[0]},
                        {name: '加工环节', value: item.data[1], xAxis: '加工环节', yAxis: item.data[1]},
                        {name: '流通环节', value: item.data[2], xAxis: '流通环节', yAxis: item.data[2]},
                        {name: '销售环节', value: item.data[3], xAxis: '销售环节', yAxis: item.data[3]}
                    ]
                }
            };
            seriesArr.push(seriesobj);
        });
        var option = {
            legend: {
                data: legendArr
            },
            series: seriesArr
        };
        var _charts2 = charts.init({
            id: 819,
            container: "chart2",
            option: option
        });
    }

};

function charts3(num) {
    if (num == 0) {
        var _charts3 = charts.init({
            id: 821,
            container: "chart3",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 5530, name: '北京'},
                        {value: 5205, name: '郑州'},
                        {value: 5710, name: '广州'},
                        {value: 4458, name: '成都'},
                        {value: 4272, name: '苏州'},
                        {value: 3993, name: '石家庄'},
                        {value: 3630, name: '长沙'},
                        {value: 3301, name: '合肥'},
                        {value: 3116, name: '武汉'},
                        {value: 24280, name: '其他'}

                    ]
                }

                ]
            }
        });
        _charts3.on('click', function (params) {
            console.log(params)
            var name = params.name;
            var typeName = params.seriesName;
            $("#areaName").html(name);
            charts4(name, typeName);

        });

    }
    ;
    if (num == 1) {
        var _charts3 = charts.init({
            id: 821,
            container: "chart3",
            option: {
                series: [{
                    name: "禽畜",
                    data: [
                        {value: 1134, name: '北京'},
                        {value: 892, name: '成都'},
                        {value: 1156, name: '广州'},
                        {value: 386, name: '贵阳'},
                        {value: 431, name: '哈尔滨'},
                        {value: 599, name: '杭州'},
                        {value: 502, name: '南昌'},
                        {value: 418, name: '厦门'},
                        {value: 261, name: '上海'},
                        {value: 2428, name: '其他'}
                    ]
                }

                ]
            }
        });
        _charts3.on('click', function (params) {
            console.log(params)
            var name = params.name;
            var typeName = params.seriesName;
            $("#areaName").html(name);
            charts4(name, typeName);

        });
    }


};

function charts4(name, typeName) {
    if (name == "广州" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 153, name: '菠菜'},
                        {value: 892, name: '菜豆'},
                        {value: 1187, name: '大白菜'},
                        {value: 328, name: '大蒜'},
                        {value: 769, name: '甘蓝'},
                        {value: 1071, name: '黄瓜'},
                        {value: 343, name: '辣椒'},
                        {value: 667, name: '萝卜'},
                        {value: 296, name: '芹菜'}
                    ]
                }

                ]
            }
        });
    }
    ;

    if (name == "北京" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 148, name: '菠菜'},
                        {value: 504, name: '菜豆'},
                        {value: 1117, name: '大白菜'},
                        {value: 391, name: '大蒜'},
                        {value: 741, name: '甘蓝'},
                        {value: 1416, name: '黄瓜'},
                        {value: 233, name: '辣椒'},
                        {value: 722, name: '萝卜'},
                        {value: 254, name: '芹菜'}
                    ]
                }

                ]
            }
        });
    }
    ;


    if (name == "郑州" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 133, name: '菠菜'},
                        {value: 898, name: '菜豆'},
                        {value: 1017, name: '大白菜'},
                        {value: 341, name: '大蒜'},
                        {value: 721, name: '甘蓝'},
                        {value: 1216, name: '黄瓜'},
                        {value: 213, name: '辣椒'},
                        {value: 702, name: '萝卜'},
                        {value: 354, name: '芹菜'}
                    ]
                }

                ]
            }
        });
    }
    ;

    if (name == "成都" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 118, name: '菠菜'},
                        {value: 684, name: '菜豆'},
                        {value: 817, name: '大白菜'},
                        {value: 241, name: '大蒜'},
                        {value: 421, name: '甘蓝'},
                        {value: 816, name: '黄瓜'},
                        {value: 413, name: '辣椒'},
                        {value: 602, name: '萝卜'},
                        {value: 254, name: '芹菜'}
                    ]
                }

                ]
            }
        });
    }
    ;

    if (name == "苏州" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 109, name: '菠菜'},
                        {value: 739, name: '菜豆'},
                        {value: 843, name: '大白菜'},
                        {value: 303, name: '大蒜'},
                        {value: 671, name: '甘蓝'},
                        {value: 1021, name: '黄瓜'},
                        {value: 313, name: '辣椒'},
                        {value: 432, name: '萝卜'},
                        {value: 554, name: '芹菜'}
                    ]
                }

                ]
            }
        });
    }
    ;

    if (name == "石家庄" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 98, name: '菠菜'},
                        {value: 664, name: '菜豆'},
                        {value: 755, name: '大白菜'},
                        {value: 303, name: '大蒜'},
                        {value: 671, name: '甘蓝'},
                        {value: 1021, name: '黄瓜'},
                        {value: 313, name: '辣椒'},
                        {value: 432, name: '萝卜'},
                        {value: 554, name: '芹菜'}
                    ]
                }

                ]
            }
        });
    }
    ;

    if (name == "长沙" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 198, name: '菠菜'},
                        {value: 864, name: '菜豆'},
                        {value: 755, name: '大白菜'},
                        {value: 403, name: '大蒜'},
                        {value: 571, name: '甘蓝'},
                        {value: 1021, name: '黄瓜'},
                        {value: 313, name: '辣椒'},
                        {value: 432, name: '萝卜'},
                        {value: 554, name: '芹菜'}
                    ]
                }

                ]
            }
        });
    }
    ;

    if (name == "合肥" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 124, name: '菠菜'},
                        {value: 764, name: '菜豆'},
                        {value: 655, name: '大白菜'},
                        {value: 433, name: '大蒜'},
                        {value: 271, name: '甘蓝'},
                        {value: 1021, name: '黄瓜'},
                        {value: 313, name: '辣椒'},
                        {value: 432, name: '萝卜'},
                        {value: 554, name: '芹菜'}
                    ]
                }

                ]
            }
        });
    }
    ;

    if (name == "武汉" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 224, name: '菠菜'},
                        {value: 564, name: '菜豆'},
                        {value: 755, name: '大白菜'},
                        {value: 533, name: '大蒜'},
                        {value: 271, name: '甘蓝'},
                        {value: 1021, name: '黄瓜'},
                        {value: 313, name: '辣椒'},
                        {value: 432, name: '萝卜'},
                        {value: 554, name: '芹菜'}
                    ]
                }

                ]
            }
        });
    }
    ;

    if (name == "其他" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 1224, name: '菠菜'},
                        {value: 1564, name: '菜豆'},
                        {value: 1755, name: '大白菜'},
                        {value: 1533, name: '大蒜'},
                        {value: 1271, name: '甘蓝'},
                        {value: 3021, name: '黄瓜'},
                        {value: 1313, name: '辣椒'},
                        {value: 1432, name: '萝卜'},
                        {value: 1554, name: '芹菜'}
                    ]
                }

                ]
            }
        });
    }
    ;

    if (name == "广州" && typeName == "禽畜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "禽畜",
                    data: [
                        {value: 211, name: '白条鸡'},
                        {value: 217, name: '鸡蛋'},
                        {value: 87, name: '牛奶'},
                        {value: 135, name: '牛肉'},
                        {value: 81, name: '肉鸭'},
                        {value: 25, name: '鸭蛋'},
                        {value: 156, name: '羊肉'},
                        {value: 241, name: '猪肉'}
                    ]
                }

                ]
            }
        });
    }
    ;


    if (name == "北京" && typeName == "禽畜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "禽畜",
                    data: [
                        {value: 200, name: '猪肉'},
                        {value: 100, name: '鸡蛋'},
                        {value: 400, name: '白条鸡'},
                        {value: 200, name: '羊肉'},
                        {value: 400, name: '牛肉'},
                        {value: 400, name: '鸡蛋'},
                        {value: 200, name: '其他'}
                    ]
                }

                ]
            }
        });
    }
    ;


    if (name == "北京" && typeName == "蔬菜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 221, name: '白条鸡'},
                        {value: 317, name: '鸡蛋'},
                        {value: 187, name: '牛奶'},
                        {value: 235, name: '牛肉'},
                        {value: 31, name: '肉鸭'},
                        {value: 25, name: '鸭蛋'},
                        {value: 456, name: '羊肉'},
                        {value: 541, name: '猪肉'}
                    ]
                }

                ]
            }
        });
    }
    ;

    if (name != "北京" && name != "广州" && typeName == "禽畜") {
        var _charts4 = charts.init({
            id: 822,
            container: "chart4",
            option: {
                series: [{
                    name: "禽畜",
                    data: [
                        {value: 211, name: '白条鸡'},
                        {value: 217, name: '鸡蛋'},
                        {value: 87, name: '牛奶'},
                        {value: 135, name: '牛肉'},
                        {value: 81, name: '肉鸭'},
                        {value: 25, name: '鸭蛋'},
                        {value: 156, name: '羊肉'},
                        {value: 241, name: '猪肉'}
                    ]
                }

                ]
            }
        });
    }
    ;
};

function charts5(num) {
    if (num == 0) {
        var _charts5 = charts.init({
            id: 823,
            container: "chart5",
            option: {
                series: [{
                    name: "蔬菜",
                    data: [
                        {value: 7, name: '微生物'},
                        {value: 14, name: '重金属污染'},
                        {value: 10, name: '有害无机物'},
                        {value: 55, name: '农药残留'},
                        {value: 3, name: '其他'}
                    ]
                }

                ]
            }
        });
        _charts5.on('click', function (params) {
            var itemName = params.name;
            var typeName = params.seriesName;
            creatList(itemName, typeName); // 创建列表
        });
    }
    ;

    if (num == 1) {
        var _charts5 = charts.init({
            id: 823,
            container: "chart5",
            option: {
                series: [{
                    name: "禽畜",
                    data: [
                        {value: 23, name: '瘦肉精'},
                        {value: 24, name: '饲料添加剂'},
                        {value: 10, name: '兽药残留'},
                        {value: 5, name: '病死畜禽产品'},
                        {value: 3, name: '三聚氰胺'},
                        {value: 3, name: '其他'}
                    ]
                }

                ]
            }
        });
        _charts5.on('click', function (params) {
            var itemName = params.name;
            var typeName = params.seriesName;
            creatList(itemName, typeName); // 创建列表
        });
    }
    ;


};


function creatList(itemName, typeName) {
    var Vegetables = {
        "农药残留": [
            {
                "批次号": "2016001B",
                "品种": "大蒜",
                "企业": "青岛***蔬菜副食品批发市场",
                "监测日期": "2016年11月",
            },
            {
                "批次号": "2016002B",
                "品种": "黄瓜",
                "企业": "青岛***蔬菜副食品批发市场",
                "监测日期": "2016年11月",
            },
            {
                "批次号": "2016003B",
                "品种": "黄瓜",
                "企业": "山东省淄博市***果品批发市场",
                "监测日期": "2016年11月",
            }
            ,
            {
                "批次号": "2016004B",
                "品种": "大白菜",
                "企业": "山东省淄博市***果品批发市场",
                "监测日期": "2016年11月",
            },
            {
                "批次号": "2016005B",
                "品种": "菜豆",
                "企业": "山东寿光***农产品批发市场",
                "监测日期": "2016年11月",
            }
            ,
            {
                "批次号": "2016006B",
                "品种": "西红柿",
                "企业": "山东寿光***农产品批发市场",
                "监测日期": "2016年11月"
            }
        ],
        "有害无机物": [
            {
                "批次号": "2016007B",
                "品种": "白菜",
                "企业": "山东寿光***农产品批发市场",
                "监测日期": "2016年11月",
            },
            {
                "批次号": "2016008B",
                "品种": "芹菜",
                "企业": "青岛***蔬菜副食品批发市场",
                "监测日期": "2016年11月",
            },
            {
                "批次号": "2016009B",
                "品种": "大白菜",
                "企业": "山东寿光***农产品批发市场",
                "监测日期": "2016年11月",
            }
            ,
            {
                "批次号": "2016010B",
                "品种": "菜豆",
                "企业": "山东省淄博市***果品批发市场",
                "监测日期": "2016年11月",
            },
            {
                "批次号": "2016011B",
                "品种": "菜豆",
                "企业": "山东寿光***农产品批发市场",
                "监测日期": "2016年11月",
            }
            ,
            {
                "批次号": "2016012B",
                "品种": "西红柿",
                "企业": "山东寿光***农产品批发市场",
                "监测日期": "2016年11月"
            }
        ]

    };

    var livestock = {
        "瘦肉精": [
            {
                "批次号": "2016001A",
                "品种": "猪肉",
                "企业": "山东济南市***综合批发市场",
                "监测日期": "2016年11月"
            },
            {
                "批次号": "2016002A",
                "品种": "鸡蛋",
                "企业": "济南七里堡***综合批发市场",
                "监测日期": "2016年11月"
            },
            {
                "批次号": "2016014A",
                "品种": "牛肉",
                "企业": "山东济南市***综合批发市场",
                "监测日期": "2016年11月"
            }
            ,
            {
                "批次号": "2016017A",
                "品种": "猪肉",
                "企业": "山东济南市***综合批发市场",
                "监测日期": "2016年11月"
            },
            {
                "批次号": "2016018A",
                "品种": "鸡蛋",
                "企业": "济南七里堡***综合批发市场",
                "监测日期": "2016年11月"
            }
            ,
            {
                "批次号": "2016029A",
                "品种": "牛肉",
                "企业": "山东济南市***综合批发市场",
                "监测日期": "2016年11月"
            }
        ],
        "饲料添加剂": [
            {
                "批次号": "2016028A",
                "品种": "鸡肉",
                "企业": "济南七里堡***综合批发市场",
                "监测日期": "2016年11月"
            },
            {
                "批次号": "2016029A",
                "品种": "猪肉",
                "企业": "山东省威海市***批发市场",
                "监测日期": "2016年11月"
            },
            {
                "批次号": "2016006A",
                "品种": "鸭蛋",
                "企业": "山东泰安***畜牧养殖基地",
                "监测日期": "2016年11月"
            }
            ,
            {
                "批次号": "2016008A",
                "品种": "猪肉",
                "企业": "山东聊城***畜禽养殖基地",
                "监测日期": "2016年11月"
            },
            {
                "批次号": "2016011A",
                "品种": "牛奶",
                "企业": "山东省威海市***批发市场",
                "监测日期": "2016年11月"
            }
            ,
            {
                "批次号": "2016015A",
                "品种": "牛肉",
                "企业": "山东省威海市***批发市场",
                "监测日期": "2016年11月"
            }
        ]
    };
    var html = "";
    html += "<tr>"
    html += " <th>批次号</th>"
    html += "<th>品种</th>"
    html += "<th class='th40'>企业</th>"
    html += " <th class='noborderright'>检测日期</th>"
    html += "    </tr>";
    if (itemName == "农药残留" && typeName == "蔬菜") {
        $("#listContent").html("");
        Vegetables["农药残留"].forEach(function (item) {
            html += "<tr>"
            html += "  <td>" + item["批次号"] + "</td>"
            html += " <td>" + item["品种"] + "</td>"
            html += " <td class='td40'>" + item["企业"] + "</td>"
            html += "<td class='noborderright'>" + item["监测日期"] + "</td>"
            html += "</tr>"
        });
        $("#listtitle").html(itemName)
        $("#listContent").html(html);
    }else if (itemName == "有害无机物" && typeName == "蔬菜") {
        $("#listContent").html("");
        Vegetables["有害无机物"].forEach(function (item) {
            html += "<tr>"
            html += "  <td>" + item["批次号"] + "</td>"
            html += " <td>" + item["品种"] + "</td>"
            html += " <td class='td40'>" + item["企业"] + "</td>"
            html += "<td class='noborderright'>" + item["监测日期"] + "</td>"
            html += "</tr>"
        });
        $("#listtitle").html(itemName)
        $("#listContent").html(html);
    }else if (itemName == "饲料添加剂" && typeName == "禽畜") {
        $("#listContent").html("");
        livestock["饲料添加剂"].forEach(function (item) {
            html += "<tr>"
            html += "  <td>" + item["批次号"] + "</td>"
            html += " <td>" + item["品种"] + "</td>"
            html += " <td class='td40'>" + item["企业"] + "</td>"
            html += "<td class='noborderright'>" + item["监测日期"] + "</td>"
            html += "</tr>"
        });
        $("#listtitle").html(itemName)
        $("#listContent").html(html);
    }else if (itemName == "瘦肉精" && typeName == "禽畜") {
        $("#listContent").html("");
        livestock["瘦肉精"].forEach(function (item) {
            html += "<tr>"
            html += "  <td>" + item["批次号"] + "</td>"
            html += " <td>" + item["品种"] + "</td>"
            html += " <td class='td40'>" + item["企业"] + "</td>"
            html += "<td class='noborderright'>" + item["监测日期"] + "</td>"
            html += "</tr>"
        });
        $("#listtitle").html(itemName)
        $("#listContent").html(html);
    }else{
     $("#listtitle").html(itemName);
    };

    var winH = $(window).height();
    var module6H = $(".module6").height();
    if (winH <= 600 + module6H) {
        $("body").height(520 + module6H);
    } else {
        $("body").height(winH - 80);
    }
}


var VegetablesData = {
    points: [{                          //第一条线路开始
        "name": "山东",
        "sf":"山东",
        "direct": "流出量",
        "num": "40000",
        "className": "qidian",
        "flag": ["flag1", "flag2", "flag3", "flag4", "flag5", "flag6", "flag7", "flag8"],
        "log": "120.385339",
        "lat": "36.306948",
        "icon": {
            url: '../images/icon_1.png',
            hoverUrl:'../images/icon_1.png',
            width: 50,
            height: 50
        }
    },
        {                          //第一条线路开始
            "name": "武汉",
            "direct": "流入量",
            "className": "zhongdian",
            flag: ['flag1'],
            "num": "3116",
            "log": "114.3162",
            "lat": "30.581084",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        },
        {                          //第一条线路开始
            "name": "沧州",
            "direct": "流入量",
            "className": "liujingdian",
            flag: ['flag2'],
            "num": "5000",
            "log": "116.863806",
            "lat": "39.904214",
            "icon": {
                url: '../images/icon_2.png',
                hoverUrl:'../images/icon_2.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "哈尔滨",
            "direct": "流入量",
            "num": "3993",
            "className": "zhongdian",
            flag: ['flag2'],
            "log": "126.657717",
            "lat": "45.773225",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "北京",
            "direct": "流入量",
            "num": "5530",
            "className": "zhongdian",
            flag: ['flag3'],
            "log": "116.395645",
            "lat": "39.929986",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "郑州",
            "direct": "流入量",
            flag: ['flag4', 'flag5', 'flag6'],
            "num": "20000",
            "className": "liujingdian",
            "log": "113.649644",
            "lat": "34.75661",
            "icon": {
                url: '../images/icon_2.png',
                hoverUrl:'../images/icon_2.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "长沙",
            "direct": "流入量",
            "num": "3630",
            "className": "zhongdian",
            flag: ['flag4'],
            "log": "112.979353",
            "lat": "28.213478",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "广州",
            "direct": "流入量",
            "num": "5710",
            "className": "zhongdian",
            flag: ['flag5'],
            "log": "113.30765",
            "lat": "23.120049",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "成都",
            "direct": "流入量",
            "num": "4458",
            "className": "zhongdian",
            flag: ['flag6'],
            "log": "104.067923",
            "lat": "30.679943",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "苏州",
            "direct": "流入量",
            "num": "4272",
            "className": "zhongdian",
            flag: ['flag7'],
            "log": "120.619907",
            "lat": "31.317987",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "石家庄",
            "direct": "流入量",
            "num": "3993",
            "className": "zhongdian",
            flag: ['flag8'],
            "log": "114.522082",
            "lat": "38.048958",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
    ],
    lines: [
        {
            className: 'line1',
            flag: ['flag1'],
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
            flag: ['flag2'],
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
            flag: ['flag2'],
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
            flag: ['flag3'],
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
            flag: ['flag4', 'flag5', 'flag6'],
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
            flag: ['flag4'],
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
            flag: ['flag5'],
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
            flag: ['flag6'],
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
            flag: ['flag7'],
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
            flag: ['flag8'],
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


var livestockData = {
    points: [{                          //第一条线路开始
        "name": "山东",
        "sf":"山东",
        "direct": "流出量",
        "num": "4000",
        "className": "qidian",
        "flag": ["flag1", "flag2", "flag3", "flag4", "flag5", "flag6", "flag7", "flag8"],
        "log": "120.385339",
        "lat": "36.306948",
        "icon": {
            url: '../images/icon_1.png',
            hoverUrl:'../images/icon_1.png',
            width: 50,
            height: 50
        }
    },
        {                          //第一条线路开始
            "name": "武汉",
            "direct": "流入量",
            "className": "zhongdian",
            flag: ['flag1'],
            "num": "311",
            "log": "114.3162",
            "lat": "30.581084",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        },
        {                          //第一条线路开始
            "name": "沧州",
            "direct": "流入量",
            "className": "liujingdian",
            flag: ['flag2'],
            "num": "500",
            "log": "116.863806",
            "lat": "39.904214",
            "icon": {
                url: '../images/icon_2.png',
                hoverUrl:'../images/icon_2.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "哈尔滨",
            "direct": "流入量",
            "num": "399",
            "className": "zhongdian",
            flag: ['flag2'],
            "log": "126.657717",
            "lat": "45.773225",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "北京",
            "direct": "流入量",
            "num": "553",
            "className": "zhongdian",
            flag: ['flag3'],
            "log": "116.395645",
            "lat": "39.929986",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "郑州",
            "direct": "流入量",
            flag: ['flag4', 'flag5', 'flag6'],
            "num": "2000",
            "className": "liujingdian",
            "log": "113.649644",
            "lat": "34.75661",
            "icon": {
                url: '../images/icon_2.png',
                hoverUrl:'../images/icon_2.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "长沙",
            "direct": "流入量",
            "num": "363",
            "className": "zhongdian",
            flag: ['flag4'],
            "log": "112.979353",
            "lat": "28.213478",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "广州",
            "direct": "流入量",
            "num": "571",
            "className": "zhongdian",
            flag: ['flag5'],
            "log": "113.30765",
            "lat": "23.120049",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "成都",
            "direct": "流入量",
            "num": "445",
            "className": "zhongdian",
            flag: ['flag6'],
            "log": "104.067923",
            "lat": "30.679943",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "苏州",
            "direct": "流入量",
            "num": "427",
            "className": "zhongdian",
            flag: ['flag7'],
            "log": "120.619907",
            "lat": "31.317987",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
        ,
        {                          //第一条线路开始
            "name": "石家庄",
            "direct": "流入量",
            "num": "399",
            "className": "zhongdian",
            flag: ['flag8'],
            "log": "114.522082",
            "lat": "38.048958",
            "icon": {
                url: '../images/icon_3.png',
                hoverUrl:'../images/icon_3.png',
                width: 50,
                height: 50
            }
        }
    ],
    lines: [
        {
            className: 'line1',
            flag: ['flag1'],
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
            flag: ['flag2'],
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
            flag: ['flag2'],
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
            flag: ['flag3'],
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
            flag: ['flag4', 'flag5', 'flag6'],
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
            flag: ['flag4'],
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
            flag: ['flag5'],
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
            flag: ['flag6'],
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
            flag: ['flag7'],
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
            flag: ['flag8'],
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

var shandongData = {
    points: [
        {                          //第一条线路开始
            "name": "山东",
            "sf":"山东",
            "direct": "流出量",
            "num": "40000",
            "className": "qidian",
            "flag": ["flag1", "flag2", "flag3", "flag4", "flag5", "flag6", "flag7", "flag8"],
            "log": "120.385339",
            "lat": "36.306948",
            "icon": {
                url: '../images/icon_1.png',
                hoverUrl:'../images/icon_1.png',
                width: 50,
                height: 50
            }
        }
    ]
};

function clickHandle(event, data) {

    if(!data.properties.childNum){return};
    if (data._type == 'area') {

        if (data.properties.name == "山东") {
            showshandongMap(data.properties.name, true);
        } else {

            showMap(data.properties.name,"蔬菜", true);
        }
    }
    ;

    if (data._type == 'point') {
        if (data.sf == '山东') {
            showshandongMap(data.sf, true);
        }
    }

}
commonLib.CMap.config.baseDir = '../geoJson/'
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
        // 添加触摸点的时候对应的线发生变化
        var lineDomArr = linePath(data.flag);

        lineDomArr.forEach(function (d) {
            d3.select(d).attr('class', 'line1 line-hover').attr('filter', 'url(#line_filter)')
        })
    }
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

    return '<h3 class="' + (param.className) + '">' + (param.num) + '吨</h3>' +
        '<p style="color: #FFF">' + (param.name + param.direct) + '</p>'
}

function showshandongMap(name, isDrill) {
    var map = new commonLib.CMap({
        dom: document.getElementById('map'),
        data: shandongData,
        mouseOutHandle: mouseOutHandle,
        mouseOverHandle: mouseOverHandle,
        clickHandle: isDrill ? clickHandle : null,
        name: name
    });
    return map;
}

function showMap(name, type, isDrill) {
    if(name!="china"){
      lastData={}
    }else{
        lastData= VegetablesData;
    };
    if (type == "蔬菜") {
        var map = new commonLib.CMap({
            dom: document.getElementById('map'),
            data: lastData,
            mouseOutHandle: mouseOutHandle,
            mouseOverHandle: mouseOverHandle,
            clickHandle: isDrill ? clickHandle : null,
            name: name
        });

    }
    ;

    if (type == "禽畜") {
        var map = new commonLib.CMap({
            dom: document.getElementById('map'),
            data: livestockData,
            mouseOutHandle: mouseOutHandle,
            mouseOverHandle: mouseOverHandle,
            clickHandle: isDrill ? clickHandle : null,
            name: name
        });
    }
    ;
    if (!type) {
        var map = new commonLib.CMap({
            dom: document.getElementById('map'),
            mouseOutHandle: mouseOutHandle,
            mouseOverHandle: mouseOverHandle,
            clickHandle: isDrill ? clickHandle : null,
            name: name
        });
    }

    return map;
}

$('#btn').on('click', function () {
    cmap.data = {
        points: [{
            "name": "sss",
            "log": "114.3",
            "lat": "38.9",
            "icon": {
                url: 'imgs/icon_1.png',
                width: 50,
                height: 50
            }
        }, {
            "name": "XXX",
            "log": "123",
            "lat": "42.2",
            "icon": {
                url: 'imgs/icon_2.png',
                width: 50,
                height: 50
            }
        },]
    }
});

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
