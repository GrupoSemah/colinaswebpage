import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_fVTS04Ou.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://colinasdelapaz.com");
const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTA;
  const { titleText, description, buttonText, buttonHref = "/contact" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-8 md:py-12 bg-green-primary/8 mx-4 md:mx-auto max-w-5xl rounded-3xl"> <div class="px-6 md:px-8 text-center"> <div class="w-full mx-auto"> <div class="mb-4 md:mb-6 mx-auto max-w-3xl"> <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-green-dark mb-2 md:mb-4"> ${titleText} </h2> <p class="text-dark-gray text-sm md:text-base font-light leading-relaxed"> ${description} </p> </div> <div> <a${addAttribute(buttonHref, "href")} class="text-dark-gray font-medium px-4 md:px-6 py-2 md:py-3 rounded-lg border border-dark-gray shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300 inline-block text-sm md:text-base"> ${buttonText} </a> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/Shared/CTA/CTA.astro", void 0);

export { $$CTA as $ };
