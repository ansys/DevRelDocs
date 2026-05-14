# ExportFluentMeshingMeshParams

<a id="ansys.meshing.prime.ExportFluentMeshingMeshParams"></a>

### *class* ansys.meshing.prime.ExportFluentMeshingMeshParams(model=None, cff_format=None, json_data=None, \*\*kwargs)

Parameters used to export fluent meshing mesh.

* **Parameters:**

  **model: Model**
  : Model to create a `ExportFluentMeshingMeshParams` object with default parameters.

  **cff_format: bool, optional**
  : Option to specify whether to export Fluent mesh file in CFF format (.msh.h5) or legacy format (.msh, .msh.gz).
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExportFluentMeshingMeshParams` object with provided parameters.

### Examples

```pycon
>>> export_fluent_meshing_mesh_params = prime.ExportFluentMeshingMeshParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`ExportFluentMeshingMeshParams.print_default`](ansys.meshing.prime.ExportFluentMeshingMeshParams.print_default.md#ansys.meshing.prime.ExportFluentMeshingMeshParams.print_default)()   | Print the default values of `ExportFluentMeshingMeshParams` object.   |
| [`ExportFluentMeshingMeshParams.set_default`](ansys.meshing.prime.ExportFluentMeshingMeshParams.set_default.md#ansys.meshing.prime.ExportFluentMeshingMeshParams.set_default)([...])    | Set the default values of the `ExportFluentMeshingMeshParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| [`ExportFluentMeshingMeshParams.cff_format`](ansys.meshing.prime.ExportFluentMeshingMeshParams.cff_format.md#ansys.meshing.prime.ExportFluentMeshingMeshParams.cff_format)   | Option to specify whether to export Fluent mesh file in CFF format (.msh.h5) or legacy format (.msh, .msh.gz).   |
<!-- vale on -->