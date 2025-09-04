<!-- vale off -->

<a id="connectfacesparams"></a>

# ConnectFacesParams

<a id="ansys.meshing.prime.ConnectFacesParams"></a>

### *class* ansys.meshing.prime.ConnectFacesParams(model=None, constant_mesh_size=None, absolute_tolerance=None, json_data=None, \*\*kwargs)

Parameters for connect faces operation.

* **Parameters:**

  **model: Model**
  : Model to create a `ConnectFacesParams` object with default parameters.

  **constant_mesh_size: float, optional**
  : Constant size used for surface meshing.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **absolute_tolerance: float, optional**
  : Absolute distance tolerance between edges or faces for connect faces operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ConnectFacesParams` object with provided parameters.

### Examples

```pycon
>>> connect_faces_params = prime.ConnectFacesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`ConnectFacesParams.print_default`](ansys.meshing.prime.ConnectFacesParams.print_default.md#ansys.meshing.prime.ConnectFacesParams.print_default)()   | Print the default values of `ConnectFacesParams` object.   |
| [`ConnectFacesParams.set_default`](ansys.meshing.prime.ConnectFacesParams.set_default.md#ansys.meshing.prime.ConnectFacesParams.set_default)([...])    | Set the default values of the `ConnectFacesParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ConnectFacesParams.absolute_tolerance`](ansys.meshing.prime.ConnectFacesParams.absolute_tolerance.md#ansys.meshing.prime.ConnectFacesParams.absolute_tolerance)   | Absolute distance tolerance between edges or faces for connect faces operation.   |
| [`ConnectFacesParams.constant_mesh_size`](ansys.meshing.prime.ConnectFacesParams.constant_mesh_size.md#ansys.meshing.prime.ConnectFacesParams.constant_mesh_size)   | Constant size used for surface meshing.                                           |
<!-- vale on -->