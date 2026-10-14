/* ═══════════════════════════════════════════════════════
   ATLECORE – script.js
   Generación dinámica de contenido, Intersection Observer animations,
   navbar scroll, smooth collapsible sessions, scroll-to-top button,
   mobile nav toggle.
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── Generate Sections Dynamically ─── */
  const sectionsContainer = document.getElementById('sections-container');

  // Generate all sections
  sectionsContainer.innerHTML = generateQueEsSection() +
    generateExploraSection() +
    generateSeguridadSection() +
    generateIntroduccionSection() +
    generateObjetivoSection() +
    generateHabilidadesSection() +
    generateRecursoSection() +
    generatePropositoSection() +
    generateProgresionSection() +
    generateSesionesSection() +
    generateTablasSection();

  // Generate sessions from data
  generateSessions();

  /* ─── Intersection Observer: fade-in on scroll ─── */
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  /* ─── Navbar: add .scrolled class on scroll ─── */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ─── Scroll-to-top button ─── */
  const scrollTopBtn = document.getElementById('scrollTop');
  const toggleScrollTop = () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  };
  window.addEventListener('scroll', toggleScrollTop, { passive: true });
  toggleScrollTop();

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ─── Mobile nav toggle ─── */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      navToggle.textContent = '☰';
    });
  });

  /* ─── Smooth scroll for nav links (fallback) ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ─── Session details: auto-close others (accordion) ─── */
  const sessionItems = document.querySelectorAll('.session-item');
  sessionItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        sessionItems.forEach(other => {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
        setTimeout(() => {
          item.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  });

});

/* ─── Section Generators ─── */
function generateQueEsSection() {
  return `
<section class="section" id="que-es">
  <h2 class="section-title fade-in">¿Qué es ATLECORE?</h2>
  <div class="card-grid-2">
    <div class="glass-card accent-blue fade-in">
      <h3>Recurso Digital Educativo</h3>
      <p>ATLECORE es un recurso digital educativo con implementación práctica diseñado para niños de 6 a 7 años, que busca fortalecer la coordinación dinámica general mediante actividades físicas, recreativas y progresivas. Sus sesiones trabajan habilidades como el equilibrio, el control corporal, los desplazamientos, los saltos, los lanzamientos, la reacción y los cambios de dirección, como base para la iniciación al atletismo escolar.</p>
    </div>
    <div class="glass-card accent-purple fade-in">
      <h3>¿Para quién está dirigido?</h3>
      <p>ATLECORE está dirigido a niños de 6 a 7 años, con actividades físicas, recreativas y progresivas adaptadas a su etapa de desarrollo. Las propuestas buscan fortalecer sus habilidades motrices de manera dinámica, segura y divertida, favoreciendo la coordinación, el control corporal y la iniciación al atletismo escolar.</p>
    </div>
  </div>
</section>`;
}

function generateExploraSection() {
  return `
<section class="section" id="explora">
  <h2 class="section-title fade-in">Explora ATLECORE</h2>
  <p class="section-subtitle fade-in">Conoce las diferentes secciones y actividades que hacen parte de ATLECORE:</p>
  <div class="feature-cards">
    <div class="feature-card fade-in">
      <span class="emoji">🏃</span>
      <h3>14 Sesiones</h3>
      <p>Actividades organizadas progresivamente para fortalecer las habilidades motrices.</p>
    </div>
    <div class="feature-card fade-in">
      <span class="emoji">🤸</span>
      <h3>Habilidades Motrices</h3>
      <p>Ejercicios para trabajar coordinación, equilibrio, control corporal, desplazamientos, saltos y reacción.</p>
    </div>
    <div class="feature-card fade-in">
      <span class="emoji">📈</span>
      <h3>Progresión</h3>
      <p>Una secuencia de actividades que aumenta gradualmente su dificultad y avanza hacia la iniciación al atletismo.</p>
    </div>
    <div class="feature-card fade-in">
      <span class="emoji">🛡️</span>
      <h3>Seguridad</h3>
      <p>Recomendaciones para realizar las actividades de manera segura y adaptada.</p>
    </div>
  </div>
</section>`;
}

