"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var table_component_1 = require("./table.component");
var row_template_1 = require("./row.template");
var row_style_1 = require("./row.style");
var DataTableRow = /** @class */ (function () {
    function DataTableRow(dataTable) {
        this.dataTable = dataTable;
        this.selectedChange = new core_1.EventEmitter();
        this._this = this;
    }
    Object.defineProperty(DataTableRow.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            this._selected = selected;
            this.selectedChange.emit(selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableRow.prototype, "displayIndex", {
        // other:
        get: 
        // other:
        function () {
            if (this.dataTable.pagination) {
                return this.dataTable.displayParams.offset + this.index + 1;
            }
            else {
                return this.index + 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    DataTableRow.prototype.getTooltip = function () {
        if (this.dataTable.rowTooltip) {
            return this.dataTable.rowTooltip(this.item, this, this.index);
        }
        return '';
    };
    DataTableRow.prototype.ngOnDestroy = function () {
        this.selected = false;
    };
    DataTableRow.decorators = [
        { type: core_1.Component, args: [{
                    moduleId: module.id + '',
                    selector: '[dataTableRow]',
                    template: row_template_1.ROW_TEMPLATE,
                    styles: [row_style_1.ROW_STYLE]
                },] },
    ];
    /** @nocollapse */
    DataTableRow.ctorParameters = function () { return [
        { type: table_component_1.DataTable, decorators: [{ type: core_1.Inject, args: [core_1.forwardRef(function () { return table_component_1.DataTable; }),] },] },
    ]; };
    DataTableRow.propDecorators = {
        "item": [{ type: core_1.Input },],
        "index": [{ type: core_1.Input },],
        "selectedChange": [{ type: core_1.Output },],
    };
    return DataTableRow;
}());
exports.DataTableRow = DataTableRow;
//# sourceMappingURL=/components/row.component.js.map