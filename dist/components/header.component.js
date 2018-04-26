"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var table_component_1 = require("./table.component");
var header_template_1 = require("./header.template");
var header_style_1 = require("./header.style");
var DataTableHeader = /** @class */ (function () {
    function DataTableHeader(dataTable) {
        this.dataTable = dataTable;
        this.columnSelectorOpen = false;
    }
    DataTableHeader.prototype._closeSelector = function () {
        this.columnSelectorOpen = false;
    };
    DataTableHeader.decorators = [
        { type: core_1.Component, args: [{
                    moduleId: module.id + '',
                    selector: 'data-table-header',
                    template: header_template_1.HEADER_TEMPLATE,
                    styles: [header_style_1.HEADER_STYLE],
                    host: {
                        '(document:click)': '_closeSelector()'
                    }
                },] },
    ];
    /** @nocollapse */
    DataTableHeader.ctorParameters = function () { return [
        { type: table_component_1.DataTable, decorators: [{ type: core_1.Inject, args: [core_1.forwardRef(function () { return table_component_1.DataTable; }),] },] },
    ]; };
    return DataTableHeader;
}());
exports.DataTableHeader = DataTableHeader;
//# sourceMappingURL=/components/header.component.js.map