function generateSeguridadSection() {
  return `
<section class="section" id="seguridad">
  <h2 class="section-title fade-in">Seguridad</h2>
  <p class="section-subtitle fade-in">Para realizar las actividades de ATLECORE de manera segura, se recomienda:</p>
  <div class="card-grid">
    <div class="glass-card accent-teal fade-in">
      <h3>Supervisión del docente</h3>
      <p>Acompañar y observar a los niños durante toda la actividad.</p>
    </div>
    <div class="glass-card accent-green fade-in">
      <h3>Espacio seguro</h3>
      <p>Verificar que el área esté libre de objetos u obstáculos que puedan provocar caídas.</p>
    </div>
    <div class="glass-card accent-cyan fade-in">
      <h3>Uso adecuado de materiales</h3>
      <p>Utilizar correctamente los conos, aros, balones y demás elementos.</p>
    </div>
    <div class="glass-card accent-blue fade-in">
      <h3>Hidratación</h3>
      <p>Realizar pausas breves para hidratarse aparte del espacio propuesto, si es necesario durante la sesión.</p>
    </div>
    <div class="glass-card accent-purple fade-in">
      <h3>Adaptación</h3>
      <p>Ajustar la dificultad según las capacidades y necesidades de cada niño.</p>
    </div>
  </div>
</section>`;
}

function generateIntroduccionSection() {
  return `
<section class="section" id="introduccion">
  <h2 class="section-title fade-in">Introducción</h2>
  <div class="glass-card fade-in">
    <p>El desarrollo de la coordinación dinámica general en niños de 6 y 7 años es fundamental dentro del área de educación física, ya que en esta etapa se fortalecen habilidades relacionadas con el control corporal y la organización del movimiento, necesarias para la iniciación en el atletismo escolar. Por ello, es importante contar con estrategias que orienten de manera estructurada el trabajo coordinativo.</p>
  </div>
</section>`;
}

function generateObjetivoSection() {
  return `
<section class="section" id="objetivo">
  <h2 class="section-title fade-in">Objetivo</h2>
  <div class="glass-card accent-gold fade-in" style="margin-bottom:1.5rem;">
    <h3>Objetivo General</h3>
    <p>El objetivo de ATLECORE es fortalecer la coordinación dinámica general mediante actividades físicas, recreativas y progresivas que permitan a los niños mejorar la manera en que controlan y organizan sus movimientos. Las actividades buscan desarrollar capacidades como el equilibrio, el control corporal, los desplazamientos, los saltos, la reacción, la orientación espacial y los cambios de dirección.</p>
    <p style="margin-top:0.8rem;">Además, se pretende que estas habilidades sirvan como una base para acercar progresivamente a los niños a diferentes movimientos relacionados con la iniciación al atletismo escolar.</p>
  </div>

  <div class="glass-card accent-orange fade-in" style="margin-bottom:1.5rem;">
    <h3>Objetivos Específicos</h3>
    <ul>
      <li>Identificar el nivel de coordinación dinámica general en niños de 6 y 7 años dentro del contexto escolar.</li>
      <li>Diseñar una página digital que estructure actividades orientadas al fortalecimiento de la coordinación dinámica general.</li>
      <li>Aplicar las actividades propuestas mediante sesiones prácticas para favorecer el desarrollo coordinativo como base del atletismo escolar.</li>
    </ul>
  </div>

  <div class="glass-card accent-cyan fade-in">
    <h3>Organización de las actividades</h3>
    <p>ATLECORE está compuesto por 14 sesiones organizadas de manera progresiva. Cada sesión presenta una actividad central y diferentes ejercicios de preparación que permiten trabajar las habilidades motrices de forma gradual.</p>
    <p style="margin-top:0.6rem;">La dificultad aumenta a medida que avanzan las sesiones. Primero se trabajan movimientos básicos y el control corporal; posteriormente se combinan diferentes desplazamientos, cambios de dirección, reacciones y movimientos; finalmente, se incorporan actividades relacionadas directamente con algunas habilidades del atletismo.</p>
  </div>
</section>`;
}

