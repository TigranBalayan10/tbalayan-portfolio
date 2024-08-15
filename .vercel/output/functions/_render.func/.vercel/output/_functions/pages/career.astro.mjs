/* empty css                                     */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, f as addAttribute, d as createAstro, F as Fragment } from '../chunks/astro/server_DbFupAXm.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D9h5l57-.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_C20IXeGa.mjs';
import { h as heroImage } from '../chunks/hero-img_DQTheGGp.mjs';
import { $ as $$Icon } from '../chunks/Icon_DEfc42Vh.mjs';
import 'clsx';
import { a as getCollection } from '../chunks/_astro_content_BvvYeW8Y.mjs';
export { renderers } from '../renderers.mjs';

const $$CareerCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="card lg:card-side bg-base-200 shadow-xl mx-24  max-lg:mx-4 p-2"> <div class="flex flex-col justify-start px-8  pt-8"> <figure class="mb-4"> ${renderComponent($$result, "Image", $$Image, { "src": heroImage, "alt": "Tigran photo", "class": "w-full  h-auto object-cover max-lg:p-10 rounded-lg shadow-2xl", "height": 280 })} </figure> <a href="/assets/cv.pdf" download class="btn btn-outline btn-primary w-full">Download CV</a> </div> <div class="card-body lg:w-3/4"> <div class="mb-3"> <h2 class="text-4xl font-semibold">Tigran Balayan</h2> <p class="text-lg italic">Full Stack Web Developer</p> </div> <div class="grid lg:grid-cols-2 grid-cols-1 gap-2 mb-4"> <div class="text-lg font-semibold space-x-2"> <span>Phone:</span> <a href="tel:+8189132117" class="font-normal hover:underline hover:text-primary break-words"> <span>818-913-2117</span> </a> </div> <div class="text-lg font-semibold space-x-2"> <span>Location:</span> <span class="font-normal">Burbank, CA</span> </div> <div class="text-lg font-semibold space-x-2"> <span>Email:</span> <a href="mailto:tigranbalayan@me.com" class="font-normal hover:underline hover:text-primary break-words">
tigranbalayan@me.com
</a> </div> <div class="text-lg font-semibold space-x-2"> <span>Job Status:</span> <span class="font-normal">Open for work</span> </div> </div> <div class="card-actions flex-grow"> <p class="lg:text-xl text-pretty leading-relaxed">
Full Stack Developer skilled in React, Next.js, Node.js, and databases.
        Proficient in creating responsive UIs with Tailwind CSS and Bootstrap.
        Expertise spans frontend to backend, including GraphQL for efficient
        APIs. Delivered diverse web applications, thriving in agile
        environments. Constantly updating skills to stay current. Seeking
        challenging roles in software architecture or leadership. Passionate
        about innovative, user-centric solutions. Seamlessly navigating frontend
        and backend, I bring a holistic approach to create efficient, impactful
        applications.
</p> </div> </div> </div>`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/components/CareerCard.astro", void 0);

const $$Astro = createAstro();
const $$SkillCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillCard;
  const { skills } = Astro2.props;
  const flags = [
    { name: "Armenian", icon: "armenia", value: "100" },
    { name: "English", icon: "uk", value: "100" },
    { name: "Russian", icon: "russia", value: "100" },
    { name: "Italian", icon: "italy", value: "40" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="card bg-base-200 shadow-xl mx-24 max-lg:mx-4 p-2"> <div class="card-body"> <h2 class="card-title text-4xl font-bold">Skills</h2> <p class="text-lg font-semibold mb-4">
Here are some of the skills I have acquired over the years.
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"> ${skills.map((skill) => renderTemplate`<div class="mb-4 w-64 max-lg:w-full"> <div class="flex justify-between"> <div class="flex items-end"> ${renderComponent($$result, "Icon", $$Icon, { "name": skill.icon, "class": "w-8 h-8 max-lg:w-10 max-lg:h-10" })} <h3 class="text-lg font-semibold ml-2 max-lg:text-2xl max-lg:ml-3">${skill.name}</h3> </div> <div class="lg:tooltip hidden lg:tooltip-info"${addAttribute(skill.description, "data-tip")}> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "information-circle-outline", "class": "text-xl" })} </div> </div> <progress class="progress progress-primary"${addAttribute(skill.value, "value")} max="100"></progress> </div>`)} </div> <p class="text-lg font-semibold mb-4">I Speak</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"> ${flags.map((flag) => renderTemplate`<div class="mb-4 w-64 max-lg:w-full"> <div class="flex justify-between"> <div class="flex items-center"> <img${addAttribute(`/flags/${flag.icon}.svg`, "src")}${addAttribute(flag.name, "alt")} class="w-6 h-6"> <h3 class="text-lg font-semibold ml-2">${flag.name}</h3> </div> </div> <progress class="progress progress-primary"${addAttribute(flag.value, "value")} max="100"></progress> </div>`)} </div> </div> </div>`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/components/SkillCard.astro", void 0);

