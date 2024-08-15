import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_DSeExW9U.mjs';
import { g as decodeKey } from './chunks/astro/server_DPK4Zyq3.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/tigra/Documents/My%20Projects/tbalayan-portfolio/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bnwyq7gc.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/biography.KO5L3Omd.css"}],"routeData":{"route":"/biography","isIndex":false,"type":"page","pattern":"^\\/biography\\/?$","segments":[[{"content":"biography","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/biography.astro","pathname":"/biography","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bnwyq7gc.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/biography.KO5L3Omd.css"}],"routeData":{"route":"/career","isIndex":false,"type":"page","pattern":"^\\/career\\/?$","segments":[[{"content":"career","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/career.astro","pathname":"/career","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bnwyq7gc.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/biography.KO5L3Omd.css"}],"routeData":{"route":"/projects/[slug]","isIndex":false,"type":"page","pattern":"^\\/projects\\/([^/]+?)\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/projects/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bnwyq7gc.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/biography.KO5L3Omd.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bnwyq7gc.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/biography.KO5L3Omd.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/biography.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/biography@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/career.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/career@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/projects/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/projects/[slug]@_@astro":"pages/projects/_slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/biography@_@astro":"pages/biography.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/career@_@astro":"pages/career.astro.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/biography/bio-events.mdx?astroContentCollectionEntry=true":"chunks/bio-events_BMjp4cMX.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/career/skills.mdx?astroContentCollectionEntry=true":"chunks/skills_CKryvRyp.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/projects/assure-guard.mdx?astroContentCollectionEntry=true":"chunks/assure-guard_DqSd6rEU.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/projects/bm-limo.mdx?astroContentCollectionEntry=true":"chunks/bm-limo_BoQRFK7g.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/projects/m-fest.mdx?astroContentCollectionEntry=true":"chunks/m-fest_B1nsID78.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/projects/proper-management.mdx?astroContentCollectionEntry=true":"chunks/proper-management_DhTmpv-u.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/biography/bio-events.mdx?astroPropagatedAssets":"chunks/bio-events_DrzlFvhG.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/career/skills.mdx?astroPropagatedAssets":"chunks/skills_DOYjHgQP.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/projects/assure-guard.mdx?astroPropagatedAssets":"chunks/assure-guard_C9-Sp-55.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/projects/bm-limo.mdx?astroPropagatedAssets":"chunks/bm-limo_CdcfWUv8.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/projects/m-fest.mdx?astroPropagatedAssets":"chunks/m-fest_BodaC5Vc.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/projects/proper-management.mdx?astroPropagatedAssets":"chunks/proper-management_DHi91c2Z.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/biography/bio-events.mdx":"chunks/bio-events_CpsP_E2s.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/career/skills.mdx":"chunks/skills_to4PqOVu.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/projects/assure-guard.mdx":"chunks/assure-guard_CMVGd23W.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/projects/bm-limo.mdx":"chunks/bm-limo_DnrrEumQ.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/projects/m-fest.mdx":"chunks/m-fest_CreTmY9r.mjs","C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/projects/proper-management.mdx":"chunks/proper-management_8JLzCA63.mjs","\u0000@astrojs-manifest":"manifest_CK4HM0Ud.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Bnwyq7gc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/og-image.Cfw3ZgJ2.png","/_astro/hero-img.Br8KWj9C.png","/_astro/biography.KO5L3Omd.css","/favicon.svg","/tb-logo.png","/assets/cv.pdf","/books/1984.png","/books/crime_and_punishment.png","/books/metro_2033.png","/books/the_godfather_book.png","/hobbies/cooking.png","/hobbies/driving.png","/hobbies/football.png","/hobbies/gaming.png","/flags/armenia.svg","/flags/italy.svg","/flags/russia.svg","/flags/uk.svg","/images/assureguard-hero.png","/images/beverly-motors-hero.png","/images/john-doe-baby-boy.png","/images/john-doe-second-daughter.png","/images/m-fest-hero.png","/images/proper-management-hero.png","/images/tigran-birth.png","/images/tigran-first-daughter.png","/images/tigran-first-house.png","/images/tigran-military-service.png","/images/tigran-move-to-us.png","/images/tigran-school.png","/images/tigran-university-graduation.png","/images/tigran-wedding.png","/images/tiko-high-school-graduation.png","/logos/bm-limo.png","/logos/Computer-logo.png","/logos/got-print.png","/logos/SEUA-logo.png","/logos/tb-logo.png","/logos/UCLA.png","/movies/matrix.png","/movies/the_dark_knight.png","/movies/the_godfather_movie.png","/movies/the_jackal.png","/_astro/hoisted.Bnwyq7gc.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"ouVuUe3TElTLT5238AUkeBi2JCJ5dB+Vfk6Qh4u2v2w=","experimentalEnvGetSecretEnabled":false});

export { manifest };
