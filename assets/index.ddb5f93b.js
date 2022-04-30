var Y=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var A=(e,t,o)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,C=(e,t)=>{for(var o in t||(t={}))te.call(t,o)&&A(e,o,t[o]);if(E)for(var o of E(t))ne.call(t,o)&&A(e,o,t[o]);return e},$=(e,t)=>Z(e,ee(t));import{s as c,P as d,u as N,j as n,a as l,b as oe,c as P,d as v,e as k,D as z,r as p,U as j,f as re,g as ie,F as se,R as ae,h as b,i as ce,Q as le,k as de,l as ue,m as he,B as pe,n as me}from"./vendor.0e1eee22.js";const ge=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}};ge();var _={"default-pink":"#FD28C1"};const fe=e=>Object.entries(e).map(o=>o.join(": ")).join(`;
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
`;function f(e){const t=N(),{extraStyle:o,textShadowColor:a,clickCallback:r,navigationLink:i,children:s,disabled:u}=e;return n(xe,{extraStyle:o,textShadowColor:a,onClick:()=>{r&&r(),t(i)},disabled:u,children:s})}f.propTypes={extraStyle:d.objectOf(String),textShadowColor:d.string,clickCallback:d.func,navigationLink:d.string,title:d.string,disabled:d.bool}.isRequired;const be=c.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: auto;
    padding: 10px;
`;function m({children:e}){return n(be,{children:e})}m.propTypes={children:d.node}.isRequired;const ye=c.h1`
    font-size: 5rem;
    font-weight: 250;
    position: absolute;
    top: 15vh;
    i {
      color: #FD28C1;
      font-style: normal;
      font-weight: 900;
    }
`;function y({normalText:e,highlightedText:t}){return l(ye,{children:[e,n("i",{children:t})]})}y.propTypes={normalText:d.string,highlightedText:d.string}.isRequired;function ke(){return l(m,{children:[n(y,{normalText:"Quiz",highlightedText:"Game"}),n(f,{navigationLink:"settings",children:"Play"}),n(f,{extraStyle:{width:"60vw","max-width":"300px","font-size":"1.5rem",height:"50px","background-color":_["default-pink"]},navigationLink:"ranking",children:"Ranking"})]})}const R=oe.create({baseURL:"https://opentdb.com/",timeout:1500}),we=async()=>{try{const{data:e}=await R.get("api_token.php?command=request");return e.token}catch(e){return e.message}},Se=async(e,t)=>{const{questionAmount:o,difficulty:a,theme:r}=e;try{const i=`api.php?amount=${o}&category=${r}&difficulty=${a}&token${t}`,{data:s}=await R.get(i);return s.results}catch(i){return i.message}},ve=async()=>{try{const e="api_category.php",{data:t}=await R.get(e);return t.trivia_categories}catch(e){return e.message}},Ie=c.input`
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
`,O={nickname:"",questionAmount:5,difficulty:"easy",theme:""},F=P({name:"settings",initialState:O,reducers:{setNickname:(e,t)=>{e.nickname=t.payload},setQuestionAmount:(e,t)=>{const o=parseInt(t.payload,10);e.questionAmount=o>20?20:o},setDifficulty:(e,t)=>{e.difficulty=t.payload},setTheme:(e,t)=>{e.theme=parseInt(t.payload,10)},resetSettings:()=>O}}),{setNickname:$e,setQuestionAmount:Q,setDifficulty:Le,resetSettings:Ne,setTheme:_e}=F.actions;var Re=F.reducer;function M({width:e,type:t="text",label:o}){const a=v(),r=k(({settings:s})=>t==="text"?s.nickname:s.questionAmount);return n(Ce,{width:e,children:l(Te,{children:[o,n(Ie,{value:r,onChange:{text:({target:s})=>{a($e(s.value))},number:({target:s})=>{s.value>20?a(Q(20)):a(Q(s.value))}}[t],type:t,max:"20"})]})})}const qe=c.select`
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
`,Ae=c.div`
    width: ${e=>e.width||"100%"};
`;function B({children:e,action:t,label:o,width:a}){const r=v();return n(Ae,{width:a,children:l(Ee,{children:[o,n(qe,{onChange:({target:s})=>{r(t(s.value.toLowerCase()))},children:e})]})})}const ze=c.div`
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
`;const D={list:[],total:0},W=P({name:"questions",initialState:D,reducers:{addQuestions:(e,t)=>{e.list.push(...t.payload)},setAnswer:(e,t)=>{const o=z(e.list).map((a,r)=>r!==t.payload.questionIndex?a:$(C({},a),{chosen_answer:t.payload.chosenAnswer||"",isLocked:!0}));e.list=o},setPoints:(e,t)=>{const o={easy:8,medium:10,hard:15},a=z(e.list).map((r,i)=>{if(i!==t.payload.questionIndex)return r;const{remainingSeconds:s}=t.payload,{chosen_answer:u,correct_answer:g}=r;return $(C({},r),{points:u===g?s*o[r.difficulty]:0})});e.list=a,e.total=e.list.reduce((r,i)=>r+i.points,0)},resetQuestions:()=>D}}),{addQuestions:Oe,setAnswerAndPoints:wt,resetQuestions:Qe,setAnswer:G,setPoints:Me}=W.actions;var Be=W.reducer;function q(e,t){const[o,a]=p.exports.useState(()=>{if(typeof window=="undefined")return t;try{const i=window.localStorage.getItem(e);return i?JSON.parse(i):t}catch(i){return console.log(i),t}});return[o,i=>{try{const s=i instanceof Function?i(o):i;a(s),typeof window!="undefined"&&window.localStorage.setItem(e,JSON.stringify(s))}catch(s){console.log(s)}}]}const De=j`
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
`;function H(){return n(m,{children:n(Pe,{})})}function je(e){for(let t=e.length-1;t>0;t-=1){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e}function Fe(e){const t=document.createElement("textarea");t.innerHTML=e.question,e.question=t.value,t.innerHTML=e.correct_answer,e.correct_answer=t.value,e.scrambled_answers.forEach((o,a)=>{t.innerHTML=o,e.scrambled_answers[a]=t.value})}function We(e){return e.forEach(t=>{t.category=t.category.replace(/(Science: |Entertainment: )/,""),t.points=0,t.chosen_answer="",t.scrambled_answers=je([t.correct_answer,...t.incorrect_answers]),t.isLocked=!1,Fe(t)}),e}function Ge(){const e=v(),t=k(h=>h.settings),{data:o,isLoading:a,isError:r}=re("themes",ve),[i,s]=q("token",!1),[u,g]=p.exports.useState(!1),[w,x]=p.exports.useState(!1),T=async()=>{const h=await Se(t,i.value),S=We(h);e(Oe(S))};return p.exports.useEffect(()=>{e(Qe()),e(Ne());const h=new Date,S=216e5;(!i||h.getTime()>i.expiration)&&we().then(K=>s({value:K,expiration:h.getTime()+S}))},[]),p.exports.useEffect(()=>{const h=t.nickname.length>=5,S=t.questionAmount>=5;g(S),x(h)},[t]),a?l(m,{children:[n(y,{normalText:"Quiz",highlightedText:"Game"}),n(H,{})]}):r?l(m,{children:[n(y,{normalText:"Quiz",highlightedText:"Game"}),n("h1",{children:"Algo deu errado..."})]}):l(m,{children:[n(y,{normalText:"Quiz",highlightedText:"Game"}),l(ze,{children:[n(M,{label:"Nickname"}),n(M,{label:"Question amount",type:"number",width:"48%"}),l(B,{label:"Difficulty",action:Le,width:"48%",children:[n("option",{children:"Easy"}),n("option",{children:"Medium"}),n("option",{children:"Hard"})]}),l(B,{label:"Theme",action:_e,children:[n("option",{children:"Any"}),o.map(h=>n("option",{value:h.id,children:h.name},h.id))]}),n(f,{disabled:!(u&&w),extraStyle:{width:"60vw","max-width":"250px","font-size":"1.5rem",height:"70px"},clickCallback:T,navigationLink:"/quiz-game/question/1",children:"Start game"})]})]})}const He=c.div`
    position: absolute;
    top: 2rem;
    left: 1rem;
    transition: 1s ease;
`;function Ue(){const e=k(t=>t.questions.total);return l(He,{children:["Current score:",` ${e}`]})}const Je="510px";var I={desktop:Je};const Ve=c.button`
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
`;function U({option:e,isRight:t,isLocked:o,questionIndex:a}){const r=v();return n(Ve,{isLocked:o,isRight:t,onClick:()=>{r(G({questionIndex:a,chosenAnswer:e}))},children:e})}U.propTypes={option:d.string,isRight:d.bool,isLocked:d.bool,questionIndex:d.string}.isRequired;const Xe=j`
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
`;function J({questionIndex:e}){const o=v(),a=k(u=>u.questions.list[e].isLocked),[r,i]=p.exports.useState(25),s=p.exports.useRef(null);return p.exports.useEffect(()=>{clearInterval(s.current),r!==25&&i(25);const u=1e3;return s.current=setInterval(()=>{i(g=>g-1)},u),()=>clearInterval(s.current)},[e]),p.exports.useEffect(()=>{(a||!r)&&clearInterval(s.current),r||o(G({questionIndex:e,chosenAnswer:"skipped"})),a&&o(Me({remainingSeconds:r,questionIndex:e}))},[a,r,o,e]),n(Ke,{children:n(Ye,{stopCounter:a,duration:25})},e)}J.propTypes={questionIndex:d.string}.isRequired;const Ze=c.button`
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
`;function tt(){const{id:e}=ie(),t=N(),o=k(x=>x.questions.list),a=e-1,r=o[a];if(p.exports.useEffect(()=>{e>1&&e>o.length&&t("/quiz-game/my-score")},[e,t,o]),!r)return n(H,{});const{question:i,category:s,scrambled_answers:u,correct_answer:g,isLocked:w}=r;return l(m,{children:[n(Ue,{}),n("h1",{children:s}),n(J,{questionIndex:a}),n("h2",{children:i}),n(et,{children:u.map((x,T)=>n(U,{questionIndex:a,isLocked:w,option:x,isRight:x===g},`question-${T}`))}),n(V,{handleClick:()=>t(`/quiz-game/question/${parseInt(e,10)+1}`),isLocked:w,type:"button",children:"Next"})]})}const nt=c.button`
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
`,L=c.img`
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
`;var it="/quiz-game/assets/github.a5bb223f.svg",st="/quiz-game/assets/linkedin.32c99aaa.svg",at="/quiz-game/assets/email.736fc456.svg";function ct(){const[e,t]=p.exports.useState(!1);return l(rt,{showContacts:e,children:[n(nt,{onClick:()=>{t(a=>!a)}}),l(ot,{show:e,children:[n("a",{href:"mailto: dusdoom.dev@gmail.com",target:"_blank",rel:"noreferrer",children:n(L,{src:at,alt:"Email"})}),n("a",{href:"//https://www.linkedin.com/in/marcosestevaobs/",target:"_blank",rel:"noreferrer",children:n(L,{src:st,alt:"Linkedin profile"})}),n("a",{href:"//https://github.com/marcosebsilva",target:"_blank",rel:"noreferrer",children:n(L,{src:it,alt:"Github profile"})})]})]})}const lt=c.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-weight: 250;
    i {
        font-weight: 900;
        font-style: normal;
    }
`;function dt(){return l(lt,{children:["Made by",n("i",{children:"Marcos Silva"})]})}const ut=c.h1`
    color: ${_["default-pink"]};
    font-size: 4.5rem;
`,ht=c.h2`
    font-style: italic;
    color: black;
`;c.p`
    color: green;
    text-align: center;
    i {
        color: blue;
        font-style: normal;
    }
`;function pt(){const e=k(r=>r.questions.list.length?{nickname:r.settings.nickname,score:r.questions.total}:null),[t,o]=q("ranking",null),a=N();return p.exports.useEffect(()=>{if(!e)return a("/");if(!t)return o([e]);const r=t.find(i=>i.nickname===e.nickname);if(!r)return o([...t,e]);if(e.score>r.score){const i=t.map(s=>s.nickname===e.nickname?{nickname:s.nickname,score:e.score}:s);i.sort((s,u)=>u.score-s.score),o(i)}return()=>console.log("redirected...")},[]),e?l(m,{children:[n(ht,{children:"Total Score:"}),n(ut,{children:e.score}),n(f,{navigationLink:"/quiz-game/ranking",extraStyle:{"font-size":"1.5rem",color:"black","background-color":"white",border:"1px solid black"},children:"Ranking"}),n(f,{extraStyle:{"font-size":"1.5rem"},navigationLink:"/quiz-game/settings",children:"Play again"})]}):n("p",{children:"Redirecting..."})}const mt=c.table`
    & th {
        color: green;
    }
    border-spacing: 20px;
`;function X({ranking:e}){return n(mt,{children:l("tbody",{children:[l("tr",{children:[n("th",{children:"Position"}),n("th",{children:"Nickname"}),n("th",{children:"Score"})]}),e.map((t,o)=>l("tr",{children:[n("td",{children:o+1}),n("td",{children:t.nickname}),n("td",{children:t.score})]},`player-${o}`))]})})}X.propTypes={ranking:d.arrayOf(Object).isRequired};function gt(){const[e]=q("ranking",null);return l(m,{children:[n(y,{highlightedText:"Ranking"}),e?n(X,{ranking:e}):n("p",{children:"Your ranking is empty, go play some games!"}),n(f,{extraStyle:{"font-size":"1.5rem"},navigationLink:"/quiz-game",children:"Home"})]})}function ft(){return l(se,{children:[n(ct,{}),n(ae,{children:l(b,{path:"/quiz-game",children:[n(b,{index:!0,element:n(ke,{})}),n(b,{path:"ranking",element:n(gt,{})}),n(b,{path:"settings",element:n(Ge,{})}),n(b,{path:"question/:id",element:n(tt,{})}),n(b,{path:"my-score",element:n(pt,{})})]})}),n(dt,{children:"Made by Marcos Silva"})]})}const xt=ce({reducer:{settings:Re,questions:Be}}),bt=new le;de.render(n(ue.StrictMode,{children:n(he,{client:bt,children:n(pe,{children:n(me,{store:xt,children:n(ft,{})})})})}),document.getElementById("root"));
