# get_volume_quality_summary

<a id="ansys.meshing.prime.VolumeSearch.get_volume_quality_summary"></a>

#### VolumeSearch.get_volume_quality_summary(params)

Gets the volume quality summary.

Diagnose volume quality for the given scope and cell quality measures provided in the VolumeQualitySummaryParams structure.
Use default quality limit if the parameters are not specified.

* **Parameters:**
  **params**
  : Volume quality summary parameters.
* **Returns:**
  :

  [`VolumeQualitySummaryResults`](ansys.meshing.prime.VolumeQualitySummaryResults.md#ansys.meshing.prime.VolumeQualitySummaryResults)
  : Returns the VolumeQualitySummaryResults.
* **Return type:**
  [`VolumeQualitySummaryResults`](ansys.meshing.prime.VolumeQualitySummaryResults.md#ansys.meshing.prime.VolumeQualitySummaryResults)

### Examples

```pycon
>>> vol_search = VolumeSearch(model=model)
>>> results = vol_search.get_volume_quality_summary(VolumeQualitySummaryParams(model=model))
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-volumesearch-get-volume-quality-summary"></a>

## Examples using VolumeSearch.get_volume_quality_summary

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
