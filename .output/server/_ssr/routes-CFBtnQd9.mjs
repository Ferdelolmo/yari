import { n as __toESM } from "../_runtime.mjs";
import { n as NAME, t as AREA } from "./routes-DEEIMvkE.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Clock3, i as HeartHandshake, n as Star, o as Check, r as MapPin, t as Wrench } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CFBtnQd9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-ftjTO6PJ.jpg";
var drywall_default = "/assets/drywall-BnnzQK3B.jpg";
var window_default = "/assets/window-bClFBmmX.jpg";
var kitchen_default = "/assets/kitchen-PbI8w1Rm.jpg";
var services = [
	{
		t: "Fontanería",
		d: "Nuestra especialidad: reparaciones, instalaciones y soluciones para tu hogar.",
		featured: true
	},
	{
		t: "Reformas generales",
		d: "Mejoras y renovación de espacios con atención a cada detalle."
	},
	{
		t: "Albañilería",
		d: "Trabajos de mampostería y obra para renovar y cuidar tu vivienda."
	},
	{
		t: "Pladur",
		d: "Instalación de pladur para adaptar y renovar tus espacios."
	},
	{
		t: "Aislamiento",
		d: "Mejoras de aislamiento para paredes y techos."
	},
	{
		t: "Cambio de ventanas",
		d: "Sustitución de ventanas para renovar y mejorar tu hogar."
	},
	{
		t: "Mantenimiento",
		d: "Reparaciones y cuidado habitual de viviendas y espacios."
	},
	{
		t: "Mudanzas y portes",
		d: "Ayuda cercana para traslados y trabajos de mudanza."
	}
];
var projects = [
	{
		img: hero_default,
		t: "Reformas de baños",
		p: "Renovación y cuidado en cada detalle"
	},
	{
		img: drywall_default,
		t: "Instalación de pladur",
		p: "Soluciones para adaptar tus espacios"
	},
	{
		img: window_default,
		t: "Cambio de ventanas",
		p: "Mejoras para tu vivienda"
	},
	{
		img: kitchen_default,
		t: "Trabajos de fontanería",
		p: "Nuestra principal especialidad"
	}
];
var btn = "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
var btnPrimary = `${btn} bg-primary text-primary-foreground hover:bg-primary/90`;
var btnOutline = `${btn} border border-input bg-card text-foreground hover:bg-muted`;
function Index() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							className: "min-w-0 truncate font-display text-lg font-extrabold",
							children: [NAME, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-6 text-sm font-medium md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#servicios",
									className: "hover:text-primary",
									children: "Servicios"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#proyectos",
									className: "hover:text-primary",
									children: "Proyectos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#opiniones",
									className: "hover:text-primary",
									children: "Opiniones"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#presupuesto",
									className: `${btnPrimary} min-h-10 text-sm`,
									children: "Contactar"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border md:hidden",
							"aria-label": open ? "Cerrar menú" : "Abrir menú",
							"aria-expanded": open,
							onClick: () => setOpen(!open),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 24 24",
								className: "h-5 w-5",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								"aria-hidden": true,
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12M18 6 6 18" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7h16M4 12h16M4 17h16" })
							})
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-t border-border px-4 pb-4 md:hidden",
					onClick: () => setOpen(false),
					children: [
						["#servicios", "Servicios"],
						["#proyectos", "Proyectos"],
						["#opiniones", "Opiniones"],
						["#presupuesto", "Pedir presupuesto"]
					].map(([h, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						className: "flex min-h-12 items-center border-b border-border text-base font-medium",
						children: l
					}, h))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-8 md:grid-cols-2 md:items-center md:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 inline-flex rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground",
							children: AREA
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-[2.1rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl",
							children: "Fontanería y reformas, con el cuidado de una familia."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-muted-foreground",
							children: "Somos Johann y Oliver. Trabajamos con profesionalidad, puntualidad y respeto por tu hogar en Salamanca, alrededores y Zamora."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-3 sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#presupuesto",
								className: btnPrimary,
								children: "Cuéntanos qué necesitas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#servicios",
								className: btnOutline,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "h-5 w-5" }), " Ver servicios"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "inline-flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-primary" }), " Trato familiar"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "inline-flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-4 w-4 text-primary" }), " Puntualidad"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "inline-flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-4 w-4 text-primary" }), " Cuidamos tu hogar"]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_default,
							alt: "Espacio renovado con acabados cuidados",
							width: 1280,
							height: 960,
							fetchPriority: "high",
							className: "aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-4 left-4 right-4 rounded-xl bg-background/95 p-4 shadow-soft backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display font-bold",
								children: "Un negocio familiar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Johann y Oliver, contigo y con tu casa."
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-border bg-background py-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-5 w-5 fill-current" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Valoración global de clientes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-xl font-bold",
								children: ["9,1 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-muted-foreground",
									children: "/ 10"
								})]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl text-center text-sm text-muted-foreground sm:text-right",
							children: "La confianza se gana con puntualidad, atención personal, trabajo limpio y cuidado, buena relación calidad-precio y seguimiento después del trabajo."
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "servicios",
					className: "bg-card py-14 md:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-bold md:text-4xl",
								children: "Qué hacemos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground",
								children: "Johann y Oliver te ayudan con fontanería, reformas y el cuidado de tu vivienda."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
								children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `rounded-xl border bg-background p-5 ${"featured" in s && s.featured ? "border-primary shadow-soft sm:col-span-2 lg:col-span-2" : "border-border"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-sm font-bold text-primary",
											children: "featured" in s && s.featured ? "ESPECIALIDAD" : `0${i + 1}`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 text-xl font-bold",
											children: s.t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-muted-foreground",
											children: s.d
										})
									]
								}, s.t))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "proyectos",
					className: "mx-auto max-w-6xl px-4 py-14 md:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold md:text-4xl",
						children: "Trabajos recientes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 sm:grid-cols-2",
						children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: p.t,
							loading: "lazy",
							width: 960,
							height: 720,
							className: "aspect-[4/3] w-full rounded-xl object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-lg font-bold",
								children: p.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: p.p
							})]
						})] }, p.t))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "opiniones",
					className: "bg-secondary py-14 text-secondary-foreground md:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-6xl px-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-3xl text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold uppercase tracking-[0.16em] text-primary",
									children: "Opiniones de clientes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-3xl font-bold md:text-4xl",
									children: "La confianza se construye con cada trabajo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-secondary-foreground/75",
									children: "La valoración global de 9,1 refleja la experiencia de nuestros clientes. Valoramos cada opinión y el compromiso que ponemos en cada hogar."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 px-4 py-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-primary text-primary" }),
										" Valoración global: ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "9,1 / 10" })
									]
								})
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-card py-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3",
						children: [
							{
								icon: Clock3,
								title: "Puntualidad",
								text: "Respetamos tu tiempo y nos comprometemos con lo acordado."
							},
							{
								icon: HeartHandshake,
								title: "Trato cercano",
								text: "Atención personal y comunicación clara durante el trabajo."
							},
							{
								icon: Check,
								title: "Cuidado y detalle",
								text: "Trabajamos con limpieza y respeto por tu casa."
							}
						].map(({ icon: Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-background p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-lg font-bold",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: text
								})
							]
						}, title))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-6xl px-4 py-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4 rounded-2xl bg-accent p-6 sm:items-center sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-1 h-6 w-6 shrink-0 text-accent-foreground sm:mt-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-bold",
							children: "Trabajamos en Salamanca y Zamora"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-accent-foreground/80",
							children: "Atendemos Salamanca y localidades de los alrededores, además de Zamora. Consúltanos por tu zona."
						})] })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border py-8 text-sm text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 md:flex-row md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						NAME,
						" · ",
						AREA
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Johann y Oliver · Fontanería, reformas y mantenimiento" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#presupuesto",
					className: btnOutline,
					children: "Contactar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#presupuesto",
					className: `${btnPrimary} whitespace-nowrap px-3 text-[0.95rem]`,
					children: "Pedir presupuesto"
				})]
			})
		]
	});
}
function QuoteForm() {
	const [errors, setErrors] = (0, import_react.useState)({});
	const submit = (e) => {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		const name = String(f.get("name") || "").trim();
		const phone = String(f.get("phone") || "").trim();
		const service = String(f.get("service") || "");
		const msg = String(f.get("msg") || "").trim();
		const errs = {};
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
	const Err = ({ k }) => errors[k] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		id: `${k}-err`,
		role: "alert",
		className: "mt-1 text-sm text-destructive",
		children: errors[k]
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "presupuesto",
		className: "mx-auto max-w-2xl px-4 py-14 md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-bold md:text-4xl",
				children: "Pide tu presupuesto gratis"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Cuéntanos qué necesitas y nos pondremos en contacto contigo. Atención personal y sin compromiso."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				noValidate: true,
				className: "mt-8 grid gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "font-medium",
						children: [
							"Nombre",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								autoComplete: "name",
								className: input,
								"aria-invalid": !!errors["name"],
								"aria-describedby": "name-err"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "name" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "font-medium",
						children: [
							"Teléfono",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "phone",
								type: "tel",
								inputMode: "tel",
								autoComplete: "tel",
								className: input,
								"aria-invalid": !!errors["phone"],
								"aria-describedby": "phone-err"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "phone" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "font-medium",
						children: ["Tipo de trabajo", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "service",
							className: input,
							defaultValue: "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Selecciona una opción"
							}), services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s.t }, s.t))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "font-medium",
						children: [
							"Describe el trabajo",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "msg",
								rows: 4,
								className: `${input} py-3`,
								"aria-invalid": !!errors["msg"],
								"aria-describedby": "msg-err"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "msg" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: `${btn} bg-primary text-primary-foreground hover:opacity-90`,
						children: "Preparar consulta por correo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-sm text-muted-foreground",
						children: "Al enviar, se abrirá tu aplicación de correo con la consulta preparada."
					})
				]
			})
		]
	});
}
//#endregion
export { Index as component };
