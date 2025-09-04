# disable_optimizing_numpy_arrays

<a id="ansys.meshing.prime.disable_optimizing_numpy_arrays"></a>

### ansys.meshing.prime.disable_optimizing_numpy_arrays()

Disable optimizing numpy arrays over the wire.

This method disables serialization optimization for numpy arrays when
sending them over the wire. Typically, this is needed in case the
performance is limited by a saturated network. Disabling this flag
can provide some benefit for data transferred over the wire for
most arrays. The default for optimization is always `True`.

<!-- !! processed by numpydoc !! -->
