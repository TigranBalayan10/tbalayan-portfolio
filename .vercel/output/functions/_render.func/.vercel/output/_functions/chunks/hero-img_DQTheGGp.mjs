const heroImage = new Proxy({"src":"/_astro/hero-img.Br8KWj9C.png","width":1472,"height":2208,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/tigra/Documents/My Projects/tbalayan-portfolio/src/components/image/hero-img.png";
							}
							
							return target[name];
						}
					});

export { heroImage as h };
