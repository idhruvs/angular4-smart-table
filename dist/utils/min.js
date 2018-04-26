"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MinPipe = /** @class */ (function () {
    function MinPipe() {
    }
    MinPipe.prototype.transform = function (value, args) {
        return Math.min.apply(null, value);
    };
    MinPipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'min'
                },] },
    ];
    return MinPipe;
}());
exports.MinPipe = MinPipe;
//# sourceMappingURL=/utils/min.js.map