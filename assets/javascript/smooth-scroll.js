$(function(){$("a[href*=#]:not([href=#])").click(function(){if(isFlipOther=$(this).parents(".flip-prev").length||$(this).parents(".flip-past").length||$(this).parents(".flip-next").length||$(this).parents(".flip-future").length,isFlipCurrent=$(this).parents(".flip-current").length,(isFlipCurrent||!isFlipOther)&&location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}})});