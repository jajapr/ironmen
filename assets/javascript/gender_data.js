var chart=AmCharts.makeChart("chartall",{type:"serial",theme:"none",legend:{useGraphSettings:!0},dataProvider:dataForAmCharts,valueAxes:[{integersOnly:!0,axisAlpha:1,dashLength:5,position:"left",stackType:"regular",title:"Количество человек, чел."}],graphs:[{balloonText:"Всего мужчин в  [[year]] году: <b>[[m]] </b>",columnWidth:.9,title:"Мужчины",fillColors:"#525263",lineColor:"#525263",valueField:"m",fillAlphas:.8,type:"column"},{balloonText:"Всего женщин в [[year]] году: <b> [[f]] </b>",columnWidth:.9,title:"Женщины",fillColors:"#C12042",lineColor:"#C12042",valueField:"f",fillAlphas:.8,type:"column"}],chartCursor:{cursorAlpha:0,cursorPosition:"mouse",zoomable:!0},categoryField:"year",categoryAxis:{gridPosition:"start",axisAlpha:0,fillAlpha:.04,fillColor:"#000000",gridAlpha:0},exportConfig:{menuBottom:"15px",menuRight:"15px",menuItems:[{icon:"/lib/3/images/export.png",format:"png"}]},startDuration:.3,startEffect:"easeOutSine"});