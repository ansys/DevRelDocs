# import_fluent_case

<a id="ansys.meshing.prime.FileIO.import_fluent_case"></a>

#### FileIO.import_fluent_case(file_name, import_fluent_case_params)

Import a Fluent case (CAS) file from disk.

* **Parameters:**

  **file_name**
  : Path to the case file on disk.

  **import_fluent_case_params**
  : Parameters for importing the case file.

* **Returns:**

  [`ImportFluentCaseResults`](ansys.meshing.prime.ImportFluentCaseResults.md#ansys.meshing.prime.ImportFluentCaseResults)
  : Results from importing the case file.

* **Return type:**

  [`ImportFluentCaseResults`](ansys.meshing.prime.ImportFluentCaseResults.md#ansys.meshing.prime.ImportFluentCaseResults)

### Notes

This method does not support Unicode paths.

### Examples

```pycon
>>> file_io = prime.FileIO(model=model)
>>> params = prime.ImportFluentCaseParams(model=model)
>>> results = file_io.import_fluent_case("/tmp/fluent.cas", params)
```

<!-- !! processed by numpydoc !! -->
