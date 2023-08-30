"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6e3],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,d=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return a?o.createElement(d,r(r({ref:t},m),{},{components:a})):o.createElement(d,r({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4184:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const i={title:"Costs",slug:"/coin-set-costs"},r=void 0,s={unversionedId:"coin-set-model/costs",id:"coin-set-model/costs",title:"Costs",description:"Cost is a unit of measurement that is used to represent the available space in a block. It is measured by the amount of computing power required to execute the programs within it, as well as the physical drive space required to store data on each node's machine.",source:"@site/docs/coin-set-model/costs.md",sourceDirName:"coin-set-model",slug:"/coin-set-costs",permalink:"/zh/coin-set-costs",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/coin-set-model/costs.md",tags:[],version:"current",frontMatter:{title:"Costs",slug:"/coin-set-costs"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/zh/coin-set-intro"},next:{title:"Conditions",permalink:"/zh/conditions"}},l={},c=[{value:"Cost Calculation",id:"cost-calculation",level:2},{value:"Minimum Specs - Farming",id:"farming-spec",level:2},{value:"Minimum Specs - Syncing",id:"syncing-specs",level:2},{value:"Maximum Block Cost",id:"max-block-cost",level:2},{value:"Generator Execution",id:"generator-execution",level:4},{value:"Generator Signature Validation",id:"generator-signature-validation",level:4},{value:"Generator Cost",id:"generator-cost",level:3},{value:"Generator Program Size",id:"generator-size",level:3},{value:"Generator Program Coins",id:"generator-program-coins",level:3},{value:"Maximum Cost Per Block",id:"maximum-cost-per-block",level:3},{value:"Maximum Block Size",id:"maximum-block-size",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cost is a unit of measurement that is used to represent the available space in a block. It is measured by the amount of computing power required to execute the programs within it, as well as the physical drive space required to store data on each node's machine."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The maximum cost per block is 11,000,000,000 (11 billion), which is typically equivalent to around 400 KB of space. However, not every block is completely full."),(0,n.kt)("p",{parentName:"admonition"},"It is important to keep the cost usage of programs on the Chia blockchain as low as possible, to minimize the network pressure and resulting fees incurred.")),(0,n.kt)("h2",{id:"cost-calculation"},"Cost Calculation"),(0,n.kt)("p",null,"Every CLVM program uses a certain amount of cost during execution, based on the operators and the values they are called on. You can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://chialisp.com/costs"},"Cost page")," on the Chialisp website to learn more about the cost of various CLVM operators."),(0,n.kt)("p",null,"Additionally, certain conditions in a coin spend have a cost associated with them as well. A few common examples are ",(0,n.kt)("a",{parentName:"p",href:"/conditions#create-coin"},(0,n.kt)("inlineCode",{parentName:"a"},"CREATE_COIN"))," and ",(0,n.kt)("a",{parentName:"p",href:"/conditions#agg-sig-me"},(0,n.kt)("inlineCode",{parentName:"a"},"AGG_SIG_ME")),", which are expensive operations."),(0,n.kt)("p",null,"Finally, each byte of data that gets added to the blockchain has a cost of 12,000. Spend bundles are created using a serialized format of CLVM programs, calculated by running ",(0,n.kt)("a",{parentName:"p",href:"https://chialisp.com/commands#serialize"},"opc")," on the original CLVM program. Each two-digit pair of this format is equivalent to one byte, which costs 12,000 to store on the blockchain."),(0,n.kt)("p",null,"Aside from cost, the maximum number of atoms and pairs (counted separately) in a CLVM program is 2^31 apiece. If this threshold is exceeded, the program will terminate. However, this is likely a moot point, since it's extremely unlikely to write a program with this many atoms or pairs without exceeding the maximum cost per block."),(0,n.kt)("h2",{id:"farming-spec"},"Minimum Specs - Farming"),(0,n.kt)("p",null,"The minimum spec machine to run a full node is the Raspberry Pi 4. How do we know if this machine can stay synced? The worst case scenario occurs when multiple full transaction blocks are created with the minimum amount of time between them. This will temporarily put maximum load on the system. If the Pi can stay synced in this scenario, then it easily should be able to stay synced under normal load."),(0,n.kt)("p",null,"The first question we must answer is how much time elapses between transaction blocks. Chia's consensus mandates that at least three signage points must be reached before infusion_iterations may occur, so the minimum time between blocks is the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"3 signage points * signage point time\n3 signage points * (600 seconds per sub-slot / 64 signage points per sub-slot)\n3 signage points * 9.375 seconds per signage point\n")),(0,n.kt)("p",null,"Which is 28.125 seconds."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"average")," time between transaction blocks is ",(0,n.kt)("a",{parentName:"p",href:"/consensus-foliage#transaction-block-time"},"51.95 seconds"),". The lower a given time interval between transaction blocks (down to 28.125 seconds), the lower the probability of a transaction block being created in that time interval.")),(0,n.kt)("p",null,'A transaction block is considered "full" when it contains 2000 outputs. For this document, we\'ll assume this translates to 1000 vanilla transactions, each with two inputs and two outputs. This would give the network an average of 19.25 (1000/51.95) transactions per second.'),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"A transaction with only one input and one output is also possible. In theory, a block could therefore hold up to 2000 transactions, in which case the network would process an average of 38.5 (2000/51.95) transactions per second.")),(0,n.kt)("p",null,"With this goal in mind, Chia has created a ",(0,n.kt)("strong",{parentName:"p"},"generator program"),' that processes 2000 compressed inputs and outputs. This program simulates a "full block".'),(0,n.kt)("p",null,"To calculate the total amount of time for a Raspberry Pi 4 to process a full block, we must take into account three factors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The time required to run the generator program (2000 inputs and outputs)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The Raspberry Pi 4 accomplishes this in 5.2 seconds"))),(0,n.kt)("li",{parentName:"ul"},"The time required to validate 2000 public keys",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2.2 seconds"))),(0,n.kt)("li",{parentName:"ul"},"The time required to validate 2000 aggregate signatures",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"10.63 seconds")))),(0,n.kt)("p",null,"Therefore, the total amount of time required for a Raspberry Pi 4 to process a full block is 5.2 + 2.2 + 10.63 = 18.03 seconds. This is 10.095 seconds faster than the minimum time between blocks, and 33.92 seconds faster than the average. When considering other factors such as network latency and time required to fetch a full proof (",(0,n.kt)("a",{parentName:"p",href:"/proof-of-space#farming"},"640 ms on a slow HDD"),"), this still allows plenty of leeway for a Raspberry Pi 4 to stay synced and collect farming rewards."),(0,n.kt)("h2",{id:"syncing-specs"},"Minimum Specs - Syncing"),(0,n.kt)("p",null,"As a benchmark, we use the Raspberry Pi 4, Chia's minimum spec machine for farming. A Raspberry Pi 4 has four cores, so it can validate a pre-existing block in 18.03 / 4 = 4.5075 seconds, which is around 11.5 times the average real-time rate of 51.95 seconds. Even in the worst-case scenario where every transaction block is full, the Pi can sync faster than the chain is being created."),(0,n.kt)("h2",{id:"max-block-cost"},"Maximum Block Cost"),(0,n.kt)("p",null,"Now that we've established that a Raspberry Pi 4 can, indeed, sync and farm, even when every transaction block is full, we'll calculate the maximum cost per block."),(0,n.kt)("p",null,"There are three categories that go into determining a block's maximum cost:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Generator program cost, which is split into two parts",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Execution cost"),(0,n.kt)("li",{parentName:"ul"},"Signature validation cost"))),(0,n.kt)("li",{parentName:"ol"},"Generator program size (each byte has a cost)"),(0,n.kt)("li",{parentName:"ol"},"Generator program coins (each new coin has a cost)")),(0,n.kt)("p",null,"In the case of calculating the maximum cost, these three categories are to be given equal weight. We'll go through each of the categories individually."),(0,n.kt)("h4",{id:"generator-execution"},"Generator Execution"),(0,n.kt)("p",null,"(This is the first half of 1, above.)"),(0,n.kt)("p",null,"An Intel Macbook Pro was used as a reference platform to determine baseline costs based on CPU usage. The costs were then hand-tweaked for various reasons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To ascribe additional cost to operations that allocate memory, i.e. the operand per-byte cost was inflated. This additional cost is called ",(0,n.kt)("inlineCode",{parentName:"li"},"MALLOC_PER_BYTE_COST")," and amounts to 10 cost per byte."),(0,n.kt)("li",{parentName:"ul"},"The especially CPU intensive BLS operations (",(0,n.kt)("inlineCode",{parentName:"li"},"point_add")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"pubkey_for_exp"),") had their cost inflated to not differ too much from the Raspberry Pi 4."),(0,n.kt)("li",{parentName:"ul"},"Some operations that do not allocate memory and end up being common in relatively simple programs had their cost deflated. Specifically, ",(0,n.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"cons"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"listp"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"first"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"rest"),".")),(0,n.kt)("p",null,"The result is that the generator program has an execution cost of 1 317 054 957."),(0,n.kt)("h4",{id:"generator-signature-validation"},"Generator Signature Validation"),(0,n.kt)("p",null,"(This is the second half of 1, above.)"),(0,n.kt)("p",null,"The signature validation cost is based on computation time. BLS operations involve public key and aggregate signature validation, which are multiplied by the number of outputs."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Time per public key validation: 0.179370 ms"),(0,n.kt)("li",{parentName:"ul"},"Time per aggregate signature validation: 0.972140 ms"),(0,n.kt)("li",{parentName:"ul"},"Total time for 2000 key and signature validations: (0.179370 + 0.972140) ","*"," 2000 = 2303.02 ms")),(0,n.kt)("p",null,"Each 1 cost is designed to require 1 nanosecond, so we need to multiply the result by 1 million (ns/ms)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cost for the generator program's BLS operations: ",(0,n.kt)("inlineCode",{parentName:"li"},"2303.02 * 1 000 000 = 2 303 020 000"),".")),(0,n.kt)("p",null,"Using this info, we can also calculate the cost of each ",(0,n.kt)("inlineCode",{parentName:"p"},"AGG_SIG_UNSAFE")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"AGG_SIG_ME")," condition in all CLVM programs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cost per BLS condition: ",(0,n.kt)("inlineCode",{parentName:"li"},"(0.179370 + 0.972140) * 1 000 000 = 1 151 510"),". We round this number up to 1 200 000.")),(0,n.kt)("h3",{id:"generator-cost"},"Generator Cost"),(0,n.kt)("p",null,"(This is the total cost of 1, above.)"),(0,n.kt)("p",null,"Taking the previous two calculations into account, the total cost to execute and run the BLS operations of the generator program is: ",(0,n.kt)("inlineCode",{parentName:"p"},"1 317 054 957 + 2 303 020 000 = 3 620 074 957"),"."),(0,n.kt)("h3",{id:"generator-size"},"Generator Program Size"),(0,n.kt)("p",null,"(This is the cost of 2, above.)"),(0,n.kt)("p",null,"We know that 1, 2, and 3 all will be assigned equal maximum costs, which we've already established is 3 620 074 957. This is the size-based cost of the generator program."),(0,n.kt)("p",null,"The generator program itself is 298 249 bytes. Each byte, therefore has a cost of ",(0,n.kt)("inlineCode",{parentName:"p"},"3 620 074 957 / 298 249 = 12 137.76"),". We round this number to 12 000 per byte. This is the cost per bye of all CLVM programs."),(0,n.kt)("h3",{id:"generator-program-coins"},"Generator Program Coins"),(0,n.kt)("p",null,"(This is the cost of 3, above.)"),(0,n.kt)("p",null,"Just like the previous calculation, the total cost of the generator program's coins is 3 620 074 957. The generator program creates 2000 coins, so the cost per ",(0,n.kt)("inlineCode",{parentName:"p"},"CREATE_COIN")," in all CLVM programs is ",(0,n.kt)("inlineCode",{parentName:"p"},"3 620 074 957 / 2000 = 1 810 037.4785"),". We round this number to 1 800 000."),(0,n.kt)("h3",{id:"maximum-cost-per-block"},"Maximum Cost Per Block"),(0,n.kt)("p",null,"To calculate the maximum cost per block, we simply add the generator program's execution, size, and coin costs:"),(0,n.kt)("p",null,"Theoretical maximum cost per block: ",(0,n.kt)("inlineCode",{parentName:"p"},"3 620 074 957 + 3 620 074 957 + 3 620 074 957 = 10 860 224 871")," We round this number to 11 000 000 000."),(0,n.kt)("h3",{id:"maximum-block-size"},"Maximum Block Size"),(0,n.kt)("p",null,"The theoretical maximum size of a single block is ",(0,n.kt)("inlineCode",{parentName:"p"},"maximum cost per block / cost per byte"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"11 000 000 000 / 12 000 = 916 667 bytes"),". However, this number ignores the costs of all operators. If you want a CLVM program to do anything useful, the maximum size would be closer to 400 KB."),(0,n.kt)("p",null,"Even this number is not realistic because it assumes that a single program will take up an entire block. The maximum number of vanilla transactions (with two outputs) per block is 1000. Therefore, if there is fee pressure on Chia's blockchain, a 400 KB program would need to include a larger fee than the top 1000 vanilla transactions in the mempool -- combined -- in order for a farmer to include it."))}u.isMDXComponent=!0}}]);