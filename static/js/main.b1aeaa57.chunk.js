(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e){e.exports={GOOGLE_CLIENT_ID:"905403463410-otbpoc8a6gvcmmg8dl9d3qbmd771tqtr.apps.googleusercontent.com",YOUTUBE_API_KEY:"AIzaSyCAYhEQN-ujl_-vI_1Ggojf9mYWV9sZRnI"}},213:function(e,t,a){},225:function(e,t,a){},245:function(e,t,a){e.exports=a.p+"static/media/1.3ee16d09.md"},246:function(e,t,a){e.exports=a.p+"static/media/1cpp.204572dd.md"},247:function(e,t,a){e.exports=a.p+"static/media/1.2521b81c.md"},248:function(e,t,a){e.exports=a.p+"static/media/test1.75250e6a.md"},249:function(e,t,a){e.exports=a.p+"static/media/submit1.00ff6f5c.md"},250:function(e,t,a){e.exports=a.p+"static/media/1.1.7975c67a.md"},251:function(e,t,a){e.exports=a.p+"static/media/1.2.2fb15148.md"},252:function(e,t,a){e.exports=a.p+"static/media/1.3.6e3c73f9.md"},253:function(e,t,a){e.exports=a.p+"static/media/submit2.6911ec65.md"},254:function(e,t,a){e.exports=a.p+"static/media/2.1.5678c59a.md"},255:function(e,t,a){e.exports=a.p+"static/media/2.2.b73b0d59.md"},256:function(e,t,a){e.exports=a.p+"static/media/2.3.43882c71.md"},257:function(e,t,a){e.exports=a.p+"static/media/2.4.3c108c45.md"},258:function(e,t,a){e.exports=a.p+"static/media/2.5.b5633bde.md"},259:function(e,t,a){e.exports=a.p+"static/media/2.6.ab5cd2ce.md"},260:function(e,t,a){e.exports=a.p+"static/media/2.8c4ba10c.md"},261:function(e,t,a){e.exports=a.p+"static/media/2.20764833.md"},262:function(e,t,a){e.exports=a.p+"static/media/test2.00975d57.md"},263:function(e,t,a){e.exports=a.p+"static/media/submit3.d5d7a9ee.md"},264:function(e,t,a){e.exports=a.p+"static/media/3.1.1950e5d8.md"},265:function(e,t,a){e.exports=a.p+"static/media/3.2.f81870bd.md"},266:function(e,t,a){e.exports=a.p+"static/media/3.3.bcb764ca.md"},267:function(e,t,a){e.exports=a.p+"static/media/3.4.c1b2a76d.md"},268:function(e,t,a){e.exports=a.p+"static/media/3.5.2482fd50.md"},269:function(e,t,a){e.exports=a.p+"static/media/3.6.20e13ca8.md"},270:function(e,t,a){e.exports=a.p+"static/media/3.eab4de77.md"},271:function(e,t,a){e.exports=a.p+"static/media/3.c29e5ffa.md"},272:function(e,t,a){e.exports=a.p+"static/media/test3.c0f5c902.md"},275:function(e,t,a){e.exports=a.p+"static/media/founder.ab533aed.jpg"},286:function(e,t,a){e.exports=a(573)},291:function(e,t,a){},311:function(e,t){},313:function(e,t){},489:function(e,t,a){},525:function(e,t,a){e.exports=a.p+"static/media/theme.77c2d2ac.png"},526:function(e,t,a){},529:function(e,t,a){},573:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(9),s=a.n(i),o=(a(291),a(10)),l=a(11),r=a(13),u=a(12),m=a(14),d=a(3),p=a(54),h=(a(298),a(156)),b=a.n(h),f=a(7),v=a(20),E=a.n(v),g=(a(409),a(101),a(106)),k=a.n(g),y=(a(140),a(141),a(108)),j=(a(139),a(417),a(418),a(419),a(420),a(421),a(422),a(423),a(424),a(425),a(426),a(84)),O=a.n(j),C=a(109),N=a.n(C),x=(a(198),a(17)),S=(a(199),a(162)),w=a.n(S),L=(a(486),a(213),a(489),a(163)),I=a.n(L),A=a(49),T=a.n(A),B=a(86),z=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).state={show:!1,judge:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.judge).then(function(e){return e.text()}).then(function(t){e.setState({judge:t})})}},{key:"componentDidUpdate",value:function(e,t){var a=this;e.judge!=this.props.judge&&fetch(this.props.judge).then(function(e){return e.text()}).then(function(e){a.setState({judge:e})})}},{key:"render",value:function(){var e=this,t=c.a.createElement(x.a,{onClick:function(){e.setState({show:!0})}},"this");return 1==this.props.bstate&&(t=c.a.createElement(x.a,{onClick:function(){e.setState({show:!0})},className:"btn-secondary",style:{marginLeft:"3%",marginBottom:"10px"}},"Test",this.props.index)),2==this.props.bstate&&(t=c.a.createElement(x.a,{onClick:function(){e.setState({show:!0})},className:"btn-success",style:{marginLeft:"3%",marginBottom:"10px"}},"O")),3==this.props.bstate&&(t=c.a.createElement(x.a,{onClick:function(){e.setState({show:!0})},className:"btn-danger",style:{marginLeft:"3%",marginBottom:"10px"}},"X")),c.a.createElement(c.a.Fragment,null,t,c.a.createElement(B.a,{size:"sm",show:this.state.show,onHide:function(){e.setState({show:!1})},"aria-labelledby":"example-modal-sizes-title-sm"},c.a.createElement(B.a.Header,{closeButton:!0},c.a.createElement(B.a.Title,{id:"example-modal-sizes-title-sm"},"Test ",this.props.index)),c.a.createElement(B.a.Body,null,this.state.judge)))}}]),t}(n.Component),M=a(244),_=a.n(M),D=function(){return c.a.createElement(_.a,{width:500,height:500})};(new Map).java=0;var F=["tomorrow","github","monokai","kuroir","twilight","xcode","textmate","solarized_light","solarized_dark","terminal"],U=["java"],V=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).state={mycode:"",status:0,output:"",loading:!1,summiting:!1,A:[],inputstate:!0,myinput:"",correct:!1,done:!1,theme:"solarized_light",mode:"java"},e.onchange=e.onchange.bind(Object(d.a)(Object(d.a)(e))),e.handleCompile=e.handleCompile.bind(Object(d.a)(Object(d.a)(e))),e.changeOutput=e.changeOutput.bind(Object(d.a)(Object(d.a)(e))),e.changeInput=e.changeInput.bind(Object(d.a)(Object(d.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e.inputstateChange=e.inputstateChange.bind(Object(d.a)(Object(d.a)(e))),e.select=e.select.bind(Object(d.a)(Object(d.a)(e))),e.selectLan=e.selectLan.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.code!=this.props.code&&fetch(this.props.content).then(function(e){return e.text()}).then(function(e){return a.setState({mycode:a.props.code,A:[],done:!1,output:""})})}},{key:"selectLan",value:function(e){this.setState({mode:e.value})}},{key:"select",value:function(e){this.setState({theme:e.value})}},{key:"inputstateChange",value:function(){var e=!this.state.inputstate;this.setState({inputstate:e})}},{key:"componentDidMount",value:function(){var e=this;fetch(this.props.judgecase[0]).then(function(e){return e.text()}).then(function(t){e.setState({mycode:e.props.code,myinput:t})})}},{key:"onchange",value:function(e){localStorage.setItem(this.props.name,e),this.setState({mycode:e})}},{key:"changeOutput",value:function(e){this.setState({output:e.target.value})}},{key:"changeInput",value:function(e){this.setState({myinput:e.target.value})}},{key:"handleCompile",value:function(){var e=this;this.setState({loading:!0}),T.a.post("https://frozen-atoll-01566.herokuapp.com/api/run",{lang:this.state.mode,code:this.state.mycode+this.props.test,input:this.state.myinput}).then(function(t){var a=t.data,n=parseInt(a.message.status);console.log(t),e.setState({status:n,output:a.message,loading:!1,inputstate:!1})})}},{key:"handleSubmit",value:function(){var e=this;this.setState({summiting:!0}),T.a.post("https://frozen-atoll-01566.herokuapp.com/api/submit",{lang:this.state.mode,code:this.state.mycode+this.props.submit}).then(function(t){var a=0,n=t.data,c=parseInt(n.message.status),i=n.message.split("\n"),s=!1,o=[],l=[],r=e.props.testcase;i.length<r&&(r=0);for(var u=i.length-1;u>=0;u--)0!=i[u].length&&(r>0?("t"==i[u].charAt(0)&&a++,o.push(i[u]),r--):l.push(i[u]));a==e.props.testcase?(s=!0,I()("Congratulation!").then(function(t){t&&e.setState({correct:!1})})):I()({text:"You are not YOUXIU enough!",icon:"warning",dangerMode:!0}),e.setState({status:c,output:l.reverse().join("\n"),summiting:!1,inputstate:!1,done:!0,A:o.reverse(),correct:s})})}},{key:"render",value:function(){var e=this,t=c.a.createElement(x.a,{className:"outline-primary"},c.a.createElement("i",{class:"fa fa-refresh fa-spin"})),a=c.a.createElement(x.a,{className:"btn-info",style:{marginLeft:"5%"}},c.a.createElement("i",{class:"fa fa-refresh fa-spin"}));this.state.inputstate?c.a.createElement(x.a,{className:"btn-success ",onClick:this.inputstateChange},"My output"):c.a.createElement(x.a,{className:"btn-success",onClick:this.inputstateChange},"Input");var n=c.a.createElement(O.a,null,c.a.createElement("textarea",{id:"textarea",className:"output",name:"code",type:"textarea",componentClass:"textarea",rows:"10",cols:"150",width:"30%",value:this.state.output,onChange:this.changeOutput,style:{backgroundColor:"#e6ffff"}}));this.state.inputstate&&(n=c.a.createElement(O.a,null,c.a.createElement("textarea",{id:"textarea",className:"output",name:"code",type:"textarea",componentClass:"textarea",rows:"10",cols:"150",width:"30%",style:{backgroundColor:"black",color:"white"},value:this.state.myinput,onChange:this.changeInput})));for(var i,s=[],o=0;o<this.props.testcase;o++)this.state.done?(null!=this.state.A[o]&&this.state.A[o].length>=1&&"t"==this.state.A[o].charAt(0)?s.push(c.a.createElement(z,{bstate:2,index:o,judge:this.props.judgecase[o]})):s.push(c.a.createElement(z,{bstate:3,index:o,judge:this.props.judgecase[o]})),o%6==0&&0!=o&&(s.push(c.a.createElement("br",null)),s.push(c.a.createElement("br",null)))):(s.push(c.a.createElement(z,{bstate:1,index:o,judge:this.props.judgecase[o]})),o%6==0&&0!=o&&(s.push(c.a.createElement("br",null)),s.push(c.a.createElement("br",null))));return this.state.loading||(t=this.state.summiting?c.a.createElement(x.a,{className:"outline-primary"},"Compile"):c.a.createElement(x.a,{className:"outline-primary",onClick:this.handleCompile},"Compile")),this.state.summiting||(a=this.state.loading?c.a.createElement(x.a,{className:"btn-info",style:{marginLeft:"5%"}},"Submit"):c.a.createElement(x.a,{className:"btn-info",style:{marginLeft:"5%"},onClick:this.handleSubmit},"Submit")),this.state.correct&&(i=c.a.createElement(D,null)),c.a.createElement("div",null,c.a.createElement(N.a,Object(y.a)({vertical:!0,primaryMinSize:75,percentage:!0},"primaryMinSize",60),c.a.createElement("div",null,i,s,c.a.createElement("br",null),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(w.a,{options:F,onChange:this.select,value:this.state.theme}),c.a.createElement(w.a,{options:U,onChange:this.selectLan,value:this.state.mode})),c.a.createElement(k.a,{height:1e3,width:1200,mode:this.state.mode,theme:this.state.theme,name:"blah2",onChange:this.onchange,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:this.state.mycode,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2}})),c.a.createElement("div",null,c.a.createElement("button",{className:this.state.inputstate?"depressed":"",style:{margin:"5px",backgroundColor:"pink"},onClick:function(){e.setState({inputstate:!0})}},"Test"),c.a.createElement("button",{className:this.state.inputstate?"":"depressed",style:{margin:"5px",backgroundColor:"pink"},onClick:function(){e.setState({inputstate:!1})}},"Output"),c.a.createElement("hr",{style:{height:"2px",borderWidth:"0",color:"grey","background-color":"grey"}}),n,c.a.createElement("br",null),t,a)))}}]),t}(n.Component),Y=(a(507),a(225),a(525),a(526),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).handleClick1=e.handleClick1.bind(Object(d.a)(Object(d.a)(e))),e.handleClick2=e.handleClick2.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick1",value:function(){this.props.history.push("/Leetcode-TutorialBlog/problems")}},{key:"handleClick2",value:function(){this.props.history.push("/Leetcode-TutorialBlog/course")}},{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"cols"},c.a.createElement("div",{className:"col",onClick:this.handleClick1},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Interview Coding Practice"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Practice the top popular coding interview question"))))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Online Assesment"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Mock online coding assesment"))))),c.a.createElement("div",{className:"col",onClick:this.handleClick2},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Algorithm Crash Course"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Video explanation with the most frequent use data structure and algorithm")))))))}}]),t}(n.Component)),P=Object(f.f)(Y),G=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).handleClick=e.handleClick.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.props.history.push("/Leetcode-TutorialBlog/problems")}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("div",{class:"overlay"},c.a.createElement("h1",null,"Welcome To 66 Code"),c.a.createElement("h3",null,"Prepare Your Coding Interview"),c.a.createElement("br",null),c.a.createElement("button",{onClick:this.handleClick},"About 66 Code")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(P,null)),c.a.createElement("br",null),c.a.createElement("hr",{style:{height:"2px",borderWidth:"0",color:"grey","background-color":"grey"}}))}}]),t}(n.Component),R=Object(f.f)(G),W=a(245),q=a.n(W),H=a(246),K=a.n(H),J=a(247),X=a.n(J),Q=a(248),Z=a.n(Q),$=a(249),ee=a.n($),te=a(250),ae=a.n(te),ne=a(251),ce=a.n(ne),ie=a(252),se=a.n(ie),oe=a(253),le=a.n(oe),re=a(254),ue=a.n(re),me=a(255),de=a.n(me),pe=a(256),he=a.n(pe),be=a(257),fe=a.n(be),ve=a(258),Ee=a.n(ve),ge=a(259),ke=a.n(ge),ye=a(260),je=a.n(ye),Oe=a(261),Ce=a.n(Oe),Ne=a(262),xe=a.n(Ne),Se=a(263),we=a.n(Se),Le=a(264),Ie=a.n(Le),Ae=a(265),Te=a.n(Ae),Be=a(266),ze=a.n(Be),Me=a(267),_e=a.n(Me),De=a(268),Fe=a.n(De),Ue=a(269),Ve=a.n(Ue),Ye=a(270),Pe=a.n(Ye),Ge=a(271),Re=a.n(Ge),We=a(272),qe=a.n(We),He=a(284),Ke=[[q.a,K.a],[Ce.a],[Re.a]],Je=[X.a,je.a,Pe.a],Xe=["Two Sum","Present From 66","Eating Chocolate"],Qe=[Z.a,xe.a,qe.a],Ze=[ee.a,le.a,we.a],$e=[3,6,6],et=[[ae.a,ce.a,se.a],[ue.a,de.a,he.a,fe.a,Ee.a,ke.a],[Ie.a,Te.a,ze.a,_e.a,Fe.a,Ve.a]],tt=[[0],[0],[0],[0],[0],[1,2]],at=[0,1,2],nt=["\u2b50","\u2b50\u2b50","\u2b50\u2b50\u2b50"],ct=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).handleClick1=e.handleClick1.bind(Object(d.a)(Object(d.a)(e))),e.solve=e.solve.bind(Object(d.a)(Object(d.a)(e))),e.state={main:!0,categoryIndex:0,practiceMode:!1,index:0},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleClick1",value:function(e){this.props.mode1(),this.setState({categoryIndex:e})}},{key:"solve",value:function(e){this.props.mode2(),this.setState({index:e})}},{key:"render",value:function(){var e,t=this,a=c.a.createElement("div",{className:"wrapper"},c.a.createElement("h1",null,"Our Topics :"),c.a.createElement(O.a,null,c.a.createElement("div",{className:"cols"},c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(0)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Arrays"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))),c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(1)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"List"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))),c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(2)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Tree"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null)))))),c.a.createElement("div",{className:"cols"},c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(3)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"DFS"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))),c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(4)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"BFS"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))),c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(5)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Math"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))))));if(1==this.props.mode){a="";var n=tt[this.state.categoryIndex];e=c.a.createElement("div",{style:{width:"75%"}},c.a.createElement(O.a,null,n.map(function(e){return c.a.createElement(He.a.Item,{action:!0,variant:"primary",key:e,style:{margin:"2%"},onClick:function(){t.solve(e)}},e+1," . ",Xe[e]," ",nt[at[e]])})))}var i=this.state.index;return c.a.createElement("div",{className:"div"},2==this.props.mode?c.a.createElement(it,{content:Ke[i][0],description:Je[i],name:Xe[i],test:Qe[i],index:i,submit:Ze[i],testcase:$e[i],input:et[i]}):[a,e])}}]),t}(n.Component),it=(n.Component,function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).state={markdown:"",editor:null,name:"Two Sum",description:"",test:"",submit:"",testcases:0,darktheme:!1},e.darkmode=e.darkmode.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"darkmode",value:function(){var e=this.state.darktheme;console.log(e),this.setState({darktheme:!e})}},{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem(this.props.name);null==t?fetch(this.props.content).then(function(e){return e.text()}).then(function(t){e.setState({markdown:t})}):this.setState({markdown:t}),fetch(this.props.description).then(function(e){return e.text()}).then(function(t){e.setState({description:t})}),fetch(this.props.test).then(function(e){return e.text()}).then(function(t){e.setState({test:t})}),fetch(this.props.submit).then(function(e){return e.text()}).then(function(t){e.setState({submit:t})})}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.content!=this.props.content){var n=localStorage.getItem(this.props.name);null==n?fetch(this.props.content).then(function(e){return e.text()}).then(function(e){a.setState({markdown:e})}):this.setState({markdown:n}),fetch(this.props.description).then(function(e){return e.text()}).then(function(e){a.setState({description:e})}),fetch(this.props.test).then(function(e){return e.text()}).then(function(e){a.setState({test:e})}),fetch(this.props.submit).then(function(e){return e.text()}).then(function(e){a.setState({submit:e})})}}},{key:"render",value:function(){this.state.markdown;return c.a.createElement("div",null,c.a.createElement("div",{style:{width:"95%","margin-left":"5%"}},c.a.createElement("div",{style:{margin:"3%",width:"45%"}},c.a.createElement(N.a,{primaryMinSize:35,percentage:!0},c.a.createElement("div",null,c.a.createElement("h2",{style:{width:"45%","margin-left":"45%"}}," ",this.props.name),c.a.createElement(b.a,{escapeHtml:!0,source:this.state.description})),c.a.createElement("div",{style:{width:"100%"}},c.a.createElement(V,{judgecase:this.props.input,testcase:this.props.testcase,code:this.state.markdown,test:this.state.test,submit:this.state.submit,name:this.props.name}),c.a.createElement("br",null))))))}}]),t}(n.Component)),st=Object(p.b)(function(e){return{mode:e.mode}},function(e){return{mode1:function(){return e({type:"mode1"})},mode2:function(){return e({type:"mode2"})}}})(Object(f.f)(ct)),ot=a(275),lt=a.n(ot),rt=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{class:"team-section text-center my-5"},c.a.createElement("h2",{class:"h1-responsive font-weight-bold my-5"},"Our amazing team"),c.a.createElement("div",{class:"row text-center"},c.a.createElement("div",{class:"col-md-4 mb-md-0 mb-5"},c.a.createElement("div",{class:"avatar mx-auto"},c.a.createElement("div",null,c.a.createElement("img",{src:lt.a,style:{height:"25%",width:"25%",borderRadius:"40%"}}))),c.a.createElement("h4",{class:"font-weight-bold dark-grey-text my-4"},"JunBin Liang"),c.a.createElement("h6",{class:"text-uppercase grey-text mb-3"},c.a.createElement("strong",null,"Founder and Software Engineer"))))))}}]),t}(n.Component),ut=(a(529),a(276)),mt=a.n(ut),dt=a(116),pt=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={videos:[],selectedVideo:null},a.onSearch=a.onSearch.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("mount"),this.onSearch("66brother tech")}},{key:"onSearch",value:function(e){var t=this;mt()({key:dt.YOUTUBE_API_KEY,term:e},function(e){console.log("vid ",e),t.setState({videos:e,selectedVideo:e[0]})})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"vedioContainer"},c.a.createElement(ft,{video:this.state.selectedVideo}),c.a.createElement(ht,{onVideoClick:function(t){return e.setState({selectedVideo:t})},videos:this.state.videos}))}}]),t}(n.Component),ht=function(e){var t=e.videos.map(function(t){return c.a.createElement(bt,{onVideoClick:e.onVideoClick,key:t.etag,video:t})});return c.a.createElement("ul",{className:"col-md-4 list-group"},t)},bt=function(e){return c.a.createElement("li",{onClick:function(){return e.onVideoClick(e.video)},className:"list-group-item"},c.a.createElement("div",{className:"video-list-media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("img",{className:"media-object",src:e.video.snippet.thumbnails.default.url}))),c.a.createElement("div",{className:"media-body"},c.a.createElement("div",{className:"media-heading"},e.video.snippet.title)))},ft=function(e){var t=e.video;return t?c.a.createElement("div",{className:"video-detail col-md-8"},c.a.createElement("div",{className:"details"},c.a.createElement("h2",null,t.snippet.title),c.a.createElement("div",null,t.snippet.description)),c.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},c.a.createElement("iframe",{className:"embeded-responsive-item",src:"https://youtube.com/embed/"+t.id.videoId}))):c.a.createElement("div",null,"loading!!")},vt=pt,Et=a(160),gt=a(73),kt=a(277),yt=(a(541),a(579)),jt=a(580),Ot=yt.a.SubMenu,Ct=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).handleClick1=e.handleClick1.bind(Object(d.a)(Object(d.a)(e))),e.handleClick2=e.handleClick2.bind(Object(d.a)(Object(d.a)(e))),e.handleClick3=e.handleClick3.bind(Object(d.a)(Object(d.a)(e))),e.googleResponse=e.googleResponse.bind(Object(d.a)(Object(d.a)(e))),e.onFailure=e.onFailure.bind(Object(d.a)(Object(d.a)(e))),e.logout=e.logout.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onFailure",value:function(){}},{key:"logout",value:function(){localStorage.setItem("token",""),console.log("logout"),this.props.logout()}},{key:"componentDidUpdate",value:function(){console.log("nav ",this.props.isAuthenticated)}},{key:"googleResponse",value:function(e){var t=this;console.log(e),T.a.post("https://frozen-atoll-01566.herokuapp.com/login",{code:e.tokenId}).then(function(e){console.log(e);var a=e.data.token,n=e.data.user;localStorage.setItem("token",a),t.props.setToken(a),t.props.loginSuccess(),console.log(a),console.log(n)})}},{key:"handleClick1",value:function(){this.props.history.push("/Leetcode-TutorialBlog/")}},{key:"handleClick2",value:function(){this.props.resetMode(),this.props.history.push("/Leetcode-TutorialBlog/problems")}},{key:"handleClick3",value:function(){this.props.history.push("/Leetcode-TutorialBlog/about")}},{key:"render",value:function(){var e=null,t=null;return this.props.isAuthenticated?t=c.a.createElement(yt.a,{style:{width:150},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"]},c.a.createElement(Ot,{key:"sub4",icon:c.a.createElement(jt.a,null),title:"66Bro"},c.a.createElement(yt.a.Item,null,"Setting"),c.a.createElement(yt.a.Item,{onClick:this.logout},"Logout"))):e=c.a.createElement(kt.GoogleLogin,{render:function(e){return c.a.createElement(gt.a.Link,{onClick:e.onClick,style:{color:"white",marginRight:"50px"}},"Login")},clientId:dt.GOOGLE_CLIENT_ID,buttonText:"Login",onSuccess:this.googleResponse,onFailure:this.onFailure,style:{padding:0,margin:0}}),c.a.createElement(c.a.Fragment,null,c.a.createElement(Et.a,{bg:"dark",variant:"dark"},c.a.createElement(gt.a,{className:"mr-auto"},c.a.createElement(gt.a.Link,{onClick:this.handleClick1},"Home"),c.a.createElement(gt.a.Link,{onClick:this.handleClick2},"Problems"),c.a.createElement(gt.a.Link,{onClick:this.handleClick3},"About Us")),e,t))}}]),t}(n.Component),Nt=Object(p.b)(function(e){return{isAuthenticated:e.isAuthenticated}},function(e){return{resetMode:function(){return e({type:"reset"})},loginSuccess:function(){return e({type:"login"})},setToken:function(t){return e({type:"setToken",val:t})},logout:function(){return e({type:"logout"})}}})(Object(f.f)(Ct)),xt=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token");null!==t&&this.props.setToken(t);var a={headers:{Authorization:"Bearer ".concat(t)}};T.a.post("https://frozen-atoll-01566.herokuapp.com/userInfor",{},a).then(function(t){200===t.status&&(console.log("authenticate"),e.props.login())}).catch(function(e){console.log("not authenticate")}),console.log("au ",this.props.isAuthenticated)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(Nt,null),c.a.createElement(f.c,null,c.a.createElement(f.a,{exact:!0,path:"/Leetcode-TutorialBlog/",component:R}),c.a.createElement(f.a,{exact:!0,path:"/Leetcode-TutorialBlog/course",component:vt}),c.a.createElement(f.a,{exact:!0,path:"/Leetcode-TutorialBlog/problems",component:st}),c.a.createElement(f.a,{exact:!0,path:"/Leetcode-TutorialBlog/about",component:rt})))}}]),t}(n.Component),St=Object(p.b)(function(e){return{token:e.token,isAuthenticated:e.isAuthenticated}},function(e){return{setToken:function(t){return e({type:"setToken",val:t})},login:function(t){return e({type:"login"})}}})(xt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var wt=a(39),Lt=a(107),It=a(74),At={mode:0,isAuthenticated:!1,token:""},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;return"reset"===t.type?Object(It.a)({},e,{mode:0}):"mode1"===t.type?Object(It.a)({},e,{mode:1}):"mode2"===t.type?Object(It.a)({},e,{mode:2}):"login"===t.type?Object(It.a)({},e,{isAuthenticated:!0}):"setToken"===t.type?Object(It.a)({},e,{token:t.val}):"logout"===t.type?Object(It.a)({},e,{token:"",isAuthenticated:!1}):e},Bt=Object(Lt.b)(Tt);s.a.render(c.a.createElement(wt.a,null,c.a.createElement(p.a,{store:Bt},c.a.createElement(St,null))),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[286,2,1]]]);
//# sourceMappingURL=main.b1aeaa57.chunk.js.map