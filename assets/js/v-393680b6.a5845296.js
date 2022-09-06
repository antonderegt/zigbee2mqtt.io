"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[68536],{24254:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-393680b6",path:"/devices/PEHWE20.html",title:"Perenio PEHWE20 control via MQTT",lang:"en-US",frontmatter:{title:"Perenio PEHWE20 control via MQTT",description:"Integrate your Perenio PEHWE20 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-06-01T15:08:55.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (l1 endpoint)",slug:"switch-l1-endpoint",children:[]},{level:3,title:"Power_on_behavior (enum, l1 endpoint)",slug:"power-on-behavior-enum-l1-endpoint",children:[]},{level:3,title:"Switch_type (enum, l1 endpoint)",slug:"switch-type-enum-l1-endpoint",children:[]},{level:3,title:"Switch (l2 endpoint)",slug:"switch-l2-endpoint",children:[]},{level:3,title:"Power_on_behavior (enum, l2 endpoint)",slug:"power-on-behavior-enum-l2-endpoint",children:[]},{level:3,title:"Switch_type (enum, l2 endpoint)",slug:"switch-type-enum-l2-endpoint",children:[]},{level:3,title:"Last_message_lqi (numeric)",slug:"last-message-lqi-numeric",children:[]},{level:3,title:"Last_message_rssi (numeric)",slug:"last-message-rssi-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/PEHWE20.md",git:{updatedTime:1662453023e3}}},57562:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const i=(0,o(66252).uE)('<h1 id="perenio-pehwe20" tabindex="-1"><a class="header-anchor" href="#perenio-pehwe20" aria-hidden="true">#</a> Perenio PEHWE20</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>PEHWE20</td></tr><tr><td>Vendor</td><td>Perenio</td></tr><tr><td>Description</td><td>Two channel single wire mini-relay</td></tr><tr><td>Exposes</td><td>switch (state), power_on_behavior, switch_type, last_message_lqi, last_message_rssi, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/PEHWE20.jpg" alt="Perenio PEHWE20"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint" aria-hidden="true">#</a> Switch (l1 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h3 id="power-on-behavior-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l1-endpoint" aria-hidden="true">#</a> Power_on_behavior (enum, l1 endpoint)</h3><p>Controls the behavior when the device is powered on. Value can be found in the published state on the <code>power_on_behavior_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="switch-type-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-l1-endpoint" aria-hidden="true">#</a> Switch_type (enum, l1 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>maintained_state</code>, <code>maintained_toggle</code>, <code>momentary_state</code>, <code>momentary_press</code>, <code>momentary_release</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint" aria-hidden="true">#</a> Switch (l2 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h3 id="power-on-behavior-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-l2-endpoint" aria-hidden="true">#</a> Power_on_behavior (enum, l2 endpoint)</h3><p>Controls the behavior when the device is powered on. Value can be found in the published state on the <code>power_on_behavior_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_l2&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="switch-type-enum-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-l2-endpoint" aria-hidden="true">#</a> Switch_type (enum, l2 endpoint)</h3><p>Value can be found in the published state on the <code>switch_type_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_l2&quot;: NEW_VALUE}</code>. The possible values are: <code>maintained_state</code>, <code>maintained_toggle</code>, <code>momentary_state</code>, <code>momentary_press</code>, <code>momentary_release</code>.</p><h3 id="last-message-lqi-numeric" tabindex="-1"><a class="header-anchor" href="#last-message-lqi-numeric" aria-hidden="true">#</a> Last_message_lqi (numeric)</h3><p>LQI seen by the device. Value can be found in the published state on the <code>last_message_lqi</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p><h3 id="last-message-rssi-numeric" tabindex="-1"><a class="header-anchor" href="#last-message-rssi-numeric" aria-hidden="true">#</a> Last_message_rssi (numeric)</h3><p>RSSI seen by the device. Value can be found in the published state on the <code>last_message_rssi</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-128</code> and the maximum value is <code>127</code>. The unit of this value is <code>dB</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',21),d={},a=(0,o(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);