function generateHabilidadesSection() {
  return `
<section class="section" id="habilidades">
  <h2 class="section-title fade-in">Habilidades que se trabajan</h2>
  <p class="section-subtitle fade-in">A lo largo de las 14 sesiones se trabajan diferentes habilidades que contribuyen al desarrollo coordinativo:</p>
  <div class="skills-grid">
    <div class="skill-chip fade-in">
      <span class="skill-icon">🤸</span>
      <span class="skill-name">Coordinación dinámica general</span>
      <span class="skill-desc">Combinación organizada de diferentes movimientos</span>
    </div>
    <div class="skill-chip fade-in">
      <span class="skill-icon">⚖️</span>
      <span class="skill-name">Equilibrio</span>
      <span class="skill-desc">Mantenimiento de la estabilidad durante los desplazamientos y las actividades</span>
    </div>
    <div class="skill-chip fade-in">
      <span class="skill-icon">🏃</span>
      <span class="skill-name">Desplazamientos</span>
      <span class="skill-desc">Movimientos hacia adelante, atrás, laterales y diagonales</span>
    </div>
    <div class="skill-chip fade-in">
      <span class="skill-icon">🦘</span>
      <span class="skill-name">Saltos</span>
      <span class="skill-desc">Impulsos y aterrizajes controlados</span>
    </div>
    <div class="skill-chip fade-in">
      <span class="skill-icon">🎯</span>
      <span class="skill-name">Lanzamientos</span>
      <span class="skill-desc">Coordinación entre brazos, manos y cuerpo</span>
    </div>
    <div class="skill-chip fade-in">
      <span class="skill-icon">⚡</span>
      <span class="skill-name">Reacción</span>
      <span class="skill-desc">Respuesta ante señales visuales o sonoras</span>
    </div>
    <div class="skill-chip fade-in">
      <span class="skill-icon">🧭</span>
      <span class="skill-name">Orientación espacial</span>
      <span class="skill-desc">Reconocimiento del cuerpo y del espacio durante el movimiento</span>
    </div>
    <div class="skill-chip fade-in">
      <span class="skill-icon">🔄</span>
      <span class="skill-name">Cambios de dirección y velocidad</span>
      <span class="skill-desc">Adaptación del movimiento según las indicaciones</span>
    </div>
    <div class="skill-chip fade-in">
      <span class="skill-icon">🚀</span>
      <span class="skill-name">Velocidad</span>
      <span class="skill-desc">Control de ritmos y aceleraciones</span>
    </div>
    <div class="skill-chip fade-in">
      <span class="skill-icon">🤝</span>
      <span class="skill-name">Coordinación brazos-piernas</span>
      <span class="skill-desc">Sincronización de los movimientos durante diferentes acciones</span>
    </div>
  </div>
</section>`;
}

function generateRecursoSection() {
  return `
<section class="section" id="recurso">
  <h2 class="section-title fade-in">Recurso Digital</h2>
  <div class="glass-card fade-in">
    <p>El recurso digital permite consultar de manera organizada las <strong>14 sesiones</strong>, facilitando el acceso a los objetivos, materiales, ejercicios, actividades centrales, retos y recomendaciones de seguridad.</p>
    <p style="margin-top:0.8rem;">La página está diseñada para que las actividades puedan encontrarse de forma sencilla y seguir una secuencia progresiva, permitiendo visualizar el desarrollo de las habilidades desde las primeras sesiones hasta las actividades relacionadas con la iniciación al atletismo.</p>
  </div>
</section>`;
}

function generatePropositoSection() {
  return `
<section class="section" id="proposito">
  <h2 class="section-title fade-in">Propósito de ATLECORE</h2>
  <div class="glass-card accent-pink fade-in">
    <p>ATLECORE busca que el desarrollo de la coordinación se realice mediante actividades dinámicas y progresivas, permitiendo a los niños mejorar sus habilidades mientras se acercan de manera gradual al atletismo escolar.</p>
  </div>
</section>`;
}

function generateProgresionSection() {
  return `
<section class="section" id="progresion">
  <h2 class="section-title fade-in">Progresión</h2>
  <p class="section-subtitle fade-in">En ATLECORE, las actividades siguen un recorrido de aprendizaje en el que el nivel de dificultad aumenta de manera progresiva. Cada etapa prepara al niño para enfrentar nuevos desafíos de movimiento y coordinación.</p>
  <div class="progression-timeline">
    <div class="progression-step step-1 fade-in">
      <div class="step-number">1</div>
      <h3>EXPLORAR</h3>
      <span class="step-tag">Conocer el movimiento</span>
      <p>Los niños experimentan diferentes formas de desplazarse, saltar y controlar su cuerpo mediante actividades sencillas y dinámicas.</p>
      <div class="learns"><strong>El niño aprende a:</strong> Moverse, detenerse, mantener posiciones y reconocer su cuerpo dentro del espacio.</div>
    </div>
    <div class="progression-step step-2 fade-in">
      <div class="step-number">2</div>
      <h3>CONTROLAR</h3>
      <span class="step-tag">Responder al entorno</span>
      <p>Las actividades comienzan a incluir señales, cambios de dirección, diferentes velocidades y nuevas formas de desplazamiento.</p>
      <div class="learns"><strong>El niño aprende a:</strong> Escuchar, observar, reaccionar y adaptar sus movimientos según las indicaciones.</div>
    </div>
    <div class="progression-step step-3 fade-in">
      <div class="step-number">3</div>
      <h3>COMBINAR</h3>
      <span class="step-tag">Unir diferentes movimientos</span>
      <p>Se presentan actividades que requieren realizar varias acciones de manera consecutiva, aumentando el nivel de coordinación y control.</p>
      <div class="learns"><strong>El niño aprende a:</strong> Combinar desplazamientos, saltos, cambios de dirección y diferentes movimientos sin perder el control corporal.</div>
    </div>
    <div class="progression-step step-4 fade-in">
      <div class="step-number">4</div>
      <h3>APLICAR</h3>
      <span class="step-tag">Acercamiento al atletismo</span>
      <p>Las habilidades desarrolladas se utilizan en actividades relacionadas con movimientos propios de la iniciación al atletismo.</p>
      <div class="learns"><strong>El niño aprende a:</strong> Aplicar la coordinación en acciones como correr, realizar saltos horizontales y superar pequeños obstáculos.</div>
    </div>
  </div>
</section>`;
}

