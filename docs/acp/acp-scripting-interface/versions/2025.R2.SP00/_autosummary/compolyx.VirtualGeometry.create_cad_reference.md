# create_cad_reference

<a id="compolyx.VirtualGeometry.create_cad_reference"></a>

#### VirtualGeometry.create_cad_reference(name='VirtualGeometry.1', id=None, path=None, size=None, cog=None, dimension=None, bounding_box_min=None, bounding_box_max=None)

Creates a new CAD reference and links it with the virtual geometry.

* **Parameters:**
  - name: Name of the object.
  - id: ID of the object.
  - path: Path of the linked CAD component. For instance “CADGeometry.1//top_surface”.
  - size: Size of the linked CAD component. Size can be the volume, area or length depending on the type of the linked CAD component.
  - cog: Center of gravity of the linked CAD component.
  - dimension: The shape type of the CAD component. Valid options: CADCompound, CADSolid, CADShell, and CADFace.
  - bounding_box_min: Minimum point of the bounding box.
  - bounding_box_max: Maximum point of the bounding box.
* **Return:**
  - The new CAD reference object.
