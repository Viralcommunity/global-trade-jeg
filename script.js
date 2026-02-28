// ============================
// i18n TRANSLATIONS
// ============================
const translations = {
    es: {
        // Nav
        nav_services: "Servicios",
        nav_trust: "Confianza",
        nav_plans: "Planes",
        nav_projects: "Proyectos",
        nav_training: "Capacitaciones",
        nav_process: "Proceso",
        nav_cta: "Agendar Consulta",

        // Hero
        hero_badge: "Outsourcing Estratégico de Comercio Exterior",
        hero_title: 'Su departamento de comercio exterior, <em>sin los costos de uno.</em>',
        hero_sub: "Dirección estratégica senior en importaciones, exportaciones y logística internacional. Resultados de un director en planta, con la flexibilidad y eficiencia del outsourcing.",
        hero_btn1: "Ver Planes Estratégicos →",
        hero_btn2: "Solicitar Diagnóstico Gratuito",
        stat1: "Enfoque estratégico",
        stat2: "Cargas laborales",
        stat3: "Planes a su medida",

        // Trust
        trust_title: "Respaldados por experiencia en",
        trust1: "Cumplimiento Normativo",
        trust2: "Operaciones Internacionales",
        trust3: "Optimización de Costos",
        trust4: "Confidencialidad Total",

        // Why Us
        why_label: "¿Por qué Global Trade JEG?",
        why_title: 'Decisiones de comercio exterior<br>que protegen su rentabilidad',
        why_subtitle: "Cada error en una importación, exportación o negociación internacional le cuesta dinero. Nosotros nos aseguramos de que eso no suceda.",
        why1_title: "Dirección Estratégica Senior",
        why1_desc: "Acceda a un Director de Comercio Exterior con experiencia comprobada, sin asumir los costos de una contratación fija. Estrategia de alto nivel desde el primer día.",
        why2_title: "Reducción de Costos Fijos",
        why2_desc: "Elimine nómina, cargas laborales y gastos administrativos. Pague únicamente por la dirección estratégica que su operación internacional necesita.",
        why3_title: "Mitigación de Riesgos",
        why3_desc: "Identifique y neutralice riesgos aduaneros, cambiarios y contractuales antes de que se conviertan en pérdidas. Prevención sobre corrección.",
        why4_title: "Optimización Logística",
        why4_desc: "Cada dólar cuenta en comercio exterior. Optimizamos sus rutas, tiempos, proveedores y costos logísticos para maximizar su rentabilidad internacional.",
        why5_title: "Soporte a Alta Gerencia",
        why5_desc: "Trabajamos directamente con su gerencia general, financiera y junta directiva. Información clara, reportes ejecutivos y KPIs que facilitan la toma de decisiones.",
        why6_title: "Visión Internacional",
        why6_desc: "No solo gestionamos operaciones: diseñamos la estrategia de internacionalización de su empresa. Nuevos mercados, nuevos proveedores, nuevas oportunidades.",

        // Experience / Trust
        exp_label: "¿Por qué confiar en nosotros?",
        exp_title: 'Experiencia forjada dentro de la 5ª naviera <br>más grande del mundo',
        exp_text1: "Nuestro equipo no aprendió comercio exterior en un aula. Lo vivió desde adentro, trabajando in-house para Hapag-Lloyd, una de las navieras líderes a nivel global con más de 175 años de historia, presencia en más de 140 países y una flota de más de 300 buques.",
        exp_quote: "Entendemos la cadena logística internacional porque la operamos desde el corazón mismo de la industria naviera mundial.",
        exp_text2: "Esa experiencia operativa y estratégica de primer nivel es exactamente lo que ponemos al servicio de su empresa. No somos consultores teóricos: somos profesionales que han tomado decisiones reales en una de las operaciones más complejas del comercio global.",
        exp_s1: "Naviera global",
        exp_s2: "Países de operación",
        exp_s3: "Años de historia",
        exp_c1_title: "Experiencia In-House",
        exp_c1_desc: "Formación y trayectoria profesional directa dentro de la operación de una de las mayores navieras del planeta. Conocimiento real, no teórico.",
        exp_c2_title: "Visión Global, Acción Local",
        exp_c2_desc: "Entendemos cómo opera el comercio internacional a escala mundial y lo aplicamos a la realidad de las empresas colombianas y latinoamericanas.",
        exp_c3_title: "Estándares de Clase Mundial",
        exp_c3_desc: "Los procesos, estándares de calidad y rigor operativo de la industria naviera global son los que aplicamos en cada proyecto que gestionamos para usted.",
        exp_b1: "Logística Naviera",
        exp_b2: "Supply Chain",
        exp_b3: "Comercio Global",
        exp_b4: "Gestión Portuaria",

        // Plans
        plans_label: "Planes Mensuales",
        plans_title: "Outsourcing estratégico que escala con su negocio",
        plans_subtitle: "Desde validaciones puntuales hasta dirección completa de comercio exterior. Elija el plan que se ajusta a la etapa de su empresa.",
        plan_tier: "Plan Estratégico",
        featured_tag: "Más Popular",
        plan_cta: "Solicitar Información",
        basic_hours: "10 horas mensuales de acompañamiento",
        basic_f1: "Asesoría estratégica en comercio exterior",
        basic_f2: "Validación de decisiones puntuales de importación y exportación",
        basic_f3: "Análisis básico de costos y riesgos internacionales",
        basic_f4: "Revisión de cumplimiento normativo aduanero",
        basic_f5: "Reporte ejecutivo mensual",
        basic_ideal: "Ideal para: PYMEs con operaciones internacionales puntuales",
        pro_hours: "20 horas mensuales de acompañamiento",
        pro_f1: "Dirección estratégica continua de comercio exterior",
        pro_f2: "Planeación y optimización de operaciones internacionales",
        pro_f3: "Evaluación estratégica de proveedores y clientes internacionales",
        pro_f4: "Análisis de riesgos aduaneros y cambiarios",
        pro_f5: "KPIs y plan de acción mensual",
        pro_f6: "Acompañamiento directo a gerencia",
        pro_ideal: "Ideal para: Empresas con operaciones regulares de comercio exterior",
        exec_hours: "40 horas mensuales de acompañamiento",
        exec_f1: "Director Externo de Comercio Exterior dedicado",
        exec_f2: "Planeación de expansión internacional",
        exec_f3: "Optimización avanzada de costos y supply chain",
        exec_f4: "Soporte directo a alta gerencia y junta directiva",
        exec_f5: "Análisis tributario y cambiario estratégico",
        exec_f6: "Dashboard ejecutivo con indicadores en tiempo real",
        exec_ideal: "Ideal para: Empresas medianas y grandes con alta actividad internacional",

        // Projects
        proj_label: "Servicios Complementarios",
        proj_title: 'Proyectos especiales y formación<br>para su equipo',
        proj_subtitle: "Soluciones a medida para desafíos específicos de comercio exterior y programas de capacitación que elevan las competencias de su organización.",
        proj_block1_title: "Proyectos Especiales",
        proj_block1_desc: "Intervenciones estratégicas diseñadas según el alcance y complejidad de cada operación.",
        proj_s1: "Estructuración completa de operaciones de importación o exportación",
        proj_s2: "Apertura y evaluación de mercados internacionales",
        proj_s3: "Optimización logística integral y reducción de costos operativos",
        proj_s4: "Comercialización estratégica de commodities",
        proj_s5: 'Due diligence de proveedores y socios comerciales internacionales',
        proj_s6: 'Diagnóstico y auditoría de operaciones de comercio exterior',
        train_title: "Capacitaciones Empresariales",
        train_desc: "Programas de formación práctica diseñados para equipos operativos, gerenciales y comerciales.",
        train_s1: "Comercio exterior y normativa aduanera colombiana e internacional",
        train_s2: "Importaciones y exportaciones estratégicas",
        train_s3: "Gestión logística internacional y optimización de costos",
        train_s4: "Incoterms, contratos y gestión de riesgos internacionales",
        train_s5: 'Régimen cambiario y obligaciones tributarias en operaciones internacionales',
        train_s6: 'Compliance y prevención de riesgos LAFT en comercio exterior',

        // How It Works
        how_label: "¿Cómo funciona?",
        how_title: 'Comience a operar internacionalmente<br>con respaldo estratégico en 4 pasos',
        step1_title: "Diagnóstico",
        step1_desc: "Evaluamos su operación actual de comercio exterior, identificamos riesgos y oportunidades de mejora.",
        step2_title: "Plan Estratégico",
        step2_desc: "Diseñamos una hoja de ruta personalizada con KPIs claros y acciones priorizadas para su negocio.",
        step3_title: "Ejecución",
        step3_desc: "Acompañamos a su equipo y gerencia en la implementación, optimización y toma de decisiones diarias.",
        step4_title: "Seguimiento",
        step4_desc: "Reportes ejecutivos, dashboards y revisiones periódicas para garantizar resultados medibles y sostenibles.",

        // CTA
        cta_label: "¿Listo para dar el siguiente paso?",
        cta_title: 'Lleve su comercio exterior<br>al <em>siguiente nivel.</em>',
        cta_desc: "Agende una consulta estratégica sin compromiso. Analizamos su operación y le mostramos exactamente cómo podemos optimizar sus resultados internacionales.",
        cta_btn1: "Agendar Consulta Estratégica →",
        cta_btn2: "WhatsApp Directo",

        // Footer
        footer_desc: "Outsourcing estratégico de comercio exterior para empresas que buscan crecer internacionalmente con respaldo, eficiencia y visión.",
        footer_services: "Servicios",
        footer_special: "Proyectos Especiales",
        footer_training: "Formación",
        footer_t1: "Normativa Aduanera",
        footer_t2: "Importaciones & Exportaciones",
        footer_t3: "Logística Internacional",
        footer_t4: "Incoterms & Contratos",
        footer_contact: "Contacto",
        footer_schedule: "Agendar Consulta",
        footer_copy: "© 2026 Global Trade JEG S.A.S. Todos los derechos reservados.",
        footer_privacy: "Política de Privacidad",
        footer_terms: "Términos y Condiciones",
    },
    en: {
        // Nav
        nav_services: "Services",
        nav_trust: "Trust",
        nav_plans: "Plans",
        nav_projects: "Projects",
        nav_training: "Training",
        nav_process: "Process",
        nav_cta: "Book a Consultation",

        // Hero
        hero_badge: "Strategic Foreign Trade Outsourcing",
        hero_title: 'Your foreign trade department, <em>without the overhead.</em>',
        hero_sub: "Senior strategic direction in imports, exports, and international logistics. The results of a full-time director, with the flexibility and efficiency of outsourcing.",
        hero_btn1: "View Strategic Plans →",
        hero_btn2: "Request Free Assessment",
        stat1: "Strategic focus",
        stat2: "Labor overhead",
        stat3: "Tailored plans",

        // Trust
        trust_title: "Backed by expertise in",
        trust1: "Regulatory Compliance",
        trust2: "International Operations",
        trust3: "Cost Optimization",
        trust4: "Full Confidentiality",

        // Why Us
        why_label: "Why Global Trade JEG?",
        why_title: 'Foreign trade decisions<br>that protect your bottom line',
        why_subtitle: "Every mistake in an import, export, or international negotiation costs you money. We make sure that doesn't happen.",
        why1_title: "Senior Strategic Direction",
        why1_desc: "Access a Foreign Trade Director with proven experience, without the costs of a full-time hire. High-level strategy from day one.",
        why2_title: "Fixed Cost Reduction",
        why2_desc: "Eliminate payroll, labor charges, and administrative expenses. Pay only for the strategic direction your international operation needs.",
        why3_title: "Risk Mitigation",
        why3_desc: "Identify and neutralize customs, exchange rate, and contractual risks before they become losses. Prevention over correction.",
        why4_title: "Logistics Optimization",
        why4_desc: "Every dollar counts in foreign trade. We optimize your routes, timelines, suppliers, and logistics costs to maximize your international profitability.",
        why5_title: "C-Suite Support",
        why5_desc: "We work directly with your CEO, CFO, and board of directors. Clear information, executive reports, and KPIs that drive better decisions.",
        why6_title: "International Vision",
        why6_desc: "We don't just manage operations — we design your company's internationalization strategy. New markets, new suppliers, new opportunities.",

        // Experience / Trust
        exp_label: "Why trust us?",
        exp_title: 'Experience forged inside the world\'s<br>5th largest shipping line',
        exp_text1: "Our team didn't learn foreign trade in a classroom. We lived it from the inside, working in-house at Hapag-Lloyd — one of the world's leading shipping companies with over 175 years of history, a presence in 140+ countries, and a fleet of 300+ vessels.",
        exp_quote: "We understand the international logistics chain because we operated it from the very heart of the global shipping industry.",
        exp_text2: "That world-class operational and strategic experience is exactly what we bring to your business. We're not theoretical consultants — we're professionals who have made real decisions in one of the most complex operations in global trade.",
        exp_s1: "Global shipping line",
        exp_s2: "Countries of operation",
        exp_s3: "Years of history",
        exp_c1_title: "In-House Experience",
        exp_c1_desc: "Direct professional background within the operations of one of the planet's largest shipping companies. Real knowledge, not theoretical.",
        exp_c2_title: "Global Vision, Local Action",
        exp_c2_desc: "We understand how international trade works on a global scale and apply it to the reality of Colombian and Latin American businesses.",
        exp_c3_title: "World-Class Standards",
        exp_c3_desc: "The processes, quality standards, and operational rigor of the global shipping industry are what we apply to every project we manage for you.",
        exp_b1: "Shipping Logistics",
        exp_b2: "Supply Chain",
        exp_b3: "Global Trade",
        exp_b4: "Port Management",

        // Plans
        plans_label: "Monthly Plans",
        plans_title: "Strategic outsourcing that scales with your business",
        plans_subtitle: "From ad-hoc validations to full foreign trade direction. Choose the plan that fits your company's stage.",
        plan_tier: "Strategic Plan",
        featured_tag: "Most Popular",
        plan_cta: "Request Information",
        basic_hours: "10 hours/month of strategic support",
        basic_f1: "Strategic advisory in foreign trade",
        basic_f2: "Validation of specific import and export decisions",
        basic_f3: "Basic cost and international risk analysis",
        basic_f4: "Customs regulatory compliance review",
        basic_f5: "Monthly executive report",
        basic_ideal: "Ideal for: SMEs with occasional international operations",
        pro_hours: "20 hours/month of strategic support",
        pro_f1: "Ongoing strategic direction of foreign trade",
        pro_f2: "Planning and optimization of international operations",
        pro_f3: "Strategic evaluation of international suppliers and clients",
        pro_f4: "Customs and exchange rate risk analysis",
        pro_f5: "KPIs and monthly action plan",
        pro_f6: "Direct management advisory support",
        pro_ideal: "Ideal for: Companies with regular foreign trade operations",
        exec_hours: "40 hours/month of strategic support",
        exec_f1: "Dedicated External Foreign Trade Director",
        exec_f2: "International expansion planning",
        exec_f3: "Advanced cost and supply chain optimization",
        exec_f4: "Direct support to C-suite and board of directors",
        exec_f5: "Strategic tax and exchange rate analysis",
        exec_f6: "Executive dashboard with real-time indicators",
        exec_ideal: "Ideal for: Mid-size and large companies with high international activity",

        // Projects
        proj_label: "Complementary Services",
        proj_title: 'Special projects and training<br>for your team',
        proj_subtitle: "Tailored solutions for specific foreign trade challenges and training programs that elevate your organization's competencies.",
        proj_block1_title: "Special Projects",
        proj_block1_desc: "Strategic interventions designed according to the scope and complexity of each operation.",
        proj_s1: "Full structuring of import or export operations",
        proj_s2: "International market entry and evaluation",
        proj_s3: "Comprehensive logistics optimization and operating cost reduction",
        proj_s4: "Strategic commodity trading",
        proj_s5: 'Due diligence on international suppliers and business partners',
        proj_s6: 'Foreign trade operations diagnostic and audit',
        train_title: "Corporate Training Programs",
        train_desc: "Hands-on training programs designed for operational, management, and commercial teams.",
        train_s1: "Foreign trade and Colombian & international customs regulations",
        train_s2: "Strategic imports and exports",
        train_s3: "International logistics management and cost optimization",
        train_s4: "Incoterms, contracts, and international risk management",
        train_s5: 'Exchange rate regulations and tax obligations in international operations',
        train_s6: 'Compliance and AML/CFT risk prevention in foreign trade',

        // How It Works
        how_label: "How does it work?",
        how_title: 'Start operating internationally<br>with strategic backing in 4 steps',
        step1_title: "Assessment",
        step1_desc: "We evaluate your current foreign trade operations, identify risks, and uncover improvement opportunities.",
        step2_title: "Strategic Plan",
        step2_desc: "We design a customized roadmap with clear KPIs and prioritized actions for your business.",
        step3_title: "Execution",
        step3_desc: "We support your team and management in implementation, optimization, and daily decision-making.",
        step4_title: "Follow-up",
        step4_desc: "Executive reports, dashboards, and periodic reviews to ensure measurable and sustainable results.",

        // CTA
        cta_label: "Ready to take the next step?",
        cta_title: 'Take your foreign trade<br>to the <em>next level.</em>',
        cta_desc: "Schedule a no-obligation strategic consultation. We'll analyze your operations and show you exactly how we can optimize your international results.",
        cta_btn1: "Book a Strategic Consultation →",
        cta_btn2: "Direct WhatsApp",

        // Footer
        footer_desc: "Strategic foreign trade outsourcing for companies looking to grow internationally with expertise, efficiency, and vision.",
        footer_services: "Services",
        footer_special: "Special Projects",
        footer_training: "Training",
        footer_t1: "Customs Regulations",
        footer_t2: "Imports & Exports",
        footer_t3: "International Logistics",
        footer_t4: "Incoterms & Contracts",
        footer_contact: "Contact",
        footer_schedule: "Book a Consultation",
        footer_copy: "© 2026 Global Trade JEG S.A.S. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms & Conditions",
    }
};

