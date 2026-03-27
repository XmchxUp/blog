globalThis.process ??= {}; globalThis.process.env ??= {};
import { r as renderers } from './chunks/_@astro-renderers_BE5Pvd3t.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_IcvCwsft.mjs';
import { manifest } from './manifest_BT3ydTtV.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/wakatime.astro.mjs');
const _page3 = () => import('./pages/archives/_slug_.astro.mjs');
const _page4 = () => import('./pages/archives.astro.mjs');
const _page5 = () => import('./pages/categories/_slug_.astro.mjs');
const _page6 = () => import('./pages/categories.astro.mjs');
const _page7 = () => import('./pages/hobby_project.astro.mjs');
const _page8 = () => import('./pages/page/_page_.astro.mjs');
const _page9 = () => import('./pages/post/_---slug_.astro.mjs');
const _page10 = () => import('./pages/search.astro.mjs');
const _page11 = () => import('./pages/tags/_slug_.astro.mjs');
const _page12 = () => import('./pages/tags.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/@astrojs+cloudflare@12.6.13_astro@5.18.1_jiti@1.21.7_rollup@4.60.0_typescript@5.9.3_yaml@2.8.3__jiti@1.21.7_yaml@2.8.3/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/wakatime.ts", _page2],
    ["src/pages/archives/[slug].astro", _page3],
    ["src/pages/archives/index.astro", _page4],
    ["src/pages/categories/[slug].astro", _page5],
    ["src/pages/categories/index.astro", _page6],
    ["src/pages/hobby_project.astro", _page7],
    ["src/pages/page/[page].astro", _page8],
    ["src/pages/post/[...slug].astro", _page9],
    ["src/pages/search.astro", _page10],
    ["src/pages/tags/[slug].astro", _page11],
    ["src/pages/tags/index.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
