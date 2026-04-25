var $month = $("#js-month");
var $monthBg = $("#js-month-bg");
var $tbody = $("#js-calendar-body");

var $modal = $("#modal");
var $modalDate = $("#modal-date");
var $modalText = $("#modal-text");
var $close = $("#close");

let today = new Date();
let currentDate = new Date(today.getFullYear(), today.getMonth());

const minDate = new Date(2026, 0);
const maxDate = new Date(2027, 0);

if (currentDate < minDate) currentDate = minDate;
if (currentDate > maxDate) currentDate = maxDate;

const monthNames = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

const mensajes = {
  "2026-01-26":"La decisión que mi corazón ya había tomado ❤️",
"2026-01-27":"Nos reconocimos más allá de las palabras ✨",
"2026-01-28":"Despertar sabiendo que ahora éramos nosotros 🌅💞",
"2026-01-29":"Cuando tu fragilidad movió los cimientos de mi mundo 🥺💔",
"2026-01-30":"El privilegio de encender tu luz 🕯️❤️",
"2026-01-31":"El día en que nuestros nombres encontraron su dulzura 🍯💞",

"2026-02-01":"Cuando imaginamos el latido de lo que aún no nace 🤍👶",
"2026-02-02":"El lenguaje secreto de nuestros deseos 🔐❤️‍🔥",
"2026-02-03":"Cuando tu silencio estremeció mi cielo 🌌🥺",
"2026-02-04":"El secreto que cabía en la yema de tu dedo 🤏✨",
"2026-02-05":"Cuando el amor aprendió a ser más fuerte que el miedo ❤️🛡️",
"2026-02-06":"El día en que tus pasos se llevaron mi mundo 🚶‍♀️💔",
"2026-02-07":"El momento en que la espera se volvió alegría ⏳😊",
"2026-02-08":"El día en que cada detalle hablaba de ti 🌸💌",
"2026-02-09":"El instante donde el amor se volvió eterno ♾️❤️",
"2026-02-10":"El segundo encuentro donde el alma nos susurró su verdad 🤍✨",
"2026-02-11":"El día en que el mundo supo que eras mía 🌍💍",
"2026-02-12":"El día en que su aceptación me dio alas 🕊️✨",
"2026-02-13":"El día en que tejí nuestra historia en luz y suspiros ✨🧵❤️",
"2026-02-14":"El día en que la felicidad de tu ser se volvió mi orgullo 🌹❤️",
"2026-02-15":"El día en que su mensaje me despertó y el destino hizo una pregunta 📩✨",
"2026-02-16":"El día en que supe que tu luz era mi mayor verdad 🌟❤️",
"2026-02-17":"El día en que aprendí el sabor de tus sueños 🍃💭",
"2026-02-18":"We crossed the line ❤️‍🔥✨",
"2026-02-19":"El día en que quise contemplar las huellas de nuestras madrugadas 🌙👣",
"2026-02-20":"La noche en que el silencio pesó más que el miedo 🌑💔",
"2026-02-21":"La noche en que el silencio me sostuvo el alma 🌌🤍",
"2026-02-22":"El segundo día sin tu voz 🕯️😔",
"2026-02-23":"La diferencia entre existir y vivir 🌫️❤️",
"2026-02-24":"Cuando el milagro respondió en medio del llanto 🙏✨",
"2026-02-25":"Entre la despedida y la promesa 🥀🤍",
"2026-02-26":"El día que el “sí” cambió mi destino 💍✨",
"2026-02-27":"El cansancio no pesa cuando el amor sostiene 🤝❤️",
"2026-02-28":"Cuando mi sonrisa ya no pudo ocultarte 😊❤️",

"2026-03-01":"El mensaje que trajo alivio… y una sombra 📩🌤️",
"2026-03-02":"Cuando aprendí a cuidarte incluso de ti misma 🫂❤️",
"2026-03-03":"Entre risas, confesiones y miedos 😂🤍😌",
"2026-03-04":"Semillas de un mañana 🌱✨",
"2026-03-05":"Travesuras del destino y promesas en movimiento 🎭💫",
"2026-03-06":"Amaneceres, risas y silencios que se extrañan 🌅🥺",
"2026-03-07":"Cuando la ausencia también habla de amor 🌙💔",
"2026-03-08":"A la mujer que ilumina mi vida 👑❤️✨",
"2026-03-09":"Cuando el amor comienza a notarse 😊💞",
"2026-03-10":"Entre el susto y la esperanza 😰✨",
"2026-03-11":"Entre el reposo del cuerpo y la esperanza del corazón 💆‍♀️✨❤️",
"2026-03-12":"Cuando el amor reescribe los planes del destino ✍️❤️✨",
"2026-03-13":"Cuando el amor mira al miedo de frente y decide quedarse ❤️😰",
"2026-03-14":"El día en que el mundo recibió al amor de mi vida 🥳🎂",
"2026-03-15":"Cuando el amor tiembla… pero aún así decide creer ❤️‍🩹",
"2026-03-16":"Cuando el deseo se volvió lenguaje del alma ❤️‍🔥",
"2026-03-17":"Entre la distancia, los sueños y lo que ya somos 🤍✨",
"2026-03-18":"Entre raíces del pasado y la calma de tu voz 🎶🕊️",
"2026-03-19":"Cuando tu luz vuelve a encenderse ✨🔥",
"2026-03-20":"Cuando incluso la ausencia lleva tu forma de amar ✨💖",
"2026-03-21":"Cuando mi mundo se queda en pausa por ti 🌍❤️‍🩹",
"2026-03-22":"Cuando tu voz se vuelve mi refugio en la ausencia 🎧💖",
"2026-03-23":"Cuando incluso enfermo, mi refugio sigues siendo tú ❤️‍🩹",
"2026-03-24":"Cuando tu regreso trae calma y verdad a mi corazón 🕊️💖✨",
"2026-03-25":"Cuando quiero cuidarte… incluso más de lo que debería 💞🌙",
"2026-03-26":"Está bien doler un poco… cuando el amor es tan grande 🥺❤️‍🩹",
"2026-03-27":"Cuando la verdad trae calma al corazón 🕊️🤍",
"2026-03-28":"Cuando amar también es cuidar lo que no se ve ❤️‍🩹👀",
"2026-03-29":"Cuando el amor se esconde en las preguntas más simples 💖❓✨",
"2026-03-30":"Cuando el amor aprende a quedarse incluso en lo mínimo 💖✨",
"2026-03-31":"Cuando el amor se preocupa, sueña… y se vuelve hogar 💞🏡🤍",

"2026-04-01":"Cuando la ilusión se desvanece… y el amor aprende a esperar ⏳💔🤍",
"2026-04-02":"Cuando tu mundo comienza a convertirse en el mío 🌍💞✨",
"2026-04-03":"Cuando el tiempo se vuelve incierto… y el amor se vuelve más firme ⏳💞✨",
"2026-04-04":"Cuando amar también es elegir no apresurar el tiempo 🕰️💖🤍",
"2026-04-05":"Cuando el cansancio se transforma en sueños compartidos 😴💭💑",
"2026-04-06":"Cuando verte avanzar se vuelve parte de mis sueños 🚶‍♂️💭✨",
"2026-04-07":"Cuando protegerte también nace desde el amor que no se contiene 🛡️💖🔥",
"2026-04-08":"Cuando el amor busca claridad incluso en medio del silencio 🤫💞✨",
"2026-04-09":"Cuando el amor se inquieta… pero también se reafirma 💓🤍✨",
"2026-04-10":"Cuando el miedo se mezcla con el alivio 😰😮‍💨🤍",
"2026-04-11":"Cuando el cansancio no apaga el amor… y la ilusión se acerca más que nunca 😴💖✨",
"2026-04-12":"Cuando el amor también se abre paso hacia nuevos lazos 🤝💞✨",
"2026-04-13":"Cuando dos mundos se encuentran… y todo encaja 🌍💫🤍",
"2026-04-14":"Cuando el deseo también se convierte en lenguaje del amor 🔥💖",
"2026-04-15":"Cuando el esfuerzo vale cada segundo a tu lado ⏳💞✨",
"2026-04-16":"Cuando lo cotidiano se vuelve prueba… y el amor se queda 🏡💖✨",
"2026-04-17":"Cuando te veo sostenerlo todo… y aun así sigues sonriendo 💪😊🤍",
"2026-04-18":"Cuando imagino un hogar contigo… y todo cobra sentido 🏡💞✨",
"2026-04-19":"Cuando en ti veo el hogar que aún no existe 🏠💭🤍",
"2026-04-20":"Cuando lo nuestro deja huella… incluso en otros 💫💞✨",
"2026-04-21":"Cuando en lo cotidiano descubro el futuro que sueño contigo 🌅💭💖",
"2026-04-22":"Cuando en lo simple también encuentro felicidad contigo 🌼😊💞",
"2026-04-23":"Cuando imagino nuestro futuro… en lo que ya eres hoy 🔮💭💞",
"2026-04-24":"Cuando el silencio pesa… y el amor busca entender 🤫💔🤍"
};

