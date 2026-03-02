# RepairEdgesParams

<a id="ansys.meshing.prime.RepairEdgesParams"></a>

### *class* ansys.meshing.prime.RepairEdgesParams(model=None, constant_mesh_size=None, absolute_tolerance=None, json_data=None, \*\*kwargs)

Parameters for repair edges operation.

* **Parameters:**

  **model: Model**
  : Model to create a `RepairEdgesParams` object with default parameters.

  **constant_mesh_size: float, optional**
  : Constant size used for surface meshing.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **absolute_tolerance: float, optional**
  : Absolute distance tolerance between nodes or edges for repair edges operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `RepairEdgesParams` object with provided parameters.

### Examples

```pycon
>>> repair_edges_params = prime.RepairEdgesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`RepairEdgesParams.print_default`](ansys.meshing.prime.RepairEdgesParams.print_default.md#ansys.meshing.prime.RepairEdgesParams.print_default)()   | Print the default values of `RepairEdgesParams` object.   |
| [`RepairEdgesParams.set_default`](ansys.meshing.prime.RepairEdgesParams.set_default.md#ansys.meshing.prime.RepairEdgesParams.set_default)([...])    | Set the default values of the `RepairEdgesParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`RepairEdgesParams.absolute_tolerance`](ansys.meshing.prime.RepairEdgesParams.absolute_tolerance.md#ansys.meshing.prime.RepairEdgesParams.absolute_tolerance)   | Absolute distance tolerance between nodes or edges for repair edges operation.   |
| [`RepairEdgesParams.constant_mesh_size`](ansys.meshing.prime.RepairEdgesParams.constant_mesh_size.md#ansys.meshing.prime.RepairEdgesParams.constant_mesh_size)   | Constant size used for surface meshing.                                          |
<!-- vale on -->