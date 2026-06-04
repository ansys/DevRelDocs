# enable_optimizing_numpy_arrays

<a id="ansys.meshing.prime.enable_optimizing_numpy_arrays"></a>

### ansys.meshing.prime.enable_optimizing_numpy_arrays()

Enable optimizing numpy arrays over the wire.

This method allows the library to optimize serialization of numpy arrays
for faster deserialization. This can cause the data transferred
over the network to increase slightly unless the array is of a very
large size. Consider enabling this option to improve performance if
your workflow is not limited by network bandwidth for performance. The
default for optimization is always `True`.

<!-- !! processed by numpydoc !! -->
