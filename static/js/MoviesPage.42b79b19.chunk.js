(self.webpackChunkmovies_finder=self.webpackChunkmovies_finder||[]).push([[410],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3269:function(e,t,r){var n=r(379);e.exports=function(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}},e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3884:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},3038:function(e,t,r){var n=r(2858),o=r(3884),a=r(379),i=r(521);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},288:function(e,t,r){"use strict";r.d(t,{$7:function(){return l},Hx:function(){return s},Tg:function(){return i},Y5:function(){return c},uV:function(){return u}});var n=r(4569),o=r.n(n)().create({baseURL:"https://api.themoviedb.org/3/"}),a="9eaa0de4edff59e756e1f2cf3f96cfd3",i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o.get("trending/all/week?api_key=".concat(a,"&page=").concat(e)).then((function(e){return e.data}))},c=function(e){return o.get("/movie/".concat(e,"?api_key=").concat(a)).then((function(e){return e.data}))},u=function(e){return o.get("/movie/".concat(e,"/credits?api_key=").concat(a)).then((function(e){return e.data}))},s=function(e){return o.get("/movie/".concat(e,"/reviews?api_key=").concat(a)).then((function(e){return e.data}))},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o.get("/search/movie?api_key=".concat(a,"&query=").concat(e,"&page=").concat(t)).then((function(e){return e.data}))}},332:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n="Button_button__JBBzO",o=r(184),a=function(e){var t=e.action,r=e.label;return(0,o.jsx)("button",{onClick:t,className:n,type:"button",children:r})}},6149:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(1523),o=r(8931),a=r(6249),i={moviesList:"MoviesList_moviesList__uT7h1",moviesItem:"MoviesList_moviesItem__weBRa",moviesImage:"MoviesList_moviesImage__WYKNk",movieTitle:"MoviesList_movieTitle__JTMke"},c=r(184),u=(0,o.EN)((function(e){var t=e.movies,r=e.location;return(0,c.jsx)("ul",{className:i.moviesList,children:t.map((function(e){return(0,c.jsx)("li",{className:i.moviesItem,children:(0,c.jsxs)(n.rU,{to:{pathname:a.Z.movies+e.id,state:{from:r}},className:i.moviesLink,children:[(0,c.jsx)("div",{className:i.moviesImage,children:(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:""})}),(0,c.jsx)("p",{className:i.movieTitle,children:e.title})]})},e.id)}))})}))},6346:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var n=r(5785);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=r(5671),u=r(3144),s=r(136),l=r(5716),f=r(2791),p=r(5264),m=r(288),d=r(332),y=r(7825),v=r(6149),h="SearchForm_searchForm__pVF7e",g="SearchForm_searchFormButton__xlXPA",b="SearchForm_searchFormButtonLabel__P6f6V",x="SearchForm_searchFormInput__f42FB",j=r(184),_=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,c.Z)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={currentSearchQuery:""},e.onSearchInputChange=function(t){e.setState({currentSearchQuery:t.target.value})},e.onSubmitForm=function(t){t.preventDefault();var r=e.state.currentSearchQuery;r&&e.props.onSubmit(r),e.setState({currentSearchQuery:""})},e}return(0,u.Z)(r,[{key:"render",value:function(){return(0,j.jsxs)("form",{className:h,onSubmit:this.onSubmitForm,children:[(0,j.jsx)("input",{className:x,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie by keyword",value:this.state.currentSearchQuery,onChange:this.onSearchInputChange}),(0,j.jsx)("button",{type:"submit",className:g,children:(0,j.jsx)("span",{className:b,children:"Search"})})]})}}]),r}(f.Component),S=_,k={moviesPageTitle:"MoviesPage_moviesPageTitle__ptgMc"},O=r(4245),F=function(e){return O.parse(e)},w=function(e){(0,s.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,c.Z)(this,r);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).state={searchQuery:"",page:1,movies:[],isLoading:!1},e.handleSumbitForm=function(t){e.setState({searchQuery:t,movies:[],page:1}),e.props.history.push(i(i({},e.props.location),{},{search:"query=".concat(t)}))},e.setMoviesBySearchQuery=function(){var t=e.state.page,r=F(e.props.location.search).query;e.setState({isLoading:!0}),(0,m.$7)(r,t).then((function(t){var r=t.results,o=[];r.length>0?r.forEach((function(e){e.title&&e.poster_path&&o.push(e)})):p.Notify.failure("There are no more movies by ".concat(e.state.searchQuery," request!")),e.setState((function(e){return{movies:[].concat((0,n.Z)(e.movies),o),page:e.page+1}}))})).catch(console.log).finally((function(){return e.setState({isLoading:!1})}))},e}return(0,u.Z)(r,[{key:"componentDidMount",value:function(){F(this.props.location.search).query&&this.setMoviesBySearchQuery()}},{key:"componentDidUpdate",value:function(e){F(e.location.search).query!==F(this.props.location.search).query&&this.setMoviesBySearchQuery()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,r=e.movies;return(0,j.jsx)("div",{className:k.moviesPage,children:(0,j.jsxs)("div",{className:"container",children:[(0,j.jsx)("h1",{className:k.moviesPageTitle,children:"Find movies"}),(0,j.jsx)(S,{onSubmit:this.handleSumbitForm}),r.length>0&&(0,j.jsx)(v.Z,{movies:r}),t&&(0,j.jsx)(y.Z,{}),r.length>0&&!t&&(0,j.jsx)(d.Z,{action:this.setMoviesBySearchQuery,label:"LOAD MORE"})]})})}}]),r}(f.Component),I=w},9412:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(e)}r["%C2"]="\ufffd";for(var c=Object.keys(r),u=0;u<c.length;u++){var s=c[u];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},2683:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],c=e[i];(o?-1!==t.indexOf(i):t(i,c,e))&&(r[i]=c)}return r}},4245:function(e,t,r){"use strict";var n=r(9713).default,o=r(3038).default,a=r(3269).default,i=r(319).default,c=r(499),u=r(9412),s=r(845),l=r(2683),f=Symbol("encodeFragmentIdentifier");function p(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function d(e,t){return t.decode?u(e):e}function y(e){return Array.isArray(e)?e.sort():"object"===typeof e?y(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function v(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function h(e){var t=(e=v(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function g(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function b(e,t){p((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return function(e,r,n){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var o="string"===typeof r&&r.includes(e.arrayFormatSeparator),a="string"===typeof r&&!o&&d(r,e).includes(e.arrayFormatSeparator);r=a?d(r,e):r;var i=o||a?r.split(e.arrayFormatSeparator).map((function(t){return d(t,e)})):null===r?r:d(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return d(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a}else n[t]=r?d(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!==typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var i,c=a(e.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value;if(""!==u){var l=s(t.decode?u.replace(/\+/g," "):u,"="),f=o(l,2),m=f[0],v=f[1];v=void 0===v?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?v:d(v,t),r(d(m,t),v,n)}}}catch(O){c.e(O)}finally{c.f()}for(var h=0,b=Object.keys(n);h<b.length;h++){var x=b[h],j=n[x];if("object"===typeof j&&null!==j)for(var _=0,S=Object.keys(j);_<S.length;_++){var k=S[_];j[k]=g(j[k],t)}else n[x]=g(j,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"===typeof r&&!Array.isArray(r)?e[t]=y(r):e[t]=r,e}),Object.create(null))}t.extract=h,t.parse=b,t.stringify=function(e,t){if(!e)return"";p((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&(null===(n=e[r])||void 0===n)||t.skipEmptyString&&""===e[r];var n},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[m(t,e),"[",o,"]"].join("")]:[[m(t,e),"[",m(o,e),"]=",m(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[m(t,e),"[]"].join("")]:[[m(t,e),"[]=",m(n,e)].join("")])}};case"colon-list-separator":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[m(t,e),":list="].join("")]:[[m(t,e),":list=",m(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(r,e),t,m(o,e)].join("")]:[[n,m(o,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[m(t,e)]:[[m(t,e),"=",m(n,e)].join("")])}}}}(t),o={},a=0,c=Object.keys(e);a<c.length;a++){var u=c[a];r(u)||(o[u]=e[u])}var s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((function(r){var o=e[r];return void 0===o?"":null===o?m(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?m(r,t)+"[]":o.reduce(n(r),[]).join("&"):m(r,t)+"="+m(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=s(e,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:b(h(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:d(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},f,!0),r);var o=v(e.url).split("?")[0]||"",a=t.extract(e.url),i=t.parse(a,{sort:!1}),c=Object.assign(i,e.query),u=t.stringify(c,r);u&&(u="?".concat(u));var s=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(r[f]?m(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(o).concat(u).concat(s)},t.pick=function(e,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},f,!1),o);var a=t.parseUrl(e,o),i=a.url,c=a.query,u=a.fragmentIdentifier;return t.stringifyUrl({url:i,query:l(c,r),fragmentIdentifier:u},o)},t.exclude=function(e,r,n){var o=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,o,n)}},845:function(e){"use strict";e.exports=function(e,t){if("string"!==typeof e||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},499:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}}}]);
//# sourceMappingURL=MoviesPage.42b79b19.chunk.js.map