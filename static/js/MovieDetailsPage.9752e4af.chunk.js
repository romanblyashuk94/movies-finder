"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[971],{288:function(e,i,t){t.d(i,{$7:function(){return v},Hx:function(){return c},Tg:function(){return o},Y5:function(){return r},uV:function(){return l}});var a=t(4569),n=t.n(a)().create({baseURL:"https://api.themoviedb.org/3/"}),s="9eaa0de4edff59e756e1f2cf3f96cfd3",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return n.get("trending/all/week?api_key=".concat(s,"&page=").concat(e)).then((function(e){return e.data}))},r=function(e){return n.get("/movie/".concat(e,"?api_key=").concat(s)).then((function(e){return e.data}))},l=function(e){return n.get("/movie/".concat(e,"/credits?api_key=").concat(s)).then((function(e){return e.data}))},c=function(e){return n.get("/movie/".concat(e,"/reviews?api_key=").concat(s)).then((function(e){return e.data}))},v=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return n.get("/search/movie?api_key=".concat(s,"&query=").concat(e,"&page=").concat(i)).then((function(e){return e.data}))}},903:function(e,i,t){t.r(i),t.d(i,{default:function(){return C}});var a=t(5671),n=t(3144),s=t(136),o=t(5716),r={movieDetailsPage:"MovieDetailsPage_movieDetailsPage__2VMyt",movieDetailsContent:"MovieDetailsPage_movieDetailsContent__ovgPN",movieMainInfo:"MovieDetailsPage_movieMainInfo__XDuAk",moviePoster:"MovieDetailsPage_moviePoster__JMfIf",movieDescription:"MovieDetailsPage_movieDescription__bSNk2",movieTitle:"MovieDetailsPage_movieTitle__WiTtu",movieInfoField:"MovieDetailsPage_movieInfoField__tsvZO",movieInfoFieldTitle:"MovieDetailsPage_movieInfoFieldTitle__cvjJU",movieOverview:"MovieDetailsPage_movieOverview__pGRlO",OverviewTitle:"MovieDetailsPage_OverviewTitle__KChNE",overviewText:"MovieDetailsPage_overviewText__FJ3Jt",movieAdditionalInfo:"MovieDetailsPage_movieAdditionalInfo__8yDTS",movieAdditionalInfoLinks:"MovieDetailsPage_movieAdditionalInfoLinks__oKSfM",movieAdditionalInfoTitle:"MovieDetailsPage_movieAdditionalInfoTitle__mgNHg",linksList:"MovieDetailsPage_linksList__S+LSf",movieAdditionalInfoLink:"MovieDetailsPage_movieAdditionalInfoLink__mkLsy",backBtn:"MovieDetailsPage_backBtn__da1x3",movieAdditionalContent:"MovieDetailsPage_movieAdditionalContent__6C6TQ"},l=t(2791),c=t(288),v=t(7825),m=t(1523),d=t(8931),h="Cast_cast__uOYKn",u="CastItem_castItem__wo+5-",_="CastItem_actorImage__yIiUB",f="CastItem_actorName__h2MjF",p="CastItem_actorRole__kL+MD",g=t(184),w=function(e){var i=e.actor;return(0,g.jsxs)("li",{className:u,children:[(0,g.jsx)("div",{className:_,children:(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+i.profile_path,alt:""})}),(0,g.jsx)("p",{className:f,children:i.name}),(0,g.jsx)("p",{className:p,children:i.character})]})},x=function(e){(0,s.Z)(t,e);var i=(0,o.Z)(t);function t(){var e;(0,a.Z)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=i.call.apply(i,[this].concat(s))).state={castActors:[]},e.setCastActors=function(i){var t=[];i.forEach((function(e){e.profile_path&&t.push(e)})),e.setState({castActors:[].concat(t)})},e}return(0,n.Z)(t,[{key:"componentDidMount",value:function(){var e=this;(0,c.uV)(this.props.match.params.movieID).then((function(i){var t=i.cast;return e.setCastActors(t)}))}},{key:"render",value:function(){var e=this.state.castActors;return 0===e.length?(0,g.jsx)(v.Z,{}):(0,g.jsx)("ul",{className:h,children:e.map((function(e){return(0,g.jsx)(w,{actor:e},e.id)}))})}}]),t}(l.Component),j=x,N=t(5785),I={noRewiesMessage:"Reviews_noRewiesMessage__vqP8L"},k={reviewsItem:"ReviewsItem_reviewsItem__g35R+",reviewHeader:"ReviewsItem_reviewHeader__w2Nlv",reviewHeaderTitle:"ReviewsItem_reviewHeaderTitle__+drsd",reviewAuthorName:"ReviewsItem_reviewAuthorName__0Tk5u",reviewDateNumber:"ReviewsItem_reviewDateNumber__dJu6g",reviewContent:"ReviewsItem_reviewContent__rQtIg"},D=function(e){var i=e.review;return(0,g.jsxs)("li",{className:k.reviewsItem,children:[(0,g.jsxs)("div",{className:k.reviewHeader,children:[(0,g.jsxs)("span",{className:k.reviewAuthor,children:[(0,g.jsx)("span",{className:k.reviewHeaderTitle,children:"Author: "}),(0,g.jsx)("span",{className:k.reviewAuthorName,children:i.author})]}),(0,g.jsxs)("span",{className:k.reviewDate,children:[(0,g.jsx)("span",{className:k.reviewHeaderTitle,children:"Date: "}),(0,g.jsx)("span",{className:k.reviewDateNumber,children:i.created_at.slice(0,10)})]})]}),(0,g.jsx)("div",{className:k.reviewContent,children:i.content})]})},A=function(e){(0,s.Z)(t,e);var i=(0,o.Z)(t);function t(){var e;(0,a.Z)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=i.call.apply(i,[this].concat(s))).state={reviews:[],isLoading:!0},e}return(0,n.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),(0,c.Hx)(this.props.match.params.movieID).then((function(i){var t=i.results;return e.setState({reviews:(0,N.Z)(t)})})).catch(console.log).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,i=e.isLoading,t=e.reviews;return i?(0,g.jsx)(v.Z,{}):0!==t.length||i?(0,g.jsx)("ul",{className:I.reviews,children:t.map((function(e){return(0,g.jsx)(D,{review:e},e.id)}))}):(0,g.jsx)("div",{className:I.noRewiesMessage,children:"There is no reviews!"})}}]),t}(l.Component),M=A,T=t(6249),y=function(e){(0,s.Z)(t,e);var i=(0,o.Z)(t);function t(){var e;(0,a.Z)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=i.call.apply(i,[this].concat(s))).state={movieDetails:null,isLoading:!0},e.goBack=function(){var i,t;e.props.history.push((null===(i=e.props.location)||void 0===i||null===(t=i.state)||void 0===t?void 0:t.from)||"/movies")},e}return(0,n.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0});var i=this.props.match.params.movieID;(0,c.Y5)(i).then((function(i){return e.setState({movieDetails:i})})).catch(console.log).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e,i,t,a;if(this.state.isLoading)return(0,g.jsx)(v.Z,{});var n=this.state.movieDetails,s=n.backdrop_path,o=n.poster_path,l=n.original_title,c=n.release_date,h=n.vote_average,u=n.genres,_=n.homepage,f=n.overview;return(0,g.jsx)("div",{className:r.movieDetailsPage,style:{backgroundColor:"rgba(255, 255, 255, 0.342)",background:"url(https://image.tmdb.org/t/p/original".concat(s,")"),backgroundSize:"cover",backgroundAttachment:"fixed"},children:(0,g.jsx)("div",{className:"container",children:(0,g.jsxs)("div",{className:r.movieDetailsContent,children:[(0,g.jsxs)("button",{className:r.backBtn,onClick:this.goBack,children:["Back"," "]}),(0,g.jsxs)("div",{className:r.movieMainInfo,children:[(0,g.jsx)("div",{className:r.moviePoster,children:(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(o),alt:""})}),(0,g.jsxs)("div",{className:r.movieDescription,children:[(0,g.jsx)("h2",{className:r.movieTitle,children:l}),(0,g.jsxs)("p",{className:r.movieInfoField,children:[(0,g.jsx)("span",{className:r.movieInfoFieldTitle,children:"Release date:"})," ",c]}),(0,g.jsxs)("p",{className:r.movieInfoField,children:[(0,g.jsx)("span",{className:r.movieInfoFieldTitle,children:"Rating:"})," ",10*h,"%"]}),(0,g.jsxs)("div",{className:r.movieInfoField,children:[(0,g.jsx)("div",{className:r.movieInfoFieldTitle,children:"Ganres:"}),u.map((function(e){return e.name+" "}))]}),(0,g.jsxs)("div",{className:r.movieInfoField,children:[(0,g.jsx)("div",{className:r.movieInfoFieldTitle,children:"Homepage:"}),(0,g.jsx)("a",{target:"_blank",href:_,rel:"noreferrer",children:_})]}),(0,g.jsxs)("div",{className:r.movieOverview,children:[(0,g.jsx)("h3",{className:r.OverviewTitle,children:"Overview:"}),(0,g.jsx)("p",{className:r.overviewText,children:f})]})]})]}),(0,g.jsxs)("div",{className:r.movieAdditionalInfoLinks,children:[(0,g.jsx)("h3",{className:r.movieAdditionalInfoTitle,children:"Additional information:"}),(0,g.jsxs)("ul",{className:r.linksList,children:[(0,g.jsx)("li",{className:r.linksItem,children:(0,g.jsx)(m.OL,{className:r.movieAdditionalInfoLink,to:{pathname:this.props.match.url+T.Z.cast,state:{from:null===(e=this.props.location)||void 0===e||null===(i=e.state)||void 0===i?void 0:i.from}},children:"Cast"})}),(0,g.jsx)("li",{className:r.linksItem,children:(0,g.jsx)(m.OL,{className:r.movieAdditionalInfoLink,to:{pathname:this.props.match.url+T.Z.reviews,state:{from:null===(t=this.props.location)||void 0===t||null===(a=t.state)||void 0===a?void 0:a.from}},children:"Reviews"})})]})]}),(0,g.jsxs)("div",{className:r.movieAdditionalContent,children:[(0,g.jsx)(d.AW,{path:this.props.match.path+T.Z.cast,component:j}),(0,g.jsx)(d.AW,{path:this.props.match.path+T.Z.reviews,component:M})]})]})})})}}]),t}(l.Component),C=y}}]);
//# sourceMappingURL=MovieDetailsPage.9752e4af.chunk.js.map