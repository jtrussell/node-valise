"use strict";

var velise = require("../lib/velise.js");

velise
	.mixin({
		"confdir": __dirname + "/confdir",
		"sub": __dirname + "/confdir/subdir"
	}).setDefault( "sub" );

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports["velise_test"] = {
  setUp: function( done ) {
    // setup here
    done();
  },

	"result is as expected": function( test ) {
		test.expect( 2 ); // Not necessary for sync test... but good habit anyway

		test.equal(
			velise( "foo" ).supa,
			"blargus",
			"Should be able to fetch resources with velise (default syntax)"
		);

		test.equal(
			velise( "confdir:bar" ).awesome,
			"sauce",
			"Should be able to fetch reources with velise (explicit prefix)"
		);

		test.done();
	},

  "prefix is optional for default location": function( test ) {
    test.expect( 1 );

    test.equal(
			velise( "foo" ),
			velise( "sub:foo" ),
			"Prefix should be optional for default location."
		);

    test.done();
  }

};
