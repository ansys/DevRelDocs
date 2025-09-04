# SetFeatureRecoveriesResults

<a id="ansys.meshing.prime.SetFeatureRecoveriesResults"></a>

### *class* ansys.meshing.prime.SetFeatureRecoveriesResults(model=None, ids=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with set feature recoveries.

* **Parameters:**

  **model: Model**
  : Model to create a `SetFeatureRecoveriesResults` object with default parameters.

  **ids: Iterable[int], optional**
  : Ids of added feature recovery controls.

  **error_code: ErrorCode, optional**
  : Error code associated with the set feature recoveries.

  **json_data: dict, optional**
  : JSON dictionary to create a `SetFeatureRecoveriesResults` object with provided parameters.

### Examples

```pycon
>>> set_feature_recoveries_results = prime.SetFeatureRecoveriesResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| [`SetFeatureRecoveriesResults.print_default`](ansys.meshing.prime.SetFeatureRecoveriesResults.print_default.md#ansys.meshing.prime.SetFeatureRecoveriesResults.print_default)()   | Print the default values of `SetFeatureRecoveriesResults` object.   |
| [`SetFeatureRecoveriesResults.set_default`](ansys.meshing.prime.SetFeatureRecoveriesResults.set_default.md#ansys.meshing.prime.SetFeatureRecoveriesResults.set_default)([...])    | Set the default values of the `SetFeatureRecoveriesResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`SetFeatureRecoveriesResults.error_code`](ansys.meshing.prime.SetFeatureRecoveriesResults.error_code.md#ansys.meshing.prime.SetFeatureRecoveriesResults.error_code)   | Error code associated with the set feature recoveries.   |
| [`SetFeatureRecoveriesResults.ids`](ansys.meshing.prime.SetFeatureRecoveriesResults.ids.md#ansys.meshing.prime.SetFeatureRecoveriesResults.ids)                        | Ids of added feature recovery controls.                  |
<!-- vale on -->