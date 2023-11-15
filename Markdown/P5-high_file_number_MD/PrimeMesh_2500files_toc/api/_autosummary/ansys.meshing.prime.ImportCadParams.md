<!-- vale off -->

# ImportCadParams

### *class* ansys.meshing.prime.ImportCadParams(model=None, append=None, ansys_release=None, cad_reader_route=None, part_creation_type=None, geometry_transfer=None, length_unit=None, refacet=None, cad_refaceting_params=None, stitch_tolerance=None, cad_update_parameters=None, validate_shared_topology=None, json_data=None, \*\*kwargs)

Parameters to control CAD import settings.

<!-- !! processed by numpydoc !! -->

### Methods

| [`ImportCadParams.print_default`](ansys.meshing.prime.ImportCadParams.print_default.md#ansys.meshing.prime.ImportCadParams.print_default)()        | Print the default values of ImportCadParams.   |
|----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| [`ImportCadParams.set_default`](ansys.meshing.prime.ImportCadParams.set_default.md#ansys.meshing.prime.ImportCadParams.set_default)([append, ...]) | Set the default values of ImportCadParams.     |

### Attributes

| [`ImportCadParams.ansys_release`](ansys.meshing.prime.ImportCadParams.ansys_release.md#ansys.meshing.prime.ImportCadParams.ansys_release)                                  | Configures the Ansys release to be used for loading CAD data through non Native route.   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
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
