/*
 * velise
 * https://github.com/jrussell-ivantage/velise
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
	, defaultDir = "conf"
	, confRoots = {
			"conf": path.join( __dirname, "../../../conf" )
		}
	;

//exports.awesome = function() {
//  return "awesome";
//};

// -----------------------------------------------------
// Load a config relative to our conf root
// -----------------------------------------------------
module.exports = function( confPath ) {
	var parts = confPath.split( ":" )
		, dir
		, resource
		;

	if( 2 !== parts.length ) {
		if( 1 === parts.length ) {
			dir = defaultDir;
			resource = confPath;
		} else {
			throw new Error( "Velise got a bad resource path... what am I supposed to do with with: " + confPath + "?" );
		}
	} else {
		dir = parts[0];
		resource = parts[1];
	}

	if( !confRoots.hasOwnProperty( dir ) ) {
		throw new Error( "Velise doesn't have a resource path registered for: " + dir );
	}

	return require( path.join( confRoots[dir], resource ) );

};

// -----------------------------------------------------
// Option to set our own resource directories
// -----------------------------------------------------
module.exports.mixin = function( roots ) {
	var keys = Object.keys( roots )
		;

	keys.forEach( function( k ) {
		confRoots[k] = roots[k];
	});

	// -----------------------------------------------------
	// Why not be chainable?
	// -----------------------------------------------------
	return this;
};

module.exports.setDefault = function( root ) {
	if( !confRoots.hasOwnProperty( root ) ) {
		throw new Error( "Setting default root to non-existent resource path: " + root );
	}
	defaultDir = root;
	return this;
};
