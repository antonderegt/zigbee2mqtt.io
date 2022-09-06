"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[16953],{76123:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-3593eb40",path:"/devices/ZNCZ02LM.html",title:"Xiaomi ZNCZ02LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi ZNCZ02LM control via MQTT",description:"Integrate your Xiaomi ZNCZ02LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Power outage memory",slug:"power-outage-memory",children:[]},{level:3,title:"Voltage",slug:"voltage",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Device_temperature (numeric)",slug:"device-temperature-numeric",children:[]},{level:3,title:"Power_outage_memory (binary)",slug:"power-outage-memory-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZNCZ02LM.md",git:{updatedTime:1662453023e3}}},66924:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var i=o(66252);const a=(0,i.uE)('<h1 id="xiaomi-zncz02lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-zncz02lm" aria-hidden="true">#</a> Xiaomi ZNCZ02LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZNCZ02LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Mi power plug ZigBee</td></tr><tr><td>Exposes</td><td>switch (state), power, energy, device_temperature, power_outage_memory, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZNCZ02LM.jpg" alt="Xiaomi ZNCZ02LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the button on the device for +- 10 seconds (until the blue light starts blinking and stops blinking), release and wait.</p><p>You may have to unpair the switch from an existing coordinator before the pairing process will start. If you can&#39;t do this, try to remove battery (if it has one), push the button (to completely discharge device), place the battery back and try pairing again.</p><h3 id="power-outage-memory" tabindex="-1"><a class="header-anchor" href="#power-outage-memory" aria-hidden="true">#</a> Power outage memory</h3><p>This option allows the device to restore the last on/off state when it&#39;s reconnected to power. To set this option publish to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> payload <code>{&quot;power_outage_memory&quot;: true}</code> (or <code>false</code>). Now toggle the plug/switch once with the button on it, from now on it will restore its state when reconnecting to power.</p><h3 id="voltage" tabindex="-1"><a class="header-anchor" href="#voltage" aria-hidden="true">#</a> Voltage</h3><p>Some versions of the plug provide voltage. This depends on the firmware on the device. Confirmed working are the ones with <code>dateCode</code> <code>02-28-2017</code> (can be checked in <code>data/database.db</code>). Note that Xiaomi doesn&#39;t provide firmware files, so the software cannot be downgraded/upgraded.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',11),r=(0,i.Uk)("This device supports OTA updates, for more information see "),d=(0,i.Uk)("OTA updates"),s=(0,i.Uk)("."),n=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),c=(0,i.Uk)("How to use device type specific configuration"),u=(0,i.uE)('<ul><li><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device_temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="power-outage-memory-binary" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-binary" aria-hidden="true">#</a> Power_outage_memory (binary)</h3><p>Enable/disable the power outage memory, this recovers the on/off mode after power failure. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. If value equals <code>true</code> power_outage_memory is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),h={},l=(0,o(83744).Z)(h,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[r,(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[d])),_:1}),s]),n,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[c])),_:1})])]),u],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);