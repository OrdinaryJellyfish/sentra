(()=>{var r={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},d:(e,o)=>{for(var a in o)r.o(o,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)};(()=>{"use strict";const e=flarum.core.compat["forum/app"];var o=r.n(e);const a=flarum.core.compat["common/extend"],t=flarum.core.compat["forum/components/Post"];var n=r.n(t);o().initializers.add("ordinaryjellyfish/sentra",(function(){(0,a.override)(n().prototype,"flagReason",(function(r,e){if("sentra"===e.type()){var a=e.reason();return o().translator.trans("ordinaryjellyfish-sentra.forum.flag_reason",{reason:a})}return r(e)}))}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map