(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(t,e,a){t.exports=a(51)},36:function(t,e,a){},37:function(t,e,a){},38:function(t,e,a){},39:function(t,e,a){},50:function(t,e,a){},51:function(t,e,a){"use strict";a.r(e);var i=a(0),c=a.n(i),l=a(21),n=a.n(l),o=(a(36),a(22)),s=a(7),r=a(28),m=a(23),h=a(27);a(37),a(38);var u=function(t){return c.a.createElement("div",{id:"top-bar"},c.a.createElement("div",{className:"top-bar-content"},c.a.createElement("i",{id:"menu-bars",className:"fas fa-bars",onClick:function(){return t.onClick()}}),c.a.createElement("img",{src:"images/brand/voohoo-black.png",width:"100",alt:"voohoo brand"})))};a(39);var p=function(t){var e=t.isOpen?"show":"";return c.a.createElement("div",{id:"menu-overlay",className:e},c.a.createElement("div",{className:"vertical-align"},c.a.createElement("h3",null,c.a.createElement("a",{href:"https://www.instagram.com/voo.hoo/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"tooltip"},c.a.createElement("span",{className:"tooltip-text"},"Instagram"),c.a.createElement("img",{src:"images/logos/instagram.png",width:"40",alt:"Instagram link"})))),c.a.createElement("h3",null,c.a.createElement("a",{href:"https://www.flickr.com/photos/voohoo/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"tooltip"},c.a.createElement("span",{className:"tooltip-text"},"Flickr"),c.a.createElement("img",{src:"images/logos/flickr.png",width:"40",alt:"Flickr link"})))),c.a.createElement("h3",null,c.a.createElement("a",{href:"mailto:vuhuypham99@gmail.com"},c.a.createElement("div",{className:"tooltip"},c.a.createElement("span",{className:"tooltip-text"},"vuhuypham99@gmail.com"),c.a.createElement("img",{src:"images/logos/gmail.png",width:"40",alt:"vuhuypham99@gmail.com email link"}))))))},f=a(63),d=a(64),g=a(66),v=Object(f.a)(function(t){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:{width:"100%",height:"100%"}}}),k={opacity:.3};var _=function(t){var e=v();return c.a.createElement("div",{className:e.root},c.a.createElement(d.a,{cellHeight:160,className:e.gridList,cols:3},t.tileData.map(function(e){return c.a.createElement(g.a,{key:e.img,cols:e.cols||1},c.a.createElement("img",{src:e.thumb,alt:e.title,style:t.selectedTile===e.img?k:{},onClick:function(){return t.onClick(e.img)}}))})))};a(50);var b=function(t){var e=t.isFullScreen?"photo-container full-screen":"photo-container";return c.a.createElement("div",{className:e},c.a.createElement("img",{src:t.photoPath,className:"photo-display",alt:"Displayed",onClick:function(){return t.onClick()}}))},w=[{img:"https://live.staticflickr.com/65535/48920271631_5423886c56_o.jpg",thumb:"https://live.staticflickr.com/65535/48920271631_4a66857810_w.jpg",title:"Twin Peaks Sunrise",cols:2},{img:"https://live.staticflickr.com/65535/48920271946_c4de93344d_o.jpg",thumb:"https://live.staticflickr.com/65535/48920271946_af2b1aeb16_w.jpg",title:"Runner Silhouettes",cols:1},{img:"https://live.staticflickr.com/65535/48920271916_5ac25ac08b_o.jpg",thumb:"https://live.staticflickr.com/65535/48920271916_f07cd6af4d_w.jpg",title:"Blue Harbor Portrait",cols:1},{img:"https://live.staticflickr.com/65535/48920477312_c116bb4606_o.jpg",thumb:"https://live.staticflickr.com/65535/48920477312_0805e0daf5_w.jpg",title:"Crissy Field Sunrise",cols:2},{img:"https://live.staticflickr.com/65535/48920477442_9a33eefd7d_o.jpg",thumb:"https://live.staticflickr.com/65535/48920477442_75c0bef927_w.jpg",title:"The Killer (1989)",cols:2},{img:"https://live.staticflickr.com/65535/48919737288_9cf0b4eda3_o.jpg",thumb:"https://live.staticflickr.com/65535/48919737288_2860fb7174_w.jpg",title:"Zion River",cols:1},{img:"https://live.staticflickr.com/65535/48920272321_34dfef7489_o.jpg",thumb:"https://live.staticflickr.com/65535/48920272321_9ccd03f53c_w.jpg",title:"S4 Zion",cols:1},{img:"https://live.staticflickr.com/65535/48919737343_bba844d812_o.jpg",thumb:"https://live.staticflickr.com/65535/48919737343_f42a9dec64_w.jpg",title:"Zion Peak Sunset",cols:2},{img:"https://live.staticflickr.com/65535/48920478077_aab12f170c_o.jpg",thumb:"https://live.staticflickr.com/65535/48920478077_35e850ae0a_w.jpg",title:"Blue Dunes",cols:1},{img:"https://live.staticflickr.com/65535/48920272811_8452a6db45_o.jpg",thumb:"https://live.staticflickr.com/65535/48920272811_aefeb6eee5_w.jpg",title:"Windswept Sand",cols:1},{img:"https://live.staticflickr.com/65535/48920272956_ccedbe3efa_o.jpg",thumb:"https://live.staticflickr.com/65535/48920272956_978d66fb89_w.jpg",title:"Sand Ridge Glow",cols:1},{img:"https://live.staticflickr.com/65535/48919738163_535782b80a_o.jpg",thumb:"https://live.staticflickr.com/65535/48919738163_5d13bf9733_w.jpg",title:"Sand Dune Moonrise",cols:2}],E=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(r.a)(this,Object(m.a)(e).call(this,t))).state={photos:w,selectedPhoto:"",isFullScreen:!1,isMenuOpen:!1},a}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({selectedPhoto:this.state.photos[0].img})}},{key:"handleTileClick",value:function(t){this.setState({selectedPhoto:t})}},{key:"handlePhotoClick",value:function(){this.setState(function(t){return{isFullScreen:!t.isFullScreen}})}},{key:"handleMenuClick",value:function(){this.setState(function(t){return{isMenuOpen:!t.isMenuOpen}})}},{key:"render",value:function(){var t=this,e=this.state.isFullScreen?"show":"";return c.a.createElement("div",null,c.a.createElement("div",{className:"app-container"},c.a.createElement(u,{onClick:function(){return t.handleMenuClick()}}),c.a.createElement(p,{isOpen:this.state.isMenuOpen}),c.a.createElement(_,{tileData:w,selectedTile:this.state.selectedPhoto,onClick:function(e){return t.handleTileClick(e)}}),c.a.createElement(b,{photoPath:this.state.selectedPhoto,isFullScreen:this.state.isFullScreen,onClick:function(){return t.handlePhotoClick()}})),c.a.createElement("div",{id:"photo-display-overlay",className:e}))}}]),e}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.0aa9698b.chunk.js.map