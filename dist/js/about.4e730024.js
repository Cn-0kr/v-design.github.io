"use strict";(self["webpackChunkfe"]=self["webpackChunkfe"]||[]).push([[594],{64837:function(e,a,i){i.r(a),i.d(a,{default:function(){return d}});var t=function(){var e=this,a=e._self._c;return a("div",[a("headComponentWithQuote",{attrs:{textColor:"#000"}}),a("div",{staticClass:"about"},[e._m(0),a("el-form",{ref:"dynamicValidateForm",staticClass:"demo-dynamic",attrs:{model:e.dynamicValidateForm,rules:e.rules,"label-width":"190px"}},[a("el-form-item",{attrs:{prop:"name",label:"Name",rules:[{required:!0,message:"请输入name",trigger:"blur"}]}},[a("br"),a("el-input",{model:{value:e.dynamicValidateForm.name,callback:function(a){e.$set(e.dynamicValidateForm,"name",a)},expression:"dynamicValidateForm.name"}})],1),a("el-form-item",{attrs:{prop:"email",label:"email",rules:[{required:!0,message:"请输入email",trigger:"blur"},{type:"email",message:"请输入正确的email",trigger:["blur","change"]}]}},[a("br"),a("el-input",{model:{value:e.dynamicValidateForm.email,callback:function(a){e.$set(e.dynamicValidateForm,"email",a)},expression:"dynamicValidateForm.email"}})],1),a("el-form-item",{attrs:{prop:"phone",label:"Tel"}},[a("br"),a("el-input",{model:{value:e.dynamicValidateForm.phone,callback:function(a){e.$set(e.dynamicValidateForm,"phone",a)},expression:"dynamicValidateForm.phone"}})],1),a("el-form-item",{attrs:{prop:"message",label:"Comment or Message",rules:[{required:!0,message:"请输入有效信息",trigger:"blur"}]}},[a("br"),a("el-input",{model:{value:e.dynamicValidateForm.message,callback:function(a){e.$set(e.dynamicValidateForm,"message",a)},expression:"dynamicValidateForm.message"}})],1),a("div",{staticClass:"isolation"}),a("el-form-item",[a("el-button",{attrs:{type:"info",plain:""},on:{click:function(a){return e.submitForm("dynamicValidateForm")}}},[e._v("提交")])],1)],1),a("div",{attrs:{id:"container"}}),a("div",{staticClass:"isolation"}),e._m(1)],1)],1)},n=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"introText"},[a("p",[e._v("VincDesign是一間位於香港的設計工作室，於台灣設有分工作室，我們專注於品牌設計、視覺形象、網頁及包裝設計，設計屢獲殊榮，"),a("br"),e._v("包括 DFA亞洲最具影響力設計獎、Topawards Asia、環球設計大獎 HKDA Global Design Awards、 Communication Arts、"),a("br"),e._v("International Design Award、Creativity International Awards and Muse Creative Awards。")]),a("p",[e._v("你也可以關注我們的 Facebook 和 Instagram , 了解更多關於我們的資訊。")]),a("p",[e._v("您可以给我们发送信息： ")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"query"},[a("div",{staticClass:"common"},[a("h5",[e._v("一般查詢")]),a("p",[e._v("香港")]),a("a",{attrs:{href:"#"}},[e._v("info@vincdesign.com")]),a("p",[e._v("Tel / Whatsapp +852 6716 9968")]),a("p",[e._v("香港大角咀必發道67號201室")]),a("br"),a("p",[e._v("台灣 @vvebrand")]),a("a",{attrs:{href:"#"}},[e._v("info@vincdesign.com")]),a("p",[e._v("Tel / +886 02 85228670")]),a("p",[e._v("Line / vvebrand")]),a("p",[e._v("新北市新莊區新北大道四段179號14樓")])]),a("div",{staticClass:"priceandjoin"},[a("h5",[e._v("報價查詢")]),a("a",{attrs:{href:"#"}},[e._v("info@vincdesign.com")]),a("br"),a("a",{attrs:{href:"#"}},[e._v("info@vincdesign.com")]),a("br"),a("h5",[e._v("加入我們")]),a("a",{attrs:{href:"#"}},[e._v("info@vincdesign.com")])]),a("div",{staticClass:"location"},[a("h5",[e._v("我們的位置")]),a("a",{attrs:{href:"#"}},[e._v("高德地图")])])])}],o=(i(44114),i(45686)),r={data(){const e=(e,a,i)=>{""===a?i(new Error("请输入电话号码")):(/^1\d{10}$/.test(a)||i(new Error("手机号码格式不正确")),i())};return{dynamicValidateForm:{name:"",email:"",phone:"",message:""},rules:{phone:[{required:!0,validator:e,trigger:"blur"}]},infoWindow:null}},methods:{submitForm(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;console.log(this.dynamicValidateForm),this.$http.post("/user",this.dynamicValidateForm).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}))},lockMapBounds(e){var a=e.getBounds();e.setLimitBounds(a)}},components:{headComponentWithQuote:o.A},mounted(){AMapLoader.load({key:"270eaf47a6467b161f89264318a07d04",version:"2.0"}).then((e=>{const a=new e.Map("container",{viewMode:"2D",zoom:18,center:[121.400292,31.244376]}),i=new e.Marker({position:[121.400292,31.244376]});a.add(i),e.plugin("AMap.MouseTool",(function(){var i=new e.MouseTool(a);i.close()})),this.lockMapBounds(a);const t=[];t.push('<div><div><img style="float:left;" src=" https://webapi.amap.com/images/autonavi.png "/></div> '),t.push('<div style="padding:0px 0px 0px 4px;"><b>高德软件</b>'),t.push("电话 : 010-84107000   邮编 : 100102"),t.push("地址 :北京市朝阳区望京阜荣街10号首开广场4层</div></div>"),this.infoWindow=new e.InfoWindow({content:t.join("<br/>"),offset:new e.Pixel(10,10)}),this.infoWindow.open(a,a.getCenter())})).catch((e=>{console.error(e)}))}},s=r,l=i(81656),m=(0,l.A)(s,t,n,!1,null,"bfba3532",null),d=m.exports}}]);
//# sourceMappingURL=about.4e730024.js.map