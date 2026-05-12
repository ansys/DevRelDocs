# RAFluentTwoWayCoupling

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAFluentTwoWayCoupling"></a>

### *class* RAFluentTwoWayCoupling

Rocky PrePost Scripting wrapper to manipulate Fluent Two-Way coupling properties.

This wrapper can be accessed via the project’s [`RACFDCoupling`](RACFDCoupling.md#generated.RACFDCoupling):

```python
cfd_coupling = study.GetCFDCoupling()
cfd_coupling.SetupFluentTwoWay('fluent.cas')
two_way_process = cfd_coupling.GetCouplingProcess()
```

**Methods:**

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AddCurve`](#generated.RAFluentTwoWayCoupling.AddCurve)(curve_name, timesteps, values, unit)                                   | Add a curve to the element with a time-steps domain                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`AddCustomCurve`](#generated.RAFluentTwoWayCoupling.AddCustomCurve)(name[, curve_type, ...])                                   | Add a custom curve in the database. :param name:     The name of the curve to be set. :param curve_type:     The type of the custom curve to be added. :param output_unit:     The output unit, in which case the unit database will be queried for a quantity that makes sense. If None, the quantity is considered unknown. :param scope:     The scope to be set. :param sources:     A dict pointing the variable used to the curve association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set. |
| [`AddCustomProperty`](#generated.RAFluentTwoWayCoupling.AddCustomProperty)(name[, property_type, ...])                          | Add a custom property to the database                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`AddGridFunction`](#generated.RAFluentTwoWayCoupling.AddGridFunction)(grid_function_name, ...[, ...])                          | Adds a grid function to the grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`CloseFluent`](#generated.RAFluentTwoWayCoupling.CloseFluent)()                                                                | Closes a running Fluent application                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`CreateCoupledBoundaries`](#generated.RAFluentTwoWayCoupling.CreateCoupledBoundaries)(coupled_boundary_names)                  | Create a coupled boundary for each of the coupled boundary name passed by the user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`CreateCurveOutputVariable`](#generated.RAFluentTwoWayCoupling.CreateCurveOutputVariable)(curve_name[, ...])                   | Used to create an output variable based on a curve which doesn't change at each new timestep (i.e.: a curve with a single value for each time).                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`CreateGridFunction`](#generated.RAFluentTwoWayCoupling.CreateGridFunction)(values[, location, time_step])                     | Create a grid function from the given values, location and time-step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`CreateGridFunctionArrayOnCells`](#generated.RAFluentTwoWayCoupling.CreateGridFunctionArrayOnCells)([time_step])               | Creates a numpy array with the number of elements based on the cells and returns it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`CreateGridFunctionStatisticOutputVariable`](#generated.RAFluentTwoWayCoupling.CreateGridFunctionStatisticOutputVariable)(...) | Used to create an output variable based on a grid function statistic (i.e.: will get a grid function, compute its statistic based on statistic_operation and then based on the statistic values will apply the operation to get a single scalar).                                                                                                                                                                                                                                                                                                                                             |
| [`CreateTransientCurveOutputVariable`](#generated.RAFluentTwoWayCoupling.CreateTransientCurveOutputVariable)(curve_name)        | Used to create an output variable based on a curve for which there's a completely new representation for each time step -- such as Power : Impact X Belt Width (i.e.: will get the curve multiple times based on the time range, compute a value for each time based on the operation, to convert the multiple curves into a single curve and then will apply the time_operation to get a single scalar from those values).                                                                                                                                                                   |
| [`DisableBackDiffusion`](#generated.RAFluentTwoWayCoupling.DisableBackDiffusion)()                                              | Set the value of "Back Diffusion" to False.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`DisableSubstepping`](#generated.RAFluentTwoWayCoupling.DisableSubstepping)()                                                  | Set the value of "Substepping" to False.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`EditCustomCurve`](#generated.RAFluentTwoWayCoupling.EditCustomCurve)(edit_curve[, new_name, ...])                             | Edit a custom curve saved in the database. :param edit_curve:     The name of the curve to be edited. :param new_name:     The new name of the curve to be set. :param sources:     A dict pointing the variable used to the curve association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set.                                                                                                                                                                                                      |
| [`EditCustomProperty`](#generated.RAFluentTwoWayCoupling.EditCustomProperty)(edit_property[, ...])                              | Edit a custom property saved in the database. :param edit_property:     The name of the property to be edited. :param new_name:     The new name of the property to be set. :param sources:     A dict pointing the variable used to the property association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set.                                                                                                                                                                                       |
| [`EnableBackDiffusion`](#generated.RAFluentTwoWayCoupling.EnableBackDiffusion)()                                                | Set the value of "Back Diffusion" to True.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`EnableSubstepping`](#generated.RAFluentTwoWayCoupling.EnableSubstepping)()                                                    | Set the value of "Substepping" to True.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetAbsoluteValue`](#generated.RAFluentTwoWayCoupling.GetAbsoluteValue)([unit])                                                | Get the value of "Absolute Value".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetActivesArray`](#generated.RAFluentTwoWayCoupling.GetActivesArray)([time_step])                                             | Get an array representing the cells' "active" status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetAvailableCoupledBoundaryNames`](#generated.RAFluentTwoWayCoupling.GetAvailableCoupledBoundaryNames)()                      | Obtain the names of the boundaries available for coupling in the fluent file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetAveragingMethod`](#generated.RAFluentTwoWayCoupling.GetAveragingMethod)()                                                  | Deprecated: Use [`GetMappingMethod()`](#generated.RAFluentTwoWayCoupling.GetMappingMethod) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetAveragingRadiusType`](#generated.RAFluentTwoWayCoupling.GetAveragingRadiusType)()                                          | Get "Averaging Radius Type" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetBackDiffusion`](#generated.RAFluentTwoWayCoupling.GetBackDiffusion)()                                                      | Get the value of "Back Diffusion".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetBoundingBox`](#generated.RAFluentTwoWayCoupling.GetBoundingBox)([unit, time_step])                                         | Get the element's bounding box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCFDParametersList`](#generated.RAFluentTwoWayCoupling.GetCFDParametersList)()                                              | Get the list of per-Particle CFD parameter sets.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetCellAreaAsArray`](#generated.RAFluentTwoWayCoupling.GetCellAreaAsArray)([time_step])                                       | Get an array containing the area of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetCellCenterAsArray`](#generated.RAFluentTwoWayCoupling.GetCellCenterAsArray)([time_step])                                   | Get an array containing the center coordinates of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellDzAsArray`](#generated.RAFluentTwoWayCoupling.GetCellDzAsArray)([time_step])                                           | Get an array containing the thickness (in Z) of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetCellFromIJK`](#generated.RAFluentTwoWayCoupling.GetCellFromIJK)(i, j, k[, time_step])                                      | Creates a grid cell handle from the current I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetCellIJK`](#generated.RAFluentTwoWayCoupling.GetCellIJK)(cell_handle[, time_step])                                          | Converts the given cell handle to it's I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetCellNumberOfVertices`](#generated.RAFluentTwoWayCoupling.GetCellNumberOfVertices)(cell[, time_step])                       | Get an array containing the number of vertices of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellPointsAsFunction`](#generated.RAFluentTwoWayCoupling.GetCellPointsAsFunction)([time_step])                             | Get a function for the points (vertices) of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetCellVolumeAsArray`](#generated.RAFluentTwoWayCoupling.GetCellVolumeAsArray)([time_step])                                   | Get an array with the volume of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetConvectiveHeatTransferLaw`](#generated.RAFluentTwoWayCoupling.GetConvectiveHeatTransferLaw)()                              | Get the current "Convective Heat Transfer Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCouplingFilesKept`](#generated.RAFluentTwoWayCoupling.GetCouplingFilesKept)()                                              | Get the value of "Coupling Files Kept".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetCurve`](#generated.RAFluentTwoWayCoupling.GetCurve)(curve_name[, simulation_name, ...])                                    | Override base class method to check for a request of a grid function statistic.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCurveNames`](#generated.RAFluentTwoWayCoupling.GetCurveNames)([simulation_name])                                           | @param simulation_name: unicode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCurveNamesAssociation`](#generated.RAFluentTwoWayCoupling.GetCurveNamesAssociation)([simulation_name])                     | Get this element's curve names.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetDecompositionFactor`](#generated.RAFluentTwoWayCoupling.GetDecompositionFactor)()                                          | Get the value of "Decomposition Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetDiffusionCoefficient`](#generated.RAFluentTwoWayCoupling.GetDiffusionCoefficient)([unit])                                  | Get the value of "Diffusion Coefficient".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetDragLaw`](#generated.RAFluentTwoWayCoupling.GetDragLaw)()                                                                  | Get the current "Drag Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetElementCurve`](#generated.RAFluentTwoWayCoupling.GetElementCurve)(element_name, curve_name[, ...])                         | Return the curves for the given element and name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetFluentAdditionalArgs`](#generated.RAFluentTwoWayCoupling.GetFluentAdditionalArgs)()                                        | Get the value of "Fluent Additional Args".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetFluentExecutionMode`](#generated.RAFluentTwoWayCoupling.GetFluentExecutionMode)()                                          | Get "Fluent Execution Mode" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetFluentOutputFrequencyMultiplier`](#generated.RAFluentTwoWayCoupling.GetFluentOutputFrequencyMultiplier)()                  | Get the value of "Fluent Output Frequency Multiplier".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetFluentReleases`](#generated.RAFluentTwoWayCoupling.GetFluentReleases)()                                                    | Get a list of available Fluent releases.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetFluentSolverProcesses`](#generated.RAFluentTwoWayCoupling.GetFluentSolverProcesses)()                                      | Get the value of "Fluent Solver Processes".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetFluentVersion`](#generated.RAFluentTwoWayCoupling.GetFluentVersion)()                                                      | Get the value of "Version".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetFractionParticleSize`](#generated.RAFluentTwoWayCoupling.GetFractionParticleSize)([unit])                                  | Get the value of "Fraction Particle Size".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetGeometryQuantity`](#generated.RAFluentTwoWayCoupling.GetGeometryQuantity)()                                                | Get the quantity corresponding to the grid's geometry.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetGeometryUnit`](#generated.RAFluentTwoWayCoupling.GetGeometryUnit)()                                                        | Get the grid's geometry's unit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetGridFunction`](#generated.RAFluentTwoWayCoupling.GetGridFunction)(grid_function_name[, ...])                               | Gets a grid function given its name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetGridFunctionNames`](#generated.RAFluentTwoWayCoupling.GetGridFunctionNames)([translated, context])                         | Get a list of the available grid functions for this grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetLiftLaw`](#generated.RAFluentTwoWayCoupling.GetLiftLaw)()                                                                  | Get the current "Lift Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetMappingMethod`](#generated.RAFluentTwoWayCoupling.GetMappingMethod)()                                                      | Get "Mapping Method" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetMaximumIterations`](#generated.RAFluentTwoWayCoupling.GetMaximumIterations)()                                              | Get the value of "Maximum Iterations".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetMaximumResidualTolerance`](#generated.RAFluentTwoWayCoupling.GetMaximumResidualTolerance)()                                | Get the value of "Maximum Residual Tolerance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetMaximumTimeSteps`](#generated.RAFluentTwoWayCoupling.GetMaximumTimeSteps)()                                                | Get the value of "Maximum Time Steps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetMaximumVolumeFraction`](#generated.RAFluentTwoWayCoupling.GetMaximumVolumeFraction)([unit])                                | Get the value of "Maximum Volume Fraction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetMaximumVolumeFractionTarget`](#generated.RAFluentTwoWayCoupling.GetMaximumVolumeFractionTarget)()                          | Deprecated: use GetSolidsMaximumVolumeFractionTarget instead                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetMeshColoring`](#generated.RAFluentTwoWayCoupling.GetMeshColoring)(window)                                                  | Get the RAMeshColoring related to the current object and a window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetMinimumIterations`](#generated.RAFluentTwoWayCoupling.GetMinimumIterations)()                                              | Get the value of "Minimum Iterations".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetMinimumTimeSteps`](#generated.RAFluentTwoWayCoupling.GetMinimumTimeSteps)()                                                | Get the value of "Minimum Time Steps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetMorsiAndAlexanderK1`](#generated.RAFluentTwoWayCoupling.GetMorsiAndAlexanderK1)()                                          | Get the current "Morsi And Alexander K1".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetMorsiAndAlexanderK2`](#generated.RAFluentTwoWayCoupling.GetMorsiAndAlexanderK2)()                                          | Get the current "Morsi And Alexander K2".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetMorsiAndAlexanderK3`](#generated.RAFluentTwoWayCoupling.GetMorsiAndAlexanderK3)()                                          | Get the current "Morsi And Alexander K3".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetNumberOfCells`](#generated.RAFluentTwoWayCoupling.GetNumberOfCells)([time_step])                                           | Get the total number of cells.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetNumberOfNodes`](#generated.RAFluentTwoWayCoupling.GetNumberOfNodes)([time_step])                                           | Get the total number of nodes (vertices).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetNumberOfSubsteps`](#generated.RAFluentTwoWayCoupling.GetNumberOfSubsteps)()                                                | Get the value of "Number of Substeps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetNumberOfThreads`](#generated.RAFluentTwoWayCoupling.GetNumberOfThreads)()                                                  | Get the value of "Number of Threads".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetNumpyCurve`](#generated.RAFluentTwoWayCoupling.GetNumpyCurve)(curve_name[, unit, realization])                             | Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetOutputVariableValue`](#generated.RAFluentTwoWayCoupling.GetOutputVariableValue)(variable_name)                             | Get the value of a previously-created output variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetOverwriteCfdUpdateDistance`](#generated.RAFluentTwoWayCoupling.GetOverwriteCfdUpdateDistance)()                            | Get the value of "Overwrite Cfd Update Distance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetSolidsMaximumVolumeFractionTarget`](#generated.RAFluentTwoWayCoupling.GetSolidsMaximumVolumeFractionTarget)()              | Get the value of "Solids Maximum Volume Fraction Target".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetSubstepping`](#generated.RAFluentTwoWayCoupling.GetSubstepping)()                                                          | Get the value of "Substepping".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetSyamlalObrienC1`](#generated.RAFluentTwoWayCoupling.GetSyamlalObrienC1)()                                                  | Get the current "Syamlal Obrien C1".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetSyamlalObrienD1`](#generated.RAFluentTwoWayCoupling.GetSyamlalObrienD1)()                                                  | Get the current "Syamlal Obrien D1".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetTimeSet`](#generated.RAFluentTwoWayCoupling.GetTimeSet)()                                                                  | Get the list of time-steps associated to the grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetTimeStatistics`](#generated.RAFluentTwoWayCoupling.GetTimeStatistics)()                                                    | Get the object responsible for handling time-statistics grid functions for this process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetTimeStep`](#generated.RAFluentTwoWayCoupling.GetTimeStep)(time_step[, accept_global])                                      | Get the timestep corresponding to the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetTopologyShape`](#generated.RAFluentTwoWayCoupling.GetTopologyShape)([time_step])                                           | Get the shape of the topology (similar to the shape of numpy arrays).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetTorqueLaw`](#generated.RAFluentTwoWayCoupling.GetTorqueLaw)()                                                              | Get the current "Torque Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetUseDatInitialization`](#generated.RAFluentTwoWayCoupling.GetUseDatInitialization)()                                        | Get the value of "Use Dat Initialization".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetUseTurbulentDispersion`](#generated.RAFluentTwoWayCoupling.GetUseTurbulentDispersion)()                                    | Get the value of "Use Turbulent Dispersion".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetUseUserDefinedConstants`](#generated.RAFluentTwoWayCoupling.GetUseUserDefinedConstants)()                                  | Get the current "Use User Defined Constants".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetUserCfdUpdateDistance`](#generated.RAFluentTwoWayCoupling.GetUserCfdUpdateDistance)([unit])                                | Get the value of "User Cfd Update Distance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetValidAveragingMethodValues`](#generated.RAFluentTwoWayCoupling.GetValidAveragingMethodValues)()                            | Deprecated: Use [`GetValidMappingMethodValues()`](#generated.RAFluentTwoWayCoupling.GetValidMappingMethodValues) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetValidAveragingRadiusTypeValues`](#generated.RAFluentTwoWayCoupling.GetValidAveragingRadiusTypeValues)()                    | Get a list of all possible values for "Averaging Radius Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetValidFluentExecutionModeValues`](#generated.RAFluentTwoWayCoupling.GetValidFluentExecutionModeValues)()                    | Get a list of all possible values for "Fluent Execution Mode".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetValidMappingMethodValues`](#generated.RAFluentTwoWayCoupling.GetValidMappingMethodValues)()                                | Get a list of all possible values for "Mapping Method".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetVirtualMassLaw`](#generated.RAFluentTwoWayCoupling.GetVirtualMassLaw)()                                                    | Get the current "Virtual Mass Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetVolumeFractionTarget`](#generated.RAFluentTwoWayCoupling.GetVolumeFractionTarget)()                                        | Deprecated: Use [`GetSolidsMaximumVolumeFractionTarget()`](#generated.RAFluentTwoWayCoupling.GetSolidsMaximumVolumeFractionTarget) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`HasGridFunction`](#generated.RAFluentTwoWayCoupling.HasGridFunction)(grid_function_name)                                      | Whether the grid has the given grid function.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`IsBackDiffusionEnabled`](#generated.RAFluentTwoWayCoupling.IsBackDiffusionEnabled)()                                          | Check if the "Back Diffusion" is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`IsCellActive`](#generated.RAFluentTwoWayCoupling.IsCellActive)(i, j, k[, time_step])                                          | Checks if the given cell is active or not                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`IsFluentRunning`](#generated.RAFluentTwoWayCoupling.IsFluentRunning)()                                                        | Whether a Rocky-created Fluent process is running.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`IsSubsteppingEnabled`](#generated.RAFluentTwoWayCoupling.IsSubsteppingEnabled)()                                              | Check if the "Substepping" is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`IterCellVertices`](#generated.RAFluentTwoWayCoupling.IterCellVertices)(cell[, time_step])                                     | Iterate on the vertices of active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`IterCells`](#generated.RAFluentTwoWayCoupling.IterCells)([time_step])                                                         | Iterate on the active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`Modified`](#generated.RAFluentTwoWayCoupling.Modified)(\*args, \*\*kwargs)                                                    | Resets all the cache information after a change in the subject being tracked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RemoveCustomCurve`](#generated.RAFluentTwoWayCoupling.RemoveCustomCurve)(name)                                                | Remove the curve from the database :param name:     The name of the curve to be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`RemoveCustomProperty`](#generated.RAFluentTwoWayCoupling.RemoveCustomProperty)(name)                                          | Remove the property from the database :param name:     The name of the property to be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RemoveOutputVariable`](#generated.RAFluentTwoWayCoupling.RemoveOutputVariable)(variable_name)                                 | Removes some output variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RemoveProcess`](#generated.RAFluentTwoWayCoupling.RemoveProcess)()                                                            | Removes the process from the project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetAbsoluteValue`](#generated.RAFluentTwoWayCoupling.SetAbsoluteValue)(value[, unit])                                         | Set the value of "Absolute Value".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetAveragingMethod`](#generated.RAFluentTwoWayCoupling.SetAveragingMethod)(value)                                             | Deprecated: Use [`SetMappingMethod()`](#generated.RAFluentTwoWayCoupling.SetMappingMethod) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetAveragingRadiusType`](#generated.RAFluentTwoWayCoupling.SetAveragingRadiusType)(value)                                     | Set the value of "Averaging Radius Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetBackDiffusion`](#generated.RAFluentTwoWayCoupling.SetBackDiffusion)(value)                                                 | Set the value of "Back Diffusion".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetConvectiveHeatTransferLaw`](#generated.RAFluentTwoWayCoupling.SetConvectiveHeatTransferLaw)(value)                         | Set the current "Convective Heat Transfer Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetCouplingFilesKept`](#generated.RAFluentTwoWayCoupling.SetCouplingFilesKept)(value)                                         | Set the value of "Coupling Files Kept".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetCurrentTimeStep`](#generated.RAFluentTwoWayCoupling.SetCurrentTimeStep)(time_step)                                         | Sets the current time step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetDecompositionFactor`](#generated.RAFluentTwoWayCoupling.SetDecompositionFactor)(value)                                     | Set the value of "Decomposition Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetDiffusionCoefficient`](#generated.RAFluentTwoWayCoupling.SetDiffusionCoefficient)(value[, unit])                           | Set the value of "Diffusion Coefficient".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetDragLaw`](#generated.RAFluentTwoWayCoupling.SetDragLaw)(value)                                                             | Set the current "Drag Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetFluentAdditionalArgs`](#generated.RAFluentTwoWayCoupling.SetFluentAdditionalArgs)(value)                                   | Set the value of "Fluent Additional Args".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetFluentExecutionMode`](#generated.RAFluentTwoWayCoupling.SetFluentExecutionMode)(value)                                     | Set the value of "Fluent Execution Mode".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetFluentOutputFrequencyMultiplier`](#generated.RAFluentTwoWayCoupling.SetFluentOutputFrequencyMultiplier)(value)             | Set the value of "Fluent Output Frequency Multiplier".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetFluentSolverProcesses`](#generated.RAFluentTwoWayCoupling.SetFluentSolverProcesses)(value)                                 | Set the value of "Fluent Solver Processes".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetFluentVersion`](#generated.RAFluentTwoWayCoupling.SetFluentVersion)(fluent_version)                                        | Set the value of "Version".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetFractionParticleSize`](#generated.RAFluentTwoWayCoupling.SetFractionParticleSize)(value[, unit])                           | Set the value of "Fraction Particle Size".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetLiftLaw`](#generated.RAFluentTwoWayCoupling.SetLiftLaw)(value)                                                             | Set the current "Lift Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetMappingMethod`](#generated.RAFluentTwoWayCoupling.SetMappingMethod)(value)                                                 | Set the value of "Mapping Method".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetMaximumIterations`](#generated.RAFluentTwoWayCoupling.SetMaximumIterations)(value)                                         | Set the value of "Maximum Iterations".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetMaximumResidualTolerance`](#generated.RAFluentTwoWayCoupling.SetMaximumResidualTolerance)(value)                           | Set the value of "Maximum Residual Tolerance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`SetMaximumTimeSteps`](#generated.RAFluentTwoWayCoupling.SetMaximumTimeSteps)(value)                                           | Set the value of "Maximum Time Steps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetMaximumVolumeFraction`](#generated.RAFluentTwoWayCoupling.SetMaximumVolumeFraction)(value[, unit])                         | Set the value of "Maximum Volume Fraction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetMaximumVolumeFractionTarget`](#generated.RAFluentTwoWayCoupling.SetMaximumVolumeFractionTarget)(value)                     | Deprecated: use SetSolidsMaximumVolumeFractionTarget instead                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetMinimumIterations`](#generated.RAFluentTwoWayCoupling.SetMinimumIterations)(value)                                         | Set the value of "Minimum Iterations".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetMinimumTimeSteps`](#generated.RAFluentTwoWayCoupling.SetMinimumTimeSteps)(value)                                           | Set the value of "Minimum Time Steps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetMorsiAndAlexanderK1`](#generated.RAFluentTwoWayCoupling.SetMorsiAndAlexanderK1)(value)                                     | Set the current "Morsi And Alexander K1".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetMorsiAndAlexanderK2`](#generated.RAFluentTwoWayCoupling.SetMorsiAndAlexanderK2)(value)                                     | Set the current "Morsi And Alexander K2".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetMorsiAndAlexanderK3`](#generated.RAFluentTwoWayCoupling.SetMorsiAndAlexanderK3)(value)                                     | Set the current "Morsi And Alexander K3".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetNumberOfSubsteps`](#generated.RAFluentTwoWayCoupling.SetNumberOfSubsteps)(value)                                           | Set the value of "Number of Substeps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetNumberOfThreads`](#generated.RAFluentTwoWayCoupling.SetNumberOfThreads)(value)                                             | Set the value of "Number of Threads".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetOverwriteCfdUpdateDistance`](#generated.RAFluentTwoWayCoupling.SetOverwriteCfdUpdateDistance)(value)                       | Set the value of "Overwrite Cfd Update Distance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetPartIdIfValid`](#generated.RAFluentTwoWayCoupling.SetPartIdIfValid)()                                                      | Subclasses should implement this method if it's a Process with visualization                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetSolidsMaximumVolumeFractionTarget`](#generated.RAFluentTwoWayCoupling.SetSolidsMaximumVolumeFractionTarget)(value)         | Set the value of "Solids Maximum Volume Fraction Target".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetSubstepping`](#generated.RAFluentTwoWayCoupling.SetSubstepping)(value)                                                     | Set the value of "Substepping".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetSyamlalObrienC1`](#generated.RAFluentTwoWayCoupling.SetSyamlalObrienC1)(value)                                             | Set the current "Syamlal Obrien C1".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetSyamlalObrienD1`](#generated.RAFluentTwoWayCoupling.SetSyamlalObrienD1)(value)                                             | Set the current "Syamlal Obrien D1".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetTorqueLaw`](#generated.RAFluentTwoWayCoupling.SetTorqueLaw)(value)                                                         | Set the current "Torque Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetUseDatInitialization`](#generated.RAFluentTwoWayCoupling.SetUseDatInitialization)(value)                                   | Set the value of "Use Dat Initialization".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetUseTurbulentDispersion`](#generated.RAFluentTwoWayCoupling.SetUseTurbulentDispersion)(value)                               | Set the value of "Use Turbulent Dispersion".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetUseUserDefinedConstants`](#generated.RAFluentTwoWayCoupling.SetUseUserDefinedConstants)(value)                             | Set the current "Use User Defined Constants".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetUserCfdUpdateDistance`](#generated.RAFluentTwoWayCoupling.SetUserCfdUpdateDistance)(value[, unit])                         | Set the value of "User Cfd Update Distance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetVirtualMassLaw`](#generated.RAFluentTwoWayCoupling.SetVirtualMassLaw)(value)                                               | Set the current "Virtual Mass Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetVolumeFractionTarget`](#generated.RAFluentTwoWayCoupling.SetVolumeFractionTarget)(value)                                   | Deprecated: Use [`SetSolidsMaximumVolumeFractionTarget()`](#generated.RAFluentTwoWayCoupling.SetSolidsMaximumVolumeFractionTarget) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetupStoreFiles`](#generated.RAFluentTwoWayCoupling.SetupStoreFiles)(cas_filename[, case_config])                             | Copies CAS file to Rocky's project folder and update Fluent info                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`StartFluent`](#generated.RAFluentTwoWayCoupling.StartFluent)()                                                                | Starts Fluent application                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`UpdateFluentInfo`](#generated.RAFluentTwoWayCoupling.UpdateFluentInfo)()                                                      | Updates the latest changes from Fluent setup.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

<a id="generated.RAFluentTwoWayCoupling.AddCurve"></a>

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

<a id="generated.RAFluentTwoWayCoupling.AddCustomCurve"></a>

#### AddCustomCurve(name: str, curve_type: str = 'simple', output_unit: str = '<unknown>', scope: str = 'user', sources: Optional[dict[str, str]] = None, expression: str = '')

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

<a id="generated.RAFluentTwoWayCoupling.AddCustomProperty"></a>

#### AddCustomProperty(name: str, property_type: str = 'simple', output_unit: str = '<unknown>', scope: str = 'user', sources: Optional[dict[str, str]] = None, expression: str = '')

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

<a id="generated.RAFluentTwoWayCoupling.AddGridFunction"></a>

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

<a id="generated.RAFluentTwoWayCoupling.CloseFluent"></a>

#### CloseFluent()

Closes a running Fluent application

<a id="generated.RAFluentTwoWayCoupling.CreateCoupledBoundaries"></a>

#### CreateCoupledBoundaries(coupled_boundary_names: list[str])

Create a coupled boundary for each of the coupled boundary name passed by the user.
Check GetAvailableCoupledBoundaryNames to obtain the list of available boundaries.

<a id="generated.RAFluentTwoWayCoupling.CreateCurveOutputVariable"></a>

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

<a id="generated.RAFluentTwoWayCoupling.CreateGridFunction"></a>

#### CreateGridFunction(values, location='cell', time_step='current')

Create a grid function from the given values, location and time-step.

* **Parameters:**
  * **values** (*list* *(**double* *) or* *numpy array*) – The values of the grid function to be added.
  * **time_step** – 

#### SEE ALSO
KAContextDependentElement.GetTimeStep

<a id="generated.RAFluentTwoWayCoupling.CreateGridFunctionArrayOnCells"></a>

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

<a id="generated.RAFluentTwoWayCoupling.CreateGridFunctionStatisticOutputVariable"></a>

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

<a id="generated.RAFluentTwoWayCoupling.CreateTransientCurveOutputVariable"></a>

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

<a id="generated.RAFluentTwoWayCoupling.DisableBackDiffusion"></a>

#### DisableBackDiffusion()

Set the value of “Back Diffusion” to False.

<a id="generated.RAFluentTwoWayCoupling.DisableSubstepping"></a>

#### DisableSubstepping()

Set the value of “Substepping” to False.

<a id="generated.RAFluentTwoWayCoupling.EditCustomCurve"></a>

#### EditCustomCurve(edit_curve: str, new_name: Optional[str] = None, sources: Optional[dict[str, str]] = None, expression: Optional[str] = None)

Edit a custom curve saved in the database.
:param edit_curve:

> The name of the curve to be edited.
* **Parameters:**
  * **new_name** – The new name of the curve to be set.
  * **sources** – A dict pointing the variable used to the curve association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RAFluentTwoWayCoupling.EditCustomProperty"></a>

#### EditCustomProperty(edit_property: str, new_name: Optional[str] = None, sources: Optional[dict[str, str]] = None, expression: Optional[str] = None)

Edit a custom property saved in the database.
:param edit_property:

> The name of the property to be edited.
* **Parameters:**
  * **new_name** – The new name of the property to be set.
  * **sources** – A dict pointing the variable used to the property association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RAFluentTwoWayCoupling.EnableBackDiffusion"></a>

#### EnableBackDiffusion()

Set the value of “Back Diffusion” to True.

<a id="generated.RAFluentTwoWayCoupling.EnableSubstepping"></a>

#### EnableSubstepping()

Set the value of “Substepping” to True.

<a id="generated.RAFluentTwoWayCoupling.GetAbsoluteValue"></a>

#### GetAbsoluteValue(unit: Optional[str] = None)

Get the value of “Absolute Value”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RAFluentTwoWayCoupling.GetActivesArray"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetAvailableCoupledBoundaryNames"></a>

#### GetAvailableCoupledBoundaryNames()

Obtain the names of the boundaries available for coupling in the fluent file.

<a id="generated.RAFluentTwoWayCoupling.GetAveragingMethod"></a>

#### GetAveragingMethod()

Deprecated: Use [`GetMappingMethod()`](#generated.RAFluentTwoWayCoupling.GetMappingMethod) instead.

* **Returns:**
  The returned value will be one of [‘UniformDistribution’, ‘VolumetricDiffusion’, ‘DiffusionSolution’].

<a id="generated.RAFluentTwoWayCoupling.GetAveragingRadiusType"></a>

#### GetAveragingRadiusType()

Get “Averaging Radius Type” as a string.

* **Returns:**
  The returned value will be one of [‘FractionMaximumParticleSize’, ‘AbsoluteValue’].

<a id="generated.RAFluentTwoWayCoupling.GetBackDiffusion"></a>

#### GetBackDiffusion()

Get the value of “Back Diffusion”.

<a id="generated.RAFluentTwoWayCoupling.GetBoundingBox"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetCFDParametersList"></a>

#### GetCFDParametersList()

Get the list of per-Particle CFD parameter sets.

* **Return type:**
  [RACFDParametersList](RACFDParametersList.md#generated.RACFDParametersList)

<a id="generated.RAFluentTwoWayCoupling.GetCellAreaAsArray"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetCellCenterAsArray"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetCellDzAsArray"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetCellFromIJK"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetCellIJK"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetCellNumberOfVertices"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetCellPointsAsFunction"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetCellVolumeAsArray"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetConvectiveHeatTransferLaw"></a>

#### GetConvectiveHeatTransferLaw()

Get the current “Convective Heat Transfer Law”. This is a shortcut to access the “Convective Heat Transfer Law” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetConvectiveHeatTransferLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetConvectiveHeatTransferLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Convective Heat Transfer Law”.

<a id="generated.RAFluentTwoWayCoupling.GetCouplingFilesKept"></a>

#### GetCouplingFilesKept()

Get the value of “Coupling Files Kept”.

<a id="generated.RAFluentTwoWayCoupling.GetCurve"></a>

#### GetCurve(curve_name, simulation_name=None, realization=None, time_step=None)

Override base class method to check for a request of a grid function statistic.

<a id="generated.RAFluentTwoWayCoupling.GetCurveNames"></a>

#### GetCurveNames(simulation_name=None)

@param simulation_name: unicode
: An optional parameter for defining the simulation to get the curve from.

* **Returns:**
  list(str)
  The list of curve names

<a id="generated.RAFluentTwoWayCoupling.GetCurveNamesAssociation"></a>

#### GetCurveNamesAssociation(simulation_name=None)

Get this element’s curve names.

* **Parameters:**
  **simulation_name** (*unicode*) – The name of the simulation to query the curve names
  If None is given the current element simulation will be used
* **Return type:**
  dict(unicode, ISemanticAssociation)
* **Returns:**
  The curve names for this element in the given simulation name

<a id="generated.RAFluentTwoWayCoupling.GetDecompositionFactor"></a>

#### GetDecompositionFactor()

Get the value of “Decomposition Factor”.

<a id="generated.RAFluentTwoWayCoupling.GetDiffusionCoefficient"></a>

#### GetDiffusionCoefficient(unit: Optional[str] = None)

Get the value of “Diffusion Coefficient”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m2/s”.

<a id="generated.RAFluentTwoWayCoupling.GetDragLaw"></a>

#### GetDragLaw()

Get the current “Drag Law”. This is a shortcut to access the “Drag Law” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetDragLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetDragLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Drag Law”.

<a id="generated.RAFluentTwoWayCoupling.GetElementCurve"></a>

#### GetElementCurve(element_name, curve_name, simulation_name=None, realization=None, time_step=None)

Return the curves for the given element and name.

* **Parameters:**
  * **element_name** (*unicode*) – The name of the element
  * **curve_name** (*unicode*) – The name of the curve
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the curve from.
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **time_step** (*TimeStep*) – For transient curves a time-step must be given.

<a id="generated.RAFluentTwoWayCoupling.GetFluentAdditionalArgs"></a>

#### GetFluentAdditionalArgs()

Get the value of “Fluent Additional Args”.

<a id="generated.RAFluentTwoWayCoupling.GetFluentExecutionMode"></a>

#### GetFluentExecutionMode()

Get “Fluent Execution Mode” as a string.

* **Returns:**
  The returned value will be one of [‘serial’, ‘local_parallel’, ‘distributed_parallel’].

<a id="generated.RAFluentTwoWayCoupling.GetFluentOutputFrequencyMultiplier"></a>

#### GetFluentOutputFrequencyMultiplier()

Get the value of “Fluent Output Frequency Multiplier”.

<a id="generated.RAFluentTwoWayCoupling.GetFluentReleases"></a>

#### GetFluentReleases()

Get a list of available Fluent releases.

* **Return type:**
  list(unicode)
* **Returns:**
  The list of available Fluent releases

<a id="generated.RAFluentTwoWayCoupling.GetFluentSolverProcesses"></a>

#### GetFluentSolverProcesses()

Get the value of “Fluent Solver Processes”.

<a id="generated.RAFluentTwoWayCoupling.GetFluentVersion"></a>

#### GetFluentVersion()

Get the value of “Version”.

* **Return type:**
  str

<a id="generated.RAFluentTwoWayCoupling.GetFractionParticleSize"></a>

#### GetFractionParticleSize(unit: Optional[str] = None)

Get the value of “Fraction Particle Size”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAFluentTwoWayCoupling.GetGeometryQuantity"></a>

#### GetGeometryQuantity()

Get the quantity corresponding to the grid’s geometry.

* **Return type:**
  IQuantity
* **Returns:**
  The grid geometry quantity

<a id="generated.RAFluentTwoWayCoupling.GetGeometryUnit"></a>

#### GetGeometryUnit()

Get the grid’s geometry’s unit.

* **Return type:**
  unicode
* **Returns:**
  The unit for the grid geometry

<a id="generated.RAFluentTwoWayCoupling.GetGridFunction"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetGridFunctionNames"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetLiftLaw"></a>

#### GetLiftLaw()

Get the current “Lift Law”. This is a shortcut to access the “Lift Law” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetLiftLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetLiftLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Lift Law”.

<a id="generated.RAFluentTwoWayCoupling.GetMappingMethod"></a>

#### GetMappingMethod()

Get “Mapping Method” as a string.

* **Returns:**
  The returned value will be one of [‘UniformDistribution’, ‘VolumetricDiffusion’, ‘DiffusionSolution’].

<a id="generated.RAFluentTwoWayCoupling.GetMaximumIterations"></a>

#### GetMaximumIterations()

Get the value of “Maximum Iterations”.

<a id="generated.RAFluentTwoWayCoupling.GetMaximumResidualTolerance"></a>

#### GetMaximumResidualTolerance()

Get the value of “Maximum Residual Tolerance”.

<a id="generated.RAFluentTwoWayCoupling.GetMaximumTimeSteps"></a>

#### GetMaximumTimeSteps()

Get the value of “Maximum Time Steps”.

<a id="generated.RAFluentTwoWayCoupling.GetMaximumVolumeFraction"></a>

#### GetMaximumVolumeFraction(unit: Optional[str] = None)

Get the value of “Maximum Volume Fraction”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAFluentTwoWayCoupling.GetMaximumVolumeFractionTarget"></a>

#### GetMaximumVolumeFractionTarget()

Deprecated: use GetSolidsMaximumVolumeFractionTarget instead

<a id="generated.RAFluentTwoWayCoupling.GetMeshColoring"></a>

#### GetMeshColoring(window: str | type['KAWorkspaceWindow'])

Get the RAMeshColoring related to the current object and a window.

* **Parameters:**
  **window** – The window that the coloring is acting. The window must be a str of the name of the
  window or a KAWorkspaceWindow.
* **Raises:**
  **RockyApiError** – If window is not a str or KAWorkspaceWindow. Additionally, raises an error if no window
  is found or no coloring for the given item exists.

<a id="generated.RAFluentTwoWayCoupling.GetMinimumIterations"></a>

#### GetMinimumIterations()

Get the value of “Minimum Iterations”.

<a id="generated.RAFluentTwoWayCoupling.GetMinimumTimeSteps"></a>

#### GetMinimumTimeSteps()

Get the value of “Minimum Time Steps”.

<a id="generated.RAFluentTwoWayCoupling.GetMorsiAndAlexanderK1"></a>

#### GetMorsiAndAlexanderK1()

Get the current “Morsi And Alexander K1”. This is a shortcut to access the “Morsi And Alexander K1” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetMorsiAndAlexanderK1()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetMorsiAndAlexanderK1)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Morsi And Alexander K1”.

<a id="generated.RAFluentTwoWayCoupling.GetMorsiAndAlexanderK2"></a>

#### GetMorsiAndAlexanderK2()

Get the current “Morsi And Alexander K2”. This is a shortcut to access the “Morsi And Alexander K2” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetMorsiAndAlexanderK2()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetMorsiAndAlexanderK2)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Morsi And Alexander K2”.

<a id="generated.RAFluentTwoWayCoupling.GetMorsiAndAlexanderK3"></a>

#### GetMorsiAndAlexanderK3()

Get the current “Morsi And Alexander K3”. This is a shortcut to access the “Morsi And Alexander K3” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetMorsiAndAlexanderK3()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetMorsiAndAlexanderK3)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Morsi And Alexander K3”.

