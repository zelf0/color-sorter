(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),l=(a(10),a(2)),u=a(1),i=(a(11),function(e){var t=e.color,a=(e.target,e.swapTile),n=e.index,o=e.size;return r.a.createElement("div",{onClick:function(e){a(e,n)},style:{backgroundColor:t,height:o,width:o},className:"tile"})}),d=function(e){var t=e.board,a=e.swapTile,n=e.tileSize;return r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement("div",{className:"row",key:"row-".concat(t)},e&&e.map(function(e,o){return r.a.createElement(i,{size:n,index:{row:t,column:o},swapTile:a,target:"rgb(".concat(e&&e.target&&e.target.red||0,", ").concat(e&&e.target&&e.target.green||0,", ").concat(e&&e.target&&e.target.blue||0,")"),color:"rgb(".concat(e&&e.value&&e.value.red||0,", ").concat(e&&e.value&&e.value.green||0,", ").concat(e&&e.value&&e.value.blue||0,")"),key:"tile-".concat(t,"-").concat(o)})}))}))};var v=function(){var e=Object(n.useState)([[1,2,3],[4,5,6],[7,8,9]]),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(6),i=Object(u.a)(c,2),v=i[0],m=i[1],s=Object(n.useState)(6),f=Object(u.a)(s,2),b=f[0],g=f[1],h=Object(n.useState)([]),w=Object(u.a)(h,2),p=w[0],E=w[1],M=Object(n.useState)(!1),j=Object(u.a)(M,2),O=j[0],x=j[1],k=Object(n.useState)(!0),S=Object(u.a)(k,2),y=S[0],C=S[1],N=Object(n.useState)(!0),T=Object(u.a)(N,2),B=T[0],L=T[1],z=Object(n.useState)(80/6),F=Object(u.a)(z,2),I=F[0],A=F[1];function D(e,t,a){this.red=e,this.green=t,this.blue=a}function J(){var e=b>1?b:2,t=v>1?v:2;A("".concat(e>30?70/e:40/e,"vw")),x(!1);for(var a=[],n=0;n<t;n++){for(var r=[],c=0;c<e;c++)r.push({});a.push(r)}P(a[0][0]),P(a[0][e-1]),P(a[t-1][0]),P(a[t-1][e-1]);for(var l=1;l<t-1;l++)a[l][0].target=a[l][0].value=R(a[0][0],a[t-1][0],t,l),a[l][e-1].target=a[l][e-1].value=R(a[0][e-1],a[t-1][e-1],t,l);for(var u=0;u<t;u++)for(var i=1;i<e-1;i++)a[u][i].target=a[u][i].value=R(a[u][0],a[u][e-1],e,i);o(a),y&&Y(a)}function P(e){e.corner=!0,e.target=e.value=new D(Math.floor(255*Math.random()),Math.floor(255*Math.random()),Math.floor(255*Math.random()))}function R(e,t,a,n){return new D(e.value.red+n*((t.value.red-e.value.red)/(a-1)),e.value.green+n*((t.value.green-e.value.green)/(a-1)),e.value.blue+n*((t.value.blue-e.value.blue)/(a-1)))}Object(n.useEffect)(function(){J()},[]);var Y=function(e){x(!1);for(var t=Object(l.a)(e),a=0;a<40*v;a++){var n=void 0,r=void 0,c=void 0,u=void 0;if(B?(n=Math.floor(Math.random()*(v-2))+1,r=Math.floor(Math.random()*(b-2))+1,c=Math.floor(Math.random()*(v-2))+1,u=Math.floor(Math.random()*(b-2))+1):(n=Math.floor(Math.random()*v),r=Math.floor(Math.random()*b),c=Math.floor(Math.random()*v),u=Math.floor(Math.random()*b)),!t[n][r].corner&&!t[c][u].corner){var i=t[n][r].value;t[n][r].value=t[c][u].value,t[c][u].value=i}}o(t)},q=function(){console.log("you won"),x(!0)},G=function(){for(var e=0;e<v;e++)for(var t=0;t<b;t++)if(a[e][t].value.red!==a[e][t].target.red||a[e][t].value.green!==a[e][t].target.green||a[e][t].value.blue!==a[e][t].target.blue)return!1;return!0};return r.a.createElement("div",{className:"App"},r.a.createElement("h3",null," Objective: Rearrange the tiles to form a gradient! Swap tiles to move them around the board. Corners are always locked in place and can't be moved."),r.a.createElement("div",{className:"board-container"},O?r.a.createElement("h1",null," You Solved It! "):r.a.createElement(r.a.Fragment,null),r.a.createElement(d,{tileSize:I,swapTile:function(e,t){e.target.classList.add("selected"),p.length<1?E([].concat(Object(l.a)(p),[{index:t,tile:e.target}])):setTimeout(function(){!function(e){E([].concat(Object(l.a)(p),[e]));var t=Object(l.a)(a);if(!t[p[0].index.row][p[0].index.column].corner&&!t[e.index.row][e.index.column].corner){var n=t[p[0].index.row][p[0].index.column].value;t[p[0].index.row][p[0].index.column].value=t[e.index.row][e.index.column].value,t[e.index.row][e.index.column].value=n}o(t),G()&&q()}({index:t,tile:e.target}),e.target.classList.remove("selected"),p[0].tile.classList.remove("selected"),E([])},100)},board:a})),r.a.createElement("button",{onClick:J}," New Board "),r.a.createElement("button",{onClick:function(){Y(a)}}," Scramble Board "),r.a.createElement("div",{className:"inputs"},r.a.createElement("p",null," Difficulty(size) : "),r.a.createElement("input",{value:b,type:"number",min:2,max:50,onChange:function(e){return t=parseInt(e.target.value),m(t>60?60:t),void g(t>120?120:t);var t}}),r.a.createElement("input",{onChange:function(e){return L(e.target.checked)},checked:B,type:"checkbox",id:"lock-edges",name:"Lock Edges "}),r.a.createElement("label",{for:"lock-edges"}," Don't Scramble Edge Tiles "),r.a.createElement("input",{onChange:function(e){return C(e.target.checked)},checked:y,type:"checkbox",id:"scramble-new-boards",name:"Automatically Scramble New Boards"}),r.a.createElement("label",{for:"scramble-new-boards"}," Automatically Scramble New Boards")))},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)})};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),m()}],[[5,1,2]]]);
//# sourceMappingURL=main.46d31dd9.chunk.js.map