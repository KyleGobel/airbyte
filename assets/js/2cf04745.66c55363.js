"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[229],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},41605:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],l={},p="Upgrading Airbyte",s={unversionedId:"operator-guides/upgrading-airbyte",id:"operator-guides/upgrading-airbyte",title:"Upgrading Airbyte",description:"Overview",source:"@site/../docs/operator-guides/upgrading-airbyte.md",sourceDirName:"operator-guides",slug:"/operator-guides/upgrading-airbyte",permalink:"/operator-guides/upgrading-airbyte",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/operator-guides/upgrading-airbyte.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"On DigitalOcean \\(Droplet\\)",permalink:"/deploying-airbyte/on-digitalocean-droplet"},next:{title:"Resetting Your Data",permalink:"/operator-guides/reset"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Determining if you need to Upgrade",id:"determining-if-you-need-to-upgrade",level:2},{value:"Mandatory Intermediate Upgrade",id:"mandatory-intermediate-upgrade",level:2},{value:"Upgrading on Docker",id:"upgrading-on-docker",level:2},{value:"Resetting your Configuration",id:"resetting-your-configuration",level:3},{value:"Upgrading on K8s (0.27.0-alpha and above)",id:"upgrading-on-k8s-0270-alpha-and-above",level:2},{value:"Upgrading on K8s (0.26.4-alpha and below)",id:"upgrading-on-k8s-0264-alpha-and-below",level:2}],c={toc:d};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upgrading-airbyte"},"Upgrading Airbyte"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This tutorial will describe how to determine if you need to run this upgrade process, and if you do, how to do so. This process does require temporarily turning off Airbyte."),(0,o.kt)("p",null,"When Airbyte is upgraded, it will attempt to upgrade some connector versions. It follows the following rules: 1. if a connector is not used, it will be upgraded to the latest version 2. if a connector is used, it will NOT be upgraded to avoid disrupting working workflows. If you want to upgrade a connector, do so in the settings page in the webapp."),(0,o.kt)("h2",{id:"determining-if-you-need-to-upgrade"},"Determining if you need to Upgrade"),(0,o.kt)("p",null,"Airbyte intelligently performs upgrades automatically based off of your version defined in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file and will handle data migration for you."),(0,o.kt)("p",null,"If you are running ",(0,o.kt)("a",{parentName:"p",href:"/deploying-airbyte/on-kubernetes"},"Airbyte on Kubernetes"),", you will need to use one of the two processes defined ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/upgrading-airbyte#upgrading-k-8-s"},"here")," that differ based on your Airbyte version."),(0,o.kt)("h2",{id:"mandatory-intermediate-upgrade"},"Mandatory Intermediate Upgrade"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If your current version of airbyte is < v0.32.0-alpha-patch-1, you first need to upgrade to this version before upgrading to any later version.")),(0,o.kt)("p",null,"The reason for this is that there are breaking changes made in v0.32.0-alpha-patch-1, and the logic for these changes is removed in later versions, making it impossible to upgrade directly.\nTo upgrade to v0.32.0-alpha-patch-1, follow the steps in the following sections, but replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker pull")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"wget")," commands with the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you are in a cloned Airbyte repo, v0.32.0-alpha-patch-1 can be pulled from GitHub with"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"git checkout v0.32.0-alpha-patch-1\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you are running Airbyte from downloaded ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," files without a GitHub repo, run ",(0,o.kt)("inlineCode",{parentName:"p"},"wget -N https://raw.githubusercontent.com/airbytehq/airbyte/v0.32.0-alpha-patch-1/{.env,docker-compose.yaml}")," to pull this version and overwrite both files."))),(0,o.kt)("p",null,"If you use custom connectors, this upgrade requires your all of your connector specs to be retrievable from the node running Airbyte, or Airbyte will fail on startup. If the specs are not retrievable, you need to fix this before proceeding. Alternatively, you could delete the custom connector definitions from Airbyte upon upgrade by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"VERSION_0_32_0_FORCE_UPGRADE")," environment variable to true. This will cause the server to delete any connectors for which specs cannot be retrieved, as well as any connections built on top of them."),(0,o.kt)("h2",{id:"upgrading-on-docker"},"Upgrading on Docker"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In a terminal, on the host where Airbyte is running, turn off Airbyte."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose down\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upgrade the docker instance to new version."),(0,o.kt)("p",{parentName:"li"},"i. If you are running Airbyte from a cloned version of the Airbyte GitHub repo and want to use the current most recent stable version, just ",(0,o.kt)("inlineCode",{parentName:"p"},"git pull"),"."),(0,o.kt)("p",{parentName:"li"},"ii. If you are running Airbyte from downloaded ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," files without a GitHub repo, run ",(0,o.kt)("inlineCode",{parentName:"p"},"wget -N https://raw.githubusercontent.com/airbytehq/airbyte/master/{.env,docker-compose.yaml}")," to pull the latest versions and overwrite both files.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Bring Airbyte back online."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")))),(0,o.kt)("h3",{id:"resetting-your-configuration"},"Resetting your Configuration"),(0,o.kt)("p",null,"If you did not start Airbyte from the root of the Airbyte monorepo, you may run into issues where existing orphaned Airbyte configurations will prevent you from upgrading with the automatic process. To fix this, we will need to globally remove these lost Airbyte configurations. You can do this with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker volume rm $(docker volume ls -q | grep airbyte)"),"."),(0,o.kt)("p",null,'{% hint style="danger" %}\nThis will completely reset your Airbyte deployment back to scratch and you will lose all data.\n{% endhint %}'),(0,o.kt)("h2",{id:"upgrading-on-k8s-0270-alpha-and-above"},"Upgrading on K8s ","(","0.27.0-alpha and above",")"),(0,o.kt)("p",null,"If you are upgrading from ","(","i.e. your current version of Airbyte is",")"," Airbyte version ",(0,o.kt)("strong",{parentName:"p"},"0.27.0-alpha or above")," on Kubernetes :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In a terminal, on the host where Airbyte is running, turn off Airbyte."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete deployments airbyte-db airbyte-scheduler airbyte-server airbyte-temporal airbyte-webapp --namespace=<yournamespace or default>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upgrade the kube deployment to new version."),(0,o.kt)("p",{parentName:"li"},"i. If you are running Airbyte from a cloned version of the Airbyte GitHub repo and want to use the current most recent stable version, just ",(0,o.kt)("inlineCode",{parentName:"p"},"git pull"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Bring Airbyte back online."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -k kube/overlays/stable\n")),(0,o.kt)("p",{parentName:"li"},"After 2-5 minutes, ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods | grep airbyte")," should show ",(0,o.kt)("inlineCode",{parentName:"p"},"Running")," as the status for all the core Airbyte pods. This may take longer on Kubernetes clusters with slow internet connections."),(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl port-forward svc/airbyte-webapp-svc 8000:80")," to allow access to the UI/API."))),(0,o.kt)("h2",{id:"upgrading-on-k8s-0264-alpha-and-below"},"Upgrading on K8s ","(","0.26.4-alpha and below",")"),(0,o.kt)("p",null,"If you are upgrading from ","(","i.e. your current version of Airbyte is",")"," Airbyte version ",(0,o.kt)("strong",{parentName:"p"},"before 0.27.0-alpha")," on Kubernetes we ",(0,o.kt)("strong",{parentName:"p"},"do not")," support automatic migration. Please follow the following steps to upgrade your Airbyte Kubernetes deployment."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switching over to your browser, navigate to the Admin page in the UI. Then go to the Configuration Tab. Click Export. This will download a compressed back-up archive ","(","gzipped tarball",")"," of all of your Airbyte configuration data and sync history locally."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Note: Any secrets that you have entered into Airbyte will be in this archive, so you should treat it as secret."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Back to the terminal, migrate the local archive to the new version using the Migration App ","(","packaged in a docker container",")","."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v <path to directory containing downloaded airbyte_archive.tar.gz>:/config airbyte/migration:<version you are upgrading to> --\\\n  --input /config/airbyte_archive.tar.gz\\\n  --output <path to where migrated archive will be written (should end in .tar.gz)>\\\n  [ --target-version <version you are migrating to or empty for latest> ]\n")),(0,o.kt)("p",{parentName:"li"},"Here's an example of what it might look like with the values filled in. It assumes that the downloaded ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte_archive.tar.gz")," is in ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v /tmp:/config airbyte/migration:0.35.67-alpha --\\\n--input /config/airbyte_archive.tar.gz\\\n--output /config/airbyte_archive_migrated.tar.gz\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Turn off Airbyte fully and ",(0,o.kt)("strong",{parentName:"p"},"(","see warning",")")," delete the existing Airbyte Kubernetes volumes."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"WARNING: Make sure you have already exported your data ","(","step 1",")",". This command is going to delete your data in Kubernetes, you may lose your airbyte configurations!")),(0,o.kt)("p",{parentName:"li"},"This is where all airbyte configurations are saved. Those configuration files need to be upgraded and restored with the proper version in the following steps."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Careful, this is deleting data!\nkubectl delete -k kube/overlays/stable\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow ",(0,o.kt)("strong",{parentName:"p"},"Step 2")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Upgrading on Docker")," section to check out the most recent version of Airbyte. Although it is possible to migrate by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in the kube overlay directory, this is not recommended as it does not capture any changes to the Kubernetes manifests.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Bring Airbyte back up."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -k kube/overlays/stable\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switching over to your browser, navigate to the Admin page in the UI. Then go to the Configuration Tab and click on Import. Upload your migrated archive."))),(0,o.kt)("p",null,"If you prefer to import and export your data via API instead the UI, follow these instructions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Instead of Step 3 above use the following curl command to export the archive:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" -X POST localhost:8000/api/v1/deployment/export --output /tmp/airbyte_archive.tar.gz\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Instead of Step X above user the following curl command to import the migrated archive:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/x-gzip" -X POST localhost:8000/api/v1/deployment/import --data-binary @<path to arhive>\n')))),(0,o.kt)("p",null,"Here is an example of what this request might look like assuming that the migrated archive is called ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte_archive_migrated.tar.gz")," and is in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/x-gzip" -X POST localhost:8000/api/v1/deployment/import --data-binary @/tmp/airbyte_archive_migrated.tar.gz\n')))}m.isMDXComponent=!0}}]);