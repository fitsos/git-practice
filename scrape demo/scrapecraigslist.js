// $(document).ready(function() {
// 	console.log('ready');
//     $.ajax({
//             type: 'get',
//             url: 'http://proxy-rocketu.rhcloud.com/rocketu-api/', // DO NOT CHANGE
//             data: {
//                     url: 'https://sfbay.craigslist.org/sby/mob/4176116596.html', // Actual URL for API call

// 					// This IP has been automatically blocked.
// 					// Questions: blocks-b13579355253728@craigslist.org.
//             },
//             dataType: 'html',
//             success: function(html) {
//                     console.log(html);
//             },
//             error: function(err) {
//                     console.log(err);
//             }
//     });
// });
$(document).ready(function() {
	console.log('ready');
    $.ajax({
            type: 'get',
            url: 'https://sfbay.craigslist.org/sby/mob/4176116596.html', // DO NOT CHANGE
            dataType: 'html',
            success: function(html) {
                    console.log(html);
            },
            error: function(err) {
                    console.log(err);
            }
    });
});
ready scrapecraigslist.js:22
XMLHttpRequest cannot load https://sfbay.craigslist.org/sby/mob/4176116596.html. Origin null is not allowed by Access-Control-Allow-Origin. scrapecraigslist.html:1
Object {readyState: 0, setRequestHeader: function, getAllResponseHeaders: function, getResponseHeader: function, overrideMimeType: function…}
abort: function (a){a=a||"abort",p&&p.abort(a),w(0,a);return this}
always: function (){return b.done.apply(b,arguments).fail.apply(this,arguments)}
complete: function (){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this}
done: function (){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this}
error: function (){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this}
fail: function (){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this}
getAllResponseHeaders: function (){return s===2?n:null}
getResponseHeader: function (a){var c;if(s===2){if(!o){o={};while(c=bD.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c}
isRejected: function (){return!!c||!!b}
isResolved: function (){return!!c||!!b}
overrideMimeType: function (a){s||(d.mimeType=a);return this}
pipe: function (a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g+"With"](this===b?d:this,[h])}):b[a](d[g])})}).promise()}
promise: function (a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}
readyState: 0
responseText: ""
setRequestHeader: function (a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this}
status: 0
statusCode: function (a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this}
statusText: "error"
success: function (){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this}
then: function (a,c){b.done(a).fail(c);return this}
__proto__: Object