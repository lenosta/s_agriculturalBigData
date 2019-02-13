// 11:33 2016/8/11 zhanghong

(function() {

    // 值
    var value = {

        // 标识
        id: 'chart',

        // 宽
        //width: '320',

        // 高
        //height: '240',


        // 参数
        option: {

            // 网格
            grid: {

                left: 0,
                right: 0,
                top: 0,
                bottom: 0

            },

            // 序列
            series: [{

                type: 'graph',
                layout: 'force',
                force: { repulsion: 180 },
                nodes: []

            }]

        }

    };



    // 主函数
    var main = function( /* value */ v) {

        // 渲染
        render_value(v);
        render_element(v);

        // 执行
        render.chart = echarts.init(render.element);
        render.chart.setOption(value.option);

        render.chart.on('click', handler_click);


    };

    // 渲染（命名空间）
    var render = function() {

        // ...

    };

    // 渲染（参数）
    var render_value = function( /* value */ v) {

        var $,
            a, b, i;

        // 标识
        if ($ = v['id']) value['id'] = $;

        // 宽
        if ($ = v['width']) value['width'] = $;

        // 高
        if ($ = v['height']) value['height'] = $;
value.option.series[0].nodes=[];
        // 数据
        if ($ = v['data'])
            for (a = value.option.series[0].nodes, i = 0; b = $[i]; i++) a.push({

                // 标签
                label: { normal: { show: true, formatter: b.name }, emphasis: { show: true, formatter: b.name },data:b },

                // 尺寸
                symbolSize: (b.r ? b.r * 60 + 30 : Math.random() * 60 + 30),

                // 样式
                itemStyle: { normal: { color: (b.color ? b.color : 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',.5)') } }

            });

        if (v['tooltip']) {
            value.option.tooltip = v.tooltip;

        }

    };

    // 渲染（元素）
    var render_element = function( /* value */ v) {

        var e = render.element = document.getElementById(value['id']);

        // 宽
        e.style.width = value['width'] + 'px';

        // 高
        e.style.height = value['height'] + 'px';

    };

    // 处理程序（点击）
    var handler_click = function( /* event */ e) {

        var $;

        // 删除高亮
        if ($ = value.option.series[0].nodes[render.index]) {

            // 改变层次
            render.chart.dispatchAction({ type: 'downplay', seriesIndex: e.seriesIndex, dataIndex: render.index });

            // 改变透明度
            $.itemStyle.normal.opacity = '.5';

        }

        // 添加高亮
        if ($ = value.option.series[0].nodes[render.index = e.dataIndex]) {

            // 改变层次
            render.chart.dispatchAction({ type: 'highlight', seriesIndex: e.seriesIndex, dataIndex: e.dataIndex });

            // 改变透明度
            $.itemStyle.normal.opacity = '1';

        }

        // 执行（刷新）
        render.chart.setOption(value.option, true);

        // 执行（处理程序）
        value['handlerClick'](value['data'][e.dataIndex]);

    };

    // 接口
    window.bubbleChartWordCloud1 = main;

}());
