import PartyMember from "./PartyMember";
export default class Event{
    private _name : string;
    private _date : Date;
    private _maxPrice: number;
    private _password : string;
    private _members : Array<PartyMember>;
    private _id: number;
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