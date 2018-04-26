"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataTableColumn = /** @class */ (function () {
    function DataTableColumn() {
        this.sortable = false;
        this.resizable = false;
        this.searchable = true;
        this.visible = true;
        this.styleClassObject = {};
    }
    DataTableColumn.prototype.getCellColor = function (row, index) {
        if (this.cellColors !== undefined) {
            return this.cellColors(row.item, row, this, index);
        }
    };
    DataTableColumn.prototype.ngOnInit = function () {
        this._initCellClass();
    };
    DataTableColumn.prototype._initCellClass = function () {
        if (!this.styleClass && this.property) {
            if (/^[a-zA-Z0-9_]+$/.test(this.property)) {
                this.styleClass = 'column-' + this.property;
            }
            else {
                this.styleClass = 'column-' + this.property.replace(/[^a-zA-Z0-9_]/g, '');
            }
        }
        if (this.styleClass != null) {
            this.styleClassObject = (_a = {},
                _a[this.styleClass] = true,
                _a);
        }
        var _a;
    };
    DataTableColumn.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'data-table-column'
                },] },
    ];
    /** @nocollapse */
    DataTableColumn.propDecorators = {
        "header": [{ type: core_1.Input },],
        "sortable": [{ type: core_1.Input },],
        "resizable": [{ type: core_1.Input },],
        "searchable": [{ type: core_1.Input },],
        "property": [{ type: core_1.Input },],
        "styleClass": [{ type: core_1.Input },],
        "cellColors": [{ type: core_1.Input },],
        "width": [{ type: core_1.Input },],
        "visible": [{ type: core_1.Input },],
        "cellTemplate": [{ type: core_1.ContentChild, args: ['dataTableCell',] },],
        "headerTemplate": [{ type: core_1.ContentChild, args: ['dataTableHeader',] },],
    };
    return DataTableColumn;
}());
exports.DataTableColumn = DataTableColumn;
//# sourceMappingURL=/components/column.component.js.map