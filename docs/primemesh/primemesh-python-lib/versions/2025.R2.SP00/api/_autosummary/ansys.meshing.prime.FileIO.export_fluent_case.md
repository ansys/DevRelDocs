# export_fluent_case

<a id="ansys.meshing.prime.FileIO.export_fluent_case"></a>

#### FileIO.export_fluent_case(file_name, export_fluent_case_params)

Export a Fluent case (CAS) file.

* **Parameters:**

  **file_name**
  : Path to the case file on disk.

  **export_fluent_case_params**
  : Parameters for exporting the case file.

* **Returns:**

  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)
  : Results from exporting the case file.

* **Return type:**

  [`FileWriteResults`](ansys.meshing.prime.FileWriteResults.md#ansys.meshing.prime.FileWriteResults)

### Examples

```pycon
>>> file_io = FileIO(model=model)
>>> results = file_io.export_fluent_case(
                "/tmp/fluent.cas",
                prime.ExportFluentCaseParams(model=model))
```

<!-- !! processed by numpydoc !! -->
