# SmoothieDuplicator

The Smoothie Duplicator application is designed to be an admin/user portal for interacting with a smoothie ordering system. The ideal outcome is;

### User Portal


## Changing the Database 

This project is being developed using the MEAN stack. However, the database can be easily switched out by;

1. Step 1: Creating a new connection file (specific to the new database)
1. Step 2: Creating a database query file that follows the key/value pairing style of mongodbQueries.js (keys in the new file must match the keys in the mongo file to avoid altering the express routes)
1. Step 3: Add to dbConnections.js: a require statement for the new connection file and a key/value to reference the require.
1. Step 4: Modifing the database connection call in server.js to use the key created in step 2 (i.e. replace "mongoDbConnection" in  "database.mongoDbConnection.connectToServer(<.........>)"




# Known Issues

* Data for all smoothies is being fetched twice when loading dashboard and smoothies component.

* GitHub is alerting that there is a vulnerability in the hoek dependency. Recommended resolution is to update the package to a version of 4.2.1 or greater.








# Additional Notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

