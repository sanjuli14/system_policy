# 👁️ PESADILLA PROCEDURAL

Un RPG de terror puro donde la IA crea una historia procedural única cada vez. Desarrollado con Angular 17 y el modelo `meta-llama/llama-3.3-70b-instruct:free` vía OpenRouter.

## 🎮 Características Principales

### 🦋 Efecto Mariposa
Cada decisión tiene consecuencias permanentes. Tus acciones del pasado vuelven... transformadas en horrores inesperados.

### 👁️ Narrador Consciente
La IA rompe la 4ta pared y habla **directamente a ti**, el streamer. Juzga tus decisiones, se burla de tu miedo, y te conoce por tu nombre.

### 🧠 Sistema de Cordura
- **Barra de cordura visual** con animaciones de pulso
- Decisiones erráticas o locas reducen la cordura
- Cuando la cordura es baja, la narración se vuelve distorsionada y fragmentada
- Estados: ESTABLE → INESTABLE → CRÍTICA

### 📖 Historias Únicas
Cada partida es completamente procedural. Nada está escrito de antemano.

### 💀 Memoria de Pecados
La IA recuerda tus "pecados":
- **Abandono** - No ayudar a alguien que necesitaba auxilio
- **Violencia** - Actos de agresión innecesaria
- **Cobardía** - Huir en lugar de enfrentar
- **Traición** - Mentir o engañar
- **Codicia** - Tomar lo que no es tuyo

Estos pecados **vuelven** más tarde en la historia como antagonistas o maldiciones.

### 🎭 Finales Múltiples
- **Heroico** - Redención mediante sacrificio
- **Trágico** - Consumido por la oscuridad
- **Atrapado** - Condensado a repetir el loop eternamente

---

## 🔧 Configuración de Variables de Entorno (.env)

### ⚠️ IMPORTANTE: Seguridad del API Key

El API key **NUNCA** debe estar en el código fuente. Se configura mediante variables de entorno.

### 1. Configurar Localmente (Desarrollo)

```bash
# Copia el archivo de ejemplo
cp .env.example .env

# Edita .env y añade tu API key
NG_APP_OPENROUTER_API_KEY=sk-or-v1-tu-api-key-aqui
```

### 2. Obtener API Key de OpenRouter

1. Ve a https://openrouter.ai/keys
2. Crea una cuenta gratuita (puedes usar GitHub)
3. Genera tu API key (comienza con `sk-or-v1-...`)
4. Pégala en tu archivo `.env`

### 3. Iniciar el Servidor de Desarrollo

```bash
npm install
npm start  # Esto ejecuta: set-env && ng serve
```

El script `set-env.js` leerá automáticamente tu `.env` y generará los archivos de entorno de Angular.

---

## 🚀 Despliegue a Producción

### Opción A: Netlify / Vercel / Similar

Configura la variable de entorno en el dashboard:
- **Nombre:** `NG_APP_OPENROUTER_API_KEY`
- **Valor:** `sk-or-v1-tu-api-key-aqui`

El build se ejecutará automáticamente con la variable de entorno.

### Opción B: Servidor Propio / VPS

```bash
# Exporta la variable antes de build
export NG_APP_OPENROUTER_API_KEY=sk-or-v1-tu-api-key-aqui

# Build para producción
npm run build:prod

# Los archivos estarán en dist/nightmare_ai/browser/
```

### Opción C: Docker

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NG_APP_OPENROUTER_API_KEY=sk-or-v1-tu-api-key-aqui
RUN npm run build:prod
EXPOSE 4000
CMD ["npm", "run", "serve:ssr:nightmare_ai"]
```

---

## 🎮 Cómo Juega el Streamer

1. **El streamer ingresa su nombre** (para la 4ta pared)
2. **Presiona "INICIAR PESADILLA"**
3. **Lee la narración** del escenario de terror
4. **Elige una opción:**
   - OPCIÓN A, B, o C (predefinidas)
   - **OPCIÓN LIBRE** - Escribe cualquier acción personalizada
5. **La IA responde** con consecuencias en tiempo real
6. **Repite** hasta llegar a un final...

---

## 🏗️ Arquitectura del Proyecto

```
src/app/
├── services/
│   ├── config.service.ts          # 🔐 Lee API key de environment
│   ├── openrouter.service.ts      # Comunicación con OpenRouter API
│   ├── game-state.service.ts      # Estado reactivo (cordura, decisiones, historial)
│   └── narrator.service.ts        # Lógica del narrador, 4ta pared, pecados
├── components/
│   └── game/
│       ├── game.component.ts      # Lógica principal
│       ├── game.component.html    # UI de terror
│       └── game.component.css     # Estilos temáticos
├── environments/                  # 🔐 Variables de entorno (auto-generados)
│   ├── environment.ts             # Default
│   ├── environment.development.ts # Desarrollo
│   └── environment.production.ts  # Producción
scripts/
└── set-env.js                     # Genera environments desde .env
```

---

## 🔐 Seguridad

- ✅ `.env` está en `.gitignore` - nunca se sube al repo
- ✅ `environment.*.ts` también está en `.gitignore` - se regeneran en build
- ✅ El API key solo existe en memoria durante el build
- ✅ En producción, el key se inyecta como variable de entorno

---

## 🎨 Tema Visual

- Paleta oscura con acentos rojos (#ff3333)
- Fuente monoespaciada (Courier) para estética de terminal/horror
- Animaciones de pulso para la cordura baja
- Efecto de "parpadeo" en el título
- Mensajes de 4ta pared con borde púrpura brillante

---

## 🛠️ Tecnologías

- **Angular 17** con Signals reactivos
- **TypeScript** 5.4
- **Modelo IA:** meta-llama/llama-3.3-70b-instruct:free (OpenRouter)
- **HTTP Client** para llamadas a API
- **CSS3** con animaciones y variables

---

## 📝 Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo (lee de .env)
npm start

# Build de desarrollo
npm run build

# Build de producción (con env vars)
npm run build:prod

# Tests
ng test

# Generar manualmente archivos de entorno
node scripts/set-env.js
```

---

## ⚠️ Requisitos

- Node.js 18+
- API key de OpenRouter (gratuita)
- Navegador moderno

---

## 🆘 Solución de Problemas

### "No se ha configurado la API key"

1. Verifica que existe el archivo `.env`
2. Verifica que contiene `NG_APP_OPENROUTER_API_KEY=sk-or-v1-...`
3. Ejecuta `node scripts/set-env.js` manualmente
4. Luego `npm start`

### Los archivos environment.ts no se generan

```bash
# Ejecuta manualmente el script
node scripts/set-env.js
```

### En producción no funciona

Asegúrate de configurar `NG_APP_OPENROUTER_API_KEY` en las variables de entorno de tu plataforma de hosting (Netlify, Vercel, etc.)

---

*"Las decisiones que tomas definen la pesadilla que te consume."*