<a id="generated.RAFluentTwoWayCoupling.GetNumberOfCells"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetNumberOfNodes"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetNumberOfSubsteps"></a>

#### GetNumberOfSubsteps()

Get the value of “Number of Substeps”.

<a id="generated.RAFluentTwoWayCoupling.GetNumberOfThreads"></a>

#### GetNumberOfThreads()

Get the value of “Number of Threads”.

<a id="generated.RAFluentTwoWayCoupling.GetNumpyCurve"></a>

#### GetNumpyCurve(curve_name, unit=None, realization=None)

Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.

<a id="generated.RAFluentTwoWayCoupling.GetOutputVariableValue"></a>

#### GetOutputVariableValue(variable_name: str)

Get the value of a previously-created output variable.

* **Parameters:**
  **variable_name** (*unicode*) – The variable name whose value we want.
* **Returns:**
  Returns a scalar with the value and unit for the given variable_name or None if no
  variable was found with the given name or if it couldn’t be computed.

<a id="generated.RAFluentTwoWayCoupling.GetOverwriteCfdUpdateDistance"></a>

#### GetOverwriteCfdUpdateDistance()

Get the value of “Overwrite Cfd Update Distance”.

<a id="generated.RAFluentTwoWayCoupling.GetSolidsMaximumVolumeFractionTarget"></a>

