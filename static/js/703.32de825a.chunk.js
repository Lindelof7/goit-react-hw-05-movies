"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[703],{703:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(439),r=n(791),i=n(313),s=n(87),o=n(689),c={inputBtn:"Movies_inputBtn__c16TS",input:"Movies_input__OE3ef",inputWrap:"Movies_inputWrap__GJZmZ",searchIcon:"Movies_searchIcon__7+8KY",MovieItem:"Movies_MovieItem__vewvu"},u=n(184),l=function(){var e=(0,s.lr)(),t=(0,a.Z)(e,2),n=t[0],l=t[1],p=(0,r.useState)(n.get("query")),m=(0,a.Z)(p,2),h=m[0],v=m[1],f=(0,r.useState)([]),_=(0,a.Z)(f,2),d=_[0],j=_[1],k=(0,o.TH)(),x=function(){fetch("\nhttps://api.themoviedb.org/3/search/movie?api_key=c3f95f745a9082077133badef3071055&language=en-US&query=".concat(h)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Please provide valid search value"))})).then((function(e){j(e.results)}))};if(d)return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("form",{className:c.inputWrap,children:[(0,u.jsx)("input",{type:"text",placeholder:"Please write movie name",className:c.input,onChange:function(e){v(e.target.value.trim().toLowerCase())}}),(0,u.jsx)("button",{className:c.inputBtn,type:"submit",onClick:function(e){e.preventDefault(),l({query:h}),x()},children:(0,u.jsx)(i.jRj,{className:c.searchIcon})})]}),(0,u.jsx)("ul",{className:c.MovieList,children:d.map((function(e){var t=e.title,n=e.id;return(0,u.jsx)("li",{children:(0,u.jsxs)(s.rU,{state:{from:k},className:c.MovieItem,to:"/".concat(n),children:[t," "]})},n)}))})]})}}}]);
//# sourceMappingURL=703.32de825a.chunk.js.map