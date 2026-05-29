// firebase-config.js
// Importa y configura Firebase (usando CDN en index.html, pero este archivo se carga aparte)

// Tu configuración de Firebase (obtenida de Firebase Console > Configuración del proyecto)
// IMPORTANTE: Reemplaza con tus propias credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDummyReplaceWithYourActualApiKey",
  authDomain: "ganttstream.firebaseapp.com",
  projectId: "ganttstream",
  storageBucket: "ganttstream.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// Inicializar Firebase (si no se ha inicializado antes)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Exportar servicios para usarlos en otros scripts (opcional)
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();