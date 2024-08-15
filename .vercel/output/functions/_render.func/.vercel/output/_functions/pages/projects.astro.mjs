/* empty css                                     */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, b as renderComponent, d as createAstro } from '../chunks/astro/server_DPK4Zyq3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Co-kQNyo.mjs';
import { $ as $$Icon } from '../chunks/Icon_BEMwHVqH.mjs';
import { g as getCollection } from '../chunks/_astro_content_BRCH8A8C.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { projects } = Astro2.props;
  return renderTemplate`${projects.map((project) => renderTemplate`${maybeRenderHead()}<div class="card bg-base-200 max-lg:w-96 shadow-xl"><figure><div class="mockup-browser bg-base-300 rounded-none"><div class="mockup-browser-toolbar"><div class="input">${project.data.link}</div></div><div class="bg-base-200 flex justify-center"><img${addAttribute(project.data.hero, "src")}${addAttribute(project.data.title, "alt")} class="object-contain w-full h-full"></div></div></figure><div class="card-body"><h2 class="card-title">${project.data.title}</h2><p class="line-clamp-3">${project.data.description}</p><div class="flex gap-2 justify-end">${project.data.icons.map((icon) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-8 h-8" })}`)}</div><div class="card-actions justify-end mt-2"><a${addAttribute(project.data.link, "href")} target="_blank" class="btn btn-outline btn-primary">
Website
</a><a${addAttribute(`/projects/${project.slug}`, "href")} class="btn btn-outline btn-primary">
Details
</a><a${addAttribute(project.data.github, "href")} target="_blank" class="btn btn-outline btn-primary">${renderComponent($$result, "ion-icon", "ion-icon", { "name": "logo-github", "class": "text-3xl" })}</a></div><h1 class="text-end text-sm mt-2 italic">Created: ${project.data.pubDate}</h1></div></div>`)}`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/components/ProjectCard.astro", void 0);

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  const sortedProjects = projects.sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto"> <div class="text-center"> <h1 class="text-4xl font-bold">Projects</h1> <p class="text-lg">Check out some of my latest projects!</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 mx-24 justify-items-center"> ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "projects": sortedProjects })} </div> </div> ` })}`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/projects.astro", void 0);

const $$file = "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
