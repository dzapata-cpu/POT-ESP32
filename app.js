import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
    getDatabase,
    ref,
    onValue
} from
    "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpnqDv1uDIYPmNg3ONA1e4gubCgJgwqF8",
  authDomain: "dht11esp32-33e39.firebaseapp.com",
  databaseURL: "https://dht11esp32-33e39-default-rtdb.firebaseio.com",
  projectId: "dht11esp32-33e39",
  storageBucket: "dht11esp32-33e39.firebasestorage.app",
  messagingSenderId: "997455660878",
  appId: "1:997455660878:web:65f95fc6d67d34a12c801f"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const potenciometroRef =
    ref(database, "potenciometro");
onValue(potenciometroRef, (snapshot) => {
    const datos = snapshot.val();
    if (datos) {
        const valor = datos.valor;
        const voltaje = datos.voltaje;
        document.getElementById("valor").textContent =
            valor;
        document.getElementById("voltaje").textContent =
            voltaje.toFixed(2) + " V";
        const porcentaje =
            (valor / 4095) * 100;
        document.getElementById("barra").style.width =
            porcentaje + "%";
        document.getElementById("estado").textContent =
            "● Firebase conectado";
    }
});