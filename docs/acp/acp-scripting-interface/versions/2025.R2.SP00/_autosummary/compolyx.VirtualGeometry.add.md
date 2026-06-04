# add

<a id="compolyx.VirtualGeometry.add"></a>

#### VirtualGeometry.add(shape)

Creates a new CADReference object for the given shape. Returns the new CADReference object or the existing one if available.

* **Parameters:**
  - shape: A tuple where the first item is the shape object and the second the link path (root path). Only one of the two must be set.

If the first item is None, the link path is used to link the shape with the virtual geometry.

* **Usage:**
  ```pycon
  >>> cad = db.active_model.geometry.cad_geometries['CadGeometry.1']
  >>> db.active_model.geometry.virtual_geometries['RefGeom'].add( (cad.root_shapes['top_surface'], "") )
  or
  >>> db.active_model.geometry.virtual_geometries['RefGeom'].add( (None, "CadGeometry.1/top_surface") )
  ```
