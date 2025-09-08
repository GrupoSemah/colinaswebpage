import { f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_fVTS04Ou.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DJ_-zwXy.mjs';
import 'clsx';
import { $ as $$CTA$1 } from '../chunks/CTA_BT-96nTr.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-8 bg-white"> <div class="container mx-auto px-6"> <!-- Hero Image --> <div class="max-w-6xl mx-auto"> <div class="rounded-2xl overflow-hidden shadow-lg relative"> <img src="/services/funservices/funserviceshero.webp" alt="Servicios Funerarios" class="w-full h-full object-cover"> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-dark-gray/40 to-transparent"></div> <!-- Content --> <div class="absolute inset-0 flex items-end justify-center pb-6 md:pb-8"> <div class="text-center text-white px-4"> <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
Servicios<br class="hidden sm:block"> <span class="sm:hidden"></span>Funerarios
</h1> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/funservices/Hero.astro", void 0);

const $$Opportunity = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-6 max-w-7xl"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Left Column: Images --> <div class="grid grid-cols-2 gap-4"> <!-- Top Left Image --> <div class="rounded-lg overflow-hidden"> <img src="/services/funservices/fungrid1.webp" alt="Capilla" class="w-full h-48 object-cover"> </div> <!-- Top Right Image --> <div class="rounded-lg overflow-hidden"> <img src="/services/funservices/fungrid2.webp" alt="Cruz" class="w-full h-48 object-cover"> </div> <!-- Bottom Full Width Image --> <div class="col-span-2 rounded-lg overflow-hidden"> <img src="/services/funservices/fungrid3.webp" alt="Interior Capilla" class="w-full h-64 object-cover"> </div> </div> <!-- Right Column: Content --> <div> <h2 class="text-2xl lg:text-3xl font-bold text-green-primary mb-6">
La oportunidad de homenajear a nuestros seres queridos
</h2> <div class="space-y-4 text-dark-gray/60 leading-relaxed"> <p>
Ofrecemos un servicio íntegro y nos distinguimos por dar 
            atención personalizada. En nuestras instalaciones 
            contamos con capilla, salas de velación y servicios 
            funerarios completos.
</p> <p>
Nuestros servicios están diseñados para brindar paz y 
            confort durante los momentos más difíciles, con un equipo 
            profesional que entiende la importancia de honrar la 
            memoria de nuestros seres queridos con dignidad y respeto.
</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/funservices/Opportunity.astro", void 0);

const $$ServicesOffered = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-6 max-w-7xl"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> <!-- Left Column: Image --> <div class="flex justify-center"> <div class="relative"> <!-- Cross Image --> <img src="/services/funservices/otherservices.webp" alt="Cruz de madera" class="w-96 h-auto"> </div> </div> <!-- Right Column: Services Lists --> <div class="space-y-8 text-center lg:text-left"> <!-- Servicios Ofrecidos --> <div> <h3 class="text-xl font-bold text-green-primary mb-4">Servicios Ofrecidos</h3> <ul class="space-y-2 inline-block lg:block text-left"> <li class="flex items-center gap-3"> <div class="w-2 h-2 bg-green-primary rounded-full"></div> <span class="text-dark-gray">Ceremonia religiosa</span> </li> <li class="flex items-center gap-3"> <div class="w-2 h-2 bg-green-primary rounded-full"></div> <span class="text-dark-gray">Servicio del difunto</span> </li> <li class="flex items-center gap-3"> <div class="w-2 h-2 bg-green-primary rounded-full"></div> <span class="text-dark-gray">Velación</span> </li> <li class="flex items-center gap-3"> <div class="w-2 h-2 bg-green-primary rounded-full"></div> <span class="text-dark-gray">Arreglo floral</span> </li> </ul> </div> <!-- Otros servicios --> <div> <h3 class="text-xl font-bold text-green-primary mb-4">Otros servicios</h3> <ul class="space-y-2 inline-block lg:block text-left"> <li class="flex items-center gap-3"> <div class="w-2 h-2 bg-green-primary rounded-full"></div> <span class="text-dark-gray">Traslados</span> </li> <li class="flex items-center gap-3"> <div class="w-2 h-2 bg-green-primary rounded-full"></div> <span class="text-dark-gray">Preparación del cuerpo</span> </li> <li class="flex items-center gap-3"> <div class="w-2 h-2 bg-green-primary rounded-full"></div> <span class="text-dark-gray">Trámites de sepelio</span> </li> <li class="flex items-center gap-3"> <div class="w-2 h-2 bg-green-primary rounded-full"></div> <span class="text-dark-gray">Servicio de cafetería</span> </li> <li class="flex items-center gap-3"> <div class="w-2 h-2 bg-green-primary rounded-full"></div> <span class="text-dark-gray">Trámites de exequias</span> </li> <li class="flex items-center gap-3"> <div class="w-2 h-2 bg-green-primary rounded-full"></div> <span class="text-dark-gray">Lápida de granito</span> </li> </ul> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/funservices/ServicesOffered.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SharedCTA", $$CTA$1, { "titleText": "Siempre estamos aqu\xED para usted.", "description": "En los momentos m\xE1s dif\xEDciles, nuestro equipo profesional est\xE1 disponible las 24 horas del d\xEDa para brindarle el apoyo y la orientaci\xF3n que necesita.", "buttonText": "Cont\xE1ctanos", "buttonHref": "/contact" })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/funservices/CTA.astro", void 0);

const $$Funservices = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios Funerarios - Colinas de la Paz | Servicios Completos", "description": "Servicios funerarios completos en Colinas de la Paz. Ceremonias, velatorios, traslados y tr\xE1mites. Acompa\xF1amiento profesional en momentos dif\xEDciles." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Opportunity", $$Opportunity, {})} ${renderComponent($$result2, "ServicesOffered", $$ServicesOffered, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/funservices.astro", void 0);

const $$file = "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/funservices.astro";
const $$url = "/funservices";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Funservices,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
