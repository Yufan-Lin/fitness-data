(function(e){function t(t){for(var o,s,a=t[0],l=t[1],i=t[2],u=0,f=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);b&&b(t);while(f.length)f.shift()();return r.push.apply(r,i||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],o=!0,a=1;a<c.length;a++){var l=c[a];0!==n[l]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=c[0]))}return e}var o={},n={index:0},r=[];function s(t){if(o[t])return o[t].exports;var c=o[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=o,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(c,o,function(t){return e[t]}.bind(null,o));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/fitness-data/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var b=l;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0f51":function(e,t,c){"use strict";c("9c48")},"3e4f":function(e,t,c){"use strict";c("c428")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var o=c("7a23");function n(e,t){var c=Object(o["v"])("router-view");return Object(o["q"])(),Object(o["d"])(c)}c("0f51");var r=c("6b0d"),s=c.n(r);const a={},l=s()(a,[["render",n]]);var i=l,b=c("6c02"),u={class:"login-container"},f={class:"container"},d={class:"row align-items-center justify-content-center",style:{height:"100vh"}},m={class:"col-10 col-md-7 col-lg-5"},h=Object(o["f"])("h1",{class:"my-text"},"學員健身資料系統",-1),p={class:"rounded-3 my-background-color-secondary my-view-shadow"},O={class:"ps-5 pe-5 pt-4 pb-4"},j={class:"mb-2"},v=Object(o["f"])("label",{for:"exampleInputEmail1",class:"d-flex form-label my-text"},"教練帳號",-1),y={class:"mb-4"},g=Object(o["f"])("label",{for:"exampleInputPassword1",class:"d-flex form-label my-text"},"密碼",-1),w={class:"d-grid"},x=Object(o["f"])("label",{class:"form-label"},null,-1);function I(e,t,c,n,r,s){return Object(o["q"])(),Object(o["e"])("div",u,[Object(o["f"])("div",f,[Object(o["f"])("div",d,[Object(o["f"])("div",m,[h,Object(o["f"])("div",p,[Object(o["f"])("form",O,[Object(o["f"])("div",j,[v,Object(o["D"])(Object(o["f"])("input",{type:"text",class:Object(o["m"])(["form-control",{border:e.hasSubmit&&!e.account,"border-danger":e.hasSubmit&&!e.account}]),id:"exampleInputEmail1",placeholder:"請輸入帳號","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.account=t})},null,2),[[o["A"],e.account]])]),Object(o["f"])("div",y,[g,Object(o["D"])(Object(o["f"])("input",{type:"password",class:Object(o["m"])(["form-control",{border:e.hasSubmit&&!e.password,"border-danger":e.hasSubmit&&!e.password}]),id:"exampleInputPassword1",placeholder:"請輸入密碼","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,2),[[o["A"],e.password]])]),Object(o["f"])("div",w,[x,Object(o["f"])("button",{type:"submit",class:"btn my-primary-style",onClick:t[2]||(t[2]=function(){return s.onLogin&&s.onLogin.apply(s,arguments)})},"登入")])])])])])])])}c("99af");var M={data:function(){return{hasSubmit:!1,account:"",password:""}},methods:{onLogin:function(e){this.hasSubmit=!0,this.account&&this.password&&(e.preventDefault(),console.log("Account: ".concat(this.account,", Password: ").concat(this.password)),this.$router.push("/list"))}}};c("e36e");const S=s()(M,[["render",I]]);var A=S,k=Object(o["f"])("nav",{class:"navbar navigation"},[Object(o["f"])("div",{class:"container-fluid"},[Object(o["f"])("span",{class:"navbar-brand mb-0 h1 my-text"},"學員健身資料系統")])],-1),D={class:"container align-self-stretch p-2"},q={class:"row"},C={class:"col-auto"},T={class:"col my-auto"},V={class:"col-auto my-auto"},P=Object(o["f"])("div",{class:"col-auto my-auto"},[Object(o["f"])("button",{class:"btn my-accent-color-secondary"},"排序")],-1),U={class:"row mt-2"},F={key:0},G={key:1},_=Object(o["f"])("h1",null,"無資料",-1),L=[_];function $(e,t,c,n,r,s){var a=Object(o["v"])("member-cell"),l=Object(o["v"])("add-member");return Object(o["q"])(),Object(o["e"])(o["a"],null,[k,Object(o["f"])("div",D,[Object(o["f"])("div",q,[Object(o["f"])("div",C,[Object(o["f"])("button",{class:"btn my-accent-color-primary btn-add-member rounded-circle",onClick:t[0]||(t[0]=function(){return s.onAddMember&&s.onAddMember.apply(s,arguments)})})]),Object(o["f"])("div",T,[Object(o["D"])(Object(o["f"])("input",{class:"form-control text-start",type:"text",placeholder:"請輸入學員名稱或編號","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.searchText=t})},null,512),[[o["A"],e.searchText]])]),Object(o["f"])("div",V,[Object(o["f"])("button",{class:"btn my-accent-color-primary",onClick:t[2]||(t[2]=function(){return s.onRemoveSearchText&&s.onRemoveSearchText.apply(s,arguments)})},"清除")]),P]),Object(o["f"])("div",U,[s.filteredInfos.length>0?(Object(o["q"])(),Object(o["e"])("div",F,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["u"])(s.filteredInfos,(function(e){return Object(o["q"])(),Object(o["d"])(a,{class:"col-12 mb-3",key:e.id,info:e,onClick:function(t){return s.onClickCell(e)},onDeleteMember:function(t){return s.deleteMember(e)}},null,8,["info","onClick","onDeleteMember"])})),128))])):(Object(o["q"])(),Object(o["e"])("div",G,L))])]),Object(o["D"])(Object(o["g"])(l,{class:"",onStoreMember:s.storeMember,onCloseView:t[3]||(t[3]=function(t){return e.showAddMember=!1})},null,8,["onStoreMember"]),[[o["B"],e.showAddMember]])],64)}c("caad"),c("2532"),c("b0c0"),c("a434");var R={class:"cell-container my-background-color-secondary my-view-shadow p-0"},B={class:"row m-0"},E=Object(o["f"])("div",{class:"col-auto col-md-auto order m-1"},[Object(o["f"])("i",{class:"icon-member"})],-1),J={class:"col"},z={class:"row row-cols-1 row-cols-sm-2 row-cols-md h-100"},H={class:"col col-md m-0 align-self-center"},K={class:"col col-md-auto m-0 align-self-center"},N=Object(o["f"])("div",{class:"col col-md m-0 align-self-center"}," 32歲 ",-1),Q={class:"col col-md-auto m-0 align-self-center"},W={class:"col col-md m-0 align-self-center"},X={class:"col col-md-auto m-0 align-self-center"},Y={class:"col col-md-auto m-0 align-self-center"},Z={class:"col-auto trash-block my-accent-color-primary d-flex rounded-end"};function ee(e,t,c,n,r,s){var a;return Object(o["q"])(),Object(o["e"])("div",R,[Object(o["f"])("div",B,[E,Object(o["f"])("div",J,[Object(o["f"])("div",z,[Object(o["f"])("div",H,Object(o["x"])(c.info.name),1),Object(o["f"])("div",K,Object(o["x"])(c.info.gender),1),N,Object(o["f"])("div",Q,Object(o["x"])(c.info.birthday),1),Object(o["f"])("div",W,Object(o["x"])(c.info.height)+"cm / "+Object(o["x"])(c.info.weight)+"kg ",1),Object(o["f"])("div",X," BMI: "+Object(o["x"])(s.bmi),1),Object(o["f"])("div",Y," 體指率: "+Object(o["x"])(null!==(a=c.info.pbf)&&void 0!==a?a:"---")+"% ",1)])]),Object(o["f"])("div",Z,[Object(o["f"])("button",{class:"btn icon-trash",onClick:t[0]||(t[0]=function(e){return s.onDelete(e)})})])])])}var te={props:{info:Object},computed:{bmi:function(){if(!this.info.height&&!this.info.weight)return"---";var e=this.info.weight/Math.pow(this.info.height/100,2),t=Math.round(10*e)/10;return t}},methods:{onDelete:function(e){console.log("Delete!!"),this.$emit("deleteMember"),e.stopPropagation()}}};c("3e4f");const ce=s()(te,[["render",ee]]);var oe=ce,ne={class:"dimming-view"},re={class:"container"},se={class:"model-view align-items-center row vh-100 d-inline-flex"},ae={class:"col my-background-color-primary ps-4 pe-4 rounded-3"},le={class:"row mb-1"},ie={class:"col-auto"},be=Object(o["f"])("div",{class:"col my-auto"},[Object(o["f"])("p",{class:"h5 my-auto"},"新增學員")],-1),ue={class:"col-auto my-auto"},fe={class:"row mb-2"},de=Object(o["f"])("div",{class:"col my-auto text-start"},[Object(o["f"])("label",{for:"nameInput",class:"form-label m-0 h5"},"姓名")],-1),me={class:"col-8"},he={class:"row mb-2"},pe=Object(o["f"])("div",{class:"col my-auto text-start"},[Object(o["f"])("label",{for:"birthdayInput",class:"form-label m-0 h5"},"生日")],-1),Oe={class:"col-8"},je={class:"row mb-2"},ve=Object(o["f"])("div",{class:"col my-auto text-start"},[Object(o["f"])("label",{for:"genderInput",class:"form-label m-0 h5"},"性別")],-1),ye={class:"col-8"},ge=Object(o["f"])("option",{value:"男"},"男",-1),we=Object(o["f"])("option",{value:"女"},"女",-1),xe=[ge,we],Ie={class:"row mb-2"},Me=Object(o["f"])("div",{class:"col my-auto text-start"},[Object(o["f"])("label",{for:"heightInput",class:"form-label m-0 h5"},"身高(cm)")],-1),Se={class:"col-8"},Ae={class:"row mb-2"},ke=Object(o["f"])("div",{class:"col my-auto text-start"},[Object(o["f"])("label",{for:"weightInput",class:"form-label m-0 h5"},"體重(kg)")],-1),De={class:"col-8"},qe={class:"row mb-2"},Ce=Object(o["f"])("div",{class:"col my-auto text-start"},[Object(o["f"])("label",{for:"careerInput",class:"form-label m-0 h5"},"職業")],-1),Te={class:"col-8"},Ve={class:"row mb-2"},Pe=Object(o["f"])("div",{class:"col my-auto text-start"},[Object(o["f"])("label",{for:"sportFrequencyInput",class:"form-label m-0 h5"},"運動頻率")],-1),Ue={class:"col-8"},Fe={class:"row mb-2"},Ge=Object(o["f"])("div",{class:"col my-auto text-start"},[Object(o["f"])("label",{for:"sportGoalInput",class:"form-label m-0 h5"},"運動目標")],-1),_e={class:"col-8"};function Le(e,t,c,n,r,s){return Object(o["q"])(),Object(o["e"])("div",ne,[Object(o["f"])("div",re,[Object(o["f"])("div",se,[Object(o["f"])("div",ae,[Object(o["f"])("div",le,[Object(o["f"])("div",ie,[Object(o["f"])("button",{class:"btn my-btn-close",onClick:t[0]||(t[0]=function(){return s.closeAddMember&&s.closeAddMember.apply(s,arguments)})})]),be,Object(o["f"])("div",ue,[Object(o["f"])("button",{class:"btn my-accent-color-primary",onClick:t[1]||(t[1]=function(){return s.storeMember&&s.storeMember.apply(s,arguments)})},"新增")])]),Object(o["f"])("div",fe,[de,Object(o["f"])("div",me,[Object(o["D"])(Object(o["f"])("input",{id:"nameInput",class:Object(o["m"])(["form-control text-start",{border:e.hasSubmit&&!e.name,"border-danger":e.hasSubmit&&!e.name}]),type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.name=t})},null,2),[[o["A"],e.name]])])]),Object(o["f"])("div",he,[pe,Object(o["f"])("div",Oe,[Object(o["D"])(Object(o["f"])("input",{id:"birthdayInput",class:Object(o["m"])(["form-control text-start",{border:e.hasSubmit&&!e.birthday,"border-danger":e.hasSubmit&&!e.birthday}]),type:"date","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.birthday=t})},null,2),[[o["A"],e.birthday]])])]),Object(o["f"])("div",je,[ve,Object(o["f"])("div",ye,[Object(o["D"])(Object(o["f"])("select",{class:"form-select text-center","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.gender=t})},xe,512),[[o["z"],e.gender]])])]),Object(o["f"])("div",Ie,[Me,Object(o["f"])("div",Se,[Object(o["D"])(Object(o["f"])("input",{id:"heightInput",class:Object(o["m"])(["form-control text-start",{border:e.hasSubmit&&!e.height,"border-danger":e.hasSubmit&&!e.height}]),type:"text","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.height=t})},null,2),[[o["A"],e.height]])])]),Object(o["f"])("div",Ae,[ke,Object(o["f"])("div",De,[Object(o["D"])(Object(o["f"])("input",{id:"weightInput",class:Object(o["m"])(["form-control text-start",{border:e.hasSubmit&&!e.weight,"border-danger":e.hasSubmit&&!e.weight}]),type:"text","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.weight=t})},null,2),[[o["A"],e.weight]])])]),Object(o["f"])("div",qe,[Ce,Object(o["f"])("div",Te,[Object(o["D"])(Object(o["f"])("input",{id:"careerInput",class:"form-control text-start",type:"text","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.career=t})},null,512),[[o["A"],e.career]])])]),Object(o["f"])("div",Ve,[Pe,Object(o["f"])("div",Ue,[Object(o["D"])(Object(o["f"])("input",{id:"sportFrequencyInput",class:"form-control text-start",type:"text","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.sportFrequancy=t})},null,512),[[o["A"],e.sportFrequancy]])])]),Object(o["f"])("div",Fe,[Ge,Object(o["f"])("div",_e,[Object(o["D"])(Object(o["f"])("input",{id:"sportGoalInput",class:"form-control text-start",type:"text","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.sportGoal=t})},null,512),[[o["A"],e.sportGoal]])])])])])])])}var $e={data:function(){return{hasSubmit:!1,name:"",birthday:"",gender:"男",height:"",weight:"",career:"",sportFrequancy:"",sportGoal:""}},methods:{closeAddMember:function(){this.$emit("close-view"),this.resetInfo()},storeMember:function(){if(this.hasSubmit=!0,this.name&&this.birthday&&this.height&&this.weight){var e={id:(new Date).getTime(),name:this.name,birthday:this.birthday,gender:this.gender,height:this.height,weight:this.weight,career:this.career,sportFrequancy:this.sportFrequancy,sportGoal:this.sportGoal};this.$emit("store-member",e),console.log("info: "+e.id),this.resetInfo(),console.log("reset!!")}},resetInfo:function(){this.hasSubmit=!1,this.name="",this.birthday="",this.gender="男",this.height="",this.weight="",this.career="",this.sportFrequancy="",this.sportGoal=""}}};c("e920");const Re=s()($e,[["render",Le]]);var Be=Re,Ee={components:{MemberCell:oe,AddMember:Be},data:function(){return{showAddMember:!1,searchText:"",memberInfos:[{id:0,name:"王大明",gender:"男",birthday:"1992-03-01",height:172,weight:82,pbf:20},{id:1,name:"陳小美",gender:"女",birthday:"2003-11-15",height:155,weight:52,pbf:32}]}},computed:{filteredInfos:function(){var e=[];if(this.searchText)for(var t in this.memberInfos){var c=this.memberInfos[t];(c.name.includes(this.searchText)||c.id==this.searchText)&&e.push(c)}else e=this.memberInfos;return e}},methods:{onClickCell:function(e){console.log("Selected info: ".concat(e.name))},onAddMember:function(){this.showAddMember=!0},storeMember:function(e){this.showAddMember=!1,this.memberInfos.push(e)},deleteMember:function(e){for(var t in this.memberInfos)this.memberInfos[t].id===e.id&&this.memberInfos.splice(t,1)},onRemoveSearchText:function(){this.searchText=""}}};c("6f1f");const Je=s()(Ee,[["render",$]]);var ze=Je,He=[{path:"/",name:"Login",component:A},{path:"/list",name:"List",component:ze}],Ke=Object(b["a"])({history:Object(b["b"])(),routes:He}),Ne=Ke,Qe=c("5502"),We=Object(Qe["a"])({state:{},mutations:{},actions:{},modules:{}});c("ab8b"),c("7b17"),c("96b1");Object(o["c"])(i).use(We).use(Ne).mount("#app"),String.prototype.hashCode=function(){var e,t,c=0;if(0===this.length)return c;for(e=0;e<this.length;e++)t=this.charCodeAt(e),c=(c<<5)-c+t,c|=0;return c}},"5d1a":function(e,t,c){},"6f1f":function(e,t,c){"use strict";c("a0e0")},"90b7":function(e,t,c){},"96b1":function(e,t,c){},"9c48":function(e,t,c){},a0e0:function(e,t,c){},c428:function(e,t,c){},e36e:function(e,t,c){"use strict";c("90b7")},e920:function(e,t,c){"use strict";c("5d1a")}});
//# sourceMappingURL=index.3b6913cd.js.map