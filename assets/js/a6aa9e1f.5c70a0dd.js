"use strict";(self.webpackChunknathaniel_vaur_henel_github_io=self.webpackChunknathaniel_vaur_henel_github_io||[]).push([[7643],{5124:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(6540);var a=n(4164),i=n(4586),o=n(5500),r=n(7559),s=n(6535),l=n(7713),d=n(1463),c=n(3892),g=n(5260),u=n(6676),m=n(4848);function p(e){const t=(0,u.k)(e);return(0,m.jsx)(g.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,i.A)(),{blogDescription:a,blogTitle:r,permalink:s}=t,l="/"===s?n:r;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.be,{title:l,description:a}),(0,m.jsx)(d.A,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:n,sidebar:a}=e;return(0,m.jsxs)(s.A,{sidebar:a,children:[(0,m.jsx)(c.A,{items:n}),(0,m.jsx)(l.A,{metadata:t})]})}function f(e){return(0,m.jsxs)(o.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogListPage),children:[(0,m.jsx)(h,{...e}),(0,m.jsx)(p,{...e}),(0,m.jsx)(b,{...e})]})}},7713:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(1312),i=n(9022),o=n(4848);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,o.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,o.jsx)(i.A,{permalink:n,title:(0,o.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,o.jsx)(i.A,{permalink:r,title:(0,o.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(7131),i=n(8411),o=n(4848);function r(e){let{items:t,component:n=i.A}=e;return(0,o.jsx)(o.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,o.jsx)(a.i,{content:t,children:(0,o.jsx)(n,{children:(0,o.jsx)(t,{})})},t.metadata.permalink)}))})}},6676:(e,t,n)=>{n.d(t,{k:()=>c,J:()=>g});var a=n(6025),i=n(4586),o=n(6803);var r=n(7131);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function d(e,t,n){return e?{image:m({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function c(e){const{siteConfig:t}=(0,i.A)(),{withBaseUrl:n}=(0,a.h)(),{metadata:{blogDescription:o,blogTitle:r,permalink:c}}=e,g=`${t.url}${c}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:r,description:o,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:o}=e,{date:r,title:c,description:g,lastUpdatedAt:u}=o,m=a.image??i.image,p=i.keywords??[],h=`${t.url}${o.permalink}`,b=u?s(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:c,name:c,description:g,datePublished:r,...b?{dateModified:b}:{},...l(o.authors),...d(m,n,c),...p?{keywords:p}:{}}}(e.content,t,n)))}}function g(){const e=function(){const e=(0,o.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,r.e)(),{siteConfig:c}=(0,i.A)(),{withBaseUrl:g}=(0,a.h)(),{date:u,title:m,description:p,frontMatter:h,lastUpdatedAt:b}=n,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,A=`${c.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":A,mainEntityOfPage:A,url:A,headline:m,name:m,description:p,datePublished:u,...j?{dateModified:j}:{},...l(n.authors),...d(f,g,m),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${c.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function m(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},8411:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var a=n(7131),i=n(4651),o=n(2171),r=n(5293),s=n(4848);function l(){const{colorMode:e}=(0,r.G)();return(0,s.jsx)(o.A,{repo:"nathaniel-vaur-henel/nathaniel-vaur-henel.github.io",repoId:"R_kgDOJH4Lgg",category:"General",categoryId:"DIC_kwDOJH4Lgs4CX",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy",crossorigin:"anonymous",async:!0})}function d(e){const{metadata:t,isBlogPostPage:n}=(0,a.e)(),{frontMatter:o}=t,{enableComments:r}=o;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{...e}),r&&n&&(0,s.jsx)(l,{})]})}}}]);