## Angular 4 Data Table
<a href="https://nodei.co/npm/angular4-smart-table/"><img src="https://nodei.co/npm/angular4-smart-table.png"></a>


<a href="https://angular4-smart-table-demo.herokuapp.com/">Demo</a>


<a href="https://github.com/idhruvs/angular4-smart-table-demo">Sample Angular Code</a>

This is fork of package [https://github.com/ggmod/angular-2-data-table] with additional features(https://github.com/ggmod/angular-2-data-table)

A simple Angular 4 data table, with built-in solutions for features including:

* pagination
* sorting
* row selection (single/multi)
* expandable rows
* column resizing
* selecting visible columns

The component can be used not just with local data, but remote resources too: for example if the sorting and paging happen in the database.

The templates use bootstrap CSS class names, so the component requires a bootstrap .css file to be present in the application using it.

#### Additional Feature:
* searchable columns

#### Installation:
	`npm install angular4-smart-table --save`

#### Adding to AngularProject:

1. `app.module.ts`

	`import { DataTableModule } from 'angular4-smart-table';`

	`imports : [...,DataTableModule ]`

2.  `app.component.ts`

	`import { DataTable } from 'angular4-smart-table'`;
    
#### Additional Steps: 
	1. Since the project uses glyphicons, include the following <link> tag in your index.html.
	
	  <link data-require="bootstrap-css@3.3.6" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" />

	2. Make sure bootstrap is present in your project.
  
#### Licensing
MIT License
