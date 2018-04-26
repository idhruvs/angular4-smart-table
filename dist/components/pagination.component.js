"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var table_component_1 = require("./table.component");
var pagination_template_1 = require("./pagination.template");
var pagination_style_1 = require("./pagination.style");
var DataTablePagination = /** @class */ (function () {
    function DataTablePagination(dataTable) {
        this.dataTable = dataTable;
        this.show_range = false;
        this.show_limit = false;
        this.show_input = false;
        this.show_numbers = true;
    }
    DataTablePagination.prototype.pageBack = function () {
        this.dataTable.offset -= Math.min(this.dataTable.limit, this.dataTable.offset);
    };
    DataTablePagination.prototype.pageForward = function () {
        this.dataTable.offset += this.dataTable.limit;
    };
    DataTablePagination.prototype.pageFirst = function () {
        this.dataTable.offset = 0;
    };
    DataTablePagination.prototype.pageLast = function () {
        this.dataTable.offset = (this.maxPage - 1) * this.dataTable.limit;
    };
    Object.defineProperty(DataTablePagination.prototype, "maxPage", {
        get: function () {
            return Math.ceil(this.dataTable.itemCount / this.dataTable.limit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagination.prototype, "limit", {
        get: function () {
            return this.dataTable.limit;
        },
        set: function (value) {
            this.dataTable.limit = Number(value); // TODO better way to handle that value of number <input> is string?
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTablePagination.prototype, "page", {
        get: function () {
            return this.dataTable.page;
        },
        set: function (value) {
            this.dataTable.page = Number(value);
        },
        enumerable: true,
        configurable: true
    });
    DataTablePagination.prototype.createPageRange = function (number, page) {
        var displayedPage = 3;
        var items = [];
        if (number > 1) {
            var maxPage = number;
            var minPage = 1;
            if (page === 1 && maxPage >= displayedPage) {
                maxPage = 3;
            }
            else if (page > 1 && maxPage > page + 1) {
                minPage = page - 1;
                maxPage = page + 1;
            }
            else if (page > 2 && maxPage > page) {
                minPage = page - 1;
                maxPage = page + 1;
            }
            else if (page > 2 && maxPage === page) {
                minPage = page - 2;
                maxPage = page;
            }
            for (var i = minPage; i <= maxPage; i++) {
                items.push(i);
            }
        }
        return items;
    };
    DataTablePagination.decorators = [
        { type: core_1.Component, args: [{
                    moduleId: module.id + '',
                    selector: 'data-table-pagination',
                    template: pagination_template_1.PAGINATION_TEMPLATE,
                    styles: [pagination_style_1.PAGINATION_STYLE]
                },] },
    ];
    /** @nocollapse */
    DataTablePagination.ctorParameters = function () { return [
        { type: table_component_1.DataTable, decorators: [{ type: core_1.Inject, args: [core_1.forwardRef(function () { return table_component_1.DataTable; }),] },] },
    ]; };
    DataTablePagination.propDecorators = {
        "show_range": [{ type: core_1.Input },],
        "show_limit": [{ type: core_1.Input },],
        "show_input": [{ type: core_1.Input },],
        "show_numbers": [{ type: core_1.Input },],
    };
    return DataTablePagination;
}());
exports.DataTablePagination = DataTablePagination;
//# sourceMappingURL=/components/pagination.component.js.map