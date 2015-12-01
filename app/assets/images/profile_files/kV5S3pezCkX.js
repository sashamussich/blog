/*!CK:3904285096!*//*1446486718,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Ol8Z5"]); }

__d('FacebarTypeaheadL2Terms',['FacebarJSConstants'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=3,j={addL2Terms:function(k,l,m,n){if(!n.suggestBackendL2Terms)return k;var o=[],p=[];k.forEach(function(r){if(r.exactMatchKeyword){r.tags.l2_suggestion=true;o.push(r);}else if(r.isKeywordL2){r.tags.l2_suggestion=true;r.type='l2suggestion';o.push(r);}else if(r.type!=='keywords')p.push(r);});var q=0;return p.map(function(r){if(h.entityTypes[r.type])if(q<i){q++;}else if(o.length)return o.pop();return r;});}};f.exports=j;},null);