# BoundingBox

<a id="ansys.meshing.prime.BoundingBox"></a>

### *class* ansys.meshing.prime.BoundingBox(model=None, xmin=None, ymin=None, zmin=None, xmax=None, ymax=None, zmax=None, json_data=None, \*\*kwargs)

Provides information about the definition of a bounding box.

* **Parameters:**

  **model: Model**
  : Model to create a `BoundingBox` object with default parameters.

  **xmin: float, optional**
  : Minimal X coordinate of the bounding box.

  **ymin: float, optional**
  : Minimal Y coordinate of the bounding box.

  **zmin: float, optional**
  : Minimal Z coordinate of the bounding box.

  **xmax: float, optional**
  : Maximal X coordinate of the bounding box.

  **ymax: float, optional**
  : Maximal Y coordinate of the bounding box.

  **zmax: float, optional**
  : Maximal Z coordinate of the bounding box.

  **json_data: dict, optional**
  : JSON dictionary to create a `BoundingBox` object with provided parameters.

### Examples

```pycon
>>> bounding_box = prime.BoundingBox(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| [`BoundingBox.print_default`](ansys.meshing.prime.BoundingBox.print_default.md#ansys.meshing.prime.BoundingBox.print_default)()                  | Print the default values of `BoundingBox` object.   |
| [`BoundingBox.set_default`](ansys.meshing.prime.BoundingBox.set_default.md#ansys.meshing.prime.BoundingBox.set_default)([xmin, ymin, zmin, ...]) | Set the default values of the `BoundingBox` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`BoundingBox.xmax`](ansys.meshing.prime.BoundingBox.xmax.md#ansys.meshing.prime.BoundingBox.xmax)   | Maximal X coordinate of the bounding box.   |
| [`BoundingBox.xmin`](ansys.meshing.prime.BoundingBox.xmin.md#ansys.meshing.prime.BoundingBox.xmin)   | Minimal X coordinate of the bounding box.   |
| [`BoundingBox.ymax`](ansys.meshing.prime.BoundingBox.ymax.md#ansys.meshing.prime.BoundingBox.ymax)   | Maximal Y coordinate of the bounding box.   |
| [`BoundingBox.ymin`](ansys.meshing.prime.BoundingBox.ymin.md#ansys.meshing.prime.BoundingBox.ymin)   | Minimal Y coordinate of the bounding box.   |
| [`BoundingBox.zmax`](ansys.meshing.prime.BoundingBox.zmax.md#ansys.meshing.prime.BoundingBox.zmax)   | Maximal Z coordinate of the bounding box.   |
| [`BoundingBox.zmin`](ansys.meshing.prime.BoundingBox.zmin.md#ansys.meshing.prime.BoundingBox.zmin)   | Minimal Z coordinate of the bounding box.   |

<a id="examples-using-boundingbox"></a>

<!-- vale on -->
