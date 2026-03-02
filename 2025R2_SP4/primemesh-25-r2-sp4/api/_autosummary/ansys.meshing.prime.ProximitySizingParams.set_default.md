# set_default

<a id="ansys.meshing.prime.ProximitySizingParams.set_default"></a>

#### *static* ProximitySizingParams.set_default(min=None, max=None, growth_rate=None, elements_per_gap=None, ignore_self_proximity=None, ignore_orientation=None)

Set the default values of the `ProximitySizingParams` object.

* **Parameters:**

  **min: float, optional**
  : Minimum size used for computing edge and face size using proximity size control.

  **max: float, optional**
  : Maximum size used for computing edge and face size using proximity size control.

  **growth_rate: float, optional**
  : Growth rate used for transitioning from one element size to neighbor element size.

  **elements_per_gap: float, optional**
  : The number of elements per gap can be a real value.  This has the effect of stretching face elements with larger sizes along side faces,  or gaps, thereby reducing the overall face count, and ultimately the cell count.

  **ignore_self_proximity: bool, optional**
  : Ignore proximity within zonelets.

  **ignore_orientation: bool, optional**
  : The ignore orientation option can be used to ignore the face normal orientation during the proximity calculation. The default is false.

<!-- !! processed by numpydoc !! -->
