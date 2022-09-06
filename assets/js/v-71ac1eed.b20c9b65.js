"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[57238],{11332:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-71ac1eed",path:"/devices/067772.html",title:"Legrand 067772 control via MQTT",lang:"en-US",frontmatter:{title:"Legrand 067772 control via MQTT",description:"Integrate your Legrand 067772 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-03-01T09:06:16.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (left endpoint)",slug:"switch-left-endpoint",children:[]},{level:3,title:"Switch (right endpoint)",slug:"switch-right-endpoint",children:[]},{level:3,title:"Led_when_off (binary)",slug:"led-when-off-binary",children:[]},{level:3,title:"Led_when_on (binary)",slug:"led-when-on-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/067772.md",git:{updatedTime:1662453023e3}}},63992:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});const d=(0,o(66252).uE)('<h1 id="legrand-067772" tabindex="-1"><a class="header-anchor" href="#legrand-067772" aria-hidden="true">#</a> Legrand 067772</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>067772</td></tr><tr><td>Vendor</td><td>Legrand</td></tr><tr><td>Description</td><td>Double wired switch with neutral</td></tr><tr><td>Exposes</td><td>switch (state), led_when_off, led_when_on, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/067772.jpg" alt="Legrand 067772"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint" aria-hidden="true">#</a> Switch (left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint" aria-hidden="true">#</a> Switch (right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h3 id="led-when-off-binary" tabindex="-1"><a class="header-anchor" href="#led-when-off-binary" aria-hidden="true">#</a> Led_when_off (binary)</h3><p>Enable the LED when the light is off. Value can be found in the published state on the <code>led_when_off</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_when_off&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_when_off&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led_when_off is ON, if <code>OFF</code> OFF.</p><h3 id="led-when-on-binary" tabindex="-1"><a class="header-anchor" href="#led-when-on-binary" aria-hidden="true">#</a> Led_when_on (binary)</h3><p>Enables the LED when the light is on. Value can be found in the published state on the <code>led_when_on</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_when_on&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_when_on&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led_when_on is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),i={},a=(0,o(83744).Z)(i,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);