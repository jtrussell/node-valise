# valise
Valise provides easy access to your project's config files, libs, schemas,
etc... no more `require ( "../......../../myConf.json" )`

## Getting Started
Install the module with: `npm install valise`

```javascript
var valise = require( "valise" )
	, dbConf = valise( "db" );

// Do something with your db config
```

## Documentation
Valise is essentially a hash of locations you would like to `require` from. It
is tailored for granting convenient access to your config files and other such
resources that for whatever reason don't live in your `node_modules` folder.

By default valise assumes you have a `conf` folder next to your `node_modules`
folder and will fetch resources from there.

```javascript
var valise = require( "valise" )
	, dbConf = valise( "db" ); // fetches ./conf/db.json relative to app root

// Do something with your db config
```

You can register multiple resource locations using `valise.mixin`

```javascript
/* From app root */
var valise = require( "valise" );
valise.mixin({
	"models": __dirname + "/models"
});

/* Then from any other file... */

// fetches ./models/User.js relative to app root
var valise = require( "valise" )
	, User = valise( "modles:User" );

// Do something with your user schema
```

Note that the default notation is just a convenience for leaving off the
resource hash key, observe...

```javascript
var valise = require( "valise" );

// Assuming you have a file db.json file at ./conf/db.json of course
console.log(
	valise( "db" ) === valise( "conf:db" )
);
```

You can even change the default resource location if you want

```javascript
var valise = require( "valise" )
	, awesomeLib;

valise
	.mixin({"lib": __dirname + "/lib"})
	.setDefault( "lib" );

awesomeLib = valise( "awesome" );
```

## Tests
`npm test`

## Examples
See `test/valise_test.js`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Justin Russell  
Licensed under the MIT license.
