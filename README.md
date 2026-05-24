<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Ternary

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a ternary callback to strided input array elements and assign results to elements in a strided output array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
ternary = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-ternary@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ternary = require( 'path/to/vendor/umd/strided-base-ternary/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-ternary@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ternary;
})();
</script>
```

#### ternary( arrays, shape, strides, fcn )

Applies a ternary callback to strided input array elements and assigns results to elements in a strided output array.

```javascript
var add = require( '@stdlib/number-float64-base-add3' );
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ternary( [ x, y, z, w ], [ x.length ], [ 1, 1, 1, 1 ], add );
// w => <Float64Array>[ 3.0, 6.0, 9.0, 12.0, 15.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing three strided input arrays and one strided output array.
-   **shape**: array-like object containing a single element, the number of indexed elements.
-   **strides**: array-like object containing the stride lengths for the strided input and output arrays.
-   **fcn**: ternary function to apply.

The `shape` and `strides` parameters determine which elements in the strided input and output arrays are accessed at runtime. For example, to index every other value in the strided input arrays and to index the first `N` elements of the strided output array in reverse order,

```javascript
var add = require( '@stdlib/number-float64-base-add3' );
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ternary( [ x, y, z, w ], [ 3 ], [ 2, 2, 2, -1 ], add );
// w => <Float64Array>[ 15.0, 9.0, 3.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var add = require( '@stdlib/number-float64-base-add3' );
var Float64Array = require( '@stdlib/array-float64' );

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var w0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var w1 = new Float64Array( w0.buffer, w0.BYTES_PER_ELEMENT*3 ); // start at 4th element

ternary( [ x1, y1, z1, w1 ], [ 3 ], [ -2, -2, -2, 1 ], add );
// w0 => <Float64Array>[ 0.0, 0.0, 0.0, 18.0, 12.0, 6.0 ]
```

#### ternary.ndarray( arrays, shape, strides, offsets, fcn )

Applies a ternary callback to strided input array elements and assigns results to elements in a strided output array using alternative indexing semantics.

<!-- eslint-disable max-len -->

```javascript
var add = require( '@stdlib/number-float64-base-add3' );
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ternary.ndarray( [ x, y, z, w ], [ x.length ], [ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ], add );
// w => <Float64Array>[ 3.0, 6.0, 9.0, 12.0, 15.0 ]
```

The function accepts the following additional arguments:

-   **offsets**: array-like object containing the starting indices (i.e., index offsets) for the strided input and output arrays.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsets` parameter supports indexing semantics based on starting indices. For example, to index every other value in the strided input arrays starting from the second value and to index the last `N` elements in the strided output array,

<!-- eslint-disable max-len -->

```javascript
var add = require( '@stdlib/number-float64-base-add3' );
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ternary.ndarray( [ x, y, z, w ], [ 3 ], [ 2, 2, 2, -1 ], [ 1, 1, 1, w.length-1 ], add );
// w => <Float64Array>[ 0.0, 0.0, 0.0, 18.0, 12.0, 6.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript">
(function () {.factory;
var filledarray = require( '@stdlib/array-filled' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var add = require( '@stdlib/number-float64-base-add3' );
var ternary = require( '@stdlib/strided-base-ternary' );

var N = 10;

var x = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( y );

var z = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( z );

var w = filledarray( 0.0, N, 'generic' );
console.log( w );

var shape = [ N ];
var strides = [ 1, 1, 1, -1 ];
var offsets = [ 0, 0, 0, N-1 ];

ternary.ndarray( [ x, y, z, w ], shape, strides, offsets, add );
console.log( w );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/strided-base/binary`][@stdlib/strided/base/binary]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in strided input arrays and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/nullary`][@stdlib/strided/base/nullary]</span><span class="delimiter">: </span><span class="description">apply a nullary callback and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/quaternary`][@stdlib/strided/base/quaternary]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to strided input array elements and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/quinary`][@stdlib/strided/base/quinary]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to strided input array elements and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/unary`][@stdlib/strided/base/unary]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a strided input array and assign results to elements in a strided output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-ternary.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-ternary

[test-image]: https://github.com/stdlib-js/strided-base-ternary/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/strided-base-ternary/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-ternary/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-ternary?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-ternary.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-ternary/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-ternary/tree/deno
[deno-readme]: https://github.com/stdlib-js/strided-base-ternary/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/strided-base-ternary/tree/umd
[umd-readme]: https://github.com/stdlib-js/strided-base-ternary/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/strided-base-ternary/tree/esm
[esm-readme]: https://github.com/stdlib-js/strided-base-ternary/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/strided-base-ternary/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-ternary/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/strided/base/binary]: https://github.com/stdlib-js/strided-base-binary/tree/umd

[@stdlib/strided/base/nullary]: https://github.com/stdlib-js/strided-base-nullary/tree/umd

[@stdlib/strided/base/quaternary]: https://github.com/stdlib-js/strided-base-quaternary/tree/umd

[@stdlib/strided/base/quinary]: https://github.com/stdlib-js/strided-base-quinary/tree/umd

[@stdlib/strided/base/unary]: https://github.com/stdlib-js/strided-base-unary/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
