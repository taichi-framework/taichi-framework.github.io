(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{121:function(t,a,i){"use strict";var n=i(48);i.n(n).a},197:function(t,a,i){"use strict";var n={components:{NavLink:i(70).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}},actionLink2:function(){return{link:this.data.actionLink2,text:this.data.actionText2}},actionLink3:function(){return{link:this.data.actionLink3,text:this.data.actionText3}}}},e=(i(121),i(0)),s=Object(e.a)(n,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[i("header",{staticClass:"hero"},[t.data.heroImage?i("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?i("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),i("p",{staticClass:"description"},[t._v(t._s(t.data.tagline||t.$description||"Welcome to your VuePress site"))]),t._v(" "),i("div",{staticClass:"actions"},[t.data.actionText3&&t.data.actionLink3?i("div",{staticClass:"action"},[i("NavLink",{staticClass:"action-button action2",attrs:{item:t.actionLink3}})],1):t._e(),t._v(" "),t.data.actionText2&&t.data.actionLink2?i("div",{staticClass:"action"},[i("NavLink",{staticClass:"action-button action2",attrs:{item:t.actionLink2}})],1):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?i("div",{staticClass:"action"},[i("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])]),t._v(" "),t.data.features&&t.data.features.length?i("div",{staticClass:"features"},t._l(t.data.features,(function(a,n){return i("div",{key:n,staticClass:"feature"},[i("h2",[t._v(t._s(a.title))]),t._v(" "),i("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),i("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?i("div",{staticClass:"footer"},[t._v(t._s(t.data.footer))]):t._e()],1)}),[],!1,null,null,null);a.a=s.exports},48:function(t,a,i){}}]);