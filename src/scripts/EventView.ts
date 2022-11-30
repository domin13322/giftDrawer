import PartyMember from "./PartyMember.js"
import Event from "./event.js";
const basicUrl = "http://127.0.0.1:5500/dist/templates/event.html?id=";
const wishlistUrl = "http://127.0.0.1:5500/dist/templates/wishlist.html?id=";
const id = location.href.slice(basicUrl.length,basicUrl.length + 13);
console.log(id);
const memberName = location.href.slice(basicUrl.length +14);
const allEvents: Array<Event> = JSON.parse(<string>localStorage.getItem("events"));
const drawBtn = document.getElementById("drawBtn");
let currentUser : PartyMember = new PartyMember("");

let event : Event;
allEvents.forEach(event2 => {
    if (event2._id === Number(id)){
        event = event2;
    }
})

const eventNameDiv = document.getElementById("eventTitle");
const priceDiv = document.getElementById("maxPrice");
const membersDiv = document.getElementById("event__members");
const memberNameDiv = document.getElementById("greetUser");

const setCurrentUser = () =>{
    const user = event._members.find(member => member._name === memberName);
    if(user !== undefined)
        currentUser = user;
}
const membersSection = (member : PartyMember) =>`<div class="member">
<strong class="item--left">${member._name}</strong> <a href="${wishlistUrl +member._name+"_"+event.id}">
    Zobacz listę
</a>
<button type="button" class="btn--edit item--right">Edytuj</button>
</div>
`;

const fillMembersDiv = () =>{
    event._members.forEach((member) => {
        if(membersDiv !== null)
            membersDiv.innerHTML += membersSection(member);
    })
}
const fillMemberToGive = () =>{
    if(currentUser.drawnMemberName.length < 1)
        return;
    const memberToGive = document.getElementById("memberToGive");
    if(memberToGive !== null)
        memberToGive.innerHTML += currentUser.drawnMemberName;
}
const fillAll = () =>{
    if(memberNameDiv !== null)
        memberNameDiv.innerHTML += memberName;
    if(eventNameDiv !== null)
        eventNameDiv.innerHTML += event._name;
    if(priceDiv !== null)
        priceDiv.innerHTML += event._maxPrice;
    fillMembersDiv();
    fillMemberToGive();
}
const saveResults = () =>{
    allEvents.forEach(event2 => {
        if(event2._name === event._name)
            event2 =event;
    })
    localStorage.setItem("events", JSON.stringify(allEvents));
}
const draw = () =>{
    let randomMember : PartyMember;
    do {
        randomMember = event.membersToDraw[Math.floor(Math.random()*event.membersToDraw.length)];
    }while(randomMember._name === currentUser._name);

    let i =0;
    for(let member of event.membersToDraw){
        if(member === randomMember){
            event.membersToDraw = event.membersToDraw.slice(0,i)
                .concat(event.membersToDraw.slice(i+1, event.membersToDraw.length));
            break
        }
        i++;
    }
    currentUser.drawnMemberName = randomMember._name;
    event._members.forEach((member) =>{
        if(member._name === currentUser._name)
            member = currentUser;
    })
    saveResults();
    return randomMember;
} 
const displayLoadingWindow = () =>{
    const loadingWindow = document.getElementById("loadingWindow");
    if(loadingWindow !== null)
        loadingWindow.style.display = "block";
    
    setTimeout(() =>{
        const loader = document.getElementById("loader");
        const chosenUser = document.getElementById("chosenUser");
        if(loader !== null)
            loader.style.display = "none";
        if(chosenUser !== null){
            chosenUser.style.display = "block";
            chosenUser.innerText ="Dajesz prezent użytkownikowi:" + draw()._name;
        }
        setTimeout(() =>{
            if(loadingWindow !== null)
                loadingWindow.style.display = "none";
            fillMemberToGive();
        }, 1500)
    },2000);
}
fillAll();
setCurrentUser();
drawBtn?.addEventListener("click",()=>{
    if(currentUser.drawnMemberName.length < 1){
        displayLoadingWindow();
    }
    else
        console.log("Twój użytkownik został już wylosowany")
})
