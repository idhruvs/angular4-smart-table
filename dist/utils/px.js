"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PixelConverter = /** @class */ (function () {
    function PixelConverter() {
    }
    PixelConverter.prototype.transform = function (value, args) {
        if (value === undefined) {
            return;
        }
        if (typeof value === 'string') {
            return value;
        }
        if (typeof value === 'number') {
            return value + 'px';
        }
    };
    PixelConverter.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'px'
                },] },
    ];
    return PixelConverter;
}());
exports.PixelConverter = PixelConverter;
//# sourceMappingURL=/utils/px.js.map