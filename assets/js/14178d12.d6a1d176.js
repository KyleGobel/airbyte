"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6342],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return u}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(a),u=n,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return a?r.createElement(k,l(l({ref:e},p),{},{components:a})):r.createElement(k,l({ref:e},p))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},12098:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={},s="Databricks",d={unversionedId:"integrations/destinations/databricks",id:"integrations/destinations/databricks",title:"Databricks",description:"Overview",source:"@site/../docs/integrations/destinations/databricks.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/databricks",permalink:"/integrations/destinations/databricks",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/destinations/databricks.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"ClickHouse",permalink:"/integrations/destinations/clickhouse"},next:{title:"DynamoDB",permalink:"/integrations/destinations/dynamodb"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Sync Mode",id:"sync-mode",level:2},{value:"Data Source",id:"data-source",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Staging Parquet Files",id:"staging-parquet-files",level:2},{value:"Unmanaged Spark SQL Table",id:"unmanaged-spark-sql-table",level:2},{value:"Output Schema",id:"output-schema",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"CHANGELOG",id:"changelog",level:2}],m={toc:c};function u(t){var e=t.components,a=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"databricks"},"Databricks"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This destination syncs data to Databricks cluster. Each stream is written to its own table."),(0,i.kt)("p",null,"This connector requires a JDBC driver to connect to Databricks cluster. The driver is developed by Simba. Before using the driver and the connector, you must agree to the ",(0,i.kt)("a",{parentName:"p",href:"https://databricks.com/jdbc-odbc-driver-license"},"JDBC ODBC driver license"),". This means that you can only use this connector to connector third party applications to Apache Spark SQL within a Databricks offering using the ODBC and/or JDBC protocols."),(0,i.kt)("p",null,"Due to legal reasons, this is currently a private connector that is only available on Airbyte Cloud. We are working on publicizing it. Please follow ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/6043"},"this issue")," for progress. In the interim, you can build the connector locally, publish it to your own image registry, and use it privately. See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/destination-databricks/README.md"},"developer doc")," for details. Please do not publish this connector publicly."),(0,i.kt)("h2",{id:"sync-mode"},"Sync Mode"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Support"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Warning: this mode deletes all previously synced data in the configured bucket path.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"data-source"},"Data Source"),(0,i.kt)("p",null,"Databricks supports various cloud storage as the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.databricks.com/data/data-sources/index.html"},"data source"),". Currently, only Amazon S3 is supported."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Category"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Databricks"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server Hostname"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.databricks.com/integrations/bi/jdbc-odbc-bi.html#get-server-hostname-port-http-path-and-jdbc-url"},"documentation"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"HTTP Path"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.databricks.com/integrations/bi/jdbc-odbc-bi.html#get-server-hostname-port-http-path-and-jdbc-url"},"documentation"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Port"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Optional. Default to "443". See ',(0,i.kt)("a",{parentName:"td",href:"https://docs.databricks.com/integrations/bi/jdbc-odbc-bi.html#get-server-hostname-port-http-path-and-jdbc-url"},"documentation"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Personal Access Token"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.databricks.com/sql/user/security/personal-access-tokens.html"},"documentation"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"General"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Database schema"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Optional. Default to "public". Each data stream will be written to a table under this database schema.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Purge Staging Data"),(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The connector creates staging files and tables on S3. By default they will be purged when the data sync is complete. Set it to ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," for debugging purpose.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Data Source - S3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Bucket Name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the bucket to sync data into.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Bucket Path"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Subdirectory under the above bucket to sync the data into.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Region"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions"},"documentation")," for all region codes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Access Key ID"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"AWS/Minio credential.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Secret Access Key"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"AWS/Minio credential.")))),(0,i.kt)("p",null,'\u26a0\ufe0f Please note that under "Full Refresh Sync" mode, data in the configured bucket and path will be wiped out before each sync. We recommend you to provision a dedicated S3 resource for this sync to prevent unexpected data deletion from misconfiguration. \u26a0\ufe0f'),(0,i.kt)("h2",{id:"staging-parquet-files"},"Staging Parquet Files"),(0,i.kt)("p",null,"Data streams are first written as staging Parquet files on S3, and then loaded into Databricks tables. All the staging files will be deleted after the sync is done. For debugging purposes, here is the full path for a staging file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"s3://<bucket-name>/<bucket-path>/<uuid>/<stream-name>\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"s3://testing_bucket/data_output_path/98c450be-5b1c-422d-b8b5-6ca9903727d9/users\n     \u2191              \u2191                \u2191                                    \u2191\n     |              |                |                                    stream name\n     |              |                database schema\n     |              bucket path\n     bucket name\n")),(0,i.kt)("h2",{id:"unmanaged-spark-sql-table"},"Unmanaged Spark SQL Table"),(0,i.kt)("p",null,"Currently, all streams are synced into unmanaged Spark SQL tables. See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.databricks.com/data/tables.html#managed-and-unmanaged-tables"},"documentation")," for details. In summary, you have full control of the location of the data underlying an unmanaged table. The full path of each data stream is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"s3://<bucket-name>/<bucket-path>/<database-schema>/<stream-name>\n")),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"s3://testing_bucket/data_output_path/public/users\n     \u2191              \u2191                \u2191      \u2191\n     |              |                |      stream name\n     |              |                database schema\n     |              bucket path\n     bucket name\n")),(0,i.kt)("p",null,"Please keep these data directories on S3. Otherwise, the corresponding tables will have no data in Databricks."),(0,i.kt)("h2",{id:"output-schema"},"Output Schema"),(0,i.kt)("p",null,"Each table will have the following columns:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Column"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_airbyte_ab_id")),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"UUID.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_airbyte_emitted_at")),(0,i.kt)("td",{parentName:"tr",align:"center"},"timestamp"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Data emission timestamp.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Data fields from the source stream"),(0,i.kt)("td",{parentName:"tr",align:"center"},"various"),(0,i.kt)("td",{parentName:"tr",align:"left"},"All fields in the staging Parquet files will be expanded in the table.")))),(0,i.kt)("p",null,"Under the hood, an Airbyte data stream in Json schema is first converted to an Avro schema, then the Json object is converted to an Avro record, and finally the Avro record is outputted to the Parquet format. Because the data stream can come from any data source, the Json to Avro conversion process has arbitrary rules and limitations. Learn more about how source data is converted to Avro and the current limitations ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/json-avro-conversion"},"here"),"."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Credentials for a Databricks cluster. See ",(0,i.kt)("a",{parentName:"li",href:"https://docs.databricks.com/clusters/create.html"},"documentation"),"."),(0,i.kt)("li",{parentName:"ol"},"Credentials for an S3 bucket. See ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"documentation"),"."),(0,i.kt)("li",{parentName:"ol"},"Grant the Databricks cluster full access to the S3 bucket. Or mount it as Databricks File System ","(","DBFS",")",". See ",(0,i.kt)("a",{parentName:"li",href:"https://docs.databricks.com/data/data-sources/aws/amazon-s3.html"},"documentation"),".")),(0,i.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-01-06"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7622"},"#","7622")," ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/9153"},"#","9153")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Upgrade Spark JDBC driver to ",(0,i.kt)("inlineCode",{parentName:"td"},"2.6.21")," to patch Log4j vulnerability; update connector fields title/description.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-03"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/issues/7288"},"#","7288")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Support Json ",(0,i.kt)("inlineCode",{parentName:"td"},"additionalProperties"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-05"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6792"},"#","6792")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Require users to accept Databricks JDBC Driver ",(0,i.kt)("a",{parentName:"td",href:"https://databricks.com/jdbc-odbc-driver-license"},"Terms & Conditions"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5998"},"#","5998")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Initial private release.")))))}u.isMDXComponent=!0}}]);