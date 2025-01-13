# MatchPairTargetType

<a id="ansys.meshing.prime.MatchPairTargetType"></a>

### *class* ansys.meshing.prime.MatchPairTargetType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Match morph target type.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`MatchPairTargetType.conjugate`](ansys.meshing.prime.MatchPairTargetType.conjugate.md#ansys.meshing.prime.MatchPairTargetType.conjugate)                         | Returns self, the complex conjugate of any int.                            |
| [`MatchPairTargetType.bit_length`](ansys.meshing.prime.MatchPairTargetType.bit_length.md#ansys.meshing.prime.MatchPairTargetType.bit_length)(/)                   | Number of bits necessary to represent self in binary.                      |
| [`MatchPairTargetType.bit_count`](ansys.meshing.prime.MatchPairTargetType.bit_count.md#ansys.meshing.prime.MatchPairTargetType.bit_count)(/)                      | Number of ones in the binary representation of the absolute value of self. |
| [`MatchPairTargetType.to_bytes`](ansys.meshing.prime.MatchPairTargetType.to_bytes.md#ansys.meshing.prime.MatchPairTargetType.to_bytes)(/[, length, ...])          | Return an array of bytes representing an integer.                          |
| [`MatchPairTargetType.from_bytes`](ansys.meshing.prime.MatchPairTargetType.from_bytes.md#ansys.meshing.prime.MatchPairTargetType.from_bytes)(/, bytes[, ...])     | Return the integer represented by the given array of bytes.                |
| [`MatchPairTargetType.as_integer_ratio`](ansys.meshing.prime.MatchPairTargetType.as_integer_ratio.md#ansys.meshing.prime.MatchPairTargetType.as_integer_ratio)(/) | Return a pair of integers, whose ratio is equal to the original int.       |
| [`MatchPairTargetType.is_integer`](ansys.meshing.prime.MatchPairTargetType.is_integer.md#ansys.meshing.prime.MatchPairTargetType.is_integer)(/)                   | Returns True.                                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`MatchPairTargetType.real`](ansys.meshing.prime.MatchPairTargetType.real.md#ansys.meshing.prime.MatchPairTargetType.real)                      | the real part of a complex number                    |
| [`MatchPairTargetType.imag`](ansys.meshing.prime.MatchPairTargetType.imag.md#ansys.meshing.prime.MatchPairTargetType.imag)                      | the imaginary part of a complex number               |
| [`MatchPairTargetType.numerator`](ansys.meshing.prime.MatchPairTargetType.numerator.md#ansys.meshing.prime.MatchPairTargetType.numerator)       | the numerator of a rational number in lowest terms   |
| [`MatchPairTargetType.denominator`](ansys.meshing.prime.MatchPairTargetType.denominator.md#ansys.meshing.prime.MatchPairTargetType.denominator) | the denominator of a rational number in lowest terms |
| [`MatchPairTargetType.FACEZONELET`](ansys.meshing.prime.MatchPairTargetType.FACEZONELET.md#ansys.meshing.prime.MatchPairTargetType.FACEZONELET) | Option to specify face zonelet as target.            |
| [`MatchPairTargetType.TOPOFACE`](ansys.meshing.prime.MatchPairTargetType.TOPOFACE.md#ansys.meshing.prime.MatchPairTargetType.TOPOFACE)          | Option to specify topoface as target.                |

<a id="examples-using-matchpairtargettype"></a>

## Examples using MatchPairTargetType

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to morph a structural hexahedral mesh of a turbine blade to a new deformed shape defined by a target geometry file.">  <div class="sphx-glr-thumbnail-title">Morph a hexahedral mesh of a turbine blade to a new shape</div>
</div>
* [Morph a hexahedral mesh of a turbine blade to a new shape](../../examples/gallery_examples/gallery/06_blade_morph.md#sphx-glr-examples-gallery-examples-gallery-06-blade-morph-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
