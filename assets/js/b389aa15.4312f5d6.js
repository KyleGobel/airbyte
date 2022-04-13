"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1818],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(f,o(o({ref:t},m),{},{components:a})):n.createElement(f,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85147:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={},s="Namespaces",p={unversionedId:"understanding-airbyte/namespaces",id:"understanding-airbyte/namespaces",title:"Namespaces",description:"High-Level Overview",source:"@site/../docs/understanding-airbyte/namespaces.md",sourceDirName:"understanding-airbyte",slug:"/understanding-airbyte/namespaces",permalink:"/understanding-airbyte/namespaces",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/understanding-airbyte/namespaces.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Change Data Capture \\(CDC\\)",permalink:"/understanding-airbyte/cdc"},next:{title:"Data Types in Records",permalink:"/understanding-airbyte/supported-data-types"}},m={},c=[{value:"High-Level Overview",id:"high-level-overview",level:2},{value:"What is a Namespace?",id:"what-is-a-namespace",level:2},{value:"Syncing",id:"syncing",level:2},{value:"Destination namespace configuration",id:"destination-namespace-configuration",level:2},{value:"- Mirror source structure",id:"--mirror-source-structure",level:3},{value:"- Destination connector settings",id:"--destination-connector-settings",level:3},{value:"- Custom format",id:"--custom-format",level:3},{value:"Examples",id:"examples",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Current Support",id:"current-support",level:2},{value:"Sources",id:"sources",level:3},{value:"Destination",id:"destination",level:3}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"namespaces"},"Namespaces"),(0,i.kt)("h2",{id:"high-level-overview"},"High-Level Overview"),(0,i.kt)("p",null,'{% hint style="info" %}\nThe high-level overview contains all the information you need to use Namespaces when pulling from APIs. Information past that can be read for advanced or educational purposes.\n{% endhint %}'),(0,i.kt)("p",null,"When looking through our connector docs, you'll notice that some sources and destinations support \"Namespaces.\" These allow you to organize and separate your data into groups in the destination if the destination supports it. In most cases, namespaces are schemas in the database you're replicating to. If your desired destination doesn't support it, you can ignore this feature."),(0,i.kt)("p",null,"Note that this is the location that both your normalized and raw data will get written to. Your raw data will show up with the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"_airbyte_raw_")," in the namespace you define. If you don't enable basic normalization, you will only receive the raw tables."),(0,i.kt)("p",null,"If only your destination supports namespaces, you have two simple options. ",(0,i.kt)("strong",{parentName:"p"},"This is the most likely case"),", as all HTTP APIs currently don't support Namespaces."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Mirror Destination Settings - Replicate to the default namespace in the destination, which will differ based on your destination."),(0,i.kt)("li",{parentName:"ol"},'Custom Format - Create a "Custom Format" to rename the namespace that your data will be replicated into.')),(0,i.kt)("p",null,"If both your desired source and destination support namespaces, you're likely using a more advanced use case with a database as a source, so continue reading."),(0,i.kt)("h2",{id:"what-is-a-namespace"},"What is a Namespace?"),(0,i.kt)("p",null,"Technical systems often group their underlying data into namespaces with each namespace's data isolated from another namespace. This isolation allows for better organisation and flexibility, leading to better usability."),(0,i.kt)("p",null,"An example of a namespace is the RDMS's ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," concept. Some common use cases for schemas are enforcing permissions, segregating test and production data and general data organisation."),(0,i.kt)("h2",{id:"syncing"},"Syncing"),(0,i.kt)("p",null,"The Airbyte Protocol supports namespaces and allows Sources to define namespaces, and Destinations to write to various namespaces."),(0,i.kt)("p",null,"If the Source does not support namespaces, the data will be replicated into the Destination's default namespace. For databases, the default namespace is the schema provided in the destination configuration."),(0,i.kt)("p",null,"If the Destination does not support namespaces, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-protocol/models/src/main/resources/airbyte_protocol/airbyte_protocol.yaml#L64"},"namespace field")," is ignored."),(0,i.kt)("h2",{id:"destination-namespace-configuration"},"Destination namespace configuration"),(0,i.kt)("p",null,"As part of the ",(0,i.kt)("a",{parentName:"p",href:"connections/"},"connections sync settings"),", it is possible to configure the namespace used by: 1. destination connectors: to store the ",(0,i.kt)("inlineCode",{parentName:"p"},"_airbyte_raw_*")," tables. 2. basic normalization: to store the final normalized tables."),(0,i.kt)("p",null,"Note that custom transformation outputs are not affected by the namespace settings from Airbyte: It is up to the configuration of the custom dbt project, and how it is written to handle its ",(0,i.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/building-a-dbt-project/building-models/using-custom-schemas"},"custom schemas"),". The default target schema for dbt in this case, will always be the destination namespace."),(0,i.kt)("p",null,"Available options for namespace configurations are:"),(0,i.kt)("h3",{id:"--mirror-source-structure"},"- Mirror source structure"),(0,i.kt)("p",null,"Some sources ","(","such as databases based on JDBC for example",")",' are providing namespace informations from which a stream has been extracted from. Whenever a source is able to fill this field in the catalog.json file, the destination will try to reproduce exactly the same namespace when this configuraton is set. For sources or streams where the source namespace is not known, the behavior will fall back to the "Destination Connector settings".'),(0,i.kt)("h3",{id:"--destination-connector-settings"},"- Destination connector settings"),(0,i.kt)("p",null,"All stream will be replicated and store in the default namespace defined on the destination settings page. In the destinations, namespace refers to:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Destination Connector"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Namespace setting"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"BigQuery"),(0,i.kt)("td",{parentName:"tr",align:"left"},"dataset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"MSSQL"),(0,i.kt)("td",{parentName:"tr",align:"left"},"schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"MySql"),(0,i.kt)("td",{parentName:"tr",align:"left"},"database")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Oracle DB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Postgres"),(0,i.kt)("td",{parentName:"tr",align:"left"},"schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Redshift"),(0,i.kt)("td",{parentName:"tr",align:"left"},"schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Snowflake"),(0,i.kt)("td",{parentName:"tr",align:"left"},"schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"S3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"path prefix")))),(0,i.kt)("h3",{id:"--custom-format"},"- Custom format"),(0,i.kt)("p",null,"When replicating multiple sources into the same destination, conflicts on tables being overwritten by syncs can occur."),(0,i.kt)("p",null,'For example, a Github source can be replicated into a "github" schema. But if we have multiple connections to different GitHub repositories ',"(","similar in multi-tenant scenarios",")",":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"we'd probably wish to keep the same table names ","(","to keep consistent queries downstream",")"),(0,i.kt)("li",{parentName:"ul"},"but store them in different namespaces ","(",'to avoid mixing data from different "tenants"',")")),(0,i.kt)("p",null,"To solve this, we can either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use a specific namespace for each connection, thus this option of custom format."),(0,i.kt)("li",{parentName:"ul"},"or, use prefix to stream names as described below.")),(0,i.kt)("p",null,"Note that we can use a template format string using variables that will be resolved during replication as follow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"${SOURCE_NAMESPACE}"),": will be replaced by the namespace provided by the source if available")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"The following table summarises how this works. We assume an example of replication configurations between a Postgres Source and Snowflake Destination ","(",'with settings of schema = "my',"_",'schema"',")",":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Namespace Configuration"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Source Namespace"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Source Table Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Destination Namespace"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Destination Table Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Mirror source structure"),(0,i.kt)("td",{parentName:"tr",align:"left"},"public"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,i.kt)("td",{parentName:"tr",align:"left"},"public"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Mirror source structure"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","schema"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Destination connector settings"),(0,i.kt)("td",{parentName:"tr",align:"left"},"public"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","schema"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Destination connector settings"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","schema"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},'Custom format = "custom"'),(0,i.kt)("td",{parentName:"tr",align:"left"},"public"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,i.kt)("td",{parentName:"tr",align:"left"},"custom"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},'Custom format = "${SOURCE',"_",'NAMESPACE}"'),(0,i.kt)("td",{parentName:"tr",align:"left"},"public"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,i.kt)("td",{parentName:"tr",align:"left"},"public"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},'Custom format = "my',"_","${SOURCE","_","NAMESPACE}","_",'schema"'),(0,i.kt)("td",{parentName:"tr",align:"left"},"public"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","public","_","schema"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},'Custom format = "   "'),(0,i.kt)("td",{parentName:"tr",align:"left"},"public"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","schema"),(0,i.kt)("td",{parentName:"tr",align:"left"},"my","_","table")))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Both Source and Destination connectors need to support namespaces."),(0,i.kt)("li",{parentName:"ul"},"Relevant Source and Destination connectors need to be at least version ",(0,i.kt)("inlineCode",{parentName:"li"},"0.3.0")," or later."),(0,i.kt)("li",{parentName:"ul"},"Airbyte version ",(0,i.kt)("inlineCode",{parentName:"li"},"0.21.0-alpha")," or later.")),(0,i.kt)("h2",{id:"current-support"},"Current Support"),(0,i.kt)("h3",{id:"sources"},"Sources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MSSQL"),(0,i.kt)("li",{parentName:"ul"},"MYSQL"),(0,i.kt)("li",{parentName:"ul"},"Oracle DB"),(0,i.kt)("li",{parentName:"ul"},"Postgres"),(0,i.kt)("li",{parentName:"ul"},"Redshift")),(0,i.kt)("h3",{id:"destination"},"Destination"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BigQuery"),(0,i.kt)("li",{parentName:"ul"},"MSSQL"),(0,i.kt)("li",{parentName:"ul"},"MySql"),(0,i.kt)("li",{parentName:"ul"},"Oracle DB"),(0,i.kt)("li",{parentName:"ul"},"Postgres"),(0,i.kt)("li",{parentName:"ul"},"Redshift"),(0,i.kt)("li",{parentName:"ul"},"Snowflake"),(0,i.kt)("li",{parentName:"ul"},"S3")))}d.isMDXComponent=!0}}]);