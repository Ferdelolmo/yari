import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import hero from "@/assets/hero.jpg";
import drywall from "@/assets/drywall.jpg";
import windowImg from "@/assets/window.jpg";
import kitchen from "@/assets/kitchen.jpg";
import { Check, Clock3, HeartHandshake, MapPin, Star, Wrench } from "lucide-react";

// Contact details were not included in the supplied project information.
const NAME = "Yari Multiservicios";
const AREA = "Salamanca, alrededores y Zamora";
const LOGO_URL = "https://i.imgur.com/ntoC08t.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${NAME} — Reformas y reparaciones en ${AREA}` },
      {
        name: "description",
        content:
          "Fontanería y reformas en Salamanca, alrededores y Zamora. Un negocio familiar de Johann y Oliver, cercano, cuidadoso y puntual.",
      },
      { property: "og:title", content: `${NAME} — Reformas y reparaciones` },
      {
        property: "og:description",
        content: "Fontanería, reformas y mantenimiento con trato familiar en Salamanca y Zamora.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { t: "Fontanería", d: "Nuestra especialidad: reparaciones, instalaciones y soluciones para tu hogar.", featured: true },
  { t: "Reformas generales", d: "Mejoras y renovación de espacios con atención a cada detalle." },
  { t: "Albañilería", d: "Trabajos de mampostería y obra para renovar y cuidar tu vivienda." },
  { t: "Pladur", d: "Instalación de pladur para adaptar y renovar tus espacios." },
  { t: "Aislamiento", d: "Mejoras de aislamiento para paredes y techos." },
  { t: "Cambio de ventanas", d: "Sustitución de ventanas para renovar y mejorar tu hogar." },
  { t: "Mantenimiento", d: "Reparaciones y cuidado habitual de viviendas y espacios." },
  { t: "Mudanzas y portes", d: "Ayuda cercana para traslados y trabajos de mudanza." },
];

const projects = [
  { img: hero, t: "Reformas de baños", p: "Renovación y cuidado en cada detalle" },
  { img: drywall, t: "Instalación de pladur", p: "Soluciones para adaptar tus espacios" },
  { img: windowImg, t: "Cambio de ventanas", p: "Mejoras para tu vivienda" },
  { img: kitchen, t: "Trabajos de fontanería", p: "Nuestra principal especialidad" },
];

