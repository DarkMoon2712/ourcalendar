const start = new Date("2026-01-26")
const maxEnd = new Date("2027-01-26")
const today = new Date()

const end = today < maxEnd ? today : maxEnd

let currentDate = null

const notes = {

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
"2026-04-05":"Cuando el cansancio se transforma en sueños compartidos 😴💭💑"
  
}

const specialDates = [
"2026-01-26",
"2026-02-14",
"2026-02-26",
"2026-03-08",
"2026-03-14",
"2026-03-26"
]

const calendar = document.getElementById("calendar")

function formatDate(d){
let day = String(d.getDate()).padStart(2,"0")
let month = String(d.getMonth()+1).padStart(2,"0")
let year = d.getFullYear()
return `${day}/${month}/${year}`
}

document.querySelector(".subtitle").innerText =
`26/01/2026 — ${formatDate(end)}`

function generateMonths(){

let months=[]
let current=new Date(start)
current.setDate(1)

while(current<=maxEnd){

let monthName=current.toLocaleString("es",{month:"long"})
monthName=monthName.charAt(0).toUpperCase()+monthName.slice(1)

months.push({
m:current.getMonth(),
y:current.getFullYear(),
name:`${monthName} ${current.getFullYear()}`
})

current.setMonth(current.getMonth()+1)

}

return months

}

const months=generateMonths()

function buildCalendar(){

months.forEach(mon=>{

let firstDay=new Date(mon.y,mon.m,1).getDay()
let daysInMonth=new Date(mon.y,mon.m+1,0).getDate()

let monthDiv=document.createElement("div")
monthDiv.className="month"

let title=document.createElement("div")
title.className="month-title"
title.innerText=mon.name

let weekdays=document.createElement("div")
weekdays.className="weekdays"

let names=["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"]

names.forEach(n=>{
let d=document.createElement("div")
d.innerText=n
weekdays.appendChild(d)
})

let days=document.createElement("div")
days.className="days"

for(let i=0;i<firstDay;i++){
let empty=document.createElement("div")
empty.className="day disabled"
days.appendChild(empty)
}

for(let d=1;d<=daysInMonth;d++){

let date=`${mon.y}-${String(mon.m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`
let current=new Date(date)

let day=document.createElement("div")
day.className="day"

let num=document.createElement("div")
num.className="day-number"
num.innerText=d

day.appendChild(num)

if(current<start || current>end){

day.classList.add("disabled")

}else{

if(specialDates.includes(date)){
day.classList.add("special")
}

day.onclick=()=>openNote(date)

}

days.appendChild(day)

}

monthDiv.appendChild(title)
monthDiv.appendChild(weekdays)
monthDiv.appendChild(days)

calendar.appendChild(monthDiv)

})

}

function explodeHearts(){

for(let i=0;i<25;i++){

let heart=document.createElement("div")
heart.className="heart"
heart.innerText="✮⋆˙"

let x=(Math.random()*300-150)+"px"
let y=(Math.random()*300-150)+"px"

heart.style.left=(window.innerWidth/2)+"px"
heart.style.top=(window.innerHeight/2)+"px"

heart.style.setProperty("--x",x)
heart.style.setProperty("--y",y)

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},1200)

}

}

function openNote(date){

currentDate = date

document.getElementById("modal").style.display="flex"
document.getElementById("modalDate").innerText=date

if(notes[date]){
document.getElementById("modalText").innerHTML=`<em>"${notes[date]}"</em>`
}else{
document.getElementById("modalText").innerHTML=`<em>"Hoy también pensé en ti ❤️"</em>`
}

document.getElementById("loveSound").play()
explodeHearts()

}

function nextNote(){

let next=new Date(currentDate)
next.setDate(next.getDate()+1)

let nextStr=next.toISOString().split("T")[0]

if(next<=end){
openNote(nextStr)
}

}

function prevNote(){

let prev=new Date(currentDate)
prev.setDate(prev.getDate()-1)

let prevStr=prev.toISOString().split("T")[0]

if(prev>=start){
openNote(prevStr)
}

}

function closeModal(){
document.getElementById("modal").style.display="none"
}

buildCalendar()

/* CORAZONES FLOTANTES */

const heartContainer = document.createElement("div")
heartContainer.className = "floating-hearts"
document.body.appendChild(heartContainer)

function createFloatingHeart(){

const heart = document.createElement("div")
heart.className = "floating-heart"
heart.innerText = "❤︎"

heart.style.left = Math.random()*100 + "vw"
heart.style.fontSize = (Math.random()*18+12) + "px"

const duration = Math.random()*6 + 6
heart.style.animationDuration = duration + "s"

heartContainer.appendChild(heart)

setTimeout(()=>{
heart.remove()
}, duration*1000)

}

setInterval(createFloatingHeart, 500)
