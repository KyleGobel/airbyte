"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9507],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var k=i.createContext({}),c=function(e){var t=i.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(k.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,k=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=l,p=u["".concat(k,".").concat(d)]||u[d]||s[d]||r;return n?i.createElement(p,a(a({ref:t},m),{},{components:n})):i.createElement(p,a({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=u;var o={};for(var k in t)hasOwnProperty.call(t,k)&&(o[k]=t[k]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22094:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return k},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var i=n(87462),l=n(63366),r=(n(67294),n(3905)),a=["components"],o={},k="On DigitalOcean (Droplet)",c={unversionedId:"deploying-airbyte/on-digitalocean-droplet",id:"deploying-airbyte/on-digitalocean-droplet",title:"On DigitalOcean \\(Droplet\\)",description:"The instructions have been tested on DigitalOcean Droplet ($5).",source:"@site/../docs/deploying-airbyte/on-digitalocean-droplet.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/on-digitalocean-droplet",permalink:"/deploying-airbyte/on-digitalocean-droplet",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/deploying-airbyte/on-digitalocean-droplet.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"On Oracle Cloud Infrastructure VM",permalink:"/deploying-airbyte/on-oci-vm"},next:{title:"Upgrading Airbyte",permalink:"/operator-guides/upgrading-airbyte"}},m={},s=[{value:"Create a new droplet",id:"create-a-new-droplet",level:2},{value:"Install environment",id:"install-environment",level:2},{value:"Install &amp; start Airbyte",id:"install--start-airbyte",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:s};function d(e){var t=e.components,o=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"on-digitalocean-droplet"},"On DigitalOcean ","(","Droplet",")"),(0,r.kt)("p",null,"The instructions have been tested on ",(0,r.kt)("inlineCode",{parentName:"p"},"DigitalOcean Droplet ($5)"),". "),(0,r.kt)("p",null,"Alternatively, you can one-click deploy Airbyte to DigitalOcean using their marketplace:",(0,r.kt)("br",null)),(0,r.kt)("a",{href:"https://cloud.digitalocean.com/droplets/new?onboarding_origin=marketplace&appId=95451155&image=airbyte&utm_source=deploying-airbyte_on-digitalocean-droplet"},(0,r.kt)("img",{src:"https://www.deploytodo.com/do-btn-blue.svg",alt:"Deploy to DigitalOcean"})),(0,r.kt)("h2",{id:"create-a-new-droplet"},"Create a new droplet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Launch a new droplet")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(59669).Z,width:"1843",height:"131"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select image distribution ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(41254).Z,width:"1298",height:"336"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select droplet type",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For testing out Airbyte, a ",(0,r.kt)("inlineCode",{parentName:"li"},"$20/month")," droplet is likely sufficient."),(0,r.kt)("li",{parentName:"ul"},"For long-running Airbyte installations, we recommend a ",(0,r.kt)("inlineCode",{parentName:"li"},"$40/month")," instance.")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(81327).Z,width:"1331",height:"284"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Region")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Generally, choose a datacenter close to you."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Authentication"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Password"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Create Droplet"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(33864).Z,width:"1297",height:"124"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wait for the droplet to enter the ",(0,r.kt)("inlineCode",{parentName:"li"},"Running")," state.")),(0,r.kt)("h2",{id:"install-environment"},"Install environment"),(0,r.kt)("p",null,"Note: The following commands will be entered either on your local terminal or in your ssh session on the instance terminal. The comments above each command block will indicate where to enter the commands."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connect to your instance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Click on Console")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(37011).Z,width:"1291",height:"155"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"docker"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# In your ssh session on the instance terminal\nsudo apt update\nsudo apt install apt-transport-https ca-certificates curl software-properties-common\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\nsudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"\nsudo apt install docker-ce\nsudo systemctl status docker\nsudo usermod -aG docker ${USER}\nsu - ${USER}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In your ssh session on the instance terminal\nsudo wget https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m) -O /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\ndocker-compose --version\n")),(0,r.kt)("h2",{id:"install--start-airbyte"},"Install & start Airbyte"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connect to your instance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Click on Console")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(37011).Z,width:"1291",height:"155"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Airbyte")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In your ssh session on the instance terminal\nmkdir airbyte && cd airbyte\nwget https://raw.githubusercontent.com/airbytehq/airbyte/master/{.env,docker-compose.yaml}\ndocker-compose up -d\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you encounter any issues, just connect to our ",(0,r.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),". Our community will help! We also have a ",(0,r.kt)("a",{parentName:"p",href:"/troubleshooting/on-deploying"},"FAQ")," section in our docs for common problems."))}d.isMDXComponent=!0},41254:function(e,t,n){t.Z=n.p+"assets/images/dg_choose_ditribution-ca1bc4507627b7a39dcbf4c058e0d190.png"},37011:function(e,t,n){t.Z=n.p+"assets/images/dg_console-316bac77a1b0d2c0dd0acafcb16e1d69.png"},33864:function(e,t){t.Z="data:image/png;base64,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"},81327:function(e,t,n){t.Z=n.p+"assets/images/dg_droplet_type-1ff48d79dd9ea88bdb4a8f93b8402ba7.png"},59669:function(e,t,n){t.Z=n.p+"assets/images/digitalocean_launch_droplet-e503f27e4ffd2f51f46e7f6fee3cafa0.png"}}]);