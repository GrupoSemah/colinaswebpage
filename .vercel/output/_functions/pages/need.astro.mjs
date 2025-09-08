import { f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_fVTS04Ou.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DJ_-zwXy.mjs';
import 'clsx';
import { $ as $$CTA$1 } from '../chunks/CTA_BT-96nTr.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-white overflow-hidden min-h-screen flex items-center"> <div class="container mx-auto px-6 relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Left Content --> <div class="space-y-6"> <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-gray leading-tight mb-4 md:mb-6">
Planes
<br> <span class="text-green-primary">Necesidad Inmediata</span> </h1> <p class="text-base md:text-lg text-dark-gray/80 leading-relaxed mb-6 md:mb-8">
Un acompañamiento integral que te brinda contigo en el momento más difícil. Nuestros planes de necesidad inmediata incluyen todos los servicios que necesitas. Ofrecemos servicios funerarios completos con atención inmediata, acompañamiento especializado y servicios los cuales son asequibles y eficaces.
</p> </div> <!-- Right Image --> <div class="relative"> <div class="relative overflow-hidden"> <div class="relative bg-white"> <img src="/images/need/needhero.webp" alt="Necesidad Inmediata" class="w-full h-full object-cover"> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/need/Hero.astro", void 0);

const $$Description = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-white"> <!-- Top separator --> <div class="w-72 h-0.5 bg-light-gray mb-12 mx-auto"></div> <!-- Main image --> <div class="w-full"> <img src="/images/need/bgasistencia.webp" alt="Asistencia Inmediata" class="w-full h-full object-cover"> </div> <!-- Curved bottom border --> <div class="absolute bottom-0 left-0 w-full h-16 overflow-hidden"> <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-full"> <path d="M0,120 C300,0 900,0 1200,120 L1200,120 L0,120 Z" fill="white"></path> </svg> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/need/Description.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-6"> <!-- Title with separator --> <div class="text-center mb-12"> <h2 class="text-3xl lg:text-4xl font-bold text-green-primary">
Asistencia Inmediata
</h2> <div class="w-72 h-0.5 bg-light-gray mt-8 mx-auto"></div> </div> <!-- Services Grid --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"> <!-- Service 1 --> <div class="bg-white text-center border border-light-gray/30 rounded-lg p-4"> <div class="mb-4"> <img src="/images/home/desc1.webp" alt="Planificación de último momento" class="w-full h-48 object-cover rounded-lg"> </div> <h3 class="text-lg font-bold text-dark-gray mb-3">
Planificación de<br>último momento
</h3> <p class="text-dark-gray/70 text-sm leading-relaxed px-2">
Nuestro equipo especializado te acompaña en cada paso del proceso, brindándote la orientación necesaria para tomar las mejores decisiones en momentos difíciles.
</p> </div> <!-- Service 2 --> <div class="bg-white text-center border border-light-gray/30 rounded-lg p-4"> <div class="mb-4"> <img src="/images/need/inme2.webp" alt="Asesoría Experiencial" class="w-full h-48 object-cover rounded-lg"> </div> <h3 class="text-lg font-bold text-dark-gray mb-3">
Asesoría<br>Experiencial
</h3> <p class="text-dark-gray/70 text-sm leading-relaxed px-2">
Te ofrecemos una asesoría integral basada en nuestra experiencia, ayudándote a elegir los servicios que mejor se adapten a tus necesidades y presupuesto.
</p> </div> <!-- Service 3 --> <div class="bg-white text-center border border-light-gray/30 rounded-lg p-4"> <div class="mb-4"> <img src="/images/burning/osarios.webp" alt="Soluciones Dignas" class="w-full h-48 object-cover rounded-lg"> </div> <h3 class="text-lg font-bold text-dark-gray mb-3">
Soluciones Dignas
</h3> <p class="text-dark-gray/70 text-sm leading-relaxed px-2">
Ofrecemos soluciones funerarias que honran la memoria de tu ser querido con la dignidad y respeto que merece, adaptándonos a tus posibilidades económicas.
</p> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/need/Services.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SharedCTA", $$CTA$1, { "titleText": "\xBFTienes una necesidad inmediata?", "description": "Siempre estar\xE1s muy cerca de nosotros que nuestros asesores especializados est\xE1n listos para ayudarte a que nuestro equipo de Colinas de la Paz est\xE9 en tu disposici\xF3n.", "buttonText": "Cont\xE1ctanos", "buttonHref": "/contact" })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/need/CTA.astro", void 0);

const $$Need = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Necesidad Inmediata - Colinas de la Paz" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Description", $$Description, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ` })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/need.astro", void 0);

const $$file = "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/need.astro";
const $$url = "/need";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Need,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
