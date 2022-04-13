"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4186],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||n;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25006:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),l=["components"],i={},p="YouTube Analytics",s={unversionedId:"integrations/sources/youtube-analytics",id:"integrations/sources/youtube-analytics",title:"YouTube Analytics",description:"YouTube Analytics connector supports YouTube Analytics Bulk Reports. It retrieves bulk reports containing YouTube Analytics data for a channel or content owner.",source:"@site/../docs/integrations/sources/youtube-analytics.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/youtube-analytics",permalink:"/integrations/sources/youtube-analytics",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/youtube-analytics.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Wordpress",permalink:"/integrations/sources/wordpress"},next:{title:"Zencart",permalink:"/integrations/sources/zencart"}},u={},c=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Features",id:"features",level:2},{value:"Supported Reports",id:"supported-reports",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Rate Limits &amp; Performance Considerations (Airbyte Open-Source)",id:"rate-limits--performance-considerations-airbyte-open-source",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"youtube-analytics"},"YouTube Analytics"),(0,n.kt)("p",null,"YouTube Analytics connector supports ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/youtube/reporting/v1/reports"},"YouTube Analytics Bulk Reports"),". It retrieves bulk reports containing YouTube Analytics data for a ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports"},"channel")," or ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/youtube/reporting/v1/reports/content_owner_reports"},"content owner"),"."),(0,n.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,n.kt)("p",null,"YouTube does not start to generate a report until you create a ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/youtube/reporting/v1/reports#step-3:-create-a-reporting-job"},"reporting job")," for that report. Airbyte creates a reporting job for your report or uses current reporting job if it's already exists. The report will be available within 48 hours of creating the reporting job and will be for the day that the job was scheduled. For example, if you schedule a job on September 1, 2015, then the report for September 1, 2015, will be ready on September 3, 2015. The report for September 2, 2015, will be posted on September 4, 2015, and so forth. Youtube also generates historical data reports covering the 30-day period prior to when you created the job. Airbyte syncs all available historical data too."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Channel Reports"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Content Owner Reports"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coming soon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"YouTube Data API"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coming soon")))),(0,n.kt)("h3",{id:"supported-reports"},"Supported Reports"),(0,n.kt)("p",null,"This source is capable of syncing the following reports and their data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-annotations"},"channel_annotations_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-user-activity"},"channel_basic_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-cards"},"channel_cards_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-combined"},"channel_combined_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-viewer-demographics"},"channel_demographics_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-device-type-and-operating-system"},"channel_device_os_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-end-screens"},"channel_end_screens_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-playback-locations"},"channel_playback_location_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-province"},"channel_province_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-content-sharing"},"channel_sharing_service_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-subtitles"},"channel_subtitles_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-traffic-sources"},"channel_traffic_source_a2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-user-activity"},"playlist_basic_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-combined"},"playlist_combined_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-device-type-and-operating-system"},"playlist_device_os_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-playback-locations"},"playlist_playback_location_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-province"},"playlist_province_a1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-traffic-sources"},"playlist_traffic_source_a1"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/apis/api/youtubereporting.googleapis.com/overview"},"YouTube Reporting API dashboard")," in the project for your service user. Enable the API for your account."),(0,n.kt)("li",{parentName:"ul"},"Use your Google account and authorize over Google's OAuth 2.0 on connection setup. Please make sure to grant the following ",(0,n.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports#step-1:-retrieve-authorization-credentials"},"authorization scope"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"https://www.googleapis.com/auth/yt-analytics.readonly"),".")),(0,n.kt)("h2",{id:"rate-limits--performance-considerations-airbyte-open-source"},"Rate Limits & Performance Considerations ","(","Airbyte Open-Source",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Free requests per day: 20,000"),(0,n.kt)("li",{parentName:"ul"},"Free requests per 100 seconds: 100"),(0,n.kt)("li",{parentName:"ul"},"Free requests per minute: 60")),(0,n.kt)("p",null,"Quota usage is not an issue because data is retrieved once and then filtered, sorted, and queried within the application."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7407"},"7407")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}m.isMDXComponent=!0}}]);