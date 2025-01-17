# ScopeEntity

<a id="ansys.meshing.prime.ScopeEntity"></a>

### *class* ansys.meshing.prime.ScopeEntity(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

ScopeDefinition uses entity type to scope entities.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| Name | Description |
| [`ScopeEntity.conjugate`](ansys.meshing.prime.ScopeEntity.conjugate.md#ansys.meshing.prime.ScopeEntity.conjugate)                           | Returns self, the complex conjugate of any int.                            |
| [`ScopeEntity.bit_length`](ansys.meshing.prime.ScopeEntity.bit_length.md#ansys.meshing.prime.ScopeEntity.bit_length)(/)                     | Number of bits necessary to represent self in binary.                      |
| [`ScopeEntity.bit_count`](ansys.meshing.prime.ScopeEntity.bit_count.md#ansys.meshing.prime.ScopeEntity.bit_count)(/)                        | Number of ones in the binary representation of the absolute value of self. |
| [`ScopeEntity.to_bytes`](ansys.meshing.prime.ScopeEntity.to_bytes.md#ansys.meshing.prime.ScopeEntity.to_bytes)(/[, length, byteorder, ...]) | Return an array of bytes representing an integer.                          |
| [`ScopeEntity.from_bytes`](ansys.meshing.prime.ScopeEntity.from_bytes.md#ansys.meshing.prime.ScopeEntity.from_bytes)(/, bytes[, ...])       | Return the integer represented by the given array of bytes.                |
| [`ScopeEntity.as_integer_ratio`](ansys.meshing.prime.ScopeEntity.as_integer_ratio.md#ansys.meshing.prime.ScopeEntity.as_integer_ratio)(/)   | Return a pair of integers, whose ratio is equal to the original int.       |
| [`ScopeEntity.is_integer`](ansys.meshing.prime.ScopeEntity.is_integer.md#ansys.meshing.prime.ScopeEntity.is_integer)(/)                     | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Name | Description |
| [`ScopeEntity.real`](ansys.meshing.prime.ScopeEntity.real.md#ansys.meshing.prime.ScopeEntity.real)                                              | the real part of a complex number                    |
| [`ScopeEntity.imag`](ansys.meshing.prime.ScopeEntity.imag.md#ansys.meshing.prime.ScopeEntity.imag)                                              | the imaginary part of a complex number               |
| [`ScopeEntity.numerator`](ansys.meshing.prime.ScopeEntity.numerator.md#ansys.meshing.prime.ScopeEntity.numerator)                               | the numerator of a rational number in lowest terms   |
| [`ScopeEntity.denominator`](ansys.meshing.prime.ScopeEntity.denominator.md#ansys.meshing.prime.ScopeEntity.denominator)                         | the denominator of a rational number in lowest terms |
| [`ScopeEntity.FACEZONELETS`](ansys.meshing.prime.ScopeEntity.FACEZONELETS.md#ansys.meshing.prime.ScopeEntity.FACEZONELETS)                      | Evaluate scope to get the face zonelets.             |
| [`ScopeEntity.EDGEZONELETS`](ansys.meshing.prime.ScopeEntity.EDGEZONELETS.md#ansys.meshing.prime.ScopeEntity.EDGEZONELETS)                      | Evaluate scope to get the edge zonelets.             |
| [`ScopeEntity.FACEANDEDGEZONELETS`](ansys.meshing.prime.ScopeEntity.FACEANDEDGEZONELETS.md#ansys.meshing.prime.ScopeEntity.FACEANDEDGEZONELETS) | Evaluate scope to get face and edge zonelets.        |
| [`ScopeEntity.VOLUME`](ansys.meshing.prime.ScopeEntity.VOLUME.md#ansys.meshing.prime.ScopeEntity.VOLUME)                                        | Evaluate scope to get volumes.                       |

<a id="examples-using-scopeentity"></a>

## Examples using ScopeEntity

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