const experience = [
	{
		jobTitle: "Full Stack Developer",
		companyName: "Freelance",
		date: "January 2024 - Present",
		icon: "tb-logo",
		description: [
			"Incorporated third-party APIs into web applications for data exchange and real-time updates, enhancing functionality and user experience",
			"Developed single-page web applications in React, incorporating responsive design principles and ensuring cross-browser compatibility",
			"Created 3 full-stack web applications in the last 6 months, showcasing proficiency in both front-end and back-end technologies",
			"Optimized database queries and implemented caching strategies, resulting in a 40% improvement in application performance",
			"Collaborated with clients to gather requirements, provide regular progress updates, and ensure project alignment with business objectives",
			"Implemented SEO best practices and web accessibility standards (WCAG 2.1) across all developed sites, improving search engine rankings and user inclusivity"
		]
	},
	{
		jobTitle: "Full Stack Developer",
		companyName: "Precise Computer Solutions, LLC",
		date: "June 2021 - December 2023",
		icon: "Computer-logo",
		description: [
			"Utilized a microservices architecture to separate the application into independent components, improving scalability and reliability",
			"Collaborated with other developers to ensure code consistency and adherence to best practices",
			"Developed and maintained specific modules within a large-scale enterprise application, focusing on user authentication and data visualization components",
			"Participated in code reviews, providing constructive feedback to team members and incorporating suggestions to improve code quality",
			"Implemented unit tests for components, contributing to the overall test coverage and stability of the application",
			"Assisted in troubleshooting and resolving bugs reported by users, improving the overall user experience and application reliability"
		]
	},
	{
		jobTitle: "Business Owner",
		companyName: "Beverly Motors LLC",
		date: "April 2017 - June 2022",
		icon: "bm-limo",
		description: [
			"Led end-to-end development of company website, improving online visibility and customer engagement",
			"Implemented CRM system, increasing customer retention by 25% through improved data management",
			"Developed and maintained fleet management software, optimizing logistics operations",
			"Created mobile-responsive booking platform, resulting in 30% growth in online reservations"
		]
	},
	{
		jobTitle: "Pre-Press Operation Manager",
		companyName: "GotPrint",
		date: "June 2014 - March 2017",
		icon: "got-print",
		description: [
			"Managed high-volume production operations, optimizing workflows for efficiency",
			"Troubleshot technical issues, demonstrating strong problem-solving skills",
			"Implemented process improvements, showcasing analytical thinking",
			"Coordinated cross-functional teams to meet tight deadlines"
		]
	}
];
const experienceData = {
	experience: experience
};

