/*!CK:1713060188!*//*1448336071,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["VNRJK"]); }

__d("XAtWorkInvitesSearchDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/work\/invite\/search_typeahead_dialog\/",{source:{type:"String",required:true},__asyncDialog:{type:"Int"}});},null);
__d('FacebarInviteCoworkers',['AtWorkInviteCoworkerSource','FacebarGlobalOptions','FacebarStructuredText','XAtWorkInvitesSearchDialogController','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n={insertInto:function(o,p,q){o=this._cleanQuery(o);var r=this._getInsertionIndex(o,p);if(r>-1){var s=this._createInviteCoworkersResult(o,q);p.splice(r,0,s);}},_getInsertionIndex:function(o,p){if(!o||!i.inviteCoworkers)return -1;return p.length;},_cleanQuery:function(o){return String(o).trim().replace(/\s+/g,' ').replace(/[\u200E|\u200F|\u202a|\u202b|\u202c]/g,'');},_createInviteCoworkersResult:function(o,p){var q=m._("Invite \"{query}\" to Facebook at work",[m.param('query',o)]),r=k.getURIBuilder().setString('source',h.SEARCH_TYPEAHEAD).getURI();return {uid:o,icon_class:"_5yiv",isSeeMore:true,isAsync:true,structure:j.fromString(q),asyncURI:r,fromCache:p};}};f.exports=n;},null);