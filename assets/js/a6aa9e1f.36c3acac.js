"use strict";(self.webpackChunknathaniel_vaur_henel_github_io=self.webpackChunknathaniel_vaur_henel_github_io||[]).push([[3089],{4351:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(7294);var a=n(512),i=n(2263),o=n(1667),r=n(5281),s=n(1460),l=n(9703),d=n(197),c=n(9985),g=n(5742),u=n(136),m=n(5893);function p(e){const t=(0,u.C)(e);return(0,m.jsx)(g.Z,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,i.Z)(),{blogDescription:a,blogTitle:r,permalink:s}=t,l="/"===s?n:r;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.d,{title:l,description:a}),(0,m.jsx)(d.Z,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:n,sidebar:a}=e;return(0,m.jsxs)(s.Z,{sidebar:a,children:[(0,m.jsx)(c.Z,{items:n}),(0,m.jsx)(l.Z,{metadata:t})]})}function f(e){return(0,m.jsxs)(o.FG,{className:(0,a.Z)(r.k.wrapper.blogPages,r.k.page.blogListPage),children:[(0,m.jsx)(h,{...e}),(0,m.jsx)(p,{...e}),(0,m.jsx)(b,{...e})]})}},9703:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var a=n(5999),i=n(2244),o=n(5893);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,o.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,o.jsx)(i.Z,{permalink:n,title:(0,o.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,o.jsx)(i.Z,{permalink:r,title:(0,o.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var a=n(9460),i=n(4614),o=n(5893);function r(e){let{items:t,component:n=i.Z}=e;return(0,o.jsx)(o.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,o.jsx)(a.n,{content:t,children:(0,o.jsx)(n,{children:(0,o.jsx)(t,{})})},t.metadata.permalink)}))})}},136:(e,t,n)=>{n.d(t,{C:()=>c,i:()=>g});var a=n(4996),i=n(2263),o=n(5102);var r=n(9460);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function d(e,t,n){return e?{image:m({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function c(e){const{siteConfig:t}=(0,i.Z)(),{withBaseUrl:n}=(0,a.C)(),{metadata:{blogDescription:o,blogTitle:r,permalink:c}}=e,g=`${t.url}${c}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:r,description:o,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:o}=e,{date:r,title:c,description:g,lastUpdatedAt:u}=o,m=a.image??i.image,p=i.keywords??[],h=`${t.url}${o.permalink}`,b=u?s(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:c,name:c,description:g,datePublished:r,...b?{dateModified:b}:{},...l(o.authors),...d(m,n,c),...p?{keywords:p}:{}}}(e.content,t,n)))}}function g(){const e=function(){const e=(0,o.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,r.C)(),{siteConfig:c}=(0,i.Z)(),{withBaseUrl:g}=(0,a.C)(),{date:u,title:m,description:p,frontMatter:h,lastUpdatedAt:b}=n,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,v=`${c.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:m,name:m,description:p,datePublished:u,...j?{dateModified:j}:{},...l(n.authors),...d(f,g,m),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${c.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function m(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},4614:(e,t,n)=>{n.d(t,{Z:()=>d});n(7294);var a=n(9460),i=n(3665),o=n(24),r=n(2949),s=n(5893);function l(){const{colorMode:e}=(0,r.I)();return(0,s.jsx)(o.Z,{repo:"nathaniel-vaur-henel/nathaniel-vaur-henel.github.io",repoId:"R_kgDOJH4Lgg",category:"General",categoryId:"DIC_kwDOJH4Lgs4CX",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy",crossorigin:"anonymous",async:!0})}function d(e){const{metadata:t,isBlogPostPage:n}=(0,a.C)(),{frontMatter:o}=t,{enableComments:r}=o;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{...e}),r&&n&&(0,s.jsx)(l,{})]})}}}]);