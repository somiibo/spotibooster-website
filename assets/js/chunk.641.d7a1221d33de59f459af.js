(self.webpackChunkultimate_jekyll=self.webpackChunkultimate_jekyll||[]).push([[641],{641:function(t){function a(e){var t=this;e=e||{},t.properties={},t.accountPageInitialized=!1;try{t.dom=e.dom||t.Manager.dom(),t.utilities=e.utilities||t.Manager.utilities(),new URL(window.location.href).pathname.startsWith("/account")&&t.initializeAccountPage()}catch(e){console.error("Failed to initialize libraries")}}function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}a.prototype.initializeAccountPage=function(e){var t=this;t.accountPageInitialized||(document.addEventListener("click",(function(e){e.target.matches(".auth-delete-account-btn")&&t.delete().catch((function(e){}))})),t.accountPageInitialized=!0)},a.prototype.delete=function(t){var a=this,n=firebase.auth().currentUser,i=a.dom.select(".auth-delete-account-error-message-element"),r=a.dom.select(".auth-delete-account-confirmation-input").getValue(),o=a.dom.select(".auth-delete-account-btn");return o.setAttribute("disabled",!0).addClass("disabled"),i.setAttribute("hidden",!0),new Promise((function(t,l){function s(e){var t=new Error(e);return i.removeAttribute("hidden").setInnerHTML(t),o.removeAttribute("disabled").removeClass("disabled"),l(t)}return r?n?void n.getIdToken(!1).then((function(e){fetch("https://us-central1-"+a.utilities.get(a.Manager,"properties.options.libraries.firebase_app.config.projectId","unknown")+".cloudfunctions.net/bm_api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({authenticationToken:e,command:"delete-user",payload:{}})}).then((function(e){if(!e.ok)return e.text().then((function(t){throw new Error(t||e.statusText||"Unknown error.")}));e.json().then((function(e){return console.log("Successfully deleted account",e),a.Manager.auth().signOut(),t(e)}))})).catch((function(e){return s(e)}))})).catch((function(){return s(e)})):s("Please log in first."):s("Please confirm that you wish to have your account deleted.")}))},a.prototype.resolve=function(e,t){var a=this;return new Promise((function(n,i){var r=firebase.auth().currentUser;if(e=e||{},(t=t||{}).fetchNewAccount=void 0===t.fetchNewAccount||t.fetchNewAccount,!r||!r.uid||!t.fetchNewAccount)return n(a.handleAccount(a._resolveAccount(r,e,t)));firebase.firestore().doc("users/"+r.uid).get().then((function(e){return n(a.handleAccount(a._resolveAccount(r,e.data(),t)))}))}))},a.prototype.handleAccount=function(e){var t=e.plan.id;return function(e){var t=document.querySelectorAll("[data-plan-id][data-plan-visibility]");t.forEach((function(e){e.setAttribute("hidden",!0)})),t.forEach((function(t){var a=t.getAttribute("data-plan-id").split(","),n=t.getAttribute("data-plan-visibility")||"visible";((a.includes("$paid")?"basic"!==e:a.includes(e))?"hidden"===n:"visible"===n)?t.setAttribute("hidden",!0):t.removeAttribute("hidden")}))}(t),!0===this.Manager.properties.options.exitPopup.enabled&&(this.Manager.properties.options.exitPopup.enabled="basic"===t),e},a.prototype._resolveAccount2=function(e,t,a){},a.prototype._resolveAccount=function(e,t,a){var i=this;e=e||{},t=t||{};var r,o,l=(a=a||{}).defaultPlanId||"basic";t.auth=t.auth||{},t.auth.uid=t.auth.uid||e.uid||null,t.auth.email=t.auth.email||e.email||null,t.auth.temporary=t.auth.temporary||!1,t.plan=t.plan||{},t.plan.id=t.plan.id||l,t.plan.status=t.plan.status||"cancelled",t.plan.expires=t.plan.expires||{},t.plan.expires.timestamp=new Date(t.plan.expires.timestamp||0).toISOString(),t.plan.expires.timestampUNIX=Math.round(new Date(t.plan.expires.timestamp||0).getTime()/1e3),t.plan.trial=t.plan.trial||{},t.plan.trial.activated=t.plan.trial.activated||!1,t.plan.trial.expires=t.plan.trial.expires||{},t.plan.trial.expires.timestamp=new Date(t.plan.trial.expires.timestamp||0).toISOString(),t.plan.trial.expires.timestampUNIX=Math.round(new Date(t.plan.trial.expires.timestamp||0).getTime()/1e3),t.plan.limits=t.plan.limits||{},t.plan.payment=t.plan.payment||{},t.plan.payment.processor=t.plan.payment.processor||"unknown",t.plan.payment.orderId=t.plan.payment.orderId||"unknown",t.plan.payment.resourceId=t.plan.payment.resourceId||"unknown",t.plan.payment.frequency=t.plan.payment.frequency||"unknown",t.plan.payment.active=t.plan.payment.active||!1,t.plan.payment.startDate=t.plan.payment.startDate||{},t.plan.payment.startDate.timestamp=t.plan.payment.startDate.timestamp||"1970-01-01T00:00:00.000Z",t.plan.payment.startDate.timestampUNIX=t.plan.payment.startDate.timestampUNIX||0,t.plan.payment.updatedBy=t.plan.payment.updatedBy||{},t.plan.payment.updatedBy.event=t.plan.payment.updatedBy.event||{},t.plan.payment.updatedBy.event.id=t.plan.payment.updatedBy.event.id||"unknown",t.plan.payment.updatedBy.event.name=t.plan.payment.updatedBy.event.name||"unknown",t.plan.payment.updatedBy.date=t.plan.payment.updatedBy.date||{},t.plan.payment.updatedBy.date.timestamp=t.plan.payment.updatedBy.date.timestamp||"1970-01-01T00:00:00.000Z",t.plan.payment.updatedBy.date.timestampUNIX=t.plan.payment.updatedBy.date.timestampUNIX||0;try{r=new URL(window.location.href),(o="development"===i.utilities.get(i.Manager,"properties.meta.environment",""))&&r.searchParams.forEach((function(e,a){void 0!==i.utilities.get(t,a,void 0)&&("true"===e&&(e=!0),"false"===e&&(e=!1),i.utilities.set(t,a,e))}))}catch(e){"undefined"!=typeof window&&console.error("Unable to check query strings",e)}var s,p,c=new Date,u=new Date(t.plan.expires.timestamp),d=Math.floor((u-c)/864e5),m=(u.getTime()-c.getTime())/864e5,y=new Date(t.plan.trial.expires.timestamp),h=Math.floor((y-c)/864e5),f=new Date(t.plan.payment.startDate.timestamp),g=m>-1&&t.plan.id!==l,v="suspended"===t.plan.status;t.plan.id=g?t.plan.id:l,t.oauth2=t.oauth2||{},t.roles=t.roles||{},t.roles.betaTester=!0===t.roles.betaTester||"true"===t.roles.betaTester,t.roles.developer=!0===t.roles.developer||"true"===t.roles.developer,t.roles.admin=!0===t.roles.admin||"true"===t.roles.admin,t.roles.vip=!0===t.roles.vip||"true"===t.roles.vip,t.roles.og=!0===t.roles.og||"true"===t.roles.og,t.roles.promoExempt=!0===t.roles.promoExempt||"true"===t.roles.promoExempt,t.affiliate=t.affiliate||{},t.affiliate.code=t.affiliate.code||"unknown",t.affiliate.referrals=t.affiliate.referrals||[],t.affiliate.referrer=t.affiliate.referrer||"unknown",t.activity=t.activity||{},t.activity.lastActivity=t.activity.lastActivity||{},t.activity.lastActivity.timestamp=t.activity.lastActivity.timestamp||"1970-01-01T00:00:00.000Z",t.activity.lastActivity.timestampUNIX=t.activity.lastActivity.timestampUNIX||0,t.activity.created=t.activity.created||{},t.activity.created.timestamp=t.activity.created.timestamp||"1970-01-01T00:00:00.000Z",t.activity.created.timestampUNIX=t.activity.created.timestampUNIX||0,t.activity.geolocation=t.activity.geolocation||{},t.activity.geolocation.ip=t.activity.geolocation.ip||"unknown",t.activity.geolocation.continent=t.activity.geolocation.continent||"unknown",t.activity.geolocation.country=t.activity.geolocation.country||"unknown",t.activity.geolocation.region=t.activity.geolocation.region||"unknown",t.activity.geolocation.city=t.activity.geolocation.city||"unknown",t.activity.geolocation.latitude=t.activity.geolocation.latitude||0,t.activity.geolocation.longitude=t.activity.geolocation.longitude||0,t.activity.client=t.activity.client||{},t.activity.client.userAgent=t.activity.client.userAgent||"unknown",t.activity.client.language=t.activity.client.language||"unknown",t.activity.client.platform=t.activity.client.platform||"unknown",t.activity.client.mobile=t.activity.client.mobile||null,t.api=t.api||{},t.api.clientId=t.api.clientId||"unknown",t.api.privateKey=t.api.privateKey||"unknown",t.usage=t.usage||{},t.usage.requests=t.usage.requests||{},t.usage.requests.total=t.usage.requests.total||0,t.usage.requests.period=t.usage.requests.period||0,t.usage.requests.last=t.usage.requests.last||{},t.usage.requests.last.id=t.usage.requests.last.id||"",t.usage.requests.last.timestamp=t.usage.requests.last.timestamp||"1970-01-01T00:00:00.000Z",t.usage.requests.last.timestampUNIX=t.usage.requests.last.timestampUNIX||0,t.personal=t.personal||{},t.personal.birthday=t.personal.birthday||{},t.personal.birthday.timestamp=t.personal.birthday.timestamp||"1970-01-01T00:00:00.000Z",t.personal.birthday.timestampUNIX=t.personal.birthday.timestampUNIX||0,t.personal.gender=t.personal.gender||"",t.personal.location=t.personal.location||{},t.personal.location.city=t.personal.location.city||"",t.personal.location.country=t.personal.location.country||"",t.personal.name=t.personal.name||{},t.personal.name.first=t.personal.name.first||"",t.personal.name.last=t.personal.name.last||"",t.personal.telephone=t.personal.telephone||{},t.personal.telephone.countryCode=t.personal.telephone.countryCode||0,t.personal.telephone.national=t.personal.telephone.national||0;try{var b=o?"http://localhost:4001/cancel":"https://itwcreativeworks.com/portal/account/manage",w=i.dom.select(".auth-billing-subscribe-btn"),A=i.dom.select(".auth-billing-update-btn"),I=i.dom.select(".auth-billing-plan-id-element"),k=i.dom.select(".auth-billing-frequency-element"),T=i.dom.select(".auth-billing-start-date-element"),x=i.dom.select(".auth-billing-expiration-date-element"),M=i.dom.select(".auth-billing-suspended-message-element"),U=i.dom.select(".auth-billing-trial-expiration-date-element"),N=i.dom.select(".auth-referral-count-element"),q=i.dom.select(".auth-referral-code-element"),D=(i.dom.select(".auth-referral-link-element"),i.dom.select("a.auth-referral-social-link[data-provider]")),P=i.dom.select(".auth-created-element"),L=i.dom.select(".auth-phone-input"),S=new URL(b),B=new URL(window.location.origin||window.location.host);B.pathname="/",B.searchParams.set("aff",t.affiliate.code),P.setInnerHTML(new Date(+i.utilities.get(e,"metadata.createdAt","0")).toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})),L.setInnerHTML(e.phoneNumber).setValue(e.phoneNumber),S.searchParams.set("orderId",t.plan.payment.orderId),S.searchParams.set("resourceId",t.plan.payment.resourceId),A.setAttribute("hidden",!0).setAttribute("href",S.toString()),w.setAttribute("hidden",!0),M.setAttribute("hidden"),U.setAttribute("hidden"),g?A.removeAttribute("hidden"):w.removeAttribute("hidden"),v&&(A.removeAttribute("hidden"),w.setAttribute("hidden",!0),M.removeAttribute("hidden")),t.plan.trial.activated&&h>0&&U.removeAttribute("hidden").setInnerHTML('<i class="fas fa-gift mr-1"></i> Your free trial expires in '+h+" days"),I.setInnerHTML(t.plan.id.split("-").map((function(e){return n(e)})).join(" ")),k.setInnerHTML(t.plan.id!==l?" (billed "+n(t.plan.payment.frequency)+")":""),T.setInnerHTML(t.plan.id!==l?" - Purchased "+(["January","February","March","April","May","June","July","August","September","October","November","December"][f.getMonth()]+" ")+f.getDate()+", "+f.getFullYear():""),x.setInnerHTML(t.plan.id!==l&&d<366?'<i class="fas fa-exclamation-triangle mr-1"></i> Expires in '+d+" days ":""),s=".auth-apikey-element",p=i.utilities.get(t,"api.privateKey","n/a"),i.dom.select(s).each((function(e,t){"INPUT"===e.tagName?i.dom.select(e).setValue(p):i.dom.select(e).setInnerHTML(p)})),N.setInnerHTML(t.affiliate.referrals.length),q.setInnerHTML(t.affiliate.code).setValue(t.affiliate.code),q.setInnerHTML(B.toString()).setValue(B.toString());var X=encodeURIComponent(B.toString()),H=encodeURIComponent("Sign up for "+i.utilities.get(i.Manager,"properties.global.brand.name","this")+", a useful service:");D.each((function(e){var t=e.dataset.provider,a=encodeURIComponent(e.dataset.shareText||"");e.setAttribute("target","_blank"),"facebook"===t?e.setAttribute("href","https://www.facebook.com/sharer.php?u="+X):"twitter"===t?e.setAttribute("href","https://twitter.com/share?url="+X+"&text="+(a||H)):"pinterest"===t?e.setAttribute("href","https://pinterest.com/pin/create/button/?url="+X+"&description="+(a||H)):"tumblr"===t?e.setAttribute("href","https://www.tumblr.com/share/link?url="+X+"&text="+(a||H)):"linkedin"===t?e.setAttribute("href","https://www.linkedin.com/sharing/share-offsite/?url="+X+"&title="+(a||H)):"reddit"===t&&e.setAttribute("href","http://www.reddit.com/submit?url="+X+"&title="+(a||H))}))}catch(e){"undefined"!=typeof window&&console.error("Unable to set DOM elements",e)}return i.properties=t,i.properties},t.exports=a}}]);