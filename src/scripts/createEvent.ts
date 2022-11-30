import PartyMember from "./PartyMember.js"
import Event from "./event.js";
const form = <HTMLFormElement>document.querySelector(".createEvent__form");
const eventName = <HTMLInputElement>document.getElementById("eventName");
const eventMaxPrice = <HTMLInputElement>document.getElementById("maxPrice");
const eventPassword = <HTMLInputElement>document.getElementById("eventPassword");
const eventPasswordRepeat = <HTMLInputElement>document.getElementById("eventPasswordRepeat");
const eventDate = <HTMLInputElement>document.getElementById("eventDate");
const membersList = document.querySelector(".membersList");
const addMoreBtn = document.getElementById("addMoreBtn");
const createEventBtn = document.getElementById("createEventBtn");
const memberInput = () => `<li class="members__item">
    <input type="text" class="memberName" placeholder="Imię uczestnika...">
</li>`; 
form?.addEventListener("submit",(f)=>{
    f.preventDefault();
})
addMoreBtn?.addEventListener('click', () =>{
    if(membersList !=null)
        membersList.innerHTML += memberInput();
});
const createMembersArray = () =>{
    const memberNames = document.getElementsByClassName("memberName");
    const members : Array<PartyMember> = [];
    let i=0;
    for(i=0; i<memberNames.length; i++){
        const member = <HTMLInputElement>memberNames[i];
        if(member.value.length > 0)
            members.push(new PartyMember(member.value));
    }
    return members;
}
const createEvent = () =>{
    const name = eventName.value;
    const date = new Date(eventDate.value);
    const maxPrice : number = Number(eventMaxPrice.value);
    const password = eventPassword.value;
    return new Event(name, date, maxPrice, password, createMembersArray())

}

createEventBtn?.addEventListener('click', () =>{
    const event = createEvent();
    let events_local = localStorage.getItem("events");
    if(events_local === null)
        events_local = "[]";
    const events: Array<Event> = JSON.parse(events_local);
    events.push(event);
    const events_json = JSON.stringify(events);
    localStorage.setItem("events", events_json);
    location.href = `http://127.0.0.1:5500/dist/templates/login.html`;
})
