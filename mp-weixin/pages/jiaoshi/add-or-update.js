(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiaoshi/add-or-update"],{9702:function(e,t,n){},a31f:function(e,t,n){"use strict";n.r(t);var a=n("ef0d"),r=n("d4bd");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("f548");var o,u=n("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"59303b66",null,!1,a["a"],o);t["default"]=s.exports},ad32:function(e,t,n){"use strict";(function(e){n("02a3");a(n("66fd"));var t=a(n("a31f"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},b4ca:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("4795"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,a,r,i,o){try{var u=e[i](o),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(a,r)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function u(e){i(o,a,r,u,s,"next",e)}function s(e){i(o,a,r,u,s,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("38ae"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{cross:"",ruleForm:{jiaoshigonghao:"",jiaoshixingming:"",mima:"",xingbie:"",touxiang:"",dianhuahaoma:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{jiaoshigonghao:!1,jiaoshixingming:!1,mima:!1,xingbie:!1,touxiang:!1,dianhuahaoma:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var n=this;return o(a.default.mark((function r(){var i,o,u,s;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=e.getStorageSync("nowTable"),r.next=3,n.$api.session(i);case 3:if(o=r.sent,n.user=o.data,n.xingbieOptions="男,女".split(","),n.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(n.ruleForm.refid=t.refid,n.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){r.next=14;break}return n.ruleForm.id=t.id,r.next=12,n.$api.info("jiaoshi",n.ruleForm.id);case 12:o=r.sent,n.ruleForm=o.data;case 14:if(n.cross=t.cross,!t.cross){r.next=46;break}u=e.getStorageSync("crossObj"),r.t0=a.default.keys(u);case 18:if((r.t1=r.t0()).done){r.next=46;break}if(s=r.t1.value,"jiaoshigonghao"!=s){r.next=24;break}return n.ruleForm.jiaoshigonghao=u[s],n.ro.jiaoshigonghao=!0,r.abrupt("continue",18);case 24:if("jiaoshixingming"!=s){r.next=28;break}return n.ruleForm.jiaoshixingming=u[s],n.ro.jiaoshixingming=!0,r.abrupt("continue",18);case 28:if("mima"!=s){r.next=32;break}return n.ruleForm.mima=u[s],n.ro.mima=!0,r.abrupt("continue",18);case 32:if("xingbie"!=s){r.next=36;break}return n.ruleForm.xingbie=u[s],n.ro.xingbie=!0,r.abrupt("continue",18);case 36:if("touxiang"!=s){r.next=40;break}return n.ruleForm.touxiang=u[s],n.ro.touxiang=!0,r.abrupt("continue",18);case 40:if("dianhuahaoma"!=s){r.next=44;break}return n.ruleForm.dianhuahaoma=u[s],n.ro.dianhuahaoma=!0,r.abrupt("continue",18);case 44:r.next=18;break;case 46:n.styleChange();case 47:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return o(a.default.mark((function n(){var r,i,o,u,s,c,l,f,d,g;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.ruleForm.jiaoshigonghao){n.next=3;break}return t.$utils.msg("教师工号不能为空"),n.abrupt("return");case 3:if(t.ruleForm.jiaoshixingming){n.next=6;break}return t.$utils.msg("教师姓名不能为空"),n.abrupt("return");case 6:if(t.ruleForm.mima){n.next=9;break}return t.$utils.msg("密码不能为空"),n.abrupt("return");case 9:if(!t.ruleForm.dianhuahaoma||t.$validate.isMobile(t.ruleForm.dianhuahaoma)){n.next=12;break}return t.$utils.msg("电话号码应输入手机格式"),n.abrupt("return");case 12:if(!t.cross){n.next=28;break}if(u=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==u){n.next=28;break}if(c=e.getStorageSync("crossObj"),u.startsWith("[")){n.next=24;break}for(l in c)l==u&&(c[l]=s);return f=e.getStorageSync("crossTable"),n.next=22,t.$api.update("".concat(f),c);case 22:n.next=28;break;case 24:r=Number(e.getStorageSync("userid")),i=c["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 28:if(!i||!r){n.next=50;break}return t.ruleForm.crossuserid=r,t.ruleForm.crossrefid=i,d={page:1,limit:10,crossuserid:r,crossrefid:i},n.next=34,t.$api.list("jiaoshi",d);case 34:if(g=n.sent,!(g.data.total>=o)){n.next=40;break}return t.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 40:if(!t.ruleForm.id){n.next=45;break}return n.next=43,t.$api.update("jiaoshi",t.ruleForm);case 43:n.next=47;break;case 45:return n.next=47,t.$api.add("jiaoshi",t.ruleForm);case 47:t.$utils.msgBack("提交成功");case 48:n.next=58;break;case 50:if(!t.ruleForm.id){n.next=55;break}return n.next=53,t.$api.update("jiaoshi",t.ruleForm);case 53:n.next=57;break;case 55:return n.next=57,t.$api.add("jiaoshi",t.ruleForm);case 57:t.$utils.msgBack("提交成功");case 58:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),a=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(n,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,n("543d")["default"])},d4bd:function(e,t,n){"use strict";n.r(t);var a=n("b4ca"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},ef0d:function(e,t,n){"use strict";var a,r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}))},f548:function(e,t,n){"use strict";var a=n("9702"),r=n.n(a);r.a}},[["ad32","common/runtime","common/vendor"]]]);