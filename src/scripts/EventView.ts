import PartyMember from "./PartyMember.js"
import Event from "./event.js";
const basicUrl = "http://127.0.0.1:5500/dist/templates/event.html?id=";
const id = location.href.slice(basicUrl.length);
const event : Event= JSON.parse(<string>localStorage.getItem(id));
const eventNameDiv = document.getElementById("eventName");
const name = event.name;
if(eventNameDiv !== null)
    eventNameDiv.innerHTML = name;