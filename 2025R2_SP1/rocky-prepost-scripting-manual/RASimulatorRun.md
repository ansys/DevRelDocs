

# RASimulatorRun

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RASimulatorRun"></a>

### *class* RASimulatorRun

Rocky PrePost Scripting wrapper for solver settings.

This wrapper corresponds to the “Solver” item on a project’s data tree. Access it from the
[`RAStudy`](RAStudy.md#generated.RAStudy) with:

```python
simulator_run = study.GetSimulatorRun()
```

**Methods:**

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AddCurve`](#generated.RASimulatorRun.AddCurve)(curve_name, timesteps, values, unit)                                                                           | Add a curve to the element with a time-steps domain                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`AddCustomCurve`](#generated.RASimulatorRun.AddCustomCurve)(name[, curve_type, ...])                                                                           | Add a custom curve in the database. :param name:     The name of the curve to be set. :param curve_type:     The type of the custom curve to be added. :param output_unit:     The output unit, in which case the unit database will be queried for a quantity that makes sense. If None, the quantity is considered unknown. :param scope:     The scope to be set. :param sources:     A dict pointing the variable used to the curve association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set. |
| [`AddCustomProperty`](#generated.RASimulatorRun.AddCustomProperty)(name[, property_type, ...])                                                                  | Add a custom property to the database                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`AddGridFunction`](#generated.RASimulatorRun.AddGridFunction)(grid_function_name, ...[, ...])                                                                  | Adds a grid function to the grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`CreateCurveOutputVariable`](#generated.RASimulatorRun.CreateCurveOutputVariable)(curve_name[, ...])                                                           | Used to create an output variable based on a curve which doesn't change at each new timestep (i.e.: a curve with a single value for each time).                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`CreateGridFunction`](#generated.RASimulatorRun.CreateGridFunction)(values[, location, time_step])                                                             | Create a grid function from the given values, location and time-step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`CreateGridFunctionArrayOnCells`](#generated.RASimulatorRun.CreateGridFunctionArrayOnCells)([time_step])                                                       | Creates a numpy array with the number of elements based on the cells and returns it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`CreateGridFunctionStatisticOutputVariable`](#generated.RASimulatorRun.CreateGridFunctionStatisticOutputVariable)(...)                                         | Used to create an output variable based on a grid function statistic (i.e.: will get a grid function, compute its statistic based on statistic_operation and then based on the statistic values will apply the operation to get a single scalar).                                                                                                                                                                                                                                                                                                                                             |
| [`CreateTransientCurveOutputVariable`](#generated.RASimulatorRun.CreateTransientCurveOutputVariable)(curve_name)                                                | Used to create an output variable based on a curve for which there's a completely new representation for each time step -- such as Power : Impact X Belt Width (i.e.: will get the curve multiple times based on the time range, compute a value for each time based on the operation, to convert the multiple curves into a single curve and then will apply the time_operation to get a single scalar from those values).                                                                                                                                                                   |
| [`DisableCompressedFile`](#generated.RASimulatorRun.DisableCompressedFile)()                                                                                    | Set the value of "Compressed File" to False.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`DisableDpmBlockingEffectForSinglePhaseSimulations`](#generated.RASimulatorRun.DisableDpmBlockingEffectForSinglePhaseSimulations)()                            | The "Use DPM Blocking Effect For Single Phase Simulations" parameter was removed from Rocky since 25R2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`DisableFEMForces`](#generated.RASimulatorRun.DisableFEMForces)()                                                                                              | Disables the "FEM Forces" calculations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`DisableHtcCalculator`](#generated.RASimulatorRun.DisableHtcCalculator)()                                                                                      | Disables the "HTC" calculations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`DisableMoveCfdCellsWithRockyBoundaries`](#generated.RASimulatorRun.DisableMoveCfdCellsWithRockyBoundaries)()                                                  | Set the value of "Move Cfd Cells With Rocky Boundaries" to False.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`DisableNegateInitialOverlaps`](#generated.RASimulatorRun.DisableNegateInitialOverlaps)()                                                                      | Set the value of "Negate Initial Overlaps" to False.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`DisableSortingDistanceFactor`](#generated.RASimulatorRun.DisableSortingDistanceFactor)()                                                                      | Set the value of "Sorting Distance Factor" to False.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`DisableUse3RdPowerForCfdCgm`](#generated.RASimulatorRun.DisableUse3RdPowerForCfdCgm)()                                                                        | Set the value of "Use 3Rd Power For Cfd Cgm" to False.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`EditCustomCurve`](#generated.RASimulatorRun.EditCustomCurve)(edit_curve[, new_name, ...])                                                                     | Edit a custom curve saved in the database. :param edit_curve:     The name of the curve to be edited. :param new_name:     The new name of the curve to be set. :param sources:     A dict pointing the variable used to the curve association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set.                                                                                                                                                                                                      |
| [`EditCustomProperty`](#generated.RASimulatorRun.EditCustomProperty)(edit_property[, ...])                                                                      | Edit a custom property saved in the database. :param edit_property:     The name of the property to be edited. :param new_name:     The new name of the property to be set. :param sources:     A dict pointing the variable used to the property association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set.                                                                                                                                                                                       |
| [`EnableCompressedFile`](#generated.RASimulatorRun.EnableCompressedFile)()                                                                                      | Set the value of "Compressed File" to True.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`EnableDpmBlockingEffectForSinglePhaseSimulations`](#generated.RASimulatorRun.EnableDpmBlockingEffectForSinglePhaseSimulations)()                              | The "Use DPM Blocking Effect For Single Phase Simulations" parameter was removed from Rocky since 25R2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`EnableFEMForces`](#generated.RASimulatorRun.EnableFEMForces)()                                                                                                | Enables the "FEM Forces" calculations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`EnableHtcCalculator`](#generated.RASimulatorRun.EnableHtcCalculator)()                                                                                        | Enables the "HTC" calculations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`EnableMoveCfdCellsWithRockyBoundaries`](#generated.RASimulatorRun.EnableMoveCfdCellsWithRockyBoundaries)()                                                    | Set the value of "Move Cfd Cells With Rocky Boundaries" to True.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`EnableNegateInitialOverlaps`](#generated.RASimulatorRun.EnableNegateInitialOverlaps)()                                                                        | Set the value of "Negate Initial Overlaps" to True.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`EnableSortingDistanceFactor`](#generated.RASimulatorRun.EnableSortingDistanceFactor)()                                                                        | Set the value of "Sorting Distance Factor" to True.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`EnableUse3RdPowerForCfdCgm`](#generated.RASimulatorRun.EnableUse3RdPowerForCfdCgm)()                                                                          | Set the value of "Use 3Rd Power For Cfd Cgm" to True.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetActivesArray`](#generated.RASimulatorRun.GetActivesArray)([time_step])                                                                                     | Get an array representing the cells' "active" status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetArraysGrowthRate`](#generated.RASimulatorRun.GetArraysGrowthRate)()                                                                                        | Get the value of "Arrays Growth Rate".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetAvailableModulesOutputProperties`](#generated.RASimulatorRun.GetAvailableModulesOutputProperties)()                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetAvailableOutputRootProperties`](#generated.RASimulatorRun.GetAvailableOutputRootProperties)(root_key)                                                      | Deprecated: Use GetAvailableStandardOutputProperties instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetAvailableOutputRoots`](#generated.RASimulatorRun.GetAvailableOutputRoots)()                                                                                | Deprecated: Use GetAvailableStandardOutputProperties instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetAvailableStandardOutputProperties`](#generated.RASimulatorRun.GetAvailableStandardOutputProperties)()                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetBoundingBox`](#generated.RASimulatorRun.GetBoundingBox)([unit, time_step])                                                                                 | Get the element's bounding box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetBreakageDelayAfterRelease`](#generated.RASimulatorRun.GetBreakageDelayAfterRelease)([unit])                                                                | Get the value of "Breakage Delay After Release".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetBreakageOverlapFactor`](#generated.RASimulatorRun.GetBreakageOverlapFactor)()                                                                              | Get the value of "Breakage Overlap Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetBreakageStart`](#generated.RASimulatorRun.GetBreakageStart)([unit])                                                                                        | Get the value of "Breakage Start".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetCellAreaAsArray`](#generated.RASimulatorRun.GetCellAreaAsArray)([time_step])                                                                               | Get an array containing the area of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetCellCenterAsArray`](#generated.RASimulatorRun.GetCellCenterAsArray)([time_step])                                                                           | Get an array containing the center coordinates of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellDzAsArray`](#generated.RASimulatorRun.GetCellDzAsArray)([time_step])                                                                                   | Get an array containing the thickness (in Z) of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetCellFromIJK`](#generated.RASimulatorRun.GetCellFromIJK)(i, j, k[, time_step])                                                                              | Creates a grid cell handle from the current I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetCellIJK`](#generated.RASimulatorRun.GetCellIJK)(cell_handle[, time_step])                                                                                  | Converts the given cell handle to it's I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetCellNumberOfVertices`](#generated.RASimulatorRun.GetCellNumberOfVertices)(cell[, time_step])                                                               | Get an array containing the number of vertices of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellPointsAsFunction`](#generated.RASimulatorRun.GetCellPointsAsFunction)([time_step])                                                                     | Get a function for the points (vertices) of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetCellVolumeAsArray`](#generated.RASimulatorRun.GetCellVolumeAsArray)([time_step])                                                                           | Get an array with the volume of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetCollectForcesForFemAnalysis`](#generated.RASimulatorRun.GetCollectForcesForFemAnalysis)()                                                                  | Deprecated: Use this method from RAStudy instead                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetContactNeighboringDistanceBetweenParticles`](#generated.RASimulatorRun.GetContactNeighboringDistanceBetweenParticles)([unit])                              | Get the value of "Contact Neighboring Distance Between Particles".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetContactNeighboringDistanceBetweenParticlesAndTriangles`](#generated.RASimulatorRun.GetContactNeighboringDistanceBetweenParticlesAndTriangles)([unit])      | Get the value of "Contact Neighboring Distance Between Particles And Triangles".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetCurve`](#generated.RASimulatorRun.GetCurve)(curve_name[, simulation_name, ...])                                                                            | Override base class method to check for a request of a grid function statistic.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCurveNames`](#generated.RASimulatorRun.GetCurveNames)([simulation_name])                                                                                   | @param simulation_name: unicode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCurveNamesAssociation`](#generated.RASimulatorRun.GetCurveNamesAssociation)([simulation_name])                                                             | Get this element's curve names.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetDeformableMassMatrixType`](#generated.RASimulatorRun.GetDeformableMassMatrixType)()                                                                        | Get "Deformable Mass Matrix Type" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetDisableTrianglesOnPeriodicBoundaries`](#generated.RASimulatorRun.GetDisableTrianglesOnPeriodicBoundaries)()                                                | Get the value of "Disable Triangles On Periodic Boundaries".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetDragLimiterFactor`](#generated.RASimulatorRun.GetDragLimiterFactor)()                                                                                      | Get the value of "Drag Limiter Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetElementCurve`](#generated.RASimulatorRun.GetElementCurve)(element_name, curve_name[, ...])                                                                 | Return the curves for the given element and name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetFixedTimestep`](#generated.RASimulatorRun.GetFixedTimestep)([unit])                                                                                        | Get the value of "Fixed Timestep".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetFluentOutputsMultiplier`](#generated.RASimulatorRun.GetFluentOutputsMultiplier)()                                                                          | Get the value of "Fluent Outputs Multiplier".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetGeometryQuantity`](#generated.RASimulatorRun.GetGeometryQuantity)()                                                                                        | Get the quantity corresponding to the grid's geometry.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetGeometryUnit`](#generated.RASimulatorRun.GetGeometryUnit)()                                                                                                | Get the grid's geometry's unit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetGridFunction`](#generated.RASimulatorRun.GetGridFunction)(grid_function_name[, ...])                                                                       | Gets a grid function given its name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetGridFunctionNames`](#generated.RASimulatorRun.GetGridFunctionNames)([translated, context])                                                                 | Get a list of the available grid functions for this grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetJointElasticRatio`](#generated.RASimulatorRun.GetJointElasticRatio)()                                                                                      | Get the value of "Joint Elastic Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetLinearHystDamp`](#generated.RASimulatorRun.GetLinearHystDamp)()                                                                                            | Get the value of "Linear Hyst Damp".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetLoadingNSteps`](#generated.RASimulatorRun.GetLoadingNSteps)()                                                                                              | Get the value of "Loading N Steps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetMaximumNumberOfIterations`](#generated.RASimulatorRun.GetMaximumNumberOfIterations)()                                                                      | Get the value of "Maximum Number of Iterations".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetMeshColoring`](#generated.RASimulatorRun.GetMeshColoring)(window)                                                                                          | Get the RAMeshColoring related to the current object and a window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetMinimumLengthDeformationTolerance`](#generated.RASimulatorRun.GetMinimumLengthDeformationTolerance)()                                                      | Get the value of "Minimum Length Deformation Tolerance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetMinimumVolumeTolerance`](#generated.RASimulatorRun.GetMinimumVolumeTolerance)()                                                                            | Get the value of "Minimum Volume Tolerance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetModulesOutputPropertiesData`](#generated.RASimulatorRun.GetModulesOutputPropertiesData)()                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetModulesOutputPropertyEnabled`](#generated.RASimulatorRun.GetModulesOutputPropertyEnabled)(\*output_property)                                               | Retrieve enable state of given "Modules Output Property".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetMoveCfdCellsWithRockyBoundaries`](#generated.RASimulatorRun.GetMoveCfdCellsWithRockyBoundaries)()                                                          | Get the value of "Move Cfd Cells With Rocky Boundaries".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetMultiGpuSlicingDirection`](#generated.RASimulatorRun.GetMultiGpuSlicingDirection)()                                                                        | Get "Multi Gpu Slicing Direction" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetNegateInitialOverlaps`](#generated.RASimulatorRun.GetNegateInitialOverlaps)()                                                                              | Get the value of "Negate Initial Overlaps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetNeighborSearchModel`](#generated.RASimulatorRun.GetNeighborSearchModel)()                                                                                  | Get "Neighbor Search Model" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetNumberOfCells`](#generated.RASimulatorRun.GetNumberOfCells)([time_step])                                                                                   | Get the total number of cells.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetNumberOfNodes`](#generated.RASimulatorRun.GetNumberOfNodes)([time_step])                                                                                   | Get the total number of nodes (vertices).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetNumberOfProcessors`](#generated.RASimulatorRun.GetNumberOfProcessors)()                                                                                    | Get the value of "Number of Processors".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetNumpyCurve`](#generated.RASimulatorRun.GetNumpyCurve)(curve_name[, unit, realization])                                                                     | Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetOutputPropertyEnabled`](#generated.RASimulatorRun.GetOutputPropertyEnabled)(root_key, property_name)                                                       | Deprecated: Use GetStandardOutputPropertyEnabled instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetOutputRootEnabled`](#generated.RASimulatorRun.GetOutputRootEnabled)(root_key)                                                                              | Deprecated: Use GetStandardOutputPropertyEnabled instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetOutputVariableValue`](#generated.RASimulatorRun.GetOutputVariableValue)(variable_name)                                                                     | Get the value of a previously-created output variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetOverRelaxationCoefficient`](#generated.RASimulatorRun.GetOverRelaxationCoefficient)()                                                                      | Get the value of "Over Relaxation Coefficient".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetOverlapParticlesDelay`](#generated.RASimulatorRun.GetOverlapParticlesDelay)([unit])                                                                        | Get the value of "Overlap Particles Delay".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetParticleSizeLimitForReordering`](#generated.RASimulatorRun.GetParticleSizeLimitForReordering)([unit])                                                      | Get the value of "Particle Size Limit For Reordering".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetRefineConcaveSearch`](#generated.RASimulatorRun.GetRefineConcaveSearch)()                                                                                  | Get the value of "Refine Concave Search".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetReleaseParticlesWithoutOverlapCheck`](#generated.RASimulatorRun.GetReleaseParticlesWithoutOverlapCheck)()                                                  | Get the value of "Release Particles Without Overlap Check".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetResetOnlyPhysicalContactsData`](#generated.RASimulatorRun.GetResetOnlyPhysicalContactsData)()                                                              | Get the value of "Reset Only Physical Contacts Data".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetResumeDataFrequency`](#generated.RASimulatorRun.GetResumeDataFrequency)()                                                                                  | Get the value of "Resume Data Frequency".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetSimulationDuration`](#generated.RASimulatorRun.GetSimulationDuration)([unit])                                                                              | Get the value of "Simulation Duration".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetSimulationOutputFrequency`](#generated.RASimulatorRun.GetSimulationOutputFrequency)([unit])                                                                | Deprecated: Use GetTimeInterval instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetSimulationTarget`](#generated.RASimulatorRun.GetSimulationTarget)()                                                                                        | Get "Simulation Target" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetSolverCurvesFrequency`](#generated.RASimulatorRun.GetSolverCurvesFrequency)()                                                                              | Get the value of "Solver Curves Frequency".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetSolverCurvesOutputFrequency`](#generated.RASimulatorRun.GetSolverCurvesOutputFrequency)()                                                                  | Deprecated: Use GetSolverCurvesFrequency instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetSortingDistanceFactor`](#generated.RASimulatorRun.GetSortingDistanceFactor)()                                                                              | Get the value of "Sorting Distance Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetSpecialReorderingForWidePsd`](#generated.RASimulatorRun.GetSpecialReorderingForWidePsd)()                                                                  | Get the value of "Special Reordering For Wide Psd".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetStandardOutputPropertiesData`](#generated.RASimulatorRun.GetStandardOutputPropertiesData)()                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetStandardOutputPropertyEnabled`](#generated.RASimulatorRun.GetStandardOutputPropertyEnabled)(...)                                                           | Retrieve enable state of given "Standard Output Property".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetSuccessiveOverRelaxationTolerance`](#generated.RASimulatorRun.GetSuccessiveOverRelaxationTolerance)()                                                      | Get the value of "Successive Over Relaxation Tolerance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetTargetGpu`](#generated.RASimulatorRun.GetTargetGpu)()                                                                                                      | Get the value of "Target Gpu".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetTargetGpus`](#generated.RASimulatorRun.GetTargetGpus)()                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetTimeInterval`](#generated.RASimulatorRun.GetTimeInterval)([unit])                                                                                          | Get the value of "Time Interval".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetTimeSet`](#generated.RASimulatorRun.GetTimeSet)()                                                                                                          | Get the list of time-steps associated to the grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetTimeStatistics`](#generated.RASimulatorRun.GetTimeStatistics)()                                                                                            | Get the object responsible for handling time-statistics grid functions for this process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetTimeStep`](#generated.RASimulatorRun.GetTimeStep)(time_step[, accept_global])                                                                              | Get the timestep corresponding to the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetTimestepModel`](#generated.RASimulatorRun.GetTimestepModel)()                                                                                              | Get "Timestep Model" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetTopologyShape`](#generated.RASimulatorRun.GetTopologyShape)([time_step])                                                                                   | Get the shape of the topology (similar to the shape of numpy arrays).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetUse2023R2CellVolumeFractionUpdateApproach`](#generated.RASimulatorRun.GetUse2023R2CellVolumeFractionUpdateApproach)()                                      | Get the value of "Use 2023 R2 Cell Volume Fraction Update Approach".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetUse2023R2SourceTermsApproach`](#generated.RASimulatorRun.GetUse2023R2SourceTermsApproach)()                                                                | Get the value of "Use 2023 R2 Source Terms Approach".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetUse3RdPowerForCfdCgm`](#generated.RASimulatorRun.GetUse3RdPowerForCfdCgm)()                                                                                | Get the value of "Use 3Rd Power For Cfd Cgm".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetUseArraysGrowthRate`](#generated.RASimulatorRun.GetUseArraysGrowthRate)()                                                                                  | Get the value of "Use Arrays Growth Rate".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetUseBreakageOverlapFactor`](#generated.RASimulatorRun.GetUseBreakageOverlapFactor)()                                                                        | Get the value of "Use Breakage Overlap Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetUseCompressedFiles`](#generated.RASimulatorRun.GetUseCompressedFiles)()                                                                                    | Get the value of "Use Compressed Files".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetUseContactNeighboringDistanceBetweenParticles`](#generated.RASimulatorRun.GetUseContactNeighboringDistanceBetweenParticles)()                              | Get the value of "Use Contact Neighboring Distance Between Particles".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetUseContactNeighboringDistanceBetweenParticlesAndTriangles`](#generated.RASimulatorRun.GetUseContactNeighboringDistanceBetweenParticlesAndTriangles)()      | Get the value of "Use Contact Neighboring Distance Between Particles And Triangles".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetUseDpmBlockingEffectForSinglePhaseSimulations`](#generated.RASimulatorRun.GetUseDpmBlockingEffectForSinglePhaseSimulations)()                              | The "Use DPM Blocking Effect For Single Phase Simulations" parameter was removed from Rocky since 25R2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetUseDragLimiterFactor`](#generated.RASimulatorRun.GetUseDragLimiterFactor)()                                                                                | Get the value of "Use Drag Limiter Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetUseFixedTimestep`](#generated.RASimulatorRun.GetUseFixedTimestep)()                                                                                        | Get the value of "Use Fixed Timestep".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetUseNonRoundTorqueCorrection`](#generated.RASimulatorRun.GetUseNonRoundTorqueCorrection)()                                                                  | Get the value of "Use Non Round Torque Correction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetUseSortingDistanceFactor`](#generated.RASimulatorRun.GetUseSortingDistanceFactor)()                                                                        | Get the value of "Use Sorting Distance Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetValidDeformableMassMatrixTypeValues`](#generated.RASimulatorRun.GetValidDeformableMassMatrixTypeValues)()                                                  | Get a list of all possible values for "Deformable Mass Matrix Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetValidMultiGpuSlicingDirectionValues`](#generated.RASimulatorRun.GetValidMultiGpuSlicingDirectionValues)()                                                  | Get a list of all possible values for "Multi Gpu Slicing Direction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetValidNeighborSearchModelValues`](#generated.RASimulatorRun.GetValidNeighborSearchModelValues)()                                                            | Get a list of all possible values for "Neighbor Search Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetValidSimulationTargetValues`](#generated.RASimulatorRun.GetValidSimulationTargetValues)()                                                                  | Get a list of all possible values for "Simulation Target".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetValidTimestepModelValues`](#generated.RASimulatorRun.GetValidTimestepModelValues)()                                                                        | Get a list of all possible values for "Timestep Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetWearEnergySpectraBreakageDelayAfterRelease`](#generated.RASimulatorRun.GetWearEnergySpectraBreakageDelayAfterRelease)([unit])                              | Deprecated: Use GetEnergySpectraDelayAfterRelease or GetBreakageDelayAfterRelease instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetWearEnergySpectraBreakageStart`](#generated.RASimulatorRun.GetWearEnergySpectraBreakageStart)([unit])                                                      | Deprecated: Use GetWearStart or GetBreakageStart instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetWearGeometryUpdateFrequency`](#generated.RASimulatorRun.GetWearGeometryUpdateFrequency)([unit])                                                            | Deprecated: Use GetWearGeometryUpdateInterval instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetWearGeometryUpdateInterval`](#generated.RASimulatorRun.GetWearGeometryUpdateInterval)([unit])                                                              | Get the value of "Wear Geometry Update Interval".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetWearStart`](#generated.RASimulatorRun.GetWearStart)([unit])                                                                                                | Get the value of "Wear Start".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`HasFEMForcesEnabled`](#generated.RASimulatorRun.HasFEMForcesEnabled)()                                                                                        | Whether the simulation is configured to collect forces for FEM analysis.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`HasGridFunction`](#generated.RASimulatorRun.HasGridFunction)(grid_function_name)                                                                              | Whether the grid has the given grid function.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`HasHtcCalculatedData`](#generated.RASimulatorRun.HasHtcCalculatedData)()                                                                                      | Whether the "HTC" is being calculated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`IsCellActive`](#generated.RASimulatorRun.IsCellActive)(i, j, k[, time_step])                                                                                  | Checks if the given cell is active or not                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`IsCompressedFileEnabled`](#generated.RASimulatorRun.IsCompressedFileEnabled)()                                                                                | Check if the "Compressed File" is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`IsDpmBlockingEffectForSinglePhaseSimulationsEnabled`](#generated.RASimulatorRun.IsDpmBlockingEffectForSinglePhaseSimulationsEnabled)()                        | The "Use DPM Blocking Effect For Single Phase Simulations" parameter was removed from Rocky since 25R2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`IsMoveCfdCellsWithRockyBoundariesEnabled`](#generated.RASimulatorRun.IsMoveCfdCellsWithRockyBoundariesEnabled)()                                              | Check if the "Move Cfd Cells With Rocky Boundaries" is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`IsNegateInitialOverlapsEnabled`](#generated.RASimulatorRun.IsNegateInitialOverlapsEnabled)()                                                                  | Check if the "Negate Initial Overlaps" is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`IsSortingDistanceFactorEnabled`](#generated.RASimulatorRun.IsSortingDistanceFactorEnabled)()                                                                  | Check if the "Sorting Distance Factor" is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`IsUse3RdPowerForCfdCgmEnabled`](#generated.RASimulatorRun.IsUse3RdPowerForCfdCgmEnabled)()                                                                    | Check if the "Use 3Rd Power For Cfd Cgm" is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`IterCellVertices`](#generated.RASimulatorRun.IterCellVertices)(cell[, time_step])                                                                             | Iterate on the vertices of active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`IterCells`](#generated.RASimulatorRun.IterCells)([time_step])                                                                                                 | Iterate on the active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`Modified`](#generated.RASimulatorRun.Modified)(\*args, \*\*kwargs)                                                                                            | Resets all the cache information after a change in the subject being tracked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RemoveCustomCurve`](#generated.RASimulatorRun.RemoveCustomCurve)(name)                                                                                        | Remove the curve from the database :param name:     The name of the curve to be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`RemoveCustomProperty`](#generated.RASimulatorRun.RemoveCustomProperty)(name)                                                                                  | Remove the property from the database :param name:     The name of the property to be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RemoveOutputVariable`](#generated.RASimulatorRun.RemoveOutputVariable)(variable_name)                                                                         | Removes some output variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RemoveProcess`](#generated.RASimulatorRun.RemoveProcess)()                                                                                                    | It is not possible to remove the item "Solver" from the project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`RestoreOutputPropertiesDefaults`](#generated.RASimulatorRun.RestoreOutputPropertiesDefaults)()                                                                | Restore default values of "Output Properties".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`SetArraysGrowthRate`](#generated.RASimulatorRun.SetArraysGrowthRate)(value)                                                                                   | Set the value of "Arrays Growth Rate".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetBreakageDelayAfterRelease`](#generated.RASimulatorRun.SetBreakageDelayAfterRelease)(value[, unit])                                                         | Set the value of "Breakage Delay After Release".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetBreakageOverlapFactor`](#generated.RASimulatorRun.SetBreakageOverlapFactor)(value)                                                                         | Set the value of "Breakage Overlap Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetBreakageStart`](#generated.RASimulatorRun.SetBreakageStart)(value[, unit])                                                                                 | Set the value of "Breakage Start".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetCollectForcesForFemAnalysis`](#generated.RASimulatorRun.SetCollectForcesForFemAnalysis)(value)                                                             | Deprecated: Use this method from RAStudy instead                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetContactNeighboringDistanceBetweenParticles`](#generated.RASimulatorRun.SetContactNeighboringDistanceBetweenParticles)(value)                               | Set the value of "Contact Neighboring Distance Between Particles".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetContactNeighboringDistanceBetweenParticlesAndTriangles`](#generated.RASimulatorRun.SetContactNeighboringDistanceBetweenParticlesAndTriangles)(value)       | Set the value of "Contact Neighboring Distance Between Particles And Triangles".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetCurrentTimeStep`](#generated.RASimulatorRun.SetCurrentTimeStep)(time_step)                                                                                 | Sets the current time step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetDeformableMassMatrixType`](#generated.RASimulatorRun.SetDeformableMassMatrixType)(value)                                                                   | Set the value of "Deformable Mass Matrix Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetDisableTrianglesOnPeriodicBoundaries`](#generated.RASimulatorRun.SetDisableTrianglesOnPeriodicBoundaries)(value)                                           | Set the value of "Disable Triangles On Periodic Boundaries".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetDragLimiterFactor`](#generated.RASimulatorRun.SetDragLimiterFactor)(value)                                                                                 | Set the value of "Drag Limiter Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetFixedTimestep`](#generated.RASimulatorRun.SetFixedTimestep)(value[, unit])                                                                                 | Set the value of "Fixed Timestep".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetFluentOutputsMultiplier`](#generated.RASimulatorRun.SetFluentOutputsMultiplier)(value)                                                                     | Set the value of "Fluent Outputs Multiplier".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetJointElasticRatio`](#generated.RASimulatorRun.SetJointElasticRatio)(value)                                                                                 | Set the value of "Joint Elastic Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetLinearHystDamp`](#generated.RASimulatorRun.SetLinearHystDamp)(value)                                                                                       | Set the value of "Linear Hyst Damp".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetLoadingNSteps`](#generated.RASimulatorRun.SetLoadingNSteps)(value)                                                                                         | Set the value of "Loading N Steps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetMaximumNumberOfIterations`](#generated.RASimulatorRun.SetMaximumNumberOfIterations)(value)                                                                 | Set the value of "Maximum Number of Iterations".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetMinimumLengthDeformationTolerance`](#generated.RASimulatorRun.SetMinimumLengthDeformationTolerance)(value)                                                 | Set the value of "Minimum Length Deformation Tolerance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetMinimumVolumeTolerance`](#generated.RASimulatorRun.SetMinimumVolumeTolerance)(value)                                                                       | Set the value of "Minimum Volume Tolerance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetModulesOutputPropertiesData`](#generated.RASimulatorRun.SetModulesOutputPropertiesData)(data_dict)                                                         | Set the current value of "Modules Output Properties".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetModulesOutputPropertyEnabled`](#generated.RASimulatorRun.SetModulesOutputPropertyEnabled)(...)                                                             | Set enable state of given "Modules Output Property".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetMoveCfdCellsWithRockyBoundaries`](#generated.RASimulatorRun.SetMoveCfdCellsWithRockyBoundaries)(value)                                                     | Set the value of "Move Cfd Cells With Rocky Boundaries".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetMultiGpuSlicingDirection`](#generated.RASimulatorRun.SetMultiGpuSlicingDirection)(value)                                                                   | Set the value of "Multi Gpu Slicing Direction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetNegateInitialOverlaps`](#generated.RASimulatorRun.SetNegateInitialOverlaps)(value)                                                                         | Set the value of "Negate Initial Overlaps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetNeighborSearchModel`](#generated.RASimulatorRun.SetNeighborSearchModel)(value)                                                                             | Set the value of "Neighbor Search Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetNumberOfProcessors`](#generated.RASimulatorRun.SetNumberOfProcessors)(value)                                                                               | Set the value of "Number of Processors".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetOutputPropertyEnabled`](#generated.RASimulatorRun.SetOutputPropertyEnabled)(root_key, ...)                                                                 | Deprecated: Use SetStandardOutputPropertyEnabled instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetOutputRootEnabled`](#generated.RASimulatorRun.SetOutputRootEnabled)(root_key, enabled)                                                                     | Deprecated: Use SetStandardOutputPropertyEnabled instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetOverRelaxationCoefficient`](#generated.RASimulatorRun.SetOverRelaxationCoefficient)(value)                                                                 | Set the value of "Over Relaxation Coefficient".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetOverlapParticlesDelay`](#generated.RASimulatorRun.SetOverlapParticlesDelay)(value[, unit])                                                                 | Set the value of "Overlap Particles Delay".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetParticleSizeLimitForReordering`](#generated.RASimulatorRun.SetParticleSizeLimitForReordering)(value[, unit])                                               | Set the value of "Particle Size Limit For Reordering".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetRefineConcaveSearch`](#generated.RASimulatorRun.SetRefineConcaveSearch)(value)                                                                             | Set the value of "Refine Concave Search".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetReleaseParticlesWithoutOverlapCheck`](#generated.RASimulatorRun.SetReleaseParticlesWithoutOverlapCheck)(value)                                             | Set the value of "Release Particles Without Overlap Check".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetResetOnlyPhysicalContactsData`](#generated.RASimulatorRun.SetResetOnlyPhysicalContactsData)(value)                                                         | Set the value of "Reset Only Physical Contacts Data".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetResumeDataFrequency`](#generated.RASimulatorRun.SetResumeDataFrequency)(value)                                                                             | Set the value of "Resume Data Frequency".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetSimulationDuration`](#generated.RASimulatorRun.SetSimulationDuration)(value[, unit])                                                                       | Set the value of "Simulation Duration".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetSimulationOutputFrequency`](#generated.RASimulatorRun.SetSimulationOutputFrequency)(value[, unit])                                                         | Deprecated: Use SetTimeInterval instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetSimulationTarget`](#generated.RASimulatorRun.SetSimulationTarget)(value)                                                                                   | Set the value of "Simulation Target".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetSolverCurvesFrequency`](#generated.RASimulatorRun.SetSolverCurvesFrequency)(value)                                                                         | Set the value of "Solver Curves Frequency".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetSolverCurvesOutputFrequency`](#generated.RASimulatorRun.SetSolverCurvesOutputFrequency)(value)                                                             | Deprecated: Use SetSolverCurvesFrequency instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetSortingDistanceFactor`](#generated.RASimulatorRun.SetSortingDistanceFactor)(value)                                                                         | Set the value of "Sorting Distance Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetSpecialReorderingForWidePsd`](#generated.RASimulatorRun.SetSpecialReorderingForWidePsd)(value)                                                             | Set the value of "Special Reordering For Wide Psd".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetStandardOutputPropertiesData`](#generated.RASimulatorRun.SetStandardOutputPropertiesData)(data_dict)                                                       | Set the current value of "Standard Output Properties".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetStandardOutputPropertyEnabled`](#generated.RASimulatorRun.SetStandardOutputPropertyEnabled)(...)                                                           | Set enable state of given "Standard Output Property".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetSuccessiveOverRelaxationTolerance`](#generated.RASimulatorRun.SetSuccessiveOverRelaxationTolerance)(value)                                                 | Set the value of "Successive Over Relaxation Tolerance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetTargetGpu`](#generated.RASimulatorRun.SetTargetGpu)(value)                                                                                                 | Set the value of "Target Gpu".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`SetTargetGpus`](#generated.RASimulatorRun.SetTargetGpus)(gpus)                                                                                                | It will configure the IDs of GPUs that will be used in simulation based on the list of IDs or names of GPUs passed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetTimeConfiguration`](#generated.RASimulatorRun.SetTimeConfiguration)(duration, time_interval)                                                               | Shortcut to set both the simulation's duration and its time interval.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetTimeInterval`](#generated.RASimulatorRun.SetTimeInterval)(value[, unit])                                                                                   | Set the value of "Time Interval".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetTimestepModel`](#generated.RASimulatorRun.SetTimestepModel)(value)                                                                                         | Set the value of "Timestep Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetUse2023R2CellVolumeFractionUpdateApproach`](#generated.RASimulatorRun.SetUse2023R2CellVolumeFractionUpdateApproach)(value)                                 | Set the value of "Use 2023 R2 Cell Volume Fraction Update Approach".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetUse2023R2SourceTermsApproach`](#generated.RASimulatorRun.SetUse2023R2SourceTermsApproach)(value)                                                           | Set the value of "Use 2023 R2 Source Terms Approach".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetUse3RdPowerForCfdCgm`](#generated.RASimulatorRun.SetUse3RdPowerForCfdCgm)(value)                                                                           | Set the value of "Use 3Rd Power For Cfd Cgm".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetUseArraysGrowthRate`](#generated.RASimulatorRun.SetUseArraysGrowthRate)(value)                                                                             | Set the value of "Use Arrays Growth Rate".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetUseBreakageOverlapFactor`](#generated.RASimulatorRun.SetUseBreakageOverlapFactor)(value)                                                                   | Set the value of "Use Breakage Overlap Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetUseCompressedFiles`](#generated.RASimulatorRun.SetUseCompressedFiles)(value)                                                                               | Set the value of "Use Compressed Files".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetUseContactNeighboringDistanceBetweenParticles`](#generated.RASimulatorRun.SetUseContactNeighboringDistanceBetweenParticles)(value)                         | Set the value of "Use Contact Neighboring Distance Between Particles".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetUseContactNeighboringDistanceBetweenParticlesAndTriangles`](#generated.RASimulatorRun.SetUseContactNeighboringDistanceBetweenParticlesAndTriangles)(value) | Set the value of "Use Contact Neighboring Distance Between Particles And Triangles".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetUseDpmBlockingEffectForSinglePhaseSimulations`](#generated.RASimulatorRun.SetUseDpmBlockingEffectForSinglePhaseSimulations)(value)                         | The "Use DPM Blocking Effect For Single Phase Simulations" parameter was removed from Rocky since 25R2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetUseDragLimiterFactor`](#generated.RASimulatorRun.SetUseDragLimiterFactor)(value)                                                                           | Set the value of "Use Drag Limiter Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetUseFixedTimestep`](#generated.RASimulatorRun.SetUseFixedTimestep)(value)                                                                                   | Set the value of "Use Fixed Timestep".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetUseNonRoundTorqueCorrection`](#generated.RASimulatorRun.SetUseNonRoundTorqueCorrection)(value)                                                             | Set the value of "Use Non Round Torque Correction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetUseSortingDistanceFactor`](#generated.RASimulatorRun.SetUseSortingDistanceFactor)(value)                                                                   | Set the value of "Use Sorting Distance Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetWearEnergySpectraBreakageDelayAfterRelease`](#generated.RASimulatorRun.SetWearEnergySpectraBreakageDelayAfterRelease)(value)                               | Deprecated: Use SetEnergySpectraDelayAfterRelease or SetBreakageDelayAfterRelease instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetWearEnergySpectraBreakageStart`](#generated.RASimulatorRun.SetWearEnergySpectraBreakageStart)(value[, unit])                                               | Deprecated: Use SetWearStart or SetBreakageStart instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetWearGeometryUpdateFrequency`](#generated.RASimulatorRun.SetWearGeometryUpdateFrequency)(value[, unit])                                                     | Deprecated: Use GetWearGeometryUpdateInterval instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetWearGeometryUpdateInterval`](#generated.RASimulatorRun.SetWearGeometryUpdateInterval)(value[, unit])                                                       | Set the value of "Wear Geometry Update Interval".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetWearStart`](#generated.RASimulatorRun.SetWearStart)(value[, unit])                                                                                         | Set the value of "Wear Start".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

<a id="generated.RASimulatorRun.AddCurve"></a>

#### AddCurve(curve_name, timesteps, values, unit, realization=None, timesteps_unit=None, initial_date=None)

Add a curve to the element with a time-steps domain

* **Parameters:**
  * **curve_name** (*unicode* *or* *SemanticAssociation*) – The curve’s name or semantic association
  * **timesteps** (*list* *(**TimeStep* *) or* *list* *(**float* *) or* *TimeSet*) – The list of time-steps, in such case a initial date can be provided
    The list of elapsed time as floats, in such case a timesteps_units can be
    provide or days will be used
    The curve’s TimeSet
  * **values** (*list* *(**float* *)*) – The list of curve image values
  * **unit** (*unicode* *or* *Quantity*) – The curve image unit or quantity
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **timesteps_units** (*unicode*) – The elapsed time values unit
    It should be given if a list of floats is used to define the time-set
    If not given days are assumed
  * **initial_date** (*tuple* *(**int* *,* *int* *,* *int* *,* *int* *,* *int* *,* *int* *) or* *TimeStep*) – The initial date for the time-steps given
    A tuple with the year, month, day, hour, minute and seconds
    Or a TimeStep

<a id="generated.RASimulatorRun.AddCustomCurve"></a>

#### AddCustomCurve(name: str, curve_type: str = 'simple', output_unit: str = '<unknown>', scope: str = 'user', sources: dict[str, str] | None = None, expression: str = '')

Add a custom curve in the database.
:param name:

> The name of the curve to be set.
* **Parameters:**
  * **curve_type** – The type of the custom curve to be added.
  * **output_unit** – The output unit, in which case the unit database will be queried for a quantity that makes sense.
    If None, the quantity is considered unknown.
  * **scope** – The scope to be set.
  * **sources** – A dict pointing the variable used to the curve association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RASimulatorRun.AddCustomProperty"></a>

#### AddCustomProperty(name: str, property_type: str = 'simple', output_unit: str = '<unknown>', scope: str = 'user', sources: dict[str, str] | None = None, expression: str = '')

Add a custom property to the database

* **Parameters:**
  * **name** – The name of the property to be set.
  * **property_type** – The type of the custom property to be added.
  * **output_unit** – The output unit, in which case the unit database will be queried for a quantity that makes sense.
    If None, the quantity is considered unknown.
  * **scope** – The scope to be set.
  * **sources** – A dict pointing the variable used to the property association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RASimulatorRun.AddGridFunction"></a>

#### AddGridFunction(grid_function_name, grid_function, unit='<unknown>', location='cell', realization='user_generated', time_step=None)

Adds a grid function to the grid.

* **Parameters:**
  * **grid_function_name** (*unicode* *or* *SemanticAssociation*) – The name of the grid function to be stored in this grid or the semantic association
    representing the grid function.
  * **grid_function** (*list* *(**double* *) or* *numpy array*) – The values of the grid function to be added.
  * **unit** (*unicode* *or* *IQuantity*) – The unit (or quantity) in which the grid function is being given.
  * **location** (*unicode*) – The location of the grid function (currently only ‘cell’ is accepted).
  * **realization** (*unicode*) – The realization used to identify the grid function among other grid functions. If None,
    this information is ignored.
  * **time_step** (*None* *,* *unicode* *,* *ITimeStep* *or* *int*) – if None if given a static grid function will be created otherwise a transient grid
    function is created and the given array associated with this time-step

#### SEE ALSO
KAContextDependentElement.GetTimeStep

<a id="generated.RASimulatorRun.CreateCurveOutputVariable"></a>

#### CreateCurveOutputVariable(curve_name: str, operation: str = 'max', time_range: str = 'all', initial_time_range: float = 0.0, final_time_range: float = 0.0)

Used to create an output variable based on a curve which doesn’t change at each new timestep
(i.e.: a curve with a single value for each time).

* **See:**
  CreateTransientCurveOutputVariable for dealing with curves that are transient.
* **Parameters:**
  * **curve_name** – The name of the curve for which the output variable is wanted.
  * **operation** – 

    The operation we want to do to convert the curve into a single value.

    Valid operations:
    : ’min’
      ‘max’
      ‘sum’
      ‘sum_squared’
      ‘average’
      ‘variance’
      ‘standard_deviation’
  * **time_range** – 

    Defines the time range for the curve to be gathered for creating the output
    variable (depending on which time range is chosen, the initial_time_range and the
    final_time_range may be used to get the actual times for computing the statistics).

    Valid time ranges:
    : ’app_time_filter’:
      : Uses the application time filter to get the relevant times.
      <br/>
      ’all’
      : Uses all the times in the simulation.
      <br/>
      ’last_output’
      : Uses only the last time in the simulation.
      <br/>
      ’absolute’
      : Defines a time range using the initial_time_range and final_time_range.
      <br/>
      ’single’
      : Defines a single time to be used as the time range specified as the
        initial_time_range.
      <br/>
      ’absolute_only_start’
      : Defines a time range using all the values after the given initial_time_range.
      <br/>
      ’relative_to_end’
      : Uses all the values considering initial_time_range as a delta from the end of
        the simulation.
  * **initial_time_range** – A value in seconds (whose actual meaning depends on the defined time_range).
  * **final_time_range** – A value in seconds (whose actual meaning depends on the defined time_range).
* **Return type:**
  str
* **Returns:**
  Returns the name of the variable to be used later on to reference the output variable.

<a id="generated.RASimulatorRun.CreateGridFunction"></a>

#### CreateGridFunction(values, location='cell', time_step='current')

Create a grid function from the given values, location and time-step.

* **Parameters:**
  * **values** (*list* *(**double* *) or* *numpy array*) – The values of the grid function to be added.
  * **time_step**

#### SEE ALSO
KAContextDependentElement.GetTimeStep

<a id="generated.RASimulatorRun.CreateGridFunctionArrayOnCells"></a>

#### CreateGridFunctionArrayOnCells(time_step='current')

Creates a numpy array with the number of elements based on the cells and returns it. A
different time may be specified to create the grid function based on a different time.

* **Parameters:**
  **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to create the array
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  numpy.array
* **Returns:**
  Returns a numpy float32 array with the number of elements equal to the number of cells.

<a id="generated.RASimulatorRun.CreateGridFunctionStatisticOutputVariable"></a>

#### CreateGridFunctionStatisticOutputVariable(grid_function_name: str, operation: str = 'max', statistic_operation: str = 'max', time_range: str = 'last_output', initial_time_range: float = 0.0, final_time_range: float = 0.0)

Used to create an output variable based on a grid function statistic (i.e.: will get a
grid function, compute its statistic based on statistic_operation and then based on
the statistic values will apply the operation to get a single scalar).

* **Parameters:**
  * **grid_function_name** – The name of the grid function for which the output variable is wanted.
  * **operation** – 

    The operation used to select which value to get based on the statistic values obtained.

    Valid operations:
    : ’min’
      ‘max’
      ‘sum’
      ‘sum_squared’
      ‘average’
      ‘variance’
      ‘standard_deviation’
  * **statistic_operation** – 

    The statistic operation which should be applied to the grid function for each time to
    obtain a single value for each time.

    Valid operations:
    : ’min’
      ‘max’
      ‘sum’
      ‘sum_squared’
      ‘average’
      ‘variance’
      ‘standard_deviation’
  * **time_range** – 

    Defines the time range for the grid functions to be gathered for creating the output
    variable (depending on which time range is chosen, the initial_time_range and the
    final_time_range may be used to get the actual times for computing the statistics).

    Valid time ranges:
    : ’app_time_filter’:
      : Uses the application time filter to get the relevant times.
      <br/>
      ’all’
      : Uses all the times in the simulation.
      <br/>
      ’last_output’
      : Uses only the last time in the simulation.
      <br/>
      ’absolute’
      : Defines a time range using the initial_time_range and final_time_range.
      <br/>
      ’single’
      : Defines a single time to be used as the time range specified as the
        initial_time_range.
      <br/>
      ’absolute_only_start’
      : Defines a time range using all the values after the given initial_time_range.
      <br/>
      ’relative_to_end’
      : Uses all the values considering initial_time_range as a delta from the end of
        the simulation.
  * **initial_time_range** – A value in seconds (whose actual meaning depends on the defined time_range).
  * **final_time_range** – A value in seconds (whose actual meaning depends on the defined time_range).
* **Returns:**
  Returns the name of the variable to be used later on to reference the output variable.

<a id="generated.RASimulatorRun.CreateTransientCurveOutputVariable"></a>

#### CreateTransientCurveOutputVariable(curve_name: str, operation: str = 'max', time_operation: str = 'max', time_range: str = 'last_output', initial_time_range: float = 0.0, final_time_range: float = 0.0, domain_range: str = 'all', initial_domain_range: float = 0.0, final_domain_range: float = 0.0, domain_unit: str | None = None)

Used to create an output variable based on a curve for which there’s a completely new
representation for each time step – such as Power : Impact X Belt Width
(i.e.: will get the curve multiple times based on the time range, compute a value for each
time based on the operation, to convert the multiple curves into a single curve and then
will apply the time_operation to get a single scalar from those values).

* **Parameters:**
  * **curve_name** – The name of the transient curve for which the output variable is wanted.
  * **operation** – 

    The operation we want to do at the curve in each time (i.e.: go from transient curve
    to a regular curve).

    Valid operations:
    : ’min’
      ‘max’
      ‘sum’
      ‘sum_squared’
      ‘average’
      ‘variance’
      ‘standard_deviation’
  * **time_operation** – 

    The operation that we want to do at the curve when the curve is already converted to
    a regular time-based curve (by applying the ‘operation’ at each time).

    Valid operations:
    : ’min’
      ‘max’
      ‘sum’
      ‘sum_squared’
      ‘average’
      ‘variance’
      ‘standard_deviation’
  * **time_range** – 

    Defines the time range for the curve to be gathered for creating the output
    variable (depending on which time range is chosen, the initial_time_range and the
    final_time_range may be used to get the actual times for computing the statistics).

    Valid time ranges:
    : ’app_time_filter’:
      : Uses the application time filter to get the relevant times.
      <br/>
      ’all’
      : Uses all the times in the simulation.
      <br/>
      ’last_output’
      : Uses only the last time in the simulation.
      <br/>
      ’absolute’
      : Defines a time range using the initial_time_range and final_time_range.
      <br/>
      ’single’
      : Defines a single time to be used as the time range specified as the
        initial_time_range.
      <br/>
      ’absolute_only_start’
      : Defines a time range using all the values after the given initial_time_range.
      <br/>
      ’relative_to_end’
      : Uses all the values considering initial_time_range as a delta from the end of
        the simulation.
  * **initial_time_range** – A value in seconds (whose actual meaning depends on the defined time_range).
  * **final_time_range** – A value in seconds (whose actual meaning depends on the defined time_range).
  * **domain_range** – 

    Define the domain range for the curve to create the output variable

    Valid domain_range:
    : ’all’
      : Uses all the domain in the simulation
      <br/>
      ’single’
      : Defines a single time to be used as the time range specified as the initial_domain_range
      <br/>
      ’absolute’
      : Defines a domain range using the initial_domain_range and final_domain_range.
  * **initial_domain_range** – A value for the beginning of the domain (whose actual meaning depends on the defined domain_range).
  * **final_domain_range** – A value for the end of the domain (whose actual meaning depends on the defined domain_range).
  * **domain_unit** – A unit for the domain_range
* **Return type:**
  str
* **Returns:**
  Returns the name of the variable to be used later on to reference the output variable.

<a id="generated.RASimulatorRun.DisableCompressedFile"></a>

#### DisableCompressedFile()

Set the value of “Compressed File” to False.

<a id="generated.RASimulatorRun.DisableDpmBlockingEffectForSinglePhaseSimulations"></a>

#### DisableDpmBlockingEffectForSinglePhaseSimulations()

The “Use DPM Blocking Effect For Single Phase Simulations” parameter was removed from Rocky
since 25R2.

<a id="generated.RASimulatorRun.DisableFEMForces"></a>

#### DisableFEMForces()

Disables the “FEM Forces” calculations.

<a id="generated.RASimulatorRun.DisableHtcCalculator"></a>

#### DisableHtcCalculator()

Disables the “HTC” calculations.

<a id="generated.RASimulatorRun.DisableMoveCfdCellsWithRockyBoundaries"></a>

#### DisableMoveCfdCellsWithRockyBoundaries()

Set the value of “Move Cfd Cells With Rocky Boundaries” to False.

<a id="generated.RASimulatorRun.DisableNegateInitialOverlaps"></a>

#### DisableNegateInitialOverlaps()

Set the value of “Negate Initial Overlaps” to False.

<a id="generated.RASimulatorRun.DisableSortingDistanceFactor"></a>

#### DisableSortingDistanceFactor()

Set the value of “Sorting Distance Factor” to False.

<a id="generated.RASimulatorRun.DisableUse3RdPowerForCfdCgm"></a>

#### DisableUse3RdPowerForCfdCgm()

Set the value of “Use 3Rd Power For Cfd Cgm” to False.

<a id="generated.RASimulatorRun.EditCustomCurve"></a>

#### EditCustomCurve(edit_curve: str, new_name: str | None = None, sources: dict[str, str] | None = None, expression: str | None = None)

Edit a custom curve saved in the database.
:param edit_curve:

> The name of the curve to be edited.
* **Parameters:**
  * **new_name** – The new name of the curve to be set.
  * **sources** – A dict pointing the variable used to the curve association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RASimulatorRun.EditCustomProperty"></a>

#### EditCustomProperty(edit_property: str, new_name: str | None = None, sources: dict[str, str] | None = None, expression: str | None = None)

Edit a custom property saved in the database.
:param edit_property:

> The name of the property to be edited.
* **Parameters:**
  * **new_name** – The new name of the property to be set.
  * **sources** – A dict pointing the variable used to the property association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RASimulatorRun.EnableCompressedFile"></a>

#### EnableCompressedFile()

Set the value of “Compressed File” to True.

<a id="generated.RASimulatorRun.EnableDpmBlockingEffectForSinglePhaseSimulations"></a>

#### EnableDpmBlockingEffectForSinglePhaseSimulations()

The “Use DPM Blocking Effect For Single Phase Simulations” parameter was removed from Rocky
since 25R2.

<a id="generated.RASimulatorRun.EnableFEMForces"></a>

#### EnableFEMForces()

Enables the “FEM Forces” calculations.

<a id="generated.RASimulatorRun.EnableHtcCalculator"></a>

#### EnableHtcCalculator()

Enables the “HTC” calculations.

<a id="generated.RASimulatorRun.EnableMoveCfdCellsWithRockyBoundaries"></a>

#### EnableMoveCfdCellsWithRockyBoundaries()

Set the value of “Move Cfd Cells With Rocky Boundaries” to True.

<a id="generated.RASimulatorRun.EnableNegateInitialOverlaps"></a>

#### EnableNegateInitialOverlaps()

Set the value of “Negate Initial Overlaps” to True.

<a id="generated.RASimulatorRun.EnableSortingDistanceFactor"></a>

#### EnableSortingDistanceFactor()

Set the value of “Sorting Distance Factor” to True.

<a id="generated.RASimulatorRun.EnableUse3RdPowerForCfdCgm"></a>

#### EnableUse3RdPowerForCfdCgm()

Set the value of “Use 3Rd Power For Cfd Cgm” to True.

<a id="generated.RASimulatorRun.GetActivesArray"></a>

#### GetActivesArray(time_step='current')

Get an array representing the cells’ “active” status.

* **Parameters:**
  **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the actives array
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  numpy array
* **Returns:**
  Returns a numpy array with booleans where True means the cell is active and False
  means it’s not active.

<a id="generated.RASimulatorRun.GetArraysGrowthRate"></a>

#### GetArraysGrowthRate()

Get the value of “Arrays Growth Rate”.

<a id="generated.RASimulatorRun.GetAvailableModulesOutputProperties"></a>

#### *static* GetAvailableModulesOutputProperties()

* **Returns:**
  The available “Modules Output Properties”.

<a id="generated.RASimulatorRun.GetAvailableOutputRootProperties"></a>

#### GetAvailableOutputRootProperties(root_key: str)

Deprecated: Use GetAvailableStandardOutputProperties instead.

<a id="generated.RASimulatorRun.GetAvailableOutputRoots"></a>

#### GetAvailableOutputRoots()

Deprecated: Use GetAvailableStandardOutputProperties instead.

<a id="generated.RASimulatorRun.GetAvailableStandardOutputProperties"></a>

#### *static* GetAvailableStandardOutputProperties()

* **Returns:**
  The available “Standard Output Properties”.

<a id="generated.RASimulatorRun.GetBoundingBox"></a>

#### GetBoundingBox(unit=None, time_step='current')

Get the element’s bounding box.

* **Parameters:**
  * **unit** (*unicode*) – The unit in which the bounding box should be gotten (by default it uses the same
    unit of the geometry).
  * **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
    or an ITimeStep identifying the time to get the bounding box
    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  tuple(tuple(float, float, float), tuple(float, float, float))
* **Returns:**
  THe minimum and maximum geometry coordinates of the grid or None if the
  time step is not available at the requested time.

<a id="generated.RASimulatorRun.GetBreakageDelayAfterRelease"></a>

#### GetBreakageDelayAfterRelease(unit: str | None = None)

Get the value of “Breakage Delay After Release”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RASimulatorRun.GetBreakageOverlapFactor"></a>

#### GetBreakageOverlapFactor()

Get the value of “Breakage Overlap Factor”.

<a id="generated.RASimulatorRun.GetBreakageStart"></a>

#### GetBreakageStart(unit: str | None = None)

Get the value of “Breakage Start”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RASimulatorRun.GetCellAreaAsArray"></a>

#### GetCellAreaAsArray(time_step='current')

Get an array containing the area of each cell.

* **Parameters:**
  **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the cell volume
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  numpy.array
* **Returns:**
  An array with the cell area (the unit will be the geometry unit \*\* 2)

<a id="generated.RASimulatorRun.GetCellCenterAsArray"></a>

#### GetCellCenterAsArray(time_step='current')

Get an array containing the center coordinates of each cell.

* **Parameters:**
  **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the cell center
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  numpy.array
* **Returns:**
  An array with the cell center coordinates (each element will be a point to the center of
  the cell).

<a id="generated.RASimulatorRun.GetCellDzAsArray"></a>

#### GetCellDzAsArray(time_step='current')

Get an array containing the thickness (in Z) of each cell.

* **Parameters:**
  **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the cell dz
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  numpy.array
* **Returns:**
  An array with cell thicknesses computed in the Z direction.

<a id="generated.RASimulatorRun.GetCellFromIJK"></a>

#### GetCellFromIJK(i, j, k, time_step='current')

Creates a grid cell handle from the current I, J, K indexes

* **Parameters:**
  * **i** (*int*) – The topological I cell index
  * **j** (*int*) – The topological J cell index
  * **k** (*int*) – The topological K cell index
  * **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
    or an ITimeStep identifying the time to get the cell from the i, j, k
    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  int or None
* **Returns:**
  Returns the cell handle to be used for the given I, J, K indexes.
  Or None if the given I, J and K indexes are invalid or refer to an inactive cell
* **Raises:**
  **IndexError** – An IndexError is raised if the cell is inactive or out of range.

<a id="generated.RASimulatorRun.GetCellIJK"></a>

#### GetCellIJK(cell_handle, time_step='current')

Converts the given cell handle to it’s I, J, K indexes

* **Parameters:**
  * **cell_handle** (*int*) – The cell handle
  * **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
    or an ITimeStep identifying the time to get the i, j, k from the cell.
    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  tuple( i, j, k )
* **Returns:**
  The cell I, J, K indexes

<a id="generated.RASimulatorRun.GetCellNumberOfVertices"></a>

#### GetCellNumberOfVertices(cell, time_step='current')

Get an array containing the number of vertices of each cell.

* **Parameters:**
  * **cell_handle** (*int*) – The cell handle
  * **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
    or an ITimeStep identifying the time to get the number of vertices for the given cell
    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  int
* **Returns:**
  The total number of vertices on the given cell

<a id="generated.RASimulatorRun.GetCellPointsAsFunction"></a>

#### GetCellPointsAsFunction(time_step='current')

Get a function for the points (vertices) of each cell.

* **Parameters:**
  **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the cell points
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  PointsFunction
* **Returns:**
  A function that provides access to the points of a cell (i.e.: vertices).

#### NOTE
Each point from a cell must be accessed by a tuple(cell_handle, point_id). In a
reservoir grid, the point id is a value from 0 to 7.

@usage:

```default
#To get vertex 0 of a cell:
points_function = grid.GetCellPointsAsFunction()
cell = grid.GetCellFromIJK(0, 0, 0)
x, y, z = points_function[(cell, 0)]

#To iterate over all the vertices of a cell:
points_function = grid.GetCellPointsAsFunction()
cell = grid.GetCellFromIJK(0, 0, 0)
for vertex in grid.IterCellVertices(cell):
    x, y, z = points_function[vertex]
```

<a id="generated.RASimulatorRun.GetCellVolumeAsArray"></a>

#### GetCellVolumeAsArray(time_step='current')

Get an array with the volume of each cell.

* **Parameters:**
  **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the cell volume
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  numpy.array
* **Returns:**
  An array with the cell volume (the unit will be the geometry unit \*\* 3)

<a id="generated.RASimulatorRun.GetCollectForcesForFemAnalysis"></a>

#### GetCollectForcesForFemAnalysis()

Deprecated: Use this method from RAStudy instead

<a id="generated.RASimulatorRun.GetContactNeighboringDistanceBetweenParticles"></a>

#### GetContactNeighboringDistanceBetweenParticles(unit: str | None = None)

Get the value of “Contact Neighboring Distance Between Particles”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RASimulatorRun.GetContactNeighboringDistanceBetweenParticlesAndTriangles"></a>

#### GetContactNeighboringDistanceBetweenParticlesAndTriangles(unit: str | None = None)

Get the value of “Contact Neighboring Distance Between Particles And Triangles”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RASimulatorRun.GetCurve"></a>

#### GetCurve(curve_name, simulation_name=None, realization=None, time_step=None)

Override base class method to check for a request of a grid function statistic.

<a id="generated.RASimulatorRun.GetCurveNames"></a>

#### GetCurveNames(simulation_name=None)

@param simulation_name: unicode
: An optional parameter for defining the simulation to get the curve from.

* **Returns:**
  list(str)
  The list of curve names

<a id="generated.RASimulatorRun.GetCurveNamesAssociation"></a>

#### GetCurveNamesAssociation(simulation_name=None)

Get this element’s curve names.

* **Parameters:**
  **simulation_name** (*unicode*) – The name of the simulation to query the curve names
  If None is given the current element simulation will be used
* **Return type:**
  dict(unicode, ISemanticAssociation)
* **Returns:**
  The curve names for this element in the given simulation name

<a id="generated.RASimulatorRun.GetDeformableMassMatrixType"></a>

#### GetDeformableMassMatrixType()

Get “Deformable Mass Matrix Type” as a string.

* **Returns:**
  The returned value will be one of [‘lumped’, ‘consistent’].

<a id="generated.RASimulatorRun.GetDisableTrianglesOnPeriodicBoundaries"></a>

#### GetDisableTrianglesOnPeriodicBoundaries()

Get the value of “Disable Triangles On Periodic Boundaries”.

<a id="generated.RASimulatorRun.GetDragLimiterFactor"></a>

#### GetDragLimiterFactor()

Get the value of “Drag Limiter Factor”.

<a id="generated.RASimulatorRun.GetElementCurve"></a>

#### GetElementCurve(element_name, curve_name, simulation_name=None, realization=None, time_step=None)

Return the curves for the given element and name.

* **Parameters:**
  * **element_name** (*unicode*) – The name of the element
  * **curve_name** (*unicode*) – The name of the curve
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the curve from.
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **time_step** (*TimeStep*) – For transient curves a time-step must be given.

<a id="generated.RASimulatorRun.GetFixedTimestep"></a>

#### GetFixedTimestep(unit: str | None = None)

Get the value of “Fixed Timestep”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RASimulatorRun.GetFluentOutputsMultiplier"></a>

#### GetFluentOutputsMultiplier()

Get the value of “Fluent Outputs Multiplier”.

<a id="generated.RASimulatorRun.GetGeometryQuantity"></a>

#### GetGeometryQuantity()

Get the quantity corresponding to the grid’s geometry.

* **Return type:**
  IQuantity
* **Returns:**
  The grid geometry quantity

<a id="generated.RASimulatorRun.GetGeometryUnit"></a>

#### GetGeometryUnit()

Get the grid’s geometry’s unit.

* **Return type:**
  unicode
* **Returns:**
  The unit for the grid geometry

<a id="generated.RASimulatorRun.GetGridFunction"></a>

#### GetGridFunction(grid_function_name, simulation_name=None, translated=False)

Gets a grid function given its name. It provides a representation that’s valid for all times,
so, one can do: grid.GetGridFunction(‘Pressure’).GetMax()

To get the values of a given time, use:

```default
time_set = grid.GetTimeSet()
grid.GetGridFunction('Temperature').GetArray(unit='degC', time_step=time_set[10])
```

#### NOTE
if it’s used without a time parameter, it’ll get the array at the current application time.

* **Parameters:**
  * **grid_function_name** (*unicode*) – The name of the grid function to be gotten in this grid.
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the grid function from.
  * **translated** (*bool*) – If False, the internal names of the grid functions will be returned, otherwise, the
    name returned will be the translated name (based on the settings chosen on how
    to see grid functions – i.e.: Cognitive, ECLIPSE, IMEX).
* **Return type:**
  KAGridFunction
* **Returns:**
  The grid function found
* **Raises:**
  **ValueError** – if the grid function is not found.

<a id="generated.RASimulatorRun.GetGridFunctionNames"></a>

#### GetGridFunctionNames(translated=False, context=None)

Get a list of the available grid functions for this grid.

* **Parameters:**
  * **translated** (*bool*) – If False, the internal names of the grid functions will be returned, otherwise, the
    name returned will be the translated name (based on the settings chosen on how
    to see grid functions – i.e.: Cognitive, ECLIPSE, IMEX).
  * **context** ( *'all'* *,*  *'static'* *or*  *'transient'*) – Which names should be returned
    ‘all’ all grid function names
    ‘static’ only the static grid function names
    ‘transient’ only the transient grid function names
* **Return type:**
  list(unicode)
* **Returns:**
  Returns a list with the grid functions available.

<a id="generated.RASimulatorRun.GetJointElasticRatio"></a>

#### GetJointElasticRatio()

Get the value of “Joint Elastic Ratio”.

<a id="generated.RASimulatorRun.GetLinearHystDamp"></a>

#### GetLinearHystDamp()

Get the value of “Linear Hyst Damp”.

<a id="generated.RASimulatorRun.GetLoadingNSteps"></a>

#### GetLoadingNSteps()

Get the value of “Loading N Steps”.

<a id="generated.RASimulatorRun.GetMaximumNumberOfIterations"></a>

#### GetMaximumNumberOfIterations()

Get the value of “Maximum Number of Iterations”.

<a id="generated.RASimulatorRun.GetMeshColoring"></a>

#### GetMeshColoring(window: str | type[KAWorkspaceWindow])

Get the RAMeshColoring related to the current object and a window.

* **Parameters:**
  **window** – The window that the coloring is acting. The window must be a str of the name of the
  window or a KAWorkspaceWindow.
* **Raises:**
  **RockyApiError** – If window is not a str or KAWorkspaceWindow. Additionally, raises an error if no window
  is found or no coloring for the given item exists.

<a id="generated.RASimulatorRun.GetMinimumLengthDeformationTolerance"></a>

#### GetMinimumLengthDeformationTolerance()

Get the value of “Minimum Length Deformation Tolerance”.

<a id="generated.RASimulatorRun.GetMinimumVolumeTolerance"></a>

#### GetMinimumVolumeTolerance()

Get the value of “Minimum Volume Tolerance”.

<a id="generated.RASimulatorRun.GetModulesOutputPropertiesData"></a>

#### GetModulesOutputPropertiesData()

* **Returns:**
  The current value of “Modules Output Properties”.

<a id="generated.RASimulatorRun.GetModulesOutputPropertyEnabled"></a>

#### GetModulesOutputPropertyEnabled(\*output_property: str)

Retrieve enable state of given “Modules Output Property”.

* **Parameters:**
  **output_property** – The output property name.

<a id="generated.RASimulatorRun.GetMoveCfdCellsWithRockyBoundaries"></a>

#### GetMoveCfdCellsWithRockyBoundaries()

Get the value of “Move Cfd Cells With Rocky Boundaries”.

<a id="generated.RASimulatorRun.GetMultiGpuSlicingDirection"></a>

#### GetMultiGpuSlicingDirection()

Get “Multi Gpu Slicing Direction” as a string.

* **Returns:**
  The returned value will be one of [‘X_Parallel’, ‘Y_Parallel’, ‘Z_Parallel’].

<a id="generated.RASimulatorRun.GetNegateInitialOverlaps"></a>

#### GetNegateInitialOverlaps()

Get the value of “Negate Initial Overlaps”.

<a id="generated.RASimulatorRun.GetNeighborSearchModel"></a>

#### GetNeighborSearchModel()

Get “Neighbor Search Model” as a string.

* **Returns:**
  The returned value will be one of [‘BVH’, ‘RegularGrid’, ‘SparseGrid’].

<a id="generated.RASimulatorRun.GetNumberOfCells"></a>

#### GetNumberOfCells(time_step='current')

Get the total number of cells.

* **Parameters:**
  **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the number of cells
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  int
* **Returns:**
  The total number of cells

<a id="generated.RASimulatorRun.GetNumberOfNodes"></a>

#### GetNumberOfNodes(time_step='current')

Get the total number of nodes (vertices).

* **Parameters:**
  **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the number of cells
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  int
* **Returns:**
  The total number of nodes/vertices

<a id="generated.RASimulatorRun.GetNumberOfProcessors"></a>

#### GetNumberOfProcessors()

Get the value of “Number of Processors”.

<a id="generated.RASimulatorRun.GetNumpyCurve"></a>

#### GetNumpyCurve(curve_name, unit=None, realization=None)

Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.

<a id="generated.RASimulatorRun.GetOutputPropertyEnabled"></a>

#### GetOutputPropertyEnabled(root_key: str, property_name: str)

Deprecated: Use GetStandardOutputPropertyEnabled instead.

<a id="generated.RASimulatorRun.GetOutputRootEnabled"></a>

#### GetOutputRootEnabled(root_key: str)

Deprecated: Use GetStandardOutputPropertyEnabled instead.

<a id="generated.RASimulatorRun.GetOutputVariableValue"></a>

#### GetOutputVariableValue(variable_name: str)

Get the value of a previously-created output variable.

* **Parameters:**
  **variable_name** (*unicode*) – The variable name whose value we want.
* **Returns:**
  Returns a scalar with the value and unit for the given variable_name or None if no
  variable was found with the given name or if it couldn’t be computed.

<a id="generated.RASimulatorRun.GetOverRelaxationCoefficient"></a>

#### GetOverRelaxationCoefficient()

Get the value of “Over Relaxation Coefficient”.

<a id="generated.RASimulatorRun.GetOverlapParticlesDelay"></a>

#### GetOverlapParticlesDelay(unit: str | None = None)

Get the value of “Overlap Particles Delay”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RASimulatorRun.GetParticleSizeLimitForReordering"></a>

#### GetParticleSizeLimitForReordering(unit: str | None = None)

Get the value of “Particle Size Limit For Reordering”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RASimulatorRun.GetRefineConcaveSearch"></a>

#### GetRefineConcaveSearch()

Get the value of “Refine Concave Search”.

<a id="generated.RASimulatorRun.GetReleaseParticlesWithoutOverlapCheck"></a>

#### GetReleaseParticlesWithoutOverlapCheck()

Get the value of “Release Particles Without Overlap Check”.

<a id="generated.RASimulatorRun.GetResetOnlyPhysicalContactsData"></a>

#### GetResetOnlyPhysicalContactsData()

Get the value of “Reset Only Physical Contacts Data”.

<a id="generated.RASimulatorRun.GetResumeDataFrequency"></a>

#### GetResumeDataFrequency()

Get the value of “Resume Data Frequency”.

<a id="generated.RASimulatorRun.GetSimulationDuration"></a>

#### GetSimulationDuration(unit: str | None = None)

Get the value of “Simulation Duration”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RASimulatorRun.GetSimulationOutputFrequency"></a>

#### GetSimulationOutputFrequency(unit: str | None = None)

Deprecated: Use GetTimeInterval instead.

<a id="generated.RASimulatorRun.GetSimulationTarget"></a>

#### GetSimulationTarget()

Get “Simulation Target” as a string.

* **Returns:**
  The returned value will be one of [‘CPU’, ‘GPU’, ‘MULTI_GPU’].

<a id="generated.RASimulatorRun.GetSolverCurvesFrequency"></a>

#### GetSolverCurvesFrequency()

Get the value of “Solver Curves Frequency”.

<a id="generated.RASimulatorRun.GetSolverCurvesOutputFrequency"></a>

#### GetSolverCurvesOutputFrequency()

Deprecated: Use GetSolverCurvesFrequency instead.

<a id="generated.RASimulatorRun.GetSortingDistanceFactor"></a>

#### GetSortingDistanceFactor()

Get the value of “Sorting Distance Factor”.

<a id="generated.RASimulatorRun.GetSpecialReorderingForWidePsd"></a>

#### GetSpecialReorderingForWidePsd()

Get the value of “Special Reordering For Wide Psd”.

<a id="generated.RASimulatorRun.GetStandardOutputPropertiesData"></a>

#### GetStandardOutputPropertiesData()

* **Returns:**
  The current value of “Standard Output Properties”.

<a id="generated.RASimulatorRun.GetStandardOutputPropertyEnabled"></a>

#### GetStandardOutputPropertyEnabled(\*output_property: str)

Retrieve enable state of given “Standard Output Property”.

* **Parameters:**
  **output_property** – The output property name.

<a id="generated.RASimulatorRun.GetSuccessiveOverRelaxationTolerance"></a>

#### GetSuccessiveOverRelaxationTolerance()

Get the value of “Successive Over Relaxation Tolerance”.

<a id="generated.RASimulatorRun.GetTargetGpu"></a>

#### GetTargetGpu()

Get the value of “Target Gpu”.

<a id="generated.RASimulatorRun.GetTargetGpus"></a>

#### GetTargetGpus()

* **Returns:**
  A list of IDs of the GPUs currently selected for Multi GPU simulation.

<a id="generated.RASimulatorRun.GetTimeInterval"></a>

#### GetTimeInterval(unit: str | None = None)

Get the value of “Time Interval”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RASimulatorRun.GetTimeSet"></a>

#### GetTimeSet()

Get the list of time-steps associated to the grid.

* **Return type:**
  ITimeSet
* **Returns:**
  The list of time-steps associated to the grid

<a id="generated.RASimulatorRun.GetTimeStatistics"></a>

#### GetTimeStatistics()

Get the object responsible for handling time-statistics grid functions for this process.
This call will return None if the process doesn’t support time statistics.

<a id="generated.RASimulatorRun.GetTimeStep"></a>

#### GetTimeStep(time_step, accept_global=False)

Get the timestep corresponding to the given time.

* **Parameters:**
  * **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – 

    Either a string with
    : ’current’ identifying the current time step
      ‘global’ identifying that the global limits should be gotten
      (note that if accept_global=False and ‘global’ is passed, an error is raised).

    or an ITimeStep identifying the time to get the limits

    or an int identifying the time step index to be used based on the global time set
  * **accept_global** (*bool*) – If True, a global time step is accepted (and returns None), otherwise, an error is
    raised if ‘global’ is passed.
* **Return type:**
  ITimeStep
* **Returns:**
  Returns the time step to be used or None if accept_global == True and the time
  step passed is ‘global’.

<a id="generated.RASimulatorRun.GetTimestepModel"></a>

#### GetTimestepModel()

Get “Timestep Model” as a string.

* **Returns:**
  The returned value will be one of [‘constant’, ‘variable’].

<a id="generated.RASimulatorRun.GetTopologyShape"></a>

#### GetTopologyShape(time_step='current')

Get the shape of the topology (similar to the shape of numpy arrays).

* **Parameters:**
  **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the topology shape
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  tuple of ints
* **Returns:**
  The grid shape as a tuple of the grid size in each topological dimension.

<a id="generated.RASimulatorRun.GetUse2023R2CellVolumeFractionUpdateApproach"></a>

#### GetUse2023R2CellVolumeFractionUpdateApproach()

Get the value of “Use 2023 R2 Cell Volume Fraction Update Approach”.

<a id="generated.RASimulatorRun.GetUse2023R2SourceTermsApproach"></a>

#### GetUse2023R2SourceTermsApproach()

Get the value of “Use 2023 R2 Source Terms Approach”.

<a id="generated.RASimulatorRun.GetUse3RdPowerForCfdCgm"></a>

#### GetUse3RdPowerForCfdCgm()

Get the value of “Use 3Rd Power For Cfd Cgm”.

<a id="generated.RASimulatorRun.GetUseArraysGrowthRate"></a>

#### GetUseArraysGrowthRate()

Get the value of “Use Arrays Growth Rate”.

<a id="generated.RASimulatorRun.GetUseBreakageOverlapFactor"></a>

#### GetUseBreakageOverlapFactor()

Get the value of “Use Breakage Overlap Factor”.

<a id="generated.RASimulatorRun.GetUseCompressedFiles"></a>

#### GetUseCompressedFiles()

Get the value of “Use Compressed Files”.

<a id="generated.RASimulatorRun.GetUseContactNeighboringDistanceBetweenParticles"></a>

#### GetUseContactNeighboringDistanceBetweenParticles()

Get the value of “Use Contact Neighboring Distance Between Particles”.

<a id="generated.RASimulatorRun.GetUseContactNeighboringDistanceBetweenParticlesAndTriangles"></a>

#### GetUseContactNeighboringDistanceBetweenParticlesAndTriangles()

Get the value of “Use Contact Neighboring Distance Between Particles And Triangles”.

<a id="generated.RASimulatorRun.GetUseDpmBlockingEffectForSinglePhaseSimulations"></a>

#### GetUseDpmBlockingEffectForSinglePhaseSimulations()

The “Use DPM Blocking Effect For Single Phase Simulations” parameter was removed from Rocky
since 25R2.

<a id="generated.RASimulatorRun.GetUseDragLimiterFactor"></a>

#### GetUseDragLimiterFactor()

Get the value of “Use Drag Limiter Factor”.

<a id="generated.RASimulatorRun.GetUseFixedTimestep"></a>

#### GetUseFixedTimestep()

Get the value of “Use Fixed Timestep”.

<a id="generated.RASimulatorRun.GetUseNonRoundTorqueCorrection"></a>

#### GetUseNonRoundTorqueCorrection()

Get the value of “Use Non Round Torque Correction”.

<a id="generated.RASimulatorRun.GetUseSortingDistanceFactor"></a>

#### GetUseSortingDistanceFactor()

Get the value of “Use Sorting Distance Factor”.

<a id="generated.RASimulatorRun.GetValidDeformableMassMatrixTypeValues"></a>

#### GetValidDeformableMassMatrixTypeValues()

Get a list of all possible values for “Deformable Mass Matrix Type”.

* **Returns:**
  The returned list is [‘lumped’, ‘consistent’].

<a id="generated.RASimulatorRun.GetValidMultiGpuSlicingDirectionValues"></a>

#### GetValidMultiGpuSlicingDirectionValues()

Get a list of all possible values for “Multi Gpu Slicing Direction”.

* **Returns:**
  The returned list is [‘X_Parallel’, ‘Y_Parallel’, ‘Z_Parallel’].

<a id="generated.RASimulatorRun.GetValidNeighborSearchModelValues"></a>

#### GetValidNeighborSearchModelValues()

Get a list of all possible values for “Neighbor Search Model”.

* **Returns:**
  The returned list is [‘BVH’, ‘RegularGrid’, ‘SparseGrid’].

<a id="generated.RASimulatorRun.GetValidSimulationTargetValues"></a>

#### GetValidSimulationTargetValues()

Get a list of all possible values for “Simulation Target”.

* **Returns:**
  The returned list is [‘CPU’, ‘GPU’, ‘MULTI_GPU’].

<a id="generated.RASimulatorRun.GetValidTimestepModelValues"></a>

#### GetValidTimestepModelValues()

Get a list of all possible values for “Timestep Model”.

* **Returns:**
  The returned list is [‘constant’, ‘variable’].

<a id="generated.RASimulatorRun.GetWearEnergySpectraBreakageDelayAfterRelease"></a>

#### GetWearEnergySpectraBreakageDelayAfterRelease(unit: str | None = None)

Deprecated: Use GetEnergySpectraDelayAfterRelease or GetBreakageDelayAfterRelease instead.

“Wear / Breakage Delay after Release” is now:
: 1.Breakage Start

The default value that is being return is the Breakage value.

<a id="generated.RASimulatorRun.GetWearEnergySpectraBreakageStart"></a>

#### GetWearEnergySpectraBreakageStart(unit: str | None = None)

Deprecated: Use GetWearStart or GetBreakageStart instead.

“Wear / Breakage Start Time” was broken into two:
: 1.Wear Start
  2.Breakage Start

The default value that is being return is the Breakage value.

<a id="generated.RASimulatorRun.GetWearGeometryUpdateFrequency"></a>

#### GetWearGeometryUpdateFrequency(unit: str | None = None)

Deprecated: Use GetWearGeometryUpdateInterval instead.

<a id="generated.RASimulatorRun.GetWearGeometryUpdateInterval"></a>

#### GetWearGeometryUpdateInterval(unit: str | None = None)

Get the value of “Wear Geometry Update Interval”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RASimulatorRun.GetWearStart"></a>

#### GetWearStart(unit: str | None = None)

Get the value of “Wear Start”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RASimulatorRun.HasFEMForcesEnabled"></a>

#### HasFEMForcesEnabled()

Whether the simulation is configured to collect forces for FEM analysis.

<a id="generated.RASimulatorRun.HasGridFunction"></a>

#### HasGridFunction(grid_function_name)

Whether the grid has the given grid function.

* **Parameters:**
  **grid_function_name** (*unicode*) – The name of the grid function to be checked.
* **Return type:**
  bool
* **Returns:**
  Returns True if the grid function exists and False otherwise.

<a id="generated.RASimulatorRun.HasHtcCalculatedData"></a>

#### HasHtcCalculatedData()

Whether the “HTC” is being calculated.

<a id="generated.RASimulatorRun.IsCellActive"></a>

#### IsCellActive(i, j, k, time_step='current')

Checks if the given cell is active or not

@param i, j, k: int
: The cell i, j, k

* **Parameters:**
  **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get if the cell is active
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  bool
* **Returns:**
  True if the cell is active

<a id="generated.RASimulatorRun.IsCompressedFileEnabled"></a>

#### IsCompressedFileEnabled()

Check if the “Compressed File” is enabled.

<a id="generated.RASimulatorRun.IsDpmBlockingEffectForSinglePhaseSimulationsEnabled"></a>

#### IsDpmBlockingEffectForSinglePhaseSimulationsEnabled()

The “Use DPM Blocking Effect For Single Phase Simulations” parameter was removed from Rocky
since 25R2.

<a id="generated.RASimulatorRun.IsMoveCfdCellsWithRockyBoundariesEnabled"></a>

#### IsMoveCfdCellsWithRockyBoundariesEnabled()

Check if the “Move Cfd Cells With Rocky Boundaries” is enabled.

<a id="generated.RASimulatorRun.IsNegateInitialOverlapsEnabled"></a>

#### IsNegateInitialOverlapsEnabled()

Check if the “Negate Initial Overlaps” is enabled.

<a id="generated.RASimulatorRun.IsSortingDistanceFactorEnabled"></a>

#### IsSortingDistanceFactorEnabled()

Check if the “Sorting Distance Factor” is enabled.

<a id="generated.RASimulatorRun.IsUse3RdPowerForCfdCgmEnabled"></a>

#### IsUse3RdPowerForCfdCgmEnabled()

Check if the “Use 3Rd Power For Cfd Cgm” is enabled.

<a id="generated.RASimulatorRun.IterCellVertices"></a>

#### IterCellVertices(cell, time_step='current')

Iterate on the vertices of active grid cells at the given time.

* **Parameters:**
  * **cell_handle** (*int*) – The cell handle
  * **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
    or an ITimeStep identifying the time to iterate the vertices of a cell
    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  vertex_handle
* **Returns:**
  The iterator over all the cell’s vertices.

<a id="generated.RASimulatorRun.IterCells"></a>

#### IterCells(time_step='current')

Iterate on the active grid cells at the given time.

* **Parameters:**
  **time_step** (*unicode* *,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to iterate the cells
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  iterator
* **Returns:**
  The iterator over all the active grid cells for the given time.

<a id="generated.RASimulatorRun.Modified"></a>

#### Modified(\*args, \*\*kwargs)

Resets all the cache information after a change in the subject being tracked.

<a id="generated.RASimulatorRun.RemoveCustomCurve"></a>

#### RemoveCustomCurve(name: str)

Remove the curve from the database
:param name:

> The name of the curve to be removed.

<a id="generated.RASimulatorRun.RemoveCustomProperty"></a>

#### RemoveCustomProperty(name: str)

Remove the property from the database
:param name:

> The name of the property to be removed.

<a id="generated.RASimulatorRun.RemoveOutputVariable"></a>

#### RemoveOutputVariable(variable_name: str)

Removes some output variable.

* **Parameters:**
  **variable_name** – The name of the variable to be removed.

<a id="generated.RASimulatorRun.RemoveProcess"></a>

#### RemoveProcess()

It is not possible to remove the item “Solver” from the project. It’s a standard Rocky
item in project.

<a id="generated.RASimulatorRun.RestoreOutputPropertiesDefaults"></a>

#### RestoreOutputPropertiesDefaults()

Restore default values of “Output Properties”.

<a id="generated.RASimulatorRun.SetArraysGrowthRate"></a>

#### SetArraysGrowthRate(value: str | float)

Set the value of “Arrays Growth Rate”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASimulatorRun.SetBreakageDelayAfterRelease"></a>

#### SetBreakageDelayAfterRelease(value: str | float, unit: str | None = None)

Set the value of “Breakage Delay After Release”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RASimulatorRun.SetBreakageOverlapFactor"></a>

#### SetBreakageOverlapFactor(value: str | float)

Set the value of “Breakage Overlap Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASimulatorRun.SetBreakageStart"></a>

#### SetBreakageStart(value: str | float, unit: str | None = None)

Set the value of “Breakage Start”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RASimulatorRun.SetCollectForcesForFemAnalysis"></a>

#### SetCollectForcesForFemAnalysis(value: bool)

Deprecated: Use this method from RAStudy instead

<a id="generated.RASimulatorRun.SetContactNeighboringDistanceBetweenParticles"></a>

#### SetContactNeighboringDistanceBetweenParticles(value: str | float, unit: str | None = None)

Set the value of “Contact Neighboring Distance Between Particles”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RASimulatorRun.SetContactNeighboringDistanceBetweenParticlesAndTriangles"></a>

#### SetContactNeighboringDistanceBetweenParticlesAndTriangles(value: str | float, unit: str | None = None)

Set the value of “Contact Neighboring Distance Between Particles And Triangles”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RASimulatorRun.SetCurrentTimeStep"></a>

#### SetCurrentTimeStep(time_step)

Sets the current time step.

* **Parameters:**
  **time_step** (*ITimeStep*) – The time step to be considered the ‘current’ time step.

<a id="generated.RASimulatorRun.SetDeformableMassMatrixType"></a>

#### SetDeformableMassMatrixType(value: str)

Set the value of “Deformable Mass Matrix Type”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘lumped’, ‘consistent’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Deformable Mass Matrix Type” option.

<a id="generated.RASimulatorRun.SetDisableTrianglesOnPeriodicBoundaries"></a>

#### SetDisableTrianglesOnPeriodicBoundaries(value: bool)

Set the value of “Disable Triangles On Periodic Boundaries”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetDragLimiterFactor"></a>

#### SetDragLimiterFactor(value: str | float)

Set the value of “Drag Limiter Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASimulatorRun.SetFixedTimestep"></a>

#### SetFixedTimestep(value: str | float, unit: str | None = None)

Set the value of “Fixed Timestep”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RASimulatorRun.SetFluentOutputsMultiplier"></a>

#### SetFluentOutputsMultiplier(value: int)

Set the value of “Fluent Outputs Multiplier”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetJointElasticRatio"></a>

#### SetJointElasticRatio(value: str | float)

Set the value of “Joint Elastic Ratio”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASimulatorRun.SetLinearHystDamp"></a>

#### SetLinearHystDamp(value: str | float)

Set the value of “Linear Hyst Damp”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASimulatorRun.SetLoadingNSteps"></a>

#### SetLoadingNSteps(value: str | int)

Set the value of “Loading N Steps”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RASimulatorRun.SetMaximumNumberOfIterations"></a>

#### SetMaximumNumberOfIterations(value: str | int)

Set the value of “Maximum Number of Iterations”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RASimulatorRun.SetMinimumLengthDeformationTolerance"></a>

#### SetMinimumLengthDeformationTolerance(value: str | float)

Set the value of “Minimum Length Deformation Tolerance”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASimulatorRun.SetMinimumVolumeTolerance"></a>

#### SetMinimumVolumeTolerance(value: str | float)

Set the value of “Minimum Volume Tolerance”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASimulatorRun.SetModulesOutputPropertiesData"></a>

#### SetModulesOutputPropertiesData(data_dict: dict)

Set the current value of “Modules Output Properties”.

* **Parameters:**
  **data_dict** – The data dictionary to set.

<a id="generated.RASimulatorRun.SetModulesOutputPropertyEnabled"></a>

#### SetModulesOutputPropertyEnabled(\*output_property: str, enabled: bool)

Set enable state of given “Modules Output Property”.

* **Parameters:**
  * **output_property** – The output property name.
  * **enabled** – The enable state of given “Modules Output Property”.

<a id="generated.RASimulatorRun.SetMoveCfdCellsWithRockyBoundaries"></a>

#### SetMoveCfdCellsWithRockyBoundaries(value: bool)

Set the value of “Move Cfd Cells With Rocky Boundaries”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetMultiGpuSlicingDirection"></a>

#### SetMultiGpuSlicingDirection(value: str)

Set the value of “Multi Gpu Slicing Direction”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘X_Parallel’, ‘Y_Parallel’, ‘Z_Parallel’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Multi Gpu Slicing Direction” option.

<a id="generated.RASimulatorRun.SetNegateInitialOverlaps"></a>

#### SetNegateInitialOverlaps(value: bool)

Set the value of “Negate Initial Overlaps”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetNeighborSearchModel"></a>

#### SetNeighborSearchModel(value: str)

Set the value of “Neighbor Search Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘BVH’, ‘RegularGrid’, ‘SparseGrid’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Neighbor Search Model” option.

<a id="generated.RASimulatorRun.SetNumberOfProcessors"></a>

#### SetNumberOfProcessors(value: str | int)

Set the value of “Number of Processors”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RASimulatorRun.SetOutputPropertyEnabled"></a>

#### SetOutputPropertyEnabled(root_key: str, property_name: str, enabled: bool)

Deprecated: Use SetStandardOutputPropertyEnabled instead.

<a id="generated.RASimulatorRun.SetOutputRootEnabled"></a>

#### SetOutputRootEnabled(root_key: str, enabled: bool)

Deprecated: Use SetStandardOutputPropertyEnabled instead.

<a id="generated.RASimulatorRun.SetOverRelaxationCoefficient"></a>

#### SetOverRelaxationCoefficient(value: str | float)

Set the value of “Over Relaxation Coefficient”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASimulatorRun.SetOverlapParticlesDelay"></a>

#### SetOverlapParticlesDelay(value: str | float, unit: str | None = None)

Set the value of “Overlap Particles Delay”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RASimulatorRun.SetParticleSizeLimitForReordering"></a>

#### SetParticleSizeLimitForReordering(value: str | float, unit: str | None = None)

Set the value of “Particle Size Limit For Reordering”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RASimulatorRun.SetRefineConcaveSearch"></a>

#### SetRefineConcaveSearch(value: bool)

Set the value of “Refine Concave Search”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetReleaseParticlesWithoutOverlapCheck"></a>

#### SetReleaseParticlesWithoutOverlapCheck(value: bool)

Set the value of “Release Particles Without Overlap Check”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetResetOnlyPhysicalContactsData"></a>

#### SetResetOnlyPhysicalContactsData(value: bool)

Set the value of “Reset Only Physical Contacts Data”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetResumeDataFrequency"></a>

#### SetResumeDataFrequency(value: str | int)

Set the value of “Resume Data Frequency”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RASimulatorRun.SetSimulationDuration"></a>

#### SetSimulationDuration(value: str | float, unit: str | None = None)

Set the value of “Simulation Duration”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RASimulatorRun.SetSimulationOutputFrequency"></a>

#### SetSimulationOutputFrequency(value: str | float, unit: str | None = None)

Deprecated: Use SetTimeInterval instead.

<a id="generated.RASimulatorRun.SetSimulationTarget"></a>

#### SetSimulationTarget(value: str)

Set the value of “Simulation Target”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘CPU’, ‘GPU’, ‘MULTI_GPU’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Simulation Target” option.

<a id="generated.RASimulatorRun.SetSolverCurvesFrequency"></a>

#### SetSolverCurvesFrequency(value: str | int)

Set the value of “Solver Curves Frequency”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RASimulatorRun.SetSolverCurvesOutputFrequency"></a>

#### SetSolverCurvesOutputFrequency(value: str | int)

Deprecated: Use SetSolverCurvesFrequency instead.

<a id="generated.RASimulatorRun.SetSortingDistanceFactor"></a>

#### SetSortingDistanceFactor(value: str | float)

Set the value of “Sorting Distance Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASimulatorRun.SetSpecialReorderingForWidePsd"></a>

#### SetSpecialReorderingForWidePsd(value: bool)

Set the value of “Special Reordering For Wide Psd”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetStandardOutputPropertiesData"></a>

#### SetStandardOutputPropertiesData(data_dict: dict)

Set the current value of “Standard Output Properties”.

* **Parameters:**
  **data_dict** – The data dictionary to set.

<a id="generated.RASimulatorRun.SetStandardOutputPropertyEnabled"></a>

#### SetStandardOutputPropertyEnabled(\*output_property: str, enabled: bool)

Set enable state of given “Standard Output Property”.

* **Parameters:**
  * **output_property** – The output property name.
  * **enabled** – The enable state of given “Standard Output Property”.

<a id="generated.RASimulatorRun.SetSuccessiveOverRelaxationTolerance"></a>

#### SetSuccessiveOverRelaxationTolerance(value: str | float)

Set the value of “Successive Over Relaxation Tolerance”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASimulatorRun.SetTargetGpu"></a>

#### SetTargetGpu(value: str | int)

Set the value of “Target Gpu”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RASimulatorRun.SetTargetGpus"></a>

#### SetTargetGpus(gpus: list[int | str])

It will configure the IDs of GPUs that will be used in simulation based on the list of IDs or names of GPUs
passed.

* **Parameters:**
  **gpus** – List with IDs or names of GPUs to be used in simulation.
  For example in the name “1 - Geforce GTX 980”, the ID is 1 and the name is “1 - Geforce GTX 980”.

<a id="generated.RASimulatorRun.SetTimeConfiguration"></a>

#### SetTimeConfiguration(duration: float, time_interval: float)

Shortcut to set both the simulation’s duration and its time interval.

* **Parameters:**
  * **duration** – The simulation duration (in seconds).
  * **time_interval** – The simulation time interval (in seconds).

<a id="generated.RASimulatorRun.SetTimeInterval"></a>

#### SetTimeInterval(value: str | float, unit: str | None = None)

Set the value of “Time Interval”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RASimulatorRun.SetTimestepModel"></a>

#### SetTimestepModel(value: str)

Set the value of “Timestep Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘constant’, ‘variable’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Timestep Model” option.

<a id="generated.RASimulatorRun.SetUse2023R2CellVolumeFractionUpdateApproach"></a>

#### SetUse2023R2CellVolumeFractionUpdateApproach(value: bool)

Set the value of “Use 2023 R2 Cell Volume Fraction Update Approach”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetUse2023R2SourceTermsApproach"></a>

#### SetUse2023R2SourceTermsApproach(value: bool)

Set the value of “Use 2023 R2 Source Terms Approach”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetUse3RdPowerForCfdCgm"></a>

#### SetUse3RdPowerForCfdCgm(value: bool)

Set the value of “Use 3Rd Power For Cfd Cgm”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetUseArraysGrowthRate"></a>

#### SetUseArraysGrowthRate(value: bool)

Set the value of “Use Arrays Growth Rate”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetUseBreakageOverlapFactor"></a>

#### SetUseBreakageOverlapFactor(value: bool)

Set the value of “Use Breakage Overlap Factor”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetUseCompressedFiles"></a>

#### SetUseCompressedFiles(value: bool)

Set the value of “Use Compressed Files”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetUseContactNeighboringDistanceBetweenParticles"></a>

#### SetUseContactNeighboringDistanceBetweenParticles(value: bool)

Set the value of “Use Contact Neighboring Distance Between Particles”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetUseContactNeighboringDistanceBetweenParticlesAndTriangles"></a>

#### SetUseContactNeighboringDistanceBetweenParticlesAndTriangles(value: bool)

Set the value of “Use Contact Neighboring Distance Between Particles And Triangles”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetUseDpmBlockingEffectForSinglePhaseSimulations"></a>

#### SetUseDpmBlockingEffectForSinglePhaseSimulations(value: bool)

The “Use DPM Blocking Effect For Single Phase Simulations” parameter was removed from Rocky
since 25R2.

<a id="generated.RASimulatorRun.SetUseDragLimiterFactor"></a>

#### SetUseDragLimiterFactor(value: bool)

Set the value of “Use Drag Limiter Factor”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetUseFixedTimestep"></a>

#### SetUseFixedTimestep(value: bool)

Set the value of “Use Fixed Timestep”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetUseNonRoundTorqueCorrection"></a>

#### SetUseNonRoundTorqueCorrection(value: bool)

Set the value of “Use Non Round Torque Correction”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetUseSortingDistanceFactor"></a>

#### SetUseSortingDistanceFactor(value: bool)

Set the value of “Use Sorting Distance Factor”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASimulatorRun.SetWearEnergySpectraBreakageDelayAfterRelease"></a>

#### SetWearEnergySpectraBreakageDelayAfterRelease(value: str | float, unit: str | None = None)

Deprecated: Use SetEnergySpectraDelayAfterRelease or SetBreakageDelayAfterRelease instead.

“Wear / Breakage Delay after Release” is now:
: 1.Breakage Start

Wear doesn’t have Delay after Release anymore.

<a id="generated.RASimulatorRun.SetWearEnergySpectraBreakageStart"></a>

#### SetWearEnergySpectraBreakageStart(value: str | float, unit: str | None = None)

Deprecated: Use SetWearStart or SetBreakageStart instead.

“Wear / Breakage Start Time” was broken into two:
: 1.Wear Start
  2.Breakage Start

All the three values are being set with the same received value.

<a id="generated.RASimulatorRun.SetWearGeometryUpdateFrequency"></a>

#### SetWearGeometryUpdateFrequency(value: str | float, unit: str | None = None)

Deprecated: Use GetWearGeometryUpdateInterval instead.

<a id="generated.RASimulatorRun.SetWearGeometryUpdateInterval"></a>

#### SetWearGeometryUpdateInterval(value: str | float, unit: str | None = None)

Set the value of “Wear Geometry Update Interval”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RASimulatorRun.SetWearStart"></a>

#### SetWearStart(value: str | float, unit: str | None = None)

Set the value of “Wear Start”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.
