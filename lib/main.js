/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var stride2offset = require( '@stdlib/strided-base-stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Applies a ternary callback to strided input array elements and assigns results to elements in a strided output array.
*
* @param {ArrayLikeObject<Collection>} arrays - array-like object containing three input arrays and one output array
* @param {NonNegativeIntegerArray} shape - array-like object containing a single element, the number of indexed elements
* @param {IntegerArray} strides - array-like object containing the stride lengths for the input and output arrays
* @param {Callback} fcn - ternary callback
* @returns {void}
*
* @example
* var add = require( '@stdlib/number-float64-base-add3' );
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var w = new Float64Array( x.length );
*
* var shape = [ x.length ];
* var strides = [ 1, 1, 1, 1 ];
*
* ternary( [ x, y, z, w ], shape, strides, add );
*
* console.log( w );
* // => <Float64Array>[ 3.0, 6.0, 9.0, 12.0, 15.0 ]
*/
function ternary( arrays, shape, strides, fcn ) {
	var offsets;
	var N;

	N = shape[ 0 ];
	offsets = [
		stride2offset( N, strides[ 0 ] ),
		stride2offset( N, strides[ 1 ] ),
		stride2offset( N, strides[ 2 ] ),
		stride2offset( N, strides[ 3 ] )
	];
	return ndarray( arrays, shape, strides, offsets, fcn );
}


// EXPORTS //

module.exports = ternary;
