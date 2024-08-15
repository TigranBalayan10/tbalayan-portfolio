import { F as Fragment, _ as __astro_tag_component__, c as createVNode } from './astro/server_DbFupAXm.mjs';
import { $ as $$Image } from './_astro_assets_C20IXeGa.mjs';
import 'clsx';

const frontmatter = {
  "skills": [{
    "name": "React",
    "icon": "skill-icons:react-dark",
    "description": "Expert in building complex, state-driven user interfaces",
    "value": 100
  }, {
    "name": "Next.js",
    "icon": "skill-icons:nextjs-dark",
    "description": "Highly proficient in server-side rendering and static site generation",
    "value": 80
  }, {
    "name": "Tailwind CSS",
    "icon": "skill-icons:tailwindcss-dark",
    "description": "Master of utility-first CSS for rapid, custom designs",
    "value": 100
  }, {
    "name": "HTML & CSS",
    "icon": "skill-icons:html",
    "description": "Expert-level knowledge of semantic HTML and advanced CSS techniques",
    "value": 75
  }, {
    "name": "JavaScript",
    "icon": "skill-icons:javascript",
    "description": "Advanced proficiency in modern JavaScript and ES6+ features",
    "value": 95
  }, {
    "name": "TypeScript",
    "icon": "skill-icons:typescript",
    "description": "Strong skills in type-safe development and advanced TypeScript features",
    "value": 85
  }, {
    "name": "MySQL",
    "icon": "skill-icons:mysql-dark",
    "description": "Solid understanding of relational database design and optimization",
    "value": 75
  }, {
    "name": "PostgreSQL",
    "icon": "skill-icons:postgresql-light",
    "description": "Competent in advanced SQL queries and database management",
    "value": 80
  }, {
    "name": "Git",
    "icon": "skill-icons:github-light",
    "description": "Advanced version control skills, including complex workflows",
    "value": 70
  }, {
    "name": "MongoDB",
    "icon": "skill-icons:mongodb",
    "description": "Competent in NoSQL database design and querying",
    "value": 80
  }, {
    "name": "Astro",
    "icon": "skill-icons:astro",
    "description": "Growing expertise in building performant, content-focused sites",
    "value": 70
  }, {
    "name": "GraphQL",
    "icon": "skill-icons:graphql-light",
    "description": "Solid grasp of GraphQL schemas and efficient querying",
    "value": 75
  }]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/career/skills.mdx";
const file = "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/career/skills.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/content/career/skills.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
