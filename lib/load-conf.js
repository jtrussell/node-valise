/*
 * load-conf
 * https://github.com/jrussell-ivantage/load-conf
 *
 * Copyright (c) 2013 Justin Russell
 * Licensed under the MIT license.
 */

"use strict";

// -----------------------------------------------------
// By default assume we're in ***app-dir***/node_modules/***module_dir***/lib and
// configs live in ***app-dir***/conf
// -----------------------------------------------------
var path = require( "path" )
	, fs = require( "fs" )
	, confRoots = [
			path.join( __dirname, "../../../conf" )
		]
	;

//exports.awesome = function() {
//  return "awesome";
//};

// -----------------------------------------------------
// Load a config relative to our conf root
// -----------------------------------------------------
module.exports = function( confPath ) {
	var i;

	// -----------------------------------------------------
	// For now we only support json configs
	// -----------------------------------------------------
	if( !/\.json$/.test( confPath ) ) {
		confPath += ".json";
	}

	// -----------------------------------------------------
	// We we have more than one possible config location?
	// -----------------------------------------------------
	if( confRoots.length === 1 ) {
		return require( path.join( confRoots[0], confPath ) );
	} else {
		for( i = confRoots.length; i--; ) {
			if( fs.existsSync( path.join( confRoots[i], confPath ) ) ) {
				return require( path.join( confRoots[i], confPath ) );
			}
		}
		throw new Error( "Whelp... resolve config path for " + confPath );
	}
};

// -----------------------------------------------------
// Option to set our own config directory
// -----------------------------------------------------
module.exports.setConfRoot = function( roots ) {
	// -----------------------------------------------------
	// Convenience, you can pass a single dir if that's all you need
	// -----------------------------------------------------
	if( !( roots instanceof Array ) ) {
		roots = [roots];
	}

	confRoots = roots;
};
