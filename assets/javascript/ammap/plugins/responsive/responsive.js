AmCharts.addInitHandler(function(e){function i(){var i=e.divRealWidth,d=e.divRealHeight,t=!1;for(var r in g.rules){var n=g.rules[r];(void 0==n.minWidth||n.minWidth<=i)&&(void 0==n.maxWidth||n.maxWidth>=i)&&(void 0==n.minHeight||n.minHeight<=d)&&(void 0==n.maxHeight||n.maxHeight>=d)&&(void 0==n.rotate||!0===n.rotate&&!0===e.rotate||!1===n.rotate&&(void 0===e.rotate||!1===e.rotate))&&(void 0==n.legendPosition||void 0!==e.legend&&void 0!==e.legend.position&&e.legend.position===n.legendPosition)?void 0==g.currentRules[r]&&(g.currentRules[r]=!0,t=!0):void 0!=g.currentRules[r]&&(g.currentRules[r]=void 0,t=!0)}if(t){l();for(var r in g.currentRules)void 0!=g.currentRules[r]&&o(e,g.rules[r].overrides);a()}}function d(e,i){if(e instanceof Array)for(var d in e)if("object"==typeof e[d]&&e[d].id==i)return e[d];return!1}function a(){e.dataChanged=!0,"xy"!==e.type&&(e.marginsUpdated=!1),e.zoomOutOnDataUpdate=!1,e.validateNow(!0),s(e,"zoomOutOnDataUpdate")}function t(e){return e instanceof Array}function r(e){return"object"==typeof e}function o(e,i){for(var a in i)if(void 0===e[a])e[a]=i[a],n(e,a,"_r_none");else if(t(e[a])){if(e[a].length&&!r(e[a][0]))n(e,a,e[a]),e[a]=i[a];else if(t(i[a]))for(var l in i[a]){var s=!1;void 0===i[a][l].id&&void 0!=e[a][l]?s=e[a][l]:void 0!==i[a][l].id&&(s=d(e[a],i[a][l].id)),s&&o(s,i[a][l])}else if(r(i[a]))for(var l in e[a])o(e[a][l],i[a])}else r(e[a])?o(e[a],i[a]):(n(e,a,e[a]),e[a]=i[a])}function n(e,i,d){void 0===e["_r_"+i]&&(e["_r_"+i]=d),g.overridden.push({o:e,p:i})}function l(){for(var e;e=g.overridden.pop();)"_r_none"===e.o["_r_"+e.p]?delete e.o[e.p]:e.o[e.p]=e.o["_r_"+e.p]}function s(e,i){e[i]=e["_r_"+i]}if(void 0!==e.responsive&&!e.responsive.ready){var g=e.responsive;if(g.ready=!0,g.currentRules={},g.overridden=[],g.original={},!0===g.enabled){var h=e.version.split(".");if(!(Number(h[0])<3||3==Number(h[0])&&Number(h[1])<13)){var m={pie:[{maxWidth:550,legendPosition:"left",overrides:{legend:{enabled:!1}}},{maxWidth:550,legendPosition:"right",overrides:{legend:{enabled:!1}}},{maxWidth:150,overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"top",overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"bottom",overrides:{legend:{enabled:!1}}},{maxHeight:150,overrides:{legend:{enabled:!1}}},{maxWidth:400,overrides:{labelsEnabled:!1}},{maxWidth:100,overrides:{legend:{enabled:!1}}},{maxHeight:350,overrides:{pullOutRadius:0}},{maxHeight:200,overrides:{titles:{enabled:!1},labelsEnabled:!1}},{maxWidth:60,overrides:{autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,radius:"50%",innerRadius:0,balloon:{enabled:!1},legend:{enabled:!1}}},{maxHeight:60,overrides:{marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,radius:"50%",innerRadius:0,balloon:{enabled:!1},legend:{enabled:!1}}}],funnel:[{maxWidth:550,legendPosition:"left",overrides:{legend:{enabled:!1}}},{maxWidth:550,legendPosition:"right",overrides:{legend:{enabled:!1}}},{maxWidth:150,overrides:{legend:{enabled:!1}}},{maxHeight:500,legendPosition:"top",overrides:{legend:{enabled:!1}}},{maxHeight:500,legendPosition:"bottom",overrides:{legend:{enabled:!1}}},{maxHeight:150,overrides:{legend:{enabled:!1}}},{maxWidth:400,overrides:{labelsEnabled:!1,marginLeft:10,marginRight:10,legend:{enabled:!1}}},{maxHeight:350,overrides:{pullOutRadius:0,legend:{enabled:!1}}},{maxHeight:300,overrides:{titles:{enabled:!1}}}],radar:[{maxWidth:550,legendPosition:"left",overrides:{legend:{enabled:!1}}},{maxWidth:550,legendPosition:"right",overrides:{legend:{enabled:!1}}},{maxWidth:150,overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"top",overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"bottom",overrides:{legend:{enabled:!1}}},{maxHeight:150,overrides:{legend:{enabled:!1}}},{maxWidth:300,overrides:{labelsEnabled:!1}},{maxWidth:200,overrides:{autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,radius:"50%",titles:{enabled:!1},valueAxes:{labelsEnabled:!1,radarCategoriesEnabled:!1}}},{maxHeight:300,overrides:{labelsEnabled:!1}},{maxHeight:200,overrides:{autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,radius:"50%",titles:{enabled:!1},valueAxes:{radarCategoriesEnabled:!1}}},{maxHeight:100,overrides:{valueAxes:{labelsEnabled:!1}}}],gauge:[{maxWidth:550,legendPosition:"left",overrides:{legend:{enabled:!1}}},{maxWidth:550,legendPosition:"right",overrides:{legend:{enabled:!1}}},{maxWidth:150,overrides:{legend:{enabled:!1}}},{maxHeight:500,legendPosition:"top",overrides:{legend:{enabled:!1}}},{maxHeight:500,legendPosition:"bottom",overrides:{legend:{enabled:!1}}},{maxHeight:150,overrides:{legend:{enabled:!1}}},{maxWidth:200,overrides:{titles:{enabled:!1},allLabels:{enabled:!1},axes:{labelsEnabled:!1}}},{maxHeight:200,overrides:{titles:{enabled:!1},allLabels:{enabled:!1},axes:{labelsEnabled:!1}}}],serial:[{maxWidth:550,legendPosition:"left",overrides:{legend:{enabled:!1}}},{maxWidth:550,legendPosition:"right",overrides:{legend:{enabled:!1}}},{maxWidth:100,overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"top",overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"bottom",overrides:{legend:{enabled:!1}}},{maxHeight:100,overrides:{legend:{enabled:!1}}},{maxWidth:350,overrides:{autoMarginOffset:0,graphs:{hideBulletsCount:10}}},{maxWidth:350,rotate:!1,overrides:{marginLeft:10,marginRight:10,valueAxes:{ignoreAxisWidth:!0,inside:!0,title:"",showFirstLabel:!1,showLastLabel:!1},graphs:{bullet:"none"}}},{maxWidth:350,rotate:!0,overrides:{marginLeft:10,marginRight:10,categoryAxis:{ignoreAxisWidth:!0,inside:!0,title:""}}},{maxWidth:200,rotate:!1,overrides:{marginLeft:10,marginRight:10,marginTop:10,marginBottom:10,categoryAxis:{ignoreAxisWidth:!0,labelsEnabled:!1,inside:!0,title:"",guides:{inside:!0}},valueAxes:{ignoreAxisWidth:!0,labelsEnabled:!1,axisAlpha:0,guides:{label:""}},legend:{enabled:!1}}},{maxWidth:200,rotate:!0,overrides:{chartScrollbar:{scrollbarHeight:4,graph:"",resizeEnabled:!1},categoryAxis:{labelsEnabled:!1,axisAlpha:0,guides:{label:""}},legend:{enabled:!1}}},{maxWidth:100,rotate:!1,overrides:{valueAxes:{gridAlpha:0}}},{maxWidth:100,rotate:!0,overrides:{categoryAxis:{gridAlpha:0}}},{maxHeight:300,overrides:{autoMarginOffset:0,graphs:{hideBulletsCount:10}}},{maxHeight:200,rotate:!1,overrides:{marginTop:10,marginBottom:10,categoryAxis:{ignoreAxisWidth:!0,inside:!0,title:"",showFirstLabel:!1,showLastLabel:!1}}},{maxHeight:200,rotate:!0,overrides:{marginTop:10,marginBottom:10,valueAxes:{ignoreAxisWidth:!0,inside:!0,title:"",showFirstLabel:!1,showLastLabel:!1},graphs:{bullet:"none"}}},{maxHeight:150,rotate:!1,overrides:{titles:{enabled:!1},chartScrollbar:{scrollbarHeight:4,graph:"",resizeEnabled:!1},categoryAxis:{labelsEnabled:!1,ignoreAxisWidth:!0,axisAlpha:0,guides:{label:""}}}},{maxHeight:150,rotate:!0,overrides:{titles:{enabled:!1},valueAxes:{labelsEnabled:!1,ignoreAxisWidth:!0,axisAlpha:0,guides:{label:""}}}},{maxHeight:100,rotate:!1,overrides:{valueAxes:{labelsEnabled:!1,ignoreAxisWidth:!0,axisAlpha:0,gridAlpha:0,guides:{label:""}}}},{maxHeight:100,rotate:!0,overrides:{categoryAxis:{labelsEnabled:!1,ignoreAxisWidth:!0,axisAlpha:0,gridAlpha:0,guides:{label:""}}}},{maxWidth:100,overrides:{autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,categoryAxis:{labelsEnabled:!1},valueAxes:{labelsEnabled:!1}}},{maxHeight:100,overrides:{autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,categoryAxis:{labelsEnabled:!1},valueAxes:{labelsEnabled:!1}}}],xy:[{maxWidth:550,legendPosition:"left",overrides:{legend:{enabled:!1}}},{maxWidth:550,legendPosition:"right",overrides:{legend:{enabled:!1}}},{maxWidth:100,overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"top",overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"bottom",overrides:{legend:{enabled:!1}}},{maxHeight:100,overrides:{legend:{enabled:!1}}},{maxWidth:250,overrides:{autoMarginOffset:0,autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,valueAxes:{inside:!0,title:"",showFirstLabel:!1,showLastLabel:!1},legend:{enabled:!1}}},{maxWidth:150,overrides:{valueyAxes:{labelsEnabled:!1,axisAlpha:0,gridAlpha:0,guides:{label:""}}}},{maxHeight:250,overrides:{autoMarginOffset:0,autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,valueAxes:{inside:!0,title:"",showFirstLabel:!1,showLastLabel:!1},legend:{enabled:!1}}},{maxWidth:150,overrides:{valueyAxes:{labelsEnabled:!1,axisAlpha:0,gridAlpha:0,guides:{label:""}}}}],stock:[{maxWidth:500,overrides:{dataSetSelector:{position:"top"},periodSelector:{position:"bottom"}}},{maxWidth:400,overrides:{dataSetSelector:{selectText:"",compareText:""},periodSelector:{periodsText:"",inputFieldsEnabled:!1}}}],map:[{maxWidth:200,overrides:{zoomControl:{zoomControlEnabled:!1},smallMap:{enabled:!1},valueLegend:{enabled:!1},dataProvider:{areas:{descriptionWindowWidth:160,descriptionWindowRight:10,descriptionWindowTop:10},images:{descriptionWindowWidth:160,descriptionWindowRight:10,descriptionWindowTop:10},lines:{descriptionWindowWidth:160,descriptionWindowRight:10,descriptionWindowTop:10}}}},{maxWidth:150,overrides:{dataProvider:{areas:{descriptionWindowWidth:110,descriptionWindowRight:10,descriptionWindowTop:10},images:{descriptionWindowWidth:110,descriptionWindowRight:10,descriptionWindowTop:10},lines:{descriptionWindowWidth:110,descriptionWindowLeft:10,descriptionWindowRight:10}}}},{maxHeight:200,overrides:{zoomControl:{zoomControlEnabled:!1},smallMap:{enabled:!1},valueLegend:{enabled:!1},dataProvider:{areas:{descriptionWindowHeight:160,descriptionWindowRight:10,descriptionWindowTop:10},images:{descriptionWindowHeight:160,descriptionWindowRight:10,descriptionWindowTop:10},lines:{descriptionWindowHeight:160,descriptionWindowRight:10,descriptionWindowTop:10}}}},{maxHeight:150,overrides:{dataProvider:{areas:{descriptionWindowHeight:110,descriptionWindowRight:10,descriptionWindowTop:10},images:{descriptionWindowHeight:110,descriptionWindowRight:10,descriptionWindowTop:10},lines:{descriptionWindowHeight:110,descriptionWindowLeft:10,descriptionWindowRight:10}}}}]};void 0!=g.rules&&0!=g.rules.length&&t(g.rules)?!1!==g.addDefaultRules&&(g.rules=g.rules.concat(m[e.type])):g.rules=m[e.type],n(e,"zoomOutOnDataUpdate",e.zoomOutOnDataUpdate),e.addListener("resized",i),e.addListener("init",i)}}}},["pie","serial","xy","funnel","radar","gauge","stock","map"]);