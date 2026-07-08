# ImportCadParams

<a id="ansys.meshing.prime.ImportCadParams"></a>

### *class* ansys.meshing.prime.ImportCadParams(model=None, append=None, ansys_release=None, cad_reader_route=None, part_creation_type=None, geometry_transfer=None, length_unit=None, refacet=None, cad_refaceting_params=None, stitch_tolerance=None, cad_update_parameters=None, validate_shared_topology=None, json_data=None, \*\*kwargs)

Parameters to control CAD import settings.

* **Parameters:**

  **model: Model**
  : Model to create a `ImportCadParams` object with default parameters.

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

  **json_data: dict, optional**
  : JSON dictionary to create a `ImportCadParams` object with provided parameters.

### Examples

```pycon
>>> import_cad_params = prime.ImportCadParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`ImportCadParams.print_default`](ansys.meshing.prime.ImportCadParams.print_default.md#ansys.meshing.prime.ImportCadParams.print_default)()        | Print the default values of `ImportCadParams` object.   |
| [`ImportCadParams.set_default`](ansys.meshing.prime.ImportCadParams.set_default.md#ansys.meshing.prime.ImportCadParams.set_default)([append, ...]) | Set the default values of the `ImportCadParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`ImportCadParams.ansys_release`](ansys.meshing.prime.ImportCadParams.ansys_release.md#ansys.meshing.prime.ImportCadParams.ansys_release)                                  | Configures the Ansys release to be used for loading CAD data through non Native route.   |
| [`ImportCadParams.append`](ansys.meshing.prime.ImportCadParams.append.md#ansys.meshing.prime.ImportCadParams.append)                                                       | Append imported CAD into existing model when true.                                       |
| [`ImportCadParams.cad_reader_route`](ansys.meshing.prime.ImportCadParams.cad_reader_route.md#ansys.meshing.prime.ImportCadParams.cad_reader_route)                         | Specify the available CAD reader routes.                                                 |
| [`ImportCadParams.cad_refaceting_params`](ansys.meshing.prime.ImportCadParams.cad_refaceting_params.md#ansys.meshing.prime.ImportCadParams.cad_refaceting_params)          | Specify refaceting parameters.                                                           |
| [`ImportCadParams.cad_update_parameters`](ansys.meshing.prime.ImportCadParams.cad_update_parameters.md#ansys.meshing.prime.ImportCadParams.cad_update_parameters)          | Specify the CAD parameters for parametric CAD update.                                    |
| [`ImportCadParams.geometry_transfer`](ansys.meshing.prime.ImportCadParams.geometry_transfer.md#ansys.meshing.prime.ImportCadParams.geometry_transfer)                      | Option to enable transfer of geometry data (NURBS).                                      |
| [`ImportCadParams.length_unit`](ansys.meshing.prime.ImportCadParams.length_unit.md#ansys.meshing.prime.ImportCadParams.length_unit)                                        | Specify length unit for import.                                                          |
| [`ImportCadParams.part_creation_type`](ansys.meshing.prime.ImportCadParams.part_creation_type.md#ansys.meshing.prime.ImportCadParams.part_creation_type)                   | Create a part per CAD Model, Assembly, Part, Body.                                       |
| [`ImportCadParams.refacet`](ansys.meshing.prime.ImportCadParams.refacet.md#ansys.meshing.prime.ImportCadParams.refacet)                                                    | Refine or coarsen the CAD faceting based on refaceting parameters when true.             |
| [`ImportCadParams.stitch_tolerance`](ansys.meshing.prime.ImportCadParams.stitch_tolerance.md#ansys.meshing.prime.ImportCadParams.stitch_tolerance)                         | Stitch facets based on tolerance.                                                        |
| [`ImportCadParams.validate_shared_topology`](ansys.meshing.prime.ImportCadParams.validate_shared_topology.md#ansys.meshing.prime.ImportCadParams.validate_shared_topology) | Specify whether to validate the shared topology information.                             |
<!-- vale on -->