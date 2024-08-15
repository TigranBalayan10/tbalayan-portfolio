/* empty css                                     */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, b as renderComponent, d as createAstro } from '../chunks/astro/server_DPK4Zyq3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Co-kQNyo.mjs';
import { g as getCollection } from '../chunks/_astro_content_CHnKJ8nb.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { timelineEvents } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical m-4"> ${timelineEvents.map((event, index) => renderTemplate`<li${addAttribute(index % 2 === 0 ? "timeline-left" : "timeline-right", "class")}> <div class="timeline-middle"> ${renderComponent($$result, "ion-icon", "ion-icon", { "class": "text-primary text-xl", "name": event.icon })} </div> <div${addAttribute(`mb-10 ${index % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"}`, "class")}> <div class="mt-0.5"> <time class="font-mono italic text-primary">${event.year}</time> </div> <div class="avatar"> <div class="w-32 rounded m-3"> <img${addAttribute(event.image, "src")}${addAttribute(event.title, "alt")}> </div> </div> <div class="text-lg font-black text-primary m-3">${event.title}</div> <div${addAttribute(index % 2 === 0 ? "chat chat-end max-md:chat-start" : "chat chat-start", "class")}> <div class="chat-bubble bg-slate-600"> <p>${event.description}</p> </div> </div> </div> <hr class="bg-secondary"> </li>`)} </ul>`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/components/Timeline.astro", void 0);

const $$Biography = createComponent(async ($$result, $$props, $$slots) => {
  const timeline = await getCollection("biography");
  const timelineEvents = timeline.flatMap((entry) => entry.data.timelineEvents);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Biography" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto"> <div class="text-center"> <h1 class="text-4xl font-bold">About Me</h1> <p class="text-lg">A brief history of my life</p> </div> ${renderComponent($$result2, "Timeline", $$Timeline, { "timelineEvents": timelineEvents })} </div> ` })}`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/biography.astro", void 0);

const $$file = "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/biography.astro";
const $$url = "/biography";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Biography,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
