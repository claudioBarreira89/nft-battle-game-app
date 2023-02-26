(this["webpackJsonpnft-game-starter"]=this["webpackJsonpnft-game-starter"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},49:function(e,t){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),s=n(35),c=n.n(s),i=(n(45),n(2)),o=n(12),u=n(10),p=(n(46),n(5)),l=function(){return Object(p.jsxs)("div",{className:"lds-ring",children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})},m=function(e){return{name:e.name,imageURI:e.imageURI,hp:e.hp.toNumber(),maxHp:e.maxHp.toNumber(),attackDamage:e.attackDamage.toNumber()}},d=n(29),y=[{inputs:[{internalType:"string[]",name:"characterNames",type:"string[]"},{internalType:"string[]",name:"characterImageURIs",type:"string[]"},{internalType:"uint256[]",name:"characterHp",type:"uint256[]"},{internalType:"uint256[]",name:"characterAttackDmg",type:"uint256[]"},{internalType:"string",name:"bossName",type:"string"},{internalType:"string",name:"bossImageURI",type:"string"},{internalType:"uint256",name:"bossHp",type:"uint256"},{internalType:"uint256",name:"bossAttackDamage",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"newBossHp",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newPlayerHp",type:"uint256"}],name:"AttackComplete",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"characterIndex",type:"uint256"}],name:"CharacterNFTMinted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"attackBoss",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bigBoss",outputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"imageURI",type:"string"},{internalType:"uint256",name:"hp",type:"uint256"},{internalType:"uint256",name:"maxHp",type:"uint256"},{internalType:"uint256",name:"attackDamage",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"checkIfUserHasNFT",outputs:[{components:[{internalType:"uint256",name:"characterIndex",type:"uint256"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"imageURI",type:"string"},{internalType:"uint256",name:"hp",type:"uint256"},{internalType:"uint256",name:"maxHp",type:"uint256"},{internalType:"uint256",name:"attackDamage",type:"uint256"}],internalType:"struct MyEpicGame.CharacterAttributes",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAllDefaultCharacters",outputs:[{components:[{internalType:"uint256",name:"characterIndex",type:"uint256"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"imageURI",type:"string"},{internalType:"uint256",name:"hp",type:"uint256"},{internalType:"uint256",name:"maxHp",type:"uint256"},{internalType:"uint256",name:"attackDamage",type:"uint256"}],internalType:"struct MyEpicGame.CharacterAttributes[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBigBoss",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"imageURI",type:"string"},{internalType:"uint256",name:"hp",type:"uint256"},{internalType:"uint256",name:"maxHp",type:"uint256"},{internalType:"uint256",name:"attackDamage",type:"uint256"}],internalType:"struct MyEpicGame.BigBoss",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_characterIndex",type:"uint256"}],name:"mintCharacterNFT",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"nftHolderAttributes",outputs:[{internalType:"uint256",name:"characterIndex",type:"uint256"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"imageURI",type:"string"},{internalType:"uint256",name:"hp",type:"uint256"},{internalType:"uint256",name:"maxHp",type:"uint256"},{internalType:"uint256",name:"attackDamage",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"nftHolders",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}],b=function(){var e=window.ethereum;if(e){var t=new d.a.providers.Web3Provider(e).getSigner();return new d.a.Contract("0x593E42D43541d28437C8495E4388860D9A7E3c89",y,t)}return console.log("Ethereum object not found"),null},j=(n(60),function(e){var t=e.setCharacterNFT,n=Object(a.useState)([]),r=Object(u.a)(n,2),s=r[0],c=r[1],d=Object(a.useState)(null),y=Object(u.a)(d,2),j=y[0],h=y[1],f=Object(a.useState)(!1),g=Object(u.a)(f,2),x=g[0],O=g[1],v=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!j){e.next=11;break}return O(!0),console.log("Minting character in progress..."),e.next=6,j.mintCharacterNFT(t);case 6:return n=e.sent,e.next=9,n.wait();case 9:console.log("mintTxn:",n),O(!1);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.warn("MintCharacterAction Error:",e.t0),O(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),T=Object(a.useCallback)(Object(o.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Getting contract characters to mint"),e.next=4,j.getAllDefaultCharacters();case 4:t=e.sent,console.log("charactersTxn:",t),n=t.map((function(e){return m(e)})),c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Something went wrong fetching characters:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[j]),k=Object(a.useCallback)(function(){var e=Object(o.a)(Object(i.a)().mark((function e(n,a,r){var s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("CharacterNFTMinted - sender: ".concat(n," tokenId: ").concat(a.toNumber()," characterIndex: ").concat(r.toNumber())),!j){e.next=7;break}return e.next=4,j.checkIfUserHasNFT();case 4:s=e.sent,console.log("CharacterNFT: ",s),t(m(s));case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),[j,t]);return Object(a.useEffect)((function(){var e=b();h(e)}),[]),Object(a.useEffect)((function(){return j&&(T(),j.on("CharacterNFTMinted",k)),function(){j&&j.off("CharacterNFTMinted",k)}}),[j,T,k]),Object(p.jsxs)("div",{className:"select-character-container",children:[Object(p.jsx)("h2",{children:"Mint Your Hero. Choose wisely."}),s.length>0&&Object(p.jsx)("div",{className:"character-grid",children:s.map((function(e,t){return Object(p.jsxs)("div",{className:"character-item",children:[Object(p.jsx)("div",{className:"name-container",children:Object(p.jsx)("p",{children:e.name})}),Object(p.jsx)("img",{src:e.imageURI,alt:e.name}),!x&&Object(p.jsx)("button",{type:"button",className:"character-mint-button",onClick:function(){return v(t)},children:"Mint ".concat(e.name)})]},e.name)}))}),x&&Object(p.jsxs)("div",{className:"loading",children:[Object(p.jsxs)("div",{className:"indicator",children:[Object(p.jsx)(l,{}),Object(p.jsx)("p",{children:"Minting In Progress..."})]}),Object(p.jsx)("img",{src:"https://media2.giphy.com/media/61tYloUgq1eOk/giphy.gif?cid=ecf05e47dg95zbpabxhmhaksvoy8h526f96k4em0ndvx078s&rid=giphy.gif&ct=g",alt:"Minting loading indicator"})]})]})}),h=(n(61),n(16)),f=(n(62),function(e){var t=e.characterNFT,n=e.setCharacterNFT,r=e.currentAccount,s=Object(a.useState)(null),c=Object(u.a)(s,2),d=c[0],y=c[1],j=Object(a.useState)(null),f=Object(u.a)(j,2),g=f[0],x=f[1],O=Object(a.useState)(""),v=Object(u.a)(O,2),T=v[0],k=v[1],w=Object(a.useState)(!1),N=Object(u.a)(w,2),M=N[0],C=N[1],I=Object(a.useState)(""),A=Object(u.a)(I,2),H=A[0],F=A[1],U=Object(a.useCallback)(Object(o.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getBigBoss();case 2:t=e.sent,console.log("Boss:",t),x(m(t));case 5:case"end":return e.stop()}}),e)}))),[d]),S=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!d){e.next=14;break}return k("attacking"),console.log("Attacking boss..."),e.next=6,d.attackBoss();case 6:return n=e.sent,e.next=9,n.wait();case 9:console.log("attackTxn:",n),k("hit"),g.prevHp!==g.hp?F("\ud83d\udca5 ".concat(g.name," was hit for ").concat(t.attackDamage,"!")):F("\ud83d\ude31 ".concat(t.name," missed ").concat(g.name,"!")),C(!0),setTimeout((function(){C(!1)}),5e3);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Error attacking boss:",e.t0),k("");case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),D=Object(a.useCallback)((function(e,t,a){var s=t.toNumber(),c=a.toNumber(),i=e.toString();console.log("AttackComplete: Boss Hp: ".concat(s," Player Hp: ").concat(c)),r===i.toLowerCase()?(x((function(e){return Object(h.a)(Object(h.a)({},e),{},{hp:s,prevHp:e.hp})})),n((function(e){return Object(h.a)(Object(h.a)({},e),{},{hp:c})}))):x((function(e){return Object(h.a)(Object(h.a)({},e),{},{hp:s})}))}),[r,n]);return Object(a.useEffect)((function(){y(b())}),[]),Object(a.useEffect)((function(){return d&&(U(),d.on("AttackComplete",D)),function(){d&&d.off("AttackComplete",D)}}),[d,U,D]),Object(p.jsxs)("div",{className:"arena-container",children:[g&&t&&Object(p.jsx)("div",{id:"toast",className:M?"show":"",children:Object(p.jsx)("div",{id:"desc",children:H})}),g&&Object(p.jsxs)("div",{className:"boss-container",children:[Object(p.jsxs)("div",{className:"boss-content ".concat(T),children:[Object(p.jsxs)("h2",{children:["\ud83d\udd25 ",g.name," \ud83d\udd25"]}),Object(p.jsxs)("div",{className:"image-content",children:[Object(p.jsx)("img",{src:g.imageURI,alt:"Boss ".concat(g.name)}),Object(p.jsxs)("div",{className:"health-bar",children:[Object(p.jsx)("progress",{value:g.hp,max:g.maxHp}),Object(p.jsx)("p",{children:"".concat(g.hp," / ").concat(g.maxHp," HP")})]})]})]}),"attacking"===T?Object(p.jsxs)("div",{className:"loading-indicator",children:[Object(p.jsx)(l,{}),Object(p.jsx)("p",{children:"Attacking \u2694\ufe0f"})]}):Object(p.jsx)("div",{className:"attack-container",children:Object(p.jsx)("button",{className:"cta-button",onClick:S,children:"\ud83d\udca5 Attack ".concat(g.name)})})]}),t&&Object(p.jsx)("div",{className:"players-container",children:Object(p.jsxs)("div",{className:"player-container",children:[Object(p.jsx)("h2",{children:"Your Character"}),Object(p.jsxs)("div",{className:"player",children:[Object(p.jsxs)("div",{className:"image-content",children:[Object(p.jsx)("h2",{children:t.name}),Object(p.jsx)("img",{src:t.imageURI,alt:"Character ".concat(t.name)}),Object(p.jsxs)("div",{className:"health-bar",children:[Object(p.jsx)("progress",{value:t.hp,max:t.maxHp}),Object(p.jsx)("p",{children:"".concat(t.hp," / ").concat(t.maxHp," HP")})]})]}),Object(p.jsx)("div",{className:"stats",children:Object(p.jsx)("h4",{children:"\u2694\ufe0f Attack Damage: ".concat(t.attackDamage)})})]})]})})]})}),g=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),c=Object(u.a)(s,2),d=c[0],y=c[1],h=Object(a.useState)(!1),g=Object(u.a)(h,2),x=g[0],O=g[1],v=Object(a.useCallback)(Object(o.a)(Object(i.a)().mark((function e(){var t,n,a,s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,n=t.ethereum){e.next=6;break}return console.log("Make sure you have MetaMask!"),O(!1),e.abrupt("return");case 6:return console.log("We have the ethereum object",n),e.next=9,n.request({method:"eth_accounts"});case 9:0!==(a=e.sent).length?(s=a[0],console.log("Found an authorized account:",s),r(s)):console.log("No authorized account found"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:O(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])}))),[]),T=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,n=t.ethereum){e.next=5;break}return alert("Get MetaMask!"),e.abrupt("return");case 5:return e.next=7,k();case 7:if(e.sent){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,n.request({method:"eth_requestAccounts"});case 11:a=e.sent,console.log("Connected",a[0]),r(a[0]),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"5"===window.ethereum.networkVersion){e.next=4;break}return alert("Please connect to Goerli!"),e.abrupt("return",!1);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 10:return e.abrupt("return",!0);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),w=Object(a.useCallback)(Object(o.a)(Object(i.a)().mark((function e(){var t,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Checking for Character NFT on address:",n),t=b(),e.next=4,t.checkIfUserHasNFT();case 4:(a=e.sent).name?(console.log("User has character NFT"),y(m(a))):console.log("No character NFT found"),O(!1);case 7:case"end":return e.stop()}}),e)}))),[n]);return Object(a.useEffect)((function(){O(!0),v()}),[v]),Object(a.useEffect)((function(){n&&(console.log("CurrentAccount:",n),w())}),[n,w]),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"header-container",children:[Object(p.jsx)("p",{className:"header gradient-text",children:"\u2694\ufe0f Metaverse Slayer \u2694\ufe0f"}),Object(p.jsx)("p",{className:"sub-text",children:"Team up to protect the Metaverse!"}),x?Object(p.jsx)(l,{}):n?n&&!d?Object(p.jsx)(j,{setCharacterNFT:y}):n&&d?Object(p.jsx)(f,{characterNFT:d,setCharacterNFT:y,currentAccount:n}):void 0:Object(p.jsxs)("div",{className:"connect-wallet-container",children:[Object(p.jsx)("img",{src:"https://64.media.tumblr.com/tumblr_mbia5vdmRd1r1mkubo1_500.gifv",alt:"Monty Python Gif"}),Object(p.jsx)("button",{className:"cta-button connect-wallet-button",onClick:T,children:"Connect Wallet To Get Started"})]})]}),Object(p.jsx)("div",{className:"footer-container"})]})})};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.a7605128.chunk.js.map