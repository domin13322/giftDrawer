export default class PartyMember {
    constructor(name) {
        this.drawnMemberName = "";
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
