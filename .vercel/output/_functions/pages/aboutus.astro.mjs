import { f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_fVTS04Ou.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_W9iYiw_y.mjs';
import 'clsx';
import { $ as $$CTA$1 } from '../chunks/CTA_BT-96nTr.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-8 bg-white"> <div class="container mx-auto px-6"> <!-- Title --> <div class="text-center"> <h1 class="text-4xl lg:text-5xl font-bold text-green-primary mb-8">
Sobre nosotros
</h1> </div> <!-- Hero Image --> <div class="max-w-6xl mx-auto"> <div class="rounded-2xl overflow-hidden shadow-lg relative"> <img src="/images/about/abouthero.webp" alt="Campo Santo Colinas de la Paz" class="w-full h-full object-cover"> <!-- Gradient mask overlay from top --> <div class="absolute inset-0 bg-gradient-to-b from-white via-white/10 to-transparent"></div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/aboutus/Hero.astro", void 0);

const $$Description = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-6"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Content - First on mobile, Right on desktop --> <div class="space-y-6 order-1 lg:order-2"> <h2 class="text-3xl lg:text-4xl font-bold text-green-primary">
¿Quienes somos?
</h2> <div class="space-y-4 text-dark-gray/80"> <p class="text-base leading-relaxed">
Somos una empresa panameña con más de 15 años de experiencia en el ramo de Panamá Oeste que ha logrado un crecimiento empresarial por la ubicación de su lote en un lugar digno para descansar de la vida terrenal de los seres queridos de nuestros clientes, brindando un servicio de calidad y respeto. Nos dedicamos a brindar servicios funerarios completos que honran la memoria de los seres queridos a las comunidades que confían en nosotros.
</p> <p class="text-base leading-relaxed">
Hoy, tras más de 27 años de experiencia, hemos demostrado y reafirmado a más de 6,000 familias panameñas que hemos ofrecido servicios exequiales proporcionando la tranquilidad que se requiere.
</p> <p class="text-base leading-relaxed">
Colinas de la Paz formado documental a la comunidad y brinda los más y otros servicios los mejores y dignidad.
</p> </div> </div> <!-- Image - Second on mobile, Left on desktop --> <div class="order-2 lg:order-1"> <img src="/images/about/whoweare.webp" alt="Edificio Colinas de la Paz" class="w-full h-full object-cover"> </div> </div> </div> </div> <section class="py-16 bg-green-dark -mt-12"> <div class="container mx-auto px-6"></div> <!-- Bottom section - Mission, Vision, Values, Community --> <section class="py-16 bg-green-dark -mt-12"> <div class="container mx-auto px-6"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Visión --> <div class="bg-white/10 border border-green-primary rounded-2xl p-6"> <h3 class="text-3xl font-bold text-white mb-4">Visión</h3> <p class="text-white/90 text-sm leading-relaxed">
Ser la opción de confianza para cada familia, brindando productos únicos, servicios y tranquilidad desde el momento de la pérdida hasta el descanso eterno, con el más alto nivel de respeto y dignidad.
</p> </div> <!-- Misión --> <div class="bg-white/10 border border-green-primary rounded-2xl p-6"> <h3 class="text-3xl font-bold text-white mb-4">Misión</h3> <p class="text-white/90 text-sm leading-relaxed">
Acompañamos a las familias con soluciones integrales y efectivas, preservando la memoria de sus seres queridos con respeto, dignidad y profesionalismo a través del desarrollo emocional y logístico integral para cada familia.
</p> </div> <!-- Valores --> <div class="bg-white/10 border border-green-primary rounded-2xl p-6"> <h3 class="text-3xl font-bold text-white mb-4">Valores</h3> <div class="text-white/90 text-sm"> <p>Respeto</p> <p>Compromiso</p> <p>Integridad</p> <p>Excelencia</p> <p>Calidad en el servicio</p> </div> </div> <!-- Comunidad --> <div class="bg-white/10 border border-green-primary rounded-2xl p-6"> <h3 class="text-3xl font-bold text-white mb-4">Comunidad</h3> <p class="text-white/90 text-sm leading-relaxed">
Más de 6,000 familias confían en nuestros planes, servicios, respeto y tranquilidad que les proporcionamos. Somos una empresa sólida, con experiencia y compromiso genuino con la comunidad.
</p> </div> </div> </div> </div> </section> </section> </section> `;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/aboutus/Description.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SharedCTA", $$CTA$1, { "titleText": "\xBFQuieres conocer nuestros servicios?", "description": "Siempre estar\xE1s muy cerca de nosotros, ya sea que necesites ayuda inmediata o que nuestro equipo o planificar ese descanso eterno. Los asesores de Colinas de la Paz est\xE1n a tu disposici\xF3n.", "buttonText": "Cont\xE1ctanos", "buttonHref": "/contact" })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/aboutus/CTA.astro", void 0);

const $$Aboutus = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre Nosotros - Colinas de la Paz | Historia y Experiencia", "description": "Conoce la historia de Colinas de la Paz. M\xE1s de 27 a\xF1os de experiencia en servicios funerarios en Panam\xE1 Oeste. Misi\xF3n, visi\xF3n y valores que nos gu\xEDan." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Description", $$Description, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/aboutus.astro", void 0);

const $$file = "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/aboutus.astro";
const $$url = "/aboutus";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Aboutus,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
