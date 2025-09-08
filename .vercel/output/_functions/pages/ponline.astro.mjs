import { f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_fVTS04Ou.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DJ_-zwXy.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-8 bg-white"> <div class="container mx-auto px-6"> <!-- Hero Image --> <div class="max-w-6xl mx-auto"> <div class="rounded-2xl overflow-hidden shadow-lg relative"> <img src="/images/ponline/pagoenlinea.webp" alt="Pagos en línea Colinas de la Paz" class="w-full h-full object-cover"> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/ponline/Hero.astro", void 0);

const $$PaymentMethods = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white"> <div class="container mx-auto px-6"> <div class="max-w-5xl mx-auto text-center"> <!-- Title --> <h2 class="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
Puedes utilizar los siguientes medios digitales para realizar sus pagos
</h2> <!-- Payment Methods Buttons --> <div class="flex flex-wrap justify-center text-2xl gap-12 mt-12 mb-16"> <button class="px-20 py-3 border-2 border-green-dark text-green-dark rounded-xl font-bold hover:bg-green-dark hover:text-white transition-all duration-300">
ACH
</button> <button class="px-20 py-3 border-2 border-green-dark text-green-dark rounded-xl font-bold hover:bg-green-dark hover:text-white transition-all duration-300">
Yappy
</button> <button class="px-20 py-3 border-2 border-green-dark text-green-dark rounded-xl font-bold hover:bg-green-dark hover:text-white transition-all duration-300">
Descuento directo
</button> </div> <!-- Additional Payment Options --> <div class="text-left max-w-3xl mx-auto"> <p class="text-green-dark/80 mb-4 font-medium">
Otras formas de pago disponibles son:
</p> <div class="space-y-1 text-dark-gray/80 font-bold"> <div class="flex items-start"> <span class="font-bold mr-2">1.</span> <span>Efectivo y tarjeta de crédito o débito - puede pagar en nuestra oficina ubicada en el Campo Santo.</span> </div> <div class="flex items-start"> <span class="font-bold mr-2">2.</span> <span>Multipagos</span> </div> <div class="flex items-start"> <span class="font-bold mr-2">3.</span> <span>Punto Pago</span> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/components/ponline/PaymentMethods.astro", void 0);

const $$Ponline = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pagos en L\xEDnea - Colinas de la Paz" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "PaymentMethods", $$PaymentMethods, {})} ` })}`;
}, "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/ponline.astro", void 0);

const $$file = "C:/Users/gerenteit/Desktop/Semah/Sistemas/Pagina Web - Colinas de la Paz/colinaswebpage/src/pages/ponline.astro";
const $$url = "/ponline";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ponline,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
