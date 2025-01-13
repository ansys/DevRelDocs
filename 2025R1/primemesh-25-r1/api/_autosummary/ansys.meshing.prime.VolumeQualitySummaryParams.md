# VolumeQualitySummaryParams

<a id="ansys.meshing.prime.VolumeQualitySummaryParams"></a>

### *class* ansys.meshing.prime.VolumeQualitySummaryParams(model=None, cell_quality_measures=None, scope=None, quality_limit=None, json_data=None, \*\*kwargs)

Parameters to control volume quality summary results.

* **Parameters:**
  **model: Model**
  : Model to create a `VolumeQualitySummaryParams` object with default parameters.

  **cell_quality_measures: List[CellQualityMeasure], optional**
  : List of cell quality measures for volume quality diagnostics.

  **scope: ScopeDefinition, optional**
  : Scope of the cell zonelets for volume quality diagnostics.

  **quality_limit: Iterable[float], optional**
  : Quality limit per cell quality measure. If the quality limit is not specified, the default quality limit is used.

  **json_data: dict, optional**
  : JSON dictionary to create a `VolumeQualitySummaryParams` object with provided parameters.

### Examples

```pycon
>>> volume_quality_summary_params = prime.VolumeQualitySummaryParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`VolumeQualitySummaryParams.print_default`](ansys.meshing.prime.VolumeQualitySummaryParams.print_default.md#ansys.meshing.prime.VolumeQualitySummaryParams.print_default)()   | Print the default values of `VolumeQualitySummaryParams` object.   |
| [`VolumeQualitySummaryParams.set_default`](ansys.meshing.prime.VolumeQualitySummaryParams.set_default.md#ansys.meshing.prime.VolumeQualitySummaryParams.set_default)([...])    | Set the default values of the `VolumeQualitySummaryParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`VolumeQualitySummaryParams.cell_quality_measures`](ansys.meshing.prime.VolumeQualitySummaryParams.cell_quality_measures.md#ansys.meshing.prime.VolumeQualitySummaryParams.cell_quality_measures)   | List of cell quality measures for volume quality diagnostics.   |
| [`VolumeQualitySummaryParams.quality_limit`](ansys.meshing.prime.VolumeQualitySummaryParams.quality_limit.md#ansys.meshing.prime.VolumeQualitySummaryParams.quality_limit)                           | Quality limit per cell quality measure.                         |
| [`VolumeQualitySummaryParams.scope`](ansys.meshing.prime.VolumeQualitySummaryParams.scope.md#ansys.meshing.prime.VolumeQualitySummaryParams.scope)                                                   | Scope of the cell zonelets for volume quality diagnostics.      |

<a id="examples-using-volumequalitysummaryparams"></a>

## Examples using VolumeQualitySummaryParams

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a mixing elbow for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Mesh a mixing elbow for a flow analysis</div>
</div>
* [Mesh a mixing elbow for a flow analysis](../../examples/gallery_examples/gallery/02_lucid_mixing_elbow.md#sphx-glr-examples-gallery-examples-gallery-02-lucid-mixing-elbow-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
