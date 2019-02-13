
function randomData() {
    return Math.round(Math.random()*1000);
}

function startpick(dp) {  
    changeData();
}



function changeData()
{
    charts.init({id:831,container:"sadmodule1Cont",option:{
         series : [{
                data:[
                    {
                        value:3641.5,
                        name:'山东'
                    },
                    {
                        value:2746.8,
                        name:'河北'
                    },
                    {
                        value:3510.1,
                        name:'河南'
                    },
                    {
                        value:2961.1,
                        name:'江苏'
                    },
                     {
                        value:3028,
                        name:'四川'
                    },
                    {
                        value:2506.2,
                        name:'湖南'
                    },
                    {
                        value:3989.3,
                        name:'广东'
                    },
                    {
                        value:28499.7,
                        name:'其它'
                    }
                ]
            }]

    }});

     charts.init({id:838,container:"sadmodule4Cont",option:{
          series: [
                {
                  
                    data: [0.03,0.29,-0.04,0.03,0.08,0.15,-0.05,-0.03,0.34,0.07,0.32,-0.04]
                }
            ]
     }});
    charts.init({id:837,container:"sadmodule3Cont",option:{
       
        series: [
                {
                  
                     data: [100,60,160,23,120,31,57, 23,68,63,18,33]
                }
            ]
    }});

     charts.init({id:839,container:"sadmodule5Cont",option:{
       
        series: [
                {
                  
                     data:[180,240,110,90,315]
                }
            ]
    }});
     mapChina();
}


$(document).ready(function(){
    $('.selList').mCustomScrollbar({
            axis:"y",
            theme:"minimal-dark",
            autoHideScrollbar:true
    })

  
     $(document).on("click","#secondMenu li",function(){
         changeData()
    })
})


function tablist(el)
{
    console.log(el)
    switch(el)
    {
    case "粮油":
      var dom = "<li>全部</li><li>玉米</li>"   
      $("#secondMenu").html(dom)
      break;
    case "蔬菜":
      var dom = "<li>全部</li>"     
      $("#secondMenu").html(dom)
      break;
    case "禽畜":
      var dom = "<li>生猪</li>"       
      $("#secondMenu").html(dom)
      break;
    default:
     
    }
}