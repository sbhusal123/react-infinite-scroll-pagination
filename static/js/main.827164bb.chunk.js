(this.webpackJsonpinfiscroll=this.webpackJsonpinfiscroll||[]).push([[0],{63:function(e,t,i){"use strict";i.r(t);var c=i(0),s=i.n(c),r=i(13),n=i.n(r),a=i(64),o=i(67),u=i(11),d=i.n(u),j=i(1);var l=function(e){return Object(j.jsx)(a.a,{style:{marginBottom:"0.3rem"},children:Object(j.jsxs)(o.a,{bg:"success",variant:"light",text:"dark",children:[Object(j.jsxs)(o.a.Body,{children:[Object(j.jsx)(o.a.Title,{children:e.course_name}),Object(j.jsx)("hr",{}),Object(j.jsxs)(o.a.Text,{style:{fontWeight:"bold"},children:["Degree: ",e.course_type]}),Object(j.jsx)(o.a.Text,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus leo, lacinia eget lectus vel, varius laoreet mi. Integer vitae erat rutrum orci vehicula dictum nec id sapien. Mauris dignissim tortor eget aliquam gravida. Aliquam erat volutpat."})]}),Object(j.jsx)(o.a.Footer,{children:Object(j.jsxs)("p",{style:{fontWeight:"bold"},children:["University: ",d.a.lowerCase(e.university)]})})]})})},h=i(65),b=i(66),x=i(68),O=i(12),g=i(28),p=i.n(g),y="LOAD_COURSES",f="LOAD_COURSES_SUCCESS",m="LOAD_COURSES_FAIL",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1";return function(t){t({type:y}),p.a.get("https://semesterone.com/api/courses/?course_type=undergraduate&university_slug=macquarie-university&page_size=20&page="+e).then((function(e){t({payload:e.data,type:f})})).catch((function(e){t({payload:e,type:m})}))}},w=i(29);var L=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(w.a,{viewBox:"0 0 1000 300",speed:.5,backgroundOpacity:.7,foregroundColor:"#a3c4d4",children:[Object(j.jsx)("rect",{x:"0",y:"0",width:"1000",height:"5"}),Object(j.jsx)("rect",{x:"0",y:"0",width:"5",height:"250"}),Object(j.jsx)("rect",{x:"0",y:"250",width:"1000",height:"5"}),Object(j.jsx)("rect",{x:"995",y:"0",width:"5",height:"250"}),Object(j.jsx)("rect",{x:"10",y:"20",width:"350",height:"3"}),Object(j.jsx)("rect",{x:"10",y:"35",width:"350",height:"3"}),Object(j.jsx)("rect",{x:"0",y:"50",width:"1000",height:"5"}),Object(j.jsx)("rect",{x:"10",y:"70",width:"150",height:"3"}),Object(j.jsx)("rect",{x:"10",y:"100",width:"800",height:"3"}),Object(j.jsx)("rect",{x:"10",y:"120",width:"800",height:"3"}),Object(j.jsx)("rect",{x:"10",y:"140",width:"800",height:"3"}),Object(j.jsx)("rect",{x:"0",y:"200",width:"1000",height:"5"}),Object(j.jsx)("rect",{x:"10",y:"225",width:"350",height:"3"}),Object(j.jsx)("rect",{x:"10",y:"240",width:"350",height:"3"})]})})},C=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.coursesStore})),i=t.nextUrl,s=t.paginatedCourses,r=t.isLoading;Object(c.useEffect)((function(){e(v())}),[null]);return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)(h.a,{style:{marginTop:"5%"},children:Object(j.jsx)(b.a,{children:Object(j.jsxs)("div",{id:"courses_list",children:[s.map((function(e){return Object(j.jsx)(l,{course_name:e.name,course_type:e.course_type,university:e.university_slug},e.id)})),i&&!r?Object(j.jsx)(b.a,{children:Object(j.jsx)(x.a,{onClick:function(){e(v(function(e){var t=e.split("?")[1].split("&"),i="";return t.forEach((function(e){e.includes("page=")&&(i=e.split("=")[1])})),i}(i)))},className:"btn btn-lg btn-info",style:{width:"100%",marginBottom:"3%"},children:"Load More Courses"})}):null,!0===r?Object(j.jsx)(L,{}):null,!0===r?Object(j.jsx)(L,{}):null,!0===r?Object(j.jsx)(L,{}):null]})})})})},_=i(8),S=i(30),U=i(31),F=i(32),B=i(10),D={courses:[],paginatedCourses:[],isLoading:!1,isLoaded:!1,nextUrl:""},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(B.a)(Object(B.a)({},e),{},{courses:[],isLoaded:!1,isLoading:!0,nextUrl:""});case f:var i=d.a.union(e.paginatedCourses,t.payload.results);return Object(B.a)(Object(B.a)({},e),{},{courses:Object(F.a)(t.payload.results),isLoading:!1,paginatedCourses:d.a.uniqBy(i,"id"),isLoaded:!0,nextUrl:t.payload.next});case m:return Object(B.a)(Object(B.a)({},e),{},{isLoaded:!0,isLoading:!1,coures:[]});default:return e}},T=Object(_.combineReducers)({coursesStore:E}),k=[U.a],A=Object(_.createStore)(T,{},Object(S.composeWithDevTools)(_.applyMiddleware.apply(void 0,k))),q=function(){return Object(j.jsx)(O.a,{store:A,children:Object(j.jsx)(C,{})})},I=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,69)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;i(e),c(e),s(e),r(e),n(e)}))};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root")),I()}},[[63,1,2]]]);
//# sourceMappingURL=main.827164bb.chunk.js.map