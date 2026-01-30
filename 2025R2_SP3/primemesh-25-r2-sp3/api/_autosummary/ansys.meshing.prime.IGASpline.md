# IGASpline

<a id="ansys.meshing.prime.IGASpline"></a>

### *class* ansys.meshing.prime.IGASpline(model=None, id=None, json_data=None, \*\*kwargs)

Information of the spline.

* **Parameters:**

  **model: Model**
  : Model to create a `IGASpline` object with default parameters.

  **id: int, optional**
  : Unique id of the spline.

  **json_data: dict, optional**
  : JSON dictionary to create a `IGASpline` object with provided parameters.

### Examples

```pycon
>>> iga_spline = prime.IGASpline(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`IGASpline.print_default`](ansys.meshing.prime.IGASpline.print_default.md#ansys.meshing.prime.IGASpline.print_default)()   | Print the default values of `IGASpline` object.   |
| [`IGASpline.set_default`](ansys.meshing.prime.IGASpline.set_default.md#ansys.meshing.prime.IGASpline.set_default)([id])     | Set the default values of the `IGASpline` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------|----------------------------|
| [`IGASpline.id`](ansys.meshing.prime.IGASpline.id.md#ansys.meshing.prime.IGASpline.id)   | Unique id of the spline.   |
<!-- vale on -->