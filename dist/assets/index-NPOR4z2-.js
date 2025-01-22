const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Order-CIDNUOlq.js","assets/cart-D-VxgFkT.css","assets/Auth-CtLKnUNC.js","assets/Auth-CTK1C6mu.css","assets/Error-Dp-rRU3N.js","assets/Error-B8-f3oAx.css","assets/Layout-Bu7iHFx5.js","assets/Fotter-B6qDOztV.js","assets/Footer-BBRFhgTQ.css","assets/Layout-BWPitPjy.css","assets/HorizontalproductDetsil-Cj-gkFsu.js","assets/ProductDetsilStyle.module-NKZOF980.js","assets/ProductDetsilStyle-CfW-hC6Y.css","assets/Rating-DzKdsViK.js","assets/Index-DTbOE8w6.js","assets/index-Chjiymov.js","assets/ImageWithLoader-NLeYE-qQ.js","assets/ImageWithLoader-BWf5mQqc.css","assets/Index-B4EbkvyE.css","assets/Cart-Dw98BrCR.js","assets/ProductDetail-Cegwulw7.js","assets/Product-DdMs9qCW.js","assets/Product-CI1y6V8e.css","assets/Payment-Bcx1BuNN.js"])))=>i.map(i=>d[i]);
function vw(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Ew(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var vd={exports:{}},Fa={},Ed={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function ww(){if(wg)return Ce;wg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function R(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,$={};function U(V,K,de){this.props=V,this.context=K,this.refs=$,this.updater=de||x}U.prototype.isReactComponent={},U.prototype.setState=function(V,K){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,K,"setState")},U.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function H(){}H.prototype=U.prototype;function Y(V,K,de){this.props=V,this.context=K,this.refs=$,this.updater=de||x}var ee=Y.prototype=new H;ee.constructor=Y,F(ee,U.prototype),ee.isPureReactComponent=!0;var oe=Array.isArray,Se=Object.prototype.hasOwnProperty,pe={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(V,K,de){var Re,Ae={},xe=null,be=null;if(K!=null)for(Re in K.ref!==void 0&&(be=K.ref),K.key!==void 0&&(xe=""+K.key),K)Se.call(K,Re)&&!N.hasOwnProperty(Re)&&(Ae[Re]=K[Re]);var Fe=arguments.length-2;if(Fe===1)Ae.children=de;else if(1<Fe){for(var $e=Array(Fe),vt=0;vt<Fe;vt++)$e[vt]=arguments[vt+2];Ae.children=$e}if(V&&V.defaultProps)for(Re in Fe=V.defaultProps,Fe)Ae[Re]===void 0&&(Ae[Re]=Fe[Re]);return{$$typeof:n,type:V,key:xe,ref:be,props:Ae,_owner:pe.current}}function A(V,K){return{$$typeof:n,type:V.type,key:K,ref:V.ref,props:V.props,_owner:V._owner}}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var K={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(de){return K[de]})}var L=/\/+/g;function C(V,K){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):K.toString(36)}function Xe(V,K,de,Re,Ae){var xe=typeof V;(xe==="undefined"||xe==="boolean")&&(V=null);var be=!1;if(V===null)be=!0;else switch(xe){case"string":case"number":be=!0;break;case"object":switch(V.$$typeof){case n:case e:be=!0}}if(be)return be=V,Ae=Ae(be),V=Re===""?"."+C(be,0):Re,oe(Ae)?(de="",V!=null&&(de=V.replace(L,"$&/")+"/"),Xe(Ae,K,de,"",function(vt){return vt})):Ae!=null&&(k(Ae)&&(Ae=A(Ae,de+(!Ae.key||be&&be.key===Ae.key?"":(""+Ae.key).replace(L,"$&/")+"/")+V)),K.push(Ae)),1;if(be=0,Re=Re===""?".":Re+":",oe(V))for(var Fe=0;Fe<V.length;Fe++){xe=V[Fe];var $e=Re+C(xe,Fe);be+=Xe(xe,K,de,$e,Ae)}else if($e=R(V),typeof $e=="function")for(V=$e.call(V),Fe=0;!(xe=V.next()).done;)xe=xe.value,$e=Re+C(xe,Fe++),be+=Xe(xe,K,de,$e,Ae);else if(xe==="object")throw K=String(V),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return be}function _t(V,K,de){if(V==null)return V;var Re=[],Ae=0;return Xe(V,Re,"","",function(xe){return K.call(de,xe,Ae++)}),Re}function xt(V){if(V._status===-1){var K=V._result;K=K(),K.then(function(de){(V._status===0||V._status===-1)&&(V._status=1,V._result=de)},function(de){(V._status===0||V._status===-1)&&(V._status=2,V._result=de)}),V._status===-1&&(V._status=0,V._result=K)}if(V._status===1)return V._result.default;throw V._result}var ze={current:null},ne={transition:null},me={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:ne,ReactCurrentOwner:pe};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:_t,forEach:function(V,K,de){_t(V,function(){K.apply(this,arguments)},de)},count:function(V){var K=0;return _t(V,function(){K++}),K},toArray:function(V){return _t(V,function(K){return K})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ce.Component=U,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=Y,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=ie,Ce.cloneElement=function(V,K,de){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Re=F({},V.props),Ae=V.key,xe=V.ref,be=V._owner;if(K!=null){if(K.ref!==void 0&&(xe=K.ref,be=pe.current),K.key!==void 0&&(Ae=""+K.key),V.type&&V.type.defaultProps)var Fe=V.type.defaultProps;for($e in K)Se.call(K,$e)&&!N.hasOwnProperty($e)&&(Re[$e]=K[$e]===void 0&&Fe!==void 0?Fe[$e]:K[$e])}var $e=arguments.length-2;if($e===1)Re.children=de;else if(1<$e){Fe=Array($e);for(var vt=0;vt<$e;vt++)Fe[vt]=arguments[vt+2];Re.children=Fe}return{$$typeof:n,type:V.type,key:Ae,ref:xe,props:Re,_owner:be}},Ce.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ce.createElement=I,Ce.createFactory=function(V){var K=I.bind(null,V);return K.type=V,K},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(V){return{$$typeof:d,render:V}},Ce.isValidElement=k,Ce.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:xt}},Ce.memo=function(V,K){return{$$typeof:y,type:V,compare:K===void 0?null:K}},Ce.startTransition=function(V){var K=ne.transition;ne.transition={};try{V()}finally{ne.transition=K}},Ce.unstable_act=ie,Ce.useCallback=function(V,K){return ze.current.useCallback(V,K)},Ce.useContext=function(V){return ze.current.useContext(V)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(V){return ze.current.useDeferredValue(V)},Ce.useEffect=function(V,K){return ze.current.useEffect(V,K)},Ce.useId=function(){return ze.current.useId()},Ce.useImperativeHandle=function(V,K,de){return ze.current.useImperativeHandle(V,K,de)},Ce.useInsertionEffect=function(V,K){return ze.current.useInsertionEffect(V,K)},Ce.useLayoutEffect=function(V,K){return ze.current.useLayoutEffect(V,K)},Ce.useMemo=function(V,K){return ze.current.useMemo(V,K)},Ce.useReducer=function(V,K,de){return ze.current.useReducer(V,K,de)},Ce.useRef=function(V){return ze.current.useRef(V)},Ce.useState=function(V){return ze.current.useState(V)},Ce.useSyncExternalStore=function(V,K,de){return ze.current.useSyncExternalStore(V,K,de)},Ce.useTransition=function(){return ze.current.useTransition()},Ce.version="18.3.1",Ce}var Tg;function pf(){return Tg||(Tg=1,Ed.exports=ww()),Ed.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function Tw(){if(Ig)return Fa;Ig=1;var n=pf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(d,p,y){var E,T={},R=null,x=null;y!==void 0&&(R=""+y),p.key!==void 0&&(R=""+p.key),p.ref!==void 0&&(x=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(T[E]=p[E]);if(d&&d.defaultProps)for(E in p=d.defaultProps,p)T[E]===void 0&&(T[E]=p[E]);return{$$typeof:e,type:d,key:R,ref:x,props:T,_owner:o.current}}return Fa.Fragment=t,Fa.jsx=h,Fa.jsxs=h,Fa}var Sg;function Iw(){return Sg||(Sg=1,vd.exports=Tw()),vd.exports}var Te=Iw(),B=pf();const Sn=Ew(B),WN=vw({__proto__:null,default:Sn},[B]);var Fu={},wd={exports:{}},Zt={},Td={exports:{}},Id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function Sw(){return Rg||(Rg=1,function(n){function e(ne,me){var ie=ne.length;ne.push(me);e:for(;0<ie;){var V=ie-1>>>1,K=ne[V];if(0<o(K,me))ne[V]=me,ne[ie]=K,ie=V;else break e}}function t(ne){return ne.length===0?null:ne[0]}function i(ne){if(ne.length===0)return null;var me=ne[0],ie=ne.pop();if(ie!==me){ne[0]=ie;e:for(var V=0,K=ne.length,de=K>>>1;V<de;){var Re=2*(V+1)-1,Ae=ne[Re],xe=Re+1,be=ne[xe];if(0>o(Ae,ie))xe<K&&0>o(be,Ae)?(ne[V]=be,ne[xe]=ie,V=xe):(ne[V]=Ae,ne[Re]=ie,V=Re);else if(xe<K&&0>o(be,ie))ne[V]=be,ne[xe]=ie,V=xe;else break e}}return me}function o(ne,me){var ie=ne.sortIndex-me.sortIndex;return ie!==0?ie:ne.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();n.unstable_now=function(){return h.now()-d}}var p=[],y=[],E=1,T=null,R=3,x=!1,F=!1,$=!1,U=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(ne){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=ne)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function oe(ne){if($=!1,ee(ne),!F)if(t(p)!==null)F=!0,xt(Se);else{var me=t(y);me!==null&&ze(oe,me.startTime-ne)}}function Se(ne,me){F=!1,$&&($=!1,H(I),I=-1),x=!0;var ie=R;try{for(ee(me),T=t(p);T!==null&&(!(T.expirationTime>me)||ne&&!O());){var V=T.callback;if(typeof V=="function"){T.callback=null,R=T.priorityLevel;var K=V(T.expirationTime<=me);me=n.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&i(p),ee(me)}else i(p);T=t(p)}if(T!==null)var de=!0;else{var Re=t(y);Re!==null&&ze(oe,Re.startTime-me),de=!1}return de}finally{T=null,R=ie,x=!1}}var pe=!1,N=null,I=-1,A=5,k=-1;function O(){return!(n.unstable_now()-k<A)}function L(){if(N!==null){var ne=n.unstable_now();k=ne;var me=!0;try{me=N(!0,ne)}finally{me?C():(pe=!1,N=null)}}else pe=!1}var C;if(typeof Y=="function")C=function(){Y(L)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,_t=Xe.port2;Xe.port1.onmessage=L,C=function(){_t.postMessage(null)}}else C=function(){U(L,0)};function xt(ne){N=ne,pe||(pe=!0,C())}function ze(ne,me){I=U(function(){ne(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ne){ne.callback=null},n.unstable_continueExecution=function(){F||x||(F=!0,xt(Se))},n.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ne?Math.floor(1e3/ne):5},n.unstable_getCurrentPriorityLevel=function(){return R},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ne){switch(R){case 1:case 2:case 3:var me=3;break;default:me=R}var ie=R;R=me;try{return ne()}finally{R=ie}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ne,me){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var ie=R;R=ne;try{return me()}finally{R=ie}},n.unstable_scheduleCallback=function(ne,me,ie){var V=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?V+ie:V):ie=V,ne){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ie+K,ne={id:E++,callback:me,priorityLevel:ne,startTime:ie,expirationTime:K,sortIndex:-1},ie>V?(ne.sortIndex=ie,e(y,ne),t(p)===null&&ne===t(y)&&($?(H(I),I=-1):$=!0,ze(oe,ie-V))):(ne.sortIndex=K,e(p,ne),F||x||(F=!0,xt(Se))),ne},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ne){var me=R;return function(){var ie=R;R=me;try{return ne.apply(this,arguments)}finally{R=ie}}}}(Id)),Id}var Ag;function Rw(){return Ag||(Ag=1,Td.exports=Sw()),Td.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function Aw(){if(Cg)return Zt;Cg=1;var n=pf(),e=Rw();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function R(r){return p.call(T,r)?!0:p.call(E,r)?!1:y.test(r)?T[r]=!0:(E[r]=!0,!1)}function x(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function F(r,s,a,c){if(s===null||typeof s>"u"||x(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(r,s,a,c,f,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){U[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];U[s]=new $(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){U[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){U[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){U[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){U[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){U[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){U[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){U[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function Y(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(H,Y);U[s]=new $(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(H,Y);U[s]=new $(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(H,Y);U[s]=new $(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){U[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),U.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){U[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function ee(r,s,a,c){var f=U.hasOwnProperty(s)?U[s]:null;(f!==null?f.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(F(s,a,f,c)&&(a=null),c||f===null?R(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,c=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var oe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),pe=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Xe=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),ne=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ne&&r[ne]||r["@@iterator"],typeof r=="function"?r:null)}var ie=Object.assign,V;function K(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var de=!1;function Re(r,s){if(!r||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var c=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){c=z}r.call(s.prototype)}else{try{throw Error()}catch(z){c=z}r()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),g=c.stack.split(`
`),v=f.length-1,S=g.length-1;1<=v&&0<=S&&f[v]!==g[S];)S--;for(;1<=v&&0<=S;v--,S--)if(f[v]!==g[S]){if(v!==1||S!==1)do if(v--,S--,0>S||f[v]!==g[S]){var P=`
`+f[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=S);break}}}finally{de=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function Ae(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function xe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case pe:return"Portal";case A:return"Profiler";case I:return"StrictMode";case C:return"Suspense";case Xe:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case L:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case _t:return s=r.displayName||null,s!==null?s:xe(r.type)||"Memo";case xt:s=r._payload,r=r._init;try{return xe(r(s))}catch{}}return null}function be(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function vt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function pr(r){r._valueTracker||(r._valueTracker=vt(r))}function Ss(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function $r(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Di(r,s){var a=s.checked;return ie({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Rs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Fe(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function qo(r,s){s=s.checked,s!=null&&ee(r,"checked",s,!1)}function Ho(r,s){qo(r,s);var a=Fe(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?As(r,s.type,a):s.hasOwnProperty("defaultValue")&&As(r,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Il(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function As(r,s,a){(s!=="number"||$r(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var mr=Array.isArray;function gr(r,s,a,c){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Fe(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function Wo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Cs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(mr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Fe(a)}}function Ps(r,s){var a=Fe(s.value),c=Fe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Ko(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ht(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ht(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var yr,Go=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=yr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function qr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oi=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(r){Oi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),xi[s]=xi[r]})});function Qo(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||xi.hasOwnProperty(r)&&xi[r]?(""+s).trim():s+"px"}function Yo(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Qo(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,f):r[a]=f}}var Xo=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jo(r,s){if(s){if(Xo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Zo(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function ks(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ns=null,dn=null,Gn=null;function Ds(r){if(r=Ia(r)){if(typeof Ns!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Zl(s),Ns(r.stateNode,r.type,s))}}function Qn(r){dn?Gn?Gn.push(r):Gn=[r]:dn=r}function ea(){if(dn){var r=dn,s=Gn;if(Gn=dn=null,Ds(r),s)for(r=0;r<s.length;r++)Ds(s[r])}}function Li(r,s){return r(s)}function ta(){}var _r=!1;function na(r,s,a){if(_r)return r(s,a);_r=!0;try{return Li(r,s,a)}finally{_r=!1,(dn!==null||Gn!==null)&&(ta(),ea())}}function rt(r,s){var a=r.stateNode;if(a===null)return null;var c=Zl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var xs=!1;if(d)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){xs=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{xs=!1}function Mi(r,s,a,c,f,g,v,S,P){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(X){this.onError(X)}}var bi=!1,Os=null,An=!1,ra=null,Kc={onError:function(r){bi=!0,Os=r}};function Vs(r,s,a,c,f,g,v,S,P){bi=!1,Os=null,Mi.apply(Kc,arguments)}function Sl(r,s,a,c,f,g,v,S,P){if(Vs.apply(this,arguments),bi){if(bi){var z=Os;bi=!1,Os=null}else throw Error(t(198));An||(An=!0,ra=z)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Fi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Pn(r){if(Cn(r)!==r)throw Error(t(188))}function Rl(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Pn(f),r;if(g===c)return Pn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var v=!1,S=f.child;S;){if(S===a){v=!0,a=f,c=g;break}if(S===c){v=!0,c=f,a=g;break}S=S.sibling}if(!v){for(S=g.child;S;){if(S===a){v=!0,a=g,c=f;break}if(S===c){v=!0,c=g,a=f;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ia(r){return r=Rl(r),r!==null?Ls(r):null}function Ls(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ls(r);if(s!==null)return s;r=r.sibling}return null}var Ms=e.unstable_scheduleCallback,sa=e.unstable_cancelCallback,Al=e.unstable_shouldYield,Gc=e.unstable_requestPaint,qe=e.unstable_now,Cl=e.unstable_getCurrentPriorityLevel,Ui=e.unstable_ImmediatePriority,Hr=e.unstable_UserBlockingPriority,fn=e.unstable_NormalPriority,oa=e.unstable_LowPriority,Pl=e.unstable_IdlePriority,ji=null,rn=null;function kl(r){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(ji,r,void 0,(r.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Dl,aa=Math.log,Nl=Math.LN2;function Dl(r){return r>>>=0,r===0?32:31-(aa(r)/Nl|0)|0}var bs=64,Fs=4194304;function Wr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function zi(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,f=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var S=v&~f;S!==0?c=Wr(S):(g&=v,g!==0&&(c=Wr(g)))}else v=a&~f,v!==0?c=Wr(v):g!==0&&(c=Wr(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&f)&&(f=c&-c,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(c&4&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-Bt(s),f=1<<a,c|=r[a],s&=~f;return c}function Qc(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-Bt(g),S=1<<v,P=f[v];P===-1?(!(S&a)||S&c)&&(f[v]=Qc(S,s)):P<=s&&(r.expiredLanes|=S),g&=~S}}function sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Bi(){var r=bs;return bs<<=1,!(bs&4194240)&&(bs=64),r}function Kr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Gr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Bt(s),r[s]=a}function Be(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Bt(a),g=1<<f;s[f]=0,c[f]=-1,r[f]=-1,a&=~g}}function Qr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Bt(a),f=1<<c;f&s|r[c]&s&&(r[c]|=s),a&=~f}}var Ne=0;function Yr(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var xl,Us,Ol,Vl,Ll,la=!1,Yn=[],Rt=null,kn=null,Nn=null,Xr=new Map,pn=new Map,Xn=[],Yc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ml(r,s){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Xr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(s.pointerId)}}function Wt(r,s,a,c,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ia(s),s!==null&&Us(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function Xc(r,s,a,c,f){switch(s){case"focusin":return Rt=Wt(Rt,r,s,a,c,f),!0;case"dragenter":return kn=Wt(kn,r,s,a,c,f),!0;case"mouseover":return Nn=Wt(Nn,r,s,a,c,f),!0;case"pointerover":var g=f.pointerId;return Xr.set(g,Wt(Xr.get(g)||null,r,s,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,pn.set(g,Wt(pn.get(g)||null,r,s,a,c,f)),!0}return!1}function bl(r){var s=Ki(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=Fi(a),s!==null){r.blockedOn=s,Ll(r.priority,function(){Ol(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Er(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=js(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Vi=c,a.target.dispatchEvent(c),Vi=null}else return s=Ia(a),s!==null&&Us(s),r.blockedOn=a,!1;s.shift()}return!0}function $i(r,s,a){Er(r)&&a.delete(s)}function Fl(){la=!1,Rt!==null&&Er(Rt)&&(Rt=null),kn!==null&&Er(kn)&&(kn=null),Nn!==null&&Er(Nn)&&(Nn=null),Xr.forEach($i),pn.forEach($i)}function Dn(r,s){r.blockedOn===s&&(r.blockedOn=null,la||(la=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fl)))}function xn(r){function s(f){return Dn(f,r)}if(0<Yn.length){Dn(Yn[0],r);for(var a=1;a<Yn.length;a++){var c=Yn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Rt!==null&&Dn(Rt,r),kn!==null&&Dn(kn,r),Nn!==null&&Dn(Nn,r),Xr.forEach(s),pn.forEach(s),a=0;a<Xn.length;a++)c=Xn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Xn.length&&(a=Xn[0],a.blockedOn===null);)bl(a),a.blockedOn===null&&Xn.shift()}var wr=oe.ReactCurrentBatchConfig,Jr=!0;function Qe(r,s,a,c){var f=Ne,g=wr.transition;wr.transition=null;try{Ne=1,ua(r,s,a,c)}finally{Ne=f,wr.transition=g}}function Jc(r,s,a,c){var f=Ne,g=wr.transition;wr.transition=null;try{Ne=4,ua(r,s,a,c)}finally{Ne=f,wr.transition=g}}function ua(r,s,a,c){if(Jr){var f=js(r,s,a,c);if(f===null)uh(r,s,c,qi,a),Ml(r,c);else if(Xc(f,r,s,a,c))c.stopPropagation();else if(Ml(r,c),s&4&&-1<Yc.indexOf(r)){for(;f!==null;){var g=Ia(f);if(g!==null&&xl(g),g=js(r,s,a,c),g===null&&uh(r,s,c,qi,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else uh(r,s,c,null,a)}}var qi=null;function js(r,s,a,c){if(qi=null,r=ks(c),r=Ki(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Fi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return qi=r,null}function ca(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cl()){case Ui:return 1;case Hr:return 4;case fn:case oa:return 16;case Pl:return 536870912;default:return 16}default:return 16}}var on=null,zs=null,Kt=null;function ha(){if(Kt)return Kt;var r,s=zs,a=s.length,c,f="value"in on?on.value:on.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===f[g-c];c++);return Kt=f.slice(r,1<c?1-c:void 0)}function Bs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Jn(){return!0}function da(){return!1}function At(r){function s(a,c,f,g,v){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Jn:da,this.isPropagationStopped=da,this}return ie(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),s}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=At(On),Zn=ie({},On,{view:0,detail:0}),Zc=At(Zn),qs,Tr,Zr,Hi=ie({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Zr&&(Zr&&r.type==="mousemove"?(qs=r.screenX-Zr.screenX,Tr=r.screenY-Zr.screenY):Tr=qs=0,Zr=r),qs)},movementY:function(r){return"movementY"in r?r.movementY:Tr}}),Hs=At(Hi),fa=ie({},Hi,{dataTransfer:0}),Ul=At(fa),Ws=ie({},Zn,{relatedTarget:0}),Ks=At(Ws),jl=ie({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Ir=At(jl),zl=ie({},On,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Bl=At(zl),$l=ie({},On,{data:0}),pa=At($l),Gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ql={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ql[r])?!!s[r]:!1}function er(){return Hl}var u=ie({},Zn,{key:function(r){if(r.key){var s=Gs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Bs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?$t[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(r){return r.type==="keypress"?Bs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Bs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=At(u),_=ie({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=At(_),M=ie({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),q=At(M),te=ie({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=At(te),ft=ie({},Hi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=At(ft),Et=[9,13,27,32],ot=d&&"CompositionEvent"in window,mn=null;d&&"documentMode"in document&&(mn=document.documentMode);var an=d&&"TextEvent"in window&&!mn,Wi=d&&(!ot||mn&&8<mn&&11>=mn),Qs=" ",mp=!1;function gp(r,s){switch(r){case"keyup":return Et.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ys=!1;function gE(r,s){switch(r){case"compositionend":return yp(s);case"keypress":return s.which!==32?null:(mp=!0,Qs);case"textInput":return r=s.data,r===Qs&&mp?null:r;default:return null}}function yE(r,s){if(Ys)return r==="compositionend"||!ot&&gp(r,s)?(r=ha(),Kt=zs=on=null,Ys=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Wi&&s.locale!=="ko"?null:s.data;default:return null}}var _E={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!_E[r.type]:s==="textarea"}function vp(r,s,a,c){Qn(c),s=Yl(s,"onChange"),0<s.length&&(a=new $s("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var ma=null,ga=null;function vE(r){bp(r,0)}function Wl(r){var s=to(r);if(Ss(s))return r}function EE(r,s){if(r==="change")return s}var Ep=!1;if(d){var eh;if(d){var th="oninput"in document;if(!th){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),th=typeof wp.oninput=="function"}eh=th}else eh=!1;Ep=eh&&(!document.documentMode||9<document.documentMode)}function Tp(){ma&&(ma.detachEvent("onpropertychange",Ip),ga=ma=null)}function Ip(r){if(r.propertyName==="value"&&Wl(ga)){var s=[];vp(s,ga,r,ks(r)),na(vE,s)}}function wE(r,s,a){r==="focusin"?(Tp(),ma=s,ga=a,ma.attachEvent("onpropertychange",Ip)):r==="focusout"&&Tp()}function TE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Wl(ga)}function IE(r,s){if(r==="click")return Wl(s)}function SE(r,s){if(r==="input"||r==="change")return Wl(s)}function RE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Vn=typeof Object.is=="function"?Object.is:RE;function ya(r,s){if(Vn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(s,f)||!Vn(r[f],s[f]))return!1}return!0}function Sp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Rp(r,s){var a=Sp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sp(a)}}function Ap(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Ap(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Cp(){for(var r=window,s=$r();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=$r(r.document)}return s}function nh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function AE(r){var s=Cp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Ap(a.ownerDocument.documentElement,a)){if(c!==null&&nh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!r.extend&&g>c&&(f=c,c=g,g=f),f=Rp(a,g);var v=Rp(a,c);f&&v&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var CE=d&&"documentMode"in document&&11>=document.documentMode,Xs=null,rh=null,_a=null,ih=!1;function Pp(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ih||Xs==null||Xs!==$r(c)||(c=Xs,"selectionStart"in c&&nh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_a&&ya(_a,c)||(_a=c,c=Yl(rh,"onSelect"),0<c.length&&(s=new $s("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Xs)))}function Kl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Js={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionend:Kl("Transition","TransitionEnd")},sh={},kp={};d&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function Gl(r){if(sh[r])return sh[r];if(!Js[r])return r;var s=Js[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in kp)return sh[r]=s[a];return r}var Np=Gl("animationend"),Dp=Gl("animationiteration"),xp=Gl("animationstart"),Op=Gl("transitionend"),Vp=new Map,Lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(r,s){Vp.set(r,s),l(s,[r])}for(var oh=0;oh<Lp.length;oh++){var ah=Lp[oh],PE=ah.toLowerCase(),kE=ah[0].toUpperCase()+ah.slice(1);ei(PE,"on"+kE)}ei(Np,"onAnimationEnd"),ei(Dp,"onAnimationIteration"),ei(xp,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(Op,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NE=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function Mp(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Sl(c,s,void 0,r),r.currentTarget=null}function bp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,z=S.currentTarget;if(S=S.listener,P!==g&&f.isPropagationStopped())break e;Mp(f,S,z),g=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,z=S.currentTarget,S=S.listener,P!==g&&f.isPropagationStopped())break e;Mp(f,S,z),g=P}}}if(An)throw r=ra,An=!1,ra=null,r}function We(r,s){var a=s[mh];a===void 0&&(a=s[mh]=new Set);var c=r+"__bubble";a.has(c)||(Fp(s,r,2,!1),a.add(c))}function lh(r,s,a){var c=0;s&&(c|=4),Fp(a,r,c,s)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Ea(r){if(!r[Ql]){r[Ql]=!0,i.forEach(function(a){a!=="selectionchange"&&(NE.has(a)||lh(a,!1,r),lh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ql]||(s[Ql]=!0,lh("selectionchange",!1,s))}}function Fp(r,s,a,c){switch(ca(s)){case 1:var f=Qe;break;case 4:f=Jc;break;default:f=ua}a=f.bind(null,s,a,r),f=void 0,!xs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function uh(r,s,a,c,f){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===f||S.nodeType===8&&S.parentNode===f)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===f||P.nodeType===8&&P.parentNode===f))return;v=v.return}for(;S!==null;){if(v=Ki(S),v===null)return;if(P=v.tag,P===5||P===6){c=g=v;continue e}S=S.parentNode}}c=c.return}na(function(){var z=g,X=ks(a),J=[];e:{var Q=Vp.get(r);if(Q!==void 0){var re=$s,le=r;switch(r){case"keypress":if(Bs(a)===0)break e;case"keydown":case"keyup":re=m;break;case"focusin":le="focus",re=Ks;break;case"focusout":le="blur",re=Ks;break;case"beforeblur":case"afterblur":re=Ks;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Ul;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=q;break;case Np:case Dp:case xp:re=Ir;break;case Op:re=je;break;case"scroll":re=Zc;break;case"wheel":re=Oe;break;case"copy":case"cut":case"paste":re=Bl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=w}var ce=(s&4)!==0,it=!ce&&r==="scroll",b=ce?Q!==null?Q+"Capture":null:Q;ce=[];for(var D=z,j;D!==null;){j=D;var Z=j.stateNode;if(j.tag===5&&Z!==null&&(j=Z,b!==null&&(Z=rt(D,b),Z!=null&&ce.push(wa(D,Z,j)))),it)break;D=D.return}0<ce.length&&(Q=new re(Q,le,null,a,X),J.push({event:Q,listeners:ce}))}}if(!(s&7)){e:{if(Q=r==="mouseover"||r==="pointerover",re=r==="mouseout"||r==="pointerout",Q&&a!==Vi&&(le=a.relatedTarget||a.fromElement)&&(Ki(le)||le[Sr]))break e;if((re||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,re?(le=a.relatedTarget||a.toElement,re=z,le=le?Ki(le):null,le!==null&&(it=Cn(le),le!==it||le.tag!==5&&le.tag!==6)&&(le=null)):(re=null,le=z),re!==le)){if(ce=Hs,Z="onMouseLeave",b="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(ce=w,Z="onPointerLeave",b="onPointerEnter",D="pointer"),it=re==null?Q:to(re),j=le==null?Q:to(le),Q=new ce(Z,D+"leave",re,a,X),Q.target=it,Q.relatedTarget=j,Z=null,Ki(X)===z&&(ce=new ce(b,D+"enter",le,a,X),ce.target=j,ce.relatedTarget=it,Z=ce),it=Z,re&&le)t:{for(ce=re,b=le,D=0,j=ce;j;j=Zs(j))D++;for(j=0,Z=b;Z;Z=Zs(Z))j++;for(;0<D-j;)ce=Zs(ce),D--;for(;0<j-D;)b=Zs(b),j--;for(;D--;){if(ce===b||b!==null&&ce===b.alternate)break t;ce=Zs(ce),b=Zs(b)}ce=null}else ce=null;re!==null&&Up(J,Q,re,ce,!1),le!==null&&it!==null&&Up(J,it,le,ce,!0)}}e:{if(Q=z?to(z):window,re=Q.nodeName&&Q.nodeName.toLowerCase(),re==="select"||re==="input"&&Q.type==="file")var he=EE;else if(_p(Q))if(Ep)he=SE;else{he=TE;var ge=wE}else(re=Q.nodeName)&&re.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(he=IE);if(he&&(he=he(r,z))){vp(J,he,a,X);break e}ge&&ge(r,Q,z),r==="focusout"&&(ge=Q._wrapperState)&&ge.controlled&&Q.type==="number"&&As(Q,"number",Q.value)}switch(ge=z?to(z):window,r){case"focusin":(_p(ge)||ge.contentEditable==="true")&&(Xs=ge,rh=z,_a=null);break;case"focusout":_a=rh=Xs=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,Pp(J,a,X);break;case"selectionchange":if(CE)break;case"keydown":case"keyup":Pp(J,a,X)}var ye;if(ot)e:{switch(r){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ys?gp(r,a)&&(ve="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Wi&&a.locale!=="ko"&&(Ys||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ys&&(ye=ha()):(on=X,zs="value"in on?on.value:on.textContent,Ys=!0)),ge=Yl(z,ve),0<ge.length&&(ve=new pa(ve,r,null,a,X),J.push({event:ve,listeners:ge}),ye?ve.data=ye:(ye=yp(a),ye!==null&&(ve.data=ye)))),(ye=an?gE(r,a):yE(r,a))&&(z=Yl(z,"onBeforeInput"),0<z.length&&(X=new pa("onBeforeInput","beforeinput",null,a,X),J.push({event:X,listeners:z}),X.data=ye))}bp(J,s)})}function wa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Yl(r,s){for(var a=s+"Capture",c=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=rt(r,a),g!=null&&c.unshift(wa(r,g,f)),g=rt(r,s),g!=null&&c.push(wa(r,g,f))),r=r.return}return c}function Zs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Up(r,s,a,c,f){for(var g=s._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,z=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&z!==null&&(S=z,f?(P=rt(a,g),P!=null&&v.unshift(wa(a,P,S))):f||(P=rt(a,g),P!=null&&v.push(wa(a,P,S)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var DE=/\r\n?/g,xE=/\u0000|\uFFFD/g;function jp(r){return(typeof r=="string"?r:""+r).replace(DE,`
`).replace(xE,"")}function Xl(r,s,a){if(s=jp(s),jp(r)!==s&&a)throw Error(t(425))}function Jl(){}var ch=null,hh=null;function dh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var fh=typeof setTimeout=="function"?setTimeout:void 0,OE=typeof clearTimeout=="function"?clearTimeout:void 0,zp=typeof Promise=="function"?Promise:void 0,VE=typeof queueMicrotask=="function"?queueMicrotask:typeof zp<"u"?function(r){return zp.resolve(null).then(r).catch(LE)}:fh;function LE(r){setTimeout(function(){throw r})}function ph(r,s){var a=s,c=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){r.removeChild(f),xn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);xn(s)}function ti(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Bp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var eo=Math.random().toString(36).slice(2),tr="__reactFiber$"+eo,Ta="__reactProps$"+eo,Sr="__reactContainer$"+eo,mh="__reactEvents$"+eo,ME="__reactListeners$"+eo,bE="__reactHandles$"+eo;function Ki(r){var s=r[tr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Sr]||a[tr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Bp(r);r!==null;){if(a=r[tr])return a;r=Bp(r)}return s}r=a,a=r.parentNode}return null}function Ia(r){return r=r[tr]||r[Sr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function to(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Zl(r){return r[Ta]||null}var gh=[],no=-1;function ni(r){return{current:r}}function Ke(r){0>no||(r.current=gh[no],gh[no]=null,no--)}function He(r,s){no++,gh[no]=r.current,r.current=s}var ri={},Ot=ni(ri),Gt=ni(!1),Gi=ri;function ro(r,s){var a=r.type.contextTypes;if(!a)return ri;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Qt(r){return r=r.childContextTypes,r!=null}function eu(){Ke(Gt),Ke(Ot)}function $p(r,s,a){if(Ot.current!==ri)throw Error(t(168));He(Ot,s),He(Gt,a)}function qp(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in s))throw Error(t(108,be(r)||"Unknown",f));return ie({},a,c)}function tu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ri,Gi=Ot.current,He(Ot,r),He(Gt,Gt.current),!0}function Hp(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=qp(r,s,Gi),c.__reactInternalMemoizedMergedChildContext=r,Ke(Gt),Ke(Ot),He(Ot,r)):Ke(Gt),He(Gt,a)}var Rr=null,nu=!1,yh=!1;function Wp(r){Rr===null?Rr=[r]:Rr.push(r)}function FE(r){nu=!0,Wp(r)}function ii(){if(!yh&&Rr!==null){yh=!0;var r=0,s=Ne;try{var a=Rr;for(Ne=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Rr=null,nu=!1}catch(f){throw Rr!==null&&(Rr=Rr.slice(r+1)),Ms(Ui,ii),f}finally{Ne=s,yh=!1}}return null}var io=[],so=0,ru=null,iu=0,gn=[],yn=0,Qi=null,Ar=1,Cr="";function Yi(r,s){io[so++]=iu,io[so++]=ru,ru=r,iu=s}function Kp(r,s,a){gn[yn++]=Ar,gn[yn++]=Cr,gn[yn++]=Qi,Qi=r;var c=Ar;r=Cr;var f=32-Bt(c)-1;c&=~(1<<f),a+=1;var g=32-Bt(s)+f;if(30<g){var v=f-f%5;g=(c&(1<<v)-1).toString(32),c>>=v,f-=v,Ar=1<<32-Bt(s)+f|a<<f|c,Cr=g+r}else Ar=1<<g|a<<f|c,Cr=r}function _h(r){r.return!==null&&(Yi(r,1),Kp(r,1,0))}function vh(r){for(;r===ru;)ru=io[--so],io[so]=null,iu=io[--so],io[so]=null;for(;r===Qi;)Qi=gn[--yn],gn[yn]=null,Cr=gn[--yn],gn[yn]=null,Ar=gn[--yn],gn[yn]=null}var ln=null,un=null,Ye=!1,Ln=null;function Gp(r,s){var a=wn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Qp(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ln=r,un=ti(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ln=r,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Qi!==null?{id:Ar,overflow:Cr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=wn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,ln=r,un=null,!0):!1;default:return!1}}function Eh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function wh(r){if(Ye){var s=un;if(s){var a=s;if(!Qp(r,s)){if(Eh(r))throw Error(t(418));s=ti(a.nextSibling);var c=ln;s&&Qp(r,s)?Gp(c,a):(r.flags=r.flags&-4097|2,Ye=!1,ln=r)}}else{if(Eh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ye=!1,ln=r}}}function Yp(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ln=r}function su(r){if(r!==ln)return!1;if(!Ye)return Yp(r),Ye=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!dh(r.type,r.memoizedProps)),s&&(s=un)){if(Eh(r))throw Xp(),Error(t(418));for(;s;)Gp(r,s),s=ti(s.nextSibling)}if(Yp(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){un=ti(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}un=null}}else un=ln?ti(r.stateNode.nextSibling):null;return!0}function Xp(){for(var r=un;r;)r=ti(r.nextSibling)}function oo(){un=ln=null,Ye=!1}function Th(r){Ln===null?Ln=[r]:Ln.push(r)}var UE=oe.ReactCurrentBatchConfig;function Sa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var f=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var S=f.refs;v===null?delete S[g]:S[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function ou(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Jp(r){var s=r._init;return s(r._payload)}function Zp(r){function s(b,D){if(r){var j=b.deletions;j===null?(b.deletions=[D],b.flags|=16):j.push(D)}}function a(b,D){if(!r)return null;for(;D!==null;)s(b,D),D=D.sibling;return null}function c(b,D){for(b=new Map;D!==null;)D.key!==null?b.set(D.key,D):b.set(D.index,D),D=D.sibling;return b}function f(b,D){return b=di(b,D),b.index=0,b.sibling=null,b}function g(b,D,j){return b.index=j,r?(j=b.alternate,j!==null?(j=j.index,j<D?(b.flags|=2,D):j):(b.flags|=2,D)):(b.flags|=1048576,D)}function v(b){return r&&b.alternate===null&&(b.flags|=2),b}function S(b,D,j,Z){return D===null||D.tag!==6?(D=fd(j,b.mode,Z),D.return=b,D):(D=f(D,j),D.return=b,D)}function P(b,D,j,Z){var he=j.type;return he===N?X(b,D,j.props.children,Z,j.key):D!==null&&(D.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===xt&&Jp(he)===D.type)?(Z=f(D,j.props),Z.ref=Sa(b,D,j),Z.return=b,Z):(Z=Nu(j.type,j.key,j.props,null,b.mode,Z),Z.ref=Sa(b,D,j),Z.return=b,Z)}function z(b,D,j,Z){return D===null||D.tag!==4||D.stateNode.containerInfo!==j.containerInfo||D.stateNode.implementation!==j.implementation?(D=pd(j,b.mode,Z),D.return=b,D):(D=f(D,j.children||[]),D.return=b,D)}function X(b,D,j,Z,he){return D===null||D.tag!==7?(D=is(j,b.mode,Z,he),D.return=b,D):(D=f(D,j),D.return=b,D)}function J(b,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return D=fd(""+D,b.mode,j),D.return=b,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Se:return j=Nu(D.type,D.key,D.props,null,b.mode,j),j.ref=Sa(b,null,D),j.return=b,j;case pe:return D=pd(D,b.mode,j),D.return=b,D;case xt:var Z=D._init;return J(b,Z(D._payload),j)}if(mr(D)||me(D))return D=is(D,b.mode,j,null),D.return=b,D;ou(b,D)}return null}function Q(b,D,j,Z){var he=D!==null?D.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return he!==null?null:S(b,D,""+j,Z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Se:return j.key===he?P(b,D,j,Z):null;case pe:return j.key===he?z(b,D,j,Z):null;case xt:return he=j._init,Q(b,D,he(j._payload),Z)}if(mr(j)||me(j))return he!==null?null:X(b,D,j,Z,null);ou(b,j)}return null}function re(b,D,j,Z,he){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return b=b.get(j)||null,S(D,b,""+Z,he);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Se:return b=b.get(Z.key===null?j:Z.key)||null,P(D,b,Z,he);case pe:return b=b.get(Z.key===null?j:Z.key)||null,z(D,b,Z,he);case xt:var ge=Z._init;return re(b,D,j,ge(Z._payload),he)}if(mr(Z)||me(Z))return b=b.get(j)||null,X(D,b,Z,he,null);ou(D,Z)}return null}function le(b,D,j,Z){for(var he=null,ge=null,ye=D,ve=D=0,It=null;ye!==null&&ve<j.length;ve++){ye.index>ve?(It=ye,ye=null):It=ye.sibling;var Me=Q(b,ye,j[ve],Z);if(Me===null){ye===null&&(ye=It);break}r&&ye&&Me.alternate===null&&s(b,ye),D=g(Me,D,ve),ge===null?he=Me:ge.sibling=Me,ge=Me,ye=It}if(ve===j.length)return a(b,ye),Ye&&Yi(b,ve),he;if(ye===null){for(;ve<j.length;ve++)ye=J(b,j[ve],Z),ye!==null&&(D=g(ye,D,ve),ge===null?he=ye:ge.sibling=ye,ge=ye);return Ye&&Yi(b,ve),he}for(ye=c(b,ye);ve<j.length;ve++)It=re(ye,b,ve,j[ve],Z),It!==null&&(r&&It.alternate!==null&&ye.delete(It.key===null?ve:It.key),D=g(It,D,ve),ge===null?he=It:ge.sibling=It,ge=It);return r&&ye.forEach(function(fi){return s(b,fi)}),Ye&&Yi(b,ve),he}function ce(b,D,j,Z){var he=me(j);if(typeof he!="function")throw Error(t(150));if(j=he.call(j),j==null)throw Error(t(151));for(var ge=he=null,ye=D,ve=D=0,It=null,Me=j.next();ye!==null&&!Me.done;ve++,Me=j.next()){ye.index>ve?(It=ye,ye=null):It=ye.sibling;var fi=Q(b,ye,Me.value,Z);if(fi===null){ye===null&&(ye=It);break}r&&ye&&fi.alternate===null&&s(b,ye),D=g(fi,D,ve),ge===null?he=fi:ge.sibling=fi,ge=fi,ye=It}if(Me.done)return a(b,ye),Ye&&Yi(b,ve),he;if(ye===null){for(;!Me.done;ve++,Me=j.next())Me=J(b,Me.value,Z),Me!==null&&(D=g(Me,D,ve),ge===null?he=Me:ge.sibling=Me,ge=Me);return Ye&&Yi(b,ve),he}for(ye=c(b,ye);!Me.done;ve++,Me=j.next())Me=re(ye,b,ve,Me.value,Z),Me!==null&&(r&&Me.alternate!==null&&ye.delete(Me.key===null?ve:Me.key),D=g(Me,D,ve),ge===null?he=Me:ge.sibling=Me,ge=Me);return r&&ye.forEach(function(_w){return s(b,_w)}),Ye&&Yi(b,ve),he}function it(b,D,j,Z){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Se:e:{for(var he=j.key,ge=D;ge!==null;){if(ge.key===he){if(he=j.type,he===N){if(ge.tag===7){a(b,ge.sibling),D=f(ge,j.props.children),D.return=b,b=D;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===xt&&Jp(he)===ge.type){a(b,ge.sibling),D=f(ge,j.props),D.ref=Sa(b,ge,j),D.return=b,b=D;break e}a(b,ge);break}else s(b,ge);ge=ge.sibling}j.type===N?(D=is(j.props.children,b.mode,Z,j.key),D.return=b,b=D):(Z=Nu(j.type,j.key,j.props,null,b.mode,Z),Z.ref=Sa(b,D,j),Z.return=b,b=Z)}return v(b);case pe:e:{for(ge=j.key;D!==null;){if(D.key===ge)if(D.tag===4&&D.stateNode.containerInfo===j.containerInfo&&D.stateNode.implementation===j.implementation){a(b,D.sibling),D=f(D,j.children||[]),D.return=b,b=D;break e}else{a(b,D);break}else s(b,D);D=D.sibling}D=pd(j,b.mode,Z),D.return=b,b=D}return v(b);case xt:return ge=j._init,it(b,D,ge(j._payload),Z)}if(mr(j))return le(b,D,j,Z);if(me(j))return ce(b,D,j,Z);ou(b,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,D!==null&&D.tag===6?(a(b,D.sibling),D=f(D,j),D.return=b,b=D):(a(b,D),D=fd(j,b.mode,Z),D.return=b,b=D),v(b)):a(b,D)}return it}var ao=Zp(!0),em=Zp(!1),au=ni(null),lu=null,lo=null,Ih=null;function Sh(){Ih=lo=lu=null}function Rh(r){var s=au.current;Ke(au),r._currentValue=s}function Ah(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function uo(r,s){lu=r,Ih=lo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Yt=!0),r.firstContext=null)}function _n(r){var s=r._currentValue;if(Ih!==r)if(r={context:r,memoizedValue:s,next:null},lo===null){if(lu===null)throw Error(t(308));lo=r,lu.dependencies={lanes:0,firstContext:r}}else lo=lo.next=r;return s}var Xi=null;function Ch(r){Xi===null?Xi=[r]:Xi.push(r)}function tm(r,s,a,c){var f=s.interleaved;return f===null?(a.next=a,Ch(s)):(a.next=f.next,f.next=a),s.interleaved=a,Pr(r,c)}function Pr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var si=!1;function Ph(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function kr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function oi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,Le&2){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,Pr(r,a)}return f=c.interleaved,f===null?(s.next=s,Ch(c)):(s.next=f.next,f.next=s),c.interleaved=s,Pr(r,a)}function uu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Qr(r,a)}}function rm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function cu(r,s,a,c){var f=r.updateQueue;si=!1;var g=f.firstBaseUpdate,v=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var P=S,z=P.next;P.next=null,v===null?g=z:v.next=z,v=P;var X=r.alternate;X!==null&&(X=X.updateQueue,S=X.lastBaseUpdate,S!==v&&(S===null?X.firstBaseUpdate=z:S.next=z,X.lastBaseUpdate=P))}if(g!==null){var J=f.baseState;v=0,X=z=P=null,S=g;do{var Q=S.lane,re=S.eventTime;if((c&Q)===Q){X!==null&&(X=X.next={eventTime:re,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var le=r,ce=S;switch(Q=s,re=a,ce.tag){case 1:if(le=ce.payload,typeof le=="function"){J=le.call(re,J,Q);break e}J=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ce.payload,Q=typeof le=="function"?le.call(re,J,Q):le,Q==null)break e;J=ie({},J,Q);break e;case 2:si=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,Q=f.effects,Q===null?f.effects=[S]:Q.push(S))}else re={eventTime:re,lane:Q,tag:S.tag,payload:S.payload,callback:S.callback,next:null},X===null?(z=X=re,P=J):X=X.next=re,v|=Q;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;Q=S,S=Q.next,Q.next=null,f.lastBaseUpdate=Q,f.shared.pending=null}}while(!0);if(X===null&&(P=J),f.baseState=P,f.firstBaseUpdate=z,f.lastBaseUpdate=X,s=f.shared.interleaved,s!==null){f=s;do v|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);es|=v,r.lanes=v,r.memoizedState=J}}function im(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ra={},nr=ni(Ra),Aa=ni(Ra),Ca=ni(Ra);function Ji(r){if(r===Ra)throw Error(t(174));return r}function kh(r,s){switch(He(Ca,s),He(Aa,r),He(nr,Ra),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:dt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=dt(s,r)}Ke(nr),He(nr,s)}function co(){Ke(nr),Ke(Aa),Ke(Ca)}function sm(r){Ji(Ca.current);var s=Ji(nr.current),a=dt(s,r.type);s!==a&&(He(Aa,r),He(nr,a))}function Nh(r){Aa.current===r&&(Ke(nr),Ke(Aa))}var Je=ni(0);function hu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Dh=[];function xh(){for(var r=0;r<Dh.length;r++)Dh[r]._workInProgressVersionPrimary=null;Dh.length=0}var du=oe.ReactCurrentDispatcher,Oh=oe.ReactCurrentBatchConfig,Zi=0,Ze=null,pt=null,wt=null,fu=!1,Pa=!1,ka=0,jE=0;function Vt(){throw Error(t(321))}function Vh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Vn(r[a],s[a]))return!1;return!0}function Lh(r,s,a,c,f,g){if(Zi=g,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,du.current=r===null||r.memoizedState===null?qE:HE,r=a(c,f),Pa){g=0;do{if(Pa=!1,ka=0,25<=g)throw Error(t(301));g+=1,wt=pt=null,s.updateQueue=null,du.current=WE,r=a(c,f)}while(Pa)}if(du.current=gu,s=pt!==null&&pt.next!==null,Zi=0,wt=pt=Ze=null,fu=!1,s)throw Error(t(300));return r}function Mh(){var r=ka!==0;return ka=0,r}function rr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?Ze.memoizedState=wt=r:wt=wt.next=r,wt}function vn(){if(pt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=pt.next;var s=wt===null?Ze.memoizedState:wt.next;if(s!==null)wt=s,pt=r;else{if(r===null)throw Error(t(310));pt=r,r={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},wt===null?Ze.memoizedState=wt=r:wt=wt.next=r}return wt}function Na(r,s){return typeof s=="function"?s(r):s}function bh(r){var s=vn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=pt,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var v=f.next;f.next=g.next,g.next=v}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var S=v=null,P=null,z=g;do{var X=z.lane;if((Zi&X)===X)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:r(c,z.action);else{var J={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(S=P=J,v=c):P=P.next=J,Ze.lanes|=X,es|=X}z=z.next}while(z!==null&&z!==g);P===null?v=c:P.next=S,Vn(c,s.memoizedState)||(Yt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){f=r;do g=f.lane,Ze.lanes|=g,es|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Fh(r){var s=vn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do g=r(g,v.action),v=v.next;while(v!==f);Vn(g,s.memoizedState)||(Yt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function om(){}function am(r,s){var a=Ze,c=vn(),f=s(),g=!Vn(c.memoizedState,f);if(g&&(c.memoizedState=f,Yt=!0),c=c.queue,Uh(cm.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,Da(9,um.bind(null,a,c,f,s),void 0,null),Tt===null)throw Error(t(349));Zi&30||lm(a,s,f)}return f}function lm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function um(r,s,a,c){s.value=a,s.getSnapshot=c,hm(s)&&dm(r)}function cm(r,s,a){return a(function(){hm(s)&&dm(r)})}function hm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Vn(r,a)}catch{return!0}}function dm(r){var s=Pr(r,1);s!==null&&Un(s,r,1,-1)}function fm(r){var s=rr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:r},s.queue=r,r=r.dispatch=$E.bind(null,Ze,r),[s.memoizedState,r]}function Da(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function pm(){return vn().memoizedState}function pu(r,s,a,c){var f=rr();Ze.flags|=r,f.memoizedState=Da(1|s,a,void 0,c===void 0?null:c)}function mu(r,s,a,c){var f=vn();c=c===void 0?null:c;var g=void 0;if(pt!==null){var v=pt.memoizedState;if(g=v.destroy,c!==null&&Vh(c,v.deps)){f.memoizedState=Da(s,a,g,c);return}}Ze.flags|=r,f.memoizedState=Da(1|s,a,g,c)}function mm(r,s){return pu(8390656,8,r,s)}function Uh(r,s){return mu(2048,8,r,s)}function gm(r,s){return mu(4,2,r,s)}function ym(r,s){return mu(4,4,r,s)}function _m(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function vm(r,s,a){return a=a!=null?a.concat([r]):null,mu(4,4,_m.bind(null,s,r),a)}function jh(){}function Em(r,s){var a=vn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Vh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function wm(r,s){var a=vn();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Vh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Tm(r,s,a){return Zi&21?(Vn(a,s)||(a=Bi(),Ze.lanes|=a,es|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Yt=!0),r.memoizedState=a)}function zE(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var c=Oh.transition;Oh.transition={};try{r(!1),s()}finally{Ne=a,Oh.transition=c}}function Im(){return vn().memoizedState}function BE(r,s,a){var c=ci(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Sm(r))Rm(s,a);else if(a=tm(r,s,a,c),a!==null){var f=Ht();Un(a,r,c,f),Am(a,s,c)}}function $E(r,s,a){var c=ci(r),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sm(r))Rm(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,S=g(v,a);if(f.hasEagerState=!0,f.eagerState=S,Vn(S,v)){var P=s.interleaved;P===null?(f.next=f,Ch(s)):(f.next=P.next,P.next=f),s.interleaved=f;return}}catch{}finally{}a=tm(r,s,f,c),a!==null&&(f=Ht(),Un(a,r,c,f),Am(a,s,c))}}function Sm(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function Rm(r,s){Pa=fu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Am(r,s,a){if(a&4194240){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Qr(r,a)}}var gu={readContext:_n,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},qE={readContext:_n,useCallback:function(r,s){return rr().memoizedState=[r,s===void 0?null:s],r},useContext:_n,useEffect:mm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,pu(4194308,4,_m.bind(null,s,r),a)},useLayoutEffect:function(r,s){return pu(4194308,4,r,s)},useInsertionEffect:function(r,s){return pu(4,2,r,s)},useMemo:function(r,s){var a=rr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=rr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=BE.bind(null,Ze,r),[c.memoizedState,r]},useRef:function(r){var s=rr();return r={current:r},s.memoizedState=r},useState:fm,useDebugValue:jh,useDeferredValue:function(r){return rr().memoizedState=r},useTransition:function(){var r=fm(!1),s=r[0];return r=zE.bind(null,r[1]),rr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Ze,f=rr();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));Zi&30||lm(c,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,mm(cm.bind(null,c,g,r),[r]),c.flags|=2048,Da(9,um.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=rr(),s=Tt.identifierPrefix;if(Ye){var a=Cr,c=Ar;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=ka++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=jE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},HE={readContext:_n,useCallback:Em,useContext:_n,useEffect:Uh,useImperativeHandle:vm,useInsertionEffect:gm,useLayoutEffect:ym,useMemo:wm,useReducer:bh,useRef:pm,useState:function(){return bh(Na)},useDebugValue:jh,useDeferredValue:function(r){var s=vn();return Tm(s,pt.memoizedState,r)},useTransition:function(){var r=bh(Na)[0],s=vn().memoizedState;return[r,s]},useMutableSource:om,useSyncExternalStore:am,useId:Im,unstable_isNewReconciler:!1},WE={readContext:_n,useCallback:Em,useContext:_n,useEffect:Uh,useImperativeHandle:vm,useInsertionEffect:gm,useLayoutEffect:ym,useMemo:wm,useReducer:Fh,useRef:pm,useState:function(){return Fh(Na)},useDebugValue:jh,useDeferredValue:function(r){var s=vn();return pt===null?s.memoizedState=r:Tm(s,pt.memoizedState,r)},useTransition:function(){var r=Fh(Na)[0],s=vn().memoizedState;return[r,s]},useMutableSource:om,useSyncExternalStore:am,useId:Im,unstable_isNewReconciler:!1};function Mn(r,s){if(r&&r.defaultProps){s=ie({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function zh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:ie({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var yu={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Ht(),f=ci(r),g=kr(c,f);g.payload=s,a!=null&&(g.callback=a),s=oi(r,g,f),s!==null&&(Un(s,r,f,c),uu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Ht(),f=ci(r),g=kr(c,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=oi(r,g,f),s!==null&&(Un(s,r,f,c),uu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Ht(),c=ci(r),f=kr(a,c);f.tag=2,s!=null&&(f.callback=s),s=oi(r,f,c),s!==null&&(Un(s,r,c,a),uu(s,r,c))}};function Cm(r,s,a,c,f,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!ya(a,c)||!ya(f,g):!0}function Pm(r,s,a){var c=!1,f=ri,g=s.contextType;return typeof g=="object"&&g!==null?g=_n(g):(f=Qt(s)?Gi:Ot.current,c=s.contextTypes,g=(c=c!=null)?ro(r,f):ri),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=yu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function km(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&yu.enqueueReplaceState(s,s.state,null)}function Bh(r,s,a,c){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Ph(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=_n(g):(g=Qt(s)?Gi:Ot.current,f.context=ro(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(zh(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&yu.enqueueReplaceState(f,f.state,null),cu(r,a,f,c),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function ho(r,s){try{var a="",c=s;do a+=Ae(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function $h(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function qh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var KE=typeof WeakMap=="function"?WeakMap:Map;function Nm(r,s,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Su||(Su=!0,sd=c),qh(r,s)},a}function Dm(r,s,a){a=kr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;a.payload=function(){return c(f)},a.callback=function(){qh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){qh(r,s),typeof c!="function"&&(li===null?li=new Set([this]):li.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function xm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new KE;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(a)||(f.add(a),r=aw.bind(null,r,s,a),s.then(r,r))}function Om(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Vm(r,s,a,c,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=kr(-1,1),s.tag=2,oi(a,s,1))),a.lanes|=1),r)}var GE=oe.ReactCurrentOwner,Yt=!1;function qt(r,s,a,c){s.child=r===null?em(s,null,a,c):ao(s,r.child,a,c)}function Lm(r,s,a,c,f){a=a.render;var g=s.ref;return uo(s,f),c=Lh(r,s,a,c,g,f),a=Mh(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Nr(r,s,f)):(Ye&&a&&_h(s),s.flags|=1,qt(r,s,c,f),s.child)}function Mm(r,s,a,c,f){if(r===null){var g=a.type;return typeof g=="function"&&!dd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,bm(r,s,g,c,f)):(r=Nu(a.type,null,c,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(v,c)&&r.ref===s.ref)return Nr(r,s,f)}return s.flags|=1,r=di(g,c),r.ref=s.ref,r.return=s,s.child=r}function bm(r,s,a,c,f){if(r!==null){var g=r.memoizedProps;if(ya(g,c)&&r.ref===s.ref)if(Yt=!1,s.pendingProps=c=g,(r.lanes&f)!==0)r.flags&131072&&(Yt=!0);else return s.lanes=r.lanes,Nr(r,s,f)}return Hh(r,s,a,c,f)}function Fm(r,s,a){var c=s.pendingProps,f=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(po,cn),cn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,He(po,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,He(po,cn),cn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,He(po,cn),cn|=c;return qt(r,s,f,a),s.child}function Um(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Hh(r,s,a,c,f){var g=Qt(a)?Gi:Ot.current;return g=ro(s,g),uo(s,f),a=Lh(r,s,a,c,g,f),c=Mh(),r!==null&&!Yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Nr(r,s,f)):(Ye&&c&&_h(s),s.flags|=1,qt(r,s,a,f),s.child)}function jm(r,s,a,c,f){if(Qt(a)){var g=!0;tu(s)}else g=!1;if(uo(s,f),s.stateNode===null)vu(r,s),Pm(s,a,c),Bh(s,a,c,f),c=!0;else if(r===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var P=v.context,z=a.contextType;typeof z=="object"&&z!==null?z=_n(z):(z=Qt(a)?Gi:Ot.current,z=ro(s,z));var X=a.getDerivedStateFromProps,J=typeof X=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==z)&&km(s,v,c,z),si=!1;var Q=s.memoizedState;v.state=Q,cu(s,c,v,f),P=s.memoizedState,S!==c||Q!==P||Gt.current||si?(typeof X=="function"&&(zh(s,a,X,c),P=s.memoizedState),(S=si||Cm(s,a,S,c,Q,P,z))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=z,c=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,nm(r,s),S=s.memoizedProps,z=s.type===s.elementType?S:Mn(s.type,S),v.props=z,J=s.pendingProps,Q=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=_n(P):(P=Qt(a)?Gi:Ot.current,P=ro(s,P));var re=a.getDerivedStateFromProps;(X=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==J||Q!==P)&&km(s,v,c,P),si=!1,Q=s.memoizedState,v.state=Q,cu(s,c,v,f);var le=s.memoizedState;S!==J||Q!==le||Gt.current||si?(typeof re=="function"&&(zh(s,a,re,c),le=s.memoizedState),(z=si||Cm(s,a,z,c,Q,le,P)||!1)?(X||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,le,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,le,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=le),v.props=c,v.state=le,v.context=P,c=z):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),c=!1)}return Wh(r,s,a,c,g,f)}function Wh(r,s,a,c,f,g){Um(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return f&&Hp(s,a,!1),Nr(r,s,g);c=s.stateNode,GE.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=ao(s,r.child,null,g),s.child=ao(s,null,S,g)):qt(r,s,S,g),s.memoizedState=c.state,f&&Hp(s,a,!0),s.child}function zm(r){var s=r.stateNode;s.pendingContext?$p(r,s.pendingContext,s.pendingContext!==s.context):s.context&&$p(r,s.context,!1),kh(r,s.containerInfo)}function Bm(r,s,a,c,f){return oo(),Th(f),s.flags|=256,qt(r,s,a,c),s.child}var Kh={dehydrated:null,treeContext:null,retryLane:0};function Gh(r){return{baseLanes:r,cachePool:null,transitions:null}}function $m(r,s,a){var c=s.pendingProps,f=Je.current,g=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=r!==null&&r.memoizedState===null?!1:(f&2)!==0),S?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),He(Je,f&1),r===null)return wh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=Du(v,c,0,null),r=is(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Gh(a),s.memoizedState=Kh,r):Qh(s,v));if(f=r.memoizedState,f!==null&&(S=f.dehydrated,S!==null))return QE(r,s,v,c,S,f,a);if(g){g=c.fallback,v=s.mode,f=r.child,S=f.sibling;var P={mode:"hidden",children:c.children};return!(v&1)&&s.child!==f?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=di(f,P),c.subtreeFlags=f.subtreeFlags&14680064),S!==null?g=di(S,g):(g=is(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?Gh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=Kh,c}return g=r.child,r=g.sibling,c=di(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Qh(r,s){return s=Du({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function _u(r,s,a,c){return c!==null&&Th(c),ao(s,r.child,null,a),r=Qh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function QE(r,s,a,c,f,g,v){if(a)return s.flags&256?(s.flags&=-257,c=$h(Error(t(422))),_u(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,f=s.mode,c=Du({mode:"visible",children:c.children},f,0,null),g=is(g,f,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&ao(s,r.child,null,v),s.child.memoizedState=Gh(v),s.memoizedState=Kh,g);if(!(s.mode&1))return _u(r,s,v,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var S=c.dgst;return c=S,g=Error(t(419)),c=$h(g,c,void 0),_u(r,s,v,c)}if(S=(v&r.childLanes)!==0,Yt||S){if(c=Tt,c!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|v)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Pr(r,f),Un(c,r,f,-1))}return hd(),c=$h(Error(t(421))),_u(r,s,v,c)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=lw.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,un=ti(f.nextSibling),ln=s,Ye=!0,Ln=null,r!==null&&(gn[yn++]=Ar,gn[yn++]=Cr,gn[yn++]=Qi,Ar=r.id,Cr=r.overflow,Qi=s),s=Qh(s,c.children),s.flags|=4096,s)}function qm(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Ah(r.return,s,a)}function Yh(r,s,a,c,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function Hm(r,s,a){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(qt(r,s,c.children,a),c=Je.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&qm(r,a,s);else if(r.tag===19)qm(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(He(Je,c),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&hu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Yh(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&hu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}Yh(s,!0,a,null,g);break;case"together":Yh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function vu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Nr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),es|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=di(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=di(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function YE(r,s,a){switch(s.tag){case 3:zm(s),oo();break;case 5:sm(s);break;case 1:Qt(s.type)&&tu(s);break;case 4:kh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,f=s.memoizedProps.value;He(au,c._currentValue),c._currentValue=f;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(He(Je,Je.current&1),s.flags|=128,null):a&s.child.childLanes?$m(r,s,a):(He(Je,Je.current&1),r=Nr(r,s,a),r!==null?r.sibling:null);He(Je,Je.current&1);break;case 19:if(c=(a&s.childLanes)!==0,r.flags&128){if(c)return Hm(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),He(Je,Je.current),c)break;return null;case 22:case 23:return s.lanes=0,Fm(r,s,a)}return Nr(r,s,a)}var Wm,Xh,Km,Gm;Wm=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Xh=function(){},Km=function(r,s,a,c){var f=r.memoizedProps;if(f!==c){r=s.stateNode,Ji(nr.current);var g=null;switch(a){case"input":f=Di(r,f),c=Di(r,c),g=[];break;case"select":f=ie({},f,{value:void 0}),c=ie({},c,{value:void 0}),g=[];break;case"textarea":f=Wo(r,f),c=Wo(r,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=Jl)}Jo(a,c);var v;a=null;for(z in f)if(!c.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var S=f[z];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in c){var P=c[z];if(S=f!=null?f[z]:void 0,c.hasOwnProperty(z)&&P!==S&&(P!=null||S!=null))if(z==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(g||(g=[]),g.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(g=g||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&We("scroll",r),g||S===P||(g=[])):(g=g||[]).push(z,P))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},Gm=function(r,s,a,c){a!==c&&(s.flags|=4)};function xa(r,s){if(!Ye)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Lt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function XE(r,s,a){var c=s.pendingProps;switch(vh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(s),null;case 1:return Qt(s.type)&&eu(),Lt(s),null;case 3:return c=s.stateNode,co(),Ke(Gt),Ke(Ot),xh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(su(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Ln!==null&&(ld(Ln),Ln=null))),Xh(r,s),Lt(s),null;case 5:Nh(s);var f=Ji(Ca.current);if(a=s.type,r!==null&&s.stateNode!=null)Km(r,s,a,c,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Lt(s),null}if(r=Ji(nr.current),su(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[tr]=s,c[Ta]=g,r=(s.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(f=0;f<va.length;f++)We(va[f],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":Rs(c,g),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},We("invalid",c);break;case"textarea":Cs(c,g),We("invalid",c)}Jo(a,g),f=null;for(var v in g)if(g.hasOwnProperty(v)){var S=g[v];v==="children"?typeof S=="string"?c.textContent!==S&&(g.suppressHydrationWarning!==!0&&Xl(c.textContent,S,r),f=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(g.suppressHydrationWarning!==!0&&Xl(c.textContent,S,r),f=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":pr(c),Il(c,g,!0);break;case"textarea":pr(c),Ko(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Jl)}c=f,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ht(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[tr]=s,r[Ta]=c,Wm(r,s,!1,!1),s.stateNode=r;e:{switch(v=Zo(a,c),a){case"dialog":We("cancel",r),We("close",r),f=c;break;case"iframe":case"object":case"embed":We("load",r),f=c;break;case"video":case"audio":for(f=0;f<va.length;f++)We(va[f],r);f=c;break;case"source":We("error",r),f=c;break;case"img":case"image":case"link":We("error",r),We("load",r),f=c;break;case"details":We("toggle",r),f=c;break;case"input":Rs(r,c),f=Di(r,c),We("invalid",r);break;case"option":f=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},f=ie({},c,{value:void 0}),We("invalid",r);break;case"textarea":Cs(r,c),f=Wo(r,c),We("invalid",r);break;default:f=c}Jo(a,f),S=f;for(g in S)if(S.hasOwnProperty(g)){var P=S[g];g==="style"?Yo(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Go(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&qr(r,P):typeof P=="number"&&qr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&We("scroll",r):P!=null&&ee(r,g,P,v))}switch(a){case"input":pr(r),Il(r,c,!1);break;case"textarea":pr(r),Ko(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Fe(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?gr(r,!!c.multiple,g,!1):c.defaultValue!=null&&gr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Jl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Lt(s),null;case 6:if(r&&s.stateNode!=null)Gm(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=Ji(Ca.current),Ji(nr.current),su(s)){if(c=s.stateNode,a=s.memoizedProps,c[tr]=s,(g=c.nodeValue!==a)&&(r=ln,r!==null))switch(r.tag){case 3:Xl(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Xl(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[tr]=s,s.stateNode=c}return Lt(s),null;case 13:if(Ke(Je),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ye&&un!==null&&s.mode&1&&!(s.flags&128))Xp(),oo(),s.flags|=98560,g=!1;else if(g=su(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[tr]=s}else oo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Lt(s),g=!1}else Ln!==null&&(ld(Ln),Ln=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(r===null||Je.current&1?mt===0&&(mt=3):hd())),s.updateQueue!==null&&(s.flags|=4),Lt(s),null);case 4:return co(),Xh(r,s),r===null&&Ea(s.stateNode.containerInfo),Lt(s),null;case 10:return Rh(s.type._context),Lt(s),null;case 17:return Qt(s.type)&&eu(),Lt(s),null;case 19:if(Ke(Je),g=s.memoizedState,g===null)return Lt(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)xa(g,!1);else{if(mt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(v=hu(r),v!==null){for(s.flags|=128,xa(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return He(Je,Je.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>mo&&(s.flags|=128,c=!0,xa(g,!1),s.lanes=4194304)}else{if(!c)if(r=hu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),xa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Ye)return Lt(s),null}else 2*qe()-g.renderingStartTime>mo&&a!==1073741824&&(s.flags|=128,c=!0,xa(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,a=Je.current,He(Je,c?a&1|2:a&1),s):(Lt(s),null);case 22:case 23:return cd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?cn&1073741824&&(Lt(s),s.subtreeFlags&6&&(s.flags|=8192)):Lt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function JE(r,s){switch(vh(s),s.tag){case 1:return Qt(s.type)&&eu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return co(),Ke(Gt),Ke(Ot),xh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Nh(s),null;case 13:if(Ke(Je),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));oo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ke(Je),null;case 4:return co(),null;case 10:return Rh(s.type._context),null;case 22:case 23:return cd(),null;case 24:return null;default:return null}}var Eu=!1,Mt=!1,ZE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function fo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(r,s,c)}else a.current=null}function Jh(r,s,a){try{a()}catch(c){nt(r,s,c)}}var Qm=!1;function ew(r,s){if(ch=Jr,r=Cp(),nh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,z=0,X=0,J=r,Q=null;t:for(;;){for(var re;J!==a||f!==0&&J.nodeType!==3||(S=v+f),J!==g||c!==0&&J.nodeType!==3||(P=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(re=J.firstChild)!==null;)Q=J,J=re;for(;;){if(J===r)break t;if(Q===a&&++z===f&&(S=v),Q===g&&++X===c&&(P=v),(re=J.nextSibling)!==null)break;J=Q,Q=J.parentNode}J=re}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(hh={focusedElem:r,selectionRange:a},Jr=!1,ae=s;ae!==null;)if(s=ae,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ae=r;else for(;ae!==null;){s=ae;try{var le=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ce=le.memoizedProps,it=le.memoizedState,b=s.stateNode,D=b.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Mn(s.type,ce),it);b.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){nt(s,s.return,Z)}if(r=s.sibling,r!==null){r.return=s.return,ae=r;break}ae=s.return}return le=Qm,Qm=!1,le}function Oa(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&Jh(s,a,g)}f=f.next}while(f!==c)}}function wu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Zh(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Ym(r){var s=r.alternate;s!==null&&(r.alternate=null,Ym(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[tr],delete s[Ta],delete s[mh],delete s[ME],delete s[bE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Xm(r){return r.tag===5||r.tag===3||r.tag===4}function Jm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Xm(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function ed(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Jl));else if(c!==4&&(r=r.child,r!==null))for(ed(r,s,a),r=r.sibling;r!==null;)ed(r,s,a),r=r.sibling}function td(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(td(r,s,a),r=r.sibling;r!==null;)td(r,s,a),r=r.sibling}var Ct=null,bn=!1;function ai(r,s,a){for(a=a.child;a!==null;)Zm(r,s,a),a=a.sibling}function Zm(r,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(ji,a)}catch{}switch(a.tag){case 5:Mt||fo(a,s);case 6:var c=Ct,f=bn;Ct=null,ai(r,s,a),Ct=c,bn=f,Ct!==null&&(bn?(r=Ct,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(bn?(r=Ct,a=a.stateNode,r.nodeType===8?ph(r.parentNode,a):r.nodeType===1&&ph(r,a),xn(r)):ph(Ct,a.stateNode));break;case 4:c=Ct,f=bn,Ct=a.stateNode.containerInfo,bn=!0,ai(r,s,a),Ct=c,bn=f;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&Jh(a,s,v),f=f.next}while(f!==c)}ai(r,s,a);break;case 1:if(!Mt&&(fo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){nt(a,s,S)}ai(r,s,a);break;case 21:ai(r,s,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ai(r,s,a),Mt=c):ai(r,s,a);break;default:ai(r,s,a)}}function eg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new ZE),s.forEach(function(c){var f=uw.bind(null,r,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Fn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=r,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Ct=S.stateNode,bn=!1;break e;case 3:Ct=S.stateNode.containerInfo,bn=!0;break e;case 4:Ct=S.stateNode.containerInfo,bn=!0;break e}S=S.return}if(Ct===null)throw Error(t(160));Zm(g,v,f),Ct=null,bn=!1;var P=f.alternate;P!==null&&(P.return=null),f.return=null}catch(z){nt(f,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)tg(s,r),s=s.sibling}function tg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Fn(s,r),ir(r),c&4){try{Oa(3,r,r.return),wu(3,r)}catch(ce){nt(r,r.return,ce)}try{Oa(5,r,r.return)}catch(ce){nt(r,r.return,ce)}}break;case 1:Fn(s,r),ir(r),c&512&&a!==null&&fo(a,a.return);break;case 5:if(Fn(s,r),ir(r),c&512&&a!==null&&fo(a,a.return),r.flags&32){var f=r.stateNode;try{qr(f,"")}catch(ce){nt(r,r.return,ce)}}if(c&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,S=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{S==="input"&&g.type==="radio"&&g.name!=null&&qo(f,g),Zo(S,v);var z=Zo(S,g);for(v=0;v<P.length;v+=2){var X=P[v],J=P[v+1];X==="style"?Yo(f,J):X==="dangerouslySetInnerHTML"?Go(f,J):X==="children"?qr(f,J):ee(f,X,J,z)}switch(S){case"input":Ho(f,g);break;case"textarea":Ps(f,g);break;case"select":var Q=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var re=g.value;re!=null?gr(f,!!g.multiple,re,!1):Q!==!!g.multiple&&(g.defaultValue!=null?gr(f,!!g.multiple,g.defaultValue,!0):gr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ta]=g}catch(ce){nt(r,r.return,ce)}}break;case 6:if(Fn(s,r),ir(r),c&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(ce){nt(r,r.return,ce)}}break;case 3:if(Fn(s,r),ir(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{xn(s.containerInfo)}catch(ce){nt(r,r.return,ce)}break;case 4:Fn(s,r),ir(r);break;case 13:Fn(s,r),ir(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(id=qe())),c&4&&eg(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Mt=(z=Mt)||X,Fn(s,r),Mt=z):Fn(s,r),ir(r),c&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!X&&r.mode&1)for(ae=r,X=r.child;X!==null;){for(J=ae=X;ae!==null;){switch(Q=ae,re=Q.child,Q.tag){case 0:case 11:case 14:case 15:Oa(4,Q,Q.return);break;case 1:fo(Q,Q.return);var le=Q.stateNode;if(typeof le.componentWillUnmount=="function"){c=Q,a=Q.return;try{s=c,le.props=s.memoizedProps,le.state=s.memoizedState,le.componentWillUnmount()}catch(ce){nt(c,a,ce)}}break;case 5:fo(Q,Q.return);break;case 22:if(Q.memoizedState!==null){ig(J);continue}}re!==null?(re.return=Q,ae=re):ig(J)}X=X.sibling}e:for(X=null,J=r;;){if(J.tag===5){if(X===null){X=J;try{f=J.stateNode,z?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(S=J.stateNode,P=J.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=Qo("display",v))}catch(ce){nt(r,r.return,ce)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(ce){nt(r,r.return,ce)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Fn(s,r),ir(r),c&4&&eg(r);break;case 21:break;default:Fn(s,r),ir(r)}}function ir(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Xm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(qr(f,""),c.flags&=-33);var g=Jm(r);td(r,g,f);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Jm(r);ed(r,S,v);break;default:throw Error(t(161))}}catch(P){nt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function tw(r,s,a){ae=r,ng(r)}function ng(r,s,a){for(var c=(r.mode&1)!==0;ae!==null;){var f=ae,g=f.child;if(f.tag===22&&c){var v=f.memoizedState!==null||Eu;if(!v){var S=f.alternate,P=S!==null&&S.memoizedState!==null||Mt;S=Eu;var z=Mt;if(Eu=v,(Mt=P)&&!z)for(ae=f;ae!==null;)v=ae,P=v.child,v.tag===22&&v.memoizedState!==null?sg(f):P!==null?(P.return=v,ae=P):sg(f);for(;g!==null;)ae=g,ng(g),g=g.sibling;ae=f,Eu=S,Mt=z}rg(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,ae=g):rg(r)}}function rg(r){for(;ae!==null;){var s=ae;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Mt||wu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Mn(s.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&im(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}im(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&xn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||s.flags&512&&Zh(s)}catch(Q){nt(s,s.return,Q)}}if(s===r){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function ig(r){for(;ae!==null;){var s=ae;if(s===r){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function sg(r){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{wu(4,s)}catch(P){nt(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var f=s.return;try{c.componentDidMount()}catch(P){nt(s,f,P)}}var g=s.return;try{Zh(s)}catch(P){nt(s,g,P)}break;case 5:var v=s.return;try{Zh(s)}catch(P){nt(s,v,P)}}}catch(P){nt(s,s.return,P)}if(s===r){ae=null;break}var S=s.sibling;if(S!==null){S.return=s.return,ae=S;break}ae=s.return}}var nw=Math.ceil,Tu=oe.ReactCurrentDispatcher,nd=oe.ReactCurrentOwner,En=oe.ReactCurrentBatchConfig,Le=0,Tt=null,at=null,Pt=0,cn=0,po=ni(0),mt=0,Va=null,es=0,Iu=0,rd=0,La=null,Xt=null,id=0,mo=1/0,Dr=null,Su=!1,sd=null,li=null,Ru=!1,ui=null,Au=0,Ma=0,od=null,Cu=-1,Pu=0;function Ht(){return Le&6?qe():Cu!==-1?Cu:Cu=qe()}function ci(r){return r.mode&1?Le&2&&Pt!==0?Pt&-Pt:UE.transition!==null?(Pu===0&&(Pu=Bi()),Pu):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:ca(r.type)),r):1}function Un(r,s,a,c){if(50<Ma)throw Ma=0,od=null,Error(t(185));Gr(r,a,c),(!(Le&2)||r!==Tt)&&(r===Tt&&(!(Le&2)&&(Iu|=a),mt===4&&hi(r,Pt)),Jt(r,c),a===1&&Le===0&&!(s.mode&1)&&(mo=qe()+500,nu&&ii()))}function Jt(r,s){var a=r.callbackNode;vr(r,s);var c=zi(r,r===Tt?Pt:0);if(c===0)a!==null&&sa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&sa(a),s===1)r.tag===0?FE(ag.bind(null,r)):Wp(ag.bind(null,r)),VE(function(){!(Le&6)&&ii()}),a=null;else{switch(Yr(c)){case 1:a=Ui;break;case 4:a=Hr;break;case 16:a=fn;break;case 536870912:a=Pl;break;default:a=fn}a=mg(a,og.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function og(r,s){if(Cu=-1,Pu=0,Le&6)throw Error(t(327));var a=r.callbackNode;if(go()&&r.callbackNode!==a)return null;var c=zi(r,r===Tt?Pt:0);if(c===0)return null;if(c&30||c&r.expiredLanes||s)s=ku(r,c);else{s=c;var f=Le;Le|=2;var g=ug();(Tt!==r||Pt!==s)&&(Dr=null,mo=qe()+500,ns(r,s));do try{sw();break}catch(S){lg(r,S)}while(!0);Sh(),Tu.current=g,Le=f,at!==null?s=0:(Tt=null,Pt=0,s=mt)}if(s!==0){if(s===2&&(f=sn(r),f!==0&&(c=f,s=ad(r,f))),s===1)throw a=Va,ns(r,0),hi(r,c),Jt(r,qe()),a;if(s===6)hi(r,c);else{if(f=r.current.alternate,!(c&30)&&!rw(f)&&(s=ku(r,c),s===2&&(g=sn(r),g!==0&&(c=g,s=ad(r,g))),s===1))throw a=Va,ns(r,0),hi(r,c),Jt(r,qe()),a;switch(r.finishedWork=f,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:rs(r,Xt,Dr);break;case 3:if(hi(r,c),(c&130023424)===c&&(s=id+500-qe(),10<s)){if(zi(r,0)!==0)break;if(f=r.suspendedLanes,(f&c)!==c){Ht(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=fh(rs.bind(null,r,Xt,Dr),s);break}rs(r,Xt,Dr);break;case 4:if(hi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,f=-1;0<c;){var v=31-Bt(c);g=1<<v,v=s[v],v>f&&(f=v),c&=~g}if(c=f,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*nw(c/1960))-c,10<c){r.timeoutHandle=fh(rs.bind(null,r,Xt,Dr),c);break}rs(r,Xt,Dr);break;case 5:rs(r,Xt,Dr);break;default:throw Error(t(329))}}}return Jt(r,qe()),r.callbackNode===a?og.bind(null,r):null}function ad(r,s){var a=La;return r.current.memoizedState.isDehydrated&&(ns(r,s).flags|=256),r=ku(r,s),r!==2&&(s=Xt,Xt=a,s!==null&&ld(s)),r}function ld(r){Xt===null?Xt=r:Xt.push.apply(Xt,r)}function rw(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!Vn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function hi(r,s){for(s&=~rd,s&=~Iu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Bt(s),c=1<<a;r[a]=-1,s&=~c}}function ag(r){if(Le&6)throw Error(t(327));go();var s=zi(r,0);if(!(s&1))return Jt(r,qe()),null;var a=ku(r,s);if(r.tag!==0&&a===2){var c=sn(r);c!==0&&(s=c,a=ad(r,c))}if(a===1)throw a=Va,ns(r,0),hi(r,s),Jt(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,rs(r,Xt,Dr),Jt(r,qe()),null}function ud(r,s){var a=Le;Le|=1;try{return r(s)}finally{Le=a,Le===0&&(mo=qe()+500,nu&&ii())}}function ts(r){ui!==null&&ui.tag===0&&!(Le&6)&&go();var s=Le;Le|=1;var a=En.transition,c=Ne;try{if(En.transition=null,Ne=1,r)return r()}finally{Ne=c,En.transition=a,Le=s,!(Le&6)&&ii()}}function cd(){cn=po.current,Ke(po)}function ns(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,OE(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(vh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&eu();break;case 3:co(),Ke(Gt),Ke(Ot),xh();break;case 5:Nh(c);break;case 4:co();break;case 13:Ke(Je);break;case 19:Ke(Je);break;case 10:Rh(c.type._context);break;case 22:case 23:cd()}a=a.return}if(Tt=r,at=r=di(r.current,null),Pt=cn=s,mt=0,Va=null,rd=Iu=es=0,Xt=La=null,Xi!==null){for(s=0;s<Xi.length;s++)if(a=Xi[s],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=f,c.next=v}a.pending=c}Xi=null}return r}function lg(r,s){do{var a=at;try{if(Sh(),du.current=gu,fu){for(var c=Ze.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}fu=!1}if(Zi=0,wt=pt=Ze=null,Pa=!1,ka=0,nd.current=null,a===null||a.return===null){mt=1,Va=s,at=null;break}e:{var g=r,v=a.return,S=a,P=s;if(s=Pt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,X=S,J=X.tag;if(!(X.mode&1)&&(J===0||J===11||J===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var re=Om(v);if(re!==null){re.flags&=-257,Vm(re,v,S,g,s),re.mode&1&&xm(g,z,s),s=re,P=z;var le=s.updateQueue;if(le===null){var ce=new Set;ce.add(P),s.updateQueue=ce}else le.add(P);break e}else{if(!(s&1)){xm(g,z,s),hd();break e}P=Error(t(426))}}else if(Ye&&S.mode&1){var it=Om(v);if(it!==null){!(it.flags&65536)&&(it.flags|=256),Vm(it,v,S,g,s),Th(ho(P,S));break e}}g=P=ho(P,S),mt!==4&&(mt=2),La===null?La=[g]:La.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var b=Nm(g,P,s);rm(g,b);break e;case 1:S=P;var D=g.type,j=g.stateNode;if(!(g.flags&128)&&(typeof D.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(li===null||!li.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var Z=Dm(g,S,s);rm(g,Z);break e}}g=g.return}while(g!==null)}hg(a)}catch(he){s=he,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function ug(){var r=Tu.current;return Tu.current=gu,r===null?gu:r}function hd(){(mt===0||mt===3||mt===2)&&(mt=4),Tt===null||!(es&268435455)&&!(Iu&268435455)||hi(Tt,Pt)}function ku(r,s){var a=Le;Le|=2;var c=ug();(Tt!==r||Pt!==s)&&(Dr=null,ns(r,s));do try{iw();break}catch(f){lg(r,f)}while(!0);if(Sh(),Le=a,Tu.current=c,at!==null)throw Error(t(261));return Tt=null,Pt=0,mt}function iw(){for(;at!==null;)cg(at)}function sw(){for(;at!==null&&!Al();)cg(at)}function cg(r){var s=pg(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?hg(r):at=s,nd.current=null}function hg(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=JE(a,s),a!==null){a.flags&=32767,at=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{mt=6,at=null;return}}else if(a=XE(a,s,cn),a!==null){at=a;return}if(s=s.sibling,s!==null){at=s;return}at=s=r}while(s!==null);mt===0&&(mt=5)}function rs(r,s,a){var c=Ne,f=En.transition;try{En.transition=null,Ne=1,ow(r,s,a,c)}finally{En.transition=f,Ne=c}return null}function ow(r,s,a,c){do go();while(ui!==null);if(Le&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(Be(r,g),r===Tt&&(at=Tt=null,Pt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Ru||(Ru=!0,mg(fn,function(){return go(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=En.transition,En.transition=null;var v=Ne;Ne=1;var S=Le;Le|=4,nd.current=null,ew(r,a),tg(a,r),AE(hh),Jr=!!ch,hh=ch=null,r.current=a,tw(a),Gc(),Le=S,Ne=v,En.transition=g}else r.current=a;if(Ru&&(Ru=!1,ui=r,Au=f),g=r.pendingLanes,g===0&&(li=null),kl(a.stateNode),Jt(r,qe()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Su)throw Su=!1,r=sd,sd=null,r;return Au&1&&r.tag!==0&&go(),g=r.pendingLanes,g&1?r===od?Ma++:(Ma=0,od=r):Ma=0,ii(),null}function go(){if(ui!==null){var r=Yr(Au),s=En.transition,a=Ne;try{if(En.transition=null,Ne=16>r?16:r,ui===null)var c=!1;else{if(r=ui,ui=null,Au=0,Le&6)throw Error(t(331));var f=Le;for(Le|=4,ae=r.current;ae!==null;){var g=ae,v=g.child;if(ae.flags&16){var S=g.deletions;if(S!==null){for(var P=0;P<S.length;P++){var z=S[P];for(ae=z;ae!==null;){var X=ae;switch(X.tag){case 0:case 11:case 15:Oa(8,X,g)}var J=X.child;if(J!==null)J.return=X,ae=J;else for(;ae!==null;){X=ae;var Q=X.sibling,re=X.return;if(Ym(X),X===z){ae=null;break}if(Q!==null){Q.return=re,ae=Q;break}ae=re}}}var le=g.alternate;if(le!==null){var ce=le.child;if(ce!==null){le.child=null;do{var it=ce.sibling;ce.sibling=null,ce=it}while(ce!==null)}}ae=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,ae=v;else e:for(;ae!==null;){if(g=ae,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Oa(9,g,g.return)}var b=g.sibling;if(b!==null){b.return=g.return,ae=b;break e}ae=g.return}}var D=r.current;for(ae=D;ae!==null;){v=ae;var j=v.child;if(v.subtreeFlags&2064&&j!==null)j.return=v,ae=j;else e:for(v=D;ae!==null;){if(S=ae,S.flags&2048)try{switch(S.tag){case 0:case 11:case 15:wu(9,S)}}catch(he){nt(S,S.return,he)}if(S===v){ae=null;break e}var Z=S.sibling;if(Z!==null){Z.return=S.return,ae=Z;break e}ae=S.return}}if(Le=f,ii(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(ji,r)}catch{}c=!0}return c}finally{Ne=a,En.transition=s}}return!1}function dg(r,s,a){s=ho(a,s),s=Nm(r,s,1),r=oi(r,s,1),s=Ht(),r!==null&&(Gr(r,1,s),Jt(r,s))}function nt(r,s,a){if(r.tag===3)dg(r,r,a);else for(;s!==null;){if(s.tag===3){dg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(li===null||!li.has(c))){r=ho(a,r),r=Dm(s,r,1),s=oi(s,r,1),r=Ht(),s!==null&&(Gr(s,1,r),Jt(s,r));break}}s=s.return}}function aw(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Ht(),r.pingedLanes|=r.suspendedLanes&a,Tt===r&&(Pt&a)===a&&(mt===4||mt===3&&(Pt&130023424)===Pt&&500>qe()-id?ns(r,0):rd|=a),Jt(r,s)}function fg(r,s){s===0&&(r.mode&1?(s=Fs,Fs<<=1,!(Fs&130023424)&&(Fs=4194304)):s=1);var a=Ht();r=Pr(r,s),r!==null&&(Gr(r,s,a),Jt(r,a))}function lw(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),fg(r,a)}function uw(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),fg(r,a)}var pg;pg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Gt.current)Yt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Yt=!1,YE(r,s,a);Yt=!!(r.flags&131072)}else Yt=!1,Ye&&s.flags&1048576&&Kp(s,iu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;vu(r,s),r=s.pendingProps;var f=ro(s,Ot.current);uo(s,a),f=Lh(null,s,c,r,f,a);var g=Mh();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Qt(c)?(g=!0,tu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Ph(s),f.updater=yu,s.stateNode=f,f._reactInternals=s,Bh(s,c,r,a),s=Wh(null,s,c,!0,g,a)):(s.tag=0,Ye&&g&&_h(s),qt(null,s,f,a),s=s.child),s;case 16:c=s.elementType;e:{switch(vu(r,s),r=s.pendingProps,f=c._init,c=f(c._payload),s.type=c,f=s.tag=hw(c),r=Mn(c,r),f){case 0:s=Hh(null,s,c,r,a);break e;case 1:s=jm(null,s,c,r,a);break e;case 11:s=Lm(null,s,c,r,a);break e;case 14:s=Mm(null,s,c,Mn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),Hh(r,s,c,f,a);case 1:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),jm(r,s,c,f,a);case 3:e:{if(zm(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,f=g.element,nm(r,s),cu(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=ho(Error(t(423)),s),s=Bm(r,s,c,a,f);break e}else if(c!==f){f=ho(Error(t(424)),s),s=Bm(r,s,c,a,f);break e}else for(un=ti(s.stateNode.containerInfo.firstChild),ln=s,Ye=!0,Ln=null,a=em(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(oo(),c===f){s=Nr(r,s,a);break e}qt(r,s,c,a)}s=s.child}return s;case 5:return sm(s),r===null&&wh(s),c=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,v=f.children,dh(c,f)?v=null:g!==null&&dh(c,g)&&(s.flags|=32),Um(r,s),qt(r,s,v,a),s.child;case 6:return r===null&&wh(s),null;case 13:return $m(r,s,a);case 4:return kh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=ao(s,null,c,a):qt(r,s,c,a),s.child;case 11:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),Lm(r,s,c,f,a);case 7:return qt(r,s,s.pendingProps,a),s.child;case 8:return qt(r,s,s.pendingProps.children,a),s.child;case 12:return qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,f=s.pendingProps,g=s.memoizedProps,v=f.value,He(au,c._currentValue),c._currentValue=v,g!==null)if(Vn(g.value,v)){if(g.children===f.children&&!Gt.current){s=Nr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var S=g.dependencies;if(S!==null){v=g.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=kr(-1,a&-a),P.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?P.next=P:(P.next=X.next,X.next=P),z.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Ah(g.return,a,s),S.lanes|=a;break}P=P.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),Ah(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}qt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,c=s.pendingProps.children,uo(s,a),f=_n(f),c=c(f),s.flags|=1,qt(r,s,c,a),s.child;case 14:return c=s.type,f=Mn(c,s.pendingProps),f=Mn(c.type,f),Mm(r,s,c,f,a);case 15:return bm(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:Mn(c,f),vu(r,s),s.tag=1,Qt(c)?(r=!0,tu(s)):r=!1,uo(s,a),Pm(s,c,f),Bh(s,c,f,a),Wh(null,s,c,!0,r,a);case 19:return Hm(r,s,a);case 22:return Fm(r,s,a)}throw Error(t(156,s.tag))};function mg(r,s){return Ms(r,s)}function cw(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(r,s,a,c){return new cw(r,s,a,c)}function dd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function hw(r){if(typeof r=="function")return dd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===_t)return 14}return 2}function di(r,s){var a=r.alternate;return a===null?(a=wn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Nu(r,s,a,c,f,g){var v=2;if(c=r,typeof r=="function")dd(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case N:return is(a.children,f,g,s);case I:v=8,f|=8;break;case A:return r=wn(12,a,s,f|2),r.elementType=A,r.lanes=g,r;case C:return r=wn(13,a,s,f),r.elementType=C,r.lanes=g,r;case Xe:return r=wn(19,a,s,f),r.elementType=Xe,r.lanes=g,r;case ze:return Du(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:v=10;break e;case O:v=9;break e;case L:v=11;break e;case _t:v=14;break e;case xt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=wn(v,a,s,f),s.elementType=r,s.type=c,s.lanes=g,s}function is(r,s,a,c){return r=wn(7,r,c,s),r.lanes=a,r}function Du(r,s,a,c){return r=wn(22,r,c,s),r.elementType=ze,r.lanes=a,r.stateNode={isHidden:!1},r}function fd(r,s,a){return r=wn(6,r,null,s),r.lanes=a,r}function pd(r,s,a){return s=wn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function dw(r,s,a,c,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function md(r,s,a,c,f,g,v,S,P){return r=new dw(r,s,a,S,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=wn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ph(g),r}function fw(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pe,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function gg(r){if(!r)return ri;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Qt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Qt(a))return qp(r,a,s)}return s}function yg(r,s,a,c,f,g,v,S,P){return r=md(a,c,!0,r,f,g,v,S,P),r.context=gg(null),a=r.current,c=Ht(),f=ci(a),g=kr(c,f),g.callback=s??null,oi(a,g,f),r.current.lanes=f,Gr(r,f,c),Jt(r,c),r}function xu(r,s,a,c){var f=s.current,g=Ht(),v=ci(f);return a=gg(a),s.context===null?s.context=a:s.pendingContext=a,s=kr(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=oi(f,s,v),r!==null&&(Un(r,f,v,g),uu(r,f,v)),v}function Ou(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function _g(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function gd(r,s){_g(r,s),(r=r.alternate)&&_g(r,s)}function pw(){return null}var vg=typeof reportError=="function"?reportError:function(r){console.error(r)};function yd(r){this._internalRoot=r}Vu.prototype.render=yd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));xu(r,s,null,null)},Vu.prototype.unmount=yd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ts(function(){xu(null,r,null,null)}),s[Sr]=null}};function Vu(r){this._internalRoot=r}Vu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Vl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Xn.length&&s!==0&&s<Xn[a].priority;a++);Xn.splice(a,0,r),a===0&&bl(r)}};function _d(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Lu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Eg(){}function mw(r,s,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var z=Ou(v);g.call(z)}}var v=yg(s,c,r,0,null,!1,!1,"",Eg);return r._reactRootContainer=v,r[Sr]=v.current,Ea(r.nodeType===8?r.parentNode:r),ts(),v}for(;f=r.lastChild;)r.removeChild(f);if(typeof c=="function"){var S=c;c=function(){var z=Ou(P);S.call(z)}}var P=md(r,0,!1,null,null,!1,!1,"",Eg);return r._reactRootContainer=P,r[Sr]=P.current,Ea(r.nodeType===8?r.parentNode:r),ts(function(){xu(s,P,a,c)}),P}function Mu(r,s,a,c,f){var g=a._reactRootContainer;if(g){var v=g;if(typeof f=="function"){var S=f;f=function(){var P=Ou(v);S.call(P)}}xu(s,v,r,f)}else v=mw(a,s,r,f,c);return Ou(v)}xl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Wr(s.pendingLanes);a!==0&&(Qr(s,a|1),Jt(s,qe()),!(Le&6)&&(mo=qe()+500,ii()))}break;case 13:ts(function(){var c=Pr(r,1);if(c!==null){var f=Ht();Un(c,r,1,f)}}),gd(r,1)}},Us=function(r){if(r.tag===13){var s=Pr(r,134217728);if(s!==null){var a=Ht();Un(s,r,134217728,a)}gd(r,134217728)}},Ol=function(r){if(r.tag===13){var s=ci(r),a=Pr(r,s);if(a!==null){var c=Ht();Un(a,r,s,c)}gd(r,s)}},Vl=function(){return Ne},Ll=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},Ns=function(r,s,a){switch(s){case"input":if(Ho(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var f=Zl(c);if(!f)throw Error(t(90));Ss(c),Ho(c,f)}}}break;case"textarea":Ps(r,a);break;case"select":s=a.value,s!=null&&gr(r,!!a.multiple,s,!1)}},Li=ud,ta=ts;var gw={usingClientEntryPoint:!1,Events:[Ia,to,Zl,Qn,ea,ud]},ba={findFiberByHostInstance:Ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yw={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ia(r),r===null?null:r.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{ji=bu.inject(yw),rn=bu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw,Zt.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_d(s))throw Error(t(200));return fw(r,s,null,a)},Zt.createRoot=function(r,s){if(!_d(r))throw Error(t(299));var a=!1,c="",f=vg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=md(r,1,!1,null,null,a,!1,c,f),r[Sr]=s.current,Ea(r.nodeType===8?r.parentNode:r),new yd(s)},Zt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ia(s),r=r===null?null:r.stateNode,r},Zt.flushSync=function(r){return ts(r)},Zt.hydrate=function(r,s,a){if(!Lu(s))throw Error(t(200));return Mu(null,r,s,!0,a)},Zt.hydrateRoot=function(r,s,a){if(!_d(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",v=vg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=yg(s,null,r,1,a??null,f,!1,g,v),r[Sr]=s.current,Ea(r),c)for(r=0;r<c.length;r++)a=c[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Vu(s)},Zt.render=function(r,s,a){if(!Lu(s))throw Error(t(200));return Mu(null,r,s,!1,a)},Zt.unmountComponentAtNode=function(r){if(!Lu(r))throw Error(t(40));return r._reactRootContainer?(ts(function(){Mu(null,null,r,!1,function(){r._reactRootContainer=null,r[Sr]=null})}),!0):!1},Zt.unstable_batchedUpdates=ud,Zt.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Lu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Mu(r,s,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var Pg;function Cw(){if(Pg)return wd.exports;Pg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),wd.exports=Aw(),wd.exports}var kg;function Pw(){if(kg)return Fu;kg=1;var n=Cw();return Fu.createRoot=n.createRoot,Fu.hydrateRoot=n.hydrateRoot,Fu}var kw=Pw();const Nw="modulepreload",Dw=function(n){return"/"+n},Ng={},Hn=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),d=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=Promise.allSettled(t.map(p=>{if(p=Dw(p),p in Ng)return;Ng[p]=!0;const y=p.endsWith(".css"),E=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${E}`))return;const T=document.createElement("link");if(T.rel=y?"stylesheet":Nw,y||(T.as="script"),T.crossOrigin="",T.href=p,d&&T.setAttribute("nonce",d),document.head.appendChild(T),y)return new Promise((R,x)=>{T.addEventListener("load",R),T.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${p}`)))})}))}function l(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return o.then(h=>{for(const d of h||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};var Ua={},Dg;function xw(){if(Dg)return Ua;Dg=1,Object.defineProperty(Ua,"__esModule",{value:!0}),Ua.parse=h,Ua.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const R=function(){};return R.prototype=Object.create(null),R})();function h(R,x){const F=new l,$=R.length;if($<2)return F;const U=(x==null?void 0:x.decode)||E;let H=0;do{const Y=R.indexOf("=",H);if(Y===-1)break;const ee=R.indexOf(";",H),oe=ee===-1?$:ee;if(Y>oe){H=R.lastIndexOf(";",Y-1)+1;continue}const Se=d(R,H,Y),pe=p(R,Y,Se),N=R.slice(Se,pe);if(F[N]===void 0){let I=d(R,Y+1,oe),A=p(R,oe,I);const k=U(R.slice(I,A));F[N]=k}H=oe+1}while(H<$);return F}function d(R,x,F){do{const $=R.charCodeAt(x);if($!==32&&$!==9)return x}while(++x<F);return F}function p(R,x,F){for(;x>F;){const $=R.charCodeAt(--x);if($!==32&&$!==9)return x+1}return F}function y(R,x,F){const $=(F==null?void 0:F.encode)||encodeURIComponent;if(!n.test(R))throw new TypeError(`argument name is invalid: ${R}`);const U=$(x);if(!e.test(U))throw new TypeError(`argument val is invalid: ${x}`);let H=R+"="+U;if(!F)return H;if(F.maxAge!==void 0){if(!Number.isInteger(F.maxAge))throw new TypeError(`option maxAge is invalid: ${F.maxAge}`);H+="; Max-Age="+F.maxAge}if(F.domain){if(!t.test(F.domain))throw new TypeError(`option domain is invalid: ${F.domain}`);H+="; Domain="+F.domain}if(F.path){if(!i.test(F.path))throw new TypeError(`option path is invalid: ${F.path}`);H+="; Path="+F.path}if(F.expires){if(!T(F.expires)||!Number.isFinite(F.expires.valueOf()))throw new TypeError(`option expires is invalid: ${F.expires}`);H+="; Expires="+F.expires.toUTCString()}if(F.httpOnly&&(H+="; HttpOnly"),F.secure&&(H+="; Secure"),F.partitioned&&(H+="; Partitioned"),F.priority)switch(typeof F.priority=="string"?F.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${F.priority}`)}if(F.sameSite)switch(typeof F.sameSite=="string"?F.sameSite.toLowerCase():F.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${F.sameSite}`)}return H}function E(R){if(R.indexOf("%")===-1)return R;try{return decodeURIComponent(R)}catch{return R}}function T(R){return o.call(R)==="[object Date]"}return Ua}xw();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var xg="popstate";function Ow(n={}){function e(i,o){let{pathname:l,search:h,hash:d}=i.location;return jd("",{pathname:l,search:h,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Za(o)}return Lw(e,t,null,n)}function et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function cr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Vw(){return Math.random().toString(36).substring(2,10)}function Og(n,e){return{usr:n.state,key:n.key,idx:e}}function jd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Lo(e):e,state:t,key:e&&e.key||i||Vw()}}function Za({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Lo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function Lw(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,d="POP",p=null,y=E();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function E(){return(h.state||{idx:null}).idx}function T(){d="POP";let U=E(),H=U==null?null:U-y;y=U,p&&p({action:d,location:$.location,delta:H})}function R(U,H){d="PUSH";let Y=jd($.location,U,H);y=E()+1;let ee=Og(Y,y),oe=$.createHref(Y);try{h.pushState(ee,"",oe)}catch(Se){if(Se instanceof DOMException&&Se.name==="DataCloneError")throw Se;o.location.assign(oe)}l&&p&&p({action:d,location:$.location,delta:1})}function x(U,H){d="REPLACE";let Y=jd($.location,U,H);y=E();let ee=Og(Y,y),oe=$.createHref(Y);h.replaceState(ee,"",oe),l&&p&&p({action:d,location:$.location,delta:0})}function F(U){let H=o.location.origin!=="null"?o.location.origin:o.location.href,Y=typeof U=="string"?U:Za(U);return Y=Y.replace(/ $/,"%20"),et(H,`No window.location.(origin|href) available to create URL for href: ${Y}`),new URL(Y,H)}let $={get action(){return d},get location(){return n(o,h)},listen(U){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(xg,T),p=U,()=>{o.removeEventListener(xg,T),p=null}},createHref(U){return e(o,U)},createURL:F,encodeLocation(U){let H=F(U);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:R,replace:x,go(U){return h.go(U)}};return $}function d_(n,e,t="/"){return Mw(n,e,t,!1)}function Mw(n,e,t,i){let o=typeof e=="string"?Lo(e):e,l=Ii(o.pathname||"/",t);if(l==null)return null;let h=f_(n);bw(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let y=Gw(l);d=Ww(h[p],y,i)}return d}function f_(n,e=[],t=[],i=""){let o=(l,h,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(et(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Mr([i,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(et(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),f_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:qw(y,l.index),routesMeta:E})};return n.forEach((l,h)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,h);else for(let p of p_(l.path))o(l,h,p)}),e}function p_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=p_(i.join("/")),d=[];return d.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...h),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function bw(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Hw(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var Fw=/^:[\w-]+$/,Uw=3,jw=2,zw=1,Bw=10,$w=-2,Vg=n=>n==="*";function qw(n,e){let t=n.split("/"),i=t.length;return t.some(Vg)&&(i+=$w),e&&(i+=jw),t.filter(o=>!Vg(o)).reduce((o,l)=>o+(Fw.test(l)?Uw:l===""?zw:Bw),i)}function Hw(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function Ww(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",h=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=sc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),R=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=sc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Mr([l,T.pathname]),pathnameBase:Jw(Mr([l,T.pathnameBase])),route:R}),T.pathnameBase!=="/"&&(l=Mr([l,T.pathnameBase]))}return h}function sc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=Kw(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:E,isOptional:T},R)=>{if(E==="*"){let F=d[R]||"";h=l.slice(0,l.length-F.length).replace(/(.)\/+$/,"$1")}const x=d[R];return T&&!x?y[E]=void 0:y[E]=(x||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function Kw(n,e=!1,t=!0){cr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function Gw(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cr(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ii(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function Qw(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Lo(n):n;return{pathname:t?t.startsWith("/")?t:Yw(t,e):e,search:Zw(i),hash:eT(o)}}function Yw(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Sd(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Xw(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function m_(n){let e=Xw(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function g_(n,e,t,i=!1){let o;typeof n=="string"?o=Lo(n):(o={...n},et(!o.pathname||!o.pathname.includes("?"),Sd("?","pathname","search",o)),et(!o.pathname||!o.pathname.includes("#"),Sd("#","pathname","hash",o)),et(!o.search||!o.search.includes("#"),Sd("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,d;if(h==null)d=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),T-=1;o.pathname=R.join("/")}d=T>=0?e[T]:"/"}let p=Qw(o,d),y=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var Mr=n=>n.join("/").replace(/\/\/+/g,"/"),Jw=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Zw=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,eT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function tT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var y_=["POST","PUT","PATCH","DELETE"];new Set(y_);var nT=["GET",...y_];new Set(nT);var Mo=B.createContext(null);Mo.displayName="DataRouter";var Rc=B.createContext(null);Rc.displayName="DataRouterState";var __=B.createContext({isTransitioning:!1});__.displayName="ViewTransition";var rT=B.createContext(new Map);rT.displayName="Fetchers";var iT=B.createContext(null);iT.displayName="Await";var fr=B.createContext(null);fr.displayName="Navigation";var hl=B.createContext(null);hl.displayName="Location";var Wn=B.createContext({outlet:null,matches:[],isDataRoute:!1});Wn.displayName="Route";var mf=B.createContext(null);mf.displayName="RouteError";function sT(n,{relative:e}={}){et(dl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=B.useContext(fr),{hash:o,pathname:l,search:h}=fl(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Mr([t,l])),i.createHref({pathname:d,search:h,hash:o})}function dl(){return B.useContext(hl)!=null}function ms(){return et(dl(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(hl).location}var v_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function E_(n){B.useContext(fr).static||B.useLayoutEffect(n)}function w_(){let{isDataRoute:n}=B.useContext(Wn);return n?ET():oT()}function oT(){et(dl(),"useNavigate() may be used only in the context of a <Router> component.");let n=B.useContext(Mo),{basename:e,navigator:t}=B.useContext(fr),{matches:i}=B.useContext(Wn),{pathname:o}=ms(),l=JSON.stringify(m_(i)),h=B.useRef(!1);return E_(()=>{h.current=!0}),B.useCallback((p,y={})=>{if(cr(h.current,v_),!h.current)return;if(typeof p=="number"){t.go(p);return}let E=g_(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Mr([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,l,o,n])}var aT=B.createContext(null);function lT(n){let e=B.useContext(Wn).outlet;return e&&B.createElement(aT.Provider,{value:n},e)}function KN(){let{matches:n}=B.useContext(Wn),e=n[n.length-1];return e?e.params:{}}function fl(n,{relative:e}={}){let{matches:t}=B.useContext(Wn),{pathname:i}=ms(),o=JSON.stringify(m_(t));return B.useMemo(()=>g_(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function uT(n,e){return T_(n,e)}function T_(n,e,t,i){var H;et(dl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=B.useContext(fr),{matches:l}=B.useContext(Wn),h=l[l.length-1],d=h?h.params:{},p=h?h.pathname:"/",y=h?h.pathnameBase:"/",E=h&&h.route;{let Y=E&&E.path||"";I_(p,!E||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let T=ms(),R;if(e){let Y=typeof e=="string"?Lo(e):e;et(y==="/"||((H=Y.pathname)==null?void 0:H.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),R=Y}else R=T;let x=R.pathname||"/",F=x;if(y!=="/"){let Y=y.replace(/^\//,"").split("/");F="/"+x.replace(/^\//,"").split("/").slice(Y.length).join("/")}let $=d_(n,{pathname:F});cr(E||$!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),cr($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=pT($&&$.map(Y=>Object.assign({},Y,{params:Object.assign({},d,Y.params),pathname:Mr([y,o.encodeLocation?o.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?y:Mr([y,o.encodeLocation?o.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),l,t,i);return e&&U?B.createElement(hl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},U):U}function cT(){let n=vT(),e=tT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:l},"ErrorBoundary")," or"," ",B.createElement("code",{style:l},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),t?B.createElement("pre",{style:o},t):null,h)}var hT=B.createElement(cT,null),dT=class extends B.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?B.createElement(Wn.Provider,{value:this.props.routeContext},B.createElement(mf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function fT({routeContext:n,match:e,children:t}){let i=B.useContext(Mo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),B.createElement(Wn.Provider,{value:n},t)}function pT(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);et(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:E,errors:T}=t,R=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||R){h=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let T,R=!1,x=null,F=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,x=y.route.errorElement||hT,h&&(d<0&&E===0?(I_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,F=null):d===E&&(R=!0,F=y.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,E+1)),U=()=>{let H;return T?H=x:R?H=F:y.route.Component?H=B.createElement(y.route.Component,null):y.route.element?H=y.route.element:H=p,B.createElement(fT,{match:y,routeContext:{outlet:p,matches:$,isDataRoute:t!=null},children:H})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?B.createElement(dT,{location:t.location,revalidation:t.revalidation,component:x,error:T,children:U(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):U()},null)}function gf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mT(n){let e=B.useContext(Mo);return et(e,gf(n)),e}function gT(n){let e=B.useContext(Rc);return et(e,gf(n)),e}function yT(n){let e=B.useContext(Wn);return et(e,gf(n)),e}function yf(n){let e=yT(n),t=e.matches[e.matches.length-1];return et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function _T(){return yf("useRouteId")}function vT(){var i;let n=B.useContext(mf),e=gT("useRouteError"),t=yf("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function ET(){let{router:n}=mT("useNavigate"),e=yf("useNavigate"),t=B.useRef(!1);return E_(()=>{t.current=!0}),B.useCallback(async(o,l={})=>{cr(t.current,v_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Lg={};function I_(n,e,t){!e&&!Lg[n]&&(Lg[n]=!0,cr(!1,t))}B.memo(wT);function wT({routes:n,future:e,state:t}){return T_(n,void 0,t,e)}function GN(n){return lT(n.context)}function jn(n){et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function TT({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){et(!dl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),d=B.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=Lo(t));let{pathname:p="/",search:y="",hash:E="",state:T=null,key:R="default"}=t,x=B.useMemo(()=>{let F=Ii(p,h);return F==null?null:{location:{pathname:F,search:y,hash:E,state:T,key:R},navigationType:i}},[h,p,y,E,T,R,i]);return cr(x!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:B.createElement(fr.Provider,{value:d},B.createElement(hl.Provider,{children:e,value:x}))}function IT({children:n,location:e}){return uT(zd(n),e)}function zd(n,e=[]){let t=[];return B.Children.forEach(n,(i,o)=>{if(!B.isValidElement(i))return;let l=[...e,o];if(i.type===B.Fragment){t.push.apply(t,zd(i.props.children,l));return}et(i.type===jn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),et(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=zd(i.props.children,l)),t.push(h)}),t}var Ku="get",Gu="application/x-www-form-urlencoded";function Ac(n){return n!=null&&typeof n.tagName=="string"}function ST(n){return Ac(n)&&n.tagName.toLowerCase()==="button"}function RT(n){return Ac(n)&&n.tagName.toLowerCase()==="form"}function AT(n){return Ac(n)&&n.tagName.toLowerCase()==="input"}function CT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function PT(n,e){return n.button===0&&(!e||e==="_self")&&!CT(n)}var Uu=null;function kT(){if(Uu===null)try{new FormData(document.createElement("form"),0),Uu=!1}catch{Uu=!0}return Uu}var NT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Rd(n){return n!=null&&!NT.has(n)?(cr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gu}"`),null):n}function DT(n,e){let t,i,o,l,h;if(RT(n)){let d=n.getAttribute("action");i=d?Ii(d,e):null,t=n.getAttribute("method")||Ku,o=Rd(n.getAttribute("enctype"))||Gu,l=new FormData(n)}else if(ST(n)||AT(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Ii(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Ku,o=Rd(n.getAttribute("formenctype"))||Rd(d.getAttribute("enctype"))||Gu,l=new FormData(d,n),!kT()){let{name:y,type:E,value:T}=n;if(E==="image"){let R=y?`${y}.`:"";l.append(`${R}x`,"0"),l.append(`${R}y`,"0")}else y&&l.append(y,T)}}else{if(Ac(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ku,i=null,o=Gu,h=n}return l&&o==="text/plain"&&(h=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:h}}function _f(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function xT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function OT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function VT(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await xT(l,t);return h.links?h.links():[]}return[]}));return FT(i.flat(1).filter(OT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Mg(n,e,t,i,o,l){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var E;return t[y].pathname!==p.pathname||((E=t[y].route.path)==null?void 0:E.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>h(p,y)||d(p,y)):l==="data"?e.filter((p,y)=>{var T;let E=i.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let R=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function LT(n,e){return MT(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function MT(n){return[...new Set(n)]}function bT(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function FT(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(bT(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function UT(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function jT(){let n=B.useContext(Mo);return _f(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function zT(){let n=B.useContext(Rc);return _f(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var vf=B.createContext(void 0);vf.displayName="FrameworkContext";function S_(){let n=B.useContext(vf);return _f(n,"You must render this element inside a <HydratedRouter> element"),n}function BT(n,e){let t=B.useContext(vf),[i,o]=B.useState(!1),[l,h]=B.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:T}=e,R=B.useRef(null);B.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let $=H=>{H.forEach(Y=>{h(Y.isIntersecting)})},U=new IntersectionObserver($,{threshold:.5});return R.current&&U.observe(R.current),()=>{U.disconnect()}}},[n]),B.useEffect(()=>{if(i){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[i]);let x=()=>{o(!0)},F=()=>{o(!1),h(!1)};return t?n!=="intent"?[l,R,{}]:[l,R,{onFocus:ja(d,x),onBlur:ja(p,F),onMouseEnter:ja(y,x),onMouseLeave:ja(E,F),onTouchStart:ja(T,x)}]:[!1,R,{}]}function ja(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function $T({page:n,...e}){let{router:t}=jT(),i=B.useMemo(()=>d_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?B.createElement(HT,{page:n,matches:i,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function qT(n){let{manifest:e,routeModules:t}=S_(),[i,o]=B.useState([]);return B.useEffect(()=>{let l=!1;return VT(n,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[n,e,t]),i}function HT({page:n,matches:e,...t}){let i=ms(),{manifest:o,routeModules:l}=S_(),{loaderData:h,matches:d}=zT(),p=B.useMemo(()=>Mg(n,e,d,o,i,"data"),[n,e,d,o,i]),y=B.useMemo(()=>Mg(n,e,d,o,i,"assets"),[n,e,d,o,i]),E=B.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let x=new Set,F=!1;if(e.forEach(U=>{var Y;let H=o.routes[U.route.id];!H||!H.hasLoader||(!p.some(ee=>ee.route.id===U.route.id)&&U.route.id in h&&((Y=l[U.route.id])!=null&&Y.shouldRevalidate)||H.hasClientLoader?F=!0:x.add(U.route.id))}),x.size===0)return[];let $=UT(n);return F&&x.size>0&&$.searchParams.set("_routes",e.filter(U=>x.has(U.route.id)).map(U=>U.route.id).join(",")),[$.pathname+$.search]},[h,i,o,p,e,n,l]),T=B.useMemo(()=>LT(y,o),[y,o]),R=qT(y);return B.createElement(B.Fragment,null,E.map(x=>B.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),T.map(x=>B.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),R.map(({key:x,link:F})=>B.createElement("link",{key:x,...F})))}function WT(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var R_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R_&&(window.__reactRouterVersion="7.0.2")}catch{}function KT({basename:n,children:e,window:t}){let i=B.useRef();i.current==null&&(i.current=Ow({window:t,v5Compat:!0}));let o=i.current,[l,h]=B.useState({action:o.action,location:o.location}),d=B.useCallback(p=>{B.startTransition(()=>h(p))},[h]);return B.useLayoutEffect(()=>o.listen(d),[o,d]),B.createElement(TT,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var A_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,C_=B.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:h,state:d,target:p,to:y,preventScrollReset:E,viewTransition:T,...R},x){let{basename:F}=B.useContext(fr),$=typeof y=="string"&&A_.test(y),U,H=!1;if(typeof y=="string"&&$&&(U=y,R_))try{let A=new URL(window.location.href),k=y.startsWith("//")?new URL(A.protocol+y):new URL(y),O=Ii(k.pathname,F);k.origin===A.origin&&O!=null?y=O+k.search+k.hash:H=!0}catch{cr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=sT(y,{relative:o}),[ee,oe,Se]=BT(i,R),pe=XT(y,{replace:h,state:d,target:p,preventScrollReset:E,relative:o,viewTransition:T});function N(A){e&&e(A),A.defaultPrevented||pe(A)}let I=B.createElement("a",{...R,...Se,href:U||Y,onClick:H||l?e:N,ref:WT(x,oe),target:p,"data-discover":!$&&t==="render"?"true":void 0});return ee&&!$?B.createElement(B.Fragment,null,I,B.createElement($T,{page:Y})):I});C_.displayName="Link";var GT=B.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:h,viewTransition:d,children:p,...y},E){let T=fl(h,{relative:y.relative}),R=ms(),x=B.useContext(Rc),{navigator:F,basename:$}=B.useContext(fr),U=x!=null&&nI(T)&&d===!0,H=F.encodeLocation?F.encodeLocation(T).pathname:T.pathname,Y=R.pathname,ee=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(Y=Y.toLowerCase(),ee=ee?ee.toLowerCase():null,H=H.toLowerCase()),ee&&$&&(ee=Ii(ee,$)||ee);const oe=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let Se=Y===H||!o&&Y.startsWith(H)&&Y.charAt(oe)==="/",pe=ee!=null&&(ee===H||!o&&ee.startsWith(H)&&ee.charAt(H.length)==="/"),N={isActive:Se,isPending:pe,isTransitioning:U},I=Se?e:void 0,A;typeof i=="function"?A=i(N):A=[i,Se?"active":null,pe?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(N):l;return B.createElement(C_,{...y,"aria-current":I,className:A,ref:E,style:k,to:h,viewTransition:d},typeof p=="function"?p(N):p)});GT.displayName="NavLink";var QT=B.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:h=Ku,action:d,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:T,...R},x)=>{let F=eI(),$=tI(d,{relative:y}),U=h.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&A_.test(d),Y=ee=>{if(p&&p(ee),ee.defaultPrevented)return;ee.preventDefault();let oe=ee.nativeEvent.submitter,Se=(oe==null?void 0:oe.getAttribute("formmethod"))||h;F(oe||ee.currentTarget,{fetcherKey:e,method:Se,navigate:t,replace:o,state:l,relative:y,preventScrollReset:E,viewTransition:T})};return B.createElement("form",{ref:x,method:U,action:$,onSubmit:i?p:Y,...R,"data-discover":!H&&n==="render"?"true":void 0})});QT.displayName="Form";function YT(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function P_(n){let e=B.useContext(Mo);return et(e,YT(n)),e}function XT(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:h}={}){let d=w_(),p=ms(),y=fl(n,{relative:l});return B.useCallback(E=>{if(PT(E,e)){E.preventDefault();let T=t!==void 0?t:Za(p)===Za(y);d(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:h})}},[p,d,y,t,i,e,n,o,l,h])}var JT=0,ZT=()=>`__${String(++JT)}__`;function eI(){let{router:n}=P_("useSubmit"),{basename:e}=B.useContext(fr),t=_T();return B.useCallback(async(i,o={})=>{let{action:l,method:h,encType:d,formData:p,body:y}=DT(i,e);if(o.navigate===!1){let E=o.fetcherKey||ZT();await n.fetch(E,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function tI(n,{relative:e}={}){let{basename:t}=B.useContext(fr),i=B.useContext(Wn);et(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...fl(n||".",{relative:e})},h=ms();if(n==null){l.search=h.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(E=>E==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let E=d.toString();l.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Mr([t,l.pathname])),Za(l)}function nI(n,e={}){let t=B.useContext(__);et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=P_("useViewTransitionState"),o=fl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ii(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=Ii(t.nextLocation.pathname,i)||t.nextLocation.pathname;return sc(o.pathname,h)!=null||sc(o.pathname,l)!=null}new TextEncoder;var rI={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function k_(n){if(typeof n=="number")return{value:n,unit:"px"};var e,t=(n.match(/^[0-9.]*/)||"").toString();t.includes(".")?e=parseFloat(t):e=parseInt(t,10);var i=(n.match(/[^0-9]*$/)||"").toString();return rI[i]?{value:e,unit:i}:(console.warn("React Spinners: ".concat(n," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function ju(n){var e=k_(n);return"".concat(e.value).concat(e.unit)}var iI=function(n,e,t){var i="react-spinners-".concat(n,"-").concat(t);if(typeof window>"u"||!window.document)return i;var o=document.createElement("style");document.head.appendChild(o);var l=o.sheet,h=`
    @keyframes `.concat(i,` {
      `).concat(e,`
    }
  `);return l&&l.insertRule(h,0),i},lt=function(){return lt=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},lt.apply(this,arguments)},sI=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t},oI=iI("FadeLoader","50% {opacity: 0.3} 100% {opacity: 1}","fade");function aI(n){var e=n.loading,t=e===void 0?!0:e,i=n.color,o=i===void 0?"#000000":i,l=n.speedMultiplier,h=l===void 0?1:l,d=n.cssOverride,p=d===void 0?{}:d,y=n.height,E=y===void 0?15:y,T=n.width,R=T===void 0?5:T,x=n.radius,F=x===void 0?2:x,$=n.margin,U=$===void 0?2:$,H=sI(n,["loading","color","speedMultiplier","cssOverride","height","width","radius","margin"]),Y=k_(U).value,ee=Y+18,oe=ee/2+ee/5.5,Se=lt({display:"inherit",position:"relative",fontSize:"0",top:ee,left:ee,width:"".concat(ee*3,"px"),height:"".concat(ee*3,"px")},p),pe=function(_t){return{position:"absolute",width:ju(R),height:ju(E),margin:ju(U),backgroundColor:o,borderRadius:ju(F),transition:"2s",animationFillMode:"both",animation:"".concat(oI," ").concat(1.2/h,"s ").concat(_t*.12,"s infinite ease-in-out")}},N=lt(lt({},pe(1)),{top:"".concat(ee,"px"),left:"0"}),I=lt(lt({},pe(2)),{top:"".concat(oe,"px"),left:"".concat(oe,"px"),transform:"rotate(-45deg)"}),A=lt(lt({},pe(3)),{top:"0",left:"".concat(ee,"px"),transform:"rotate(90deg)"}),k=lt(lt({},pe(4)),{top:"".concat(-1*oe,"px"),left:"".concat(oe,"px"),transform:"rotate(45deg)"}),O=lt(lt({},pe(5)),{top:"".concat(-1*ee,"px"),left:"0"}),L=lt(lt({},pe(6)),{top:"".concat(-1*oe,"px"),left:"".concat(-1*oe,"px"),transform:"rotate(-45deg)"}),C=lt(lt({},pe(7)),{top:"0",left:"".concat(-1*ee,"px"),transform:"rotate(90deg)"}),Xe=lt(lt({},pe(8)),{top:"".concat(oe,"px"),left:"".concat(-1*oe,"px"),transform:"rotate(45deg)"});return t?B.createElement("span",lt({style:Se},H),B.createElement("span",{style:N}),B.createElement("span",{style:I}),B.createElement("span",{style:A}),B.createElement("span",{style:k}),B.createElement("span",{style:O}),B.createElement("span",{style:L}),B.createElement("span",{style:C}),B.createElement("span",{style:Xe})):null}const xr=()=>Te.jsx("div",{className:"LoaderContainer",children:Te.jsx(aI,{})}),Ef=B.createContext(),lI=({children:n,reducer:e,initialState:t})=>{const[i,o]=B.useReducer(e,t);return Te.jsx(Ef.Provider,{value:{state:i,dispatch:o},children:n})},bg=({children:n,msg:e,redirect:t})=>{const{state:i,dispatch:o}=B.useContext(Ef),l=w_();return B.useEffect(()=>{i.user||l("/Auth",{state:{msg:e,redirect:t}})},[i.user]),n},uI=Sn.lazy(()=>Hn(()=>import("./Order-CIDNUOlq.js"),__vite__mapDeps([0,1]))),cI=Sn.lazy(()=>Hn(()=>import("./Auth-CtLKnUNC.js"),__vite__mapDeps([2,3]))),hI=Sn.lazy(()=>Hn(()=>import("./Error-Dp-rRU3N.js"),__vite__mapDeps([4,5]))),dI=Sn.lazy(()=>Hn(()=>import("./Layout-Bu7iHFx5.js"),__vite__mapDeps([6,7,8,9]))),fI=Sn.lazy(()=>Hn(()=>import("./HorizontalproductDetsil-Cj-gkFsu.js"),__vite__mapDeps([10,11,12,13])));Sn.lazy(()=>Hn(()=>import("./Fotter-B6qDOztV.js"),__vite__mapDeps([7,8])));const pI=Sn.lazy(()=>Hn(()=>import("./Index-DTbOE8w6.js"),__vite__mapDeps([14,15,16,17,18]))),mI=Sn.lazy(()=>Hn(()=>import("./Cart-Dw98BrCR.js"),__vite__mapDeps([19,1]))),gI=Sn.lazy(()=>Hn(()=>import("./ProductDetail-Cegwulw7.js"),__vite__mapDeps([20,11,12,13,8]))),yI=Sn.lazy(()=>Hn(()=>import("./Product-DdMs9qCW.js"),__vite__mapDeps([21,15,13,16,17,22]))),_I=Sn.lazy(()=>Hn(()=>import("./Payment-Bcx1BuNN.js"),__vite__mapDeps([23,15]))),vI=()=>Te.jsx(Te.Fragment,{children:Te.jsx(KT,{children:Te.jsx(B.Suspense,{fallback:xr,children:Te.jsxs(IT,{children:[Te.jsxs(jn,{element:Te.jsx(dI,{}),children:[Te.jsx(jn,{path:"/",element:Te.jsx(B.Suspense,{fallback:xr,children:Te.jsx(pI,{})})}),Te.jsx(jn,{path:"/product",element:Te.jsx(B.Suspense,{fallback:xr,children:Te.jsx(yI,{})})}),Te.jsx(jn,{path:"/productDetail/:ProductId",element:Te.jsx(B.Suspense,{fallback:xr,children:Te.jsx(gI,{})})}),Te.jsx(jn,{path:"/cart",element:Te.jsx(B.Suspense,{fallback:xr,children:Te.jsx(mI,{})})}),Te.jsx(jn,{path:"/HorizontalproductDetsil/:ProductId",element:Te.jsx(B.Suspense,{fallback:xr,children:Te.jsx(fI,{})})}),Te.jsx(jn,{path:"/payment",element:Te.jsx(B.Suspense,{fallback:xr,children:Te.jsx(bg,{msg:"you must have login to pay",redirect:"/payment",children:Te.jsx(_I,{})})})}),Te.jsx(jn,{path:"/order",element:Te.jsx(B.Suspense,{fallback:xr,children:Te.jsx(bg,{msg:"you must have login to order",redirect:"/order",children:Te.jsx(uI,{})})})})]}),Te.jsx(jn,{path:"/Auth",element:Te.jsx(B.Suspense,{fallback:xr,children:Te.jsx(cI,{})})}),Te.jsx(jn,{path:"*",element:Te.jsx(hI,{})})]})})})});var Fg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},EI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},D_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,d=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=l>>2,T=(l&3)<<4|d>>4;let R=(d&15)<<2|y>>6,x=y&63;p||(x=64,h||(R=64)),i.push(t[E],t[T],t[R],t[x])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(N_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):EI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new wI;const R=l<<2|d>>4;if(i.push(R),y!==64){const x=d<<4&240|y>>2;if(i.push(x),T!==64){const F=y<<6&192|T;i.push(F)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TI=function(n){const e=N_(n);return D_.encodeByteArray(e,!0)},oc=function(n){return TI(n).replace(/\./g,"")},x_=function(n){try{return D_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=()=>II().__FIREBASE_DEFAULTS__,RI=()=>{if(typeof process>"u"||typeof Fg>"u")return;const n=Fg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},AI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&x_(n[1]);return e&&JSON.parse(e)},Cc=()=>{try{return SI()||RI()||AI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},O_=n=>{var e,t;return(t=(e=Cc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},CI=n=>{const e=O_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},V_=()=>{var n;return(n=Cc())===null||n===void 0?void 0:n.config},L_=n=>{var e;return(e=Cc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[oc(JSON.stringify(t)),oc(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function DI(){var n;const e=(n=Cc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function M_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function OI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VI(){const n=jt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function LI(){return!DI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function b_(){try{return typeof indexedDB=="object"}catch{return!1}}function F_(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function MI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="FirebaseError";class Kn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=bI,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?FI(l,i):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new Kn(o,d,i)}}function FI(n,e){return n.replace(UI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const UI=/\{\$([^}]+)}/g;function jI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function el(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(Ug(l)&&Ug(h)){if(!el(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Ug(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function za(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ba(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function zI(n,e){const t=new BI(n,e);return t.subscribe.bind(t)}class BI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");$I(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Ad),o.error===void 0&&(o.error=Ad),o.complete===void 0&&(o.complete=Ad);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $I(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ad(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=1e3,HI=2,WI=4*60*60*1e3,KI=.5;function jg(n,e=qI,t=HI){const i=e*Math.pow(t,n),o=Math.round(KI*i*(Math.random()-.5)*2);return Math.min(WI,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n){return n&&n._delegate?n._delegate:n}class Bn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new PI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YI(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:QI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QI(n){return n===ss?void 0:n}function YI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new GI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const JI={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},ZI=Pe.INFO,eS={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},tS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=eS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=ZI,this._logHandler=tS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const nS=(n,e)=>e.some(t=>n instanceof t);let zg,Bg;function rS(){return zg||(zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iS(){return Bg||(Bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U_=new WeakMap,Bd=new WeakMap,j_=new WeakMap,Cd=new WeakMap,wf=new WeakMap;function sS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Ei(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&U_.set(t,n)}).catch(()=>{}),wf.set(e,n),e}function oS(n){if(Bd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});Bd.set(n,e)}let $d={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||j_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ei(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function aS(n){$d=n($d)}function lS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Pd(this),e,...t);return j_.set(i,e.sort?e.sort():[e]),Ei(i)}:iS().includes(n)?function(...e){return n.apply(Pd(this),e),Ei(U_.get(this))}:function(...e){return Ei(n.apply(Pd(this),e))}}function uS(n){return typeof n=="function"?lS(n):(n instanceof IDBTransaction&&oS(n),nS(n,rS())?new Proxy(n,$d):n)}function Ei(n){if(n instanceof IDBRequest)return sS(n);if(Cd.has(n))return Cd.get(n);const e=uS(n);return e!==n&&(Cd.set(n,e),wf.set(e,n)),e}const Pd=n=>wf.get(n);function z_(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),d=Ei(h);return i&&h.addEventListener("upgradeneeded",p=>{i(Ei(h.result),p.oldVersion,p.newVersion,Ei(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const cS=["get","getKey","getAll","getAllKeys","count"],hS=["put","add","delete","clear"],kd=new Map;function $g(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(kd.get(e))return kd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=hS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||cS.includes(t)))return;const l=async function(h,...d){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return kd.set(e,l),l}aS(n=>({...n,get:(e,t,i)=>$g(e,t)||n.get(e,t,i),has:(e,t)=>!!$g(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function fS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qd="@firebase/app",qg="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Pc("@firebase/app"),pS="@firebase/app-compat",mS="@firebase/analytics-compat",gS="@firebase/analytics",yS="@firebase/app-check-compat",_S="@firebase/app-check",vS="@firebase/auth",ES="@firebase/auth-compat",wS="@firebase/database",TS="@firebase/data-connect",IS="@firebase/database-compat",SS="@firebase/functions",RS="@firebase/functions-compat",AS="@firebase/installations",CS="@firebase/installations-compat",PS="@firebase/messaging",kS="@firebase/messaging-compat",NS="@firebase/performance",DS="@firebase/performance-compat",xS="@firebase/remote-config",OS="@firebase/remote-config-compat",VS="@firebase/storage",LS="@firebase/storage-compat",MS="@firebase/firestore",bS="@firebase/vertexai",FS="@firebase/firestore-compat",US="firebase",jS="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="[DEFAULT]",zS={[qd]:"fire-core",[pS]:"fire-core-compat",[gS]:"fire-analytics",[mS]:"fire-analytics-compat",[_S]:"fire-app-check",[yS]:"fire-app-check-compat",[vS]:"fire-auth",[ES]:"fire-auth-compat",[wS]:"fire-rtdb",[TS]:"fire-data-connect",[IS]:"fire-rtdb-compat",[SS]:"fire-fn",[RS]:"fire-fn-compat",[AS]:"fire-iid",[CS]:"fire-iid-compat",[PS]:"fire-fcm",[kS]:"fire-fcm-compat",[NS]:"fire-perf",[DS]:"fire-perf-compat",[xS]:"fire-rc",[OS]:"fire-rc-compat",[VS]:"fire-gcs",[LS]:"fire-gcs-compat",[MS]:"fire-fst",[FS]:"fire-fst-compat",[bS]:"fire-vertex","fire-js":"fire-js",[US]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Map,BS=new Map,Wd=new Map;function Hg(n,e){try{n.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hr(n){const e=n.name;if(Wd.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;Wd.set(e,n);for(const t of ac.values())Hg(t,n);for(const t of BS.values())Hg(t,n);return!0}function ys(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function sr(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wi=new gs("app","Firebase",$S);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=jS;function B_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Hd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw wi.create("bad-app-name",{appName:String(o)});if(t||(t=V_()),!t)throw wi.create("no-options");const l=ac.get(o);if(l){if(el(t,l.options)&&el(i,l.config))return l;throw wi.create("duplicate-app",{appName:o})}const h=new XI(o);for(const p of Wd.values())h.addComponent(p);const d=new qS(t,i,h);return ac.set(o,d),d}function Tf(n=Hd){const e=ac.get(n);if(!e&&n===Hd&&V_())return B_();if(!e)throw wi.create("no-app",{appName:n});return e}function In(n,e,t){var i;let o=(i=zS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(d.join(" "));return}hr(new Bn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="firebase-heartbeat-database",WS=1,tl="firebase-heartbeat-store";let Nd=null;function $_(){return Nd||(Nd=z_(HS,WS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(tl)}catch(t){console.warn(t)}}}}).catch(n=>{throw wi.create("idb-open",{originalErrorMessage:n.message})})),Nd}async function KS(n){try{const t=(await $_()).transaction(tl),i=await t.objectStore(tl).get(q_(n));return await t.done,i}catch(e){if(e instanceof Kn)Ur.warn(e.message);else{const t=wi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(t.message)}}}async function Wg(n,e){try{const i=(await $_()).transaction(tl,"readwrite");await i.objectStore(tl).put(e,q_(n)),await i.done}catch(t){if(t instanceof Kn)Ur.warn(t.message);else{const i=wi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ur.warn(i.message)}}}function q_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=1024,QS=30*24*60*60*1e3;class YS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new JS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Kg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const d=new Date(h.date).valueOf();return Date.now()-d<=QS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Ur.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Kg(),{heartbeatsToSend:i,unsentEntries:o}=XS(this._heartbeatsCache.heartbeats),l=oc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ur.warn(t),""}}}function Kg(){return new Date().toISOString().substring(0,10)}function XS(n,e=GS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Gg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Gg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class JS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return b_()?F_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await KS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Wg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Wg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Gg(n){return oc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(n){hr(new Bn("platform-logger",e=>new dS(e),"PRIVATE")),hr(new Bn("heartbeat",e=>new YS(e),"PRIVATE")),In(qd,qg,n),In(qd,qg,"esm2017"),In("fire-js","")}ZS("");var e1="firebase",t1="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(e1,t1,"app");const H_="@firebase/installations",If="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=1e4,K_=`w:${If}`,G_="FIS_v2",n1="https://firebaseinstallations.googleapis.com/v1",r1=60*60*1e3,i1="installations",s1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},cs=new gs(i1,s1,o1);function Q_(n){return n instanceof Kn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_({projectId:n}){return`${n1}/projects/${n}/installations`}function X_(n){return{token:n.token,requestStatus:2,expiresIn:l1(n.expiresIn),creationTime:Date.now()}}async function J_(n,e){const i=(await e.json()).error;return cs.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Z_({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function a1(n,{refreshToken:e}){const t=Z_(n);return t.append("Authorization",u1(e)),t}async function ev(n){const e=await n();return e.status>=500&&e.status<600?n():e}function l1(n){return Number(n.replace("s","000"))}function u1(n){return`${G_} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c1({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Y_(n),o=Z_(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:G_,appId:n.appId,sdkVersion:K_},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await ev(()=>fetch(i,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:X_(y.authToken)}}else throw await J_("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=/^[cdef][\w-]{21}$/,Kd="";function f1(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=p1(n);return d1.test(t)?t:Kd}catch{return Kd}}function p1(n){return h1(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=new Map;function rv(n,e){const t=kc(n);iv(t,e),m1(t,e)}function iv(n,e){const t=nv.get(n);if(t)for(const i of t)i(e)}function m1(n,e){const t=g1();t&&t.postMessage({key:n,fid:e}),y1()}let os=null;function g1(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=n=>{iv(n.data.key,n.data.fid)}),os}function y1(){nv.size===0&&os&&(os.close(),os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1="firebase-installations-database",v1=1,hs="firebase-installations-store";let Dd=null;function Sf(){return Dd||(Dd=z_(_1,v1,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(hs)}}})),Dd}async function lc(n,e){const t=kc(n),o=(await Sf()).transaction(hs,"readwrite"),l=o.objectStore(hs),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&rv(n,e.fid),e}async function sv(n){const e=kc(n),i=(await Sf()).transaction(hs,"readwrite");await i.objectStore(hs).delete(e),await i.done}async function Nc(n,e){const t=kc(n),o=(await Sf()).transaction(hs,"readwrite"),l=o.objectStore(hs),h=await l.get(t),d=e(h);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!h||h.fid!==d.fid)&&rv(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rf(n){let e;const t=await Nc(n.appConfig,i=>{const o=E1(i),l=w1(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Kd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function E1(n){const e=n||{fid:f1(),registrationStatus:0};return ov(e)}function w1(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(cs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=T1(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:I1(n)}:{installationEntry:e}}async function T1(n,e){try{const t=await c1(n,e);return lc(n.appConfig,t)}catch(t){throw Q_(t)&&t.customData.serverCode===409?await sv(n.appConfig):await lc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function I1(n){let e=await Qg(n.appConfig);for(;e.registrationStatus===1;)await tv(100),e=await Qg(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Rf(n);return i||t}return e}function Qg(n){return Nc(n,e=>{if(!e)throw cs.create("installation-not-found");return ov(e)})}function ov(n){return S1(n)?{fid:n.fid,registrationStatus:0}:n}function S1(n){return n.registrationStatus===1&&n.registrationTime+W_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1({appConfig:n,heartbeatServiceProvider:e},t){const i=A1(n,t),o=a1(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:K_,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await ev(()=>fetch(i,d));if(p.ok){const y=await p.json();return X_(y)}else throw await J_("Generate Auth Token",p)}function A1(n,{fid:e}){return`${Y_(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Af(n,e=!1){let t;const i=await Nc(n.appConfig,l=>{if(!av(l))throw cs.create("not-registered");const h=l.authToken;if(!e&&k1(h))return l;if(h.requestStatus===1)return t=C1(n,e),l;{if(!navigator.onLine)throw cs.create("app-offline");const d=D1(l);return t=P1(n,d),d}});return t?await t:i.authToken}async function C1(n,e){let t=await Yg(n.appConfig);for(;t.authToken.requestStatus===1;)await tv(100),t=await Yg(n.appConfig);const i=t.authToken;return i.requestStatus===0?Af(n,e):i}function Yg(n){return Nc(n,e=>{if(!av(e))throw cs.create("not-registered");const t=e.authToken;return x1(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function P1(n,e){try{const t=await R1(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await lc(n.appConfig,i),t}catch(t){if(Q_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await sv(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await lc(n.appConfig,i)}throw t}}function av(n){return n!==void 0&&n.registrationStatus===2}function k1(n){return n.requestStatus===2&&!N1(n)}function N1(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+r1}function D1(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function x1(n){return n.requestStatus===1&&n.requestTime+W_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(n){const e=n,{installationEntry:t,registrationPromise:i}=await Rf(e);return i?i.catch(console.error):Af(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(n,e=!1){const t=n;return await L1(t),(await Af(t,e)).token}async function L1(n){const{registrationPromise:e}=await Rf(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(n){if(!n||!n.options)throw xd("App Configuration");if(!n.name)throw xd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw xd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function xd(n){return cs.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="installations",b1="installations-internal",F1=n=>{const e=n.getProvider("app").getImmediate(),t=M1(e),i=ys(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},U1=n=>{const e=n.getProvider("app").getImmediate(),t=ys(e,lv).getImmediate();return{getId:()=>O1(t),getToken:o=>V1(t,o)}};function j1(){hr(new Bn(lv,F1,"PUBLIC")),hr(new Bn(b1,U1,"PRIVATE"))}j1();In(H_,If);In(H_,If,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="analytics",z1="firebase_id",B1="origin",$1=60*1e3,q1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new Pc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},hn=new gs("analytics","Analytics",H1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(n){if(!n.startsWith(Cf)){const e=hn.create("invalid-gtag-resource",{gtagURL:n});return tn.warn(e.message),""}return n}function uv(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function K1(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function G1(n,e){const t=K1("firebase-js-sdk-policy",{createScriptURL:W1}),i=document.createElement("script"),o=`${Cf}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function Q1(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Y1(n,e,t,i,o,l){const h=i[o];try{if(h)await e[h];else{const p=(await uv(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(d){tn.error(d)}n("config",o,l)}async function X1(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const d=await uv(t);for(const p of h){const y=d.find(T=>T.measurementId===p),E=y&&e[y.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){tn.error(l)}}function J1(n,e,t,i){async function o(l,...h){try{if(l==="event"){const[d,p]=h;await X1(n,e,t,d,p)}else if(l==="config"){const[d,p]=h;await Y1(n,e,t,i,d,p)}else if(l==="consent"){const[d,p]=h;n("consent",d,p)}else if(l==="get"){const[d,p,y]=h;n("get",d,p,y)}else if(l==="set"){const[d]=h;n("set",d)}else n(l,...h)}catch(d){tn.error(d)}}return o}function Z1(n,e,t,i,o){let l=function(...h){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=J1(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function eR(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Cf)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=30,nR=1e3;class rR{constructor(e={},t=nR){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const cv=new rR;function iR(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function sR(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:iR(i)},l=q1.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let d="";try{const p=await h.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw hn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:d})}return h.json()}async function oR(n,e=cv,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw hn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw hn.create("no-api-key")}const h=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new uR;return setTimeout(async()=>{d.abort()},$1),hv({appId:i,apiKey:o,measurementId:l},h,d,e)}async function hv(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=cv){var l;const{appId:h,measurementId:d}=n;try{await aR(i,e)}catch(p){if(d)return tn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:d};throw p}try{const p=await sR(n);return o.deleteThrottleMetadata(h),p}catch(p){const y=p;if(!lR(y)){if(o.deleteThrottleMetadata(h),d)return tn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:h,measurementId:d};throw p}const E=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?jg(t,o.intervalMillis,tR):jg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(h,T),tn.debug(`Calling attemptFetch again in ${E} millis`),hv(n,T,i,o)}}function aR(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(hn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function lR(n){if(!(n instanceof Kn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class uR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function cR(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,h=Object.assign(Object.assign({},i),{send_to:l});n("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(){if(b_())try{await F_()}catch(n){return tn.warn(hn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return tn.warn(hn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function dR(n,e,t,i,o,l,h){var d;const p=oR(n);p.then(x=>{t[x.measurementId]=x.appId,n.options.measurementId&&x.measurementId!==n.options.measurementId&&tn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>tn.error(x)),e.push(p);const y=hR().then(x=>{if(x)return i.getId()}),[E,T]=await Promise.all([p,y]);eR(l)||G1(l,E.measurementId),o("js",new Date);const R=(d=h==null?void 0:h.config)!==null&&d!==void 0?d:{};return R[B1]="firebase",R.update=!0,T!=null&&(R[z1]=T),o("config",E.measurementId,R),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.app=e}_delete(){return delete Ka[this.app.options.appId],Promise.resolve()}}let Ka={},Xg=[];const Jg={};let Od="dataLayer",pR="gtag",Zg,dv,ey=!1;function mR(){const n=[];if(M_()&&n.push("This is a browser extension environment."),MI()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=hn.create("invalid-analytics-context",{errorInfo:e});tn.warn(t.message)}}function gR(n,e,t){mR();const i=n.options.appId;if(!i)throw hn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)tn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw hn.create("no-api-key");if(Ka[i]!=null)throw hn.create("already-exists",{id:i});if(!ey){Q1(Od);const{wrappedGtag:l,gtagCore:h}=Z1(Ka,Xg,Jg,Od,pR);dv=l,Zg=h,ey=!0}return Ka[i]=dR(n,Xg,Jg,e,Zg,Od,t),new fR(n)}function yR(n=Tf()){n=zt(n);const e=ys(n,uc);return e.isInitialized()?e.getImmediate():_R(n)}function _R(n,e={}){const t=ys(n,uc);if(t.isInitialized()){const o=t.getImmediate();if(el(e,t.getOptions()))return o;throw hn.create("already-initialized")}return t.initialize({options:e})}function vR(n,e,t,i){n=zt(n),cR(dv,Ka[n.app.options.appId],e,t,i).catch(o=>tn.error(o))}const ty="@firebase/analytics",ny="0.10.10";function ER(){hr(new Bn(uc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return gR(i,o,t)},"PUBLIC")),hr(new Bn("analytics-internal",n,"PRIVATE")),In(ty,ny),In(ty,ny,"esm2017");function n(e){try{const t=e.getProvider(uc).getImmediate();return{logEvent:(i,o,l)=>vR(t,i,o,l)}}catch(t){throw hn.create("interop-component-reg-failed",{reason:t})}}}ER();function Pf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function fv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wR=fv,pv=new gs("auth","Firebase",fv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Pc("@firebase/auth");function TR(n,...e){cc.logLevel<=Pe.WARN&&cc.warn(`Auth (${bo}): ${n}`,...e)}function Qu(n,...e){cc.logLevel<=Pe.ERROR&&cc.error(`Auth (${bo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n,...e){throw kf(n,...e)}function or(n,...e){return kf(n,...e)}function mv(n,e,t){const i=Object.assign(Object.assign({},wR()),{[e]:t});return new gs("auth","Firebase",i).create(e,{appName:n.name})}function br(n){return mv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return pv.create(n,...e)}function _e(n,e,...t){if(!n)throw kf(e,...t)}function Or(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qu(e),new Error(e)}function jr(n,e){n||Or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function IR(){return ry()==="http:"||ry()==="https:"}function ry(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IR()||M_()||"connection"in navigator)?navigator.onLine:!0}function RR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t){this.shortDelay=e,this.longDelay=t,jr(t>e,"Short delay should be less than long delay!"),this.isMobile=NI()||OI()}get(){return SR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n,e){jr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new ml(3e4,6e4);function ki(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ni(n,e,t,i,o={}){return yv(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const d=pl(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return xI()||(y.referrerPolicy="no-referrer"),gv.fetch()(_v(n,n.config.apiHost,t,d),y)})}async function yv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},AR),e);try{const o=new kR(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw zu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const d=l.ok?h.errorMessage:h.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw zu(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw zu(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw zu(n,"user-disabled",h);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw mv(n,E,y);$n(n,E)}}catch(o){if(o instanceof Kn)throw o;$n(n,"network-request-failed",{message:String(o)})}}async function gl(n,e,t,i,o={}){const l=await Ni(n,e,t,i,o);return"mfaPendingCredential"in l&&$n(n,"multi-factor-auth-required",{_serverResponse:l}),l}function _v(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Nf(n.config,o):`${n.config.apiScheme}://${o}`}function PR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(or(this.auth,"network-request-failed")),CR.get())})}}function zu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=or(n,e,i);return o.customData._tokenResponse=t,o}function iy(n){return n!==void 0&&n.enterprise!==void 0}class NR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return PR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DR(n,e){return Ni(n,"GET","/v2/recaptchaConfig",ki(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(n,e){return Ni(n,"POST","/v1/accounts:delete",e)}async function vv(n,e){return Ni(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OR(n,e=!1){const t=zt(n),i=await t.getIdToken(e),o=Df(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Ga(Vd(o.auth_time)),issuedAtTime:Ga(Vd(o.iat)),expirationTime:Ga(Vd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Vd(n){return Number(n)*1e3}function Df(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Qu("JWT malformed, contained fewer than 3 sections"),null;try{const o=x_(t);return o?JSON.parse(o):(Qu("Failed to decode base64 JWT payload"),null)}catch(o){return Qu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function sy(n){const e=Df(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Kn&&VR(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function VR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ga(this.lastLoginAt),this.creationTime=Ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await nl(n,vv(t,{idToken:i}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Ev(l.providerUserInfo):[],d=bR(n.providerData,h),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),E=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Qd(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function MR(n){const e=zt(n);await hc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bR(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Ev(n){return n.map(e=>{var{providerId:t}=e,i=Pf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(n,e){const t=await yv(n,{},async()=>{const i=pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=_v(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",gv.fetch()(h,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function UR(n,e){return Ni(n,"POST","/v2/accounts:revokeToken",ki(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=sy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await FR(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new Io;return i&&(_e(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Qd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await nl(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return OR(this,e)}reload(){return MR(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await hc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sr(this.auth.app))return Promise.reject(br(this.auth));const e=await this.getIdToken();return await nl(this,xR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,d,p,y,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,x=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,F=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(d=t.tenantId)!==null&&d!==void 0?d:void 0,U=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(y=t.createdAt)!==null&&y!==void 0?y:void 0,Y=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ee,emailVerified:oe,isAnonymous:Se,providerData:pe,stsTokenManager:N}=t;_e(ee&&N,e,"internal-error");const I=Io.fromJSON(this.name,N);_e(typeof ee=="string",e,"internal-error"),pi(T,e.name),pi(R,e.name),_e(typeof oe=="boolean",e,"internal-error"),_e(typeof Se=="boolean",e,"internal-error"),pi(x,e.name),pi(F,e.name),pi($,e.name),pi(U,e.name),pi(H,e.name),pi(Y,e.name);const A=new Vr({uid:ee,auth:e,email:R,emailVerified:oe,displayName:T,isAnonymous:Se,photoURL:F,phoneNumber:x,tenantId:$,stsTokenManager:I,createdAt:H,lastLoginAt:Y});return pe&&Array.isArray(pe)&&(A.providerData=pe.map(k=>Object.assign({},k))),U&&(A._redirectEventId=U),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new Io;o.updateFromServerResponse(t);const l=new Vr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await hc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Ev(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new Io;d.updateFromIdToken(i);const p=new Vr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Qd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new Map;function Lr(n){jr(n instanceof Function,"Expected a class definition");let e=oy.get(n);return e?(jr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,oy.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wv.type="NONE";const ay=wv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n,e,t){return`firebase:${n}:${e}:${t}`}class So{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Yu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Yu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new So(Lr(ay),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Lr(ay);const h=Yu(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const E=await y._get(h);if(E){const T=Vr._fromJSON(e,E);y!==l&&(d=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new So(l,e,i):(l=p[0],d&&await l._set(h,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new So(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cv(e))return"Blackberry";if(Pv(e))return"Webos";if(Iv(e))return"Safari";if((e.includes("chrome/")||Sv(e))&&!e.includes("edge/"))return"Chrome";if(Av(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Tv(n=jt()){return/firefox\//i.test(n)}function Iv(n=jt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sv(n=jt()){return/crios\//i.test(n)}function Rv(n=jt()){return/iemobile/i.test(n)}function Av(n=jt()){return/android/i.test(n)}function Cv(n=jt()){return/blackberry/i.test(n)}function Pv(n=jt()){return/webos/i.test(n)}function xf(n=jt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function jR(n=jt()){var e;return xf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zR(){return VI()&&document.documentMode===10}function kv(n=jt()){return xf(n)||Av(n)||Pv(n)||Cv(n)||/windows phone/i.test(n)||Rv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(n,e=[]){let t;switch(n){case"Browser":t=ly(jt());break;case"Worker":t=`${ly(jt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,d)=>{try{const p=e(l);h(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(n,e={}){return Ni(n,"GET","/v2/passwordPolicy",ki(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=6;class HR{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:qR,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uy(this),this.idTokenSubscription=new uy(this),this.beforeStateQueue=new BR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await So.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vv(this,{idToken:e}),i=await Vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(sr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sr(this.app))return Promise.reject(br(this));const t=e?zt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sr(this.app)?Promise.reject(br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sr(this.app)?Promise.reject(br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $R(this),t=new HR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await UR(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await So.create(this,[Lr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(d,this,"internal-error"),d.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&TR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function _s(n){return zt(n)}class uy{constructor(e){this.auth=e,this.observer=null,this.addObserver=zI(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KR(n){Dc=n}function Dv(n){return Dc.loadJS(n)}function GR(){return Dc.recaptchaEnterpriseScript}function QR(){return Dc.gapiScript}function YR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class XR{constructor(){this.enterprise=new JR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class JR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ZR="recaptcha-enterprise",xv="NO_RECAPTCHA";class eA{constructor(e){this.type=ZR,this.auth=_s(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,d)=>{DR(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new NR(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,h,d){const p=window.grecaptcha;iy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(xv)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new XR().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(d=>{if(!t&&iy(window.grecaptcha))o(d,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=GR();p.length!==0&&(p+=d),Dv(p).then(()=>{o(d,l,h)}).catch(y=>{h(y)})}}).catch(d=>{h(d)})})}}async function cy(n,e,t,i=!1,o=!1){const l=new eA(n);let h;if(o)h=xv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Yd(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await cy(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await cy(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(n,e){const t=ys(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(el(l,e??{}))return o;$n(o,"already-initialized")}return t.initialize({options:e})}function nA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Lr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function rA(n,e,t){const i=_s(n);_e(i._canInitEmulator,i,"emulator-config-failed"),_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Ov(e),{host:h,port:d}=iA(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${h}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),sA()}function Ov(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function iA(n){const e=Ov(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:hy(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:hy(h)}}}function hy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function sA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,t){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function oA(n,e){return Ni(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(n,e){return gl(n,"POST","/v1/accounts:signInWithPassword",ki(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(n,e){return gl(n,"POST","/v1/accounts:signInWithEmailLink",ki(n,e))}async function uA(n,e){return gl(n,"POST","/v1/accounts:signInWithEmailLink",ki(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends Of{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new rl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new rl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yd(e,t,"signInWithPassword",aA);case"emailLink":return lA(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yd(e,i,"signUpPassword",oA);case"emailLink":return uA(e,{idToken:t,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(n,e){return gl(n,"POST","/v1/accounts:signInWithIdp",ki(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA="http://localhost";class ds extends Of{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Pf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new ds(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Ro(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ro(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ro(e,t)}buildRequest(){const e={requestUri:cA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dA(n){const e=za(Ba(n)).link,t=e?za(Ba(e)).deep_link_id:null,i=za(Ba(n)).deep_link_id;return(i?za(Ba(i)).link:null)||i||t||e||n}class Vf{constructor(e){var t,i,o,l,h,d;const p=za(Ba(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,T=hA((o=p.mode)!==null&&o!==void 0?o:null);_e(y&&E&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=dA(e);try{return new Vf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.providerId=Fo.PROVIDER_ID}static credential(e,t){return rl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Vf.parseLink(t);return _e(i,"argument-error"),rl._fromEmailAndCode(e,i.code,i.tenantId)}}Fo.PROVIDER_ID="password";Fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends Vv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends yl{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.FACEBOOK_SIGN_IN_METHOD="facebook.com";mi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ds._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return gi.credential(t,i)}catch{return null}}}gi.GOOGLE_SIGN_IN_METHOD="google.com";gi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends yl{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.GITHUB_SIGN_IN_METHOD="github.com";yi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends yl{constructor(){super("twitter.com")}static credential(e,t){return ds._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return _i.credential(t,i)}catch{return null}}}_i.TWITTER_SIGN_IN_METHOD="twitter.com";_i.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(n,e){return gl(n,"POST","/v1/accounts:signUp",ki(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Vr._fromIdTokenResponse(e,i,o),h=dy(i);return new fs({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=dy(i);return new fs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function dy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends Kn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,dc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new dc(e,t,i,o)}}function Lv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?dc._fromErrorAndOperation(n,l,e,i):l})}async function pA(n,e,t=!1){const i=await nl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return fs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(n,e,t=!1){const{auth:i}=n;if(sr(i.app))return Promise.reject(br(i));const o="reauthenticate";try{const l=await nl(n,Lv(i,o,e,n),t);_e(l.idToken,i,"internal-error");const h=Df(l.idToken);_e(h,i,"internal-error");const{sub:d}=h;return _e(n.uid===d,i,"user-mismatch"),fs._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&$n(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mv(n,e,t=!1){if(sr(n.app))return Promise.reject(br(n));const i="signIn",o=await Lv(n,i,e),l=await fs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function gA(n,e){return Mv(_s(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(n){const e=_s(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QN(n,e,t){if(sr(n.app))return Promise.reject(br(n));const i=_s(n),h=await Yd(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&bv(n),p}),d=await fs._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(d.user),d}function YN(n,e,t){return sr(n.app)?Promise.reject(br(n)):gA(zt(n),Fo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&bv(n),i})}function yA(n,e,t,i){return zt(n).onIdTokenChanged(e,t,i)}function _A(n,e,t){return zt(n).beforeAuthStateChanged(e,t)}const fc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fc,"1"),this.storage.removeItem(fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=1e3,EA=10;class Uv extends Fv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,d,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);zR()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,EA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},vA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uv.type="LOCAL";const wA=Uv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv extends Fv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jv.type="SESSION";const zv=jv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new xc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(h).map(async y=>y(t.origin,l)),p=await TA(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((d,p)=>{const y=Lf("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(R.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(){return window}function SA(n){ar().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function RA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function CA(){return Bv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="firebaseLocalStorageDb",PA=1,pc="firebaseLocalStorage",qv="fbase_key";class _l{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oc(n,e){return n.transaction([pc],e?"readwrite":"readonly").objectStore(pc)}function kA(){const n=indexedDB.deleteDatabase($v);return new _l(n).toPromise()}function Xd(){const n=indexedDB.open($v,PA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(pc,{keyPath:qv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(pc)?e(i):(i.close(),await kA(),e(await Xd()))})})}async function fy(n,e,t){const i=Oc(n,!0).put({[qv]:e,value:t});return new _l(i).toPromise()}async function NA(n,e){const t=Oc(n,!1).get(e),i=await new _l(t).toPromise();return i===void 0?null:i.value}function py(n,e){const t=Oc(n,!0).delete(e);return new _l(t).toPromise()}const DA=800,xA=3;class Hv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>xA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xc._getInstance(CA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await RA(),!this.activeServiceWorker)return;this.sender=new IA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xd();return await fy(e,fc,"1"),await py(e,fc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>fy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>NA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>py(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Oc(o,!1).getAll();return new _l(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hv.type="LOCAL";const OA=Hv;new ml(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(n,e){return e?Lr(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf extends Of{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ro(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ro(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function LA(n){return Mv(n.auth,new Mf(n),n.bypassAuthState)}function MA(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),mA(t,new Mf(n),n.bypassAuthState)}async function bA(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),pA(t,new Mf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:d}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LA;case"linkViaPopup":case"linkViaRedirect":return bA;case"reauthViaPopup":case"reauthViaRedirect":return MA;default:$n(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=new ml(2e3,1e4);class wo extends Wv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,wo.currentPopupAction&&wo.currentPopupAction.cancel(),wo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=Lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(or(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(or(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(or(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FA.get())};e()}}wo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="pendingRedirect",Xu=new Map;class jA extends Wv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Xu.get(this.auth._key());if(!e){try{const i=await zA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Xu.set(this.auth._key(),e)}return this.bypassAuthState||Xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zA(n,e){const t=qA(e),i=$A(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function BA(n,e){Xu.set(n._key(),e)}function $A(n){return Lr(n._redirectPersistence)}function qA(n){return Yu(UA,n.config.apiKey,n.name)}async function HA(n,e,t=!1){if(sr(n.app))return Promise.reject(br(n));const i=_s(n),o=VA(i,e),h=await new jA(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=10*60*1e3;class KA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Kv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(or(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WA&&this.cachedEventUids.clear(),this.cachedEventUids.has(my(e))}saveEventToCache(e){this.cachedEventUids.add(my(e)),this.lastProcessedEventTime=Date.now()}}function my(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Kv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(n,e={}){return Ni(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XA=/^https?/;async function JA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await QA(n);for(const t of e)try{if(ZA(t))return}catch{}$n(n,"unauthorized-domain")}function ZA(n){const e=Gd(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!XA.test(t))return!1;if(YA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=new ml(3e4,6e4);function gy(){const n=ar().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tC(n){return new Promise((e,t)=>{var i,o,l;function h(){gy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gy(),t(or(n,"network-request-failed"))},timeout:eC.get()})}if(!((o=(i=ar().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=ar().gapi)===null||l===void 0)&&l.load)h();else{const d=YR("iframefcb");return ar()[d]=()=>{gapi.load?h():t(or(n,"network-request-failed"))},Dv(`${QR()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Ju=null,e})}let Ju=null;function nC(n){return Ju=Ju||tC(n),Ju}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=new ml(5e3,15e3),iC="__/auth/iframe",sC="emulator/auth/iframe",oC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lC(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Nf(e,sC):`https://${n.config.authDomain}/${iC}`,i={apiKey:e.apiKey,appName:n.name,v:bo},o=aC.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${pl(i).slice(1)}`}async function uC(n){const e=await nC(n),t=ar().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:lC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oC,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=or(n,"network-request-failed"),d=ar().setTimeout(()=>{l(h)},rC.get());function p(){ar().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hC=500,dC=600,fC="_blank",pC="http://localhost";class yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mC(n,e,t,i=hC,o=dC){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},cC),{width:i.toString(),height:o.toString(),top:l,left:h}),y=jt().toLowerCase();t&&(d=Sv(y)?fC:t),Tv(y)&&(e=e||pC,p.scrollbars="yes");const E=Object.entries(p).reduce((R,[x,F])=>`${R}${x}=${F},`,"");if(jR(y)&&d!=="_self")return gC(e||"",d),new yy(null);const T=window.open(e||"",d,E);_e(T,n,"popup-blocked");try{T.focus()}catch{}return new yy(T)}function gC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="__/auth/handler",_C="emulator/auth/handler",vC=encodeURIComponent("fac");async function _y(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:bo,eventId:o};if(e instanceof Vv){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",jI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof yl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const d=h;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const p=await n._getAppCheckToken(),y=p?`#${vC}=${encodeURIComponent(p)}`:"";return`${EC(n)}?${pl(d).slice(1)}${y}`}function EC({config:n}){return n.emulator?Nf(n,_C):`https://${n.authDomain}/${yC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="webStorageSupport";class wC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zv,this._completeRedirectFn=HA,this._overrideRedirectResult=BA}async _openPopup(e,t,i,o){var l;jr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await _y(e,t,i,Gd(),o);return mC(e,h,Lf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await _y(e,t,i,Gd(),o);return SA(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(jr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await uC(e),i=new KA(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ld,{type:Ld},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Ld];h!==void 0&&t(!!h),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kv()||Iv()||xf()}}const TC=wC;var vy="@firebase/auth",Ey="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RC(n){hr(new Bn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=i.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nv(n)},y=new WR(i,o,l,p);return nA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),hr(new Bn("auth-internal",e=>{const t=_s(e.getProvider("auth").getImmediate());return(i=>new IC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(vy,Ey,SC(n)),In(vy,Ey,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=5*60,CC=L_("authIdTokenMaxAge")||AC;let wy=null;const PC=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>CC)return;const o=t==null?void 0:t.token;wy!==o&&(wy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function kC(n=Tf()){const e=ys(n,"auth");if(e.isInitialized())return e.getImmediate();const t=tA(n,{popupRedirectResolver:TC,persistence:[OA,wA,zv]}),i=L_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=PC(l.toString());_A(t,h,()=>h(t.currentUser)),yA(t,d=>h(d))}}const o=O_("auth");return o&&rA(t,`http://${o}`),t}function NC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}KR({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=or("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",NC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RC("Browser");var Ty=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ls,Gv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(k,O,L){for(var C=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)C[Xe-2]=arguments[Xe];return I.prototype[O].apply(k,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var k=Array(16);if(typeof I=="string")for(var O=0;16>O;++O)k[O]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(O=0;16>O;++O)k[O]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],O=N.g[2];var L=N.g[3],C=I+(L^A&(O^L))+k[0]+3614090360&4294967295;I=A+(C<<7&4294967295|C>>>25),C=L+(O^I&(A^O))+k[1]+3905402710&4294967295,L=I+(C<<12&4294967295|C>>>20),C=O+(A^L&(I^A))+k[2]+606105819&4294967295,O=L+(C<<17&4294967295|C>>>15),C=A+(I^O&(L^I))+k[3]+3250441966&4294967295,A=O+(C<<22&4294967295|C>>>10),C=I+(L^A&(O^L))+k[4]+4118548399&4294967295,I=A+(C<<7&4294967295|C>>>25),C=L+(O^I&(A^O))+k[5]+1200080426&4294967295,L=I+(C<<12&4294967295|C>>>20),C=O+(A^L&(I^A))+k[6]+2821735955&4294967295,O=L+(C<<17&4294967295|C>>>15),C=A+(I^O&(L^I))+k[7]+4249261313&4294967295,A=O+(C<<22&4294967295|C>>>10),C=I+(L^A&(O^L))+k[8]+1770035416&4294967295,I=A+(C<<7&4294967295|C>>>25),C=L+(O^I&(A^O))+k[9]+2336552879&4294967295,L=I+(C<<12&4294967295|C>>>20),C=O+(A^L&(I^A))+k[10]+4294925233&4294967295,O=L+(C<<17&4294967295|C>>>15),C=A+(I^O&(L^I))+k[11]+2304563134&4294967295,A=O+(C<<22&4294967295|C>>>10),C=I+(L^A&(O^L))+k[12]+1804603682&4294967295,I=A+(C<<7&4294967295|C>>>25),C=L+(O^I&(A^O))+k[13]+4254626195&4294967295,L=I+(C<<12&4294967295|C>>>20),C=O+(A^L&(I^A))+k[14]+2792965006&4294967295,O=L+(C<<17&4294967295|C>>>15),C=A+(I^O&(L^I))+k[15]+1236535329&4294967295,A=O+(C<<22&4294967295|C>>>10),C=I+(O^L&(A^O))+k[1]+4129170786&4294967295,I=A+(C<<5&4294967295|C>>>27),C=L+(A^O&(I^A))+k[6]+3225465664&4294967295,L=I+(C<<9&4294967295|C>>>23),C=O+(I^A&(L^I))+k[11]+643717713&4294967295,O=L+(C<<14&4294967295|C>>>18),C=A+(L^I&(O^L))+k[0]+3921069994&4294967295,A=O+(C<<20&4294967295|C>>>12),C=I+(O^L&(A^O))+k[5]+3593408605&4294967295,I=A+(C<<5&4294967295|C>>>27),C=L+(A^O&(I^A))+k[10]+38016083&4294967295,L=I+(C<<9&4294967295|C>>>23),C=O+(I^A&(L^I))+k[15]+3634488961&4294967295,O=L+(C<<14&4294967295|C>>>18),C=A+(L^I&(O^L))+k[4]+3889429448&4294967295,A=O+(C<<20&4294967295|C>>>12),C=I+(O^L&(A^O))+k[9]+568446438&4294967295,I=A+(C<<5&4294967295|C>>>27),C=L+(A^O&(I^A))+k[14]+3275163606&4294967295,L=I+(C<<9&4294967295|C>>>23),C=O+(I^A&(L^I))+k[3]+4107603335&4294967295,O=L+(C<<14&4294967295|C>>>18),C=A+(L^I&(O^L))+k[8]+1163531501&4294967295,A=O+(C<<20&4294967295|C>>>12),C=I+(O^L&(A^O))+k[13]+2850285829&4294967295,I=A+(C<<5&4294967295|C>>>27),C=L+(A^O&(I^A))+k[2]+4243563512&4294967295,L=I+(C<<9&4294967295|C>>>23),C=O+(I^A&(L^I))+k[7]+1735328473&4294967295,O=L+(C<<14&4294967295|C>>>18),C=A+(L^I&(O^L))+k[12]+2368359562&4294967295,A=O+(C<<20&4294967295|C>>>12),C=I+(A^O^L)+k[5]+4294588738&4294967295,I=A+(C<<4&4294967295|C>>>28),C=L+(I^A^O)+k[8]+2272392833&4294967295,L=I+(C<<11&4294967295|C>>>21),C=O+(L^I^A)+k[11]+1839030562&4294967295,O=L+(C<<16&4294967295|C>>>16),C=A+(O^L^I)+k[14]+4259657740&4294967295,A=O+(C<<23&4294967295|C>>>9),C=I+(A^O^L)+k[1]+2763975236&4294967295,I=A+(C<<4&4294967295|C>>>28),C=L+(I^A^O)+k[4]+1272893353&4294967295,L=I+(C<<11&4294967295|C>>>21),C=O+(L^I^A)+k[7]+4139469664&4294967295,O=L+(C<<16&4294967295|C>>>16),C=A+(O^L^I)+k[10]+3200236656&4294967295,A=O+(C<<23&4294967295|C>>>9),C=I+(A^O^L)+k[13]+681279174&4294967295,I=A+(C<<4&4294967295|C>>>28),C=L+(I^A^O)+k[0]+3936430074&4294967295,L=I+(C<<11&4294967295|C>>>21),C=O+(L^I^A)+k[3]+3572445317&4294967295,O=L+(C<<16&4294967295|C>>>16),C=A+(O^L^I)+k[6]+76029189&4294967295,A=O+(C<<23&4294967295|C>>>9),C=I+(A^O^L)+k[9]+3654602809&4294967295,I=A+(C<<4&4294967295|C>>>28),C=L+(I^A^O)+k[12]+3873151461&4294967295,L=I+(C<<11&4294967295|C>>>21),C=O+(L^I^A)+k[15]+530742520&4294967295,O=L+(C<<16&4294967295|C>>>16),C=A+(O^L^I)+k[2]+3299628645&4294967295,A=O+(C<<23&4294967295|C>>>9),C=I+(O^(A|~L))+k[0]+4096336452&4294967295,I=A+(C<<6&4294967295|C>>>26),C=L+(A^(I|~O))+k[7]+1126891415&4294967295,L=I+(C<<10&4294967295|C>>>22),C=O+(I^(L|~A))+k[14]+2878612391&4294967295,O=L+(C<<15&4294967295|C>>>17),C=A+(L^(O|~I))+k[5]+4237533241&4294967295,A=O+(C<<21&4294967295|C>>>11),C=I+(O^(A|~L))+k[12]+1700485571&4294967295,I=A+(C<<6&4294967295|C>>>26),C=L+(A^(I|~O))+k[3]+2399980690&4294967295,L=I+(C<<10&4294967295|C>>>22),C=O+(I^(L|~A))+k[10]+4293915773&4294967295,O=L+(C<<15&4294967295|C>>>17),C=A+(L^(O|~I))+k[1]+2240044497&4294967295,A=O+(C<<21&4294967295|C>>>11),C=I+(O^(A|~L))+k[8]+1873313359&4294967295,I=A+(C<<6&4294967295|C>>>26),C=L+(A^(I|~O))+k[15]+4264355552&4294967295,L=I+(C<<10&4294967295|C>>>22),C=O+(I^(L|~A))+k[6]+2734768916&4294967295,O=L+(C<<15&4294967295|C>>>17),C=A+(L^(O|~I))+k[13]+1309151649&4294967295,A=O+(C<<21&4294967295|C>>>11),C=I+(O^(A|~L))+k[4]+4149444226&4294967295,I=A+(C<<6&4294967295|C>>>26),C=L+(A^(I|~O))+k[11]+3174756917&4294967295,L=I+(C<<10&4294967295|C>>>22),C=O+(I^(L|~A))+k[2]+718787259&4294967295,O=L+(C<<15&4294967295|C>>>17),C=A+(L^(O|~I))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+O&4294967295,N.g[3]=N.g[3]+L&4294967295}i.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,k=this.B,O=this.h,L=0;L<I;){if(O==0)for(;L<=A;)o(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<I;)if(k[O++]=N.charCodeAt(L++),O==this.blockSize){o(this,k),O=0;break}}else for(;L<I;)if(k[O++]=N[L++],O==this.blockSize){o(this,k),O=0;break}}this.h=O,this.o+=I},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var k=0;32>k;k+=8)N[A++]=this.g[I]>>>k&255;return N};function l(N,I){var A=d;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],k=!0,O=N.length-1;0<=O;O--){var L=N[O]|0;k&&L==I||(A[O]=L,k=!1)}this.g=A}var d={};function p(N){return-128<=N&&128>N?l(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return U(y(-N));for(var I=[],A=1,k=0;N>=A;k++)I[k]=N/A|0,A*=4294967296;return new h(I,0)}function E(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return U(E(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(I,8)),k=T,O=0;O<N.length;O+=8){var L=Math.min(8,N.length-O),C=parseInt(N.substring(O,O+L),I);8>L?(L=y(Math.pow(I,L)),k=k.j(L).add(y(C))):(k=k.j(A),k=k.add(y(C)))}return k}var T=p(0),R=p(1),x=p(16777216);n=h.prototype,n.m=function(){if($(this))return-U(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var k=this.i(A);N+=(0<=k?k:4294967296+k)*I,I*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(F(this))return"0";if($(this))return"-"+U(this).toString(N);for(var I=y(Math.pow(N,6)),A=this,k="";;){var O=oe(A,I).g;A=H(A,O.j(I));var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=O,F(A))return L+k;for(;6>L.length;)L="0"+L;k=L+k}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function F(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function $(N){return N.h==-1}n.l=function(N){return N=H(this,N),$(N)?-1:F(N)?0:1};function U(N){for(var I=N.g.length,A=[],k=0;k<I;k++)A[k]=~N.g[k];return new h(A,~N.h).add(R)}n.abs=function(){return $(this)?U(this):this},n.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0,O=0;O<=I;O++){var L=k+(this.i(O)&65535)+(N.i(O)&65535),C=(L>>>16)+(this.i(O)>>>16)+(N.i(O)>>>16);k=C>>>16,L&=65535,C&=65535,A[O]=C<<16|L}return new h(A,A[A.length-1]&-2147483648?-1:0)};function H(N,I){return N.add(U(I))}n.j=function(N){if(F(this)||F(N))return T;if($(this))return $(N)?U(this).j(U(N)):U(U(this).j(N));if($(N))return U(this.j(U(N)));if(0>this.l(x)&&0>N.l(x))return y(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],k=0;k<2*I;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var O=0;O<N.g.length;O++){var L=this.i(k)>>>16,C=this.i(k)&65535,Xe=N.i(O)>>>16,_t=N.i(O)&65535;A[2*k+2*O]+=C*_t,Y(A,2*k+2*O),A[2*k+2*O+1]+=L*_t,Y(A,2*k+2*O+1),A[2*k+2*O+1]+=C*Xe,Y(A,2*k+2*O+1),A[2*k+2*O+2]+=L*Xe,Y(A,2*k+2*O+2)}for(k=0;k<I;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=I;k<2*I;k++)A[k]=0;return new h(A,0)};function Y(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function ee(N,I){this.g=N,this.h=I}function oe(N,I){if(F(I))throw Error("division by zero");if(F(N))return new ee(T,T);if($(N))return I=oe(U(N),I),new ee(U(I.g),U(I.h));if($(I))return I=oe(N,U(I)),new ee(U(I.g),I.h);if(30<N.g.length){if($(N)||$(I))throw Error("slowDivide_ only works with positive integers.");for(var A=R,k=I;0>=k.l(N);)A=Se(A),k=Se(k);var O=pe(A,1),L=pe(k,1);for(k=pe(k,2),A=pe(A,2);!F(k);){var C=L.add(k);0>=C.l(N)&&(O=O.add(A),L=C),k=pe(k,1),A=pe(A,1)}return I=H(N,O.j(I)),new ee(O,I)}for(O=T;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),L=y(A),C=L.j(I);$(C)||0<C.l(N);)A-=k,L=y(A),C=L.j(I);F(L)&&(L=R),O=O.add(L),N=H(N,C)}return new ee(O,N)}n.A=function(N){return oe(this,N).h},n.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)&N.i(k);return new h(A,this.h&N.h)},n.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)|N.i(k);return new h(A,this.h|N.h)},n.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],k=0;k<I;k++)A[k]=this.i(k)^N.i(k);return new h(A,this.h^N.h)};function Se(N){for(var I=N.g.length+1,A=[],k=0;k<I;k++)A[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(A,N.h)}function pe(N,I){var A=I>>5;I%=32;for(var k=N.g.length-A,O=[],L=0;L<k;L++)O[L]=0<I?N.i(L+A)>>>I|N.i(L+A+1)<<32-I:N.i(L+A);return new h(O,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Gv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,ls=h}).apply(typeof Ty<"u"?Ty:typeof self<"u"?self:typeof window<"u"?window:{});var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qv,$a,Yv,Zu,Jd,Xv,Jv,Zv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bu=="object"&&Bu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var M=u[w];if(!(M in _))break e;_=_[M]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,w=!1,M={next:function(){if(!w&&_<u.length){var q=_++;return{value:m(q,u[q]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),u.apply(m,M)}}return function(){return u.apply(m,arguments)}}function R(u,m,_){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,R.apply(null,arguments)}function x(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function F(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,M,q){for(var te=Array(arguments.length-2),je=2;je<arguments.length;je++)te[je-2]=arguments[je];return m.prototype[M].apply(w,te)}}function $(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function U(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const M=u.length||0,q=w.length||0;u.length=M+q;for(let te=0;te<q;te++)u[M+te]=w[te]}else u.push(w)}}class H{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Y(u){return/^[\s\xa0]*$/.test(u)}function ee(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function oe(u){return oe[" "](u),u}oe[" "]=function(){};var Se=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function pe(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function I(u){const m={};for(const _ in u)m[_]=u[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let _,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(_ in w)u[_]=w[_];for(let q=0;q<A.length;q++)_=A[q],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function L(u){d.setTimeout(()=>{throw u},0)}function C(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Xe{constructor(){this.h=this.g=null}add(m,_){const w=_t.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var _t=new H(()=>new xt,u=>u.reset());class xt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,ne=!1,me=new Xe,ie=()=>{const u=d.Promise.resolve(void 0);ze=()=>{u.then(V)}};var V=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){L(_)}var m=_t;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ne=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Se){e:{try{oe(m.nodeName);var M=!0;break e}catch{}M=!1}M||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}F(Ae,de);var xe={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,m,_,w,M){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=M,this.key=++Fe,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function pr(u){this.src=u,this.g={},this.h=0}pr.prototype.add=function(u,m,_,w,M){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var te=$r(u,m,w,M);return-1<te?(m=u[te],_||(m.fa=!1)):(m=new $e(m,this.src,q,!!w,M),m.fa=_,u.push(m)),m};function Ss(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],M=Array.prototype.indexOf.call(w,m,void 0),q;(q=0<=M)&&Array.prototype.splice.call(w,M,1),q&&(vt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function $r(u,m,_,w){for(var M=0;M<u.length;++M){var q=u[M];if(!q.da&&q.listener==m&&q.capture==!!_&&q.ha==w)return M}return-1}var Di="closure_lm_"+(1e6*Math.random()|0),Rs={};function qo(u,m,_,w,M){if(Array.isArray(m)){for(var q=0;q<m.length;q++)qo(u,m[q],_,w,M);return null}return _=Ko(_),u&&u[be]?u.K(m,_,y(w)?!!w.capture:!!w,M):Ho(u,m,_,!1,w,M)}function Ho(u,m,_,w,M,q){if(!m)throw Error("Invalid event type");var te=y(M)?!!M.capture:!!M,je=Cs(u);if(je||(u[Di]=je=new pr(u)),_=je.add(m,_,w,te,q),_.proxy)return _;if(w=Il(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Re||(M=te),M===void 0&&(M=!1),u.addEventListener(m.toString(),w,M);else if(u.attachEvent)u.attachEvent(gr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Il(){function u(_){return m.call(u.src,u.listener,_)}const m=Wo;return u}function As(u,m,_,w,M){if(Array.isArray(m))for(var q=0;q<m.length;q++)As(u,m[q],_,w,M);else w=y(w)?!!w.capture:!!w,_=Ko(_),u&&u[be]?(u=u.i,m=String(m).toString(),m in u.g&&(q=u.g[m],_=$r(q,_,w,M),-1<_&&(vt(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete u.g[m],u.h--)))):u&&(u=Cs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=$r(m,_,w,M)),(_=-1<u?m[u]:null)&&mr(_))}function mr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[be])Ss(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(gr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=Cs(m))?(Ss(_,u),_.h==0&&(_.src=null,m[Di]=null)):vt(u)}}}function gr(u){return u in Rs?Rs[u]:Rs[u]="on"+u}function Wo(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&mr(u),u=_.call(w,m)}return u}function Cs(u){return u=u[Di],u instanceof pr?u:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ko(u){return typeof u=="function"?u:(u[Ps]||(u[Ps]=function(m){return u.handleEvent(m)}),u[Ps])}function ht(){K.call(this),this.i=new pr(this),this.M=this,this.F=null}F(ht,K),ht.prototype[be]=!0,ht.prototype.removeEventListener=function(u,m,_,w){As(this,u,m,_,w)};function dt(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new de(m,u);else if(m instanceof de)m.target=m.target||u;else{var M=m;m=new de(w,u),k(m,M)}if(M=!0,_)for(var q=_.length-1;0<=q;q--){var te=m.g=_[q];M=yr(te,w,!0,m)&&M}if(te=m.g=u,M=yr(te,w,!0,m)&&M,M=yr(te,w,!1,m)&&M,_)for(q=0;q<_.length;q++)te=m.g=_[q],M=yr(te,w,!1,m)&&M}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)vt(_[w]);delete u.g[m],u.h--}}this.F=null},ht.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},ht.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function yr(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var M=!0,q=0;q<m.length;++q){var te=m[q];if(te&&!te.da&&te.capture==_){var je=te.listener,ft=te.ha||te.src;te.fa&&Ss(u.i,te),M=je.call(ft,w)!==!1&&M}}return M&&!w.defaultPrevented}function Go(u,m,_){if(typeof u=="function")_&&(u=R(u,_));else if(u&&typeof u.handleEvent=="function")u=R(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function qr(u){u.g=Go(()=>{u.g=null,u.i&&(u.i=!1,qr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class xi extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:qr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oi(u){K.call(this),this.h=u,this.g={}}F(Oi,K);var Qo=[];function Yo(u){pe(u.g,function(m,_){this.g.hasOwnProperty(_)&&mr(m)},u),u.g={}}Oi.prototype.N=function(){Oi.aa.N.call(this),Yo(this)},Oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xo=d.JSON.stringify,Jo=d.JSON.parse,Zo=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Vi(){}Vi.prototype.h=null;function ks(u){return u.h||(u.h=u.i())}function Ns(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gn(){de.call(this,"d")}F(Gn,de);function Ds(){de.call(this,"c")}F(Ds,de);var Qn={},ea=null;function Li(){return ea=ea||new ht}Qn.La="serverreachability";function ta(u){de.call(this,Qn.La,u)}F(ta,de);function _r(u){const m=Li();dt(m,new ta(m))}Qn.STAT_EVENT="statevent";function na(u,m){de.call(this,Qn.STAT_EVENT,u),this.stat=m}F(na,de);function rt(u){const m=Li();dt(m,new na(m,u))}Qn.Ma="timingevent";function xs(u,m){de.call(this,Qn.Ma,u),this.size=m}F(xs,de);function Rn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Mi(){this.g=!0}Mi.prototype.xa=function(){this.g=!1};function bi(u,m,_,w,M,q){u.info(function(){if(u.g)if(q)for(var te="",je=q.split("&"),ft=0;ft<je.length;ft++){var Oe=je[ft].split("=");if(1<Oe.length){var Et=Oe[0];Oe=Oe[1];var ot=Et.split("_");te=2<=ot.length&&ot[1]=="type"?te+(Et+"="+Oe+"&"):te+(Et+"=redacted&")}}else te=null;else te=q;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+m+`
`+_+`
`+te})}function Os(u,m,_,w,M,q,te){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+m+`
`+_+`
`+q+" "+te})}function An(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Kc(u,_)+(w?" "+w:"")})}function ra(u,m){u.info(function(){return"TIMEOUT: "+m})}Mi.prototype.info=function(){};function Kc(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var q=M[0];if(q!="noop"&&q!="stop"&&q!="close")for(var te=1;te<M.length;te++)M[te]=""}}}}return Xo(_)}catch{return m}}var Vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function Fi(){}F(Fi,Vi),Fi.prototype.g=function(){return new XMLHttpRequest},Fi.prototype.i=function(){return{}},Cn=new Fi;function Pn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new Oi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rl}function Rl(){this.i=null,this.g="",this.h=!1}var ia={},Ls={};function Ms(u,m,_){u.L=1,u.v=Qr(sn(m)),u.m=_,u.P=!0,sa(u,null)}function sa(u,m){u.F=Date.now(),qe(u),u.A=sn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Xr(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Rl,u.g=$l(u.j,_?m:null,!u.m),0<u.O&&(u.M=new xi(R(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(Qo[0]=M.toString()),M=Qo);for(var q=0;q<M.length;q++){var te=qo(_,M[q],w||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),_r(),bi(u.i,u.u,u.A,u.l,u.R,u.m)}Pn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Kt(u)==3?m.j():this.Y(u)},Pn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Kt(this.g);var m=this.g.Ba();const mn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||ha(this.g)))){this.J||ot!=4||m==7||(m==8||0>=mn?_r(3):_r(2)),Ui(this);var _=this.g.Z();this.X=_;t:if(Al(this)){var w=ha(this.g);u="";var M=w.length,q=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),Hr(this);var te="";break t}this.h.i=new d.TextDecoder}for(m=0;m<M;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!(q&&m==M-1)});w.length=0,this.h.g+=u,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=_==200,Os(this.i,this.u,this.A,this.l,this.R,ot,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,ft=this.g;if((je=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(je)){var Oe=je;break t}}Oe=null}if(_=Oe)An(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oa(this,_);else{this.o=!1,this.s=3,rt(12),fn(this),Hr(this);break e}}if(this.P){_=!0;let an;for(;!this.J&&this.C<te.length;)if(an=Gc(this,te),an==Ls){ot==4&&(this.s=4,rt(14),_=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(an==ia){this.s=4,rt(15),An(this.i,this.l,te,"[Invalid Chunk]"),_=!1;break}else An(this.i,this.l,an,null),oa(this,an);if(Al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||te.length!=0||this.h.h||(this.s=1,rt(16),_=!1),this.o=this.o&&_,!_)An(this.i,this.l,te,"[Invalid Chunked Response]"),fn(this),Hr(this);else if(0<te.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),fa(Et),Et.M=!0,rt(11))}}else An(this.i,this.l,te,null),oa(this,te);ot==4&&fn(this),this.o&&!this.J&&(ot==4?Ks(this.j,this):(this.o=!1,qe(this)))}else Bs(this.g),_==400&&0<te.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),fn(this),Hr(this)}}}catch{}finally{}};function Al(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Gc(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Ls:(_=Number(m.substring(_,w)),isNaN(_)?ia:(w+=1,w+_>m.length?Ls:(m=m.slice(w,w+_),u.C=w+_,m)))}Pn.prototype.cancel=function(){this.J=!0,fn(this)};function qe(u){u.S=Date.now()+u.I,Cl(u,u.I)}function Cl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Rn(R(u.ba,u),m)}function Ui(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Pn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ra(this.i,this.A),this.L!=2&&(_r(),rt(17)),fn(this),this.s=2,Hr(this)):Cl(this,this.S-u)};function Hr(u){u.j.G==0||u.J||Ks(u.j,u)}function fn(u){Ui(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Yo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function oa(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Bt(_.h,u))){if(!u.K&&Bt(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Ws(_),On(_);else break e;Hs(_),rt(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Rn(R(_.Za,_),6e3));if(1>=kl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ir(_,11)}else if((u.K||_.g==u)&&Ws(_),!Y(m))for(M=_.Da.g.parse(m),m=0;m<M.length;m++){let Oe=M[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const Et=Oe[3];Et!=null&&(_.la=Et,_.j.info("VER="+_.la));const ot=Oe[4];ot!=null&&(_.Aa=ot,_.j.info("SVER="+_.Aa));const mn=Oe[5];mn!=null&&typeof mn=="number"&&0<mn&&(w=1.5*mn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const an=u.g;if(an){const Wi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wi){var q=w.h;q.g||Wi.indexOf("spdy")==-1&&Wi.indexOf("quic")==-1&&Wi.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(aa(q,q.h),q.h=null))}if(w.D){const Qs=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Qs&&(w.ya=Qs,Be(w.I,w.D,Qs))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var te=u;if(w.qa=Bl(w,w.J?w.ia:null,w.W),te.K){Nl(w.h,te);var je=te,ft=w.L;ft&&(je.I=ft),je.B&&(Ui(je),qe(je)),w.g=te}else Hi(w);0<_.i.length&&Zn(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Ir(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Ir(_,7):At(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}_r(4)}catch{}}var Pl=class{constructor(u,m){this.g=u,this.map=m}};function ji(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function kl(u){return u.h?1:u.g?u.g.size:0}function Bt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function aa(u,m){u.g?u.g.add(m):u.h=m}function Nl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ji.prototype.cancel=function(){if(this.i=Dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Dl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return $(u.i)}function bs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function Fs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function Wr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Fs(u),w=bs(u),M=w.length,q=0;q<M;q++)m.call(void 0,w[q],_&&_[q],u)}var zi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qc(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),M=null;if(0<=w){var q=u[_].substring(0,w);M=u[_].substring(w+1)}else q=u[_];m(q,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function vr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof vr){this.h=u.h,Bi(this,u.j),this.o=u.o,this.g=u.g,Kr(this,u.s),this.l=u.l;var m=u.i,_=new Yn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Gr(this,_),this.m=u.m}else u&&(m=String(u).match(zi))?(this.h=!1,Bi(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Kr(this,m[4]),this.l=Ne(m[5]||"",!0),Gr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}vr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Yr(m,Us,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Yr(m,Us,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Yr(_,_.charAt(0)=="/"?Vl:Ol,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Yr(_,la)),u.join("")};function sn(u){return new vr(u)}function Bi(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Kr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Gr(u,m,_){m instanceof Yn?(u.i=m,Xn(u.i,u.h)):(_||(m=Yr(m,Ll)),u.i=new Yn(m,u.h))}function Be(u,m,_){u.i.set(m,_)}function Qr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Yr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,xl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function xl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Us=/[#\/\?@]/g,Ol=/[#\?:]/g,Vl=/[#\?]/g,Ll=/[#\?@]/g,la=/#/g;function Yn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&Qc(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Yn.prototype,n.add=function(u,m){Rt(this),this.i=null,u=pn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function kn(u,m){Rt(u),m=pn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Nn(u,m){return Rt(u),m=pn(u,m),u.g.has(m)}n.forEach=function(u,m){Rt(this),this.g.forEach(function(_,w){_.forEach(function(M){u.call(m,M,w,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const M=u[w];for(let q=0;q<M.length;q++)_.push(m[w])}return _},n.V=function(u){Rt(this);let m=[];if(typeof u=="string")Nn(this,u)&&(m=m.concat(this.g.get(pn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Rt(this),this.i=null,u=pn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Xr(u,m,_){kn(u,m),0<_.length&&(u.i=null,u.g.set(pn(u,m),$(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const q=encodeURIComponent(String(w)),te=this.V(w);for(w=0;w<te.length;w++){var M=q;te[w]!==""&&(M+="="+encodeURIComponent(String(te[w]))),u.push(M)}}return this.i=u.join("&")};function pn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Xn(u,m){m&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(_,w){var M=w.toLowerCase();w!=M&&(kn(this,w),Xr(this,M,_))},u)),u.j=m}function Yc(u,m){const _=new Mi;if(d.Image){const w=new Image;w.onload=x(Wt,_,"TestLoadImage: loaded",!0,m,w),w.onerror=x(Wt,_,"TestLoadImage: error",!1,m,w),w.onabort=x(Wt,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=x(Wt,_,"TestLoadImage: timeout",!1,m,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function Ml(u,m){const _=new Mi,w=new AbortController,M=setTimeout(()=>{w.abort(),Wt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then(q=>{clearTimeout(M),q.ok?Wt(_,"TestPingServer: ok",!0,m):Wt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),Wt(_,"TestPingServer: error",!1,m)})}function Wt(u,m,_,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(_)}catch{}}function Xc(){this.g=new Zo}function bl(u,m,_){const w=_||"";try{Wr(u,function(M,q){let te=M;y(M)&&(te=Xo(M)),m.push(w+q+"="+encodeURIComponent(te))})}catch(M){throw m.push(w+"type="+encodeURIComponent("_badmap")),M}}function Er(u){this.l=u.Ub||null,this.j=u.eb||!1}F(Er,Vi),Er.prototype.g=function(){return new $i(this.l,this.j)},Er.prototype.i=function(u){return function(){return u}}({});function $i(u,m){ht.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F($i,ht),n=$i.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,xn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Dn(this):xn(this),this.readyState==3&&Fl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Dn(this))},n.Qa=function(u){this.g&&(this.response=u,Dn(this))},n.ga=function(){this.g&&Dn(this)};function Dn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,xn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function xn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty($i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wr(u){let m="";return pe(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function Jr(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=wr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Be(u,m,_))}function Qe(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(Qe,ht);var Jc=/^https?$/i,ua=["POST","PUT"];n=Qe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?ks(this.o):ks(Cn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(q){qi(this,q);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)_.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const q of w.keys())_.set(q,w.get(q));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),M=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ua,m,void 0))||w||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,te]of _)this.g.setRequestHeader(q,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zs(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){qi(this,q)}};function qi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,js(u),on(u)}function js(u){u.A||(u.A=!0,dt(u,"complete"),dt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,dt(this,"complete"),dt(this,"abort"),on(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ca(this):this.bb())},n.bb=function(){ca(this)};function ca(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Kt(u)!=4||u.Z()!=2)){if(u.u&&Kt(u)==4)Go(u.Ea,0,u);else if(dt(u,"readystatechange"),Kt(u)==4){u.h=!1;try{const te=u.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=te===0){var M=String(u.D).match(zi)[1]||null;!M&&d.self&&d.self.location&&(M=d.self.location.protocol.slice(0,-1)),w=!Jc.test(M?M.toLowerCase():"")}_=w}if(_)dt(u,"complete"),dt(u,"success");else{u.m=6;try{var q=2<Kt(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",js(u)}}finally{on(u)}}}}function on(u,m){if(u.g){zs(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||dt(u,"ready");try{_.onreadystatechange=w}catch{}}}function zs(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Kt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Jo(m)}};function ha(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Bs(u){const m={};u=(u.g&&2<=Kt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(Y(u[w]))continue;var _=O(u[w]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=m[M]||[];m[M]=q,q.push(_)}N(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function da(u){this.Aa=0,this.i=[],this.j=new Mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jn("baseRetryDelayMs",5e3,u),this.cb=Jn("retryDelaySeedMs",1e4,u),this.Wa=Jn("forwardChannelMaxRetries",2,u),this.wa=Jn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ji(u&&u.concurrentRequestLimit),this.Da=new Xc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=da.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){rt(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Bl(this,null,this.W),Zn(this)};function At(u){if($s(u),u.G==3){var m=u.U++,_=sn(u.I);if(Be(_,"SID",u.K),Be(_,"RID",m),Be(_,"TYPE","terminate"),Tr(u,_),m=new Pn(u,u.j,m),m.L=2,m.v=Qr(sn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=$l(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}zl(u)}function On(u){u.g&&(fa(u),u.g.cancel(),u.g=null)}function $s(u){On(u),u.u&&(d.clearTimeout(u.u),u.u=null),Ws(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function Zn(u){if(!rn(u.h)&&!u.s){u.s=!0;var m=u.Ga;ze||ie(),ne||(ze(),ne=!0),me.add(m,u),u.B=0}}function Zc(u,m){return kl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Rn(R(u.Ga,u,m),jl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Pn(this,this.j,u);let q=this.o;if(this.S&&(q?(q=I(q),k(q,this.S)):q=this.S),this.m!==null||this.O||(M.H=q,q=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Zr(this,M,m),_=sn(this.I),Be(_,"RID",u),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),Tr(this,_),q&&(this.O?m="headers="+encodeURIComponent(String(wr(q)))+"&"+m:this.m&&Jr(_,this.m,q)),aa(this.h,M),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",m),Be(_,"SID","null"),M.T=!0,Ms(M,_,null)):Ms(M,_,m),this.G=2}}else this.G==3&&(u?qs(this,u):this.i.length==0||rn(this.h)||qs(this))};function qs(u,m){var _;m?_=m.l:_=u.U++;const w=sn(u.I);Be(w,"SID",u.K),Be(w,"RID",_),Be(w,"AID",u.T),Tr(u,w),u.m&&u.o&&Jr(w,u.m,u.o),_=new Pn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Zr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),aa(u.h,_),Ms(_,w,m)}function Tr(u,m){u.H&&pe(u.H,function(_,w){Be(m,w,_)}),u.l&&Wr({},function(_,w){Be(m,w,_)})}function Zr(u,m,_){_=Math.min(u.i.length,_);var w=u.l?R(u.l.Na,u.l,u):null;e:{var M=u.i;let q=-1;for(;;){const te=["count="+_];q==-1?0<_?(q=M[0].g,te.push("ofs="+q)):q=0:te.push("ofs="+q);let je=!0;for(let ft=0;ft<_;ft++){let Oe=M[ft].g;const Et=M[ft].map;if(Oe-=q,0>Oe)q=Math.max(0,M[ft].g-100),je=!1;else try{bl(Et,te,"req"+Oe+"_")}catch{w&&w(Et)}}if(je){w=te.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function Hi(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ze||ie(),ne||(ze(),ne=!0),me.add(m,u),u.v=0}}function Hs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Rn(R(u.Fa,u),jl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Ul(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Rn(R(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),On(this),Ul(this))};function fa(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Ul(u){u.g=new Pn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=sn(u.qa);Be(m,"RID","rpc"),Be(m,"SID",u.K),Be(m,"AID",u.T),Be(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(m,"TO",u.ja),Be(m,"TYPE","xmlhttp"),Tr(u,m),u.m&&u.o&&Jr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Qr(sn(m)),_.m=null,_.P=!0,sa(_,u)}n.Za=function(){this.C!=null&&(this.C=null,On(this),Hs(this),rt(19))};function Ws(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function Ks(u,m){var _=null;if(u.g==m){Ws(u),fa(u),u.g=null;var w=2}else if(Bt(u.h,m))_=m.D,Nl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var M=u.B;w=Li(),dt(w,new xs(w,_)),Zn(u)}else Hi(u);else if(M=m.s,M==3||M==0&&0<m.X||!(w==1&&Zc(u,m)||w==2&&Hs(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),M){case 1:Ir(u,5);break;case 4:Ir(u,10);break;case 3:Ir(u,6);break;default:Ir(u,2)}}}function jl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Ir(u,m){if(u.j.info("Error code "+m),m==2){var _=R(u.fb,u),w=u.Xa;const M=!w;w=new vr(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Bi(w,"https"),Qr(w),M?Yc(w.toString(),_):Ml(w.toString(),_)}else rt(2);u.G=0,u.l&&u.l.sa(m),zl(u),$s(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function zl(u){if(u.G=0,u.ka=[],u.l){const m=Dl(u.h);(m.length!=0||u.i.length!=0)&&(U(u.ka,m),U(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Bl(u,m,_){var w=_ instanceof vr?sn(_):new vr(_);if(w.g!="")m&&(w.g=m+"."+w.g),Kr(w,w.s);else{var M=d.location;w=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;var q=new vr(null);w&&Bi(q,w),m&&(q.g=m),M&&Kr(q,M),_&&(q.l=_),w=q}return _=u.D,m=u.ya,_&&m&&Be(w,_,m),Be(w,"VER",u.la),Tr(u,w),w}function $l(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Qe(new Er({eb:_})):new Qe(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function pa(){}n=pa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Gs(){}Gs.prototype.g=function(u,m){return new $t(u,m)};function $t(u,m){ht.call(this),this.g=new da(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!Y(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Y(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new er(this)}F($t,ht),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){At(this.g)},$t.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Xo(u),u=_);m.i.push(new Pl(m.Ya++,u)),m.G==3&&Zn(m)},$t.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,$t.aa.N.call(this)};function ql(u){Gn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}F(ql,Gn);function Hl(){Ds.call(this),this.status=1}F(Hl,Ds);function er(u){this.g=u}F(er,pa),er.prototype.ua=function(){dt(this.g,"a")},er.prototype.ta=function(u){dt(this.g,new ql(u))},er.prototype.sa=function(u){dt(this.g,new Hl)},er.prototype.ra=function(){dt(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,Zv=function(){return new Gs},Jv=function(){return Li()},Xv=Qn,Jd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vs.NO_ERROR=0,Vs.TIMEOUT=8,Vs.HTTP_ERROR=6,Zu=Vs,Sl.COMPLETE="complete",Yv=Sl,Ns.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",ht.prototype.listen=ht.prototype.K,$a=Ns,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Qv=Qe}).apply(typeof Bu<"u"?Bu:typeof self<"u"?self:typeof window<"u"?window:{});const Iy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new Pc("@firebase/firestore");function yo(){return ps.logLevel}function se(n,...e){if(ps.logLevel<=Pe.DEBUG){const t=e.map(bf);ps.debug(`Firestore (${Uo}): ${n}`,...t)}}function zr(n,...e){if(ps.logLevel<=Pe.ERROR){const t=e.map(bf);ps.error(`Firestore (${Uo}): ${n}`,...t)}}function Po(n,...e){if(ps.logLevel<=Pe.WARN){const t=e.map(bf);ps.warn(`Firestore (${Uo}): ${n}`,...t)}}function bf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+n;throw zr(e),new Error(e)}function Ue(n,e){n||Ee()}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class xC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class OC{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new us;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new us,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new us)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string"),new e0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Ft(e)}}class VC{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class LC{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new VC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class MC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ue(this.o===void 0);const i=l=>{l.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new MC(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=FC(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function De(n,e){return n<e?-1:n>e?1:0}function ko(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new gt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ue(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new gt(0,0))}static max(){return new we(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ee(),i===void 0?i=e.length-t:i>e.length-t&&Ee(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return il.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof il?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ge extends il{construct(e,t,i){return new Ge(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ue(G.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const UC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends il{construct(e,t,i){return new Nt(e,t,i)}static isValidIdentifier(e){return UC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ue(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ue(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ue(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(h=!h,o++):d!=="."||h?(i+=d,o++):(l(),o++)}if(l(),h)throw new ue(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Ge.fromString(e))}static fromName(e){return new fe(Ge.fromString(e).popFirst(5))}static empty(){return new fe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Ge(e.slice()))}}function jC(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=we.fromTimestamp(i===1e9?new gt(t+1,0):new gt(t,i));return new Si(o,fe.empty(),e)}function zC(n){return new Si(n.readTime,n.key,-1)}class Si{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Si(we.min(),fe.empty(),-1)}static max(){return new Si(we.max(),fe.empty(),-1)}}function BC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==$C)throw n;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,i)=>{t(e)})}static reject(e){return new W((t,i)=>{i(e)})}static waitFor(e){return new W((t,i)=>{let o=0,l=0,h=!1;e.forEach(d=>{++o,d.next(()=>{++l,h&&l===o&&t()},p=>i(p))}),h=!0,l===o&&t()})}static or(e){let t=W.resolve(!1);for(const i of e)t=t.next(o=>o?W.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new W((i,o)=>{const l=e.length,h=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(E=>{h[y]=E,++d,d===l&&i(h)},E=>o(E))}})}static doWhile(e,t){return new W((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function HC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vc.oe=-1;function Lc(n){return n==null}function mc(n){return n===0&&1/n==-1/0}function WC(n){return typeof n=="number"&&Number.isInteger(n)&&!mc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Sy(e)),e=GC(n.get(t),e);return Sy(e)}function GC(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Sy(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function vs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function n0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $u(this.root,e,this.comparator,!1)}getReverseIterator(){return new $u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $u(this.root,e,this.comparator,!0)}}class $u{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??kt.RED,this.left=o??kt.EMPTY,this.right=l??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new kt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,t,i,o,l){return this}insert(e,t,i){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ay(this.data.getIterator())}getIteratorFrom(e){return new Ay(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class Ay{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new zn([])}unionWith(e){let t=new yt(Nt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ko(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new r0("Invalid base64 string: "+l):l}}(e);return new Dt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const QC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(n){if(Ue(!!n),typeof n=="string"){let e=0;const t=QC.exec(n);if(Ue(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ai(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Mc(n){const e=n.mapValue.fields.__previous_value__;return Ff(e)?Mc(e):e}function sl(n){const e=Ri(n.mapValue.fields.__local_write_time__.timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,t,i,o,l,h,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class ol{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ol("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ol&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ci(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ff(n)?4:JC(n)?9007199254740991:XC(n)?10:11:Ee()}function dr(n,e){if(n===e)return!0;const t=Ci(n);if(t!==Ci(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return sl(n).isEqual(sl(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ri(o.timestampValue),d=Ri(l.timestampValue);return h.seconds===d.seconds&&h.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Ai(o.bytesValue).isEqual(Ai(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),d=st(l.doubleValue);return h===d?mc(h)===mc(d):isNaN(h)&&isNaN(d)}return!1}(n,e);case 9:return ko(n.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},d=l.mapValue.fields||{};if(Ry(h)!==Ry(d))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(d[p]===void 0||!dr(h[p],d[p])))return!1;return!0}(n,e);default:return Ee()}}function al(n,e){return(n.values||[]).find(t=>dr(t,e))!==void 0}function No(n,e){if(n===e)return 0;const t=Ci(n),i=Ci(e);if(t!==i)return De(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return function(l,h){const d=st(l.integerValue||l.doubleValue),p=st(h.integerValue||h.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return Cy(n.timestampValue,e.timestampValue);case 4:return Cy(sl(n),sl(e));case 5:return De(n.stringValue,e.stringValue);case 6:return function(l,h){const d=Ai(l),p=Ai(h);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const d=l.split("/"),p=h.split("/");for(let y=0;y<d.length&&y<p.length;y++){const E=De(d[y],p[y]);if(E!==0)return E}return De(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const d=De(st(l.latitude),st(h.latitude));return d!==0?d:De(st(l.longitude),st(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Py(n.arrayValue,e.arrayValue);case 10:return function(l,h){var d,p,y,E;const T=l.fields||{},R=h.fields||{},x=(d=T.value)===null||d===void 0?void 0:d.arrayValue,F=(p=R.value)===null||p===void 0?void 0:p.arrayValue,$=De(((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0,((E=F==null?void 0:F.values)===null||E===void 0?void 0:E.length)||0);return $!==0?$:Py(x,F)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===qu.mapValue&&h===qu.mapValue)return 0;if(l===qu.mapValue)return 1;if(h===qu.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=h.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const R=De(p[T],E[T]);if(R!==0)return R;const x=No(d[p[T]],y[E[T]]);if(x!==0)return x}return De(p.length,E.length)}(n.mapValue,e.mapValue);default:throw Ee()}}function Cy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=Ri(n),i=Ri(e),o=De(t.seconds,i.seconds);return o!==0?o:De(t.nanos,i.nanos)}function Py(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=No(t[o],i[o]);if(l)return l}return De(t.length,i.length)}function Do(n){return Zd(n)}function Zd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ri(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ai(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return fe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Zd(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${Zd(t.fields[h])}`;return o+"}"}(n.mapValue):Ee()}function ec(n){switch(Ci(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mc(n);return e?16+ec(e):16;case 5:return 2*n.stringValue.length;case 6:return Ai(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+ec(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return vs(i.fields,(l,h)=>{o+=l.length+ec(h)}),o}(n.mapValue);default:throw Ee()}}function ky(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ef(n){return!!n&&"integerValue"in n}function Uf(n){return!!n&&"arrayValue"in n}function Ny(n){return!!n&&"nullValue"in n}function Dy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function tc(n){return!!n&&"mapValue"in n}function XC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Qa(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return vs(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Qa(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qa(n.arrayValue.values[t]);return e}return Object.assign({},n)}function JC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!tc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qa(t)}setAll(e){let t=Nt.emptyPath(),i={},o=[];e.forEach((h,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}h?i[d.lastSegment()]=Qa(h):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());tc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];tc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){vs(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new Tn(Qa(this.value))}}function i0(n){const e=[];return vs(n.fields,(t,i)=>{const o=new Nt([t]);if(tc(i)){const l=i0(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,i,o,l,h,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=d}static newInvalidDocument(e){return new Ut(e,0,we.min(),we.min(),we.min(),Tn.empty(),0)}static newFoundDocument(e,t,i,o){return new Ut(e,1,t,we.min(),i,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,we.min(),we.min(),Tn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,we.min(),we.min(),Tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){this.position=e,this.inclusive=t}}function xy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=fe.comparator(fe.fromName(h.referenceValue),t.key):i=No(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Oy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t="asc"){this.field=e,this.dir=t}}function ZC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{}class ct extends s0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new tP(e,t,i):t==="array-contains"?new iP(e,i):t==="in"?new sP(e,i):t==="not-in"?new oP(e,i):t==="array-contains-any"?new aP(e,i):new ct(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new nP(e,i):new rP(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(No(t,this.value)):t!==null&&Ci(this.value)===Ci(t)&&this.matchesComparison(No(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends s0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new qn(e,t)}matches(e){return o0(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function o0(n){return n.op==="and"}function a0(n){return eP(n)&&o0(n)}function eP(n){for(const e of n.filters)if(e instanceof qn)return!1;return!0}function tf(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+Do(n.value);if(a0(n))return n.filters.map(e=>tf(e)).join(",");{const e=n.filters.map(t=>tf(t)).join(",");return`${n.op}(${e})`}}function l0(n,e){return n instanceof ct?function(i,o){return o instanceof ct&&i.op===o.op&&i.field.isEqual(o.field)&&dr(i.value,o.value)}(n,e):n instanceof qn?function(i,o){return o instanceof qn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,d)=>l&&l0(h,o.filters[d]),!0):!1}(n,e):void Ee()}function u0(n){return n instanceof ct?function(t){return`${t.field.canonicalString()} ${t.op} ${Do(t.value)}`}(n):n instanceof qn?function(t){return t.op.toString()+" {"+t.getFilters().map(u0).join(" ,")+"}"}(n):"Filter"}class tP extends ct{constructor(e,t,i){super(e,t,i),this.key=fe.fromName(i.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class nP extends ct{constructor(e,t){super(e,"in",t),this.keys=c0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rP extends ct{constructor(e,t){super(e,"not-in",t),this.keys=c0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function c0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>fe.fromName(i.referenceValue))}class iP extends ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Uf(t)&&al(t.arrayValue,this.value)}}class sP extends ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&al(this.value.arrayValue,t)}}class oP extends ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!al(this.value.arrayValue,t)}}class aP extends ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Uf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>al(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t=null,i=[],o=[],l=null,h=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=d,this.ue=null}}function Vy(n,e=null,t=[],i=[],o=null,l=null,h=null){return new lP(n,e,t,i,o,l,h)}function jf(n){const e=Ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>tf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Lc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Do(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Do(i)).join(",")),e.ue=t}return e.ue}function zf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ZC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!l0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Oy(n.startAt,e.startAt)&&Oy(n.endAt,e.endAt)}function nf(n){return fe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t=null,i=[],o=[],l=null,h="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function uP(n,e,t,i,o,l,h,d){return new Bo(n,e,t,i,o,l,h,d)}function Bf(n){return new Bo(n)}function Ly(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function h0(n){return n.collectionGroup!==null}function Ya(n){const e=Ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let d=new yt(Nt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new ll(l,i))}),t.has(Nt.keyField().canonicalString())||e.ce.push(new ll(Nt.keyField(),i))}return e.ce}function lr(n){const e=Ie(n);return e.le||(e.le=cP(e,Ya(n))),e.le}function cP(n,e){if(n.limitType==="F")return Vy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new ll(o.field,l)});const t=n.endAt?new gc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new gc(n.startAt.position,n.startAt.inclusive):null;return Vy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function rf(n,e){const t=n.filters.concat([e]);return new Bo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function sf(n,e,t){return new Bo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bc(n,e){return zf(lr(n),lr(e))&&n.limitType===e.limitType}function d0(n){return`${jf(lr(n))}|lt:${n.limitType}`}function _o(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>u0(o)).join(", ")}]`),Lc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Do(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Do(o)).join(",")),`Target(${i})`}(lr(n))}; limitType=${n.limitType})`}function Fc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):fe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Ya(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,d,p){const y=xy(h,d,p);return h.inclusive?y<=0:y<0}(i.startAt,Ya(i),o)||i.endAt&&!function(h,d,p){const y=xy(h,d,p);return h.inclusive?y>=0:y>0}(i.endAt,Ya(i),o))}(n,e)}function hP(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function f0(n){return(e,t)=>{let i=!1;for(const o of Ya(n)){const l=dP(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function dP(n,e,t){const i=n.field.isKeyField()?fe.comparator(e.key,t.key):function(l,h,d){const p=h.data.field(l),y=d.data.field(l);return p!==null&&y!==null?No(p,y):Ee()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){vs(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return n0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=new tt(fe.comparator);function Br(){return fP}const p0=new tt(fe.comparator);function qa(...n){let e=p0;for(const t of n)e=e.insert(t.key,t);return e}function m0(n){let e=p0;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function as(){return Xa()}function g0(){return Xa()}function Xa(){return new Es(n=>n.toString(),(n,e)=>n.isEqual(e))}const pP=new tt(fe.comparator),mP=new yt(fe.comparator);function ke(...n){let e=mP;for(const t of n)e=e.add(t);return e}const gP=new yt(De);function yP(){return gP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(e)?"-0":e}}function y0(n){return{integerValue:""+n}}function _P(n,e){return WC(e)?y0(e):$f(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this._=void 0}}function vP(n,e,t){return n instanceof yc?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Ff(l)&&(l=Mc(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):n instanceof ul?v0(n,e):n instanceof cl?E0(n,e):function(o,l){const h=_0(o,l),d=My(h)+My(o.Pe);return ef(h)&&ef(o.Pe)?y0(d):$f(o.serializer,d)}(n,e)}function EP(n,e,t){return n instanceof ul?v0(n,e):n instanceof cl?E0(n,e):t}function _0(n,e){return n instanceof _c?function(i){return ef(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class yc extends Uc{}class ul extends Uc{constructor(e){super(),this.elements=e}}function v0(n,e){const t=w0(e);for(const i of n.elements)t.some(o=>dr(o,i))||t.push(i);return{arrayValue:{values:t}}}class cl extends Uc{constructor(e){super(),this.elements=e}}function E0(n,e){let t=w0(e);for(const i of n.elements)t=t.filter(o=>!dr(o,i));return{arrayValue:{values:t}}}class _c extends Uc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function My(n){return st(n.integerValue||n.doubleValue)}function w0(n){return Uf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function wP(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof ul&&o instanceof ul||i instanceof cl&&o instanceof cl?ko(i.elements,o.elements,dr):i instanceof _c&&o instanceof _c?dr(i.Pe,o.Pe):i instanceof yc&&o instanceof yc}(n.transform,e.transform)}class TP{constructor(e,t){this.version=e,this.transformResults=t}}class Fr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fr}static exists(e){return new Fr(void 0,e)}static updateTime(e){return new Fr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class jc{}function T0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new S0(n.key,Fr.none()):new vl(n.key,n.data,Fr.none());{const t=n.data,i=Tn.empty();let o=new yt(Nt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new ws(n.key,i,new zn(o.toArray()),Fr.none())}}function IP(n,e,t){n instanceof vl?function(o,l,h){const d=o.value.clone(),p=Fy(o.fieldTransforms,l,h.transformResults);d.setAll(p),l.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(n,e,t):n instanceof ws?function(o,l,h){if(!nc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const d=Fy(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(I0(o)),p.setAll(d),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ja(n,e,t,i){return n instanceof vl?function(l,h,d,p){if(!nc(l.precondition,h))return d;const y=l.value.clone(),E=Uy(l.fieldTransforms,p,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof ws?function(l,h,d,p){if(!nc(l.precondition,h))return d;const y=Uy(l.fieldTransforms,p,h),E=h.data;return E.setAll(I0(l)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,h,d){return nc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):d}(n,e,t)}function SP(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=_0(i.transform,o||null);l!=null&&(t===null&&(t=Tn.empty()),t.set(i.field,l))}return t||null}function by(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&ko(i,o,(l,h)=>wP(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class vl extends jc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ws extends jc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function I0(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Fy(n,e,t){const i=new Map;Ue(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,d=e.data.field(l.field);i.set(l.field,EP(h,d,t[o]))}return i}function Uy(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,vP(l,h,e))}return i}class S0 extends jc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RP extends jc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&IP(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ja(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ja(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=g0();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let d=this.applyToLocalView(h,l.mutatedFields);d=t.has(o.key)?null:d;const p=T0(h,d);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(we.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&ko(this.mutations,e.mutations,(t,i)=>by(t,i))&&ko(this.baseMutations,e.baseMutations,(t,i)=>by(t,i))}}class qf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length);let o=function(){return pP}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new qf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,Ve;function kP(n){switch(n){default:return Ee();case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0}}function R0(n){if(n===void 0)return zr("GRPC error has no .code"),G.UNKNOWN;switch(n){case ut.OK:return G.OK;case ut.CANCELLED:return G.CANCELLED;case ut.UNKNOWN:return G.UNKNOWN;case ut.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ut.INTERNAL:return G.INTERNAL;case ut.UNAVAILABLE:return G.UNAVAILABLE;case ut.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ut.NOT_FOUND:return G.NOT_FOUND;case ut.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ut.ABORTED:return G.ABORTED;case ut.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ut.DATA_LOSS:return G.DATA_LOSS;default:return Ee()}}(Ve=ut||(ut={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=new ls([4294967295,4294967295],0);function jy(n){const e=NP().encode(n),t=new Gv;return t.update(e),new Uint8Array(t.digest())}function zy(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ls([t,i],0),new ls([o,l],0)]}class Hf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ha(`Invalid padding: ${t}`);if(i<0)throw new Ha(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ha(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ha(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ls.fromNumber(this.Te)}Ee(e,t,i){let o=e.add(t.multiply(ls.fromNumber(i)));return o.compare(DP)===1&&(o=new ls([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=jy(e),[i,o]=zy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);if(!this.de(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Hf(l,o,t);return i.forEach(d=>h.insert(d)),h}insert(e){if(this.Te===0)return;const t=jy(e),[i,o]=zy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ha extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,El.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new zc(we.min(),o,new tt(De),Br(),ke())}}class El{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new El(i,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class A0{constructor(e,t){this.targetId=e,this.me=t}}class C0{constructor(e,t,i=Dt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class By{constructor(){this.fe=0,this.ge=$y(),this.pe=Dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ke(),t=ke(),i=ke();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ee()}}),new El(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=$y()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xP{constructor(e){this.Le=e,this.Be=new Map,this.ke=Br(),this.qe=Hu(),this.Qe=Hu(),this.Ke=new tt(De)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Ee()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(nf(l))if(i===0){const h=new fe(l.path);this.We(t,h,Ut.newNoDocument(h,we.min()))}else Ue(i===1);else{const h=this.Ze(t);if(h!==i){const d=this.Xe(e),p=d?this.et(d,e,h):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,d;try{h=Ai(i).toUint8Array()}catch(p){if(p instanceof r0)return Po("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Hf(h,o,l)}catch(p){return Po(p instanceof Ha?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.Le.nt(),d=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,h)=>{const d=this.Ye(h);if(d){if(l.current&&nf(d.target)){const p=new fe(d.target.path);this.st(p).has(h)||this.ot(h,p)||this.We(h,p,Ut.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let i=ke();this.Qe.forEach((l,h)=>{let d=!0;h.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new zc(e,t,this.Ke,this.ke,i);return this.ke=Br(),this.qe=Hu(),this.Qe=Hu(),this.Ke=new tt(De),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new By,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new yt(De),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new yt(De),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||se("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new By),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Hu(){return new tt(fe.comparator)}function $y(){return new tt(fe.comparator)}const OP={asc:"ASCENDING",desc:"DESCENDING"},VP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LP={and:"AND",or:"OR"};class MP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function of(n,e){return n.useProto3Json||Lc(e)?e:{value:e}}function vc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function P0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bP(n,e){return vc(n,e.toTimestamp())}function ur(n){return Ue(!!n),we.fromTimestamp(function(t){const i=Ri(t);return new gt(i.seconds,i.nanos)}(n))}function Wf(n,e){return af(n,e).canonicalString()}function af(n,e){const t=function(o){return new Ge(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function k0(n){const e=Ge.fromString(n);return Ue(V0(e)),e}function lf(n,e){return Wf(n.databaseId,e.path)}function Md(n,e){const t=k0(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new fe(D0(t))}function N0(n,e){return Wf(n.databaseId,e)}function FP(n){const e=k0(n);return e.length===4?Ge.emptyPath():D0(e)}function uf(n){return new Ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function D0(n){return Ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qy(n,e,t){return{name:lf(n,e),fields:t.value.mapValue.fields}}function UP(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,E){return y.useProto3Json?(Ue(E===void 0||typeof E=="string"),Dt.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Dt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,d=h&&function(y){const E=y.code===void 0?G.UNKNOWN:R0(y.code);return new ue(E,y.message||"")}(h);t=new C0(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Md(n,i.document.name),l=ur(i.document.updateTime),h=i.document.createTime?ur(i.document.createTime):we.min(),d=new Tn({mapValue:{fields:i.document.fields}}),p=Ut.newFoundDocument(o,l,h,d),y=i.targetIds||[],E=i.removedTargetIds||[];t=new rc(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Md(n,i.document),l=i.readTime?ur(i.readTime):we.min(),h=Ut.newNoDocument(o,l),d=i.removedTargetIds||[];t=new rc([],d,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Md(n,i.document),l=i.removedTargetIds||[];t=new rc([],l,o,null)}else{if(!("filter"in e))return Ee();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new PP(o,l),d=i.targetId;t=new A0(d,h)}}return t}function jP(n,e){let t;if(e instanceof vl)t={update:qy(n,e.key,e.value)};else if(e instanceof S0)t={delete:lf(n,e.key)};else if(e instanceof ws)t={update:qy(n,e.key,e.data),updateMask:QP(e.fieldMask)};else{if(!(e instanceof RP))return Ee();t={verify:lf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const d=h.transform;if(d instanceof yc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ul)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof cl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof _c)return{fieldPath:h.field.canonicalString(),increment:d.Pe};throw Ee()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:bP(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ee()}(n,e.precondition)),t}function zP(n,e){return n&&n.length>0?(Ue(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?ur(o.updateTime):ur(l);return h.isEqual(we.min())&&(h=ur(l)),new TP(h,o.transformResults||[])}(t,e))):[]}function BP(n,e){return{documents:[N0(n,e.path)]}}function $P(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=N0(n,o);const l=function(y){if(y.length!==0)return O0(qn.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(E=>function(R){return{field:vo(R.field),direction:WP(R.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const d=of(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function qP(n){let e=FP(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const R=x0(T);return R instanceof qn&&a0(R)?R.getFilters():[R]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(R=>function(F){return new ll(Eo(F.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(R))}(t.orderBy));let d=null;t.limit&&(d=function(T){let R;return R=typeof T=="object"?T.value:T,Lc(R)?null:R}(t.limit));let p=null;t.startAt&&(p=function(T){const R=!!T.before,x=T.values||[];return new gc(x,R)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const R=!T.before,x=T.values||[];return new gc(x,R)}(t.endAt)),uP(e,o,h,l,d,"F",p,y)}function HP(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function x0(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Eo(t.unaryFilter.field);return ct.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Eo(t.unaryFilter.field);return ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Eo(t.unaryFilter.field);return ct.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Eo(t.unaryFilter.field);return ct.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(n):n.fieldFilter!==void 0?function(t){return ct.create(Eo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return qn.create(t.compositeFilter.filters.map(i=>x0(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee()}}(t.compositeFilter.op))}(n):Ee()}function WP(n){return OP[n]}function KP(n){return VP[n]}function GP(n){return LP[n]}function vo(n){return{fieldPath:n.canonicalString()}}function Eo(n){return Nt.fromServerFormat(n.fieldPath)}function O0(n){return n instanceof ct?function(t){if(t.op==="=="){if(Dy(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NAN"}};if(Ny(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Dy(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NAN"}};if(Ny(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(t.field),op:KP(t.op),value:t.value}}}(n):n instanceof qn?function(t){const i=t.getFilters().map(o=>O0(o));return i.length===1?i[0]:{compositeFilter:{op:GP(t.op),filters:i}}}(n):Ee()}function QP(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function V0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t,i,o,l=we.min(),h=we.min(),d=Dt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.ht=e}}function XP(n){const e=qP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?sf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(){this.ln=new ZP}addToCollectionParentIndex(e,t){return this.ln.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Si.min())}updateCollectionGroup(e,t,i){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class ZP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new yt(Ge.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new yt(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(41943040,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new xo(0)}static Qn(){return new xo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy([n,e],[t,i]){const o=De(n,t);return o===0?De(e,i):o}class ek{constructor(e){this.Gn=e,this.buffer=new yt(Wy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Wy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){se("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zo(t)?se("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await jo(t)}await this.Yn(3e5)})}}class nk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Vc.oe);const i=new ek(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Hy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,h,d,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),yo()<=Pe.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(d-h)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function rk(n,e){return new nk(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.changes=new Es(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?W.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Ja(i.mutation,o,zn.empty(),gt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,ke()).next(()=>i))}getLocalViewOfDocuments(e,t,i=ke()){const o=as();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=qa();return l.forEach((d,p)=>{h=h.insert(d,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=as();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,ke()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,d)=>{t.set(h,d)})})}computeViews(e,t,i,o){let l=Br();const h=Xa(),d=function(){return Xa()}();return t.forEach((p,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof ws)?l=l.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),Ja(E.mutation,y,E.mutation.getFieldMask(),gt.now())):h.set(y.key,zn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,E)=>h.set(y,E)),t.forEach((y,E)=>{var T;return d.set(y,new sk(E,(T=h.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=Xa();let o=new tt((h,d)=>h-d),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const d of h)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=i.get(p)||zn.empty();E=d.applyToLocalView(y,E),i.set(p,E);const T=(o.get(d.batchId)||ke()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const h=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,E=p.value,T=g0();E.forEach(R=>{if(!l.has(R)){const x=T0(t.get(R),i.get(R));x!==null&&T.set(R,x),l=l.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return W.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):h0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):W.resolve(as());let d=-1,p=l;return h.next(y=>W.forEach(y,(E,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next(R=>{p=p.insert(E,R)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,ke())).next(E=>({batchId:d,changes:m0(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next(i=>{let o=qa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=qa();return this.indexManager.getCollectionParents(e,l).next(d=>W.forEach(d,p=>{const y=function(T,R){return new Bo(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(E=>{E.forEach((T,R)=>{h=h.insert(T,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((p,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,Ut.newInvalidDocument(E)))});let d=qa();return h.forEach((p,y)=>{const E=l.get(p);E!==void 0&&Ja(E.mutation,y,zn.empty(),gt.now()),Fc(t,y)&&(d=d.insert(p,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return W.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ur(o.createTime)}}(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:XP(o.bundledQuery),readTime:ur(o.readTime)}}(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.overlays=new tt(fe.comparator),this.Er=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const i=as();return W.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),W.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Er.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(i)),W.resolve()}getOverlaysForCollection(e,t,i){const o=as(),l=t.length+1,h=new fe(t.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=as(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const d=as(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>d.set(y,E)),!(d.size()>=o)););return W.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(i.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new CP(t,i));let l=this.Er.get(t);l===void 0&&(l=ke(),this.Er.set(t,l)),this.Er.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.dr=new yt(St.Ar),this.Rr=new yt(St.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new St(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new St(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new fe(new Ge([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.Rr.forEachInRange([i,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new fe(new Ge([])),i=new St(t,e),o=new St(t,e+1);let l=ke();return this.Rr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new St(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return fe.comparator(e.key,t.key)||De(e.br,t.br)}static Vr(e,t){return De(e.br,t.br)||fe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new yt(St.Ar)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new AP(l,t,i,o);this.mutationQueue.push(h);for(const d of o)this.vr=this.vr.add(new St(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],h=>{const d=this.Cr(h.br);l.push(d)}),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new yt(De);return t.forEach(o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],d=>{i=i.add(d.br)})}),W.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;fe.isDocumentKey(l)||(l=l.child(""));const h=new St(new fe(l),0);let d=new yt(De);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.br)),!0)},h),W.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ue(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return W.forEach(t.mutations,o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new St(t,0),o=this.vr.firstAfterOrEqual(i);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e){this.Nr=e,this.docs=function(){return new tt(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return W.resolve(i?i.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let i=Br();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))}),W.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Br();const h=t.path,d=new fe(h.child("")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||BC(zC(E),i)<=0||(o.has(E.key)||Fc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Ee()}Lr(e,t){return W.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new dk(this)}getSize(e){return W.resolve(this.size)}}class dk extends ik{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),W.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.persistence=e,this.Br=new Es(t=>jf(t),zf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.kr=0,this.qr=new Kf,this.targetCount=0,this.Qr=xo.qn()}forEachTarget(e,t){return this.Br.forEach((i,o)=>t(o)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),W.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new xo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Un(t),W.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Br.forEach((h,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Br.delete(h),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),W.waitFor(l).next(()=>o)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return W.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),W.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return W.resolve(i)}containsKey(e,t){return W.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Vc(0),this.Ur=!1,this.Ur=!0,this.Wr=new uk,this.referenceDelegate=e(this),this.Gr=new fk(this),this.indexManager=new JP,this.remoteDocumentCache=function(o){return new hk(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new YP(t),this.jr=new ak(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new ck(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){se("MemoryPersistence","Starting transaction:",e);const o=new pk(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return W.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class pk extends qC{constructor(e){super(),this.currentSequenceNumber=e}}class Gf{constructor(e){this.persistence=e,this.Zr=new Kf,this.Xr=null}static ei(e){return new Gf(e)}get ti(){if(this.Xr)return this.Xr;throw Ee()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),W.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),W.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.ti,i=>{const o=fe.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,we.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return W.or([()=>W.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Ec{constructor(e,t){this.persistence=e,this.ri=new Es(i=>KC(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=rk(this,t)}static ei(e,t){return new Ec(e,t)}Hr(){}Jr(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return W.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?W.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(d=>{d||(i++,l.removeEntry(h,we.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),W.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),W.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ec(e.data.value)),t}ir(e,t,i){return W.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return W.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Qf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return LI()?8:HC(jt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new mk;return this.ts(e,t,h).next(d=>{if(l.result=d,this.Hi)return this.ns(e,t,h,d.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(yo()<=Pe.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",_o(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),W.resolve()):(yo()<=Pe.DEBUG&&se("QueryEngine","Query:",_o(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(yo()<=Pe.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",_o(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(t))):W.resolve())}Xi(e,t){if(Ly(t))return W.resolve(null);let i=lr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=sf(t,null,"F"),i=lr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=ke(...l);return this.Zi.getDocuments(e,h).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,d);return this.ss(t,y,h,p.readTime)?this.Xi(e,sf(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return Ly(t)||o.isEqual(we.min())?W.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const h=this.rs(t,l);return this.ss(t,h,i,o)?W.resolve(null):(yo()<=Pe.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),_o(t)),this.os(e,h,t,jC(o,-1)).next(d=>d))})}rs(e,t){let i=new yt(f0(e));return t.forEach((o,l)=>{Fc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return yo()<=Pe.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",_o(t)),this.Zi.getDocumentsMatchingQuery(e,t,Si.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new tt(De),this.cs=new Es(l=>jf(l),zf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ok(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function _k(n,e,t,i){return new yk(n,e,t,i)}async function M0(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],d=[];let p=ke();for(const y of o){h.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of l){d.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:h,addedBatchIds:d}))})})}function vk(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,E){const T=y.batch,R=T.keys();let x=W.resolve();return R.forEach(F=>{x=x.next(()=>E.getEntry(p,F)).next($=>{const U=y.docVersions.get(F);Ue(U!==null),$.version.compareTo(U)<0&&(T.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),E.addEntry($)))})}),x.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=ke();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function b0(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function Ek(n,e){const t=Ie(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((E,T)=>{const R=o.get(T);if(!R)return;d.push(t.Gr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,E.addedDocuments,T)));let x=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(Dt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(E.resumeToken,i)),o=o.insert(T,x),function($,U,H){return $.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(R,x,E)&&d.push(t.Gr.updateTargetData(l,x))});let p=Br(),y=ke();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),d.push(wk(l,h,e.documentUpdates).next(E=>{p=E.Is,y=E.Es})),!i.isEqual(we.min())){const E=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(E)}return W.waitFor(d).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function wk(n,e,t){let i=ke(),o=ke();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=Br();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(d,p.readTime),h=h.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(d,p)):se("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Is:h,Es:o}})}function Tk(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Ik(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,W.resolve(o)):t.Gr.allocateTargetId(i).next(h=>(o=new vi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function cf(n,e,t){const i=Ie(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!zo(h))throw h;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function Ky(n,e,t){const i=Ie(n);let o=we.min(),l=ke();return i.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,E){const T=Ie(p),R=T.cs.get(E);return R!==void 0?W.resolve(T.us.get(R)):T.Gr.getTargetData(y,E)}(i,h,lr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(h,d.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:ke())).next(d=>(Sk(i,hP(e),d),{documents:d,ds:l})))}function Sk(n,e,t){let i=n.ls.get(e)||we.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class Gy{constructor(){this.activeTargetIds=yP()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rk{constructor(){this._o=new Gy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Gy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wu=null;function bd(){return Wu===null?Wu=function(){return 268435456+Math.round(2147483648*Math.random())}():Wu++,"0x"+Wu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class kk extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,h){const d=bd(),p=this.No(t,i.toUriEncodedString());se("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(y,l,h),this.Bo(t,p,y,o).then(E=>(se("RestConnection",`Received RPC '${t}' ${d}: `,E),E),E=>{throw Po("RestConnection",`RPC '${t}' ${d} failed with error: `,E,"url: ",p,"request:",o),E})}ko(t,i,o,l,h,d){return this.Oo(t,i,o,l,h)}Lo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,i){const o=Ck[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,o){const l=bd();return new Promise((h,d)=>{const p=new Qv;p.setWithCredentials(!0),p.listenOnce(Yv.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Zu.NO_ERROR:const E=p.getResponseJson();se(bt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),h(E);break;case Zu.TIMEOUT:se(bt,`RPC '${e}' ${l} timed out`),d(new ue(G.DEADLINE_EXCEEDED,"Request time out"));break;case Zu.HTTP_ERROR:const T=p.getStatus();if(se(bt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let R=p.getResponseJson();Array.isArray(R)&&(R=R[0]);const x=R==null?void 0:R.error;if(x&&x.status&&x.message){const F=function(U){const H=U.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(H)>=0?H:G.UNKNOWN}(x.status);d(new ue(F,x.message))}else d(new ue(G.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ue(G.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{se(bt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);se(bt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=bd(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Zv(),d=Jv(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Lo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");se(bt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const T=h.createWebChannel(E,p);let R=!1,x=!1;const F=new Pk({Eo:U=>{x?se(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,U):(R||(se(bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),R=!0),se(bt,`RPC '${e}' stream ${o} sending:`,U),T.send(U))},Ao:()=>T.close()}),$=(U,H,Y)=>{U.listen(H,ee=>{try{Y(ee)}catch(oe){setTimeout(()=>{throw oe},0)}})};return $(T,$a.EventType.OPEN,()=>{x||(se(bt,`RPC '${e}' stream ${o} transport opened.`),F.So())}),$(T,$a.EventType.CLOSE,()=>{x||(x=!0,se(bt,`RPC '${e}' stream ${o} transport closed`),F.Do())}),$(T,$a.EventType.ERROR,U=>{x||(x=!0,Po(bt,`RPC '${e}' stream ${o} transport errored:`,U),F.Do(new ue(G.UNAVAILABLE,"The operation could not be completed")))}),$(T,$a.EventType.MESSAGE,U=>{var H;if(!x){const Y=U.data[0];Ue(!!Y);const ee=Y,oe=(ee==null?void 0:ee.error)||((H=ee[0])===null||H===void 0?void 0:H.error);if(oe){se(bt,`RPC '${e}' stream ${o} received error:`,oe);const Se=oe.status;let pe=function(A){const k=ut[A];if(k!==void 0)return R0(k)}(Se),N=oe.message;pe===void 0&&(pe=G.INTERNAL,N="Unknown error status: "+Se+" with message "+oe.message),x=!0,F.Do(new ue(pe,N)),T.close()}else se(bt,`RPC '${e}' stream ${o} received:`,Y),F.vo(Y)}}),$(d,Xv.STAT_EVENT,U=>{U.stat===Jd.PROXY?se(bt,`RPC '${e}' stream ${o} detected buffering proxy`):U.stat===Jd.NOPROXY&&se(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{F.bo()},0),F}}function Fd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n){return new MP(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&se("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,t,i,o,l,h,d,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new F0(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new ue(G.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.E_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nk extends U0{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=UP(this.serializer,e),i=function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?ur(h.readTime):we.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=uf(this.serializer),t.addTarget=function(l,h){let d;const p=h.target;if(d=nf(p)?{documents:BP(l,p)}:{query:$P(l,p).ct},d.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){d.resumeToken=P0(l,h.resumeToken);const y=of(l,h.expectedCount);y!==null&&(d.expectedCount=y)}else if(h.snapshotVersion.compareTo(we.min())>0){d.readTime=vc(l,h.snapshotVersion.toTimestamp());const y=of(l,h.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=HP(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=uf(this.serializer),t.removeTarget=e,this.c_(t)}}class Dk extends U0{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=zP(e.writeResults,e.commitTime),i=ur(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=uf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>jP(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ue(G.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,af(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ue(G.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.ko(e,af(t,i),o,h,d,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ue(G.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Ok{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(zr(t),this.C_=!1):se("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{i.enqueueAndForget(async()=>{Ts(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Ie(p);y.k_.add(4),await wl(y),y.K_.set("Unknown"),y.k_.delete(4),await $c(y)}(this))})}),this.K_=new Ok(i,o)}}async function $c(n){if(Ts(n))for(const e of n.q_)await e(!0)}async function wl(n){for(const e of n.q_)await e(!1)}function j0(n,e){const t=Ie(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Zf(t)?Jf(t):$o(t).s_()&&Xf(t,e))}function Yf(n,e){const t=Ie(n),i=$o(t);t.B_.delete(e),i.s_()&&z0(t,e),t.B_.size===0&&(i.s_()?i.a_():Ts(t)&&t.K_.set("Unknown"))}function Xf(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}$o(n).V_(e)}function z0(n,e){n.U_.xe(e),$o(n).m_(e)}function Jf(n){n.U_=new xP({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),$o(n).start(),n.K_.F_()}function Zf(n){return Ts(n)&&!$o(n).i_()&&n.B_.size>0}function Ts(n){return Ie(n).k_.size===0}function B0(n){n.U_=void 0}async function Lk(n){n.K_.set("Online")}async function Mk(n){n.B_.forEach((e,t)=>{Xf(n,e)})}async function bk(n,e){B0(n),Zf(n)?(n.K_.O_(e),Jf(n)):n.K_.set("Unknown")}async function Fk(n,e,t){if(n.K_.set("Online"),e instanceof C0&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const d of l.targetIds)o.B_.has(d)&&(await o.remoteSyncer.rejectListen(d,h),o.B_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await wc(n,i)}else if(e instanceof rc?n.U_.$e(e):e instanceof A0?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(we.min()))try{const i=await b0(n.localStore);t.compareTo(i)>=0&&await function(l,h){const d=l.U_.it(h);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.B_.get(y);E&&l.B_.set(y,E.withResumeToken(p.resumeToken,h))}}),d.targetMismatches.forEach((p,y)=>{const E=l.B_.get(p);if(!E)return;l.B_.set(p,E.withResumeToken(Dt.EMPTY_BYTE_STRING,E.snapshotVersion)),z0(l,p);const T=new vi(E.target,p,y,E.sequenceNumber);Xf(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){se("RemoteStore","Failed to raise snapshot:",i),await wc(n,i)}}async function wc(n,e,t){if(!zo(e))throw e;n.k_.add(1),await wl(n),n.K_.set("Offline"),t||(t=()=>b0(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await $c(n)})}function $0(n,e){return e().catch(t=>wc(n,t,e))}async function qc(n){const e=Ie(n),t=Pi(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Uk(e);)try{const o=await Tk(e.localStore,i);if(o===null){e.L_.length===0&&t.a_();break}i=o.batchId,jk(e,o)}catch(o){await wc(e,o)}q0(e)&&H0(e)}function Uk(n){return Ts(n)&&n.L_.length<10}function jk(n,e){n.L_.push(e);const t=Pi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function q0(n){return Ts(n)&&!Pi(n).i_()&&n.L_.length>0}function H0(n){Pi(n).start()}async function zk(n){Pi(n).w_()}async function Bk(n){const e=Pi(n);for(const t of n.L_)e.g_(t.mutations)}async function $k(n,e,t){const i=n.L_.shift(),o=qf.from(i,e,t);await $0(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await qc(n)}async function qk(n,e){e&&Pi(n).f_&&await async function(i,o){if(function(h){return kP(h)&&h!==G.ABORTED}(o.code)){const l=i.L_.shift();Pi(i).__(),await $0(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await qc(i)}}(n,e),q0(n)&&H0(n)}async function Yy(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const i=Ts(t);t.k_.add(3),await wl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await $c(t)}async function Hk(n,e){const t=Ie(n);e?(t.k_.delete(2),await $c(t)):e||(t.k_.add(2),await wl(t),t.K_.set("Unknown"))}function $o(n){return n.W_||(n.W_=function(t,i,o){const l=Ie(t);return l.b_(),new Nk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:Lk.bind(null,n),mo:Mk.bind(null,n),po:bk.bind(null,n),R_:Fk.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),Zf(n)?Jf(n):n.K_.set("Unknown")):(await n.W_.stop(),B0(n))})),n.W_}function Pi(n){return n.G_||(n.G_=function(t,i,o){const l=Ie(t);return l.b_(),new Dk(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:zk.bind(null,n),po:qk.bind(null,n),p_:Bk.bind(null,n),y_:$k.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await qc(n)):(await n.G_.stop(),n.L_.length>0&&(se("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new us,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,d=new ep(e,t,h,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tp(n,e){if(zr("AsyncQueue",`${e}: ${n}`),zo(n))return new ue(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{static emptySet(e){return new Ao(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||fe.comparator(t.key,i.key):(t,i)=>fe.comparator(t.key,i.key),this.keyedMap=qa(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ao;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(){this.z_=new tt(fe.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Ee():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Oo{constructor(e,t,i,o,l,h,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(d=>{h.push({type:0,doc:d})}),new Oo(e,t,Ao.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Kk{constructor(){this.queries=Jy(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Ie(t),l=o.queries;o.queries=Jy(),l.forEach((h,d)=>{for(const p of d.J_)p.onError(i)})})(this,new ue(G.ABORTED,"Firestore shutting down"))}}function Jy(){return new Es(n=>d0(n),bc)}async function Gk(n,e){const t=Ie(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new Wk,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const d=tp(h,`Initialization of query '${_o(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&np(t)}async function Qk(n,e){const t=Ie(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Yk(n,e){const t=Ie(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const d of h.J_)d.ta(o)&&(i=!0);h.H_=o}}i&&np(t)}function Xk(n,e,t){const i=Ie(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function np(n){n.X_.forEach(e=>{e.next()})}var hf,Zy;(Zy=hf||(hf={})).na="default",Zy.Cache="cache";class Jk{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Oo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==hf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.key=e}}class K0{constructor(e){this.key=e}}class Zk{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ke(),this.mutatedKeys=ke(),this.Va=f0(e),this.ma=new Ao(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new Xy,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const R=o.get(E),x=Fc(this.query,T)?T:null,F=!!R&&this.mutatedKeys.has(R.key),$=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let U=!1;R&&x?R.data.isEqual(x.data)?F!==$&&(i.track({type:3,doc:x}),U=!0):this.ya(R,x)||(i.track({type:2,doc:x}),U=!0,(p&&this.Va(x,p)>0||y&&this.Va(x,y)<0)&&(d=!0)):!R&&x?(i.track({type:0,doc:x}),U=!0):R&&!x&&(i.track({type:1,doc:R}),U=!0,(p||y)&&(d=!0)),U&&(x?(h=h.add(x),l=$?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{ma:h,pa:i,ss:d,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((E,T)=>function(x,F){const $=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return $(x)-$(F)}(E.type,T.type)||this.Va(E.doc,T.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,h.length!==0||y?{snapshot:new Oo(this.query,e.ma,l,h,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Xy,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ke(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new K0(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new W0(i))}),t}va(e){this.da=e.ds,this.Ra=ke();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Oo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class eN{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class tN{constructor(e){this.key=e,this.Fa=!1}}class nN{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Es(d=>d0(d),bc),this.Oa=new Map,this.Na=new Set,this.La=new tt(fe.comparator),this.Ba=new Map,this.ka=new Kf,this.qa={},this.Qa=new Map,this.Ka=xo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function rN(n,e,t=!0){const i=Z0(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await G0(i,e,t,!0),o}async function iN(n,e){const t=Z0(n);await G0(t,e,!0,!1)}async function G0(n,e,t,i){const o=await Ik(n.localStore,lr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await sN(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&j0(n.remoteStore,o),d}async function sN(n,e,t,i,o){n.Ua=(T,R,x)=>async function($,U,H,Y){let ee=U.view.ga(H);ee.ss&&(ee=await Ky($.localStore,U.query,!1).then(({documents:N})=>U.view.ga(N,ee)));const oe=Y&&Y.targetChanges.get(U.targetId),Se=Y&&Y.targetMismatches.get(U.targetId)!=null,pe=U.view.applyChanges(ee,$.isPrimaryClient,oe,Se);return t_($,U.targetId,pe.ba),pe.snapshot}(n,T,R,x);const l=await Ky(n.localStore,e,!0),h=new Zk(e,l.ds),d=h.ga(l.documents),p=El.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(d,n.isPrimaryClient,p);t_(n,t,y.ba);const E=new eN(e,t,h);return n.xa.set(e,E),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function oN(n,e,t){const i=Ie(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(h=>!bc(h,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await cf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Yf(i.remoteStore,o.targetId),df(i,o.targetId)}).catch(jo)):(df(i,o.targetId),await cf(i.localStore,o.targetId,!0))}async function aN(n,e){const t=Ie(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Yf(t.remoteStore,i.targetId))}async function lN(n,e,t){const i=mN(n);try{const o=await function(h,d){const p=Ie(h),y=gt.now(),E=d.reduce((x,F)=>x.add(F.key),ke());let T,R;return p.persistence.runTransaction("Locally write mutations","readwrite",x=>{let F=Br(),$=ke();return p.hs.getEntries(x,E).next(U=>{F=U,F.forEach((H,Y)=>{Y.isValidDocument()||($=$.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(x,F)).next(U=>{T=U;const H=[];for(const Y of d){const ee=SP(Y,T.get(Y.key).overlayedDocument);ee!=null&&H.push(new ws(Y.key,ee,i0(ee.value.mapValue),Fr.exists(!0)))}return p.mutationQueue.addMutationBatch(x,y,H,d)}).next(U=>{R=U;const H=U.applyToLocalDocumentSet(T,$);return p.documentOverlayCache.saveOverlays(x,U.batchId,H)})}).then(()=>({batchId:R.batchId,changes:m0(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,d,p){let y=h.qa[h.currentUser.toKey()];y||(y=new tt(De)),y=y.insert(d,p),h.qa[h.currentUser.toKey()]=y}(i,o.batchId,t),await Tl(i,o.changes),await qc(i.remoteStore)}catch(o){const l=tp(o,"Failed to persist write");t.reject(l)}}async function Q0(n,e){const t=Ie(n);try{const i=await Ek(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ba.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Ue(h.Fa):o.removedDocuments.size>0&&(Ue(h.Fa),h.Fa=!1))}),await Tl(t,i,e)}catch(i){await jo(i)}}function e_(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,h)=>{const d=h.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(h,d){const p=Ie(h);p.onlineState=d;let y=!1;p.queries.forEach((E,T)=>{for(const R of T.J_)R.ea(d)&&(y=!0)}),y&&np(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function uN(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ba.get(e),l=o&&o.key;if(l){let h=new tt(fe.comparator);h=h.insert(l,Ut.newNoDocument(l,we.min()));const d=ke().add(l),p=new zc(we.min(),new Map,new tt(De),h,d);await Q0(i,p),i.La=i.La.remove(l),i.Ba.delete(e),rp(i)}else await cf(i.localStore,e,!1).then(()=>df(i,e,t)).catch(jo)}async function cN(n,e){const t=Ie(n),i=e.batch.batchId;try{const o=await vk(t.localStore,e);X0(t,i,null),Y0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Tl(t,o)}catch(o){await jo(o)}}async function hN(n,e,t){const i=Ie(n);try{const o=await function(h,d){const p=Ie(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,d).next(T=>(Ue(T!==null),E=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(i.localStore,e);X0(i,e,t),Y0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Tl(i,o)}catch(o){await jo(o)}}function Y0(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function X0(n,e,t){const i=Ie(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function df(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||J0(n,i)})}function J0(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(Yf(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),rp(n))}function t_(n,e,t){for(const i of t)i instanceof W0?(n.ka.addReference(i.key,e),dN(n,i)):i instanceof K0?(se("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||J0(n,i.key)):Ee()}function dN(n,e){const t=e.key,i=t.path.canonicalString();n.La.get(t)||n.Na.has(i)||(se("SyncEngine","New document in limbo: "+t),n.Na.add(i),rp(n))}function rp(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new fe(Ge.fromString(e)),i=n.Ka.next();n.Ba.set(i,new tN(t)),n.La=n.La.insert(t,i),j0(n.remoteStore,new vi(lr(Bf(t.path)),i,"TargetPurposeLimboResolution",Vc.oe))}}async function Tl(n,e,t){const i=Ie(n),o=[],l=[],h=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{h.push(i.Ua(p,e,t).then(y=>{var E;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Qf.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(h),i.Ma.R_(o),await async function(p,y){const E=Ie(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>W.forEach(y,R=>W.forEach(R.Wi,x=>E.persistence.referenceDelegate.addReference(T,R.targetId,x)).next(()=>W.forEach(R.Gi,x=>E.persistence.referenceDelegate.removeReference(T,R.targetId,x)))))}catch(T){if(!zo(T))throw T;se("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const R=T.targetId;if(!T.fromCache){const x=E.us.get(R),F=x.snapshotVersion,$=x.withLastLimboFreeSnapshotVersion(F);E.us=E.us.insert(R,$)}}}(i.localStore,l))}async function fN(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const i=await M0(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(d=>{d.forEach(p=>{p.reject(new ue(G.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Tl(t,i.Ts)}}function pN(n,e){const t=Ie(n),i=t.Ba.get(e);if(i&&i.Fa)return ke().add(i.key);{let o=ke();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const d=t.xa.get(h);o=o.unionWith(d.view.fa)}return o}}function Z0(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Q0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uN.bind(null,e),e.Ma.R_=Yk.bind(null,e.eventManager),e.Ma.Wa=Xk.bind(null,e.eventManager),e}function mN(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hN.bind(null,e),e}class Tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return _k(this.persistence,new gk,e.initialUser,this.serializer)}ja(e){return new L0(Gf.ei,this.serializer)}za(e){return new Rk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tc.provider={build:()=>new Tc};class gN extends Tc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ue(this.persistence.referenceDelegate instanceof Ec);const i=this.persistence.referenceDelegate.garbageCollector;return new tk(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new L0(i=>Ec.ei(i,t),this.serializer)}}class ff{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>e_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=fN.bind(null,this.syncEngine),await Hk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Kk}()}createDatastore(e){const t=Bc(e.databaseInfo.databaseId),i=function(l){return new kk(l)}(e.databaseInfo);return function(l,h,d,p){return new xk(l,h,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,d){return new Vk(i,o,l,h,d)}(this.localStore,this.datastore,e.asyncQueue,t=>e_(this.syncEngine,t,0),function(){return Qy.p()?new Qy:new Ak}())}createSyncEngine(e,t){return function(o,l,h,d,p,y,E){const T=new nN(o,l,h,d,p,y);return E&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Ie(o);se("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await wl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ff.provider={build:()=>new ff};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=t0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{se("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(se("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new us;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=tp(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ud(n,e){n.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await M0(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function n_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await vN(n);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Yy(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Yy(e.remoteStore,o)),n._onlineComponents=e}async function vN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ud(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Po("Error using user provided cache. Falling back to memory cache: "+t),await Ud(n,new Tc)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await Ud(n,new gN(void 0));return n._offlineComponents}async function eE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await n_(n,n._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await n_(n,new ff))),n._onlineComponents}function EN(n){return eE(n).then(e=>e.syncEngine)}async function r_(n){const e=await eE(n),t=e.eventManager;return t.onListen=rN.bind(null,e.syncEngine),t.onUnlisten=oN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=iN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=aN.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(n,e,t){if(!t)throw new ue(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wN(n,e,t,i){if(e===!0&&i===!0)throw new ue(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function s_(n){if(!fe.isDocumentKey(n))throw new ue(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function o_(n){if(fe.isDocumentKey(n))throw new ue(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee()}function Co(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hc(n);throw new ue(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new a_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new a_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new DC;switch(i.type){case"firstParty":return new LC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ue(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=i_.get(t);i&&(se("ComponentProvider","Removing Datastore"),i_.delete(t),i.terminate())}(this),Promise.resolve()}}function TN(n,e,t,i={}){var o;const l=(n=Co(n,Wc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=Ft.MOCK_USER;else{d=kI(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ue(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ft(y)}n._authCredentials=new xC(new e0(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Is(this.firestore,e,this._query)}}class nn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}}class Ti extends Is{constructor(e,t,i){super(e,t,Bf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new fe(e))}withConverter(e){return new Ti(this.firestore,e,this._path)}}function eD(n,e,...t){if(n=zt(n),nE("collection","path",e),n instanceof Wc){const i=Ge.fromString(e,...t);return o_(i),new Ti(n,null,i)}{if(!(n instanceof nn||n instanceof Ti))throw new ue(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ge.fromString(e,...t));return o_(i),new Ti(n.firestore,null,i)}}function tD(n,e,...t){if(n=zt(n),arguments.length===1&&(e=t0.newId()),nE("doc","path",e),n instanceof Wc){const i=Ge.fromString(e,...t);return s_(i),new nn(n,null,new fe(i))}{if(!(n instanceof nn||n instanceof Ti))throw new ue(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ge.fromString(e,...t));return s_(i),new nn(n.firestore,n instanceof Ti?n.converter:null,new fe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new F0(this,"async_queue_retry"),this.fu=()=>{const i=Fd();i&&se("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Fd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Fd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new us;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!zo(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(h){let d=h.message||"";return h.stack&&(d=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),d}(i);throw zr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=ep.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&Ee()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function u_(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1}(n,["next","error","complete"])}class Ic extends Wc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new l_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new l_(e),this._firestoreClient=void 0,await e}}}function IN(n,e){const t=typeof n=="object"?n:Tf(),i=typeof n=="string"?n:"(default)",o=ys(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=CI("firestore");l&&TN(o,...l)}return o}function rE(n){if(n._terminated)throw new ue(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||SN(n),n._firestoreClient}function SN(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,E){return new YC(d,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,tE(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new _N(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vo(Dt.fromBase64String(e))}catch(t){throw new ue(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vo(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=/^__.*__$/;class AN{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new ws(e,this.data,this.fieldMask,t,this.fieldTransforms):new vl(e,this.data,t,this.fieldTransforms)}}function sE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class ap{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new ap(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Lu(e),o}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Sc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(sE(this.Mu)&&RN.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class CN{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Bc(e)}$u(e,t,i,o=!1){return new ap({Mu:e,methodName:t,Ku:i,path:Nt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oE(n){const e=n._freezeSettings(),t=Bc(n._databaseId);return new CN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function PN(n,e,t,i,o,l={}){const h=n.$u(l.merge||l.mergeFields?2:0,e,t,o);uE("Data must be an object, but it was:",h,i);const d=aE(i,h);let p,y;if(l.merge)p=new zn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const R=NN(e,T,t);if(!h.contains(R))throw new ue(G.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);xN(E,R)||E.push(R)}p=new zn(E),y=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=h.fieldTransforms;return new AN(new Tn(d),p,y)}function kN(n,e,t,i=!1){return lp(t,n.$u(i?4:3,e))}function lp(n,e){if(lE(n=zt(n)))return uE("Unsupported field value:",e,n),aE(n,e);if(n instanceof iE)return function(i,o){if(!sE(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const d of i){let p=lp(d,o.ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=zt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return _P(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=gt.fromDate(i);return{timestampValue:vc(o.serializer,l)}}if(i instanceof gt){const l=new gt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:vc(o.serializer,l)}}if(i instanceof sp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Vo)return{bytesValue:P0(o.serializer,i._byteString)};if(i instanceof nn){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Wf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof op)return function(h,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return $f(d.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${Hc(i)}`)}(n,e)}function aE(n,e){const t={};return n0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(n,(i,o)=>{const l=lp(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function lE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof sp||n instanceof Vo||n instanceof nn||n instanceof iE||n instanceof op)}function uE(n,e,t){if(!lE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Hc(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function NN(n,e,t){if((e=zt(e))instanceof ip)return e._internalPath;if(typeof e=="string")return cE(n,e);throw Sc("Field path arguments must be of type string or ",n,!1,void 0,t)}const DN=new RegExp("[~\\*/\\[\\]]");function cE(n,e,t){if(e.search(DN)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ip(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Sc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new ue(G.INVALID_ARGUMENT,d+n+p)}function xN(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ON(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(up("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ON extends hE{data(){return super.data()}}function up(n,e){return typeof e=="string"?cE(n,e):e instanceof ip?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cp{}class dE extends cp{}function nD(n,e,...t){let i=[];e instanceof cp&&i.push(e),i=i.concat(t),function(l){const h=l.filter(p=>p instanceof dp).length,d=l.filter(p=>p instanceof hp).length;if(h>1||h>0&&d>0)throw new ue(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class hp extends dE{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new hp(e,t,i)}_apply(e){const t=this._parse(e);return fE(e._query,t),new Is(e.firestore,e.converter,rf(e._query,t))}_parse(e){const t=oE(e.firestore);return function(l,h,d,p,y,E,T){let R;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ue(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){h_(T,E);const x=[];for(const F of T)x.push(c_(p,l,F));R={arrayValue:{values:x}}}else R=c_(p,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||h_(T,E),R=kN(d,h,T,E==="in"||E==="not-in");return ct.create(y,E,R)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class dp extends cp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new dp(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let h=o;const d=l.getFlattenedFilters();for(const p of d)fE(h,p),h=rf(h,p)}(e._query,t),new Is(e.firestore,e.converter,rf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fp extends dE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new fp(e,t)}_apply(e){const t=function(o,l,h){if(o.startAt!==null)throw new ue(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ue(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ll(l,h)}(e._query,this._field,this._direction);return new Is(e.firestore,e.converter,function(o,l){const h=o.explicitOrderBy.concat([l]);return new Bo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function rD(n,e="asc"){const t=e,i=up("orderBy",n);return fp._create(i,t)}function c_(n,e,t){if(typeof(t=zt(t))=="string"){if(t==="")throw new ue(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!h0(e)&&t.indexOf("/")!==-1)throw new ue(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ge.fromString(t));if(!fe.isDocumentKey(i))throw new ue(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ky(n,new fe(i))}if(t instanceof nn)return ky(n,t._key);throw new ue(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hc(t)}.`)}function h_(n,e){if(!Array.isArray(n)||n.length===0)throw new ue(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fE(n,e){const t=function(o,l){for(const h of o)for(const d of h.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ue(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class LN{convertValue(e,t="none"){switch(Ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return vs(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>st(h.doubleValue));return new op(l)}convertGeoPoint(e){return new sp(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Mc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const t=Ri(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ge.fromString(e);Ue(V0(i));const o=new ol(i.get(1),i.get(3)),l=new fe(i.popFirst(5));return o.isEqual(t)||zr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pE extends hE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ic(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(up("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class ic extends pE{data(e={}){return super.data(e)}}class bN{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Wa(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new ic(this._firestore,this._userDataWriter,i.key,i,new Wa(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(d=>{const p=new ic(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Wa(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new ic(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Wa(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return d.type!==0&&(y=h.indexOf(d.doc.key),h=h.delete(d.doc.key)),d.type!==1&&(h=h.add(d.doc),E=h.indexOf(d.doc.key)),{type:FN(d.type),doc:p,oldIndex:y,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function FN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee()}}class mE extends LN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nn(this.firestore,null,t)}}function iD(n,e,t){n=Co(n,nn);const i=Co(n.firestore,Ic),o=MN(n.converter,e);return UN(i,[PN(oE(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Fr.none())])}function sD(n,...e){var t,i,o;n=zt(n);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||u_(e[h])||(l=e[h],h++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(u_(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let p,y,E;if(n instanceof nn)y=Co(n.firestore,Ic),E=Bf(n._key.path),p={next:T=>{e[h]&&e[h](jN(y,n,T))},error:e[h+1],complete:e[h+2]};else{const T=Co(n,Is);y=Co(T.firestore,Ic),E=T._query;const R=new mE(y);p={next:x=>{e[h]&&e[h](new bN(y,R,T,x))},error:e[h+1],complete:e[h+2]},VN(n._query)}return function(R,x,F,$){const U=new yN($),H=new Jk(x,U,F);return R.asyncQueue.enqueueAndForget(async()=>Gk(await r_(R),H)),()=>{U.eu(),R.asyncQueue.enqueueAndForget(async()=>Qk(await r_(R),H))}}(rE(y),E,d,p)}function UN(n,e){return function(i,o){const l=new us;return i.asyncQueue.enqueueAndForget(async()=>lN(await EN(i),o,l)),l.promise}(rE(n),e)}function jN(n,e,t){const i=t.docs.get(e._key),o=new mE(n);return new pE(n,o,e._key,i,new Wa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Uo=o})(bo),hr(new Bn("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),d=new Ic(new OC(i.getProvider("auth-internal")),new bC(i.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ue(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ol(y.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),In(Iy,"4.7.5",e),In(Iy,"4.7.5","esm2017")})();const zN={apiKey:"AIzaSyAR9O67wu8ubUBCzpXp2KTkFeKq1ci4l6g",authDomain:"my-9e857.firebaseapp.com",projectId:"my-9e857",storageBucket:"my-9e857.firebasestorage.app",messagingSenderId:"412534419765",appId:"1:412534419765:web:25269521e967c4dae89c7c",measurementId:"G-JFVSVNHDKN"},pp=B_(zN);yR(pp);const BN=kC(pp),oD=IN(pp),To={ADD_TO_BASKET:"ADD_TO_BASKET",REMOVE_FROM_BASKET:"REMOVE_FROM_BASKET",SET_USER:"SET_USER",EMPTY_BASKET:"EMPTY_BASKET"};function $N(){const{state:n,dispatch:e}=B.useContext(Ef);return B.useEffect(()=>{BN.onAuthStateChanged(t=>{e(t?{type:To.SET_USER,user:t.user}:{type:To.SET_USER,user:null})})},[]),Te.jsx(Te.Fragment,{children:Te.jsx(vI,{})})}const qN={basket:[],user:null},HN=(n,e)=>{switch(e.type){case To.ADD_TO_BASKET:if(n.basket.find(o=>o.id===e.item.id)){const o=n.basket.map(l=>l.id===e.item.id?{...l,amount:l.amount+1}:l);return{...n,basket:o}}else return{...n,basket:[...n.basket,{...e.item,amount:1}]};case To.REMOVE_FROM_BASKET:let i=n.basket.findIndex(o=>o.id===e.id);if(i!==-1){let o=[...n.basket];return o[i].amount>1?o[i].amount-=1:(console.log("Removing item from basket"),o.splice(i,1)),{...n,basket:o}}case To.SET_USER:return{...n,user:e.user};case To.EMPTY_BASKET:return{...n,user:[]};default:return e}};kw.createRoot(document.getElementById("root")).render(Te.jsx(B.StrictMode,{children:Te.jsx(lI,{initialState:qN,reducer:HN,children:Te.jsx($N,{})})}));export{Ef as D,aI as F,xr as L,GN as O,WN as R,To as T,sD as a,C_ as b,eD as c,oD as d,ms as e,QN as f,BN as g,KN as h,pf as i,Te as j,Ew as k,Sn as l,iD as m,tD as n,rD as o,nD as q,B as r,YN as s,w_ as u};
