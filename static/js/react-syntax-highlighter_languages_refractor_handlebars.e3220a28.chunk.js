"use strict";(self.webpackChunkportfol=self.webpackChunkportfol||[]).push([[3846,3047],{4490:(e,n,a)=>{var t=a(595);function r(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")})),e.languages.hbs=e.languages.handlebars}(e)}e.exports=r,r.displayName="handlebars",r.aliases=["hbs"]},595:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,r,s){if(a.language===t){var o=a.tokenStack=[];a.code=a.code.replace(r,(function(e){if("function"===typeof s&&!s(e))return e;for(var r,l=o.length;-1!==a.code.indexOf(r=n(t,l));)++l;return o[l]=e,r})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var r=0,s=Object.keys(a.tokenStack);!function o(l){for(var i=0;i<l.length&&!(r>=s.length);i++){var u=l[i];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=s[r],p=a.tokenStack[c],g="string"===typeof u?u:u.content,f=n(t,c),d=g.indexOf(f);if(d>-1){++r;var k=g.substring(0,d),b=new e.Token(t,e.tokenize(p,a.grammar),"language-"+t,p),h=g.substring(d+f.length),m=[];k&&m.push.apply(m,o([k])),m.push(b),h&&m.push.apply(m,o([h])),"string"===typeof u?l.splice.apply(l,[i,1].concat(m)):u.content=m}}else u.content&&o(u.content)}return l}(a.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.e3220a28.chunk.js.map