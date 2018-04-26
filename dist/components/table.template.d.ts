export declare const TABLE_TEMPLATE = "\n<div class=\"data-table-wrapper\">\n    <data-table-header *ngIf=\"header\"></data-table-header>\n\n    <div class=\"data-table-box\">\n        <table class=\"table table-condensed table-bordered data-table\">\n            <thead>\n                <tr>\n                    <th scope=\"col\" [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\n                    <th scope=\"col\" [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\n                        <span [textContent]=\"indexColumnHeader\"></span>\n                    </th>\n                    <th scope=\"col\" [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\n                        <input [hide]=\"!multiSelect\" type=\"checkbox\" [(ngModel)]=\"selectAllCheckbox\" [attr.aria-label]=\"translations.selectAllRows\" />\n                    </th>\n                    <th scope=\"col\" *ngFor=\"let column of columns\" #th [hide]=\"!column.visible\" \n                    \t  (click)=\"headerClicked(column, $event)\" \n                    \t  (keydown.enter)=\"headerClicked(column, $event)\" (keydown.space)=\"headerClicked(column, $event)\"\n                        [class.sortable]=\"column.sortable\" [class.resizable]=\"column.resizable\"\n                        [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\"\n                        [attr.aria-sort]=\"column.sortable ? (column.property === sortBy ? (sortAsc ? 'ascending' : 'descending') : 'none') : null\"\n                        [attr.tabindex]=\"column.sortable ? '0' : null\">\n                        <span *ngIf=\"!column.headerTemplate\" [textContent]=\"column.header\"></span>\n                        <span *ngIf=\"column.headerTemplate\" [ngTemplateOutlet]=\"column.headerTemplate\" [ngTemplateOutletContext]=\"{column: column}\"></span>\n                        <span class=\"column-sort-icon\" *ngIf=\"column.sortable\">\n                            <span class=\"glyphicon glyphicon-sort column-sortable-icon\" [hide]=\"column.property === sortBy\"></span>\n                            <span [hide]=\"column.property !== sortBy\">\n                                 <span class=\"glyphicon\" [ngClass]=\"{'glyphicon-triangle-top': !sortAsc, 'glyphicon-triangle-bottom': sortAsc}\"></span>\n                            </span>\n                        </span>\n                        <span *ngIf=\"column.resizable\" class=\"column-resize-handle\" (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n                    </th>\n                </tr>\n                <tr>\n                    <th scope=\"col\" [hide]=\"!expandColumnVisible\" class=\"expand-column-header\">\n                    <th scope=\"col\" [hide]=\"!indexColumnVisible\" class=\"index-column-header\">\n                        <span [textContent]=\"indexColumnHeader\"></span>\n                    </th>\n                    <th scope=\"col\" [hide]=\"!selectColumnVisible\" class=\"select-column-header\">\n                        <input [hide]=\"!multiSelect\" type=\"checkbox\" [(ngModel)]=\"selectAllCheckbox\" [attr.aria-label]=\"translations.selectAllRows\" />\n                    </th>\n                    <th scope=\"col\" *ngFor=\"let column of columns\" #th [hide]=\"!column.visible\" \n                        [class.resizable]=\"column.resizable\"\n                        [ngClass]=\"column.styleClassObject\" class=\"column-header\" [style.width]=\"column.width | px\">\n                        <input (keyup)=\"searchItems($event, column.header)\" *ngIf=\"column.searchable\" type=\"text\" placeholder=\"Search\" class=\"column-input\">\n                        <span *ngIf=\"column.resizable\" class=\"column-resize-handle\" (mousedown)=\"resizeColumnStart($event, column, th)\"></span>\n                    </th>\n                </tr>\n            </thead>\n            <tbody *ngFor=\"let item of items; let index=index\" class=\"data-table-row-wrapper\"\n                   dataTableRow #row [item]=\"item\" [index]=\"index\" (selectedChange)=\"onRowSelectChanged(row)\">\n            </tbody>\n            <tbody *ngIf=\"itemCount === 0 && noDataMessage\">\n                <tr>\n                    <td [attr.colspan]=\"columnCount\">{{ noDataMessage }}</td>\n                </tr>\n            </tbody>\n            <tbody class=\"substitute-rows\" *ngIf=\"pagination && substituteRows\">\n                <tr *ngFor=\"let item of substituteItems, let index = index\"\n                    [class.row-odd]=\"(index + items.length) % 2 === 0\"\n                    [class.row-even]=\"(index + items.length) % 2 === 1\"\n                    >\n                    <td [hide]=\"!expandColumnVisible\"></td>\n                    <td [hide]=\"!indexColumnVisible\">&nbsp;</td>\n                    <td [hide]=\"!selectColumnVisible\"></td>\n                    <td *ngFor=\"let column of columns\" [hide]=\"!column.visible\">\n                </tr>\n            </tbody>\n        </table>\n        <div class=\"loading-cover\" *ngIf=\"showReloading && reloading\"></div>\n    </div>\n\n    <data-table-pagination\n        *ngIf=\"pagination\"\n        [show_range]=\"pagination_range\"\n        [show_limit]=\"pagination_limit\"\n        [show_input]=\"pagination_input\"\n        [show_numbers]=\"pagination_numbers\"></data-table-pagination>\n</div>\n";
