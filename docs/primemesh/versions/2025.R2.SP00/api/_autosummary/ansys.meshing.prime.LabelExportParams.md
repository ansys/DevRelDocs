# LabelExportParams

<a id="ansys.meshing.prime.LabelExportParams"></a>

### *class* ansys.meshing.prime.LabelExportParams(model=None, label_expression_for_nodal_components=None, json_data=None, \*\*kwargs)

Parameters to control the export of labels as Nodal or Element Components in CDB. By default, all the labels are exported as Element Components.

* **Parameters:**

  **model: Model**
  : Model to create a `LabelExportParams` object with default parameters.

  **label_expression_for_nodal_components: str, optional**
  : Label expression to export matching labels as Nodal Components in CDB. Non-matching labels will be exported as Element Components.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `LabelExportParams` object with provided parameters.

### Examples

```pycon
>>> label_export_params = prime.LabelExportParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`LabelExportParams.print_default`](ansys.meshing.prime.LabelExportParams.print_default.md#ansys.meshing.prime.LabelExportParams.print_default)()   | Print the default values of `LabelExportParams` object.   |
| [`LabelExportParams.set_default`](ansys.meshing.prime.LabelExportParams.set_default.md#ansys.meshing.prime.LabelExportParams.set_default)([...])    | Set the default values of the `LabelExportParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`LabelExportParams.label_expression_for_nodal_components`](ansys.meshing.prime.LabelExportParams.label_expression_for_nodal_components.md#ansys.meshing.prime.LabelExportParams.label_expression_for_nodal_components)   | Label expression to export matching labels as Nodal Components in CDB.   |
<!-- vale on -->