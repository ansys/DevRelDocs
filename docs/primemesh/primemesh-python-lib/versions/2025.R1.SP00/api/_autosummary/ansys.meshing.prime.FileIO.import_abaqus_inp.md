# import_abaqus_inp

<a id="ansys.meshing.prime.FileIO.import_abaqus_inp"></a>

#### FileIO.import_abaqus_inp(file_name, params)

(BETA FEATURE) Import a Abaqus file.

This is a beta feature to import abaqus files as dead mesh and also store
simulation-specific information into Prime in the form of JSON documents.

* **Parameters:**

  **file_name**
  : Name of file to import.

  **params**
  : Parameters to specify options during import.

* **Returns:**

  [`ImportAbaqusResults`](ansys.meshing.prime.ImportAbaqusResults.md#ansys.meshing.prime.ImportAbaqusResults)
  : Returns the results of the abaqus database import.

* **Return type:**

  [`ImportAbaqusResults`](ansys.meshing.prime.ImportAbaqusResults.md#ansys.meshing.prime.ImportAbaqusResults)

### Examples

```pycon
>>> results = file_io.import_abaqus(r"/tmp/file.inp")
```

<!-- !! processed by numpydoc !! -->
