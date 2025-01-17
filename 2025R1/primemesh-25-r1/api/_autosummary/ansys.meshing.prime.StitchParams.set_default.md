# set_default

<a id="ansys.meshing.prime.StitchParams.set_default"></a>

#### *static* StitchParams.set_default(tolerance=None, use_absolute_tolerance=None, remesh=None, enable_multi_threading=None, type=None)

Set the default values of the `StitchParams` object.

* **Parameters:**

  **tolerance: float, optional**
  : Distance tolerance for stitching boundaries.

  **use_absolute_tolerance: bool, optional**
  : True if tolerance provided is absolute value.

  **remesh: bool, optional**
  : Remesh at stitch connection.

  **enable_multi_threading: bool, optional**
  : Option to run stitch in parallel using multithread.

  **type: StitchType, optional**
  : Stitch type depending on nature of surface boundary edges to be stitched.

<!-- !! processed by numpydoc !! -->
