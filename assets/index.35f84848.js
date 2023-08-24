import{z as g,A as i,B as m,c as x,_ as u,k as _,b as p,C as f,p as v,q as b,e as a,a as y,g as $,y as h,D as S}from"./index.fc083d38.js";const L={name:"ZRow",functional:!0,props:{gutter:{type:Number,default:0},tag:{type:String,default:"div"},className:{type:String,default:""},type:String,justify:String,align:String},setup(e,r){const{gutter:s,type:c,justify:t,align:o,tag:n,className:d}=e;return g("ZRow",s),()=>[i(n,{class:["z-row",c=="flex"?"z-row-flex":"",t?`z-justify-${t}`:"",o?`z-algin-${o}`:"",d]},r.slots)]}},V={name:"ZCol",props:{span:{type:Number,default:24},tag:{type:String,default:"div"},xs:Number,sm:Number,md:Number,lg:Number,xl:Number},setup(e,r){const{span:s,tag:c}=e,t=m("ZRow"),o=x(()=>{if(t)return{paddingLeft:t/2+"px",paddingRight:t/2+"px"}});let n=[];return["xs","sm","md","lg","xl"].forEach(d=>{e[d]&&n.push(`z-col-${d}-${e[d]}`)}),()=>[i(c,{class:["z-col",`z-col-${s}`,n],style:o.value},r.slots)]}};const N={name:"fourAngel"},l=e=>(v("data-v-edf6e557"),e=e(),b(),e),w={class:"four-container"},z=l(()=>a("div",{class:"fourBorder border1"},null,-1)),B=l(()=>a("div",{class:"fourBorder border2"},null,-1)),C=l(()=>a("div",{class:"fourBorder border3"},null,-1)),Z=l(()=>a("div",{class:"fourBorder border4"},null,-1));function I(e,r,s,c,t,o){return _(),p("div",w,[z,B,C,Z,f(e.$slots,"default",{},void 0,!0)])}const R=u(N,[["render",I],["__scopeId","data-v-edf6e557"]]);const j={name:"boxContainer",props:{boxTitle:{type:String,default:""}},components:{fourAngel:R}},k={class:"box-container"},A={class:"boxTitle"},T={class:"main-content"};function D(e,r,s,c,t,o){const n=y("four-angel");return _(),p("div",k,[$(n,null,{default:h(()=>[a("div",A,S(s.boxTitle),1),a("div",T,[f(e.$slots,"default",{},void 0,!0)])]),_:3})])}const q=u(j,[["render",D],["__scopeId","data-v-cf797826"]]);export{V as Z,L as a,q as b};