const reviews = [
  {
    name: "Ana", date: "29-09-2026", service: "Instalación termo eléctrico", rating: "10 – Valoración Global",
    text: "Todo perfecto",
    response: "Muchas gracias, ana, por tu valoración y por las 5 estrellas ⭐⭐⭐⭐⭐. Ha sido un placer ayudarte. Me alegra mucho que haya quedado todo perfecto. ¡gracias por confiar en multiserviciosyari! 😊",
  },
  {
    name: "Auxiliadora", date: "08-08-2026", service: "Fontanero 24 h para avería de cisterna empotrada de baño de inodoro wc, descargador de la", rating: "9,7 – Valoración Global",
    text: "Muy eficiente. Puntualidad en el servicio. Cuidado en el proceso de trabajo  Limpieza en el mismo  Volvió al día siguiente para comprobar que funcionaba correctamente, puesto que yo se lo pedí. Confianza en mí, a pesar de no poder pagarle acabado el trabajo, porque no suelo tener dinero en metálico.",
    response: "Muchísimas gracias, auxiliadora, por tomarte el tiempo de dejar esta valoración y por tus palabras. 😊 Para mí ha sido un placer ayudarte. Intento que cada trabajo se haga con tranquilidad, cuidado y, sobre todo, dejando al cliente con la seguridad de que todo ha quedado bien. Por eso no me importa volver a comprobarlo al día siguiente si es necesario. También te agradezco mucho la confianza que tuviste conmigo desde el primer momento. Ha sido un placer tratar contigo y estaré encantado de ayudarte de nuevo cuando lo necesites. ¡un abrazo y muchas gracias, auxiliadora! 😊",
  },
  {
    name: "Ignacio", date: "31-07-2026", service: "Construir un tabique", rating: "9 – Valoración Global",
    text: "Puntual y buen profesional",
    response: "Muchas gracias, ignacio, por tu valoración y por tus palabras. Ha sido un placer ayudarte. Me alegra saber que quedaste satisfecho con el trabajo y con la atención recibida. Te agradezco mucho la confianza y espero poder ayudarte de nuevo cuando lo necesites. ¡un saludo!",
  },
  {
    name: "Rosa", date: "19-02-2026", service: "Presupuesto de albañilería para poner 3 metros y un termo", rating: "10 – Valoración Global",
    text: "Buen trabajo rápido y buen precio.",
    response: "Muchas gracias, rosa, por tu valoración y por confiar en mí. 😊 me alegra mucho saber que quedaste contenta con el resultado, tanto por el trabajo realizado como por el precio. Ha sido un placer ayudarte y espero poder atenderte de nuevo cuando lo necesites. ¡un saludo y muchas gracias!",
  },
  {
    name: "M Paz", date: "29-01-2026", service: "Fontanero para reparación de calentador en local comercial", rating: "10 – Valoración Global",
    text: "LA PROFESIONALIDAD -PUNTUALIDAD Y TRATO CORRECTO DE 10",
    response: "Muchísimas gracias, m paz, por tomarte el tiempo de dejar esta valoración y por esas palabras tan bonitas. 😊 me alegra mucho saber que quedaste satisfecha con mi trabajo, la puntualidad y el trato recibido. Para mí es muy importante trabajar con responsabilidad, respeto y profesionalidad, así que recibir una valoración como la tuya es una gran satisfacción. Ha sido un placer atenderte. ¡muchas gracias por la confianza y espero poder ayudarte de nuevo cuando lo necesites!",
  },
  {
    name: "Ester", date: "04-09-2025", service: "Persianistas para reparación de persiana de pvc", rating: "10 – Valoración Global",
    text: "El mismo día que lo solicité, acudieron a mi casa para ver lo que necesitaba y darme presupuesto, y al día siguiente lo tenía arreglado. Fueron rápidos y cuidadosos.",
    response: "Muchas gracias, ester, por tu valoración y por tus bonitas palabras. 😊 aunque haya tardado en responder a tu reseña, quería agradecerte igualmente que te tomaras el tiempo de compartir tu experiencia. Me alegra mucho saber que quedaste satisfecha con la rapidez y el cuidado con el que realizamos el trabajo. Para mí es muy importante atender lo antes posible y, al mismo tiempo, hacer las cosas bien. Fue un placer ayudarte, ester. Muchas gracias por la confianza y espero poder volver a ayudarte cuando lo necesites. ¡un saludo! 😊",
  },
  {
    name: "Mila", date: "05-03-2025", service: "Reforma de baño para alicatar suelos, fontanería, iluminación", rating: "10 – Valoración Global",
    text: "Todo ha sido muy profesional, lo recomiendo sin dudar. El acabado es impecable. Gracias Oliver",
    response: "Hola mila ¡ Muchas gracias por tu valoración.  Para mí es muy importante que los clientes queden a gusto con mi trabajo. De nuevo muchas gracias ¡",
  },
  {
    name: "Paloma", date: "04-10-2024", service: "Presupuesto para cambiar sanitarios", rating: "10 – Valoración Global",
    text: "Muy profesional, rápido y bien de precio. Recomiendo 100%",
  },
  {
    name: "Curto", date: "26-10-2023", service: "Presupuestos de reforma integral para baño de entre 3 y 4 m2", rating: "9,7 – Valoración Global",
    text: "Persona muy amable y dispuesta a ayudar.",
  },
  {
    name: "Gregoria", date: "30-11-2022", service: "Presupuesto para instalación de radiadores eléctricos - cerámico en piso", rating: "8,7 – Valoración Global",
    text: "Sólo vinieron a ver que es lo que realmente quiero, fueron muy amables, pero de momento eso es todo, mi demanda y su oferta no se acoplaban, pero agradecida.",
  },
  {
    name: "Pablo", date: "19-11-2022", service: "Manitas para reparación de muebles", rating: "10 – Valoración Global",
    text: "Rapidez, humanidad y pericia",
  },
  {
    name: "Fernando",
    text: "Solo tengo buenas palabras para Oliver, Johann, Rubén y todo su equipo.\n\n¿Sabéis esa sensación de encontrar por fin a los profesionales que uno siempre espera encontrar cuando se embarca en la reforma de su casa? Gente comprometida, seria, profesional y en la que puedes confiar. Eso es precisamente lo que encontramos en Yari.\n\nOliver y su equipo han trabajado de forma continuada en nuestro piso, transformando una casa antigua en el nuevo hogar de mi mujer y mío, y haciéndolo además en un tiempo récord. Siempre atentos, cuidadosos con los detalles y, sobre todo, con una profesionalidad y dedicación difíciles de encontrar.\n\nPero si hay algo que realmente demuestra cómo trabajan es su forma de responder ante los imprevistos. Durante la obra, accidentalmente hicimos un agujero con el taladro que dañó ligeramente la pared de una vecina. Oliver no solo se ofreció inmediatamente a solucionarlo, sino que se preocupó de encontrar exactamente el mismo color de pintura para dejar la pared impecable. Ese tipo de detalles dicen mucho de una empresa y de las personas que hay detrás.\n\nSin duda, profesionales como la copa de un pino. Ha sido un auténtico gusto trabajar con ellos y los recomendaría sin pensarlo dos veces.",
  },
];

