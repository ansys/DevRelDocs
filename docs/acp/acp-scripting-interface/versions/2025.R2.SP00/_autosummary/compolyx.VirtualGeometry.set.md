# set

<a id="compolyx.VirtualGeometry.set"></a>

#### VirtualGeometry.set(shapes)

Clears the existing CAD References and creates a new one for each given shape.

* **Parameters:**
  - shapes: A list of tuples. The first item is the shape object and the second the link path (root path) of the shape.
* **Usage:**
  ```pycon
  >>> shell = db.active_model.geometry.cad_geometries['CADGeometry.1'].root_shapes['cut_surface']
  >>> db.active_model.geometry.virtual_geometries['RefGeom.1'].set(shapes=[ (shell, "") ] )
  or
  >>> db.active_model.geometry.virtual_geometries['RefGeom.1'].set(paths=[ (None, "CADGeometry.1/cut_surface") ] )
  ```
