(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){e.exports=a.p+"static/media/1.3ee16d09.md"},117:function(e,t,a){e.exports=a.p+"static/media/1cpp.204572dd.md"},118:function(e,t,a){e.exports=a.p+"static/media/1.2521b81c.md"},119:function(e,t,a){e.exports=a.p+"static/media/test1.75250e6a.md"},120:function(e,t,a){e.exports=a.p+"static/media/submit1.00ff6f5c.md"},121:function(e,t,a){e.exports=a.p+"static/media/1.1.7975c67a.md"},122:function(e,t,a){e.exports=a.p+"static/media/1.2.2fb15148.md"},123:function(e,t,a){e.exports=a.p+"static/media/1.3.6e3c73f9.md"},124:function(e,t,a){e.exports=a.p+"static/media/submit2.6911ec65.md"},125:function(e,t,a){e.exports=a.p+"static/media/2.1.5678c59a.md"},126:function(e,t,a){e.exports=a.p+"static/media/2.2.b73b0d59.md"},127:function(e,t,a){e.exports=a.p+"static/media/2.3.43882c71.md"},128:function(e,t,a){e.exports=a.p+"static/media/2.4.3c108c45.md"},129:function(e,t,a){e.exports=a.p+"static/media/2.5.b5633bde.md"},130:function(e,t,a){e.exports=a.p+"static/media/2.6.ab5cd2ce.md"},131:function(e,t,a){e.exports=a.p+"static/media/2.8c4ba10c.md"},132:function(e,t,a){e.exports=a.p+"static/media/2.20764833.md"},133:function(e,t,a){e.exports=a.p+"static/media/test2.00975d57.md"},134:function(e,t,a){e.exports=a.p+"static/media/submit3.d5d7a9ee.md"},135:function(e,t,a){e.exports=a.p+"static/media/3.1.1950e5d8.md"},136:function(e,t,a){e.exports=a.p+"static/media/3.2.f81870bd.md"},137:function(e,t,a){e.exports=a.p+"static/media/3.3.bcb764ca.md"},138:function(e,t,a){e.exports=a.p+"static/media/3.4.c1b2a76d.md"},139:function(e,t,a){e.exports=a.p+"static/media/3.5.2482fd50.md"},140:function(e,t,a){e.exports=a.p+"static/media/3.6.20e13ca8.md"},141:function(e,t,a){e.exports=a.p+"static/media/3.eab4de77.md"},142:function(e,t,a){e.exports=a.p+"static/media/3.c29e5ffa.md"},143:function(e,t,a){e.exports=a.p+"static/media/test3.c0f5c902.md"},144:function(e){e.exports={GOOGLE_CLIENT_ID:"905403463410-otbpoc8a6gvcmmg8dl9d3qbmd771tqtr.apps.googleusercontent.com",YOUTUBE_API_KEY:"AIzaSyCAYhEQN-ujl_-vI_1Ggojf9mYWV9sZRnI"}},240:function(e,t,a){},252:function(e,t,a){},274:function(e,t,a){e.exports=a.p+"static/media/founder.ab533aed.jpg"},285:function(e,t,a){e.exports=a(578)},290:function(e,t,a){},310:function(e,t){},312:function(e,t){},489:function(e,t,a){},525:function(e,t,a){e.exports=a.p+"static/media/theme.77c2d2ac.png"},526:function(e,t,a){},529:function(e,t,a){},533:function(e,t,a){},545:function(e,t,a){},578:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(14),l=a.n(i),s=(a(290),a(9)),o=a(10),r=a(13),m=a(11),u=a(12),d=a(6),h=a(54),p=(a(297),a(93)),b=a.n(p),f=a(5),E=(a(405),a(409),a(102),a(107)),v=a.n(E),g=(a(168),a(169),a(109)),k=(a(167),a(417),a(418),a(419),a(420),a(421),a(422),a(423),a(424),a(425),a(426),a(84)),y=a.n(k),j=a(81),O=a.n(j),C=(a(225),a(17)),N=(a(226),a(189)),x=a.n(N),S=(a(486),a(240),a(489),a(190)),w=a.n(S),A=a(49),I=a.n(A),L=a(86),T=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={show:!1,judge:""},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.judge).then(function(e){return e.text()}).then(function(t){e.setState({judge:t})})}},{key:"componentDidUpdate",value:function(e,t){var a=this;e.judge!=this.props.judge&&fetch(this.props.judge).then(function(e){return e.text()}).then(function(e){a.setState({judge:e})})}},{key:"render",value:function(){var e=this,t=c.a.createElement(C.a,{onClick:function(){e.setState({show:!0})}},"this");return 1==this.props.bstate&&(t=c.a.createElement(C.a,{onClick:function(){e.setState({show:!0})},className:"btn-secondary",style:{marginLeft:"3%",marginBottom:"10px"}},"Test",this.props.index)),2==this.props.bstate&&(t=c.a.createElement(C.a,{onClick:function(){e.setState({show:!0})},className:"btn-success",style:{marginLeft:"3%",marginBottom:"10px"}},"O")),3==this.props.bstate&&(t=c.a.createElement(C.a,{onClick:function(){e.setState({show:!0})},className:"btn-danger",style:{marginLeft:"3%",marginBottom:"10px"}},"X")),c.a.createElement(c.a.Fragment,null,t,c.a.createElement(L.a,{size:"sm",show:this.state.show,onHide:function(){e.setState({show:!1})},"aria-labelledby":"example-modal-sizes-title-sm"},c.a.createElement(L.a.Header,{closeButton:!0},c.a.createElement(L.a.Title,{id:"example-modal-sizes-title-sm"},"Test ",this.props.index)),c.a.createElement(L.a.Body,null,this.state.judge)))}}]),t}(n.Component),M=a(271),z=a.n(M),B=function(){return c.a.createElement(z.a,{width:500,height:500})};(new Map).java=0;var D=["tomorrow","github","monokai","kuroir","twilight","xcode","textmate","solarized_light","solarized_dark","terminal"],F=["java"],_=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={mycode:"",status:0,output:"",loading:!1,summiting:!1,A:[],inputstate:!0,myinput:"",correct:!1,done:!1,theme:"solarized_light",mode:"java"},e.onchange=e.onchange.bind(Object(d.a)(Object(d.a)(e))),e.handleCompile=e.handleCompile.bind(Object(d.a)(Object(d.a)(e))),e.changeOutput=e.changeOutput.bind(Object(d.a)(Object(d.a)(e))),e.changeInput=e.changeInput.bind(Object(d.a)(Object(d.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e.inputstateChange=e.inputstateChange.bind(Object(d.a)(Object(d.a)(e))),e.select=e.select.bind(Object(d.a)(Object(d.a)(e))),e.selectLan=e.selectLan.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.code!=this.props.code&&fetch(this.props.content).then(function(e){return e.text()}).then(function(e){return a.setState({mycode:a.props.code,A:[],done:!1,output:""})})}},{key:"selectLan",value:function(e){this.setState({mode:e.value})}},{key:"select",value:function(e){this.setState({theme:e.value})}},{key:"inputstateChange",value:function(){var e=!this.state.inputstate;this.setState({inputstate:e})}},{key:"componentDidMount",value:function(){var e=this;fetch(this.props.judgecase[0]).then(function(e){return e.text()}).then(function(t){e.setState({mycode:e.props.code,myinput:t})})}},{key:"onchange",value:function(e){localStorage.setItem(this.props.name,e),this.setState({mycode:e})}},{key:"changeOutput",value:function(e){this.setState({output:e.target.value})}},{key:"changeInput",value:function(e){this.setState({myinput:e.target.value})}},{key:"handleCompile",value:function(){var e=this;this.setState({loading:!0}),I.a.post("https://frozen-atoll-01566.herokuapp.com/api/run",{lang:this.state.mode,code:this.state.mycode+this.props.test,input:this.state.myinput}).then(function(t){var a=t.data,n=parseInt(a.message.status);console.log(t),e.setState({status:n,output:a.message,loading:!1,inputstate:!1})})}},{key:"handleSubmit",value:function(){var e=this;this.setState({summiting:!0}),I.a.post("https://frozen-atoll-01566.herokuapp.com/api/submit",{lang:this.state.mode,code:this.state.mycode+this.props.submit}).then(function(t){var a=0,n=t.data,c=parseInt(n.message.status),i=n.message.split("\n"),l=!1,s=[],o=[],r=e.props.testcase;i.length<r&&(r=0);for(var m=i.length-1;m>=0;m--)0!=i[m].length&&(r>0?("t"==i[m].charAt(0)&&a++,s.push(i[m]),r--):o.push(i[m]));a==e.props.testcase?(l=!0,w()("Congratulation!").then(function(t){t&&e.setState({correct:!1})})):w()({text:"You are not YOUXIU enough!",icon:"warning",dangerMode:!0}),e.setState({status:c,output:o.reverse().join("\n"),summiting:!1,inputstate:!1,done:!0,A:s.reverse(),correct:l})})}},{key:"render",value:function(){var e=this,t=c.a.createElement(C.a,{className:"outline-primary"},c.a.createElement("i",{class:"fa fa-refresh fa-spin"})),a=c.a.createElement(C.a,{className:"btn-info",style:{marginLeft:"5%"}},c.a.createElement("i",{class:"fa fa-refresh fa-spin"}));this.state.inputstate?c.a.createElement(C.a,{className:"btn-success ",onClick:this.inputstateChange},"My output"):c.a.createElement(C.a,{className:"btn-success",onClick:this.inputstateChange},"Input");var n=c.a.createElement(y.a,null,c.a.createElement("textarea",{id:"textarea",className:"output",name:"code",type:"textarea",componentClass:"textarea",rows:"10",cols:"150",width:"30%",value:this.state.output,onChange:this.changeOutput,style:{backgroundColor:"#e6ffff"}}));this.state.inputstate&&(n=c.a.createElement(y.a,null,c.a.createElement("textarea",{id:"textarea",className:"output",name:"code",type:"textarea",componentClass:"textarea",rows:"10",cols:"150",width:"30%",style:{backgroundColor:"black",color:"white"},value:this.state.myinput,onChange:this.changeInput})));for(var i,l=[],s=0;s<this.props.testcase;s++)this.state.done?(null!=this.state.A[s]&&this.state.A[s].length>=1&&"t"==this.state.A[s].charAt(0)?l.push(c.a.createElement(T,{bstate:2,index:s,judge:this.props.judgecase[s]})):l.push(c.a.createElement(T,{bstate:3,index:s,judge:this.props.judgecase[s]})),s%6==0&&0!=s&&(l.push(c.a.createElement("br",null)),l.push(c.a.createElement("br",null)))):(l.push(c.a.createElement(T,{bstate:1,index:s,judge:this.props.judgecase[s]})),s%6==0&&0!=s&&(l.push(c.a.createElement("br",null)),l.push(c.a.createElement("br",null))));return this.state.loading||(t=this.state.summiting?c.a.createElement(C.a,{className:"outline-primary"},"Compile"):c.a.createElement(C.a,{className:"outline-primary",onClick:this.handleCompile},"Compile")),this.state.summiting||(a=this.state.loading?c.a.createElement(C.a,{className:"btn-info",style:{marginLeft:"5%"}},"Submit"):c.a.createElement(C.a,{className:"btn-info",style:{marginLeft:"5%"},onClick:this.handleSubmit},"Submit")),this.state.correct&&(i=c.a.createElement(B,null)),c.a.createElement("div",null,c.a.createElement(O.a,Object(g.a)({vertical:!0,primaryMinSize:75,percentage:!0},"primaryMinSize",60),c.a.createElement("div",null,i,l,c.a.createElement("br",null),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(x.a,{options:D,onChange:this.select,value:this.state.theme}),c.a.createElement(x.a,{options:F,onChange:this.selectLan,value:this.state.mode})),c.a.createElement(v.a,{height:1e3,width:1200,mode:this.state.mode,theme:this.state.theme,name:"blah2",onChange:this.onchange,fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:this.state.mycode,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:2}})),c.a.createElement("div",null,c.a.createElement("button",{className:this.state.inputstate?"depressed":"",style:{margin:"5px",backgroundColor:"pink"},onClick:function(){e.setState({inputstate:!0})}},"Test"),c.a.createElement("button",{className:this.state.inputstate?"":"depressed",style:{margin:"5px",backgroundColor:"pink"},onClick:function(){e.setState({inputstate:!1})}},"Output"),c.a.createElement("hr",{style:{height:"2px",borderWidth:"0",color:"grey","background-color":"grey"}}),n,c.a.createElement("br",null),t,a)))}}]),t}(n.Component),P=(a(507),a(252),a(525),a(526),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).handleClick1=e.handleClick1.bind(Object(d.a)(Object(d.a)(e))),e.handleClick2=e.handleClick2.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleClick1",value:function(){this.props.history.push("/problems")}},{key:"handleClick2",value:function(){this.props.history.push("/course")}},{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"cols"},c.a.createElement("div",{className:"col",onClick:this.handleClick1},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Interview Coding Practice"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Practice the top popular coding interview question"))))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Online Assesment"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Mock online coding assesment"))))),c.a.createElement("div",{className:"col",onClick:this.handleClick2},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Algorithm Crash Course"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Video explanation with the most frequent use data structure and algorithm")))))))}}]),t}(n.Component)),U=Object(f.e)(P),V=(a(529),a(31)),G=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).handleClick1=e.handleClick1.bind(Object(d.a)(Object(d.a)(e))),e.handleClick2=e.handleClick2.bind(Object(d.a)(Object(d.a)(e))),e.handleClick3=e.handleClick3.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleClick1",value:function(){this.props.history.push("/about")}},{key:"handleClick2",value:function(){this.props.history.push("/problems")}},{key:"handleClick3",value:function(){this.props.history.push("/course")}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("footer",{className:"site-footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement("h6",null,"About"),c.a.createElement("p",{className:"text-justify"},"66 Code is the platform for helping software engineer to prepare for their coding interview. Currently, it supports 3 services. More services will be added in the upcoming future")),c.a.createElement("div",{className:"col-xs-6 col-md-3"},c.a.createElement("h6",null,"Categories"),c.a.createElement("ul",{className:"footer-links"},c.a.createElement(V.a.Link,{onClick:this.handleClick2},"Coding Practice"),c.a.createElement(V.a.Link,{onClick:this.handleClick3},"Video Explanation"))),c.a.createElement("div",{className:"col-xs-6 col-md-3"},c.a.createElement("h6",null,"Quick Links"),c.a.createElement("ul",{className:"footer-links"},c.a.createElement(V.a.Link,{onClick:this.handleClick1},"About")))),c.a.createElement("hr",null)),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8 col-sm-6 col-xs-12"},c.a.createElement("p",{className:"copyright-text"},"Copyright \xa9 2020 All Rights Reserved by",c.a.createElement("a",{href:"#"}," 66 Brother"),".")),c.a.createElement("div",{className:"col-md-4 col-sm-6 col-xs-12"},c.a.createElement("ul",{class:"social-icons"},c.a.createElement("li",null,c.a.createElement("a",{className:"facebook",href:"#"},c.a.createElement("i",{class:"fa fa-facebook"}))),c.a.createElement("li",null,c.a.createElement("a",{className:"twitter",href:"#"},c.a.createElement("i",{class:"fa fa-twitter"}))),c.a.createElement("li",null,c.a.createElement("a",{className:"dribbble",href:"#"},c.a.createElement("i",{class:"fa fa-dribbble"}))),c.a.createElement("li",null,c.a.createElement("a",{className:"linkedin",href:"#"},c.a.createElement("i",{class:"fa fa-linkedin"})))))))))}}]),t}(n.Component),R=Object(f.e)(G),Y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).handleClick=e.handleClick.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){this.props.history.push("/Leetcode-TutorialBlog/problems")}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("div",{class:"overlay"},c.a.createElement("h1",null,"Welcome To 66 Code"),c.a.createElement("h3",null,"Prepare Your Coding Interview"),c.a.createElement("br",null),c.a.createElement("button",{className:"homeButton",onClick:this.handleClick},"About 66 Code")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(U,null)),c.a.createElement("br",null),c.a.createElement(R,null))}}]),t}(n.Component),q=Object(f.e)(Y),W=a(116),H=a.n(W),K=a(117),J=a.n(K),Q=a(118),X=a.n(Q),Z=a(119),$=a.n(Z),ee=a(120),te=a.n(ee),ae=a(121),ne=a.n(ae),ce=a(122),ie=a.n(ce),le=a(123),se=a.n(le),oe=a(124),re=a.n(oe),me=a(125),ue=a.n(me),de=a(126),he=a.n(de),pe=a(127),be=a.n(pe),fe=a(128),Ee=a.n(fe),ve=a(129),ge=a.n(ve),ke=a(130),ye=a.n(ke),je=a(131),Oe=a.n(je),Ce=a(132),Ne=a.n(Ce),xe=a(133),Se=a.n(xe),we=a(134),Ae=a.n(we),Ie=a(135),Le=a.n(Ie),Te=a(136),Me=a.n(Te),ze=a(137),Be=a.n(ze),De=a(138),Fe=a.n(De),_e=a(139),Pe=a.n(_e),Ue=a(140),Ve=a.n(Ue),Ge=a(141),Re=a.n(Ge),Ye=a(142),qe=a.n(Ye),We=a(143),He=a.n(We),Ke=a(283),Je=(H.a,J.a,Ne.a,qe.a,X.a,Oe.a,Re.a,["Two Sum","Present From 66","Eating Chocolate"]),Qe=($.a,Se.a,He.a,te.a,re.a,Ae.a,ne.a,ie.a,se.a,ue.a,he.a,be.a,Ee.a,ge.a,ye.a,Le.a,Me.a,Be.a,Fe.a,Pe.a,Ve.a,[[0],[0],[0],[0],[0],[1,2]]),Xe=[0,1,2],Ze=["\u2b50","\u2b50\u2b50","\u2b50\u2b50\u2b50"],$e=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).handleClick1=e.handleClick1.bind(Object(d.a)(Object(d.a)(e))),e.solve=e.solve.bind(Object(d.a)(Object(d.a)(e))),e.state={main:!0,categoryIndex:0,practiceMode:!1,index:0},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleClick1",value:function(e){this.props.mode1(),this.setState({categoryIndex:e})}},{key:"solve",value:function(e){this.props.mode2(),this.setState({index:e}),this.props.history.push("/problems/"+e)}},{key:"render",value:function(){var e,t=this,a=c.a.createElement("div",{className:"wrapper"},c.a.createElement("h1",null,"Our Topics :"),c.a.createElement(y.a,null,c.a.createElement("div",{className:"cols"},c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(0)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Arrays"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))),c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(1)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"List"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))),c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(2)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Tree"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null)))))),c.a.createElement("div",{className:"cols"},c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(3)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Graph"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))),c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(4)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"DP"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))),c.a.createElement("div",{className:"col",onClick:function(){t.handleClick1(5)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"front"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Math"))),c.a.createElement("div",{className:"back"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null))))))));if(1==this.props.mode){a="";var n=Qe[this.state.categoryIndex];e=c.a.createElement("div",{style:{width:"75%"}},c.a.createElement(y.a,null,n.map(function(e){return c.a.createElement(Ke.a.Item,{action:!0,variant:"primary",key:e,style:{margin:"2%"},onClick:function(){t.solve(e)}},e+1," . ",Je[e]," ",Ze[Xe[e]])})))}this.state.index;return c.a.createElement("div",{className:"div"},a,e)}}]),t}(n.Component),et=(n.Component,Object(h.b)(function(e){return{mode:e.mode}},function(e){return{mode1:function(){return e({type:"mode1"})},mode2:function(){return e({type:"mode2"})}}})(Object(f.e)($e))),tt=a(274),at=a.n(tt),nt=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{class:"team-section text-center my-5"},c.a.createElement("h2",{class:"h1-responsive font-weight-bold my-5"},"Our amazing team"),c.a.createElement("div",{class:"row text-center"},c.a.createElement("div",{class:"col-md-4 mb-md-0 mb-5"},c.a.createElement("div",{class:"avatar mx-auto"},c.a.createElement("div",null,c.a.createElement("img",{src:at.a,style:{height:"25%",width:"25%",borderRadius:"40%"}}))),c.a.createElement("h4",{class:"font-weight-bold dark-grey-text my-4"},"JunBin Liang"),c.a.createElement("h6",{class:"text-uppercase grey-text mb-3"},c.a.createElement("strong",null,"Founder and Software Engineer"))))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(R,null))}}]),t}(n.Component),ct=(a(533),a(275)),it=a.n(ct),lt=a(144),st=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={videos:[],selectedVideo:null},a.onSearch=a.onSearch.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log("mount"),this.onSearch("66brother tech")}},{key:"onSearch",value:function(e){var t=this;it()({key:lt.YOUTUBE_API_KEY,term:e},function(e){console.log("vid ",e),t.setState({videos:e,selectedVideo:e[0]})})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"vedioContainer"},c.a.createElement(mt,{video:this.state.selectedVideo}),c.a.createElement(ot,{onVideoClick:function(t){return e.setState({selectedVideo:t})},videos:this.state.videos}))}}]),t}(n.Component),ot=function(e){var t=e.videos.map(function(t){return c.a.createElement(rt,{onVideoClick:e.onVideoClick,key:t.etag,video:t})});return c.a.createElement("ul",{className:"col-md-4 list-group"},t)},rt=function(e){return c.a.createElement("li",{onClick:function(){return e.onVideoClick(e.video)},className:"list-group-item"},c.a.createElement("div",{className:"video-list-media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("img",{className:"media-object",src:e.video.snippet.thumbnails.default.url}))),c.a.createElement("div",{className:"media-body"},c.a.createElement("div",{className:"media-heading"},e.video.snippet.title)))},mt=function(e){var t=e.video;return t?c.a.createElement("div",{className:"video-detail col-md-8"},c.a.createElement("div",{className:"details"},c.a.createElement("h2",null,t.snippet.title),c.a.createElement("div",null,t.snippet.description)),c.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},c.a.createElement("iframe",{className:"embeded-responsive-item",src:"https://youtube.com/embed/"+t.id.videoId}))):c.a.createElement("div",null,"loading!!")},ut=st,dt=[[H.a,J.a],[Ne.a],[qe.a]],ht=[X.a,Oe.a,Re.a],pt=["Two Sum","Present From 66","Eating Chocolate"],bt=[$.a,Se.a,He.a],ft=[te.a,re.a,Ae.a],Et=[3,6,6],vt=[[ne.a,ie.a,se.a],[ue.a,he.a,be.a,Ee.a,ge.a,ye.a],[Le.a,Me.a,Be.a,Fe.a,Pe.a,Ve.a]],gt=(a(545),function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("body",null,c.a.createElement("section",{id:"not-found"},c.a.createElement("div",{className:"circles"},c.a.createElement("p",null,"404",c.a.createElement("br",null),c.a.createElement("small",null,"PAGE NOT FOUND")),c.a.createElement("span",{className:"circle big"}),c.a.createElement("span",{className:"circle med"}),c.a.createElement("span",{className:"circle small"})))))}}]),t}(n.Component)),kt=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={markdown:"",editor:null,name:"Two Sum",description:"",test:"",submit:"",testcases:0},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;if(!(t>=pt.length)){var a=localStorage.getItem(pt[t]);null==a?fetch(dt[t][0]).then(function(e){return e.text()}).then(function(t){e.setState({markdown:t})}):this.setState({markdown:a}),fetch(ht[t]).then(function(e){return e.text()}).then(function(t){e.setState({description:t})}),fetch(bt[t]).then(function(e){return e.text()}).then(function(t){e.setState({test:t})}),fetch(ft[t]).then(function(e){return e.text()}).then(function(t){e.setState({submit:t})})}}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!=this.props.match.params.id){var n=this.props.match.params.id;if(n>=pt.length)return;var c=localStorage.getItem(pt[n]);null==c?fetch(dt[n][0]).then(function(e){return e.text()}).then(function(e){a.setState({markdown:e})}):this.setState({markdown:c}),fetch(ht[n]).then(function(e){return e.text()}).then(function(e){a.setState({description:e})}),fetch(bt[n]).then(function(e){return e.text()}).then(function(e){a.setState({test:e})}),fetch(ft[n]).then(function(e){return e.text()}).then(function(e){a.setState({submit:e})})}}},{key:"render",value:function(){var e=this.props.match.params.id;return e>=pt.length?c.a.createElement("div",null,c.a.createElement(gt,null)):c.a.createElement("div",null,c.a.createElement("div",{style:{width:"95%","margin-left":"5%"}},c.a.createElement("div",{style:{margin:"3%",width:"45%"}},c.a.createElement(O.a,{primaryMinSize:35,percentage:!0},c.a.createElement("div",null,c.a.createElement("h2",{style:{width:"45%","margin-left":"45%"}}," ",pt[e]),c.a.createElement(b.a,{escapeHtml:!0,source:this.state.description})),c.a.createElement("div",{style:{width:"100%"}},c.a.createElement(_,{judgecase:vt[e],testcase:Et[e],code:this.state.markdown,test:this.state.test,submit:this.state.submit,name:pt[e]}),c.a.createElement("br",null))))))}}]),t}(n.Component),yt=a(25),jt=a(187),Ot=a(276),Ct=(a(548),a(584)),Nt=a(585),xt=Ct.a.SubMenu,St=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).handleClick1=e.handleClick1.bind(Object(d.a)(Object(d.a)(e))),e.handleClick2=e.handleClick2.bind(Object(d.a)(Object(d.a)(e))),e.handleClick3=e.handleClick3.bind(Object(d.a)(Object(d.a)(e))),e.googleResponse=e.googleResponse.bind(Object(d.a)(Object(d.a)(e))),e.onFailure=e.onFailure.bind(Object(d.a)(Object(d.a)(e))),e.logout=e.logout.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"onFailure",value:function(){}},{key:"logout",value:function(){localStorage.setItem("token",""),console.log("logout"),this.props.logout()}},{key:"componentDidUpdate",value:function(){console.log("nav ",this.props.isAuthenticated)}},{key:"googleResponse",value:function(e){var t=this;console.log(e),I.a.post("https://frozen-atoll-01566.herokuapp.com/login",{code:e.tokenId}).then(function(e){console.log(e);var a=e.data.token,n=e.data.user;localStorage.setItem("token",a),t.props.setToken(a),t.props.loginSuccess(),console.log(a),console.log(n)})}},{key:"handleClick1",value:function(){this.props.history.push("/")}},{key:"handleClick2",value:function(){this.props.resetMode(),this.props.history.push("/problems")}},{key:"handleClick3",value:function(){this.props.history.push("/about")}},{key:"render",value:function(){var e=null,t=null;return this.props.isAuthenticated?t=c.a.createElement(Ct.a,{style:{width:150},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"]},c.a.createElement(xt,{key:"sub4",icon:c.a.createElement(Nt.a,null),title:"66Bro"},c.a.createElement(Ct.a.Item,null,"Setting"),c.a.createElement(Ct.a.Item,{onClick:this.logout},"Logout"))):e=c.a.createElement(Ot.GoogleLogin,{render:function(e){return c.a.createElement(V.a.Link,{onClick:e.onClick,style:{color:"white",marginRight:"50px"}},"Login")},clientId:lt.GOOGLE_CLIENT_ID,buttonText:"Login",onSuccess:this.googleResponse,onFailure:this.onFailure,style:{padding:0,margin:0}}),c.a.createElement(c.a.Fragment,null,c.a.createElement(jt.a,{bg:"dark",variant:"dark"},c.a.createElement(V.a,{className:"mr-auto"},c.a.createElement(V.a.Link,{onClick:this.handleClick1},"Home"),c.a.createElement(V.a.Link,{onClick:this.handleClick2},"Problems"),c.a.createElement(V.a.Link,{onClick:this.handleClick3},"About Us")),e,t))}}]),t}(n.Component),wt=Object(h.b)(function(e){return{isAuthenticated:e.isAuthenticated}},function(e){return{resetMode:function(){return e({type:"reset"})},loginSuccess:function(){return e({type:"login"})},setToken:function(t){return e({type:"setToken",val:t})},logout:function(){return e({type:"logout"})}}})(Object(f.e)(St)),At=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("token");null!==t&&this.props.setToken(t);var a={headers:{Authorization:"Bearer ".concat(t)}};I.a.post("https://frozen-atoll-01566.herokuapp.com/userInfor",{},a).then(function(t){200===t.status&&(console.log("authenticate"),e.props.login())}).catch(function(e){console.log("not authenticate")}),console.log("au ",this.props.isAuthenticated)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(yt.b,null,c.a.createElement(wt,null)),c.a.createElement(yt.b,null,c.a.createElement(f.a,{exact:!0,path:"/",component:q}),c.a.createElement(f.a,{exact:!0,path:"/course",component:ut}),c.a.createElement(f.a,{exact:!0,path:"/problems",component:et}),c.a.createElement(f.a,{path:"/problems/:id",component:kt}),c.a.createElement(f.a,{exact:!0,path:"/about",component:nt})))}}]),t}(n.Component),It=Object(h.b)(function(e){return{token:e.token,isAuthenticated:e.isAuthenticated}},function(e){return{setToken:function(t){return e({type:"setToken",val:t})},login:function(t){return e({type:"login"})}}})(At);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Lt=a(108),Tt=a(73),Mt={mode:0,isAuthenticated:!1,token:""},zt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=arguments.length>1?arguments[1]:void 0;return"reset"===t.type?Object(Tt.a)({},e,{mode:0}):"mode1"===t.type?Object(Tt.a)({},e,{mode:1}):"mode2"===t.type?Object(Tt.a)({},e,{mode:2}):"login"===t.type?Object(Tt.a)({},e,{isAuthenticated:!0}):"setToken"===t.type?Object(Tt.a)({},e,{token:t.val}):"logout"===t.type?Object(Tt.a)({},e,{token:"",isAuthenticated:!1}):e},Bt=Object(Lt.b)(zt);l.a.render(c.a.createElement(yt.a,null,c.a.createElement(h.a,{store:Bt},c.a.createElement(It,null))),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[285,2,1]]]);
//# sourceMappingURL=main.23583f19.chunk.js.map