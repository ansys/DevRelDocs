# MatchMorphResults

<a id="ansys.meshing.prime.MatchMorphResults"></a>

### *class* ansys.meshing.prime.MatchMorphResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with match morph operation.

* **Parameters:**

  **model: Model**
  : Model to create a `MatchMorphResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Errorcode associated with match morph operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `MatchMorphResults` object with provided parameters.

### Examples

```pycon
>>> match_morph_results = prime.MatchMorphResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`MatchMorphResults.print_default`](ansys.meshing.prime.MatchMorphResults.print_default.md#ansys.meshing.prime.MatchMorphResults.print_default)()       | Print the default values of `MatchMorphResults` object.   |
| [`MatchMorphResults.set_default`](ansys.meshing.prime.MatchMorphResults.set_default.md#ansys.meshing.prime.MatchMorphResults.set_default)([error_code]) | Set the default values of the `MatchMorphResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`MatchMorphResults.error_code`](ansys.meshing.prime.MatchMorphResults.error_code.md#ansys.meshing.prime.MatchMorphResults.error_code)   | Errorcode associated with match morph operation.   |
<!-- vale on -->