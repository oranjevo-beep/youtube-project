(this.webpackJsonpvideo=this.webpackJsonpvideo||[]).push([[0],{47:function(e,t,i){},48:function(e,t,i){"use strict";i.r(t);var c=i(2),n=i(18),r=i.n(n),s=i(9),a=i.n(s),o=i(19),d=i(3),l=i(4),u=i(6),m=i(5),j=(i(26),i(0)),v=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(d.a)(this,i);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={term:""},e.onSubm=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"search-bar ui segment",children:Object(j.jsx)("form",{onSubmit:this.onSubm,className:"ui form",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Video Search"}),Object(j.jsx)("input",{type:"text",value:this.state.term,onChange:function(t){e.setState({term:t.target.value})},placeholder:"Search..."})]})})})}}]),i}(c.Component),b=i(20),p=i.n(b).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:5,key:"AIzaSyAZg_L0uDpcKyOkTRp2wCNdqWGBSO3eEkk"}});i(47);var h=function(e){var t=e.video,i=e.onVideoSelect;return Object(j.jsxs)("div",{onClick:function(){return i(t)},className:"video-item item",children:[Object(j.jsx)("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("div",{className:"header",children:t.snippet.title})})]})},O=function(e){var t=e.videos,i=e.onVideoSelect,c=t.map((function(e){return Object(j.jsx)(h,{onVideoSelect:i,video:e},e.id.videoId)}));return Object(j.jsx)("div",{className:"ui relaxed divided list",children:c})};var x=function(e){var t=e.video;if(!t)return Object(j.jsx)("div",{children:"Loading..."});var i="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"ui embed",children:Object(j.jsx)("iframe",{width:"560",height:"315",src:i,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Object(j.jsxs)("div",{className:"ui segment",children:[Object(j.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(j.jsx)("p",{children:t.snippet.description})]})]})},f=function(e){Object(u.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(d.a)(this,i);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(o.a)(a.a.mark((function t(i){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/search",{params:{q:i}});case 2:c=t.sent,e.setState({videos:c.data.items,selectedVideo:c.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.onTermSubmit("cars")}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"ui container",children:[Object(j.jsx)(v,{onFormSubmit:this.onTermSubmit}),Object(j.jsx)("div",{className:"ui grid",children:Object(j.jsxs)("div",{className:"ui row",children:[Object(j.jsx)("div",{className:"eleven wide column",children:Object(j.jsx)(x,{video:this.state.selectedVideo})}),Object(j.jsx)("div",{className:"five wide column",children:Object(j.jsx)(O,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})})]})})]})}}]),i}(c.Component);r.a.render(Object(j.jsx)(f,{}),document.querySelector("#root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.f5a0804d.chunk.js.map