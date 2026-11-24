import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import hero from "@/assets/hero.jpg";
import drywall from "@/assets/drywall.jpg";
import windowImg from "@/assets/window.jpg";
import kitchen from "@/assets/kitchen.jpg";

const PHONE = "+34600000000";
const PHONE_LABEL = "600 000 000";
const WA = "34600000000";
const NAME = "Reformas Albar";
const AREA = "Valencia y alrededores";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${NAME} — Reformas y reparaciones en ${AREA}` },
      {
        name: "description",
        content:
          "Reformas de baños, pladur, aislamiento, fontanería y cambio de ventanas. Presupuesto gratis y sin compromiso.",
      },
      { property: "og:title", content: `${NAME} — Reformas y reparaciones` },
      {
        property: "og:description",
        content: "Pequeñas y medianas reformas con trato cercano. Pide tu presupuesto gratis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { t: "Reforma de baños", d: "Platos de ducha, alicatado, microcemento y sanitarios." },
  { t: "Fontanería", d: "Reparación de fugas, tuberías, grifería y desagües." },
  { t: "Pladur y tabiquería", d: "Tabiques, falsos techos, trasdosados y armarios." },
  { t: "Aislamiento", d: "Aislamiento térmico y acústico de paredes y techos." },
  { t: "Cambio de ventanas", d: "Ventanas de PVC y aluminio con rotura de puente térmico." },
  { t: "Obra general", d: "Albañilería, pequeñas reparaciones y mejoras del hogar." },
];

const projects = [
  { img: hero, t: "Baño con ducha de obra", p: "Valencia · 2 semanas" },
  { img: drywall, t: "Nuevo tabique de pladur", p: "Paterna · 3 días" },
  { img: windowImg, t: "Ventanas de PVC", p: "Burjassot · 1 día" },
  { img: kitchen, t: "Fontanería de cocina", p: "Mislata · 1 día" },
];

const reviews = [
  { n: "Laura M.", t: "Nos reformaron el baño en el plazo acordado y lo dejaron todo limpio. Muy recomendables." },
  { n: "Javier R.", t: "Presupuesto claro desde el principio y sin sorpresas. Trabajo de pladur impecable." },
  { n: "Carmen S.", t: "Cambiaron todas las ventanas en un día. Se nota muchísimo el aislamiento." },
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
          <a href="#" className="min-w-0 truncate font-display text-lg font-extrabold">
            {NAME}<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#servicios" className="hover:text-primary">Servicios</a>
            <a href="#proyectos" className="hover:text-primary">Proyectos</a>
            <a href="#opiniones" className="hover:text-primary">Opiniones</a>
            <a href={`tel:${PHONE}`} className="hover:text-primary">{PHONE_LABEL}</a>
            <a href="#presupuesto" className={`${btnPrimary} min-h-10 text-sm`}>Pedir presupuesto</a>
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
              Reformas y reparaciones bien hechas, sin complicaciones.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Baños, fontanería, pladur, aislamiento y ventanas. Presupuesto gratis en 48 horas.
            </p>
            <div className="mt-6 grid gap-3 sm:flex">
              <a href="#presupuesto" className={btnPrimary}>Pedir presupuesto gratis</a>
              <a href={`tel:${PHONE}`} className={btnOutline}><PhoneIcon /> Llamar {PHONE_LABEL}</a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <li>✓ +15 años de experiencia</li>
              <li>✓ Presupuesto cerrado</li>
              <li>★ 4,9 en Google</li>
            </ul>
          </div>
          <img src={hero} alt="Baño reformado con ducha de microcemento" width={1280} height={960} fetchPriority="high" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
        </section>

        <section id="servicios" className="bg-card py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold md:text-4xl">Qué hacemos</h2>
            <p className="mt-2 text-muted-foreground">Pequeñas y medianas obras para tu casa o local.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <div key={s.t} className="rounded-xl border border-border bg-background p-5">
                  <span className="font-display text-sm font-bold text-primary">0{i + 1}</span>
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
            <h2 className="text-3xl font-bold md:text-4xl">Lo que dicen nuestros clientes</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {reviews.map((r) => (
                <blockquote key={r.n} className="rounded-xl border border-secondary-foreground/15 p-5">
                  <p className="text-primary" aria-label="5 estrellas">★★★★★</p>
                  <p className="mt-2">"{r.t}"</p>
                  <footer className="mt-3 text-sm opacity-70">— {r.n}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <QuoteForm />
      </main>

      <footer className="border-t border-border py-8 text-sm text-muted-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} {NAME} · {AREA}</span>
          <a href={`tel:${PHONE}`} className="min-h-11 py-3 md:py-0">{PHONE_LABEL}</a>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <a href={`tel:${PHONE}`} className={btnOutline}><PhoneIcon /> Llamar</a>
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
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };
  const input = "mt-1 block min-h-12 w-full rounded-lg border border-input bg-card px-3 text-base focus:outline-none focus:ring-2 focus:ring-ring";
  const Err = ({ k }: { k: string }) =>
    errors[k] ? <p id={`${k}-err`} role="alert" className="mt-1 text-sm text-destructive">{errors[k]}</p> : null;

  return (
    <section id="presupuesto" className="mx-auto max-w-2xl px-4 py-14 md:py-20">
      <h2 className="text-3xl font-bold md:text-4xl">Pide tu presupuesto gratis</h2>
      <p className="mt-2 text-muted-foreground">Te respondemos en menos de 48 horas, sin compromiso.</p>
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
        <button type="submit" className={`${btn} bg-whatsapp text-primary-foreground hover:opacity-90`}>Enviar por WhatsApp</button>
        <p className="text-center text-sm text-muted-foreground">
          ¿Prefieres hablar? <a href={`tel:${PHONE}`} className="font-semibold text-primary underline">Llama al {PHONE_LABEL}</a>
        </p>
      </form>
    </section>
  );
}
