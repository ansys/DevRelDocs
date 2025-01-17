# delete_fringes_and_overlaps_on_zonelets

<a id="ansys.meshing.prime.DeleteTool.delete_fringes_and_overlaps_on_zonelets"></a>

#### DeleteTool.delete_fringes_and_overlaps_on_zonelets(part_id, face_zonelets, params)

Delete fringes and overlapping faces on the given face zonelets.

* **Parameters:**

  **part_id**
  : Id of a part.

  **face_zonelets**
  : Ids of face zonelets.

  **params**
  : Parameters to delete the fringes and overlapping faces.

* **Returns:**

  [`DeleteFringesAndOverlapsResults`](ansys.meshing.prime.DeleteFringesAndOverlapsResults.md#ansys.meshing.prime.DeleteFringesAndOverlapsResults)
  : Returns the DeleteFringesAndOverlapsResults.

* **Return type:**

  [`DeleteFringesAndOverlapsResults`](ansys.meshing.prime.DeleteFringesAndOverlapsResults.md#ansys.meshing.prime.DeleteFringesAndOverlapsResults)

### Examples

```pycon
>>> delete_tool = prime.DeleteTool(model = model)
>>> results = delete_tool.delete_fringes_and_overlaps_on_zonelets(
>>>                                    part.id,
>>>                                    part.get_face_zonelets(),
>>>                                    prime.DeleteFringesAndOverlapsParams(
>>>                                       model=model))
```

<!-- !! processed by numpydoc !! -->
