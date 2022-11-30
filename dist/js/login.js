const eventName = document.getElementById("eventName");
const memberName = document.getElementById("memberName");
const password = document.getElementById("eventPassword");
const form = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
const url = "http://127.0.0.1:5500/dist/templates/event.html?id=";
const verifyForm = () => {
    let eventNameValue, memberNameValue, passwordValue;
    eventNameValue = eventName.value;
    memberNameValue = memberName.value;
    passwordValue = password.value;
    const events = JSON.parse(localStorage.getItem('events'));
    const event = events.find(event1 => (event1._name === eventNameValue && event1._password === passwordValue));
    if (event === undefined) {
        console.log("no such event");
        return;
    }
    const member = event._members.find(member => member._name === memberNameValue);
    if (event === undefined) {
        console.log("no such member");
        return;
    }
    console.log("login successful");
    window.location.href = `${url}${event._id}#${member === null || member === void 0 ? void 0 : member._name}`;
};
export {};
