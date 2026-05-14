# set_default

<a id="ansys.meshing.prime.ImportCadParams.set_default"></a>

#### *static* ImportCadParams.set_default(append=None, ansys_release=None, cad_reader_route=None, part_creation_type=None, geometry_transfer=None, length_unit=None, refacet=None, cad_refaceting_params=None, stitch_tolerance=None, cad_update_parameters=None, validate_shared_topology=None)

Set the default values of the `ImportCadParams` object.

* **Parameters:**

  **append: bool, optional**
  : Append imported CAD into existing model when true.

  **ansys_release: str, optional**
  : Configures the Ansys release to be used for loading CAD data through non Native route. Supported formats for specifying Ansys release version are ‘25.2’, ‘252’, ‘v252’, ‘25R2’.

  **cad_reader_route: CadReaderRoute, optional**
  : Specify the available CAD reader routes. The available CAD reader routes are ProgramControlled, Native, WorkBench, SpaceClaim.

  **part_creation_type: PartCreationType, optional**
  : Create a part per CAD Model, Assembly, Part, Body.

  **geometry_transfer: bool, optional**
  : Option to enable transfer of geometry data (NURBS).

  **length_unit: LengthUnit, optional**
  : Specify length unit for import.

  **refacet: bool, optional**
  : Refine or coarsen the CAD faceting based on refaceting parameters when true.

  **cad_refaceting_params: CadRefacetingParams, optional**
  : Specify refaceting parameters.

  **stitch_tolerance: float, optional**
  : Stitch facets based on tolerance. Available only with WorkBench CAD Reader route.

  **cad_update_parameters: Dict[str, Union[str, int, float, bool]], optional**
  : Specify the CAD parameters for parametric CAD update. Available only with WorkBench CAD Reader route.

  **validate_shared_topology: bool, optional**
  : Specify whether to validate the shared topology information.

<!-- !! processed by numpydoc !! -->
