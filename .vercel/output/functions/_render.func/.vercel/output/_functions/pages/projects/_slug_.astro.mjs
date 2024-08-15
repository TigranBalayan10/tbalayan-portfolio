/* empty css                                        */
import { a as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DbFupAXm.mjs';
import 'kleur/colors';
import { g as getEntryBySlug } from '../../chunks/_astro_content_BvvYeW8Y.mjs';
import { $ as $$Layout } from '../../chunks/Layout_D9h5l57-.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (typeof slug !== "string") {
    return Astro2.redirect("/404");
  }
  const entry = await getEntryBySlug("projects", slug);
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="prose prose-lg overflow-visible p-14 mx-auto max-w-6xl mb-16"> ${renderComponent($$result2, "Content", Content, {})} </div> ` })}`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/projects/[slug].astro", void 0);

const $$file = "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
