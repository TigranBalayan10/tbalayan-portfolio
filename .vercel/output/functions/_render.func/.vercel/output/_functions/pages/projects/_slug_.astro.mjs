/* empty css                                        */
import { a as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DPK4Zyq3.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_QJQ82sHc.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Co-kQNyo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="prose prose-lg overflow-visible p-14 mx-auto max-w-6xl mb-16"> ${renderComponent($$result2, "Content", Content, {})} </div> ` })}`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/projects/[slug].astro", void 0);

const $$file = "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
