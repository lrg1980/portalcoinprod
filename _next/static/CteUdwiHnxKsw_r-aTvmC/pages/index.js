(window.webpackJsonp=window.webpackJsonp||[]).push([["ce6e"],{RNiq:function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),c=a.n(n),r=a("O40h"),l=a("q1tI"),s=a.n(l),i=a("I0qz"),m=function(e){var t=e.precio,a=t.price,n=t.percent_change_1h,c=t.percent_change_7d,r=t.percent_change_24h;return s.a.createElement("div",{className:"card text-white bg-warning"},s.a.createElement("div",{className:"card-header text-center"},s.a.createElement("h3",null,"Precio del Bitcoin")),s.a.createElement("hr",{className:"w-100 m-0 p-0"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("h4",{className:"card-title text-center"},s.a.createElement("b",null,"Precio Actual : USD ",a)),s.a.createElement("div",{className:"d-md-flex justify-content-between"},s.a.createElement("p",{className:"card-text"},s.a.createElement("span",{className:"font-weight-bold"},"Última hora: "),n," %"),s.a.createElement("p",{className:"card-text"},s.a.createElement("span",{className:"font-weight-bold"},"Últimas 24 horas: "),r," %"),s.a.createElement("p",{className:"card-text"},s.a.createElement("span",{className:"font-weight-bold"},"Últimos 7 días: "),c," %"))))},o=function(e){var t=e.noticia,a=t.urlToImage,n=t.url,c=t.title,r=t.description,l=t.source,i=t.publishedAt,m="";return m=""!==a?s.a.createElement("img",{src:a,alt:c,className:"card-img-top"}):s.a.createElement("p",{className:"text-center my-5"}," Imagen no disponible "),s.a.createElement("div",{className:"col-md-6 col-12 mb-4"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-image"},m),s.a.createElement("div",{className:"card-body"},s.a.createElement("h3",{className:"card-title"},c),s.a.createElement("h4",{className:"card-text"},i),s.a.createElement("p",{className:"card-text"},r),s.a.createElement("p",{className:"card-text"},s.a.createElement("b",null,l.name)),s.a.createElement("a",{href:n,target:"_blank",className:"btn btn-primary d-block"},"Leer"))))},d=function(e){return s.a.createElement("div",{className:"row"},e.noticias.map(function(e){return s.a.createElement(o,{key:e.url,noticia:e})}))},u=a("pLtp"),p=a.n(u),E=function(e){var t=e.info,a=t.name,n=t.url,c=t.description,r=t.created,l=t.changed,i=a.text;i.length>150&&(i=i.substr(0,150)+"...");var m=c.text;return m&&(m=m.substr(0,250)+"..."),s.a.createElement("a",{href:n,target:"_blank",className:"list-group-item active text-light mb-1"},s.a.createElement("h3",{className:"mb-3"},i),s.a.createElement("p",null,"Creado el: ",r),s.a.createElement("p",{className:"mb-1"},m),s.a.createElement("p",null,"Última actualización: ",l))},h=function(e){var t=p()(e.eventos);return s.a.createElement("div",{className:"list-group"},t.map(function(t){return s.a.createElement(E,{key:t,info:e.eventos[t]})}))},v=a("zgjP"),N=a.n(v),f=function(e){return s.a.createElement(i.a,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement(m,{precio:e.precioBitcoin})),s.a.createElement("div",{className:"col-md-8"},s.a.createElement("h2",null,"Noticias Bitcoin"),s.a.createElement(d,{noticias:e.noticias})),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("h2",null,"Próximos Eventos Bitcoin"),s.a.createElement(h,{eventos:e.eventos}))))};f.getInitialProps=Object(r.default)(c.a.mark(function e(){var t,a,n,r,l,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()("https://api.coinmarketcap.com/v2/ticker/1/");case 2:return t=e.sent,e.next=5,N()("https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-03&sortBy=publishedAt&apiKey=b6befcf773db43efae73f7c59d23215b&language=es");case 5:return a=e.sent,e.next=8,N()("https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&location.address=Buenos+Aires&token=3OS7IYV3H7YNCTBU5GLJ");case 8:return n=e.sent,e.next=11,t.json();case 11:return r=e.sent,e.next=14,a.json();case 14:return l=e.sent,e.next=17,n.json();case 17:return s=e.sent,e.abrupt("return",{precioBitcoin:r.data.quotes.USD,noticias:l.articles,eventos:s.events});case 19:case"end":return e.stop()}},e)}));t.default=f},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])},zgjP:function(e,t,a){e.exports=window.fetch||(window.fetch=a("m/Gl").default||a("m/Gl"))}},[["vlRD","5d41","9da1"]]]);