import { n as __toESM } from "../_runtime.mjs";
import { n as NAME, t as AREA } from "./routes-BbbMBfHl.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BL4WG_Bk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-ftjTO6PJ.jpg";
var drywall_default = "/assets/drywall-BnnzQK3B.jpg";
var window_default = "/assets/window-bClFBmmX.jpg";
var kitchen_default = "/assets/kitchen-PbI8w1Rm.jpg";
var PHONE = "+34600000000";
var PHONE_LABEL = "600 000 000";
var WA = "34600000000";
var services = [
	{
		t: "Reforma de baños",
		d: "Platos de ducha, alicatado, microcemento y sanitarios."
	},
	{
		t: "Fontanería",
		d: "Reparación de fugas, tuberías, grifería y desagües."
	},
	{
		t: "Pladur y tabiquería",
		d: "Tabiques, falsos techos, trasdosados y armarios."
	},
	{
		t: "Aislamiento",
		d: "Aislamiento térmico y acústico de paredes y techos."
	},
	{
		t: "Cambio de ventanas",
		d: "Ventanas de PVC y aluminio con rotura de puente térmico."
	},
	{
		t: "Obra general",
		d: "Albañilería, pequeñas reparaciones y mejoras del hogar."
	}
];
var projects = [
	{
		img: hero_default,
		t: "Baño con ducha de obra",
		p: "Valencia · 2 semanas"
	},
	{
		img: drywall_default,
		t: "Nuevo tabique de pladur",
		p: "Paterna · 3 días"
	},
	{
		img: window_default,
		t: "Ventanas de PVC",
		p: "Burjassot · 1 día"
	},
	{
		img: kitchen_default,
		t: "Fontanería de cocina",
		p: "Mislata · 1 día"
	}
];
var reviews = [
	{
		n: "Laura M.",
		t: "Nos reformaron el baño en el plazo acordado y lo dejaron todo limpio. Muy recomendables."
	},
	{
		n: "Javier R.",
		t: "Presupuesto claro desde el principio y sin sorpresas. Trabajo de pladur impecable."
	},
	{
		n: "Carmen S.",
		t: "Cambiaron todas las ventanas en un día. Se nota muchísimo el aislamiento."
	}
];
var btn = "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
var btnPrimary = `${btn} bg-primary text-primary-foreground hover:bg-primary/90`;
var btnOutline = `${btn} border border-input bg-card text-foreground hover:bg-muted`;
function PhoneIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"aria-hidden": true,
		viewBox: "0 0 24 24",
		className: "h-5 w-5 shrink-0",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" })
	});
}
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
									href: `tel:${PHONE}`,
									className: "hover:text-primary",
									children: PHONE_LABEL
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#presupuesto",
									className: `${btnPrimary} min-h-10 text-sm`,
									children: "Pedir presupuesto"
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
							children: "Reformas y reparaciones bien hechas, sin complicaciones."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-muted-foreground",
							children: "Baños, fontanería, pladur, aislamiento y ventanas. Presupuesto gratis en 48 horas."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-3 sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#presupuesto",
								className: btnPrimary,
								children: "Pedir presupuesto gratis"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${PHONE}`,
								className: btnOutline,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIcon, {}),
									" Llamar ",
									PHONE_LABEL
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ +15 años de experiencia" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Presupuesto cerrado" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "★ 4,9 en Google" })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_default,
						alt: "Baño reformado con ducha de microcemento",
						width: 1280,
						height: 960,
						fetchPriority: "high",
						className: "aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
					})]
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
								children: "Pequeñas y medianas obras para tu casa o local."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
								children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-background p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-sm font-bold text-primary",
											children: ["0", i + 1]
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold md:text-4xl",
							children: "Lo que dicen nuestros clientes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-4 md:grid-cols-3",
							children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "rounded-xl border border-secondary-foreground/15 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-primary",
										"aria-label": "5 estrellas",
										children: "★★★★★"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2",
										children: [
											"\"",
											r.t,
											"\""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
										className: "mt-3 text-sm opacity-70",
										children: ["— ", r.n]
									})
								]
							}, r.n))
						})]
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
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${PHONE}`,
						className: "min-h-11 py-3 md:py-0",
						children: PHONE_LABEL
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${PHONE}`,
					className: btnOutline,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIcon, {}), " Llamar"]
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
		window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
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
				children: "Te respondemos en menos de 48 horas, sin compromiso."
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
						className: `${btn} bg-whatsapp text-primary-foreground hover:opacity-90`,
						children: "Enviar por WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center text-sm text-muted-foreground",
						children: ["¿Prefieres hablar? ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${PHONE}`,
							className: "font-semibold text-primary underline",
							children: ["Llama al ", PHONE_LABEL]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Index as component };
