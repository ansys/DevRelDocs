# FuseOption

<a id="ansys.meshing.prime.FuseOption"></a>

### *class* ansys.meshing.prime.FuseOption(value)

Type to specify treatment of surfaces for fusing.

<!-- !! processed by numpydoc !! -->

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [`FuseOption.NONE`](ansys.meshing.prime.FuseOption.NONE.md#ansys.meshing.prime.FuseOption.NONE)                         | No action to be taken for surfaces being fused.                                                                           |
| [`FuseOption.TRIMONESIDE`](ansys.meshing.prime.FuseOption.TRIMONESIDE.md#ansys.meshing.prime.FuseOption.TRIMONESIDE)    | Delete faces to be fused on one side and merge nodes to be fused at middle locations (works only within a single part).   |
| [`FuseOption.TRIMTWOSIDES`](ansys.meshing.prime.FuseOption.TRIMTWOSIDES.md#ansys.meshing.prime.FuseOption.TRIMTWOSIDES) | Delete faces to be fused on both sides and merge nodes to be fused at middle locations (works only within a single part). |
<!-- vale on -->