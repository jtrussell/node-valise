# velise
**noun**: _A small traveling bag or suitcase_

Velise provides easy access to your project's config files, libs, schemas,
etc... no more `require ( "../......../../my.conf" )`

## Getting Started
(soon) Install the module with: `npm install velise`

```javascript
var velise = require( "velise" )
	, dbConf = velise( "db" )

// Do something with your db config
```

## Documentation
Velise is essentially a hash of locations you would like to `require` from. It
is tailored for granting convenient access to your config files and other such
resources that for whatever reason don't live in your `node\_modules` folder.

By default velise assumes you have a `conf` folder next to your `node\_modules`
folder and will fetch resources from there.

```javascript
var velise = require( "velise" )
	, dbConf = velise( "db" ) // fetches ./conf/db.json relative to app root

// Do something with your db config
```

You can register multiple resource locations using `velise.mixin`

```javascript
var velise = require( "velise" );
velise.mixin({
	"models": __dirname + "/models"
});

/* Then from any other file */

// fetches ./models/User.js relative to app root
var velise = require( "velise" )
	, User = velise( "modles:User" )
	;

// Do something with your user schema
```

You can even change the default resource location if you want

```javascript
var velise = require( "velise" );

velise
	.mixin({"lib": __dirname + "/lib"})
	.setDefault( "lib" )
	;
```

####

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Justin Russell  
Licensed under the MIT license.