// ============================
// LANGUAGE SWITCHER
// ============================
let currentLang = 'es';

function switchLang(lang) {
    if (lang === currentLang) return;
    currentLang = lang;

    document.getElementById('btnES').classList.toggle('active', lang === 'es');
    document.getElementById('btnEN').classList.toggle('active', lang === 'en');

    document.documentElement.lang = lang;
    document.title = lang === 'es'
        ? 'Global Trade JEG S.A.S. | Outsourcing Estratégico de Comercio Exterior'
        : 'Global Trade JEG S.A.S. | Strategic Foreign Trade Outsourcing';

    document.body.classList.add('lang-switching');

    setTimeout(() => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = translations[lang][key];
            if (text) {
                if (el.hasAttribute('data-i18n-html')) {
                    el.innerHTML = text;
                } else {
                    el.textContent = text;
                }
            }
        });
        document.body.classList.remove('lang-switching');
    }, 220);
}

// ============================
// NAVBAR SCROLL EFFECT
// ============================
(function () {
    const nav = document.getElementById('navbar');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                nav.classList.toggle('scrolled', window.scrollY > 80);
                ticking = false;
            });
            ticking = true;
        }
    });
})();

// ============================
// MOBILE MENU
// ============================
document.querySelector('.mobile-toggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

// ============================
// SCROLL REVEAL
// ============================
(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

// ============================
// SMOOTH SCROLL
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById('navLinks').classList.remove('open');
        }
    });
});