const btn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
const btnPrimary = `${btn} bg-primary text-primary-foreground hover:bg-primary/90`;
const btnOutline = `${btn} border border-input bg-card text-foreground hover:bg-muted`;

function PhoneIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
          <a href="#" aria-label={`${NAME} — inicio`} className="flex min-w-0 items-center rounded-lg">
            <img src={LOGO_URL} alt={NAME} className="h-12 w-auto max-w-[min(66vw,16rem)] object-contain sm:h-14 sm:max-w-[18rem]" />
            <span className="sr-only">{NAME}</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#servicios" className="hover:text-primary">Servicios</a>
            <a href="#proyectos" className="hover:text-primary">Proyectos</a>
            <a href="#opiniones" className="hover:text-primary">Opiniones</a>
            <a href="#presupuesto" className={`${btnPrimary} min-h-10 text-sm`}>Contactar</a>
          </nav>
          <button
            className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="border-t border-border px-4 pb-4 md:hidden" onClick={() => setOpen(false)}>
            {[["#servicios", "Servicios"], ["#proyectos", "Proyectos"], ["#opiniones", "Opiniones"], ["#presupuesto", "Pedir presupuesto"]].map(([h, l]) => (
              <a key={h} href={h} className="flex min-h-12 items-center border-b border-border text-base font-medium">{l}</a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-8 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
              {AREA}
            </p>
            <h1 className="text-[2.1rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Fontanería y reformas, con el cuidado de una familia.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Somos Johann y Oliver. Trabajamos con profesionalidad, puntualidad y respeto por tu hogar en Salamanca, alrededores y Zamora.
            </p>
            <div className="mt-6 grid gap-3 sm:flex">
              <a href="#presupuesto" className={btnPrimary}>Cuéntanos qué necesitas</a>
              <a href="#servicios" className={btnOutline}><Wrench className="h-5 w-5" /> Ver servicios</a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <li className="inline-flex items-center gap-1"><Check className="h-4 w-4 text-primary" /> Trato familiar</li>
              <li className="inline-flex items-center gap-1"><Clock3 className="h-4 w-4 text-primary" /> Puntualidad</li>
              <li className="inline-flex items-center gap-1"><HeartHandshake className="h-4 w-4 text-primary" /> Cuidamos tu hogar</li>
            </ul>
          </div>
          <div className="relative">
            <img src={hero} alt="Espacio renovado con acabados cuidados" width={1280} height={960} fetchPriority="high" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-background/95 p-4 shadow-soft backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
              <p className="font-display font-bold">Un negocio familiar</p>
              <p className="mt-1 text-sm text-muted-foreground">Johann y Oliver, contigo y con tu casa.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-background py-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground"><Star className="h-5 w-5 fill-current" /></div>
              <div><p className="text-sm text-muted-foreground">Valoración global de clientes</p><p className="font-display text-xl font-bold">9,1 <span className="text-sm font-medium text-muted-foreground">/ 10</span></p></div>
            </div>
            <p className="max-w-xl text-center text-sm text-muted-foreground sm:text-right">La confianza se gana con puntualidad, atención personal, trabajo limpio y cuidado, buena relación calidad-precio y seguimiento después del trabajo.</p>
          </div>
        </section>

        <section id="servicios" className="bg-card py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold md:text-4xl">Qué hacemos</h2>
            <p className="mt-2 text-muted-foreground">Johann y Oliver te ayudan con fontanería, reformas y el cuidado de tu vivienda.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <div key={s.t} className={`rounded-xl border bg-background p-5 ${"featured" in s && s.featured ? "border-primary shadow-soft sm:col-span-2 lg:col-span-2" : "border-border"}`}>
                  <span className="font-display text-sm font-bold text-primary">{"featured" in s && s.featured ? "ESPECIALIDAD" : `0${i + 1}`}</span>
                  <h3 className="mt-1 text-xl font-bold">{s.t}</h3>
                  <p className="mt-1 text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Trabajos recientes</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <figure key={p.t}>
                <img src={p.img} alt={p.t} loading="lazy" width={960} height={720} className="aspect-[4/3] w-full rounded-xl object-cover" />
                <figcaption className="mt-3">
                  <span className="block font-display text-lg font-bold">{p.t}</span>
                  <span className="text-sm text-muted-foreground">{p.p}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="opiniones" className="bg-secondary py-14 text-secondary-foreground md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Opiniones de clientes</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">La confianza se construye con cada trabajo</h2>
              <p className="mt-4 text-secondary-foreground/75">Valoración global proporcionada en la fuente original. Estas son las opiniones de clientes y respuestas originales de Yari Multiservicios.</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 px-4 py-2 text-sm"><Star className="h-4 w-4 fill-primary text-primary" /> Valoración Global: <strong>9,1</strong></div>
              <a href="https://www.cronoshare.com/croner-3959200-reformas-yari" target="_blank" rel="noreferrer" className={`${btnOutline} mt-5 w-full whitespace-normal text-center sm:w-auto`}>
                No te quedes solo con nuestra palabra: mira qué opinan nuestros clientes en Cronoshare <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {reviews.map((review) => (
                <article key={review.name} className="min-w-0 rounded-xl border border-secondary-foreground/15 bg-background p-5 text-foreground shadow-soft sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div><h3 className="font-display text-lg font-bold">{review.name}</h3><p className="mt-1 text-sm text-muted-foreground">{review.date}</p></div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground"><Star className="h-4 w-4 fill-current" /> {review.rating}</span>
                  </div>
                  {review.service && <p className="mt-4 text-sm text-muted-foreground"><span className="font-semibold text-foreground">Servicio: </span>{review.service}</p>}
                  <blockquote className="mt-4 whitespace-pre-line border-l-2 border-primary pl-4 text-base leading-relaxed">{review.text}</blockquote>
                  {review.response && <details className="mt-5 border-t border-border pt-4">
                    <summary className="min-h-11 cursor-pointer py-2 text-sm font-semibold text-primary">Respuesta de Yari Multiservicios</summary>
                    <p className="mt-2 rounded-lg bg-muted p-4 text-sm leading-relaxed text-muted-foreground">{review.response}</p>
                  </details>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-12">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3">
            {[{ icon: Clock3, title: "Puntualidad", text: "Respetamos tu tiempo y nos comprometemos con lo acordado." }, { icon: HeartHandshake, title: "Trato cercano", text: "Atención personal y comunicación clara durante el trabajo." }, { icon: Check, title: "Cuidado y detalle", text: "Trabajamos con limpieza y respeto por tu casa." }].map(({ icon: Icon, title, text }) => <div key={title} className="rounded-xl border border-border bg-background p-5"><Icon className="h-5 w-5 text-primary" /><h3 className="mt-3 font-display text-lg font-bold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></div>)}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-start gap-4 rounded-2xl bg-accent p-6 sm:items-center sm:p-8"><MapPin className="mt-1 h-6 w-6 shrink-0 text-accent-foreground sm:mt-0" /><div><h2 className="font-display text-xl font-bold">Trabajamos en Salamanca y Zamora</h2><p className="mt-1 text-accent-foreground/80">Atendemos Salamanca y localidades de los alrededores, además de Zamora. Consúltanos por tu zona.</p></div></div>
        </section>

        <QuoteForm />
      </main>

      <footer className="border-t border-border py-8 text-sm text-muted-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} {NAME} · {AREA}</span>
          <span>Johann y Oliver · Fontanería, reformas y mudanzas</span>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <a href="#presupuesto" className={btnOutline}>Contactar</a>
        <a href="#presupuesto" className={`${btnPrimary} whitespace-nowrap px-3 text-[0.95rem]`}>Pedir presupuesto</a>
      </div>
    </div>
  );
}

function QuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const phone = String(f.get("phone") || "").trim();
    const service = String(f.get("service") || "");
    const msg = String(f.get("msg") || "").trim();
    const errs: Record<string, string> = {};
    if (!name) errs["name"] = "Escribe tu nombre.";
    if (phone.replace(/\D/g, "").length < 9) errs["phone"] = "Introduce un teléfono válido.";
    if (!msg) errs["msg"] = "Cuéntanos brevemente el trabajo.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const text = `Hola, soy ${name} (${phone}). Me gustaría pedir presupuesto${service ? ` para: ${service}` : ""}.\n${msg}`;
    const subject = encodeURIComponent(`Consulta de ${name} · ${service || "Yari Multiservicios"}`);
    window.location.href = `mailto:?subject=${subject}&body=${encodeURIComponent(text)}`;
  };
  const input = "mt-1 block min-h-12 w-full rounded-lg border border-input bg-card px-3 text-base focus:outline-none focus:ring-2 focus:ring-ring";
  const Err = ({ k }: { k: string }) =>
    errors[k] ? <p id={`${k}-err`} role="alert" className="mt-1 text-sm text-destructive">{errors[k]}</p> : null;

  return (
    <section id="presupuesto" className="mx-auto max-w-2xl px-4 py-14 md:py-20">
      <h2 className="text-3xl font-bold md:text-4xl">Pide tu presupuesto gratis</h2>
      <p className="mt-2 text-muted-foreground">Cuéntanos qué necesitas y nos pondremos en contacto contigo. Atención personal y sin compromiso.</p>
      <form onSubmit={submit} noValidate className="mt-8 grid gap-5">
        <label className="font-medium">Nombre
          <input name="name" autoComplete="name" className={input} aria-invalid={!!errors["name"]} aria-describedby="name-err" />
          <Err k="name" />
        </label>
        <label className="font-medium">Teléfono
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" className={input} aria-invalid={!!errors["phone"]} aria-describedby="phone-err" />
          <Err k="phone" />
        </label>
        <label className="font-medium">Tipo de trabajo
          <select name="service" className={input} defaultValue="">
            <option value="">Selecciona una opción</option>
            {services.map((s) => <option key={s.t}>{s.t}</option>)}
          </select>
        </label>
        <label className="font-medium">Describe el trabajo
          <textarea name="msg" rows={4} className={`${input} py-3`} aria-invalid={!!errors["msg"]} aria-describedby="msg-err" />
          <Err k="msg" />
        </label>
        <button type="submit" className={`${btn} bg-primary text-primary-foreground hover:opacity-90`}>Preparar consulta por correo</button>
        <p className="text-center text-sm text-muted-foreground">Al enviar, se abrirá tu aplicación de correo con la consulta preparada.</p>
      </form>
    </section>
  );
}
