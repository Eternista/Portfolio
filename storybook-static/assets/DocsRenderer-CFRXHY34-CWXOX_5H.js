const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BrnU7xv7.js","assets/index-DJO9vBfz.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./iframe-3ANZVf4J.js";import{R as e,r as p}from"./index-DJO9vBfz.js";import{ae as h,af as l,ag as u,ah as E}from"./index-XxdOJDtA.js";import{renderElement as d,unmountElement as x}from"./react-18-BWhC85Cb.js";import"../sb-preview/runtime.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJdX7xnk.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";var _={code:h,a:l,...u},D=class extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},F=class{constructor(){this.render=async(t,r,n)=>{let s={..._,...r==null?void 0:r.components},a=E;return new Promise((i,m)=>{c(async()=>{const{MDXProvider:o}=await import("./index-BrnU7xv7.js");return{MDXProvider:o}},__vite__mapDeps([0,1])).then(({MDXProvider:o})=>d(e.createElement(D,{showException:m,key:Math.random()},e.createElement(o,{components:s},e.createElement(a,{context:t,docsParameter:r}))),n)).then(()=>i())})},this.unmount=t=>{x(t)}}};export{F as DocsRenderer,_ as defaultComponents};