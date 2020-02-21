
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"505",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C=document.body.className.indexOf(\"signed-in\")\u0026\u0026-1==document.body.className.indexOf(\"admin-user\")})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",1],8,16],".parentElement.querySelector(\"h3\").innerText}catch(a){return\"\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href.replace(\/[\\?\u0026]i=......\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){localStorage.setItem(a,JSON.stringify(b))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,f,c,d){\"string\"===typeof a\u0026\u0026(a=[a]);c||(c=1E4);d||(d=100);c=Math.round(c\/d);var g=0,h=a.length,b,e,k=window.setInterval(function(){for(b=0;b\u003Ch\u0026\u0026!(e=0===a[b].indexOf(\"\/\/\")?document.evaluate(a[b],document,null,XPathResult.ANY_TYPE,null).iterateNext():document.querySelector(a[b]));b++);if(e||g++\u003Ec)window.clearInterval(k),e\u0026\u0026f()},d)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c,e){var a=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")};window.analytics\u0026\u0026\"string\"===typeof d\u0026\u0026-1\u003C[\"Success\",\"Viewed\"].indexOf(d)\u0026\u0026\"string\"===typeof b\u0026\u0026\"string\"===typeof c\u0026\u0026(\"object\"===typeof e?window.analytics.trackLink(e,\"Experiment \"+d,{experiment_id:a(b),experiment_name:b,variation_id:a(c),variation_name:a(c)}):window.analytics.track(\"Experiment \"+d,{experiment_id:a(b),\nexperiment_name:b,variation_id:a(c),variation_name:a(c)}))}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_anonymous_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){try{var e=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")},l=function(a){return\"function\"===typeof a?a():\"all\"===a?!0:\"non-customers\"===a?null===window.analytics.user().id():\"customers\"===a?null!==window.analytics.user().id():!1},g=function(a){var d=0;if(0==a.length)return d;for(b=0;b\u003Ca.length;b++)c=a.charCodeAt(b),d=(d\u003C\u003C5)-d+c,d\u0026=d;return Math.abs(d)},m=function(a,d){return parseInt(a.substr(d%\n(a.length-1),2),16)\/255},h=function(){if(l(a.audience)||f){var b=m(a.anonymousid,a.seed);if(b\u003C=a.pct||f)variant=f||a.variants[Math.floor(b\/a.pct*a.variants.length)],variant.func(),window.analytics.track(\"Experiment Viewed\",{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name)}),window.setTimeout(function(){var d=document.querySelectorAll('*[data-js\\x3d\"gtm_ab_success\"]'),b;for(b=0;b\u003Cd.length;b++)window.analytics.trackLink(d[b],\"Experiment Success\",\n{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name),success_details:d[b].getAttribute(\"href\")||\"\"})},100)}};\"audience\"in a||(a.audience=\"all\");\"pct\"in a||(a.pct=1);if(\"string\"===typeof a.name\u0026\u0026\"variants\"in a\u0026\u0026a.variants instanceof Array){var f=null;if(0\u003C=window.location.search.indexOf(\"gtm_abtest_force\"))for(var b=0;b\u003Ca.variants.length;b++)\"Test\"===a.variants[b].name\u0026\u0026(f=a.variants[b]);if(!document.querySelector('*[data-gtm_ab\\x3d\"'+e(a.name)+\n'\"]'))if(\"seed\"in a||(a.seed=g(a.name)),(g=",["escape",["macro",7],8,16],")\u0026\u0026\"all\"===a.audience)a.anonymousid=g.replace(\/%22\/g,\"\").replace(\/-\/g,\"\"),h();else var n=0,p=window.setInterval(function(){if(window.analytics||40\u003Cn++)window.clearInterval(p),window.analytics\u0026\u0026window.analytics.ready(function(){a.anonymousid=window.analytics.user().anonymousId().replace(\/-\/g,\"\");h()})},50)}}catch(k){console.log(\"runtest err\",k.message)}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return(a=localStorage.getItem(a))\u0026\u0026JSON.parse(a)}})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",10],8,16],";return a=null==a||\"\"==a?\"undefined\":100\u003Ca.length?a.substring(0,100).toLowerCase()+\"...\":a.toLowerCase()})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"recentlySignedUp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"staging",
      "vtp_name":"marketoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"production",
      "vtp_name":"conversionEnvironment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"userDropletCount"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"userOrOrgHasCreatedDroplets"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_manager.dataLayer.gtmLoad"
    },{
      "function":"__j",
      "vtp_name":"window.ub.page.variantId"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",30],
      "vtp_defaultValue":"_",
      "vtp_map":["list",["map","key","survey","value","Thanks for filling out our survey! We genuinely appreciate customer feedback."],["map","key","swag","value","Use promo code DOswag10 on Billing page for $10 credit. Valid for new users only."]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"signed_in"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_user_id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"refcode"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"last_logged_in_at"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"optimizelySegments"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_gtmab_ft"
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"pcode",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pcode"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.droplet_count"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audience"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"model.user.email"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_eventCategory":"Signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Registration",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",17],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",77,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":16
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",15],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"m4TPCP2NtQIQy5v24QM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":18
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",75,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":24
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PageView\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":44
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",74,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":45
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=cpljCNe412UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":78
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=RNOTEOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":82
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",76,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":83
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",73,0]],
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqsf\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":84
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",78,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":88
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/googleads.g.doubleclick.net\/pagead\/viewthroughconversion\/1010666955\/?guid=ON\u0026amp;script=0\u0026amp;data.userengaged=true",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":89
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Product",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Create",
      "vtp_eventLabel":"Droplet",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":116
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":125
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=AddPaymentInfo\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":135
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=CompleteRegistration\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":136
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=EUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":137
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":138
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Purchase\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":141
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=i4IrCJHK53UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":142
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":146
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":152
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2\u0026evt=custom\u0026ec=Conversion",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":153
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":155
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=241522\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":156
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=Generic",
      "tag_id":159
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",15],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"PiHFCPrC130QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":167
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["template",["macro",21],"\u0026var=",["macro",28]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":171
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdos",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":173
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdou",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":174
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochpu",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":175
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochps",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":176
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"GaeYCJzr8H4QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":182
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":183
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026conversionId=333506\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":184
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"A0tMCLK24n4QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":185
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":187
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":189
    },{
      "function":"__asp",
      "once_per_event":true,
      "vtp_pixelId":"4IDGVTPEAFC4TM2QKYNQ53",
      "vtp_customerId":"S4BPDI4QWNB57PEKEZSLIP",
      "vtp_conversionValueCurrency":"USD",
      "tag_id":194
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":195
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/d.adroll.com\/ipixel\/S4BPDI4QWNB57PEKEZSLIP\/4IDGVTPEAFC4TM2QKYNQ53?name=be9695fc",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":197
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=ViewContent",
      "tag_id":201
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10066170",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":207
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10066170\u0026ec=Conversion",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":208
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=532748\u0026conversionId=682001\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":209
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":213
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":216
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":218
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":223
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":227
    },{
      "function":"__cegg",
      "once_per_event":true,
      "vtp_usersNumericId":"00576104",
      "tag_id":229
    },{
      "function":"__cl",
      "tag_id":235
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"300000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"758737_224",
      "tag_id":236
    },{
      "function":"__cl",
      "tag_id":237
    },{
      "function":"__cl",
      "tag_id":238
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",7],8,16],"\u0026\u002665\u003EparseInt(",["escape",["macro",7],8,16],".substr(4,2),16)\u0026\u0026(window._fs_debug=!1,window._fs_host=\"www.fullstory.com\",window._fs_org=\"1XYq\",window._fs_namespace=\"FS\",function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,\nh),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=function(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})}(window,document,window._fs_namespace,\"script\",\"user\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar $alertElement=document.querySelector(\"p[data-home-announcement-message]\"),$alertContent=\"",["escape",["macro",31],7],"\";$alertElement\u0026\u002620\u003C$alertContent.length\u0026\u0026($alertElement.innerHTML=$alertContent);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"www.fullstory.com\";window._fs_org=\"1XYq\";window._fs_namespace=\"FS\";\n(function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,h),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=\nfunction(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(0\u003C=document.cookie.indexOf(\"signed_in\\x3dtrue\")||0\u003C=document.cookie.indexOf(\"last_logged_in_at\\x3d\")){var links=document.querySelectorAll('a[href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?onboarding_origin\\x3dspaces\"]'),linkslen=links.length,i;for(i=0;i\u003Clinkslen;i++)links[i].setAttribute(\"href\",\"https:\/\/cloud.digitalocean.com\/spaces\")};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(-1\u003Cwindow.location.search.indexOf(\"show_features\")){var f=document.querySelector('*[data-ab-test\\x3d\"featuresSection\"]');f\u0026\u0026(f.style.display=\"block\")}}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-836091520\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-836091520\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar sub=document.querySelector(\".subscribe\");0\u003Cwindow.location.search.indexOf(\"\\x26subscribe\")\u0026\u0026null!==sub.offsetParent\u0026\u0026sub.click();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.analytics\u0026\u0026analytics.ready(function(){var c=document.querySelectorAll(\".bui-Button\"),e=c.length,a,d={};for(a=0;a\u003Ce;a++){var b=c[a].value||c[a].innerText;b in d?d[b]++:d[b]=1;analytics.trackLink(c[a],\"Web Interaction\",{action:\"click\",category:\"button\",name:b+(1\u003Cd[b]?\" - \"+d[b]:\"\")})}})}catch(c){};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  ._gtm_announce-wrap {\n    background: none;\n    width: 100%;\n    z-index: 9;\n    position:relative;\n  }\n  ._gtm_announce-wrap a {\n    display:block;\n    position:relative;\n    top: -90px;\n    margin-bottom: -76px;\n    width:100%;\n    max-width:1168px;\n    background-color: #00b47b;\n    border: 1px solid #009969;\n    border-radius: 5px;\n    box-shadow:0 2px 4px rgba(0,0,0,0.06);\n    padding: 8px 16px;\n    color:#fff;\n    text-align:center;\n  }\n  ._gtm_announce-wrap a strong {\n    color:#fff;\n  }\n  .Home-hero .www-Container ._gtm_announce-wrap a {\n    top: 8px;\n    margin-bottom: -44px; \n  }\n  .GraphicalHero .www-Container ._gtm_announce-wrap a {\n    top: -112px;\n  }\n  @media (max-width: 768px) {\n    .GraphicalHero .www-Container ._gtm_announce-wrap a {\n      top: 0px;\n      margin-bottom:20px;\n    }\n  }\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(-1\u003C[\"\",\"products\",\"pricing\",\"customers\"].indexOf(window.location.pathname.split(\"\/\")[1])){var main=document.querySelector(\".BackgroundImageHero .www-Container\")||document.querySelector(\".Home-hero .www-Container\")||document.querySelector(\".GraphicalHero .www-Container\")||document.querySelector(\".UnifiedNav-transparentHeaderPush\"),announce=document.createElement(\"div\"),text=0\u003Cwindow.location.search.indexOf(\"Referral_Invite\")?\"\\ud83d\\udcb5 \\x3cstrong\\x3e Free credit active:\\x3c\/strong\\x3e You have a $50, 30-day credit from a friend. \\x3cstrong \\x3eComplete registration to get started.\\x3c\/strong\\x3e\":\n\"\\ud83d\\udcb5 \\x3cstrong\\x3e Free credit active:\\x3c\/strong\\x3e Get started on DigitalOcean with a $50, 30-day credit for new users.\";announce.classList.add(\"_gtm_announce-wrap\");announce.innerHTML='\\x3ca href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?utm_source\\x3dinternal\\x26utm_campaign\\x3dwwwalertbanner\"\\x3e'+text+\"\\x3c\/a\\x3e\";main.insertBefore(announce,main.firstChild);window.analytics\u0026\u0026window.analytics.track(\"Experiment Viewed\",{experimentName:\"Referral Alert\"})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"cookieconsent_statuschange\",function(){window.dataLayer.push({event:\"cc_dismiss\"})});function getCookie(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(2==a.length)return a.pop().split(\";\").shift()}getCookie(\"cookieconsent_status\")\u0026\u0026window.dataLayer.push({event:\"cc_dismiss\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":219
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector('li[role\\x3d\"banner\"]').innerHTML='\\x3ca href\\x3d\"https:\/\/blog.digitalocean.com\/doks-in-ga\/\" data-pill\\x3d\"new\" title\\x3d\"DigitalOcean Kubernetes is now Generally Available.\" target\\x3d\"_blank\" rel\\x3d\"noopener\"\\x3eDigitalOcean Kubernetes is now Generally Available. Learn more \\u276f \\x3c\/a\\x3e';\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":230
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"SignUp\");\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{allow_custom_scripts:!0,session_id:\"[SessionID]\",send_to:\"DC-9515217\/conv\/digit0+per_session\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=9515217;type=conv;cat=digit0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[SessionID]?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":232
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-9515217\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"DC-9515217\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":233
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{allow_custom_scripts:!0,session_id:\"[SessionID]\",send_to:\"DC-9515217\/landi0\/digit0+per_session\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=9515217;type=landi0;cat=digit0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[SessionID]?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":234
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/t.co\/i\/adsct?p_id=Twitter\u0026p_user_id=0\u0026txn_id=nuqsf\u0026events=%5B%5B%22pageview%22%2Cnull%5D%5D\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":123
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":119
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":121
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":122
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":118
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":120
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":".digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"try.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"staging"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"cloud.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"pay-pal-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"credit-card-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"activated"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/cloud."
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"cc_dismiss"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Create"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"Button Button--green Button--large Button--fullWidth"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"false"
    },{
      "function":"_gt",
      "arg0":["macro",18],
      "arg1":"50"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/console"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"ember_pageview"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Create a Space"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/community"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/products\/"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"medium=rtg"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorials"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"medium=paid_social"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"medium=display"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorial"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"medium="
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"rtg"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"kubernetes"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"containers"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"docker"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"K8S"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community\/questions\/"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/community\/questions\/new"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorials\/"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/welcome"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/community"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"marketplace.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"_"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"null"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community\/questions"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/products\/object-storage\/"
    },{
      "function":"_sw",
      "arg0":["macro",26],
      "arg1":"\/lp\/hosting"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tags"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"community"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"?refcode="
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"undefined"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",1,3,5],["unless",4],["add",1]],
    [["if",6],["add",2,3,4,16,24,26,27,28,36,42,45,46,69,70]],
    [["if",7],["add",2,3,4,16,24,26,27,28,36,42,45,46,69,70]],
    [["if",0,1,8,9],["add",4,24,26,27,28,36,42,45,46,69,70]],
    [["if",11],["unless",10],["add",5,6,23,25,35,40,43,44,62,68,71]],
    [["if",5,12,13,14],["add",7,8,14,17]],
    [["if",1,5,15],["unless",4],["add",9,10]],
    [["if",1,5,16],["unless",4,17],["add",11,19]],
    [["if",1,5,18],["unless",4,17],["add",12,13,18]],
    [["if",19,20],["add",15]],
    [["if",5,13,14,21],["add",20,21]],
    [["if",1,22],["unless",23],["add",22,64,72]],
    [["if",11],["add",22]],
    [["if",1,2],["add",29],["block",0]],
    [["if",11,24],["add",30,31]],
    [["if",11,22,25],["add",32,33,37]],
    [["if",11,26,27],["add",34]],
    [["if",28,29,30],["add",38]],
    [["if",29,30,31],["add",38]],
    [["if",30,32,33],["add",38]],
    [["if",1,34,35,36],["add",38]],
    [["if",1,27],["unless",37,38,39,40],["add",38]],
    [["if",1,41],["unless",42],["add",39]],
    [["if",43,44],["add",41,48,49,51]],
    [["if",1,5,45],["add",47]],
    [["if",14],["add",50]],
    [["if",1,46],["add",52]],
    [["if",30],["add",53,55,56]],
    [["if",30,33],["add",54]],
    [["if",1,5],["unless",4],["add",57]],
    [["if",11,47],["add",57]],
    [["if",22,25,44],["unless",48],["add",58]],
    [["if",1,51,52],["add",59]],
    [["if",44,53],["add",60]],
    [["if",30,54],["add",61]],
    [["if",1,55],["add",63]],
    [["if",22,44],["unless",56,57],["add",65]],
    [["if",22,44,58],["unless",57],["add",65]],
    [["if",1],["unless",10],["add",66]],
    [["if",1,61],["add",67]],
    [["if",1,22,49],["block",58]],
    [["if",0,1],["unless",50],["block",58]],
    [["if",0,44],["unless",50,59],["block",65]],
    [["if",0,44],["unless",60],["block",65]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,da=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},oa=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Da=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ea=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Fa=function(a){if(null==a)return String(a);var b=Ea.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ga=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ha=function(a){if(!a||"object"!=Fa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ga(a,"constructor")&&!Ga(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ga(a,b)},f=function(a,b){var c=b||("array"==Fa(a)?[]:{}),d;for(d in a)if(Ga(a,d)){var e=a[d];"array"==Fa(e)?("array"!=Fa(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ha(e)?(Ha(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};var u=window,C=document,Ia=navigator,Ja=C.currentScript&&C.currentScript.src,Ka=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},La=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ma=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;La(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=C.getElementsByTagName("script")[0]||C.body||C.head;l.parentNode.insertBefore(d,l);return d},Na=function(){if(Ja){var a=Ja.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Oa=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||
C.body||C.head;d.parentNode.insertBefore(c,d);La(c,b);void 0!==a&&(c.src=a);return c},Pa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Qa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ra=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},D=function(a){u.setTimeout(a,0)},Sa=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ta=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ua=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ya=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Za=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var $a=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var ab={},bb=function(a,b){ab[a]=ab[a]||[];ab[a][b]=!0},cb=function(a){for(var b=[],c=ab[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var db=/:[0-9]+$/,eb=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},hb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=fb(a.protocol)||fb(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(db,"").toLowerCase());var g=b,h,k=fb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=gb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(db,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||bb("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=eb(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},fb=function(a){return a?a.replace(":","").toLowerCase():""},gb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
jb=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||bb("TAGGING",1),c="/"+c);var d=b.hostname.replace(db,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var kb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},nb=function(a,b,c,d){var e=lb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=mb(e,function(g){return g.Ib},b);if(1===e.length)return e[0].id;e=mb(e,function(g){return g.eb},c);return e[0]?e[0].id:void 0}};
function ob(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=kb(b,e).indexOf(c)}
var rb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=pb(),w=0;w<v.length;++w){var x="none"!=v[w]?v[w]:void 0;if(!qb(x,t)&&ob(m+(x?"; domain="+x:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!qb(p,t)&&ob(m,a,l)}return k};function mb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function lb(a,b){for(var c=[],d=kb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Ib:1*k[0]||1,eb:1*k[1]||1}))}}return c}
var tb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ub=/(^|\.)doubleclick\.net$/i,qb=function(a,b){return ub.test(document.location.hostname)||"/"===b&&tb.test(a)},pb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var vb=[],wb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},xb=function(a){return wb[a]},yb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Cb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Db={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Eb=function(a){return Db[a]};vb[7]=function(a){return String(a).replace(Cb,Eb)};
vb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Cb,Eb)+"'"}};var Mb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Nb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ob=function(a){return Nb[a]};vb[16]=function(a){return a};var Qb=[],Rb=[],Sb=[],Tb=[],Ub=[],Vb={},Wb,Yb,Zb,$b=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},ac=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Vb[c](e):(void 0)(c,e,b)},cc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=bc(a[e],b,c));return d},
dc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Vb[b];return c?c.priorityOverride||0:0},bc=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(bc(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Qb[g];if(!h||b.Cc(h))return;c[g]=!0;try{var k=cc(h,b,c);k.vtp_gtmEventId=b.id;d=ac(k,b);Zb&&(d=Zb.Af(d,k))}catch(w){b.Yd&&b.Yd(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[bc(a[l],b,c)]=bc(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=bc(a[n],b,c);Yb&&(m=m||p===Yb.wb);d.push(p)}return Yb&&m?Yb.Df(d):d.join("");case "escape":d=bc(a[1],b,c);if(Yb&&ka(a[1])&&"macro"===a[1][0]&&Yb.eg(a))return Yb.pg(d);d=String(d);for(var t=2;t<a.length;t++)vb[a[t]]&&(d=vb[a[t]](d));return d;case "tag":var q=a[1];if(!Tb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Kd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=ec(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},ec=function(a,b,c){try{return Wb(cc(a,b,c))}catch(d){JSON.stringify(a)}return null};var fc=function(){var a=function(b){return{toString:function(){return b}}};return{cd:a("convert_case_to"),dd:a("convert_false_to"),ed:a("convert_null_to"),fd:a("convert_true_to"),gd:a("convert_undefined_to"),Yg:a("debug_mode_metadata"),ja:a("function"),Pe:a("instance_name"),Qe:a("live_only"),Re:a("malware_disabled"),Se:a("metadata"),$g:a("original_vendor_template_id"),Te:a("once_per_event"),zd:a("once_per_load"),Ad:a("setup_tags"),Bd:a("tag_id"),Cd:a("teardown_tags")}}();var gc=null,jc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];gc=hc(a);for(var e=0;e<Rb.length;e++){var g=Rb[e],h=ic(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Tb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},ic=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=gc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=gc(e[g]);if(null===h)return null;
if(h)return!1}return!0},hc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=ec(Sb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
for(var mc="floor ceil round max min abs pow sqrt".split(" "),nc=0;nc<mc.length;nc++)Math.hasOwnProperty(mc[nc]);var G={$b:"event_callback",Ma:"event_timeout",T:"gtag.config",M:"allow_ad_personalization_signals",O:"cookie_expires",La:"cookie_update",wa:"session_duration"};var Cc=/[A-Z]+/,Dc=/\s/,Ec=function(a){if(ia(a)&&(a=va(a),!Dc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Cc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ba:d}}}}},Gc=function(a){for(var b={},c=0;c<a.length;++c){var d=Ec(a[c]);d&&(b[d.id]=d)}Fc(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Fc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.ba[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Hc={},Ic=null,Jc=Math.random();Hc.i="GTM-KHWBBT";Hc.Ab="874";var Kc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},Lc="www.googletagmanager.com/gtm.js";var Mc=Lc,Nc=null,Oc=null,Pc=null,Qc="//www.googletagmanager.com/a?id="+Hc.i+"&cv=505",Rc={},Sc={},Tc=function(){var a=Ic.sequence||0;Ic.sequence=a+1;return a};
var Uc=function(){return"&tc="+Tb.filter(function(a){return a}).length},cd=function(){Vc&&(u.clearTimeout(Vc),Vc=void 0);void 0===Wc||Xc[Wc]&&!Yc||(Zc[Wc]||$c.gg()||0>=ad--?(bb("GTM",1),Zc[Wc]=!0):($c.Bg(),Pa(bd()),Xc[Wc]=!0,Yc=""))},bd=function(){var a=Wc;if(void 0===a)return"";var b=cb("GTM"),c=cb("TAGGING");return[dd,Xc[a]?"":"&es=1",ed[a],b?"&u="+b:"",c?"&ut="+c:"",Uc(),Yc,"&z=0"].join("")},fd=function(){return[Qc,"&v=3&t=t","&pid="+oa(),"&rv="+Hc.Ab].join("")},gd="0.005000">
Math.random(),dd=fd(),hd=function(){dd=fd()},Xc={},Yc="",Wc=void 0,ed={},Zc={},Vc=void 0,$c=function(a,b){var c=0,d=0;return{gg:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},Bg:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),ad=1E3,id=function(a,b){if(gd&&!Zc[a]&&Wc!==a){cd();Wc=a;Yc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";ed[a]="&e="+c+"&eid="+a;Vc||(Vc=u.setTimeout(cd,500))}},jd=function(a,b,c){if(gd&&!Zc[a]&&b){a!==Wc&&(cd(),Wc=a);var d=String(b[fc.ja]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Yc=Yc?Yc+"."+e:"&tr="+e;Vc||(Vc=u.setTimeout(cd,500));2022<=bd().length&&cd()}};var kd={},ld=new pa,md={},nd={},rd={name:"dataLayer",set:function(a,b){f(od(a,b),md);pd()},get:function(a){return qd(a,2)},reset:function(){ld=new pa;md={};pd()}},qd=function(a,b){if(2!=b){var c=ld.get(a);if(gd){var d=sd(a);c!==d&&bb("GTM",5)}return c}return sd(a)},sd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:ud(d)},ud=function(a){for(var b=md,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var xd=function(a,b){nd.hasOwnProperty(a)||(ld.set(a,b),f(od(a,b),md),pd())},od=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},pd=function(a){ra(nd,function(b,c){ld.set(b,c);f(od(b,void 0),md);f(od(b,c),md);a&&delete nd[b]})},yd=function(a,b,c){kd[a]=kd[a]||{};var d=1!==c?sd(b):ld.get(b);"array"===Fa(d)||"object"===Fa(d)?kd[a][b]=f(d):kd[a][b]=d},zd=function(a,b){if(kd[a])return kd[a][b]};var Ad=function(){var a=!1;return a};var H=function(a,b,c,d){return(2===Bd()||d||"http:"!=u.location.protocol?a:b)+c},Bd=function(){var a=Na(),b;if(1===a)a:{var c=Mc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Ld=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Md={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Nd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Od="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Qd=function(a){var b=qd("gtm.whitelist");b&&bb("GTM",9);var c=b&&Da(ua(b),Md),d=qd("gtm.blacklist");d||(d=qd("tagTypeBlacklist"))&&bb("GTM",3);
d?bb("GTM",8):d=[];Pd()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(ua(d),"google")&&bb("GTM",2);var e=d&&Da(ua(d),Nd),g={};return function(h){var k=h&&h[fc.ja];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Sc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
la(c,l[p])){bb("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r=qa(e,l||[]);r&&bb("GTM",10);t=r}}var v=!m||t;v||!(0<=la(l,"sandboxedScripts"))||c&&-1!==la(c,"sandboxedScripts")||(v=qa(e,Od));return g[k]=v}},Pd=function(){return Ld.test(u.location&&u.location.hostname)};var Rd={Af:function(a,b){b[fc.cd]&&"string"===typeof a&&(a=1==b[fc.cd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(fc.ed)&&null===a&&(a=b[fc.ed]);b.hasOwnProperty(fc.gd)&&void 0===a&&(a=b[fc.gd]);b.hasOwnProperty(fc.fd)&&!0===a&&(a=b[fc.fd]);b.hasOwnProperty(fc.dd)&&!1===a&&(a=b[fc.dd]);return a}};var Sd={active:!0,isWhitelisted:function(){return!0}},Td=function(a){var b=Ic.zones;!b&&a&&(b=Ic.zones=a());return b};var Ud=!1,Vd=0,Wd=[];function Xd(a){if(!Ud){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ud=!0;for(var e=0;e<Wd.length;e++)D(Wd[e])}Wd.push=function(){for(var g=0;g<arguments.length;g++)D(arguments[g]);return 0}}}function Yd(){if(!Ud&&140>Vd){Vd++;try{C.documentElement.doScroll("left"),Xd()}catch(a){u.setTimeout(Yd,50)}}}var Zd=function(a){Ud?a():Wd.push(a)};var $d={},ae={},be=function(a,b,c,d){if(!ae[a]||Kc[b]||"__zone"===b)return-1;var e={};Ha(d)&&(e=f(d,e));e.id=c;e.status="timeout";return ae[a].tags.push(e)-1},ce=function(a,b,c,d){if(ae[a]){var e=ae[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function de(a){for(var b=$d[a]||[],c=0;c<b.length;c++)b[c]();$d[a]={push:function(d){d(Hc.i,ae[a])}}}
var ge=function(a,b,c){ae[a]={tags:[]};ha(b)&&ee(a,b);c&&u.setTimeout(function(){return de(a)},Number(c));return fe(a)},ee=function(a,b){$d[a]=$d[a]||[];$d[a].push(ya(function(){return D(function(){b(Hc.i,ae[a])})}))};function fe(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&de(a)})},hf:function(){d=!0;b>=c&&de(a)}}};var he=function(){function a(d){return!ja(d)||0>d?0:d}if(!Ic._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=ja(rd.get("gtm.start"))?rd.get("gtm.start"):0;Ic._li={cst:a(c-b),cbt:a(Oc-b)}}};var le=!1,me=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},ne=!1;
var oe=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(u[b])u.hasOwnProperty(b)||bb("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}he();return u[b]},pe=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=me();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var re=function(){},qe=function(){return u.GoogleAnalyticsObject||"ga"};var ye=function(a){};function xe(a,b){a.containerId=Hc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ze(a,b,c,d){var e=Tb[a],g=Ae(a,b,c,d);if(!g)return null;var h=bc(e[fc.Ad],c,[]);if(h&&h.length){var k=h[0];g=ze(k.index,{I:g,R:1===k.Kd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function Ae(a,b,c,d){function e(){if(g[fc.Re])k();else{var w=cc(g,c,[]),x=be(c.id,String(g[fc.ja]),Number(g[fc.Bd]),w[fc.Se]),y=!1;w.vtp_gtmOnSuccess=function(){if(!y){y=!0;var A=wa()-B;jd(c.id,Tb[a],"5");ce(c.id,x,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!y){y=!0;var A=wa()-B;jd(c.id,Tb[a],"6");ce(c.id,x,"failure",A);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;jd(c.id,g,"1");var z=function(A){var E=wa()-B;ye(A);jd(c.id,g,"7");ce(c.id,x,"exception",E);y||(y=!0,k())};var B=wa();try{ac(w,c)}catch(A){z(A)}}}var g=Tb[a],h=b.I,k=b.R,l=b.terminate;if(c.Cc(g))return null;var m=bc(g[fc.Cd],c,[]);if(m&&m.length){var n=m[0],p=ze(n.index,{I:h,R:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Kd?l:p}if(g[fc.zd]||g[fc.Te]){var t=g[fc.zd]?Ub:c.Lg,q=h,r=k;if(!t[a]){e=ya(e);var v=Be(a,t,e);h=v.I;k=v.R}return function(){t[a](q,r)}}return e}
function Be(a,b,c){var d=[],e=[];b[a]=Ce(d,e,c);return{I:function(){b[a]=De;for(var g=0;g<d.length;g++)d[g]()},R:function(){b[a]=Ee;for(var g=0;g<e.length;g++)e[g]()}}}function Ce(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function De(a){a()}function Ee(a,b){b()};var He=function(a,b){for(var c=[],d=0;d<Tb.length;d++)if(a.ab[d]){var e=Tb[d];var g=b.add();try{var h=ze(d,{I:g,R:g,terminate:g},a,d);h?c.push({qe:d,ee:dc(e),Lf:h}):(Fe(d,a),g())}catch(l){g()}}b.hf();c.sort(Ge);for(var k=0;k<c.length;k++)c[k].Lf();return 0<c.length};function Ge(a,b){var c,d=b.ee,e=a.ee;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.qe,k=b.qe;g=h>k?1:h<k?-1:0}return g}
function Fe(a,b){if(!gd)return;var c=function(d){var e=b.Cc(Tb[d])?"3":"4",g=bc(Tb[d][fc.Ad],b,[]);g&&g.length&&c(g[0].index);jd(b.id,Tb[d],e);var h=bc(Tb[d][fc.Cd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Ie=!1,Je=function(a,b,c,d,e){if("gtm.js"==b){if(Ie)return!1;Ie=!0}id(a,b);var g=ge(a,d,e);yd(a,"event",1);yd(a,"ecommerce",1);yd(a,"gtm");var h={id:a,name:b,Cc:Qd(c),ab:[],Lg:[],Yd:function(n){bb("GTM",6);ye(n)}};h.ab=jc(h);var k=He(h,g);"gtm.js"!==b&&"gtm.sync"!==b||re();if(!k)return k;for(var l=0;l<h.ab.length;l++)if(h.ab[l]){var m=
Tb[l];if(m&&!Kc[String(m[fc.ja])])return!0}return!1};var Le=function(a,b,c){var d=this;this.eventModel=a;this.targetConfig=b||{};this.globalConfig=c||{};this.getWithConfig=function(e){if(d.eventModel.hasOwnProperty(e))return d.eventModel[e];if(d.targetConfig.hasOwnProperty(e))return d.targetConfig[e];if(d.globalConfig.hasOwnProperty(e))return d.globalConfig[e]}};function Me(){var a=Ic;return a.gcq=a.gcq||new Ne}var Oe=function(a,b){Me().register(a,b)},Pe=function(){this.status=1;this.vc={};this.fe=null;this.Ud=!1},Qe=function(a,b,c,d,e){this.type=a;this.Qg=b;this.na=c||"";this.Cb=d;this.defer=e},Ne=function(){this.se={};this.Pd={};this.Wa=[]},Re=function(a,b){return a.se[b]=a.se[b]||new Pe},Se=function(a,b,c,d){var e=Re(a,d.na).fe;if(e){var g=f(c),h=f(Re(a,d.na).vc),k=f(a.Pd),l=new Le(g,h,k);try{e(b,d.Qg,l)}catch(m){}}};
Ne.prototype.register=function(a,b){3!==Re(this,a).status&&(Re(this,a).fe=b,Re(this,a).status=3,this.flush())};Ne.prototype.push=function(a,b,c,d){var e=Math.floor(wa()/1E3);if(c&&1===Re(this,c).status&&(Re(this,c).status=2,this.push("require",[],c),!Ad())){var g=encodeURIComponent(c);Ma(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+g+"&l=dataLayer&cx=c"))}this.Wa.push(new Qe(a,e,c,b,d));d||this.flush()};
Ne.prototype.flush=function(a){for(var b=this;this.Wa.length;){var c=this.Wa[0];if(c.defer)c.defer=!1,this.Wa.push(c);else switch(c.type){case "require":if(3!==Re(this,c.na).status&&!a)return;break;case "set":ra(c.Cb[0],function(h,k){b.Pd[h]=k});break;case "config":var d=c.Cb[0],e=!!d[G.ub];delete d[G.ub];var g=Re(this,c.na);e||(g.vc={});g.Ud&&e||Se(this,G.T,d,c);g.Ud=!0;f(d,g.vc);break;case "event":Se(this,c.Cb[1],c.Cb[0],c)}this.Wa.shift()}};var Te={};var Ve=null,We={},Xe={},Ye,Ze=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[G.$b]&&(c.eventCallback=b[G.$b]),b[G.Ma]&&(c.eventTimeout=b[G.Ma]));return c};
var ef={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Ha(a[2]))return;c=a[2]}var d=Ze(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];Te[b]||(Te[b]=[]);Te[b].push(c)}},set:function(a){var b;2==a.length&&Ha(a[1])?b=f(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},ff={policy:!0};var hf=function(a){return gf?C.querySelectorAll(a):null},jf=function(a,b){if(!gf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},kf=!1;if(C.querySelectorAll)try{var lf=C.querySelectorAll(":root");lf&&1==lf.length&&lf[0]==C.documentElement&&(kf=!0)}catch(a){}var gf=kf;var sf=function(a){if(rf(a))return a;this.Tg=a};sf.prototype.Sf=function(){return this.Tg};var rf=function(a){return!a||"object"!==Fa(a)||Ha(a)?!1:"getUntrustedUpdateValue"in a};sf.prototype.getUntrustedUpdateValue=sf.prototype.Sf;var tf=!1,uf=[];function vf(){if(!tf){tf=!0;for(var a=0;a<uf.length;a++)D(uf[a])}}var wf=function(a){tf?D(a):uf.push(a)};var xf=[],yf=!1,zf=function(a){return u["dataLayer"].push(a)},Af=function(a){var b=Ic["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Cf=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&xd(g,void 0),xd(g,h))});Nc||(Nc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Tc(),a["gtm.uniqueEventId"]=d,xd("gtm.uniqueEventId",d));Pc=c;var e=Bf(a);
Pc=null;switch(c){case "gtm.init":bb("GTM",19),e&&bb("GTM",20)}return e};function Bf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Ic.zones;d=e?e.checkState(Hc.i,c):Sd;return d.active?Je(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Df=function(){for(var a=!1;!yf&&0<xf.length;){yf=!0;delete md.eventModel;pd();var b=xf.shift();if(null!=b){var c=rf(b);if(c){var d=b;b=rf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=qd(h,1);if(ka(k)||Ha(k))k=f(k);nd[h]=k}}try{if(ha(b))try{b.call(rd)}catch(v){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=qd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=ef[b[0]];if(r&&(!c||!ff[b[0]])){b=r(b);break a}}b=void 0}if(!b){yf=!1;continue}}a=Cf(b)||a}}finally{c&&pd(!0)}}yf=!1}
return!a},Ef=function(){var a=Df();try{var b=Hc.i,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Ff=function(){var a=Ka("dataLayer",[]),b=Ka("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Zd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});wf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<Ic.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new sf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);xf.push.apply(xf,d);if(300<this.length)for(bb("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Df()&&h};xf.push.apply(xf,a.slice(0));D(Ef)};var Gf;var bg={};bg.wb=new String("undefined");
var cg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===bg.wb?b:a[d]);return c.join("")}};cg.prototype.toString=function(){return this.resolve("undefined")};cg.prototype.valueOf=cg.prototype.toString;bg.Ue=cg;bg.kc={};bg.Df=function(a){return new cg(a)};var dg={};bg.Cg=function(a,b){var c=Tc();dg[c]=[a,b];return c};bg.Hd=function(a){var b=a?0:1;return function(c){var d=dg[c];if(d&&"function"===typeof d[b])d[b]();dg[c]=void 0}};bg.eg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};bg.pg=function(a){if(a===bg.wb)return a;var b=Tc();bg.kc[b]=a;return'google_tag_manager["'+Hc.i+'"].macro('+b+")"};bg.ig=function(a,b,c){a instanceof bg.Ue&&(a=a.resolve(bg.Cg(b,c)),b=fa);return{Ac:a,I:b}};var eg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Sa(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},fg=function(a){Ic.hasOwnProperty("autoEventsSettings")||(Ic.autoEventsSettings={});var b=Ic.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},gg=function(a,b,c){fg(a)[b]=c},hg=function(a,b,c,d){var e=fg(a),g=xa(e,b,d);e[b]=c(g)},ig=function(a,b,c){var d=fg(a);return xa(d,b,c)};var jg=function(){for(var a=Ia.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},mg=function(a,b,c,d){var e=kg(b);return nb(a,e,lg(c),d)},ng=function(a,b,c,d){var e=""+kg(c),g=lg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},kg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},lg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var og=["1"],pg={},tg=function(a,b,c,d){var e=qg(a);pg[e]||rg(e,b,c)||(sg(e,jg(),b,c,d),rg(e,b,c))};function sg(a,b,c,d,e){var g=ng(b,"1",d,c);rb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function rg(a,b,c){var d=mg(a,b,c,og);d&&(pg[a]=d);return d}function qg(a){return(a||"_gcl")+"_au"};var ug=function(){for(var a=[],b=C.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Wc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Wc]||(g[a[h].Wc]=[]),g[a[h].Wc].push({timestamp:k[1],Pf:k[2]}))}return g};function vg(){for(var a=wg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function xg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var wg,yg,zg=function(a){wg=wg||xg();yg=yg||vg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(wg[l],wg[m],wg[n],wg[p])}return b.join("")},Ag=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=yg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}wg=wg||xg();yg=yg||
vg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Bg;function Cg(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Gg=function(){var a=Dg,b=Eg,c=Fg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Qa(C,"mousedown",d);Qa(C,"keyup",d);Qa(C,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Fg=function(){var a=Ka("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Hg=/(.*?)\*(.*?)\*(.*)/,Ig=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Jg=/^(?:www\.|m\.|amp\.)+/,Kg=/([^?#]+)(\?[^#]*)?(#.*)?/,Lg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Ng=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(zg(String(d))))}var e=b.join("*");return["1",Mg(e),e].join("*")},Mg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Bg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Bg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Bg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Pg=function(){return function(a){var b=jb(u.location.href),c=b.search.replace("?",""),d=eb(c,"_gl",!0)||"";a.query=Og(d)||{};var e=hb(b,"fragment").match(Lg);a.fragment=Og(e&&e[3]||
"")||{}}},Qg=function(){var a=Pg(),b=Fg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(za(c,d.query),za(c,d.fragment));return c},Og=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Hg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Mg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Ag(t[q+1]);return p}}}}catch(r){}};
function Rg(a,b,c){function d(m){var n=m,p=Lg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Kg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Sg(a,b,c){for(var d={},e={},g=Fg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Cg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=Ng(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=C.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Rg(l,a.action);$a.test(v)&&(a.action=v)}}}else Tg(l,a,!1)}if(!c&&Aa(e)){var w=Ng(e);Tg(w,a,!0)}}function Tg(a,b,c){if(b.href){var d=Rg(a,b.href,void 0===c?!1:c);$a.test(d)&&(b.href=d)}}
var Dg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Sg(e,e.hostname,!1)}}catch(h){}},Eg=function(a){try{if(a.action){var b=hb(jb(a.action),"host");Sg(a,b,!0)}}catch(c){}},Ug=function(a,b,c,d){Gg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Fg().decorators.push(e)},Vg=function(){var a=C.location.hostname,b=Ig.exec(C.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Jg,"")===e.replace(Jg,"")},Wg=function(a,b){return!1===a?!1:a||b||Vg()};var Xg={};var Yg=/^\w+$/,Zg=/^[\w-]+$/,$g=/^~?[\w-]+$/,ah={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function bh(a){return a&&"string"==typeof a&&a.match(Yg)?a:"_gcl"}var dh=function(){var a=jb(u.location.href),b=hb(a,"query",!1,void 0,"gclid"),c=hb(a,"query",!1,void 0,"gclsrc"),d=hb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||eb(e,"gclid",void 0);c=c||eb(e,"gclsrc",void 0)}return ch(b,c,d)};
function ch(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Zg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Xg.gtm_3pds?0:Xg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function eh(a,b,c){function d(p,t){var q=fh(p,e);q&&rb(q,t,h,g,l,!0)}b=b||{};var e=bh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Zd?7776E3:b.Zd;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Ah?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var fh=function(a,b){var c=ah[a];if(void 0!==c)return b+c},gh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function hh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ih=function(a,b,c,d,e){if(ka(b)){var g=bh(e);Ug(function(){for(var h={},k=0;k<a.length;++k){var l=fh(a[k],g);if(l){var m=kb(l,C.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},jh=function(a){return a.filter(function(b){return $g.test(b)})},kh=function(a){for(var b=["aw","dc"],c=bh(a&&a.prefix),d={},e=0;e<b.length;e++)ah[b[e]]&&(d[b[e]]=ah[b[e]]);ra(d,function(g,h){var k=kb(c+h,C.cookie);if(k.length){var l=k[0],m=gh(l),n={};n[g]=[hh(l)];eh(n,a,m)}})};var lh=/^\d+\.fls\.doubleclick\.net$/;function mh(a){var b=jb(u.location.href),c=hb(b,"host",!1);if(c&&c.match(lh)){var d=hb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function nh(a,b){if("aw"==a||"dc"==a){var c=mh("gcl"+a);if(c)return c.split(".")}var d=bh(b);if("_gcl"==d){var e;e=dh()[a]||[];if(0<e.length)return e}var g=fh(a,d),h;if(g){var k=[];if(C.cookie){var l=kb(g,C.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=hh(l[m]);n&&-1===la(k,n)&&k.push(n)}h=jh(k)}else h=k}else h=k}else h=[];return h}
var oh=function(){var a=mh("gac");if(a)return decodeURIComponent(a);var b=ug(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Pf);g=jh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},ph=function(a,b,c,d,e){tg(b,c,d,e);var g=pg[qg(b)],h=dh().dc||[],k=!1;if(g&&0<h.length){var l=Ic.joined_au=Ic.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ia.sendBeacon&&Ia.sendBeacon(t)||Pa(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=qg(b),r=pg[q];r&&sg(q,r,c,d,e)}};var rh;if(3===Hc.Ab.length)rh="g";else{var sh="G";rh=sh}
var th={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:rh,OPT:"o"},uh=function(a){var b=Hc.i.split("-"),c=b[0].toUpperCase(),d=th[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===Hc.Ab.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+Hc.Ab+e};
var vh=function(a){return!(void 0===a||null===a||0===(a+"").length)},wh=function(a,b){var c;if(2===b.L)return a("ord",oa(1E11,1E13)),!0;if(3===b.L)return a("ord","1"),a("num",oa(1E11,1E13)),!0;if(4===b.L)return vh(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.L)c="1";else if(6===b.L)c=b.Rc;else return!1;vh(c)&&a("qty",c);vh(b.Eb)&&a("cost",b.Eb);vh(b.transactionId)&&a("ord",b.transactionId);return!0},xh=encodeURIComponent,yh=function(a,b){function c(n,p,t){g.hasOwnProperty(n)||(p+="",e+=";"+n+"="+
(t?p:xh(p)))}var d=a.xc,e=a.protocol;e+=a.Qb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+xh(d)+(";type="+xh(a.zc))+(";cat="+xh(a.Va));var g=a.Ff||{};ra(g,function(n,p){e+=";"+xh(n)+"="+xh(p+"")});if(wh(c,a)){vh(a.Wb)&&c("u",a.Wb);vh(a.Vb)&&c("tran",a.Vb);c("gtm",uh());!1===a.cf&&c("npa","1");if(a.wc){var h=nh("dc",a.za);h&&h.length&&c("gcldc",h.join("."));var k=nh("aw",a.za);k&&k.length&&c("gclaw",k.join("."));var l=oh();l&&c("gac",l);tg(a.za,void 0,a.Bf,a.Cf);
var m=pg[qg(a.za)];m&&c("auiddc",m)}vh(a.Nc)&&c("prd",a.Nc,!0);ra(a.Yc,function(n,p){c(n,p)});e+=b||"";vh(a.Ob)&&c("~oref",a.Ob);a.Qb?Oa(e+"?",a.I):Pa(e+"?",a.I,a.R)}else D(a.R)};var zh=["input","select","textarea"],Ah=["button","hidden","image","reset","submit"],Bh=function(a){var b=a.tagName.toLowerCase();return!ma(zh,function(c){return c===b})||"input"===b&&ma(Ah,function(c){return c===a.type.toLowerCase()})?!1:!0},Ch=function(a){return a.form?a.form.tagName?a.form:C.getElementById(a.form):Ya(a,["form"],100)},Dh=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Bh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Gh=!!u.MutationObserver,Hh=void 0,Ih=function(a){if(!Hh){var b=function(){var c=C.body;if(c)if(Gh)(new MutationObserver(function(){for(var e=0;e<Hh.length;e++)D(Hh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Qa(c,"DOMNodeInserted",function(){d||(d=!0,D(function(){d=!1;for(var e=0;e<Hh.length;e++)D(Hh[e])}))})}};Hh=[];C.body?b():D(b)}Hh.push(a)};var ji=u.clearTimeout,ki=u.setTimeout,L=function(a,b,c){if(Ad()){b&&D(b)}else return Ma(a,b,c)},li=function(){return new Date},mi=function(){return u.location.href},ni=function(a){return hb(jb(a),"fragment")},oi=function(a){return gb(jb(a))},pi=null;
var qi=function(a,b){return qd(a,b||2)},ri=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return zf(a)},si=function(a,b){u[a]=b},M=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},ti=function(a,b,c){return kb(a,b,void 0===c?!0:!!c)},ui=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Zd:d},g=dh();eh(g,e);kh(e)},vi=function(a,b,c,d,e){for(var g=Qg(),h=bh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==ah[l]){var m=fh(l,h),
n=g[m];if(n){var p=Math.min(gh(n),wa()),t;b:{for(var q=p,r=kb(m,C.cookie),v=0;v<r.length;++v)if(gh(r[v])>q){t=!0;break b}t=!1}t||rb(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};eh(ch(g.gclid,g.gclsrc),w);},wi=function(a,b,c,d,e){ih(a,b,c,d,e);},xi=function(a,b){if(Ad()){
b&&D(b)}else Oa(a,b)},yi=function(a){return!!ig(a,"init",!1)},zi=function(a){gg(a,"init",!0)},Ai=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Mc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});L(H("https://","http://",d))},Bi=function(a,b){var c=a[b];return c};
var Di=bg.ig;
var Ei=new pa,Fi=function(a,b){function c(h){var k=jb(h),l=hb(k,"protocol"),m=hb(k,"host",!0),n=hb(k,"port"),p=hb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Gi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(Gi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Ei.get(q);r||(r=new RegExp(c,t),Ei.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Fi(b,c)}return!1};var Ii=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ji={},Ki=encodeURI,W=encodeURIComponent,Li=Pa;var Mi=function(a,b){if(!a)return!1;var c=hb(jb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Ni=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Ji.fg=function(){var a=!1;return a};var mj=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var Dj=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Ej=function(){this.c=1;this.e=[];this.p2=this.p=null};function Fj(a){var b=Ic,c=b.gss=b.gss||{};return c[a]=c[a]||new Ej}
var Gj=function(a){if(Fj(a).p&&!Fj(a).p2){var b=Fj(a).p;Fj(a).p2=function(c,d,e){b(c,d,e.eventModel)}}return Fj(a).p2},Hj=function(a,b){Fj(a).p2=b;Fj(a).p=function(c,d,e){return b(c,d,new Le(e))}},Ij=function(a){var b=Fj(a),c=Gj(a);if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,new Le(l.p))}catch(m){}};g(d);g(e)}};var bk=window,ck=document,dk=function(a){var b=bk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===bk["ga-disable-"+a])return!0;try{var c=bk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=kb("AMP_TOKEN",ck.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ck.getElementById("__gaOptOutExtension")?!0:!1};var ik=!1;ik=!0;
var kk=function(a,b,c){if(ik)Me().push("event",[c,b],a,void 0);else{jk(a);var d=Math.floor(wa()/1E3);Fj(a).e.push(new Dj(b,d,c,void 0));Ij(a)}},lk=function(a,b,c){if(ik)Me().push("event",[c,b],a,!0);else{jk(a);var d=Math.floor(wa()/1E3);Fj(a).e.push(new Dj(b,d,c,!0))}},jk=function(a){if(1===Fj(a).c&&(Fj(a).c=2,!Ad())){var b=encodeURIComponent(a);Ma(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},nk=function(a,b){},mk=function(a,b){},ok=function(a){return"_"===a.charAt(0)},pk=function(a){ra(a,function(c){ok(c)&&
delete a[c]});var b=a[G.vb]||{};ra(b,function(c){ok(c)&&delete b[c]})};var Y={a:{}};

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.b="jsm";Y.__jsm.g=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=M("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;yh(b,c)}(function(b){Y.__flc=b;Y.__flc.b="flc";Y.__flc.g=!0;Y.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Ni(b.vtp_customVariable||[],"key","value")||{},e={Va:b.vtp_activityTag,wc:c,za:b.vtp_conversionCookiePrefix||void 0,Eb:void 0,L:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,xc:b.vtp_advertiserId,zc:b.vtp_groupTag,R:b.vtp_gtmOnFailure,I:b.vtp_gtmOnSuccess,
Ob:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",Rc:void 0,Qb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Vb:b.vtp_transactionVariable,transactionId:void 0,Wb:b.vtp_userVariable,Yc:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){L("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,M("google_attr").build([Ni(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0;Y.__e.priorityOverride=0})(function(a){return String(zd(a.vtp_gtmEventId,"event"))})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=eg(c,"gtm.click");ri(d)}}(function(b){Y.__cl=b;Y.__cl.b="cl";Y.__cl.g=!0;Y.__cl.priorityOverride=0})(function(b){if(!yi("cl")){var c=M("document");Qa(c,"click",a,!0);zi("cl")}D(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.b="j";Y.__j.g=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=M(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.b="k";Y.__k.g=!0;Y.__k.priorityOverride=0})(function(a){return ti(a.vtp_name,qi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.b="r";Y.__r.g=!0;Y.__r.priorityOverride=0})(function(a){return oa(a.vtp_min,a.vtp_max)})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.b="u";Y.__u.g=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:qi("gtm.url",1))||mi();var d=b[a("vtp_component")];if(!d||"URL"==d)return oi(String(c));var e=jb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ka(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=hb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=hb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=qi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.tl=["google"],function(){function a(b){return function(){if(b.Hc&&b.Jc>=b.Hc)b.Bc&&M("self").clearInterval(b.Bc);else{b.Jc++;var c=li().getTime();ri({event:b.U,"gtm.timerId":b.Bc,"gtm.timerEventNumber":b.Jc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Hc,"gtm.timerStartTime":b.pe,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.pe,"gtm.triggers":b.Rg})}}}(function(b){Y.__tl=b;Y.__tl.b="tl";Y.__tl.g=!0;Y.__tl.priorityOverride=0})(function(b){D(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{U:b.vtp_eventName,Jc:0,interval:Number(b.vtp_interval),Hc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Rg:String(b.vtp_uniqueTriggerId||"0"),pe:li().getTime()};c.Bc=M("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.a.asp=["nonGoogleScripts"],function(){(function(a){Y.__asp=a;Y.__asp.b="asp";Y.__asp.g=!0;Y.__asp.priorityOverride=0})(function(a){u.adroll_adv_id=a.vtp_customerId;u.adroll_pix_id=a.vtp_pixelId;void 0!==a.vtp_conversionValueInDollars&&(u.adroll_conversion_value=a.vtp_conversionValueInDollars,u.adroll_currency=a.vtp_conversionValueCurrency||"USD");if(a.vtp_customData){var b=Ni(a.vtp_customData,"key","value");u.adroll_custom_data=b}a.vtp_segmentName&&(u.adroll_segments=a.vtp_segmentName);a.vtp_visitorEmail&&
(u.adroll_email=a.vtp_visitorEmail);u.__adroll_loaded=!0;var c=H("https://s","http://a",".adroll.com/j/roundtrip.js");L(c,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Y.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;f(Ni(n.vtp_fieldsToSet,"fieldName","value"),g);f(Ni(n.vtp_contentGroup,"index","group"),h);f(Ni(n.vtp_dimension,"index","dimension"),k);f(Ni(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=f(n);d=f(d,p)}f(Ni(d.vtp_fieldsToSet,"fieldName","value"),g);f(Ni(d.vtp_contentGroup,
"index","group"),h);f(Ni(d.vtp_dimension,"index","dimension"),k);f(Ni(d.vtp_metric,"index","metric"),l);var t=oe(d.vtp_functionName);if(ha(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Tc(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},x=function(R){var O=[].slice.call(arguments,0);O[0]=q+O[0];t.apply(window,O)},y=function(R,O){return void 0===O?O:R(O)},z=function(R,O){if(O)for(var na in O)O.hasOwnProperty(na)&&x("set",R+na,O[na])},B=function(){},A=function(R,O,na){var Va=0;if(R)for(var Ba in R)if(R.hasOwnProperty(Ba)&&(na&&v[Ba]||!na&&void 0===v[Ba])){var Wa=w[Ba]?ta(R[Ba]):R[Ba];"anonymizeIp"!=Ba||Wa||(Wa=void 0);O[Ba]=Wa;Va++}return Va},E={name:r};A(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);x("set","&gtm",uh(!0));d.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(R,O){void 0!==d[O]&&x("set",R,d[O])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var F={};A(g,F,!1)&&x("set",F);var I;
d.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var R=g&&g.hitCallback;ha(R)&&R();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());var S={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:y(String,d.vtp_eventLabel||e.label),eventValue:y(sa,d.vtp_eventValue||
e.value)};A(I,S,!1);x("send",S);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var X=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:X})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var Z="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:Z})}I?x("send","pageview",I):x("send","pageview");}if(!a){var ca=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ca="internal/"+ca);a=!0;var Ca=H("https:","http:","//www.google-analytics.com/"+ca,g&&g.forceSSL);L(Ca,function(){var R=me();R&&R.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else D(d.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.b="ua";Y.__ua.g=!0;Y.__ua.priorityOverride=0}();



Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Y.__gclidw=b;Y.__gclidw.b="gclidw";Y.__gclidw.g=!0;Y.__gclidw.priorityOverride=100})(function(b){D(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||
Vg())&&vi(a,h,k,l));ui(e,c,d);ph(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");wi(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();

Y.a.aev=["google"],function(){function a(q,r){var v=zd(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var x=q+"."+r,y;if(n.hasOwnProperty(x))y=n[x];else{var z=a(q,w);if(z&&(y=v(z),n[x]=y,p.push(x),35<p.length)){var B=p.shift();delete n[B]}}return y}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(mi());ka(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],x=0;x<r.length;x++)if(r[x]instanceof RegExp){if(r[x].test(q))return!1}else{var y=
r[x];if(0!=y.length){if(0<=e(q).indexOf(y))return!1;w.push(e(y))}}return!Mi(q,w)}function e(q){m.test(q)||(q="http://"+q);return hb(jb(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":return b(r,"FORM."+q,k)||v;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":return a(r,"interactedFormFieldPosition")||
v;case "INTERACT_SEQUENCE_NUMBER":return a(r,"interactSequenceNumber")||v;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Sa(q,"value");case "button":return Ta(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Bh(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Sa(w,r)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",
ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Y.__aev=q;Y.__aev.b="aev";Y.__aev.g=!0;Y.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var x=a(r,"element");return x&&x.tagName||v;case "TEXT":return b(r,
w,Ta)||v;case "URL":var y;a:{var z=String(a(r,"elementUrl")||v||""),B=jb(z),A=String(q.vtp_component||"URL");switch(A){case "URL":y=z;break a;case "IS_OUTBOUND":y=d(z,q.vtp_affiliatedDomains);break a;default:y=hb(B,A,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return y;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var F=q.vtp_attribute,I=a(r,"element");E=I&&Sa(I,F)||v||""}return E;case "MD":var S=q.vtp_mdValue,T=b(r,"MD",Wh);return S&&T?Zh(T,S)||v:T||v;case "FORM":return g(String(q.vtp_component||
"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();

Y.a.cegg=["nonGoogleScripts"],function(){var a={};(function(b){Y.__cegg=b;Y.__cegg.b="cegg";Y.__cegg.g=!0;Y.__cegg.priorityOverride=0})(function(b){try{var c=b.vtp_usersNumericId;if(c)if(a.hasOwnProperty(c)&&!0===a[c])b.vtp_gtmOnSuccess();else{b.vtp_snapshotName&&(u.CE_SNAPSHOT_NAME=b.vtp_snapshotName);for(var d=c.toString();8>d.length;)d="0"+d;var e=d.replace(/(\d+)(\d{4})$/,"/pages/scripts/$1/$2.js");L("//script.crazyegg.com"+e+"?"+Math.floor((new Date).getTime()/36E5),b.vtp_gtmOnSuccess,b.vtp_gtmOnFailure);
a[c]=!0}else D(b.vtp_gtmOnFailure)}catch(g){D(b.vtp_gtmOnFailure)}})}();
Y.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=M("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){he();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:uh()},m=function(t){return function(q,r,v){var w="DATA_LAYER"==t?qi(v):k[r];w&&(l[q]=w)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(t){return{value:t.price,quantity:t.quantity,item_id:t.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var p=!0;p&&b.push(l);a||(a=!0,L("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Y.__awct=h;Y.__awct.b="awct";Y.__awct.g=!0;Y.__awct.priorityOverride=0}();Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.b="smm";Y.__smm.g=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Ni(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.b="paused";Y.__paused.g=!0;Y.__paused.priorityOverride=0})(function(a){D(a.vtp_gtmOnFailure)})}();

Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,La(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){D(h)}}}var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Di(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Ac,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Ua(h),k,e)()}else ki(function(){c(d)},
200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0;Y.__html.priorityOverride=0}();



Y.a.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.b="img";Y.__img.g=!0;Y.__img.priorityOverride=0})(function(a){var b=Ua('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Li(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();



var qk={};qk.macro=function(a){if(bg.kc.hasOwnProperty(a))return bg.kc[a]},qk.onHtmlSuccess=bg.Hd(!0),qk.onHtmlFailure=bg.Hd(!1);qk.dataLayer=rd;qk.callback=function(a){Rc.hasOwnProperty(a)&&ha(Rc[a])&&Rc[a]();delete Rc[a]};qk.pf=function(){Ic[Hc.i]=qk;za(Sc,Y.a);Yb=Yb||bg;Zb=Rd};
qk.ag=function(){Xg.gtm_3pds=!0;Ic=u.google_tag_manager=u.google_tag_manager||{};if(Ic[Hc.i]){var a=Ic.zones;a&&a.unregisterChild(Hc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Qb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Tb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Sb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Rb.push(p)}Vb=Y;Wb=Gi;qk.pf();Ff();Ud=!1;Vd=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)Xd();else{Qa(C,"DOMContentLoaded",Xd);Qa(C,"readystatechange",Xd);if(C.createEventObject&&C.documentElement.doScroll){var q=!0;try{q=!u.frameElement}catch(x){}q&&Yd()}Qa(u,"load",Xd)}tf=!1;"complete"===C.readyState?vf():
Qa(u,"load",vf);a:{if(!gd)break a;u.setInterval(hd,864E5);}
Oc=(new Date).getTime();}};(0,qk.ag)();

})()