const fechasEspeciales = [
  "2026-01-26",
  "2026-02-14",
  "2026-02-26",
  "2026-03-08",
  "2026-03-14",
  "2026-03-26",
  "2026-04-26",
  "2026-05-26",
  "2026-06-26",
  "2026-07-26",
  "2026-08-26",
  "2026-09-26",
  "2026-10-26",
  "2026-11-26",
  "2026-12-26",
  "2027-01-26"

];

// 🚫 evitar repetir canción
let lastSong = null;

$(window).on("load", renderCalendar);

$("#prev").click(function () {
  let newDate = new Date(currentDate.getFullYear(), currentDate.getMonth()-1);
  if (newDate >= minDate) {
    currentDate = newDate;
    renderCalendar();
  }
});

$("#next").click(function () {
  let newDate = new Date(currentDate.getFullYear(), currentDate.getMonth()+1);
  if (newDate <= maxDate) {
    currentDate = newDate;
    renderCalendar();
  }
});

function obtenerNombreImagen(year, month) {
  const nombres = [
    "enero","febrero","marzo","abril","mayo","junio",
    "julio","agosto","septiembre","octubre","noviembre","diciembre"
  ];

  return `img/${nombres[month]}_${year}.webp`;
}

function renderCalendar() {
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();

  $month.text(monthNames[month] + " " + year);
  $monthBg.text(month + 1);

  // 🔥 IMAGEN DINÁMICA
  const imageDiv = document.querySelector(".image");
  const nuevaImagen = obtenerNombreImagen(year, month);

  imageDiv.style.backgroundImage = `url('${nuevaImagen}')`;

  buildCalendar(year, month);
}

