# RAStudy

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAStudy"></a>

### *class* RAStudy

Rocky PrePost Scripting wrapper for a project’s Study.

This wrapper is the main access point for all other entities typically present in a Rocky
project. Access the [`RAStudy`](#generated.RAStudy) via the [`RAProject`](RAProject.md#generated.RAProject) once a project has been created
or opened (more):

```python
project = app.GetProject()
study = project.GetStudy()
```

<a id="more"></a>

The [`RAStudy`](#generated.RAStudy) class acts as a main hub of functionality, providing methods to perform
various common actions related to simulations:

- Helper creation methods for simulation entities such as [`CreateParticle()`](#generated.RAStudy.CreateParticle),
  [`CreateFeedConveyor()`](#generated.RAStudy.CreateFeedConveyor), [`ImportWall()`](#generated.RAStudy.ImportWall), etc.
- Accessor methods for specialized PrePost Scripting wrapper objects such as [`GetMaterialCollection()`](#generated.RAStudy.GetMaterialCollection),
  [`GetPhysics()`](#generated.RAStudy.GetPhysics), [`GetSimulatorRun()`](#generated.RAStudy.GetSimulatorRun), etc.
- Methods related to the simulation and its results, such as [`StartSimulation()`](#generated.RAStudy.StartSimulation),
  [`StopSimulation()`](#generated.RAStudy.StopSimulation), [`DeleteResults()`](#generated.RAStudy.DeleteResults), etc.

**Methods:**

| Name | Description |
|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`CanResumeSimulation`](#generated.RAStudy.CanResumeSimulation)()                                        | Whether the simulation can be resumed.                                                                                                                                          |
| [`CreateContinuousInjection`](#generated.RAStudy.CreateContinuousInjection)(entry_point, particle)       | Create a particle input with the given entry_point and particle.                                                                                                                |
| [`CreateFeedConveyor`](#generated.RAStudy.CreateFeedConveyor)()                                          | Creates a new feed conveyor and add it to the project.                                                                                                                          |
| [`CreateInlet`](#generated.RAStudy.CreateInlet)()                                                        | Create a new inlet and add it to the project.                                                                                                                                   |
| [`CreateMaterialAndRelatedInteractions`](#generated.RAStudy.CreateMaterialAndRelatedInteractions)([...]) | Deprecated: Use `CreateSolidMaterialAndRelatedInteractions()` instead.                                                                                                          |
| [`CreateOutlet`](#generated.RAStudy.CreateOutlet)(exit_point)                                            | Create an outlet with the given exit point.                                                                                                                                     |
| [`CreateParticle`](#generated.RAStudy.CreateParticle)()                                                  | Create a particle in the study with default values.                                                                                                                             |
| [`CreateParticleInlet`](#generated.RAStudy.CreateParticleInlet)(entry_point, particle)                   | Create a particle inlet with the given entry_point and particle.                                                                                                                |
| [`CreateReceivingConveyor`](#generated.RAStudy.CreateReceivingConveyor)()                                | Creates a new receiving conveyor and add it to the project.                                                                                                                     |
| [`CreateVolumeFill`](#generated.RAStudy.CreateVolumeFill)([particle, name, mass, ...])                   | Creates a volume fill with the given properties.                                                                                                                                |
| [`CreateVolumetricInlet`](#generated.RAStudy.CreateVolumetricInlet)([particle, name, ...])               | Creates a volumetric inlet with the given properties.                                                                                                                           |
| [`DeleteResults`](#generated.RAStudy.DeleteResults)()                                                    | Called to delete any results we currently have from a simulation.                                                                                                               |
| [`ExtendSimulation`](#generated.RAStudy.ExtendSimulation)([extension_amount, time, ...])                 | Extend the simulation: either its duration, the duration of an inlet in the study or the duration of a periodic motion frame.                                                   |
| [`GetAirFlow`](#generated.RAStudy.GetAirFlow)()                                                          | Get the RAAirFlow object (if applicable).                                                                                                                                       |
| [`GetCFDCoupling`](#generated.RAStudy.GetCFDCoupling)()                                                  | Get the current CFD coupling object.                                                                                                                                            |
| [`GetCalculations`](#generated.RAStudy.GetCalculations)()                                                | Get the project's Calculations.                                                                                                                                                 |
| [`GetCollectForcesForFemAnalysis`](#generated.RAStudy.GetCollectForcesForFemAnalysis)()                  | Checks wheter the Collision Statistics modules are colecting FEM Forces for analysis                                                                                            |
| [`GetContactData`](#generated.RAStudy.GetContactData)()                                                  | Get the RAContactData object.                                                                                                                                                   |
| [`GetCustomerName`](#generated.RAStudy.GetCustomerName)()                                                | Get the study customer name.                                                                                                                                                    |
| [`GetDescription`](#generated.RAStudy.GetDescription)()                                                  | Get the study description.                                                                                                                                                      |
| [`GetDomainSettings`](#generated.RAStudy.GetDomainSettings)()                                            | Get the study's Domain Settings.                                                                                                                                                |
| [`GetElementCurve`](#generated.RAStudy.GetElementCurve)(element_name, curve_name[, ...])                 | Get the curve matching a given element name and curve name.                                                                                                                     |
| [`GetExportToolkit`](#generated.RAStudy.GetExportToolkit)()                                              | Get a RAExportToolkit object related to this RAStudy.                                                                                                                           |
| [`GetFEMForcesAnalysisModules`](#generated.RAStudy.GetFEMForcesAnalysisModules)(module_collection)       | Get the name and the FEM Forces property for all available Boundary Collision Statistics modules                                                                                |
| [`GetGeometry`](#generated.RAStudy.GetGeometry)(geometry_name)                                           | Get the geometry with the given name                                                                                                                                            |
| [`GetGeometryCollection`](#generated.RAStudy.GetGeometryCollection)()                                    | Get the study's Geometry Collection.                                                                                                                                            |
| [`GetInletsOutletsCollection`](#generated.RAStudy.GetInletsOutletsCollection)()                          | Get the study's Inlets and Outlets Collection.                                                                                                                                  |
| [`GetIntraParticleCollisionStatistics`](#generated.RAStudy.GetIntraParticleCollisionStatistics)()        | Get whether the Intra Particle Collision Statistics Module is enabled.                                                                                                          |
| [`GetJointsData`](#generated.RAStudy.GetJointsData)()                                                    | Get the RAParticleJointsData object.                                                                                                                                            |
| [`GetMaterialCollection`](#generated.RAStudy.GetMaterialCollection)()                                    | Get the study's Material Collection.                                                                                                                                            |
| [`GetMaterialsInteractionCollection`](#generated.RAStudy.GetMaterialsInteractionCollection)()            | Deprecated: Use [`RAMaterialCollection.GetMaterialsInteractionCollection()`](RAMaterialCollection.md#generated.RAMaterialCollection.GetMaterialsInteractionCollection) instead. |
| [`GetMeshedParticlesUpscalingEnabled`](#generated.RAStudy.GetMeshedParticlesUpscalingEnabled)()          | Get the Meshed Particles Upscaling value.                                                                                                                                       |
| [`GetModuleCollection`](#generated.RAStudy.GetModuleCollection)()                                        | Get the study's Module Collection.                                                                                                                                              |
| [`GetMotionFrameSource`](#generated.RAStudy.GetMotionFrameSource)()                                      | Get the study's Motion Frame Source.                                                                                                                                            |
| [`GetParticleCollection`](#generated.RAStudy.GetParticleCollection)()                                    | Get the study's Particle Collection.                                                                                                                                            |
| [`GetParticleInput`](#generated.RAStudy.GetParticleInput)(input_name)                                    | Get the particle input with the given name.                                                                                                                                     |
| [`GetParticles`](#generated.RAStudy.GetParticles)()                                                      | Get the process that contains the simulated particles.                                                                                                                          |
| [`GetPhysics`](#generated.RAStudy.GetPhysics)()                                                          | Get the study's Physics object.                                                                                                                                                 |
| [`GetPointCloudCollection`](#generated.RAStudy.GetPointCloudCollection)()                                | Get the study's Point Cloud Collection.                                                                                                                                         |
| [`GetProgress`](#generated.RAStudy.GetProgress)()                                                        | Get the current simulation progress [0.00, 100.00] or None if no simulation is running.                                                                                         |
| [`GetSimulatorRun`](#generated.RAStudy.GetSimulatorRun)()                                                | Get the PrePost Scripting wrapper for simulation-related parameters.                                                                                                            |
| [`GetSolver`](#generated.RAStudy.GetSolver)()                                                            | Synonym for [`GetSimulatorRun()`](#generated.RAStudy.GetSimulatorRun).                                                                                                          |
| [`GetStatus`](#generated.RAStudy.GetStatus)([include_opengl_messages])                                   | Check the current Study status                                                                                                                                                  |
| [`GetSurfaceFromFilename`](#generated.RAStudy.GetSurfaceFromFilename)(filename)                          | Given a filename finds all imported geometries created from it.                                                                                                                 |
| [`GetTimeSet`](#generated.RAStudy.GetTimeSet)()                                                          | Get the study's timeset.                                                                                                                                                        |
| [`GetWallFromFilename`](#generated.RAStudy.GetWallFromFilename)(filename)                                | Given a filename finds all imported geometries created from it.                                                                                                                 |
| [`HasCalculatedHTC`](#generated.RAStudy.HasCalculatedHTC)()                                              | Checks whether HTC is being calculated.                                                                                                                                         |
| [`HasResults`](#generated.RAStudy.HasResults)()                                                          | Whether we have results from a previous simulation.                                                                                                                             |
| [`ImportSurface`](#generated.RAStudy.ImportSurface)(custom_filename[, ...])                              | Import a custom surface file and create one or more corresponding geometries in the study.                                                                                      |
| [`ImportSystemCouplingWall`](#generated.RAStudy.ImportSystemCouplingWall)(custom_filename[, ...])        | Import a geometry file and create one or more corresponding geometries in the study.                                                                                            |
| [`ImportWall`](#generated.RAStudy.ImportWall)(custom_filename[, import_scale, ...])                      | Import a geometry file and create one or more corresponding geometries in the study.                                                                                            |
| [`IsSimulating`](#generated.RAStudy.IsSimulating)()                                                      | Whether we're currently simulating something.                                                                                                                                   |
| [`RefreshResults`](#generated.RAStudy.RefreshResults)()                                                  | Called to refresh the results we currently have from a simulation.                                                                                                              |
| [`RemoveMaterialAndRelatedInteractions`](#generated.RAStudy.RemoveMaterialAndRelatedInteractions)(...)   | Deprecated: Use `RemoveSolidMaterialAndRelatedInteractions()` instead.                                                                                                          |
| [`RemoveSurface`](#generated.RAStudy.RemoveSurface)(filename)                                            | Remove custom surfaces associated with the given filename.                                                                                                                      |
| [`RemoveWall`](#generated.RAStudy.RemoveWall)(filename)                                                  | Remove walls associated with the given filename.                                                                                                                                |
| [`ReplaceWallTriangles`](#generated.RAStudy.ReplaceWallTriangles)(new_filename[, ...])                   | Replace the existing triangles of a geometry with new triangles.                                                                                                                |
| [`SetCollectForcesForFemAnalysis`](#generated.RAStudy.SetCollectForcesForFemAnalysis)(value)             | Enable the Boundary Collision Statistics modules and enable/disable the FEM Forces analysis                                                                                     |
| [`SetCustomerName`](#generated.RAStudy.SetCustomerName)(customer_name)                                   | Change the study customer's name                                                                                                                                                |
| [`SetDescription`](#generated.RAStudy.SetDescription)(description)                                       | Change the study description                                                                                                                                                    |
| [`SetHTCCalculatorEnabled`](#generated.RAStudy.SetHTCCalculatorEnabled)(value)                           | Enable/disable the SPH HTC Calculator module.                                                                                                                                   |
| [`SetIntraParticleCollisionStatistics`](#generated.RAStudy.SetIntraParticleCollisionStatistics)(value)   | Enable/disable the Intra Particle Collision Statistics Module.                                                                                                                  |
| [`SetVariable`](#generated.RAStudy.SetVariable)(name, value)                                             | Sets the values the given parametric variable                                                                                                                                   |
| [`StartSimulation`](#generated.RAStudy.StartSimulation)([skip_summary, ...])                             | Start the simulation.                                                                                                                                                           |
| [`StopSimulation`](#generated.RAStudy.StopSimulation)()                                                  | Stops a currently running simulation.                                                                                                                                           |

**Attributes:**

| Name | Description |
|-------------------------------------------------------|--------------------------------|
| [`customer_name`](#generated.RAStudy.customer_name)   | Get the study customer name.   |
| [`description`](#generated.RAStudy.description)       | Get the study description.     |

<a id="generated.RAStudy.CanResumeSimulation"></a>

#### CanResumeSimulation()

Whether the simulation can be resumed.

<a id="generated.RAStudy.CreateContinuousInjection"></a>

#### CreateContinuousInjection(entry_point: rocky30.plugins.api.conveyors.ra_feed_conveyor.RAFeedConveyor | rocky30.plugins.api.ra_inlet.RAInletGeometry, particle: RAParticle)

Create a particle input with the given entry_point and particle.

* **Parameters:**
  * **entry_point** – The input’s entry point - either a FeedConveyor or an Inlet.
  * **particle** – The particle that will enter through this input.

<a id="generated.RAStudy.CreateFeedConveyor"></a>

#### CreateFeedConveyor()

Creates a new feed conveyor and add it to the project.

<a id="generated.RAStudy.CreateInlet"></a>

#### CreateInlet()

Create a new inlet and add it to the project.

<a id="generated.RAStudy.CreateMaterialAndRelatedInteractions"></a>

#### CreateMaterialAndRelatedInteractions(material_name: str | None = None)

Deprecated: Use `CreateSolidMaterialAndRelatedInteractions()` instead.

<a id="generated.RAStudy.CreateOutlet"></a>

#### CreateOutlet(exit_point: RABaseGeometry)

Create an outlet with the given exit point.

* **Parameters:**
  **exit_point** – The outlet’s exit point surface.

<a id="generated.RAStudy.CreateParticle"></a>

#### CreateParticle()

Create a particle in the study with default values.

<a id="generated.RAStudy.CreateParticleInlet"></a>

#### CreateParticleInlet(entry_point: rocky30.plugins.api.conveyors.ra_feed_conveyor.RAFeedConveyor | rocky30.plugins.api.ra_inlet.RAInletGeometry | rocky30.plugins.api.ra_surface.RASurface, particle: RAParticle)

Create a particle inlet with the given entry_point and particle.

* **Parameters:**
  * **entry_point** – The input’s entry point - either a FeedConveyor or an Inlet.
  * **particle** – The particle that will enter through this input.

<a id="generated.RAStudy.CreateReceivingConveyor"></a>

#### CreateReceivingConveyor()

Creates a new receiving conveyor and add it to the project.

<a id="generated.RAStudy.CreateVolumeFill"></a>

#### CreateVolumeFill(particle: rocky30.plugins.api.ra_particle.RAParticle | list[rocky30.plugins.api.ra_particle.RAParticle] | None = None, name: str | None = None, mass: float = 100.0, seed_coordinates: tuple[float, float, float] | None = None, geometries: list[str | rocky30.plugins.api.ra_wall.RAWall] | None = None, use_geometries_to_compute: bool = False, box_center: tuple[float, float, float] | None = None, box_dimensions: tuple[float, float, float] | None = None)

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

<a id="generated.RAStudy.CreateVolumetricInlet"></a>

#### CreateVolumetricInlet(particle: Optional[Union[RAParticle, list[rocky30.plugins.api.ra_particle.RAParticle]]] = None, name: Optional[str] = None, mass: float = 100.0, seed_coordinates: Optional[tuple[float, float, float]] = None, geometries: Optional[list[str | rocky30.plugins.api.ra_wall.RAWall]] = None, use_geometries_to_compute: bool = False, box_center: Optional[tuple[float, float, float]] = None, box_dimensions: Optional[tuple[float, float, float]] = None)

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

<a id="generated.RAStudy.DeleteResults"></a>

#### DeleteResults()

Called to delete any results we currently have from a simulation.

<a id="generated.RAStudy.ExtendSimulation"></a>

#### ExtendSimulation(extension_amount: float | barril.units._scalar.Scalar = 0, time: Optional[Union[TimeStep, int]] = None, inlet_extensions: Optional[list[tuple[str, float | barril.units._scalar.Scalar]]] = None, periodic_motion_extensions: Optional[list[tuple[str, float | barril.units._scalar.Scalar]]] = None)

Extend the simulation: either its duration, the duration of an inlet in the study or the
duration of a periodic motion frame.

* **Parameters:**
  * **extension_amount** – The number of seconds to extend the simulation by.
  * **time** – The optional time at which to extend the simulation.
  * **inlet_extensions** – The list of input extensions.
    The first parameter of each pair must be the name of the continuous injection to extend,
    and the second is the number of seconds to extend the input by.
  * **periodic_motion_extensions** – the list of periodic motions extensions.
    The first parameter of each pair must be the name of the periodic motion to extend,
    and the second is the number of seconds to extend the periodic motion by.

<a id="generated.RAStudy.GetAirFlow"></a>

#### GetAirFlow()

Get the RAAirFlow object (if applicable).

* **Returns:**
  The AirFlow object is configured as the CFD coupling mode
  None otherwise

<a id="generated.RAStudy.GetCFDCoupling"></a>

#### GetCFDCoupling()

Get the current CFD coupling object.

* **Returns:**
  The CFDCoupling object

<a id="generated.RAStudy.GetCalculations"></a>

#### GetCalculations()

Get the project’s Calculations.

<a id="generated.RAStudy.GetCollectForcesForFemAnalysis"></a>

#### GetCollectForcesForFemAnalysis()

Checks wheter the Collision Statistics modules are colecting FEM Forces for analysis

* **Return bool:**
  True if the Collect FEM Forces property of any Collision Statistics module is enabled

<a id="generated.RAStudy.GetContactData"></a>

#### GetContactData()

Get the RAContactData object.

* **Returns:**
  The contact data object.

<a id="generated.RAStudy.GetCustomerName"></a>

#### GetCustomerName()

Get the study customer name.

<a id="generated.RAStudy.GetDescription"></a>

#### GetDescription()

Get the study description.

<a id="generated.RAStudy.GetDomainSettings"></a>

#### GetDomainSettings()

Get the study’s Domain Settings.

<a id="generated.RAStudy.GetElementCurve"></a>

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

<a id="generated.RAStudy.GetExportToolkit"></a>

#### GetExportToolkit()

Get a RAExportToolkit object related to this RAStudy. The returned object can be used
for export operations.

<a id="generated.RAStudy.GetFEMForcesAnalysisModules"></a>

#### GetFEMForcesAnalysisModules(module_collection: RAModuleCollection)

Get the name and the FEM Forces property for all available Boundary Collision Statistics
modules

* **Parameters:**
  **module_collection** ([*RAModuleCollection*](RAModuleCollection.md#generated.RAModuleCollection)) – The study’s Module Collection
* **Return Dict[str, str]:**
  A Dict with the Module Name and the FEM Forces property name

<a id="generated.RAStudy.GetGeometry"></a>

#### GetGeometry(geometry_name: str)

Get the geometry with the given name

* **Returns:**
  The geometry with the given name

<a id="generated.RAStudy.GetGeometryCollection"></a>

#### GetGeometryCollection()

Get the study’s Geometry Collection.

<a id="generated.RAStudy.GetInletsOutletsCollection"></a>

#### GetInletsOutletsCollection()

Get the study’s Inlets and Outlets Collection.

<a id="generated.RAStudy.GetIntraParticleCollisionStatistics"></a>

#### GetIntraParticleCollisionStatistics()

Get whether the Intra Particle Collision Statistics Module is enabled.

<a id="generated.RAStudy.GetJointsData"></a>

#### GetJointsData()

Get the RAParticleJointsData object.

* **Returns:**
  The joint statisctics data object.

<a id="generated.RAStudy.GetMaterialCollection"></a>

#### GetMaterialCollection()

Get the study’s Material Collection.

<a id="generated.RAStudy.GetMaterialsInteractionCollection"></a>

#### GetMaterialsInteractionCollection()

Deprecated: Use [`RAMaterialCollection.GetMaterialsInteractionCollection()`](RAMaterialCollection.md#generated.RAMaterialCollection.GetMaterialsInteractionCollection) instead.

<a id="generated.RAStudy.GetMeshedParticlesUpscalingEnabled"></a>

#### GetMeshedParticlesUpscalingEnabled()

Get the Meshed Particles Upscaling value.

<a id="generated.RAStudy.GetModuleCollection"></a>

#### GetModuleCollection()

Get the study’s Module Collection.

<a id="generated.RAStudy.GetMotionFrameSource"></a>

#### GetMotionFrameSource()

Get the study’s Motion Frame Source.

* **Returns:**
  The motion frame source, used to deal with motion.

<a id="generated.RAStudy.GetParticleCollection"></a>

#### GetParticleCollection()

Get the study’s Particle Collection.

<a id="generated.RAStudy.GetParticleInput"></a>

#### GetParticleInput(input_name: str)

Get the particle input with the given name.

<a id="generated.RAStudy.GetParticles"></a>

#### GetParticles()

Get the process that contains the simulated particles.

* **Returns:**
  The particles process

<a id="generated.RAStudy.GetPhysics"></a>

#### GetPhysics()

Get the study’s Physics object.

<a id="generated.RAStudy.GetPointCloudCollection"></a>

#### GetPointCloudCollection()

Get the study’s Point Cloud Collection.

<a id="generated.RAStudy.GetProgress"></a>

#### GetProgress()

Get the current simulation progress [0.00, 100.00] or None if no simulation is running.

<a id="generated.RAStudy.GetSimulatorRun"></a>

#### GetSimulatorRun()

Get the PrePost Scripting wrapper for simulation-related parameters.

<a id="generated.RAStudy.GetSolver"></a>

#### GetSolver()

Synonym for [`GetSimulatorRun()`](#generated.RAStudy.GetSimulatorRun).

<a id="generated.RAStudy.GetStatus"></a>

#### *classmethod* GetStatus(include_opengl_messages: bool = False)

Check the current Study status

* **Parameters:**
  **include_opengl_messages** – Whether messages related to OpenGL should be included in the status.
* **Returns:**
  Returns a list of subject names and the existing status as a list of tuples with the
  message type and description

<a id="generated.RAStudy.GetSurfaceFromFilename"></a>

#### GetSurfaceFromFilename(filename: str)

Given a filename finds all imported geometries created from it.

* **Parameters:**
  **filename** – The name of the file that originally created a set of geometries

<a id="generated.RAStudy.GetTimeSet"></a>

#### GetTimeSet()

Get the study’s timeset.

- Before simulation, the timeset will contain the timesteps used in motion preview.
- After simulation, the timeset will contain the actual simulation timesteps.

<a id="generated.RAStudy.GetWallFromFilename"></a>

#### GetWallFromFilename(filename: str)

Given a filename finds all imported geometries created from it.

* **Parameters:**
  **filename** – The name of the file that originally created a set of geometries

<a id="generated.RAStudy.HasCalculatedHTC"></a>

#### HasCalculatedHTC()

Checks whether HTC is being calculated.

* **Return bool:**
  True if HTC is being calculated.

<a id="generated.RAStudy.HasResults"></a>

#### HasResults()

Whether we have results from a previous simulation.

<a id="generated.RAStudy.ImportSurface"></a>

#### ImportSurface(custom_filename: str, import_scale: float = 1.0, convert_yz: bool = False, custom_name_prefix: Optional[str] = None)

Import a custom surface file and create one or more corresponding geometries in the study.

* **Parameters:**
  * **custom_filename** – The filename of the STL, DXF or XGL file to import.
  * **import_scale** – The import scale to be applied to the imported geometry.
  * **convert_yz** – Whether the y and z axes of the imported geometry should be converted.

<a id="generated.RAStudy.ImportSystemCouplingWall"></a>

#### ImportSystemCouplingWall(custom_filename: str, import_scale: float = 1.0, convert_yz: bool = False, custom_name_prefix: Optional[str] = None)

Import a geometry file and create one or more corresponding geometries in the study.

* **Parameters:**
  * **custom_filename** – The filename of the STL, DXF or XGL file to import.
  * **import_scale** – The import scale to be applied to the imported geometry.
  * **convert_yz** – Whether the y and z axes of the imported geometry should be converted.

<a id="generated.RAStudy.ImportWall"></a>

#### ImportWall(custom_filename: str, import_scale: float = 1.0, convert_yz: bool = False, custom_name_prefix: Optional[str] = None)

Import a geometry file and create one or more corresponding geometries in the study.

* **Parameters:**
  * **custom_filename** – The filename of the STL, DXF or XGL file to import.
  * **import_scale** – The import scale to be applied to the imported geometry.
  * **convert_yz** – Whether the y and z axes of the imported geometry should be converted.

<a id="generated.RAStudy.IsSimulating"></a>

#### IsSimulating()

Whether we’re currently simulating something.

<a id="generated.RAStudy.RefreshResults"></a>

#### RefreshResults()

Called to refresh the results we currently have from a simulation.

<a id="generated.RAStudy.RemoveMaterialAndRelatedInteractions"></a>

#### RemoveMaterialAndRelatedInteractions(material_or_name: rocky30.plugins.api.ra_solid_material.RASolidMaterial | str)

Deprecated: Use `RemoveSolidMaterialAndRelatedInteractions()` instead.

<a id="generated.RAStudy.RemoveSurface"></a>

#### RemoveSurface(filename: str)

Remove custom surfaces associated with the given filename.

* **Parameters:**
  **filename** – The name of the filename associated with the current project custom surfaces

<a id="generated.RAStudy.RemoveWall"></a>

#### RemoveWall(filename: str)

Remove walls associated with the given filename.

* **Parameters:**
  **filename** – The name of the filename associated with the current project walls

<a id="generated.RAStudy.ReplaceWallTriangles"></a>

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

<a id="generated.RAStudy.SetCollectForcesForFemAnalysis"></a>

#### SetCollectForcesForFemAnalysis(value: bool)

Enable the Boundary Collision Statistics modules and enable/disable
the FEM Forces analysis

* **Parameters:**
  **value** (*bool*) – Wheter to enable or disable the modules

<a id="generated.RAStudy.SetCustomerName"></a>

#### SetCustomerName(customer_name: str)

Change the study customer’s name

* **Parameters:**
  **customer_name** – The customer name to be set

<a id="generated.RAStudy.SetDescription"></a>

#### SetDescription(description: str)

Change the study description

* **Parameters:**
  **description** – The customer name to be set

<a id="generated.RAStudy.SetHTCCalculatorEnabled"></a>

#### SetHTCCalculatorEnabled(value: bool)

Enable/disable the SPH HTC Calculator module.

<a id="generated.RAStudy.SetIntraParticleCollisionStatistics"></a>

#### SetIntraParticleCollisionStatistics(value: bool)

Enable/disable the Intra Particle Collision Statistics Module.

Note: This shortcut method enables/disables \_all_ properties related to that Module.

* **Parameters:**
  **value** – 

<a id="generated.RAStudy.SetVariable"></a>

#### SetVariable(name: str, value: float)

Sets the values the given parametric variable

* **Parameters:**
  * **name** – The name of the variable
  * **value** – The value to be set

<a id="generated.RAStudy.StartSimulation"></a>

#### StartSimulation(skip_summary: bool | None = False, delete_results: bool | None = False, non_blocking: bool = False)

Start the simulation. If possible, will resume a previously interrupted simulation.
If you wish to start a simulation from scratch, delete previous results via
DeleteResults() first.

* **Parameters:**
  * **skip_summary** (*bool*) – If starting from scratch, whether the simulation summary will be skipped (False) or
    presented to the user (True).
  * **delete_results** (*bool*) – True if the simulation results should be deleted, False otherwise.
    If there are no simulation results, this flag is ignored
  * **non_blocking** (*bool*) – If True, start the simulation asynchronously. If not on batch mode, it will prevent
    the UI to show the global progress bar.

<a id="generated.RAStudy.StopSimulation"></a>

#### StopSimulation()

Stops a currently running simulation. If there’s no simulation running, does nothing.

<a id="generated.RAStudy.customer_name"></a>

#### *property* customer_name *: str*

Get the study customer name.

<a id="generated.RAStudy.description"></a>

#### *property* description *: str*

Get the study description.
