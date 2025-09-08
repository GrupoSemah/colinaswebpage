import { f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_fVTS04Ou.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DJ_-zwXy.mjs';
import 'clsx';
import { $ as $$CTA$1 } from '../chunks/CTA_BT-96nTr.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-8 bg-white"> <div class="container mx-auto px-6"> <!-- Hero Image --> <div class="max-w-6xl mx-auto"> <div class="rounded-2xl overflow-hidden shadow-lg relative"> <img src="images/home/hero.webp" alt="Lotes Colinas de la Paz" class="w-full h-full object-cover"> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-dark-gray/40 to-transparent"></div> <!-- Content --> <div class="absolute inset-0 flex items-end justify-center pb-6 md:pb-8"> <div class="text-center text-white px-4"> <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
Lotes
</h1> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/slots/Hero.astro", void 0);

const $$Description = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pt-8"> <div class="container mx-auto px-6"> <!-- Separator --> <div class="flex justify-center items-center"> <div class="w-52 h-0.5 bg-light-gray"></div> </div> </div> <section class="py-4 md:py-16"> <div class="rounded-3xl p-0 lg:p-12"> <div class="container mx-auto px-6"> <div class="relative"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch"> <!-- Left: Text Card (overlapping) --> <div class="relative lg:-mr-8 lg:mb-8 mt-0 lg:mt-0"> <div class="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl h-full flex flex-col justify-center lg:min-h-[450px]"> <p class="text-sm md:text-base lg:text-2xl text-center lg:text-justify text-dark-gray/80 leading-relaxed">
Los lotes son espacios de tierra destinados a la sepultura de difuntos en el cementerio. En nuestras instalaciones contamos con lotes individuales y familiares, ubicados en diferentes sectores del cementerio que brindan tranquilidad y paz a nuestros visitantes.
</p> </div> </div> <!-- Right: Background Image Card --> <div class="relative rounded-r-3xl lg:rounded-l-none rounded-l-3xl overflow-hidden shadow-lg h-[450px] mt-0 lg:mt-0"> <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/services/slots/slotdesc.webp');"></div> <div class="absolute inset-0 bg-black/5"></div> </div> </div> </div> </div> </div> </section> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/slots/Description.astro", void 0);

const $$Locations = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16"> <div class="container mx-auto px-6 max-w-7xl"> <div class="text-center mb-8"> <h2 class="text-2xl lg:text-3xl font-bold text-dark-gray mb-4">
En Colinas de la Paz ofrecemos una variedad de ubicaciones y alternativas:
</h2> <!-- Normal separator below title --> <div class="flex justify-center"> <div class="w-32 h-0.5 bg-light-gray my-8"></div> </div> </div> </div> <div class="container mx-auto px-6 md:px-32 max-w-2xl"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative"> <!-- Lotes familiares --> <div class="text-center"> <div class="bg-white rounded-lg p-4 md:p-6 shadow-md mb-4 md:mb-6 min-h-[140px] md:h-32 flex flex-col justify-center"> <h3 class="text-lg md:text-xl font-bold text-dark-gray mb-3 md:mb-4">Lotes familiares</h3> <p class="text-dark-gray/80 text-xs md:text-sm text-center md:text-start leading-relaxed">
Tienen capacidad hasta para seis difuntos y están ubicados en los sectores A, B, C y D. Estos lotes brindan la oportunidad de mantener a la familia unida en un mismo espacio.
</p> </div> <div class="flex justify-center"> <img src="/services/slots/family.webp" alt="Lote familiar" class="w-64 md:w-72 h-48 md:h-60 object-cover rounded-lg"> </div> </div> <!-- Vertical separator --> <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center"> <div class="w-1 h-52 bg-green-dark"></div> <div class="w-3 h-3 bg-green-dark rounded-full my-2"></div> <div class="w-1 h-52 bg-green-dark"></div> </div> <!-- Mobile separator --> <div class="flex justify-center lg:hidden"> <div class="w-24 h-0.5 bg-green-dark"></div> </div> <!-- Lotes individuales --> <div class="text-center"> <div class="bg-white rounded-lg p-4 md:p-6 shadow-md mb-4 md:mb-6 min-h-[140px] md:min-h-[128px] flex flex-col justify-center"> <h3 class="text-lg md:text-xl font-bold text-dark-gray mb-3 md:mb-4">Lotes individuales</h3> <p class="text-dark-gray/80 text-xs md:text-sm text-center md:text-start leading-relaxed">
Permiten sepultura hasta para dos difuntos y están ubicados en los sectores E, F, G y H. Son una opción más íntima y personal.
</p> </div> <div class="flex justify-center"> <img src="/services/slots/single.webp" alt="Lote individual" class="w-64 md:w-72 h-48 md:h-60 object-cover rounded-lg"> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/slots/Locations.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SharedCTA", $$CTA$1, { "titleText": "\xBFEst\xE1s interesado?", "description": "Te atendemos con compromiso de excelencia.", "buttonText": "Cont\xE1ctanos", "buttonHref": "/contact" })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/slots/CTA.astro", void 0);

const $$Slots = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lotes - Colinas de la Paz | Espacios Dignos para el Descanso Eterno", "description": "Lotes individuales y familiares en Colinas de la Paz, Panam\xE1 Oeste. Espacios tranquilos y dignos para la sepultura con diferentes sectores disponibles." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Description", $$Description, {})} ${renderComponent($$result2, "Locations", $$Locations, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/slots.astro", void 0);

const $$file = "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/slots.astro";
const $$url = "/slots";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Slots,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
