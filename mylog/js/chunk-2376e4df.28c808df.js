(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2376e4df"],{a7c8:function(t,e,c){"use strict";c.r(e);var i=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"article"},[c("ul",t._l(t.articleShow,(function(e,i){return c("li",{key:i,staticClass:"articlebox",on:{click:function(c){return t.toArticles(e)}}},[c("div",{staticClass:"left"},[c("h1",{staticClass:"tittle"},[t._v(t._s(e.title))]),c("p",{staticClass:"content"},[t._v(t._s(e.description))])])])})),0)])},s=[],n={name:"Article",computed:{articleShow:function(){return this.$store.state.articlesTitle}},created:function(){this.$store.dispatch("getArticleTitle")},methods:{toArticles:function(t){this.$router.push({path:"/blog/articles/".concat(t.id)})}}},a=n,l=(c("da1c"),c("2877")),r=Object(l["a"])(a,i,s,!1,null,"4360bfe8",null);e["default"]=r.exports},da1c:function(t,e,c){"use strict";var i=c("e379"),s=c.n(i);s.a},e379:function(t,e,c){}}]);
//# sourceMappingURL=chunk-2376e4df.28c808df.js.map