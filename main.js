"use strict";
(() => {
})();
(() => {
    class Mutant {
        constructor() {
            this.name = "";
            this.realName = "";
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
});
(() => {
    const client = {
        name: 'Adrian',
        age: 25,
        address: {
            id: 1,
            zip: 14650,
            city: 'Bujalance'
        },
        getFullAddress(id) {
            return 'hola';
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map