# remove

<a id="compolyx.VirtualGeometry.remove"></a>

#### VirtualGeometry.remove(shape)

Removes the CADReference object for the given shape.

### Usage:
  ```pycon
  >>> cad = db.active_model.geometry.cad_geometries['CadGeometry.1']
  >>> db.active_model.geometry.virtual_geometries['RefGeom'].remove( (cad.root_shapes['top_surface'], "") )
  or
  >>> db.active_model.geometry.virtual_geometries['RefGeom'].remove( (None, "CadGeometry.1/top_surface") )
  ```
