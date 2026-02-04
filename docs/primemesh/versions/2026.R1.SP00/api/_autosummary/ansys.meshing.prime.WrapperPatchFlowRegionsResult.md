# WrapperPatchFlowRegionsResult

<a id="ansys.meshing.prime.WrapperPatchFlowRegionsResult"></a>

### *class* ansys.meshing.prime.WrapperPatchFlowRegionsResult(model=None, warning_codes=None, error_code=None, id=None, name=None, json_data=None, \*\*kwargs)

Result structure associated with patch holes operation.

* **Parameters:**

  **model: Model**
  : Model to create a `WrapperPatchFlowRegionsResult` object with default parameters.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the patch holes operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **error_code: ErrorCode, optional**
  : Error code associated with a patch holes operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **id: int, optional**
  : Id of part created with hole patches.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **name: str, optional**
  : Name of part created with hole patches.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `WrapperPatchFlowRegionsResult` object with provided parameters.

### Examples

```pycon
>>> wrapper_patch_flow_regions_result = prime.WrapperPatchFlowRegionsResult(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`WrapperPatchFlowRegionsResult.print_default`](ansys.meshing.prime.WrapperPatchFlowRegionsResult.print_default.md#ansys.meshing.prime.WrapperPatchFlowRegionsResult.print_default)()   | Print the default values of `WrapperPatchFlowRegionsResult` object.   |
| [`WrapperPatchFlowRegionsResult.set_default`](ansys.meshing.prime.WrapperPatchFlowRegionsResult.set_default.md#ansys.meshing.prime.WrapperPatchFlowRegionsResult.set_default)([...])    | Set the default values of the `WrapperPatchFlowRegionsResult` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`WrapperPatchFlowRegionsResult.error_code`](ansys.meshing.prime.WrapperPatchFlowRegionsResult.error_code.md#ansys.meshing.prime.WrapperPatchFlowRegionsResult.error_code)          | Error code associated with a patch holes operation.      |
| [`WrapperPatchFlowRegionsResult.id`](ansys.meshing.prime.WrapperPatchFlowRegionsResult.id.md#ansys.meshing.prime.WrapperPatchFlowRegionsResult.id)                                  | Id of part created with hole patches.                    |
| [`WrapperPatchFlowRegionsResult.name`](ansys.meshing.prime.WrapperPatchFlowRegionsResult.name.md#ansys.meshing.prime.WrapperPatchFlowRegionsResult.name)                            | Name of part created with hole patches.                  |
| [`WrapperPatchFlowRegionsResult.warning_codes`](ansys.meshing.prime.WrapperPatchFlowRegionsResult.warning_codes.md#ansys.meshing.prime.WrapperPatchFlowRegionsResult.warning_codes) | Warning codes associated with the patch holes operation. |
<!-- vale on -->