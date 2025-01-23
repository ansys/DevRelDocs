# ExtractedFeatureIds

<a id="ansys.meshing.prime.ExtractedFeatureIds"></a>

### *class* ansys.meshing.prime.ExtractedFeatureIds(model=None, part_id=None, new_edge_zonelets=None, json_data=None, \*\*kwargs)

Contains ids of the features extracted.

* **Parameters:**

  **model: Model**
  : Model to create a `ExtractedFeatureIds` object with default parameters.

  **part_id: int, optional**
  : Id of the part from which edge zonelets are extracted.

  **new_edge_zonelets: Iterable[int], optional**
  : Ids of new edge zonelets extracted.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExtractedFeatureIds` object with provided parameters.

### Examples

```pycon
>>> extracted_feature_ids = prime.ExtractedFeatureIds(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`ExtractedFeatureIds.print_default`](ansys.meshing.prime.ExtractedFeatureIds.print_default.md#ansys.meshing.prime.ExtractedFeatureIds.print_default)()         | Print the default values of `ExtractedFeatureIds` object.   |
| [`ExtractedFeatureIds.set_default`](ansys.meshing.prime.ExtractedFeatureIds.set_default.md#ansys.meshing.prime.ExtractedFeatureIds.set_default)([part_id, ...]) | Set the default values of the `ExtractedFeatureIds` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`ExtractedFeatureIds.new_edge_zonelets`](ansys.meshing.prime.ExtractedFeatureIds.new_edge_zonelets.md#ansys.meshing.prime.ExtractedFeatureIds.new_edge_zonelets)   | Ids of new edge zonelets extracted.                    |
| [`ExtractedFeatureIds.part_id`](ansys.meshing.prime.ExtractedFeatureIds.part_id.md#ansys.meshing.prime.ExtractedFeatureIds.part_id)                                 | Id of the part from which edge zonelets are extracted. |
<!-- vale on -->