import Event from "./Event.js";
const eventName = <HTMLInputElement>document.getElementById("eventName");
const memberName = <HTMLInputElement>document.getElementById("memberName");
const password = <HTMLInputElement>document.getElementById("eventPassword");
const form = <HTMLFormElement>document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
const url = "http://127.0.0.1:5500/dist/templates/event.html?id=";

const verifyForm = () =>{
    let eventNameValue : string, memberNameValue : string, passwordValue : string;
    
    eventNameValue = eventName.value; 
    memberNameValue = memberName.value;
    passwordValue = password.value;
    const events : Array<Event> = JSON.parse(<string>localStorage.getItem('events'));
    const event = events.find(event1 => (event1._name === eventNameValue && event1._password === passwordValue));
    if(event === undefined){
        console.log("no such event");
        return;
    }
    const member = event._members.find(member => member._name === memberNameValue);
    if(event === undefined){
        console.log("no such member");
        return;
    }
    console.log("login successful");
    window.location.href = `${url}${event._id}#${member?._name}`
    
}