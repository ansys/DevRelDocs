

# RAUserProcessCollection

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAUserProcessCollection"></a>

### *class* RAUserProcessCollection

Rocky api collection of geometries.

**Methods:**

| [`CreateContactToParticleProcess`](#generated.RAUserProcessCollection.CreateContactToParticleProcess)(parent[, name])        | Creates a new ContactToParticle process using the given parent as input.       |
|------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| [`CreateCubeProcess`](#generated.RAUserProcessCollection.CreateCubeProcess)(parent[, name, center, ...])                     | Creates a new cube process using the given parent as input.                    |
| [`CreateCylinderProcess`](#generated.RAUserProcessCollection.CreateCylinderProcess)(parent[, name, ...])                     | Creates a new cube process using the given parent as input.                    |
| [`CreateEulerianStatistics`](#generated.RAUserProcessCollection.CreateEulerianStatistics)(parent[, name, ...])               | Creates a new cube process using the given parent as input.                    |
| [`CreateFilterProcess`](#generated.RAUserProcessCollection.CreateFilterProcess)(parent[, name])                              | Creates a new filter process using the given parent as input.                  |
| [`CreateInspectorProcess`](#generated.RAUserProcessCollection.CreateInspectorProcess)(parent[, name])                        | Creates a new plane process using the given parent as input.                   |
| [`CreateParticleTimeSelectionProcess`](#generated.RAUserProcessCollection.CreateParticleTimeSelectionProcess)(parent[, ...]) | Creates a new particle time selection process using the given parent as input. |
| [`CreateParticleToContactProcess`](#generated.RAUserProcessCollection.CreateParticleToContactProcess)(parent[, name])        | Creates a new ParticleToContact process using the given parent as input.       |
| [`CreatePlaneProcess`](#generated.RAUserProcessCollection.CreatePlaneProcess)(parent[, name, origin, ...])                   | Creates a new plane process using the given parent as input.                   |
| [`CreatePolyhedronProcess`](#generated.RAUserProcessCollection.CreatePolyhedronProcess)(parent, stl_filename)                | Creates a new polyhedron process using the given parent as input.              |
| [`CreatePropertyProcess`](#generated.RAUserProcessCollection.CreatePropertyProcess)(parent[, name])                          | Deprecated: Use CreateFilterProcess instead.                                   |
| [`CreateStreamlinesUserProcess`](#generated.RAUserProcessCollection.CreateStreamlinesUserProcess)(parent[, name])            | Creates a new StreamlinesUserProcess process using the given parent as input.  |
| [`CreateSurfaceUserProcess`](#generated.RAUserProcessCollection.CreateSurfaceUserProcess)(parent, stl_filename)              | Creates a new Surface process using the given parent as input.                 |
| [`CreateTrajectoryProcess`](#generated.RAUserProcessCollection.CreateTrajectoryProcess)(parent[, ...])                       | Create a new Particle Trajectory process.                                      |
| [`GetContactToParticleProcessNames`](#generated.RAUserProcessCollection.GetContactToParticleProcessNames)()                  | Get the names of created Contact to Particle processes.                        |
| [`GetCubeProcessNames`](#generated.RAUserProcessCollection.GetCubeProcessNames)()                                            | Get the names of created cube processes.                                       |
| [`GetCylinderProcessNames`](#generated.RAUserProcessCollection.GetCylinderProcessNames)()                                    | Get the names of created cylinder processes.                                   |
| [`GetEulerianStatisticsNames`](#generated.RAUserProcessCollection.GetEulerianStatisticsNames)()                              | Get the names of created eulerian statistics processes.                        |
| [`GetFilterProcessNames`](#generated.RAUserProcessCollection.GetFilterProcessNames)()                                        | Get the names of created property processes.                                   |
| [`GetInspectorProcessNames`](#generated.RAUserProcessCollection.GetInspectorProcessNames)()                                  | Get the names of created inspector processes.                                  |
| [`GetParticleTimeSelectionProcessNames`](#generated.RAUserProcessCollection.GetParticleTimeSelectionProcessNames)()          | Get the names of created particle time selection processes.                    |
| [`GetParticleToContactProcessNames`](#generated.RAUserProcessCollection.GetParticleToContactProcessNames)()                  | Get the names of created Particle to Contact processes.                        |
| [`GetPlaneProcessNames`](#generated.RAUserProcessCollection.GetPlaneProcessNames)()                                          | Get the names of created plane processes.                                      |
| [`GetPolyhedronProcessNames`](#generated.RAUserProcessCollection.GetPolyhedronProcessNames)()                                | Get the names of created polyhedron processes.                                 |
| [`GetProcess`](#generated.RAUserProcessCollection.GetProcess)(process_name)                                                  | Get a user process given its name.                                             |
| [`GetProcessNames`](#generated.RAUserProcessCollection.GetProcessNames)()                                                    | Get a list with the name of the user processes.                                |
| [`GetPropertyProcessNames`](#generated.RAUserProcessCollection.GetPropertyProcessNames)()                                    | Deprecated: Use GetFilterProcessNames instead.                                 |
| [`GetStreamlinesUserProcessNames`](#generated.RAUserProcessCollection.GetStreamlinesUserProcessNames)()                      | Get the names of created streamlines processes.                                |
| [`GetSurfaceUserProcessNames`](#generated.RAUserProcessCollection.GetSurfaceUserProcessNames)()                              | Get the names of created surfaces processes.                                   |
| [`GetTrajectoryProcessNames`](#generated.RAUserProcessCollection.GetTrajectoryProcessNames)()                                | Get the names of created trajectory processes.                                 |

<a id="generated.RAUserProcessCollection.CreateContactToParticleProcess"></a>

#### CreateContactToParticleProcess(parent, name=None)

Creates a new ContactToParticle process using the given parent as input.

* **Parameters:**
  * **parent** (*RAGridProcessElementItem*) – The new process’ parent
  * **name** (*str* *|**None*) – The name of the new process or None for default
* **Return type:**
  [RAContactToParticleProcess](RAContactToParticleProcess.md#generated.RAContactToParticleProcess)
* **Returns:**
  A new ContactToParticle process

<a id="generated.RAUserProcessCollection.CreateCubeProcess"></a>

#### CreateCubeProcess(parent, name=None, center=None, magnitude=None, rotation=None, parent_pool_id=None)

Creates a new cube process using the given parent as input.

* **Parameters:**
  * **parent** (*Grid* *|**Process*) – The cube process parent
  * **name** (*str* *|**None*) – The name of the new process or None for default
  * **center** (*tuple* *(**float* *,* *float* *,* *float* *)*) – The center X, Y and Z coordinates in meters (m)
  * **magnitude** – The center X, Y and Z magnitude in meters (m)
  * **rotation** – The center X, Y and Z rotation in degress (dega)
* **Return type:**
  [RACubeProcess](RACubeProcess.md#generated.RACubeProcess)
* **Returns:**
  A new cube process

<a id="generated.RAUserProcessCollection.CreateCylinderProcess"></a>

#### CreateCylinderProcess(parent, name=None, center=None, size=None, rotation=None, internal_factor=None, initial_angle=None, final_angle=None)

Creates a new cube process using the given parent as input.

* **Parameters:**
  * **parent** (*Grid* *|**Process*) – The cube process parent
  * **name** (*str* *|**None*) – The name of the new process or None for default
  * **center** (*tuple* *(**float* *,* *float* *,* *float* *)*) – The center X, Y and Z coordinates in meters (m)
  * **size** – The X, Y and Z size in meters (m)
  * **rotation** – The center X, Y and Z rotation in degress (dega)
  * **internal_factor** – The internal hole radius factor of the external given by the size in percentage (%)
  * **initial_angle** – The initial angle in degress (dega)
  * **final_angle** – The final angle in degress (dega)
* **Return type:**
  [RACylinderProcess](RACylinderProcess.md#generated.RACylinderProcess)
* **Returns:**
  A new cylinder process

<a id="generated.RAUserProcessCollection.CreateEulerianStatistics"></a>

#### CreateEulerianStatistics(parent, name=None, divisions=None)

Creates a new cube process using the given parent as input.

* **Parameters:**
  * **parent** (*Grid* *|**Process*) – The process parent. Must be either a cube or a cylinder.
  * **name** (*str* *|**None*) – The name of the new process or None for default
  * **divisions** – The number of divisions in i, j and k.
* **Return type:**
  [RAEulerianStatistics](RAEulerianStatistics.md#generated.RAEulerianStatistics)
* **Returns:**
  A new Eulerian Statistics process.

<a id="generated.RAUserProcessCollection.CreateFilterProcess"></a>

#### CreateFilterProcess(parent, name=None)

Creates a new filter process using the given parent as input.

* **Parameters:**
  * **parent** (*Grid* *|**Process*) – The filter process parent
  * **name** (*str* *|**None*) – The name of the new process or None for default
* **Return type:**
  [RAFilterProcess](RAFilterProcess.md#generated.RAFilterProcess)
* **Returns:**
  A new filter process

<a id="generated.RAUserProcessCollection.CreateInspectorProcess"></a>

#### CreateInspectorProcess(parent, name=None)

Creates a new plane process using the given parent as input.

* **Parameters:**
  * **parent** (*Grid* *|**Process*) – The plane process parent
  * **name** (*str* *|**None*) – The name of the new process or None for default
* **Return type:**
  [RAPlaneProcess](RAPlaneProcess.md#generated.RAPlaneProcess)
* **Returns:**
  A new plane process

<a id="generated.RAUserProcessCollection.CreateParticleTimeSelectionProcess"></a>

#### CreateParticleTimeSelectionProcess(parent, range_definition='absolute', initial=0, final=0, unit='s')

Creates a new particle time selection process using the given parent as input.

* **Parameters:**
  * **parent** – Input for the particle time selection.
  * **range_definition** – One of:
    ‘app_time_filter’, ‘all’, ‘last_output’, ‘absolute’, ‘single’, ‘absolute_only_start’, ‘relative_to_end’.
  * **initial** (*float*) – The initial value for the particle time selection to consider particles. May be ignored
    depending on the range definition.
  * **final** (*float*) – The final time for the particle time selection to consider particles. May be ignored
    depending on the range definition.
  * **unit** – The unit for the initial/final values passed.

<a id="generated.RAUserProcessCollection.CreateParticleToContactProcess"></a>

#### CreateParticleToContactProcess(parent, name=None)

Creates a new ParticleToContact process using the given parent as input.

* **Parameters:**
  * **parent** (*RAGridProcessElementItem*) – The new process’ parent
  * **name** (*str* *|**None*) – The name of the new process or None for default
* **Return type:**
  [RAParticleToContactProcess](RAParticleToContactProcess.md#generated.RAParticleToContactProcess)
* **Returns:**
  A new ParticleToContact process

<a id="generated.RAUserProcessCollection.CreatePlaneProcess"></a>

#### CreatePlaneProcess(parent, name=None, origin=None, normal=None, plane_type=None, plane_mode=None)

Creates a new plane process using the given parent as input.

* **Parameters:**
  * **parent** (*Grid* *|**Process*) – The plane process parent
  * **name** (*str* *|**None*) – The name of the new process or None for default
  * **origin** (*tuple* *(**float* *,* *float* *,* *float* *)*) – The origin X, Y and Z coordinates in meters (m)
  * **normal** (*tuple* *(**float* *,* *float* *,* *float* *)*) – The normal X, Y and Z in meters (m)
* **Return type:**
  [RAPlaneProcess](RAPlaneProcess.md#generated.RAPlaneProcess)
* **Returns:**
  A new plane process

<a id="generated.RAUserProcessCollection.CreatePolyhedronProcess"></a>

#### CreatePolyhedronProcess(parent: ApiElementItem, stl_filename: str, name: str | None = None, import_scale: float = 1.0, convert_yz: bool = False)

Creates a new polyhedron process using the given parent as input.

* **Parameters:**
  * **parent** (*Grid* *|**Process*) – The polyhedron process parent.
  * **stl_filename** (*str*) – The filename with the stl to be loaded for the polyhedron.
  * **name** (*str* *|**None*) – The name of the new process or None for default.
  * **import_scale** (*float*) – The import scale to be applied on the STL’s geometry when importing.
  * **convert_yz** (*bool*) – Whether the Y and Z axes should be swapped on the STL’s geometry when importing.
* **Return type:**
  [RAPolyhedronProcess](RAPolyhedronProcess.md#generated.RAPolyhedronProcess)
* **Returns:**
  A new polyhedron process.

<a id="generated.RAUserProcessCollection.CreatePropertyProcess"></a>

#### CreatePropertyProcess(parent, name=None)

Deprecated: Use CreateFilterProcess instead.

<a id="generated.RAUserProcessCollection.CreateStreamlinesUserProcess"></a>

#### CreateStreamlinesUserProcess(parent: ApiElementItem, name: str | None = None)

Creates a new StreamlinesUserProcess process using the given parent as input.

* **Parameters:**
  * **parent** – The parent process.
  * **name** – The name of the new process or None for default

<a id="generated.RAUserProcessCollection.CreateSurfaceUserProcess"></a>

#### CreateSurfaceUserProcess(parent: ApiElementItem, stl_filename: str, name: str | None = None, import_scale: float = 1.0, convert_yz: bool = False)

Creates a new Surface process using the given parent as input.

* **Parameters:**
  * **parent** – The surface process parent.
  * **stl_filename** – The filename with the stl to be loaded for the surface.
  * **name** – The name of the new process or None for default.
  * **import_scale** – The import scale to be applied on the STL’s geometry when importing.
  * **convert_yz** – Whether the Y and Z axes should be swapped on the STL’s geometry when importing.
* **Returns:**
  A new surface process.

<a id="generated.RAUserProcessCollection.CreateTrajectoryProcess"></a>

#### CreateTrajectoryProcess(parent, starting_timestep=None, number_timesteps=None, particle_stride=None)

Create a new Particle Trajectory process.

* **See:**
  RATrajectoryProcess for a explanation of the parameters.
* **Return type:**
  [RATrajectoryProcess](RATrajectoryProcess.md#generated.RATrajectoryProcess)

<a id="generated.RAUserProcessCollection.GetContactToParticleProcessNames"></a>

#### GetContactToParticleProcessNames()

Get the names of created Contact to Particle processes.

* **Returns:**
  The list of Contact to Particle user process names

<a id="generated.RAUserProcessCollection.GetCubeProcessNames"></a>

#### GetCubeProcessNames()

Get the names of created cube processes.

* **Returns:**
  The list of cube user process names

<a id="generated.RAUserProcessCollection.GetCylinderProcessNames"></a>

#### GetCylinderProcessNames()

Get the names of created cylinder processes.

* **Returns:**
  The list of cylinder user process names

<a id="generated.RAUserProcessCollection.GetEulerianStatisticsNames"></a>

#### GetEulerianStatisticsNames()

Get the names of created eulerian statistics processes.

* **Returns:**
  The list of eulerian statistics user process names

<a id="generated.RAUserProcessCollection.GetFilterProcessNames"></a>

#### GetFilterProcessNames()

Get the names of created property processes.

* **Returns:**
  The list of property user process names.

<a id="generated.RAUserProcessCollection.GetInspectorProcessNames"></a>

#### GetInspectorProcessNames()

Get the names of created inspector processes.

* **Returns:**
  The list of inspector user process names

<a id="generated.RAUserProcessCollection.GetParticleTimeSelectionProcessNames"></a>

#### GetParticleTimeSelectionProcessNames()

Get the names of created particle time selection processes.

* **Returns:**
  The list of particle time selection user process names

<a id="generated.RAUserProcessCollection.GetParticleToContactProcessNames"></a>

#### GetParticleToContactProcessNames()

Get the names of created Particle to Contact processes.

* **Returns:**
  The list of Particle to Contact user process names

<a id="generated.RAUserProcessCollection.GetPlaneProcessNames"></a>

#### GetPlaneProcessNames()

Get the names of created plane processes.

* **Returns:**
  The list of plane user process names

<a id="generated.RAUserProcessCollection.GetPolyhedronProcessNames"></a>

#### GetPolyhedronProcessNames()

Get the names of created polyhedron processes.

* **Returns:**
  The list of polyhedron user process names.

<a id="generated.RAUserProcessCollection.GetProcess"></a>

#### GetProcess(process_name)

Get a user process given its name.

* **Parameters:**
  **process_name** (*unicode*)
* **Return type:**
  ApiElementItem

<a id="generated.RAUserProcessCollection.GetProcessNames"></a>

#### GetProcessNames()

Get a list with the name of the user processes.

* **Return type:**
  list(unicode)

<a id="generated.RAUserProcessCollection.GetPropertyProcessNames"></a>

#### GetPropertyProcessNames()

Deprecated: Use GetFilterProcessNames instead.

<a id="generated.RAUserProcessCollection.GetStreamlinesUserProcessNames"></a>

#### GetStreamlinesUserProcessNames()

Get the names of created streamlines processes.

* **Returns:**
  The list of streamlines user process names.

<a id="generated.RAUserProcessCollection.GetSurfaceUserProcessNames"></a>

#### GetSurfaceUserProcessNames()

Get the names of created surfaces processes.

* **Returns:**
  The list of surfaces user process names.

<a id="generated.RAUserProcessCollection.GetTrajectoryProcessNames"></a>

#### GetTrajectoryProcessNames()

Get the names of created trajectory processes.

* **Returns:**
  The list of trajectory user process names
