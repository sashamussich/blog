/*!CK:21829985!*//*1447167575,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["j5sQh"]); }

__d('FacebarTypeaheadTypeNamedX',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={browse_type_user:'user',browse_type_page:'page',browse_type_place:'place',browse_type_group:'group',browse_type_application:'app'},i=1,j=2;k.addTypeNamedX=function(l,m,n,o){'use strict';var p=new k(),q=[],r=[];l.forEach(function(w){if(w.tags!=null)delete w.tags.hiddenSeeMore;if(w.isSeeMore){q.push(w);}else r.push(w);});if(!o.showTypeNamedX){q.forEach(function(w){if(w.tags!=null)w.tags.hiddenSeeMore=true;});return r;}var s=p.buildTypeNamedXBuckets(r,q,n,o),t=s[0],u=s[1];t.forEach(function(w){if(w.tags!=null)w.tags.displayedSeeMore=true;});var v=p.replaceResults(r,m,t);Array.prototype.push.apply(v,u);v.forEach(function(w){if(w.tags!=null)w.tags.hiddenSeeMore=true;});return r;};k.prototype.buildTypeNamedXBuckets=function(l,m,n,o){'use strict';var p={};o=o||{};l.forEach(function(t,u){var v=t.render_type||t.type;if(p[v]===undefined)p[v]={index:u,matchCount:0};if(!o.alwaysDisplayTypeNamedX&&t.text.toLowerCase().indexOf(n.toLowerCase())<0)return;p[v].matchCount++;});var q=[],r=[];m.forEach(function(t){var u=h[t.results_set_type];if(p[u]!==undefined&&p[u].matchCount>=i){q.push([t,p[u].index]);}else r.push(t);});q.sort(function(t,u){return t[1]-u[1];});var s=q.map(function(t){return t[0];});Array.prototype.push.apply(r,s.slice(j));s.length=Math.min(s.length,j);return [s,r];};k.prototype.replaceResults=function(l,m,n){'use strict';var o=[],p=Math.min(0,l.length-m)+n.length;for(var q=0;q<p;++q){var r=-1;for(var s=0;s<Math.min(m-q,l.length);++s){var t=l[s];if(!t.exactMatchKeyword&&t.type!=='websuggestion')r=s;}if(r>=0){o.push(l[r]);l.splice(r,1);}}Array.prototype.unshift.apply(l,n);return o;};function k(){'use strict';}f.exports=k;},null);