const basicUrl = "http://127.0.0.1:5500/dist/templates/event.html?id=";
const wishlistUrl = "http://127.0.0.1:5500/dist/templates/wishlist.html?id=";
const id = location.href.slice(basicUrl.length);
const event = JSON.parse(localStorage.getItem(id));
const eventNameDiv = document.getElementById("eventTitle");
const priceDiv = document.getElementById("maxPrice");
const membersDiv = document.getElementById("event__members");
const membersSection = (member) => `<div class="member">
<strong class="item--left">${member._name}</strong> <a href="${wishlistUrl + member._name + "_" + event.id}">
    Zobacz listę
</a>
<button type="button" class="btn--edit item--right">Edytuj</button>
</div>
`;
const fillMembersDiv = () => {
    event._members.forEach((member) => {
        if (membersDiv !== null)
            membersDiv.innerHTML += membersSection(member);
    });
};
const fillAll = () => {
    if (eventNameDiv !== null)
        eventNameDiv.innerHTML += event._name;
    if (priceDiv !== null)
        priceDiv.innerHTML += event._maxPrice;
    fillMembersDiv();
};
fillAll();
export {};
