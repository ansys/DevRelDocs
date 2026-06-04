# split_and_collapse_on_zonelets

<a id="ansys.meshing.prime.CollapseTool.split_and_collapse_on_zonelets"></a>

#### CollapseTool.split_and_collapse_on_zonelets(part_id, face_zonelets, register_id, split_params, collapse_params)

Split and collapse elements on face zonelets with the specified register id.

* **Parameters:**

  **part_id**
  : Id of a part.

  **face_zonelets**
  : Ids of face zonelets.

  **register_id**
  : Id used to identify face elements to split and collapse.

  **split_params**
  : Parameters to split longest edge of face elements before collapse.

  **collapse_params**
  : Parameters to collapse shortest edge of face elements.

* **Returns:**
  

  [`CollapseResults`](ansys.meshing.prime.CollapseResults.md#ansys.meshing.prime.CollapseResults)
  : Returns the CollapseResults.

* **Return type:**

  [`CollapseResults`](ansys.meshing.prime.CollapseResults.md#ansys.meshing.prime.CollapseResults)

### Examples

```pycon
>>> collapse_tool = prime.CollapseTool(model = model)
>>> results = collapse_tool.split_and_collapse_on_zonelets(
>>>     part_id=part.id,
>>>     face_zonelets=part.get_face_zonelets(),
>>>     register_id=register_id,
>>>     split_params=prime.SplitParams(model=model),
>>>     collapse_params=prime.CollapseParams(model=model))
```

<!-- !! processed by numpydoc !! -->
