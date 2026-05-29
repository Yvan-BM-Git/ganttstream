# GanttStream – Tablero Colaborativo para Equipos de Investigación

**GanttStream** es una aplicación web tipo Trello diseñada específicamente para **equipos de investigación** que gestionan proyectos Fondecyt, papers, hipótesis, objetivos generales y específicos. Combina la estructura del **diagrama de Gantt** con la fluidez de un **tablero Kanban**, permitiendo planificar hitos y ejecutar tareas diarias en un mismo entorno colaborativo.

> 🔗 **Acceso en vivo**: [demo.ganttstream.app](https://demo.ganttstream.app) *(si está desplegado)*  
> 📄 **Repositorio**: [github.com/tu-usuario/ganttstream](https://github.com/tu-usuario/ganttstream)

---

## 📌 Tabla de contenidos

- [Características principales](#-características-principales)
- [Fases de desarrollo](#-fases-de-desarrollo)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Configuración y despliegue](#-configuración-y-despliegue)
  - [Prerrequisitos](#prerrequisitos)
  - [Instalación local](#instalación-local)
  - [Despliegue en Firebase Hosting](#despliegue-en-firebase-hosting)
- [Uso del equipo de investigación](#-uso-del-equipo-de-investigación)
- [Hoja de ruta](#-hoja-de-ruta)
- [Licencia](#-licencia)

---

## 🚀 Características principales

### ✅ Fase 1 – Base colaborativa (implementada)

| Funcionalidad | Descripción | Esfuerzo | Impacto |
|---------------|-------------|----------|---------|
| **Múltiples tableros por proyecto** | Cada investigación (Fondecyt, paper, colaboración) tiene su propio tablero. Menú lateral para navegar. | Medio | Crítico |
| **Autenticación con Firebase Auth** | Login con Google. Cada usuario ve solo los tableros donde fue invitado. | Medio | Crítico |
| **Cronómetro por tarjeta** | Iniciar/pausar/detener desde la tarjeta. Registro acumulado de horas por tarea y proyecto. | Bajo | Crítico |
| **Adjuntar archivos PDF** | Hasta 20 MB por archivo vía Firebase Storage. Vista previa del nombre y peso. Descarga directa. | Medio | Crítico |
| **Notificaciones en app + email** | Alertas al asignarte una tarea, al comentar en tu tarjeta, y 24h antes del vencimiento. | Medio | Crítico |

### 🗂️ Fase 2 – Vistas y análisis (planificada)

- Vista calendario de todas las tarjetas con fecha.
- Dashboard de estadísticas (tarjetas por miembro, horas registradas, tasa de completado).
- Vista Gantt / línea de tiempo con fechas de inicio y fin.
- Vista lista ordenable (tabla editable).
- Historial de cambios (log de auditoría).

### 🔬 Fase 3 – Diferenciadores académicos (planificada)

- Exportar a PDF / Excel (informes de avance para Fondecyt).
- Niveles de prioridad (Alta/Media/Baja).
- Dependencias entre tarjetas (bloqueo visual).
- Tareas recurrentes (reuniones semanales, revisiones mensuales).

---

## 🛠️ Tecnologías utilizadas

| Área | Tecnología |
|------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Backend como servicio** | Firebase (Auth, Firestore, Storage, Hosting) |
| **Autenticación** | Google Sign-In (Firebase Auth) |
| **Base de datos en tiempo real** | Cloud Firestore |
| **Almacenamiento de archivos** | Firebase Storage |
| **Estilos** | CSS Grid, Flexbox, diseño responsive |
| **Iconos** | Tabler Icons |
| **Despliegue** | Firebase Hosting |

---

## 📁 Estructura del proyecto
