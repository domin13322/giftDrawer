export default class PartyMember{
    public _name : string;
    constructor(name : string) {
        this._name = name;
    }
    get name(){
        return this._name;
    }
}