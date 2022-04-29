var Y=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var O=(e,t,o)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,C=(e,t)=>{for(var o in t||(t={}))te.call(t,o)&&O(e,o,t[o]);if(E)for(var o of E(t))ne.call(t,o)&&O(e,o,t[o]);return e},L=(e,t)=>Z(e,ee(t));import{s as c,P as d,u as N,j as n,a as l,b as oe,c as P,d as v,e as b,D as q,r as p,U as j,f as re,g as ie,F as se,R as ae,h as S,i as ce,Q as le,k as de,l as ue,m as he,B as pe,n as me}from"./vendor.0e1eee22.js";const ge=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};ge();var _={"default-pink":"#FD28C1"};const fe=e=>Object.entries(e).map(o=>o.join(": ")).join(`;
`),xe=c.button`
  max-width: ${e=>e.maxWidth||"400px"};
  margin: 0 auto;
  width: ${e=>e.width||"80vw"};
  background-color: ${e=>e.backgroundColor||"black"};
  border-radius: 5px;
  box-shadow: 1px 4px 0px #B5B2B2;
  color: white;
  transition: 100ms;
  font-family: UniSans;
  // https://stackoverflow.com/questions/13426875/text-border-using-css-border-around-text thanks to bookcasey
  /* i probably should change this approach */
  // the very last shadow is the fancy one
  text-shadow: 1px 0 0 black, -1px 0 0 black, 0 1px 0 black, 0 -1px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 2px 2px 0px ${e=>e.textShadowColor||_["default-pink"]};
  font-weight: 900;
  font-size: ${e=>e.fontSize||"3rem"};
  height: ${e=>e.height||"78px"};
  /* should find a better approach */
  ${e=>e.extraStyle&&fe(e.extraStyle)};
  &:active {
      transform: translate(1px, 4px);
      box-shadow: none;
  }
  &:disabled {
    filter: opacity(50%);
  }
`;function f(e){const t=N(),{extraStyle:o,textShadowColor:a,clickCallback:r,navigationLink:i,children:s,disabled:u}=e;return n(xe,{extraStyle:o,textShadowColor:a,onClick:()=>{r&&r(),t(i)},disabled:u,children:s})}f.propTypes={extraStyle:d.objectOf(String),textShadowColor:d.string,clickCallback:d.func,navigationLink:d.string,title:d.string,disabled:d.bool}.isRequired;const ye=c.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: auto;
    padding: 10px;
`;function m({children:e}){return n(ye,{children:e})}m.propTypes={children:d.node}.isRequired;const be=c.h1`
    font-size: 5rem;
    font-weight: 250;
    position: absolute;
    top: 15vh;
    i {
      color: #FD28C1;
      font-style: normal;
      font-weight: 900;
    }
`;function x({normalText:e,highlightedText:t}){return l(be,{children:[e,n("i",{children:t})]})}x.propTypes={normalText:d.string,highlightedText:d.string}.isRequired;function ke(){return l(m,{children:[n(x,{normalText:"Quiz",highlightedText:"Game"}),n(f,{navigationLink:"settings",children:"Play"}),n(f,{extraStyle:{width:"60vw","max-width":"300px","font-size":"1.5rem",height:"50px","background-color":_["default-pink"]},navigationLink:"ranking",children:"Ranking"})]})}const R=oe.create({baseURL:"https://opentdb.com/",timeout:1500}),we=async()=>{try{const{data:e}=await R.get("api_token.php?command=request");return e.token}catch(e){return e.message}},Se=async(e,t)=>{const{questionAmount:o,difficulty:a,theme:r}=e;try{const i=`api.php?amount=${o}&category=${r}&difficulty=${a}&token${t}`,{data:s}=await R.get(i);return s.results}catch(i){return i.message}},ve=async()=>{try{const e="api_category.php",{data:t}=await R.get(e);return t.trivia_categories}catch(e){return e.message}},Ie=c.input`
    background-color: white;
    font-size: 1.2rem;
    border-radius: 10px;
    height: 50px;
    border: 0.5px solid black;
    box-shadow: 2px 4px 0px #B5B2B2;
    text-align: center;
