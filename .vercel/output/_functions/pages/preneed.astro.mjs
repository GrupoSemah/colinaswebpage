import { f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_fVTS04Ou.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_W9iYiw_y.mjs';
import 'clsx';
import { $ as $$CTA$1 } from '../chunks/CTA_BT-96nTr.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-white pt-24 pb-16"> <div class="container mx-auto px-6"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Left Content --> <div class="lg:pr-8"> <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-gray leading-tight mb-4 md:mb-6">
Planes o seguros
<br> <span class="text-green-primary">Pre-necesidad</span> </h1> <p class="text-base md:text-lg text-dark-gray/80 leading-relaxed mb-6 md:mb-8">
Planifica hoy tu tranquilidad de mañana. Nuestros planes de pre-necesidad te permiten asegurar tu futuro y el de tu familia con opciones flexibles y accesibles para todos.
</p> </div> <!-- Right Image --> <div class="relative"> <div class="relative rounded-3xl overflow-hidden"> <img src="/images/preneed/preneedhero.webp" alt="Familia feliz abrazándose" class="w-full h-auto object-cover"> <!-- Green accent border --> <div class="absolute -top-4 -left-4 w-full h-full border-4 border-green-primary rounded-3xl -z-10"></div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/Preneed/Hero.astro", void 0);

const $$Description = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16"> <div class="container mx-auto px-6"> <!-- First Row: ¿Por qué planificar? --> <div class="relative mb-16"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch"> <!-- Left: Background Image Card --> <div class="relative rounded-l-3xl lg:rounded-r-none rounded-r-3xl overflow-hidden shadow-lg h-[350px] md:h-[450px]"> <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/images/home/desc1.webp');"></div> <div class="absolute inset-0 bg-black/5"></div> </div> <!-- Right: Text Card (overlapping) --> <div class="relative lg:-ml-8 lg:mb-8 mt-4 lg:mt-0"> <div class="bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl h-full flex flex-col justify-center lg:min-h-[450px]"> <h2 class="text-2xl sm:text-3xl lg:text-5xl font-bold text-green-primary mb-3 md:mb-4">
¿Por qué planificar?
</h2> <p class="text-sm md:text-base lg:text-xl text-justify text-dark-gray/80 leading-relaxed mb-3 md:mb-4">
Planificar con anticipación es una decisión sabia y responsable, te ayuda a evitar sorpresas, protege la tranquilidad emocional y económica de tu familia, y les permite enfocarse en lo que realmente importa durante un momento difícil.
</p> <p class="text-sm md:text-base lg:text-xl text-justify text-dark-gray/80 leading-relaxed">
Por eso diseñamos planes que te permiten anticipar una despedida digna para tu ser amado, asegurando que tu familia reciba el respaldo emocional y logístico que necesita cuando más importa.
</p> </div> </div> </div> </div> <!-- Separator Line --> <div class="flex justify-center mb-16"> <div class="w-24 h-1 bg-green-primary rounded-full"></div> </div> <!-- Second Row: Tu situación financiera es importante --> <div class="rounded-3xl p-8 lg:p-12"> <div class="grid grid-cols-1 lg:grid-cols-7 gap-6 items-start"> <!-- Left Images Grid (2 images stacked with different sizes) --> <div class="lg:col-span-2"> <div class="space-y-6"> <!-- Top image - wider --> <div class="rounded-2xl w-8/12 justify-start items-start overflow-hidden shadow-lg"> <img src="/images/home/desc2.webp" alt="Vista cementerio" class="w-full h-[200px] md:h-[250px] object-cover"> </div> <!-- Bottom image - smaller, offset to right --> <div class="rounded-2xl w-10/12 justify-end items-end overflow-hidden shadow-lg ml-8 md:ml-12"> <img src="/images/preneed/urna.webp" alt="Interior capilla" class="w-full h-[280px] md:h-[350px] object-cover"> </div> </div> </div> <!-- Center Content --> <div class="lg:col-span-3 text-center py-4 md:py-8"> <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-primary mb-4 md:mb-6">
Tu situación financiera es importante
</h2> <p class="text-sm md:text-base lg:text-lg text-dark-gray/80 leading-relaxed px-2">
No planificar a tiempo genera estrés económico por los gastos inesperados que recaen sobre tu familia. Por eso, trabajamos contigo para crear un plan que se adapte a tu situación financiera, garantizando una despedida digna sin comprometer tu tranquilidad.
</p> </div> <!-- Right Images Grid (2 images stacked with different sizes) --> <div class="lg:col-span-2"> <div class="space-y-6"> <!-- Top image - offset to left, smaller --> <div class="rounded-2xl w-10/12 overflow-hidden shadow-lg ml-8 md:ml-12 mt-2 md:mt-4"> <img src="/images/preneed/closecof.webp" alt="Detalles servicios" class="w-full h-[280px] md:h-[350px] object-cover"> </div> <!-- Bottom image - wider --> <div class="rounded-2xl w-8/12 overflow-hidden shadow-lg"> <img src="/images/burning/burn1.webp" alt="Servicios funerarios" class="w-full h-[200px] md:h-[250px] object-cover"> </div> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/Preneed/Description.astro", void 0);

const $$Planning = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-green-dark overflow-hidden"> <!-- Curved top border --> <div class="absolute top-0 left-0 w-full h-16"> <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-full"> <path d="M0,120 C300,0 900,0 1200,120 L1200,0 L0,0 Z" fill="white"></path> </svg> </div> <!-- Background pattern --> <div class="absolute inset-0 opacity-10"> <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-primary/20 to-transparent"></div> </div> <div class="container mx-auto px-2 relative z-10 py-40"> <!-- Main Title --> <div class="text-center mb-8 md:mb-12 px-4"> <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-light-gray/70 leading-relaxed">
Al planificar tu futuro con nosotros, tus gastos y los de
</h2> <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-light-gray/70 mb-2 md:mb-4 leading-relaxed">
tu familia se congelan en el tiempo.
</h2> <h3 class="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white"> <span class="font-bold">obtienes beneficios como:</span> </h3> </div> <!-- Benefits Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto px-4"> <!-- Benefit 1 --> <div class="bg-white rounded-2xl p-4 md:p-6 text-center shadow-lg h-[220px] md:h-[260px] flex flex-col justify-between"> <div class="flex-1 flex flex-col items-center justify-center"> <div class="w-16 h-16 md:w-20 md:h-20 bg-green-dark rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4"> <img src="/images/preneed/cuotas.svg" alt="Cómodas cuotas" class="w-16 h-16 md:w-20 md:h-20"> </div> <h3 class="font-bold text-dark-gray mb-2 text-xs md:text-sm leading-tight">Cómodas pagos en<br>cuotas</h3> </div> </div> <!-- Benefit 2 --> <div class="bg-white rounded-2xl p-4 md:p-6 text-center shadow-lg h-[220px] md:h-[260px] flex flex-col justify-between"> <div class="flex-1 flex flex-col items-center justify-center"> <div class="w-16 h-16 md:w-20 md:h-20 bg-green-dark rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4"> <img src="/images/preneed/planing.svg" alt="Tranquilidad" class="w-16 h-16 md:w-20 md:h-20"> </div> <h3 class="font-bold text-dark-gray mb-2 text-xs md:text-sm leading-tight">Tranquilidad de<br>planificar de antemano</h3> </div> </div> <!-- Benefit 3 --> <div class="bg-white rounded-2xl p-4 md:p-6 text-center shadow-lg h-[220px] md:h-[260px] flex flex-col justify-between"> <div class="flex-1 flex flex-col items-center justify-center"> <div class="w-16 h-16 md:w-20 md:h-20 bg-green-dark rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4"> <img src="/images/preneed/precio.svg" alt="Precio estable" class="w-16 h-16 md:w-20 md:h-20"> </div> <h3 class="font-bold text-dark-gray mb-2 text-xs md:text-sm leading-tight">Precio estable que no<br>aumenta con el tiempo</h3> </div> </div> <!-- Benefit 4 --> <div class="bg-white rounded-2xl p-4 md:p-6 text-center shadow-lg h-[220px] md:h-[260px] flex flex-col justify-between"> <div class="flex-1 flex flex-col items-center justify-center"> <div class="w-16 h-16 md:w-20 md:h-20 bg-green-dark rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4"> <img src="/images/preneed/asesoria.svg" alt="Asesoría" class="w-16 h-16 md:w-20 md:h-20"> </div> <h3 class="font-bold text-dark-gray mb-2 text-xs md:text-sm leading-tight">Asesoría en nuestros productos y servicios</h3> </div> </div> </div> </div> <!-- Curved bottom border --> <div class="absolute bottom-0 left-0 w-full h-16 bg-white"> <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-full"> <path d="M0,120 C300,0 900,0 1200,120 L1200,0 L0,0 Z" fill="#055928"></path> </svg> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/Preneed/Planning.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SharedCTA", $$CTA$1, { "titleText": "\xBFTe interesa planificar a futuro?", "description": "Siempre estar\xE1s muy cerca de nosotros que nuestros asesores especializados est\xE1n listos para ayudarte a encontrar el plan perfecto que se adapte a tus necesidades y presupuesto.", "buttonText": "Cont\xE1ctanos", "buttonHref": "/contact" })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/Preneed/CTA.astro", void 0);

const $$Preneed = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Description", $$Description, {})} ${renderComponent($$result2, "Planning", $$Planning, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/preneed.astro", void 0);

const $$file = "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/preneed.astro";
const $$url = "/preneed";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Preneed,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
