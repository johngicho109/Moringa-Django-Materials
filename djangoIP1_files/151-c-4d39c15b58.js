(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[151],{"6g58":function(t,e,n){"use strict"
var r=n("Y/W1")
var o=n.n(r)
var i=n("mX+G")
var a=n("2gWY")
var s=function(t,e){for(var n in e)_.call(e,n)&&(t[n]=e[n])
function r(){this.constructor=t}r.prototype=e.prototype
t.prototype=new r
t.__super__=e.prototype
return t},_={}.hasOwnProperty
e["a"]=function(t){s(e,t)
function e(){return e.__super__.constructor.apply(this,arguments)}e.mixin(a["a"])
e.prototype.initialize=function(){e.__super__.initialize.apply(this,arguments)
if(o.a.has(this,"url"))return delete this.url}
e.prototype.resourceName="external_tools"
e.prototype.computedAttributes=[{name:"custom_fields_string",deps:["custom_fields"]}]
e.prototype.urlRoot=function(){return"/api/v1/"+this._contextPath()+"/create_tool_with_verification"}
e.prototype.custom_fields_string=function(){var t,e
return function(){var n,r
n=this.get("custom_fields")
r=[]
for(t in n){e=n[t]
r.push(t+"="+e)}return r}.call(this).join("\n")}
e.prototype.launchUrl=function(t,e){var n,r,o,i
null==e&&(e={})
r=function(){var t
t=[]
for(n in e){i=e[n]
t.push(n+"="+i)}return t}()
o="/"+this._contextPath()+"/external_tools/"+this.id+"/resource_selection?launch_type="+t
r.length>0&&(o=o+"&"+r.join("&"))
return o}
e.prototype.assetString=function(){return"context_external_tool_"+this.id}
return e}(i["Model"])},JrkR:function(t,e,n){var r={"./__tests__/handleLtiPostMessage.test.js":["meBD",4116],"./__tests__/lti.resourceImported.test.js":["TgQ9",4064],"./__tests__/requestFullWindowLaunch.test.js":["kzID",4065],"./handleLtiPostMessage.js":["vBsS"],"./lti.resourceImported.js":["WrIf",4117],"./messageTypes.js":["bj3y"],"./requestFullWindowLaunch.js":["vC4c",4118],"./toggleCourseNavigationMenu.js":["cHZI",3619,4119]}
function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'")
e.code="MODULE_NOT_FOUND"
throw e}))
var e=r[t],o=e[0]
return Promise.all(e.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)}
o.id="JrkR"
t.exports=o},P6Tl:function(t,e,n){"use strict"
n.d(e,"a",(function(){return o}))
var r=n("hK1/")
function o(t){const e=r["a"].fromEvent(t,i)
if(e)return e.process()}async function i(){if(this.contentItems.length>0)return this.contentItems[0]}},QAiK:function(t,e,n){"use strict"
var r=n("ouhR")
var o=n.n(r)
var i=n("mX+G")
var a=n.n(i)
var s=n("3O+N")
var _=n.n(s)
var d=n("HGxv")
var l=n("8WeW")
Object(l["a"])(JSON.parse('{"ar":{"the_following_content_is_partner_provided_ed1da756":"?????????????? ???????????? ???? ???????????? ???????????? ????????","the_preceding_content_is_partner_provided_d753928c":"?????????????? ???????????? ???? ???????????? ???????????? ????????","tool_content_2924d18f":"?????????? ????????????"},"ca":{"the_following_content_is_partner_provided_ed1da756":"El contingut seg??ent est?? proporcionat per prove??dors","the_preceding_content_is_partner_provided_d753928c":"El contingut anterior est?? proporcionat per prove??dors","tool_content_2924d18f":"Contingut de l\'eina"},"cy":{"the_following_content_is_partner_provided_ed1da756":"Mae???r cynnwys canlynol yn cael ei ddarparu gan bartner","the_preceding_content_is_partner_provided_d753928c":"Mae???r cynnwys blaenorol yn cael ei ddarparu gan bartner","tool_content_2924d18f":"Cynnwys adnodd"},"da":{"the_following_content_is_partner_provided_ed1da756":"F??lgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foreg??ende indhold er partnerleveret","tool_content_2924d18f":"V??rkt??jsindhold"},"da-x-k12":{"the_following_content_is_partner_provided_ed1da756":"F??lgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foreg??ende indhold er partnerleveret","tool_content_2924d18f":"V??rkt??jsindhold"},"de":{"the_following_content_is_partner_provided_ed1da756":"Der folgende Content stammt von einem Partner.","the_preceding_content_is_partner_provided_d753928c":"Der vorhergehende Content stammt von einem Partner.","tool_content_2924d18f":"Tool-Inhalt"},"el":{"tool_content_2924d18f":"?????????????????????? ??????????????????"},"en-AU":{"the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided","tool_content_2924d18f":"Tool content"},"en-AU-x-unimelb":{"the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided","tool_content_2924d18f":"Tool content"},"en-CA":{"the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided","tool_content_2924d18f":"Tool content"},"en-GB":{"the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided","tool_content_2924d18f":"Tool content"},"en-GB-x-lbs":{"the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided","tool_content_2924d18f":"Tool content"},"en-GB-x-ukhe":{"the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided","tool_content_2924d18f":"Tool content"},"es":{"the_following_content_is_partner_provided_ed1da756":"El siguiente contenido est?? proporcionado por un socio","the_preceding_content_is_partner_provided_d753928c":"El contenido anterior est?? proporcionado por un socio","tool_content_2924d18f":"Contenido de herramienta"},"fa":{"the_following_content_is_partner_provided_ed1da756":"???????????? ?????? ???????? ???????? ?????????? ?????? ??????","the_preceding_content_is_partner_provided_d753928c":"???????????? ?????????? ???????? ???????? ?????????? ?????? ??????","tool_content_2924d18f":"???????????? ??????????"},"fi":{"the_following_content_is_partner_provided_ed1da756":"Seuraava sis??lt?? on kumppanin toimittamaa","the_preceding_content_is_partner_provided_d753928c":"Edelt??v?? sis??lt?? on kumppanin toimittamaa","tool_content_2924d18f":"Ty??kalun sis??lt??"},"fr":{"the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par un partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu qui pr??c??de ??tait fourni par un partenaire","tool_content_2924d18f":"Contenu de l\'outil"},"fr-CA":{"the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par le partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu pr??c??dent est fourni par le partenaire","tool_content_2924d18f":"Contenu de l\'outil"},"he":{"tool_content_2924d18f":"???????? ????????"},"ht":{"the_following_content_is_partner_provided_ed1da756":"Kontni annapre a se yon asosye ki bay li","the_preceding_content_is_partner_provided_d753928c":"Kontni anvan an se yon asosye ki bay li","tool_content_2924d18f":"Zouti kontni"},"hu":{"the_following_content_is_partner_provided_ed1da756":"A k??vetkez?? tartalmat partner biztos??tja","the_preceding_content_is_partner_provided_d753928c":"Az el??z?? tartalmat partner biztos??tja","tool_content_2924d18f":"Eszk??ztartalom"},"hy":{"tool_content_2924d18f":"???????????????????????? ??????????????????????????????"},"is":{"the_following_content_is_partner_provided_ed1da756":"Eftirfarandi efni er gefi?? upp af samstarfsa??ila","the_preceding_content_is_partner_provided_d753928c":"Framangreint efni er gefi?? upp af samstarfsa??ila","tool_content_2924d18f":"T??laefni"},"it":{"the_following_content_is_partner_provided_ed1da756":"I contenuti seguenti sono forniti dal partner","the_preceding_content_is_partner_provided_d753928c":"I contenuti precedenti sono forniti dal partner","tool_content_2924d18f":"Contenuto strumento"},"ja":{"the_following_content_is_partner_provided_ed1da756":"??????????????????????????????????????????????????????????????????","the_preceding_content_is_partner_provided_d753928c":"??????????????????????????????????????????????????????????????????","tool_content_2924d18f":"????????????????????????"},"mi":{"the_following_content_is_partner_provided_ed1da756":"Ko ng?? k??rero e whai ake nei he hoa mahi","the_preceding_content_is_partner_provided_d753928c":"Ko te tuhinga o mua he hoa mahi","tool_content_2924d18f":"ihirangi taputapu"},"nb":{"the_following_content_is_partner_provided_ed1da756":"F??lgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foreg??ende innholdet er gitt av en partner","tool_content_2924d18f":"Verkt??y-innhold"},"nb-x-k12":{"the_following_content_is_partner_provided_ed1da756":"F??lgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foreg??ende innholdet er gitt av en partner","tool_content_2924d18f":"Verkt??y-innhold"},"nl":{"the_following_content_is_partner_provided_ed1da756":"De volgende inhoud is door een partner geleverd","the_preceding_content_is_partner_provided_d753928c":"De voorgaande inhoud is door een partner geleverd","tool_content_2924d18f":"Toolinhoud"},"nn":{"the_following_content_is_partner_provided_ed1da756":"F??lgande innhald er lagt til av partnar","the_preceding_content_is_partner_provided_d753928c":"Det f??reg??ande innhaldet er lagt til av partnar","tool_content_2924d18f":"Verkt??yinnhald"},"pl":{"the_following_content_is_partner_provided_ed1da756":"Nast??puj??c?? zawarto???? dostarcza partner","the_preceding_content_is_partner_provided_d753928c":"Poprzedni?? zawarto???? dostarcza partner","tool_content_2924d18f":"Zawarto???? narz??dzi"},"pt":{"the_following_content_is_partner_provided_ed1da756":"O parceiro fornece o seguinte conte??do","the_preceding_content_is_partner_provided_d753928c":"O conte??do anterior ?? parceiro fornecido","tool_content_2924d18f":"Conte??do de Ferramentas"},"pt-BR":{"the_following_content_is_partner_provided_ed1da756":"O seguinte conte??do ?? fornecido por parceiro","the_preceding_content_is_partner_provided_d753928c":"O conte??do precedente ?? fornecido por parceiro","tool_content_2924d18f":"Conte??do de ferramentas"},"ru":{"the_following_content_is_partner_provided_ed1da756":"?????????????????????? ?????????????? ?????????????????????????????? ??????????????????","the_preceding_content_is_partner_provided_d753928c":"???????????????????? ?????????????? ?????????????????????????????? ??????????????????","tool_content_2924d18f":"?????????????? ??????????????????????"},"sl":{"the_following_content_is_partner_provided_ed1da756":"Naslednjo vsebino zagotavljajo partnerji.","the_preceding_content_is_partner_provided_d753928c":"Predhodno vsebino zagotavljajo partnerji.","tool_content_2924d18f":"Vsebina orodja"},"sv":{"the_following_content_is_partner_provided_ed1da756":"F??ljande inneh??ll har tillhandah??llits av partner","the_preceding_content_is_partner_provided_d753928c":"Det f??reg??ende inneh??llet har tillhandah??llits av partner","tool_content_2924d18f":"Verktygsinneh??ll"},"sv-x-k12":{"the_following_content_is_partner_provided_ed1da756":"F??ljande inneh??ll har tillhandah??llits av partner","the_preceding_content_is_partner_provided_d753928c":"Det f??reg??ende inneh??llet har tillhandah??llits av partner","tool_content_2924d18f":"Verktygsinneh??ll"},"tr":{"tool_content_2924d18f":"Ara?? i??eri??i"},"uk":{"the_following_content_is_partner_provided_ed1da756":"?????????????????? ?????????????? ?????????????? ??????????????????","the_preceding_content_is_partner_provided_d753928c":"???????????????????? ?????????????? ?????????????? ??????????????????","tool_content_2924d18f":"?????????????? ??????????????????????"},"zh-Hans":{"the_following_content_is_partner_provided_ed1da756":"?????????????????????????????????","the_preceding_content_is_partner_provided_d753928c":"?????????????????????????????????","tool_content_2924d18f":"????????????"},"zh-Hant":{"the_following_content_is_partner_provided_ed1da756":"?????????????????????????????????","the_preceding_content_is_partner_provided_d753928c":"?????????????????????????????????","tool_content_2924d18f":"????????????"}}'))
n("jQeR")
n("0sPK")
d["default"].scoped("external_tools.external_content_return_view")
n("BGrI")
var c=_.a.default
var p=c.template,h=c.templates=c.templates||{}
var u="/work/canvas-deploy/generated/ui/shared/external-tools/jst/ExternalContentReturnView"
h[u]=p((function(t,e,n,r,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,t.helpers)
o=o||{}
var i,a,s,_="",d=n.helperMissing,l=this.escapeExpression,c="function"
_+='<div class="before_external_content_info_alert screenreader-only" tabindex="0">\n  <div class="ic-flash-info">\n    <div class="ic-flash__icon" aria-hidden="true">\n      <i class="icon-info"></i>\n    </div>\n    '+l((a=n.t||e&&e.t,s={hash:{scope:"external_tools.external_content_return_view"},data:o},a?a.call(e,"The following content is partner provided",s):d.call(e,"t","The following content is partner provided",s)))+'\n  </div>\n</div>\n<iframe\n  tabindex="0"\n  class="tool_launch"\n  src="'
if(a=n.launch_url)i=a.call(e,{hash:{},data:o})
else{a=e&&e.launch_url
i=typeof a===c?a.call(e,{hash:{},data:o}):a}_+=l(i)+'"\n  title="'+l((a=n.t||e&&e.t,s={hash:{i18n_inferred_key:true},data:o},a?a.call(e,"tool_content_2924d18f","Tool content",s):d.call(e,"t","tool_content_2924d18f","Tool content",s)))+'"\n  allow="'
if(a=n.allowances)i=a.call(e,{hash:{},data:o})
else{a=e&&e.allowances
i=typeof a===c?a.call(e,{hash:{},data:o}):a}_+=l(i)+'"\n  data-lti-launch="true"\n>\n</iframe>\n<div class="after_external_content_info_alert screenreader-only" tabindex="0">\n  <div class="ic-flash-info">\n    <div class="ic-flash__icon" aria-hidden="true">\n      <i class="icon-info"></i>\n    </div>\n    '+l((a=n.t||e&&e.t,s={hash:{scope:"external_tools.external_content_return_view"},data:o},a?a.call(e,"The preceding content is partner provided",s):d.call(e,"t","The preceding content is partner provided",s)))+"\n  </div>\n</div>\n"
return _}))
var f=h[u]
var g=n("dDTa")
var v=function(t,e){return function(){return t.apply(e,arguments)}},m=function(t,e){for(var n in e)y.call(e,n)&&(t[n]=e[n])
function r(){this.constructor=t}r.prototype=e.prototype
t.prototype=new r
t.__super__=e.prototype
return t},y={}.hasOwnProperty
e["a"]=function(t){m(e,t)
function e(){this._contentCancel=v(this._contentCancel,this)
this._contentReady=v(this._contentReady,this)
this.removeDialog=v(this.removeDialog,this)
this.handleAlertBlur=v(this.handleAlertBlur,this)
return e.__super__.constructor.apply(this,arguments)}e.prototype.template=f
e.optionProperty("launchType")
e.optionProperty("launchParams")
e.optionProperty("displayAsModal")
e.prototype.defaults={displayAsModal:true}
e.prototype.els={"iframe.tool_launch":"$iframe"}
e.prototype.events={"focus .before_external_content_info_alert":"handleAlertFocus","focus .after_external_content_info_alert":"handleAlertFocus","blur .before_external_content_info_alert":"handleAlertBlur","blur .after_external_content_info_alert":"handleAlertBlur"}
e.prototype.handleAlertFocus=function(t){o()(t.target).removeClass("screenreader-only")
return this.$el.find("iframe").addClass("info_alert_outline")}
e.prototype.handleAlertBlur=function(t){o()(t.target).addClass("screenreader-only")
return this.$el.find("iframe").removeClass("info_alert_outline")}
e.prototype.attach=function(){return this.model.on("change",(t=this,function(){return t.render()}))
var t}
e.prototype.toJSON=function(){var t
t=e.__super__.toJSON.apply(this,arguments)
t.allowances=Object(g["a"])()
t.launch_url=this.model.launchUrl(this.launchType,this.launchParams)
return t}
e.prototype.afterRender=function(){var t,e
this.attachLtiEvents()
e=this.model.get(this.launchType)||{}
this.$iframe.width("100%")
this.$iframe.height(e.selection_height)
if(this.displayAsModal)return this.$el.dialog({title:(null!=(t=this.model.get(this.launchType))?t.label:void 0)||"",width:e.selection_width,height:e.selection_height,resizable:true,close:this.removeDialog})}
e.prototype.attachLtiEvents=function(){o()(window).on("externalContentReady",this._contentReady)
return o()(window).on("externalContentCancel",this._contentCancel)}
e.prototype.detachLtiEvents=function(){o()(window).off("externalContentReady",this._contentReady)
return o()(window).off("externalContentCancel",this._contentCancel)}
e.prototype.removeDialog=function(){this.detachLtiEvents()
return this.remove()}
e.prototype._contentReady=function(t,e){this.trigger("ready",e)
return this.removeDialog()}
e.prototype._contentCancel=function(t,e){this.trigger("cancel",e)
return this.removeDialog()}
return e}(a.a.View)},bj3y:function(t,e,n){"use strict"
n.r(e)
n.d(e,"whitelist",(function(){return o}))
n.d(e,"ignorelist",(function(){return i}))
var r=n("fhP7")
const o=["requestFullWindowLaunch","lti.resourceImported","toggleCourseNavigationMenu"]
const i=["A2ExternalContentReady","LtiDeepLinkingResponse",r["i"],r["b"],r["j"]]},dDTa:function(t,e,n){"use strict"
const r=()=>{const t=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return t.join("; ")}
e["a"]=r},fhP7:function(t,e,n){"use strict"
n.d(e,"k",(function(){return r}))
n.d(e,"e",(function(){return o}))
n.d(e,"f",(function(){return i}))
n.d(e,"g",(function(){return a}))
n.d(e,"h",(function(){return s}))
n.d(e,"l",(function(){return _}))
n.d(e,"i",(function(){return d}))
n.d(e,"b",(function(){return l}))
n.d(e,"j",(function(){return c}))
n.d(e,"c",(function(){return p}))
n.d(e,"d",(function(){return h}))
n.d(e,"a",(function(){return u}))
const r="@"
const o="mentions-marker"
const i="span#"+o
const a="mention-menu"
const s="span#mention-menu"
const _=ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN
const d="mentions.NavigationEvent"
const l="mentions.InputChangeEvent"
const c="mentions.SelectionEvent"
const p={backspace:8,enter:13,up:38,down:40,escape:27,tab:9}
const h={[p.up]:"UpArrow",[p.down]:"DownArrow",[p.enter]:"Enter"}
const u={ariaControlTemplate:t=>t+"-mention-popup",activeDescendant:(t,e)=>`${t}-mention-popup-item-${e}`}},"hK1/":function(t,e,n){"use strict"
n.d(e,"a",(function(){return p}))
var r=n("ouhR")
var o=n.n(r)
var i=n("dDTa")
class a{constructor(t){this.assignProperties(t)}toHtmlString(){}assignProperties(t){this.properties.forEach(e=>{this[e]=t[e]})}linkThumbnail(){return this.imageTag(this.thumbnail)}iframeTag(){const t=this.iframe
if(t){const e=document.createElement("iframe")
e.setAttribute("src",t.src)
e.setAttribute("title",this.title||"")
e.setAttribute("allowfullscreen","true")
e.setAttribute("allow",Object(i["a"])())
t.width&&(e.style.width=t.width+"px")
t.height&&(e.style.height=t.height+"px")
return e.outerHTML}}imageTag(t,e,n){const r=document.createElement("img")
r.setAttribute("src",t)
this.text&&r.setAttribute("alt",this.text)
e&&r.setAttribute("width",e)
n&&r.setAttribute("height",n)
return r.outerHTML}anchorTag(t){const e=document.createElement("a")
e.setAttribute("href",this.safeUrl())
e.setAttribute("title",this.title)
e.setAttribute("target","_blank")
e.innerHTML=t
return e.outerHTML}safeUrl(){return this.url.replace(/^(data:text\/html|javascript:)/,"#$1")}}class s extends a{constructor(t,e,n){super(t)
this.type=s.type
n&&""!==n&&(this.text=n)}get properties(){return Object.freeze(["url","title","text","icon","thumbnail","iframe","custom","lookup_uuid"])}toHtmlString(){if(this.iframe&&this.iframe.src)return this.iframeTag()
return this.anchorTag(this.linkBody())}linkText(){return this.text&&this.text.trim()||this.title&&this.title.trim()}linkBody(){if(this.thumbnail)return this.linkThumbnail()
return this.linkText()}}s.type="link"
class _ extends s{constructor(t,e,n){super(t,e,n)
this.url=`${e}?${this.ltiEndpointParams(t.url,t.lookup_uuid)}`}ltiEndpointParams(t,e){let n="display=borderless"
null!==e&&void 0!==e&&(n+="&resource_link_lookup_uuid="+e)
return`${n}&url=${encodeURIComponent(t)}`}toHtmlString(){if(this.iframe){this.iframe.src=this.safeUrl()
return this.iframeTag()}return this.anchorTag(this.linkBody())}}class d extends a{constructor(t){super(t)
this.type=d.type}get properties(){return Object.freeze(["url","title","thumbnail","text","width","height"])}toHtmlString(){if(this.thumbnail)return this.anchorTag(this.linkThumbnail())
return this.imageTag(this.safeUrl(),this.width,this.height)}}d.type="image"
class l extends a{constructor(t){super(t)
this.type=l.type}get properties(){return Object.freeze(["html","title","text"])}toHtmlString(){return this.html}}l.type="html"
var c=n("vBsS")
class p{constructor(t,e,n,r,o){this.contentItems=t
this.messages=e
this.logs=n
this.ltiEndpoint=r
this.processHandler=o
this.showMessages()
this.showLogs()}get loggingEnabled(){return ENV&&ENV.DEEP_LINKING_LOGGING}get typeMap(){return{link:s,ltiResourceLink:_,image:d,html:l}}static fromEvent(t,e){const n=t.data,r=n.content_items,o=n.msg,i=n.log,a=n.errormsg,s=n.errorlog,_=n.ltiEndpoint,d=n.messageType
if("LtiDeepLinkingResponse"!==d)return
return new this(r,{msg:o,errormsg:a},{log:i,errorlog:s},_,e)}process(){null!==c["ltiState"]&&void 0!==c["ltiState"]&&c["ltiState"].fullWindowProxy&&c["ltiState"].fullWindowProxy.close()
return this.processHandler(...arguments)}showMessages(){this.messages.errormsg&&o.a.flashError(this.messages.errormsg)
this.messages.msg&&o.a.flashMessage(this.messages.msg)}showLogs(){if(this.loggingEnabled){this.logs.errorlog&&console.error(this.logs.errorlog)
this.logs.log&&console.log(this.logs.log)}}}},plYi:function(t,e,n){"use strict"
var r=n("HGxv")
e["a"]={strings(t,e){let n=r["default"].locale||"en-US"
const o={zh_Hant:"zh-Hant"}
n=o[n]||n
return t.localeCompare(e,n,{sensitivity:"variant",ignorePunctuation:false,numeric:true})},by(t){return(e,n)=>this.strings(t(e),t(n))},byKey(t){return this.by(e=>e[t])},byGet(t){return this.by(e=>e.get(t))}}},vBsS:function(t,e,n){"use strict"
n.r(e)
n.d(e,"ltiState",(function(){return o}))
var r=n("bj3y")
const o={}
const i=async t=>{const e=t.data,o=e.messageType,i=e.data
let a
if(r["ignorelist"].includes(o))return false
if(!r["whitelist"].includes(o)){console.error("invalid messageType: "+o)
return false}try{const t=await n("JrkR")(`./${o}.js`)
a=t.default
a(i)
return true}catch(t){console.error(`Error loading or executing message handler for "${o}"`,t)}}
e["default"]=i}}])

//# sourceMappingURL=151-c-4d39c15b58.js.map