const $$ExperienceCard = createComponent(($$result, $$props, $$slots) => {
  const { experience } = experienceData;
  return renderTemplate`${maybeRenderHead()}<div class="card bg-base-200 shadow-xl mx-24 max-lg:mx-4 p-2"> <div class="card-body"> <h2 class="card-title text-4xl font-bold mb-5">Work Experience</h2> ${experience.map((exp, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="flex items-center gap-x-3"> <div class="avatar max-lg:hidden"> <div class="w-20 h-20 rounded-xl"> <img${addAttribute(`/logos/${exp.icon}.png`, "src")}${addAttribute(exp.companyName, "alt")}> </div> </div> <div> <h1 class="text-2xl font-bold">${exp.jobTitle}</h1> <p class="text-lg">${exp.companyName}</p> <p class="text-lg">${exp.date}</p> </div> </div> <article class="prose text-xl max-lg:text-base max-w-4xl"> <ul> ${exp.description.map((bullet, index2) => renderTemplate`<li>${bullet}</li>`)} </ul> </article> ${index < experience.length - 1 && renderTemplate`<div class="divider"></div>`}` })}`)} </div> </div>`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/components/ExperienceCard.astro", void 0);

const education = [
	{
		major: "Bachelor of Science Metallurgy and Material Science Engineering",
		schoolName: "State Engineering University of Armenia",
		date: "September 2001 - June 2008",
		icon: "SEUA-logo",
		description: "Graduated with a strong foundation in analytical thinking and problem-solving. Leveraged engineering principles to transition into full-stack development, applying systematic approaches to software architecture and efficient coding practices."
	},
	{
		major: "Full Stack Web Development Bootcamp",
		schoolName: "UCLA Extension",
		date: "December 2021 - June 2022",
		icon: "UCLA",
		description: "Completed an intensive bootcamp focused on modern web development technologies. Gained hands-on experience with React, Node.js, Express, and MongoDB, developing full-stack applications from scratch. Collaborated with a diverse group of peers to build projects and enhance coding skills."
	}
];
const educationData = {
	education: education
};

const $$EducationCard = createComponent(($$result, $$props, $$slots) => {
  const { education } = educationData;
  return renderTemplate`${maybeRenderHead()}<div class="card bg-base-200 shadow-xl mx-24 max-lg:mx-4 p-2"> <div class="card-body"> <h2 class="card-title text-4xl font-bold mb-5">Education</h2> ${education.map((exp, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="flex items-center gap-x-3"> <div class="avatar max-lg:hidden"> <div class="w-20 h-20 rounded-xl"> <img${addAttribute(`/logos/${exp.icon}.png`, "src")}${addAttribute(exp.schoolName, "alt")}> </div> </div> <div> <h1 class="text-2xl font-bold">${exp.major}</h1> <p class="text-lg">${exp.schoolName}</p> <p class="text-lg">${exp.date}</p> </div> </div> <article class="prose text-xl max-lg:text-base max-w-5xl"> <p> ${exp.description} </p> </article> ${index < education.length - 1 && renderTemplate`<div class="divider"></div>`}` })}`)} </div> </div>`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/components/EducationCard.astro", void 0);

const books = [
	{
		title: "Crime and Punishment",
		author: "Fyodor Dostoevsky",
		img: "crime_and_punishment.png",
		link: "https://www.amazon.com/Crime-Punishment-Fyodor-Dostoyevsky/dp/0486415872"
	},
	{
		title: "The Godfather",
		author: "Mario Puzo",
		img: "the_godfather_book.png",
		link: "https://www.amazon.com/Godfather-Mario-Puzo/dp/0451205766"
	},
	{
		title: "1984",
		author: "George Orwell",
		img: "1984.png",
		link: "https://www.amazon.com/1984-George-Orwell/dp/0451524934"
	},
	{
		title: "Metro 2033",
		author: "Dmitry Glukhovsky",
		img: "metro_2033.png",
		link: "https://www.amazon.com/Metro-2033-Dmitry-Glukhovsky/dp/1539930721"
	}
];
const movies = [
	{
		title: "The Jackal",
		director: "Michael Caton-Jones",
		img: "the_jackal.png",
		link: "https://www.imdb.com/title/tt0119395/"
	},
	{
		title: "The Godfather",
		director: "Francis Ford Coppola",
		img: "the_godfather_movie.png",
		link: "https://www.imdb.com/title/tt0068646/"
	},
	{
		title: "The Dark Knight",
		director: "Christopher Nolan",
		img: "the_dark_knight.png",
		link: "https://www.imdb.com/title/tt0468569/"
	},
	{
		title: "Matrix",
		director: "Brothers Wachowski",
		img: "matrix.png",
		link: "https://www.imdb.com/title/tt0133093/"
	}
];
const hobbies = [
	{
		name: "Football(soccer)",
		description: "Playing and watching football matches",
		img: "football.png"
	},
	{
		name: "Cooking",
		description: "Exploring new recipes and experimenting with flavors",
		img: "cooking.png"
	},
	{
		name: "Gaming",
		description: "Immersing in virtual worlds and completing challenging quests",
		img: "gaming.png"
	},
	{
		name: "Driving Cars",
		description: "Exploring scenic routes and enjoying the thrill of speed",
		img: "driving.png"
	}
];
const favoritesData = {
	books: books,
	movies: movies,
	hobbies: hobbies
};

