# smooth_dihedral_face_nodes

<a id="ansys.meshing.prime.SurfaceUtilities.smooth_dihedral_face_nodes"></a>

#### SurfaceUtilities.smooth_dihedral_face_nodes(zonelets, params)

Perform a smoothing operation to eliminate sharp corners at locations where the input face zonelets intersect.

* **Parameters:**
  **zonelets**
  : List of input face zonelet ids.

  **params**
  : Parameters to control the smoothing operation.
* **Returns:**
  :

  [`SmoothDihedralFaceNodesResults`](ansys.meshing.prime.SmoothDihedralFaceNodesResults.md#ansys.meshing.prime.SmoothDihedralFaceNodesResults)
  : Returns a SmoothDihedralFaceNodesResults.
* **Return type:**
  [`SmoothDihedralFaceNodesResults`](ansys.meshing.prime.SmoothDihedralFaceNodesResults.md#ansys.meshing.prime.SmoothDihedralFaceNodesResults)

### Examples

```pycon
>>> result = surf_utils.smooth_dihedral_face_nodes(zonelets, params)
```

<!-- !! processed by numpydoc !! -->
