import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, f as addAttribute, d as createAstro, k as renderSlot, l as renderTransition, n as renderHead } from './astro/server_DbFupAXm.mjs';
import 'kleur/colors';
/* empty css                             */
import 'clsx';
import { a as getImage } from './_astro_assets_C20IXeGa.mjs';

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed top-0 left-0 right-0 z-50 bg-base-200"> <div class="navbar container mx-auto w-full justify-between text-gray-200"> <div class="navbar-start lg:hidden"> <div class="dropdown"> <div tabindex="0" role="button" class="btn btn-ghost"> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "menu", "class": "text-3xl text-primary" })} </div> <ul tabindex="0" class="menu menu-lg dropdown-content bg-base-300 rounded-box mt-4 w-64 z-[1] p-2 shadow text-gray-300"> <li><a href="/">${renderComponent($$result, "ion-icon", "ion-icon", { "name": "home" })}Home</a></li> <li><a href="/projects">${renderComponent($$result, "ion-icon", "ion-icon", { "name": "briefcase" })}Projects</a></li> <li><a href="/career">${renderComponent($$result, "ion-icon", "ion-icon", { "name": "person" })}Career</a></li> <li><a href="/biography">${renderComponent($$result, "ion-icon", "ion-icon", { "name": "book" })}About</a></li> </ul> </div> </div> <div class="navbar-center lg:navbar-start"> <a class="btn btn-ghost p-2" href="/"> <img src="/tb-logo.png" alt="Tigran Logo" class="h-full"> </a> </div> <div class="navbar-end"> <div class="hidden lg:flex"> <ul class="menu menu-horizontal px-1 font-light text-lg gap-4 lg:gap-6 xl:gap-8"> <li><a href="/">
Home
</a></li> <li><a href="/projects">Projects</a></li> <li><a href="/career">Career</a></li> <li><a href="/biography">About</a></li> </ul> </div> <a href="/projects" class="btn btn-ghost lg:hidden"> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "briefcase", "class": "text-3xl text-primary" })} </a> </div> </div> </div>`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/components/Navigation.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer container mx-auto w-full p-6"> <div class="flex flex-col lg:flex-row lg:justify-between items-center w-full"> <div class="flex flex-col w-full lg:w-auto"> <h2 class="text-xl font-bold mb-4 text-center lg:hidden">
Contact Information
</h2> <div class="flex flex-col lg:flex-row gap-4"> <div class="flex items-center gap-2 w-full lg:w-auto"> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "mail", "class": "text-2xl text-primary" })} <h3 class="text-lg font-semibold">Email:</h3> <a href="mailto:tigranbalayan@me.com" class="hover:underline hover:text-primary">tigranbalayan@me.com</a> </div> <div class="flex items-center gap-2 w-full lg:w-auto"> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "call", "class": "text-2xl text-primary" })} <h3 class="text-lg font-semibold">Phone:</h3> <a href="tel:8189132117" class="hover:underline hover:text-primary">818-913-2117</a> </div> <div class="flex items-center gap-2 w-full lg:w-auto"> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "location", "class": "text-2xl text-primary" })} <h3 class="text-lg font-semibold">Location:</h3> <p>Burbank, California</p> </div> </div> </div> <nav class="flex flex-row mt-6 lg:mt-0"> <a href="https://github.com/TigranBalayan10" target="_blank"> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "logo-github", "class": "btn btn-link text-4xl text-primary transition-transform duration-300 hover:-translate-y-2" })} </a> <a href="https://www.linkedin.com/in/tigran-balayan-33768a132/" target="_blank"> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "logo-linkedin", "class": "btn btn-link text-4xl text-primary transition-transform duration-300 hover:-translate-y-2" })} </a> <a href="https://www.x.com/tiko_102" target="_blank"> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "logo-twitter", "class": "btn btn-link text-4xl text-primary transition-transform duration-300 hover:-translate-y-2" })} </a> <a href="https://www.facebook.com/tigran.balayan.1" target="_blank"> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "logo-facebook", "class": "btn btn-link text-4xl text-primary transition-transform duration-300 hover:-translate-y-2" })} </a> </nav> </div> </footer>`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const ogImage = new Proxy({"src":"/_astro/og-image.Cfw3ZgJ2.png","width":1200,"height":630,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/images/og-image.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Tigran Balayan - Software Engineer Portfolio",
    description = "Explore Tigran Balayan's professional journey in software engineering. Discover projects, skills, and experiences that showcase expertise in web development and technology.",
    image = ogImage,
    type = "website",
    canonicalURL
  } = Astro2.props;
  new URL(Astro2.request.url).pathname;
  const resolvedCanonicalURL = canonicalURL ? typeof canonicalURL === "string" ? canonicalURL : canonicalURL.toString() : Astro2.site ? new URL(Astro2.url.pathname, Astro2.site).toString() : Astro2.url.href;
  const optimizedOgImage = await getImage({
    src: image,
    width: 1200,
    height: 630
  });
  return renderTemplate(_a || (_a = __template(['<html data-theme="tikotheme" lang="en"> <head><meta charset="UTF-8">', '<meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"><script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"><\/script><script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"><\/script><meta name="generator"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Canonical URL --><link rel="canonical"', "><title>", '</title><!-- Structured Data --><script type="application/ld+json">\n      {JSON.stringify({\n        "@context": "https://schema.org",\n        "@type": "Person",\n        "name": "Tigran Balayan",\n        "jobTitle": "Software Engineer",\n        "description": description,\n        "url": resolvedCanonicalURL,\n        "image": optimizedOgImage.src,\n        "sameAs": [\n          "https://github.com/TigranBalayan10",\n          "https://www.linkedin.com/in/tigran-balayan-33768a132/",\n          "https://www.x.com/tiko_102",\n          "https://www.facebook.com/tigran.balayan.1"\n        ]\n      })}\n    <\/script>', '</head> <body class="min-h-screen flex flex-col"> ', ' <main class="flex-grow pt-24"', "> ", " </main> ", " </body></html>"])), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), addAttribute(Astro2.generator, "content"), addAttribute(type, "content"), addAttribute(resolvedCanonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(optimizedOgImage.src, "content"), addAttribute(resolvedCanonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(optimizedOgImage.src, "content"), addAttribute(resolvedCanonicalURL, "href"), title, renderHead(), renderComponent($$result, "Navigation", $$Navigation, {}), addAttribute(renderTransition($$result, "f5ka2bjm"), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/layouts/Layout.astro", "self");

export { $$Layout as $ };
