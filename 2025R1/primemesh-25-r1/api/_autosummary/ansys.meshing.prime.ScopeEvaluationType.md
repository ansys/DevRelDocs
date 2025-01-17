# ScopeEvaluationType

<a id="ansys.meshing.prime.ScopeEvaluationType"></a>

### *class* ansys.meshing.prime.ScopeEvaluationType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

ScopeDefinition uses evaluation type to evaluate the scope.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Name | Description |
| [`ScopeEvaluationType.conjugate`](ansys.meshing.prime.ScopeEvaluationType.conjugate.md#ansys.meshing.prime.ScopeEvaluationType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`ScopeEvaluationType.bit_length`](ansys.meshing.prime.ScopeEvaluationType.bit_length.md#ansys.meshing.prime.ScopeEvaluationType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`ScopeEvaluationType.bit_count`](ansys.meshing.prime.ScopeEvaluationType.bit_count.md#ansys.meshing.prime.ScopeEvaluationType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`ScopeEvaluationType.to_bytes`](ansys.meshing.prime.ScopeEvaluationType.to_bytes.md#ansys.meshing.prime.ScopeEvaluationType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`ScopeEvaluationType.from_bytes`](ansys.meshing.prime.ScopeEvaluationType.from_bytes.md#ansys.meshing.prime.ScopeEvaluationType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`ScopeEvaluationType.as_integer_ratio`](ansys.meshing.prime.ScopeEvaluationType.as_integer_ratio.md#ansys.meshing.prime.ScopeEvaluationType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`ScopeEvaluationType.is_integer`](ansys.meshing.prime.ScopeEvaluationType.is_integer.md#ansys.meshing.prime.ScopeEvaluationType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Name | Description |
| [`ScopeEvaluationType.real`](ansys.meshing.prime.ScopeEvaluationType.real.md#ansys.meshing.prime.ScopeEvaluationType.real)                      | the real part of a complex number                    |
| [`ScopeEvaluationType.imag`](ansys.meshing.prime.ScopeEvaluationType.imag.md#ansys.meshing.prime.ScopeEvaluationType.imag)                      | the imaginary part of a complex number               |
| [`ScopeEvaluationType.numerator`](ansys.meshing.prime.ScopeEvaluationType.numerator.md#ansys.meshing.prime.ScopeEvaluationType.numerator)       | the numerator of a rational number in lowest terms   |
| [`ScopeEvaluationType.denominator`](ansys.meshing.prime.ScopeEvaluationType.denominator.md#ansys.meshing.prime.ScopeEvaluationType.denominator) | the denominator of a rational number in lowest terms |
| [`ScopeEvaluationType.LABELS`](ansys.meshing.prime.ScopeEvaluationType.LABELS.md#ansys.meshing.prime.ScopeEvaluationType.LABELS)                | Use labels to evaluate the scope.                    |
| [`ScopeEvaluationType.ZONES`](ansys.meshing.prime.ScopeEvaluationType.ZONES.md#ansys.meshing.prime.ScopeEvaluationType.ZONES)                   | Use zones to evaluate the scope.                     |

<a id="examples-using-scopeevaluationtype"></a>

## Examples using ScopeEvaluationType

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example shows how mesh and geometry formats are converted during import and export.">  <div class="sphx-glr-thumbnail-title">Convert data when importing and exporting mesh and CAD formats</div>
</div>
* [Convert data when importing and exporting mesh and CAD formats](../../examples/gallery_examples/gallery/00_lucid_file_IO.md#sphx-glr-examples-gallery-examples-gallery-00-lucid-file-io-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a printed circuit board with mainly hexahedral elements for structural thermal simulation using the volume sweeper.">  <div class="sphx-glr-thumbnail-title">Mesh a PCB for structural thermal analysis</div>
</div>
* [Mesh a PCB for structural thermal analysis](../../examples/gallery_examples/gallery/05_pcb_stacker.md#sphx-glr-examples-gallery-examples-gallery-05-pcb-stacker-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
