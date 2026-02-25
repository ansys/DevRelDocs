# create_lookup_table3d

<a id="compolyx.Model.create_lookup_table3d"></a>

#### Model.create_lookup_table3d(name, id='', tabular_data=None, algorithm_type='weighted_nearest_neighbor', use_default_search_radius=True, search_radius=0.0, num_min_neighbors=1, dimensions=[], use_global_coordinate_system=True, rosette=None)

Create a new 3D lookup table object.

### Parameters:
  - name : Name
  - id : ID
  - tabular_data: data points and values of the lookup table
  - algorithm_type: specify which algorithm type is used for the interpolation
  - use_default_search_radius: force the program to use the default search radius. Used for the algorithm weighted_nearest_neighbor”.
  - search_radius: set a custom search radius. Used if use_default_search_radius is false. Used for the algorithm weighted_nearest_neighbor.
  - dimensions: list of the dimensions of the columns (for example length for coordinates)
  - use_global_coordinate_system: Boolean telling if we want to use the global coordinate system or not. It is possible to pass a Rosette but still use the global one.
  - ‘rosette’: optional Rosette that will be used as coordinate system for the table. Only Parallel Rosettes are supported.
### Returns:
  The created lookup table object.
