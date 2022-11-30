export default class Event {
    constructor(name, date, maxPrice = 0, password, members) {
        this._name = name;
        this._date = date;
        this._maxPrice = maxPrice;
        this._password = password;
        this._members = members;
        this.membersToDraw = members;
        this._id = Date.now();
    }
    get name() { return this._name; }
    get date() { return this._date; }
    get maxPrice() { return this._maxPrice; }
    get password() { return this._password; }
    get members() { return this._members; }
    get id() { return this._id; }
    set name(name) { this._name = name; }
    set date(date) { this._date = date; }
    ;
    set maxPrice(maxPrice) { this._maxPrice = maxPrice; }
    ;
}
