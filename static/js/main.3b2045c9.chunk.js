(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(50)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var o=a(0),i=a.n(o),n=a(25),r=a.n(n),l=(a(36),a(13)),c=a(7),s=a(20),u=a(14),m=a(19);a(37),a(38);var g=function(){return i.a.createElement("div",{id:"top-bar"},i.a.createElement("div",{className:"top-bar-content"},"voohoo"))},h=a(63),p=a(64),d=a(65),f=[{img:"images/01.jpg",title:"Image",author:"author",cols:2},{img:"images/02.jpg",title:"Image",author:"author",cols:1},{img:"images/03.jpg",title:"Image",author:"author",cols:1},{img:"images/04.jpg",title:"Image",author:"author",cols:2},{img:"images/05.jpg",title:"Image",author:"author",cols:1},{img:"images/06.jpg",title:"Image",author:"author",cols:1},{img:"images/07.jpg",title:"Image",author:"author",cols:1},{img:"images/08.jpg",title:"Image",author:"author",cols:2},{img:"images/09.jpg",title:"Image",author:"author",cols:1},{img:"images/10.jpg",title:"Image",author:"author",cols:1},{img:"images/11.jpg",title:"Image",author:"author",cols:1},{img:"images/12.jpg",title:"Image",author:"author",cols:1},{img:"images/13.jpg",title:"Image",author:"author",cols:1},{img:"images/14.jpg",title:"Image",author:"author",cols:1},{img:"images/15.jpg",title:"Image",author:"author",cols:1}],j=Object(h.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:{width:"100%",height:"100%"}}});var v=function(e){var t=j();return i.a.createElement("div",{className:t.root},i.a.createElement(p.a,{cellHeight:160,className:t.gridList,cols:3},f.map(function(t){return i.a.createElement(d.a,{key:t.img,cols:t.cols||1},i.a.createElement("img",{src:t.img,alt:t.title,onClick:function(){return e.onClick(t.img)}}))})))},k=(a(49),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isFullScreen:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(){console.log("CLICK"),this.setState(function(e){return{isFullScreen:!e.isFullScreen}})}},{key:"render",value:function(){var e=this;console.log("RENDER"),console.log(this.state.isFullScreen);var t=this.state.isFullScreen?"photo-container full-screen":"photo-container";return i.a.createElement("div",{className:t,onClick:function(){return e.handleClick()}},i.a.createElement("img",{src:this.props.photoPath,className:"photo-display",alt:"Displayed"}))}}]),t}(i.a.Component)),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={selectedPhoto:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){this.setState({selectedPhoto:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(g,null),i.a.createElement("div",{className:"app-container"},i.a.createElement(v,{onClick:function(t){return e.handleClick(t)}}),i.a.createElement(k,{photoPath:this.state.selectedPhoto})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.3b2045c9.chunk.js.map