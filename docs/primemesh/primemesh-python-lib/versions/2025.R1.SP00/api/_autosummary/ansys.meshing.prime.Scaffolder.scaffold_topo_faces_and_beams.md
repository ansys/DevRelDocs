# scaffold_topo_faces_and_beams

<a id="ansys.meshing.prime.Scaffolder.scaffold_topo_faces_and_beams"></a>

#### Scaffolder.scaffold_topo_faces_and_beams(topo_faces, topo_beams, params)

Scaffold faces and beams with provided parameters.

* **Parameters:**

  **topo_faces**
  : Ids of topology faces.

  **topo_beams**
  : Ids of topology edges for beams.

  **params**
  : Scaffolding parameters.

* **Returns:**

  [`ScaffolderResults`](ansys.meshing.prime.ScaffolderResults.md#ansys.meshing.prime.ScaffolderResults)
  : Return results in ScaffolderResults structure.

* **Return type:**

  [`ScaffolderResults`](ansys.meshing.prime.ScaffolderResults.md#ansys.meshing.prime.ScaffolderResults)

### Examples

```pycon
>>> results = scaffolder.ScaffoldTopoFacesAndBeams([1,2], [7,8], params)
```

<!-- !! processed by numpydoc !! -->

