"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var column_component_1 = require("./column.component");
var row_component_1 = require("./row.component");
var default_translations_type_1 = require("../types/default-translations.type");
var drag_1 = require("../utils/drag");
var table_template_1 = require("./table.template");
var table_style_1 = require("./table.style");
var DataTable = /** @class */ (function () {
    function DataTable() {
        this._items = [];
        this.pageItems = [];
        this.header = true;
        this.pagination = true;
        this.pagination_range = false;
        this.pagination_limit = false;
        this.pagination_input = false;
        this.pagination_numbers = true;
        this.indexColumn = true;
        this.indexColumnHeader = '';
        this.selectColumn = false;
        this.multiSelect = true;
        this.substituteRows = true;
        this.expandableRows = false;
        this.translations = default_translations_type_1.defaultTranslations;
        this.selectOnRowClick = false;
        this.autoReload = true;
        this.showReloading = false;
        this._sortAsc = true;
        this._offset = 0;
        this._limit = 10;
        // Reloading:
        this._reloading = false;
        this.reload = new core_1.EventEmitter();
        this._displayParams = {};
        this._scheduledReload = null;
        // event handlers:
        this.rowClick = new core_1.EventEmitter();
        this.rowDoubleClick = new core_1.EventEmitter();
        this.headerClick = new core_1.EventEmitter();
        this.cellClick = new core_1.EventEmitter();
        this.selectedRows = [];
        this._selectAllCheckbox = false;
        // column resizing:
        this._resizeInProgress = false;
        this.resizeLimit = 30;
    }
    Object.defineProperty(DataTable.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            this.pageItems = items;
            this._onReloadFinished();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "sortBy", {
        get: function () {
            return this._sortBy;
        },
        set: function (value) {
            this._sortBy = value;
            this._triggerReload();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "sortAsc", {
        get: function () {
            return this._sortAsc;
        },
        set: function (value) {
            this._sortAsc = value;
            this._triggerReload();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (value) {
            this._offset = value;
            this._triggerReload();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "limit", {
        get: function () {
            return this._limit;
        },
        set: function (value) {
            this._limit = value;
            this._triggerReload();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "page", {
        get: 
        // calculated property:
        function () {
            return Math.floor(this.offset / this.limit) + 1;
        },
        set: function (value) {
            this.offset = (value - 1) * this.limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTable.prototype, "lastPage", {
        get: function () {
            return Math.ceil(this.itemCount / this.limit);
        },
        enumerable: true,
        configurable: true
    });
    // setting multiple observable properties simultaneously
    // setting multiple observable properties simultaneously
    DataTable.prototype.sort = 
    // setting multiple observable properties simultaneously
    function (sortBy, asc) {
        this.sortBy = sortBy;
        this.sortAsc = asc;
    };
    // init
    // init
    DataTable.prototype.ngOnInit = 
    // init
    function () {
        this._initDefaultValues();
        this._initDefaultClickEvents();
        this._updateDisplayParams();
        if (this.autoReload && this._scheduledReload == null) {
            this.reloadItems();
        }
    };
    DataTable.prototype._initDefaultValues = function () {
        this.indexColumnVisible = this.indexColumn;
        this.selectColumnVisible = this.selectColumn;
        this.expandColumnVisible = this.expandableRows;
    };
    DataTable.prototype._initDefaultClickEvents = function () {
        var _this = this;
        this.headerClick.subscribe(function (tableEvent) { return _this.sortColumn(tableEvent.column); });
        if (this.selectOnRowClick) {
            this.rowClick.subscribe(function (tableEvent) { return tableEvent.row.selected = !tableEvent.row.selected; });
        }
    };
    Object.defineProperty(DataTable.prototype, "reloading", {
        get: function () {
            return this._reloading;
        },
        enumerable: true,
        configurable: true
    });
    DataTable.prototype.reloadItems = function () {
        this._reloading = true;
        this.reload.emit(this._getRemoteParameters());
    };
    DataTable.prototype._onReloadFinished = function () {
        this._updateDisplayParams();
        this._selectAllCheckbox = false;
        this._reloading = false;
    };
    Object.defineProperty(DataTable.prototype, "displayParams", {
        get: function () {
            return this._displayParams;
        },
        enumerable: true,
        configurable: true
    });
    DataTable.prototype._updateDisplayParams = function () {
        this._displayParams = {
            sortBy: this.sortBy,
            sortAsc: this.sortAsc,
            offset: this.offset,
            limit: this.limit
        };
    };
    // for avoiding cascading reloads if multiple params are set at once:
    // for avoiding cascading reloads if multiple params are set at once:
    DataTable.prototype._triggerReload = 
    // for avoiding cascading reloads if multiple params are set at once:
    function () {
        var _this = this;
        if (this._scheduledReload) {
            clearTimeout(this._scheduledReload);
        }
        this._scheduledReload = setTimeout(function () {
            _this.reloadItems();
        });
    };
    DataTable.prototype.rowClicked = function (row, event) {
        this.rowClick.emit({ row: row, event: event });
    };
    DataTable.prototype.rowDoubleClicked = function (row, event) {
        this.rowDoubleClick.emit({ row: row, event: event });
    };
    DataTable.prototype.headerClicked = function (column, event) {
        if (!this._resizeInProgress) {
            event.preventDefault();
            event.stopPropagation();
            this.headerClick.emit({ column: column, event: event });
        }
        else {
            this._resizeInProgress = false; // this is because I can't prevent click from mousup of the drag end
        }
    };
    DataTable.prototype.cellClicked = function (column, row, event) {
        this.cellClick.emit({ row: row, column: column, event: event });
    };
    // functions:
    // functions:
    DataTable.prototype._getRemoteParameters = 
    // functions:
    function () {
        var params = {};
        if (this.sortBy) {
            params.sortBy = this.sortBy;
            params.sortAsc = this.sortAsc;
        }
        if (this.pagination) {
            params.offset = this.offset;
            params.limit = this.limit;
        }
        return params;
    };
    DataTable.prototype.sortColumn = function (column) {
        if (column.sortable) {
            console.log(column);
            var ascending = this.sortBy === column.property ? !this.sortAsc : true;
            this.sort(column.property, ascending);
        }
    };
    Object.defineProperty(DataTable.prototype, "columnCount", {
        get: function () {
            var count = 0;
            count += this.indexColumnVisible ? 1 : 0;
            count += this.selectColumnVisible ? 1 : 0;
            count += this.expandColumnVisible ? 1 : 0;
            this.columns.toArray().forEach(function (column) {
                count += column.visible ? 1 : 0;
            });
            return count;
        },
        enumerable: true,
        configurable: true
    });
    DataTable.prototype.getRowColor = function (item, index, row) {
        if (this.rowColors !== undefined) {
            return this.rowColors(item, row, index);
        }
    };
    Object.defineProperty(DataTable.prototype, "selectAllCheckbox", {
        get: function () {
            return this._selectAllCheckbox;
        },
        set: function (value) {
            this._selectAllCheckbox = value;
            this._onSelectAllChanged(value);
        },
        enumerable: true,
        configurable: true
    });
    DataTable.prototype._onSelectAllChanged = function (value) {
        this.rows.toArray().forEach(function (row) { return row.selected = value; });
    };
    DataTable.prototype.onRowSelectChanged = function (row) {
        // maintain the selectedRow(s) view
        if (this.multiSelect) {
            var index = this.selectedRows.indexOf(row);
            if (row.selected && index < 0) {
                this.selectedRows.push(row);
            }
            else if (!row.selected && index >= 0) {
                this.selectedRows.splice(index, 1);
            }
        }
        else {
            if (row.selected) {
                this.selectedRow = row;
            }
            else if (this.selectedRow === row) {
                this.selectedRow = this.noRow;
            }
        }
        // unselect all other rows:
        if (row.selected && !this.multiSelect) {
            this.rows.toArray().filter(function (row_) { return row_.selected; }).forEach(function (row_) {
                if (row_ !== row) { // avoid endless loop
                    // avoid endless loop
                    row_.selected = false;
                }
            });
        }
    };
    Object.defineProperty(DataTable.prototype, "substituteItems", {
        // other:
        get: 
        // other:
        function () {
            if (typeof (this.displayParams.limit) === 'undefined') {
                this.displayParams.limit = 10;
            }
            return Array.from({ length: this.displayParams.limit - this.items.length });
        },
        enumerable: true,
        configurable: true
    });
    DataTable.prototype.resizeColumnStart = function (event, column, columnElement) {
        var _this = this;
        this._resizeInProgress = true;
        drag_1.drag(event, {
            move: function (moveEvent, dx) {
                if (_this._isResizeInLimit(columnElement, dx)) {
                    column.width = columnElement.offsetWidth + dx;
                }
            },
        });
    };
    DataTable.prototype._isResizeInLimit = function (columnElement, dx) {
        /* This is needed because CSS min-width didn't work on table-layout: fixed.
                 Without the limits, resizing can make the next column disappear completely,
                 and even increase the table width. The current implementation suffers from the fact,
                 that offsetWidth sometimes contains out-of-date values. */
        if ((dx < 0 && (columnElement.offsetWidth + dx) <= this.resizeLimit) ||
            !columnElement.nextElementSibling || // resizing doesn't make sense for the last visible column
            // resizing doesn't make sense for the last visible column
            (dx >= 0 && (columnElement.nextElementSibling.offsetWidth + dx) <= this.resizeLimit)) {
            return false;
        }
        return true;
    };
    DataTable.prototype.reset = function () {
        this._limit = 10;
        this._offset = 0;
        this.reloadItems();
        // console.log(this._items);
    };
    // For converting keys to camel-case
    // For converting keys to camel-case
    DataTable.prototype.camelize = 
    // For converting keys to camel-case
    function (str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+match === 0)
                return ""; // or if (/\s+/.test(match)) for white spaces
            return index == 0 ? match.toLowerCase() : match.toUpperCase();
        });
    };
    DataTable.prototype._search = function (array, searchParam, searchField) {
        var _this = this;
        var searchedItems = [];
        array.forEach(function (item) {
            if ((String(item[_this.camelize(searchField)]).toLowerCase().includes(searchParam))) {
                searchedItems.push(item);
            }
        });
        return searchedItems;
    };
    // Search for items based on the entered substrings
    // Search for items based on the entered substrings
    DataTable.prototype.searchItems = 
    // Search for items based on the entered substrings
    function (event, target) {
        var searchParameter = event.target.value.toLowerCase();
        if (event.target.value != '') {
            this._items = this._search(this.pageItems, searchParameter, target);
        }
        else {
            this.reset();
        }
    };
    DataTable.decorators = [
        { type: core_1.Component, args: [{
                    moduleId: module.id + '',
                    selector: 'data-table',
                    template: table_template_1.TABLE_TEMPLATE,
                    styles: [table_style_1.TABLE_STYLE]
                },] },
    ];
    /** @nocollapse */
    DataTable.propDecorators = {
        "items": [{ type: core_1.Input },],
        "itemCount": [{ type: core_1.Input },],
        "columns": [{ type: core_1.ContentChildren, args: [column_component_1.DataTableColumn,] },],
        "rows": [{ type: core_1.ViewChildren, args: [row_component_1.DataTableRow,] },],
        "expandTemplate": [{ type: core_1.ContentChild, args: ['dataTableExpand',] },],
        "headerTitle": [{ type: core_1.Input },],
        "header": [{ type: core_1.Input },],
        "pagination": [{ type: core_1.Input },],
        "pagination_range": [{ type: core_1.Input },],
        "pagination_limit": [{ type: core_1.Input },],
        "pagination_input": [{ type: core_1.Input },],
        "pagination_numbers": [{ type: core_1.Input },],
        "indexColumn": [{ type: core_1.Input },],
        "indexColumnHeader": [{ type: core_1.Input },],
        "rowColors": [{ type: core_1.Input },],
        "rowTooltip": [{ type: core_1.Input },],
        "selectColumn": [{ type: core_1.Input },],
        "multiSelect": [{ type: core_1.Input },],
        "substituteRows": [{ type: core_1.Input },],
        "expandableRows": [{ type: core_1.Input },],
        "translations": [{ type: core_1.Input },],
        "selectOnRowClick": [{ type: core_1.Input },],
        "autoReload": [{ type: core_1.Input },],
        "showReloading": [{ type: core_1.Input },],
        "noDataMessage": [{ type: core_1.Input },],
        "sortBy": [{ type: core_1.Input },],
        "sortAsc": [{ type: core_1.Input },],
        "offset": [{ type: core_1.Input },],
        "limit": [{ type: core_1.Input },],
        "page": [{ type: core_1.Input },],
        "reload": [{ type: core_1.Output },],
        "rowClick": [{ type: core_1.Output },],
        "rowDoubleClick": [{ type: core_1.Output },],
        "headerClick": [{ type: core_1.Output },],
        "cellClick": [{ type: core_1.Output },],
    };
    return DataTable;
}());
exports.DataTable = DataTable;
//# sourceMappingURL=/components/table.component.js.map