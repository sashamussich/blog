/*!CK:3846909320!*//*1447737950,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["AGHpB"]); }

__d('NotificationHiddenState',['NotificationUpdates','NotificationConstants','isEmpty'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={};h.subscribe('update-notifications',function(m,n){var o=n.nodes,p=n.payloadsource;if(p===i.PayloadSourceType.LIVE_SEND&&o&&o.length){var q={};o.forEach(function(r){var s=r.alert_id;if(k[s])q[s]=false;});if(!j(q)){k=Object.assign(k,q);h.didUpdateHiddenState(Object.keys(q));}}});h.subscribe('update-hidden',function(m,n){if(n.hiddenState){k=Object.assign(k,n.hiddenState);h.didUpdateHiddenState(Object.keys(n.hiddenState));}});var l={isHidden:function(m){if(k[m])return k[m];return false;}};f.exports=l;},null);
__d('NotificationPhotoThumbnail',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){if(!j.media||!j.style_list||!j.style_list.length)return null;switch(j.style_list[0]){case 'new_album':case 'album':case 'application':case 'photo':case 'video':case 'video_autoplay':case 'video_inline':return j.media.image;default:return null;}}var i={getThumbnail:function(j,k,l){var m;if(j&&j.length){j.some(function(q){m=h(q);if(m)return true;return false;});if(m)return m;}if(l){var n=l.relevant_comments;if(n&&n.length){var o=n[0].attachments;if(o&&o.length){m=h(o[0]);if(m)return m;}}}if(k){var p=k.attachments;if(p&&p.length)return h(p[0]);}return null;}};f.exports=i;},null);
__d('NotificationURI',['BusinessURI.brands','URI','isFacebookURI','VideoPermalinkURI'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l={localize:function(m){m=h(m);if(!j(m))return m.toString();var n=m.getSubdomain();return m.getUnqualifiedURI().getQualifiedURI().setSubdomain(n).toString();},snowliftable:function(m){if(!m)return false;m=new i(m);var n=m.getQueryData();return j(m)&&(k.isValid(m)||'fbid' in n);},isVaultSetURI:function(m){return this._areEquals(m,'/ajax/vault/sharer_preview.php');},isAlbumDraftRecoveryDialogURI:function(m){return this._areEquals(m,'/ajax/photos/upload/overlay/');},_areEquals:function(m,n){if(!m)return false;m=new i(m);return j(m)&&m.getPath()===n;},_startsWith:function(m,n){if(!m)return false;m=new i(m);return j(m)&&m.getPath().startsWith(n);}};f.exports=l;},null);
__d('NotificationList.react',['NotificationConstants','NotificationHiddenState','NotificationSeenState','NotificationStore','NotificationUpdates','NotificationUserActions','React','getObjectValues','isEmpty'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=n.PropTypes,r=h.PayloadSourceType.LIVE_SEND,s=n.createClass({displayName:'NotificationList',propTypes:{businessID:q.string,hasEverBeenOpened:q.bool,maxHeight:q.number,negativeTracking:q.object,paused:q.bool,tracking:q.string,useChevron:q.bool,chevronType:q.string,numPerPage:q.number.isRequired,listRenderer:q.func.isRequired,upsell:q.object,gameRecs:q.object,endpoint:q.string},getInitialState:function(){this._currentlyFetching=false;this._pendingNotifs={};this._shouldScroll=false;return {canFetchMore:true,notifs:{},hiddenState:{},readState:{},showingChevron:false};},componentWillMount:function(){k.setBusinessID(this.props.businessID);this._subscriptions=[l.subscribe('notifications-updated',(function(t,u){if(u.source==r&&!p(u.updates)){this._shouldScroll=true;if(this.props.paused!==false)this._pendingNotifs=babelHelpers._extends({},this._pendingNotifs,u.updates);return;}this._fetchAndUpdate(k.getCount());}).bind(this)),l.subscribe(['hidden-state-updated','read-state-updated'],(function(t,u){if(t=='hidden-state-updated'){if(u.source!==r||!this.props.paused){var v={};Object.keys(u.updates).forEach(function(x){v[x]=i.isHidden(x);});this.setState({hiddenState:babelHelpers._extends({},this.state.hiddenState,v)});}}else{var w={};Object.keys(u.updates).forEach(function(x){w[x]=j.isRead(x);});this.setState({readState:babelHelpers._extends({},this.state.readState,w)});}}).bind(this))];},componentWillUnmount:function(){if(this._subscriptions){while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null;}},_getNotifsWithCurrentOrder:function(t){var u=Object.keys(this.state.notifs),v=Object.keys(t).filter((function(x){return !this.state.notifs[x];}).bind(this));u=u.concat(v);var w={};u.forEach((function(x){if(this._pendingNotifs[x]){if(this.state.notifs[x])w[x]=this.state.notifs[x];}else w[x]=t[x];}).bind(this));return w;},_fetchAndUpdate:function(t){this._currentlyFetching=true;k.getNotifications(t,(function(u){var v=p(this._pendingNotifs)?u:this._getNotifsWithCurrentOrder(u),w={},x={};o(v).forEach(function(y){var z=y.alert_id;if(!this.state||!this.state.readState[z])w[z]=j.isRead(z);if(!this.state||!this.state.hiddenState[z])x[z]=i.isHidden(z);});this._currentlyFetching=false;this.setState({notifs:v,canFetchMore:k.canFetchMore()||k.getCount()!=Object.keys(v).length,readState:babelHelpers._extends({},this.state.readState,w),hiddenState:babelHelpers._extends({},this.state.hiddenState,x)});}).bind(this),this.props.endpoint);},_fetchAndUpdateAll:function(){var t={};Object.keys(this._pendingNotifs).forEach((function(u){var v=i.isHidden(u);if(v!=this.state.hiddenState[u])t[u]=i.isHidden(u);}).bind(this));if(!p(t))this.setState({hiddenState:babelHelpers._extends({},this.state.hiddenState,t)});this._pendingNotifs={};this._fetchAndUpdate(k.getCount());},_fetchNextSet:function(){if(!this._currentlyFetching){var t=Object.keys(this.state.notifs).length;this._fetchAndUpdate(t+this.props.numPerPage);}},_onScrollAndUpdate:function(t){if(this._currentlyFetching||!this.state.canFetchMore)return;if(t)this._fetchNextSet();},_onChevronShow:function(){this.setState({showingChevron:true});},_onChevronHide:function(){this.setState({showingChevron:false});},_updateNotifInContainer:function(t){if(t.length>this.props.numPerPage){this._fetchAndUpdate(t.length);}else this._fetchNextSet();return;},componentDidUpdate:function(t){var u=j.getUnseenIDs();if(!p(this._pendingNotifs))u=u.filter((function(v){return !this._pendingNotifs[v];}).bind(this));if(u.length&&this.props.paused)m.markNotificationsAsSeen(u);if(!t.hasEverBeenOpened&&this.props.hasEverBeenOpened)this._updateNotifInContainer(u);if(t.paused&&!this.props.paused){this._shouldScroll=false;setTimeout(this._fetchAndUpdateAll,0);return;}},render:function(){var t=this.props.listRenderer;return (n.createElement(t,{hasEverBeenOpened:this.props.hasEverBeenOpened,paused:this.props.paused,tracking:this.props.tracking,negativeTracking:this.props.negativeTracking,shortenTimestamp:this.props.shortenTimestamp,businessID:this.props.businessID,maxHeight:this.props.maxHeight,useChevron:this.props.useChevron,chevronType:this.props.chevronType,notifs:this.state.notifs,afterScroll:this._onScrollAndUpdate,onChevronShow:this._onChevronShow,onChevronHide:this._onChevronHide,canFetchMore:this.state.canFetchMore,hiddenState:this.state.hiddenState,readState:this.state.readState,showingChevron:this.state.showingChevron,shouldScroll:this._shouldScroll,upsell:this.props.upsell||null,gameRecs:this.props.gameRecs||null,isRHC:this.props.isRHC}));}});f.exports=s;},null);
__d('FlexibleBlock.react',['LeftRight.react','React','cx','invariant','keyMirror'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=l({left:true,right:true});function n(p){!(p.flex&&p.flex in o.FLEX)?k(0):undefined;!(p.children&&p.children.length===2)?k(0):undefined;}var o=i.createClass({displayName:'FlexibleBlock',render:function(){n(this.props);var p,q=this.props.children[0],r=this.props.children[1],s=this.props.flex==m.left,t;if(s){t=q;p=h.DIRECTION.right;}else{t=r;p=h.DIRECTION.left;}var u=i.createElement('div',{className:"_42ef"},t);return (i.createElement(h,babelHelpers._extends({},this.props,{direction:p}),s?u:this.props.children[0],s?this.props.children[1]:u));}});o.FLEX=m;f.exports=o;},null);
__d('ReadToggle.react',['React','cx','emptyFunction','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'ReadToggle',propTypes:{isRead:l.bool.isRequired,onClick:l.func,readLabel:l.node,unreadLabel:l.node},getDefaultProps:function(){return {onClick:j};},render:function(){if(this.props.isRead){return (h.createElement('div',{'aria-label':this.props.readLabel,className:this._getClasses(),'data-hover':'tooltip','data-tooltip-alignh':'center',onClick:this.props.onClick}));}else return (h.createElement('div',{'aria-label':this.props.unreadLabel,className:this._getClasses(),'data-hover':'tooltip','data-tooltip-alignh':'center',onClick:this.props.onClick,role:'button',tabIndex:'0'}));},_getClasses:function(){return k(this.props.className,(!this.props.isRead?"_5c9q":'')+(this.props.isRead?' '+"_5c9_":''));}});f.exports=m;},null);
__d('NotificationListItem.react',['AsyncResponse','BizSiteIdentifier.brands','BanzaiLogger','CloseButton.react','Event','FlexibleBlock.react','ImageBlock.react','Keys','List.react','NotificationPhotoThumbnail','NotificationTokens','NotificationURI','NotificationUserActions','React','TextWithEntities.react','ReadToggle.react','Timestamp.react','VaultBoxURI','XUIButton.react','PopoverMenu.react','ReactXUIMenu','cx','invariant','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea){if(c.__markCompiled)c.__markCompiled();var fa=ba.Item;function ga(ja,ka){return u.createElement('span',{className:'fwb'},ja);}function ha(ja){return !!(ja&&ja.id&&!ja.is_facebook_app);}var ia=u.createClass({displayName:'NotificationListItem',getInitialState:function(){return {showingOptions:false,negativeFeedbackConfirmation:null,canReportAsSpam:false,spamReportConfirmation:null,sendingFeedback:false,mayUndoHide:false,notifOptionConfirmation:null,isBizSite:i.isBizSite()};},_onKeyDownItem:function(ja){if(l.getKeyCode(ja.nativeEvent)==o.RETURN)this._markItemRead();},_markItemReadIfUnreadFromReadButton:function(){if(!this.props.isRead)t.setNextIsFromReadButton(true);this._markItemReadIfUnread();},_markItemReadIfUnread:function(){!this.props.isRead&&this._markItemRead();},_markItemRead:function(){t.markNotificationsAsRead([this.props.alert_id]);},_onFeedbackError:function(ja){h.defaultErrorHandler(ja);this.setState({sendingFeedback:false});},_onHideSuccess:function(ja){var ka=ja.getPayload();!ka.confirmation?da(0):undefined;this.setState({negativeFeedbackConfirmation:ka.confirmation,canReportAsSpam:ka.canReportAsSpam,sendingFeedback:false,showingOptions:true});},_onHideAppSuccess:function(ja){var ka=ja.getPayload(),la=ka.confirmation,ma=ka.canReportAsSpam;!la?da(0):undefined;this.setState({negativeFeedbackConfirmation:la,canReportAsSpam:ma,mayUndoHide:true,sendingFeedback:false,showingOptions:true});},_onSpamReportSuccess:function(ja){var ka=ja.getPayload().spamReportConfirmation;this.setState({negativeFeedbackConfirmation:null,spamReportConfirmation:ka,sendingFeedback:false});},_onHide:function(){t.markNotificationAsHidden(this.props.alert_id,this._onHideSuccess,this._onFeedbackError);this.setState({sendingFeedback:true,mayUndoHide:true});},_onShowSuccess:function(){this.setState({notifOptionConfirmation:null,negativeFeedbackConfirmation:null,sendingFeedback:false,showingOptions:false});},_onShow:function(){var ja=this.props.negative?this.props.negative.subscription_level:null;t.markNotificationAsVisible(this.props.alert_id,ja,this._onShowSuccess,this._onFeedbackError);this.setState({sendingFeedback:true});},_onReportSpam:function(){t.markNotificationAsSpam(this.props.alert_id,this._onSpamReportSuccess,this._onFeedbackError);this.setState({sendingFeedback:true});},_markAppAsHidden:function(){t.markAppAsHidden(this.props.alert_id,this.props.application.id,this._onHideAppSuccess,this._onFeedbackError);this.setState({sendingFeedback:true});},_markAppAsVisible:function(){t.markAppAsVisible(this.props.alert_id,this.props.application.id,(function(){this.setState({negativeFeedbackConfirmation:null,sendingFeedback:false,showingOptions:false,mayUndoHide:false});}).bind(this),this._onFeedbackError);this.setState({sendingFeedback:true});},_renderAttachedImage:function(ja){if(ja)return (u.createElement('img',{src:ja.uri,className:"_42td",'aria-hidden':true}));return u.createElement('span',null);},_getModifiedTrackingString:function(ja){return JSON.stringify(babelHelpers._extends({},JSON.parse(this.props.tracking),ja));},_onClickCloseButton:function(){if(this.props.useChevron){this.showCloseOptionOnMenuClose=true;}else this.setState({showingOptions:true});},_onCancelNegativeFeedback:function(){this.setState({showingOptions:false});},_getChevron:function(){if(!this.props.menu_options.length)return null;var ja="_1_0c"+(' '+"_55m9")+(this.props.chevronType==='persistent'?' '+"_51v8":''),ka=u.createElement(ba,null,this.props.menu_options?this.props.menu_options.map((function(ma){return (u.createElement(fa,{onclick:(function(){this._onClickNotifOption(ma.server_action);}).bind(this),key:ma.client_action+ma.server_action},u.createElement('div',{className:"_3-y-"},ma.text),u.createElement('div',{className:"_3-y_"},ma.subtext)));}).bind(this)):null),la=u.createElement('a',null,u.createElement(aa,{alignh:'right',menu:ka,className:ja,onShow:this._onChevronShow,onHide:this._onChevronHide},u.createElement('div',{className:"_1_0d"})));return la;},shouldComponentUpdate:function(ja,ka){return (this.props.visible!==ja.visible||this.props.isRead!==ja.isRead||this.props.timestamp!==ja.timestamp||this.props.paused!==ja.paused||this.state.showingOptions!==ka.showingOptions||this.state.sendingFeedback!==ka.sendingFeedback||this.state.canReportAsSpam!==ka.canReportAsSpam||this.state.spamReportConfirmation!==ka.spamReportConfirmation);},componentWillReceiveProps:function(ja){if(this.props.paused&&!ja.paused&&!this.props.visible&&this.state.mayUndoHide)this.setState({mayUndoHide:false});},_onChevronHide:function(){this.props.onChevronHide();this._logChevronEvent('close');if(this.showCloseOptionOnMenuClose){this.showCloseOptionOnMenuClose=false;this._turnOff();}},_turnOff:function(){var ja=ha(this.props.application)?this._markAppAsHidden:this._onHide;ja();},_onChevronShow:function(){this.props.onChevronShow();this._logChevronEvent('open');},_logChevronEvent:function(ja){var ka={event:ja,notif_type:this.props.notif_type,notif_id:parseInt(r.untokenizeIDs([this.props.alert_id])[0],10)};j.log('NotifJewelMenuLoggerConfig',ka);},_onNotifOptionSuccess:function(ja){this.setState({showingOptions:true,sendingFeedback:false,notifOptionConfirmation:ja});},_onClickNotifOption:function(ja){this.setState({sendingFeedback:true,mayUndoHide:true});t.sendNotifOption(this.props.alert_id,this._onNotifOptionSuccess,this._onFeedbackError,ja);},_undoNotifOption:function(ja){this.setState({sendingFeedback:true});t.undoNotifOption(this.props.alert_id,this._onShowSuccess,this._onFeedbackError,ja);},render:function(){if(!this.props.visible&&!this.state.mayUndoHide)return u.createElement('li',{className:"_4_62"});var ja=this.props.negative,ka=this.props.negativeTracking,la="_33c"+(!this.props.isRead?' '+"_4af":'')+(this.state.showingOptions?' '+"_4ag":'')+(this.state.sendingFeedback?' '+"_4m8s":'');if(this.state.negativeFeedbackConfirmation){var ma=this.state.negativeFeedbackConfirmation,na=null,oa=null;if(this.state.canReportAsSpam)if(!this.props.useChevron){na=u.createElement('span',null,u.createElement('span',{className:'mhs'},'·'),u.createElement('a',{href:'#',onClick:this._onReportSpam},ea._("Report app for spam")));}else oa=u.createElement(p,{border:'none',spacing:'small',className:"_1v4c"},u.createElement('li',null,u.createElement('a',{href:'#',onClick:this._onReportSpam,className:'mls'},ea._("Report app for spam"))));var pa=ha(this.props.application)?this._markAppAsVisible:this._onShow,qa=!this.props.useChevron?u.createElement('a',{href:'#',onClick:pa,className:'mls'},ea._("Undo")):null;return (u.createElement('li',{className:la,'data-gt':this.props.tracking},u.createElement('div',{className:"_4ai"},u.createElement(v,{interpolator:ga,ranges:ma.ranges,aggregatedranges:ma.aggregated_ranges,text:ma.text}),qa,na),oa));}var ra=this.state.spamReportConfirmation;if(ra)return (u.createElement('li',{className:la,'data-gt':this.props.tracking},u.createElement('div',{className:"_4ai"},u.createElement(v,{interpolator:ga,ranges:ra.ranges,aggregatedranges:ra.aggregated_ranges,text:ra.text}))));if(this.state.notifOptionConfirmation){ma=this.state.notifOptionConfirmation;return (u.createElement('li',{className:la,'data-gt':this.props.tracking},u.createElement('div',{className:"_4ai"},u.createElement(v,{interpolator:ga,ranges:ma.ranges,aggregatedranges:ma.aggregated_ranges,text:ma.text&&ma.text.text?ma.text.text:''}),u.createElement('a',{href:'#',onClick:(function(){this._undoNotifOption(ma.undo_action);}).bind(this),className:'mls'},ea._("Undo"))),u.createElement(p,{border:'none',spacing:'small',className:"_1v4c"},ma.follow_up_options.map?ma.follow_up_options.map((function(pb){return (u.createElement('li',{key:pb.client_action+pb.server_action},u.createElement('a',{onClick:(function(){this._onClickNotifOption(pb.server_action);}).bind(this),href:'#',className:'mls'},pb.subtext)));}).bind(this)):null)));}if(this.state.showingOptions&&!this.props.useChevron){var sa=ha(this.props.application)?this._markAppAsHidden:this._onHide;return (u.createElement('li',{className:la,'data-gt':this.props.tracking},u.createElement('div',{className:"_4ai"},u.createElement('div',null,u.createElement(v,{interpolator:ga,ranges:ja.confirm_question.ranges,aggregatedranges:ja.confirm_question.aggregated_ranges,text:ja.confirm_question.text})),u.createElement('div',{className:'mts'},u.createElement(z,{'data-gt':this._getModifiedTrackingString(ka.confirm),href:{url:'#'},label:ja.turn_off,use:'confirm',onClick:sa,disabled:this.state.sendingFeedback}),u.createElement(z,{'data-gt':this._getModifiedTrackingString(ka.cancel),href:{url:'#'},label:ea._("Keep On"),onClick:this._onCancelNegativeFeedback,disabled:this.state.sendingFeedback})))));}var ta=null;if(this.props.title)ta=u.createElement(v,{interpolator:ga,ranges:this.props.title.ranges,aggregatedranges:this.props.title.aggregated_ranges,text:this.props.title.text,renderEmoji:true,renderEmoticons:true});var ua=null,va=null;if(ja){var wa=this._onClickCloseButton,xa;xa=this._getModifiedTrackingString(ka.click);var ya="_4ah"+(' '+"_55m9");ua=u.createElement(k,{className:ya,'data-gt':xa,size:'medium',tooltip:ja.button_tooltip,onClick:wa,ref:'closeButton'});}var za=s.localize(this.props.url),ab=null;if(!this.props.noPhotoPreviews)ab=q.getThumbnail(this.props.attachments,this.props.attached_story,this.props.feedback_context);var bb=ab&&s.snowliftable(za),cb=s.isVaultSetURI(za),db=s.isAlbumDraftRecoveryDialogURI(za),eb=(this.props.useChevron?"_55ma":'')+(' '+"_55m9"),fb=u.createElement(w,{className:eb,isRead:!!this.props.isRead,onClick:this._markItemReadIfUnreadFromReadButton,readLabel:ea._("Read"),unreadLabel:ea._("Mark as Read")}),gb=null;if(this.props.useChevron){ua=null;gb=this._getChevron();}var hb=bb||cb||db?za:this.props.ajaxify_url,ib=null,jb=null,kb=cb?y.getSyncedTabURI().toString():za;if(bb){ib='theater';}else if(db){ib='async-post';}else if(cb||hb)ib='dialog';var lb=null,mb=this.props.actors[0];if(mb)lb={backgroundImage:'url('+mb.profile_picture.uri+')'};var nb=false;this.props.attachments.forEach(function(pb){if(nb)return;nb=pb.style_list.indexOf('notification_target')>=0||pb.style_list.indexOf('question')>=0;if(nb)return;});var ob=u.createElement('div',null,fb,ua,gb);return (u.createElement('li',{className:la,'data-gt':this.props.tracking,onMouseLeave:va},u.createElement('div',{className:'anchorContainer'},u.createElement('a',{href:kb,ajaxify:hb,className:"_33e"+(this.props.useChevron?' '+"_1_0e":''),rel:ib,onClick:jb,onMouseDown:this._markItemRead,onKeyDown:this._onKeyDownItem},u.createElement(n,null,u.createElement('span',{style:lb,className:(!this.props.isNotifsPage?"_33h":'')+(this.props.isNotifsPage?' '+"_12u1":'')}),u.createElement(m,{flex:m.FLEX.left},u.createElement('div',{className:"_4l_v"},ta,u.createElement(n,{className:"_33f"+(this.state.isBizSite?' '+"_2g48":'')},u.createElement('img',{className:"_10cu",src:this.props.icon.uri}),u.createElement('span',null,u.createElement(x,{shorten:this.props.shortenTimestamp,time:this.props.timestamp.time,text:this.props.timestamp.text,verbose:this.props.timestamp.verbose,className:"_33g"})))),this._renderAttachedImage(ab)))),ob)));}});f.exports=ia;},null);
__d('NotificationListPropTypes',['React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=h.PropTypes,j={negativeTracking:i.object,tracking:i.string,useChevron:i.bool,chevronType:i.string,notifs:i.object,afterScroll:i.func,onChevronShow:i.func,onChevronHide:i.func,canFetchMore:i.bool,hiddenState:i.object,readState:i.object,showingChevron:i.bool,paused:i.bool,maxHeight:i.number,shouldScroll:i.bool,upsell:i.object,gameRecs:i.object};f.exports=j;},null);
__d('NotificationPageList.react',['Event','LoadingIndicator.react','NotificationListItem.react','NotificationListPropTypes','React','ReactDOM','Vector','cx','debounce','fbt','getObjectValues','isEmpty'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=l.createClass({displayName:'NotificationPageList',propTypes:k,_shouldKeepLoading:function(){var u=this.refs.loading;if(!u)return false;var v=n.getElementPosition(m.findDOMNode(u),'viewport').y;return v<n.getViewportDimensions().y;},_keepOnLoading:function(){this.props.afterScroll(this._shouldKeepLoading());},componentDidUpdate:function(){this._keepOnLoading();},componentDidMount:function(){h.listen(window,'scroll',p(this._keepOnLoading));this._keepOnLoading();},_renderItems:function(){return r(this.props.notifs).map((function(u){var v=u.alert_id;return (l.createElement(j,babelHelpers._extends({key:v,visible:!this.props.hiddenState[v],isRead:this.props.readState[v],negativeTracking:this.props.negativeTracking,shortenTimestamp:this.props.shortenTimestamp,useChevron:this.props.useChevron,chevronType:this.props.chevronType,onChevronShow:this.props.onChevronShow,onChevronHide:this.props.onChevronHide,noPhotoPreviews:true,isNotifsPage:true,paused:this.props.paused},u)));}).bind(this));},render:function(){var u=null,v=null;if(!s(this.props.notifs)){u=l.createElement('ul',{'data-gt':this.props.tracking},this._renderItems());}else if(!this.props.canFetchMore)u=l.createElement('div',{className:"_44_s"},q._("No new notifications"));if(this.props.canFetchMore)v=l.createElement(i,{color:'white',size:'large',ref:'loading',className:"_44_t"});var w=null;if(this.props.upsell){var x=this.props.upsell.module;w=l.createElement(x,babelHelpers._extends({isPage:true},this.props.upsell.props));}var y="_44_u"+(this.props.showingChevron?' '+"_44_v":'');return (l.createElement('div',{className:y},w,u,v));}});f.exports=t;},null);