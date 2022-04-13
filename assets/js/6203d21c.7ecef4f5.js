"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5162],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),k=n,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||i;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37517:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],l={},p="Kafka",s={unversionedId:"integrations/sources/kafka",id:"integrations/sources/kafka",title:"Kafka",description:"Overview",source:"@site/../docs/integrations/sources/kafka.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/kafka",permalink:"/integrations/sources/kafka",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Jira",permalink:"/integrations/sources/jira"},next:{title:"Klaviyo",permalink:"/integrations/sources/klaviyo"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Sync overview",id:"sync-overview",level:3},{value:"Output schema",id:"output-schema",level:4},{value:"Features",id:"features",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Network Access",id:"network-access",level:4},{value:"<strong>Permissions</strong>",id:"permissions",level:4},{value:"Target topics",id:"target-topics",level:4},{value:"Setup the Kafka destination in Airbyte",id:"setup-the-kafka-destination-in-airbyte",level:3},{value:"Changelog",id:"changelog",level:2}],m={toc:c};function k(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kafka"},"Kafka"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Airbyte Kafka source allows you to sync data from Kafka. Each Kafka topic is written to the corresponding stream."),(0,i.kt)("h3",{id:"sync-overview"},"Sync overview"),(0,i.kt)("h4",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Each Kafka topic will be output into a stream."),(0,i.kt)("p",null,"Currently, this connector only reads data with JSON format. More formats ","(","e.g. Apache Avro",")"," will be supported in the future."),(0,i.kt)("h4",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To use the Kafka source, you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Kafka cluster 1.0 or above.")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("h4",{id:"network-access"},"Network Access"),(0,i.kt)("p",null,"Make sure your Kafka brokers can be accessed by Airbyte."),(0,i.kt)("h4",{id:"permissions"},(0,i.kt)("strong",{parentName:"h4"},"Permissions")),(0,i.kt)("p",null,"Airbyte should be allowed to read messages from topics, and these topics should be created before reading from Kafka."),(0,i.kt)("h4",{id:"target-topics"},"Target topics"),(0,i.kt)("p",null,"You can determine the topics from which messages are read via the ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_pattern")," configuration parameter. Messages can be read from a hardcoded, pre-defined topic."),(0,i.kt)("p",null,"To read all messages from a single hardcoded topic, enter its name in the ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_pattern")," field e.g: setting ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_pattern")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"my-topic-name")," will read all messages from that topic."),(0,i.kt)("p",null,"You can determine the topic partitions from which messages are read via the ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_partitions")," configuration parameter."),(0,i.kt)("h3",{id:"setup-the-kafka-destination-in-airbyte"},"Setup the Kafka destination in Airbyte"),(0,i.kt)("p",null,"You should now have all the requirements needed to configure Kafka as a destination in the UI. You can configure the following parameters on the Kafka destination ","(","though many of these are optional or have default values",")",":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bootstrap servers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Topic pattern")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Topic partition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test topic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Group ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max poll records")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SASL JAAS config")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SASL mechanism")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable auto commit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Auto commit interval ms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client DNS lookup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Retry backoff ms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Request timeout ms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Receive buffer bytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Repeated calls"))),(0,i.kt)("p",null,"More info about this can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#consumerconfigs"},"Kafka consumer configs documentation site"),"."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8865"},"8865")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix SASL config read issue")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8524"},"8524")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")))))}k.isMDXComponent=!0}}]);