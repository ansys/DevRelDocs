# CadFaceter

<a id="ansys.meshing.prime.CadFaceter"></a>

### *class* ansys.meshing.prime.CadFaceter(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Types of CAD faceter.

<!-- !! processed by numpydoc !! -->

### Methods

| [`CadFaceter.conjugate`](ansys.meshing.prime.CadFaceter.conjugate.md#ansys.meshing.prime.CadFaceter.conjugate)                                | Returns self, the complex conjugate of any int.                            |
|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`CadFaceter.bit_length`](ansys.meshing.prime.CadFaceter.bit_length.md#ansys.meshing.prime.CadFaceter.bit_length)(/)                          | Number of bits necessary to represent self in binary.                      |
| [`CadFaceter.bit_count`](ansys.meshing.prime.CadFaceter.bit_count.md#ansys.meshing.prime.CadFaceter.bit_count)(/)                             | Number of ones in the binary representation of the absolute value of self. |
| [`CadFaceter.to_bytes`](ansys.meshing.prime.CadFaceter.to_bytes.md#ansys.meshing.prime.CadFaceter.to_bytes)(/[, length, byteorder, ...])      | Return an array of bytes representing an integer.                          |
| [`CadFaceter.from_bytes`](ansys.meshing.prime.CadFaceter.from_bytes.md#ansys.meshing.prime.CadFaceter.from_bytes)(/, bytes[, byteorder, ...]) | Return the integer represented by the given array of bytes.                |
| [`CadFaceter.as_integer_ratio`](ansys.meshing.prime.CadFaceter.as_integer_ratio.md#ansys.meshing.prime.CadFaceter.as_integer_ratio)(/)        | Return a pair of integers, whose ratio is equal to the original int.       |
| [`CadFaceter.is_integer`](ansys.meshing.prime.CadFaceter.is_integer.md#ansys.meshing.prime.CadFaceter.is_integer)(/)                          | Returns True.                                                              |

### Attributes

| [`CadFaceter.real`](ansys.meshing.prime.CadFaceter.real.md#ansys.meshing.prime.CadFaceter.real)                      | the real part of a complex number                    |
|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`CadFaceter.imag`](ansys.meshing.prime.CadFaceter.imag.md#ansys.meshing.prime.CadFaceter.imag)                      | the imaginary part of a complex number               |
| [`CadFaceter.numerator`](ansys.meshing.prime.CadFaceter.numerator.md#ansys.meshing.prime.CadFaceter.numerator)       | the numerator of a rational number in lowest terms   |
| [`CadFaceter.denominator`](ansys.meshing.prime.CadFaceter.denominator.md#ansys.meshing.prime.CadFaceter.denominator) | the denominator of a rational number in lowest terms |
| [`CadFaceter.ACIS`](ansys.meshing.prime.CadFaceter.ACIS.md#ansys.meshing.prime.CadFaceter.ACIS)                      | Denotes CAD faceter is Acis.                         |
| [`CadFaceter.PARASOLID`](ansys.meshing.prime.CadFaceter.PARASOLID.md#ansys.meshing.prime.CadFaceter.PARASOLID)       | Denotes CAD faceter is Parasolid.                    |

<a id="examples-using-cadfaceter"></a>

## Examples using CadFaceter

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
