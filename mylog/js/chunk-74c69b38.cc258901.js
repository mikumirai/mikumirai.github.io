(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74c69b38"],{"56c0":function(t,c,n){},"88b3":function(t,c,n){"use strict";var i=n("56c0"),e=n.n(i);e.a},9281:function(t,c,n){"use strict";n.r(c);var i=function(){var t=this,c=t.$createElement,n=t._self._c||c;return n("div",{staticClass:"article"},[n("ul",t._l(t.articleShow,(function(c,i){return n("li",{key:i,staticClass:"articlebox",on:{click:function(n){return t.toArticles(c)}}},[n("div",{staticClass:"left"},[n("h1",{staticClass:"tittle"},[t._v(t._s(c.title))]),n("p",{staticClass:"content"},[t._v(t._s(c.description))])])])})),0)])},e=[],a=n("a9da"),s={name:"Article",data:function(){return{articleShow:[]}},created:function(){var t=this;Object(a["b"])().then((function(c){t.articleShow=c.data})).catch((function(t){console.log(t)}))},methods:{toArticles:function(t){this.$router.push({path:"/articles/".concat(t.id)})}}},o=s,l=(n("88b3"),n("2877")),r=Object(l["a"])(o,i,e,!1,null,"47cecd60",null);c["default"]=r.exports}}]);
//# sourceMappingURL=chunk-74c69b38.cc258901.js.map