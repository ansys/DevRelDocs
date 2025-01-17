# WrapRegion

<a id="ansys.meshing.prime.WrapRegion"></a>

### *class* ansys.meshing.prime.WrapRegion(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Indicates source type to extract wrapper region.

<!-- !! processed by numpydoc !! -->

### Methods

| [`WrapRegion.conjugate`](ansys.meshing.prime.WrapRegion.conjugate.md#ansys.meshing.prime.WrapRegion.conjugate)                                | Returns self, the complex conjugate of any int.                            |
|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`WrapRegion.bit_length`](ansys.meshing.prime.WrapRegion.bit_length.md#ansys.meshing.prime.WrapRegion.bit_length)(/)                          | Number of bits necessary to represent self in binary.                      |
| [`WrapRegion.bit_count`](ansys.meshing.prime.WrapRegion.bit_count.md#ansys.meshing.prime.WrapRegion.bit_count)(/)                             | Number of ones in the binary representation of the absolute value of self. |
| [`WrapRegion.to_bytes`](ansys.meshing.prime.WrapRegion.to_bytes.md#ansys.meshing.prime.WrapRegion.to_bytes)(/[, length, byteorder, ...])      | Return an array of bytes representing an integer.                          |
| [`WrapRegion.from_bytes`](ansys.meshing.prime.WrapRegion.from_bytes.md#ansys.meshing.prime.WrapRegion.from_bytes)(/, bytes[, byteorder, ...]) | Return the integer represented by the given array of bytes.                |
| [`WrapRegion.as_integer_ratio`](ansys.meshing.prime.WrapRegion.as_integer_ratio.md#ansys.meshing.prime.WrapRegion.as_integer_ratio)(/)        | Return a pair of integers, whose ratio is equal to the original int.       |
| [`WrapRegion.is_integer`](ansys.meshing.prime.WrapRegion.is_integer.md#ansys.meshing.prime.WrapRegion.is_integer)(/)                          | Returns True.                                                              |

### Attributes

| [`WrapRegion.real`](ansys.meshing.prime.WrapRegion.real.md#ansys.meshing.prime.WrapRegion.real)                                  | the real part of a complex number                             |
|----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`WrapRegion.imag`](ansys.meshing.prime.WrapRegion.imag.md#ansys.meshing.prime.WrapRegion.imag)                                  | the imaginary part of a complex number                        |
| [`WrapRegion.numerator`](ansys.meshing.prime.WrapRegion.numerator.md#ansys.meshing.prime.WrapRegion.numerator)                   | the numerator of a rational number in lowest terms            |
| [`WrapRegion.denominator`](ansys.meshing.prime.WrapRegion.denominator.md#ansys.meshing.prime.WrapRegion.denominator)             | the denominator of a rational number in lowest terms          |
| [`WrapRegion.MATERIALPOINT`](ansys.meshing.prime.WrapRegion.MATERIALPOINT.md#ansys.meshing.prime.WrapRegion.MATERIALPOINT)       | Option to use live material points to extract wrapper region. |
| [`WrapRegion.EXTERNAL`](ansys.meshing.prime.WrapRegion.EXTERNAL.md#ansys.meshing.prime.WrapRegion.EXTERNAL)                      | Option to extract exterior wrapper region.                    |
| [`WrapRegion.LARGESTINTERNAL`](ansys.meshing.prime.WrapRegion.LARGESTINTERNAL.md#ansys.meshing.prime.WrapRegion.LARGESTINTERNAL) | Option to extract largest internal wrapper region.            |

<a id="examples-using-wrapregion"></a>

## Examples using WrapRegion

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a pipe T-section for both structural thermal and fluid flow simulation.">  <div class="sphx-glr-thumbnail-title">Mesh a pipe T-section for structural thermal and fluid flow analysis</div>
</div>
* [Mesh a pipe T-section for structural thermal and fluid flow analysis](../../examples/gallery_examples/gallery/03_lucid_pipe_tee.md#sphx-glr-examples-gallery-examples-gallery-03-lucid-pipe-tee-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to create a contact patch for use with wrapping to avoid meshing into a narrow contact region between two objects.">  <div class="sphx-glr-thumbnail-title">Create a contact patch for wrapping between a wheel and ground interface</div>
</div>
* [Create a contact patch for wrapping between a wheel and ground interface](../../examples/gallery_examples/gallery/10_wheel_ground_contact_patch.md#sphx-glr-examples-gallery-examples-gallery-10-wheel-ground-contact-patch-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
