(this.webpackJsonpinfiscroll=this.webpackJsonpinfiscroll||[]).push([[0],{67:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),c=n(12),i=n.n(c),o=n(27),a=n(28),u=n(36),l=n(34),d=n(69),j=n(70),b=n(68),p=n(71),x=n(11),O=n.n(x),h=n(1);var g=function(e){return Object(h.jsx)(b.a,{style:{marginBottom:"0.3rem"},children:Object(h.jsxs)(p.a,{bg:"success",variant:"light",text:"dark",children:[Object(h.jsxs)(p.a.Body,{children:[Object(h.jsx)(p.a.Title,{children:e.course_name}),Object(h.jsx)("hr",{}),Object(h.jsxs)(p.a.Text,{style:{fontWeight:"bold"},children:["Degree: ",e.course_type]}),Object(h.jsx)(p.a.Text,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus leo, lacinia eget lectus vel, varius laoreet mi. Integer vitae erat rutrum orci vehicula dictum nec id sapien. Mauris dignissim tortor eget aliquam gravida. Aliquam erat volutpat."})]}),Object(h.jsx)(p.a.Footer,{children:Object(h.jsxs)("p",{style:{fontWeight:"bold"},children:["University: ",O.a.lowerCase(e.university)]})})]})})},y=n(29);var v=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(y.a,{viewBox:"0 0 450 70",children:[Object(h.jsx)("rect",{x:"0",y:"25",rx:"3",ry:"3",width:"380",height:"5"}),Object(h.jsx)("rect",{x:"0",y:"35",rx:"3",ry:"3",width:"380",height:"5"}),Object(h.jsx)("rect",{x:"0",y:"45",rx:"3",ry:"3",width:"380",height:"5"}),Object(h.jsx)("rect",{x:"0",y:"55",rx:"3",ry:"3",width:"380",height:"5"}),Object(h.jsx)("rect",{x:"0",y:"65",rx:"3",ry:"3",width:"380",height:"5"})]})})},m=n(13),f=n(31),L=n.n(f),C="LOAD_COURSES",S="LOAD_COURSES_SUCCESS",w="LOAD_COURSES_FAIL",_=function(e){var t=e.split("?")[1].split("&"),n="";return t.forEach((function(e){e.includes("page=")&&(n=e.split("=")[1])})),n},U=function(e){return e.getBoundingClientRect().bottom<=window.innerHeight},k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).trackScrolling=function(){var t=document.getElementById("courses_list");U(t)&&!0===e.props.courseIsLoaded&&e.props.nextPageUrl&&e.props.loadCourses(_(e.props.nextPageUrl))},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.loadCourses(),document.addEventListener("scroll",this.trackScrolling)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.trackScrolling)}},{key:"render",value:function(){var e=this.props.courseIsLoaded;return Object(h.jsx)(r.Fragment,{children:Object(h.jsx)(d.a,{style:{marginTop:"5%"},children:Object(h.jsxs)(j.a,{children:[e?null:Object(h.jsx)(v,{}),e?null:Object(h.jsx)(v,{}),e?null:Object(h.jsx)(v,{}),Object(h.jsxs)("div",{id:"courses_list",children:[this.props.paginatedCourses.map((function(e){return Object(h.jsx)(g,{course_name:e.name,course_type:e.course_type,university:e.university_slug},e.id)})),e?null:Object(h.jsx)(v,{}),e?null:Object(h.jsx)(v,{}),e?null:Object(h.jsx)(v,{}),e?null:Object(h.jsx)(v,{}),e?null:Object(h.jsx)(v,{}),e?null:Object(h.jsx)(v,{}),e?null:Object(h.jsx)(v,{}),e?null:Object(h.jsx)(v,{}),e?null:Object(h.jsx)(v,{}),e?null:Object(h.jsx)(v,{}),e?null:Object(h.jsx)(v,{})]})]})})})}}]),n}(r.Component),E=Object(m.b)((function(e){return{courses:e.coursesStore.courses,paginatedCourses:e.coursesStore.paginatedCourses,nextPageUrl:e.coursesStore.nextUrl,courseIsLoaded:e.coursesStore.isLoaded}}),(function(e){return{loadCourses:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1";return function(t){t({type:C}),L.a.get("https://semesterone.com/api/courses/?page_size=5&page="+e).then((function(e){t({payload:e.data,type:S})})).catch((function(e){t({payload:e,type:w})}))}}(t))}}}))(k),B=n(8),D=n(32),F=n(33),I=n(35),T=n(10),A={courses:[],paginatedCourses:[],isLoading:!1,isLoaded:!1,nextUrl:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(T.a)(Object(T.a)({},e),{},{courses:[],isLoaded:!1,isLoading:!0,nextUrl:""});case S:var n=O.a.union(e.paginatedCourses,t.payload.results);return Object(T.a)(Object(T.a)({},e),{},{courses:Object(I.a)(t.payload.results),isLoading:!1,paginatedCourses:O.a.uniqBy(n,"id"),isLoaded:!0,nextUrl:t.payload.next});case w:return Object(T.a)(Object(T.a)({},e),{},{isLoaded:!0,isLoading:!1,coures:[]});default:return e}},R=Object(B.combineReducers)({coursesStore:P}),M=[F.a],W=Object(B.createStore)(R,{},Object(D.composeWithDevTools)(B.applyMiddleware.apply(void 0,M))),q=function(){return Object(h.jsx)(m.a,{store:W,children:Object(h.jsx)(E,{})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root")),J()}},[[67,1,2]]]);
//# sourceMappingURL=main.74c770a6.chunk.js.map