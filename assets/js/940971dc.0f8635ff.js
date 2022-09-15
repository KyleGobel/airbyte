"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2797],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(h,o(o({ref:e},m),{},{components:a})):n.createElement(h,o({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7657:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="Postgres",l={unversionedId:"integrations/destinations/postgres",id:"integrations/destinations/postgres",title:"Postgres",description:"This page guides you through the process of setting up the Postgres destination connector.",source:"@site/../docs/integrations/destinations/postgres.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/postgres",permalink:"/integrations/destinations/postgres",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/postgres.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Oracle DB",permalink:"/integrations/destinations/oracle"},next:{title:"Google PubSub",permalink:"/integrations/destinations/pubsub"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure Network Access",id:"configure-network-access",level:4},{value:"Step 1: Set up Postgres",id:"step-1-set-up-postgres",level:2},{value:"<strong>Permissions</strong>",id:"permissions",level:4},{value:"Step 2: Set up the Postgres connector in Airbyte",id:"step-2-set-up-the-postgres-connector-in-airbyte",level:2},{value:"Target Database",id:"target-database",level:4},{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Schema map",id:"schema-map",level:2},{value:"Output Schema",id:"output-schema",level:4},{value:"Tutorials",id:"tutorials",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"postgres"},"Postgres"),(0,r.kt)("p",null,"This page guides you through the process of setting up the Postgres destination connector."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use the Postgres destination, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Postgres server version 9.5 or above")),(0,r.kt)("p",null,"Airbyte Cloud only supports connecting to your Postgres instances with SSL or TLS encryption. TLS is\nused by default. Other than that, you can proceed with the open-source instructions below."),(0,r.kt)("p",null,"You'll need the following information to configure the Postgres destination:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host")," - The host name of the server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port")," - The port number the server is listening on. Defaults to the PostgreSQL\u2122 standard port number (5432)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Schema Name")," - Specify the schema (or several schemas separated by commas) to be set in the search-path. These schemas will be used to resolve unqualified object names used in statements executed over this connection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Database")," - The database name. The default is to connect to a database with the same name as the user name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JDBC URL Params")," (optional)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jdbc.postgresql.org/documentation/head/connect.html"},"Refer to this guide for more details")),(0,r.kt)("h4",{id:"configure-network-access"},"Configure Network Access"),(0,r.kt)("p",null,"Make sure your Postgres database can be accessed by Airbyte. If your database is within a VPC, you\nmay need to allow access from the IP you're using to expose Airbyte."),(0,r.kt)("h2",{id:"step-1-set-up-postgres"},"Step 1: Set up Postgres"),(0,r.kt)("h4",{id:"permissions"},(0,r.kt)("strong",{parentName:"h4"},"Permissions")),(0,r.kt)("p",null,"You need a Postgres user with the following permissions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can create tables and write rows."),(0,r.kt)("li",{parentName:"ul"},"can create schemas e.g:")),(0,r.kt)("p",null,"You can create such a user by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE USER airbyte_user PASSWORD <password>;\nGRANT CREATE, TEMPORARY ON DATABASE <database> TO airbyte_user;\n")),(0,r.kt)("p",null,"You can also use a pre-existing user but we highly recommend creating a dedicated user for Airbyte."),(0,r.kt)("h2",{id:"step-2-set-up-the-postgres-connector-in-airbyte"},"Step 2: Set up the Postgres connector in Airbyte"),(0,r.kt)("h4",{id:"target-database"},"Target Database"),(0,r.kt)("p",null,"You will need to choose an existing database or create a new database that will be used to store\nsynced data from Airbyte."),(0,r.kt)("h2",{id:"naming-conventions"},"Naming Conventions"),(0,r.kt)("p",null,"From ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.0/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIERS"},"Postgres SQL Identifiers syntax"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SQL identifiers and key words must begin with a letter ","(","a-z, but also letters with diacritical\nmarks and non-Latin letters",")"," or an underscore ","(","_",")",".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Subsequent characters in an identifier or key word can be letters, underscores, digits ","(","0-9",")",", or\ndollar signs ","(","$",")","."),(0,r.kt)("p",{parentName:"li"},"Note that dollar signs are not allowed in identifiers according to the SQL standard,\nso their use might render applications less portable. The SQL standard will not define a key word\nthat contains digits or starts or ends with an underscore, so identifiers of this form are safe\nagainst possible conflict with future extensions of the standard.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The system uses no more than NAMEDATALEN-1 bytes of an identifier; longer names can be written in\ncommands, but they will be truncated. By default, NAMEDATALEN is 64 so the maximum identifier\nlength is 63 bytes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Quoted identifiers can contain any character, except the character with code zero. ","(","To include a\ndouble quote, write two double quotes.",")"," This allows constructing table or column names that would\notherwise not be possible, such as ones containing spaces or ampersands. The length limitation\nstill applies.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Quoting an identifier also makes it case-sensitive, whereas unquoted names are always folded to\nlower case.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In order to make your applications portable and less error-prone, use consistent quoting with each name (either always quote it or never quote it)."))),(0,r.kt)("p",null,"Note, that Airbyte Postgres destination will create tables and schemas using the Unquoted\nidentifiers when possible or fallback to Quoted Identifiers if the names are containing special\ncharacters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"p"},"Destinations"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"p"},"new destination"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Set up the destination page, enter the name for the Postgres connector\nand select ",(0,r.kt)("strong",{parentName:"p"},"Postgres")," from the Destination type dropdown.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a name for your source.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For the ",(0,r.kt)("strong",{parentName:"p"},"Host"),", ",(0,r.kt)("strong",{parentName:"p"},"Port"),", and ",(0,r.kt)("strong",{parentName:"p"},"DB Name"),", enter the hostname, port number, and name for your Postgres database.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List the ",(0,r.kt)("strong",{parentName:"p"},"Default Schemas"),"."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The schema names are case sensitive. The 'public' schema is set by default. Multiple schemas may be used at one time. No schemas set explicitly - will sync all of existing.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"User")," and ",(0,r.kt)("strong",{parentName:"p"},"Password"),", enter the username and password you created in ",(0,r.kt)("a",{parentName:"p",href:"#step-1-optional-create-a-dedicated-read-only-user"},"Step 1"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Airbyte Open Source, toggle the switch to connect using SSL. For Airbyte Cloud uses SSL by default.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For SSL Modes, select:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disable")," to disable encrypted communication between Airbyte and the source"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"allow")," to enable encrypted communication only when required by the source"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"prefer")," to allow unencrypted communication only when the source doesn't support encryption"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"require")," to always require encryption. Note: The connection will fail if the source doesn't support encryption."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"verify-ca")," to always require encryption and verify that the source has a valid SSL certificate"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"verify-full")," to always require encryption and verify the identity of the source"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To customize the JDBC connection beyond common options, specify additional supported ",(0,r.kt)("a",{parentName:"p",href:"https://jdbc.postgresql.org/documentation/head/connect.html"},"JDBC URL parameters")," as key-value pairs separated by the symbol & in the ",(0,r.kt)("strong",{parentName:"p"},"JDBC URL Parameters (Advanced)")," field."),(0,r.kt)("p",{parentName:"li"},"Example: key1=value1&key2=value2&key3=value3"),(0,r.kt)("p",{parentName:"li"},"These parameters will be added at the end of the JDBC URL that the AirByte will use to connect to your Postgres database."),(0,r.kt)("p",{parentName:"li"},"The connector now supports ",(0,r.kt)("inlineCode",{parentName:"p"},"connectTimeout")," and defaults to 60 seconds. Setting connectTimeout to 0 seconds will set the timeout to the longest time available."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Do not use the following keys in JDBC URL Params field as they will be overwritten by Airbyte:\n",(0,r.kt)("inlineCode",{parentName:"p"},"currentSchema"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"sslmode"),"."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is an advanced configuration option. Users are advised to use it with caution.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For SSH Tunnel Method, select:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"No Tunnel")," for a direct connection to the database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SSH Key Authentication")," to use an RSA Private as your secret for establishing the SSH tunnel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password Authentication")," to use a password as your secret for establishing the SSH tunnel")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since Airbyte Cloud requires encrypted communication, select ",(0,r.kt)("strong",{parentName:"p"},"SSH Key Authentication")," or ",(0,r.kt)("strong",{parentName:"p"},"Password Authentication")," if you selected ",(0,r.kt)("strong",{parentName:"p"},"disable"),", ",(0,r.kt)("strong",{parentName:"p"},"allow"),", or ",(0,r.kt)("strong",{parentName:"p"},"prefer")," as the ",(0,r.kt)("strong",{parentName:"p"},"SSL Mode"),"; otherwise, the connection will fail.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Set up destination"),"."))),(0,r.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,r.kt)("p",null,"The Postgres destination connector supports the\nfollowing",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"}," sync modes"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"schema-map"},"Schema map"),(0,r.kt)("h4",{id:"output-schema"},"Output Schema"),(0,r.kt)("p",null,"Each stream will be mapped to a separate table in Postgres. Each table will contain 3 columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed. The column type in\nPostgres is ",(0,r.kt)("inlineCode",{parentName:"li"},"VARCHAR"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source.\nThe column type in Postgres is ",(0,r.kt)("inlineCode",{parentName:"li"},"TIMESTAMP WITH TIME ZONE"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data. The column type in Postgres\nis ",(0,r.kt)("inlineCode",{parentName:"li"},"JSONB"),".")),(0,r.kt)("h2",{id:"tutorials"},"Tutorials"),(0,r.kt)("p",null,"Now that you have set up the Postgres destination connector, check out the following tutorials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://airbyte.com/tutorials/migrate-from-mysql-to-postgresql"},"Migrate from mysql to postgres")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://airbyte.com/tutorials/postgres-replication"},"Postgres replication"))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-09-08"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16046"},"16046")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fix missing database name URL Encoding")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.23"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-07-18"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16260"},"16260")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Prevent traffic going on an unsecured channel in strict-encryption version of destination postgres")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.22"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-07-18"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13840"},"13840")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Added the ability to connect using different SSL modes and SSL certificates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.21"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-07-06"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14479"},"14479")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Publish amd64 and arm64 versions of the connector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-05-17"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12820"},"12820")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Improved 'check' operation performance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.19"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-25"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12195"},"12195")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add support for additional JDBC URL Params input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.18"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-12"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11514"},"11729")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bump mina-sshd from 2.7.0 to 2.8.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.17"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-04-05"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11729"},"11729")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fixed bug with dashes in schema name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.15"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-25"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10421"},"10421")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Refactor JDBC parameters handling")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.14"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(unpublished) Add ",(0,r.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-12-01"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8371"},"8371")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Fixed incorrect handling "\\n" in ssh key')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7719"},"7719")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Improve handling of wide rows by buffering records based on their byte size rather than their count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-09-07"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5743"},"5743")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add SSH Tunnel support")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3.10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-08-11"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5336"},"5336")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Destination Postgres: fix \\u0000","(","NULL",")"," value processing")))))}d.isMDXComponent=!0}}]);