(this["webpackJsonpnewser-app"]=this["webpackJsonpnewser-app"]||[]).push([[0],{23:function(e,t,c){},4:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(13),r=c.n(s),l=(c(23),c(14)),i=c(15),o=c(18),j=c(17),d=c(16),u=c.n(d),h=(c(4),c(0)),b=function(e){var t=e.Title,c=e.content,n=e.img,a=e.date,s=e.author;return Object(h.jsx)("div",{className:"container-fluid d-flex justify-content-center",children:Object(h.jsx)("section",{id:"gallery",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row ",children:Object(h.jsx)("div",{className:"col-sm-7 mb-4",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{src:n,alt:"",className:"card-img-top"}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:t}),Object(h.jsx)("p",{className:"card-text",children:c}),Object(h.jsx)("a",{href:"ss",className:"btn btn-outline-success btn-sm",children:"Add reading list"}),Object(h.jsx)("p",{className:"card-text",children:Object(h.jsxs)("small",{className:"text-muted",children:[Object(h.jsx)("i",{className:"far fa-user"}),s,Object(h.jsx)("i",{className:"fas fa-calendar-alt"}),a]})})]})]})})})})})})},f=function(){return Object(h.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(h.jsx)("a",{className:"navbar-brand",href:"ff",children:"Newser \ud83d\udccc\ud83d\udcac"})})},m=function(){return Object(h.jsxs)("section",{id:"header",className:"jumbotron text-center",children:[Object(h.jsx)("h1",{className:"display-3",children:"NEWSER"}),Object(h.jsx)("p",{className:"lead",children:"All the things you need.."})]})},x="c36e8106f98b4822995d69462af3957e",O="http://newsapi.org/v2/everything",g="popularity",p="2021 - 02 - 18",v=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={query:"",results:[]},e.getInfo=function(){u.a.get("".concat(O,"?")+"q=".concat(e.state.query,"&")+"from=".concat(p,"&")+"sortBy=".concat(g,"&")+"apiKey=".concat(x)).then((function(t){var c=t.data;e.setState({results:c.articles})}))},e.handleInputChange=function(t){null!==e.search.value&&e.setState({query:e.search.value},(function(){e.state.query&&e.state.query.length>1&&e.state.query.length%3===0&&e.getInfo()}))},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{}),Object(h.jsx)(m,{}),Object(h.jsx)("form",{className:"container ",children:Object(h.jsx)("div",{className:"row d-flex  justify-content-center  ",children:Object(h.jsx)("input",{type:"search",placeholder:"Search News..",className:"form-control   form-control-lg  align-self-center w-50",ref:function(t){return e.search=t},onKeyPress:this.handleInputChange})})}),Object(h.jsx)("br",{}),this.state.results.map((function(e){return Object(h.jsx)(b,{Title:e.title,content:e.content,img:e.urlToImage,author:e.author,date:e.publishedAt},e.url)}))]})}}]),c}(n.Component),N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};c(43);r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),N()}},[[44,1,2]]]);
//# sourceMappingURL=main.687488fc.chunk.js.map