// ============================
// CONTACT FORM HANDLER
// ============================
(function () {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = form.querySelector('.contact-submit');
        btn.disabled = true;
        btn.textContent = 'Enviando…';
        setTimeout(() => {
            form.reset();
            btn.textContent = 'Enviar Mensaje →';
            btn.disabled = false;
            const success = document.getElementById('formSuccess');
            if (success) {
                success.classList.add('visible');
                setTimeout(() => success.classList.remove('visible'), 5000);
            }
        }, 800);
    });
})();

// ============================
// STAT COUNTER ANIMATION
// ============================
(function () {
    function animateCounter(el, target, suffix) {
        const duration = 1600;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease out quart
            const eased = 1 - Math.pow(1 - progress, 4);
            const value = Math.round(eased * target);
            el.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const raw = el.getAttribute('data-count');
                const suffix = el.getAttribute('data-suffix') || '';
                animateCounter(el, parseFloat(raw), suffix);
                statsObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => statsObserver.observe(el));
})();

// ============================
// GRADUAL BLUR
// Component based on concept by github.com/ansh-dhanani
// Adapted to vanilla JS for Global Trade JEG
// ============================
function createGradualBlur(container, options) {
    var settings = Object.assign({
        position:    'bottom',
        height:      '7rem',
        strength:    2,
        divCount:    5,
        curve:       'bezier',
        exponential: false,
        opacity:     1
    }, options);

    // Ensure the container is positioned so absolute children work
    var pos = window.getComputedStyle(container).position;
    if (pos === 'static') container.style.position = 'relative';

    var wrapper = document.createElement('div');
    wrapper.className = 'gradual-blur gradual-blur--' + settings.position;
    wrapper.style.height = settings.height;
    wrapper.style.opacity = settings.opacity;

    var inner = document.createElement('div');
    inner.className = 'gradual-blur-inner';

    var count = settings.divCount;

    for (var i = 0; i < count; i++) {
        // step goes 0→1; for 'top' position we reverse so blur is max at top
        var step = settings.position === 'top'
            ? 1 - (i / (count - 1))
            : i / (count - 1);

        // Apply curve
        var t;
        if (settings.exponential) {
            t = step * step;
        } else if (settings.curve === 'bezier') {
            t = step * step * (3 - 2 * step); // smoothstep
        } else {
            t = step; // linear
        }

        var blurPx = t * settings.strength;

        var layer = document.createElement('div');
        layer.style.top    = ((i / count) * 100) + '%';
        layer.style.height = (100 / count) + '%';
        layer.style.backdropFilter       = 'blur(' + blurPx + 'px)';
        layer.style.webkitBackdropFilter = 'blur(' + blurPx + 'px)';

        inner.appendChild(layer);
    }

    wrapper.appendChild(inner);
    container.appendChild(wrapper);
    return wrapper;
}

// Apply GradualBlur to site sections
(function () {
    // Hero — blur at the bottom to ease the transition to the trust bar
    var hero = document.querySelector('.hero');
    if (hero) {
        createGradualBlur(hero, {
            position:    'bottom',
            height:      '13rem',
            strength:    10,
            divCount:    7,
            curve:       'bezier',
            exponential: true,
            opacity:     1
        });
    }

    // Why-Us / Services — blur at the bottom of the cards grid
    var whyUs = document.querySelector('.why-us');
    if (whyUs) {
        createGradualBlur(whyUs, {
            position:    'bottom',
            height:      '10rem',
            strength:    8,
            divCount:    7,
            curve:       'bezier',
            exponential: false,
            opacity:     1
        });
    }

    // Plans — blur at the bottom of the pricing grid
    var plans = document.querySelector('.services');
    if (plans) {
        createGradualBlur(plans, {
            position:    'bottom',
            height:      '10rem',
            strength:    8,
            divCount:    7,
            curve:       'bezier',
            exponential: false,
            opacity:     1
        });
    }
})();
