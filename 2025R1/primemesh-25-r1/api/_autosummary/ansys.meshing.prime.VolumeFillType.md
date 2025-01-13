# VolumeFillType

<a id="ansys.meshing.prime.VolumeFillType"></a>

### *class* ansys.meshing.prime.VolumeFillType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Types of volume fill options.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`VolumeFillType.conjugate`](ansys.meshing.prime.VolumeFillType.conjugate.md#ansys.meshing.prime.VolumeFillType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`VolumeFillType.bit_length`](ansys.meshing.prime.VolumeFillType.bit_length.md#ansys.meshing.prime.VolumeFillType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`VolumeFillType.bit_count`](ansys.meshing.prime.VolumeFillType.bit_count.md#ansys.meshing.prime.VolumeFillType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`VolumeFillType.to_bytes`](ansys.meshing.prime.VolumeFillType.to_bytes.md#ansys.meshing.prime.VolumeFillType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`VolumeFillType.from_bytes`](ansys.meshing.prime.VolumeFillType.from_bytes.md#ansys.meshing.prime.VolumeFillType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`VolumeFillType.as_integer_ratio`](ansys.meshing.prime.VolumeFillType.as_integer_ratio.md#ansys.meshing.prime.VolumeFillType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`VolumeFillType.is_integer`](ansys.meshing.prime.VolumeFillType.is_integer.md#ansys.meshing.prime.VolumeFillType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`VolumeFillType.real`](ansys.meshing.prime.VolumeFillType.real.md#ansys.meshing.prime.VolumeFillType.real)                      | the real part of a complex number                                                       |
| [`VolumeFillType.imag`](ansys.meshing.prime.VolumeFillType.imag.md#ansys.meshing.prime.VolumeFillType.imag)                      | the imaginary part of a complex number                                                  |
| [`VolumeFillType.numerator`](ansys.meshing.prime.VolumeFillType.numerator.md#ansys.meshing.prime.VolumeFillType.numerator)       | the numerator of a rational number in lowest terms                                      |
| [`VolumeFillType.denominator`](ansys.meshing.prime.VolumeFillType.denominator.md#ansys.meshing.prime.VolumeFillType.denominator) | the denominator of a rational number in lowest terms                                    |
| [`VolumeFillType.TET`](ansys.meshing.prime.VolumeFillType.TET.md#ansys.meshing.prime.VolumeFillType.TET)                         | Volume fill using tetrahedral cells.                                                    |
| [`VolumeFillType.POLY`](ansys.meshing.prime.VolumeFillType.POLY.md#ansys.meshing.prime.VolumeFillType.POLY)                      | Volume fill using polyhedral cells.                                                     |
| [`VolumeFillType.HEXCORETET`](ansys.meshing.prime.VolumeFillType.HEXCORETET.md#ansys.meshing.prime.VolumeFillType.HEXCORETET)    | Volume fill using hexahedral cells in the core and tetrahedral cells near the boundary. |
| [`VolumeFillType.HEXCOREPOLY`](ansys.meshing.prime.VolumeFillType.HEXCOREPOLY.md#ansys.meshing.prime.VolumeFillType.HEXCOREPOLY) | Volume fill using hexahedral cells in the core and polyhedral cells near the boundary.  |

<a id="examples-using-volumefilltype"></a>

## Examples using VolumeFillType

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a mixing elbow for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Mesh a mixing elbow for a flow analysis</div>
</div>
* [Mesh a mixing elbow for a flow analysis](../../examples/gallery_examples/gallery/02_lucid_mixing_elbow.md#sphx-glr-examples-gallery-examples-gallery-02-lucid-mixing-elbow-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a pipe T-section for both structural thermal and fluid flow simulation.">  <div class="sphx-glr-thumbnail-title">Mesh a pipe T-section for structural thermal and fluid flow analysis</div>
</div>
* [Mesh a pipe T-section for structural thermal and fluid flow analysis](../../examples/gallery_examples/gallery/03_lucid_pipe_tee.md#sphx-glr-examples-gallery-examples-gallery-03-lucid-pipe-tee-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to create a contact patch for use with wrapping to avoid meshing into a narrow contact region between two objects.">  <div class="sphx-glr-thumbnail-title">Create a contact patch for wrapping between a wheel and ground interface</div>
</div>
* [Create a contact patch for wrapping between a wheel and ground interface](../../examples/gallery_examples/gallery/10_wheel_ground_contact_patch.md#sphx-glr-examples-gallery-examples-gallery-10-wheel-ground-contact-patch-py)

<div class="sphx-glr-thumbcontainer" tooltip="A block comment must be included at the top of any new example. Each example must have a reference tag in this format:">  <div class="sphx-glr-thumbnail-title">Add a new example</div>
</div>
* [Add a new example](../../examples/gallery_examples/misc/example_template.md#sphx-glr-examples-gallery-examples-misc-example-template-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
