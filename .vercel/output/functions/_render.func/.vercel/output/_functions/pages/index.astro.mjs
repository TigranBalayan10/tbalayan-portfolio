/* empty css                                     */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_DPK4Zyq3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Co-kQNyo.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_iniJxosI.mjs';
import { h as heroImage } from '../chunks/hero-img_DQTheGGp.mjs';
import { $ as $$Icon } from '../chunks/Icon_BEMwHVqH.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hero w-full max-lg:px-5 justify-center"> <div class="hero-content max-w-6xl flex-col lg:flex-row-reverse"> <div class="m-5 max-lg:mx-0"> ${renderComponent($$result, "Image", $$Image, { "src": heroImage, "class": "max-w-xs max-lg:max-w-60 rounded-lg shadow-2xl mx-auto lg:mx-0", "alt": "Personal Photo" })} </div> <div class="lg:w-1/2"> <h1 class="text-4xl lg:text-5xl font-bold max-lg:text-center">
Full Stack Web Developer
</h1> <p class="py-6 text-lg">
I'm a versatile full stack web developer with expertise in creating
        dynamic and responsive web applications. From front-end design to
        back-end functionality, I deliver seamless user experiences and robust
        solutions. Explore my projects to see my proficiency in various web
        technologies and frameworks. Learn more about my journey and significant
        milestones in my biography timeline. Discover my professional experience
        and download my resume in the career section. Let's collaborate and
        bring your web ideas to life!
</p> <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"> <a href="/projects" class="btn btn-primary">Explore Projects</a> <a href="/career" class="btn btn-secondary">Explore Career</a> </div> </div> </div> </div>`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/components/Hero.astro", void 0);

const $$TechStack = createComponent(($$result, $$props, $$slots) => {
  const icons = [
    "skill-icons:javascript",
    "skill-icons:typescript",
    "skill-icons:html",
    "skill-icons:react-light",
    "skill-icons:nextjs-light",
    "skill-icons:nodejs-light",
    "skill-icons:expressjs-light",
    "skill-icons:postgresql-light",
    "skill-icons:mongodb",
    "skill-icons:github-light",
    "skill-icons:astro",
    "skill-icons:tailwindcss-light",
    "skill-icons:graphql-light",
    "skill-icons:mysql-light"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="container"> <h1 class="text-4xl text-center mb-5 font-bold">Tech Stack I work with</h1> <div class="flex flex-wrap justify-center gap-4 mx-4"> ${icons.map((icon) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-14 h-14 max-lg:w-10 max-lg:h-10", "aria-label": icon })}`)} </div> </div>`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/components/TechStack.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tigran's Portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col container mx-auto m-5 gap-y-8"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "TechStack", $$TechStack, {})} </main> ` })}`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
