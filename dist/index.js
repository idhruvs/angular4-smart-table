"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var table_component_1 = require("./components/table.component");
exports.DataTable = table_component_1.DataTable;
var column_component_1 = require("./components/column.component");
exports.DataTableColumn = column_component_1.DataTableColumn;
var row_component_1 = require("./components/row.component");
exports.DataTableRow = row_component_1.DataTableRow;
var pagination_component_1 = require("./components/pagination.component");
exports.DataTablePagination = pagination_component_1.DataTablePagination;
var header_component_1 = require("./components/header.component");
exports.DataTableHeader = header_component_1.DataTableHeader;
var px_1 = require("./utils/px");
var hide_1 = require("./utils/hide");
var min_1 = require("./utils/min");
var default_translations_type_1 = require("./types/default-translations.type");
exports.defaultTranslations = default_translations_type_1.defaultTranslations;
__export(require("./tools/data-table-resource"));
exports.DATA_TABLE_DIRECTIVES = [table_component_1.DataTable, column_component_1.DataTableColumn];
var DataTableModule = /** @class */ (function () {
    function DataTableModule() {
    }
    DataTableModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [
                        table_component_1.DataTable, column_component_1.DataTableColumn,
                        row_component_1.DataTableRow, pagination_component_1.DataTablePagination, header_component_1.DataTableHeader,
                        px_1.PixelConverter, hide_1.Hide, min_1.MinPipe
                    ],
                    exports: [table_component_1.DataTable, column_component_1.DataTableColumn]
                },] },
    ];
    return DataTableModule;
}());
exports.DataTableModule = DataTableModule;
//# sourceMappingURL=/index.js.map