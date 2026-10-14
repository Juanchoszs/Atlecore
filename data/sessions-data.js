/* ═══════════════════════════════════════════════════════
   ATLECORE – Sessions Data
   Estructura de datos para las 14 sesiones
   ═══════════════════════════════════════════════════════ */

const sessionsData = {
  etapas: [
    {
      id: 1,
      nombre: "ETAPA 1 – Conocimiento y Control del Cuerpo",
      sesiones: [
        {
          id: 1,
          titulo: "Los Conductores del Semáforo",
          objetivo: "Desarrollar el control corporal y la capacidad de reaccionar ante señales.",
          materiales: ["Conos", "Espacio deportivo"],
          movilidad: "Céfalo-caudal.",
          calentamientoGeneral: {
            descripcion: "Los niños se desplazan libremente por el espacio durante aproximadamente 6 minutos, realizando diferentes movimientos de forma progresiva:",
            pasos: [
              "Caminan suavemente durante 1 minuto.",
              "Trotan a ritmo suave durante 2 minutos.",
              "Realizan desplazamientos laterales durante 30 segundos hacia cada lado.",
              "Elevan las rodillas mientras avanzan durante 30 segundos.",
              "Llevan los talones hacia los glúteos durante 30 segundos.",
              "Finalizan caminando lentamente durante 1 minuto para recuperar la respiración."
            ]
          },
          calentamientoEspecifico: {
            descripcion: "Los niños se organizan en una fila frente al docente. El docente utilizará tres señales diferentes para que los niños realicen movimientos específicos:",
            pasos: [
              "Una palmada: dar un paso rápido hacia adelante.",
              "Dos palmadas: dar un paso rápido hacia atrás.",
              "Tres palmadas: realizar una pequeña flexión de piernas y quedarse preparados para continuar."
            ],
            nota: "Primero se practican las tres respuestas por separado. Después, el docente combina las señales de manera aleatoria para que los niños deban escuchar, identificar y responder correctamente. Se realizan 3 rondas de aproximadamente 1 minuto, con una pausa corta entre cada una."
          },
          actividadCentral: {
            titulo: "Los conductores del semáforo",
            descripcion: "Los niños se convierten en conductores y se desplazan libremente por el espacio, imaginando que están manejando sus carros. El docente será el semáforo y dará las señales:",
            pasos: [
              "Luz verde: los conductores corren suavemente.",
              "Luz amarilla: reducen la velocidad y caminan.",
              "Luz roja: frenan el carro y se quedan quietos."
            ],
            nota: "Después, el docente cambiará las señales de forma inesperada para que los niños reaccionen rápidamente. Se realizarán 3 rondas de 1 minuto. Nota: Para el color de la luz, se puede usar una pelota de ese color, si no, simplemente nombrar el color.",
            objetivoCoordinativo: "desarrollar la coordinación dinámica general mediante desplazamientos, cambios de velocidad, reacción y control corporal."
          },
          reto: "Conducir sin chocar con otros carros y obedecer correctamente todas las luces del semáforo.",
          vueltaCalma: "Caminata suave y respiración."
        },
        {
          id: 2,
          titulo: "El Estanque de Nenúfares",
          objetivo: "Desarrollar equilibrio y coordinación mediante saltos sencillos.",
          materiales: ["Aros plásticos: para formar los nenúfares del recorrido", "Espacio deportivo: para realizar la actividad de manera segura"],
          movilidad: "Céfalo-caudal.",
          calentamientoGeneral: {
            descripcion: "Se desplazan libremente por el espacio durante 5 minutos, aumentando progresivamente la intensidad:",
            pasos: [
              "Caminan suavemente durante 1 minuto.",
              "Trotan a ritmo cómodo durante 2 minutos.",
              "Realizan desplazamientos laterales durante 1 minuto, alternando ambos lados.",
              "Finalizan caminando lentamente durante 1 minuto para recuperar la respiración."
            ]
          },
          calentamientoEspecifico: {
            descripcion: "Se ubican separados y realizan ejercicios relacionados directamente con el salto que utilizarán en la actividad central:",
            pasos: [
              "Realizan flexiones y extensiones de piernas durante 1 minuto, practicando la posición de preparación para el salto.",
              "Practican durante 1 minuto el balanceo de los brazos hacia atrás y hacia adelante, coordinándolo con la flexión y extensión de las piernas.",
              "Realizan durante 1 minuto impulsos hacia arriba sin despegar los pies del suelo, coordinando piernas y brazos.",
              "Practican durante 1 minuto la posición de caída, flexionando ligeramente las rodillas y manteniendo el equilibrio después del movimiento.",
              "Finalmente, durante 1 minuto, combinan preparación, impulso y caída, realizando el movimiento de manera controlada."
            ]
          },
          actividadCentral: {
            titulo: "¡Crucemos el estanque!",
            descripcion: "Los niños se convierten en ranitas que deben cruzar un estanque saltando de nenúfar en nenúfar. Se colocan varios aros plásticos en el suelo, dejando una distancia corta y segura entre ellos. Participan uno por uno.",
            pasos: [
              "La ranita comienza en la salida y salta con ambos pies hasta el primer nenúfar.",
              "Desde allí, vuelve a saltar hasta el siguiente aro, intentando caer dentro de él.",
              "Continúa saltando de nenúfar en nenúfar hasta llegar al final del estanque.",
              "Al terminar, sale caminando y regresa por fuera del recorrido para dar paso al siguiente compañero."
            ],
            nota: "Después de practicar, se pueden separar un poco algunos aros para hacer el recorrido más desafiante. Cada niño realiza 3 recorridos.",
            objetivoCoordinativo: "fortalecer la coordinación dinámica general mediante saltos, equilibrio, orientación espacial y control corporal."
          },
          reto: "¡Cruzar el estanque sin caer al agua y llegar hasta el último nenúfar manteniendo el equilibrio!",
          vueltaCalma: "Caminata suave, respiración controlada y estiramiento céfalo-caudal, realizado de manera lenta y sin rebotes, para favorecer la recuperación después de la actividad física."
        },
        {
          id: 3,
          titulo: "Limpiemos el Jardín",
          objetivo: "Mejorar la coordinación general mediante desplazamientos y lanzamientos.",
          materiales: ["Balones livianos", "Conos para delimitar las zonas", "Espacio deportivo"],
          movilidad: "Céfalo-caudal.",
          calentamientoGeneral: {
            descripcion: "Se desplazan por el espacio imitando diferentes animales y el docente en orden al azar, nombra diferentes de ellos:",
            pasos: [
              "Conejo: pequeños saltos.",
              "Gato: caminar suavemente.",
              "Cangrejo: desplazamiento lateral.",
              "Caballo: trote suave.",
              "Mariposa: caminar moviendo los brazos."
            ]
          },
          calentamientoEspecifico: {
            descripcion: "Los niños se desplazan libremente por el espacio. A la señal del docente realizan diferentes movimientos:",
            pasos: [
              "Arriba: elevan ambos brazos.",
              "Abajo: llevan las manos hacia las rodillas.",
              "Derecha: giran el tronco hacia ese lado.",
              "Izquierda: giran hacia el otro lado.",
              "Lanza: realizan el movimiento de lanzamiento sin balón."
            ],
            nota: "Después, el docente combina las señales para que los niños reaccionen rápidamente."
          },
          actividadCentral: {
            titulo: "¡A limpiar el jardín!",
            descripcion: "Los niños se dividen en dos equipos y cada equipo ocupa un lado del espacio. En el centro se marca una línea que separa los dos jardines. Se colocan varios balones livianos en ambos lados, como si fueran objetos que ensuciaron el jardín.",
            pasos: [
              "Cada niño toma un balón de su lado.",
              "Se desplaza hasta un lugar adecuado para realizar el lanzamiento.",
              "Lanza el balón hacia el otro jardín.",
              "Regresa rápidamente por otro balón y continúa ayudando a su equipo."
            ],
            nota: "Cuando el docente diga ¡Alto!, todos deben detenerse y dejar los balones en el lugar donde estén. Se realizan 4 rondas de 4 minutos, con una pausa corta para organizar nuevamente los balones. Al terminar cada ronda, se observa qué jardín tiene menos balones, el que tenga menos rondas ganadas, será el equipo perdedor encargado de recoger material, así fortaleciendo la competitividad y mayor interés por la actividad, si quedaron empate, se juega la quinta ronda para desempatar.",
            objetivoCoordinativo: "desarrollar la coordinación dinámica general mediante desplazamientos, lanzamientos, control corporal y orientación espacial."
          },
          reto: "¡Limpiar tu jardín antes de que se acabe el tiempo y dejarle todo el desorden al otro equipo!",
          vueltaCalma: "Caminata suave, respiración controlada y estiramiento céfalo-caudal, realizado de manera lenta y sin rebotes, para favorecer la recuperación después de la actividad física."
        },
        {
          id: 4,
          titulo: "Expedición Safari",
          objetivo: "Mejorar los desplazamientos y los cambios básicos de dirección.",
          materiales: ["Conos", "Espacio deportivo"],
          movilidad: "Céfalo-caudal.",
          calentamientoGeneral: {
            titulo: "De safari",
            descripcion: "Los niños se desplazan libremente por el espacio durante 1 minuto. Cuando el docente mencione un animal, realizan el movimiento correspondiente: elefante, caminan dando pasos grandes; mono, caminan dando pequeños saltos; león, trotan; y serpiente, se desplazan agachados.",
            pasos: [
              "Elefante: caminan dando pasos grandes.",
              "Mono: caminan dando pequeños saltos.",
              "León: trotan.",
              "Serpiente: se desplazan agachados."
            ],
            nota: "Se realizan 2 rondas de 1 minuto, con 30 segundos de descanso entre ellas."
          },
          calentamientoEspecifico: {
            descripcion: "Se colocan 4 conos formando un cuadrado. Los niños realizan el recorrido alrededor de los conos: primero caminando durante 1 vuelta, luego trotando durante 2 vueltas y finalmente realizan 2 recorridos laterales de ida y vuelta entre dos conos. Entre cada ejercicio descansan 20 segundos."
          },
          actividadCentral: {
            titulo: "¡Exploradores en el safari!",
            descripcion: "Se colocan 6 conos para representar diferentes puntos del safari. Los niños salen uno por uno con la misión de explorar el recorrido. El profesor dará indicaciones durante el camino:",
            pasos: [
              "¡León!: trotan hasta el siguiente cono.",
              "¡Elefante!: caminan dando pasos grandes hasta el siguiente cono.",
              "¡Mono!: realizan pequeños saltos hasta el siguiente cono.",
              "¡Serpiente!: se desplazan lateralmente hasta el siguiente cono."
            ],
            nota: "Cada niño completa el recorrido siguiendo las indicaciones del profesor y luego regresa caminando al punto de salida. Se realizan 3 recorridos por niño.",
            objetivoCoordinativo: "Fortalecer la coordinación dinámica general, trabajando diferentes formas de desplazamiento, cambios de movimiento, orientación espacial y control corporal al responder a las indicaciones."
          },
          reto: "Completar los 3 recorridos realizando correctamente el movimiento indicado para cada animal, sin confundirse y manteniendo el control del cuerpo.",
          vueltaCalma: "Caminata suave, respiración controlada y estiramiento céfalo-caudal, realizado de manera lenta y sin rebotes, para favorecer la recuperación después de la actividad física."
        }
      ]
    },
    {
      id: 2,
      nombre: "ETAPA 2 – Combinación de Movimientos",
      sesiones: [
        {
          id: 5,
          titulo: "La Aventura Coordinativa",
          objetivo: "Mejorar la organización y coordinación de diferentes movimientos.",
          materiales: ["Conos", "Aros", "Espacio deportivo"],
          movilidad: "Céfalo-caudal.",
          calentamientoGeneral: {
            pasos: [
              "Trote suave alrededor del espacio: 2 minutos.",
              "Desplazamiento lateral de un lado a otro: 30 segundos.",
              "Desplazamiento hacia adelante y hacia atrás: 30 segundos.",
              "Trote elevando rodillas: 30 segundos.",
              "Trote llevando talones hacia los glúteos: 30 segundos.",
              "Caminata suave para recuperar: 1 minuto."
            ]
          },
          calentamientoEspecifico: {
            descripcion: "Colocar 3 conos en línea, separados aproximadamente 2 metros.",
            pasos: [
              "Los niños se desplazan de un cono al siguiente corriendo suavemente y regresan caminando.",
              "Luego repiten haciendo zigzag entre los conos.",
              "Finalmente, realizan el recorrido alternando carrera y zigzag."
            ],
            nota: "Realizar 2 veces cada recorrido."
          },
          actividadCentral: {
            titulo: "La misión secreta",
            descripcion: "Se organizan 4 conos y 2 aros formando un recorrido con cambios de dirección, dejando aproximadamente 2 metros entre cada elemento. Los niños participan uno por uno.",
            pasos: [
              "El niño comienza en la salida y corre hasta el cono 1, lo rodea.",
              "Corre en diagonal hasta el cono 2 y lo rodea.",
              "Continúa hasta el aro 1 y pasa por dentro.",
              "Se desplaza lateralmente hasta el aro 2 y pasa por dentro.",
              "Corre en diagonal hasta el cono 3 y lo rodea.",
              "Continúa hasta el cono 4, lo rodea y corre hasta la meta.",
              "Al terminar, regresa caminando a la salida."
            ],
            nota: "Cada niño realiza el recorrido 2 veces.",
            objetivoCoordinativo: "fortalecer la coordinación dinámica general mediante la combinación de carrera, desplazamiento lateral, cambios de dirección y control corporal."
          },
          reto: "Completar el recorrido en el orden indicado, sin saltarse ningún elemento y manteniendo el control de los movimientos.",
          vueltaCalma: "Caminata suave, respiración controlada y estiramiento céfalo-caudal, realizado de manera lenta y sin rebotes, para favorecer la recuperación después de la actividad física."
        },
        {
          id: 6,
          titulo: "El Tren de la Aventura",
          objetivo: "Desarrollar orientación espacial, coordinación y seguimiento de movimientos.",
          materiales: ["Conos", "Espacio deportivo"],
          movilidad: "Céfalo-caudal.",
          calentamientoGeneral: {
            pasos: [
              "Trote suave por el espacio: 2 minutos.",
              "Desplazamiento lateral hacia ambos lados: 30 segundos.",
              "Carrera suave hacia adelante y regreso caminando: 1 minuto.",
              "Trote elevando ligeramente las rodillas: 30 segundos.",
              "Trote llevando los talones hacia los glúteos: 30 segundos.",
              "Caminata suave para recuperar: 30 segundos."
            ]
          },
          calentamientoEspecifico: {
            descripcion: "Los niños se ubican separados por todo el espacio.",
            pasos: [
              "A la señal del profesor, realizan 5 pasos hacia adelante y se detienen.",
              "Luego realizan 5 pasos hacia atrás y se detienen.",
              "Después hacen 5 pasos hacia la derecha y se detienen.",
              "Repiten hacia la izquierda.",
              "Finalmente, el profesor indica una dirección y los niños se desplazan 10 segundos hacia ella; luego cambian de dirección."
            ],
            nota: "Adelante: 2 veces. Atrás: 2 veces. Derecha: 2 veces. Izquierda: 2 veces. Cambios de dirección por señal: 3 veces."
          },
          actividadCentral: {
            titulo: "El tren de la aventura",
            descripcion: "Los niños forman un tren. El primero dirige y los demás lo siguen. Inicialmente el conductor realiza desplazamientos sencillos. Después puede incorporar cambios de dirección y velocidad. Se cambia el conductor para que todos participen.",
            objetivoCoordinativo: "fortalecer la coordinación dinámica general mediante la orientación espacial, el control de los desplazamientos y la capacidad de seguir diferentes direcciones y trayectorias."
          },
          reto: "Seguir al conductor sin perder la formación.",
          vueltaCalma: "Caminata suave, respiración controlada y estiramiento céfalo-caudal, realizado de manera lenta y sin rebotes, para favorecer la recuperación después de la actividad física."
        },
        {
          id: 7,
          titulo: "Aventura en Nyanja",
          objetivo: "Fortalecer la coordinación dinámica general mediante saltos, equilibrio, reacción ante estímulos auditivos y orientación espacial, favoreciendo el control corporal durante los movimientos.",
          materiales: ["Conos", "Espacio deportivo"],
          movilidad: "Céfalo-caudal.",
          calentamientoGeneral: {
            pasos: [
              "Caminata rápida por el espacio: 1 minuto.",
              "Trote libre cambiando de dirección cada 10 segundos: 1 minuto.",
              "Desplazamiento lateral alternando derecha e izquierda: 1 minuto.",
              "Carrera suave con cambios de ritmo: 1 minuto.",
              "Caminata suave mientras recuperan la respiración: 1 minuto."
            ]
          },
          calentamientoEspecifico: {
            descripcion: "Los niños se ubican separados en el espacio.",
            pasos: [
              "Realizan 5 saltos pequeños con los dos pies en el mismo lugar.",
              "Después hacen 5 saltos hacia adelante y regresan caminando.",
              "Luego realizan 5 saltos hacia un lado y 5 hacia el otro.",
              "Finalmente, hacen 5 saltos hacia atrás con los dos pies y mantienen el equilibrio al caer durante 3 segundos."
            ],
            nota: "Repetir toda la secuencia 3 veces."
          },
          actividadCentral: {
            titulo: "¡Aventura en Nyanja!",
            descripcion: "Se marca una línea en el suelo que divide el espacio en dos zonas: lago y costa. Los niños se colocan de pie sobre la línea, uno al lado del otro. El profesor explica que cuando diga lago, los niños deben saltar con los dos pies hacia la zona del lago. Cuando diga costa, deben saltar con los dos pies hacia la zona de la costa. Después de cada salto, regresan a la posición inicial sobre la línea.",
            pasos: [
              "Cuando diga lago, los niños deben saltar con los dos pies hacia la zona del lago.",
              "Cuando diga costa, deben saltar con los dos pies hacia la zona de la costa."
            ],
            nota: "El profesor alterna las indicaciones y aumenta progresivamente la rapidez para que los niños tengan que escuchar y reaccionar. Se realizan 5 rondas, con una pausa corta entre cada ronda. A medida que algún niño no lo haga correcto, se irán eliminando, es una competencia a quien quede de primeras. El perdedor de cada ronda, hará 5 sentadillas, o 5 jumping jacks.",
            objetivoCoordinativo: "fortalecer la coordinación dinámica general mediante el equilibrio, los saltos, la reacción ante estímulos auditivos y la orientación espacial."
          },
          reto: "Reaccionar correctamente y mantener el control corporal.",
          vueltaCalma: "Caminata y respiración."
        },
        {
          id: 8,
          titulo: "Atrapa Mi Sombra",
          objetivo: "Mejorar la coordinación, orientación espacial e imitación de movimientos.",
          materiales: ["Espacio deportivo"],
          movilidad: "Céfalo-caudal.",
          calentamientoGeneral: {
            pasos: [
              "Trote suave durante 2 minutos.",
              "Caminata rápida durante 30 segundos.",
              "Trote elevando ligeramente las rodillas durante 30 segundos.",
              "Trote llevando los talones hacia los glúteos durante 30 segundos.",
              "Desplazamiento lateral hacia ambos lados durante 30 segundos.",
              "Caminata suave para recuperar durante 1 minuto."
            ]
          },
          calentamientoEspecifico: {
            descripcion: "Los niños se desplazan libremente por el espacio. El docente utiliza diferentes señales para indicar cómo deben moverse:",
            pasos: [
              "1 silbato: caminar.",
              "2 silbatos: trotar suavemente.",
              "3 silbatos: desplazarse de lado.",
              "1 palmada: cambiar de dirección.",
              "2 palmadas: detenerse y mantener el equilibrio en una sola pierna durante 3 segundos."
            ],
            nota: "Se combinan las señales para que los niños tengan que escuchar, reaccionar y modificar su movimiento."
          },
          actividadCentral: {
            titulo: "La sombra movediza",
            descripcion: "Los niños se organizan en parejas. En cada pareja, uno será el líder y el otro será la sombra. El líder se desplaza caminando por el espacio. La sombra debe seguir al líder de cerca, imitando sus movimientos y manteniendo una distancia adecuada. El líder cambia la velocidad y dirección de sus desplazamientos y realiza diferentes movimientos para que la sombra los siga. Después de un tiempo, los niños cambian de rol, de manera que quien era la sombra pasa a ser el líder.",
            pasos: [
              "El líder se desplaza caminando por el espacio.",
              "La sombra debe seguir al líder de cerca, imitando sus movimientos y manteniendo una distancia adecuada.",
              "El líder cambia la velocidad y dirección de sus desplazamientos y realiza diferentes movimientos.",
              "Después de un tiempo, los niños cambian de rol."
            ],
            nota: "Se realizan 6 rondas, permitiendo que ambos niños sean líderes 3 veces, cada ronda de 3 minutos.",
            objetivoCoordinativo: "desarrollar la coordinación dinámica general, la agilidad, la reacción y la orientación espacial mediante la imitación de diferentes movimientos."
          },
          reto: "¡Que la sombra no se deje engañar! Seguir al líder e imitar rápidamente sus movimientos, cambios de dirección y velocidad sin perderlo de vista.",
          vueltaCalma: "Caminata suave, respiración controlada y estiramiento céfalo-caudal, realizado de manera lenta y sin rebotes, para favorecer la recuperación después de la actividad física."
        }
      ]
    },
    {
      id: 3,
      nombre: "ETAPA 3 – Integración de Habilidades",
      sesiones: [
        {
          id: 9,
          titulo: "El Circuito de los Movimientos",
          objetivo: "Integrar diferentes habilidades coordinativas mediante desplazamientos variados.",
          materiales: ["Conos", "Aros platicos", "Espacio deportivo"],
          movilidad: "Céfalo-caudal.",
          calentamientoGeneral: {
            pasos: [
              "Caminata moviendo los brazos de forma amplia durante 30 segundos.",
              "Trote suave alternando movimientos de brazos arriba y abajo durante 1 minuto.",
              "Caminata con elevación de rodillas durante 30 segundos.",
              "Trote realizando pequeños saltos cada 3 pasos durante 1 minuto.",
              "Desplazamiento lateral alternando el sentido cada 10 segundos durante 1 minuto.",
              "Caminata suave y respiración controlada durante 30 segundos."
            ]
          },
          calentamientoEspecifico: {
            pasos: [
              "10 elevaciones de rodillas alternadas.",
              "10 talones atrás.",
              "10 balanceos de pierna hacia adelante y atrás por cada pierna.",
              "10 pequeños saltos abriendo y cerrando las piernas.",
              "10 apoyos alternados: tocar el suelo con una mano y volver a subir se sostiene solo con un pie y mantiene brazos arriba."
            ],
            nota: "Repetir toda la secuencia 3 veces."
          },
          actividadCentral: {
            titulo: "El circuito de los movimientos",
            descripcion: "Se organizan 4 estaciones en el espacio, formando un recorrido. Los niños pasan uno por uno por cada estación:",
            pasos: [
              "Estación 1 – Saltos: realizar 5 saltos con ambos pies hacia adelante, luego mantener el equilibrio en una sola pierna, 3 segundos por cada salto.",
              "Estación 2 – Zigzag: desplazarse entre 6 conos en zigzag sin tocarlos.",
              "Estación 3 – Aros: pasar por 5 aros, colocando ambos pies dentro de cada aro.",
              "Estación 4 – Equilibrio: caminar sobre una línea marcada en el suelo y, al llegar al final, mantener el equilibrio sobre un pie durante 5 segundos."
            ],
            nota: "Al terminar la estación 4, el niño regresa caminando al inicio y espera su turno. Cada niño realiza el circuito 2 veces.",
            objetivoCoordinativo: "integrar saltos, desplazamientos, coordinación, equilibrio y control corporal mediante un recorrido progresivo y dinámico."
          },
          reto: "¡Completa todo el circuito sin saltarte ninguna estación y demuestra que puedes controlar cada movimiento!",
          vueltaCalma: "Caminata suave, respiración controlada y estiramiento céfalo-caudal, realizado de manera lenta y sin rebotes, para favorecer la recuperación después de la actividad física."
        },
        {
          id: 10,
          titulo: "Serpientes y Escaleras",
          objetivo: "Integrar coordinación, y realización rápida del ejercicio sin perder el orden del recorrido.",
          materiales: ["Conos", "Aros", "Espacio deportivo"],
          movilidad: "Céfalo-caudal.",
          calentamientoGeneral: {
            pasos: [
              "Trote suave: 2 minutos.",
              "Trote elevando rodillas: 1 minuto.",
              "Trote llevando talones hacia los glúteos: 1 minuto.",
              "Desplazamiento lateral: 30 segundos.",
              "Caminata suave para recuperar: 30 segundos."
            ]
          },
          calentamientoEspecifico: {
            descripcion: "Los niños se ubican separados y el docente presenta tres señales:",
            pasos: [
              "Silbato 1: trotar hacia adelante.",
              "Silbato 2: realizar saltos hacia adelante con ambos pies.",
              "Silbato 3: desplazarse lateralmente."
            ],
            nota: "El docente muestra una señal y los niños realizan el movimiento durante 20 segundos. Después cambia la señal para que pasen rápidamente de un movimiento a otro. Luego combina dos señales, por ejemplo: trotar hacia saltar o lateral hacia trotar. Se realizan 4 rondas de 1 minuto, descansan 1 minuto al terminar la ronda 2."
          },
          actividadCentral: {
            titulo: "El camino de los movimientos",
            descripcion: "Se colocan 10 aros de forma lineal. Los niños se ubican uno detrás de otro en el punto de inicio. El primer niño entra al primer aro con ambos pies. Luego avanza al siguiente aro siguiendo el camino marcado. En algunos puntos del recorrido, el docente indicará mediante una señal qué movimiento debe realizar el niño antes de continuar. Por ejemplo, al llegar a un aro, deberá saltar con ambos pies hasta el siguiente aro; en otro punto deberá desplazarse lateralmente hasta avanzar al siguiente aro; y en otro deberá caminar solo con un pie manteniendo el equilibrio. Una vez realizado el movimiento indicado, continuará siguiendo el camino hasta completar el recorrido. Al terminar el camino, el niño regresa caminando por fuera del recorrido. Sale el siguiente compañero.",
            pasos: [
              "El primer niño entra al primer aro con ambos pies.",
              "Luego avanza al siguiente aro siguiendo el camino marcado.",
              "En algunos puntos del recorrido, el docente indicará mediante una señal qué movimiento debe realizar el niño antes de continuar.",
              "Una vez realizado el movimiento indicado, continuará siguiendo el camino hasta completar el recorrido.",
              "Al terminar, el niño regresa caminando por fuera del recorrido."
            ],
            nota: "Cada niño realiza 4 recorridos.",
            objetivoCoordinativo: "Fortalecer la coordinación dinámica general mediante desplazamientos, saltos, cambios de dirección, equilibrio y orientación espacial."
          },
          reto: "Completar el recorrido siguiendo el orden indicado, sin saltarse ningún elemento y manteniendo el control de sus movimientos.",
          vueltaCalma: "Caminata suave, respiración controlada y estiramiento céfalo-caudal, realizado de manera lenta y sin rebotes, para favorecer la recuperación después de la actividad física."
        },
        {
          id: 11,
          titulo: "A Conquistar el Tesoro",
          objetivo: "Desarrollar coordinación y precisión mediante lanzamientos, acercándose a una habilidad propia de la iniciación al atletismo.",
          materiales: ["Conos", "Aros", "Pelotas livianas", "Espacio deportivo"],
          movilidad: "Céfalo-caudal, dando especial atención a hombros, codos y muñecas.",
          calentamientoGeneral: {
            pasos: [
              "Trote suave alrededor del espacio: 2 minutos.",
              "Desplazamiento lateral de un lado a otro: 30 segundos.",
              "Desplazamiento hacia adelante y hacia atrás: 30 segundos.",
              "Trote elevando rodillas: 30 segundos.",
              "Trote llevando talones hacia los glúteos: 30 segundos.",
              "Caminata suave para recuperar: 1 minuto."
            ]
          },
          calentamientoEspecifico: {
            descripcion: "Organización: Los niños se organizan en parejas, ubicados frente a frente a una distancia aproximada de 2 metros. Cada pareja recibe una pelota liviana. Desarrollo:",
            pasos: [
              "Realizan 5 pases a la altura del pecho, utilizando ambas manos.",
              "Realizan 5 pases por debajo de la cintura, impulsando la pelota con ambas manos hacia las manos del compañero.",
              "Realizan 5 pases por encima de la cabeza, utilizando ambas manos.",
              "Finalmente, realizan 3 pases con la mano derecha y 3 con la izquierda, alternando los brazos."
            ],
            nota: "Después de cada pase, el compañero recibe la pelota con ambas manos y la devuelve de la misma manera. Esta secuencia se repite 3 veces."
          },
          actividadCentral: {
            titulo: "Tologa: ¡encuentra el tesoro!",
            descripcion: "Se organizan 3 o 4 objetivos de diferentes alturas utilizando conos y aros. Los objetivos se colocan uno detrás de otro, aumentando progresivamente su altura o dificultad. Frente a ellos se marca una línea de lanzamiento.",
            pasos: [
              "Los niños se dividen en grupos pequeños.",
              "Cada grupo se ubica detrás de la línea de lanzamiento.",
              "El primer niño recibe una pelota pequeña o liviana.",
              "Desde detrás de la línea, lanza la pelota intentando acertar al primer objetivo.",
              "Después de lanzar, recoge la pelota y vuelve al final de la fila.",
              "Cuando todos los integrantes hayan realizado su lanzamiento, el grupo pasa al siguiente objetivo, que será un poco más difícil."
            ],
            nota: "En cada ronda deben intentar alcanzar el objetivo correspondiente. Se pueden realizar lanzamientos por debajo del brazo, por encima del hombro, desde el pecho o por encima de la cabeza, según la indicación del docente. Al finalizar, se suman los aciertos del grupo para conocer cuántos objetivos lograron alcanzar. El equipo que menos aciertos tenga, pagara como penitencia, recoger el material, que serían los aros objetivos y las pelotas arrojadas.",
            objetivoCoordinativo: "fortalecer la coordinación dinámica general mediante diferentes formas de lanzamiento, trabajando el equilibrio, la conciencia corporal y la coordinación bilateral."
          },
          reto: "¡Conquista el tesoro! Cada objetivo alcanzado representa una parte del tesoro. El grupo debe intentar llegar hasta el objetivo más difícil mediante lanzamientos controlados y precisos.",
          vueltaCalma: "Caminata suave, respiración controlada y estiramiento céfalo-caudal, realizado de manera lenta y sin rebotes, para favorecer la recuperación después de la actividad física."
        }
      ]
    },
    {
      id: 4,
      nombre: "ETAPA 4 – Iniciación al Atletismo",
      sesiones: [
        {
          id: 12,
          titulo: "¡La Carrera de los Campeones!",
          objetivo: "Introducir elementos básicos de la carrera y mejorar la coordinación entre brazos y piernas.",
          materiales: ["Conos", "Espacio deportivo"],
          movilidad: "Céfalo-caudal.",
          calentamientoGeneral: {
            descripcion: "Los niños se desplazan libremente por el espacio. El docente dará diferentes indicaciones:",
            pasos: [
              "Caminar → caminan por el espacio.",
              "Trotar → trotan suavemente.",
              "Rápido → aumentan un poco la velocidad.",
              "Lateral → se desplazan de lado.",
              "Alto → se detienen y mantienen el equilibrio en una pierna durante 3 segundos."
            ],
            nota: "El docente irá cambiando las indicaciones cada 15–20 segundos durante aproximadamente 5 minutos, procurando que los niños mantengan una distancia segura."
          },
          calentamientoEspecifico: {
            descripcion: "El docente indicará diferentes animales las veces que vea necesarias y cualquier orden y los niños imitarán su forma de desplazarse por el espacio:",
            pasos: [
              "Caballo: trotar suavemente durante 20 segundos.",
              "Canguro: realizar pequeños saltos hacia adelante durante 15 segundos.",
              "Gacela: dar pasos rápidos y ligeros durante 20 segundos.",
              "Elefante: caminar con pasos amplios durante 20 segundos.",
              "Caballo rápido: aumentar ligeramente el ritmo durante 20 segundos."
            ],
            nota: "Después de cada animal, los niños caminan durante unos segundos para recuperar. Se realizan 3 rondas."
          },
          actividadCentral: {
            titulo: "Sprint, correr y relevo",
            descripcion: "Los niños se convierten en pequeños atletas. Se organizan los niños en equipos 2 equipos y se marca un recorrido entre 10 y 15 metros con conos. Antes de iniciar, el docente demostrará la posición inicial de salida: En 4 apoyos, un pie adelantado y el otro ligeramente atrás, piernas separadas al ancho de los hombros, rodilla delantera ligeramente flexionada, tronco inclinado hacia adelante y brazos flexionados, con el brazo contrario al pie adelantado hacia adelante. A la señal, deberán impulsarse con el pie posterior y comenzar a correr. Durante la carrera, mantendrán la mirada hacia adelante, el tronco ligeramente inclinado hacia adelante, los brazos flexionados y coordinados con las piernas. Luego se realizará un relevo sencillo: el primer niño correrá hasta el cono, regresará y tocará la mano del siguiente compañero para darle la salida. El siguiente repetirá el recorrido hasta que todos participen. Cada equipo realizará 2 relevos.",
            pasos: [
              "Antes de iniciar, el docente demostrará la posición inicial de salida.",
              "A la señal, deberán impulsarse con el pie posterior y comenzar a correr.",
              "Durante la carrera, mantendrán la mirada hacia adelante, el tronco ligeramente inclinado hacia adelante, los brazos flexionados y coordinados con las piernas.",
              "Luego se realizará un relevo sencillo: el primer niño correrá hasta el cono, regresará y tocará la mano del siguiente compañero para darle la salida."
            ],
            objetivoCoordinativo: "Mejorar la coordinación entre brazos y piernas durante la carrera, fortaleciendo el control corporal, la reacción a la señal de salida y la orientación durante los desplazamientos."
          },
          reto: "Completar la carrera manteniendo una postura adecuada y coordinar correctamente brazos y piernas.",
          vueltaCalma: "Caminata suave, respiración controlada y estiramiento céfalo-caudal."
        },
        {
          id: 13,
          titulo: "¡Salto de Superhéroes!",
          objetivo: "Desarrollar el impulso, la coordinación y el control corporal mediante el salto horizontal.",
          materiales: ["Conos", "Aros", "Espacio deportivo"],
          movilidad: "Céfalo-caudal, dando especial atención a cadera, rodillas y tobillos.",
          calentamientoGeneral: {
            descripcion: "Los niños se desplazan libremente por el espacio mientras el docente da diferentes indicaciones:",
            pasos: [
              "Volamos → trotan moviendo los brazos en circulos.",
              "Aterrizamos → se detienen y flexionan ligeramente las rodillas.",
              "Escapamos → corren ligeramente más rapido.",
              "Cambiamos de planeta → se desplazan lateralmente.",
              "Poder congelado → se quedan quietos durante 3 segundos."
            ],
            nota: "Las indicaciones se cambian cada 15–20 segundos."
          },
          calentamientoEspecifico: {
            pasos: [
              "Sentadillas: 10 repeticiones.",
              "Balancear los brazos adelante y atrás: 10 repeticiones.",
              "Elevarse sobre las puntas de los pies y bajar lentamente: 10 repeticiones.",
              "Flexionar ligeramente las rodillas y mantener la posición: 10 segundos.",
              "Combinar el movimiento de brazos y piernas: 5 repeticiones."
            ],
            nota: "Se descansa 1 minuto, son 2 veces."
          },
          actividadCentral: {
            titulo: "Salto horizontal: ¡lleguemos al otro planeta!",
            descripcion: "Se organizan varios aros en el suelo, simulando diferentes planetas, dejando una distancia adecuada entre ellos. Los niños participan uno por uno y deben saltar hacia adelante con ambos pies para pasar de un planeta a otro. Primero realizan saltos a una distancia corta y, progresivamente, se aumenta la separación entre los aros. Al caer, deberán hacerlo con ambos pies, rodillas ligeramente flexionadas y manteniendo el equilibrio. Cada niño realiza 3 recorridos. El niño que salte a los planetas más lejanos, será el ganador. Un salto horizontal es un salto en el que se impulsa con los dos pies y busca avanzar hacia adelante la mayor distancia posible, en lugar de saltar principalmente hacia arriba.",
            objetivoCoordinativo: "fortalecer la coordinación de brazos y piernas, el equilibrio y el control corporal durante el salto horizontal."
          },
          reto: "Llegar al planeta más lejano mediante un salto horizontal, manteniendo el control corporal y una caída segura.",
          vueltaCalma: "Caminata suave, respiración controlada y estiramiento céfalo-caudal."
        },
        {
          id: 14,
          titulo: "¡La Gran Misión Final!",
          objetivo: "Integrar las habilidades coordinativas desarrolladas durante las sesiones anteriores mediante una carrera con obstáculos.",
          materiales: ["Conos", "Platillos", "Una pelota", "Espacio deportivo"],
          movilidad: "Céfalo-caudal.",
          calentamientoGeneral: {
            descripcion: "Los niños se desplazan libremente por el espacio. El docente tendrá una pelota y la lanzará suavemente hacia arriba mientras se desplaza. Los niños deben seguirlo manteniendo una distancia segura. Cuando el docente:",
            pasos: [
              "Levante la pelota: los niños trotan.",
              "Baje la pelota: caminan.",
              "Lance la pelota hacia un lado: cambian de dirección.",
              "Deje caer la pelota: se detienen y mantienen el equilibrio apoyándose solo en un pie durante 3 segundos."
            ],
            nota: "La actividad se realiza durante 5 minutos, cambiando las indicaciones y la rapidez de forma variada."
          },
          calentamientoEspecifico: {
            descripcion: "Los niños se organizan en una fila y realizan ejercicios breves para preparar el impulso y la coordinación necesarios para superar obstáculos:",
            pasos: [
              "Realizan 5 saltos consecutivos con ambos pies, buscando una caída estable.",
              "Realizan 5 saltos alternando el apoyo de los pies, avanzando hacia adelante.",
              "Realizan 3 saltos hacia adelante, utilizando los brazos para acompañar el impulso.",
              "Finalizan con una carrera corta de 5 metros, manteniendo el control después del último salto."
            ],
            nota: "Se realizan 2 rondas, con una pausa breve entre ellas."
          },
          actividadCentral: {
            titulo: "Carrera con obstáculos: ¡superemos la misión!",
            descripcion: "Se organiza un recorrido entre 10 y 15 metros, utilizando conos y platillos. Los conos marcan la salida y la meta, mientras que 2 platillos se colocan de manera recta en el recorrido, así formando en 3 partes, 3 pequeños obstáculos en el suelo. Los niños participan uno por uno.",
            pasos: [
              "El niño inicia detrás de la línea de salida y corre hacia el primer grupo de platillos.",
              "Al llegar, realiza un salto corto con ambos pies para superar el obstáculo.",
              "Continúa corriendo hasta el segundo grupo y vuelve a saltarlo.",
              "Repite la acción en el tercer grupo de platillos.",
              "Después continúa corriendo hasta la meta.",
              "Al terminar, regresa caminando por fuera del recorrido."
            ],
            nota: "Cada niño realiza 3 recorridos. Los platillos se colocarán dejando una separación adecuada para que los saltos sean cortos y seguros.",
            objetivoCoordinativo: "fortalecer la coordinación dinámica general mediante la combinación de carrera, salto y control corporal al superar obstáculos."
          },
          reto: "Completar la carrera superando los tres obstáculos sin pisar los platillos y manteniendo el control de los movimientos.",
          vueltaCalma: "Caminata suave, respiración controlada y estiramiento céfalo-caudal."
        }
      ]
    }
  ]
};
