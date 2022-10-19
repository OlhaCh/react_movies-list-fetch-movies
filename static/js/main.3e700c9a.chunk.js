(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},21:function(e,t,i){},22:function(e,t,i){"use strict";i.r(t);var c=i(7),n=i.n(c),s=(i(15),i(10)),a=i(2),r=i(1),l=(i(16),i(17),i(18),i(0)),d=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:null===t||void 0===t?void 0:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:null===t||void 0===t?void 0:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[null===t||void 0===t?void 0:t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:null===t||void 0===t?void 0:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(d,{movie:e},e.imdbId)}))})},j=i(8),m=i(6),b=i.n(m),u=i(9),v=i.n(u);function h(e){return fetch("".concat("https://www.omdbapi.com/?apikey=d72b83c4","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}i(21);var O=function(e){var t=e.onAdd,i=e.movies,c=Object(r.useState)(""),n=Object(a.a)(c,2),s=n[0],o=n[1],m=Object(r.useState)(null),u=Object(a.a)(m,2),O=u[0],x=u[1],f=Object(r.useState)(!1),p=Object(a.a)(f,2),N=p[0],g=p[1],y=Object(r.useState)(!1),w=Object(a.a)(y,2),I=w[0],k=w[1],C=function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(s);case 2:"Error"in(t=e.sent)?(g(!0),x(null)):x({title:t.Title,description:t.Plot,imgUrl:"N/A"!==t.Poster?t.Poster:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbUrl:"https://www.imdb.com/title/".concat(t.imdbID),imdbId:t.imdbID});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{value:s,"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",onChange:function(e){o(e.target.value),g(!1)}})}),N&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{disabled:0===s.trim().length,"data-cy":"searchButton",type:"submit",className:v()("button is-light",{"is-loading":I}),onClick:function(e){e.preventDefault(),k(!0),C().finally((function(){return k(!1)}))},children:"Find a movie"})}),O&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){var e;e=O,i.find((function(t){return t.imdbId===e.imdbId}))||t(e),x(null),o("")},children:"Add to the list"})})]})]}),O&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(d,{movie:O})]})]})},x=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),i=t[0],c=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(O,{onAdd:function(e){c((function(t){return[].concat(Object(s.a)(t),[e])}))},movies:i})})]})};n.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3e700c9a.chunk.js.map