# as_polydata

<a id="ansys.meshing.prime.Model.as_polydata"></a>

#### Model.as_polydata(update=False)

Get the model as a polydata.

* **Parameters:**

  **update**
  : Update the polydata if it is already present, by default False.

* **Returns:**

  `vtk.vtkPolyData`
  : Polydata of the model.

### Examples

```pycon
>>> polydata = model.as_polydata()
```

<!-- !! processed by numpydoc !! -->
