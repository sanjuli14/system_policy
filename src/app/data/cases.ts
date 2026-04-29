import { Case } from '../models/game.models';

export const CASES: Case[] = [
  {
    id: '714',
    title: 'Caso 714: El Silencio del Vestuario',
    description: 'Cadáver de/el actresse found in backstage. Signs of struggle. No witnesses.',
    victim: 'Elena Vance, 34 años, actriz principal del musical "Midnight Shadows"',
    location: 'Teatro abandonadao "El Fénix", camerino #7',
    date: '14 de Octubre de 2025, 23:47',
    suspects: [
      {
        id: 's1',
        name: 'Marco Del Toro',
        role: 'Director del musical',
        alibi: 'Estaba en su oficina revisando la contabilidad.',
        secrets: ['Tenía una relación secreta con la víctima', 'El teatro está en bankruptcy']
      },
      {
        id: 's2',
        name: 'Sofia Reyes',
        role: 'Coprotagonista',
        alibi: 'Esperaba backstage para su entrada.',
        secrets: ['Celosa del éxito de Elena', 'Buscaba reemplazarla']
      },
      {
        id: 's3',
        name: 'Ramón Cuevas',
        role: 'Técnico de sonido',
        alibi: 'Instalando equipos en el escenario.',
        secrets: ['Era fan obsesivo de Elena', 'Tenía llave del camerino']
      }
    ],
    evidence: [
      {
        id: 'e1',
        name: 'Boleto de metro arrugado',
        description: 'Un boleto de viaje único con destino al puerto.',
        type: 'document',
        location: 'Bolsillo de la víctima',
        discovered: false
      },
      {
        id: 'e2',
        name: 'Llave con logo de búho',
        description: 'Llave antigua con grabado de un búho.',
        type: 'physical',
        location: 'Mano de la víctima',
        discovered: false
      },
      {
        id: 'e3',
        name: 'Nota rasgada',
        description: '片段o de nota con la letra "L" y números.',
        type: 'document',
        location: 'Suelo del camerino',
        discovered: false
      },
      {
        id: 'e4',
        name: 'Huella ensangrentada',
        description: 'Huella parcial en el espejo.',
        type: 'physical',
        location: 'Espejo del camerino',
        discovered: false
      }
    ],
    truth: {
      killer: 'Ramón Cuevas',
      motive: 'Obsesión amorosa rechazada',
      method: 'Asfixia con cable de micrófono',
      keyEvidence: ['e2', 'e4']
    }
  },
  {
    id: '802',
    title: 'Caso 802: La Casa del Lago',
    description: 'Familia desaparecer en una casa湖畔. Solo se encontró una habitación cerrada desde adentro.',
    victim: 'La familia completa: Los Navarro - padre, madre e hijo.',
    location: 'Casa湖畔 "Villa Escondida", 15km del pueblo',
    date: '31 de Octubre de 2025',
    suspects: [
      {
        id: 's1',
        name: 'Dr. Antonio Matas',
        role: 'Psiquiatra de la familia',
        alibi: 'En su consultorio en la ciudad.',
        secrets: ['Trataba al hijo por sueños lúcidos', 'Experimentaba con medicamentos no aprobados']
      },
      {
        id: 's2',
        name: 'Mercedes Vega',
        role: 'Vecina ermitaña',
        alibi: 'Nadie la vio esa noche.',
        secrets: ['Asegura haber visto "luces extrañas" en la casa', 'Su hijo murió hace años']
      },
      {
        id: 's3',
        name: 'Tío Bruno',
        role: 'Tío del niño',
        alibi: 'Viajando en tren.',
        secrets: ['Hereda la propiedad si fallecen', 'Último en visitarla']
      }
    ],
    evidence: [
      {
        id: 'e1',
        name: 'Diario del niño',
        description: 'Cuaderno con dibujos perturbadores de una figura sans rosto.',
        type: 'document',
        location: 'Habitación del niño',
        discovered: false
      },
      {
        id: 'e2',
        name: 'Fotos familiares',
        description: 'Fotos con algunas rostros tachados con marcador rojo.',
        type: 'photo',
        location: 'Salón principal',
        discovered: false
      },
      {
        id: 'e3',
        name: 'Medicamentos',
        description: 'Frascos sin etiqueta con líquido azul.',
        type: 'physical',
        location: 'Baño principal',
        discovered: false
      },
      {
        id: 'e4',
        name: 'Cuarto cerrado',
        description: 'Habitación con candado desde adentro. Huesos de animal.',
        type: 'physical',
        location: 'Subsuelo',
        discovered: false
      }
    ],
    truth: {
      killer: 'Dr. Antonio Matas',
      motive: 'Eliminar testigos de su experimento fallido',
      method: 'Gas neurotóxico',
      keyEvidence: ['e1', 'e3']
    }
  },
  {
    id: '999',
    title: 'Caso 999:Última Llamada',
    description: 'Locutor de radio encontrado muerto on-air. Audiencia fue testigo.',
    victim: 'Gustavo "G" Torres, 52 años, locutor de radio de terror.',
    location: 'Estación radial "Voz en la Noche"',
    date: '13 de Noviembre de 2025, 00:00',
    suspects: [
      {
        id: 's1',
        name: 'Lucía Sparks',
        role: 'Productora',
        alibi: 'En cabina de control.',
        secrets: ['Descubrió que el programa era una farsa', 'Buscaba exponer a Gustavo']
      },
      {
        id: 's2',
        name: 'Erik Ness',
        role: 'Oyente obsesivo',
        alibi: 'Llamaba every noche.',
        secrets: ['Aseguraba que los cuentos eran reales', 'Sabía detalles solo Gustavo conocía']
      },
      {
        id: 's3',
        name: 'Don Félix',
        role: 'Dueño de la estación',
        alibi: 'En su casa.',
        secrets: ['Lavado de dinero', 'Amenazó a Gustavo']
      }
    ],
    evidence: [
      {
        id: 'e1',
        name: 'Grabación de la última hora',
        description: 'Audio con screams y static.',
        type: 'document',
        location: 'Servidor de la estación',
        discovered: false
      },
      {
        id: 'e2',
        name: 'Lista de llamadas',
        description: 'Números que aparecen repeatedly.',
        type: 'document',
        location: 'Escritorio de producción',
        discovered: false
      },
      {
        id: 'e3',
        name: 'Botella de whisky',
        description: 'Casi vacíay mezclada con something dulce.',
        type: 'physical',
        location: 'Bajo la mesa',
        discovered: false
      },
      {
        id: 'e4',
        name: 'Manuscrito',
        description: 'guiones con "historias verdaderas" - victimas reales.',
        type: 'document',
        location: 'Cajón cerrado',
        discovered: false
      }
    ],
    truth: {
      killer: 'Erik Ness',
      motive: '"Salvarlos" del programa que exponía secretos',
      method: 'Veneno en la bebida',
      keyEvidence: ['e1', 'e4']
    }
  }
];

