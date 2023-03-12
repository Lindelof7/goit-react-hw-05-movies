"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[509],{509:function(e,i,a){a.r(i),a.d(i,{default:function(){return u}});var t=a(439),n=a(791),r=a(87),s=a(689),l=a(643),o=a(44),c={movieDetailsWrap:"MovieDetails_movieDetailsWrap__yRtKz",genresList:"MovieDetails_genresList__iljfW",movieDetailsTextWrap:"MovieDetails_movieDetailsTextWrap__2x0jN",addInfo:"MovieDetails_addInfo__xdErv",addInfoWrap:"MovieDetails_addInfoWrap__+v9Ta",goBackBtn:"MovieDetails_goBackBtn__EIQ+S"},d=a(184),u=function(){var e,i=(0,s.UO)().movieId,a=(0,n.useState)(null),u=(0,t.Z)(a,2),f=u[0],v=u[1],h=(0,s.TH)(),m=(0,n.useState)(null),p=(0,t.Z)(m,2),j=p[0],x=p[1];(0,n.useEffect)((function(){var e,i;if(!j){var a=null!==(e=null===(i=h.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/";x(a)}}),[j,null===(e=h.state)||void 0===e?void 0:e.from]),(0,n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(i,"?api_key=c3f95f745a9082077133badef3071055&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Please provide valid search value"))})).then((function(e){D(e),v(e.genres)}))}),[i]);var _=(0,n.useState)({}),g=(0,t.Z)(_,2),k=g[0],D=g[1];return f?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:c.goBackBtn,children:(0,d.jsx)(r.rU,{to:j,children:"Go back"})}),(0,d.jsxs)("div",{className:c.movieDetailsWrap,children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(k.poster_path),className:c.img,alt:"123",width:"270px"}),(0,d.jsxs)("div",{className:c.movieDetailsTextWrap,children:[(0,d.jsx)("h1",{children:k.original_title}),(0,d.jsxs)("p",{children:["User score: ",Math.round(10*k.vote_average),"%"]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:k.overview}),(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("ul",{className:c.genresList,children:f.map((function(e){return(0,d.jsx)("li",{children:e.name},(0,o.ZP)())}))})]})]}),(0,d.jsxs)("div",{className:c.addInfoWrap,children:[(0,d.jsx)("p",{className:c.addInfo,children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(r.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(r.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,d.jsx)(n.Suspense,{fallback:(0,d.jsx)(l.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"loading"}),children:(0,d.jsx)(s.j3,{})})]}):null}},44:function(e,i,a){function t(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var n=t(a(791)),r="id",s=0;function l(e){return s++,"".concat(e||r).concat(s)}var o=function(e,i){for(var a=[],t=0;t<e;t++)a.push(l(i));return a};function c(e){var i=n.default.useRef();return n.default.useEffect((function(){i.current=e})),i.current}i.ZP=l}}]);
//# sourceMappingURL=509.91a4837d.chunk.js.map