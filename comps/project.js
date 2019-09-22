class Project {
    constructor(name, compName) {
        this._name = name;
        this._compName = compName;
    }

    get name() {
        return this._name;
    }

    get compName() {
        return this._compName;
    }
}