#### GetSolidsMaximumVolumeFractionTarget()

Get the value of “Solids Maximum Volume Fraction Target”.

<a id="generated.RAFluentTwoWayCoupling.GetSubstepping"></a>

#### GetSubstepping()

Get the value of “Substepping”.

<a id="generated.RAFluentTwoWayCoupling.GetSyamlalObrienC1"></a>

#### GetSyamlalObrienC1()

Get the current “Syamlal Obrien C1”. This is a shortcut to access the “Syamlal Obrien C1” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetSyamlalObrienC1()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetSyamlalObrienC1)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Syamlal Obrien C1”.

<a id="generated.RAFluentTwoWayCoupling.GetSyamlalObrienD1"></a>

#### GetSyamlalObrienD1()

Get the current “Syamlal Obrien D1”. This is a shortcut to access the “Syamlal Obrien D1” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetSyamlalObrienD1()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetSyamlalObrienD1)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Syamlal Obrien D1”.

<a id="generated.RAFluentTwoWayCoupling.GetTimeSet"></a>

#### GetTimeSet()

Get the list of time-steps associated to the grid.

* **Return type:**
  ITimeSet
* **Returns:**
  The list of time-steps associated to the grid

<a id="generated.RAFluentTwoWayCoupling.GetTimeStatistics"></a>