function buildCalendar(year, month) {
  let today = new Date();

  let start = new Date(year, month, 1);
  let end = new Date(year, month + 1, 0);

  let startDay = start.getDay();
  let endDay = end.getDate();

  let date = 1;
  let html = "";
  let skip = true;

  for (let i=0;i<6;i++){
    html += "<tr>";

    for (let j=0;j<7;j++){
      if (i===0 && j===startDay) skip=false;
      if (date > endDay) skip=true;

      let currentDay = date;
      let value = skip ? "" : date++;

      let monthNum = month + 1;
      let key = `${year}-${String(monthNum).padStart(2,'0')}-${String(currentDay).padStart(2,'0')}`;

      let isToday =
        today.getFullYear()===year &&
        today.getMonth()===month &&
        today.getDate()===currentDay;

      let isSpecial = fechasEspeciales.includes(key);

      let cls = "";
      if (isToday && !skip) cls += " is-today";
      if (isSpecial && !skip) cls += " special-day";

      html += `<td class="${cls}">${value}</td>`;
    }

    html += "</tr>";
  }

  $tbody.html(html);
}

$(document).on("click","td",function(){
  let day = $(this).text().trim();
  if(!day) return;

  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  let key = `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
  let fullDate = `${day} de ${monthNames[month-1]} del ${year}`;

  let mensaje = mensajes[key] || "Este día también pensé en ti";

  $modalDate.text(fullDate);
  $modalText.text(mensaje);

  // 🎵 música aleatoria SIN repetir
  let audio = document.getElementById("music");
  let random;

  do {
    random = Math.floor(Math.random() * 10) + 1;
  } while (random === lastSong);

  lastSong = random;

  audio.src = "music/" + random + ".mp3";
  audio.currentTime = 0;
  audio.play();

  $modal.css("display","flex");
});

$close.click(()=> $modal.hide());

$(window).click(function(e){
  if($(e.target).is("#modal")){
    $modal.hide();
  }
});

// ❤️ generar corazones dinámicos
function createHearts() {
  const container = document.querySelector(".hearts-container");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // posición horizontal aleatoria
    heart.style.left = Math.random() * 100 + "vw";

    // tamaño aleatorio
    const size = Math.random() * 20 + 10;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    // velocidad aleatoria
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";

    container.appendChild(heart);

    // eliminar después de animarse
    setTimeout(() => {
      heart.remove();
    }, 8000);

  }, 400);
}

// iniciar corazones
createHearts();

// ⏳ LOADER 5 segundos
window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";

    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.querySelector(".flex-contatiner").style.opacity = "1";
    }, 800);

  }, 5000);
});

