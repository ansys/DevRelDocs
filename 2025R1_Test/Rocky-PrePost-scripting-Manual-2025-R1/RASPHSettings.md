

# RASPHSettings

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RASPHSettings"></a>

### *class* RASPHSettings

Rocky PrePost Scripting wrapper for SPH Settings properties.

This wrapper corresponds to the “SPH” item on a project’s data tree. Access it from
the [`RAStudy`](RAStudy.md#generated.RAStudy) with:

```python
sph_settings = study.GetSphSettings()
sph_settings = study.GetElement('SPH')
```

**Methods:**

| [`AddCurve`](#generated.RASPHSettings.AddCurve)(curve_name, timesteps, values, unit)                                   | Add a curve to the element with a time-steps domain                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AddCustomCurve`](#generated.RASPHSettings.AddCustomCurve)(name[, curve_type, ...])                                   | Add a custom curve in the database. :param name:     The name of the curve to be set. :param curve_type:     The type of the custom curve to be added. :param output_unit:     The output unit, in which case the unit database will be queried for a quantity that makes sense. If None, the quantity is considered unknown. :param scope:     The scope to be set. :param sources:     A dict pointing the variable used to the curve association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set. |
| [`AddCustomProperty`](#generated.RASPHSettings.AddCustomProperty)(name[, property_type, ...])                          | Add a custom property to the database                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`AddGridFunction`](#generated.RASPHSettings.AddGridFunction)(grid_function_name, ...[, ...])                          | Adds a grid function to the grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`CreateCurveOutputVariable`](#generated.RASPHSettings.CreateCurveOutputVariable)(curve_name[, ...])                   | Used to create an output variable based on a curve which doesn't change at each new timestep (i.e.: a curve with a single value for each time).                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`CreateGridFunction`](#generated.RASPHSettings.CreateGridFunction)(values[, location, time_step])                     | Create a grid function from the given values, location and time-step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`CreateGridFunctionArrayOnCells`](#generated.RASPHSettings.CreateGridFunctionArrayOnCells)([time_step])               | Creates a numpy array with the number of elements based on the cells and returns it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`CreateGridFunctionStatisticOutputVariable`](#generated.RASPHSettings.CreateGridFunctionStatisticOutputVariable)(...) | Used to create an output variable based on a grid function statistic (i.e.: will get a grid function, compute its statistic based on statistic_operation and then based on the statistic values will apply the operation to get a single scalar).                                                                                                                                                                                                                                                                                                                                             |
| [`CreateTransientCurveOutputVariable`](#generated.RASPHSettings.CreateTransientCurveOutputVariable)(curve_name)        | Used to create an output variable based on a curve for which there's a completely new representation for each time step -- such as Power : Impact X Belt Width (i.e.: will get the curve multiple times based on the time range, compute a value for each time based on the operation, to convert the multiple curves into a single curve and then will apply the time_operation to get a single scalar from those values).                                                                                                                                                                   |
| [`DisableEulerianSolution`](#generated.RASPHSettings.DisableEulerianSolution)()                                        | Set the value of "Eulerian Solution" to False.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`EditCustomCurve`](#generated.RASPHSettings.EditCustomCurve)(edit_curve[, new_name, ...])                             | Edit a custom curve saved in the database. :param edit_curve:     The name of the curve to be edited. :param new_name:     The new name of the curve to be set. :param sources:     A dict pointing the variable used to the curve association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set.                                                                                                                                                                                                      |
| [`EditCustomProperty`](#generated.RASPHSettings.EditCustomProperty)(edit_property[, ...])                              | Edit a custom property saved in the database. :param edit_property:     The name of the property to be edited. :param new_name:     The new name of the property to be set. :param sources:     A dict pointing the variable used to the property association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set.                                                                                                                                                                                       |
| [`EnableEulerianSolution`](#generated.RASPHSettings.EnableEulerianSolution)()                                          | Set the value of "Eulerian Solution" to True.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetActivesArray`](#generated.RASPHSettings.GetActivesArray)([time_step])                                             | Get an array representing the cells' "active" status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetAvailableFluidMaterials`](#generated.RASPHSettings.GetAvailableFluidMaterials)()                                  | Get all available Fluid Materials.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetBackgroundPressure`](#generated.RASPHSettings.GetBackgroundPressure)()                                            | The Background Pressure parameter was removed from Rocky since 24R1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetBoundingBox`](#generated.RASPHSettings.GetBoundingBox)([unit, time_step])                                         | Get the element's bounding box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCS`](#generated.RASPHSettings.GetCS)()                                                                            | Get the value of "C S".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetCellAreaAsArray`](#generated.RASPHSettings.GetCellAreaAsArray)([time_step])                                       | Get an array containing the area of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetCellCenterAsArray`](#generated.RASPHSettings.GetCellCenterAsArray)([time_step])                                   | Get an array containing the center coordinates of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellDzAsArray`](#generated.RASPHSettings.GetCellDzAsArray)([time_step])                                           | Get an array containing the thickness (in Z) of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetCellFromIJK`](#generated.RASPHSettings.GetCellFromIJK)(i, j, k[, time_step])                                      | Creates a grid cell handle from the current I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetCellIJK`](#generated.RASPHSettings.GetCellIJK)(cell_handle[, time_step])                                          | Converts the given cell handle to it's I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetCellNumberOfVertices`](#generated.RASPHSettings.GetCellNumberOfVertices)(cell[, time_step])                       | Get an array containing the number of vertices of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellPointsAsFunction`](#generated.RASPHSettings.GetCellPointsAsFunction)([time_step])                             | Get a function for the points (vertices) of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetCellVolumeAsArray`](#generated.RASPHSettings.GetCellVolumeAsArray)([time_step])                                   | Get an array with the volume of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetClearyFactor`](#generated.RASPHSettings.GetClearyFactor)()                                                        | Get the value of "Cleary Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetCurve`](#generated.RASPHSettings.GetCurve)(curve_name[, simulation_name, ...])                                    | Override base class method to check for a request of a grid function statistic.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCurveNames`](#generated.RASPHSettings.GetCurveNames)([simulation_name])                                           | @param simulation_name: unicode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCurveNamesAssociation`](#generated.RASPHSettings.GetCurveNamesAssociation)([simulation_name])                     | Get this element's curve names.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetDensityDevMinus`](#generated.RASPHSettings.GetDensityDevMinus)()                                                  | Get the value of "Density Dev Minus".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetDensityDevPlus`](#generated.RASPHSettings.GetDensityDevPlus)()                                                    | Get the value of "Density Dev Plus".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetDensityRelativeErrorTolerance`](#generated.RASPHSettings.GetDensityRelativeErrorTolerance)()                      | Get the value of "Density Relative Error Tolerance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetDissFactor`](#generated.RASPHSettings.GetDissFactor)()                                                            | Get the value of "Diss Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetDistFactorNorm`](#generated.RASPHSettings.GetDistFactorNorm)()                                                    | Get the value of "Dist Factor Norm".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetDistFactorTang`](#generated.RASPHSettings.GetDistFactorTang)()                                                    | Get the value of "Dist Factor Tang".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetElementCurve`](#generated.RASPHSettings.GetElementCurve)(element_name, curve_name[, ...])                         | Return the curves for the given element and name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetEulerianSolutionEnabled`](#generated.RASPHSettings.GetEulerianSolutionEnabled)()                                  | Get the value of "Eulerian Solution Enabled".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetFluidMaterial`](#generated.RASPHSettings.GetFluidMaterial)()                                                      | Get the "Fluid Material".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetFreeSurfaceDivergenceLimit`](#generated.RASPHSettings.GetFreeSurfaceDivergenceLimit)()                            | Get the value of "Free Surface Divergence Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetGeometryQuantity`](#generated.RASPHSettings.GetGeometryQuantity)()                                                | Get the quantity corresponding to the grid's geometry.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetGeometryUnit`](#generated.RASPHSettings.GetGeometryUnit)()                                                        | Get the grid's geometry's unit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetGridFunction`](#generated.RASPHSettings.GetGridFunction)(grid_function_name[, ...])                               | Gets a grid function given its name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetGridFunctionNames`](#generated.RASPHSettings.GetGridFunctionNames)([translated, context])                         | Get a list of the available grid functions for this grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetKernelDistFactor`](#generated.RASPHSettings.GetKernelDistFactor)()                                                | Get the value of "Kernel Dist Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetKernelType`](#generated.RASPHSettings.GetKernelType)()                                                            | Get "Kernel Type" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetLimitTurbulentViscosity`](#generated.RASPHSettings.GetLimitTurbulentViscosity)()                                  | Get the value of "Limit Turbulent Viscosity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetMaximumExpectedVelocity`](#generated.RASPHSettings.GetMaximumExpectedVelocity)([unit])                            | Get the value of "Maximum Expected Velocity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetMaximumNumberOfIterations`](#generated.RASPHSettings.GetMaximumNumberOfIterations)()                              | Get the value of "Maximum Number of Iterations".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetMeshColoring`](#generated.RASPHSettings.GetMeshColoring)(window)                                                  | Get the RAMeshColoring related to the current object and a window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetMinDistFactor`](#generated.RASPHSettings.GetMinDistFactor)()                                                      | Get the value of "Min Dist Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetNegativePressureFactor`](#generated.RASPHSettings.GetNegativePressureFactor)()                                    | Get the value of "Negative Pressure Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetNumCellSteps`](#generated.RASPHSettings.GetNumCellSteps)()                                                        | Get the value of "Num Cell Steps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetNumberOfCells`](#generated.RASPHSettings.GetNumberOfCells)([time_step])                                           | Get the total number of cells.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetNumberOfNodes`](#generated.RASPHSettings.GetNumberOfNodes)([time_step])                                           | Get the total number of nodes (vertices).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetNumberOfSteps`](#generated.RASPHSettings.GetNumberOfSteps)()                                                      | Get the value of "Number of Steps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetNumpyCurve`](#generated.RASPHSettings.GetNumpyCurve)(curve_name[, unit, realization])                             | Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetOutputVariableValue`](#generated.RASPHSettings.GetOutputVariableValue)(variable_name)                             | Get the value of a previously-created output variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetPosCorrectionType`](#generated.RASPHSettings.GetPosCorrectionType)()                                              | Get "Pos Correction Type" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetPressureDeg`](#generated.RASPHSettings.GetPressureDeg)()                                                          | Get the value of "Pressure Deg".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetPressureUnderRelaxationFactor`](#generated.RASPHSettings.GetPressureUnderRelaxationFactor)()                      | Get the value of "Pressure Under Relaxation Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetShiftingFactor`](#generated.RASPHSettings.GetShiftingFactor)()                                                    | Get the value of "Shifting Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetSize`](#generated.RASPHSettings.GetSize)([unit])                                                                  | Get the value of "Size".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetSolver`](#generated.RASPHSettings.GetSolver)()                                                                    | Get "Solver Model" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetSolverModel`](#generated.RASPHSettings.GetSolverModel)()                                                          | Get "Solver Model" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetSoundSpeed`](#generated.RASPHSettings.GetSoundSpeed)([unit])                                                      | Get the value of "Sound Speed".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetStabilityDegree`](#generated.RASPHSettings.GetStabilityDegree)()                                                  | Get the value of "Stability Degree".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetStabilityNegFactor`](#generated.RASPHSettings.GetStabilityNegFactor)()                                            | Get the value of "Stability Neg Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetStabilityPosFactor`](#generated.RASPHSettings.GetStabilityPosFactor)()                                            | Get the value of "Stability Pos Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetStiffFactor`](#generated.RASPHSettings.GetStiffFactor)()                                                          | Get the value of "Stiff Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetSurfaceTensionBoundaryAngle`](#generated.RASPHSettings.GetSurfaceTensionBoundaryAngle)([unit])                    | Get the value of "Surface Tension Boundary Angle".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetSurfaceTensionBoundaryFraction`](#generated.RASPHSettings.GetSurfaceTensionBoundaryFraction)()                    | Get the value of "Surface Tension Boundary Fraction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetSurfaceTensionCoefficient`](#generated.RASPHSettings.GetSurfaceTensionCoefficient)([unit])                        | Get the value of "Surface Tension Coefficient".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetSurfaceTensionType`](#generated.RASPHSettings.GetSurfaceTensionType)()                                            | Get "Surface Tension Type" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetTimeSet`](#generated.RASPHSettings.GetTimeSet)()                                                                  | Get the list of time-steps associated to the grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetTimeStatistics`](#generated.RASPHSettings.GetTimeStatistics)()                                                    | Get the object responsible for handling time-statistics grid functions for this process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetTimeStep`](#generated.RASPHSettings.GetTimeStep)(time_step[, accept_global])                                      | Get the timestep corresponding to the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetTimestepFactor`](#generated.RASPHSettings.GetTimestepFactor)()                                                    | Get the value of "Timestep Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetTopologyShape`](#generated.RASPHSettings.GetTopologyShape)([time_step])                                           | Get the shape of the topology (similar to the shape of numpy arrays).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetTurbDistanceFraction`](#generated.RASPHSettings.GetTurbDistanceFraction)()                                        | Get the value of "Turb Distance Fraction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetTurbulenceType`](#generated.RASPHSettings.GetTurbulenceType)()                                                    | Get "Turbulence Type" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetTurbulentPrandtl`](#generated.RASPHSettings.GetTurbulentPrandtl)()                                                | Get the value of "Turbulent Prandtl".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetTurbulentViscosityMaximumRatio`](#generated.RASPHSettings.GetTurbulentViscosityMaximumRatio)()                    | Get the value of "Turbulent Viscosity Maximum Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetUpdateCoupledDensity`](#generated.RASPHSettings.GetUpdateCoupledDensity)()                                        | Get the value of "Update Coupled Density".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetUseParticlesNeighborsList`](#generated.RASPHSettings.GetUseParticlesNeighborsList)()                              | Get the value of "Use Particles Neighbors List".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetValidKernelTypeValues`](#generated.RASPHSettings.GetValidKernelTypeValues)()                                      | Get a list of all possible values for "Kernel Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetValidPosCorrectionTypeValues`](#generated.RASPHSettings.GetValidPosCorrectionTypeValues)()                        | Get a list of all possible values for "Pos Correction Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetValidSolverModelValues`](#generated.RASPHSettings.GetValidSolverModelValues)()                                    | Get a list of all possible values for "Solver Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetValidSurfaceTensionTypeValues`](#generated.RASPHSettings.GetValidSurfaceTensionTypeValues)()                      | Get a list of all possible values for "Surface Tension Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetValidTurbulenceTypeValues`](#generated.RASPHSettings.GetValidTurbulenceTypeValues)()                              | Get a list of all possible values for "Turbulence Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetValidViscosityTypeValues`](#generated.RASPHSettings.GetValidViscosityTypeValues)()                                | Get a list of all possible values for "Viscosity Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetViscosityType`](#generated.RASPHSettings.GetViscosityType)()                                                      | Get "Viscosity Type" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetXsphFactor`](#generated.RASPHSettings.GetXsphFactor)()                                                            | Get the value of "Xsph Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`HasGridFunction`](#generated.RASPHSettings.HasGridFunction)(grid_function_name)                                      | Whether the grid has the given grid function.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`IsCellActive`](#generated.RASPHSettings.IsCellActive)(i, j, k[, time_step])                                          | Checks if the given cell is active or not                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`IsEulerianSolutionEnabled`](#generated.RASPHSettings.IsEulerianSolutionEnabled)()                                    | Check if the "Eulerian Solution" is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`IterCellVertices`](#generated.RASPHSettings.IterCellVertices)(cell[, time_step])                                     | Iterate on the vertices of active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`IterCells`](#generated.RASPHSettings.IterCells)([time_step])                                                         | Iterate on the active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`Modified`](#generated.RASPHSettings.Modified)(\*args, \*\*kwargs)                                                    | Resets all the cache information after a change in the subject being tracked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RemoveCustomCurve`](#generated.RASPHSettings.RemoveCustomCurve)(name)                                                | Remove the curve from the database :param name:     The name of the curve to be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`RemoveCustomProperty`](#generated.RASPHSettings.RemoveCustomProperty)(name)                                          | Remove the property from the database :param name:     The name of the property to be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RemoveOutputVariable`](#generated.RASPHSettings.RemoveOutputVariable)(variable_name)                                 | Removes some output variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RemoveProcess`](#generated.RASPHSettings.RemoveProcess)()                                                            | Removes the process from the project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetBackgroundPressure`](#generated.RASPHSettings.SetBackgroundPressure)(value[, unit])                               | The Background Pressure parameter was removed from Rocky since 24R1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetCS`](#generated.RASPHSettings.SetCS)(value)                                                                       | Set the value of "C S".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetClearyFactor`](#generated.RASPHSettings.SetClearyFactor)(value)                                                   | Set the value of "Cleary Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetCurrentTimeStep`](#generated.RASPHSettings.SetCurrentTimeStep)(time_step)                                         | Sets the current time step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetDensityDevMinus`](#generated.RASPHSettings.SetDensityDevMinus)(value)                                             | Set the value of "Density Dev Minus".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetDensityDevPlus`](#generated.RASPHSettings.SetDensityDevPlus)(value)                                               | Set the value of "Density Dev Plus".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetDensityRelativeErrorTolerance`](#generated.RASPHSettings.SetDensityRelativeErrorTolerance)(value)                 | Set the value of "Density Relative Error Tolerance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetDissFactor`](#generated.RASPHSettings.SetDissFactor)(value)                                                       | Set the value of "Diss Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetDistFactorNorm`](#generated.RASPHSettings.SetDistFactorNorm)(value)                                               | Set the value of "Dist Factor Norm".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetDistFactorTang`](#generated.RASPHSettings.SetDistFactorTang)(value)                                               | Set the value of "Dist Factor Tang".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetEulerianSolutionEnabled`](#generated.RASPHSettings.SetEulerianSolutionEnabled)(value)                             | Set the value of "Eulerian Solution Enabled".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetFluidMaterial`](#generated.RASPHSettings.SetFluidMaterial)(value)                                                 | Set the "Fluid Material".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetFreeSurfaceDivergenceLimit`](#generated.RASPHSettings.SetFreeSurfaceDivergenceLimit)(value)                       | Set the value of "Free Surface Divergence Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetKernelDistFactor`](#generated.RASPHSettings.SetKernelDistFactor)(value)                                           | Set the value of "Kernel Dist Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetKernelType`](#generated.RASPHSettings.SetKernelType)(value)                                                       | Set the value of "Kernel Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetLimitTurbulentViscosity`](#generated.RASPHSettings.SetLimitTurbulentViscosity)(value)                             | Set the value of "Limit Turbulent Viscosity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetMaximumExpectedVelocity`](#generated.RASPHSettings.SetMaximumExpectedVelocity)(value[, unit])                     | Set the value of "Maximum Expected Velocity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetMaximumNumberOfIterations`](#generated.RASPHSettings.SetMaximumNumberOfIterations)(value)                         | Set the value of "Maximum Number of Iterations".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetMinDistFactor`](#generated.RASPHSettings.SetMinDistFactor)(value)                                                 | Set the value of "Min Dist Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetNegativePressureFactor`](#generated.RASPHSettings.SetNegativePressureFactor)(value)                               | Set the value of "Negative Pressure Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetNumCellSteps`](#generated.RASPHSettings.SetNumCellSteps)(value)                                                   | Set the value of "Num Cell Steps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetNumberOfSteps`](#generated.RASPHSettings.SetNumberOfSteps)(value)                                                 | Set the value of "Number of Steps".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetPosCorrectionType`](#generated.RASPHSettings.SetPosCorrectionType)(value)                                         | Set the value of "Pos Correction Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetPressureDeg`](#generated.RASPHSettings.SetPressureDeg)(value)                                                     | Set the value of "Pressure Deg".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetPressureUnderRelaxationFactor`](#generated.RASPHSettings.SetPressureUnderRelaxationFactor)(value)                 | Set the value of "Pressure Under Relaxation Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetShiftingFactor`](#generated.RASPHSettings.SetShiftingFactor)(value)                                               | Set the value of "Shifting Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetSize`](#generated.RASPHSettings.SetSize)(value[, unit])                                                           | Set the value of "Size".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetSolver`](#generated.RASPHSettings.SetSolver)(value)                                                               | Set the value of "Solver Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetSolverModel`](#generated.RASPHSettings.SetSolverModel)(value)                                                     | Set the value of "Solver Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetSoundSpeed`](#generated.RASPHSettings.SetSoundSpeed)(value[, unit])                                               | Set the value of "Sound Speed".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetStabilityDegree`](#generated.RASPHSettings.SetStabilityDegree)(value)                                             | Set the value of "Stability Degree".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetStabilityNegFactor`](#generated.RASPHSettings.SetStabilityNegFactor)(value)                                       | Set the value of "Stability Neg Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetStabilityPosFactor`](#generated.RASPHSettings.SetStabilityPosFactor)(value)                                       | Set the value of "Stability Pos Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetStiffFactor`](#generated.RASPHSettings.SetStiffFactor)(value)                                                     | Set the value of "Stiff Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetSurfaceTensionBoundaryAngle`](#generated.RASPHSettings.SetSurfaceTensionBoundaryAngle)(value[, unit])             | Set the value of "Surface Tension Boundary Angle".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetSurfaceTensionBoundaryFraction`](#generated.RASPHSettings.SetSurfaceTensionBoundaryFraction)(value)               | Set the value of "Surface Tension Boundary Fraction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetSurfaceTensionCoefficient`](#generated.RASPHSettings.SetSurfaceTensionCoefficient)(value[, unit])                 | Set the value of "Surface Tension Coefficient".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetSurfaceTensionType`](#generated.RASPHSettings.SetSurfaceTensionType)(value)                                       | Set the value of "Surface Tension Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetTimestepFactor`](#generated.RASPHSettings.SetTimestepFactor)(value)                                               | Set the value of "Timestep Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetTurbDistanceFraction`](#generated.RASPHSettings.SetTurbDistanceFraction)(value)                                   | Set the value of "Turb Distance Fraction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetTurbulenceType`](#generated.RASPHSettings.SetTurbulenceType)(value)                                               | Set the value of "Turbulence Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetTurbulentPrandtl`](#generated.RASPHSettings.SetTurbulentPrandtl)(value)                                           | Set the value of "Turbulent Prandtl".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetTurbulentViscosityMaximumRatio`](#generated.RASPHSettings.SetTurbulentViscosityMaximumRatio)(value)               | Set the value of "Turbulent Viscosity Maximum Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetUpdateCoupledDensity`](#generated.RASPHSettings.SetUpdateCoupledDensity)(value)                                   | Set the value of "Update Coupled Density".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetUseParticlesNeighborsList`](#generated.RASPHSettings.SetUseParticlesNeighborsList)(value)                         | Set the value of "Use Particles Neighbors List".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetViscosityType`](#generated.RASPHSettings.SetViscosityType)(value)                                                 | Set the value of "Viscosity Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetXsphFactor`](#generated.RASPHSettings.SetXsphFactor)(value)                                                       | Set the value of "Xsph Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

<a id="generated.RASPHSettings.AddCurve"></a>

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

<a id="generated.RASPHSettings.AddCustomCurve"></a>

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

<a id="generated.RASPHSettings.AddCustomProperty"></a>

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

<a id="generated.RASPHSettings.AddGridFunction"></a>

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

<a id="generated.RASPHSettings.CreateCurveOutputVariable"></a>

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

<a id="generated.RASPHSettings.CreateGridFunction"></a>

#### CreateGridFunction(values, location='cell', time_step='current')

Create a grid function from the given values, location and time-step.

* **Parameters:**
  * **values** (*list* *(**double* *) or* *numpy array*) – The values of the grid function to be added.
  * **time_step** – 

#### SEE ALSO
KAContextDependentElement.GetTimeStep

<a id="generated.RASPHSettings.CreateGridFunctionArrayOnCells"></a>

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

<a id="generated.RASPHSettings.CreateGridFunctionStatisticOutputVariable"></a>

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

<a id="generated.RASPHSettings.CreateTransientCurveOutputVariable"></a>

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

<a id="generated.RASPHSettings.DisableEulerianSolution"></a>

#### DisableEulerianSolution()

Set the value of “Eulerian Solution” to False.

<a id="generated.RASPHSettings.EditCustomCurve"></a>

#### EditCustomCurve(edit_curve: str, new_name: Optional[str] = None, sources: Optional[dict[str, str]] = None, expression: Optional[str] = None)

Edit a custom curve saved in the database.
:param edit_curve:

> The name of the curve to be edited.
* **Parameters:**
  * **new_name** – The new name of the curve to be set.
  * **sources** – A dict pointing the variable used to the curve association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RASPHSettings.EditCustomProperty"></a>

#### EditCustomProperty(edit_property: str, new_name: Optional[str] = None, sources: Optional[dict[str, str]] = None, expression: Optional[str] = None)

Edit a custom property saved in the database.
:param edit_property:

> The name of the property to be edited.
* **Parameters:**
  * **new_name** – The new name of the property to be set.
  * **sources** – A dict pointing the variable used to the property association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RASPHSettings.EnableEulerianSolution"></a>

#### EnableEulerianSolution()

Set the value of “Eulerian Solution” to True.

<a id="generated.RASPHSettings.GetActivesArray"></a>

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

<a id="generated.RASPHSettings.GetAvailableFluidMaterials"></a>

#### GetAvailableFluidMaterials()

Get all available Fluid Materials.

* **Return type:**
  List[[`RAFluidMaterial`](RAFluidMaterial.md#generated.RAFluidMaterial)]
  A list of [`RAFluidMaterial`](RAFluidMaterial.md#generated.RAFluidMaterial).

<a id="generated.RASPHSettings.GetBackgroundPressure"></a>

#### GetBackgroundPressure()

The Background Pressure parameter was removed from Rocky since 24R1.

<a id="generated.RASPHSettings.GetBoundingBox"></a>

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

<a id="generated.RASPHSettings.GetCS"></a>

#### GetCS()

Get the value of “C S”.

<a id="generated.RASPHSettings.GetCellAreaAsArray"></a>

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

<a id="generated.RASPHSettings.GetCellCenterAsArray"></a>

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

<a id="generated.RASPHSettings.GetCellDzAsArray"></a>

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

<a id="generated.RASPHSettings.GetCellFromIJK"></a>

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

<a id="generated.RASPHSettings.GetCellIJK"></a>

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

<a id="generated.RASPHSettings.GetCellNumberOfVertices"></a>

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

<a id="generated.RASPHSettings.GetCellPointsAsFunction"></a>

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

<a id="generated.RASPHSettings.GetCellVolumeAsArray"></a>

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

<a id="generated.RASPHSettings.GetClearyFactor"></a>

#### GetClearyFactor()

Get the value of “Cleary Factor”.

<a id="generated.RASPHSettings.GetCurve"></a>

#### GetCurve(curve_name, simulation_name=None, realization=None, time_step=None)

Override base class method to check for a request of a grid function statistic.

<a id="generated.RASPHSettings.GetCurveNames"></a>

#### GetCurveNames(simulation_name=None)

@param simulation_name: unicode
: An optional parameter for defining the simulation to get the curve from.

* **Returns:**
  list(str)
  The list of curve names

<a id="generated.RASPHSettings.GetCurveNamesAssociation"></a>

#### GetCurveNamesAssociation(simulation_name=None)

Get this element’s curve names.

* **Parameters:**
  **simulation_name** (*unicode*) – The name of the simulation to query the curve names
  If None is given the current element simulation will be used
* **Return type:**
  dict(unicode, ISemanticAssociation)
* **Returns:**
  The curve names for this element in the given simulation name

<a id="generated.RASPHSettings.GetDensityDevMinus"></a>

#### GetDensityDevMinus()

Get the value of “Density Dev Minus”.

<a id="generated.RASPHSettings.GetDensityDevPlus"></a>

#### GetDensityDevPlus()

Get the value of “Density Dev Plus”.

<a id="generated.RASPHSettings.GetDensityRelativeErrorTolerance"></a>

#### GetDensityRelativeErrorTolerance()

Get the value of “Density Relative Error Tolerance”.

<a id="generated.RASPHSettings.GetDissFactor"></a>

#### GetDissFactor()

Get the value of “Diss Factor”.

<a id="generated.RASPHSettings.GetDistFactorNorm"></a>

#### GetDistFactorNorm()

Get the value of “Dist Factor Norm”.

<a id="generated.RASPHSettings.GetDistFactorTang"></a>

#### GetDistFactorTang()

Get the value of “Dist Factor Tang”.

<a id="generated.RASPHSettings.GetElementCurve"></a>

#### GetElementCurve(element_name, curve_name, simulation_name=None, realization=None, time_step=None)

Return the curves for the given element and name.

* **Parameters:**
  * **element_name** (*unicode*) – The name of the element
  * **curve_name** (*unicode*) – The name of the curve
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the curve from.
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **time_step** (*TimeStep*) – For transient curves a time-step must be given.

<a id="generated.RASPHSettings.GetEulerianSolutionEnabled"></a>

#### GetEulerianSolutionEnabled()

Get the value of “Eulerian Solution Enabled”.

<a id="generated.RASPHSettings.GetFluidMaterial"></a>

#### GetFluidMaterial()

Get the “Fluid Material”.

* **Return type:**
  [`RAFluidMaterial`](RAFluidMaterial.md#generated.RAFluidMaterial)

<a id="generated.RASPHSettings.GetFreeSurfaceDivergenceLimit"></a>

#### GetFreeSurfaceDivergenceLimit()

Get the value of “Free Surface Divergence Limit”.

<a id="generated.RASPHSettings.GetGeometryQuantity"></a>

#### GetGeometryQuantity()

Get the quantity corresponding to the grid’s geometry.

* **Return type:**
  IQuantity
* **Returns:**
  The grid geometry quantity

<a id="generated.RASPHSettings.GetGeometryUnit"></a>

#### GetGeometryUnit()

Get the grid’s geometry’s unit.

* **Return type:**
  unicode
* **Returns:**
  The unit for the grid geometry

<a id="generated.RASPHSettings.GetGridFunction"></a>

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

<a id="generated.RASPHSettings.GetGridFunctionNames"></a>

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

<a id="generated.RASPHSettings.GetKernelDistFactor"></a>

#### GetKernelDistFactor()

Get the value of “Kernel Dist Factor”.

<a id="generated.RASPHSettings.GetKernelType"></a>

#### GetKernelType()

Get “Kernel Type” as a string.

* **Returns:**
  The returned value will be one of [‘cubic’, ‘quintic’, ‘wendland’].

<a id="generated.RASPHSettings.GetLimitTurbulentViscosity"></a>

#### GetLimitTurbulentViscosity()

Get the value of “Limit Turbulent Viscosity”.

<a id="generated.RASPHSettings.GetMaximumExpectedVelocity"></a>

#### GetMaximumExpectedVelocity(unit: Optional[str] = None)

Get the value of “Maximum Expected Velocity”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s”.

<a id="generated.RASPHSettings.GetMaximumNumberOfIterations"></a>

#### GetMaximumNumberOfIterations()

Get the value of “Maximum Number of Iterations”.

<a id="generated.RASPHSettings.GetMeshColoring"></a>

#### GetMeshColoring(window: str | type['KAWorkspaceWindow'])

Get the RAMeshColoring related to the current object and a window.

* **Parameters:**
  **window** – The window that the coloring is acting. The window must be a str of the name of the
  window or a KAWorkspaceWindow.
* **Raises:**
  **RockyApiError** – If window is not a str or KAWorkspaceWindow. Additionally, raises an error if no window
  is found or no coloring for the given item exists.

<a id="generated.RASPHSettings.GetMinDistFactor"></a>

#### GetMinDistFactor()

Get the value of “Min Dist Factor”.

<a id="generated.RASPHSettings.GetNegativePressureFactor"></a>

#### GetNegativePressureFactor()

Get the value of “Negative Pressure Factor”.

<a id="generated.RASPHSettings.GetNumCellSteps"></a>

#### GetNumCellSteps()

Get the value of “Num Cell Steps”.

<a id="generated.RASPHSettings.GetNumberOfCells"></a>

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

<a id="generated.RASPHSettings.GetNumberOfNodes"></a>

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

<a id="generated.RASPHSettings.GetNumberOfSteps"></a>

#### GetNumberOfSteps()

Get the value of “Number of Steps”.

<a id="generated.RASPHSettings.GetNumpyCurve"></a>

#### GetNumpyCurve(curve_name, unit=None, realization=None)

Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.

<a id="generated.RASPHSettings.GetOutputVariableValue"></a>

#### GetOutputVariableValue(variable_name: str)

Get the value of a previously-created output variable.

* **Parameters:**
  **variable_name** (*unicode*) – The variable name whose value we want.
* **Returns:**
  Returns a scalar with the value and unit for the given variable_name or None if no
  variable was found with the given name or if it couldn’t be computed.

<a id="generated.RASPHSettings.GetPosCorrectionType"></a>

#### GetPosCorrectionType()

Get “Pos Correction Type” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘xsph’, ‘shift’].

<a id="generated.RASPHSettings.GetPressureDeg"></a>

#### GetPressureDeg()

Get the value of “Pressure Deg”.

<a id="generated.RASPHSettings.GetPressureUnderRelaxationFactor"></a>

#### GetPressureUnderRelaxationFactor()

Get the value of “Pressure Under Relaxation Factor”.

<a id="generated.RASPHSettings.GetShiftingFactor"></a>

#### GetShiftingFactor()

Get the value of “Shifting Factor”.

<a id="generated.RASPHSettings.GetSize"></a>

#### GetSize(unit: Optional[str] = None)

Get the value of “Size”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RASPHSettings.GetSolver"></a>

#### GetSolver()

Get “Solver Model” as a string.

* **Returns:**
  The returned value will be one of [‘WCSPH’, ‘IISPH’].

<a id="generated.RASPHSettings.GetSolverModel"></a>

#### GetSolverModel()

Get “Solver Model” as a string.

* **Returns:**
  The returned value will be one of [‘WCSPH’, ‘IISPH’, ‘DFSPH’].

<a id="generated.RASPHSettings.GetSoundSpeed"></a>

#### GetSoundSpeed(unit: Optional[str] = None)

Get the value of “Sound Speed”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s”.

<a id="generated.RASPHSettings.GetStabilityDegree"></a>

#### GetStabilityDegree()

Get the value of “Stability Degree”.

<a id="generated.RASPHSettings.GetStabilityNegFactor"></a>

#### GetStabilityNegFactor()

Get the value of “Stability Neg Factor”.

<a id="generated.RASPHSettings.GetStabilityPosFactor"></a>

#### GetStabilityPosFactor()

Get the value of “Stability Pos Factor”.

<a id="generated.RASPHSettings.GetStiffFactor"></a>

#### GetStiffFactor()

Get the value of “Stiff Factor”.

<a id="generated.RASPHSettings.GetSurfaceTensionBoundaryAngle"></a>

#### GetSurfaceTensionBoundaryAngle(unit: Optional[str] = None)

Get the value of “Surface Tension Boundary Angle”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “dega”.

<a id="generated.RASPHSettings.GetSurfaceTensionBoundaryFraction"></a>

#### GetSurfaceTensionBoundaryFraction()

Get the value of “Surface Tension Boundary Fraction”.

<a id="generated.RASPHSettings.GetSurfaceTensionCoefficient"></a>

#### GetSurfaceTensionCoefficient(unit: Optional[str] = None)

Get the value of “Surface Tension Coefficient”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “N/m”.

<a id="generated.RASPHSettings.GetSurfaceTensionType"></a>

#### GetSurfaceTensionType()

Get “Surface Tension Type” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘CSF’, ‘CSS’, ‘custom’, ‘pairwise_potential’].

<a id="generated.RASPHSettings.GetTimeSet"></a>

#### GetTimeSet()

Get the list of time-steps associated to the grid.

* **Return type:**
  ITimeSet
* **Returns:**
  The list of time-steps associated to the grid

<a id="generated.RASPHSettings.GetTimeStatistics"></a>

#### GetTimeStatistics()

Get the object responsible for handling time-statistics grid functions for this process.
This call will return None if the process doesn’t support time statistics.

<a id="generated.RASPHSettings.GetTimeStep"></a>

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

<a id="generated.RASPHSettings.GetTimestepFactor"></a>

#### GetTimestepFactor()

Get the value of “Timestep Factor”.

<a id="generated.RASPHSettings.GetTopologyShape"></a>

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

<a id="generated.RASPHSettings.GetTurbDistanceFraction"></a>

#### GetTurbDistanceFraction()

Get the value of “Turb Distance Fraction”.

<a id="generated.RASPHSettings.GetTurbulenceType"></a>

#### GetTurbulenceType()

Get “Turbulence Type” as a string.

* **Returns:**
  The returned value will be one of [‘laminar’, ‘les’].

<a id="generated.RASPHSettings.GetTurbulentPrandtl"></a>

#### GetTurbulentPrandtl()

Get the value of “Turbulent Prandtl”.

<a id="generated.RASPHSettings.GetTurbulentViscosityMaximumRatio"></a>

#### GetTurbulentViscosityMaximumRatio()

Get the value of “Turbulent Viscosity Maximum Ratio”.

<a id="generated.RASPHSettings.GetUpdateCoupledDensity"></a>

#### GetUpdateCoupledDensity()

Get the value of “Update Coupled Density”.

<a id="generated.RASPHSettings.GetUseParticlesNeighborsList"></a>

#### GetUseParticlesNeighborsList()

Get the value of “Use Particles Neighbors List”.

<a id="generated.RASPHSettings.GetValidKernelTypeValues"></a>

#### GetValidKernelTypeValues()

Get a list of all possible values for “Kernel Type”.

* **Returns:**
  The returned list is [‘cubic’, ‘quintic’, ‘wendland’].

<a id="generated.RASPHSettings.GetValidPosCorrectionTypeValues"></a>

#### GetValidPosCorrectionTypeValues()

Get a list of all possible values for “Pos Correction Type”.

* **Returns:**
  The returned list is [‘none’, ‘xsph’, ‘shift’].

<a id="generated.RASPHSettings.GetValidSolverModelValues"></a>

#### GetValidSolverModelValues()

Get a list of all possible values for “Solver Model”.

* **Returns:**
  The returned list is [‘WCSPH’, ‘IISPH’, ‘DFSPH’].

<a id="generated.RASPHSettings.GetValidSurfaceTensionTypeValues"></a>

#### GetValidSurfaceTensionTypeValues()

Get a list of all possible values for “Surface Tension Type”.

* **Returns:**
  The returned list is [‘none’, ‘CSF’, ‘CSS’, ‘custom’, ‘pairwise_potential’].

<a id="generated.RASPHSettings.GetValidTurbulenceTypeValues"></a>

#### GetValidTurbulenceTypeValues()

Get a list of all possible values for “Turbulence Type”.

* **Returns:**
  The returned list is [‘laminar’, ‘les’].

<a id="generated.RASPHSettings.GetValidViscosityTypeValues"></a>

#### GetValidViscosityTypeValues()

Get a list of all possible values for “Viscosity Type”.

* **Returns:**
  The returned list is [‘cleary’, ‘morris’, ‘custom’].

<a id="generated.RASPHSettings.GetViscosityType"></a>

#### GetViscosityType()

Get “Viscosity Type” as a string.

* **Returns:**
  The returned value will be one of [‘cleary’, ‘morris’, ‘custom’].

<a id="generated.RASPHSettings.GetXsphFactor"></a>

#### GetXsphFactor()

Get the value of “Xsph Factor”.

<a id="generated.RASPHSettings.HasGridFunction"></a>

#### HasGridFunction(grid_function_name)

Whether the grid has the given grid function.

* **Parameters:**
  **grid_function_name** (*unicode*) – The name of the grid function to be checked.
* **Return type:**
  bool
* **Returns:**
  Returns True if the grid function exists and False otherwise.

<a id="generated.RASPHSettings.IsCellActive"></a>

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

<a id="generated.RASPHSettings.IsEulerianSolutionEnabled"></a>

#### IsEulerianSolutionEnabled()

Check if the “Eulerian Solution” is enabled.

<a id="generated.RASPHSettings.IterCellVertices"></a>

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

<a id="generated.RASPHSettings.IterCells"></a>

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

<a id="generated.RASPHSettings.Modified"></a>

#### Modified(\*args, \*\*kwargs)

Resets all the cache information after a change in the subject being tracked.

<a id="generated.RASPHSettings.RemoveCustomCurve"></a>

#### RemoveCustomCurve(name: str)

Remove the curve from the database
:param name:

> The name of the curve to be removed.

<a id="generated.RASPHSettings.RemoveCustomProperty"></a>

#### RemoveCustomProperty(name: str)

Remove the property from the database
:param name:

> The name of the property to be removed.

<a id="generated.RASPHSettings.RemoveOutputVariable"></a>

#### RemoveOutputVariable(variable_name: str)

Removes some output variable.

* **Parameters:**
  **variable_name** – The name of the variable to be removed.

<a id="generated.RASPHSettings.RemoveProcess"></a>

#### RemoveProcess()

Removes the process from the project.

<a id="generated.RASPHSettings.SetBackgroundPressure"></a>

#### SetBackgroundPressure(value: str | float, unit: str | None = None)

The Background Pressure parameter was removed from Rocky since 24R1.

<a id="generated.RASPHSettings.SetCS"></a>

#### SetCS(value: Union[str, float])

Set the value of “C S”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetClearyFactor"></a>

#### SetClearyFactor(value: Union[str, float])

Set the value of “Cleary Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetCurrentTimeStep"></a>

#### SetCurrentTimeStep(time_step)

Sets the current time step.

* **Parameters:**
  **time_step** (*ITimeStep*) – The time step to be considered the ‘current’ time step.

<a id="generated.RASPHSettings.SetDensityDevMinus"></a>

#### SetDensityDevMinus(value: Union[str, float])

Set the value of “Density Dev Minus”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetDensityDevPlus"></a>

#### SetDensityDevPlus(value: Union[str, float])

Set the value of “Density Dev Plus”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetDensityRelativeErrorTolerance"></a>

#### SetDensityRelativeErrorTolerance(value: Union[str, float])

Set the value of “Density Relative Error Tolerance”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetDissFactor"></a>

#### SetDissFactor(value: Union[str, float])

Set the value of “Diss Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetDistFactorNorm"></a>

#### SetDistFactorNorm(value: Union[str, float])

Set the value of “Dist Factor Norm”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetDistFactorTang"></a>

#### SetDistFactorTang(value: Union[str, float])

Set the value of “Dist Factor Tang”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetEulerianSolutionEnabled"></a>

#### SetEulerianSolutionEnabled(value: bool)

Set the value of “Eulerian Solution Enabled”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASPHSettings.SetFluidMaterial"></a>

#### SetFluidMaterial(value)

Set the “Fluid Material”.

:param unicode, [`RAFluidMaterial`](RAFluidMaterial.md#generated.RAFluidMaterial) value:
: Either the API object wrapping the desired entity or its name.

<a id="generated.RASPHSettings.SetFreeSurfaceDivergenceLimit"></a>

#### SetFreeSurfaceDivergenceLimit(value: Union[str, float])

Set the value of “Free Surface Divergence Limit”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetKernelDistFactor"></a>

#### SetKernelDistFactor(value: Union[str, float])

Set the value of “Kernel Dist Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetKernelType"></a>

#### SetKernelType(value: str)

Set the value of “Kernel Type”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘cubic’, ‘quintic’, ‘wendland’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Kernel Type” option.

<a id="generated.RASPHSettings.SetLimitTurbulentViscosity"></a>

#### SetLimitTurbulentViscosity(value: bool)

Set the value of “Limit Turbulent Viscosity”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASPHSettings.SetMaximumExpectedVelocity"></a>

#### SetMaximumExpectedVelocity(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Maximum Expected Velocity”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s”.

<a id="generated.RASPHSettings.SetMaximumNumberOfIterations"></a>

#### SetMaximumNumberOfIterations(value: Union[str, int])

Set the value of “Maximum Number of Iterations”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RASPHSettings.SetMinDistFactor"></a>

#### SetMinDistFactor(value: Union[str, float])

Set the value of “Min Dist Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetNegativePressureFactor"></a>

#### SetNegativePressureFactor(value: Union[str, float])

Set the value of “Negative Pressure Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetNumCellSteps"></a>

#### SetNumCellSteps(value: Union[str, int])

Set the value of “Num Cell Steps”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RASPHSettings.SetNumberOfSteps"></a>

#### SetNumberOfSteps(value: Union[str, int])

Set the value of “Number of Steps”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RASPHSettings.SetPosCorrectionType"></a>

#### SetPosCorrectionType(value: str)

Set the value of “Pos Correction Type”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘none’, ‘xsph’, ‘shift’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Pos Correction Type” option.

<a id="generated.RASPHSettings.SetPressureDeg"></a>

#### SetPressureDeg(value: Union[str, int])

Set the value of “Pressure Deg”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RASPHSettings.SetPressureUnderRelaxationFactor"></a>

#### SetPressureUnderRelaxationFactor(value: Union[str, float])

Set the value of “Pressure Under Relaxation Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetShiftingFactor"></a>

#### SetShiftingFactor(value: Union[str, float])

Set the value of “Shifting Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetSize"></a>

#### SetSize(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Size”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RASPHSettings.SetSolver"></a>

#### SetSolver(value: str)

Set the value of “Solver Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘WCSPH’, ‘IISPH’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Solver Model” option.

<a id="generated.RASPHSettings.SetSolverModel"></a>

#### SetSolverModel(value: str)

Set the value of “Solver Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘WCSPH’, ‘IISPH’, ‘DFSPH’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Solver Model” option.

<a id="generated.RASPHSettings.SetSoundSpeed"></a>

#### SetSoundSpeed(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Sound Speed”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s”.

<a id="generated.RASPHSettings.SetStabilityDegree"></a>

#### SetStabilityDegree(value: Union[str, int])

Set the value of “Stability Degree”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RASPHSettings.SetStabilityNegFactor"></a>

#### SetStabilityNegFactor(value: Union[str, float])

Set the value of “Stability Neg Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetStabilityPosFactor"></a>

#### SetStabilityPosFactor(value: Union[str, float])

Set the value of “Stability Pos Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetStiffFactor"></a>

#### SetStiffFactor(value: Union[str, float])

Set the value of “Stiff Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetSurfaceTensionBoundaryAngle"></a>

#### SetSurfaceTensionBoundaryAngle(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Surface Tension Boundary Angle”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “dega”.

<a id="generated.RASPHSettings.SetSurfaceTensionBoundaryFraction"></a>

#### SetSurfaceTensionBoundaryFraction(value: Union[str, float])

Set the value of “Surface Tension Boundary Fraction”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetSurfaceTensionCoefficient"></a>

#### SetSurfaceTensionCoefficient(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Surface Tension Coefficient”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “N/m”.

<a id="generated.RASPHSettings.SetSurfaceTensionType"></a>

#### SetSurfaceTensionType(value: str)

Set the value of “Surface Tension Type”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘none’, ‘CSF’, ‘CSS’, ‘custom’, ‘pairwise_potential’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Surface Tension Type” option.

<a id="generated.RASPHSettings.SetTimestepFactor"></a>

#### SetTimestepFactor(value: Union[str, float])

Set the value of “Timestep Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetTurbDistanceFraction"></a>

#### SetTurbDistanceFraction(value: Union[str, float])

Set the value of “Turb Distance Fraction”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetTurbulenceType"></a>

#### SetTurbulenceType(value: str)

Set the value of “Turbulence Type”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘laminar’, ‘les’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Turbulence Type” option.

<a id="generated.RASPHSettings.SetTurbulentPrandtl"></a>

#### SetTurbulentPrandtl(value: Union[str, float])

Set the value of “Turbulent Prandtl”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetTurbulentViscosityMaximumRatio"></a>

#### SetTurbulentViscosityMaximumRatio(value: Union[str, float])

Set the value of “Turbulent Viscosity Maximum Ratio”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASPHSettings.SetUpdateCoupledDensity"></a>

#### SetUpdateCoupledDensity(value: bool)

Set the value of “Update Coupled Density”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASPHSettings.SetUseParticlesNeighborsList"></a>

#### SetUseParticlesNeighborsList(value: bool)

Set the value of “Use Particles Neighbors List”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASPHSettings.SetViscosityType"></a>

#### SetViscosityType(value: str)

Set the value of “Viscosity Type”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘cleary’, ‘morris’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Viscosity Type” option.

<a id="generated.RASPHSettings.SetXsphFactor"></a>

#### SetXsphFactor(value: Union[str, float])

Set the value of “Xsph Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.