#### GetTimeStatistics()

Get the object responsible for handling time-statistics grid functions for this process.
This call will return None if the process doesn’t support time statistics.

<a id="generated.RAFluentTwoWayCoupling.GetTimeStep"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetTopologyShape"></a>

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

<a id="generated.RAFluentTwoWayCoupling.GetTorqueLaw"></a>

#### GetTorqueLaw()

Get the current “Torque Law”. This is a shortcut to access the “Torque Law” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetTorqueLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetTorqueLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Torque Law”.

<a id="generated.RAFluentTwoWayCoupling.GetUseDatInitialization"></a>

#### GetUseDatInitialization()

Get the value of “Use Dat Initialization”.

<a id="generated.RAFluentTwoWayCoupling.GetUseTurbulentDispersion"></a>

#### GetUseTurbulentDispersion()

Get the value of “Use Turbulent Dispersion”.

<a id="generated.RAFluentTwoWayCoupling.GetUseUserDefinedConstants"></a>

#### GetUseUserDefinedConstants()

Get the current “Use User Defined Constants”. This is a shortcut to access the “Use User Defined Constants” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetUseUserDefinedConstants()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetUseUserDefinedConstants)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Use User Defined Constants”.

<a id="generated.RAFluentTwoWayCoupling.GetUserCfdUpdateDistance"></a>

