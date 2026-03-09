# SweepType

<a id="ansys.meshing.prime.SweepType"></a>

### *class* ansys.meshing.prime.SweepType(value, names=None, \*values, module=None, qualname=None, type=None, start=1, boundary=None)

Provides the Sweep Mesh Decomposition type.

<!-- !! processed by numpydoc !! -->


### Attributes

| Name | Description |
| [`SweepType.THINSWEEP`](ansys.meshing.prime.SweepType.THINSWEEP.md#ansys.meshing.prime.SweepType.THINSWEEP)                         | Creates swept blocks on thin wall geometries.                                                       |
| [`SweepType.STANDARD`](ansys.meshing.prime.SweepType.STANDARD.md#ansys.meshing.prime.SweepType.STANDARD)                            | Multizone create mapped and swept blocks if possible (should be default).                           |
| [`SweepType.MEDIALAXIS`](ansys.meshing.prime.SweepType.MEDIALAXIS.md#ansys.meshing.prime.SweepType.MEDIALAXIS)                      | Creates swept blocks on axisymmetric sweepable geometries.                                          |
| [`SweepType.PROGRAMCONTROLLED`](ansys.meshing.prime.SweepType.PROGRAMCONTROLLED.md#ansys.meshing.prime.SweepType.PROGRAMCONTROLLED) | Multizone chooses the best decomposition method based on geometry analysis and decomposition tries. |
<!-- vale on -->