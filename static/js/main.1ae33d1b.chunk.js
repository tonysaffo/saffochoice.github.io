(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,n){},15:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var t=n(0),s=n.n(t),c=n(7),m=n.n(c),r=n(1),i=n(2),l=n(4),o=n(3),u=n(5),d=[{name:"NAG"},{name:"IDG"},{name:"DAG"},{name:"ING"},{name:"IAG"},{name:"DNG"}],p=[{number:1,finished:!0,rules:"2x2 Bo9 ARAM",teams:[{name:d[0].name,score:1,win:!1},{name:d[1].name,score:5,win:!0}]},{number:2,finished:!1,rules:"2x2 Bo9 ARAM",teams:[{name:d[2].name,score:3,win:!1},{name:d[3].name,score:1,win:!1}]}],v=(n(14),function(e){function a(){var e,n;Object(r.a)(this,a);for(var t=arguments.length,s=new Array(t),c=0;c<t;c++)s[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).calcWinClass=function(e,a){return e.finished?a.win?" win":" lost":""},n}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"champs-component"},p.map(function(a){return s.a.createElement("div",{className:"champ-item"},s.a.createElement("div",{className:"heading"},"Championship ",a.rules," #",a.number),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"leftside"+e.calcWinClass(a,a.teams[0])},s.a.createElement("div",{className:"logo"}),s.a.createElement("div",{className:"name"},a.teams[0].name),s.a.createElement("div",{className:"score"},a.teams[0].score)),s.a.createElement("div",{className:"middleside"},"vs"),s.a.createElement("div",{className:"rightside"+e.calcWinClass(a,a.teams[1])},s.a.createElement("div",{className:"logo"}),s.a.createElement("div",{className:"name"},a.teams[1].name),s.a.createElement("div",{className:"score"},a.teams[1].score))),s.a.createElement("i",{style:{textAlign:"center",display:"block"}},a.finished?"":"in progress ..."))}))}}]),a}(t.Component)),h=(n(15),function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(v,null))}}]),a}(t.Component));m.a.render(s.a.createElement(h,null),document.getElementById("root"))},8:function(e,a,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.1ae33d1b.chunk.js.map