#### GetUserCfdUpdateDistance(unit: Optional[str] = None)

Get the value of “User Cfd Update Distance”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RAFluentTwoWayCoupling.GetValidAveragingMethodValues"></a>

#### GetValidAveragingMethodValues()

Deprecated: Use [`GetValidMappingMethodValues()`](#generated.RAFluentTwoWayCoupling.GetValidMappingMethodValues) instead.

* **Returns:**
  The returned list is [‘UniformDistribution’, ‘VolumetricDiffusion’, ‘DiffusionSolution’].

<a id="generated.RAFluentTwoWayCoupling.GetValidAveragingRadiusTypeValues"></a>

#### GetValidAveragingRadiusTypeValues()

Get a list of all possible values for “Averaging Radius Type”.

* **Returns:**
  The returned list is [‘FractionMaximumParticleSize’, ‘AbsoluteValue’].

<a id="generated.RAFluentTwoWayCoupling.GetValidFluentExecutionModeValues"></a>

#### GetValidFluentExecutionModeValues()

Get a list of all possible values for “Fluent Execution Mode”.

* **Returns:**
  The returned list is [‘serial’, ‘local_parallel’, ‘distributed_parallel’].

<a id="generated.RAFluentTwoWayCoupling.GetValidMappingMethodValues"></a>

#### GetValidMappingMethodValues()

Get a list of all possible values for “Mapping Method”.

* **Returns:**
  The returned list is [‘UniformDistribution’, ‘VolumetricDiffusion’, ‘DiffusionSolution’].

<a id="generated.RAFluentTwoWayCoupling.GetVirtualMassLaw"></a>

#### GetVirtualMassLaw()

Get the current “Virtual Mass Law”. This is a shortcut to access the “Virtual Mass Law” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetVirtualMassLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetVirtualMassLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Virtual Mass Law”.

<a id="generated.RAFluentTwoWayCoupling.GetVolumeFractionTarget"></a>

#### GetVolumeFractionTarget()

Deprecated: Use [`GetSolidsMaximumVolumeFractionTarget()`](#generated.RAFluentTwoWayCoupling.GetSolidsMaximumVolumeFractionTarget) instead.

<a id="generated.RAFluentTwoWayCoupling.HasGridFunction"></a>

#### HasGridFunction(grid_function_name)

Whether the grid has the given grid function.

* **Parameters:**
  **grid_function_name** (*unicode*) – The name of the grid function to be checked.
* **Return type:**
  bool
* **Returns:**
  Returns True if the grid function exists and False otherwise.

<a id="generated.RAFluentTwoWayCoupling.IsBackDiffusionEnabled"></a>

#### IsBackDiffusionEnabled()

Check if the “Back Diffusion” is enabled.

<a id="generated.RAFluentTwoWayCoupling.IsCellActive"></a>

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

<a id="generated.RAFluentTwoWayCoupling.IsFluentRunning"></a>

#### IsFluentRunning()

Whether a Rocky-created Fluent process is running.

* **Returns:**
  True whether a Fluent application is running false otherwise

<a id="generated.RAFluentTwoWayCoupling.IsSubsteppingEnabled"></a>

#### IsSubsteppingEnabled()

Check if the “Substepping” is enabled.

<a id="generated.RAFluentTwoWayCoupling.IterCellVertices"></a>

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

<a id="generated.RAFluentTwoWayCoupling.IterCells"></a>

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

<a id="generated.RAFluentTwoWayCoupling.Modified"></a>

#### Modified(\*args, \*\*kwargs)

Resets all the cache information after a change in the subject being tracked.

<a id="generated.RAFluentTwoWayCoupling.RemoveCustomCurve"></a>

#### RemoveCustomCurve(name: str)

Remove the curve from the database
:param name:

> The name of the curve to be removed.

<a id="generated.RAFluentTwoWayCoupling.RemoveCustomProperty"></a>

#### RemoveCustomProperty(name: str)

Remove the property from the database
:param name:

> The name of the property to be removed.

<a id="generated.RAFluentTwoWayCoupling.RemoveOutputVariable"></a>

#### RemoveOutputVariable(variable_name: str)

Removes some output variable.

* **Parameters:**
  **variable_name** – The name of the variable to be removed.

<a id="generated.RAFluentTwoWayCoupling.RemoveProcess"></a>

#### RemoveProcess()

Removes the process from the project.

<a id="generated.RAFluentTwoWayCoupling.SetAbsoluteValue"></a>

#### SetAbsoluteValue(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Absolute Value”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RAFluentTwoWayCoupling.SetAveragingMethod"></a>

#### SetAveragingMethod(value: str)

Deprecated: Use [`SetMappingMethod()`](#generated.RAFluentTwoWayCoupling.SetMappingMethod) instead.

* **Parameters:**
  **value** – The value to set. Must be one of [‘UniformDistribution’, ‘VolumetricDiffusion’, ‘DiffusionSolution’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Averaging Method” option.

<a id="generated.RAFluentTwoWayCoupling.SetAveragingRadiusType"></a>

#### SetAveragingRadiusType(value: str)

Set the value of “Averaging Radius Type”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘FractionMaximumParticleSize’, ‘AbsoluteValue’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Averaging Radius Type” option.

<a id="generated.RAFluentTwoWayCoupling.SetBackDiffusion"></a>

#### SetBackDiffusion(value: bool)

Set the value of “Back Diffusion”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAFluentTwoWayCoupling.SetConvectiveHeatTransferLaw"></a>

#### SetConvectiveHeatTransferLaw(value)

Set the current “Convective Heat Transfer Law”. This is a shortcut to set the “Convective Heat Transfer Law” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetConvectiveHeatTransferLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetConvectiveHeatTransferLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAFluentTwoWayCoupling.SetCouplingFilesKept"></a>

#### SetCouplingFilesKept(value: Union[str, int])

Set the value of “Coupling Files Kept”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAFluentTwoWayCoupling.SetCurrentTimeStep"></a>

#### SetCurrentTimeStep(time_step)

Sets the current time step.

* **Parameters:**
  **time_step** (*ITimeStep*) – The time step to be considered the ‘current’ time step.

<a id="generated.RAFluentTwoWayCoupling.SetDecompositionFactor"></a>

#### SetDecompositionFactor(value: Union[str, float])

Set the value of “Decomposition Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAFluentTwoWayCoupling.SetDiffusionCoefficient"></a>

#### SetDiffusionCoefficient(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Diffusion Coefficient”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m2/s”.

<a id="generated.RAFluentTwoWayCoupling.SetDragLaw"></a>

#### SetDragLaw(value)

Set the current “Drag Law”. This is a shortcut to set the “Drag Law” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetDragLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetDragLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAFluentTwoWayCoupling.SetFluentAdditionalArgs"></a>

#### SetFluentAdditionalArgs(value: str)

Set the value of “Fluent Additional Args”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAFluentTwoWayCoupling.SetFluentExecutionMode"></a>

#### SetFluentExecutionMode(value: str)

Set the value of “Fluent Execution Mode”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘serial’, ‘local_parallel’, ‘distributed_parallel’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Fluent Execution Mode” option.

<a id="generated.RAFluentTwoWayCoupling.SetFluentOutputFrequencyMultiplier"></a>

#### SetFluentOutputFrequencyMultiplier(value: Union[str, int])

Set the value of “Fluent Output Frequency Multiplier”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAFluentTwoWayCoupling.SetFluentSolverProcesses"></a>

#### SetFluentSolverProcesses(value: Union[str, int])

Set the value of “Fluent Solver Processes”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAFluentTwoWayCoupling.SetFluentVersion"></a>

#### SetFluentVersion(fluent_version)

Set the value of “Version”.

* **Parameters:**
  **fluent_version** (*str*) – The caption of the Fluent Version that can be seen in the  UI.

<a id="generated.RAFluentTwoWayCoupling.SetFractionParticleSize"></a>

#### SetFractionParticleSize(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Fraction Particle Size”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAFluentTwoWayCoupling.SetLiftLaw"></a>

#### SetLiftLaw(value)

Set the current “Lift Law”. This is a shortcut to set the “Lift Law” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetLiftLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetLiftLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAFluentTwoWayCoupling.SetMappingMethod"></a>

#### SetMappingMethod(value: str)

Set the value of “Mapping Method”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘UniformDistribution’, ‘VolumetricDiffusion’, ‘DiffusionSolution’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Mapping Method” option.

<a id="generated.RAFluentTwoWayCoupling.SetMaximumIterations"></a>

#### SetMaximumIterations(value: Union[str, int])

Set the value of “Maximum Iterations”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAFluentTwoWayCoupling.SetMaximumResidualTolerance"></a>

#### SetMaximumResidualTolerance(value: Union[str, float])

Set the value of “Maximum Residual Tolerance”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAFluentTwoWayCoupling.SetMaximumTimeSteps"></a>

#### SetMaximumTimeSteps(value: Union[str, int])

Set the value of “Maximum Time Steps”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAFluentTwoWayCoupling.SetMaximumVolumeFraction"></a>

#### SetMaximumVolumeFraction(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Maximum Volume Fraction”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAFluentTwoWayCoupling.SetMaximumVolumeFractionTarget"></a>

#### SetMaximumVolumeFractionTarget(value)

Deprecated: use SetSolidsMaximumVolumeFractionTarget instead

<a id="generated.RAFluentTwoWayCoupling.SetMinimumIterations"></a>

#### SetMinimumIterations(value: Union[str, int])

Set the value of “Minimum Iterations”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAFluentTwoWayCoupling.SetMinimumTimeSteps"></a>

#### SetMinimumTimeSteps(value: Union[str, int])

Set the value of “Minimum Time Steps”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAFluentTwoWayCoupling.SetMorsiAndAlexanderK1"></a>

#### SetMorsiAndAlexanderK1(value)

Set the current “Morsi And Alexander K1”. This is a shortcut to set the “Morsi And Alexander K1” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetMorsiAndAlexanderK1()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetMorsiAndAlexanderK1)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAFluentTwoWayCoupling.SetMorsiAndAlexanderK2"></a>

#### SetMorsiAndAlexanderK2(value)

Set the current “Morsi And Alexander K2”. This is a shortcut to set the “Morsi And Alexander K2” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetMorsiAndAlexanderK2()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetMorsiAndAlexanderK2)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAFluentTwoWayCoupling.SetMorsiAndAlexanderK3"></a>

#### SetMorsiAndAlexanderK3(value)

Set the current “Morsi And Alexander K3”. This is a shortcut to set the “Morsi And Alexander K3” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetMorsiAndAlexanderK3()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetMorsiAndAlexanderK3)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAFluentTwoWayCoupling.SetNumberOfSubsteps"></a>

#### SetNumberOfSubsteps(value: Union[str, int])

Set the value of “Number of Substeps”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAFluentTwoWayCoupling.SetNumberOfThreads"></a>

#### SetNumberOfThreads(value: Union[str, int])

Set the value of “Number of Threads”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAFluentTwoWayCoupling.SetOverwriteCfdUpdateDistance"></a>

#### SetOverwriteCfdUpdateDistance(value: bool)

Set the value of “Overwrite Cfd Update Distance”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAFluentTwoWayCoupling.SetPartIdIfValid"></a>

#### SetPartIdIfValid()

Subclasses should implement this method if it’s a Process with visualization

<a id="generated.RAFluentTwoWayCoupling.SetSolidsMaximumVolumeFractionTarget"></a>

#### SetSolidsMaximumVolumeFractionTarget(value: Union[str, float])

Set the value of “Solids Maximum Volume Fraction Target”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAFluentTwoWayCoupling.SetSubstepping"></a>

#### SetSubstepping(value: bool)

Set the value of “Substepping”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAFluentTwoWayCoupling.SetSyamlalObrienC1"></a>

#### SetSyamlalObrienC1(value)

Set the current “Syamlal Obrien C1”. This is a shortcut to set the “Syamlal Obrien C1” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetSyamlalObrienC1()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetSyamlalObrienC1)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAFluentTwoWayCoupling.SetSyamlalObrienD1"></a>