const $$FavoritesCard = createComponent(($$result, $$props, $$slots) => {
  const { books, movies, hobbies } = favoritesData;
  return renderTemplate`${maybeRenderHead()}<div class="card bg-base-200 shadow-xl mx-24 max-lg:mx-4 p-2"> <div class="card-body"> <h2 class="card-title text-4xl font-bold mb-5">My Favorites</h2> <h3 class="text-2xl font-semibold mb-2">Books</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"> ${books.map((book) => renderTemplate`<div class="mb-4 w-64 max-lg:w-full"> <div class="flex flex-col items-center"> <a${addAttribute(book.link, "href")} target="_blank" rel="noopener noreferrer"> <img${addAttribute(`/books/${book.img}`, "src")}${addAttribute(book.title, "alt")} width="600" height="800" class="transition-transform duration-300 hover:-translate-y-2 rounded-lg shadow-lg"> </a> <h3 class="text-lg font-semibold mt-2">${book.title}</h3> <p class="text-sm font-semibold">${book.author}</p> </div> </div>`)} </div> <div class="divider"></div> <h3 class="text-2xl font-semibold mb-2">Movies</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"> ${movies.map((movie) => renderTemplate`<div class="mb-4 w-64 max-lg:w-full"> <div class="flex flex-col items-center"> <a${addAttribute(movie.link, "href")} target="_blank" rel="noopener noreferrer"> <img${addAttribute(`/movies/${movie.img}`, "src")}${addAttribute(movie.title, "alt")} width="600" height="800" class="transition-transform duration-300 hover:-translate-y-2 rounded-lg shadow-lg"> </a> <h3 class="text-lg font-semibold mt-2">${movie.title}</h3> <p class="text-sm font-semibold">${movie.director}</p> </div> </div>`)} </div> <div class="divider"></div> <h3 class="text-2xl font-semibold mb-2">Hobbies</h3> <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"> ${hobbies.map((hobbie) => renderTemplate`<div class="mb-4 w-64 max-lg:w-full"> <div class="flex flex-col items-center"> <img${addAttribute(`/hobbies/${hobbie.img}`, "src")}${addAttribute(hobbie.name, "alt")} width="600" height="600" class="rounded-lg shadow-lg"> <h3 class="text-lg font-semibold mt-2">${hobbie.name}</h3> <p class="text-sm font-semibold text-center">${hobbie.description}</p> </div> </div>`)} </div> </div> </div>`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/components/FavoritesCard.astro", void 0);

const $$Career = createComponent(async ($$result, $$props, $$slots) => {
  const skillSet = await getCollection("career");
  const skills = skillSet.flatMap((entry) => entry.data.skills);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Career" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto space-y-4"> ${renderComponent($$result2, "CareerCard", $$CareerCard, {})} ${renderComponent($$result2, "SkillCard", $$SkillCard, { "skills": skills })} ${renderComponent($$result2, "ExperienceCard", $$ExperienceCard, {})} ${renderComponent($$result2, "EducationCard", $$EducationCard, {})} ${renderComponent($$result2, "FavoritesCard", $$FavoritesCard, {})} </div> ` })}`;
}, "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/career.astro", void 0);

const $$file = "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/pages/career.astro";
const $$url = "/career";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Career,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