function generateSesionesSection() {
  return `
<section class="section" id="sesiones">
  <h2 class="section-title fade-in">Sesiones</h2>
  <p class="section-subtitle fade-in">ATLECORE – Plan progresivo de 14 sesiones · Edad: 6–7 años · Objetivo general: Fortalecer progresivamente la coordinación dinámica general como base para la iniciación al atletismo.</p>

  <div class="sessions-container" id="sessionsContainer">
    <!-- Las sesiones se cargarán dinámicamente desde sessions-data.js -->
  </div>
</section>`;
}

function generateTablasSection() {
  return `
<section class="section" id="tablas">
  <h2 class="section-title fade-in">Estructura y Referencias</h2>

  <!-- Tabla de tiempos -->
  <div class="glass-card accent-gold fade-in" style="margin-bottom:2rem;">
    <h3>Distribución del tiempo por sesión (42 min)</h3>
    <p style="margin-bottom:0.8rem; color:var(--text-muted); font-size:0.9rem;">La duración de 42 minutos se mantiene en todas las sesiones. Luego del calentamiento específico, se da un minuto para hidratar, igual que al finalizar la sesión.</p>
    <div class="time-table-wrapper">
      <table class="time-table">
        <thead>
          <tr><th>Parte</th><th>Tiempo</th></tr>
        </thead>
        <tbody>
          <tr><td>Movilidad articular</td><td>5 min</td></tr>
          <tr><td>Calentamiento general</td><td>5 min</td></tr>
          <tr><td>Calentamiento específico</td><td>5 min</td></tr>
          <tr><td>Actividad central</td><td>20 min</td></tr>
          <tr><td>Vuelta a la calma</td><td>5 min</td></tr>
          <tr class="total-row"><td>Total</td><td>42 min</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Tabla World Athletics -->
  <div class="glass-card accent-blue fade-in">
    <h3>Correspondencia con World Athletics Kids</h3>
    <p style="margin-bottom:0.8rem; color:var(--text-muted); font-size:0.9rem;">Para organizar las actividades de ATLECORE, se estableció una relación entre los nombres adaptados para el proyecto y las actividades de referencia de World Athletics Kids.</p>
    <div class="time-table-wrapper">
      <table class="wa-table">
        <thead>
          <tr><th>#</th><th>Título de ATLECORE</th><th>Nombre oficial de World Athletics Kids</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Los conductores del semáforo</td><td>Traffic Lights</td></tr>
          <tr><td>2</td><td>El estanque de nenúfares</td><td>Lily Pond</td></tr>
          <tr><td>3</td><td>Limpiemos el jardín</td><td>Clear the Yard</td></tr>
          <tr><td>4</td><td>Expedición Safari</td><td>On Safari</td></tr>
          <tr><td>5</td><td>La aventura coordinativa</td><td>Adaptación propia</td></tr>
          <tr><td>6</td><td>El tren de la aventura</td><td>Travel by Train</td></tr>
          <tr><td>7</td><td>Aventura en Nyanja</td><td>Nyanja</td></tr>
          <tr><td>8</td><td>Atrapa mi sombra</td><td>Shifting Shadow</td></tr>
          <tr><td>9</td><td>El circuito de los movimientos</td><td>Let's Explore</td></tr>
          <tr><td>10</td><td>Serpientes y escaleras</td><td>Snakes and Ladders</td></tr>
          <tr><td>11</td><td>A conquistar el tesoro</td><td>Tologa</td></tr>
          <tr><td>12</td><td>¡La carrera de los campeones!</td><td>Sprinting, Running, Relay</td></tr>
          <tr><td>13</td><td>¡Salto de superhéroes!</td><td>Horizontal Jump</td></tr>
          <tr><td>14</td><td>¡La gran misión final!</td><td>Running Over Obstacles</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`;
}

