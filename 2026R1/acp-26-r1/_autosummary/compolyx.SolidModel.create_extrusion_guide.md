# create_extrusion_guide

<a id="compolyx.SolidModel.create_extrusion_guide"></a>

#### SolidModel.create_extrusion_guide(name, edge_set=None, id='', cad_geometry=None, direction=(0.0, 0.0, 0.0), radius=None, depth=1.0, use_curvature_correction=False, active=True)

Create a new extrusion guide.

* **Parameters:**
  - name: The name of the extrusion guide.
  - edge_set: An edge set where this guide applies.
  - id: The ID of the extrusion guide.
  - cad_geometry: a CAD geometry object.
  - direction: Extrusion direction.
  - radius: Distance up to which node translations due to the guide will be propagated through the mesh.
    - `0.0`: Only the nodes extruded from edge_set will be shifted onto the guide.
  - depth: Intensity for the propagation of mesh corrections.
    - `1.0` : Linear decay from guide to radius.
    - `>1.0`: Higher reach.
    - `<1.0`: More local.
  - use_curvature_correction: Whether to use curvature correction algorithm to smooth mesh adapted to extrusion guide. Default is ‘False’.
