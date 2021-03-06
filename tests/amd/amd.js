/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* globals describe, it, expect, CKEDITOR */

'use strict';

CKEDITOR.define( 'testModule', [ 'ckeditor' ], function( ckeditor ) {
	return {
		test: ( ckeditor && ( typeof ckeditor == 'object' ) )
	};
} );

describe( 'CKEDITOR.require()', function() {
	it( 'should work with a defined module', function( done ) {
		CKEDITOR.require( [ 'testModule' ], function( testModule ) {
			expect( testModule ).to.have.property( 'test' ).to.be.true();
			done();
		} );
	} );

	it( 'should work with a core module', function( done ) {
		CKEDITOR.require( [ 'utils' ], function( utils ) {
			expect( utils ).to.be.an( 'object' );
			done();
		} );
	} );
} );
