# mesh_query

<a id="compolyx.Model.mesh_query"></a>

#### Model.mesh_query(name, position, selection='all', entity=None, entities=None, simulate=False, component=None)

Query arbitrary data from the mesh of the model.

* **Parameters:**
  - name: Data type to query:
    - labels, indices
    - etypes
    - coordinates
    - angles (needs component)
    - thickness (needs component)
    - normals
    - orientations, ref_directions, fiber_directions, transverse_directions
    - draped_fiber_directions, draped_transverse_directions
    - ply_offsets (offset vector)
    - area, volume, mass, price
    - cog (centre of gravity)
    - offset (offset in the thickness direction)
  - component: Defines the component. Needed for name=’angles’ or ‘thickness’.
    - angles: Valid options: design_angle (default), shear, draped_fiber_angle, and draped_transverse_angle.
    - thickness: Valid options: thickness (default), and relative_thickness_correction.
  - position: Position where data is queried:
    - nodal
    - centroid
    - element_nodal
  - selection: The selection set determines the selected nodes and elements.
    Can be given as string (‘sel0’-‘sel5’ or ‘all’)
    or ObjectSelection object such as
    - model.selection
    - scene.active_set
  - entity: Specialized queries require the specification of an additional associated entity. For instance, an oriented element set is needed to compute orientations.
    Entity can be given as NamedGraphObjects or vertex descriptor.
  - entities: If a list of entities is given, then the query will also compute and return a list of results, with one array for each entity.
  - simulate: Whether the query is only simulated to test if it will return data.
    If this flag is set the mesh_query(…) function will only return 0 or 1.
