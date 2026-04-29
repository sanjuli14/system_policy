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
  },
  {
    id: '501',
    title: 'Caso 501: El Circo del Huesos',
    description: 'Acrobata del circo encontrado muerto en la jaula de los leones.',
    victim: 'Diego "El Volador" Santos, 28 años, estrella del circo.',
    location: 'Circo "Fantástico", carpa principal',
    date: '22 de Septiembre de 2025, 02:30',
    suspects: [
      { id: 's1', name: 'Marta La Fuerte', role: 'Acrobata pareja', alibi: 'Descansando en la roulotte.', secrets: ['Tenía una relación secreta', 'Diego le debía dinero'] },
      { id: 's2', name: 'Rufino El Brujo', role: 'Mago del circo', alibi: 'Preparando su acto.', secrets: ['Odiaba a Diego', 'Usabavenas reales en sus actos'] },
      { id: 's3', name: 'Pepe El Animalero', role: 'Cuidador de animales', alibi: 'En la cocina con los leones.', secrets: ['Tenía problemas con Diego', 'Tenía las llaves de la jaula'] }
    ],
    evidence: [
      { id: 'e1', name: 'Contrato de seguros', description: 'Póliza por 1 millón a nombre de Marta.', type: 'document', location: 'Oficina del manager', discovered: false },
      { id: 'e2', name: 'Barrote roto', description: 'Un barra de la jaula estava dañada.', type: 'physical', location: 'Jaula de leones', discovered: false },
      { id: 'e3', name: 'Mano peluda', description: 'Huella con pelaje de león.', type: 'physical', location: 'Cerca del cuerpo', discovered: false },
      { id: 'e4', name: 'Cartas de amenaza', description: 'Notas anónimas exigiendo dinero.', type: 'document', location: 'Casillero de Diego', discovered: false }
    ],
    truth: { killer: 'Marta La Fuerte', motive: 'Cobrar el seguro', method: 'Envenenar a los leones', keyEvidence: ['e1', 'e3'] }
  },
  {
    id: '303',
    title: 'Caso 303: El Tren de la Muerte',
    description: 'Pasajero encontrado muerto en un tren en movimiento. Puertas cerradas desde adentro.',
    victim: 'Ricardo Viera, 45 años, magnate hotelero.',
    location: 'Tren expreso "El Rápido", wagon restaurante',
    date: '5 de Octubre de 2025, 23:15',
    suspects: [
      { id: 's1', name: 'Celia Mendoza', role: 'Ex esposa', alibi: 'En su compartimiento.', secrets: ['Litigio por divorcio', 'Sin dinero'] },
      { id: 's2', name: 'Tomás Navarro', role: 'Socio bisnis', alibi: 'Jugando cartas.', secrets: ['Fraude financiero', 'Ricardo iba a denunciarlo'] },
      { id: 's3', name: 'Carlos guarda', role: 'Conductor del tren', alibi: 'Manejando la máquina.', secrets: ['Pagado por alguien', 'Tenía acceso a puertas'] }
    ],
    evidence: [
      { id: 'e1', name: 'Boleto sin retorno', description: 'Un solo boleto de ida.', type: 'document', location: 'Bolsa de Ricardo', discovered: false },
      { id: 'e2', name: 'Cuello de cristal', description: 'Pedaços de vidrio en la mesa.', type: 'physical', location: 'Mesa del wagon', discovered: false },
      { id: 'e3', name: 'Nota de transferencia', description: 'Transferencia masiva a cuenta offshore.', type: 'document', location: 'Bolsillo de Ricardo', discovered: false },
      { id: 'e4', name: 'Mancha de vino', description: 'Gran mancha en la alfombra.', type: 'physical', location: ' suelo del wagon', discovered: false }
    ],
    truth: { killer: 'Tomás Navarro', motive: 'Ocultar el fraude', method: 'Veneno en el vino', keyEvidence: ['e2', 'e3'] }
  },
  {
    id: '666',
    title: 'Caso 666: El Convento',
    description: 'Monja encontrada morte en la cripta. La única salida estaba cerrada por dentro.',
    victim: 'Hermana María, 67 años, abadesa del convento.',
    location: 'Convento "Santa Luz", cripta subterránea',
    date: '13 de Octubre de 2025, 04:00',
    suspects: [
      { id: 's1', name: 'Padre Antonio', role: 'Sacerdote visitador', alibi: 'En su habitación.', secrets: ['Relación secreta con María', 'Extorsionaba al convento'] },
      { id: 's2', name: 'Hermana Rosa', role: 'Monja joven', alibi: 'Orando en la capilla.', secrets: ['Qería huir del convento', 'María impedía su salida'] },
      { id: 's3', name: 'Hermana Clara', role: 'Monja elderly', alibi: 'Durmiendo.', secrets: ['Testamentpo de María', 'Última heredera'] }
    ],
    evidence: [
      { id: 'e1', name: 'Diario secre', description: 'Diario con secretos del convento.', type: 'document', location: 'Habitación de María', discovered: false },
      { id: 'e2', name: 'Cruz invertida', description: 'Símbolo satánico en la pared.', type: 'physical', location: 'pared de cripta', discovered: false },
      { id: 'e3', name: 'Carta de dimisión', description: 'Carta de renuncia forzada.', type: 'document', location: 'Escritorio de María', discovered: false },
      { id: 'e4', name: 'Sangre en el suelo', description: 'Huellas sangrientas hacia afuera.', type: 'physical', location: 'Entrada de cripta', discovered: false }
    ],
    truth: { killer: 'Hermana Rosa', motive: 'Libertad', method: 'Asesinatos ritualísticos', keyEvidence: ['e1', 'e2'] }
  },
  {
    id: '404',
    title: 'Caso 404: El Hospital Fantasma',
    description: 'Médico encontrado en sala de operaciones. Todos los equipos estaban encendidos.',
    victim: 'Dr. Fernando Cruz, 52 años, cirujano jefe.',
    location: 'Hospital "San José", quirófano #4',
    date: '28 de Octubre de 2025, 03:00',
    suspects: [
      { id: 's1', name: 'Enfermera Patricia', role: 'Jefa de enfermeras', alibi: 'En guardia.', secrets: ['Relación con el doctor', 'Era explotada'] },
      { id: 's2', name: 'Dr. Arturo Hines', role: 'Cirujano asistente', alibi: 'En su casa.', secrets: ['Cero competencias', 'El doctor lo humillaba'] },
      { id: 's3', name: 'Administrador Vega', role: 'Director del hospital', alibi: 'En su oficina.', secrets: ['Médico falsificó licencias', 'Sobornos'] }
    ],
    evidence: [
      { id: 'e1', name: 'Historial médico', description: 'Expediente con irregularidades.', type: 'document', location: 'Archivos del hospital', discovered: false },
      { id: 'e2', name: 'Bisturí manchado', description: 'Instrumento con residuos.', type: 'physical', location: 'Sobre la mesa', discovered: false },
      { id: 'e3', name: 'Cámara de seguridad', description: 'Cinta borrada parcialmente.', type: 'physical', location: 'Pasillo de Quirófanos', discovered: false },
      { id: 'e4', name: 'Teléfono del doctor', description: 'Mensajes amenazantes.', type: 'document', location: 'Bolsillo del doctor', discovered: false }
    ],
    truth: { killer: 'Enfermera Patricia', motive: 'Acabar con el abuso', method: 'Sobredosis de anestesia', keyEvidence: ['e1', 'e4'] }
  },
  {
    id: '777',
    title: 'Caso 777: El Barco Pirata',
    description: 'Capitán arrojado al mar desde el puente. Barco siguió funcionando sin conductor.',
    victim: 'Capitán Hernán Mar, 60 años, capitán del-yate "Victory".',
    location: 'Yate "Victory", aguas territoriales',
    date: '15 de Noviembre de 2025, 01:00',
    suspects: [
      { id: 's1', name: 'Lucía Marín', role: 'Hija del Capitán', alibi: 'En su camarote.', secrets: ['Herencia del barco', 'Sin salida del testamento'] },
      { id: 's2', name: 'José Torres', role: 'Ingeniero naval', alibi: 'En la máquina.', secrets: ['Deudas de juego', 'Casi es echado'] },
      { id: 's3', name: 'María Isla', role: 'Cocinera', alibi: 'En la cocina.', secrets: ['Testigo de algo', 'Tenía miedo'] }
    ],
    evidence: [
      { id: 'e1', name: 'Bitácora', description: 'Registro del viaje con notas extrañas.', type: 'document', location: 'Puente de mando', discovered: false },
      { id: 'e2', name: 'Cebo de pesca', description: 'Cebo nuevo, sin usar.', type: 'physical', location: 'Cubierta trasera', discovered: false },
      { id: 'e3', name: 'Brujula rota', description: 'Brujula apunta al sur.', type: 'physical', location: 'Suelo del puente', discovered: false },
      { id: 'e4', name: 'Botella vacía', description: 'Whisky casi lleno.', type: 'physical', location: 'Mesa del capitán', discovered: false }
    ],
    truth: { killer: 'José Torres', motive: 'Hundir la evidencia', method: 'Empujar por la borda', keyEvidence: ['e1', 'e3'] }
  },
  {
    id: '101',
    title: 'Caso 101: El Museo Maldito',
    description: 'Curador muerto frente a una momia. La momia desapareció.',
    victim: 'Dr. Alberto Mum, 58 años, curador del museo.',
    location: 'Museo "Historia Antara", sala de momias',
    date: '3 de Noviembre de 2025, 22:00',
    suspects: [
      { id: 's1', name: 'Dr. Elena Arque', role: 'Arqueóloga', alibi: 'Estudiando en el laboratorio.', secrets: ['Descubrió la maldición', 'Qería publicarlo'] },
      { id: 's2', name: 'Guarda Felipe', role: 'Seguridad', alibi: 'Vigilando la entrada.', secrets: ['Cero paycheck', 'Robaba artifacts'] },
      { id: 's3', name: 'Colector Rico', role: 'Coleccionista privado', alibi: 'En su mansión.', secrets: ['Qería la momia', 'Ofreció millones'] }
    ],
    evidence: [
      { id: 'e1', name: 'Manuscrito antiguo', description: 'Texto en lengua muwert.', type: 'document', location: 'Escritorio del curador', discovered: false },
      { id: 'e2', name: 'Huellas de vendas', description: 'Restos de vendas antiguas.', type: 'physical', location: 'Suelo cerca del cuerpo', discovered: false },
      { id: 'e3', name: 'Cámara vacía', description: 'El aplique estaba vacío.', type: 'physical', location: 'Vitriña central', discovered: false },
      { id: 'e4', name: 'Contrato de venta', description: 'Contrato por la momia.', type: 'document', location: 'Cajón del curador', discovered: false }
    ],
    truth: { killer: 'Colector Rico', motive: 'Robar la momia', method: 'Asfixia ritual', keyEvidence: ['e1', 'e4'] }
  },
  {
    id: '209',
    title: 'Caso 209: El Estudio de Grabación',
    description: 'Productor de música muerto en el estudio. La última canción estaba grabada.',
    victim: 'Mickee Storm, 48 años, productor legendario.',
    location: 'Estudio "Sound Max", sala de grabación',
    date: '18 de Octubre de 2025, 23:59',
    suspects: [
      { id: 's1', name: 'Shawn Cantante', role: 'Artista principal', alibi: 'En el estudio.', secrets: ['Contrato leonino', 'Sin royalties'] },
      { id: 's2', name: 'Loly Técnica', role: 'Ingeniera de sonido', alibi: 'Mezclando fuera.', secrets: ['Descubrió plagiarism', 'Extorsión'] },
      { id: 's3', name: 'Jimmy Manager', role: 'Manager del artista', alibi: 'En su oficina.', secrets: ['Dinero sucio', 'Lavado de activos'] }
    ],
    evidence: [
      { id: 'e1', name: 'Última canción', description: 'Audio con gritos.', type: 'document', location: 'Servidor del estudio', discovered: false },
      { id: 'e2', name: 'Contrato firm', description: 'Contrato con cláusulas ocultas.', type: 'document', location: 'Archivador', discovered: false },
      { id: 'e3', name: 'Cable cortado', description: 'Cable de micrófono dañado.', type: 'physical', location: 'Detrás del console', discovered: false },
      { id: 'e4', name: 'Pastillas', description: 'Pastillas para dormir.', type: 'physical', location: 'Mesita del productor', discovered: false }
    ],
    truth: { killer: 'Jimmy Manager', motive: 'Evitarescándalo', method: 'Sobredosis deliberada', keyEvidence: ['e2', 'e4'] }
  },
  {
    id: '888',
    title: 'Caso 888: La Clínica Secret',
    description: 'Paciente muerta en clínica clandestina. Los doctores desaparecieron.',
    victim: 'Silvia Fer, 34 años, modelo famosa.',
    location: 'Clínica "Sanación Total", sótano illegal',
    date: '25 de Octubre de 2025, 05:00',
    suspects: [
      { id: 's1', name: 'Dr. Máximo', role: 'Cirujano plástico', alibi: 'En Estados Unidos.', secrets: ['Médico falsificado', 'Operaciones ilegales'] },
      { id: 's2', name: 'Enfermera Doris', role: 'Asistente', alibi: 'Cero know.', secrets: ['Cero licencia', 'Testigo'] },
      { id: 's3', name: 'Juan/Receptor', role: 'Recepcionista', alibi: 'En la puerta.', secrets: ['Lavado de dinero', 'Pacientes famosos'] }
    ],
    evidence: [
      { id: 'e1', name: 'Expediente médico', description: 'Historial de operaciones.', type: 'document', location: 'Archivador secreto', discovered: false },
      { id: 'e2', name: 'Jeringas', description: 'Jeringas con líquido.', type: 'physical', location: 'Bote de basura', discovered: false },
      { id: 'e3', name: 'Bolsa de dinero', description: 'Dinero en efectivo.', type: 'physical', location: 'Cajón del recibo', discovered: false },
      { id: 'e4', name: 'Teléfono', description: 'Llamadas amenazantes.', type: 'document', location: 'Bolsillo de Silvia', discovered: false }
    ],
    truth: { killer: 'Dr. Máximo', motive: 'Ocultar mala praxis', method: 'Reacción alérgika', keyEvidence: ['e1', 'e2'] }
  },
  {
    id: '123',
    title: 'Caso 123: El Colegio Encantado',
    description: 'Profesor muerto en el laboratório. Estudiantes vieron todo.',
    victim: 'Profesor Mtro. López, 45 años, professor de química.',
    location: 'Colegio "Científicos", laboratório chemistry',
    date: '30 de Octubre de 2025, 14:30',
    suspects: [
      { id: 's1', name: 'Alumno Diego', role: 'Estudiante problematic', alibi: 'En clase.', secrets: ['Expulsado por el professor', 'Qería venganza'] },
      { id: 's2', name: 'Profesora María', role: 'Directora', alibi: 'En su oficina.', secrets: ['Asunto con el professor', 'Cero evidencia'] },
      { id: 's3', name: 'Conserje Pedro', role: 'Conserje', alibi: 'Limpiando.', secrets: ['Deudas de juego', 'Acceso a químicos'] }
    ],
    evidence: [
      { id: 'e1', name: 'Notas de exam', description: 'Examen manipulado.', type: 'document', location: 'Escritorio del professor', discovered: false },
      { id: 'e2', name: 'Ácido valorado', description: 'Frasco vacío.', type: 'physical', location: 'Estantería de químicos', discovered: false },
      { id: 'e3', name: 'Mensajes', description: 'Mensajes amenazantes.', type: 'document', location: 'Locker de Diego', discovered: false },
      { id: 'e4', name: 'Guantes', description: 'Guantes con agujeros.', type: 'physical', location: 'Bote de basura', discovered: false }
    ],
    truth: { killer: 'Alumno Diego', motive: 'Venganza por expulsión', method: 'Ácido corrosivo', keyEvidence: ['e2', 'e3'] }
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