/* ─── Generate Sessions from Data ─── */
function generateSessions() {
  const container = document.getElementById('sessionsContainer');
  if (!container || !sessionsData) return;

  sessionsData.etapas.forEach(etapa => {
    // Etapa divider
    const divider = document.createElement('div');
    divider.className = `etapa-divider etapa-${etapa.id}-div fade-in`;
    divider.innerHTML = `<h3>${etapa.nombre}</h3>`;
    container.appendChild(divider);

    // Sessions
    etapa.sesiones.forEach(sesion => {
      const sessionItem = document.createElement('details');
      sessionItem.className = `session-item etapa-${etapa.id} fade-in`;
      sessionItem.id = `sesion-${sesion.id}`;

      const materialsHtml = sesion.materiales.map(m => `<span class="material-tag">${m}</span>`).join('');

      const calentamientoGeneralPasos = sesion.calentamientoGeneral.pasos
        ? sesion.calentamientoGeneral.pasos.map(p => `<li>${p}</li>`).join('')
        : '';

      const calentamientoEspecificoPasos = sesion.calentamientoEspecifico.pasos
        ? sesion.calentamientoEspecifico.pasos.map(p => `<li>${p}</li>`).join('')
        : '';

      const actividadCentralPasos = sesion.actividadCentral.pasos
        ? sesion.actividadCentral.pasos.map(p => `<li>${p}</li>`).join('')
        : '';

      sessionItem.innerHTML = `
        <summary class="session-header">
          <span class="session-number">${sesion.id}</span>
          <div class="session-info">
            <h3>${sesion.titulo}</h3>
            <span class="session-obj">${sesion.objetivo}</span>
          </div>
          <span class="session-chevron">▼</span>
        </summary>
        <div class="session-body">
          <div class="session-block">
            <div class="session-block-title"><span class="block-icon">🎒</span> Materiales</div>
            <div class="session-materials">
              ${materialsHtml}
            </div>
          </div>
          <div class="session-block">
            <div class="session-block-title"><span class="block-icon">🔄</span> Movilidad articular</div>
            <p>${sesion.movilidad}</p>
          </div>
          <div class="session-block">
            <div class="session-block-title"><span class="block-icon">🔥</span> Calentamiento general</div>
            ${sesion.calentamientoGeneral.descripcion ? `<p>${sesion.calentamientoGeneral.descripcion}</p>` : ''}
            ${calentamientoGeneralPasos ? `<ul>${calentamientoGeneralPasos}</ul>` : ''}
            ${sesion.calentamientoGeneral.nota ? `<p style="margin-top:0.6rem;">${sesion.calentamientoGeneral.nota}</p>` : ''}
          </div>
          <div class="session-block">
            <div class="session-block-title"><span class="block-icon">⚡</span> Calentamiento específico</div>
            ${sesion.calentamientoEspecifico.descripcion ? `<p>${sesion.calentamientoEspecifico.descripcion}</p>` : ''}
            ${calentamientoEspecificoPasos ? `<ul>${calentamientoEspecificoPasos}</ul>` : ''}
            ${sesion.calentamientoEspecifico.nota ? `<p style="margin-top:0.6rem;">${sesion.calentamientoEspecifico.nota}</p>` : ''}
          </div>
          <div class="session-block">
            <div class="session-block-title"><span class="block-icon">🎯</span> Actividad central – "${sesion.actividadCentral.titulo}"</div>
            <p>${sesion.actividadCentral.descripcion}</p>
            ${actividadCentralPasos ? `<ul>${actividadCentralPasos}</ul>` : ''}
            ${sesion.actividadCentral.nota ? `<p style="margin-top:0.6rem;">${sesion.actividadCentral.nota}</p>` : ''}
            <p><strong>Objetivo coordinativo:</strong> ${sesion.actividadCentral.objetivoCoordinativo}</p>
          </div>
          <div class="session-reto">
            <div class="reto-label">🏆 Reto</div>
            <p>${sesion.reto}</p>
          </div>
          <div class="session-block" style="margin-top:1rem;">
            <div class="session-block-title"><span class="block-icon">🧘</span> Vuelta a la calma</div>
            <p>${sesion.vueltaCalma}</p>
          </div>
        </div>
      `;

      container.appendChild(sessionItem);
    });
  });

  // Re-initialize fade-in observer for newly added elements
  const fadeEls = document.querySelectorAll('.fade-in:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  // Re-initialize session accordion
  const sessionItems = document.querySelectorAll('.session-item');
  sessionItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        sessionItems.forEach(other => {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
        setTimeout(() => {
          item.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  });
}
