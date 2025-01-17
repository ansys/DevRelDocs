# VolumeQualitySummaryResults

<a id="ansys.meshing.prime.VolumeQualitySummaryResults"></a>

### *class* ansys.meshing.prime.VolumeQualitySummaryResults(model=None, error_code=None, quality_results_part=None, message=None, json_data=None, \*\*kwargs)

Results of volume quality summary.

* **Parameters:**
  **model: Model**
  : Model to create a `VolumeQualitySummaryResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the volume quality summary.

  **quality_results_part: List[VolumeQualityResultsPart], optional**
  : Contains volume quality result per cell quality measure by parts specified in parameters.

  **message: str, optional**
  : Volume quality summary text.

  **json_data: dict, optional**
  : JSON dictionary to create a `VolumeQualitySummaryResults` object with provided parameters.

### Examples

```pycon
>>> volume_quality_summary_results = prime.VolumeQualitySummaryResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| Name | Description |
| [`VolumeQualitySummaryResults.print_default`](ansys.meshing.prime.VolumeQualitySummaryResults.print_default.md#ansys.meshing.prime.VolumeQualitySummaryResults.print_default)()   | Print the default values of `VolumeQualitySummaryResults` object.   |
| [`VolumeQualitySummaryResults.set_default`](ansys.meshing.prime.VolumeQualitySummaryResults.set_default.md#ansys.meshing.prime.VolumeQualitySummaryResults.set_default)([...])    | Set the default values of the `VolumeQualitySummaryResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Name | Description |
| [`VolumeQualitySummaryResults.error_code`](ansys.meshing.prime.VolumeQualitySummaryResults.error_code.md#ansys.meshing.prime.VolumeQualitySummaryResults.error_code)                               | Error code associated with the volume quality summary.                                    |
| [`VolumeQualitySummaryResults.message`](ansys.meshing.prime.VolumeQualitySummaryResults.message.md#ansys.meshing.prime.VolumeQualitySummaryResults.message)                                        | Volume quality summary text.                                                              |
| [`VolumeQualitySummaryResults.quality_results_part`](ansys.meshing.prime.VolumeQualitySummaryResults.quality_results_part.md#ansys.meshing.prime.VolumeQualitySummaryResults.quality_results_part) | Contains volume quality result per cell quality measure by parts specified in parameters. |

<a id="examples-using-volumequalitysummaryresults"></a>

## Examples using VolumeQualitySummaryResults

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
