import PartyMember from "./PartyMember";
export default class Event{
    public _name : string;
    public _date : Date;
    public _maxPrice: number;
    public _password : string;
    public _members : Array<PartyMember>;
    public _id: number;
    constructor(name : string,date : Date, maxPrice = 0, 
        password :string, members : Array<PartyMember> ){
        this._name = name;
        this._date = date;
        this._maxPrice = maxPrice;
        this._password = password;
        this._members = members;
        this._id = Date.now();
    }
    get name() { return this._name; }
    get date() { return this._date;}
    get maxPrice() { return this._maxPrice}
    get password() { return this._password}
    get members() { return this._members}
    get id(){ return this._id}
    set name(name: string) { this._name = name;}
    set date(date: Date) { this._date = date}
    set maxPrice (maxPrice: number) { this._maxPrice = maxPrice}
}