"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42173],{84609:(e,t,l)=>{l.r(t),l.d(t,{data:()=>n});const n={key:"v-19ac1baf",path:"/devices/RTCZCGQ11LM.html",title:"Xiaomi RTCZCGQ11LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi RTCZCGQ11LM control via MQTT",description:"Integrate your Xiaomi RTCZCGQ11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-01-31T17:42:44.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Channel",slug:"channel",children:[]},{level:3,title:"Adapter firmware",slug:"adapter-firmware",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Feature support",slug:"feature-support",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Presence (binary)",slug:"presence-binary",children:[]},{level:3,title:"Presence_event (enum)",slug:"presence-event-enum",children:[]},{level:3,title:"Monitoring_mode (enum)",slug:"monitoring-mode-enum",children:[]},{level:3,title:"Approach_distance (enum)",slug:"approach-distance-enum",children:[]},{level:3,title:"Motion_sensitivity (enum)",slug:"motion-sensitivity-enum",children:[]},{level:3,title:"Reset_nopresence_status (enum)",slug:"reset-nopresence-status-enum",children:[]},{level:3,title:"Device_temperature (numeric)",slug:"device-temperature-numeric",children:[]},{level:3,title:"Power_outage_count (numeric)",slug:"power-outage-count-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/RTCZCGQ11LM.md",git:{updatedTime:1662453023e3}}},20547:(e,t,l)=>{l.r(t),l.d(t,{default:()=>se});var n=l(66252),i=l(19364);const a=(0,n._)("h1",{id:"xiaomi-rtczcgq11lm",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#xiaomi-rtczcgq11lm","aria-hidden":"true"},"#"),(0,n.Uk)(" Xiaomi RTCZCGQ11LM")],-1),A=(0,n._)("table",null,[(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])]),(0,n._)("tbody",null,[(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"RTCZCGQ11LM")]),(0,n._)("tr",null,[(0,n._)("td",null,"Vendor"),(0,n._)("td",null,"Xiaomi")]),(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Aqara presence detector FP1 (regions not supported for now)")]),(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"presence, presence_event, monitoring_mode, approach_distance, motion_sensitivity, reset_nopresence_status, device_temperature, power_outage_count, linkquality")]),(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/RTCZCGQ11LM.jpg",alt:"Xiaomi RTCZCGQ11LM"})])])])],-1),o=(0,n._)("h2",{id:"notes",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,n.Uk)(" Notes")],-1),r=(0,n._)("h3",{id:"channel",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#channel","aria-hidden":"true"},"#"),(0,n.Uk)(" Channel")],-1),u=(0,n.Uk)("This sensor "),s={href:"https://github.com/Koenkk/zigbee2mqtt/issues/11019#issuecomment-1064063808",target:"_blank",rel:"noopener noreferrer"},d=(0,n.Uk)("does not work"),c=(0,n.Uk)(" on Zigbee channel 21-24."),h=(0,n._)("h3",{id:"adapter-firmware",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#adapter-firmware","aria-hidden":"true"},"#"),(0,n.Uk)(" Adapter firmware")],-1),p=(0,n._)("p",null,"In order for this device to work, at least the following firmware is required on your adapter:",-1),U=(0,n.Uk)("CC2530/CC2531: "),z={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},k=(0,n._)("code",null,"20211115",-1),g=(0,n.Uk)("CC1352/CC2652: "),m={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},_=(0,n._)("code",null,"20211114",-1),v=(0,n.Uk)("CC2538: "),b={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},E=(0,n._)("code",null,"20211222",-1),C=(0,n.Uk)("Conbee II: "),T={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},w=(0,n._)("code",null,"0x26720700",-1),B=(0,n._)("p",null,[(0,n._)("em",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.")],-1),Q=(0,n._)("h3",{id:"pairing",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,n.Uk)(" Pairing")],-1),I=(0,n._)("p",null,"Press and hold the reset button on the device for +- 5 seconds (until the blue light starts blinking). After this the device will automatically join. If this doesn't work, try with a single short button press.",-1),f=(0,n._)("p",null,[(0,n._)("img",{src:i,alt:"RTCZCGQ11LM pairing"})],-1),R=(0,n._)("h3",{id:"feature-support",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#feature-support","aria-hidden":"true"},"#"),(0,n.Uk)(" Feature support")],-1),y=(0,n._)("code",null,"Regions",-1),M=(0,n.Uk)(),F={href:"https://github.com/Koenkk/zigbee2mqtt/issues/11019#issuecomment-1026012894",target:"_blank",rel:"noopener noreferrer"},D=(0,n.Uk)("not supported"),N=(0,n.Uk)(" for now."),x=(0,n._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,n.Uk)(" OTA updates")],-1),q=(0,n.Uk)("This device supports OTA updates, for more information see "),S=(0,n.Uk)("OTA updates"),Y=(0,n.Uk)("."),K=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),J=(0,n.Uk)("How to use device type specific configuration"),L=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("code",null,"device_temperature_calibration"),(0,n.Uk)(": Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.")])],-1),V=(0,n._)("h2",{id:"exposes",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#exposes","aria-hidden":"true"},"#"),(0,n.Uk)(" Exposes")],-1),j=(0,n._)("h3",{id:"presence-binary",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#presence-binary","aria-hidden":"true"},"#"),(0,n.Uk)(" Presence (binary)")],-1),P=(0,n._)("p",null,[(0,n.Uk)("Indicates whether the device detected presence. Value can be found in the published state on the "),(0,n._)("code",null,"presence"),(0,n.Uk)(" property. To read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") the value publish a message to topic "),(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,n.Uk)(" with payload "),(0,n._)("code",null,'{"presence": ""}'),(0,n.Uk)(". It's not possible to write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") this value. If value equals "),(0,n._)("code",null,"true"),(0,n.Uk)(" presence is ON, if "),(0,n._)("code",null,"false"),(0,n.Uk)(" OFF.")],-1),G=(0,n._)("h3",{id:"presence-event-enum",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#presence-event-enum","aria-hidden":"true"},"#"),(0,n.Uk)(" Presence_event (enum)")],-1),Z=(0,n._)("p",null,[(0,n.Uk)('Presence events: "enter", "leave", "left_enter", "right_leave", "right_enter", "left_leave", "approach", "away". Value can be found in the published state on the '),(0,n._)("code",null,"presence_event"),(0,n.Uk)(" property. It's not possible to read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") or write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") this value. The possible values are: "),(0,n._)("code",null,"enter"),(0,n.Uk)(", "),(0,n._)("code",null,"leave"),(0,n.Uk)(", "),(0,n._)("code",null,"left_enter"),(0,n.Uk)(", "),(0,n._)("code",null,"right_leave"),(0,n.Uk)(", "),(0,n._)("code",null,"right_enter"),(0,n.Uk)(", "),(0,n._)("code",null,"left_leave"),(0,n.Uk)(", "),(0,n._)("code",null,"approach"),(0,n.Uk)(", "),(0,n._)("code",null,"away"),(0,n.Uk)(".")],-1),O=(0,n._)("h3",{id:"monitoring-mode-enum",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#monitoring-mode-enum","aria-hidden":"true"},"#"),(0,n.Uk)(" Monitoring_mode (enum)")],-1),H=(0,n._)("p",null,[(0,n.Uk)("Monitoring mode with or without considering right and left sides. Value can be found in the published state on the "),(0,n._)("code",null,"monitoring_mode"),(0,n.Uk)(" property. To read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") the value publish a message to topic "),(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,n.Uk)(" with payload "),(0,n._)("code",null,'{"monitoring_mode": ""}'),(0,n.Uk)(". To write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") a value publish a message to topic "),(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set"),(0,n.Uk)(" with payload "),(0,n._)("code",null,'{"monitoring_mode": NEW_VALUE}'),(0,n.Uk)(". The possible values are: "),(0,n._)("code",null,"undirected"),(0,n.Uk)(", "),(0,n._)("code",null,"left_right"),(0,n.Uk)(".")],-1),W=(0,n._)("h3",{id:"approach-distance-enum",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#approach-distance-enum","aria-hidden":"true"},"#"),(0,n.Uk)(" Approach_distance (enum)")],-1),X=(0,n._)("p",null,[(0,n.Uk)("The distance at which the sensor detects approaching. Value can be found in the published state on the "),(0,n._)("code",null,"approach_distance"),(0,n.Uk)(" property. To read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") the value publish a message to topic "),(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,n.Uk)(" with payload "),(0,n._)("code",null,'{"approach_distance": ""}'),(0,n.Uk)(". To write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") a value publish a message to topic "),(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set"),(0,n.Uk)(" with payload "),(0,n._)("code",null,'{"approach_distance": NEW_VALUE}'),(0,n.Uk)(". The possible values are: "),(0,n._)("code",null,"far"),(0,n.Uk)(", "),(0,n._)("code",null,"medium"),(0,n.Uk)(", "),(0,n._)("code",null,"near"),(0,n.Uk)(".")],-1),$=(0,n._)("h3",{id:"motion-sensitivity-enum",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#motion-sensitivity-enum","aria-hidden":"true"},"#"),(0,n.Uk)(" Motion_sensitivity (enum)")],-1),ee=(0,n._)("p",null,[(0,n.Uk)("Different sensitivities means different static human body recognition rate and response speed of occupied. Value can be found in the published state on the "),(0,n._)("code",null,"motion_sensitivity"),(0,n.Uk)(" property. To read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") the value publish a message to topic "),(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/get"),(0,n.Uk)(" with payload "),(0,n._)("code",null,'{"motion_sensitivity": ""}'),(0,n.Uk)(". To write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") a value publish a message to topic "),(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set"),(0,n.Uk)(" with payload "),(0,n._)("code",null,'{"motion_sensitivity": NEW_VALUE}'),(0,n.Uk)(". The possible values are: "),(0,n._)("code",null,"low"),(0,n.Uk)(", "),(0,n._)("code",null,"medium"),(0,n.Uk)(", "),(0,n._)("code",null,"high"),(0,n.Uk)(".")],-1),te=(0,n._)("h3",{id:"reset-nopresence-status-enum",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#reset-nopresence-status-enum","aria-hidden":"true"},"#"),(0,n.Uk)(" Reset_nopresence_status (enum)")],-1),le=(0,n._)("p",null,[(0,n.Uk)("Reset the status of no presence. Value will "),(0,n._)("strong",null,"not"),(0,n.Uk)(" be published in the state. It's not possible to read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") this value. To write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") a value publish a message to topic "),(0,n._)("code",null,"zigbee2mqtt/FRIENDLY_NAME/set"),(0,n.Uk)(" with payload "),(0,n._)("code",null,'{"reset_nopresence_status": NEW_VALUE}'),(0,n.Uk)(". The possible values are: ``.")],-1),ne=(0,n._)("h3",{id:"device-temperature-numeric",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#device-temperature-numeric","aria-hidden":"true"},"#"),(0,n.Uk)(" Device_temperature (numeric)")],-1),ie=(0,n._)("p",null,[(0,n.Uk)("Temperature of the device. Value can be found in the published state on the "),(0,n._)("code",null,"device_temperature"),(0,n.Uk)(" property. It's not possible to read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") or write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") this value. The unit of this value is "),(0,n._)("code",null,"°C"),(0,n.Uk)(".")],-1),ae=(0,n._)("h3",{id:"power-outage-count-numeric",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#power-outage-count-numeric","aria-hidden":"true"},"#"),(0,n.Uk)(" Power_outage_count (numeric)")],-1),Ae=(0,n._)("p",null,[(0,n.Uk)("Number of power outages (since last pairing). Value can be found in the published state on the "),(0,n._)("code",null,"power_outage_count"),(0,n.Uk)(" property. It's not possible to read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") or write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") this value.")],-1),oe=(0,n._)("h3",{id:"linkquality-numeric",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#linkquality-numeric","aria-hidden":"true"},"#"),(0,n.Uk)(" Linkquality (numeric)")],-1),re=(0,n._)("p",null,[(0,n.Uk)("Link quality (signal strength). Value can be found in the published state on the "),(0,n._)("code",null,"linkquality"),(0,n.Uk)(" property. It's not possible to read ("),(0,n._)("code",null,"/get"),(0,n.Uk)(") or write ("),(0,n._)("code",null,"/set"),(0,n.Uk)(") this value. The minimal value is "),(0,n._)("code",null,"0"),(0,n.Uk)(" and the maximum value is "),(0,n._)("code",null,"255"),(0,n.Uk)(". The unit of this value is "),(0,n._)("code",null,"lqi"),(0,n.Uk)(".")],-1),ue={},se=(0,l(83744).Z)(ue,[["render",function(e,t){const l=(0,n.up)("OutboundLink"),i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,A,o,r,(0,n._)("p",null,[u,(0,n._)("a",s,[d,(0,n.Wm)(l)]),c]),h,p,(0,n._)("ul",null,[(0,n._)("li",null,[U,(0,n._)("a",z,[k,(0,n.Wm)(l)])]),(0,n._)("li",null,[g,(0,n._)("a",m,[_,(0,n.Wm)(l)])]),(0,n._)("li",null,[v,(0,n._)("a",b,[E,(0,n.Wm)(l)])]),(0,n._)("li",null,[C,(0,n._)("a",T,[w,(0,n.Wm)(l)])])]),B,Q,I,f,R,(0,n._)("p",null,[y,M,(0,n._)("a",F,[D,(0,n.Wm)(l)]),N]),x,(0,n._)("p",null,[q,(0,n.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[S])),_:1}),Y]),K,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[J])),_:1})])]),L,V,j,P,G,Z,O,H,W,X,$,ee,te,le,ne,ie,ae,Ae,oe,re],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[l,n]of t)e[l]=n;return e}},19364:e=>{e.exports="data:image/jpeg;base64,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"}}]);