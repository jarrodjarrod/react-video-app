(this.webpackJsonpvideos=this.webpackJsonpvideos||[]).push([[0],{42:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i(15),n=i.n(s),a=i(3),r=i(0),d=function(e){var t=e.onTermSubmit,i=Object(c.useState)(""),s=Object(a.a)(i,2),n=s[0],d=s[1];return Object(r.jsx)("div",{className:"search-bar ui segment",children:Object(r.jsx)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),t(n)},children:Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{children:"Video search"}),Object(r.jsx)("input",{type:"text",value:n,onChange:function(e){return d(e.target.value)}})]})})})},o=i(16),l=i.n(o).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResult:5,key:"AIzaSyDwxUWu51j9FPrMmrDh8MtW-9zlH7nYpkU",type:"video"}}),u=(i(42),function(e){var t=e.video,i=e.onVideoSelect;return Object(r.jsxs)("div",{onClick:function(){return i(t)},className:"video-item item",children:[Object(r.jsx)("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url}),Object(r.jsx)("div",{className:"content",children:Object(r.jsx)("div",{className:"header",children:t.snippet.title})})]})}),j=function(e){return Object(r.jsx)("div",{className:"ui active inline text loader",children:e.loadMsg})};j.defaultProps={loadMsg:"Loading..."};var b=j,v=function(e){var t=e.videos,i=e.onVideoSelect,c=t.map((function(e){return Object(r.jsx)(u,{onVideoSelect:i,video:e},e.id.videoId)}));return Object(r.jsx)("div",{className:"ui relaxed divided list",children:c})},m=function(e){var t=e.video;if(!t)return Object(r.jsx)(b,{});var i="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{title:"Video Player",className:"ui embed",children:Object(r.jsx)("iframe",{src:i,allow:"fullscreen"})}),Object(r.jsxs)("div",{className:"ui segment",children:[Object(r.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(r.jsx)("p",{children:t.snippet.description})]})]})},p=i(6),h=i.n(p),O=i(17),x=function(e){var t=Object(c.useState)([]),i=Object(a.a)(t,2),s=i[0],n=i[1];Object(c.useEffect)((function(){r(e)}),[e]);var r=function(){var e=Object(O.a)(h.a.mark((function e(t){var i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("/search",{params:{q:t}});case 2:i=e.sent,n(i.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{videos:s,search:r}},f=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),i=t[0],s=t[1],n=x("hot ones"),o=n.videos,l=n.search;return Object(c.useEffect)((function(){s(o[0])}),[o]),Object(r.jsxs)("div",{className:"ui container",style:{marginTop:"10px"},children:[Object(r.jsx)(d,{onTermSubmit:l}),Object(r.jsx)("div",{className:"ui grid",children:Object(r.jsxs)("div",{className:"ui row",children:[Object(r.jsx)("div",{className:"eleven wide column",children:Object(r.jsx)(m,{video:i})}),Object(r.jsx)("div",{className:"five wide column",children:Object(r.jsx)(v,{onVideoSelect:s,videos:o})})]})})]})};n.a.render(Object(r.jsx)(f,{}),document.querySelector("#root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.983352e9.chunk.js.map