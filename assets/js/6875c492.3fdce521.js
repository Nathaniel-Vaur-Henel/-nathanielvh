"use strict";(self.webpackChunknathaniel_vaur_henel_github_io=self.webpackChunknathaniel_vaur_henel_github_io||[]).push([[4813],{7713:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(1312),s=n(9022),i=n(4848);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.A,{permalink:n,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(s.A,{permalink:r,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(7131),s=n(8411),i=n(4848);function r(e){let{items:t,component:n=s.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.i,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},3069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});n(6540);var a=n(4164),s=n(1312),i=n(5846),r=n(5500),o=n(7559),l=n(8774),c=n(6535),g=n(7713),d=n(1463),u=n(3892),h=n(996),p=n(1107),m=n(4848);function x(e){const t=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.be,{title:n,description:t.description}),(0,m.jsx)(d.A,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:a,listMetadata:i}=e;const r=x(t);return(0,m.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,m.jsx)(h.A,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.A,{as:"h1",children:r}),t.description&&(0,m.jsx)("p",{children:t.description}),(0,m.jsx)(l.A,{href:t.allTagsPath,children:(0,m.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.A,{items:n}),(0,m.jsx)(g.A,{metadata:i})]})}function A(e){return(0,m.jsxs)(r.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogTagPostListPage),children:[(0,m.jsx)(j,{...e}),(0,m.jsx)(b,{...e})]})}},996:(e,t,n)=>{n.d(t,{A:()=>h});n(6540);var a=n(4164),s=n(1312),i=n(5260),r=n(4848);function o(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var g=n(7559),d=n(7293);function u(e){let{className:t}=e;return(0,r.jsx)(d.A,{type:"caution",title:(0,r.jsx)(o,{}),className:(0,a.A)(t,g.G.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}},8411:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(7131),s=n(4651),i=n(2171),r=n(5293),o=n(4848);function l(){const{colorMode:e}=(0,r.G)();return(0,o.jsx)(i.A,{repo:"nathaniel-vaur-henel/nathaniel-vaur-henel.github.io",repoId:"R_kgDOJH4Lgg",category:"General",categoryId:"DIC_kwDOJH4Lgs4CX",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy",crossorigin:"anonymous",async:!0})}function c(e){const{metadata:t,isBlogPostPage:n}=(0,a.e)(),{frontMatter:i}=t,{enableComments:r}=i;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{...e}),r&&n&&(0,o.jsx)(l,{})]})}}}]);