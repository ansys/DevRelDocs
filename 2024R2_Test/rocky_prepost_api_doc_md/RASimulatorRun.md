# RASimulatorRun

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RASimulatorRun

Rocky API wrapper for solver settings.

This wrapper corresponds to the “Solver” item on a project’s data tree. Access it from the
[`RAStudy`](RAStudy.md#generated.RAStudy) with:

```python
simulator_run = study.GetSimulatorRun()
```

**Methods:**

| [`AddCurve`](#generated.RASimulatorRun.AddCurve)(curve_name, timesteps, values, unit)                                                                           | Add a curve to the element with a time-steps domain                                                                                                                                                                                                                                                                                                                                                                         |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AddGridFunction`](#generated.RASimulatorRun.AddGridFunction)(grid_function_name, ...[, ...])                                                                  | Adds a grid function to the grid.                                                                                                                                                                                                                                                                                                                                                                                           |
| [`CreateCurveOutputVariable`](#generated.RASimulatorRun.CreateCurveOutputVariable)(curve_name[, ...])                                                           | Used to create an output variable based on a curve which doesn't change at each new timestep (i.e.: a curve with a single value for each time).                                                                                                                                                                                                                                                                             |
| [`CreateGridFunction`](#generated.RASimulatorRun.CreateGridFunction)(values[, location, time_step])                                                             | Create a grid function from the given values, location and time-step.                                                                                                                                                                                                                                                                                                                                                       |
| [`CreateGridFunctionArrayOnCells`](#generated.RASimulatorRun.CreateGridFunctionArrayOnCells)([time_step])                                                       | Creates a numpy array with the number of elements based on the cells and returns it.                                                                                                                                                                                                                                                                                                                                        |
| [`CreateGridFunctionStatisticOutputVariable`](#generated.RASimulatorRun.CreateGridFunctionStatisticOutputVariable)(...)                                         | Used to create an output variable based on a grid function statistic (i.e.: will get a grid function, compute its statistic based on statistic_operation and then based on the statistic values will apply the operation to get a single scalar).                                                                                                                                                                           |
| [`CreateTransientCurveOutputVariable`](#generated.RASimulatorRun.CreateTransientCurveOutputVariable)(curve_name)                                                | Used to create an output variable based on a curve for which there's a completely new representation for each time step -- such as Power : Impact X Belt Width (i.e.: will get the curve multiple times based on the time range, compute a value for each time based on the operation, to convert the multiple curves into a single curve and then will apply the time_operation to get a single scalar from those values). |
| [`DisableCompressedFile`](#generated.RASimulatorRun.DisableCompressedFile)()                                                                                    | Set the value of "Compressed File" to False.                                                                                                                                                                                                                                                                                                                                                                                |
| [`DisableNegateInitialOverlaps`](#generated.RASimulatorRun.DisableNegateInitialOverlaps)()                                                                      | Set the value of "Negate Initial Overlaps" to False.                                                                                                                                                                                                                                                                                                                                                                        |
| [`DisableSortingDistanceFactor`](#generated.RASimulatorRun.DisableSortingDistanceFactor)()                                                                      | Set the value of "Sorting Distance Factor" to False.                                                                                                                                                                                                                                                                                                                                                                        |
| [`EnableCompressedFile`](#generated.RASimulatorRun.EnableCompressedFile)()                                                                                      | Set the value of "Compressed File" to True.                                                                                                                                                                                                                                                                                                                                                                                 |
| [`EnableNegateInitialOverlaps`](#generated.RASimulatorRun.EnableNegateInitialOverlaps)()                                                                        | Set the value of "Negate Initial Overlaps" to True.                                                                                                                                                                                                                                                                                                                                                                         |
| [`EnableSortingDistanceFactor`](#generated.RASimulatorRun.EnableSortingDistanceFactor)()                                                                        | Set the value of "Sorting Distance Factor" to True.                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetActivesArray`](#generated.RASimulatorRun.GetActivesArray)([time_step])                                                                                     | Get an array representing the cells' "active" status.                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetArraysGrowthRate`](#generated.RASimulatorRun.GetArraysGrowthRate)()                                                                                        | Get the value of "Arrays Growth Rate".                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetBoundingBox`](#generated.RASimulatorRun.GetBoundingBox)([unit, time_step])                                                                                 | Get the element's bounding box.                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetBreakageDelayAfterRelease`](#generated.RASimulatorRun.GetBreakageDelayAfterRelease)([unit])                                                                | Get the value of "Breakage Delay After Release".                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetBreakageOverlapFactor`](#generated.RASimulatorRun.GetBreakageOverlapFactor)()                                                                              | Get the value of "Breakage Overlap Factor".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetBreakageStart`](#generated.RASimulatorRun.GetBreakageStart)([unit])                                                                                        | Get the value of "Breakage Start".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetCellAreaAsArray`](#generated.RASimulatorRun.GetCellAreaAsArray)([time_step])                                                                               | Get an array containing the area of each cell.                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetCellCenterAsArray`](#generated.RASimulatorRun.GetCellCenterAsArray)([time_step])                                                                           | Get an array containing the center coordinates of each cell.                                                                                                                                                                                                                                                                                                                                                                |
| [`GetCellDzAsArray`](#generated.RASimulatorRun.GetCellDzAsArray)([time_step])                                                                                   | Get an array containing the thickness (in Z) of each cell.                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellFromIJK`](#generated.RASimulatorRun.GetCellFromIJK)(i, j, k[, time_step])                                                                              | Creates a grid cell handle from the current I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetCellIJK`](#generated.RASimulatorRun.GetCellIJK)(cell_handle[, time_step])                                                                                  | Converts the given cell handle to it's I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetCellNumberOfVertices`](#generated.RASimulatorRun.GetCellNumberOfVertices)(cell[, time_step])                                                               | Get an array containing the number of vertices of each cell.                                                                                                                                                                                                                                                                                                                                                                |
| [`GetCellPointsAsFunction`](#generated.RASimulatorRun.GetCellPointsAsFunction)([time_step])                                                                     | Get a function for the points (vertices) of each cell.                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetCellVolumeAsArray`](#generated.RASimulatorRun.GetCellVolumeAsArray)([time_step])                                                                           | Get an array with the volume of each cell.                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCollectForcesForFemAnalysis`](#generated.RASimulatorRun.GetCollectForcesForFemAnalysis)()                                                                  | Deprecated: Use this method from RAStudy instead                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetContactNeighboringDistanceBetweenParticles`](#generated.RASimulatorRun.GetContactNeighboringDistanceBetweenParticles)([unit])                              | Get the value of "Contact Neighboring Distance Between Particles".                                                                                                                                                                                                                                                                                                                                                          |
| [`GetContactNeighboringDistanceBetweenParticlesAndTriangles`](#generated.RASimulatorRun.GetContactNeighboringDistanceBetweenParticlesAndTriangles)([unit])      | Get the value of "Contact Neighboring Distance Between Particles And Triangles".                                                                                                                                                                                                                                                                                                                                            |
| [`GetCurve`](#generated.RASimulatorRun.GetCurve)(curve_name[, simulation_name, ...])                                                                            | Override base class method to check for a request of a grid function statistic.                                                                                                                                                                                                                                                                                                                                             |
| [`GetCurveNames`](#generated.RASimulatorRun.GetCurveNames)([simulation_name])                                                                                   | @param simulation_name: unicode                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetCurveNamesAssociation`](#generated.RASimulatorRun.GetCurveNamesAssociation)([simulation_name])                                                             | Get this element's curve names.                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetDisableTrianglesOnPeriodicBoundaries`](#generated.RASimulatorRun.GetDisableTrianglesOnPeriodicBoundaries)()                                                | Get the value of "Disable Triangles On Periodic Boundaries".                                                                                                                                                                                                                                                                                                                                                                |
| [`GetDragLimiterFactor`](#generated.RASimulatorRun.GetDragLimiterFactor)()                                                                                      | Get the value of "Drag Limiter Factor".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetElementCurve`](#generated.RASimulatorRun.GetElementCurve)(element_name, curve_name[, ...])                                                                 | Return the curves for the given element and name.                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetFixedTimestep`](#generated.RASimulatorRun.GetFixedTimestep)([unit])                                                                                        | Get the value of "Fixed Timestep".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetFluentOutputsMultiplier`](#generated.RASimulatorRun.GetFluentOutputsMultiplier)()                                                                          | Get the value of "Fluent Outputs Multiplier".                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetGeometryQuantity`](#generated.RASimulatorRun.GetGeometryQuantity)()                                                                                        | Get the quantity corresponding to the grid's geometry.                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetGeometryUnit`](#generated.RASimulatorRun.GetGeometryUnit)()                                                                                                | Get the grid's geometry's unit.                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetGridFunction`](#generated.RASimulatorRun.GetGridFunction)(grid_function_name[, ...])                                                                       | Gets a grid function given its name.                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetGridFunctionNames`](#generated.RASimulatorRun.GetGridFunctionNames)([translated, context])                                                                 | Get a list of the available grid functions for this grid.                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetLinearHystDamp`](#generated.RASimulatorRun.GetLinearHystDamp)()                                                                                            | Get the value of "Linear Hyst Damp".                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetLoadingNSteps`](#generated.RASimulatorRun.GetLoadingNSteps)()                                                                                              | Get the value of "Loading N Steps".                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetMultiGpuSlicingDirection`](#generated.RASimulatorRun.GetMultiGpuSlicingDirection)()                                                                        | Get "Multi Gpu Slicing Direction" as a string.                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetNegateInitialOverlaps`](#generated.RASimulatorRun.GetNegateInitialOverlaps)()                                                                              | Get the value of "Negate Initial Overlaps".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetNeighborSearchModel`](#generated.RASimulatorRun.GetNeighborSearchModel)()                                                                                  | Get "Neighbor Search Model" as a string.                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetNumberOfCells`](#generated.RASimulatorRun.GetNumberOfCells)([time_step])                                                                                   | Get the total number of cells.                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetNumberOfNodes`](#generated.RASimulatorRun.GetNumberOfNodes)([time_step])                                                                                   | Get the total number of nodes (vertices).                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetNumberOfProcessors`](#generated.RASimulatorRun.GetNumberOfProcessors)()                                                                                    | Get the value of "Number of Processors".                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetNumpyCurve`](#generated.RASimulatorRun.GetNumpyCurve)(curve_name[, unit, realization])                                                                     | Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.                                                                                                                                                                                                                                                                                                                                 |
| [`GetOutputVariableValue`](#generated.RASimulatorRun.GetOutputVariableValue)(variable_name)                                                                     | Get the value of a previously-created output variable.                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetOverlapParticlesDelay`](#generated.RASimulatorRun.GetOverlapParticlesDelay)([unit])                                                                        | Get the value of "Overlap Particles Delay".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetParticleSizeLimitForReordering`](#generated.RASimulatorRun.GetParticleSizeLimitForReordering)([unit])                                                      | Get the value of "Particle Size Limit For Reordering".                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetRefineConcaveSearch`](#generated.RASimulatorRun.GetRefineConcaveSearch)()                                                                                  | Get the value of "Refine Concave Search".                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetReleaseParticlesWithoutOverlapCheck`](#generated.RASimulatorRun.GetReleaseParticlesWithoutOverlapCheck)()                                                  | Get the value of "Release Particles Without Overlap Check".                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetResetOnlyPhysicalContactsData`](#generated.RASimulatorRun.GetResetOnlyPhysicalContactsData)()                                                              | Get the value of "Reset Only Physical Contacts Data".                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetSimulationDuration`](#generated.RASimulatorRun.GetSimulationDuration)([unit])                                                                              | Get the value of "Simulation Duration".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetSimulationOutputFrequency`](#generated.RASimulatorRun.GetSimulationOutputFrequency)([unit])                                                                | Deprecated: Use GetTimeInterval instead.                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetSimulationTarget`](#generated.RASimulatorRun.GetSimulationTarget)()                                                                                        | Get "Simulation Target" as a string.                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetSolverCurvesFrequency`](#generated.RASimulatorRun.GetSolverCurvesFrequency)()                                                                              | Get the value of "Solver Curves Frequency".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetSolverCurvesOutputFrequency`](#generated.RASimulatorRun.GetSolverCurvesOutputFrequency)()                                                                  | Deprecated: Use GetSolverCurvesFrequency instead.                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetSortingDistanceFactor`](#generated.RASimulatorRun.GetSortingDistanceFactor)()                                                                              | Get the value of "Sorting Distance Factor".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetSpecialReorderingForWidePsd`](#generated.RASimulatorRun.GetSpecialReorderingForWidePsd)()                                                                  | Get the value of "Special Reordering For Wide Psd".                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetTargetGpu`](#generated.RASimulatorRun.GetTargetGpu)()                                                                                                      | Get the value of "Target Gpu".                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetTargetGpus`](#generated.RASimulatorRun.GetTargetGpus)()                                                                                                    | * **rtype:**<br/>  List[int]                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetTimeInterval`](#generated.RASimulatorRun.GetTimeInterval)([unit])                                                                                          | Get the value of "Time Interval".                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetTimeSet`](#generated.RASimulatorRun.GetTimeSet)()                                                                                                          | Get the list of time-steps associated to the grid.                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetTimeStatistics`](#generated.RASimulatorRun.GetTimeStatistics)()                                                                                            | Get the object responsible for handling time-statistics grid functions for this process.                                                                                                                                                                                                                                                                                                                                    |
| [`GetTimeStep`](#generated.RASimulatorRun.GetTimeStep)(time_step[, accept_global])                                                                              | Get the timestep corresponding to the given time.                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetTimestepModel`](#generated.RASimulatorRun.GetTimestepModel)()                                                                                              | Get "Timestep Model" as a string.                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetTopologyShape`](#generated.RASimulatorRun.GetTopologyShape)([time_step])                                                                                   | Get the shape of the topology (similar to the shape of numpy arrays).                                                                                                                                                                                                                                                                                                                                                       |
| [`GetUseArraysGrowthRate`](#generated.RASimulatorRun.GetUseArraysGrowthRate)()                                                                                  | Get the value of "Use Arrays Growth Rate".                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetUseBreakageOverlapFactor`](#generated.RASimulatorRun.GetUseBreakageOverlapFactor)()                                                                        | Get the value of "Use Breakage Overlap Factor".                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetUseCompressedFiles`](#generated.RASimulatorRun.GetUseCompressedFiles)()                                                                                    | Get the value of "Use Compressed Files".                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetUseContactNeighboringDistanceBetweenParticles`](#generated.RASimulatorRun.GetUseContactNeighboringDistanceBetweenParticles)()                              | Get the value of "Use Contact Neighboring Distance Between Particles".                                                                                                                                                                                                                                                                                                                                                      |
| [`GetUseContactNeighboringDistanceBetweenParticlesAndTriangles`](#generated.RASimulatorRun.GetUseContactNeighboringDistanceBetweenParticlesAndTriangles)()      | Get the value of "Use Contact Neighboring Distance Between Particles And Triangles".                                                                                                                                                                                                                                                                                                                                        |
| [`GetUseDragLimiterFactor`](#generated.RASimulatorRun.GetUseDragLimiterFactor)()                                                                                | Get the value of "Use Drag Limiter Factor".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetUseFixedTimestep`](#generated.RASimulatorRun.GetUseFixedTimestep)()                                                                                        | Get the value of "Use Fixed Timestep".                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetUseNonRoundTorqueCorrection`](#generated.RASimulatorRun.GetUseNonRoundTorqueCorrection)()                                                                  | Get the value of "Use Non Round Torque Correction".                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetUseSortingDistanceFactor`](#generated.RASimulatorRun.GetUseSortingDistanceFactor)()                                                                        | Get the value of "Use Sorting Distance Factor".                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetValidMultiGpuSlicingDirectionValues`](#generated.RASimulatorRun.GetValidMultiGpuSlicingDirectionValues)()                                                  | Get a list of all possible values for "Multi Gpu Slicing Direction".                                                                                                                                                                                                                                                                                                                                                        |
| [`GetValidNeighborSearchModelValues`](#generated.RASimulatorRun.GetValidNeighborSearchModelValues)()                                                            | Get a list of all possible values for "Neighbor Search Model".                                                                                                                                                                                                                                                                                                                                                              |
| [`GetValidSimulationTargetValues`](#generated.RASimulatorRun.GetValidSimulationTargetValues)()                                                                  | Get a list of all possible values for "Simulation Target".                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetValidTimestepModelValues`](#generated.RASimulatorRun.GetValidTimestepModelValues)()                                                                        | Get a list of all possible values for "Timestep Model".                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetWearEnergySpectraBreakageDelayAfterRelease`](#generated.RASimulatorRun.GetWearEnergySpectraBreakageDelayAfterRelease)([unit])                              | Deprecated: Use GetEnergySpectraDelayAfterRelease or GetBreakageDelayAfterRelease instead.                                                                                                                                                                                                                                                                                                                                  |
| [`GetWearEnergySpectraBreakageStart`](#generated.RASimulatorRun.GetWearEnergySpectraBreakageStart)([unit])                                                      | Deprecated: Use GetWearStart or GetBreakageStart instead.                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetWearGeometryUpdateFrequency`](#generated.RASimulatorRun.GetWearGeometryUpdateFrequency)([unit])                                                            | Deprecated: Use GetWearGeometryUpdateInterval instead.                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetWearGeometryUpdateInterval`](#generated.RASimulatorRun.GetWearGeometryUpdateInterval)([unit])                                                              | Get the value of "Wear Geometry Update Interval".                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetWearStart`](#generated.RASimulatorRun.GetWearStart)([unit])                                                                                                | Get the value of "Wear Start".                                                                                                                                                                                                                                                                                                                                                                                              |
| [`HasFEMForcesEnabled`](#generated.RASimulatorRun.HasFEMForcesEnabled)()                                                                                        | Whether the simulation is configured to collect forces for FEM analysis.                                                                                                                                                                                                                                                                                                                                                    |
| [`HasGridFunction`](#generated.RASimulatorRun.HasGridFunction)(grid_function_name)                                                                              | Whether the grid has the given grid function.                                                                                                                                                                                                                                                                                                                                                                               |
| [`IsCellActive`](#generated.RASimulatorRun.IsCellActive)(i, j, k[, time_step])                                                                                  | Checks if the given cell is active or not                                                                                                                                                                                                                                                                                                                                                                                   |
| [`IsCompressedFileEnabled`](#generated.RASimulatorRun.IsCompressedFileEnabled)()                                                                                | Check if the "Compressed File" is enabled.                                                                                                                                                                                                                                                                                                                                                                                  |
| [`IsNegateInitialOverlapsEnabled`](#generated.RASimulatorRun.IsNegateInitialOverlapsEnabled)()                                                                  | Check if the "Negate Initial Overlaps" is enabled.                                                                                                                                                                                                                                                                                                                                                                          |
| [`IsSortingDistanceFactorEnabled`](#generated.RASimulatorRun.IsSortingDistanceFactorEnabled)()                                                                  | Check if the "Sorting Distance Factor" is enabled.                                                                                                                                                                                                                                                                                                                                                                          |
| [`IterCellVertices`](#generated.RASimulatorRun.IterCellVertices)(cell[, time_step])                                                                             | Iterate on the vertices of active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                             |
| [`IterCells`](#generated.RASimulatorRun.IterCells)([time_step])                                                                                                 | Iterate on the active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                         |
| [`Modified`](#generated.RASimulatorRun.Modified)(\*args, \*\*kwargs)                                                                                            | Resets all the cache information after a change in the subject being tracked.                                                                                                                                                                                                                                                                                                                                               |
| [`RemoveOutputVariable`](#generated.RASimulatorRun.RemoveOutputVariable)(variable_name)                                                                         | Removes some output variable.                                                                                                                                                                                                                                                                                                                                                                                               |
| [`RemoveProcess`](#generated.RASimulatorRun.RemoveProcess)()                                                                                                    | It is not possible to remove the item "Solver" from the project.                                                                                                                                                                                                                                                                                                                                                            |
| [`SetArraysGrowthRate`](#generated.RASimulatorRun.SetArraysGrowthRate)(value)                                                                                   | Set the value of "Arrays Growth Rate".                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetBreakageDelayAfterRelease`](#generated.RASimulatorRun.SetBreakageDelayAfterRelease)(value[, unit])                                                         | Set the value of "Breakage Delay After Release".                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetBreakageOverlapFactor`](#generated.RASimulatorRun.SetBreakageOverlapFactor)(value)                                                                         | Set the value of "Breakage Overlap Factor".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetBreakageStart`](#generated.RASimulatorRun.SetBreakageStart)(value[, unit])                                                                                 | Set the value of "Breakage Start".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetCollectForcesForFemAnalysis`](#generated.RASimulatorRun.SetCollectForcesForFemAnalysis)(value)                                                             | Deprecated: Use this method from RAStudy instead                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetContactNeighboringDistanceBetweenParticles`](#generated.RASimulatorRun.SetContactNeighboringDistanceBetweenParticles)(value)                               | Set the value of "Contact Neighboring Distance Between Particles".                                                                                                                                                                                                                                                                                                                                                          |
| [`SetContactNeighboringDistanceBetweenParticlesAndTriangles`](#generated.RASimulatorRun.SetContactNeighboringDistanceBetweenParticlesAndTriangles)(value)       | Set the value of "Contact Neighboring Distance Between Particles And Triangles".                                                                                                                                                                                                                                                                                                                                            |
| [`SetCurrentTimeStep`](#generated.RASimulatorRun.SetCurrentTimeStep)(time_step)                                                                                 | Sets the current time step.                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetDisableTrianglesOnPeriodicBoundaries`](#generated.RASimulatorRun.SetDisableTrianglesOnPeriodicBoundaries)(value)                                           | Set the value of "Disable Triangles On Periodic Boundaries".                                                                                                                                                                                                                                                                                                                                                                |
| [`SetDragLimiterFactor`](#generated.RASimulatorRun.SetDragLimiterFactor)(value)                                                                                 | Set the value of "Drag Limiter Factor".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetFixedTimestep`](#generated.RASimulatorRun.SetFixedTimestep)(value[, unit])                                                                                 | Set the value of "Fixed Timestep".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetFluentOutputsMultiplier`](#generated.RASimulatorRun.SetFluentOutputsMultiplier)(value)                                                                     | Set the value of "Fluent Outputs Multiplier".                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetLinearHystDamp`](#generated.RASimulatorRun.SetLinearHystDamp)(value)                                                                                       | Set the value of "Linear Hyst Damp".                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetLoadingNSteps`](#generated.RASimulatorRun.SetLoadingNSteps)(value)                                                                                         | Set the value of "Loading N Steps".                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetMultiGpuSlicingDirection`](#generated.RASimulatorRun.SetMultiGpuSlicingDirection)(value)                                                                   | Set the value of "Multi Gpu Slicing Direction".                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetNegateInitialOverlaps`](#generated.RASimulatorRun.SetNegateInitialOverlaps)(value)                                                                         | Set the value of "Negate Initial Overlaps".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetNeighborSearchModel`](#generated.RASimulatorRun.SetNeighborSearchModel)(value)                                                                             | Set the value of "Neighbor Search Model".                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetNumberOfProcessors`](#generated.RASimulatorRun.SetNumberOfProcessors)(value)                                                                               | Set the value of "Number of Processors".                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetOverlapParticlesDelay`](#generated.RASimulatorRun.SetOverlapParticlesDelay)(value[, unit])                                                                 | Set the value of "Overlap Particles Delay".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetParticleSizeLimitForReordering`](#generated.RASimulatorRun.SetParticleSizeLimitForReordering)(value[, unit])                                               | Set the value of "Particle Size Limit For Reordering".                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetRefineConcaveSearch`](#generated.RASimulatorRun.SetRefineConcaveSearch)(value)                                                                             | Set the value of "Refine Concave Search".                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetReleaseParticlesWithoutOverlapCheck`](#generated.RASimulatorRun.SetReleaseParticlesWithoutOverlapCheck)(value)                                             | Set the value of "Release Particles Without Overlap Check".                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetResetOnlyPhysicalContactsData`](#generated.RASimulatorRun.SetResetOnlyPhysicalContactsData)(value)                                                         | Set the value of "Reset Only Physical Contacts Data".                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetSimulationDuration`](#generated.RASimulatorRun.SetSimulationDuration)(value[, unit])                                                                       | Set the value of "Simulation Duration".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetSimulationOutputFrequency`](#generated.RASimulatorRun.SetSimulationOutputFrequency)(value[, unit])                                                         | Deprecated: Use SetTimeInterval instead.                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetSimulationTarget`](#generated.RASimulatorRun.SetSimulationTarget)(value)                                                                                   | Set the value of "Simulation Target".                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetSolverCurvesFrequency`](#generated.RASimulatorRun.SetSolverCurvesFrequency)(value)                                                                         | Set the value of "Solver Curves Frequency".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetSolverCurvesOutputFrequency`](#generated.RASimulatorRun.SetSolverCurvesOutputFrequency)(value)                                                             | Deprecated: Use SetSolverCurvesFrequency instead.                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetSortingDistanceFactor`](#generated.RASimulatorRun.SetSortingDistanceFactor)(value)                                                                         | Set the value of "Sorting Distance Factor".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetSpecialReorderingForWidePsd`](#generated.RASimulatorRun.SetSpecialReorderingForWidePsd)(value)                                                             | Set the value of "Special Reordering For Wide Psd".                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetTargetGpu`](#generated.RASimulatorRun.SetTargetGpu)(value)                                                                                                 | Set the value of "Target Gpu".                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetTargetGpus`](#generated.RASimulatorRun.SetTargetGpus)(gpus)                                                                                                | It will configure the IDs of GPUs that will be used in simulation based on the list of IDs or names of GPUs passed.                                                                                                                                                                                                                                                                                                         |
| [`SetTimeConfiguration`](#generated.RASimulatorRun.SetTimeConfiguration)(duration, time_interval)                                                               | Shortcut to set both the simulation's duration and its time interval.                                                                                                                                                                                                                                                                                                                                                       |
| [`SetTimeInterval`](#generated.RASimulatorRun.SetTimeInterval)(value[, unit])                                                                                   | Set the value of "Time Interval".                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetTimestepModel`](#generated.RASimulatorRun.SetTimestepModel)(value)                                                                                         | Set the value of "Timestep Model".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetUseArraysGrowthRate`](#generated.RASimulatorRun.SetUseArraysGrowthRate)(value)                                                                             | Set the value of "Use Arrays Growth Rate".                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetUseBreakageOverlapFactor`](#generated.RASimulatorRun.SetUseBreakageOverlapFactor)(value)                                                                   | Set the value of "Use Breakage Overlap Factor".                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetUseCompressedFiles`](#generated.RASimulatorRun.SetUseCompressedFiles)(value)                                                                               | Set the value of "Use Compressed Files".                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetUseContactNeighboringDistanceBetweenParticles`](#generated.RASimulatorRun.SetUseContactNeighboringDistanceBetweenParticles)(value)                         | Set the value of "Use Contact Neighboring Distance Between Particles".                                                                                                                                                                                                                                                                                                                                                      |
| [`SetUseContactNeighboringDistanceBetweenParticlesAndTriangles`](#generated.RASimulatorRun.SetUseContactNeighboringDistanceBetweenParticlesAndTriangles)(value) | Set the value of "Use Contact Neighboring Distance Between Particles And Triangles".                                                                                                                                                                                                                                                                                                                                        |
| [`SetUseDragLimiterFactor`](#generated.RASimulatorRun.SetUseDragLimiterFactor)(value)                                                                           | Set the value of "Use Drag Limiter Factor".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetUseFixedTimestep`](#generated.RASimulatorRun.SetUseFixedTimestep)(value)                                                                                   | Set the value of "Use Fixed Timestep".                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetUseNonRoundTorqueCorrection`](#generated.RASimulatorRun.SetUseNonRoundTorqueCorrection)(value)                                                             | Set the value of "Use Non Round Torque Correction".                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetUseSortingDistanceFactor`](#generated.RASimulatorRun.SetUseSortingDistanceFactor)(value)                                                                   | Set the value of "Use Sorting Distance Factor".                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetWearEnergySpectraBreakageDelayAfterRelease`](#generated.RASimulatorRun.SetWearEnergySpectraBreakageDelayAfterRelease)(value)                               | Deprecated: Use SetEnergySpectraDelayAfterRelease or SetBreakageDelayAfterRelease instead.                                                                                                                                                                                                                                                                                                                                  |
| [`SetWearEnergySpectraBreakageStart`](#generated.RASimulatorRun.SetWearEnergySpectraBreakageStart)(value[, unit])                                               | Deprecated: Use SetWearStart or SetBreakageStart instead.                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetWearGeometryUpdateFrequency`](#generated.RASimulatorRun.SetWearGeometryUpdateFrequency)(value[, unit])                                                     | Deprecated: Use GetWearGeometryUpdateInterval instead.                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetWearGeometryUpdateInterval`](#generated.RASimulatorRun.SetWearGeometryUpdateInterval)(value[, unit])                                                       | Set the value of "Wear Geometry Update Interval".                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetWearStart`](#generated.RASimulatorRun.SetWearStart)(value[, unit])                                                                                         | Set the value of "Wear Start".                                                                                                                                                                                                                                                                                                                                                                                              |

#### AddCurve(curve_name, timesteps, values, unit, realization=None, timesteps_unit=None, initial_date=None)

Add a curve to the element with a time-steps domain

* **Parameters:**
  * **curve_name** (*unicode* *or* *SemanticAssociation*) – The curve’s name or semantic association
  * **timesteps** (*list**(**TimeStep**) or* *list**(**float**) or* *TimeSet*) – The list of time-steps, in such case a initial date can be provided
    The list of elapsed time as floats, in such case a timesteps_units can be
    provide or days will be used
    The curve’s TimeSet
  * **values** (*list**(**float**)*) – The list of curve image values
  * **unit** (*unicode* *or* *Quantity*) – The curve image unit or quantity
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **timesteps_units** (*unicode*) – The elapsed time values unit
    It should be given if a list of floats is used to define the time-set
    If not given days are assumed
  * **initial_date** (*tuple**(**int**,* *int**,* *int**,* *int**,* *int**,* *int**) or* *TimeStep*) – The initial date for the time-steps given
    A tuple with the year, month, day, hour, minute and seconds
    Or a TimeStep

#### AddGridFunction(grid_function_name, grid_function, unit='<unknown>', location='cell', realization='user_generated', time_step=None)

Adds a grid function to the grid.

* **Parameters:**
  * **grid_function_name** (*unicode* *or* *SemanticAssociation*) – The name of the grid function to be stored in this grid or the semantic association
    representing the grid function.
  * **grid_function** (*list**(**double**) or* *numpy array*) – The values of the grid function to be added.
  * **unit** (*unicode* *or* *IQuantity*) – The unit (or quantity) in which the grid function is being given.
  * **location** (*unicode*) – The location of the grid function (currently only ‘cell’ is accepted).
  * **realization** (*unicode*) – The realization used to identify the grid function among other grid functions. If None,
    this information is ignored.
  * **time_step** (*None**,* *unicode**,* *ITimeStep* *or* *int*) – if None if given a static grid function will be created otherwise a transient grid
    function is created and the given array associated with this time-step

#### SEE ALSO
KAContextDependentElement.GetTimeStep

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

#### CreateGridFunction(values, location='cell', time_step='current')

Create a grid function from the given values, location and time-step.

* **Parameters:**
  * **values** (*list**(**double**) or* *numpy array*) – The values of the grid function to be added.
  * **time_step** – 

#### SEE ALSO
KAContextDependentElement.GetTimeStep

#### CreateGridFunctionArrayOnCells(time_step='current')

Creates a numpy array with the number of elements based on the cells and returns it. A
different time may be specified to create the grid function based on a different time.

* **Parameters:**
  **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to create the array
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  numpy.array
* **Returns:**
  Returns a numpy float32 array with the number of elements equal to the number of cells.

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

#### CreateTransientCurveOutputVariable(curve_name: str, operation: str = 'max', time_operation: str = 'max', time_range: str = 'last_output', initial_time_range: float = 0.0, final_time_range: float = 0.0, domain_range: str = 'all', initial_domain_range: float = 0.0, final_domain_range: float = 0.0, domain_unit: Optional[str] = None)

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

#### DisableCompressedFile()

Set the value of “Compressed File” to False.

#### DisableNegateInitialOverlaps()

Set the value of “Negate Initial Overlaps” to False.

#### DisableSortingDistanceFactor()

Set the value of “Sorting Distance Factor” to False.

#### EnableCompressedFile()

Set the value of “Compressed File” to True.

#### EnableNegateInitialOverlaps()

Set the value of “Negate Initial Overlaps” to True.

#### EnableSortingDistanceFactor()

Set the value of “Sorting Distance Factor” to True.

#### GetActivesArray(time_step='current')

Get an array representing the cells’ “active” status.

* **Parameters:**
  **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the actives array
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  numpy array
* **Returns:**
  Returns a numpy array with booleans where True means the cell is active and False
  means it’s not active.

#### GetArraysGrowthRate()

Get the value of “Arrays Growth Rate”.

#### GetBoundingBox(unit=None, time_step='current')

Get the element’s bounding box.

* **Parameters:**
  * **unit** (*unicode*) – The unit in which the bounding box should be gotten (by default it uses the same
    unit of the geometry).
  * **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
    or an ITimeStep identifying the time to get the bounding box
    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  tuple(tuple(float, float, float), tuple(float, float, float))
* **Returns:**
  THe minimum and maximum geometry coordinates of the grid or None if the
  time step is not available at the requested time.

#### GetBreakageDelayAfterRelease(unit: Optional[str] = None)

Get the value of “Breakage Delay After Release”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetBreakageOverlapFactor()

Get the value of “Breakage Overlap Factor”.

#### GetBreakageStart(unit: Optional[str] = None)

Get the value of “Breakage Start”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetCellAreaAsArray(time_step='current')

Get an array containing the area of each cell.

* **Parameters:**
  **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the cell volume
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  numpy.array
* **Returns:**
  An array with the cell area (the unit will be the geometry unit \*\* 2)

#### GetCellCenterAsArray(time_step='current')

Get an array containing the center coordinates of each cell.

* **Parameters:**
  **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the cell center
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  numpy.array
* **Returns:**
  An array with the cell center coordinates (each element will be a point to the center of
  the cell).

#### GetCellDzAsArray(time_step='current')

Get an array containing the thickness (in Z) of each cell.

* **Parameters:**
  **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the cell dz
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  numpy.array
* **Returns:**
  An array with cell thicknesses computed in the Z direction.

#### GetCellFromIJK(i, j, k, time_step='current')

Creates a grid cell handle from the current I, J, K indexes

* **Parameters:**
  * **i** (*int*) – The topological I cell index
  * **j** (*int*) – The topological J cell index
  * **k** (*int*) – The topological K cell index
  * **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
    or an ITimeStep identifying the time to get the cell from the i, j, k
    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  int or None
* **Returns:**
  Returns the cell handle to be used for the given I, J, K indexes.
  Or None if the given I, J and K indexes are invalid or refer to an inactive cell
* **Raises:**
  **IndexError** – An IndexError is raised if the cell is inactive or out of range.

#### GetCellIJK(cell_handle, time_step='current')

Converts the given cell handle to it’s I, J, K indexes

* **Parameters:**
  * **cell_handle** (*int*) – The cell handle
  * **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
    or an ITimeStep identifying the time to get the i, j, k from the cell.
    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  tuple( i, j, k )
* **Returns:**
  The cell I, J, K indexes

#### GetCellNumberOfVertices(cell, time_step='current')

Get an array containing the number of vertices of each cell.

* **Parameters:**
  * **cell_handle** (*int*) – The cell handle
  * **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
    or an ITimeStep identifying the time to get the number of vertices for the given cell
    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  int
* **Returns:**
  The total number of vertices on the given cell

#### GetCellPointsAsFunction(time_step='current')

Get a function for the points (vertices) of each cell.

* **Parameters:**
  **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
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

#### GetCellVolumeAsArray(time_step='current')

Get an array with the volume of each cell.

* **Parameters:**
  **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the cell volume
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  numpy.array
* **Returns:**
  An array with the cell volume (the unit will be the geometry unit \*\* 3)

#### GetCollectForcesForFemAnalysis()

Deprecated: Use this method from RAStudy instead

#### GetContactNeighboringDistanceBetweenParticles(unit: Optional[str] = None)

Get the value of “Contact Neighboring Distance Between Particles”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetContactNeighboringDistanceBetweenParticlesAndTriangles(unit: Optional[str] = None)

Get the value of “Contact Neighboring Distance Between Particles And Triangles”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetCurve(curve_name, simulation_name=None, realization=None, time_step=None)

Override base class method to check for a request of a grid function statistic.

#### GetCurveNames(simulation_name=None)

@param simulation_name: unicode
: An optional parameter for defining the simulation to get the curve from.

* **Returns:**
  list(str)
  The list of curve names

#### GetCurveNamesAssociation(simulation_name=None)

Get this element’s curve names.

* **Parameters:**
  **simulation_name** (*unicode*) – The name of the simulation to query the curve names
  If None is given the current element simulation will be used
* **Return type:**
  dict(unicode, ISemanticAssociation)
* **Returns:**
  The curve names for this element in the given simulation name

#### GetDisableTrianglesOnPeriodicBoundaries()

Get the value of “Disable Triangles On Periodic Boundaries”.

#### GetDragLimiterFactor()

Get the value of “Drag Limiter Factor”.

#### GetElementCurve(element_name, curve_name, simulation_name=None, realization=None, time_step=None)

Return the curves for the given element and name.

* **Parameters:**
  * **element_name** (*unicode*) – The name of the element
  * **curve_name** (*unicode*) – The name of the curve
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the curve from.
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **time_step** (*TimeStep*) – For transient curves a time-step must be given.

#### GetFixedTimestep(unit: Optional[str] = None)

Get the value of “Fixed Timestep”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetFluentOutputsMultiplier()

Get the value of “Fluent Outputs Multiplier”.

#### GetGeometryQuantity()

Get the quantity corresponding to the grid’s geometry.

* **Return type:**
  IQuantity
* **Returns:**
  The grid geometry quantity

#### GetGeometryUnit()

Get the grid’s geometry’s unit.

* **Return type:**
  unicode
* **Returns:**
  The unit for the grid geometry

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

#### GetGridFunctionNames(translated=False, context=None)

Get a list of the available grid functions for this grid.

* **Parameters:**
  * **translated** (*bool*) – If False, the internal names of the grid functions will be returned, otherwise, the
    name returned will be the translated name (based on the settings chosen on how
    to see grid functions – i.e.: Cognitive, ECLIPSE, IMEX).
  * **context** (*'all'**,* *'static'* *or* *'transient'*) – Which names should be returned
    ‘all’ all grid function names
    ‘static’ only the static grid function names
    ‘transient’ only the transient grid function names
* **Return type:**
  list(unicode)
* **Returns:**
  Returns a list with the grid functions available.

#### GetLinearHystDamp()

Get the value of “Linear Hyst Damp”.

#### GetLoadingNSteps()

Get the value of “Loading N Steps”.

#### GetMultiGpuSlicingDirection()

Get “Multi Gpu Slicing Direction” as a string.

* **Returns:**
  The returned value will be one of [‘X_Parallel’, ‘Y_Parallel’, ‘Z_Parallel’].

#### GetNegateInitialOverlaps()

Get the value of “Negate Initial Overlaps”.

#### GetNeighborSearchModel()

Get “Neighbor Search Model” as a string.

* **Returns:**
  The returned value will be one of [‘BVH’, ‘RegularGrid’, ‘SparseGrid’].

#### GetNumberOfCells(time_step='current')

Get the total number of cells.

* **Parameters:**
  **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the number of cells
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  int
* **Returns:**
  The total number of cells

#### GetNumberOfNodes(time_step='current')

Get the total number of nodes (vertices).

* **Parameters:**
  **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the number of cells
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  int
* **Returns:**
  The total number of nodes/vertices

#### GetNumberOfProcessors()

Get the value of “Number of Processors”.

#### GetNumpyCurve(curve_name, unit=None, realization=None)

Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.

#### GetOutputVariableValue(variable_name: str)

Get the value of a previously-created output variable.

* **Parameters:**
  **variable_name** (*unicode*) – The variable name whose value we want.
* **Returns:**
  Returns a scalar with the value and unit for the given variable_name or None if no
  variable was found with the given name or if it couldn’t be computed.

#### GetOverlapParticlesDelay(unit: Optional[str] = None)

Get the value of “Overlap Particles Delay”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetParticleSizeLimitForReordering(unit: Optional[str] = None)

Get the value of “Particle Size Limit For Reordering”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetRefineConcaveSearch()

Get the value of “Refine Concave Search”.

#### GetReleaseParticlesWithoutOverlapCheck()

Get the value of “Release Particles Without Overlap Check”.

#### GetResetOnlyPhysicalContactsData()

Get the value of “Reset Only Physical Contacts Data”.

#### GetSimulationDuration(unit: Optional[str] = None)

Get the value of “Simulation Duration”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetSimulationOutputFrequency(unit: Optional[str] = None)

Deprecated: Use GetTimeInterval instead.

#### GetSimulationTarget()

Get “Simulation Target” as a string.

* **Returns:**
  The returned value will be one of [‘CPU’, ‘GPU’, ‘MULTI_GPU’].

#### GetSolverCurvesFrequency()

Get the value of “Solver Curves Frequency”.

#### GetSolverCurvesOutputFrequency()

Deprecated: Use GetSolverCurvesFrequency instead.

#### GetSortingDistanceFactor()

Get the value of “Sorting Distance Factor”.

#### GetSpecialReorderingForWidePsd()

Get the value of “Special Reordering For Wide Psd”.

#### GetTargetGpu()

Get the value of “Target Gpu”.

#### GetTargetGpus()

* **Return type:**
  List[int]
* **Returns:**
  A list of IDs of the GPUs currently selected for Multi GPU simulation.

#### GetTimeInterval(unit: Optional[str] = None)

Get the value of “Time Interval”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetTimeSet()

Get the list of time-steps associated to the grid.

* **Return type:**
  ITimeSet
* **Returns:**
  The list of time-steps associated to the grid

#### GetTimeStatistics()

Get the object responsible for handling time-statistics grid functions for this process.
This call will return None if the process doesn’t support time statistics.

#### GetTimeStep(time_step, accept_global=False)

Get the timestep corresponding to the given time.

* **Parameters:**
  * **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a string with
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

#### GetTimestepModel()

Get “Timestep Model” as a string.

* **Returns:**
  The returned value will be one of [‘constant’, ‘variable’].

#### GetTopologyShape(time_step='current')

Get the shape of the topology (similar to the shape of numpy arrays).

* **Parameters:**
  **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get the topology shape
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  tuple of ints
* **Returns:**
  The grid shape as a tuple of the grid size in each topological dimension.

#### GetUseArraysGrowthRate()

Get the value of “Use Arrays Growth Rate”.

#### GetUseBreakageOverlapFactor()

Get the value of “Use Breakage Overlap Factor”.

#### GetUseCompressedFiles()

Get the value of “Use Compressed Files”.

#### GetUseContactNeighboringDistanceBetweenParticles()

Get the value of “Use Contact Neighboring Distance Between Particles”.

#### GetUseContactNeighboringDistanceBetweenParticlesAndTriangles()

Get the value of “Use Contact Neighboring Distance Between Particles And Triangles”.

#### GetUseDragLimiterFactor()

Get the value of “Use Drag Limiter Factor”.

#### GetUseFixedTimestep()

Get the value of “Use Fixed Timestep”.

#### GetUseNonRoundTorqueCorrection()

Get the value of “Use Non Round Torque Correction”.

#### GetUseSortingDistanceFactor()

Get the value of “Use Sorting Distance Factor”.

#### GetValidMultiGpuSlicingDirectionValues()

Get a list of all possible values for “Multi Gpu Slicing Direction”.

* **Returns:**
  The returned list is [‘X_Parallel’, ‘Y_Parallel’, ‘Z_Parallel’].

#### GetValidNeighborSearchModelValues()

Get a list of all possible values for “Neighbor Search Model”.

* **Returns:**
  The returned list is [‘BVH’, ‘RegularGrid’, ‘SparseGrid’].

#### GetValidSimulationTargetValues()

Get a list of all possible values for “Simulation Target”.

* **Returns:**
  The returned list is [‘CPU’, ‘GPU’, ‘MULTI_GPU’].

#### GetValidTimestepModelValues()

Get a list of all possible values for “Timestep Model”.

* **Returns:**
  The returned list is [‘constant’, ‘variable’].

#### GetWearEnergySpectraBreakageDelayAfterRelease(unit: Optional[str] = None)

Deprecated: Use GetEnergySpectraDelayAfterRelease or GetBreakageDelayAfterRelease instead.

“Wear / Breakage Delay after Release” is now:
: 1.Breakage Start

The default value that is being return is the Breakage value.

#### GetWearEnergySpectraBreakageStart(unit: Optional[str] = None)

Deprecated: Use GetWearStart or GetBreakageStart instead.

“Wear / Breakage Start Time” was broken into two:
: 1.Wear Start
  2.Breakage Start

The default value that is being return is the Breakage value.

#### GetWearGeometryUpdateFrequency(unit: Optional[str] = None)

Deprecated: Use GetWearGeometryUpdateInterval instead.

#### GetWearGeometryUpdateInterval(unit: Optional[str] = None)

Get the value of “Wear Geometry Update Interval”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetWearStart(unit: Optional[str] = None)

Get the value of “Wear Start”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### HasFEMForcesEnabled()

Whether the simulation is configured to collect forces for FEM analysis.

#### HasGridFunction(grid_function_name)

Whether the grid has the given grid function.

* **Parameters:**
  **grid_function_name** (*unicode*) – The name of the grid function to be checked.
* **Return type:**
  bool
* **Returns:**
  Returns True if the grid function exists and False otherwise.

#### IsCellActive(i, j, k, time_step='current')

Checks if the given cell is active or not

@param i, j, k: int
: The cell i, j, k

* **Parameters:**
  **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to get if the cell is active
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  bool
* **Returns:**
  True if the cell is active

#### IsCompressedFileEnabled()

Check if the “Compressed File” is enabled.

#### IsNegateInitialOverlapsEnabled()

Check if the “Negate Initial Overlaps” is enabled.

#### IsSortingDistanceFactorEnabled()

Check if the “Sorting Distance Factor” is enabled.

#### IterCellVertices(cell, time_step='current')

Iterate on the vertices of active grid cells at the given time.

* **Parameters:**
  * **cell_handle** (*int*) – The cell handle
  * **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
    or an ITimeStep identifying the time to iterate the vertices of a cell
    or an int identifying the time step index to be used based on the global time set
* **Return type:**
  vertex_handle
* **Returns:**
  The iterator over all the cell’s vertices.

#### IterCells(time_step='current')

Iterate on the active grid cells at the given time.

* **Parameters:**
  **time_step** (*unicode**,* *ITimeStep* *or* *int*) – Either a ‘current’ string with meaning the current time step
  or an ITimeStep identifying the time to iterate the cells
  or an int identifying the time step index to be used based on the global time set
* **Return type:**
  iterator
* **Returns:**
  The iterator over all the active grid cells for the given time.

#### Modified(\*args, \*\*kwargs)

Resets all the cache information after a change in the subject being tracked.

#### RemoveOutputVariable(variable_name: str)

Removes some output variable.

* **Parameters:**
  **variable_name** – The name of the variable to be removed.

#### RemoveProcess()

It is not possible to remove the item “Solver” from the project. It’s a standard Rocky
item in project.

#### SetArraysGrowthRate(value: Union[str, float])

Set the value of “Arrays Growth Rate”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetBreakageDelayAfterRelease(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Breakage Delay After Release”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetBreakageOverlapFactor(value: Union[str, float])

Set the value of “Breakage Overlap Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetBreakageStart(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Breakage Start”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetCollectForcesForFemAnalysis(value: bool)

Deprecated: Use this method from RAStudy instead

#### SetContactNeighboringDistanceBetweenParticles(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Contact Neighboring Distance Between Particles”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetContactNeighboringDistanceBetweenParticlesAndTriangles(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Contact Neighboring Distance Between Particles And Triangles”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetCurrentTimeStep(time_step)

Sets the current time step.

* **Parameters:**
  **time_step** (*ITimeStep*) – The time step to be considered the ‘current’ time step.

#### SetDisableTrianglesOnPeriodicBoundaries(value: bool)

Set the value of “Disable Triangles On Periodic Boundaries”.

* **Parameters:**
  **value** – The value to set.

#### SetDragLimiterFactor(value: Union[str, float])

Set the value of “Drag Limiter Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetFixedTimestep(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Fixed Timestep”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetFluentOutputsMultiplier(value: int)

Set the value of “Fluent Outputs Multiplier”.

* **Parameters:**
  **value** – The value to set.

#### SetLinearHystDamp(value: Union[str, float])

Set the value of “Linear Hyst Damp”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetLoadingNSteps(value: Union[str, int])

Set the value of “Loading N Steps”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

#### SetMultiGpuSlicingDirection(value: str)

Set the value of “Multi Gpu Slicing Direction”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘X_Parallel’, ‘Y_Parallel’, ‘Z_Parallel’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Multi Gpu Slicing Direction” option.

#### SetNegateInitialOverlaps(value: bool)

Set the value of “Negate Initial Overlaps”.

* **Parameters:**
  **value** – The value to set.

#### SetNeighborSearchModel(value: str)

Set the value of “Neighbor Search Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘BVH’, ‘RegularGrid’, ‘SparseGrid’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Neighbor Search Model” option.

#### SetNumberOfProcessors(value: Union[str, int])

Set the value of “Number of Processors”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

#### SetOverlapParticlesDelay(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Overlap Particles Delay”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetParticleSizeLimitForReordering(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Particle Size Limit For Reordering”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetRefineConcaveSearch(value: bool)

Set the value of “Refine Concave Search”.

* **Parameters:**
  **value** – The value to set.

#### SetReleaseParticlesWithoutOverlapCheck(value: bool)

Set the value of “Release Particles Without Overlap Check”.

* **Parameters:**
  **value** – The value to set.

#### SetResetOnlyPhysicalContactsData(value: bool)

Set the value of “Reset Only Physical Contacts Data”.

* **Parameters:**
  **value** – The value to set.

#### SetSimulationDuration(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Simulation Duration”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetSimulationOutputFrequency(value: Union[str, float], unit: Optional[str] = None)

Deprecated: Use SetTimeInterval instead.

#### SetSimulationTarget(value: str)

Set the value of “Simulation Target”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘CPU’, ‘GPU’, ‘MULTI_GPU’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Simulation Target” option.

#### SetSolverCurvesFrequency(value: Union[str, int])

Set the value of “Solver Curves Frequency”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

#### SetSolverCurvesOutputFrequency(value: Union[str, int])

Deprecated: Use SetSolverCurvesFrequency instead.

#### SetSortingDistanceFactor(value: Union[str, float])

Set the value of “Sorting Distance Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

#### SetSpecialReorderingForWidePsd(value: bool)

Set the value of “Special Reordering For Wide Psd”.

* **Parameters:**
  **value** – The value to set.

#### SetTargetGpu(value: Union[str, int])

Set the value of “Target Gpu”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

#### SetTargetGpus(gpus: List[Union[int, str]])

It will configure the IDs of GPUs that will be used in simulation based on the list of IDs or names of GPUs
passed.

* **Parameters:**
  **gpus** – List with IDs or names of GPUs to be used in simulation.
  For example in the name “1 - Geforce GTX 980”, the ID is 1 and the name is “1 - Geforce GTX 980”.

#### SetTimeConfiguration(duration: float, time_interval: float)

Shortcut to set both the simulation’s duration and its time interval.

* **Parameters:**
  * **duration** – The simulation duration (in seconds).
  * **time_interval** – The simulation time interval (in seconds).

#### SetTimeInterval(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Time Interval”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetTimestepModel(value: str)

Set the value of “Timestep Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘constant’, ‘variable’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Timestep Model” option.

#### SetUseArraysGrowthRate(value: bool)

Set the value of “Use Arrays Growth Rate”.

* **Parameters:**
  **value** – The value to set.

#### SetUseBreakageOverlapFactor(value: bool)

Set the value of “Use Breakage Overlap Factor”.

* **Parameters:**
  **value** – The value to set.

#### SetUseCompressedFiles(value: bool)

Set the value of “Use Compressed Files”.

* **Parameters:**
  **value** – The value to set.

#### SetUseContactNeighboringDistanceBetweenParticles(value: bool)

Set the value of “Use Contact Neighboring Distance Between Particles”.

* **Parameters:**
  **value** – The value to set.

#### SetUseContactNeighboringDistanceBetweenParticlesAndTriangles(value: bool)

Set the value of “Use Contact Neighboring Distance Between Particles And Triangles”.

* **Parameters:**
  **value** – The value to set.

#### SetUseDragLimiterFactor(value: bool)

Set the value of “Use Drag Limiter Factor”.

* **Parameters:**
  **value** – The value to set.

#### SetUseFixedTimestep(value: bool)

Set the value of “Use Fixed Timestep”.

* **Parameters:**
  **value** – The value to set.

#### SetUseNonRoundTorqueCorrection(value: bool)

Set the value of “Use Non Round Torque Correction”.

* **Parameters:**
  **value** – The value to set.

#### SetUseSortingDistanceFactor(value: bool)

Set the value of “Use Sorting Distance Factor”.

* **Parameters:**
  **value** – The value to set.

#### SetWearEnergySpectraBreakageDelayAfterRelease(value: Union[str, float], unit: Optional[str] = None)

Deprecated: Use SetEnergySpectraDelayAfterRelease or SetBreakageDelayAfterRelease instead.

“Wear / Breakage Delay after Release” is now:
: 1.Breakage Start

Wear doesnt have Delay after Release anymore.

#### SetWearEnergySpectraBreakageStart(value: Union[str, float], unit: Optional[str] = None)

Deprecated: Use SetWearStart or SetBreakageStart instead.

“Wear / Breakage Start Time” was broken into two:
: 1.Wear Start
  2.Breakage Start

All the three values are being set with the same received value.

#### SetWearGeometryUpdateFrequency(value: Union[str, float], unit: Optional[str] = None)

Deprecated: Use GetWearGeometryUpdateInterval instead.

#### SetWearGeometryUpdateInterval(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Wear Geometry Update Interval”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetWearStart(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Wear Start”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.
