# CopyZoneletsParams

<a id="ansys.meshing.prime.CopyZoneletsParams"></a>

### *class* ansys.meshing.prime.CopyZoneletsParams(model=None, copy_labels=None, copy_zones=None, json_data=None, \*\*kwargs)

Parameters to copy zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `CopyZoneletsParams` object with default parameters.

  **copy_labels: bool, optional**
  : Option to copy labels of input zonelets to the corresponding copied zonelets.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **copy_zones: bool, optional**
  : Option to copy zones of input zonelets to corresponding copied zonelets.

  **json_data: dict, optional**
  : JSON dictionary to create a `CopyZoneletsParams` object with provided parameters.

### Examples

```pycon
>>> copy_zonelets_params = prime.CopyZoneletsParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`CopyZoneletsParams.print_default`](ansys.meshing.prime.CopyZoneletsParams.print_default.md#ansys.meshing.prime.CopyZoneletsParams.print_default)()   | Print the default values of `CopyZoneletsParams` object.   |
| [`CopyZoneletsParams.set_default`](ansys.meshing.prime.CopyZoneletsParams.set_default.md#ansys.meshing.prime.CopyZoneletsParams.set_default)([...])    | Set the default values of the `CopyZoneletsParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`CopyZoneletsParams.copy_labels`](ansys.meshing.prime.CopyZoneletsParams.copy_labels.md#ansys.meshing.prime.CopyZoneletsParams.copy_labels)   | Option to copy labels of input zonelets to the corresponding copied zonelets.   |
| [`CopyZoneletsParams.copy_zones`](ansys.meshing.prime.CopyZoneletsParams.copy_zones.md#ansys.meshing.prime.CopyZoneletsParams.copy_zones)      | Option to copy zones of input zonelets to corresponding copied zonelets.        |
<!-- vale on -->