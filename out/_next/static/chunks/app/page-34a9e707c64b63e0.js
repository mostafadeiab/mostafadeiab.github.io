(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6345:function(e,t,r){Promise.resolve().then(r.t.bind(r,5878,23)),Promise.resolve().then(r.t.bind(r,2972,23)),Promise.resolve().then(r.bind(r,8589)),Promise.resolve().then(r.bind(r,8469))},8589:function(e,t,r){"use strict";r.d(t,{Avatar:function(){return y},AvatarFallback:function(){return x},AvatarImage:function(){return h}});var n=r(7437),o=r(2265),a=r(3966),i=r(6606),u=r(1188),l=r(6840),s="Avatar",[c,f]=(0,a.b)(s),[d,m]=c(s),p=o.forwardRef((e,t)=>{let{__scopeAvatar:r,...a}=e,[i,u]=o.useState("idle");return(0,n.jsx)(d,{scope:r,imageLoadingStatus:i,onImageLoadingStatusChange:u,children:(0,n.jsx)(l.WV.span,{...a,ref:t})})});p.displayName=s;var v="AvatarImage",b=o.forwardRef((e,t)=>{let{__scopeAvatar:r,src:a,onLoadingStatusChange:s=()=>{},...c}=e,f=m(v,r),d=function(e,t){let[r,n]=o.useState("idle");return(0,u.b)(()=>{if(!e){n("error");return}let r=!0,o=new window.Image,a=e=>()=>{r&&n(e)};return n("loading"),o.onload=a("loaded"),o.onerror=a("error"),o.src=e,t&&(o.referrerPolicy=t),()=>{r=!1}},[e,t]),r}(a,c.referrerPolicy),p=(0,i.W)(e=>{s(e),f.onImageLoadingStatusChange(e)});return(0,u.b)(()=>{"idle"!==d&&p(d)},[d,p]),"loaded"===d?(0,n.jsx)(l.WV.img,{...c,ref:t,src:a}):null});b.displayName=v;var g="AvatarFallback",w=o.forwardRef((e,t)=>{let{__scopeAvatar:r,delayMs:a,...i}=e,u=m(g,r),[s,c]=o.useState(void 0===a);return o.useEffect(()=>{if(void 0!==a){let e=window.setTimeout(()=>c(!0),a);return()=>window.clearTimeout(e)}},[a]),s&&"loaded"!==u.imageLoadingStatus?(0,n.jsx)(l.WV.span,{...i,ref:t}):null});w.displayName=g;var N=r(3448);let y=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(p,{ref:t,className:(0,N.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...o})});y.displayName=p.displayName;let h=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(b,{ref:t,className:(0,N.cn)("aspect-square h-full w-full",r),...o})});h.displayName=b.displayName;let x=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(w,{ref:t,className:(0,N.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",r),...o})});x.displayName=w.displayName},8469:function(e,t,r){"use strict";r.d(t,{Tabs:function(){return Z},TabsContent:function(){return er},TabsList:function(){return ee},TabsTrigger:function(){return et}});var n=r(7437),o=r(2265),a=r.t(o,2);function i(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}var u=r(3966),l=r(8575),s=r(7495),c=r(1188),f=a["useId".toString()]||(()=>void 0),d=0;function m(e){let[t,r]=o.useState(f());return(0,c.b)(()=>{e||r(e=>e??String(d++))},[e]),e||(t?`radix-${t}`:"")}var p=r(6840),v=r(6606);function b({prop:e,defaultProp:t,onChange:r=()=>{}}){let[n,a]=function({defaultProp:e,onChange:t}){let r=o.useState(e),[n]=r,a=o.useRef(n),i=(0,v.W)(t);return o.useEffect(()=>{a.current!==n&&(i(n),a.current=n)},[n,a,i]),r}({defaultProp:t,onChange:r}),i=void 0!==e,u=i?e:n,l=(0,v.W)(r);return[u,o.useCallback(t=>{if(i){let r="function"==typeof t?t(e):t;r!==e&&l(r)}else a(t)},[i,e,a,l])]}var g=o.createContext(void 0);function w(e){let t=o.useContext(g);return e||t||"ltr"}var N="rovingFocusGroup.onEntryFocus",y={bubbles:!1,cancelable:!0},h="RovingFocusGroup",[x,R,j]=function(e){let t=e+"CollectionProvider",[r,a]=function(e,t=[]){let r=[],a=()=>{let t=r.map(e=>o.createContext(e));return function(r){let n=r?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return a.scopeName=e,[function(t,a){let i=o.createContext(a),u=r.length;function l(t){let{scope:r,children:a,...l}=t,s=r?.[e][u]||i,c=o.useMemo(()=>l,Object.values(l));return(0,n.jsx)(s.Provider,{value:c,children:a})}return r=[...r,a],l.displayName=t+"Provider",[l,function(r,n){let l=n?.[e][u]||i,s=o.useContext(l);if(s)return s;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(a,...t)]}(t),[i,u]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:r}=e,a=o.useRef(null),u=o.useRef(new Map).current;return(0,n.jsx)(i,{scope:t,itemMap:u,collectionRef:a,children:r})};c.displayName=t;let f=e+"CollectionSlot",d=o.forwardRef((e,t)=>{let{scope:r,children:o}=e,a=u(f,r),i=(0,l.e)(t,a.collectionRef);return(0,n.jsx)(s.g7,{ref:i,children:o})});d.displayName=f;let m=e+"CollectionItemSlot",p="data-radix-collection-item",v=o.forwardRef((e,t)=>{let{scope:r,children:a,...i}=e,c=o.useRef(null),f=(0,l.e)(t,c),d=u(m,r);return o.useEffect(()=>(d.itemMap.set(c,{ref:c,...i}),()=>void d.itemMap.delete(c))),(0,n.jsx)(s.g7,{[p]:"",ref:f,children:a})});return v.displayName=m,[{Provider:c,Slot:d,ItemSlot:v},function(t){let r=u(e+"CollectionConsumer",t);return o.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(p,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},a]}(h),[C,M]=function(e,t=[]){let r=[],a=()=>{let t=r.map(e=>o.createContext(e));return function(r){let n=r?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return a.scopeName=e,[function(t,a){let i=o.createContext(a),u=r.length;function l(t){let{scope:r,children:a,...l}=t,s=r?.[e][u]||i,c=o.useMemo(()=>l,Object.values(l));return(0,n.jsx)(s.Provider,{value:c,children:a})}return r=[...r,a],l.displayName=t+"Provider",[l,function(r,n){let l=n?.[e][u]||i,s=o.useContext(l);if(s)return s;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(a,...t)]}(h,[j]),[T,I]=C(h),A=o.forwardRef((e,t)=>(0,n.jsx)(x.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,n.jsx)(x.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,n.jsx)(E,{...e,ref:t})})}));A.displayName=h;var E=o.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:a,loop:u=!1,dir:s,currentTabStopId:c,defaultCurrentTabStopId:f,onCurrentTabStopIdChange:d,onEntryFocus:m,preventScrollOnEntryFocus:g=!1,...h}=e,x=o.useRef(null),j=(0,l.e)(t,x),C=w(s),[M=null,I]=b({prop:c,defaultProp:f,onChange:d}),[A,E]=o.useState(!1),_=(0,v.W)(m),S=R(r),P=o.useRef(!1),[O,D]=o.useState(0);return o.useEffect(()=>{let e=x.current;if(e)return e.addEventListener(N,_),()=>e.removeEventListener(N,_)},[_]),(0,n.jsx)(T,{scope:r,orientation:a,dir:C,loop:u,currentTabStopId:M,onItemFocus:o.useCallback(e=>I(e),[I]),onItemShiftTab:o.useCallback(()=>E(!0),[]),onFocusableItemAdd:o.useCallback(()=>D(e=>e+1),[]),onFocusableItemRemove:o.useCallback(()=>D(e=>e-1),[]),children:(0,n.jsx)(p.WV.div,{tabIndex:A||0===O?-1:0,"data-orientation":a,...h,ref:j,style:{outline:"none",...e.style},onMouseDown:i(e.onMouseDown,()=>{P.current=!0}),onFocus:i(e.onFocus,e=>{let t=!P.current;if(e.target===e.currentTarget&&t&&!A){let t=new CustomEvent(N,y);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=S().filter(e=>e.focusable);F([e.find(e=>e.active),e.find(e=>e.id===M),...e].filter(Boolean).map(e=>e.ref.current),g)}}P.current=!1}),onBlur:i(e.onBlur,()=>E(!1))})})}),_="RovingFocusGroupItem",S=o.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:a=!0,active:u=!1,tabStopId:l,...s}=e,c=m(),f=l||c,d=I(_,r),v=d.currentTabStopId===f,b=R(r),{onFocusableItemAdd:g,onFocusableItemRemove:w}=d;return o.useEffect(()=>{if(a)return g(),()=>w()},[a,g,w]),(0,n.jsx)(x.ItemSlot,{scope:r,id:f,focusable:a,active:u,children:(0,n.jsx)(p.WV.span,{tabIndex:v?0:-1,"data-orientation":d.orientation,...s,ref:t,onMouseDown:i(e.onMouseDown,e=>{a?d.onItemFocus(f):e.preventDefault()}),onFocus:i(e.onFocus,()=>d.onItemFocus(f)),onKeyDown:i(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){d.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return P[o]}(e,d.orientation,d.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=b().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var r,n;"prev"===t&&o.reverse();let a=o.indexOf(e.currentTarget);o=d.loop?(r=o,n=a+1,r.map((e,t)=>r[(n+t)%r.length])):o.slice(a+1)}setTimeout(()=>F(o))}})})})});S.displayName=_;var P={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function F(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var O=e=>{var t,r;let n,a;let{present:i,children:u}=e,s=function(e){var t,r;let[n,a]=o.useState(),i=o.useRef({}),u=o.useRef(e),l=o.useRef("none"),[s,f]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return o.useEffect(()=>{let e=D(i.current);l.current="mounted"===s?e:"none"},[s]),(0,c.b)(()=>{let t=i.current,r=u.current;if(r!==e){let n=l.current,o=D(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):r&&n!==o?f("ANIMATION_OUT"):f("UNMOUNT"),u.current=e}},[e,f]),(0,c.b)(()=>{if(n){var e;let t;let r=null!==(e=n.ownerDocument.defaultView)&&void 0!==e?e:window,o=e=>{let o=D(i.current).includes(e.animationName);if(e.target===n&&o&&(f("ANIMATION_END"),!u.current)){let e=n.style.animationFillMode;n.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=e)})}},a=e=>{e.target===n&&(l.current=D(i.current))};return n.addEventListener("animationstart",a),n.addEventListener("animationcancel",o),n.addEventListener("animationend",o),()=>{r.clearTimeout(t),n.removeEventListener("animationstart",a),n.removeEventListener("animationcancel",o),n.removeEventListener("animationend",o)}}f("ANIMATION_END")},[n,f]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:o.useCallback(e=>{e&&(i.current=getComputedStyle(e)),a(e)},[])}}(i),f="function"==typeof u?u({present:s.isPresent}):o.Children.only(u),d=(0,l.e)(s.ref,(n=null===(t=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in n&&n.isReactWarning?f.ref:(n=null===(r=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in n&&n.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof u||s.isPresent?o.cloneElement(f,{ref:d}):null};function D(e){return(null==e?void 0:e.animationName)||"none"}O.displayName="Presence";var k="Tabs",[W,L]=(0,u.b)(k,[M]),$=M(),[V,U]=W(k),K=o.forwardRef((e,t)=>{let{__scopeTabs:r,value:o,onValueChange:a,defaultValue:i,orientation:u="horizontal",dir:l,activationMode:s="automatic",...c}=e,f=w(l),[d,v]=b({prop:o,onChange:a,defaultProp:i});return(0,n.jsx)(V,{scope:r,baseId:m(),value:d,onValueChange:v,orientation:u,dir:f,activationMode:s,children:(0,n.jsx)(p.WV.div,{dir:f,"data-orientation":u,...c,ref:t})})});K.displayName=k;var G="TabsList",q=o.forwardRef((e,t)=>{let{__scopeTabs:r,loop:o=!0,...a}=e,i=U(G,r),u=$(r);return(0,n.jsx)(A,{asChild:!0,...u,orientation:i.orientation,dir:i.dir,loop:o,children:(0,n.jsx)(p.WV.div,{role:"tablist","aria-orientation":i.orientation,...a,ref:t})})});q.displayName=G;var B="TabsTrigger",z=o.forwardRef((e,t)=>{let{__scopeTabs:r,value:o,disabled:a=!1,...u}=e,l=U(B,r),s=$(r),c=Q(l.baseId,o),f=X(l.baseId,o),d=o===l.value;return(0,n.jsx)(S,{asChild:!0,...s,focusable:!a,active:d,children:(0,n.jsx)(p.WV.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":f,"data-state":d?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...u,ref:t,onMouseDown:i(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():l.onValueChange(o)}),onKeyDown:i(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&l.onValueChange(o)}),onFocus:i(e.onFocus,()=>{let e="manual"!==l.activationMode;d||a||!e||l.onValueChange(o)})})})});z.displayName=B;var H="TabsContent",J=o.forwardRef((e,t)=>{let{__scopeTabs:r,value:a,forceMount:i,children:u,...l}=e,s=U(H,r),c=Q(s.baseId,a),f=X(s.baseId,a),d=a===s.value,m=o.useRef(d);return o.useEffect(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,n.jsx)(O,{present:i||d,children:r=>{let{present:o}=r;return(0,n.jsx)(p.WV.div,{"data-state":d?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":c,hidden:!o,id:f,tabIndex:0,...l,ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0},children:o&&u})}})});function Q(e,t){return"".concat(e,"-trigger-").concat(t)}function X(e,t){return"".concat(e,"-content-").concat(t)}J.displayName=H;var Y=r(3448);let Z=K,ee=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(q,{ref:t,className:(0,Y.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",r),...o})});ee.displayName=q.displayName;let et=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(z,{ref:t,className:(0,Y.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",r),...o})});et.displayName=z.displayName;let er=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(J,{ref:t,className:(0,Y.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",r),...o})});er.displayName=J.displayName},3448:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(1994),o=r(3335);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,n.W)(t))}},3966:function(e,t,r){"use strict";r.d(t,{b:function(){return a}});var n=r(2265),o=r(7437);function a(e,t=[]){let r=[],a=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return a.scopeName=e,[function(t,a){let i=n.createContext(a),u=r.length;r=[...r,a];let l=t=>{let{scope:r,children:a,...l}=t,s=r?.[e]?.[u]||i,c=n.useMemo(()=>l,Object.values(l));return(0,o.jsx)(s.Provider,{value:c,children:a})};return l.displayName=t+"Provider",[l,function(r,o){let l=o?.[e]?.[u]||i,s=n.useContext(l);if(s)return s;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(a,...t)]}},6840:function(e,t,r){"use strict";r.d(t,{WV:function(){return i}});var n=r(2265);r(4887);var o=r(7495),a=r(7437),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...i}=e,u=n?o.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(u,{...i,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{})},6606:function(e,t,r){"use strict";r.d(t,{W:function(){return o}});var n=r(2265);function o(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},1188:function(e,t,r){"use strict";r.d(t,{b:function(){return o}});var n=r(2265),o=globalThis?.document?n.useLayoutEffect:()=>{}}},function(e){e.O(0,[972,317,878,971,117,744],function(){return e(e.s=6345)}),_N_E=e.O()}]);