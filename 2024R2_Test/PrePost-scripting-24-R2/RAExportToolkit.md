<a id="raexporttoolkit"></a>

# RAExportToolkit

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAExportToolkit"></a>

### *class* RAExportToolkit

Helper class, tied to a RAStudy, to perform export actions in Rocky.

This toolkit can be obtained via a [`RAStudy`](RAStudy.md#generated.RAStudy):

```python
study = app.GetStudy()
export_toolkit = study.GetExportToolkit()
```

**Methods:**

| [`ExportFEMForces`](#generated.RAExportToolkit.ExportFEMForces)(csv_filename, entities_to_export)            | See [`ExportGeometryLoads()`](#generated.RAExportToolkit.ExportGeometryLoads).   |
|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`ExportGeometryLoads`](#generated.RAExportToolkit.ExportGeometryLoads)(csv_filename, ...[, ...])            | Export the FEM forces of one or more entities to a CSV file.                     |
| [`ExportGeometryLoadsMultiTime`](#generated.RAExportToolkit.ExportGeometryLoadsMultiTime)(csv_filename, ...) | Export the FEM forces of one or more entities to one or multiple CSV files.      |
| [`ExportHTC`](#generated.RAExportToolkit.ExportHTC)(csv_filename, entities_to_export, ...)                   | Export the HTC of one or more entities to a CSV file.                            |
| [`ExportParticleToStl`](#generated.RAExportToolkit.ExportParticleToStl)(stl_filename, particle)              | Export one and only one Particle (scaled or not) to STL file.                    |
| [`ExportToSTL`](#generated.RAExportToolkit.ExportToSTL)(stl_filename, entities[, ...])                       | Export one or more entities (scaled or not) to STL files.                        |

<a id="generated.RAExportToolkit.ExportFEMForces"></a>

#### ExportFEMForces(csv_filename: str, entities_to_export: plugins10.plugins.api.api_element_item.ApiElementItem | str | list, timestep_to_export: Optional[ITimeStep] = None, apply_transformation: bool = True)

See [`ExportGeometryLoads()`](#generated.RAExportToolkit.ExportGeometryLoads).

File will have area and X, Y and Z forces also exported.

<a id="generated.RAExportToolkit.ExportGeometryLoads"></a>

#### ExportGeometryLoads(csv_filename: str, entities_to_export: plugins10.plugins.api.api_element_item.ApiElementItem | str | list, timestep_to_export: Optional[ITimeStep] = None, apply_transformation: bool = True, export_forces: bool = False)

Export the FEM forces of one or more entities to a CSV file. One CSV file may contain the
forces of more than one entity, but only of a single timestep.

* **Parameters:**
  * **csv_filename** – The full pathname of the CSV file to generate. Previously existing files will be overwritten.
  * **entities_to_export** – The entities to export. This parameter can be a single item, in which case it can be an
    ApiElementItem instance or the name of such an instance. The parameter can also be an
    iterable containing any mix of the two types mentioned.
  * **timestep_to_export** – The timestep of which the FEM forces will be exported. Passing None means that the current
    active timestep will be exported instead.
  * **apply_transformation** – True whether boundary coordinates and forces should be transformed back to boundary’s
    original position, before all movements took place.
  * **export_forces** – Flag to export force instead of pressure components.

<a id="generated.RAExportToolkit.ExportGeometryLoadsMultiTime"></a>

#### ExportGeometryLoadsMultiTime(csv_filename: str, entities_to_export: plugins10.plugins.api.api_element_item.ApiElementItem | str | list, timesteps_to_export: list[coilib50.time.time_step_interface.ITimeStep], apply_transformation: bool = True, export_forces: bool = False, show_progress: bool = False)

Export the FEM forces of one or more entities to one or multiple CSV files. Each CSV contains the
forces of more than one entity, but only of a single timestep.

* **Parameters:**
  * **csv_filename** – The full pathname of the CSV file to generate. Previously existing files will be overwritten.
    If timesteps_to_export has more than one timestep csv_filename will be modified to include the index
    e.g. my_csv_file.csv will write to my_csv_file_01.csv, my_csv_file_02.csv, etc
  * **entities_to_export** – The entities to export. This parameter can be a single item, in which case it can be an
    ApiElementItem instance or the name of such an instance. The parameter can also be an
    iterable containing any mix of the two types mentioned.
  * **timesteps_to_export** – The list of times to export. Passing None or an empty list means that the current
    active timestep will be exported instead.
  * **apply_transformation** – True whether boundary coordinates and forces should be transformed back to boundary’s
    original position, before all movements took place.
  * **export_forces** – Flag to export force instead of pressure components.
  * **show_progress** – Whether a progress dialog should be shown during export.

<a id="generated.RAExportToolkit.ExportHTC"></a>

#### ExportHTC(csv_filename: str, entities_to_export: plugins10.plugins.api.api_element_item.ApiElementItem | str | list, timestep_to_export: coilib50.time.time_step_interface.ITimeStep | str | None, apply_transformation: bool, ref_temperature: float)

Export the HTC of one or more entities to a CSV file. One CSV file may contain the
HTC value of more than one entity, but only of a single timestep.

* **Parameters:**
  * **csv_filename** – The full pathname of the CSV file to generate. Previously existing files will be overwritten.
  * **entities_to_export** – The entities to export. This parameter can be a single item, in which case it can be an
    ApiElementItem instance or the name of such an instance. The parameter can also be an
    iterable containing any mix of the two types mentioned.
  * **timestep_to_export** – The timestep of which the HTC values will be exported. Passing None means that the current
    active timestep will be exported instead.
  * **apply_transformation** – True whether boundary coordinates and forces should be transformed back to boundary’s
    original position, before all movements took place.
  * **ref_temperature** – The arbitrary reference temperature.

<a id="generated.RAExportToolkit.ExportParticleToStl"></a>

#### ExportParticleToStl(stl_filename: str, particle: str | rocky30.models.particle.particle.Particle | plugins10.plugins.api.api_element_item.ApiElementItem, time_to_export: Optional[ITimeStep] = None, output_unit: Optional[str] = None, target_size: Optional[float] = None, target_unit: Optional[str] = None)

Export one and only one Particle (scaled or not) to STL file. The origin of Particle can be from a name, subject or the api element.

* **Parameters:**
  * **stl_filename** – The name of the resulting STL file. If multiple files are generated, the name of the
    entities will be appended to the filename, before the ‘.stl’ extension.
  * **particle** – The targets to export. The ‘particle’ can be the name of the Particle to export, the Subject instance, or the
    ApiElementItem instance.
  * **time_to_export** – The timestep for which to export the items. If None is passed, the application’s current
    timestep will be used.
  * **output_unit** – The optional output unit. If None is passed, the geometry will be exported in its native
    unit (meters).
  * **target_size** – The value of the wished scalar to scale the Particle
  * **target_unit** – The unit of the wished scalar to scale the Particle

<a id="generated.RAExportToolkit.ExportToSTL"></a>

#### ExportToSTL(stl_filename: str, entities: coilib50.subject._subject.Subject | plugins10.plugins.api.api_element_item.ApiElementItem | str | list, time_to_export: Optional[ITimeStep] = None, output_unit: Optional[str] = None)

Export one or more entities (scaled or not) to STL files. Valid entities to export are conveyors, custom
boundaries and any user process created with one of the aforementioned types in its process
hierarchy.

* **Parameters:**
  * **stl_filename** – The name of the resulting STL file. If multiple files are generated, the name of the
    entities will be appended to the filename, before the ‘.stl’ extension.
  * **entities** – The targets to export. This can be a list of elements, or a single element. Each
    ‘element’ can be the name of the geometry to export, the Subject instance, or the
    ApiElementItem instance.
  * **time_to_export** – The timestep for which to export the items. If None is passed, the application’s current
    timestep will be used.
  * **output_unit** – The optional output unit. If None is passed, the geometry will be exported in its native
    unit (meters).
