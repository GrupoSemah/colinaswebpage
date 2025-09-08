import { f as createComponent, m as maybeRenderHead, r as renderTemplate, l as renderScript, k as renderComponent } from '../chunks/astro/server_fVTS04Ou.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_W9iYiw_y.mjs';
import 'clsx';
import { $ as $$CTA$1 } from '../chunks/CTA_BT-96nTr.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-8 bg-white"> <div class="container mx-auto px-6"> <!-- Hero Image --> <div class="max-w-6xl mx-auto"> <div class="rounded-2xl overflow-hidden shadow-lg relative"> <img src="/images/burning/burnhero.webp" alt="Servicio de Cremación" class="w-full h-full object-cover"> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-dark-gray/40 to-transparent"></div> <!-- Content --> <div class="absolute inset-0 flex items-end justify-center pb-6 md:pb-8"> <div class="text-center text-white px-4"> <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
Nichos, servicio de cremación<br class="hidden sm:block"> <span class="sm:hidden"></span><span>y osarios</span> </h1> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/burning/Hero.astro", void 0);

const $$Alternative = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-6 max-w-7xl"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Left Column: Images --> <div class="grid grid-cols-2 gap-4"> <!-- Top Left Image --> <div class="rounded-lg overflow-hidden"> <img src="/images/burning/burn1.webp" alt="Cremación 1" class="w-full h-48 object-cover"> </div> <!-- Top Right Image --> <div class="rounded-lg overflow-hidden"> <img src="/images/burning/burn2.webp" alt="Cremación 2" class="w-full h-48 object-cover"> </div> <!-- Bottom Full Width Image --> <div class="col-span-2 rounded-lg overflow-hidden"> <img src="/images/burning/burn3.webp" alt="Cremación 3" class="w-full h-64 object-cover"> </div> </div> <!-- Right Column: Content --> <div> <h2 class="text-2xl lg:text-3xl font-bold text-green-primary mb-6">
Una alternativa para ese descanso final
</h2> <div class="space-y-4 text-dark-gray/60 leading-relaxed"> <p>
Ofrecemos servicios de cremación con la más alta calidad y respeto. 
            Nuestras instalaciones modernas garantizan un proceso digno y profesional 
            para honrar la memoria de sus seres queridos.
</p> <p>
Contamos con diferentes opciones de urnas y servicios personalizados 
            para adaptarnos a las necesidades y deseos de cada familia, brindando 
            tranquilidad y confort durante los momentos más difíciles.
</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/burning/Alternative.astro", void 0);

const $$UrnsVariety = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16"> <div class="container mx-auto px-4 max-w-6xl"> <div class="text-center mb-12"> <h2 class="text-4xl font-bold text-dark-gray mb-4">
Variedad de urnas para elegir
</h2> </div> <div class="grid lg:grid-cols-2 gap-16 items-start"> <!-- Imagen de urna con controles --> <div class="relative flex flex-col items-center"> <div class="mb-8 w-64 h-64 overflow-hidden"> <div class="flex transition-transform duration-500 ease-in-out" id="urnsCarouselTrack"> <div class="w-64 flex-shrink-0 flex justify-center"> <img src="/images/burning/Swipe1.webp" alt="Urna para cremación 1" class="w-64 h-auto object-contain"> </div> <div class="w-64 flex-shrink-0 flex justify-center"> <img src="/images/burning/Swipe2.webp" alt="Urna para cremación 2" class="w-64 h-auto object-contain"> </div> <div class="w-64 flex-shrink-0 flex justify-center"> <img src="/images/burning/Swipe3.webp" alt="Urna para cremación 3" class="w-64 h-auto object-contain"> </div> <div class="w-64 flex-shrink-0 flex justify-center"> <img src="/images/burning/Swipe4.webp" alt="Urna para cremación 4" class="w-64 h-auto object-contain"> </div> </div> </div> <!-- Controles de navegación --> <div class="flex items-center space-x-4"> <button id="urnsPrevBtn" class="w-12 h-12 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="urnsNextBtn" class="w-12 h-12 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> <!-- Contenido de servicios --> <div class="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left"> <h3 class="text-xl font-semibold text-dark-gray mb-6">
El servicio de cremación incluye:
</h3> <!-- Lista en dos columnas --> <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 justify-items-start w-fit mx-auto lg:mx-0"> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Cremación de restos</span> </div> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Arreglo floral</span> </div> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Ceremonia religiosa</span> </div> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Tarjeta de condolencias</span> </div> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Traslado del difunto</span> </div> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Libro de firmas</span> </div> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Trámites legales</span> </div> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Morgue privada 24hrs</span> </div> <div class="flex items-center space-x-3 md:col-span-2"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Urna básica / otras</span> </div> </div> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/burning/UrnsVariety.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/burning/UrnsVariety.astro", void 0);

const $$Osarios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16"> <div class="container mx-auto px-6"> <div class="relative"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch"> <!-- Left: Text Card --> <div class="relative lg:-mr-2 lg:mb-8"> <div class="bg-white rounded-2xl p-6 lg:p-8 shadow-xl h-full flex flex-col justify-center lg:min-h-[450px]"> <h2 class="text-3xl lg:text-5xl font-bold text-green-primary mb-4">
Osarios
</h2> <h3 class="text-xl font-semibold text-dark-gray mb-4">
Un lugar digno para el descanso eterno
</h3> <p class="text-sm lg:text-xl text-justify text-dark-gray/80 leading-fit mb-4">
Nuestros osarios ofrecen un espacio sagrado y tranquilo donde las familias pueden honrar y recordar a sus seres queridos. Diseñados con respeto y dignidad, proporcionan un lugar permanente de descanso.
</p> <p class="text-sm lg:text-xl text-justify text-dark-gray/80 leading-fit">
Contamos con diferentes opciones y ubicaciones dentro de nuestras instalaciones, todas mantenidas con el más alto estándar de cuidado y respeto, brindando tranquilidad a las familias en estos momentos tan importantes.
</p> </div> </div> <!-- Right: Background Image Card --> <div class="relative rounded-r-3xl lg:rounded-l-none rounded-l-3xl overflow-hidden shadow-lg h-[450px]"> <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/images/burning/osarios.webp');"></div> <div class="absolute inset-0 bg-black/5"></div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/burning/Osarios.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SharedCTA", $$CTA$1, { "titleText": "Siempre estamos aqu\xED para usted.", "description": "Nuestro equipo est\xE1 disponible las 24 horas para brindarle el apoyo y la orientaci\xF3n que necesita en estos momentos dif\xEDciles.", "buttonText": "Contactar ahora", "buttonHref": "/contact" })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/burning/CTA.astro", void 0);

const $$Burning = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicio de Cremaci\xF3n - Colinas de la Paz | Nichos, Cremaciones y Osarios", "description": "Servicio de cremaci\xF3n en Colinas de la Paz. Nichos, cremaciones y osarios, variedad de urnas y ceremonias religiosas. Servicio completo con traslado y tr\xE1mites legales incluidos." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Alternative", $$Alternative, {})} ${renderComponent($$result2, "UrnsVariety", $$UrnsVariety, {})} ${renderComponent($$result2, "Osarios", $$Osarios, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/burning.astro", void 0);

const $$file = "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/burning.astro";
const $$url = "/burning";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Burning,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
