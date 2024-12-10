# RAConstantOneWayCoupling

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAConstantOneWayCoupling"></a>

### *class* RAConstantOneWayCoupling

Rocky PrePost Scripting wrapper for One-Way Constant CFD coupling properties.

This wrapper can be accessed via the project’s [`RACFDCoupling`](RACFDCoupling.md#generated.RACFDCoupling):

```python
cfd_coupling = study.GetCFDCoupling()
cfd_coupling.SetupOneWayConstant()
constant_one_way = cfd_coupling.GetCouplingProcess()
```

**Methods:**

| [`AddCurve`](#generated.RAConstantOneWayCoupling.AddCurve)(curve_name, timesteps, values, unit)                                   | Add a curve to the element with a time-steps domain                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-----------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AddCustomCurve`](#generated.RAConstantOneWayCoupling.AddCustomCurve)(name[, curve_type, ...])                                   | Add a custom curve in the database. :param name:     The name of the curve to be set. :param curve_type:     The type of the custom curve to be added. :param output_unit:     The output unit, in which case the unit database will be queried for a quantity that makes sense. If None, the quantity is considered unknown. :param scope:     The scope to be set. :param sources:     A dict pointing the variable used to the curve association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set. |
| [`AddCustomProperty`](#generated.RAConstantOneWayCoupling.AddCustomProperty)(name[, property_type, ...])                          | Add a custom property to the database                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`AddGridFunction`](#generated.RAConstantOneWayCoupling.AddGridFunction)(grid_function_name, ...[, ...])                          | Adds a grid function to the grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`CreateCurveOutputVariable`](#generated.RAConstantOneWayCoupling.CreateCurveOutputVariable)(curve_name[, ...])                   | Used to create an output variable based on a curve which doesn't change at each new timestep (i.e.: a curve with a single value for each time).                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`CreateGridFunction`](#generated.RAConstantOneWayCoupling.CreateGridFunction)(values[, location, time_step])                     | Create a grid function from the given values, location and time-step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`CreateGridFunctionArrayOnCells`](#generated.RAConstantOneWayCoupling.CreateGridFunctionArrayOnCells)([time_step])               | Creates a numpy array with the number of elements based on the cells and returns it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`CreateGridFunctionStatisticOutputVariable`](#generated.RAConstantOneWayCoupling.CreateGridFunctionStatisticOutputVariable)(...) | Used to create an output variable based on a grid function statistic (i.e.: will get a grid function, compute its statistic based on statistic_operation and then based on the statistic values will apply the operation to get a single scalar).                                                                                                                                                                                                                                                                                                                                             |
| [`CreateTransientCurveOutputVariable`](#generated.RAConstantOneWayCoupling.CreateTransientCurveOutputVariable)(curve_name)        | Used to create an output variable based on a curve for which there's a completely new representation for each time step -- such as Power : Impact X Belt Width (i.e.: will get the curve multiple times based on the time range, compute a value for each time based on the operation, to convert the multiple curves into a single curve and then will apply the time_operation to get a single scalar from those values).                                                                                                                                                                   |
| [`DisableTurbulentDispersion`](#generated.RAConstantOneWayCoupling.DisableTurbulentDispersion)()                                  | Set the value of "Turbulent Dispersion" to False.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`EditCustomCurve`](#generated.RAConstantOneWayCoupling.EditCustomCurve)(edit_curve[, new_name, ...])                             | Edit a custom curve saved in the database. :param edit_curve:     The name of the curve to be edited. :param new_name:     The new name of the curve to be set. :param sources:     A dict pointing the variable used to the curve association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set.                                                                                                                                                                                                      |
| [`EditCustomProperty`](#generated.RAConstantOneWayCoupling.EditCustomProperty)(edit_property[, ...])                              | Edit a custom property saved in the database. :param edit_property:     The name of the property to be edited. :param new_name:     The new name of the property to be set. :param sources:     A dict pointing the variable used to the property association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set.                                                                                                                                                                                       |
| [`EnableTurbulentDispersion`](#generated.RAConstantOneWayCoupling.EnableTurbulentDispersion)()                                    | Set the value of "Turbulent Dispersion" to True.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetActivesArray`](#generated.RAConstantOneWayCoupling.GetActivesArray)([time_step])                                             | Get an array representing the cells' "active" status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetBoundingBox`](#generated.RAConstantOneWayCoupling.GetBoundingBox)([unit, time_step])                                         | Get the element's bounding box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCFDParametersList`](#generated.RAConstantOneWayCoupling.GetCFDParametersList)()                                              | Get the list of per-Particle CFD parameter sets.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetCellAreaAsArray`](#generated.RAConstantOneWayCoupling.GetCellAreaAsArray)([time_step])                                       | Get an array containing the area of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetCellCenterAsArray`](#generated.RAConstantOneWayCoupling.GetCellCenterAsArray)([time_step])                                   | Get an array containing the center coordinates of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellDzAsArray`](#generated.RAConstantOneWayCoupling.GetCellDzAsArray)([time_step])                                           | Get an array containing the thickness (in Z) of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetCellFromIJK`](#generated.RAConstantOneWayCoupling.GetCellFromIJK)(i, j, k[, time_step])                                      | Creates a grid cell handle from the current I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetCellIJK`](#generated.RAConstantOneWayCoupling.GetCellIJK)(cell_handle[, time_step])                                          | Converts the given cell handle to it's I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetCellNumberOfVertices`](#generated.RAConstantOneWayCoupling.GetCellNumberOfVertices)(cell[, time_step])                       | Get an array containing the number of vertices of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellPointsAsFunction`](#generated.RAConstantOneWayCoupling.GetCellPointsAsFunction)([time_step])                             | Get a function for the points (vertices) of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetCellVolumeAsArray`](#generated.RAConstantOneWayCoupling.GetCellVolumeAsArray)([time_step])                                   | Get an array with the volume of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetConvectiveHeatTransferLaw`](#generated.RAConstantOneWayCoupling.GetConvectiveHeatTransferLaw)()                              | Get the current "Convective Heat Transfer Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCurve`](#generated.RAConstantOneWayCoupling.GetCurve)(curve_name[, simulation_name, ...])                                    | Override base class method to check for a request of a grid function statistic.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCurveNames`](#generated.RAConstantOneWayCoupling.GetCurveNames)([simulation_name])                                           | @param simulation_name: unicode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCurveNamesAssociation`](#generated.RAConstantOneWayCoupling.GetCurveNamesAssociation)([simulation_name])                     | Get this element's curve names.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetDensity`](#generated.RAConstantOneWayCoupling.GetDensity)([unit])                                                            | Get the value of "Density".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetDragLaw`](#generated.RAConstantOneWayCoupling.GetDragLaw)()                                                                  | Get the current "Drag Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetElementCurve`](#generated.RAConstantOneWayCoupling.GetElementCurve)(element_name, curve_name[, ...])                         | Return the curves for the given element and name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetGeometryQuantity`](#generated.RAConstantOneWayCoupling.GetGeometryQuantity)()                                                | Get the quantity corresponding to the grid's geometry.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetGeometryUnit`](#generated.RAConstantOneWayCoupling.GetGeometryUnit)()                                                        | Get the grid's geometry's unit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetGridFunction`](#generated.RAConstantOneWayCoupling.GetGridFunction)(grid_function_name[, ...])                               | Gets a grid function given its name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetGridFunctionNames`](#generated.RAConstantOneWayCoupling.GetGridFunctionNames)([translated, context])                         | Get a list of the available grid functions for this grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetLiftLaw`](#generated.RAConstantOneWayCoupling.GetLiftLaw)()                                                                  | Get the current "Lift Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetMeshColoring`](#generated.RAConstantOneWayCoupling.GetMeshColoring)(window)                                                  | Get the RAMeshColoring related to the current object and a window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetMorsiAndAlexanderK1`](#generated.RAConstantOneWayCoupling.GetMorsiAndAlexanderK1)()                                          | Get the current "Morsi And Alexander K1".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetMorsiAndAlexanderK2`](#generated.RAConstantOneWayCoupling.GetMorsiAndAlexanderK2)()                                          | Get the current "Morsi And Alexander K2".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetMorsiAndAlexanderK3`](#generated.RAConstantOneWayCoupling.GetMorsiAndAlexanderK3)()                                          | Get the current "Morsi And Alexander K3".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetNumberOfCells`](#generated.RAConstantOneWayCoupling.GetNumberOfCells)([time_step])                                           | Get the total number of cells.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetNumberOfNodes`](#generated.RAConstantOneWayCoupling.GetNumberOfNodes)([time_step])                                           | Get the total number of nodes (vertices).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetNumpyCurve`](#generated.RAConstantOneWayCoupling.GetNumpyCurve)(curve_name[, unit, realization])                             | Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetOutputVariableValue`](#generated.RAConstantOneWayCoupling.GetOutputVariableValue)(variable_name)                             | Get the value of a previously-created output variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetSpecificHeat`](#generated.RAConstantOneWayCoupling.GetSpecificHeat)([unit])                                                  | Get the value of "Specific Heat".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetStartTime`](#generated.RAConstantOneWayCoupling.GetStartTime)([unit])                                                        | Get the value of "Start Time".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetSyamlalObrienC1`](#generated.RAConstantOneWayCoupling.GetSyamlalObrienC1)()                                                  | Get the current "Syamlal Obrien C1".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetSyamlalObrienD1`](#generated.RAConstantOneWayCoupling.GetSyamlalObrienD1)()                                                  | Get the current "Syamlal Obrien D1".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetTemperature`](#generated.RAConstantOneWayCoupling.GetTemperature)([unit])                                                    | Get the value of "Temperature".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetThermalConductivity`](#generated.RAConstantOneWayCoupling.GetThermalConductivity)([unit])                                    | Get the value of "Thermal Conductivity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetTimeSet`](#generated.RAConstantOneWayCoupling.GetTimeSet)()                                                                  | Get the list of time-steps associated to the grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetTimeStatistics`](#generated.RAConstantOneWayCoupling.GetTimeStatistics)()                                                    | Get the object responsible for handling time-statistics grid functions for this process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetTimeStep`](#generated.RAConstantOneWayCoupling.GetTimeStep)(time_step[, accept_global])                                      | Get the timestep corresponding to the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetTopologyShape`](#generated.RAConstantOneWayCoupling.GetTopologyShape)([time_step])                                           | Get the shape of the topology (similar to the shape of numpy arrays).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetTorqueLaw`](#generated.RAConstantOneWayCoupling.GetTorqueLaw)()                                                              | Get the current "Torque Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetTurbulentDissipationRate`](#generated.RAConstantOneWayCoupling.GetTurbulentDissipationRate)([unit])                          | Get the value of "Turbulent Dissipation Rate".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetTurbulentKineticEnergy`](#generated.RAConstantOneWayCoupling.GetTurbulentKineticEnergy)([unit])                              | Get the value of "Turbulent Kinetic Energy".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetUseTurbulentDispersion`](#generated.RAConstantOneWayCoupling.GetUseTurbulentDispersion)()                                    | Get the value of "Use Turbulent Dispersion".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetUseUserDefinedConstants`](#generated.RAConstantOneWayCoupling.GetUseUserDefinedConstants)()                                  | Get the current "Use User Defined Constants".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetVelocity`](#generated.RAConstantOneWayCoupling.GetVelocity)([unit])                                                          | Get the value of "Velocity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetVirtualMassLaw`](#generated.RAConstantOneWayCoupling.GetVirtualMassLaw)()                                                    | Get the current "Virtual Mass Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetViscosity`](#generated.RAConstantOneWayCoupling.GetViscosity)([unit])                                                        | Get the value of "Viscosity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`HasGridFunction`](#generated.RAConstantOneWayCoupling.HasGridFunction)(grid_function_name)                                      | Whether the grid has the given grid function.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`IsCellActive`](#generated.RAConstantOneWayCoupling.IsCellActive)(i, j, k[, time_step])                                          | Checks if the given cell is active or not                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`IsTurbulentDispersionEnabled`](#generated.RAConstantOneWayCoupling.IsTurbulentDispersionEnabled)()                              | Check if the "Turbulent Dispersion" is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`IterCellVertices`](#generated.RAConstantOneWayCoupling.IterCellVertices)(cell[, time_step])                                     | Iterate on the vertices of active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`IterCells`](#generated.RAConstantOneWayCoupling.IterCells)([time_step])                                                         | Iterate on the active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`Modified`](#generated.RAConstantOneWayCoupling.Modified)(\*args, \*\*kwargs)                                                    | Resets all the cache information after a change in the subject being tracked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RemoveCustomCurve`](#generated.RAConstantOneWayCoupling.RemoveCustomCurve)(name)                                                | Remove the curve from the database :param name:     The name of the curve to be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`RemoveCustomProperty`](#generated.RAConstantOneWayCoupling.RemoveCustomProperty)(name)                                          | Remove the property from the database :param name:     The name of the property to be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RemoveOutputVariable`](#generated.RAConstantOneWayCoupling.RemoveOutputVariable)(variable_name)                                 | Removes some output variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RemoveProcess`](#generated.RAConstantOneWayCoupling.RemoveProcess)()                                                            | Removes the process from the project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetConvectiveHeatTransferLaw`](#generated.RAConstantOneWayCoupling.SetConvectiveHeatTransferLaw)(value)                         | Set the current "Convective Heat Transfer Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetCurrentTimeStep`](#generated.RAConstantOneWayCoupling.SetCurrentTimeStep)(time_step)                                         | Sets the current time step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetDensity`](#generated.RAConstantOneWayCoupling.SetDensity)(value[, unit])                                                     | Set the value of "Density".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetDragLaw`](#generated.RAConstantOneWayCoupling.SetDragLaw)(value)                                                             | Set the current "Drag Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetLiftLaw`](#generated.RAConstantOneWayCoupling.SetLiftLaw)(value)                                                             | Set the current "Lift Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetMorsiAndAlexanderK1`](#generated.RAConstantOneWayCoupling.SetMorsiAndAlexanderK1)(value)                                     | Set the current "Morsi And Alexander K1".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetMorsiAndAlexanderK2`](#generated.RAConstantOneWayCoupling.SetMorsiAndAlexanderK2)(value)                                     | Set the current "Morsi And Alexander K2".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetMorsiAndAlexanderK3`](#generated.RAConstantOneWayCoupling.SetMorsiAndAlexanderK3)(value)                                     | Set the current "Morsi And Alexander K3".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetPartIdIfValid`](#generated.RAConstantOneWayCoupling.SetPartIdIfValid)()                                                      | Subclasses should implement this method if it's a Process with visualization                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetSpecificHeat`](#generated.RAConstantOneWayCoupling.SetSpecificHeat)(value[, unit])                                           | Set the value of "Specific Heat".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetStartTime`](#generated.RAConstantOneWayCoupling.SetStartTime)(value[, unit])                                                 | Set the value of "Start Time".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`SetSyamlalObrienC1`](#generated.RAConstantOneWayCoupling.SetSyamlalObrienC1)(value)                                             | Set the current "Syamlal Obrien C1".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetSyamlalObrienD1`](#generated.RAConstantOneWayCoupling.SetSyamlalObrienD1)(value)                                             | Set the current "Syamlal Obrien D1".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetTemperature`](#generated.RAConstantOneWayCoupling.SetTemperature)(value[, unit])                                             | Set the value of "Temperature".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetThermalConductivity`](#generated.RAConstantOneWayCoupling.SetThermalConductivity)(value[, unit])                             | Set the value of "Thermal Conductivity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetTorqueLaw`](#generated.RAConstantOneWayCoupling.SetTorqueLaw)(value)                                                         | Set the current "Torque Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetTurbulentDissipationRate`](#generated.RAConstantOneWayCoupling.SetTurbulentDissipationRate)(value[, unit])                   | Set the value of "Turbulent Dissipation Rate".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`SetTurbulentKineticEnergy`](#generated.RAConstantOneWayCoupling.SetTurbulentKineticEnergy)(value[, unit])                       | Set the value of "Turbulent Kinetic Energy".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetUseTurbulentDispersion`](#generated.RAConstantOneWayCoupling.SetUseTurbulentDispersion)(value)                               | Set the value of "Use Turbulent Dispersion".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetUseUserDefinedConstants`](#generated.RAConstantOneWayCoupling.SetUseUserDefinedConstants)(value)                             | Set the current "Use User Defined Constants".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetVelocity`](#generated.RAConstantOneWayCoupling.SetVelocity)(values[, unit])                                                  | Set the values of "Velocity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetVirtualMassLaw`](#generated.RAConstantOneWayCoupling.SetVirtualMassLaw)(value)                                               | Set the current "Virtual Mass Law".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetViscosity`](#generated.RAConstantOneWayCoupling.SetViscosity)(value[, unit])                                                 | Set the value of "Viscosity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

<a id="generated.RAConstantOneWayCoupling.AddCurve"></a>

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

<a id="generated.RAConstantOneWayCoupling.AddCustomCurve"></a>

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

<a id="generated.RAConstantOneWayCoupling.AddCustomProperty"></a>

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

<a id="generated.RAConstantOneWayCoupling.AddGridFunction"></a>

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

<a id="generated.RAConstantOneWayCoupling.CreateCurveOutputVariable"></a>

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

<a id="generated.RAConstantOneWayCoupling.CreateGridFunction"></a>

#### CreateGridFunction(values, location='cell', time_step='current')

Create a grid function from the given values, location and time-step.

* **Parameters:**
  * **values** (*list* *(**double* *) or* *numpy array*) – The values of the grid function to be added.
  * **time_step** – 

#### SEE ALSO
KAContextDependentElement.GetTimeStep

<a id="generated.RAConstantOneWayCoupling.CreateGridFunctionArrayOnCells"></a>

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

<a id="generated.RAConstantOneWayCoupling.CreateGridFunctionStatisticOutputVariable"></a>

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

<a id="generated.RAConstantOneWayCoupling.CreateTransientCurveOutputVariable"></a>

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

<a id="generated.RAConstantOneWayCoupling.DisableTurbulentDispersion"></a>

#### DisableTurbulentDispersion()

Set the value of “Turbulent Dispersion” to False.

<a id="generated.RAConstantOneWayCoupling.EditCustomCurve"></a>

#### EditCustomCurve(edit_curve: str, new_name: Optional[str] = None, sources: Optional[dict[str, str]] = None, expression: Optional[str] = None)

Edit a custom curve saved in the database.
:param edit_curve:

> The name of the curve to be edited.
* **Parameters:**
  * **new_name** – The new name of the curve to be set.
  * **sources** – A dict pointing the variable used to the curve association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RAConstantOneWayCoupling.EditCustomProperty"></a>

#### EditCustomProperty(edit_property: str, new_name: Optional[str] = None, sources: Optional[dict[str, str]] = None, expression: Optional[str] = None)

Edit a custom property saved in the database.
:param edit_property:

> The name of the property to be edited.
* **Parameters:**
  * **new_name** – The new name of the property to be set.
  * **sources** – A dict pointing the variable used to the property association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RAConstantOneWayCoupling.EnableTurbulentDispersion"></a>

#### EnableTurbulentDispersion()

Set the value of “Turbulent Dispersion” to True.

<a id="generated.RAConstantOneWayCoupling.GetActivesArray"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetBoundingBox"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetCFDParametersList"></a>

#### GetCFDParametersList()

Get the list of per-Particle CFD parameter sets.

* **Return type:**
  [RACFDParametersList](RACFDParametersList.md#generated.RACFDParametersList)

<a id="generated.RAConstantOneWayCoupling.GetCellAreaAsArray"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetCellCenterAsArray"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetCellDzAsArray"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetCellFromIJK"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetCellIJK"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetCellNumberOfVertices"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetCellPointsAsFunction"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetCellVolumeAsArray"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetConvectiveHeatTransferLaw"></a>

#### GetConvectiveHeatTransferLaw()

Get the current “Convective Heat Transfer Law”. This is a shortcut to access the “Convective Heat Transfer Law” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetConvectiveHeatTransferLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetConvectiveHeatTransferLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Convective Heat Transfer Law”.

<a id="generated.RAConstantOneWayCoupling.GetCurve"></a>

#### GetCurve(curve_name, simulation_name=None, realization=None, time_step=None)

Override base class method to check for a request of a grid function statistic.

<a id="generated.RAConstantOneWayCoupling.GetCurveNames"></a>

#### GetCurveNames(simulation_name=None)

@param simulation_name: unicode
: An optional parameter for defining the simulation to get the curve from.

* **Returns:**
  list(str)
  The list of curve names

<a id="generated.RAConstantOneWayCoupling.GetCurveNamesAssociation"></a>

#### GetCurveNamesAssociation(simulation_name=None)

Get this element’s curve names.

* **Parameters:**
  **simulation_name** (*unicode*) – The name of the simulation to query the curve names
  If None is given the current element simulation will be used
* **Return type:**
  dict(unicode, ISemanticAssociation)
* **Returns:**
  The curve names for this element in the given simulation name

<a id="generated.RAConstantOneWayCoupling.GetDensity"></a>

#### GetDensity(unit: Optional[str] = None)

Get the value of “Density”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “kg/m3”.

<a id="generated.RAConstantOneWayCoupling.GetDragLaw"></a>

#### GetDragLaw()

Get the current “Drag Law”. This is a shortcut to access the “Drag Law” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetDragLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetDragLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Drag Law”.

<a id="generated.RAConstantOneWayCoupling.GetElementCurve"></a>

#### GetElementCurve(element_name, curve_name, simulation_name=None, realization=None, time_step=None)

Return the curves for the given element and name.

* **Parameters:**
  * **element_name** (*unicode*) – The name of the element
  * **curve_name** (*unicode*) – The name of the curve
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the curve from.
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **time_step** (*TimeStep*) – For transient curves a time-step must be given.

<a id="generated.RAConstantOneWayCoupling.GetGeometryQuantity"></a>

#### GetGeometryQuantity()

Get the quantity corresponding to the grid’s geometry.

* **Return type:**
  IQuantity
* **Returns:**
  The grid geometry quantity

<a id="generated.RAConstantOneWayCoupling.GetGeometryUnit"></a>

#### GetGeometryUnit()

Get the grid’s geometry’s unit.

* **Return type:**
  unicode
* **Returns:**
  The unit for the grid geometry

<a id="generated.RAConstantOneWayCoupling.GetGridFunction"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetGridFunctionNames"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetLiftLaw"></a>

#### GetLiftLaw()

Get the current “Lift Law”. This is a shortcut to access the “Lift Law” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetLiftLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetLiftLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Lift Law”.

<a id="generated.RAConstantOneWayCoupling.GetMeshColoring"></a>

#### GetMeshColoring(window: str | type['KAWorkspaceWindow'])

Get the RAMeshColoring related to the current object and a window.

* **Parameters:**
  **window** – The window that the coloring is acting. The window must be a str of the name of the
  window or a KAWorkspaceWindow.
* **Raises:**
  **RockyApiError** – If window is not a str or KAWorkspaceWindow. Additionally, raises an error if no window
  is found or no coloring for the given item exists.

<a id="generated.RAConstantOneWayCoupling.GetMorsiAndAlexanderK1"></a>

#### GetMorsiAndAlexanderK1()

Get the current “Morsi And Alexander K1”. This is a shortcut to access the “Morsi And Alexander K1” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetMorsiAndAlexanderK1()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetMorsiAndAlexanderK1)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Morsi And Alexander K1”.

<a id="generated.RAConstantOneWayCoupling.GetMorsiAndAlexanderK2"></a>

#### GetMorsiAndAlexanderK2()

Get the current “Morsi And Alexander K2”. This is a shortcut to access the “Morsi And Alexander K2” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetMorsiAndAlexanderK2()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetMorsiAndAlexanderK2)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Morsi And Alexander K2”.

<a id="generated.RAConstantOneWayCoupling.GetMorsiAndAlexanderK3"></a>

#### GetMorsiAndAlexanderK3()

Get the current “Morsi And Alexander K3”. This is a shortcut to access the “Morsi And Alexander K3” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetMorsiAndAlexanderK3()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetMorsiAndAlexanderK3)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Morsi And Alexander K3”.

<a id="generated.RAConstantOneWayCoupling.GetNumberOfCells"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetNumberOfNodes"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetNumpyCurve"></a>

#### GetNumpyCurve(curve_name, unit=None, realization=None)

Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.

<a id="generated.RAConstantOneWayCoupling.GetOutputVariableValue"></a>

#### GetOutputVariableValue(variable_name: str)

Get the value of a previously-created output variable.

* **Parameters:**
  **variable_name** (*unicode*) – The variable name whose value we want.
* **Returns:**
  Returns a scalar with the value and unit for the given variable_name or None if no
  variable was found with the given name or if it couldn’t be computed.

<a id="generated.RAConstantOneWayCoupling.GetSpecificHeat"></a>

#### GetSpecificHeat(unit: Optional[str] = None)

Get the value of “Specific Heat”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “J/kg.K”.

<a id="generated.RAConstantOneWayCoupling.GetStartTime"></a>

#### GetStartTime(unit: Optional[str] = None)

Get the value of “Start Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAConstantOneWayCoupling.GetSyamlalObrienC1"></a>

#### GetSyamlalObrienC1()

Get the current “Syamlal Obrien C1”. This is a shortcut to access the “Syamlal Obrien C1” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetSyamlalObrienC1()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetSyamlalObrienC1)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Syamlal Obrien C1”.

<a id="generated.RAConstantOneWayCoupling.GetSyamlalObrienD1"></a>

#### GetSyamlalObrienD1()

Get the current “Syamlal Obrien D1”. This is a shortcut to access the “Syamlal Obrien D1” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetSyamlalObrienD1()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetSyamlalObrienD1)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Syamlal Obrien D1”.

<a id="generated.RAConstantOneWayCoupling.GetTemperature"></a>

#### GetTemperature(unit: Optional[str] = None)

Get the value of “Temperature”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “K”.

<a id="generated.RAConstantOneWayCoupling.GetThermalConductivity"></a>

#### GetThermalConductivity(unit: Optional[str] = None)

Get the value of “Thermal Conductivity”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “W/m.K”.

<a id="generated.RAConstantOneWayCoupling.GetTimeSet"></a>

#### GetTimeSet()

Get the list of time-steps associated to the grid.

* **Return type:**
  ITimeSet
* **Returns:**
  The list of time-steps associated to the grid

<a id="generated.RAConstantOneWayCoupling.GetTimeStatistics"></a>

#### GetTimeStatistics()

Get the object responsible for handling time-statistics grid functions for this process.
This call will return None if the process doesn’t support time statistics.

<a id="generated.RAConstantOneWayCoupling.GetTimeStep"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetTopologyShape"></a>

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

<a id="generated.RAConstantOneWayCoupling.GetTorqueLaw"></a>

#### GetTorqueLaw()

Get the current “Torque Law”. This is a shortcut to access the “Torque Law” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetTorqueLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetTorqueLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Torque Law”.

<a id="generated.RAConstantOneWayCoupling.GetTurbulentDissipationRate"></a>

#### GetTurbulentDissipationRate(unit: Optional[str] = None)

Get the value of “Turbulent Dissipation Rate”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “W/kg”.

<a id="generated.RAConstantOneWayCoupling.GetTurbulentKineticEnergy"></a>

#### GetTurbulentKineticEnergy(unit: Optional[str] = None)

Get the value of “Turbulent Kinetic Energy”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “J/kg”.

<a id="generated.RAConstantOneWayCoupling.GetUseTurbulentDispersion"></a>

#### GetUseTurbulentDispersion()

Get the value of “Use Turbulent Dispersion”.

<a id="generated.RAConstantOneWayCoupling.GetUseUserDefinedConstants"></a>

#### GetUseUserDefinedConstants()

Get the current “Use User Defined Constants”. This is a shortcut to access the “Use User Defined Constants” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetUseUserDefinedConstants()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetUseUserDefinedConstants)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Use User Defined Constants”.

<a id="generated.RAConstantOneWayCoupling.GetVelocity"></a>

#### GetVelocity(unit: Optional[str] = None)

Get the value of “Velocity”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m/s”.

<a id="generated.RAConstantOneWayCoupling.GetVirtualMassLaw"></a>

#### GetVirtualMassLaw()

Get the current “Virtual Mass Law”. This is a shortcut to access the “Virtual Mass Law” of the individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.GetVirtualMassLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.GetVirtualMassLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet, or if the [`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters)
  for the Particles have different values for the “Virtual Mass Law”.

<a id="generated.RAConstantOneWayCoupling.GetViscosity"></a>

#### GetViscosity(unit: Optional[str] = None)

Get the value of “Viscosity”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “Pa.s”.

<a id="generated.RAConstantOneWayCoupling.HasGridFunction"></a>

#### HasGridFunction(grid_function_name)

Whether the grid has the given grid function.

* **Parameters:**
  **grid_function_name** (*unicode*) – The name of the grid function to be checked.
* **Return type:**
  bool
* **Returns:**
  Returns True if the grid function exists and False otherwise.

<a id="generated.RAConstantOneWayCoupling.IsCellActive"></a>

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

<a id="generated.RAConstantOneWayCoupling.IsTurbulentDispersionEnabled"></a>

#### IsTurbulentDispersionEnabled()

Check if the “Turbulent Dispersion” is enabled.

<a id="generated.RAConstantOneWayCoupling.IterCellVertices"></a>

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

<a id="generated.RAConstantOneWayCoupling.IterCells"></a>

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

<a id="generated.RAConstantOneWayCoupling.Modified"></a>

#### Modified(\*args, \*\*kwargs)

Resets all the cache information after a change in the subject being tracked.

<a id="generated.RAConstantOneWayCoupling.RemoveCustomCurve"></a>

#### RemoveCustomCurve(name: str)

Remove the curve from the database
:param name:

> The name of the curve to be removed.

<a id="generated.RAConstantOneWayCoupling.RemoveCustomProperty"></a>

#### RemoveCustomProperty(name: str)

Remove the property from the database
:param name:

> The name of the property to be removed.

<a id="generated.RAConstantOneWayCoupling.RemoveOutputVariable"></a>

#### RemoveOutputVariable(variable_name: str)

Removes some output variable.

* **Parameters:**
  **variable_name** – The name of the variable to be removed.

<a id="generated.RAConstantOneWayCoupling.RemoveProcess"></a>

#### RemoveProcess()

Removes the process from the project.

<a id="generated.RAConstantOneWayCoupling.SetConvectiveHeatTransferLaw"></a>

#### SetConvectiveHeatTransferLaw(value)

Set the current “Convective Heat Transfer Law”. This is a shortcut to set the “Convective Heat Transfer Law” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetConvectiveHeatTransferLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetConvectiveHeatTransferLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAConstantOneWayCoupling.SetCurrentTimeStep"></a>

#### SetCurrentTimeStep(time_step)

Sets the current time step.

* **Parameters:**
  **time_step** (*ITimeStep*) – The time step to be considered the ‘current’ time step.

<a id="generated.RAConstantOneWayCoupling.SetDensity"></a>

#### SetDensity(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Density”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “kg/m3”.

<a id="generated.RAConstantOneWayCoupling.SetDragLaw"></a>

#### SetDragLaw(value)

Set the current “Drag Law”. This is a shortcut to set the “Drag Law” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetDragLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetDragLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAConstantOneWayCoupling.SetLiftLaw"></a>

#### SetLiftLaw(value)

Set the current “Lift Law”. This is a shortcut to set the “Lift Law” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetLiftLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetLiftLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAConstantOneWayCoupling.SetMorsiAndAlexanderK1"></a>

#### SetMorsiAndAlexanderK1(value)

Set the current “Morsi And Alexander K1”. This is a shortcut to set the “Morsi And Alexander K1” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetMorsiAndAlexanderK1()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetMorsiAndAlexanderK1)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAConstantOneWayCoupling.SetMorsiAndAlexanderK2"></a>

#### SetMorsiAndAlexanderK2(value)

Set the current “Morsi And Alexander K2”. This is a shortcut to set the “Morsi And Alexander K2” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetMorsiAndAlexanderK2()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetMorsiAndAlexanderK2)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAConstantOneWayCoupling.SetMorsiAndAlexanderK3"></a>

#### SetMorsiAndAlexanderK3(value)

Set the current “Morsi And Alexander K3”. This is a shortcut to set the “Morsi And Alexander K3” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetMorsiAndAlexanderK3()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetMorsiAndAlexanderK3)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAConstantOneWayCoupling.SetPartIdIfValid"></a>

#### SetPartIdIfValid()

Subclasses should implement this method if it’s a Process with visualization

<a id="generated.RAConstantOneWayCoupling.SetSpecificHeat"></a>

#### SetSpecificHeat(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Specific Heat”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “J/kg.K”.

<a id="generated.RAConstantOneWayCoupling.SetStartTime"></a>

#### SetStartTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Start Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAConstantOneWayCoupling.SetSyamlalObrienC1"></a>

#### SetSyamlalObrienC1(value)

Set the current “Syamlal Obrien C1”. This is a shortcut to set the “Syamlal Obrien C1” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetSyamlalObrienC1()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetSyamlalObrienC1)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAConstantOneWayCoupling.SetSyamlalObrienD1"></a>

#### SetSyamlalObrienD1(value)

Set the current “Syamlal Obrien D1”. This is a shortcut to set the “Syamlal Obrien D1” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetSyamlalObrienD1()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetSyamlalObrienD1)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAConstantOneWayCoupling.SetTemperature"></a>

#### SetTemperature(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Temperature”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “K”.

<a id="generated.RAConstantOneWayCoupling.SetThermalConductivity"></a>

#### SetThermalConductivity(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Thermal Conductivity”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “W/m.K”.

<a id="generated.RAConstantOneWayCoupling.SetTorqueLaw"></a>

#### SetTorqueLaw(value)

Set the current “Torque Law”. This is a shortcut to set the “Torque Law” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetTorqueLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetTorqueLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAConstantOneWayCoupling.SetTurbulentDissipationRate"></a>

#### SetTurbulentDissipationRate(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Turbulent Dissipation Rate”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “W/kg”.

<a id="generated.RAConstantOneWayCoupling.SetTurbulentKineticEnergy"></a>

#### SetTurbulentKineticEnergy(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Turbulent Kinetic Energy”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “J/kg”.

<a id="generated.RAConstantOneWayCoupling.SetUseTurbulentDispersion"></a>

#### SetUseTurbulentDispersion(value: bool)

Set the value of “Use Turbulent Dispersion”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAConstantOneWayCoupling.SetUseUserDefinedConstants"></a>

#### SetUseUserDefinedConstants(value)

Set the current “Use User Defined Constants”. This is a shortcut to set the “Use User Defined Constants” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetUseUserDefinedConstants()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetUseUserDefinedConstants)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAConstantOneWayCoupling.SetVelocity"></a>

#### SetVelocity(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Velocity”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m/s”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAConstantOneWayCoupling.SetVirtualMassLaw"></a>

#### SetVirtualMassLaw(value)

Set the current “Virtual Mass Law”. This is a shortcut to set the “Virtual Mass Law” of all individual
[`RACFDPerParticleParameters`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters) configured in the coupling.

See also [`RACFDPerParticleParameters.SetVirtualMassLaw()`](RACFDPerParticleParameters.md#generated.RACFDPerParticleParameters.SetVirtualMassLaw)

* **Raises:**
  **RockyApiError** – If there are no Particles in the project yet.

<a id="generated.RAConstantOneWayCoupling.SetViscosity"></a>

#### SetViscosity(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Viscosity”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “Pa.s”.
