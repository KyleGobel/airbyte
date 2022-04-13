"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4254],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77744:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={description:"A high level view of Airbyte's components."},l="Architecture overview",s={unversionedId:"understanding-airbyte/high-level-view",id:"understanding-airbyte/high-level-view",title:"Architecture overview",description:"A high level view of Airbyte's components.",source:"@site/../docs/understanding-airbyte/high-level-view.md",sourceDirName:"understanding-airbyte",slug:"/understanding-airbyte/high-level-view",permalink:"/understanding-airbyte/high-level-view",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/understanding-airbyte/high-level-view.md",tags:[],version:"current",frontMatter:{description:"A high level view of Airbyte's components."},sidebar:"mySidebar",previous:{title:"Operations",permalink:"/understanding-airbyte/operations"},next:{title:"Workers & Jobs",permalink:"/understanding-airbyte/jobs"}},u={},p=[],d={toc:p};function f(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architecture-overview"},"Architecture overview"),(0,o.kt)("p",null,"Airbyte is conceptually composed of two parts: platform and connectors. "),(0,o.kt)("p",null,"The platform provides all the horizontal services required to configure and run data movement operations e.g: the UI, configuration API, job scheduling, logging, alerting, etc. and is structured as a set of microservices. "),(0,o.kt)("p",null,"Connectors are independent modules which push/pull data to/from sources and destinations. Connectors are built in accordance with the ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-specification"},"Airbyte Specification"),", which describes the interface with which data can be moved between a source and a destination using Airbyte. Connectors are packaged as Docker images, which allows total flexibility over the technologies used to implement them. "),(0,o.kt)("p",null,"A more concrete diagram can be seen below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3.048-Kilometer view",src:n(91121).Z,width:"3338",height:"1294"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UI"),": An easy-to-use graphical interface for interacting with the Airbyte API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WebApp Server"),": Handles connection between UI and API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Config Store"),": Stores all the connections information ","(","credentials, frequency...",")","."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Scheduler Store"),": Stores statuses and job information for the scheduler bookkeeping."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Config API"),": Airbyte's main control plane. All operations in Airbyte such as creating sources, destinations, connections, managing configurations, etc.. are configured and invoked from the API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Scheduler"),": The scheduler takes work requests from the API and sends them to the Temporal service to parallelize. It is responsible for tracking success/failure and for triggering syncs based on the configured frequency."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Temporal Service"),": Manages the task queue and workflows for the Scheduler. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Worker"),": The worker connects to a source connector, pulls the data and writes it to a destination."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Temporary Storage"),": A storage that workers can use whenever they need to spill data on a disk.")))}f.isMDXComponent=!0},91121:function(e,t,n){t.Z=n.p+"assets/images/understanding_airbyte_high_level_architecture-ac5aa905ca8916521b41cdaecec4cd08.png"}}]);