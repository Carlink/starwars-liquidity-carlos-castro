import{l as ot,c as Ce,m as T,d as we,e as Se,a as P,g as ke,h as xe,i as Ee,b as R,n as Le,o as Ve,p as re,u as rt,q as ut,r as ct,k as I,j as M,s as dt,V as ft}from"./VIcon-7f02ab2e.js";import{K as ue,p as S,L as G,c as f,s as o,M as vt,N as ce,t as X,l as V,v as q,w as mt,u as x,g as Ie,d as gt,e as Te,i as ht,j as J,y as K,a as pt,C as yt,o as bt,O as _t,P as Ct,k as wt,z as St,D as kt,r as W,S as xt,b as Et,Q as Lt,R as Vt,U as de,J as It,V as Tt,W as fe,X as Pt,Y as ve,Z as $t,_ as Nt,$ as O,a0 as Q,n as Pe,E as $e,F as Ne,G as k,H as D,a1 as Z}from"./index-03257c27.js";const Bt=["top","bottom"],Rt=["start","end","left","right"];function jt(e,t){let[n,s]=e.split(" ");return s||(s=ue(Bt,n)?"start":ue(Rt,n)?"top":"center"),{side:me(n,t),align:me(s,t)}}function me(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const At=[null,"default","comfortable","compact"],Be=S({density:{type:String,default:"default",validator:e=>At.includes(e)}},"density");function Re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{densityClasses:f(()=>`${t}--density-${e.density}`)}}const Gt=["elevated","flat","tonal","outlined","text","plain"];function Ot(e,t){return o(vt,null,[e&&o("span",{key:"overlay",class:`${t}__overlay`},null),o("span",{key:"underlay",class:`${t}__underlay`},null)])}const je=S({color:String,variant:{type:String,default:"elevated",validator:e=>Gt.includes(e)}},"variant");function zt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();const n=f(()=>{const{variant:i}=ce(e);return`${t}--variant-${i}`}),{colorClasses:s,colorStyles:a}=ot(f(()=>{const{variant:i,color:l}=ce(e);return{[["elevated","flat"].includes(i)?"background":"text"]:l}}));return{colorClasses:s,colorStyles:a,variantClasses:n}}const Ae=S({divided:Boolean,...Ce(),...T(),...Be(),...we(),...Se(),...P(),...X(),...je()},"v-btn-group"),ge=V()({name:"VBtnGroup",props:Ae(),setup(e,t){let{slots:n}=t;const{themeClasses:s}=q(e),{densityClasses:a}=Re(e),{borderClasses:i}=ke(e),{elevationClasses:l}=xe(e),{roundedClasses:c}=Ee(e);mt({VBtn:{height:"auto",color:x(e,"color"),density:x(e,"density"),flat:!0,variant:x(e,"variant")}}),R(()=>o(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},s.value,i.value,a.value,l.value,c.value,e.class],style:e.style},n))}}),Mt=S({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Dt=S({value:null,disabled:Boolean,selectedClass:String},"group-item");function Ut(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=Ie("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=gt();Te(Symbol.for(`${t.description}:id`),a);const i=ht(t,null);if(!i){if(!n)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const l=x(e,"value"),c=f(()=>i.disabled.value||e.disabled);i.register({id:a,value:l,disabled:c},s),J(()=>{i.unregister(a)});const r=f(()=>i.isSelected(a)),g=f(()=>r.value&&[i.selectedClass.value,e.selectedClass]);return K(r,p=>{s.emit("group:selected",{value:p})}),{id:a,isSelected:r,toggle:()=>i.select(a,!r.value),select:p=>i.select(a,p),selectedClass:g,value:l,disabled:c,group:i}}function Ht(e,t){let n=!1;const s=pt([]),a=yt(e,"modelValue",[],u=>u==null?[]:Ge(s,Ct(u)),u=>{const d=Yt(s,u);return e.multiple?d:d[0]}),i=Ie("useGroup");function l(u,d){const h=u,m=Symbol.for(`${t.description}:id`),b=wt(m,i==null?void 0:i.vnode).indexOf(d);b>-1?s.splice(b,0,h):s.push(h)}function c(u){if(n)return;r();const d=s.findIndex(h=>h.id===u);s.splice(d,1)}function r(){const u=s.find(d=>!d.disabled);u&&e.mandatory==="force"&&!a.value.length&&(a.value=[u.id])}bt(()=>{r()}),J(()=>{n=!0});function g(u,d){const h=s.find(m=>m.id===u);if(!(d&&(h!=null&&h.disabled)))if(e.multiple){const m=a.value.slice(),y=m.findIndex(v=>v===u),b=~y;if(d=d??!b,b&&e.mandatory&&m.length<=1||!b&&e.max!=null&&m.length+1>e.max)return;y<0&&d?m.push(u):y>=0&&!d&&m.splice(y,1),a.value=m}else{const m=a.value.includes(u);if(e.mandatory&&m)return;a.value=d??!m?[u]:[]}}function p(u){if(e.multiple&&St('This method is not supported when using "multiple" prop'),a.value.length){const d=a.value[0],h=s.findIndex(b=>b.id===d);let m=(h+u)%s.length,y=s[m];for(;y.disabled&&m!==h;)m=(m+u)%s.length,y=s[m];if(y.disabled)return;a.value=[s[m].id]}else{const d=s.find(h=>!h.disabled);d&&(a.value=[d.id])}}const w={register:l,unregister:c,selected:a,select:g,disabled:x(e,"disabled"),prev:()=>p(s.length-1),next:()=>p(1),isSelected:u=>a.value.includes(u),selectedClass:f(()=>e.selectedClass),items:f(()=>s),getItemIndex:u=>Wt(s,u)};return Te(t,w),w}function Wt(e,t){const n=Ge(e,[t]);return n.length?e.findIndex(s=>s.id===n[0]):-1}function Ge(e,t){const n=[];for(let s=0;s<e.length;s++){const a=e[s];a.value!=null?t.find(i=>_t(i,a.value))!=null&&n.push(a.id):t.includes(s)&&n.push(a.id)}return n}function Yt(e,t){const n=[];for(let s=0;s<e.length;s++){const a=e[s];t.includes(a.id)&&n.push(a.value!=null?a.value:s)}return n}const Oe=Symbol.for("vuetify:v-btn-toggle");V()({name:"VBtnToggle",props:{...Ae(),...Mt()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{isSelected:s,next:a,prev:i,select:l,selected:c}=Ht(e,Oe);return R(()=>{const[r]=ge.filterProps(e);return o(ge,kt({class:["v-btn-toggle",e.class]},r,{style:e.style}),{default:()=>{var g;return[(g=n.default)==null?void 0:g.call(n,{isSelected:s,next:a,prev:i,select:l,selected:c})]}})}),{next:a,prev:i,select:l}}});function Ft(e,t){const n=W(),s=W(!1);if(xt){const a=new IntersectionObserver(i=>{e==null||e(i,a),s.value=!!i.find(l=>l.isIntersecting)},t);J(()=>{a.disconnect()}),K(n,(i,l)=>{l&&(a.unobserve(l),s.value=!1),i&&a.observe(i)},{flush:"post"})}return{intersectionRef:n,isIntersecting:s}}const Xt=V()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...T(),...Le(),...P({tag:"div"}),...X()},setup(e,t){let{slots:n}=t;const s=20,a=2*Math.PI*s,i=W(),{themeClasses:l}=q(e),{sizeClasses:c,sizeStyles:r}=Ve(e),{textColorClasses:g,textColorStyles:p}=re(x(e,"color")),{textColorClasses:w,textColorStyles:u}=re(x(e,"bgColor")),{intersectionRef:d,isIntersecting:h}=Ft(),{resizeRef:m,contentRect:y}=rt(),b=f(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),v=f(()=>Number(e.width)),_=f(()=>r.value?Number(e.size):y.value?y.value.width:Math.max(v.value,32)),$=f(()=>s/(1-v.value/_.value)*2),E=f(()=>v.value/_.value*$.value),z=f(()=>Et((100-b.value)/100*a));return Lt(()=>{d.value=i.value,m.value=i.value}),R(()=>o(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":h.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,c.value,g.value,e.class],style:[r.value,p.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:b.value},{default:()=>[o("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${$.value} ${$.value}`},[o("circle",{class:["v-progress-circular__underlay",w.value],style:u.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":E.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),o("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":E.value,"stroke-dasharray":a,"stroke-dashoffset":z.value},null)]),n.default&&o("div",{class:"v-progress-circular__content"},[n.default({value:b.value})])]})),{}}});const Y=Symbol("rippleStop"),qt=80;function he(e,t){e.style.transform=t,e.style.webkitTransform=t}function F(e){return e.constructor.name==="TouchEvent"}function ze(e){return e.constructor.name==="KeyboardEvent"}const Jt=function(e,t){var w;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,a=0;if(!ze(e)){const u=t.getBoundingClientRect(),d=F(e)?e.touches[e.touches.length-1]:e;s=d.clientX-u.left,a=d.clientY-u.top}let i=0,l=.3;(w=t._ripple)!=null&&w.circle?(l=.15,i=t.clientWidth/2,i=n.center?i:i+Math.sqrt((s-i)**2+(a-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=`${(t.clientWidth-i*2)/2}px`,r=`${(t.clientHeight-i*2)/2}px`,g=n.center?c:`${s-i}px`,p=n.center?r:`${a-i}px`;return{radius:i,scale:l,x:g,y:p,centerX:c,centerY:r}},A={show(e,t){var d;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=t==null?void 0:t._ripple)!=null&&d.enabled))return;const s=document.createElement("span"),a=document.createElement("span");s.appendChild(a),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:i,scale:l,x:c,y:r,centerX:g,centerY:p}=Jt(e,t,n),w=`${i*2}px`;a.className="v-ripple__animation",a.style.width=w,a.style.height=w,t.appendChild(s);const u=window.getComputedStyle(t);u&&u.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),he(a,`translate(${c}, ${r}) scale3d(${l},${l},${l})`),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),he(a,`translate(${g}, ${p}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),a=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var c;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((c=n.parentNode)==null?void 0:c.parentNode)===e&&e.removeChild(n.parentNode)},300)},a)}};function Me(e){return typeof e>"u"||!!e}function N(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[Y])){if(e[Y]=!0,F(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||ze(e),n._ripple.class&&(t.class=n._ripple.class),F(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{A.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},qt)}else A.show(e,n,t)}}function pe(e){e[Y]=!0}function C(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{C(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),A.hide(t)}}function De(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let B=!1;function Ue(e){!B&&(e.keyCode===de.enter||e.keyCode===de.space)&&(B=!0,N(e))}function He(e){B=!1,C(e)}function We(e){B&&(B=!1,C(e))}function Ye(e,t,n){const{value:s,modifiers:a}=t,i=Me(s);if(i||A.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=a.center,e._ripple.circle=a.circle,Vt(s)&&s.class&&(e._ripple.class=s.class),i&&!n){if(a.stop){e.addEventListener("touchstart",pe,{passive:!0}),e.addEventListener("mousedown",pe);return}e.addEventListener("touchstart",N,{passive:!0}),e.addEventListener("touchend",C,{passive:!0}),e.addEventListener("touchmove",De,{passive:!0}),e.addEventListener("touchcancel",C),e.addEventListener("mousedown",N),e.addEventListener("mouseup",C),e.addEventListener("mouseleave",C),e.addEventListener("keydown",Ue),e.addEventListener("keyup",He),e.addEventListener("blur",We),e.addEventListener("dragstart",C,{passive:!0})}else!i&&n&&Fe(e)}function Fe(e){e.removeEventListener("mousedown",N),e.removeEventListener("touchstart",N),e.removeEventListener("touchend",C),e.removeEventListener("touchmove",De),e.removeEventListener("touchcancel",C),e.removeEventListener("mouseup",C),e.removeEventListener("mouseleave",C),e.removeEventListener("keydown",Ue),e.removeEventListener("keyup",He),e.removeEventListener("dragstart",C),e.removeEventListener("blur",We)}function Kt(e,t){Ye(e,t,!1)}function Qt(e){delete e._ripple,Fe(e)}function Zt(e,t){if(t.value===t.oldValue)return;const n=Me(t.oldValue);Ye(e,t,n)}const en={mounted:Kt,unmounted:Qt,updated:Zt},ye={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},tn=S({location:String},"location");function nn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=It();return{locationStyles:f(()=>{if(!e.location)return{};const{side:i,align:l}=jt(e.location.split(" ").length>1?e.location:`${e.location} center`,s.value);function c(g){return n?n(g):0}const r={};return i!=="center"&&(t?r[ye[i]]=`calc(100% - ${c(i)}px)`:r[i]=0),l!=="center"?t?r[ye[l]]=`calc(100% - ${c(l)}px)`:r[l]=0:(i==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),r})}}const sn=S({loading:[Boolean,String]},"loader");function an(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{loaderClasses:f(()=>({[`${t}--loading`]:e.loading}))}}const ln=["static","relative","fixed","absolute","sticky"],on=S({position:{type:String,validator:e=>ln.includes(e)}},"position");function rn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{positionClasses:f(()=>e.position?`${t}--${e.position}`:void 0)}}function un(e,t){const n=Tt("RouterLink"),s=f(()=>!!(e.href||e.to)),a=f(()=>(s==null?void 0:s.value)||fe(t,"click")||fe(e,"click"));if(typeof n=="string")return{isLink:s,isClickable:a,href:x(e,"href")};const i=e.to?n.useLink(e):void 0;return{isLink:s,isClickable:a,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&f(()=>{var l,c;return e.exact?(l=i.isExactActive)==null?void 0:l.value:(c=i.isActive)==null?void 0:c.value}),href:f(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const cn=S({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function dn(e,t){K(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&t&&Pt(()=>{t(!0)})},{immediate:!0})}const fn=S({active:{type:Boolean,default:void 0},symbol:{type:null,default:Oe},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ve,appendIcon:ve,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},text:String,...Ce(),...T(),...Be(),...ut(),...we(),...Dt(),...sn(),...tn(),...on(),...Se(),...cn(),...Le(),...P({tag:"button"}),...X(),...je({variant:"elevated"})},"v-btn"),U=V()({name:"VBtn",directives:{Ripple:en},props:fn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:n,slots:s}=t;const{themeClasses:a}=q(e),{borderClasses:i}=ke(e),{colorClasses:l,colorStyles:c,variantClasses:r}=zt(e),{densityClasses:g}=Re(e),{dimensionStyles:p}=ct(e),{elevationClasses:w}=xe(e),{loaderClasses:u}=an(e),{locationStyles:d}=nn(e),{positionClasses:h}=rn(e),{roundedClasses:m}=Ee(e),{sizeClasses:y,sizeStyles:b}=Ve(e),v=Ut(e,e.symbol,!1),_=un(e,n),$=f(()=>{var L;return e.active!==void 0?e.active:_.isLink.value?(L=_.isActive)==null?void 0:L.value:v==null?void 0:v.isSelected.value}),E=f(()=>(v==null?void 0:v.disabled.value)||e.disabled),z=f(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),at=f(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function it(L){var j;E.value||((j=_.navigate)==null||j.call(_,L),v==null||v.toggle())}return dn(_,v==null?void 0:v.select),R(()=>{var ae,ie;const L=_.isLink.value?"a":e.tag,j=!!(e.prependIcon||s.prepend),lt=!!(e.appendIcon||s.append),ne=!!(e.icon&&e.icon!==!0),se=(v==null?void 0:v.isSelected.value)&&(!_.isLink.value||((ae=_.isActive)==null?void 0:ae.value))||!v||((ie=_.isActive)==null?void 0:ie.value);return $t(o(L,{type:L==="a"?void 0:"button",class:["v-btn",v==null?void 0:v.selectedClass.value,{"v-btn--active":$.value,"v-btn--block":e.block,"v-btn--disabled":E.value,"v-btn--elevated":z.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},a.value,i.value,se?l.value:void 0,g.value,w.value,u.value,h.value,m.value,y.value,r.value,e.class],style:[se?c.value:void 0,p.value,d.value,b.value,e.style],disabled:E.value||void 0,href:_.href.value,onClick:it,value:at.value},{default:()=>{var le;return[Ot(!0,"v-btn"),!e.icon&&j&&o("span",{key:"prepend",class:"v-btn__prepend"},[s.prepend?o(M,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},s.prepend):o(I,{key:"prepend-icon",icon:e.prependIcon},null)]),o("span",{class:"v-btn__content","data-no-activator":""},[!s.default&&ne?o(I,{key:"content-icon",icon:e.icon},null):o(M,{key:"content-defaults",disabled:!ne,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var oe;return[((oe=s.default)==null?void 0:oe.call(s))??e.text]}})]),!e.icon&&lt&&o("span",{key:"append",class:"v-btn__append"},[s.append?o(M,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},s.append):o(I,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&o("span",{key:"loader",class:"v-btn__loader"},[((le=s.loader)==null?void 0:le.call(s))??o(Xt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Nt("ripple"),!E.value&&e.ripple,null]])}),{}}}),vn="/assets/logo-3f834fa8.svg";const mn=V()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...T(),...P()},setup(e,t){let{slots:n}=t;return R(()=>o(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},e.class],style:e.style},n)),{}}}),Xe=(()=>O.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),qe=(()=>O.reduce((e,t)=>{const n="offset"+Q(t);return e[n]={type:[String,Number],default:null},e},{}))(),Je=(()=>O.reduce((e,t)=>{const n="order"+Q(t);return e[n]={type:[String,Number],default:null},e},{}))(),be={col:Object.keys(Xe),offset:Object.keys(qe),order:Object.keys(Je)};function gn(e,t,n){let s=e;if(!(n==null||n===!1)){if(t){const a=t.replace(e,"");s+=`-${a}`}return e==="col"&&(s="v-"+s),e==="col"&&(n===""||n===!0)||(s+=`-${n}`),s.toLowerCase()}}const hn=["auto","start","end","center","baseline","stretch"],H=V()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...Xe,offset:{type:[String,Number],default:null},...qe,order:{type:[String,Number],default:null},...Je,alignSelf:{type:String,default:null,validator:e=>hn.includes(e)},...T(),...P()},setup(e,t){let{slots:n}=t;const s=f(()=>{const a=[];let i;for(i in be)be[i].forEach(c=>{const r=e[c],g=gn(i,c,r);g&&a.push(g)});const l=a.some(c=>c.startsWith("v-col-"));return a.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return Pe(e.tag,{class:[s.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),ee=["start","end","center"],Ke=["space-between","space-around","space-evenly"];function te(e,t){return O.reduce((n,s)=>{const a=e+Q(s);return n[a]=t(),n},{})}const pn=[...ee,"baseline","stretch"],Qe=e=>pn.includes(e),Ze=te("align",()=>({type:String,default:null,validator:Qe})),yn=[...ee,...Ke],et=e=>yn.includes(e),tt=te("justify",()=>({type:String,default:null,validator:et})),bn=[...ee,...Ke,"stretch"],nt=e=>bn.includes(e),st=te("alignContent",()=>({type:String,default:null,validator:nt})),_e={align:Object.keys(Ze),justify:Object.keys(tt),alignContent:Object.keys(st)},_n={align:"align",justify:"justify",alignContent:"align-content"};function Cn(e,t,n){let s=_n[e];if(n!=null){if(t){const a=t.replace(e,"");s+=`-${a}`}return s+=`-${n}`,s.toLowerCase()}}const wn=V()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Qe},...Ze,justify:{type:String,default:null,validator:et},...tt,alignContent:{type:String,default:null,validator:nt},...st,...T(),...P()},setup(e,t){let{slots:n}=t;const s=f(()=>{const a=[];let i;for(i in _e)_e[i].forEach(l=>{const c=e[l],r=Cn(i,l,c);r&&a.push(r)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return Pe(e.tag,{class:["v-row",s.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),Sn=Z("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to",-1),kn=Z("h1",{class:"text-h2 font-weight-bold"},"Vuetify",-1),xn=Z("div",{class:"py-14"},null,-1),En={__name:"HelloWorld",setup(e){return(t,n)=>($e(),Ne(mn,{class:"fill-height"},{default:k(()=>[o(dt,{class:"d-flex align-center text-center fill-height"},{default:k(()=>[o(ft,{height:"300",src:vn}),Sn,kn,xn,o(wn,{class:"d-flex align-center justify-center"},{default:k(()=>[o(H,{cols:"auto"},{default:k(()=>[o(U,{href:"https://vuetifyjs.com/components/all/","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text"},{default:k(()=>[o(I,{icon:"mdi-view-dashboard",size:"large",start:""}),D(" Components ")]),_:1})]),_:1}),o(H,{cols:"auto"},{default:k(()=>[o(U,{color:"primary",href:"https://vuetifyjs.com/introduction/why-vuetify/#feature-guides","min-width":"228",rel:"noopener noreferrer",size:"x-large",target:"_blank",variant:"flat"},{default:k(()=>[o(I,{icon:"mdi-speedometer",size:"large",start:""}),D(" Get Started ")]),_:1})]),_:1}),o(H,{cols:"auto"},{default:k(()=>[o(U,{href:"https://community.vuetifyjs.com/","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text"},{default:k(()=>[o(I,{icon:"mdi-account-group",size:"large",start:""}),D(" Community ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},In={__name:"Home",setup(e){return(t,n)=>($e(),Ne(En))}};export{In as default};