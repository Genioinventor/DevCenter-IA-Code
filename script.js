// DevCenter IA Code - Generador de Páginas Web con IA
(function() {
    'use strict';

    // INTEGRACIÓN CON GEMINI AI - API Key directa como solicitado
    const GEMINI_API_KEY = 'AIzaSyCpC7W7ptTQgyKmX9yclJBDJnGYzcNXzIk';
    const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent';

    // Función para obtener información contextual del usuario
    function getContextualInfo() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.toLocaleDateString('es-ES', { month: 'long' });
        const currentDay = now.getDate();
        const currentWeekDay = now.toLocaleDateString('es-ES', { weekday: 'long' });
        
        // Detectar tema del usuario (dark/light mode)
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const userTheme = prefersDark ? 'oscuro' : 'claro';
        
        // Detectar si está usando modo oscuro en el navegador
        const bodyBg = window.getComputedStyle(document.body).backgroundColor;
        const bodyStyle = document.body.style.backgroundColor;
        
        // Determinar el tema basado en las preferencias del sistema y el fondo actual
        let detectedTheme = 'claro';
        if (prefersDark || bodyBg.includes('rgb(0, 0, 0)') || bodyBg.includes('rgb(10, 13, 28)') || bodyStyle.includes('dark')) {
            detectedTheme = 'oscuro';
        }
        
        return {
            year: currentYear,
            month: currentMonth,
            day: currentDay,
            weekDay: currentWeekDay,
            theme: detectedTheme,
            season: getSeason(now.getMonth() + 1)
        };
    }
    
    // Función auxiliar para determinar la estación
    function getSeason(month) {
        if (month >= 3 && month <= 5) return 'primavera';
        if (month >= 6 && month <= 8) return 'verano';
        if (month >= 9 && month <= 11) return 'otoño';
        return 'invierno';
    }

    // Función para llamar a Gemini AI
    async function callGemini(userMessage) {
        try {
            console.log('🚀 Llamando a Gemini AI...');
            
            // Obtener información contextual
            const context = getContextualInfo();
            
            const simplePrompt = `Eres un desarrollador web senior experto y diseñador UX/UI. Crea una página web HTML completa, ultra-moderna y profesional de nivel empresarial premium para: ${userMessage}

📅 CONTEXTO ACTUAL IMPORTANTE (USA ESTA INFORMACIÓN PARA HACER LA PÁGINA MÁS RELEVANTE):
- Año actual: ${context.year} - Incluye referencias modernas y actuales del ${context.year}
- Estación del año: ${context.season} - Considera colores y elementos temáticos de ${context.season}
- Tema visual del usuario: Fondo ${context.theme} - Adapta la paleta de colores principal para complementar su preferencia por fondos ${context.theme === 'oscuro' ? 'oscuros' : 'claros'}
- Fecha: ${context.weekDay} ${context.day} de ${context.month} (usa esta información SOLO si es muy relevante para el contenido, no le des mucha importancia)

🎨 ADAPTACIÓN AL TEMA DEL USUARIO:
- Si el usuario prefiere fondos OSCUROS: Usa colores vibrantes que contrasten bien, evita grises muy oscuros, prefiere acentos brillantes (azules, verdes, dorados, púrpuras vibrantes)
- Si el usuario prefiere fondos CLAROS: Usa paletas más suaves y elegantes, colores pasteles, gradientes suaves, y contrastes moderados
- Asegúrate de que todos los elementos sean legibles y accesibles independientemente del tema preferido del usuario

🌟 RELEVANCIA TEMPORAL:
- Incluye tendencias de diseño actuales del ${context.year}
- Referencias culturales y tecnológicas apropiadas para ${context.year}
- Si es relevante para el negocio, menciona eventos o tendencias de ${context.season} ${context.year}
- Usa tecnologías web modernas que estén disponibles en ${context.year}

🔧 ARQUITECTURA Y ESTRUCTURA TÉCNICA AVANZADA:
- HTML5 semántico perfecto con WAI-ARIA landmarks y roles apropiados
- Meta tags completos: viewport, charset, description, keywords, author, robots, revisit-after
- Open Graph completo + Twitter Cards + LinkedIn metadata
- Schema.org structured data avanzado (Organization, LocalBusiness, Product, Service, FAQ, Review)
- JSON-LD para datos estructurados complejos
- Canonical URL, meta robots, sitemap reference
- Favicon completo (16x16, 32x32, 180x180, 192x192, 512x512)
- Apple touch icons y Windows tile configuration
- Manifest.json preparado para PWA
- DNS prefetch y preconnect para recursos externos

🎨 CSS MODERNO Y ULTRA-AVANZADO:
- CSS Grid avanzado con subgrid, grid-template-areas, auto-fit/auto-fill
- Flexbox con gap, align-content, flex-basis optimizados
- Variables CSS con fallbacks y calc() dinámicos
- Container queries (@container) para componentes responsive
- CSS Houdini custom properties y paint worklets simulados
- Clamp(), min(), max() para tipografía y espaciado fluido
- Aspect-ratio, object-fit, object-position para medios
- CSS Logical properties (margin-inline, padding-block)
- Gradientes complejos con múltiples capas y mesh patterns
- Sombras multicapa con inset shadows y color-mix()
- Animaciones CSS complejas con animation-timeline
- Transform 3D con perspective, rotateX/Y/Z, translate3d
- Scroll-driven animations y view-timeline
- CSS filters avanzados (blur, saturate, hue-rotate)
- Backdrop-filter con múltiples layers
- CSS masks y clip-path para formas orgánicas
- Media queries nivel 5: prefers-reduced-motion, prefers-color-scheme
- Breakpoints: 320px, 480px, 768px, 1024px, 1200px, 1440px, 1920px

🌈 DISEÑO VISUAL PREMIUM ENTERPRISE:
- Sistema de color científico con primary, secondary, accent, semantic colors
- Paleta extendida: 50, 100, 200...900 shades por color principal
- Tipografía con escala modular (1.125, 1.25, 1.333 ratios)
- Google Fonts optimizadas con font-display: swap, preload
- Variable fonts para mejor rendimiento y expresividad
- Grid system de 4px con responsive spacing tokens
- Design tokens para consistencia (border-radius, shadows, etc.)
- Microanimaciones con easing functions personalizadas
- Motion design coherente con duración y delay coordinados
- Glassmorphism auténtico con backdrop-filter múltiple
- Neumorphism sutil para elementos interactivos
- Gradientes mesh y noise patterns para texturas
- Color psychology aplicada según el tipo de negocio
- High contrast mode support automático

📱 RESPONSIVE DESIGN AVANZADO:
- Mobile-first approach con progresivo enhancement
- Componentes adaptativos que cambian layout según dispositivo
- Imágenes responsive con srcset y sizes attributes
- Navegación móvil con hamburger menu animado
- Touch-friendly buttons (mínimo 44px de altura)
- Optimización de rendimiento móvil

♿ ACCESIBILIDAD WCAG 2.1 AAA:
- ARIA labels, roles y describedby implementados
- Contraste de color mínimo 7:1 para texto normal, 4.5:1 para texto grande
- Navegación por teclado funcional (tab index lógico)
- Alt text descriptivo y contextual para todas las imágenes
- Headings jerárquicos correctos (h1, h2, h3...)
- Focus visible y states claros para elementos interactivos

⚡ OPTIMIZACIÓN DE RENDIMIENTO:
- CSS optimizado y organizado (reseteo, layout, componentes, utilities)
- Lazy loading para imágenes implementado
- Preload para recursos críticos
- Minificación de CSS inline
- Optimización de fuentes con font-display: swap

🔍 SEO AVANZADO:
- Title tags únicos y descriptivos (50-60 caracteres)
- Meta description atractiva (150-160 caracteres)
- Estructura de headings lógica y optimizada para keywords
- URLs amigables simuladas en navegación
- Rich snippets preparados (FAQ, Organization, etc.)

🎯 CONTENIDO ESPECÍFICO Y PROFESIONAL:
- Contenido 100% real y específico para el tipo de negocio/tema solicitado
- Hero section impactante con propuesta de valor clara
- Secciones estratégicas: Sobre nosotros, Servicios/Productos, Testimonios, Blog/Noticias, Contacto
- Call-to-actions específicos y persuasivos
- Testimonios realistas con nombres y datos creíbles
- Datos de contacto completos y realistas (teléfono, email, dirección)

🛠️ FUNCIONALIDADES ENTERPRISE AVANZADAS:
- Formularios con validación en tiempo real, regex patterns, custom validators
- Multi-step forms con progress indicators y save state
- Smooth scroll con easing personalizado (SIN scroll hijacking)
- Intersection Observer API para lazy loading y reveal animations
- Modal system con focus trap, ESC handling, backdrop click
- Carousel touch-enabled con momentum scrolling y autoplay
- Navigation ESTÁTICA con scroll spy, active states, breadcrumbs (NO sticky/fixed)
- Infinite scroll o pagination inteligente para contenido
- Search functionality con live suggestions y filters
- Image galleries con zoom, fullscreen, keyboard navigation
- Tabs, accordions, dropdowns con keyboard accessibility
- Toast notifications system con queue y auto-dismiss
- Loading skeletons y progressive loading
- Drag & drop interfaces donde sea apropiado
- Copy-to-clipboard con visual feedback
- Print-friendly styles con @media print
- Service worker ready structure
- Performance monitoring hooks preparados

🚫 RESTRICCIONES DE NAVEGACIÓN:
- NO crear headers fixed/sticky (position: fixed/sticky en navigation)
- NO hacer scroll hijacking o tomar control del scroll natural
- La navegación debe ser estática y fluir naturalmente con el contenido
- Usar smooth scroll nativo (scroll-behavior: smooth) únicamente
- Respetar las preferencias de movimiento del usuario (prefers-reduced-motion)

📊 ELEMENTOS ENTERPRISE ESPECÍFICOS:
- Counters animados con IntersectionObserver y easing
- Progress bars circulares y lineales con SVG animations
- Timeline interactiva con scroll-triggered animations
- FAQ con search, categories, y expandir/colapsar todo
- Pricing tables con feature comparison matrix
- Portfolio con filtros isotope-style y lazy loading
- Team cards con flip animations y social links
- Blog preview con read time y category tags
- Testimonials carousel con rating stars
- Statistics dashboard con charts simulados
- Location maps integration ready (OpenStreetMap)
- Event calendar o appointment booking UI
- Product showcase con 360° view simulation
- Case studies con before/after comparisons
- Certifications y awards display
- Newsletter signup con lead magnets
- Live chat widget placeholder
- Multi-language selector preparado

🎨 EFECTOS VISUALES CINEMA 4D LEVEL:
- Parallax multicapa con depth y perspective
- Scroll-triggered animations con GSAP-style easing
- Morphing shapes con CSS animations complejas
- Particle systems simulados con CSS puro
- 3D card flip effects con transform-style: preserve-3d
- Magnetic hover effects en elementos interactivos
- Text reveal animations (typewriter, wave, scramble)
- Image hover overlays con blend modes
- Floating action buttons con ripple effects
- Cursor followers para elementos interactivos
- SVG path drawing animations
- Background video effects simulados con CSS
- Glitch effects sutiles en elementos tech
- Holographic y iridescent effects con gradients
- Physics-based animations (bounce, elastic)
- Staggered animations para listas y grids

📋 ESTÁNDARES DE CALIDAD ENTERPRISE:

🔒 SEGURIDAD Y PRIVACIDAD:
- Content Security Policy headers simulados
- GDPR compliance con cookie consent banner
- Privacy policy y terms of service links
- Datos de contacto con privacy-first approach
- No tracking scripts, respeto por la privacidad del usuario

⚡ PERFORMANCE OPTIMIZATION AVANZADA:
- Critical CSS inlined, non-critical deferred
- Resource hints (dns-prefetch, preconnect, preload)
- Image optimization con responsive images y WebP fallbacks
- Font loading strategies con font-display y preload
- Minified y compressed CSS con vendor prefixes
- Lazy loading nativo y progressive enhancement
- Bundle splitting simulation con critical/non-critical code

🌍 INTERNACIONALIZACIÓN:
- Lang attributes correctos y hreflang preparado
- RTL support con logical CSS properties
- Currency y date formatting regional
- Cultural color psychology aplicada

🎯 CONVERSIÓN Y BUSINESS INTELLIGENCE:
- Call-to-actions optimizados con urgency y scarcity
- Social proof elements estratégicamente ubicados
- Trust signals y security badges donde apropiado
- Lead generation forms optimizados
- Analytics tracking preparation sin invasive scripts
- A/B testing ready structure

REQUERIMIENTOS TÉCNICOS FINALES (PRIORIDADES):

🎯 MUST HAVE (Obligatorios):
- HTML5 semántico válido con ARIA básico y meta tags completos
- CSS interno organizado con mobile-first responsive design
- JavaScript mínimo funcional sin dependencias externas
- WCAG 2.1 AA compliance mínimo con contraste y navegación por teclado
- Performance optimizado para <150kb total, crítico <50kb
- Contenido realista específico para el negocio solicitado
- Funcionalidad core: navegación, formularios, CTA principales

🚀 SHOULD HAVE (Preferibles):
- Google Fonts con preconnect/swap (máximo 2 familias)
- Animaciones con prefers-reduced-motion fallbacks
- Modo oscuro con prefers-color-scheme
- Schema.org básico y Open Graph
- 2-3 componentes interactivos relevantes (modal, carousel, etc.)
- Microanimaciones sutiles en hover/focus

💎 MAY HAVE (Solo si hay espacio):
- Efectos avanzados 3D/parallax (sin scroll hijacking)
- Features experimentales con fallbacks
- Componentes enterprise adicionales según contexto
- Optimizaciones avanzadas de performance

⚠️ CONSTRAINTS:
- Un solo archivo HTML completo y autosuficiente
- NO CONTESTES NADA SOLO DI EL ARCHIVO INDEX.HTML
- Progressive enhancement obligatorio
- Graceful degradation para features avanzadas
- Priorizar funcionalidad sobre efectos visuales complejos
- System fonts como fallback siempre disponible

El resultado debe ser una página web que rivalice con sitios profesionales de agencias de diseño web modernas.`;

            const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        role: "user",
                        parts: [{
                            text: simplePrompt
                        }]
                    }]
                })
            });

            console.log('📡 Respuesta recibida:', response.status);

            if (response.ok) {
                const data = await response.json();
                console.log('📄 Datos recibidos de Gemini');
                
                if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
                    let htmlContent = data.candidates[0].content.parts[0].text;
                    
                    // Limpiar markdown code fences si están presentes
                    htmlContent = htmlContent.replace(/```html\s*/g, '').replace(/```\s*$/g, '').trim();
                    
                    console.log('✅ HTML generado por Gemini AI');
                    
                    return {
                        response: 'He creado una página web completamente personalizada usando inteligencia artificial Gemini. El diseño y contenido han sido generados específicamente para tu solicitud.',
                        html: htmlContent
                    };
                }
            } else {
                const errorText = await response.text();
                console.error('❌ Error de Gemini:', response.status, errorText);
            }
            
            // Si hay cualquier problema con Gemini, usar generación inteligente local
            throw new Error('Fallback to local generation');
            
        } catch (error) {
            console.log('⚠️ Usando generación inteligente local:', error.message);
            
            // Generación inteligente local basada en el mensaje del usuario
            return generateIntelligentWebsite(userMessage);
        }
    }

    // Función de generación inteligente local
    function generateIntelligentWebsite(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Detectar tipo de negocio y generar contenido apropiado
        let businessType = 'general';
        let colors = ['#667eea', '#764ba2'];
        let emoji = '🚀';
        let services = ['Excelencia', 'Calidad', 'Innovación'];
        
        if (message.includes('restaurante') || message.includes('comida') || message.includes('cocina')) {
            businessType = 'restaurante';
            colors = ['#ff6b6b', '#ffa726'];
            emoji = '🍽️';
            services = ['Menú Especial', 'Reservas', 'Delivery'];
        } else if (message.includes('tienda') || message.includes('ecommerce') || message.includes('productos')) {
            businessType = 'tienda';
            colors = ['#4ecdc4', '#44a08d'];
            emoji = '🛍️';
            services = ['Productos Premium', 'Envío Gratis', 'Soporte 24/7'];
        } else if (message.includes('médico') || message.includes('salud') || message.includes('clínica')) {
            businessType = 'salud';
            colors = ['#56ab2f', '#a8e6cf'];
            emoji = '🏥';
            services = ['Consultas', 'Emergencias', 'Citas Online'];
        } else if (message.includes('tecnología') || message.includes('software') || message.includes('app')) {
            businessType = 'tech';
            colors = ['#667eea', '#764ba2'];
            emoji = '💻';
            services = ['Desarrollo', 'Consultoría', 'Soporte'];
        }

        return {
            response: `He creado una página web ${businessType} personalizada usando IA inteligente. El diseño se adapta perfectamente a "${userMessage}" con colores y contenido específicos.`,
            html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${userMessage} - Página Profesional</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background: #f7fafc; }
        .header { background: linear-gradient(135deg, ${colors[0]}, ${colors[1]}); color: white; padding: 4rem 0; text-align: center; position: relative; overflow: hidden; }
        .header::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); animation: rotate 20s linear infinite; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 1; }
        .hero h1 { font-size: 3.5rem; margin-bottom: 1rem; animation: fadeInUp 1s ease; }
        .hero p { font-size: 1.3rem; margin-bottom: 2rem; opacity: 0.9; animation: fadeInUp 1s ease 0.2s both; }
        .section { padding: 5rem 0; }
        .services { background: white; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem; }
        .card { background: white; padding: 2.5rem; border-radius: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); transition: all 0.3s ease; border: 1px solid rgba(255,255,255,0.2); }
        .card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(0,0,0,0.15); }
        .card h3 { color: ${colors[0]}; margin-bottom: 1rem; font-size: 1.4rem; }
        .about { background: linear-gradient(45deg, #f0f2f5, #ffffff); text-align: center; }
        .contact { background: linear-gradient(135deg, #2d3748, #4a5568); color: white; text-align: center; }
        .btn { display: inline-block; background: linear-gradient(45deg, ${colors[0]}, ${colors[1]}); color: white; padding: 15px 35px; text-decoration: none; border-radius: 30px; margin-top: 1.5rem; transition: all 0.3s ease; font-weight: bold; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
        .btn:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(0,0,0,0.3); }
        .feature { text-align: center; margin: 2rem 0; }
        .feature-icon { font-size: 3rem; margin-bottom: 1rem; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .stats { display: flex; justify-content: space-around; margin: 3rem 0; flex-wrap: wrap; }
        .stat { text-align: center; padding: 1rem; }
        .stat-number { font-size: 2.5rem; font-weight: bold; color: ${colors[0]}; }
        .stat-label { color: #666; margin-top: 0.5rem; }
        @media (max-width: 768px) { .hero h1 { font-size: 2.5rem; } .grid { grid-template-columns: 1fr; } .stats { flex-direction: column; } }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="hero">
                <h1>${emoji} ${userMessage}</h1>
                <p>Solución profesional generada con inteligencia artificial</p>
                <a href="#servicios" class="btn">Explorar Servicios</a>
            </div>
        </div>
    </header>
    
    <section id="servicios" class="section services">
        <div class="container">
            <h2 style="text-align: center; margin-bottom: 2rem; font-size: 2.5rem; color: #333;">Nuestros Servicios</h2>
            <div class="grid">
                ${services.map((service, index) => `
                <div class="card" style="animation: fadeInUp 1s ease ${index * 0.1}s both;">
                    <div class="feature-icon">${['✨', '🚀', '⭐'][index] || '💎'}</div>
                    <h3>${service}</h3>
                    <p>Ofrecemos ${service.toLowerCase()} de alta calidad, adaptado a las necesidades específicas de tu ${businessType}. Nuestra experiencia garantiza resultados excepcionales.</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>
    
    <section class="section about">
        <div class="container">
            <h2 style="text-align: center; margin-bottom: 2rem; font-size: 2.5rem;">¿Por Qué Elegirnos?</h2>
            <div class="stats">
                <div class="stat">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Satisfacción</div>
                </div>
                <div class="stat">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">Disponibilidad</div>
                </div>
                <div class="stat">
                    <div class="stat-number">5★</div>
                    <div class="stat-label">Calificación</div>
                </div>
            </div>
            <div class="feature">
                <p style="font-size: 1.2rem; max-width: 800px; margin: 0 auto; line-height: 1.8;">
                    Nos especializamos en brindar soluciones excepcionales para <strong>${userMessage}</strong>. 
                    Nuestro equipo combina experiencia, innovación y dedicación para superar tus expectativas.
                </p>
            </div>
        </div>
    </section>
    
    <section class="section contact">
        <div class="container">
            <h2 style="margin-bottom: 2rem; font-size: 2.5rem;">📞 Contáctanos</h2>
            <p style="font-size: 1.2rem; margin-bottom: 1rem;">¿Listo para comenzar? ¡Estamos aquí para ayudarte!</p>
            <div style="margin-top: 2rem;">
                <p>📧 contacto@${businessType}.com</p>
                <p>📱 +1 (555) 123-4567</p>
                <p>📍 Tu Ciudad, Tu País</p>
            </div>
            <a href="#" class="btn" style="margin-top: 2rem;">Solicitar Información</a>
        </div>
    </section>
</body>
</html>`
        };
    }

    // Estado de la aplicación
    const state = {
        conversation: [],
        currentWebsite: null,
        isGenerating: false,
        currentCode: null,
        currentPanel: 1
    };

    // Elementos del DOM
    const elements = {
        chatInput: null,
        sendButton: null,
        chatMessages: null,
        websitePreview: null,
        previewContent: null,
        regenerateBtn: null,
        previewFullscreenBtn: null,
        continueBtn: null,
        codeInput: null,
        validateBtn: null,
        backBtn: null,
        codeMessage: null,
        panel1: null,
        panel2: null,
        fullscreenBtn: null
    };

    // Plantillas de páginas web predefinidas
    const websiteTemplates = {
        restaurante: {
            title: "Mi Restaurante",
            html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Restaurante - Deliciosa Comida Casera</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #ff6b6b, #ffa726); color: white; padding: 2rem 0; text-align: center; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.2rem; margin-bottom: 2rem; }
        .section { padding: 4rem 0; }
        .menu { background: #f8f9fa; }
        .menu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem; }
        .menu-item { background: white; padding: 1.5rem; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .contact { background: #2c3e50; color: white; text-align: center; }
        .contact h2 { margin-bottom: 1rem; }
        .btn { display: inline-block; background: #ff6b6b; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; margin-top: 1rem; }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="hero">
                <h1>🍽️ Mi Restaurante</h1>
                <p>Deliciosa comida casera con amor</p>
                <a href="#menu" class="btn">Ver Menú</a>
            </div>
        </div>
    </header>

    <section id="menu" class="section menu">
        <div class="container">
            <h2>Nuestro Menú</h2>
            <div class="menu-grid">
                <div class="menu-item">
                    <h3>🥘 Plato Principal</h3>
                    <p>Delicioso plato preparado con ingredientes frescos</p>
                    <strong>$15.000</strong>
                </div>
                <div class="menu-item">
                    <h3>🍲 Especialidad</h3>
                    <p>Nuestra receta secreta de la casa</p>
                    <strong>$18.000</strong>
                </div>
                <div class="menu-item">
                    <h3>🥗 Ensaladas</h3>
                    <p>Frescas ensaladas con vegetales orgánicos</p>
                    <strong>$12.000</strong>
                </div>
            </div>
        </div>
    </section>

    <section class="section contact">
        <div class="container">
            <h2>📍 Visítanos</h2>
            <p>Calle 123 #45-67, Ciudad</p>
            <p>📞 Teléfono: (123) 456-7890</p>
            <p>🕒 Lunes a Domingo: 11:00 AM - 10:00 PM</p>
        </div>
    </section>
</body>
</html>`
        },
        negocio: {
            title: "Mi Negocio",
            html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Negocio - Servicios Profesionales</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 2rem 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .hero { text-align: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.2rem; margin-bottom: 2rem; }
        .section { padding: 4rem 0; }
        .services { background: #f8f9fa; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem; }
        .service-card { background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; }
        .about { text-align: center; }
        .contact { background: #2c3e50; color: white; text-align: center; }
        .btn { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; margin-top: 1rem; }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="hero">
                <h1>💼 Mi Negocio</h1>
                <p>Servicios profesionales de alta calidad</p>
                <a href="#services" class="btn">Ver Servicios</a>
            </div>
        </div>
    </header>

    <section id="services" class="section services">
        <div class="container">
            <h2>Nuestros Servicios</h2>
            <div class="services-grid">
                <div class="service-card">
                    <h3>⭐ Servicio Premium</h3>
                    <p>Ofrecemos servicios de la más alta calidad</p>
                </div>
                <div class="service-card">
                    <h3>🚀 Innovación</h3>
                    <p>Soluciones innovadoras para tu negocio</p>
                </div>
                <div class="service-card">
                    <h3>🎯 Resultados</h3>
                    <p>Comprometidos con obtener los mejores resultados</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section contact">
        <div class="container">
            <h2>📞 Contáctanos</h2>
            <p>¿Listo para comenzar? ¡Estamos aquí para ayudarte!</p>
            <p>📧 contacto@minegocio.com</p>
            <p>📱 +1 234 567 8900</p>
        </div>
    </section>
</body>
</html>`
        },
        tienda: {
            title: "Mi Tienda",
            html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Tienda - Productos Increíbles</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #4ecdc4, #44a08d); color: white; padding: 2rem 0; text-align: center; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.2rem; margin-bottom: 2rem; }
        .section { padding: 4rem 0; }
        .products { background: #f8f9fa; }
        .products-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem; }
        .product-card { background: white; padding: 1.5rem; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; }
        .contact { background: #2c3e50; color: white; text-align: center; }
        .btn { display: inline-block; background: #4ecdc4; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; margin-top: 1rem; }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="hero">
                <h1>🛍️ Mi Tienda</h1>
                <p>Los mejores productos al mejor precio</p>
                <a href="#products" class="btn">Ver Productos</a>
            </div>
        </div>
    </header>

    <section id="products" class="section products">
        <div class="container">
            <h2>Productos Destacados</h2>
            <div class="products-grid">
                <div class="product-card">
                    <h3>🎁 Producto Premium</h3>
                    <p>Calidad excepcional a precio increíble</p>
                    <strong>$29.99</strong>
                </div>
                <div class="product-card">
                    <h3>⭐ Más Vendido</h3>
                    <p>El favorito de nuestros clientes</p>
                    <strong>$19.99</strong>
                </div>
                <div class="product-card">
                    <h3>🆕 Novedad</h3>
                    <p>Lo último en tendencias</p>
                    <strong>$24.99</strong>
                </div>
            </div>
        </div>
    </section>

    <section class="section contact">
        <div class="container">
            <h2>📞 Contáctanos</h2>
            <p>¿Preguntas? ¡Estamos aquí para ayudarte!</p>
            <p>📧 ventas@mitienda.com</p>
            <p>📱 +1 234 567 8900</p>
        </div>
    </section>
</body>
</html>`
        }
    };

    // Respuestas de la IA - Ahora con Gemini AI REAL
    const aiResponses = {
        getWelcomeMessage() {
            return "¡Hola! Soy tu asistente de IA para crear páginas web. Cuéntame qué tipo de página web quieres crear y te ayudaré a generarla con inteligencia artificial real.";
        },
        
        async analyzeRequest(userMessage) {
            // Llamar a Gemini AI para generar contenido real
            const geminiResponse = await callGemini(userMessage);
            
            return {
                type: 'custom', // Tipo personalizado ya que ahora es generado por IA
                response: geminiResponse.response,
                html: geminiResponse.html
            };
        }
    };

    // Sistema de pasos y límites
    function initStepSystem() {
        // Guardar paso inicial si no existe
        if (!localStorage.getItem('devcenter_step')) {
            localStorage.setItem('devcenter_step', '1');
        }
        
        // Bloquear navegación hacia atrás completamente
        history.pushState(null, null, window.location.href);
        window.addEventListener('popstate', function(event) {
            history.pushState(null, null, window.location.href);
        });
    }

    // Configurar eventos
    function setupEventListeners() {
        // Enviar mensaje
        if (elements.sendButton) {
            elements.sendButton.addEventListener('click', handleSendMessage);
        }

        // Enter en el chat
        if (elements.chatInput) {
            elements.chatInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                }
            });
        }

        // Botón regenerar
        if (elements.regenerateBtn) {
            elements.regenerateBtn.addEventListener('click', handleRegenerate);
        }

        // Botón pantalla completa de vista previa
        if (elements.previewFullscreenBtn) {
            elements.previewFullscreenBtn.addEventListener('click', handlePreviewFullscreen);
        }

        // Botón continuar
        if (elements.continueBtn) {
            elements.continueBtn.addEventListener('click', handleContinue);
        }

        // Botón validar código
        if (elements.validateBtn) {
            elements.validateBtn.addEventListener('click', handleValidateCode);
        }

        // Botón volver a descargar
        if (elements.redownloadBtn) {
            elements.redownloadBtn.addEventListener('click', handleRedownload);
        }

        // Botón volver (DESHABILITADO - no permitir retroceso)
        if (elements.backBtn) {
            elements.backBtn.style.display = 'none';
            elements.backBtn.disabled = true;
        }

        // Enter en el código
        if (elements.codeInput) {
            elements.codeInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    handleValidateCode();
                }
            });
        }

        // Botón pantalla completa
        if (elements.fullscreenBtn) {
            elements.fullscreenBtn.addEventListener('click', handleFullscreen);
        }
    }

    // Manejar envío de mensaje
    function handleSendMessage() {
        const message = elements.chatInput.value.trim();
        if (!message || state.isGenerating) return;

        // Agregar mensaje del usuario
        addMessage(message, 'user');
        elements.chatInput.value = '';

        // Procesar mensaje
        processUserMessage(message);
    }

    // Procesar mensaje del usuario con Gemini AI
    async function processUserMessage(message) {
        state.isGenerating = true;
        
        // Mostrar indicador de carga
        addMessage('Generando tu página web con IA real... <span class="loading"></span>', 'ai', true);
        
        // Mostrar juego Dino durante la generación
        showMiniGame();

        try {
            // Llamar a Gemini AI (ahora es async)
            const analysis = await aiResponses.analyzeRequest(message);
            
            // Remover mensaje de carga
            removeLastMessage();
            
            // Ocultar juego y mostrar notificación
            hideMiniGame();
            showWebsiteReadyNotification();
            
            // Agregar respuesta de la IA
            addMessage(analysis.response, 'ai');
            
            // Generar y mostrar página web con HTML personalizado de Gemini
            generateCustomWebsite(analysis.html);
            
            state.isGenerating = false;
        } catch (error) {
            console.error('Error al procesar mensaje:', error);
            removeLastMessage();
            hideMiniGame();
            addMessage('Lo siento, hubo un error al generar tu página web con IA. Por favor, intenta nuevamente con una descripción más específica.', 'ai');
            state.isGenerating = false;
        }
    }

    // Agregar mensaje al chat (seguro contra XSS)
    function addMessage(content, sender, isTemp = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message${isTemp ? ' temp-message' : ''}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        // Crear elementos seguros para evitar XSS
        const label = document.createElement('strong');
        label.textContent = sender === 'ai' ? '🤖 IA:' : '👤 Tú:';
        
        const textSpan = document.createElement('span');
        if (sender === 'ai' && content.includes('<span class="loading"></span>')) {
            // Solo para el mensaje de carga de la IA
            textSpan.innerHTML = ' ' + content;
        } else {
            // Para todos los demás mensajes, usar textContent para seguridad
            textSpan.textContent = ' ' + content;
        }
        
        contentDiv.appendChild(label);
        contentDiv.appendChild(textSpan);
        messageDiv.appendChild(contentDiv);
        elements.chatMessages.appendChild(messageDiv);
        
        // Guardar mensaje en conversación (excepto si es temporal)
        if (!isTemp) {
            if (!state.conversation) {
                state.conversation = [];
            }
            state.conversation.push({
                content: content,
                sender: sender,
                timestamp: Date.now()
            });
            
            // Guardar estado
            saveStateToLocalStorage();
        }
        
        // Scroll al final
        elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    }

    // Remover último mensaje (para quitar indicador de carga)
    function removeLastMessage() {
        const tempMessage = elements.chatMessages.querySelector('.temp-message');
        if (tempMessage) {
            tempMessage.remove();
        }
    }

    // Generar página web personalizada con HTML de Gemini AI
    function generateCustomWebsite(customHtml) {
        // Crear objeto website personalizado
        const customWebsite = {
            title: "Página Generada por IA",
            html: customHtml
        };
        
        state.currentWebsite = customWebsite;
        
        // Crear iframe para aislar el contenido y evitar CSS bleed
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '500px'; // Altura aumentada para contenido personalizado
        iframe.style.border = 'none';
        iframe.style.borderRadius = '8px';
        iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
        
        // CRÍTICO: Configurar onload ANTES de agregar al DOM
        iframe.onload = function() {
            try {
                const doc = iframe.contentDocument || iframe.contentWindow.document;
                doc.open();
                doc.write(customHtml);
                doc.close();
                console.log('✅ Vista previa recargada con contenido generado por Gemini AI');
            } catch (e) {
                console.error('Error al cargar contenido personalizado en iframe:', e);
                // Fallback seguro usando srcdoc
                iframe.srcdoc = customHtml;
            }
        };
        
        // Limpiar contenido previo - ESTO RECARGA LA VISTA PREVIA
        elements.previewContent.innerHTML = '';
        
        // Agregar iframe AL FINAL, después de configurar onload
        elements.previewContent.appendChild(iframe);
        
        // Fallback usando srcdoc si onload falla
        setTimeout(() => {
            if (!iframe.contentDocument || iframe.contentDocument.body.children.length === 0) {
                console.log('🔄 Usando srcdoc como fallback');
                iframe.srcdoc = customHtml;
            }
        }, 1000);
        
        elements.websitePreview.classList.remove('hidden');
        
        // Guardar estado inmediatamente
        saveStateToLocalStorage();
        
        // Scroll al preview con animación suave
        elements.websitePreview.scrollIntoView({ behavior: 'smooth' });
        
        // Efecto visual de recarga exitosa
        setTimeout(() => {
            iframe.style.transform = 'scale(0.98)';
            setTimeout(() => {
                iframe.style.transition = 'transform 0.3s ease';
                iframe.style.transform = 'scale(1)';
            }, 100);
        }, 300);
    }

    // Generar página web (usando iframe para aislamiento) - FUNCIÓN LEGACY
    function generateWebsite(type) {
        const template = websiteTemplates[type] || websiteTemplates.negocio;
        state.currentWebsite = template;
        
        // Crear iframe para aislar el contenido y evitar CSS bleed
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '400px';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '8px';
        iframe.setAttribute('sandbox', 'allow-same-origin');
        
        // Limpiar contenido previo y agregar iframe
        elements.previewContent.innerHTML = '';
        elements.previewContent.appendChild(iframe);
        
        // Escribir contenido al iframe de forma segura
        iframe.onload = function() {
            try {
                const doc = iframe.contentDocument || iframe.contentWindow.document;
                doc.open();
                doc.write(template.html);
                doc.close();
            } catch (e) {
                console.error('Error al cargar contenido en iframe:', e);
                // Fallback seguro
                elements.previewContent.innerHTML = '<p>Error al cargar la vista previa. El sitio web se puede descargar correctamente.</p>';
            }
        };
        
        elements.websitePreview.classList.remove('hidden');
        
        // Guardar estado inmediatamente
        saveStateToLocalStorage();
        
        // Scroll al preview
        elements.websitePreview.scrollIntoView({ behavior: 'smooth' });
    }

    // Manejar regeneración con Gemini AI
    async function handleRegenerate() {
        if (state.isGenerating) return;
        
        state.isGenerating = true;
        addMessage('Regenerando tu página web con IA... <span class="loading"></span>', 'ai', true);
        
        try {
            // Obtener el último mensaje del usuario para regenerar con variaciones
            const lastUserMessage = state.conversation.find(msg => msg.sender === 'user');
            const regeneratePrompt = lastUserMessage ? 
                `${lastUserMessage.content} (crea una versión diferente con otro estilo visual)` : 
                'Crea una página web profesional con diseño moderno y diferente';
            
            // Llamar a Gemini para regenerar
            const geminiResponse = await callGemini(regeneratePrompt);
            
            // Remover mensaje de carga
            removeLastMessage();
            
            // Actualizar el website actual
            state.currentWebsite.html = geminiResponse.html;
            
            // Regenerar la vista previa con el nuevo contenido
            generateCustomWebsite(geminiResponse.html);
            
            addMessage('¡Perfecto! He regenerado tu página web con un diseño completamente nuevo usando IA. ¿Te gusta más esta versión?', 'ai');
            
            state.isGenerating = false;
        } catch (error) {
            console.error('Error al regenerar con IA:', error);
            removeLastMessage();
            addMessage('Error al regenerar la página. Intenta nuevamente.', 'ai');
            state.isGenerating = false;
        }
    }

    // Generar código único
    function generateUniqueCode() {
        const now = new Date();
        const utcDate = now.toISOString().split('T')[0]; // 2025-09-28
        const utcTime = now.toISOString().split('T')[1].substring(0, 5); // 18:27
        
        // Detectar dispositivo
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const deviceCode = isMobile ? 'M' : 'W';
        
        // Contar caracteres de la página web
        const charCount = state.currentWebsite ? state.currentWebsite.html.length : 0;
        
        const code = `${utcDate} ${utcTime}&${deviceCode}&${charCount}`;
        state.currentCode = code;
        return code;
    }

    // Insertar código en HTML
    function insertCodeInHTML(html, code) {
        // Insertar el código como comentario al final del HTML
        const codeComment = `\n\n<!-- ${code} -->`;
        return html.replace('</html>', codeComment + '\n</html>');
    }

    // Descargar archivo HTML
    function downloadHTML() {
        if (!state.currentWebsite) {
            console.error('No hay website para descargar');
            return;
        }
        
        const code = generateUniqueCode();
        const htmlWithCode = insertCodeInHTML(state.currentWebsite.html, code);
        
        const blob = new Blob([htmlWithCode], { type: 'text/html;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'mi-pagina-web.html';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log('Archivo descargado con código:', code);
    }

    // Manejar continuación
    function handleContinue() {
        if (!state.currentWebsite) {
            addMessage('No hay ninguna página web generada para descargar.', 'ai');
            return;
        }

        // Descargar automáticamente
        downloadHTML();
        
        addMessage('Tu página web ha sido descargada automáticamente. Para publicarla, envía el archivo por WhatsApp al 321 100 2280 y solicita la publicación.', 'ai');
        
        // Cambiar al panel 2
        switchToPanel(2);
    }

    // Cambiar panel
    function switchToPanel(panelNumber) {
        if (panelNumber === 2) {
            if (elements.panel1) elements.panel1.classList.remove('active');
            if (elements.panel2) elements.panel2.classList.add('active');
            state.currentPanel = 2;
            
            // Mostrar botón de descarga
            if (elements.redownloadBtn) {
                elements.redownloadBtn.style.display = 'inline-block';
            }
        } else {
            if (elements.panel2) elements.panel2.classList.remove('active');
            if (elements.panel1) elements.panel1.classList.add('active');
            state.currentPanel = 1;
        }
        
        // Guardar estado
        saveStateToLocalStorage();
        console.log('Panel cambiado a:', panelNumber, 'guardado en localStorage');
    }

    // Manejar pantalla completa
    function handleFullscreen() {
        try {
            if (!document.fullscreenElement) {
                // Entrar en pantalla completa
                document.documentElement.requestFullscreen().then(() => {
                    console.log('✅ Pantalla completa activada');
                    // Cambiar icono y clase del botón
                    const icon = elements.fullscreenBtn.querySelector('.fullscreen-icon');
                    if (icon) {
                        icon.textContent = '⚏'; // Icono diferente para salir
                        elements.fullscreenBtn.title = 'Salir de Pantalla Completa';
                        elements.fullscreenBtn.classList.add('fullscreen-active');
                    }
                }).catch(err => {
                    console.error('❌ Error al activar pantalla completa:', err);
                });
            } else {
                // Salir de pantalla completa
                document.exitFullscreen().then(() => {
                    console.log('✅ Salió de pantalla completa');
                    // Restaurar icono y clase del botón
                    const icon = elements.fullscreenBtn.querySelector('.fullscreen-icon');
                    if (icon) {
                        icon.textContent = '⛶'; // Icono original
                        elements.fullscreenBtn.title = 'Pantalla Completa';
                        elements.fullscreenBtn.classList.remove('fullscreen-active');
                    }
                }).catch(err => {
                    console.error('❌ Error al salir de pantalla completa:', err);
                });
            }
        } catch (error) {
            console.error('❌ Error con pantalla completa:', error);
        }
    }

    // Añadir listener para cambios de pantalla completa (por si presiona ESC)
    document.addEventListener('fullscreenchange', () => {
        const icon = elements.fullscreenBtn?.querySelector('.fullscreen-icon');
        if (icon) {
            if (document.fullscreenElement) {
                icon.textContent = '⚏';
                elements.fullscreenBtn.title = 'Salir de Pantalla Completa';
                elements.fullscreenBtn.classList.add('fullscreen-active');
            } else {
                icon.textContent = '⛶';
                elements.fullscreenBtn.title = 'Pantalla Completa';
                elements.fullscreenBtn.classList.remove('fullscreen-active');
            }
        }
    });

    // Manejar pantalla completa de la vista previa
    function handlePreviewFullscreen() {
        if (!state.currentWebsite || !state.currentWebsite.html) {
            console.log('⚠️ No hay contenido para mostrar en pantalla completa');
            return;
        }

        // Crear overlay de pantalla completa
        const fullscreenOverlay = document.createElement('div');
        fullscreenOverlay.id = 'preview-fullscreen-overlay';
        fullscreenOverlay.innerHTML = `
            <div class="fullscreen-header">
                <h3>Vista Previa - Pantalla Completa</h3>
                <button id="close-fullscreen-preview" class="close-fullscreen-btn">×</button>
            </div>
            <iframe class="fullscreen-preview-iframe" sandbox="allow-same-origin allow-scripts"></iframe>
        `;
        
        document.body.appendChild(fullscreenOverlay);
        
        // Obtener iframe y cargar contenido
        const iframe = fullscreenOverlay.querySelector('.fullscreen-preview-iframe');
        
        iframe.onload = function() {
            try {
                const doc = iframe.contentDocument || iframe.contentWindow.document;
                doc.open();
                doc.write(state.currentWebsite.html);
                doc.close();
                console.log('✅ Vista previa a pantalla completa cargada');
            } catch (e) {
                console.error('Error al cargar contenido en pantalla completa:', e);
                iframe.srcdoc = state.currentWebsite.html;
            }
        };
        
        // Eventos para cerrar
        const closeBtn = fullscreenOverlay.querySelector('#close-fullscreen-preview');
        
        function closeFullscreenPreview() {
            fullscreenOverlay.remove();
            document.body.style.overflow = '';
        }
        
        closeBtn.addEventListener('click', closeFullscreenPreview);
        
        // Cerrar con ESC
        function handleEscKey(e) {
            if (e.key === 'Escape') {
                closeFullscreenPreview();
                document.removeEventListener('keydown', handleEscKey);
            }
        }
        
        document.addEventListener('keydown', handleEscKey);
        
        // Cerrar al hacer click en el fondo
        fullscreenOverlay.addEventListener('click', function(e) {
            if (e.target === fullscreenOverlay) {
                closeFullscreenPreview();
                document.removeEventListener('keydown', handleEscKey);
            }
        });
        
        // Bloquear scroll del body
        document.body.style.overflow = 'hidden';
        
        // Trigger iframe load
        setTimeout(() => {
            if (!iframe.contentDocument || iframe.contentDocument.body.children.length === 0) {
                iframe.srcdoc = state.currentWebsite.html;
            }
        }, 100);
    }

    // Validar código
    function handleValidateCode() {
        const inputCode = elements.codeInput.value.trim();
        
        if (!inputCode) {
            showCodeMessage('Por favor, ingresa el código encontrado en el archivo HTML.', 'warning');
            return;
        }
        
        if (!state.currentCode) {
            showCodeMessage('No se encontró código de referencia. Intenta descargar el archivo nuevamente.', 'error');
            return;
        }
        
        if (inputCode === state.currentCode) {
            showCodeMessage('¡Código validado correctamente! Redirigiendo a DevCenter...', 'success');
            
            // Navegar a DevCenter después de validación exitosa
            setTimeout(() => {
                window.location.href = './DevCenter/DevCenter.html?code=' + encodeURIComponent(state.currentCode);
            }, 2000);
        } else {
            showCodeMessage('El código no coincide. Verifica que hayas copiado correctamente el código del archivo HTML.', 'error');
        }
    }

    // Mostrar mensaje de código
    function showCodeMessage(message, type) {
        if (!elements.codeMessage) return;
        
        elements.codeMessage.textContent = message;
        elements.codeMessage.className = `message ${type}-message`;
        elements.codeMessage.style.display = 'block';
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            if (elements.codeMessage) {
                elements.codeMessage.style.display = 'none';
            }
        }, 5000);
    }

    // Manejar nueva descarga
    function handleRedownload() {
        if (state.currentWebsite) {
            downloadHTML();
            addMessage('Archivo descargado nuevamente. Recuerda enviar el archivo al 321 100 2280 por WhatsApp.', 'ai');
        }
    }

    // Guardar estado en localStorage
    function saveStateToLocalStorage() {
        try {
            const stateToSave = {
                conversation: state.conversation,
                currentWebsite: state.currentWebsite,
                currentCode: state.currentCode,
                currentPanel: state.currentPanel
            };
            localStorage.setItem('devcenter_state', JSON.stringify(stateToSave));
        } catch (error) {
            console.error('Error al guardar estado:', error);
        }
    }

    // Cargar estado desde localStorage
    function loadStateFromLocalStorage() {
        try {
            const savedState = localStorage.getItem('devcenter_state');
            if (savedState) {
                const parsedState = JSON.parse(savedState);
                
                // Restaurar conversación
                if (parsedState.conversation) {
                    state.conversation = parsedState.conversation;
                    
                    // Recrear mensajes en el DOM
                    if (elements.chatMessages) {
                        // Mantener mensaje de bienvenida inicial y agregar historial
                        parsedState.conversation.forEach(msg => {
                            addMessage(msg.content, msg.sender);
                        });
                    }
                }
                
                // Restaurar website actual
                if (parsedState.currentWebsite) {
                    state.currentWebsite = parsedState.currentWebsite;
                    
                    // Regenerar vista previa si hay un website
                    if (elements.previewContent && parsedState.currentWebsite.html) {
                        generateCustomWebsite(parsedState.currentWebsite.html);
                    }
                }
                
                // Restaurar código y panel
                if (parsedState.currentCode) {
                    state.currentCode = parsedState.currentCode;
                }
                
                if (parsedState.currentPanel) {
                    state.currentPanel = parsedState.currentPanel;
                    switchToPanel(parsedState.currentPanel);
                }
            }
        } catch (error) {
            console.error('Error al cargar estado:', error);
        }
    }

    // Función de inicialización
    function init() {
        try {
            // Obtener elementos del DOM primero
            elements.chatInput = document.getElementById('chat-input');
            elements.sendButton = document.getElementById('send-message');
            elements.chatMessages = document.getElementById('chat-messages');
            elements.websitePreview = document.getElementById('website-preview');
            elements.previewContent = document.getElementById('preview-content');
            elements.regenerateBtn = document.getElementById('regenerate-btn');
            elements.previewFullscreenBtn = document.getElementById('preview-fullscreen-btn');
            elements.continueBtn = document.getElementById('continue-btn');
            elements.codeInput = document.getElementById('code-input');
            elements.validateBtn = document.getElementById('validate-code');
            elements.redownloadBtn = document.getElementById('redownload-btn');
            elements.backBtn = document.getElementById('back-btn');
            elements.codeMessage = document.getElementById('code-message');
            elements.panel1 = document.getElementById('panel1');
            elements.panel2 = document.getElementById('panel2');
            elements.fullscreenBtn = document.getElementById('fullscreen-btn');

            // Verificar que los elementos existen
            if (!elements.chatInput || !elements.sendButton || !elements.chatMessages) {
                console.error('No se pudieron encontrar elementos críticos del DOM');
                return;
            }

            // Configurar eventos
            setupEventListeners();
            
            // Inicializar sistema de pasos DESPUÉS de que el DOM esté listo
            initStepSystem();
            
            // Inicializar botón de descarga como oculto
            if (elements.redownloadBtn) {
                elements.redownloadBtn.style.display = 'none';
            }
            
            // Cargar estado guardado
            loadStateFromLocalStorage();
            
            console.log('DevCenter IA Code inicializado correctamente');
        } catch (error) {
            console.error('Error al inicializar la aplicación:', error);
        }
    }

    // ===== JUEGO ESTILO GOOGLE DINO =====
    let gameScore = 0;
    let gameElement = null;
    let dinoGame = null;
    
    // Configuración del juego - Dificultad mejorada con múltiples obstáculos
    const DINO_GAME_CONFIG = {
        initialSpeed: 6.0,           // Velocidad inicial optimizada para fluidez
        maxSpeed: 16,                // Velocidad máxima balanceada
        speedIncrement: 0.4,         // Incremento progresivo más suave
        speedIncrementInterval: 50,  // Aumenta velocidad de manera gradual
        jumpPower: -14,              // Salto optimizado para mejor control
        gravity: 0.8,                // Gravedad ajustada para fluidez perfecta
        collisionPenalty: 30,        // Penalización balanceada
        
        // Configuración de obstáculos para VELOCIDAD EXTREMA
        obstacles: {
            minInterval: 60,         // Intervalo mínimo optimizado para jugabilidad fluida
            maxInterval: 120,        // Intervalo máximo que permite respirar
            types: [
                { width: 15, height: 25, color: '#ef4444', points: 15 },     // Obstáculo bajo - más puntos
                { width: 12, height: 35, color: '#dc2626', points: 25 },     // Obstáculo alto - más puntos
                { width: 20, height: 20, color: '#b91c1c', points: 20 },     // Obstáculo cuadrado - más puntos
                { width: 8, height: 40, color: '#991b1b', points: 35 }       // Obstáculo muy alto - muchos puntos
            ],
            doubleChance: 0.15,      // Obstáculos múltiples balanceados
            tripleChance: 0.03       // Triples ocasionales para desafío
        },
        
        // Sistema de niveles para VELOCIDAD EXTREMA
        difficultyLevels: [
            { minScore: 0, obstacleTypes: 2, doubleChance: 0.05 },
            { minScore: 150, obstacleTypes: 3, doubleChance: 0.1 },
            { minScore: 400, obstacleTypes: 4, doubleChance: 0.15 },
            { minScore: 800, obstacleTypes: 4, doubleChance: 0.2 },
            { minScore: 1500, obstacleTypes: 4, doubleChance: 0.25 }
        ]
    };

    // Variables globales para el sistema de juegos múltiples
    let currentGame = 'dino';
    let allGamesScores = {
        dino: 0,
        number: 0,
        clicks: 0,
        math: 0
    };

    function showMiniGame() {
        if (gameElement) return; // Ya está mostrando el juego

        // Crear el contenedor del juego
        gameElement = document.createElement('div');
        gameElement.className = 'mini-game-container';
        gameElement.innerHTML = `
            <div class="mini-game">
                <div class="game-selector">
                    <h4>🎮 ¡Selecciona tu juego mientras esperas!</h4>
                    <div class="game-buttons">
                        <button class="game-btn active" data-game="dino">🦕 Dino Runner</button>
                        <button class="game-btn" data-game="number">🔢 Adivina el Número</button>
                        <button class="game-btn" data-game="clicks">👆 Contador de Clicks</button>
                        <button class="game-btn" data-game="math">➕ Matemáticas</button>
                    </div>
                </div>
                
                <!-- Contenedores para cada juego -->
                <div id="game-dino" class="game-content active">
                    <p>Presiona ESPACIO o haz clic para saltar:</p>
                    <div class="dino-game-container">
                        <canvas id="dino-canvas" width="400" height="150"></canvas>
                    </div>
                    <div class="game-controls">Usa ESPACIO o clic para saltar</div>
                </div>

                <div id="game-number" class="game-content">
                    <p>¡Adivina el número entre 1 y 100!</p>
                    <div class="number-game-container">
                        <div class="number-display">Número secreto: ?</div>
                        <input type="number" id="number-input" min="1" max="100" placeholder="Tu número...">
                        <button id="number-guess" class="game-action-btn">Adivinar</button>
                        <div id="number-hint" class="game-hint"></div>
                        <div id="number-attempts" class="game-attempts">Intentos: 0</div>
                    </div>
                </div>

                <div id="game-clicks" class="game-content">
                    <p>¡Haz la mayor cantidad de clicks en 10 segundos!</p>
                    <div class="clicks-game-container">
                        <div class="clicks-counter">Clicks: <span id="clicks-count">0</span></div>
                        <div class="clicks-timer">Tiempo: <span id="clicks-time">10</span>s</div>
                        <button id="clicks-button" class="clicks-btn">¡HAZ CLICK!</button>
                        <div class="clicks-status">Presiona el botón para empezar</div>
                    </div>
                </div>

                <div id="game-math" class="game-content">
                    <p>¡Resuelve las operaciones matemáticas!</p>
                    <div class="math-game-container">
                        <div class="math-problem">
                            <span id="math-question">¿Listo para empezar?</span>
                        </div>
                        <input type="number" id="math-input" placeholder="Tu respuesta...">
                        <button id="math-submit" class="game-action-btn">Responder</button>
                        <div id="math-feedback" class="math-feedback"></div>
                        <div class="math-stats">
                            <span>Correctas: <span id="math-correct">0</span></span> |
                            <span>Tiempo: <span id="math-timer">0</span>s</span>
                        </div>
                    </div>
                </div>

                <div class="game-score">Puntos totales: <span id="total-score">0</span></div>
                <div class="game-timer">⏱️ Tu página se está generando...</div>
            </div>
        `;

        // Insertar después del chat
        const chatContainer = document.querySelector('.chat-container');
        if (chatContainer) {
            chatContainer.parentNode.insertBefore(gameElement, chatContainer.nextSibling);
        }

        // Inicializar sistema de navegación entre juegos
        initGameNavigation();
        
        // Inicializar el juego actual (Dino por defecto)
        initCurrentGame();
    }

    function hideMiniGame() {
        // Detener todos los juegos activos
        if (dinoGame) {
            dinoGame.stop();
            dinoGame = null;
        }
        stopAllGames();
        
        if (gameElement) {
            gameElement.remove();
            gameElement = null;
        }
    }

    // Sistema de navegación entre juegos
    function initGameNavigation() {
        const gameButtons = document.querySelectorAll('.game-btn');
        gameButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const selectedGame = btn.getAttribute('data-game');
                switchGame(selectedGame);
            });
        });
    }

    function switchGame(newGame) {
        if (newGame === currentGame) return;
        
        // Detener juego actual
        stopCurrentGame();
        
        // Cambiar botones activos
        document.querySelectorAll('.game-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-game="${newGame}"]`).classList.add('active');
        
        // Cambiar contenido activo
        document.querySelectorAll('.game-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`game-${newGame}`).classList.add('active');
        
        // Actualizar juego actual
        currentGame = newGame;
        
        // Inicializar nuevo juego
        initCurrentGame();
        
        // Actualizar puntuación total
        updateTotalScore();
    }

    function initCurrentGame() {
        switch(currentGame) {
            case 'dino':
                initDinoGame();
                break;
            case 'number':
                initNumberGuessGame();
                break;
            case 'clicks':
                initClickCounterGame();
                break;
            case 'math':
                initMathGame();
                break;
        }
    }

    function stopCurrentGame() {
        switch(currentGame) {
            case 'dino':
                if (dinoGame) {
                    dinoGame.stop();
                    dinoGame = null;
                }
                break;
            case 'clicks':
                stopClickCounterGame();
                break;
            case 'math':
                stopMathGame();
                break;
        }
    }

    function stopAllGames() {
        if (dinoGame) {
            dinoGame.stop();
            dinoGame = null;
        }
        stopClickCounterGame();
        stopMathGame();
    }

    function updateTotalScore() {
        const total = Object.values(allGamesScores).reduce((sum, score) => sum + score, 0);
        const totalScoreElement = document.getElementById('total-score');
        if (totalScoreElement) {
            totalScoreElement.textContent = total;
        }
    }

    // ===== JUEGO DE ADIVINAR EL NÚMERO =====
    let numberGame = {
        secretNumber: 0,
        attempts: 0,
        maxAttempts: 7,
        gameActive: false
    };

    function initNumberGuessGame() {
        numberGame.secretNumber = Math.floor(Math.random() * 100) + 1;
        numberGame.attempts = 0;
        numberGame.gameActive = true;
        
        const hintElement = document.getElementById('number-hint');
        const attemptsElement = document.getElementById('number-attempts');
        const inputElement = document.getElementById('number-input');
        const guessButton = document.getElementById('number-guess');
        
        if (hintElement) hintElement.textContent = '¡Número generado! Haz tu primera adivinanza.';
        if (attemptsElement) attemptsElement.textContent = `Intentos: 0/${numberGame.maxAttempts}`;
        if (inputElement) {
            inputElement.value = '';
            inputElement.focus();
        }
        
        // Event listeners
        const handleGuess = () => {
            if (!numberGame.gameActive) return;
            
            const guess = parseInt(inputElement.value);
            if (isNaN(guess) || guess < 1 || guess > 100) {
                hintElement.textContent = '⚠️ Ingresa un número válido entre 1 y 100';
                return;
            }
            
            numberGame.attempts++;
            attemptsElement.textContent = `Intentos: ${numberGame.attempts}/${numberGame.maxAttempts}`;
            
            if (guess === numberGame.secretNumber) {
                hintElement.textContent = `🎉 ¡CORRECTO! Era ${numberGame.secretNumber}. Lo lograste en ${numberGame.attempts} intentos.`;
                hintElement.style.color = '#10b981';
                const points = Math.max(100 - (numberGame.attempts * 10), 10);
                allGamesScores.number += points;
                updateTotalScore();
                numberGame.gameActive = false;
                
                // Nuevo juego después de 3 segundos
                setTimeout(() => {
                    if (currentGame === 'number') initNumberGuessGame();
                }, 3000);
            } else if (numberGame.attempts >= numberGame.maxAttempts) {
                hintElement.textContent = `😞 Se acabaron los intentos. El número era ${numberGame.secretNumber}`;
                hintElement.style.color = '#ef4444';
                numberGame.gameActive = false;
                
                // Nuevo juego después de 3 segundos
                setTimeout(() => {
                    if (currentGame === 'number') initNumberGuessGame();
                }, 3000);
            } else {
                const hint = guess < numberGame.secretNumber ? 'más alto' : 'más bajo';
                hintElement.textContent = `${guess < numberGame.secretNumber ? '📈' : '📉'} El número es ${hint}. Te quedan ${numberGame.maxAttempts - numberGame.attempts} intentos.`;
                hintElement.style.color = '#6366f1';
            }
            
            inputElement.value = '';
        };
        
        if (guessButton) {
            guessButton.onclick = handleGuess;
        }
        
        if (inputElement) {
            inputElement.onkeypress = (e) => {
                if (e.key === 'Enter') handleGuess();
            };
        }
    }

    // ===== JUEGO CONTADOR DE CLICKS =====
    let clicksGame = {
        count: 0,
        timeLeft: 10,
        gameActive: false,
        interval: null
    };

    function initClickCounterGame() {
        clicksGame.count = 0;
        clicksGame.timeLeft = 10;
        clicksGame.gameActive = false;
        
        const countElement = document.getElementById('clicks-count');
        const timeElement = document.getElementById('clicks-time');
        const buttonElement = document.getElementById('clicks-button');
        const statusElement = document.querySelector('.clicks-status');
        
        if (countElement) countElement.textContent = '0';
        if (timeElement) timeElement.textContent = '10';
        if (statusElement) statusElement.textContent = 'Presiona el botón para empezar';
        
        if (buttonElement) {
            buttonElement.onclick = () => {
                if (!clicksGame.gameActive) {
                    startClicksGame();
                } else {
                    clicksGame.count++;
                    countElement.textContent = clicksGame.count;
                }
            };
        }
    }

    function startClicksGame() {
        clicksGame.gameActive = true;
        clicksGame.count = 0;
        clicksGame.timeLeft = 10;
        
        const timeElement = document.getElementById('clicks-time');
        const statusElement = document.querySelector('.clicks-status');
        const buttonElement = document.getElementById('clicks-button');
        
        if (statusElement) statusElement.textContent = '¡HAGA CLICK LO MÁS RÁPIDO POSIBLE!';
        if (buttonElement) buttonElement.textContent = '¡CLICK AQUÍ!';
        
        clicksGame.interval = setInterval(() => {
            clicksGame.timeLeft--;
            if (timeElement) timeElement.textContent = clicksGame.timeLeft;
            
            if (clicksGame.timeLeft <= 0) {
                endClicksGame();
            }
        }, 1000);
    }

    function endClicksGame() {
        clicksGame.gameActive = false;
        if (clicksGame.interval) {
            clearInterval(clicksGame.interval);
            clicksGame.interval = null;
        }
        
        const statusElement = document.querySelector('.clicks-status');
        const buttonElement = document.getElementById('clicks-button');
        
        const cps = (clicksGame.count / 10).toFixed(1);
        if (statusElement) {
            statusElement.textContent = `¡Terminado! Hiciste ${clicksGame.count} clicks (${cps} clicks/seg)`;
        }
        if (buttonElement) buttonElement.textContent = 'Jugar de nuevo';
        
        // Otorgar puntos basados en CPS
        const points = Math.floor(clicksGame.count * 2);
        allGamesScores.clicks += points;
        updateTotalScore();
    }

    function stopClickCounterGame() {
        if (clicksGame.interval) {
            clearInterval(clicksGame.interval);
            clicksGame.interval = null;
        }
        clicksGame.gameActive = false;
    }

    // ===== JUEGO DE MATEMÁTICAS =====
    let mathGame = {
        currentProblem: null,
        correctAnswer: 0,
        correctCount: 0,
        startTime: 0,
        gameTimer: null,
        elapsedTime: 0
    };

    function initMathGame() {
        mathGame.correctCount = 0;
        mathGame.startTime = Date.now();
        mathGame.elapsedTime = 0;
        
        const correctElement = document.getElementById('math-correct');
        const timerElement = document.getElementById('math-timer');
        const inputElement = document.getElementById('math-input');
        const submitButton = document.getElementById('math-submit');
        const feedbackElement = document.getElementById('math-feedback');
        
        if (correctElement) correctElement.textContent = '0';
        if (timerElement) timerElement.textContent = '0';
        if (feedbackElement) feedbackElement.textContent = '';
        
        // Timer del juego
        mathGame.gameTimer = setInterval(() => {
            mathGame.elapsedTime = Math.floor((Date.now() - mathGame.startTime) / 1000);
            if (timerElement) timerElement.textContent = mathGame.elapsedTime;
        }, 1000);
        
        generateMathProblem();
        
        const handleSubmit = () => {
            const answer = parseInt(inputElement.value);
            if (isNaN(answer)) {
                feedbackElement.textContent = '⚠️ Ingresa un número válido';
                feedbackElement.style.color = '#ef4444';
                return;
            }
            
            if (answer === mathGame.correctAnswer) {
                mathGame.correctCount++;
                correctElement.textContent = mathGame.correctCount;
                feedbackElement.textContent = '✅ ¡Correcto!';
                feedbackElement.style.color = '#10b981';
                
                // Otorgar puntos (más puntos por rapidez)
                const timeBonus = Math.max(10 - mathGame.elapsedTime % 10, 1);
                allGamesScores.math += (10 + timeBonus);
                updateTotalScore();
                
                generateMathProblem();
            } else {
                feedbackElement.textContent = `❌ Incorrecto. La respuesta era ${mathGame.correctAnswer}`;
                feedbackElement.style.color = '#ef4444';
                
                setTimeout(() => {
                    generateMathProblem();
                }, 2000);
            }
            
            inputElement.value = '';
        };
        
        if (submitButton) {
            submitButton.onclick = handleSubmit;
        }
        
        if (inputElement) {
            inputElement.onkeypress = (e) => {
                if (e.key === 'Enter') handleSubmit();
            };
            inputElement.focus();
        }
    }

    function generateMathProblem() {
        const operations = ['+', '-', '×', '÷'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        let a, b, question, answer;
        
        switch(operation) {
            case '+':
                a = Math.floor(Math.random() * 100) + 1;
                b = Math.floor(Math.random() * 100) + 1;
                question = `${a} + ${b} = ?`;
                answer = a + b;
                break;
                
            case '-':
                a = Math.floor(Math.random() * 100) + 50;
                b = Math.floor(Math.random() * 50) + 1;
                question = `${a} - ${b} = ?`;
                answer = a - b;
                break;
                
            case '×':
                a = Math.floor(Math.random() * 12) + 1;
                b = Math.floor(Math.random() * 12) + 1;
                question = `${a} × ${b} = ?`;
                answer = a * b;
                break;
                
            case '÷':
                b = Math.floor(Math.random() * 12) + 1;
                answer = Math.floor(Math.random() * 12) + 1;
                a = b * answer;
                question = `${a} ÷ ${b} = ?`;
                break;
        }
        
        mathGame.correctAnswer = answer;
        const questionElement = document.getElementById('math-question');
        if (questionElement) questionElement.textContent = question;
    }

    function stopMathGame() {
        if (mathGame.gameTimer) {
            clearInterval(mathGame.gameTimer);
            mathGame.gameTimer = null;
        }
    }

    // Inicializar el juego Dino
    function initDinoGame() {
        const canvas = document.getElementById('dino-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        gameScore = 0;

        // Variables del juego usando configuración avanzada
        const game = {
            running: true,
            speed: DINO_GAME_CONFIG.initialSpeed,
            score: 0,
            collision: false,
            level: 0,
            
            dino: {
                x: 50,
                y: 100,
                width: 20,
                height: 20,
                jumping: false,
                velocity: 0,
                gravity: DINO_GAME_CONFIG.gravity,
                jumpPower: DINO_GAME_CONFIG.jumpPower
            },
            
            obstacles: [],
            lastObstacle: 0,
            obstacleInterval: DINO_GAME_CONFIG.obstacles.maxInterval,
            nextObstacleType: 0
        };

        // Función para saltar
        function jump() {
            if (!game.dino.jumping) {
                game.dino.jumping = true;
                game.dino.velocity = game.dino.jumpPower;
            }
        }

        // Event listeners
        const handleKeyPress = (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                jump();
            }
        };

        const handleClick = (e) => {
            e.preventDefault();
            jump();
        };

        document.addEventListener('keydown', handleKeyPress);
        canvas.addEventListener('click', handleClick);

        // Función para obtener el nivel de dificultad actual
        function getCurrentDifficulty() {
            for (let i = DINO_GAME_CONFIG.difficultyLevels.length - 1; i >= 0; i--) {
                if (game.score >= DINO_GAME_CONFIG.difficultyLevels[i].minScore) {
                    return DINO_GAME_CONFIG.difficultyLevels[i];
                }
            }
            return DINO_GAME_CONFIG.difficultyLevels[0];
        }

        // Función avanzada para crear obstáculos múltiples
        function createObstacles() {
            const currentDifficulty = getCurrentDifficulty();
            const availableTypes = DINO_GAME_CONFIG.obstacles.types.slice(0, currentDifficulty.obstacleTypes);
            
            // Decidir si crear obstáculo simple, doble o triple
            const rand = Math.random();
            let obstacleCount = 1;
            
            if (rand < currentDifficulty.doubleChance) {
                obstacleCount = 2;
            } else if (rand < DINO_GAME_CONFIG.obstacles.tripleChance && game.score >= 1000) {
                obstacleCount = 3;
            }
            
            // Crear los obstáculos
            for (let i = 0; i < obstacleCount; i++) {
                const obstacleType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
                const spacing = i * (obstacleType.width + 25); // Espaciado entre obstáculos múltiples
                
                game.obstacles.push({
                    x: canvas.width + spacing,
                    y: 130 - obstacleType.height,
                    width: obstacleType.width,
                    height: obstacleType.height,
                    color: obstacleType.color,
                    points: obstacleType.points
                });
            }
        }

        // Función de actualización
        function update() {
            if (!game.running) return;

            // Actualizar dino
            if (game.dino.jumping) {
                game.dino.velocity += game.dino.gravity;
                game.dino.y += game.dino.velocity;
                
                if (game.dino.y >= 100) {
                    game.dino.y = 100;
                    game.dino.jumping = false;
                    game.dino.velocity = 0;
                }
            }

            // Sistema avanzado de creación de obstáculos
            if (game.lastObstacle > game.obstacleInterval) {
                createObstacles();
                
                // Intervalo variable entre obstáculos
                const minInterval = DINO_GAME_CONFIG.obstacles.minInterval;
                const maxInterval = DINO_GAME_CONFIG.obstacles.maxInterval;
                game.obstacleInterval = Math.random() * (maxInterval - minInterval) + minInterval;
                
                game.lastObstacle = 0;
            }
            game.lastObstacle++;

            // Mover obstáculos y actualizar puntuación
            for (let i = game.obstacles.length - 1; i >= 0; i--) {
                game.obstacles[i].x -= game.speed;
                
                // Eliminar obstáculos fuera de pantalla y dar puntos específicos
                if (game.obstacles[i].x + game.obstacles[i].width < 0) {
                    game.score += game.obstacles[i].points; // Usar puntos específicos del obstáculo
                    game.obstacles.splice(i, 1);
                }
            }

            // Detectar colisiones con sistema mejorado
            for (let obstacle of game.obstacles) {
                if (game.dino.x < obstacle.x + obstacle.width &&
                    game.dino.x + game.dino.width > obstacle.x &&
                    game.dino.y < obstacle.y + obstacle.height &&
                    game.dino.y + game.dino.height > obstacle.y) {
                    // Colisión detectada - efecto visual y penalización
                    game.collision = true;
                    game.obstacles = [];
                    game.score = Math.max(0, game.score - DINO_GAME_CONFIG.collisionPenalty);
                    game.speed = Math.max(DINO_GAME_CONFIG.initialSpeed, game.speed - (DINO_GAME_CONFIG.speedIncrement * 2));
                    
                    // Reducir intervalo de obstáculos temporalmente para dar respiro
                    game.obstacleInterval = DINO_GAME_CONFIG.obstacles.maxInterval;
                }
            }

            // Incrementar velocidad gradualmente usando configuración
            if (game.score > 0 && game.score % DINO_GAME_CONFIG.speedIncrementInterval === 0) {
                const currentSpeedLevel = Math.floor(game.score / DINO_GAME_CONFIG.speedIncrementInterval);
                game.speed = Math.min(DINO_GAME_CONFIG.maxSpeed, DINO_GAME_CONFIG.initialSpeed + (currentSpeedLevel * DINO_GAME_CONFIG.speedIncrement));
            }

            gameScore = game.score;
            const scoreDisplay = document.getElementById('game-score');
            if (scoreDisplay) {
                scoreDisplay.textContent = gameScore;
            }
        }

        // Función de renderizado mejorada
        function render() {
            // Limpiar canvas con gradiente de fondo
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#0f172a');
            gradient.addColorStop(0.7, '#1e293b');
            gradient.addColorStop(1, '#334155');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Dibujar estrellas de fondo
            ctx.fillStyle = 'rgba(255,255,255,0.3)';
            for (let i = 0; i < 20; i++) {
                const x = (i * 37 + game.score * 0.5) % canvas.width;
                const y = (i * 23) % 100;
                ctx.fillRect(x, y, 1, 1);
            }

            // Dibujar suelo con gradiente y brillo
            const groundGradient = ctx.createLinearGradient(0, 120, 0, 150);
            groundGradient.addColorStop(0, '#10b981');
            groundGradient.addColorStop(1, '#047857');
            ctx.fillStyle = groundGradient;
            ctx.fillRect(0, 120, canvas.width, 30);
            
            // Brillo del suelo
            ctx.fillStyle = 'rgba(16,185,129,0.3)';
            ctx.fillRect(0, 118, canvas.width, 4);

            // Dibujar dino con efectos mejorados
            const dinoGradient = ctx.createRadialGradient(
                game.dino.x + game.dino.width/2, game.dino.y + game.dino.height/2, 0,
                game.dino.x + game.dino.width/2, game.dino.y + game.dino.height/2, game.dino.width
            );
            dinoGradient.addColorStop(0, '#34d399');
            dinoGradient.addColorStop(0.7, '#10b981');
            dinoGradient.addColorStop(1, '#047857');
            
            ctx.fillStyle = dinoGradient;
            ctx.fillRect(game.dino.x, game.dino.y, game.dino.width, game.dino.height);
            
            // Ojos del dino
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(game.dino.x + 4, game.dino.y + 4, 3, 3);
            ctx.fillRect(game.dino.x + 11, game.dino.y + 4, 3, 3);
            ctx.fillStyle = '#000000';
            ctx.fillRect(game.dino.x + 5, game.dino.y + 5, 1, 1);
            ctx.fillRect(game.dino.x + 12, game.dino.y + 5, 1, 1);
            
            // Brillo del dino cuando salta
            if (game.dino.jumping) {
                ctx.strokeStyle = 'rgba(52,211,153,0.8)';
                ctx.lineWidth = 2;
                ctx.strokeRect(game.dino.x - 2, game.dino.y - 2, game.dino.width + 4, game.dino.height + 4);
            }

            // Dibujar obstáculos avanzados con tipos específicos
            for (let obstacle of game.obstacles) {
                // Crear gradiente dinámico basado en el color del obstáculo
                const obstacleGradient = ctx.createLinearGradient(
                    obstacle.x, obstacle.y, 
                    obstacle.x + obstacle.width, obstacle.y + obstacle.height
                );
                
                // Usar el color específico del obstáculo
                const baseColor = obstacle.color;
                obstacleGradient.addColorStop(0, lightenColor(baseColor, 0.2));
                obstacleGradient.addColorStop(0.5, baseColor);
                obstacleGradient.addColorStop(1, darkenColor(baseColor, 0.3));
                
                ctx.fillStyle = obstacleGradient;
                ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
                
                // Borde brillante del obstáculo con color dinámico
                ctx.strokeStyle = lightenColor(baseColor, 0.4) + '80';
                ctx.lineWidth = obstacle.height > 30 ? 2 : 1; // Borde más grueso para obstáculos altos
                ctx.strokeRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
                
                // Efectos de peligro más intensos para obstáculos más altos
                const dangerIntensity = obstacle.height / 40;
                ctx.fillStyle = `rgba(239,68,68,${0.2 + dangerIntensity * 0.2})`;
                ctx.fillRect(obstacle.x - 2, obstacle.y - 3, obstacle.width + 4, 3);
                
                // Indicador de puntos para obstáculos especiales
                if (obstacle.points > 15) {
                    ctx.fillStyle = '#facc15';
                    ctx.font = 'bold 10px Arial';
                    ctx.fillText(`+${obstacle.points}`, obstacle.x + 2, obstacle.y - 5);
                }
            }
            
            // Funciones auxiliares para colores
            function lightenColor(color, amount) {
                const num = parseInt(color.replace("#", ""), 16);
                const amt = Math.round(2.55 * amount * 100);
                const R = Math.min(255, (num >> 16) + amt);
                const G = Math.min(255, (num >> 8 & 0x00FF) + amt);
                const B = Math.min(255, (num & 0x0000FF) + amt);
                return `#${(0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
            }
            
            function darkenColor(color, amount) {
                const num = parseInt(color.replace("#", ""), 16);
                const amt = Math.round(2.55 * amount * 100);
                const R = Math.max(0, (num >> 16) - amt);
                const G = Math.max(0, (num >> 8 & 0x00FF) - amt);
                const B = Math.max(0, (num & 0x0000FF) - amt);
                return `#${(0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
            }

            // Dibujar información del juego con efectos
            ctx.shadowColor = 'rgba(16,185,129,0.8)';
            ctx.shadowBlur = 10;
            ctx.fillStyle = '#10b981';
            ctx.font = 'bold 16px Arial';
            ctx.fillText(`Puntos: ${game.score}`, 10, 25);
            
            // Nivel de dificultad actual
            const currentDiff = getCurrentDifficulty();
            const level = DINO_GAME_CONFIG.difficultyLevels.indexOf(currentDiff) + 1;
            ctx.fillStyle = 'rgba(34,197,94,0.9)';
            ctx.font = 'bold 12px Arial';
            ctx.fillText(`Nivel: ${level}/5`, 10, 45);
            
            // Velocidad actual
            ctx.fillStyle = 'rgba(34,197,94,0.7)';
            ctx.fillText(`Velocidad: ${game.speed.toFixed(1)}x`, 10, 60);
            
            // Indicador de obstáculos múltiples
            if (currentDiff.doubleChance > 0.2) {
                ctx.fillStyle = 'rgba(239,68,68,0.8)';
                ctx.font = 'bold 10px Arial';
                ctx.fillText('¡OBSTÁCULOS MÚLTIPLES!', 10, 75);
            }
            
            // Reset shadow
            ctx.shadowBlur = 0;
            
            // Efectos de colisión
            if (game.collision) {
                ctx.fillStyle = 'rgba(239,68,68,0.3)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                game.collision = false;
            }
        }

        // Loop principal del juego
        function gameLoop() {
            if (!game.running) return;
            
            update();
            render();
            requestAnimationFrame(gameLoop);
        }

        // Iniciar el juego
        gameLoop();

        // Configurar objeto de control
        dinoGame = {
            stop: () => {
                game.running = false;
                document.removeEventListener('keydown', handleKeyPress);
                canvas.removeEventListener('click', handleClick);
            }
        };
    }

    // ===== FUNCIONES DE NOTIFICACIONES =====
    function showWebsiteReadyNotification() {
        // Crear notificación
        const notification = document.createElement('div');
        notification.className = 'website-ready-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">🎉</span>
                <span class="notification-text">¡Tu página web está lista!</span>
                <span class="notification-score">Puntos obtenidos: ${gameScore}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Animar entrada
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Quitar después de 4 segundos
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 4000);

        // Reproducir sonido de notificación si es posible
        try {
            // Crear un sonido simple usando Web Audio API
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (e) {
            // Ignorar errores de audio en navegadores que no lo soporten
        }
    }


    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();