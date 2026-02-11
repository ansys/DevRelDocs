# create_intersection_edge_loops

<a id="ansys.meshing.prime.FeatureExtraction.create_intersection_edge_loops"></a>

#### FeatureExtraction.create_intersection_edge_loops(part_face_zonelets, intersecting_part_face_zonelets, params)

Finds the edge zonelets formed by intersection of two face zonelets. Performs n to n intersection of face zonelets present in part face zonelets with those in intersecting part face zonelets depending on the input parameters. Order of input does not matter.

* **Parameters:**

  **part_face_zonelets**
  : List of part zonelets to be intersected.

  **intersecting_part_face_zonelets**
  : List of part zonelets to intersect with.

  **params**
  : Parameter to control edge extraction.

* **Returns:**

  [`CreateIntersectionEdgeLoopsResults`](ansys.meshing.prime.CreateIntersectionEdgeLoopsResults.md#ansys.meshing.prime.CreateIntersectionEdgeLoopsResults)
  : Returns the CreateIntersectionEdgeLoopsResults.

* **Return type:**

  [`CreateIntersectionEdgeLoopsResults`](ansys.meshing.prime.CreateIntersectionEdgeLoopsResults.md#ansys.meshing.prime.CreateIntersectionEdgeLoopsResults)

### Examples

```pycon
>>> results = feature_extraction.create_intersection_edge_loops(part_face_zonelets, intersecting_part_face_zonelets, params)
```

<!-- !! processed by numpydoc !! -->
