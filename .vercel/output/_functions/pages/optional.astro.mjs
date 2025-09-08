import { f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_fVTS04Ou.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DJ_-zwXy.mjs';
import 'clsx';
import { $ as $$CTA$1 } from '../chunks/CTA_BT-96nTr.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-8 bg-white"> <div class="container mx-auto px-6"> <!-- Hero Image --> <div class="max-w-6xl mx-auto"> <div class="rounded-2xl overflow-hidden shadow-lg relative"> <img src="/images/optional/opthero.webp" alt="Sala de Velación" class="w-full h-full object-cover"> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-dark-gray/40 to-transparent"></div> <!-- Content --> <div class="absolute inset-0 flex items-end justify-center pb-6 md:pb-8"> <div class="text-center text-white px-4"> <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
Sala de Velación
</h1> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/optional/Hero.astro", void 0);

const $$Description = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16"> <div class="container mx-auto px-6"> <!-- First Row: Sala de Velación --> <div class="relative mb-16"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch"> <!-- Left: Text Card (overlapping) --> <div class="relative lg:-mr-2 lg:mb-8"> <div class="bg-white rounded-2xl p-6 lg:p-8 shadow-xl h-full flex flex-col justify-center lg:min-h-[450px]"> <p class="text-sm lg:text-xl text-justify text-dark-gray/80 leading-fit">
En campo santo Colinas de la Paz disponemos de una sala de velación diseñada para ofrecer a las familias un espacio íntimo, donde puedan llevar a cabo la ceremonia de despedida de sus seres queridos con la privacidad y el respeto que se merecen, transformando el duelo en homenaje.
</p> </div> </div> <!-- Right: Background Image Card --> <div class="relative rounded-r-3xl lg:rounded-l-none rounded-l-3xl overflow-hidden shadow-lg h-[450px]"> <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/images/optional/description.webp');"></div> <div class="absolute inset-0 bg-black/5"></div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/optional/Description.astro", void 0);

const $$ServiceDetails = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16"> <div class="container mx-auto px-4 max-w-6xl"> <div class="grid lg:grid-cols-2 gap-16 items-start"> <!-- Grid de imágenes --> <div class="grid grid-cols-2 gap-4"> <!-- Imagen grande superior izquierda --> <div class="col-span-1"> <img src="/images/optional/opt1.webp" alt="Sala de velación vista 1" class="w-full h-48 object-cover rounded-lg shadow-lg"> </div> <!-- Imagen pequeña superior derecha --> <div class="col-span-1"> <img src="/images/optional/opt2.webp" alt="Sala de velación vista 2" class="w-full h-48 object-cover rounded-lg shadow-lg"> </div> <!-- Imagen grande inferior --> <div class="col-span-2"> <img src="/images/optional/opt3.webp" alt="Sala de velación vista panorámica" class="w-full h-64 object-cover rounded-lg shadow-lg"> </div> </div> <!-- Contenido de servicios --> <div class="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left"> <h2 class="text-3xl lg:text-4xl font-bold text-green-primary mb-8">
Detalle del servicio
</h2> <div class="space-y-4 w-fit mx-auto lg:mx-0"> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Uso de sala para 24 horas</span> </div> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Aire acondicionado</span> </div> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Sillas</span> </div> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Responsable por 24 horas</span> </div> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Cafetera</span> </div> <div class="flex items-center space-x-3"> <div class="w-2 h-2 bg-green-primary rounded-full flex-shrink-0"></div> <span class="text-base text-dark-gray">Equipo de Sonido/Música</span> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/optional/ServiceDetails.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SharedCTA", $$CTA$1, { "titleText": "Siempre estamos aqu\xED para usted.", "description": "Nuestro equipo est\xE1 disponible las 24 horas para brindarle el apoyo y la orientaci\xF3n que necesita en estos momentos dif\xEDciles.", "buttonText": "Contactar ahora", "buttonHref": "/contact" })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/services/optional/CTA.astro", void 0);

const $$Optional = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios Opcionales - Colinas de la Paz | Salas de Velaci\xF3n", "description": "Servicios opcionales en Colinas de la Paz. Salas de velaci\xF3n con aire acondicionado, equipo de sonido, cafetera y responsable 24 horas. Comodidad para las familias." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Description", $$Description, {})} ${renderComponent($$result2, "ServiceDetails", $$ServiceDetails, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/optional.astro", void 0);

const $$file = "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/optional.astro";
const $$url = "/optional";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Optional,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
