# SmoothieDuplicator

The Smoothie Duplicator is a prototype application designed to be an admin/user portal for interacting with a smoothie ordering system. The ideal outcome is;

### Admin Portal
* Admin can view a list of most popular smoothies (based off of ordering data)
* Admin can view all available smoothies
* Admin can view a detailed view of individual smoothies: listing ingredients and basic nutritional information
* Admin can search for smoothies using a live search
* Admin can create new smoothies that will be available on the user portal
* Admin can create new ingredients for smoothie creation
* Admin can modifiy smoothie data (name, ingredients)
* Admin can delete smoothies
* Admin can view the number of times a smoothie was ordered

### User Portal
* Users can view a list of most popular smoothies (based off of ordering data)
* Users can view all available smoothies
* Users can view a detailed view of individual smoothies: listing ingredients and basic nutritional information
* Users can search for smoothies using a live search
* Users can build their own smoothie using predefined ingredients
* Users can select single/multiple items to add to an order
* Users can place an order to be processed (current version of app is not designed for monetary exchange or order processing, it is a portal for building an order only)


## Express Server

A RESTful API has been setup to facilitate CRUD actions. The API uses the app.use function to mount routes for smoothie/ingredient actions. Seperate routing files have been setup to handle each set of route requests.



## Abstracted Database Layer 

The database layer in this app has been setup to allow for easily switching database connections. To switch out the database connection;

1. Step 1: Creating a new connection file (specific to the new database)
1. Step 2: Creating a database query file that follows the key/value pairing style of mongodbQueries.js (keys in the new file must match the keys in the mongo file to avoid altering the express routes)
1. Step 3: Add to dbConnections.js: a require statement for the new connection file and a key/value to reference the require.
1. Step 4: Modifing the database connection call in server.js to use the key created in step 2 (i.e. replace "mongoDbConnection" in  "database.mongoDbConnection.connectToServer(<.........>)"




# Known Issues

* Data for all smoothies is being fetched twice when loading dashboard and smoothies component.

* The smoothie search section is currently displaying inline and it's positioning is affected by the horizontal spacing of the "Top Smoothies" section. This causes the search section to display in less than ideal positions depending on the number of top smoothies that are shown. Possible fix will be to move the search area into the tool bar or just below it on the right side of the screen.

* GitHub is alerting that there is a vulnerability in the hoek dependency. Recommended resolution is to update the package to a version of 4.2.1 or greater.








# Additional Notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