`,Te=c.label`
    flex-direction: column;
    display: flex;
`,Ce=c.div`
    width: ${e=>e.width||"100%"};
`,Q={nickname:"",questionAmount:5,difficulty:"easy",theme:""},W=P({name:"settings",initialState:Q,reducers:{setNickname:(e,t)=>{e.nickname=t.payload},setQuestionAmount:(e,t)=>{const o=parseInt(t.payload,10);e.questionAmount=o>20?20:o},setDifficulty:(e,t)=>{e.difficulty=t.payload},setTheme:(e,t)=>{e.theme=parseInt(t.payload,10)},resetSettings:()=>Q}}),{setNickname:Le,setQuestionAmount:z,setDifficulty:$e,resetSettings:Ne,setTheme:_e}=W.actions;var Re=W.reducer;function M({width:e,type:t="text",label:o}){const a=v(),r=b(({settings:s})=>t==="text"?s.nickname:s.questionAmount);return n(Ce,{width:e,children:l(Te,{children:[o,n(Ie,{value:r,onChange:{text:({target:s})=>{a(Le(s.value))},number:({target:s})=>{s.value>20?a(z(20)):a(z(s.value))}}[t],type:t,max:"20"})]})})}const Ae=c.select`
    background-color: white;
    font-size: 1.2rem;
    border-radius: 10px;
    height: 50px;
    border: 0.5px solid black;
    box-shadow: 2px 4px 0px #B5B2B2;
    text-align: center;
    
`,Ee=c.label`
    flex-direction: column;
    display: flex;
`,Oe=c.div`
    width: ${e=>e.width||"100%"};
`;function B({children:e,action:t,label:o,width:a}){const r=v();return n(Oe,{width:a,children:l(Ee,{children:[o,n(Ae,{onChange:({target:s})=>{r(t(s.value.toLowerCase()))},children:e})]})})}const qe=c.div`
    width: 350px;
    position: relative;
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > * {
        margin-bottom: 1.2rem;
    }
    @media screen and (min-height: 660px) and (max-width: 500px){
        margin-top: 35vh;
        margin-bottom: 5vh;
        /* thix fix a bug of settings div overlaping the title. */
    }
