# set_default

<a id="ansys.meshing.prime.SoiSizingParams.set_default"></a>

#### *static* SoiSizingParams.set_default(centers=None, radius=None, max=None, growth_rate=None)

Set the default values of the `SoiSizingParams` object.

* **Parameters:**

  **centers: Iterable[float], optional**
  : Centers of the spheres within which the size is limited to the specified max value.

  **radius: float, optional**
  : Radius of the sphere within which the size is limited to the specified max value.

  **max: float, optional**
  : Maximum size within the sphere.

  **growth_rate: float, optional**
  : The rate at which size grows outwards from the sphere boundary.

<!-- !! processed by numpydoc !! -->
