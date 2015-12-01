/*!CK:4051594445!*//*1448252015,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["YaToQ"]); }

__d("TimelineAppSectionConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={collectionTabKeyToAppTabKey:{friends_recent:"friends",friends_all:"friends",friends_mutual:"friends",photos_of:"photos",photos_all:"photos",photos_albums:"photos",likes_recent:null,info_all:"about",music_my_music:"music",music_favs:"music",music_playlists:"music",books_read:"books",books_favorite:"books",books_want:"books",recent_places:null,fitness_overview:"fitness",friends_featured:null,places_want:null,info_contact:null,fitness_running:"fitness",fitness_cycling:"fitness",friends_followers:"friends",friends_following:"friends",music_radio:"music",info_history:null,recent_games:"games",products_want:null,photos_archive:"photos",notes_my_notes:"notes",notes_drafts:"notes",notes_about_me:"notes",video_movies_watch:"movies",video_tv_shows_watch:"tv",music_saved:"music",video_movies_want:"movies",video_tv_shows_want:"tv",video_movies_favorite:"movies",video_tv_shows_favorite:"tv",friends_high_school:"friends",friends_college:"friends",friends_work:"friends",friends_suggested:"friends",apps_like:"games",upcoming_events:"events",past_events:"events",likes_people:"likes",likes_sports:null,fitness_report:null,groups_member:"groups",music_heavy_rotation:"music",photos_album:"photos",music_mutual:"music",likes_restaurants:"likes",likes_clothing:null,info_insights:null,apps_used:"games",games_play:"games",games_apps_saved:"games",video_movies_suggestions:null,video_tv_shows_suggestions:null,books_suggestions:null,saved_books:"saved",saved_movies:"saved",saved_tv_shows:"saved",saved_music:"saved",places_saved:"map",saved_links:"saved",sports_teams:"sports",likes_all:"likes",saved_places:"saved",saved_all:"saved",sports_athletes:"sports",sports_activities:null,saved_events:"saved",saved_archived:"saved",places_recent:"map",places_visited:"map",reviews_written:"reviews",likes_section_movies:"likes",likes_section_tv_shows:"likes",likes_section_books:"likes",likes_section_music:"likes",likes_section_sports_teams:"likes",place_visits_by_place_tag:null,places_cities:"map",place_visits_by_city:null,topic_visit_counts:"map",place_visits_by_topic:null,place_visit_stories:null,places_map:"map",likes_section_apps_and_games:"likes",likes_section_sports_athletes:"likes",places_cities_desktop:"map",saved_videos:"saved",saved_pages:"saved",friends_with_upcoming_birthdays:"friends",friends_current_city:"friends",friends_hometown:"friends",at_work_contact:null,place_reviews_written:"reviews",movie_reviews_written:"reviews",tv_show_reviews_written:"reviews",book_reviews_written:"reviews",photos_all_expanded:"photos",videos_by_user:"videos",videos_user_tagged:"videos",external_videos_for_user:"videos",friends_map:"friends",videos_user_all:"videos",saved_posts:"saved",saved_photo_posts:"saved",saved_products:"saved",at_work_hr_info:null,friends_with_unseen_posts:"friends",groups_mutual:"groups",followers:"friends",following:"friends",media_set:"photos",photos_stream:"photos",photos_synced:"photos",apps:"games",videos_by:"videos",videos_of:"videos"}};},null);
__d("TimelineSeenStateConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={FT_TIMELINE_HASH_IDENTIFIER_KEY:"thid"};},null);
__d("TimelineViewportTrackingLogType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={IMPRESSION:"impression",DURATION:"duration"};},null);
__d("DoublyLinkedListMap",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;}h.prototype.get=function(i){"use strict";return this._nodes[i]?this._nodes[i].data:null;};h.prototype.getIndex=function(i){"use strict";for(var j=this._head,k=0;j;j=j.next,k++)if(j.key===i)return k;return null;};h.prototype._insert=function(i,j,k,l){"use strict";k&&!this._nodes[k]&&(k=null);var m=k&&this._nodes[k]||(l?this._head:this._tail),n={data:j,key:i,next:null,prev:null};if(m){this.remove(i);if(l){n.prev=m.prev;m.prev&&(m.prev.next=n);m.prev=n;n.next=m;}else{n.next=m.next;m.next&&(m.next.prev=n);m.next=n;n.prev=m;}}n.prev===null&&(this._head=n);n.next===null&&(this._tail=n);this._nodes[i]=n;this._nodeCount++;return this;};h.prototype.insertBefore=function(i,j,k){"use strict";return this._insert(i,j,k,true);};h.prototype.insertAfter=function(i,j,k){"use strict";return this._insert(i,j,k,false);};h.prototype.prepend=function(i,j){"use strict";return this.insertBefore(i,j,this._head&&this._head.key);};h.prototype.append=function(i,j){"use strict";return this.insertAfter(i,j,this._tail&&this._tail.key);};h.prototype.remove=function(i){"use strict";var j=this._nodes[i];if(j){var k=j.next,l=j.prev;k&&(k.prev=l);l&&(l.next=k);this._head===j&&(this._head=k);this._tail===j&&(this._tail=l);delete this._nodes[i];this._nodeCount--;}return this;};h.prototype.find=function(i){"use strict";for(var j=this._head;j;j=j.next)if(i(j.data))return j.key;return null;};h.prototype.reduce=function(i,j){"use strict";for(var k=this._head;k;k=k.next)j=i(k.data,j);return j;};h.prototype.exists=function(i){"use strict";return !!this._nodes[i];};h.prototype.isEmpty=function(){"use strict";return !this._head;};h.prototype.reset=function(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;};h.prototype.map=function(i){"use strict";for(var j=this._head;j;j=j.next)i(j.data);};h.prototype.getCount=function(){"use strict";return this._nodeCount;};h.prototype.getHead=function(){"use strict";return this._head&&this._head.data;};h.prototype.getTail=function(){"use strict";return this._tail&&this._tail.data;};h.prototype.getNext=function(i){"use strict";var j=this._nodes[i];if(j&&j.next)return j.next.data;return null;};h.prototype.getPrev=function(i){"use strict";var j=this._nodes[i];if(j&&j.prev)return j.prev.data;return null;};f.exports=h;},null);
__d('ProfileActionBarLogger',['FBJSON','MarauderLogger','Optimus'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(){j.addEventListener('mouseup','data-loggable','ProfileHighQualityLogger',{handleOptimus:function(l,m,n){i.log('profile_high_quality_action',null,h.parse(m.getAttribute('data-store')));return false;}});}g.init=k;},null);
__d('ProfileInfoRequestNoteFlyout',['CSS','csx','DOM','Event','LayerDestroyOnHide','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(o,p){'use strict';this.$ProfileInfoRequestNoteFlyout1=p;this.$ProfileInfoRequestNoteFlyout2=j.scry(this.$ProfileInfoRequestNoteFlyout1.getContentRoot(),"._958")[0];m(k.listen(o,'click',this.$ProfileInfoRequestNoteFlyout3.bind(this)));m(this.$ProfileInfoRequestNoteFlyout1.subscribe('success',this.$ProfileInfoRequestNoteFlyout4.bind(this)));m(this.$ProfileInfoRequestNoteFlyout1.subscribe('hide',this.$ProfileInfoRequestNoteFlyout5.bind(this)));m(this.$ProfileInfoRequestNoteFlyout1.subscribe('error',this.$ProfileInfoRequestNoteFlyout6.bind(this)));}n.prototype.$ProfileInfoRequestNoteFlyout3=function(o){'use strict';this.$ProfileInfoRequestNoteFlyout1.show();o.kill();};n.prototype.$ProfileInfoRequestNoteFlyout6=function(o,p){'use strict';j.setContent(this.$ProfileInfoRequestNoteFlyout2,p.response.errorDescription);h.show(this.$ProfileInfoRequestNoteFlyout2);return false;};n.prototype.$ProfileInfoRequestNoteFlyout5=function(){'use strict';h.hide(this.$ProfileInfoRequestNoteFlyout2);};n.prototype.$ProfileInfoRequestNoteFlyout4=function(){'use strict';this.$ProfileInfoRequestNoteFlyout1.enableBehavior(l);this.$ProfileInfoRequestNoteFlyout1.hide();};f.exports=n;},null);
__d('ProfileOverviewSection',['Arbiter','DOMScroll','DoublyLinkedListMap','Run','TidyArbiterMixin','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=null;function o(){n=null;}function p(q,r,s){'use strict';this.id=q;this.label=s;this.nodeID=r;this._parentSection=null;this.childSections=new j();this._isLoaded=false;setTimeout((function(){return p.inform('sectionInitialized/'+q,{section:this},h.BEHAVIOR_STATE);}).bind(this),0);}p.prototype.appendSection=function(q){'use strict';this.childSections.append(q.id,q);q._parentSection=this;};p.prototype.freeze=function(){'use strict';this.freezeChildren();};p.prototype.freezeChildren=function(){'use strict';var q=this.childSections.getHead();while(q){!q.isActive()&&q.freeze();q=q.getNext();}};p.prototype.getNext=function(){'use strict';return this._parentSection&&this._parentSection.childSections.getNext(this.id);};p.prototype.getPrev=function(){'use strict';return this._parentSection&&this._parentSection.childSections.getPrev(this.id);};p.prototype.isActive=function(){'use strict';var q=this;while(q){if(q.id===n)return true;q=q._parentSection;}return false;};p.prototype.isLoaded=function(){'use strict';return this._isLoaded;};p.prototype.setIsLoaded=function(q){'use strict';this._isLoaded=q;return this;};p.prototype.scrollTo=function(){'use strict';if(!m(this.nodeID))return;i.scrollTo(this.getNode(),true,false,false,0,i.scrollTo.bind(this).bind(null,this.getNode(),0));};p.prototype.thaw=function(){'use strict';this.thawChildren();};p.prototype.thawChildren=function(){'use strict';var q=this.childSections.getHead();while(q){q.thaw();q=q.getNext();}};p.prototype.getNode=function(){'use strict';throw new Error('This function needs to be implemented in children.');};p.callWithSection=function(q,r){'use strict';this.subscribe('sectionInitialized/'+q,function(s,t){r(t.section);});};p.setActiveSectionID=function(q){'use strict';!n&&k.onLeave(o);n=q;};Object.assign(p,l);f.exports=p;},null);
__d('ProfileEscapeHatch',['CSS','ProfileTabUtils','Run','TimelineComponentKeys','TimelineController'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=[],n=false;function o(p){'use strict';this.$ProfileEscapeHatch1=p;m.push(this);if(!n){l.register(k.ESCAPE_HATCH,o);j.onLeave(function(){m=[];});n=true;}}o.handleTabChange=function(p){'use strict';m.forEach(function(q){h.conditionShow(q.$ProfileEscapeHatch1,i.isTimelineTab(p));});};f.exports=o;},null);
__d('TimelineURI',['BizSiteIdentifier.brands','BusinessURI.brands','ProfileTabConst','TimelineAppSectionConstants','URI','goURI'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n={parseURI:function(o){o=new l(o);var p=o.getQueryData(),q=o.getPath(),r=q.split('/').slice(1);if(r[0]=='people'||r[0]=='pages')r=r.slice(2);var s=p.sk||r[1]||j.TIMELINE;if(s==j.WALL)s=j.TIMELINE;var t=null,u=null;if(s==j.TIMELINE){u=parseInt(r[2],10)||null;t=parseInt(r[3],10)||null;}return {path:q,id:p.id||r[0],key:s,viewas:p.viewas?p.viewas:0,filter:p.filter?p.filter:null,year:u,month:t,friendship:!!p.and};},goToProfileID:function(o){if(h.isBizSite()){m(i('/profile.php').addQueryData('id',o),true);}else m(new l('/'+o),true);},getTabKeyFromURI:function(o){var p=n.getSectionKeyFromURI(o);return k.collectionTabKeyToAppTabKey[p]||p;},getSectionKeyFromURI:function(o){return o.getQueryData().sk||o.getPath().split('/')[2];},getVanityFromURI:function(o){if(o.getQueryData().id)return o.getQueryData.id;return o.getPath().split('/')[1];},isVideoPermalink:function(o){return (n.getTabKeyFromURI(o)===j.VIDEOS&&o.getPath().split('/').filter(function(p){return !!p;}).length>2);}};f.exports=n;},null);
__d('ProfileNavigation',['Arbiter','CSS','PageTransitions','ProfileDOMID','ProfileOverviewDOMID','ProfileTabConst','ProfileTabUtils','ScriptPath','TimelineComponentKeys','TimelineController','TimelineDOMID','TimelineURI','UIPagelet','URI','$','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x=6,y='/profile_book.php',z=null,aa=null;function ba(ma){var na=u.getMostRecentURI(),oa=s.getSectionKeyFromURI(na),pa=s.getTabKeyFromURI(na),qa=s.getSectionKeyFromURI(ma),ra=s.getTabKeyFromURI(ma),sa=ma.getQueryData();if(ia(na,ma)||ja(ra)||ja(pa)||!!sa.and||s.isVideoPermalink(ma))return false;if(sa.hasOwnProperty('theater')){h.subscribeOnce('PhotoSnowlift.CLOSE',ka);return false;}if(n.isTimelineTab(pa)&&!n.isTimelineTab(ra)&&ha(qa)){z=qa;ca(qa,'TimelineMedleyView',r.TAB_CONTENT,l.MEDLEY_ROOT,sa);return true;}if(!n.isTimelineTab(pa)&&n.isTimelineTab(ra)){z=oa;ca(m.TIMELINE,'TimelineWallColumn',l.MEDLEY_ROOT,r.TAB_CONTENT,sa);return true;}return false;}function ca(ma,na,oa,pa,qa){i.hide(v(oa));h.inform('save_facebar_query',true);var ra=w(pa);if(ra){i.show(ra);ga(ma);}else da(na,ma,qa);q.registerCurrentKey(ma);}function da(ma,na,oa){ea();var pa=babelHelpers._extends({},aa,{tab_key:na});if(oa)pa=babelHelpers._extends({},pa,oa);var qa=function(sa){fa();sa();},ra={append:true,displayCallback:qa,finallyHandler:ga.bind(null,na),usePipe:true};t.loadFromEndpoint(ma,k.MAIN_COLUMN_PERSONAL,pa,ra);}function ea(){i.show(v(k.TAB_LOAD_INDICATOR));}function fa(){i.hide(v(k.TAB_LOAD_INDICATOR));}function ga(ma){var na=y;if(!n.isTimelineTab(ma))na+=':'+ma;o.set(na);j.transitionComplete();}function ha(ma){return z===null||ma===z;}function ia(ma,na){var oa=s.getVanityFromURI(ma),pa=ma.getQueryData().id,qa=s.getVanityFromURI(na),ra=na.getQueryData().id;if(oa&&qa)return oa!==qa;if(pa&&ra)return pa!==ra;return true;}function ja(ma){return (n.isActivityLogTab(ma)||ma===m.MEMORIAL_CONTACT||ma===m.POSTS);}function ka(){j.registerHandler(ba,x);}var la={init:function(ma){aa=ma.profileContextData;q.register(p.ASYNC_NAV,this);ka();},reset:function(){aa=null;z=null;j.removeHandler(ba);}};f.exports=la;},null);
__d('TimelineContextItemLogger',['BanzaiLogger','Event','FBJSON','Parent','Run','cx','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o='MTimelineXContextItemsLoggerConfig',p='impression',q='click',r='context_item_url',s='event',t="_md0",u=[];function v(x,y,z){var aa=j.parse(x.getAttribute('data-store'));aa[s]=y;if(z)aa[r]=z;h.log(o,aa);}var w={logWhenVisible:function(x){if(!u.length)l.onLeave(function(){u=[];});u.push(x);},logWhenClicked:function(x){n(i.listen(x,'click',function(y){var z=y.getTarget();if(z.nodeName!=='A')return;var aa=k.byClass(z,t);aa&&v(aa,q,z.href);}));},listenToExpand:function(x){n(x.addListener('expanded',function(){while(u.length)v(u.pop(),p);}));}};f.exports=w;},null);
__d('TimelineNavLight',['CSS','DataStore','DOM','DOMQuery','Event','Parent','ProfileOverviewDOMID','ProfileOverviewSection','ProfileTimelineUILogger','TimelineAppSectionConstants','TimelineComponentKeys','TimelineController','csx','cx','destroyOnUnload','invariant','queryThenMutateDOM'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){if(c.__markCompiled)c.__markCompiled();var y="_6-7",z="_6-6",aa="_529n",ba="_5215",ca="_9rw",da="_70k",ea="._6-7",fa="._6-6";function ga(ha){'use strict';!!ga.$TimelineNavLight1?w(0):undefined;this.$TimelineNavLight2=ha;this.$TimelineNavLight3=k.scry(ha,ea)[0];this.$TimelineNavLight4=k.scry(ha,fa);this.$TimelineNavLight5();o.subscribe('Medley/transitionToSection',(function(ja,ka){this.$TimelineNavLight6(ka.slice(n.PREFIX_MEDLEY.length));}).bind(this));s.register(r.COVER_NAV,this);var ia=l.listen(this.$TimelineNavLight2,'click',this.$TimelineNavLight7.bind(this));ga.$TimelineNavLight1=this;v((function(){this.$TimelineNavLight2=null;this.$TimelineNavLight3=null;this.$TimelineNavLight4=null;ia.remove();if(this.$TimelineNavLight8)this.$TimelineNavLight8.remove();ga.$TimelineNavLight1=null;}).bind(this));}ga.prototype.handleTabChange=function(ha){'use strict';this.$TimelineNavLight6(ha);};ga.prototype.setMoreMenuInstance=function(ha){'use strict';this.$TimelineNavLight8=l.listen(ha.getRoot(),'click',this.$TimelineNavLight9.bind(this));};ga.setMoreMenuInstance=function(ha){'use strict';!!!ga.$TimelineNavLight1?w(0):undefined;ga.$TimelineNavLight1.setMoreMenuInstance(ha);};ga.prototype.$TimelineNavLight6=function(ha){'use strict';this.$TimelineNavLight3&&h.removeClass(this.$TimelineNavLight3,y);this.$TimelineNavLight4.some((function(ia){var ja=q.collectionTabKeyToAppTabKey[ha]||ha;if(i.get(ia,'tab-key')===ja){h.addClass(ia,y);this.$TimelineNavLight3=ia;return true;}}).bind(this));};ga.prototype.$TimelineNavLight5=function(){'use strict';var ha=this.$TimelineNavLight4.length-1,ia=this.$TimelineNavLight4[ha],ja,ka,la,ma=0;x((function(){ja=m.byClass(this.$TimelineNavLight2,da).offsetWidth;ka=ia.offsetLeft;la=ia.offsetWidth;for(var na=ha;na>1;na--){var oa=this.$TimelineNavLight4[na];if(oa.offsetLeft+oa.offsetWidth>ja){ma++;}else break;}}).bind(this),(function(){if(ka+la>ja)h.addClass(this.$TimelineNavLight2,ba);for(var na=ha;na>ha-ma;na--)j.remove(this.$TimelineNavLight4[na]);h.removeClass(m.byClass(this.$TimelineNavLight2,aa),aa);}).bind(this));};ga.prototype.$TimelineNavLight10=function(ha,ia){'use strict';var ja=m.byClass(ha,ia);if(ja)return i.get(ja,'tab-key');return null;};ga.prototype.$TimelineNavLight7=function(event){'use strict';var ha=this.$TimelineNavLight10(event.target,z);if(ha)p.logCoverNavItemClick(ha);};ga.prototype.$TimelineNavLight9=function(event){'use strict';var ha=this.$TimelineNavLight10(event.target,ca);if(ha)p.logCoverNavMoreItemClick(ha);};f.exports=ga;},null);
__d('TimelineSecondaryColumnUnitList',['CSS','DOM','Event','Run','csx','cx','mixInEventEmitter'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=30;function p(q,r){'use strict';var s=j.listen(r,'click',(function(){this.$TimelineSecondaryColumnUnitList1=i.scry(q,"._16f_");this.$TimelineSecondaryColumnUnitList2();i.remove(r);this.emit('expanded');}).bind(this));k.onLeave(s.remove.bind(s));}p.prototype.$TimelineSecondaryColumnUnitList2=function(){'use strict';if(!this.$TimelineSecondaryColumnUnitList1.length)return;h.removeClass(this.$TimelineSecondaryColumnUnitList1.shift(),"_16f_");setTimeout(this.$TimelineSecondaryColumnUnitList2.bind(this),o);};n(p,{expanded:true});f.exports=p;},null);
__d('VideoCallHelpler',['FBRTCCallabilityStore','FBRTCCore','TooltipData'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();function k(m,n){var o=n.calleeID,p=n.calleeName;m.forEachItem(function(q){if(q.getValue&&q.getValue()==='video_call'){if(h.isCallable(n.calleeID)){q.enable();}else q.disable();j.set(q.getRoot(),h.callButtonTooltip(o,p),'right');}});}var l={bindProfileVideoCallAction:function(m,n){k(m,n);h.addListener(function(){k(m,n);});m.subscribe('itemclick',function(o,p){if(p.item.getValue()==='video_call'&&!p.item.isDisabled())i.startOutgoingCall(n.calleeID,'timeline_profile',false);});}};f.exports=l;},null);
__d('TimelineCapsule',['Arbiter','CSS','DataStore','DOM','DOMQuery','DOMScroll','Parent','TimelineConstants','TimelineLegacySections','Vector','$','csx','queryThenMutateDOM'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u=(function(){var v={},w={};function x(z){l.scry(z,"._3ram").forEach(function(aa){var ba=aa.getAttribute('data-endmarker'),ca=aa.getAttribute('data-pageindex'),da=function(){if(!aa.parentNode)return;j.set(o.DS_LOADED,z.id,ca);k.remove(aa);h.inform(o.SECTION_FULLY_LOADED,{scrubberKey:ba,pageIndex:ca,capsuleID:z.id,childCount:z.childNodes.length});};if(p.get(ba)){da();}else var ea=h.subscribe(o.SECTION_REGISTERED,function(fa,ga){if(ga.scrubberKey===ba){da();ea.unsubscribe();}});});h.inform('TimelineCapsule/balanced',{capsule:z});}function y(z,aa){var ba=n.byAttribute(z,'data-size');if(ba)if(i.hasClass(z.parentNode,'timelineReportContent')){aa(z);}else aa(ba);}return {removeUnit:function(z){y(z,function(aa){k.remove(aa);});},removeUnitWithID:function(z){u.removeUnit(r(z));},hideUnit:function(z){y(z,function(aa){i.addClass(aa,'fbTimelineColumnHidden');});},undoHideUnit:function(z,aa){k.remove(n.byClass(aa,'hiddenText'));y(z,function(ba){i.removeClass(ba,'fbTimelineColumnHidden');});},unplacehold:function(z){var aa=r(z);aa.style.top=null;i.removeClass(aa,'visiblePlaceholder');i.removeClass(aa,'placeholder');var ba=n.byClass(aa,'fbTimelineCapsule');delete v[ba.id][z];u.balanceCapsule(ba);},scrollToCapsule:function(z){if(!w.hasOwnProperty(z.id)){var aa=q.getElementPosition(z.parentNode);m.scrollTo(new q(q.getScrollPosition().x,aa.y-o.SCROLL_TO_OFFSET,'document'));w[z.id]=true;}},loadTwoColumnUnits:function(z,aa,ba){var ca=r(z);t(function(){var da=n.byClass(ca,'fbTimelineSection');if(da&&!aa){var ea=l.find(ca,"._2t4u"),fa=l.find(ca,"._2t4v"),ga=fa.offsetHeight-ea.offsetHeight;j.set(o.DS_COLUMN_HEIGHT_DIFFERENTIAL,ba,ga);}},x.bind(null,ca));}};})();f.exports=u;},null);
__d('TimelineLogging',['TimelineComponentKeys','TimelineController','reportData'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=false,l=0,m=null,n=null,o={init:function(p){if(k)return;l=p;i.register(h.LOGGING,this);},reset:function(){k=false;l=0;m=null;},log:function(p,q){q.profile_id=l;j(p,{gt:q});},logSectionChange:function(p,q){var r={timeline_section_change:1,key:p};if(m&&p==m){r.timeline_scrubber=1;m=null;}if(n&&p==n){r.sticky_header_nav=1;n=null;}o.log('timeline',r);},logScrubberClick:function(p){m=p;},logStickyHeaderNavClick:function(p){n=p;}};f.exports=o;},null);
__d('TimelineStickyColumn',['Arbiter','CSS','DOMQuery','Event','Run','Style','TimelineComponentKeys','TimelineConstants','TimelineContentLoader','TimelineController','UITinyViewportAction','Vector','csx','queryThenMutateDOM','requireWeak'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w=100,x=15,y=15,z=35,aa="._2t4u",ba="._5nb8",ca="._2t4v",da=false,ea={},fa=null,ga=null,ha=null,ia=null,ja,ka,la,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta;function ua(){var nb;v('ModalLayer',function(ob){return nb=ob;});if(nb)return !!nb.getTopmostModalLayer();return false;}function va(){ja=p.getCurrentSection();ka=p.getRecentActivitySection();if(!ja||!ja.isRightColumnFinished())return;var nb,ob;if(ea.hasDecoupledColumns){nb=hb(ka);ob=fb(ka);}else{ob=fb(ja);nb=gb(ja);}ma=nb?nb.offsetHeight:0;na=ob?ob.offsetHeight:0;oa=s.getViewportDimensions().y;sa=nb?s.getElementPosition(nb).y:0;la=p.getLastVisibleSection();pa=ja.getNode().offsetHeight;ta=document.body.clientWidth<document.body.scrollWidth;}function wa(){if(ua())return false;if(!ea.hasDecoupledColumns&&ja)return ja.isRightColumnFinished();if(ka&&ja===ka&&qa>=ra)return ka.isRightColumnFinished();return true;}function xa(){if(!ja)return;if(!ea.hasDecoupledColumns&&ia&&ia!==ja){var nb=fb(ia);if(nb)ib(nb,'','','');}ra=qa;qa=s.getScrollPosition().y;var ob;if(ea.hasDecoupledColumns){ob=fb(ka);}else ob=fb(ja);if(!ob)return;if(ta){ib(ob,'','','');return;}if(wa()){ya(ob);ia=bb(ob)==='fixed'?ja:null;}}function ya(nb){if(na>=ma||ma<=oa)return;var ob=sa-jb();if(qa<=ob){ib(nb,'','','');return;}var pb=y+z,qb=qa+oa-pb,rb=qa+na+jb(),sb=sa+pa;if(ja===la)sb+=z;if(!ea.hasDecoupledColumns&&sb<=Math.min(rb,qb)){ib(nb,'absolute','',y+'px');return;}var tb=oa-y-jb();if(na<=tb){ib(nb,'fixed',jb()+'px','');return;}if(qa<ra){za(nb);}else ab(nb);}function za(nb){var ob=false;if(bb(nb)==='absolute'){var pb=sa+ma-jb(),qb=qa+jb()-sa;if(!!db(nb)&&qb<=db(nb)){ob=true;}else if(nb.style.bottom!==''&&qa<=pb-na)ob=true;}if(ob){ib(nb,'fixed',jb()+'px','');return;}if(bb(nb)==='absolute'&&!!db(nb))return;if(cb(nb)){if(db(nb)>=jb())return;var rb=oa-z,sb=qa-sa-(na-rb);if(!ea.hasDecoupledColumns&&ja===ka)sb+=w;if(ra)sb+=ra-qa;ib(nb,'absolute',sb+'px','');return;}}function ab(nb){var ob,pb,qb=false;if(!cb(nb)){ob=db(nb);pb=eb(nb);if(ob>0||pb===0){var rb=qa+oa+z,sb=sa+ob+na-z;if(rb>=sb)qb=true;}}if(!qb)if(qa===ra||!cb(nb))return;if(qb){ob=oa-na-y-z;ib(nb,'fixed',ob+'px','');return;}if(cb(nb)&&db(nb)>=jb()){ob=qa-sa+jb();if(ra)ob+=ra-qa;ib(nb,'absolute',ob+'px','');}}function bb(nb){switch(nb.style.position){case 'absolute':case 'static':return nb.style.position;default:return i.hasClass(nb,'fixed_always')?'fixed':'static';}}function cb(nb){switch(bb(nb)){case 'absolute':case 'static':return false;default:return true;}}function db(nb){return nb.style.top?parseInt(nb.style.top,10):0;}function eb(nb){return nb.style.bottom?parseInt(nb.style.bottom,10):0;}function fb(nb){if(nb)return j.scry(nb.getNode(),ca)[0];return null;}function gb(nb){if(nb)return j.scry(nb.getNode(),aa)[0];return null;}function hb(nb){if(nb)return j.scry(nb.getNode(),ba)[0];return null;}function ib(nb,ob,pb,qb){m.set(nb,'bottom',qb);if(ob==='fixed'){i.addClass(nb,'fixed_always');m.set(nb,'position','');}else{i.removeClass(nb,'fixed_always');m.set(nb,'position',ob);}m.set(nb,'top',pb);h.inform('reflow');}function jb(){return r.isTiny()?x:w;}function kb(){u(va,xa);}function lb(){da=false;ia=null;while(fa&&fa.length)fa.pop().remove();fa=null;if(ga)ga.unsubscribe();if(ha)ha.unsubscribe();}var mb={init:function(nb){if(!da){da=true;ea=nb;fa=[k.listen(window,'scroll',kb),k.listen(window,'resize',kb)];ga=h.subscribe(o.SECTION_FULLY_LOADED,kb);ha=h.subscribe(o.UNIT_SEGMENT_LOADED,kb);l.onLeave(lb);q.register(n.STICKY_COLUMN,this);}},adjust:function(){if(da){va();xa();}}};f.exports=mb;},null);
__d('TimelineViewportTracking',['Arbiter','Banzai','DOM','TimelineSeenStateConstants','TimelineViewportTrackingLogType','ViewportTracking','$','csx','tidyEvent'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q,r,s;q=babelHelpers.inherits(t,m);r=q&&q.prototype;t.prototype.getAllStories=function(){'use strict';var u=j.scry(this.getStream(),"._5pat"),v=[];for(var w=0;w<u.length;w++)if(this.getStoryID(u[w]))v.push(u[w]);return v;};t.prototype.getStream=function(){'use strict';if(!this.$TimelineViewportTracking1)this.$TimelineViewportTracking1=n('timeline_tab_content');return this.$TimelineViewportTracking1;};t.prototype.getStoryID=function(u){'use strict';var v=JSON.parse(u.getAttribute('data-ft'));if(v){var w=k.FT_TIMELINE_HASH_IDENTIFIER_KEY;return v[w];}return null;};t.prototype.getDataToLog=function(u){'use strict';var v=JSON.parse(u.getAttribute('data-ft'));return {ft:v,log_type:l.IMPRESSION};};t.prototype.getTimetrackingDataToLog=function(u){'use strict';var v=r.getTimetrackingDataToLog.call(this,u);v.log_type=l.DURATION;return v;};t.prototype.sendDataToLog=function(u,v,w,x){'use strict';if(!v.ft)return;var y={};if(x)y.retry=x;if(w)y.delay=2000;i.post('timeline_feed_tracking',v,y);};t.prototype.getDataFromConfig=function(u){'use strict';this.timeout=u.record_delay;this.isSeenStateLoggingEnabled=u.is_seen_state_logging_enabled;this.isTimetrackingEnabled=u.is_timetracking_enabled;this.vpvdDebug=!!u.vpvd_debug;p(h.subscribe(['TimelineConstants/unitSegmentLoaded'],(function(){this.invalidateAllStoriesCache();this.invalidateVisibleStoriesCache();}).bind(this)));};t.prototype.getTimeout=function(){'use strict';return this.timeout;};t.prototype.cleanup=function(){'use strict';s=null;r.cleanup.call(this);};function t(){'use strict';q.apply(this,arguments);}f.exports={getInstance:function(){return s;},init:function(u){if(s)return;s=new t();s.init(u);}};},null);