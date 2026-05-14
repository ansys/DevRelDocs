# VolumeQualityResultsPart

<a id="ansys.meshing.prime.VolumeQualityResultsPart"></a>

### *class* ansys.meshing.prime.VolumeQualityResultsPart(model=None, cell_quality_measure=None, measure_name=None, part_id=None, quality_limit=None, n_found=None, max_quality=None, min_quality=None, json_data=None, \*\*kwargs)

Result of volume quality of part.

* **Parameters:**

  **model: Model**
  : Model to create a `VolumeQualityResultsPart` object with default parameters.

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

  **json_data: dict, optional**
  : JSON dictionary to create a `VolumeQualityResultsPart` object with provided parameters.

### Examples

```pycon
>>> volume_quality_results_part = prime.VolumeQualityResultsPart(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`VolumeQualityResultsPart.print_default`](ansys.meshing.prime.VolumeQualityResultsPart.print_default.md#ansys.meshing.prime.VolumeQualityResultsPart.print_default)()   | Print the default values of `VolumeQualityResultsPart` object.   |
| [`VolumeQualityResultsPart.set_default`](ansys.meshing.prime.VolumeQualityResultsPart.set_default.md#ansys.meshing.prime.VolumeQualityResultsPart.set_default)([...])    | Set the default values of the `VolumeQualityResultsPart` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [`VolumeQualityResultsPart.cell_quality_measure`](ansys.meshing.prime.VolumeQualityResultsPart.cell_quality_measure.md#ansys.meshing.prime.VolumeQualityResultsPart.cell_quality_measure)   | Type of the cell quality measure.             |
| [`VolumeQualityResultsPart.max_quality`](ansys.meshing.prime.VolumeQualityResultsPart.max_quality.md#ansys.meshing.prime.VolumeQualityResultsPart.max_quality)                              | Maximum value of quality measure.             |
| [`VolumeQualityResultsPart.measure_name`](ansys.meshing.prime.VolumeQualityResultsPart.measure_name.md#ansys.meshing.prime.VolumeQualityResultsPart.measure_name)                           | Name of the cell quality measure.             |
| [`VolumeQualityResultsPart.min_quality`](ansys.meshing.prime.VolumeQualityResultsPart.min_quality.md#ansys.meshing.prime.VolumeQualityResultsPart.min_quality)                              | Minimum value of quality measure.             |
| [`VolumeQualityResultsPart.n_found`](ansys.meshing.prime.VolumeQualityResultsPart.n_found.md#ansys.meshing.prime.VolumeQualityResultsPart.n_found)                                          | Number of failed cells.                       |
| [`VolumeQualityResultsPart.part_id`](ansys.meshing.prime.VolumeQualityResultsPart.part_id.md#ansys.meshing.prime.VolumeQualityResultsPart.part_id)                                          | Id of the part for which quality is computed. |
| [`VolumeQualityResultsPart.quality_limit`](ansys.meshing.prime.VolumeQualityResultsPart.quality_limit.md#ansys.meshing.prime.VolumeQualityResultsPart.quality_limit)                        | Target quality limit used to find failures.   |
<!-- vale on -->