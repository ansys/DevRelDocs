# set_default

<a id="ansys.meshing.prime.VolumeQualityResultsPart.set_default"></a>

#### *static* VolumeQualityResultsPart.set_default(cell_quality_measure=None, measure_name=None, part_id=None, quality_limit=None, n_found=None, max_quality=None, min_quality=None)

Set the default values of the `VolumeQualityResultsPart` object.

* **Parameters:**

  **cell_quality_measure: CellQualityMeasure, optional**
  : Type of the cell quality measure.

  **measure_name: str, optional**
  : Name of the cell quality measure.

  **part_id: int, optional**
  : Id of the part for which quality is computed.

  **quality_limit: float, optional**
  : Target quality limit used to find failures.

  **n_found: int, optional**
  : Number of failed cells.

  **max_quality: float, optional**
  : Maximum value of quality measure.

  **min_quality: float, optional**
  : Minimum value of quality measure.

<!-- !! processed by numpydoc !! -->
