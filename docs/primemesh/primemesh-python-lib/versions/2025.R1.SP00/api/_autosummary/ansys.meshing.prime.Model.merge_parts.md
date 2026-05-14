# merge_parts

<a id="ansys.meshing.prime.Model.merge_parts"></a>

#### Model.merge_parts(part_ids, params)

Merge multiple parts into a single part.

* **Parameters:**

  **part_ids**
  : IDs of the parts to merge.

  **params**
  : Parameters for merging parts.

* **Returns:**

  [`MergePartsResults`](ansys.meshing.prime.MergePartsResults.md#ansys.meshing.prime.MergePartsResults)
  : Results for merging the parts into a single part.

* **Return type:**

  [`MergePartsResults`](ansys.meshing.prime.MergePartsResults.md#ansys.meshing.prime.MergePartsResults)

### Examples

```pycon
>>> params = prime.MergePartsParams(model = model)
>>> results = model.merge_parts(part_ids, params)
```

<!-- !! processed by numpydoc !! -->


