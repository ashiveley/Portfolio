class Page {
    constructor(name, compName, overflow = true) {
        this._name = name;
        this._compName = compName;
        this._overflow = overflow;
    }

    get name() {
        return this._name;
    }

    get compName() {
        return this._compName;
    }

    get overflow() {
        return this._overflow;
    }
}