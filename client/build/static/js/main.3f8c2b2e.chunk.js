(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(81),l=t.n(c),s=t(6),o=t(13),i=t(16),m=t(89),u=(t(96),t(12)),d=t(82),p=t(83),v=t(59),E=t.n(v),b=new(function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,[{key:"getProfile",value:function(){return E()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return E()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),f=t(90),g=t(15),h=function(e,a){switch(a.type){case"TOGGLE_NAV":return Object(g.a)(Object(g.a)({},e),{},{navActive:!e.navActive});case"CURRENT_USER":return Object(g.a)(Object(g.a)({},e),{},{loggedinUser:a.loggedinUser});case"FEED_TOGGLE":return Object(g.a)(Object(g.a)({},e),{},{feedToggle:a.feedToggle});default:return e}};var N=Object(n.createContext)(),w=N.Provider,y=function(e){e.value;var a,t=Object(f.a)(e,["value"]),c=(a={feedToggle:"",logedinUser:"",navActive:!1},Object(n.useReducer)(h,a)),l=Object(u.a)(c,2),s=l[0],o=l[1];return console.log(s),r.a.createElement(w,Object.assign({value:[s,o]},t))},x=t(26),j=t(14),O=t.n(j);function k(){var e=Object(x.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      followerCount\n      followers {\n        _id\n        username\n      }\n    }\n  }\n"]);return k=function(){return e},e}function C(){var e=Object(x.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      aboutText\n      followerCount\n      posts {\n        _id\n        title\n        postText\n        createdAt\n        commentCount\n        comments {\n          _id\n          createdAt\n          commentBody\n          username\n        }\n      }\n      followers {\n        _id\n        username\n      }\n    }\n  }\n"]);return C=function(){return e},e}function S(){var e=Object(x.a)(["\n  query user($username: String!) {\n    user(username: $username) {\n      _id\n      username\n      email\n      aboutText\n      followerCount\n      followers {\n        _id\n        username\n      }\n      posts {\n        _id\n        title\n        postText\n        createdAt\n        commentCount\n      }\n    }\n  }\n"]);return S=function(){return e},e}function _(){var e=Object(x.a)(["\n  query post($id: ID!) {\n    post(_id: $id) {\n      _id\n      title\n      postText\n      createdAt\n      username\n      commentCount\n      comments {\n        _id\n        createdAt\n        username\n        commentBody\n      }\n    }\n  }\n"]);return _=function(){return e},e}function T(){var e=Object(x.a)(["\n  query posts($username: String) {\n    posts(username: $username) {\n      _id\n      title\n      postText\n      createdAt\n      username\n      commentCount\n      comments {\n        _id\n        createdAt\n        username\n        commentBody\n      }\n    }\n  }\n"]);return T=function(){return e},e}var A=O()(T()),B=O()(_()),$=O()(S()),I=O()(C()),D=O()(k()),L=function(){var e=Object(i.useQuery)(D).data;console.log(e);var a=Object(n.useContext)(N),c=Object(u.a)(a,2),l=c[0],o=c[1],m=function(e){e.preventDefault(),b.logout()};function d(){o({type:"TOGGLE_NAV"})}return l.navActive?r.a.createElement("nav",{className:"navbar is-transparent is-fixed-top",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(s.b,{to:"/",className:""},r.a.createElement("img",{className:"graphic",src:t(57)})),r.a.createElement("a",{role:"button",onClick:d,className:"navbar-burger burger is-active",id:"","aria-label":"menu","aria-expanded":"false","data-target":"navMenu"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"navMenu",className:"navbar-menu is-active "},r.a.createElement("div",{className:"navbar-start"},b.loggedIn()?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{className:"navbar-item",to:"/profile",onClick:d},"Profile"),r.a.createElement(s.b,{className:"navbar-item",to:"/write",onClick:d},"Write"),r.a.createElement(s.b,{className:"navbar-item",to:"/",onClick:m},"Logout"),r.a.createElement("div",{className:"navbar-end"},e.me?r.a.createElement("span",{className:"navbar-item"},"Logged in as ",e.me.username):r.a.createElement("span",null))):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{className:"navbar-item",to:"/login",onClick:d},"Login"),r.a.createElement(s.b,{className:"navbar-item",to:"/signup",onClick:d},"Signup"))),r.a.createElement("div",{className:"navbar-end"}))):r.a.createElement(r.a.Fragment,null,b.loggedIn()?r.a.createElement("nav",{className:"navbar  is-fixed-top",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(s.b,{to:"/",className:"logo"},r.a.createElement("img",{className:"graphic",src:t(57)})),r.a.createElement("a",{role:"button",onClick:d,className:"navbar-burger burger",id:"","aria-label":"menu","aria-expanded":"false","data-target":"navMenu"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"navMenu",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement(s.b,{className:"navbar-item",to:"/profile"},"Profile"),r.a.createElement(s.b,{className:"navbar-item",to:"/write"},"Write"),r.a.createElement(s.b,{className:"navbar-item",to:"/",onClick:m},"Logout")),r.a.createElement("div",{className:"navbar-end"},e?r.a.createElement("span",{className:"navbar-item"},"Logged in as ",e.me.username):r.a.createElement("span",null)))):r.a.createElement("nav",{className:"navbar  is-fixed-top",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(s.b,{to:"/",className:"logo"},r.a.createElement("img",{className:"graphic",src:t(57)})),r.a.createElement("a",{role:"button",onClick:d,className:"navbar-burger burger",id:"","aria-label":"menu","aria-expanded":"false","data-target":"navMenu"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"navMenu",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement(s.b,{className:"navbar-item",to:"/login"},"Login"),r.a.createElement(s.b,{className:"navbar-item",to:"/signup"},"Signup")),r.a.createElement("div",{className:"navbar-end"}))))},F=function(){return r.a.createElement("footer",{className:"has-text-centered"},r.a.createElement("div",{className:"container"},"\xa92020 by Group 2"))},P=function(e){var a=e.checked,t=e.onChange;return r.a.createElement("span",{className:"toggle-control"},r.a.createElement("input",{className:"dmcheck",type:"checkbox",checked:a,onChange:t,id:"dmcheck"}),r.a.createElement("label",{htmlFor:"dmcheck"}))},W=t(86),M=function(){var e=Object(W.a)(!1);return r.a.createElement("div",{className:"dark-mode-toggle"},r.a.createElement("button",{className:"toggle-icons",type:"button",onClick:e.disable},"\u2600"),r.a.createElement(P,{checked:e.value,onChange:e.toggle}),r.a.createElement("button",{className:"toggle-icons",type:"button",onClick:e.enable},"\u263e"))},U=t(21),q=t.n(U),Q=t(30),G=t(34);function V(){var e=Object(x.a)(["\n  mutation addComment($postId: ID!, $commentBody: String!) {\n    addComment(postId: $postId, commentBody: $commentBody) {\n      _id\n      commentCount\n      comments {\n        _id\n        commentBody\n        createdAt\n        username\n      }\n    }\n  }\n"]);return V=function(){return e},e}function z(){var e=Object(x.a)(["\n  mutation addPost($title:String, $postText: String!) {\n    addPost( title: $title, postText: $postText) {\n      _id\n      title\n      postText\n      createdAt\n      username\n      commentCount\n      comments {\n        _id\n      }\n    }\n  }\n"]);return z=function(){return e},e}function R(){var e=Object(x.a)(["\nmutation addAbout($aboutText:String){\n  addAbout(aboutText: $aboutText){\n    _id\n    username\n    aboutText\n  }\n}"]);return R=function(){return e},e}function Y(){var e=Object(x.a)(["\n  mutation addFollower($id: ID!) {\n    addFollower(followerId: $id) {\n      _id\n      username\n      followerCount\n      followers {\n        _id\n        username\n      }\n    }\n  }\n"]);return Y=function(){return e},e}function J(){var e=Object(x.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]);return J=function(){return e},e}function H(){var e=Object(x.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]);return H=function(){return e},e}var K=O()(H()),X=O()(J()),Z=O()(Y()),ee=(O()(R()),O()(z())),ae=O()(V()),te=function(e){var a=Object(n.useState)({email:"",password:""}),t=Object(u.a)(a,2),c=t[0],l=t[1],s=Object(i.useMutation)(K),o=Object(u.a)(s,1)[0],m=function(e){var a=e.target,t=a.name,n=a.value;l(Object(g.a)(Object(g.a)({},c),{},Object(G.a)({},t,n)))},d=function(){var e=Object(Q.a)(q.a.mark((function e(a){var t,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,o({variables:Object(g.a)({},c)});case 4:t=e.sent,n=t.data,b.login(n.login.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("section",{className:"section level"},r.a.createElement("div",{className:"container level-item"},r.a.createElement("form",{onSubmit:d},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input",placeholder:"Your email",name:"email",type:"email",id:"email",value:c.email,onChange:m}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-check"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",placeholder:"******",name:"password",type:"password",id:"password",value:c.password,onChange:m}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("button",{className:"button is-centered",type:"submit"},"Submit"))))},ne=function(){return r.a.createElement("div",null,"Oops, we couldn't find that page.")},re=function(e){var a=e.comments;return r.a.createElement("div",null,r.a.createElement("div",{style:{marginTop:"10px",border:"1px solid #F2E9E4"}},r.a.createElement("div",{className:"card",style:{backgroundColor:"#8C7D8A"}},r.a.createElement("p",{className:"title has-text-centered",style:{color:"#D0B8B3",borderBottom:"5px double #22223B75"}},"Comments"),r.a.createElement("div",{className:"card-content"},a&&a.map((function(e){return r.a.createElement("div",{className:"has-text-centered",key:e._id,style:{color:"#D0B8B3"}},r.a.createElement("p",{style:{color:"#F2E9E4"}},e.commentBody),r.a.createElement(s.b,{to:"/profile/".concat(e.username),style:{fontWeight:700,color:"#22223B"}},e.username)," on ",e.createdAt)}))))))},ce=function(e){var a=e.postId,t=Object(n.useState)(""),c=Object(u.a)(t,2),l=c[0],s=c[1],o=Object(n.useState)(0),m=Object(u.a)(o,2),d=m[0],p=m[1],v=Object(i.useMutation)(ae),E=Object(u.a)(v,2),b=E[0],f=E[1].error,g=function(){var e=Object(Q.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b({variables:{commentBody:l,postId:a}});case 4:s(""),p(0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("p",{className:"".concat(280===d)},"Character Count: ",d,"/280",f&&r.a.createElement("span",{className:"ml-2"},"Something went wrong...")),r.a.createElement("form",{className:"",onSubmit:g},r.a.createElement("textarea",{placeholder:"Leave a comment on this post...",value:l,className:"textarea is-medium",onChange:function(e){e.target.value.length<=280&&(s(e.target.value),p(e.target.value.length))},rows:"3"}),r.a.createElement("button",{className:"button is-normal",type:"submit",style:{marginTop:"5px"}},"Submit")))},le=function(e){var a=Object(o.g)().id,t=Object(i.useQuery)(B,{variables:{id:a}}),n=t.loading,c=t.data,l=(null===c||void 0===c?void 0:c.post)||{};return n?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement("div",{className:"card"},r.a.createElement("p",{className:"title has-text-centered"},r.a.createElement(s.b,{className:"single-post-user",to:"/profile/".concat(l.username)},l.username)),r.a.createElement("p",{className:"subtitle has-text-centered single-post-subtitle",style:{color:"#F2E9E4"}},"posted on ",l.createdAt),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"title"},l.title),r.a.createElement("p",null,l.postText)))),r.a.createElement("div",{style:{marginTop:"10px"}},l.commentCount>0&&r.a.createElement(re,{comments:l.comments}),b.loggedIn()&&r.a.createElement(ce,{postId:l._id})))},se=t(38),oe=t(43),ie=function(e){var a=e.posts,t=e.title;return a.length?(console.log(a),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container py-4"},r.a.createElement("h3",{className:"title has-text-left mb-3",style:{color:"#D0B8B3"}},t),r.a.createElement("div",{className:"mb-6"},a&&a.map((function(e){return r.a.createElement("div",{key:e._id,className:"box"},r.a.createElement("div",{className:"media"},r.a.createElement("figure",{className:"media-left"},r.a.createElement("p",{className:""},r.a.createElement(oe.a,{icon:se.c,size:"lg",alt:"icon",style:{color:"#D0B8B3"}}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("h3",{className:"title is-3 post-title"},e.title),r.a.createElement("p",{className:"subtitle is-size-6"},r.a.createElement(s.b,{to:"/profile/".concat(e.username)},e.username)," ","posted on ",e.createdAt),r.a.createElement("div",{className:"content"},r.a.createElement(s.b,{to:"/post/".concat(e._id)},r.a.createElement("p",{className:"has-text-weight-normal is-size-5 "},e.postText),r.a.createElement("p",{className:"mb-0 comments"},"Comments: ",e.commentCount," || Click to"," ",e.commentCount?"see":"start"," the discussion!"))))))})))))):r.a.createElement("h3",null,"No Posts Yet")},me=function(e){var a=e.followerCount,t=e.username,n=e.followers;return n&&n.length?r.a.createElement("div",{className:"following"},r.a.createElement("h5",{className:"title is-5 mb-2 followcount"},t," is following ",a," ",1===a?"writer":"writers"),n.map((function(e){return r.a.createElement("button",{className:"button is-fullwidth is-inverted is-outlined mb-2",key:e._id},r.a.createElement(s.b,{className:"following",to:"/profile/".concat(e.username)},e.username," "))}))):r.a.createElement("p",{className:"bg-dark text-light p-3"},t," isnt following any writers")},ue=t(88),de=function(){var e=Object(i.useMutation)(Z),a=Object(u.a)(e,1)[0],t=Object(o.g)().username,c=Object(i.useQuery)(t?$:I,{variables:{username:t}}),l=c.loading,s=c.data,m=Object(n.useState)(!1),d=Object(u.a)(m,1)[0],p=Object(n.useState)("This is a sample text."),v=Object(u.a)(p,2),E=(v[0],v[1]),f=(null===s||void 0===s?void 0:s.me)||(null===s||void 0===s?void 0:s.user)||{};if(b.loggedIn()&&b.getProfile().data.username===t)return r.a.createElement(o.a,{to:"/profile"});if(l)return r.a.createElement("progress",{className:"progress is-medium is-dark",max:"100"},"Loading");if(!(null===f||void 0===f?void 0:f.username))return r.a.createElement("h4",null,"You need to be logged in to see this page. Use the navigation links above to sign up or log in!");var g=function(){var e=Object(Q.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a({variables:{id:f._id}});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container py-4"},r.a.createElement("h2",{className:"title has-text-centered mb-6",style:{color:"#D0B8B3"}},"Viewing ",t?"".concat(f.username,"'s"):"your"," profile"),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-6"},r.a.createElement("h4",{className:"title is-spaced is-4",style:{color:"#D0B8B3"}},"About ",t?"".concat(f.username):"me"),r.a.createElement("div",{className:"subtitle about"},t?r.a.createElement("p",null,"I'm baby master cleanse poutine scenester actually paleo butcher pork belly truffaut fixie. Whatever unicorn squid pug skateboard lomo. Enamel pin 3 wolf moon you probably haven't heard of them sriracha. Authentic brunch affogato post-ironic man braid."):r.a.createElement(ue.a,{viewContainerClassName:"about-wrapper",type:"textarea",inputProps:{rows:5},saveButtonContent:r.a.createElement("strong",null,"Apply"),cancelButtonContent:r.a.createElement("strong",null,"Cancel"),editButtonContent:"Edit About Section",value:"I'm baby master cleanse poutine scenester actually paleo butcher pork belly truffaut fixie. Whatever unicorn squid pug skateboard lomo. Enamel pin 3 wolf moon you probably haven't heard of them sriracha. Authentic brunch affogato post-ironic man braid.",editing:d,onSave:function(e){console.log("Edited Value -> ",e),E(e)}})),r.a.createElement("div",null,r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:""},r.a.createElement(oe.a,{icon:se.b,size:"lg",alt:"Email",style:{color:"#D0B8B3"}}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("div",{className:"content"},r.a.createElement("a",{href:"mailto:".concat(f.email),className:"email"},f.email)))))),r.a.createElement("div",{className:"column is-5 is-offset-1 follow"},t&&r.a.createElement("button",{className:"button is-inverted is-outlined mb-5",onClick:g},r.a.createElement("span",{className:" pr-3"},r.a.createElement(oe.a,{icon:se.a,size:"",alt:"Follow"})),r.a.createElement("span",null,"Follow")),r.a.createElement("div",{className:"col-12 col-lg-3 mb-1"},r.a.createElement(me,{username:f.username,followerCount:f.followerCount,followers:f.followers})))))),r.a.createElement("div",{className:"flex-row justify-space-between mb-3"},r.a.createElement("div",{className:"col-12 mb-3 col-lg-8"},r.a.createElement(ie,{posts:f.posts,title:"".concat(f.username,"'s posts")}))))},pe=function(){var e=Object(n.useState)({username:"",email:"",password:"",aboutText:""}),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(i.useMutation)(X),s=Object(u.a)(l,1)[0],o=function(e){var a=e.target,n=a.name,r=a.value;c(Object(g.a)(Object(g.a)({},t),{},Object(G.a)({},n,r)))},m=function(){var e=Object(Q.a)(q.a.mark((function e(a){var n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,s({variables:Object(g.a)({},t)});case 4:n=e.sent,r=n.data,b.login(r.addUser.token),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("section",{className:"section level"},r.a.createElement("div",{className:"container level-item"},r.a.createElement("form",{onSubmit:m},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input",placeholder:"Your username",name:"username",type:"username",id:"username",value:t.username,onChange:o}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-check"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input",placeholder:"Your email",name:"email",type:"email",id:"email",value:t.email,onChange:o}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-check"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",placeholder:"******",name:"password",type:"password",id:"password",value:t.password,onChange:o}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("button",{className:"button is-centered",type:"submit"},"Submit"))))},ve=function(e){var a=e.posts,t=e.userData,c=Object(n.useState)(!1),l=Object(u.a)(c,2),o=l[0],i=l[1],m=[];if(!a.length)return r.a.createElement("h3",null,"No Posts Yet");if(o){t.me.followers.map((function(e){return m.push(e.username)})),console.log(m);var d=function(e){var t=[];return e.forEach((function(e){var n=a.filter((function(a){return a.username==e}));t.push(n)})),t};console.log(d(m));var p=d(m),v=function(e){var a=[];return e.forEach((function(e){e.forEach((function(e){a.push(e)}))})),a},E=v(p);return console.log(E),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"tabs is-centered"},r.a.createElement("ul",null,r.a.createElement("li",{className:""},r.a.createElement("a",{onClick:function(){return i(!1)}},"View All")),r.a.createElement("li",{className:"is-active"},r.a.createElement("a",{onClick:function(){return i(!0)}},"View Following")))),v(p).map((function(e){return r.a.createElement("section",{className:"section"},r.a.createElement("div",{key:e._id,className:"card"},r.a.createElement("p",{className:"card-header"},r.a.createElement(s.b,{className:"post-title",to:"/post/".concat(e._id)},e.title)),r.a.createElement("div",{className:"card-content"},r.a.createElement(s.b,{to:"/post/".concat(e._id)},r.a.createElement("p",{className:"post-text"},e.postText),r.a.createElement("p",{className:"post-comments"},"Comments: ",e.commentCount," || Click to"," ",e.commentCount?"see":"start"," the discussion!"))),r.a.createElement("footer",{className:"card-footer"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag "},"Author:",r.a.createElement(s.b,{to:"/profile/".concat(e.username),style:{fontWeight:700}},e.username),r.a.createElement("br",null)),r.a.createElement("span",{className:"tag is-light"}," ",e.createdAt)))))})))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"tabs is-centered"},r.a.createElement("ul",null,r.a.createElement("li",{className:"is-active"},r.a.createElement("a",{onClick:function(){return i(!1)}},"View All")),b.loggedIn()?r.a.createElement("li",{className:""},r.a.createElement("a",{onClick:function(){return i(!0)}},"View Following")):r.a.createElement("li",null,"log in to view followed posts"))),a&&a.map((function(e){return r.a.createElement("section",{className:"section"},r.a.createElement("div",{key:e._id,className:"card"},r.a.createElement("p",{className:"card-header"},r.a.createElement(s.b,{className:"post-title",to:"/post/".concat(e._id)},e.title)),r.a.createElement("div",{className:"card-content"},r.a.createElement(s.b,{to:"/post/".concat(e._id)},r.a.createElement("p",{className:"post-text"},e.postText),r.a.createElement("span",{className:"post-comments"},"Comments: ",e.commentCount," || Click to"," ",e.commentCount?"see":"start"," the discussion!"))),r.a.createElement("footer",{className:"card-footer"},r.a.createElement("div",{className:"tags has-addons"},r.a.createElement("span",{className:"tag "},"Author:",r.a.createElement(s.b,{to:"/profile/".concat(e.username),style:{fontWeight:700}},"  ",e.username),r.a.createElement("br",null)),r.a.createElement("span",{className:"tag is-light"}," ",e.createdAt)))))})))},Ee=function(){var e=Object(i.useQuery)(A),a=e.loading,t=e.data,n=Object(i.useQuery)(D).data,c=(null===t||void 0===t?void 0:t.posts)||[];return console.log(n),r.a.createElement("main",{id:"home-body"},r.a.createElement("div",{className:"flex-row justify-space-between"},a?r.a.createElement("progress",{className:"progress is-medium is-dark",max:"100"},"Loading"):r.a.createElement(ve,{posts:c,userData:n})))},be=t(63),fe=function(){var e=Object(n.useState)({title:"",postText:""}),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(0),s=Object(u.a)(l,2),o=s[0],m=s[1],d=Object(i.useMutation)(ee,{update:function(e,a){var t=a.data.addPost;try{var n=e.readQuery({query:A}).posts;e.writeQuery({query:A,data:{posts:[t].concat(Object(be.a)(n))}})}catch(c){console.error(c)}var r=e.readQuery({query:I}).me;e.writeQuery({query:I,data:{me:Object(g.a)(Object(g.a)({},r),{},{posts:[].concat(Object(be.a)(r.posts),[t])})}})}}),p=Object(u.a)(d,2),v=p[0],E=p[1].error,b=function(e){m(e.target.value.length);var a=e.target,n=a.name,r=a.value;c(Object(g.a)(Object(g.a)({},t),{},Object(G.a)({},n,r)))},f=function(){var e=Object(Q.a)(q.a.mark((function e(a){var n,r;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,v({variables:Object(g.a)({},t)});case 4:n=e.sent,r=n.data,document.location.replace("/"),console.log(r),c(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("p",{className:"m-0 ".concat(1e3===o||E?"text-danger":"")},"Character Count: ",o,"/1000",E&&r.a.createElement("span",{className:"ml-2"},"Something went wrong...")),r.a.createElement("form",{className:"flex-row justify-center justify-space-between-md align-stretch",onSubmit:f},r.a.createElement("input",{className:"input field",name:"title",type:"text",placeholder:"Title",value:t.title,onChange:b}),r.a.createElement("textarea",{placeholder:"Body...",value:t.postText,type:"text",name:"postText",className:"textarea field",rows:"17",onChange:b}),r.a.createElement("button",{className:"button",type:"submit"},"Finalize you work")))},ge=new m.a({request:function(e){var a=localStorage.getItem("id_token");e.setContext({headers:{authorization:a?"Bearer ".concat(a):""}})},uri:"/graphql"}),he=function(){return r.a.createElement(i.ApolloProvider,{client:ge},r.a.createElement(s.a,null,r.a.createElement(y,null,r.a.createElement("div",{className:"main"},r.a.createElement(L,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container toggle"},r.a.createElement(M,null)),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:Ee}),r.a.createElement(o.b,{exact:!0,path:"/login",component:te}),r.a.createElement(o.b,{exact:!0,path:"/signup",component:pe}),r.a.createElement(o.b,{exact:!0,path:"/profile/:username?",component:de}),r.a.createElement(o.b,{exact:!0,path:"/post/:id",component:le}),r.a.createElement(o.b,{exact:!0,path:"/write",component:fe}),r.a.createElement(o.b,{component:ne}))),r.a.createElement(F,null)))))},Ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function we(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");Ne?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):we(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):we(a,e)}))}}()},57:function(e,a,t){e.exports=t.p+"static/media/PenNameGraphicLight.090d4ebc.svg"},91:function(e,a,t){e.exports=t(110)},96:function(e,a,t){}},[[91,1,2]]]);
//# sourceMappingURL=main.3f8c2b2e.chunk.js.map