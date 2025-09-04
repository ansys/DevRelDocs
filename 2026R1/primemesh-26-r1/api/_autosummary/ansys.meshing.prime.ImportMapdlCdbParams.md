# ImportMapdlCdbParams

<a id="ansys.meshing.prime.ImportMapdlCdbParams"></a>

### *class* ansys.meshing.prime.ImportMapdlCdbParams(model=None, drop_mid_nodes=None, append=None, json_data=None, \*\*kwargs)

Parameters to control MAPDL CDB import settings.

* **Parameters:**

  **model: Model**
  : Model to create a `ImportMapdlCdbParams` object with default parameters.

  **drop_mid_nodes: bool, optional**
  : Option to import quadratic mesh elements as linear by skipping mid nodes.

  **append: bool, optional**
  : Option to append imported cdb into existing model.

  **json_data: dict, optional**
  : JSON dictionary to create a `ImportMapdlCdbParams` object with provided parameters.

### Examples

```pycon
>>> import_mapdl_cdb_params = prime.ImportMapdlCdbParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`ImportMapdlCdbParams.print_default`](ansys.meshing.prime.ImportMapdlCdbParams.print_default.md#ansys.meshing.prime.ImportMapdlCdbParams.print_default)()   | Print the default values of `ImportMapdlCdbParams` object.   |
| [`ImportMapdlCdbParams.set_default`](ansys.meshing.prime.ImportMapdlCdbParams.set_default.md#ansys.meshing.prime.ImportMapdlCdbParams.set_default)([...])    | Set the default values of the `ImportMapdlCdbParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [`ImportMapdlCdbParams.append`](ansys.meshing.prime.ImportMapdlCdbParams.append.md#ansys.meshing.prime.ImportMapdlCdbParams.append)                         | Option to append imported cdb into existing model.                        |
| [`ImportMapdlCdbParams.drop_mid_nodes`](ansys.meshing.prime.ImportMapdlCdbParams.drop_mid_nodes.md#ansys.meshing.prime.ImportMapdlCdbParams.drop_mid_nodes) | Option to import quadratic mesh elements as linear by skipping mid nodes. |
<!-- vale on -->