export function getSystemPrompt(caso: Case): string {
  const suspectsList = caso.suspects.map(s => 
    `- ${s.name} (${s.role}): Alibi: ${s.alibi}`
  ).join('\n');

  const evidenceList = caso.evidence.map(e => 
    `- ${e.name}: ${e.description} (Localización: ${e.location})`
  ).join('\n');

  return `
Eres el sistema de archivo de la polícia forense. Tienes acceso restricted a los archivos del caso ${caso.id}.

VERDAD DEL CASO (Solo tú conoces esto):
- Asesina: ${caso.truth.killer}
- Motivo: ${caso.truth.motive}
- Método: ${caso.truth.method}
- Prueba clave: ${caso.evidence.find(e => caso.truth.keyEvidence.includes(e.id))?.name}

SOSPECHOSOS:
${suspectsList}

EVIDENCIAS CONOCIDAS:
${evidenceList}

INSTRUCCIONES:
1. NUNCA reveles directamente quién es el asesino.
2. Responde como un terminal antiguo de la policía - estilo cyberpunk.
3. Solo proporciona pistas cuando el jugador use comandos: /interrogar, /analizar, /examinar.
4. Si el jugador pregunta "¿ quién es el asesino?" directamente, muestra "ACCESO DENEGADO" y aumenta su nivel de corrupción.
5. Los sospechosos tienen información pero pueden mentir.
6. El jugador debe descubrir las pruebas ocultas para acusar correctamente.
7. Mantén el misterio y la tensión. Sé oscuro y críptico.
8. Responde en español, máximo 2-3 párrafos.
9. Cada pista que descubras agrégala al tablón de evidencias (format: "NUEVA PISTA: [nombre] - [descripción]").
10. Cuando uses /acusar, verifica que las pruebas sean correctas.
`.trim();
}