# Reading and writing files

The [`FileIO`](../api/_autosummary/ansys.meshing.prime.FileIO.md#ansys.meshing.prime.FileIO) class is used for all file-based data exchanges.

## Native PMDAT format

PMDAT is the native file format for PyPrimeMesh. It contains all data associated with the active model.

This includes geometry, mesh, topology, controls, labels, and zones.

The model data can be read from and written to the PMDAT format using the
[`FileIO.read_pmdat()`](../api/_autosummary/ansys.meshing.prime.FileIO.read_pmdat.md#ansys.meshing.prime.FileIO.read_pmdat) and
[`FileIO.write_pmdat()`](../api/_autosummary/ansys.meshing.prime.FileIO.write_pmdat.md#ansys.meshing.prime.FileIO.write_pmdat) methods
with parameters defined in the [`FileReadParams`](../api/_autosummary/ansys.meshing.prime.FileReadParams.md#ansys.meshing.prime.FileReadParams)
and [`FileWriteParams`](../api/_autosummary/ansys.meshing.prime.FileWriteParams.md#ansys.meshing.prime.FileWriteParams) classes respectively.

```python
from ansys.meshing import prime

# Start Ansys Prime Server and get the model
prime_client = prime.launch_prime()
model = prime_client.model

# Download and read an example PMDAT file
mixing_elbow = prime.examples.download_elbow_pmdat()
params = prime.FileReadParams(model=model)
prime.FileIO(model).read_pmdat(file_name=mixing_elbow, file_read_params=params)
```

## Import CAD files

The [`FileIO.import_cad()`](../api/_autosummary/ansys.meshing.prime.FileIO.import_cad.md#ansys.meshing.prime.FileIO.import_cad) method allows
you to import CAD files and set parameters for importing files using the
[`ImportCadParams`](../api/_autosummary/ansys.meshing.prime.ImportCadParams.md#ansys.meshing.prime.ImportCadParams) class.

### CAD reader routes

You can specify the import route for CAD files using the [`CadReaderRoute`](../api/_autosummary/ansys.meshing.prime.CadReaderRoute.md#ansys.meshing.prime.CadReaderRoute) class.

```python
params = prime.ImportCadParams(
    model=model, cad_reader_route=prime.CadReaderRoute.SPACECLAIM
)
prime.FileIO(model).import_cad(file_name=mixing_elbow, params=params)
```

Alternatively, you can use the [`Mesh`](../api/_autosummary/ansys.meshing.prime.lucid.Mesh.md#ansys.meshing.prime.lucid.Mesh) class in the Lucid API:

```python
mesh_util = prime.lucid.Mesh(model=model)
mesh_util.read(file_name=mixing_elbow, cad_reader_route=prime.CadReaderRoute.SPACECLAIM)
```

Four CAD import routes are available in PyPrimeMesh:

> * `Program Controlled`: Automatically chooses the best route based on the CAD format. This
>   route uses the `Native` route if available, the `SpaceClaim` route for SCDOC file formats,
>   and the `Workbench` route for all other file formats.
> * `Native`: Imports selected natively supported file formats like FMD `(*.fmd)`, ACIS `(*.sat, *.sab)`,
>   Parasolid `(*.x_t, *.x_b)`, JTOpen `(*.jt, *.plmxml)`, and STL `(*.stl)`.
> * `SpaceClaim`: Uses SCDM to import supported CAD files from the SpaceClaim reader. Only the
>   Windows platform supports importing SpaceClaim files.
> * `Workbench`: Uses Workbench to import supported CAD files from the Workbench reader.

#### NOTE
Program Controlled and SpaceClaim route imports JT files containing only faceted data. Workbench and
Native does not support importing JT files containing only faceted data.

To view the CAD supported for the Workbench route on different platforms, see
[CAD Support](https://www.ansys.com/it-solutions/platform-support) on the Ansys website.

#### NOTE
When deploying scripts using SpaceClaim or Workbench CAD readers, ensure that the CAD configuration
and in-app defaults are consistent in the deployed environment.

#### NOTE
You must install and configure Workbench CAD readers or plug-ins (Ansys Geometry Interfaces)
while installing Ansys Workbench.

### Append CAD files

The [`ImportCadParams.append`](../api/_autosummary/ansys.meshing.prime.ImportCadParams.append.md#ansys.meshing.prime.ImportCadParams.append) parameter allows
you to append a CAD file to the model:

```python
params = prime.ImportCadParams(model=model, append=True)
prime.FileIO(model).import_cad(file_name="cad_to_append.scdoc", params=params)
```

Alternatively, you can use the [`Mesh`](../api/_autosummary/ansys.meshing.prime.lucid.Mesh.md#ansys.meshing.prime.lucid.Mesh) class in
the Lucid API:

```python
mesh_util = prime.lucid.Mesh(model=model)
mesh_util.read("cad_to_append.scdoc", append=True)
```

### Parametric CAD update

Parametric CAD update can be used while importing CAD files that have parameters defined that
can be accessed by Workbench CAD readers.

This code gets existing CAD parameters while importing:

```python
params = prime.ImportCadParams(model=model)
params.cad_reader_route = prime.CadReaderRoute.WORKBENCH
result = prime.FileIO(model).import_cad(file_name="parametric_cad.scdoc", params=params)
```

```pycon
>>> print(result.cad_parameters)

{'my_param': 1}
```

This code sets the parameters that are used for the import:

```python
params = prime.ImportCadParams(model=model)
params.cad_reader_route = prime.CadReaderRoute.WORKBENCH
params.cad_update_parameters = {"my_param": 2}
result = prime.FileIO(model).import_cad(file_name="parametric_cad.scdoc", params=params)
```

```pycon
>>> print(result.cad_parameters)

{'my_param': 2}
```

### Part management and creation

PyPrimeMesh has options for part management within the product structure while importing a CAD (Computer Aided Design) model.
The CAD model is the top in product hierarchy. A CAD model can have one or more CAD assemblies. The CAD assembly or
subassembly has different CAD parts. The CAD part has bodies or other geometric entities. Here is a typical CAD product
structure from SpaceClaim:

![cad_structure(2)](../images/cad_structure(2).png)

**Example CAD structure from SpaceClaim**

The [`PartCreationType`](../api/_autosummary/ansys.meshing.prime.PartCreationType.md#ansys.meshing.prime.PartCreationType) class decides whether to create a part per:

> * Model
> * Assembly
> * Part
> * Body

#### Model

When you import a CAD model and specify the [`PartCreationType`](../api/_autosummary/ansys.meshing.prime.PartCreationType.md#ansys.meshing.prime.PartCreationType) parameter
as [`MODEL`](../api/_autosummary/ansys.meshing.prime.PartCreationType.MODEL.md#ansys.meshing.prime.PartCreationType.MODEL), a single part is created that inherits its name from the CAD model name. The number of zones within the part is identical to the number of bodies within the CAD model.

![creation_model(2)](../images/creation_model(2).png)

**Part creation by model (from SpaceClaim to PyPrimeMesh part structure)**

#### Assembly

When you import a CAD model and specify the [`PartCreationType`](../api/_autosummary/ansys.meshing.prime.PartCreationType.md#ansys.meshing.prime.PartCreationType) parameter as [`ASSEMBLY`](../api/_autosummary/ansys.meshing.prime.PartCreationType.ASSEMBLY.md#ansys.meshing.prime.PartCreationType.ASSEMBLY), a part per CAD assembly is created where the part name is inherited from the CAD assembly name. The number of zones within each part is identical to the number of bodies within the CAD assembly.

![creation_assembly(2)](../images/creation_assembly(2).png)

**Part creation by assembly (from SpaceClaim to PyPrimeMesh part structure)**

#### Part

When you import a CAD model and specify the [`PartCreationType`](../api/_autosummary/ansys.meshing.prime.PartCreationType.md#ansys.meshing.prime.PartCreationType) parameter as [`PART`](../api/_autosummary/ansys.meshing.prime.PartCreationType.PART.md#ansys.meshing.prime.PartCreationType.PART), a part per CAD part is created that inherits the part name from the CAD part name. The number of zones within a part is identical to the number of bodies within the CAD part.

![creation_part(2)](../images/creation_part(2).png)

**Part creation by part (from SpaceClaim to PyPrimeMesh part structure)**

#### Body

When you import a CAD model and specify the [`PartCreationType`](../api/_autosummary/ansys.meshing.prime.PartCreationType.md#ansys.meshing.prime.PartCreationType) parameter as [`BODY`](../api/_autosummary/ansys.meshing.prime.PartCreationType.BODY.md#ansys.meshing.prime.PartCreationType.BODY), a part per CAD body is created that inherits the part name from the CAD body name. The number of parts is identical to the number of bodies.

![creation_body(2)](../images/creation_body(2).png)

**Part creation by body (from SpaceClaim to PyPrimeMesh part structure)**

## Import and export solver mesh files

### Import solver mesh files

> - The [`FileIO.import_fluent_case()`](../api/_autosummary/ansys.meshing.prime.FileIO.import_fluent_case.md#ansys.meshing.prime.FileIO.import_fluent_case) method allows you
>   to import Fluent case `(*.cas, *.cas.gz, *.cas.h5)` files and set parameters for importing files using the
>   [`ImportFluentCaseParams`](../api/_autosummary/ansys.meshing.prime.ImportFluentCaseParams.md#ansys.meshing.prime.ImportFluentCaseParams) class.
> - The [`FileIO.import_fluent_meshing_meshes()`](../api/_autosummary/ansys.meshing.prime.FileIO.import_fluent_meshing_meshes.md#ansys.meshing.prime.FileIO.import_fluent_meshing_meshes) method
>   allows you to import Fluent Meshing’s mesh files `(*.msh, *.msh.gz)` and set parameters for importing files
>   using the [`ImportFluentMeshingMeshParams`](../api/_autosummary/ansys.meshing.prime.ImportFluentMeshingMeshParams.md#ansys.meshing.prime.ImportFluentMeshingMeshParams) class.
>   You can import multiple files in parallel using multithreading with the optional
>   [`enable_multi_threading`](../api/_autosummary/ansys.meshing.prime.ImportFluentMeshingMeshParams.enable_multi_threading.md#ansys.meshing.prime.ImportFluentMeshingMeshParams.enable_multi_threading)
>   parameter.
> - The [`FileIO.import_mapdl_cdb()`](../api/_autosummary/ansys.meshing.prime.FileIO.import_mapdl_cdb.md#ansys.meshing.prime.FileIO.import_mapdl_cdb) method allows you to
>   import MAPDL `(*.cdb)` files and set parameters for importing files using the
>   [`ImportMapdlCdbParams`](../api/_autosummary/ansys.meshing.prime.ImportMapdlCdbParams.md#ansys.meshing.prime.ImportMapdlCdbParams) class. You can import quadratic mesh
>   elements as linear with the optional [`drop_mid_nodes`](../api/_autosummary/ansys.meshing.prime.ImportMapdlCdbParams.drop_mid_nodes.md#ansys.meshing.prime.ImportMapdlCdbParams.drop_mid_nodes)
>   parameter.

#### NOTE
All import methods have the optional parameter to append imported files to an existing model.

### Export solver mesh files

> - The [`FileIO.export_fluent_case()`](../api/_autosummary/ansys.meshing.prime.FileIO.export_fluent_case.md#ansys.meshing.prime.FileIO.export_fluent_case) method allows you to
>   export Fluent case `(*.cas, *.cas.gz, *.cas.h5)` files and set parameters for exporting files using the
>   [`ExportFluentCaseParams`](../api/_autosummary/ansys.meshing.prime.ExportFluentCaseParams.md#ansys.meshing.prime.ExportFluentCaseParams) class.
> - The `FileIO.export_fluent_meshing_meshes()` method
>   allows you to export Fluent Meshing’s mesh `(*.msh)` files and set parameters for exporting files
>   using the [`ExportFluentMeshingMeshParams`](../api/_autosummary/ansys.meshing.prime.ExportFluentMeshingMeshParams.md#ansys.meshing.prime.ExportFluentMeshingMeshParams) class.
> - The [`FileIO.export_mapdl_cdb()`](../api/_autosummary/ansys.meshing.prime.FileIO.export_mapdl_cdb.md#ansys.meshing.prime.FileIO.export_mapdl_cdb) method allows you to export
>   MAPDL `(*.cdb)` files and set parameters for exporting files using the
>   [`ExportMapdlCdbParams`](../api/_autosummary/ansys.meshing.prime.ExportMapdlCdbParams.md#ansys.meshing.prime.ExportMapdlCdbParams) class.
> - The [`FileIO.export_boundary_fitted_spline_kfile()`](../api/_autosummary/ansys.meshing.prime.FileIO.export_boundary_fitted_spline_kfile.md#ansys.meshing.prime.FileIO.export_boundary_fitted_spline_kfile)
>   method allows you to export IGA LS-DYNA keyword `(*.k)` files and set parameters for exporting boundary-fitted
>   splines using the [`ExportBoundaryFittedSplineParams`](../api/_autosummary/ansys.meshing.prime.ExportBoundaryFittedSplineParams.md#ansys.meshing.prime.ExportBoundaryFittedSplineParams) class.

## Read and write size field files

### Native PSF format

> - The [`FileIO.read_size_field()`](../api/_autosummary/ansys.meshing.prime.FileIO.read_size_field.md#ansys.meshing.prime.FileIO.read_size_field) method allows you to
>   read Ansys Prime Server’s size field `(*.psf, *.psf.gz)` file and set parameters for reading this file
>   using the [`ReadSizeFieldParams`](../api/_autosummary/ansys.meshing.prime.ReadSizeFieldParams.md#ansys.meshing.prime.ReadSizeFieldParams) class.
> - The [`FileIO.write_size_field()`](../api/_autosummary/ansys.meshing.prime.FileIO.write_size_field.md#ansys.meshing.prime.FileIO.write_size_field) method allows you to
>   write Ansys Prime Server’s size field `(*.psf)` file and set parameters for writing this file using the
>   [`WriteSizeFieldParams`](../api/_autosummary/ansys.meshing.prime.WriteSizeFieldParams.md#ansys.meshing.prime.WriteSizeFieldParams) class. You can write only active
>   size fields into the file with the optional [`write_only_active_size_fields`](../api/_autosummary/ansys.meshing.prime.WriteSizeFieldParams.write_only_active_size_fields.md#ansys.meshing.prime.WriteSizeFieldParams.write_only_active_size_fields)
>   parameter.

### Fluent Meshing format

The [`FileIO.import_fluent_meshing_size_field()`](../api/_autosummary/ansys.meshing.prime.FileIO.import_fluent_meshing_size_field.md#ansys.meshing.prime.FileIO.import_fluent_meshing_size_field)
method allows you to import Fluent Meshing’s size field `(*.sf, *.sf.gz)` file.
