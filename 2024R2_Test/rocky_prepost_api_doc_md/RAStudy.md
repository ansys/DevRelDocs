# RAStudy

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAStudy

Rocky API wrapper for a project’s Study.

This wrapper is the main access point for all other entities typically present in a Rocky
project. Access the [`RAStudy`](#generated.RAStudy) via the [`RAProject`](RAProject.md#generated.RAProject) once a project has been created
or opened ([more](#more)):

```python
project = app.GetProject()
study = project.GetStudy()
```

<a id="more"></a>

The [`RAStudy`](#generated.RAStudy) class acts as a main hub of functionality, providing methods to perform
various common actions related to simulations:

- Helper creation methods for simulation entities such as [`CreateParticle()`](#generated.RAStudy.CreateParticle),
  [`CreateFeedConveyor()`](#generated.RAStudy.CreateFeedConveyor), [`ImportWall()`](#generated.RAStudy.ImportWall), etc.
- Accessor methods for specialized API wrapper objects such as [`GetMaterialCollection()`](#generated.RAStudy.GetMaterialCollection),
  [`GetPhysics()`](#generated.RAStudy.GetPhysics), [`GetSimulatorRun()`](#generated.RAStudy.GetSimulatorRun), etc.
- Methods related to the simulation and its results, such as [`StartSimulation()`](#generated.RAStudy.StartSimulation),
  [`StopSimulation()`](#generated.RAStudy.StopSimulation), [`DeleteResults()`](#generated.RAStudy.DeleteResults), etc.

**Methods:**

| [`CanResumeSimulation`](#generated.RAStudy.CanResumeSimulation)()                                        | Whether the simulation can be resumed.                                                           |
|----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`CreateContinuousInjection`](#generated.RAStudy.CreateContinuousInjection)(entry_point, particle)       | Create a particle input with the given entry_point and particle.                                 |
| [`CreateFeedConveyor`](#generated.RAStudy.CreateFeedConveyor)()                                          | Creates a new feed conveyor and add it to the project.                                           |
| [`CreateInlet`](#generated.RAStudy.CreateInlet)()                                                        | Create a new inlet and add it to the project.                                                    |
| [`CreateMaterialAndRelatedInteractions`](#generated.RAStudy.CreateMaterialAndRelatedInteractions)([...]) | Deprecated: Use `CreateSolidMaterialAndRelatedInteractions()` instead.                           |
| [`CreateOutlet`](#generated.RAStudy.CreateOutlet)(exit_point)                                            | Create an outlet with the given exit point.                                                      |
| [`CreateParticle`](#generated.RAStudy.CreateParticle)()                                                  | Create a particle in the study with default values.                                              |
| [`CreateParticleInlet`](#generated.RAStudy.CreateParticleInlet)(entry_point, particle)                   | Create a particle inlet with the given entry_point and particle.                                 |
| [`CreateReceivingConveyor`](#generated.RAStudy.CreateReceivingConveyor)()                                | Creates a new receiving conveyor and add it to the project.                                      |
| [`CreateVolumeFill`](#generated.RAStudy.CreateVolumeFill)([particle, name, mass, ...])                   | Creates a volume fill with the given properties.                                                 |
| [`CreateVolumetricInlet`](#generated.RAStudy.CreateVolumetricInlet)([particle, name, ...])               | Creates a volumetric inlet with the given properties.                                            |
| [`DeleteResults`](#generated.RAStudy.DeleteResults)()                                                    | Called to delete any results we currently have from a simulation.                                |
| [`ExtendSimulation`](#generated.RAStudy.ExtendSimulation)([extension_amount, time, ...])                 | Extend the simulation: either its duration, or the duration of an inlet in the study (or both).  |
| [`GetAirFlow`](#generated.RAStudy.GetAirFlow)()                                                          | Get the RAAirFlow object (if applicable).                                                        |
| [`GetCFDCoupling`](#generated.RAStudy.GetCFDCoupling)()                                                  | Get the current CFD coupling object.                                                             |
| [`GetCalculations`](#generated.RAStudy.GetCalculations)()                                                | Get the project's Calculations.                                                                  |
| [`GetCollectForcesForFemAnalysis`](#generated.RAStudy.GetCollectForcesForFemAnalysis)()                  | Checks wheter the Collision Statistics modules are colecting FEM Forces for analysis             |
| [`GetContactData`](#generated.RAStudy.GetContactData)()                                                  | Get the RAContactData object.                                                                    |
| [`GetCustomerName`](#generated.RAStudy.GetCustomerName)()                                                | Get the study customer name.                                                                     |
| [`GetDescription`](#generated.RAStudy.GetDescription)()                                                  | Get the study description.                                                                       |
| [`GetDomainSettings`](#generated.RAStudy.GetDomainSettings)()                                            | Get the study's Domain Settings.                                                                 |
| [`GetElementCurve`](#generated.RAStudy.GetElementCurve)(element_name, curve_name[, ...])                 | Get the curve matching a given element name and curve name.                                      |
| [`GetExportToolkit`](#generated.RAStudy.GetExportToolkit)()                                              | Get a RAExportToolkit object related to this RAStudy.                                            |
| [`GetFEMForcesAnalysisModules`](#generated.RAStudy.GetFEMForcesAnalysisModules)(module_collection)       | Get the name and the FEM Forces property for all available Boundary Collision Statistics modules |
| [`GetGeometry`](#generated.RAStudy.GetGeometry)(geometry_name)                                           | Get the geometry with the given name                                                             |
| [`GetGeometryCollection`](#generated.RAStudy.GetGeometryCollection)()                                    | Get the study's Geometry Collection.                                                             |
| [`GetInletsOutletsCollection`](#generated.RAStudy.GetInletsOutletsCollection)()                          | Get the study's Inlets and Outlets Collection.                                                   |
| [`GetIntraParticleCollisionStatistics`](#generated.RAStudy.GetIntraParticleCollisionStatistics)()        | Get whether the Intra Particle Collision Statistics Module is enabled.                           |
| [`GetJointsData`](#generated.RAStudy.GetJointsData)()                                                    | Get the RAParticleJointsData object.                                                             |
| [`GetMaterialCollection`](#generated.RAStudy.GetMaterialCollection)()                                    | Get the study's Material Collection.                                                             |
| [`GetMaterialsInteractionCollection`](#generated.RAStudy.GetMaterialsInteractionCollection)()            | Get the study's Materials Interaction Collection.                                                |
| [`GetMeshedParticlesUpscalingEnabled`](#generated.RAStudy.GetMeshedParticlesUpscalingEnabled)()          | Get the Meshed Particles Upscaling value.                                                        |
| [`GetModuleCollection`](#generated.RAStudy.GetModuleCollection)()                                        | Get the study's Module Collection.                                                               |
| [`GetMotionFrameSource`](#generated.RAStudy.GetMotionFrameSource)()                                      | Get the study's Motion Frame Source.                                                             |
| [`GetParticleCollection`](#generated.RAStudy.GetParticleCollection)()                                    | Get the study's Particle Collection.                                                             |
| [`GetParticleInput`](#generated.RAStudy.GetParticleInput)(input_name)                                    | Get the particle input with the given name.                                                      |
| [`GetParticles`](#generated.RAStudy.GetParticles)()                                                      | Get the process that contains the simulated particles.                                           |
| [`GetPhysics`](#generated.RAStudy.GetPhysics)()                                                          | Get the study's Physics object.                                                                  |
| [`GetPointCloudCollection`](#generated.RAStudy.GetPointCloudCollection)()                                | Get the study's Point Cloud Collection.                                                          |
| [`GetSimulatorRun`](#generated.RAStudy.GetSimulatorRun)()                                                | Get the API wrapper for simulation-related parameters.                                           |
| [`GetSolver`](#generated.RAStudy.GetSolver)()                                                            | Synonym for [`GetSimulatorRun()`](#generated.RAStudy.GetSimulatorRun).                           |
| [`GetStatus`](#generated.RAStudy.GetStatus)([include_opengl_messages])                                   | Check the current Study status                                                                   |
| [`GetSurfaceFromFilename`](#generated.RAStudy.GetSurfaceFromFilename)(filename)                          | Given a filename finds all imported geometries created from it.                                  |
| [`GetTimeSet`](#generated.RAStudy.GetTimeSet)()                                                          | Get the study's timeset.                                                                         |
| [`GetWallFromFilename`](#generated.RAStudy.GetWallFromFilename)(filename)                                | Given a filename finds all imported geometries created from it.                                  |
| [`HasResults`](#generated.RAStudy.HasResults)()                                                          | Whether we have results from a previous simulation.                                              |
| [`ImportSurface`](#generated.RAStudy.ImportSurface)(custom_filename[, ...])                              | Import a custom surface file and create one or more corresponding geometries in the study.       |
| [`ImportSystemCouplingWall`](#generated.RAStudy.ImportSystemCouplingWall)(custom_filename[, ...])        | Import a geometry file and create one or more corresponding geometries in the study.             |
| [`ImportWall`](#generated.RAStudy.ImportWall)(custom_filename[, import_scale, ...])                      | Import a geometry file and create one or more corresponding geometries in the study.             |
| [`IsSimulating`](#generated.RAStudy.IsSimulating)()                                                      | Whether we're currently simulating something.                                                    |
| [`RefreshResults`](#generated.RAStudy.RefreshResults)()                                                  | Called to refresh the results we currently have from a simulation.                               |
| [`RemoveMaterialAndRelatedInteractions`](#generated.RAStudy.RemoveMaterialAndRelatedInteractions)(...)   | Deprecated: Use `RemoveSolidMaterialAndRelatedInteractions()` instead.                           |
| [`RemoveSurface`](#generated.RAStudy.RemoveSurface)(filename)                                            | Remove custom surfaces associated with the given filename.                                       |
| [`RemoveWall`](#generated.RAStudy.RemoveWall)(filename)                                                  | Remove walls associated with the given filename.                                                 |
| [`ReplaceWallTriangles`](#generated.RAStudy.ReplaceWallTriangles)(new_filename[, ...])                   | Replace the existing triangles of a geometry with new triangles.                                 |
| [`SetCollectForcesForFemAnalysis`](#generated.RAStudy.SetCollectForcesForFemAnalysis)(value)             | Enable the Boundary Collision Statistics modules and enable/disable the FEM Forces analysis      |
| [`SetCustomerName`](#generated.RAStudy.SetCustomerName)(customer_name)                                   | Change the study customer's name                                                                 |
| [`SetDescription`](#generated.RAStudy.SetDescription)(description)                                       | Change the study description                                                                     |
| [`SetIntraParticleCollisionStatistics`](#generated.RAStudy.SetIntraParticleCollisionStatistics)(value)   | Enable/disable the Intra Particle Collision Statistics Module.                                   |
| [`SetVariable`](#generated.RAStudy.SetVariable)(name, value)                                             | Sets the values the given parametric variable                                                    |
| [`StartSimulation`](#generated.RAStudy.StartSimulation)([skip_summary, delete_results])                  | Start the simulation.                                                                            |
| [`StopSimulation`](#generated.RAStudy.StopSimulation)()                                                  | Stops a currently running simulation.                                                            |

**Attributes:**

| [`customer_name`](#generated.RAStudy.customer_name)   | Get the study customer name.   |
|-------------------------------------------------------|--------------------------------|
| [`description`](#generated.RAStudy.description)       | Get the study description.     |

#### CanResumeSimulation()

Whether the simulation can be resumed.

#### CreateContinuousInjection(entry_point: Union[RAFeedConveyor, RAInletGeometry], particle: RAParticle)

Create a particle input with the given entry_point and particle.

* **Parameters:**
  * **entry_point** – The input’s entry point - either a FeedConveyor or an Inlet.
  * **particle** – The particle that will enter through this input.

#### CreateFeedConveyor()

Creates a new feed conveyor and add it to the project.

#### CreateInlet()

Create a new inlet and add it to the project.

#### CreateMaterialAndRelatedInteractions(material_name: Optional[str] = None)

Deprecated: Use `CreateSolidMaterialAndRelatedInteractions()` instead.

#### CreateOutlet(exit_point: RABaseGeometry)

Create an outlet with the given exit point.

* **Parameters:**
  **exit_point** – The outlet’s exit point surface.

#### CreateParticle()

Create a particle in the study with default values.

#### CreateParticleInlet(entry_point: Union[RAFeedConveyor, RAInletGeometry, RASurface], particle: RAParticle)

Create a particle inlet with the given entry_point and particle.

* **Parameters:**
  * **entry_point** – The input’s entry point - either a FeedConveyor or an Inlet.
  * **particle** – The particle that will enter through this input.

#### CreateReceivingConveyor()

Creates a new receiving conveyor and add it to the project.

#### CreateVolumeFill(particle: Optional[Union[RAParticle, List[RAParticle]]] = None, name: Optional[str] = None, mass: float = 100.0, seed_coordinates: Optional[Tuple[float, float, float]] = None, geometries: Optional[List[Union[str, RAWall]]] = None, use_geometries_to_compute: bool = False, box_center: Optional[Tuple[float, float, float]] = None, box_dimensions: Optional[Tuple[float, float, float]] = None)

Creates a volume fill with the given properties.

* **Parameters:**
  * **particle** – Particles used to create and link to GetInputPropertiesList
    If None, will not create any property
  * **name** – The name which will be used for the volume fill.
  * **mass** – The mass in kilograms to be applied to the created property
  * **seed_coordinates** – A point (x, y, z) in meters that will be the reference to start the filling process.
  * **geometries** – A list of names or RAWall selected in RAVolumetricInlet. The names or RAWall list must match the
    existent geometries.
  * **use_geometries_to_compute** – If true: the limits of the filling process will be the selected boundaries.
    If false: a cube must be defined to be the limits of the filling process.
  * **box_center** – A point (x, y, z) that will be the center of the limit cube.
  * **dimensions** – The dimensions (length, width, height) of the limit cube.

#### CreateVolumetricInlet(particle: Optional[Union[RAParticle, List[RAParticle]]] = None, name: Optional[str] = None, mass: float = 100.0, seed_coordinates: Optional[Tuple[float, float, float]] = None, geometries: Optional[List[Union[str, RAWall]]] = None, use_geometries_to_compute: bool = False, box_center: Optional[Tuple[float, float, float]] = None, box_dimensions: Optional[Tuple[float, float, float]] = None)

Creates a volumetric inlet with the given properties.

* **Parameters:**
  * **particle** – Particles used to create and link to GetInputPropertiesList
    If None, will not create any property
  * **name** – The name which will be used for the volume fill.
  * **mass** – The mass in kilograms to be applied to the created property
  * **seed_coordinates** – A point (x, y, z) in meters that will be the reference to start the filling process.
  * **geometries** – A list of names or RAWall selected in RAVolumetricInlet. The names or RAWall list must match the
    existent geometries.
  * **use_geometries_to_compute** – If true: the limits of the filling process will be the selected boundaries.
    If false: a cube must be defined to be the limits of the filling process.
  * **box_center** – A point (x, y, z) that will be the center of the limit cube.
  * **dimensions** – The dimensions (length, width, height) of the limit cube.
  * **box_dimensions** – The dimensions (lenght, width, height) of the limit cube.

#### DeleteResults()

Called to delete any results we currently have from a simulation.

#### ExtendSimulation(extension_amount: Union[float, Scalar] = 0, time: Optional[Union[int, TimeStep]] = None, inlet_extensions: Optional[List[Tuple[str, Union[float, Scalar]]]] = None)

Extend the simulation: either its duration, or the duration of an inlet in the study (or
both).

* **Parameters:**
  * **extension_amount** – The number of seconds to extend the simulation by.
  * **time** – The optional time at which to extend the simulation.
  * **inlet_extensions** – The list of input extensions.
    The first parameter of each pair must be the name of the continuous injection to extend,
    and the second is the number of seconds to extend the input by.

#### GetAirFlow()

Get the RAAirFlow object (if applicable).

* **Returns:**
  The AirFlow object is configured as the CFD coupling mode
  None otherwise

#### GetCFDCoupling()

Get the current CFD coupling object.

* **Returns:**
  The CFDCoupling object

#### GetCalculations()

Get the project’s Calculations.

#### GetCollectForcesForFemAnalysis()

Checks wheter the Collision Statistics modules are colecting FEM Forces for analysis

* **Return bool:**
  True if the Collect FEM Forces property of any Collision Statistics module is enabled

#### GetContactData()

Get the RAContactData object.

* **Returns:**
  The contact data object.

#### GetCustomerName()

Get the study customer name.

#### GetDescription()

Get the study description.

#### GetDomainSettings()

Get the study’s Domain Settings.

#### GetElementCurve(element_name: str, curve_name: str, simulation_name: Optional[str] = None, realization: Optional[str] = None)

Get the curve matching a given element name and curve name.

* **Parameters:**
  * **element_name** – unicode
    The name of the element
  * **curve_name** – unicode
    The name of the curve
  * **simulation_name** – unicode
    An optional parameter for defining the simulation to get the curve from.
  * **realization** – unicode
    An additional keyword to identify the curve realization
* **Return type:**
  Curve
* **Returns:**
  The curves for the given element and name.

#### GetExportToolkit()

Get a RAExportToolkit object related to this RAStudy. The returned object can be used
for export operations.

#### GetFEMForcesAnalysisModules(module_collection: RAModuleCollection)

Get the name and the FEM Forces property for all available Boundary Collision Statistics
modules

* **Parameters:**
  **module_collection** ([*RAModuleCollection*](RAModuleCollection.md#generated.RAModuleCollection)) – The study’s Module Collection
* **Return Dict[str, str]:**
  A Dict with the Module Name and the FEM Forces property name

#### GetGeometry(geometry_name: str)

Get the geometry with the given name

* **Returns:**
  The geometry with the given name

#### GetGeometryCollection()

Get the study’s Geometry Collection.

#### GetInletsOutletsCollection()

Get the study’s Inlets and Outlets Collection.

#### GetIntraParticleCollisionStatistics()

Get whether the Intra Particle Collision Statistics Module is enabled.

#### GetJointsData()

Get the RAParticleJointsData object.

* **Returns:**
  The joint statisctics data object.

#### GetMaterialCollection()

Get the study’s Material Collection.

#### GetMaterialsInteractionCollection()

Get the study’s Materials Interaction Collection.

#### GetMeshedParticlesUpscalingEnabled()

Get the Meshed Particles Upscaling value.

#### GetModuleCollection()

Get the study’s Module Collection.

#### GetMotionFrameSource()

Get the study’s Motion Frame Source.

* **Returns:**
  The motion frame source, used to deal with motion.

#### GetParticleCollection()

Get the study’s Particle Collection.

#### GetParticleInput(input_name: str)

Get the particle input with the given name.

#### GetParticles()

Get the process that contains the simulated particles.

* **Returns:**
  The particles process

#### GetPhysics()

Get the study’s Physics object.

#### GetPointCloudCollection()

Get the study’s Point Cloud Collection.

#### GetSimulatorRun()

Get the API wrapper for simulation-related parameters.

#### GetSolver()

Synonym for [`GetSimulatorRun()`](#generated.RAStudy.GetSimulatorRun).

#### *classmethod* GetStatus(include_opengl_messages: bool = False)

Check the current Study status

* **Parameters:**
  **include_opengl_messages** – Whether messages related to OpenGL should be included in the status.
* **Returns:**
  Returns a list of subject names and the existing status as a list of tuples with the
  message type and description

#### GetSurfaceFromFilename(filename: str)

Given a filename finds all imported geometries created from it.

* **Parameters:**
  **filename** – The name of the file that originally created a set of geometries

#### GetTimeSet()

Get the study’s timeset.

- Before simulation, the timeset will contain the timesteps used in motion preview.
- After simulation, the timeset will contain the actual simulation timesteps.

#### GetWallFromFilename(filename: str)

Given a filename finds all imported geometries created from it.

* **Parameters:**
  **filename** – The name of the file that originally created a set of geometries

#### HasResults()

Whether we have results from a previous simulation.

#### ImportSurface(custom_filename: str, import_scale: float = 1.0, convert_yz: bool = False, custom_name_prefix: Optional[str] = None)

Import a custom surface file and create one or more corresponding geometries in the study.

* **Parameters:**
  * **custom_filename** – The filename of the STL, DXF or XGL file to import.
  * **import_scale** – The import scale to be applied to the imported geometry.
  * **convert_yz** – Whether the y and z axes of the imported geometry should be converted.

#### ImportSystemCouplingWall(custom_filename: str, import_scale: float = 1.0, convert_yz: bool = False, custom_name_prefix: Optional[str] = None)

Import a geometry file and create one or more corresponding geometries in the study.

* **Parameters:**
  * **custom_filename** – The filename of the STL, DXF or XGL file to import.
  * **import_scale** – The import scale to be applied to the imported geometry.
  * **convert_yz** – Whether the y and z axes of the imported geometry should be converted.

#### ImportWall(custom_filename: str, import_scale: float = 1.0, convert_yz: bool = False, custom_name_prefix: Optional[str] = None)

Import a geometry file and create one or more corresponding geometries in the study.

* **Parameters:**
  * **custom_filename** – The filename of the STL, DXF or XGL file to import.
  * **import_scale** – The import scale to be applied to the imported geometry.
  * **convert_yz** – Whether the y and z axes of the imported geometry should be converted.

#### IsSimulating()

Whether we’re currently simulating something.

#### RefreshResults()

Called to refresh the results we currently have from a simulation.

#### RemoveMaterialAndRelatedInteractions(material_or_name: Union[RASolidMaterial, str])

Deprecated: Use `RemoveSolidMaterialAndRelatedInteractions()` instead.

#### RemoveSurface(filename: str)

Remove custom surfaces associated with the given filename.

* **Parameters:**
  **filename** – The name of the filename associated with the current project custom surfaces

#### RemoveWall(filename: str)

Remove walls associated with the given filename.

* **Parameters:**
  **filename** – The name of the filename associated with the current project walls

#### ReplaceWallTriangles(new_filename: str, import_scale: float = 1.0, convert_yz: bool = False)

Replace the existing triangles of a geometry with new triangles.

It is assumed that there is a geometry corresponding to new_filename, previously
imported. This method is used to update the triangles of the geometry, without
creating new model entities.

This method only supports geometry files that contain a single object. This is true for
all STL files, but XGL and DXF files generally support multiple objects per file - this
method will raise a RuntimeError in this case.

* **Parameters:**
  * **new_filename** – The filename of the STL, DXF or XGL file with new triangle data.
  * **import_scale** – The import scale to be applied to the imported geometry.
  * **convert_yz** – Whether the y and z axes of the imported geometry should be converted.

#### SetCollectForcesForFemAnalysis(value: bool)

Enable the Boundary Collision Statistics modules and enable/disable
the FEM Forces analysis

* **Parameters:**
  **value** (*bool*) – Wheter to enable or disable the modules

#### SetCustomerName(customer_name: str)

Change the study customer’s name

* **Parameters:**
  **customer_name** – The customer name to be set

#### SetDescription(description: str)

Change the study description

* **Parameters:**
  **description** – The customer name to be set

#### SetIntraParticleCollisionStatistics(value: bool)

Enable/disable the Intra Particle Collision Statistics Module.

Note: This shortcut method enables/disables \_all_ properties related to that Module.

* **Parameters:**
  **value** – 

#### SetVariable(name: str, value: float)

Sets the values the given parametric variable

* **Parameters:**
  * **name** – The name of the variable
  * **value** – The value to be set

#### StartSimulation(skip_summary: Optional[bool] = False, delete_results: Optional[bool] = False)

Start the simulation. If possible, will resume a previously interrupted simulation.
If you wish to start a simulation from scratch, delete previous results via
DeleteResults() first.

* **Parameters:**
  * **skip_summary** (*bool*) – If starting from scratch, whether the simulation summary will be skipped (False) or
    presented to the user (True).
  * **delete_results** (*bool*) – True if the simulation results should be deleted, False otherwise.
    If there are no simulation results, this flag is ignored

#### StopSimulation()

Stops a currently running simulation. If there’s no simulation running, does nothing.

#### *property* customer_name*: str*

Get the study customer name.

#### *property* description*: str*

Get the study description.
