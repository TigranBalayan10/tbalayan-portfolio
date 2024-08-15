import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CLJZ-2eG.mjs';
import { manifest } from './manifest_BMBQT0_M.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/biography.astro.mjs');
const _page2 = () => import('./pages/career.astro.mjs');
const _page3 = () => import('./pages/projects/_slug_.astro.mjs');
const _page4 = () => import('./pages/projects.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/biography.astro", _page1],
    ["src/pages/career.astro", _page2],
    ["src/pages/projects/[slug].astro", _page3],
    ["src/pages/projects.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "40c3a572-2bf4-4624-9d48-da2c0a2ef324",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