#### SetSyamlalObrienD1(value)

Set the current “Syamlal Obrien D1”. This is a shortcut to set the “Syamlal Obrien D1” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetSyamlalObrienD1()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetSyamlalObrienD1)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAFluentTwoWayCoupling.SetTorqueLaw"></a>

#### SetTorqueLaw(value)

Set the current “Torque Law”. This is a shortcut to set the “Torque Law” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetTorqueLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetTorqueLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAFluentTwoWayCoupling.SetUseDatInitialization"></a>

#### SetUseDatInitialization(value: bool)

Set the value of “Use Dat Initialization”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAFluentTwoWayCoupling.SetUseTurbulentDispersion"></a>

#### SetUseTurbulentDispersion(value: bool)

Set the value of “Use Turbulent Dispersion”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAFluentTwoWayCoupling.SetUseUserDefinedConstants"></a>

#### SetUseUserDefinedConstants(value)

Set the current “Use User Defined Constants”. This is a shortcut to set the “Use User Defined Constants” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetUseUserDefinedConstants()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetUseUserDefinedConstants)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAFluentTwoWayCoupling.SetUserCfdUpdateDistance"></a>

#### SetUserCfdUpdateDistance(value: Union[str, float], unit: Optional[str] = None)

Set the value of “User Cfd Update Distance”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RAFluentTwoWayCoupling.SetVirtualMassLaw"></a>

#### SetVirtualMassLaw(value)

Set the current “Virtual Mass Law”. This is a shortcut to set the “Virtual Mass Law” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetVirtualMassLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetVirtualMassLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAFluentTwoWayCoupling.SetVolumeFractionTarget"></a>

#### SetVolumeFractionTarget(value: float)

Deprecated: Use [`SetSolidsMaximumVolumeFractionTarget()`](#generated.RAFluentTwoWayCoupling.SetSolidsMaximumVolumeFractionTarget) instead.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAFluentTwoWayCoupling.SetupStoreFiles"></a>

#### SetupStoreFiles(cas_filename, case_config=None)

Copies CAS file to Rocky’s project folder and update Fluent info

<a id="generated.RAFluentTwoWayCoupling.StartFluent"></a>

#### StartFluent()

Starts Fluent application

<a id="generated.RAFluentTwoWayCoupling.UpdateFluentInfo"></a>

#### UpdateFluentInfo()

Updates the latest changes from Fluent setup.
