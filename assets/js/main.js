!function(){var e,t,n,r,i={320:function(){Manager.ready((function(){Manager.log("app.js fired Manager.ready()")}))},835:function(e,t,n){Manager.log("Init main.js");var r,i=Manager.dom(),o=window.location.href;o.includes("/pricing")?i.loadScript({src:"https://cdn.itwcreativeworks.com/assets/general/js/pricing-page-handler/index.js"}):o.includes("/download")?i.loadScript({src:"https://cdn.itwcreativeworks.com/assets/general/js/download-page-handler/index.js"}):o.includes("/browser-extension")||o.includes("/extension")?i.loadScript({src:"https://cdn.itwcreativeworks.com/assets/general/js/browser-extension-page-handler/index.js"}):window.location.pathname.endsWith(".html")&&(window.location.pathname=window.location.pathname.replace(".html","")),i.select("form.slapform").each((function(e,t){i.select(e).on("submit",(function(e){e.preventDefault(),n.e(79).then(n.t.bind(n,79,23)).then((function(t){(r=r||new t.default).process(e)}))})),i.select(e.querySelector('button[type="submit"]')).removeAttribute("disabled").removeClass("disabled")}));var a=Manager.storage(),s=a.get("user.auth")||{},c=!1;function u(e){if(!c){var t=window.Configuration.global.tracking,n=e.phone?parseInt(e.phone.replace(/\+/gi,"")):null;gtag("set","user_id",e.uid),fbq("init",t.facebookPixel,{external_id:e.uid,em:e.email,ph:n}),ttq.identify({external_id:e.uid||"",email:e.email||"",phone_number:n?"+"+n:""}),c=!0}}s&&s.uid&&s.email&&u(s),Manager.auth().ready((function(e){u(e),a.set("user.auth.uid",e.uid),a.set("user.auth.email",e.email)}))},769:function(e,t,n){var r,i,o,a=n(916),s=n(158),c=n(959);function u(){var e=function(){var e=/\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(navigator.userAgent);if(e)return parseInt(e[2])}();return!(e&&e<=11)}function l(){var e=this;e.properties={options:{page:{},global:{}},page:{code:"",url:"",status:{initilizing:!1,ready:!1,authReady:!1},queryString:{},isSupportedBrowser:u(),startTime:new Date},global:{version:"",url:"",buildTime:0,cacheBreaker:"",brand:{name:"default"},contact:{emailSupport:"",emailBusiness:""},download:{windows:"",mac:"",linuxDebian:"",linuxSnap:""},extension:{chrome:"",firefox:"",edge:"",opera:"",safari:""},validRedirectHosts:[]},auth:{user:!1},references:{serviceWorker:void 0},meta:{environment:"production"}};try{e.properties.page.url=window.location.href}catch(e){}r=e.dom().select,i=e.dom().loadScript,o=e.storage()}function d(e,t){if(!t||t.isAnonymous)return function(e){if("required"===e.properties.options.auth.state){var t=e.properties.options.auth.sends.required.split("?"),n=new URLSearchParams(t[1]);return n.set("auth_redirect",window.location.href),void(window.location.href=t[0]+"?"+n.toString())}r(".auth-signedin-true-element").hide(),r(".auth-signedin-false-element").show()}(e);!function(e,t){var n=e.properties.page.queryString.get("auth_redirect");if(n&&e.isValidRedirectUrl(n))return void(window.location.href=decodeURIComponent(n));if("prohibited"===e.properties.options.auth.state)return void(window.location.href=e.properties.options.auth.sends.prohibited);r(".auth-signedin-true-element").show(),r(".auth-signedin-false-element").hide(),r(".auth-email-element").each((function(e,n){"INPUT"===e.tagName?r(e).setValue(t.email):r(e).setInnerHTML(t.email)})),r(".auth-uid-element").each((function(e,n){"INPUT"===e.tagName?r(e).setValue(t.uid):r(e).setInnerHTML(t.uid)}))}(e,t),e.notifications().subscribe().catch((function(e){console.error(e)}))}function p(e){var t=e.properties.options.exitPopup;if(t.enabled){var n=new Date(c.get("exitPopup.lastTriggered",0));new Date-n<t.config.timeout||function(e){var t=!e.config.handler||e.config.handler();if(!t)return;var n=document.getElementById("modal-exit-popup");try{new bootstrap.Modal(n).show(),n.removeAttribute("hidden");var r=n.querySelector(".modal-title"),i=n.querySelector(".modal-body"),o=n.querySelector(".modal-footer .btn-primary"),a=e.config,s=a.okButton.link.replace(/{pathname}/gi,window.location.pathname);r.innerHTML=a.title,i.innerHTML=a.message,o.innerHTML=a.okButton.text,o.setAttribute("href",s),c.set("exitPopup.lastTriggered",(new Date).toISOString())}catch(e){console.warn(e)}}(t)}}function f(e){console.log("refreshNewVersion()"),fetch("/@output/build/build.json?cb="+(new Date).getTime()).then((function(e){if(e.ok)return e.json();throw new Error("Bad response")})).then((function(t){var n=e.properties.global.buildTime,r=new Date(t["npm-build"].timestamp);if(n.setHours(n.getHours()+1),console.log("refreshNewVersion()",t,n,r),n<r){if(console.log("refreshNewVersion(): Refreshing..."),e.isDevelopment())return;window.onbeforeunload=function(){},window.location.reload(!0)}})).catch((function(e){console.error(e)}))}l.prototype.get=function(e){return s.get(this,"properties."+e)},l.prototype.set=function(e,t){return s.set(this,"properties."+e,t)},l.prototype.setEventListeners=function(){var e=this;document.addEventListener("click",(function(t){var n=t.target;n.matches(".auth-signin-email-btn")?e.auth().signIn("email"):n.matches(".auth-signup-email-btn")?e.auth().signUp("email"):n.matches(".auth-signin-provider-btn")?e.auth().signIn(n.getAttribute("data-provider")):n.matches(".auth-signup-provider-btn")?e.auth().signUp(n.getAttribute("data-provider")):n.matches(".auth-signout-all-btn")?e.auth().signOut():n.matches(".auth-forgot-email-btn")?e.auth().forgot():n.matches("#prechat-btn")?k(e,e.properties.options):n.matches(".auth-subscribe-notifications-btn")?e.notifications().subscribe():n.matches(".master-alert-close")&&n.parentElement.setAttribute("hidden",!0),!e._notificationRequested&&e.properties.options.pushNotifications.autoRequest&&(e._notificationRequested=!0,setTimeout((function(){e.notifications().subscribe()}),1e3*e.properties.options.pushNotifications.autoRequest))})),document.addEventListener("mouseleave",(function(){p(e)})),window.addEventListener("blur",(function(){p(e)})),window.addEventListener("focus",(function(){f(e)})),window.addEventListener("online",(function(){f(e)})),setInterval((function(){f(e)}),36e5)},l.prototype.ready=function(e,t){var n,r=this;if((t=t||{}).interval=t.interval||100,n=!t.waitFor||t.waitFor&&t.waitFor(),s.get(this,"properties.page.status.ready",!1)&&n)return r.performance().mark("manager_ready"),e();setTimeout((function(){r.ready(e,t)}),t.interval)},l.prototype.serviceWorker=function(){var e="serviceWorker"in navigator;if(e)try{var t=this.properties.references.serviceWorker.active||navigator.serviceWorker.controller}catch(e){}return{postMessage:function(){var n=arguments;if(e)try{var r=new MessageChannel;r.port1.onmessage=function(e){!e.data.error&&n[1]&&n[1](e.data)},t.postMessage(n[0],[r.port2])}catch(e){console.error(e)}}}},l.prototype.init=function(e,t){var a,c,u,l=this,p=l.properties.page.status;p.ready||p.initilizing||(l.performance().mark("manager_init"),l.properties.page.status.initializing=!0,l.properties.meta.environment=window.location.host.match(/:40|ngrok/)?"development":"production",a=function(){l.properties.page.status.initializing=!1;var i={pushNotifications:{autoRequest:60},serviceWorker:{path:""},initChecks:{features:[]},auth:{state:"default",sends:{required:"/signup",prohibited:"/"}},exitPopup:{enabled:!0,config:{timeout:144e5,handler:null,title:"Special Offer!",message:"Get 15% off your purchase of our <strong>Premium plans</strong>. <br><br> Get access to all features and unlimited usage.",okButton:{text:"Claim 15% Discount",link:"/pricing?utm_source=exit-popup&utm_medium=popup&utm_campaign={pathname}"}}},libraries:{firebase_app:{enabled:!0,load:!1,config:{apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""}},firebase_auth:{enabled:!0,load:!1},firebase_firestore:{enabled:!0,load:!1},firebase_messaging:{enabled:!0,load:!1},firebase_appCheck:{enabled:!0,load:!1,config:{siteKey:""}},lazysizes:{enabled:!0},sentry:{enabled:!0,config:{dsn:"",release:""}},chatsy:{enabled:!0,config:{accountId:"",chatId:"",settings:{openChatButton:{background:"#237afc",text:"#fff"}}}},cookieconsent:{enabled:!0,config:{palette:{popup:{background:"#237afc",text:"#fff"},button:{background:"#fff",text:"#237afc"}},theme:"classic",position:"bottom-left",type:"",showLink:!1,content:{message:'We use cookies to ensure you get the best experience on our website. By continuing to use the site, you agree to our<a href="/terms/" class="cc-link" style="padding-right: 0">terms of service</a>.',dismiss:"I understand"}}}}},a={};!function t(n,r){for(var o in r=r||"",n)if("object"!=typeof n[o]||null===n[o]||Array.isArray(n[o])){s.set(a,r+o,s.get(i,r+o));var c=s.get(e,"global.settings."+r+o,void 0),u=s.get(e,"page.settings."+r+o,void 0);void 0!==c&&s.set(a,r+o,c),void 0!==u&&s.set(a,r+o,u)}else t(n[o],r+o+".")}(i),l.properties.options=a,l.properties.global.app=e.global.app,l.properties.global.version=e.global.version,l.properties.global.url=e.global.url,l.properties.global.buildTime=new Date(1e3*+e.global.buildTime||new Date),l.properties.global.cacheBreaker=e.global.cacheBreaker,l.properties.global.brand=e.global.brand,l.properties.global.contact=e.global.contact,l.properties.global.download=e.global.download,l.properties.global.extension=e.global.extension,l.properties.global.validRedirectHosts=e.global.validRedirectHosts,l.properties.meta.environment=s.get(e,"global.settings.debug.environment",l.properties.meta.environment),l.properties.page.queryString=new URLSearchParams(window.location.search);var c=window.location.pathname,u=!1,p=new Date(o.get("utm.timestamp",0)),f=(new Date-p)/36e5;if(l.properties.page.queryString.forEach((function(e,t){t.startsWith("utm_")&&f>72&&(o.set("utm.tags."+t,e),o.set("utm.timestamp",(new Date).toISOString())),"aff"===t&&o.set("affiliateCode",e),"redirect"===t&&(u=e)})),u&&l.isValidRedirectUrl(u))return window.location.href=u;function g(){"undefined"!=typeof firebase&&firebase.auth&&firebase.auth().onAuthStateChanged((function(e){l.properties.page.status.authReady=!0,l.properties.auth.user=e||!1,d(l,e)})),l.setEventListeners();try{l.properties.page.isSupportedBrowser||document.getElementsByClassName("master-alert-outdated")[0].removeAttribute("hidden")}catch(e){console.error(e)}l.properties.page.status.ready=!0;try{t()}catch(e){console.error(e)}var e=a.libraries.chatsy;if(e.enabled){var n=r("#prechat-btn"),i=r("#prechat-btn svg path"),o=e.config.settings.openChatButton;n.css({background:o.background}).show(),i.each((function(e){e.setAttribute("fill",o.text)})),window.chatsy={},window.chatsy.open=function(){n.get(0).click()}}y(l,a),w(l,a),function(e,t){"serviceWorker"in navigator&&"undefined"!=typeof firebase&&void 0!==firebase.messaging&&navigator.serviceWorker.register("/"+(t.serviceWorker.path||"master-service-worker.js")+"?config="+encodeURIComponent(JSON.stringify({name:e.properties.global.brand.name,app:e.properties.global.app,env:e.properties.meta.environment,v:e.properties.global.version,cb:e.properties.global.cacheBreaker,firebase:t.libraries.firebase_app.config}))).then((function(t){e.properties.references.serviceWorker=t;try{firebase.messaging().onMessage((function(e){new Notification(e.notification.title,e.notification).onclick=function(t){t.preventDefault(),window.open(e.notification.click_action,"_blank")}}))}catch(e){console.error(e)}})).catch((function(e){console.error(e)}))}(l,a)}c.match(/\/(authentication-required|authentication-success|authentication-token|forgot|oauth2|signin|signout|signup)/)&&n.e(957).then(n.t.bind(n,957,23)).then((function(e){e.default()})),Promise.all([S(l,a),h(l,a)]).then((function(){g()})).catch((function(e){console.error("Lib error",e)}))},c="undefined"!=typeof Symbol,u=!0,c&&u?a():i({src:"https://polyfill.io/v3/polyfill.min.js?flags=always%2Cgated&features=default%2Ces5%2Ces6%2Ces7%2CPromise.prototype.finally%2C%7Ehtml5-elements%2ClocalStorage%2Cfetch%2CURLSearchParams"}).then((function(){a()})))},l.prototype.sentry=function(){return{configureScope:function(e){try{Sentry.configureScope((function(t){e(t)}))}catch(e){}},captureException:function(e){try{Sentry.captureException(e)}catch(e){}}}},l.prototype.auth=function(){var e=this,t="undefined"!=typeof firebase,n=r(".auth-error-message-element");function i(e){console.error(e),n.show().setInnerHTML(e)}function o(){n.hide().setInnerHTML("")}function a(e,t){var n=r(".auth-"+e+"-email-btn"),i="disabled";t?n.setAttribute(i,!0):n.removeAttribute(i)}function c(e,t){var n=".auth-",i=n+t+"-input",o=r(n+e+"-form "+i);t=r(i);return o.exists()?o:t}function u(e,t,n){var r=e||c(t,n).getValue();return"email"===n?r.trim().toLowerCase():r}function l(e,t,n,r){e?(c(r,"password").get(0).focus(),"signup"===r&&c(r,"password-confirm").get(0).focus()):c(r,"email").get(0).focus()}return{isAuthenticated:function(){return!!t&&!!firebase.auth().currentUser},getUser:function(){var e={email:null,uid:null};return t&&firebase.auth().currentUser||e},ready:function(t,n){if((n=n||{}).interval=n.interval||100,s.get(e,"properties.page.status.authReady",!1))return e.performance().mark("manager_authReady"),t(e.auth().getUser());setTimeout((function(){e.auth().ready(t,n)}),n.interval)},signIn:function(t,n,r){var s="signin";t=t||"email",o(),"email"===t?(n=u(n,s,"email"),r=u(r,s,"password"),l(n,0,0,s),a(s,!0),firebase.auth().signInWithEmailAndPassword(n,r).then((function(t){e.properties.page.status.didSignIn=!0,a(s,!1)})).catch((function(e){a(s,!1),i(e.message)}))):firebase.auth().signInWithRedirect(new firebase.auth.OAuthProvider(t)).catch((function(e){i(e)}))},signUp:function(t,n,s,c){var d="signup";t=t||"email",o();var p=".auth-terms-input",f=r(".auth-signup-form "+p),h=r(p);f.exists()&&!0==!f.getValue()||h.exists()&&!0==!h.getValue()?i("Please review and accept our terms."):"email"===t?(n=u(n,d,"email"),s=u(s,d,"password"),c=u(c,d,"password-confirm"),l(n,0,0,d),s===c?(a(d,!0),firebase.auth().createUserWithEmailAndPassword(n,s).then((function(e){})).catch((function(e){a(d,!1),i(e.message)}))):i("Passwords don't match.")):e.auth().signIn(t)},signOut:function(){return firebase.auth().signOut().catch((function(e){console.error(e)}))},forgot:function(e){var t="forgot";e=u(e,t,"email"),a(t,!0),o(),firebase.auth().sendPasswordResetEmail(e).then((function(){a(t,!1),i("A reset link has been sent to you.")})).catch((function(e){a(t,!1),i(e.message)}))}}},l.prototype.notifications=function(e){var t=this,n=void 0!==firebase.messaging&&"serviceWorker"in navigator&&"Notification"in window;return{isSubscribed:function(){return new Promise((function(e,t){return n&&"granted"===Notification.permission?e(!0):e(!1)}))},subscribe:function(){return new Promise((function(e,r){if(!n)return e(!1);firebase.messaging().getToken({serviceWorkerRegistration:t.properties.references.serviceWorker}).then((function(n){var r=t.auth().getUser(),i=o.get("notifications",{}),a=i.token+"|"+i.uid,s=n+"|"+r.uid,c=new Date,u=(c.getTime()-new Date(i.lastSynced||0).getTime())/864e5;if(a!==s||u>1){var l=c.toISOString(),d=Math.floor(+new Date(l)/1e3),p=firebase.firestore().doc("notifications/subscriptions/all/"+n);function f(){o.set("notifications",{uid:r.uid,token:n,lastSynced:l})}function h(i){!i.exists||i.exists&&!t.utilities().get(i.data(),"link.user.data.uid","")&&r.uid?p.set({meta:{dateSubscribed:{timestamp:l,timestampUNIX:d},url:window.location.href},token:n,link:{user:{lastLinked:{timestamp:l,timestampUNIX:d},pk:r.uid,data:{uid:r.uid,email:r.email}}},tags:["general"]},{merge:!0}).then((function(t){f(),e(!0)})):(f(),e(!1))}p.get().then((function(e){h(e)})).catch((function(){h({exists:!1})}))}else e(!1)})).catch((function(e){r(e)}))}))}}};var h=function(e,t){return new Promise((function(r,i){var o=t.libraries.firebase_app;if(!0===o.enabled){function a(){window.app=firebase.initializeApp(o.config),Promise.all([g(e,t),m(e,t),b(e,t),v(e,t)]).then(r).catch(i)}o.load?o.load(e).then(a).catch(i):Promise.all([n.e(925),n.e(363)]).then(n.bind(n,363)).then((function(e){window.firebase=e.default,a()})).catch(i)}else r()}))},g=function(e,t){return new Promise((function(r,i){var o=t.libraries.firebase_auth;!0===o.enabled?o.load?o.load(e).then(r).catch(i):Promise.all([n.e(925),n.e(874)]).then(n.bind(n,874)).then(r).catch(i):r()}))},m=function(e,t){return new Promise((function(r,i){var o=t.libraries.firebase_firestore;!0===o.enabled?o.load?o.load(e).then(r).catch(i):Promise.all([n.e(925),n.e(39)]).then(n.bind(n,39)).then(r).catch(i):r()}))},b=function(e,t){return new Promise((function(r,i){var o=t.libraries.firebase_messaging;!0===o.enabled?o.load?o.load(e).then(r).catch(i):Promise.all([n.e(925),n.e(889)]).then(n.bind(n,889)).then(r).catch(i):r()}))},v=function(e,t){return new Promise((function(r,i){var o=t.libraries.firebase_appCheck;!0===o.enabled?o.load?o.load(e).then(r).catch(i):Promise.all([n.e(925),n.e(189)]).then(n.bind(n,189)).then((function(e){var t=firebase.appCheck,n=o.config.siteKey;if(!n)return r();t().activate(new t.ReCaptchaEnterpriseProvider(n),!0),r()})).catch(i):r()}))},y=function(e,t){return new Promise((function(e,r){!0===t.libraries.lazysizes.enabled?n.e(653).then(n.t.bind(n,653,23)).then((function(e){window.lazysizes=e.default;var t=Math.max(Math.min(document.documentElement.clientWidth,document.documentElement.clientHeight,1222)-1,359);window.lazySizesConfig={loadMode:1,expand:t,expFactor:t<380?3:2}})).catch(r):e()}))},w=function(e,t){return new Promise((function(e,r){!0===t.libraries.cookieconsent.enabled?n.e(478).then(n.t.bind(n,478,23)).then((function(n){window.cookieconsent.initialise(t.libraries.cookieconsent.config),e()})).catch(r):e()}))},k=function(e,t){return new Promise((function(n,o){if(!0!==t.libraries.chatsy.enabled||e.properties.page._chatsyRequested)n();else{var a="libraries.chatsy.config";r("#prechat-btn").hide(),i({src:"https://app.chatsy.ai/resources/script.js",attributes:[{name:"data-account-id",value:s.get(t,a+".accountId","")},{name:"data-chat-id",value:s.get(t,a+".chatId","")},{name:"data-settings",value:JSON.stringify(s.get(t,a+".settings",""))}],crossorigin:!0}).then((function(){chatsy.on("status",(function(e,t){"loaded"===t&&chatsy.open()})),n()})),e.properties.page._chatsyRequested=!0}}))},S=function(e,t){return new Promise((function(r,i){!0===t.libraries.sentry.enabled?n.e(601).then(n.bind(n,601)).then((function(n){window.Sentry=n;var i=t.libraries.sentry.config;i.release=i.release+"@"+e.properties.global.version,i.environment=e.properties.meta.environment,(i.replaysSessionSampleRate>0||i.replaysOnErrorSampleRate>0)&&(i.integrations=[new Sentry.Replay({})]),i.beforeSend=function(t,n){var r=e.properties.page.startTime,i=(new Date-r)/36e5;return t.tags=t.tags||{},t.tags["process.type"]=t.tags["process.type"]||"browser",t.tags["usage.session.hours"]=i.toFixed(2),t.user=t.user||{},t.user.email=c.get("user.auth.email",""),t.user.uid=c.get("user.auth.uid",""),console.error("[SENTRY] Caught error",t,n),e.isDevelopment()?null:t},Sentry.init(i),r()})).catch(i):r()}))};l.prototype.log=function(){if(this.isDevelopment()){var e=Array.prototype.slice.call(arguments);e.unshift("[DEV @ "+(new Date).toLocaleTimeString()+"]"),"error"===e[1]?(e.splice(1,1),console.error.apply(console,e)):"warn"===e[1]?(e.splice(1,1),console.warn.apply(console,e)):"log"===e[1]?(e.splice(1,1),console.log.apply(console,e)):console.log.apply(console,e)}},l.prototype.utilities=function(){return s},l.prototype.storage=function(){return c},l.prototype.dom=function(){return a},l.prototype.account=function(){var e=this;return{import:function(){return n.e(641).then(n.t.bind(n,641,23)).then((function(t){return e.account=function(){return t.default},t.default.prototype.Manager=e,e.account()}))}}},l.prototype.performance=function(){return{mark:function(e){try{window.performance.mark(e)}catch(e){}}}},l.prototype.isValidRedirectUrl=function(e){var t=new URL(decodeURIComponent(e)),n=new URL(window.location.href);return t.host===n.host||t.protocol===this.properties.global.app+":"||this.properties.global.validRedirectHosts.includes(t.host)},l.prototype.isDevelopment=function(){return"development"===this.properties.meta.environment},e.exports=l},916:function(e){function t(e){this.elements=e}function n(e){return e&&e.tagName}t.prototype.addClass=function(e){for(var r=Object.assign({},this.elements),i=0;i<r.count;i++){var o=r.list[i];n(o)&&o.classList.add(e)}return new t(r)},t.prototype.removeClass=function(e){for(var r=Object.assign({},this.elements),i=0;i<r.count;i++){var o=r.list[i];n(o)&&o.classList.remove(e)}return new t(r)},t.prototype.css=function(e){for(var r=Object.assign({},this.elements),i=Object.keys(e),o=0;o<r.count;o++){var a=r.list[o];if(n(a))for(o=0;o<i.length;o++)a.style[i[o]]=e[i[o]]}return new t(r)},t.prototype.hide=function(e){var r=Object.assign({},this.elements);(e=e||{}).type=e.type||"display";for(var i=0;i<r.count;i++){var o=r.list[i];n(o)&&("visibility"===e.type?o.style.visibility="hidden":"display"===e.type?(o.style.display="none",o.setAttribute("hidden",!0),o.classList.add("hidden")):(o.style.visibility="hidden",o.style.display="none",o.setAttribute("hidden",!0),o.classList.add("hidden")))}return new t(r)},t.prototype.show=function(e){var r=Object.assign({},this.elements);(e=e||{}).type=e.type||"display";for(var i=0;i<r.count;i++){var o=r.list[i];n(o)&&("visibility"===e.type?o.style.visibility="visible":"display"===e.type?(o.style.display="block",o.removeAttribute("hidden"),o.classList.remove("hidden")):(o.style.visibility="visible",o.style.display="block",o.removeAttribute("hidden"),o.classList.remove("hidden")))}return new t(r)},t.prototype.getAttribute=function(e,t){var r,i=Object.assign({},this.elements);t=t||{};for(var o=0;o<i.count;o++){var a=i.list[o];n(a)&&(r=a.getAttribute(e))}return r},t.prototype.setAttribute=function(e,r,i){var o=Object.assign({},this.elements);i=i||{};for(var a=0;a<o.count;a++){var s=o.list[a];n(s)&&s.setAttribute(e,r)}return new t(o)},t.prototype.removeAttribute=function(e,r){var i=Object.assign({},this.elements);r=r||{};for(var o=0;o<i.count;o++){var a=i.list[o];n(a)&&(a.setAttribute(e,"DELETE"),a.removeAttribute(e))}return new t(i)},t.prototype.getValue=function(e){var t;(e=e||{}).returnType=e.returnType||"array";for(var r=Object.assign({},this.elements),i=0;i<r.count;i++){var o=r.list[i];if(n(o))if("checkbox"===o.type){if(1===r.list.length){t=o.checked;break}"array"===e.returnType?(t=t||[],o.checked&&t.push(o.value)):"object"===e.returnType?(t=t||{})[o.value]=o.checked:t=o.checked}else{if("radio"!==o.type){t="number"===o.type?parseFloat(o.value):o.value;break}if(o.checked){t=o.value;break}}}return t},t.prototype.setValue=function(e,r){(r=r||{}).returnType=r.returnType||"single";for(var i=Object.assign({},this.elements),o=0;o<i.count;o++){var a=i.list[o];n(a)&&("checkbox"===a.type?Array.isArray(e)?a.checked=!!e.includes(a.value):a.checked="object"==typeof e?!!e[a.value]:!!e:"radio"===a.type?a.checked=!!e:a.value=e)}return new t(i)},t.prototype.setInnerHTML=function(e,r){r=r||{};for(var i=Object.assign({},this.elements),o=0;o<i.count;o++){var a=i.list[o];n(a)&&(a.innerHTML=e)}return new t(i)},t.prototype.each=function(e,r){r=r||{};for(var i=Object.assign({},this.elements),o=0;o<i.count;o++){var a=i.list[o];if(n(a)&&!1===e(a,o))break}return new t(i)},t.prototype.on=function(e,r){for(var i=Object.assign({},this.elements),o=0;o<i.count;o++){var a=i.list[o];n(a)&&(document.addEventListener?a.addEventListener(e,r,!1):document.attachEvent&&a.attachEvent("on"+e,r))}return new t(i)},t.prototype.get=function(e){return e||0<=this.elements.count?this.elements.list[e||0]:null},t.prototype.exists=function(){return this.elements.exists},t.loadScript=function(e,t){return new Promise((function(n,r){(e=e||{}).async=void 0!==e.async&&e.async,e.crossorigin=void 0!==e.crossorigin&&e.crossorigin,e.cacheBreaker=void 0===e.cacheBreaker||e.cacheBreaker,e.attributes=void 0===e.attributes?[]:e.attributes;var i=document.createElement("script");if(e.cacheBreaker){var o=e.src.split("?"),a=new URLSearchParams(o[1]);a.set("cb",(new Date).getTime()),e.src=o[0]+"?"+a.toString()}e.crossorigin&&e.attributes.push({name:"crossorigin",value:"*"}),e.attributes.forEach((function(e){i.setAttribute(e.name,e.value)})),i.async=e.async,i.src=e.src,i.onload=function(){return t&&t(),n()},i.onerror=function(){var n=new Error("Failed to load script "+e.src);return t&&t(n),r(n)},document.head.appendChild(i)}))},t.select=function(e,n){var r;n=n||{};var i=typeof e;"string"===i?r=document.querySelectorAll(e):"object"===i&&(r=e&&e.tagName?[e]:e);var o=[];return function(e,t,n){for(var r=0,i=e?e.length:0;r<i;r++)t.call(n,r,e[r])}(r,(function(e,t){o.push(t)})),new t({list:o,count:o.length,exists:o.length>0})},t.prototype.parent=function(e){for(var r=Object.assign({},this.elements),i=0;i<r.count;i++){var o=r.list[i];if(n(o))do{if(o.matches(e))return o;o=o.parentNode}while(o&&o.parentNode)}return new t(r)},e.exports=t},959:function(e,t,n){var r=n(158),i={};function o(e){this.storage=e}o.get=function(e,t){var n;e=e||"",t=void 0===t?void 0:t;try{n=JSON.parse(window.localStorage.getItem("_manager")||"{}")}catch(e){n=i}return e?r.get(n,e,t):n||t},o.set=function(e,t){var n;e=e||"",t=void 0===t?void 0:t;try{n=o.get()}catch(e){n=i}e?r.set(n,e,t):n=t||{};try{window.localStorage.setItem("_manager",JSON.stringify(n))}catch(e){i=n}return n},o.clear=function(){try{window.localStorage.setItem("_manager","{}")}catch(e){i={}}},e.exports=o},158:function(e){var t;function n(e){this.utilities=e}n.get=function(e,t,n){if(!t)return n;const r=Array.isArray(t)?t:t.split(".");let i=e;for(const e of r){if(!i||void 0===i[e])return n;i=i[e]}return void 0===i?n:i},n.set=function(e,t,n){if(Object(e)!==e)return e;var r=(t||"").split(".");return r.slice(0,-1).reduce((function(e,t,n){return Object(e[t])===e[t]?e[t]:e[t]=(Math.abs(r[n+1])|0)==+r[n+1]?[]:{}}),e)[r.pop()]=n,e},n.clipboardCopy=function(e){var t=document.createElement("textarea");t.setAttribute("style","width:1px;border:0;opacity:0;"),t.value=e&&e.nodeType?e.value||e.innerText||e.innerHTML:e,document.body.appendChild(t),t.select();try{document.execCommand("copy")}catch(e){alert("Please press Ctrl/Cmd+C to copy")}document.body.removeChild(t)},n.escapeHTML=function(e){return(t=t||document.createElement("p")).innerHTML="",t.appendChild(document.createTextNode(e)),t.innerHTML.replace(/["']/g,(function(e){return'"'===e?"&quot;":"&#039;"}))},n.getContext=function(){return{client:{mobile:function(){try{var e=navigator.userAgentData.mobile;return void 0===e?_THROW:!0===e}catch(e){try{return window.matchMedia("(max-width: 767px)").matches}catch(e){return!1}}}()}}},e.exports=n}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return i[e](n,n.exports,a),n.loaded=!0,n.exports}a.m=i,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var i=Object.create(null);a.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){o[e]=function(){return n[e]}}));return o.default=function(){return n},a.d(i,o),i},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return 957===e?"chunk.957.ea28dab9d04761323125.js":925===e?"chunk.925.6bce4341c1caf78d95bd.js":363===e?"chunk.363.65d75a724e50df7fdc6b.js":874===e?"chunk.874.d3d6bcb15a5c528894cf.js":39===e?"chunk.39.cad1dc0b53af625c60d1.js":889===e?"chunk.889.48c4482896e8c5dbce24.js":189===e?"chunk.189.306ad175665e0e1cd145.js":653===e?"chunk.653.c4dba2fb1bd5088af00d.js":478===e?"chunk.478.937130b7dddbecf72c2e.js":601===e?"chunk.601.2b689d1d99cf0f4aaaca.js":641===e?"chunk.641.1567c37ad369c41ec598.js":79===e?"chunk.79.00294d7573997a1c3f2b.js":void 0},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="ultimate-jekyll:",a.l=function(e,t,i,o){if(n[e])n[e].push(t);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+i){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+i),s.src=e),n[e]=[t];var p=function(t,r){s.onerror=s.onload=null,clearTimeout(f);var i=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="https://spotibooster.com/assets/js/",function(){var e={179:0,321:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,i){r=e[t]=[n,i]}));n.push(r[2]=i);var o=a.p+a.u(t),s=new Error;a.l(o,(function(n){if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,r[1](s)}}),"chunk-"+t,t)}};var t=function(t,n){var r,i,o=n[0],s=n[1],c=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(c)c(a)}for(t&&t(n);u<o.length;u++)i=o[u],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunkultimate_jekyll=self.webpackChunkultimate_jekyll||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),Manager=new(a(769)),Manager.init(Configuration,(function(){a(835),a(320)}))}();