`;c.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
`;c.div`
    p {
        font-size: 0.9rem;
        font-weight: 250;
    }
`;const D={list:[],total:0},F=P({name:"questions",initialState:D,reducers:{addQuestions:(e,t)=>{e.list.push(...t.payload)},setAnswer:(e,t)=>{const o=q(e.list).map((a,r)=>r!==t.payload.questionIndex?a:L(C({},a),{chosen_answer:t.payload.chosenAnswer||"",isLocked:!0}));e.list=o},setPoints:(e,t)=>{const o={easy:8,medium:10,hard:15},a=q(e.list).map((r,i)=>{if(i!==t.payload.questionIndex)return r;const{remainingSeconds:s}=t.payload,{chosen_answer:u,correct_answer:g}=r;return L(C({},r),{points:u===g?s*o[r.difficulty]:0})});e.list=a,e.total=e.list.reduce((r,i)=>r+i.points,0)},resetQuestions:()=>D}}),{addQuestions:Qe,setAnswerAndPoints:vt,resetQuestions:ze,setAnswer:H,setPoints:Me}=F.actions;var Be=F.reducer;function A(e,t){const[o,a]=p.exports.useState(()=>{if(typeof window=="undefined")return t;try{const i=window.localStorage.getItem(e);return i?JSON.parse(i):t}catch(i){return console.log(i),t}});return[o,i=>{try{const s=i instanceof Function?i(o):i;a(s),typeof window!="undefined"&&window.localStorage.setItem(e,JSON.stringify(s))}catch(s){console.log(s)}}]}const De=j`
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
`,Pe=c.div`
    margin: auto;
    display: inline-block;
    width: 80px;
    height: 80px;
    &::after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid black;
        border-color: black transparent black transparent;
        animation: ${De} 1.2s linear infinite;
    }
`;function G(){return n(m,{children:n(Pe,{})})}function je(e){for(let t=e.length-1;t>0;t-=1){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e}function We(e){const t=document.createElement("textarea");t.innerHTML=e.question,e.question=t.value,t.innerHTML=e.correct_answer,e.correct_answer=t.value,e.scrambled_answers.forEach((o,a)=>{t.innerHTML=o,e.scrambled_answers[a]=t.value})}function Fe(e){return e.forEach(t=>{t.category=t.category.replace(/(Science: |Entertainment: )/,""),t.points=0,t.chosen_answer="",t.scrambled_answers=je([t.correct_answer,...t.incorrect_answers]),t.isLocked=!1,We(t)}),e}function He(){const e=v(),t=b(h=>h.settings),{data:o,isLoading:a,isError:r}=re("themes",ve),[i,s]=A("token",!1),[u,g]=p.exports.useState(!1),[k,y]=p.exports.useState(!1),T=async()=>{const h=await Se(t,i.value),w=Fe(h);e(Qe(w))};return p.exports.useEffect(()=>{e(ze()),e(Ne());const h=new Date,w=216e5;(!i||h.getTime()>i.expiration)&&we().then(K=>s({value:K,expiration:h.getTime()+w}))},[]),p.exports.useEffect(()=>{const h=t.nickname.length>=5,w=t.questionAmount>=5;g(w),y(h)},[t]),a?l(m,{children:[n(x,{normalText:"Quiz",highlightedText:"Game"}),n(G,{})]}):r?l(m,{children:[n(x,{normalText:"Quiz",highlightedText:"Game"}),n("h1",{children:"Algo deu errado..."})]}):l(m,{children:[n(x,{normalText:"Quiz",highlightedText:"Game"}),l(qe,{children:[n(M,{label:"Nickname"}),n(M,{label:"Question amount",type:"number",width:"48%"}),l(B,{label:"Difficulty",action:$e,width:"48%",children:[n("option",{children:"Easy"}),n("option",{children:"Medium"}),n("option",{children:"Hard"})]}),l(B,{label:"Theme",action:_e,children:[n("option",{children:"Any"}),o.map(h=>n("option",{value:h.id,children:h.name},h.id))]}),n(f,{disabled:!(u&&k),extraStyle:{width:"60vw","max-width":"250px","font-size":"1.5rem",height:"70px"},clickCallback:T,navigationLink:"/question/1",children:"Start game"})]})]})}const Ge=c.div`
    position: absolute;
    top: 2rem;
    left: 1rem;
    transition: 1s ease;
`;function Ue(){const e=b(t=>t.questions.total);return l(Ge,{children:["Current score:",` ${e}`]})}const Je="510px";var I={desktop:Je};const Ve=c.button`
    color: white;
    // not sure if this is the best way to do it
    background-color: ${e=>e.isLocked?e.isRight?"green":"red":"blue"};
    width: 200px;
    border-radius: 2px;
    padding: 10px;
    pointer-events: ${e=>e.isLocked?"none":"auto"};
    transition: 200ms ease-in-out;
    @media screen and (min-width: ${I.desktop}){
      width: 100%;
    }
`;function U({option:e,isRight:t,isLocked:o,questionIndex:a}){const r=v();return n(Ve,{isLocked:o,isRight:t,onClick:()=>{r(H({questionIndex:a,chosenAnswer:e}))},children:e})}U.propTypes={option:d.string,isRight:d.bool,isLocked:d.bool,questionIndex:d.string}.isRequired;const Xe=j`
    0% {
        background-color: green;
        width: 100%;
    }
    50% {
        background-color: yellow;
        width: 60%;
    }
    70% {
        background-color: orange;
        width: 30%;
    }
    100% {
        width: 0;
    }
`,Ke=c.div`
    width: 100%;
    height: 25px;
    border-radius: 25px;
    overflow: hidden;
    background-color: grey;
    @media screen and (min-width: ${I.desktop}){
      width: 70%;
    }
`,Ye=c.div`
    background-color: red;
    height: 100%;
    border-radius: 25px;
    animation: ${Xe} ${e=>`${e.duration}s`} linear;
    animation-play-state: ${e=>e.stopCounter&&"paused"};
`;function J({questionIndex:e}){const o=v(),a=b(u=>u.questions.list[e].isLocked),[r,i]=p.exports.useState(25),s=p.exports.useRef(null);return p.exports.useEffect(()=>{clearInterval(s.current),r!==25&&i(25);const u=1e3;return s.current=setInterval(()=>{i(g=>g-1)},u),()=>clearInterval(s.current)},[e]),p.exports.useEffect(()=>{(a||!r)&&clearInterval(s.current),r||o(H({questionIndex:e,chosenAnswer:"skipped"})),a&&o(Me({remainingSeconds:r,questionIndex:e}))},[a,r,o,e]),n(Ke,{children:n(Ye,{stopCounter:a,duration:25})},e)}J.propTypes={questionIndex:d.string}.isRequired;const Ze=c.button`
    width: 100px;
    padding: 10px;
    border-radius: 2px;
    color: white;
    background-color: blue;
    transition: 200ms;
    &:disabled {
        opacity: 0.5;
        background-color: grey;
    }
`;function V({children:e,handleClick:t,isLocked:o}){return n(Ze,{onClick:t,disabled:!o,children:e})}V.propTypes={children:d.string,handleClick:d.func,isLocked:d.bool}.isRequired;const et=c.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-template-rows: repeat(2, 70px);
  grid-row-gap: 50px;
  grid-column-gap: 100px;
`;function tt(){const{id:e}=ie(),t=N(),o=b(y=>y.questions.list),a=e-1,r=o[a];if(p.exports.useEffect(()=>{e>1&&e>o.length&&t("/my-score")},[e,t,o]),!r)return n(G,{});const{question:i,category:s,scrambled_answers:u,correct_answer:g,isLocked:k}=r;return l(m,{children:[n(Ue,{}),n("h1",{children:s}),n(J,{questionIndex:a}),n("h2",{children:i}),n(et,{children:u.map((y,T)=>n(U,{questionIndex:a,isLocked:k,option:y,isRight:y===g},`question-${T}`))}),n(V,{handleClick:()=>t(`/question/${parseInt(e,10)+1}`),isLocked:k,type:"button",children:"Next"})]})}const nt=c.button`
    width: 50px;
    height: 10px;
    position: absolute;
    z-index: 1000;
    right: 1rem;
    top: 2rem;
    background-color: black;
    
    &::before, &::after {
        background-color: black;
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 10px;
    }

    &::before{
        top: -15px;
    }

    &::after{
        bottom: -15px;
    }

    @media screen and (min-width: ${I.desktop}){
        display: none;
    }
`,ot=c.div`
    align-items: center;
    display: flex;
    transition: 500ms;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    visibility: ${e=>e.show?"visible":"hidden"};
    opacity: ${e=>e.show?"1":"0"};
    z-index: 100;

    @media screen and (min-width: ${I.desktop}){
        visibility: visible;
        opacity: 1;
        left: 200px;
        bottom: 0;
        align-items: flex-start;
        width: auto;
        height: auto;
        &::after {
            content: '';
            width: 3px;
            height: 50px;
            background-color: black;
            margin: 0 auto;
            display: block;
        }
    }
`,$=c.img`
    width: 60px;
    display: block;
    margin-bottom: 20px;
    transition: 100ms;
    &:hover {
        transform: scale(1.1);
    }
    
    @media screen and (min-width: ${I.desktop}){
        width: 40px;
        margin-bottom: 1.5rem;
    }
`,rt=c.div`
    & ~ main {
        transition: 200ms;
        filter: ${e=>e.showContacts?"blur(2px)":""};
    }
`;var it="/quiz-app/assets/github.a5bb223f.svg",st="/quiz-app/assets/linkedin.32c99aaa.svg",at="/quiz-app/assets/email.736fc456.svg";function ct(){const[e,t]=p.exports.useState(!1);return l(rt,{showContacts:e,children:[n(nt,{onClick:()=>{t(a=>!a)}}),l(ot,{show:e,children:[n("a",{href:"mailto: dusdoom.dev@gmail.com",target:"_blank",rel:"noreferrer",children:n($,{src:at,alt:"Email"})}),n("a",{href:"//https://www.linkedin.com/in/marcosestevaobs/",target:"_blank",rel:"noreferrer",children:n($,{src:st,alt:"Linkedin profile"})}),n("a",{href:"//https://github.com/marcosebsilva",target:"_blank",rel:"noreferrer",children:n($,{src:it,alt:"Github profile"})})]})]})}const lt=c.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-weight: 250;
    i {
        font-weight: 900;
        font-style: normal;
    }
`;function dt(){return l(lt,{children:["Made by",n("i",{children:"Marcos Silva"})]})}const ut=c.a`
  display: none;
  @media screen and (min-width: 500px){
    transform: rotate(90deg);
    font-size: 25px;
    /* needs to be negative thanks to the rotation */
    right: -100px;
    transition: 200ms;
    top: 50%;
    position: absolute;
    display: block;
    &:hover {
      transform: scale(1.1) rotate(90deg);
      color: red;
    }
  }
`;function ht(){return n(ut,{children:"What did you learned here ?"})}const pt=c.h1`
    color: ${_["default-pink"]};
    font-size: 4.5rem;
`,mt=c.h2`
    font-style: italic;
    color: black;
`;c.p`
    color: green;
    text-align: center;
    i {
        color: blue;
        font-style: normal;
    }
`;function gt(){const e=b(r=>r.questions.list.length?{nickname:r.settings.nickname,score:r.questions.total}:null),[t,o]=A("ranking",null),a=N();return p.exports.useEffect(()=>{if(!e)return a("/");if(!t)return o([e]);const r=t.find(i=>i.nickname===e.nickname);if(!r)return o([...t,e]);if(e.score>r.score){const i=t.map(s=>s.nickname===e.nickname?{nickname:s.nickname,score:e.score}:s);i.sort((s,u)=>u.score-s.score),o(i)}return()=>console.log("redirected...")},[]),e?l(m,{children:[n(mt,{children:"Total Score:"}),n(pt,{children:e.score}),n(f,{navigationLink:"/ranking",extraStyle:{"font-size":"1.5rem",color:"black","background-color":"white",border:"1px solid black"},children:"Ranking"}),n(f,{extraStyle:{"font-size":"1.5rem"},navigationLink:"/settings",children:"Play again"})]}):n("p",{children:"Redirecting..."})}const ft=c.table`
    & th {
        color: green;
    }
    border-spacing: 20px;
`;function X({ranking:e}){return n(ft,{children:l("tbody",{children:[l("tr",{children:[n("th",{children:"Position"}),n("th",{children:"Nickname"}),n("th",{children:"Score"})]}),e.map((t,o)=>l("tr",{children:[n("td",{children:o+1}),n("td",{children:t.nickname}),n("td",{children:t.score})]},`player-${o}`))]})})}X.propTypes={ranking:d.arrayOf(Object).isRequired};function xt(){const[e]=A("ranking",null);return e?l(m,{children:[n(x,{highlightedText:"Ranking"}),n(X,{ranking:e}),n(f,{extraStyle:{"font-size":"1.5rem"},navigationLink:"/",children:"Home"})]}):l(m,{children:[n(x,{highlightedText:"Ranking"}),n("p",{children:"Your ranking is empty, go play some games!"}),n(f,{extraStyle:{"font-size":"1.5rem"},navigationLink:"/",children:"Home"})]})}function yt(){return l(se,{children:[n(ct,{}),n(ht,{}),l(ae,{children:[n(S,{path:"/",element:n(ke,{})}),n(S,{path:"/ranking",element:n(xt,{})}),n(S,{path:"/settings",element:n(He,{})}),n(S,{path:"/question/:id",element:n(tt,{})}),n(S,{path:"/my-score",element:n(gt,{})})]}),n(dt,{children:"Made by Marcos Silva"})]})}const bt=ce({reducer:{settings:Re,questions:Be}}),kt=new le;de.render(n(ue.StrictMode,{children:n(he,{client:kt,children:n(pe,{children:n(me,{store:bt,children:n(yt,{})})})})}),document.getElementById("root"));
