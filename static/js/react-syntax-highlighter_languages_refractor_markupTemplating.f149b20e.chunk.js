"use strict";(self.webpackChunkportfol=self.webpackChunkportfol||[]).push([[3047],{595:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var u=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,c=u.length;-1!==t.code.indexOf(o=n(a,c));)++c;return u[c]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function u(c){for(var i=0;i<c.length&&!(o>=r.length);i++){var l=c[i];if("string"===typeof l||l.content&&"string"===typeof l.content){var p=r[o],s=t.tokenStack[p],f="string"===typeof l?l:l.content,g=n(a,p),k=f.indexOf(g);if(k>-1){++o;var h=f.substring(0,k),m=new e.Token(a,e.tokenize(s,t.grammar),"language-"+a,s),d=f.substring(k+g.length),y=[];h&&y.push.apply(y,u([h])),y.push(m),d&&y.push.apply(y,u([d])),"string"===typeof l?c.splice.apply(c,[i,1].concat(y)):l.content=y}}else l.content&&u(l.content)}return c}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.f149b20e.chunk.js.map