import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CGDIu84I.mjs';
import { manifest } from './manifest_Ede2Qlut.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/aboutus.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/burning.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/faq.astro.mjs');
const _page6 = () => import('./pages/funservices.astro.mjs');
const _page7 = () => import('./pages/necesidad-inmediata.astro.mjs');
const _page8 = () => import('./pages/optional.astro.mjs');
const _page9 = () => import('./pages/ponline.astro.mjs');
const _page10 = () => import('./pages/preneed.astro.mjs');
const _page11 = () => import('./pages/sitemap.xml.astro.mjs');
const _page12 = () => import('./pages/slots.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/aboutus.astro", _page1],
    ["src/pages/api/contact.js", _page2],
    ["src/pages/burning.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/faq.astro", _page5],
    ["src/pages/funservices.astro", _page6],
    ["src/pages/necesidad-inmediata.astro", _page7],
    ["src/pages/optional.astro", _page8],
    ["src/pages/ponline.astro", _page9],
    ["src/pages/preneed.astro", _page10],
    ["src/pages/sitemap.xml.ts", _page11],
    ["src/pages/slots.astro", _page12],
    ["src/pages/index.astro", _page13]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d708d0f9-43a4-4ce2-9072-13f2a9b04266",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
