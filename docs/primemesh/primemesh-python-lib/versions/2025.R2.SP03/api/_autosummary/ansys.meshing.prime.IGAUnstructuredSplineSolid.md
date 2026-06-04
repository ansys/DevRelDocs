# IGAUnstructuredSplineSolid

<a id="ansys.meshing.prime.IGAUnstructuredSplineSolid"></a>

### *class* ansys.meshing.prime.IGAUnstructuredSplineSolid(model=None, id=None, degree=None, invalid_jacobian_elements_count=None, json_data=None, \*\*kwargs)

Information of unstructured spline solid.

* **Parameters:**

  **model: Model**
  : Model to create a `IGAUnstructuredSplineSolid` object with default parameters.

  **id: int, optional**
  : Id of the unstructured spline solid.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **degree: int, optional**
  : Degree of the spline solid.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **invalid_jacobian_elements_count: int, optional**
  : Count of elements with negative jacobian.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `IGAUnstructuredSplineSolid` object with provided parameters.

### Examples

```pycon
>>> iga_unstructured_spline_solid = prime.IGAUnstructuredSplineSolid(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`IGAUnstructuredSplineSolid.print_default`](ansys.meshing.prime.IGAUnstructuredSplineSolid.print_default.md#ansys.meshing.prime.IGAUnstructuredSplineSolid.print_default)()    | Print the default values of `IGAUnstructuredSplineSolid` object.   |
| [`IGAUnstructuredSplineSolid.set_default`](ansys.meshing.prime.IGAUnstructuredSplineSolid.set_default.md#ansys.meshing.prime.IGAUnstructuredSplineSolid.set_default)([id, ...]) | Set the default values of the `IGAUnstructuredSplineSolid` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| [`IGAUnstructuredSplineSolid.degree`](ansys.meshing.prime.IGAUnstructuredSplineSolid.degree.md#ansys.meshing.prime.IGAUnstructuredSplineSolid.degree)                                                                            | Degree of the spline solid.               |
| [`IGAUnstructuredSplineSolid.id`](ansys.meshing.prime.IGAUnstructuredSplineSolid.id.md#ansys.meshing.prime.IGAUnstructuredSplineSolid.id)                                                                                        | Id of the unstructured spline solid.      |
| [`IGAUnstructuredSplineSolid.invalid_jacobian_elements_count`](ansys.meshing.prime.IGAUnstructuredSplineSolid.invalid_jacobian_elements_count.md#ansys.meshing.prime.IGAUnstructuredSplineSolid.invalid_jacobian_elements_count) | Count of elements with negative jacobian. |
<!-- vale on -->