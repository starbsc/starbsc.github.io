webpackJsonp([4],{Pkbj:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={data:function(){return{starApy:0,starTvl:0,starFloatApy:0,starFloatTvl:0,lpApy:0,lpTvl:0,lpFloatApy:0,lpFloatTvl:0}},created:function(){this.$contracts&&this.init()},methods:{init:function(){var t=this;this.$contracts.ApePledgeMine.methods.mGetApyAndTvls().call({from:this.$address},function(a,s){a||(console.log(s),t.starApy=s.apys[0],t.starTvl=s.tvls[0],t.starFloatApy=s.floatApys[0],t.starFloatTvl=s.floatTvls[0],t.lpApy=s.apys[1],t.lpTvl=s.tvls[1],t.lpFloatApy=s.floatApys[1],t.lpFloatTvl=s.floatTvls[1])})}}},p={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("span",[t._v("Star年化率："+t._s(t.starApy))]),t._v(" "),s("span",[t._v("Star交易量："+t._s(t.starTvl))]),t._v(" "),s("span",[t._v("Star浮动年化率："+t._s(t.starFloatApy))]),t._v(" "),s("span",[t._v("Star浮动交易量："+t._s(t.starFloatTvl))]),t._v(" "),s("span",[t._v("LP年化率："+t._s(t.lpApy))]),t._v(" "),s("span",[t._v("LP交易量："+t._s(t.lpTvl))]),t._v(" "),s("span",[t._v("LP浮动年化率："+t._s(t.lpFloatApy))]),t._v(" "),s("span",[t._v("LP浮动交易量："+t._s(t.lpFloatTvl))])])},staticRenderFns:[]};var n=s("VU/8")(l,p,!1,function(t){s("Tyeq")},"data-v-cf0f1548",null);a.default=n.exports},Tyeq:function(t,a){}});