<!-- vale off -->

# HardSizingParams

### *class* ansys.meshing.prime.HardSizingParams(model=None, min=None, growth_rate=None, json_data=None, \*\*kwargs)

Size field computed using hard size control enables you to maintain a uniform size based on the size specified.

The hard sizing will override any other specified size.

<!-- !! processed by numpydoc !! -->

### Methods

| [`HardSizingParams.print_default`](ansys.meshing.prime.HardSizingParams.print_default.md#ansys.meshing.prime.HardSizingParams.print_default)()             | Print the default values of HardSizingParams.   |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| [`HardSizingParams.set_default`](ansys.meshing.prime.HardSizingParams.set_default.md#ansys.meshing.prime.HardSizingParams.set_default)([min, growth_rate]) | Set the default values of HardSizingParams.     |

### Attributes

| [`HardSizingParams.growth_rate`](ansys.meshing.prime.HardSizingParams.growth_rate.md#ansys.meshing.prime.HardSizingParams.growth_rate)   | Growth rate used for transitioning from one element size to neighbor element size.   |
|------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`HardSizingParams.min`](ansys.meshing.prime.HardSizingParams.min.md#ansys.meshing.prime.HardSizingParams.min)                           | Minimum size used for computing edge and face size using hard size control.          |
<!-- vale on -->
