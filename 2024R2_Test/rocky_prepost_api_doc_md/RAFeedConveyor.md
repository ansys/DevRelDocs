# RAFeedConveyor

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAFeedConveyor

Rocky api Feed Conveyor model.

**Methods:**

| [`AddCurve`](#generated.RAFeedConveyor.AddCurve)(curve_name, timesteps, values, unit)                                   | Add a curve to the element with a time-steps domain                                                                                                                                                                                                                                                                                                                                                                         |
|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AddGridFunction`](#generated.RAFeedConveyor.AddGridFunction)(grid_function_name, ...[, ...])                          | Adds a grid function to the grid.                                                                                                                                                                                                                                                                                                                                                                                           |
| [`CreateCurveOutputVariable`](#generated.RAFeedConveyor.CreateCurveOutputVariable)(curve_name[, ...])                   | Used to create an output variable based on a curve which doesn't change at each new timestep (i.e.: a curve with a single value for each time).                                                                                                                                                                                                                                                                             |
| [`CreateGridFunction`](#generated.RAFeedConveyor.CreateGridFunction)(values[, location, time_step])                     | Create a grid function from the given values, location and time-step.                                                                                                                                                                                                                                                                                                                                                       |
| [`CreateGridFunctionArrayOnCells`](#generated.RAFeedConveyor.CreateGridFunctionArrayOnCells)([time_step])               | Creates a numpy array with the number of elements based on the cells and returns it.                                                                                                                                                                                                                                                                                                                                        |
| [`CreateGridFunctionStatisticOutputVariable`](#generated.RAFeedConveyor.CreateGridFunctionStatisticOutputVariable)(...) | Used to create an output variable based on a grid function statistic (i.e.: will get a grid function, compute its statistic based on statistic_operation and then based on the statistic values will apply the operation to get a single scalar).                                                                                                                                                                           |
| [`CreateTransientCurveOutputVariable`](#generated.RAFeedConveyor.CreateTransientCurveOutputVariable)(curve_name)        | Used to create an output variable based on a curve for which there's a completely new representation for each time step -- such as Power : Impact X Belt Width (i.e.: will get the curve multiple times based on the time range, compute a value for each time based on the operation, to convert the multiple curves into a single curve and then will apply the time_operation to get a single scalar from those values). |
| [`GetAccelerationPeriod`](#generated.RAFeedConveyor.GetAccelerationPeriod)([unit])                                      | Get the value of "Acceleration Period".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetActivesArray`](#generated.RAFeedConveyor.GetActivesArray)([time_step])                                             | Get an array representing the cells' "active" status.                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetAlignmentAngle`](#generated.RAFeedConveyor.GetAlignmentAngle)([unit])                                              | Get the value of "Alignment Angle".                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetAvailableMaterials`](#generated.RAFeedConveyor.GetAvailableMaterials)()                                            | Get all available Materials.                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetBeginningStartTime`](#generated.RAFeedConveyor.GetBeginningStartTime)([unit])                                      | Get the value of "Beginning Start Time".                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetBeginningStopTime`](#generated.RAFeedConveyor.GetBeginningStopTime)([unit])                                        | Get the value of "Beginning Stop Time".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetBeltInclineAngle`](#generated.RAFeedConveyor.GetBeltInclineAngle)([unit])                                          | Get the value of "Belt Incline Angle".                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetBeltProfile`](#generated.RAFeedConveyor.GetBeltProfile)()                                                          | * **rtype:**<br/>  ApiElementItem                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetBeltProfileName`](#generated.RAFeedConveyor.GetBeltProfileName)()                                                  | Get the name of the belt profile.                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetBeltSpeed`](#generated.RAFeedConveyor.GetBeltSpeed)([unit])                                                        | Get the value of "Belt Speed".                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetBeltThickness`](#generated.RAFeedConveyor.GetBeltThickness)([unit])                                                | Get the value of "Belt Thickness".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetBeltWidth`](#generated.RAFeedConveyor.GetBeltWidth)([unit])                                                        | Get the value of "Belt Width".                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetBoundingBox`](#generated.RAFeedConveyor.GetBoundingBox)([unit, time_step])                                         | Get the element's bounding box.                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetCellAreaAsArray`](#generated.RAFeedConveyor.GetCellAreaAsArray)([time_step])                                       | Get an array containing the area of each cell.                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetCellCenterAsArray`](#generated.RAFeedConveyor.GetCellCenterAsArray)([time_step])                                   | Get an array containing the center coordinates of each cell.                                                                                                                                                                                                                                                                                                                                                                |
| [`GetCellDzAsArray`](#generated.RAFeedConveyor.GetCellDzAsArray)([time_step])                                           | Get an array containing the thickness (in Z) of each cell.                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellFromIJK`](#generated.RAFeedConveyor.GetCellFromIJK)(i, j, k[, time_step])                                      | Creates a grid cell handle from the current I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetCellIJK`](#generated.RAFeedConveyor.GetCellIJK)(cell_handle[, time_step])                                          | Converts the given cell handle to it's I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetCellNumberOfVertices`](#generated.RAFeedConveyor.GetCellNumberOfVertices)(cell[, time_step])                       | Get an array containing the number of vertices of each cell.                                                                                                                                                                                                                                                                                                                                                                |
| [`GetCellPointsAsFunction`](#generated.RAFeedConveyor.GetCellPointsAsFunction)([time_step])                             | Get a function for the points (vertices) of each cell.                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetCellVolumeAsArray`](#generated.RAFeedConveyor.GetCellVolumeAsArray)([time_step])                                   | Get an array with the volume of each cell.                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCurve`](#generated.RAFeedConveyor.GetCurve)(curve_name[, simulation_name, ...])                                    | Override base class method to check for a request of a grid function statistic.                                                                                                                                                                                                                                                                                                                                             |
| [`GetCurveNames`](#generated.RAFeedConveyor.GetCurveNames)([simulation_name])                                           | @param simulation_name: unicode                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetCurveNamesAssociation`](#generated.RAFeedConveyor.GetCurveNamesAssociation)([simulation_name])                     | Get this element's curve names.                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetDecelerationPeriod`](#generated.RAFeedConveyor.GetDecelerationPeriod)([unit])                                      | Get the value of "Deceleration Period".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetDiameter`](#generated.RAFeedConveyor.GetDiameter)([unit])                                                          | Get the value of "Diameter".                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetDropBoxHeight`](#generated.RAFeedConveyor.GetDropBoxHeight)([unit])                                                | Get the value of "Drop Box Height".                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetDropBoxLength`](#generated.RAFeedConveyor.GetDropBoxLength)([unit])                                                | Get the value of "Drop Box Length".                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetDropBoxWidth`](#generated.RAFeedConveyor.GetDropBoxWidth)([unit])                                                  | Get the value of "Drop Box Width".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetElementCurve`](#generated.RAFeedConveyor.GetElementCurve)(element_name, curve_name[, ...])                         | Return the curves for the given element and name.                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetFaceWidth`](#generated.RAFeedConveyor.GetFaceWidth)([unit])                                                        | Get the value of "Face Width".                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetFrontPlateOffset`](#generated.RAFeedConveyor.GetFrontPlateOffset)([unit])                                          | Get the value of "Front Plate Offset".                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetGeometryQuantity`](#generated.RAFeedConveyor.GetGeometryQuantity)()                                                | Get the quantity corresponding to the grid's geometry.                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetGeometryUnit`](#generated.RAFeedConveyor.GetGeometryUnit)()                                                        | Get the grid's geometry's unit.                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetGridFunction`](#generated.RAFeedConveyor.GetGridFunction)(grid_function_name[, ...])                               | Gets a grid function given its name.                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetGridFunctionNames`](#generated.RAFeedConveyor.GetGridFunctionNames)([translated, context])                         | Get a list of the available grid functions for this grid.                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetHeightOffset`](#generated.RAFeedConveyor.GetHeightOffset)([unit])                                                  | Get the value of "Height Offset".                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetHorizontalOffset`](#generated.RAFeedConveyor.GetHorizontalOffset)([unit])                                          | Get the value of "Horizontal Offset".                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetLengthOffset`](#generated.RAFeedConveyor.GetLengthOffset)([unit])                                                  | Get the value of "Length Offset".                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetLoadingLength`](#generated.RAFeedConveyor.GetLoadingLength)([unit])                                                | Get the value of "Loading Length".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetMaterial`](#generated.RAFeedConveyor.GetMaterial)()                                                                | Get the "Material".                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetModuleProperties`](#generated.RAFeedConveyor.GetModuleProperties)()                                                | Get the names of the module properties.                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetModuleProperty`](#generated.RAFeedConveyor.GetModuleProperty)(property_name[, unit])                               | Get the value of a module property.                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetNumberOfCells`](#generated.RAFeedConveyor.GetNumberOfCells)([time_step])                                           | Get the total number of cells.                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetNumberOfNodes`](#generated.RAFeedConveyor.GetNumberOfNodes)([time_step])                                           | Get the total number of nodes (vertices).                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetNumpyCurve`](#generated.RAFeedConveyor.GetNumpyCurve)(curve_name[, unit, realization])                             | Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.                                                                                                                                                                                                                                                                                                                                 |
| [`GetOffsetToIdlers`](#generated.RAFeedConveyor.GetOffsetToIdlers)([unit])                                              | Get the value of "Offset To Idlers".                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetOutOfPlaneOffset`](#generated.RAFeedConveyor.GetOutOfPlaneOffset)([unit])                                          | Get the value of "Out of Plane Offset".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetOutputVariableValue`](#generated.RAFeedConveyor.GetOutputVariableValue)(variable_name)                             | Get the value of a previously-created output variable.                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetReturnBeltAngle`](#generated.RAFeedConveyor.GetReturnBeltAngle)([unit])                                            | Get the value of "Return Belt Angle".                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetSkirtboardHeight`](#generated.RAFeedConveyor.GetSkirtboardHeight)([unit])                                          | Get the value of "Skirtboard Height".                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetSkirtboardLength`](#generated.RAFeedConveyor.GetSkirtboardLength)([unit])                                          | Get the value of "Skirtboard Length".                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetSphBoundaryType`](#generated.RAFeedConveyor.GetSphBoundaryType)()                                                  | Get "Sph Boundary Type" as a string.                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetTemperature`](#generated.RAFeedConveyor.GetTemperature)([unit])                                                    | Get the value of "Temperature".                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetThermalBoundaryConditionType`](#generated.RAFeedConveyor.GetThermalBoundaryConditionType)()                        | Get "Thermal Boundary Condition Type" as a string.                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetTimeSet`](#generated.RAFeedConveyor.GetTimeSet)()                                                                  | Get the list of time-steps associated to the grid.                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetTimeStatistics`](#generated.RAFeedConveyor.GetTimeStatistics)()                                                    | Get the object responsible for handling time-statistics grid functions for this process.                                                                                                                                                                                                                                                                                                                                    |
| [`GetTimeStep`](#generated.RAFeedConveyor.GetTimeStep)(time_step[, accept_global])                                      | Get the timestep corresponding to the given time.                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetTopologyShape`](#generated.RAFeedConveyor.GetTopologyShape)([time_step])                                           | Get the shape of the topology (similar to the shape of numpy arrays).                                                                                                                                                                                                                                                                                                                                                       |
| [`GetTransitionLength`](#generated.RAFeedConveyor.GetTransitionLength)([unit])                                          | Get the value of "Transition Length".                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetTriangleSize`](#generated.RAFeedConveyor.GetTriangleSize)([unit])                                                  | Get the value of "Triangle Size".                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetValidBeltProfileNames`](#generated.RAFeedConveyor.GetValidBeltProfileNames)()                                      | Return a list with possible values for belt profile.                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetValidOptionsForModuleProperty`](#generated.RAFeedConveyor.GetValidOptionsForModuleProperty)(property_name)         | Get all valid options only for properties that have a list of possible options.                                                                                                                                                                                                                                                                                                                                             |
| [`GetValidSphBoundaryTypeValues`](#generated.RAFeedConveyor.GetValidSphBoundaryTypeValues)()                            | Get a list of all possible values for "Sph Boundary Type".                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetValidThermalBoundaryConditionTypeValues`](#generated.RAFeedConveyor.GetValidThermalBoundaryConditionTypeValues)()  | Get a list of all possible values for "Thermal Boundary Condition Type".                                                                                                                                                                                                                                                                                                                                                    |
| [`GetVerticalOffset`](#generated.RAFeedConveyor.GetVerticalOffset)([unit])                                              | Get the value of "Vertical Offset".                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetWallThickness`](#generated.RAFeedConveyor.GetWallThickness)([unit])                                                | Get the value of "Wall Thickness".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetWidth`](#generated.RAFeedConveyor.GetWidth)([unit])                                                                | Get the value of "Width".                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`HasGridFunction`](#generated.RAFeedConveyor.HasGridFunction)(grid_function_name)                                      | Whether the grid has the given grid function.                                                                                                                                                                                                                                                                                                                                                                               |
| [`IsCellActive`](#generated.RAFeedConveyor.IsCellActive)(i, j, k[, time_step])                                          | Checks if the given cell is active or not                                                                                                                                                                                                                                                                                                                                                                                   |
| [`IterCellVertices`](#generated.RAFeedConveyor.IterCellVertices)(cell[, time_step])                                     | Iterate on the vertices of active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                             |
| [`IterCells`](#generated.RAFeedConveyor.IterCells)([time_step])                                                         | Iterate on the active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                         |
| [`Modified`](#generated.RAFeedConveyor.Modified)(\*args, \*\*kwargs)                                                    | Resets all the cache information after a change in the subject being tracked.                                                                                                                                                                                                                                                                                                                                               |
| [`RemoveOutputVariable`](#generated.RAFeedConveyor.RemoveOutputVariable)(variable_name)                                 | Removes some output variable.                                                                                                                                                                                                                                                                                                                                                                                               |
| [`RemoveProcess`](#generated.RAFeedConveyor.RemoveProcess)()                                                            | Removes the process from the project.                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetAccelerationPeriod`](#generated.RAFeedConveyor.SetAccelerationPeriod)(value[, unit])                               | Set the value of "Acceleration Period".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetAlignmentAngle`](#generated.RAFeedConveyor.SetAlignmentAngle)(value[, unit])                                       | Set the value of "Alignment Angle".                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetBeginningStartTime`](#generated.RAFeedConveyor.SetBeginningStartTime)(value[, unit])                               | Set the value of "Beginning Start Time".                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetBeginningStopTime`](#generated.RAFeedConveyor.SetBeginningStopTime)(value[, unit])                                 | Set the value of "Beginning Stop Time".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetBeltInclineAngle`](#generated.RAFeedConveyor.SetBeltInclineAngle)(value[, unit])                                   | Set the value of "Belt Incline Angle".                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetBeltProfile`](#generated.RAFeedConveyor.SetBeltProfile)(belt_profile_name)                                         | Set the belt profile object through its name as shown in the UI.                                                                                                                                                                                                                                                                                                                                                            |
| [`SetBeltSpeed`](#generated.RAFeedConveyor.SetBeltSpeed)(value[, unit])                                                 | Set the value of "Belt Speed".                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetBeltThickness`](#generated.RAFeedConveyor.SetBeltThickness)(value[, unit])                                         | Set the value of "Belt Thickness".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetBeltWidth`](#generated.RAFeedConveyor.SetBeltWidth)(value[, unit])                                                 | Set the value of "Belt Width".                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetCurrentTimeStep`](#generated.RAFeedConveyor.SetCurrentTimeStep)(time_step)                                         | Sets the current time step.                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetDecelerationPeriod`](#generated.RAFeedConveyor.SetDecelerationPeriod)(value[, unit])                               | Set the value of "Deceleration Period".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetDiameter`](#generated.RAFeedConveyor.SetDiameter)(value[, unit])                                                   | Set the value of "Diameter".                                                                                                                                                                                                                                                                                                                                                                                                |
| [`SetDropBoxHeight`](#generated.RAFeedConveyor.SetDropBoxHeight)(value[, unit])                                         | Set the value of "Drop Box Height".                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetDropBoxLength`](#generated.RAFeedConveyor.SetDropBoxLength)(value[, unit])                                         | Set the value of "Drop Box Length".                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetDropBoxWidth`](#generated.RAFeedConveyor.SetDropBoxWidth)(value[, unit])                                           | Set the value of "Drop Box Width".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetFaceWidth`](#generated.RAFeedConveyor.SetFaceWidth)(value[, unit])                                                 | Set the value of "Face Width".                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetFrontPlateOffset`](#generated.RAFeedConveyor.SetFrontPlateOffset)(value[, unit])                                   | Set the value of "Front Plate Offset".                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetHeightOffset`](#generated.RAFeedConveyor.SetHeightOffset)(value[, unit])                                           | Set the value of "Height Offset".                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetHorizontalOffset`](#generated.RAFeedConveyor.SetHorizontalOffset)(value[, unit])                                   | Set the value of "Horizontal Offset".                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetLengthOffset`](#generated.RAFeedConveyor.SetLengthOffset)(value[, unit])                                           | Set the value of "Length Offset".                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetLoadingLength`](#generated.RAFeedConveyor.SetLoadingLength)(value[, unit])                                         | Set the value of "Loading Length".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetMaterial`](#generated.RAFeedConveyor.SetMaterial)(value)                                                           | Set the "Material".                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetModuleProperty`](#generated.RAFeedConveyor.SetModuleProperty)(property_name, value[, unit])                        | Set the value of a module property.                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetOffsetToIdlers`](#generated.RAFeedConveyor.SetOffsetToIdlers)(value[, unit])                                       | Set the value of "Offset To Idlers".                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetOutOfPlaneOffset`](#generated.RAFeedConveyor.SetOutOfPlaneOffset)(value[, unit])                                   | Set the value of "Out of Plane Offset".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetReturnBeltAngle`](#generated.RAFeedConveyor.SetReturnBeltAngle)(value[, unit])                                     | Set the value of "Return Belt Angle".                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetSkirtboardHeight`](#generated.RAFeedConveyor.SetSkirtboardHeight)(value[, unit])                                   | Set the value of "Skirtboard Height".                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetSkirtboardLength`](#generated.RAFeedConveyor.SetSkirtboardLength)(value[, unit])                                   | Set the value of "Skirtboard Length".                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetSphBoundaryType`](#generated.RAFeedConveyor.SetSphBoundaryType)(value)                                             | Set the value of "Sph Boundary Type".                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetTemperature`](#generated.RAFeedConveyor.SetTemperature)(value[, unit])                                             | Set the value of "Temperature".                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetThermalBoundaryConditionType`](#generated.RAFeedConveyor.SetThermalBoundaryConditionType)(value)                   | Set the value of "Thermal Boundary Condition Type".                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetTransitionLength`](#generated.RAFeedConveyor.SetTransitionLength)(value[, unit])                                   | Set the value of "Transition Length".                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetTriangleSize`](#generated.RAFeedConveyor.SetTriangleSize)(value[, unit])                                           | Set the value of "Triangle Size".                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetVerticalOffset`](#generated.RAFeedConveyor.SetVerticalOffset)(value[, unit])                                       | Set the value of "Vertical Offset".                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetWallThickness`](#generated.RAFeedConveyor.SetWallThickness)(value[, unit])                                         | Set the value of "Wall Thickness".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetWidth`](#generated.RAFeedConveyor.SetWidth)(value[, unit])                                                         | Set the value of "Width".                                                                                                                                                                                                                                                                                                                                                                                                   |

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

#### GetAccelerationPeriod(unit: Optional[str] = None)

Get the value of “Acceleration Period”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

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

#### GetAlignmentAngle(unit: Optional[str] = None)

Get the value of “Alignment Angle”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “dega”.

#### GetAvailableMaterials()

Get all available Materials.

* **Return type:**
  List[[`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)]
  A list of [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial).

#### GetBeginningStartTime(unit: Optional[str] = None)

Get the value of “Beginning Start Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetBeginningStopTime(unit: Optional[str] = None)

Get the value of “Beginning Stop Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetBeltInclineAngle(unit: Optional[str] = None)

Get the value of “Belt Incline Angle”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “rad”.

#### GetBeltProfile()

* **Return type:**
  ApiElementItem
* **Returns:**
  The API object that wraps the current belt profile.

#### GetBeltProfileName()

Get the name of the belt profile.

* **Return type:**
  str
* **Returns:**
  A string describing the type of belt profile. The returned value will be one of the strings
  in the “Belt Profile” drop-down menu in the UI.

#### GetBeltSpeed(unit: Optional[str] = None)

Get the value of “Belt Speed”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s”.

#### GetBeltThickness(unit: Optional[str] = None)

Get the value of “Belt Thickness”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetBeltWidth(unit: Optional[str] = None)

Get the value of “Belt Width”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

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

#### GetDecelerationPeriod(unit: Optional[str] = None)

Get the value of “Deceleration Period”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetDiameter(unit: Optional[str] = None)

Get the value of “Diameter”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetDropBoxHeight(unit: Optional[str] = None)

Get the value of “Drop Box Height”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetDropBoxLength(unit: Optional[str] = None)

Get the value of “Drop Box Length”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetDropBoxWidth(unit: Optional[str] = None)

Get the value of “Drop Box Width”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetElementCurve(element_name, curve_name, simulation_name=None, realization=None, time_step=None)

Return the curves for the given element and name.

* **Parameters:**
  * **element_name** (*unicode*) – The name of the element
  * **curve_name** (*unicode*) – The name of the curve
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the curve from.
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **time_step** (*TimeStep*) – For transient curves a time-step must be given.

#### GetFaceWidth(unit: Optional[str] = None)

Get the value of “Face Width”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetFrontPlateOffset(unit: Optional[str] = None)

Get the value of “Front Plate Offset”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

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

#### GetHeightOffset(unit: Optional[str] = None)

Get the value of “Height Offset”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetHorizontalOffset(unit: Optional[str] = None)

Get the value of “Horizontal Offset”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetLengthOffset(unit: Optional[str] = None)

Get the value of “Length Offset”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetLoadingLength(unit: Optional[str] = None)

Get the value of “Loading Length”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetMaterial()

Get the “Material”.

* **Return type:**
  [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)

#### GetModuleProperties()

Get the names of the module properties.

* **Return type:**
  tuple(ModulePropertyIdentifier)

#### GetModuleProperty(property_name: Union[str, ModulePropertyIdentifier], unit: Optional[str] = None)

Get the value of a module property.

* **Parameters:**
  * **property_name** (*Union**[**str**,* *ModulePropertyIdentifier**]*) – The name of the module property to get.
  * **unit** (*str*) – The unit for value, just for scalar properties. If no unit is provided,
    the returned value will be in the unit that was set before (via SetModuleProperty()).
* **Return type:**
  float, bool, str or [`RAModulePropertyList`](RAModulePropertyList.md#generated.RAModulePropertyList)
* **Returns:**
  - For basic module properties like numbers and booleans, the returned value is a basic
    Python type (float, bool, or string)
  - For input files, the returned value is the string of the full path to the file
  - For properties that are lists of other properties, the returned value is a
    : [`RAModulePropertyList`](RAModulePropertyList.md#generated.RAModulePropertyList).

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

#### GetNumpyCurve(curve_name, unit=None, realization=None)

Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.

#### GetOffsetToIdlers(unit: Optional[str] = None)

Get the value of “Offset To Idlers”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetOutOfPlaneOffset(unit: Optional[str] = None)

Get the value of “Out of Plane Offset”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetOutputVariableValue(variable_name: str)

Get the value of a previously-created output variable.

* **Parameters:**
  **variable_name** (*unicode*) – The variable name whose value we want.
* **Returns:**
  Returns a scalar with the value and unit for the given variable_name or None if no
  variable was found with the given name or if it couldn’t be computed.

#### GetReturnBeltAngle(unit: Optional[str] = None)

Get the value of “Return Belt Angle”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “rad”.

#### GetSkirtboardHeight(unit: Optional[str] = None)

Get the value of “Skirtboard Height”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetSkirtboardLength(unit: Optional[str] = None)

Get the value of “Skirtboard Length”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetSphBoundaryType()

Get “Sph Boundary Type” as a string.

* **Returns:**
  The returned value will be one of [‘free_slip’, ‘no_slip_laminar’, ‘no_slip_turbulent’].

#### GetTemperature(unit: Optional[str] = None)

Get the value of “Temperature”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “K”.

#### GetThermalBoundaryConditionType()

Get “Thermal Boundary Condition Type” as a string.

* **Returns:**
  The returned value will be one of [‘adiabatic’, ‘prescribed_temperature’, ‘cfd_coupled_temperature’].

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

#### GetTransitionLength(unit: Optional[str] = None)

Get the value of “Transition Length”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetTriangleSize(unit: Optional[str] = None)

Get the value of “Triangle Size”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetValidBeltProfileNames()

Return a list with possible values for belt profile.

* **Return type:**
  list(str)
* **Returns:**
  A list of accepted values for SetBeltProfile().

#### GetValidOptionsForModuleProperty(property_name)

Get all valid options only for properties that have a list of possible options.

* **Parameters:**
  **property_name** (*str*) – The name of the module property.
* **Return type:**
  List[str]

#### GetValidSphBoundaryTypeValues()

Get a list of all possible values for “Sph Boundary Type”.

* **Returns:**
  The returned list is [‘free_slip’, ‘no_slip_laminar’, ‘no_slip_turbulent’].

#### GetValidThermalBoundaryConditionTypeValues()

Get a list of all possible values for “Thermal Boundary Condition Type”.

* **Returns:**
  The returned list is [‘adiabatic’, ‘prescribed_temperature’, ‘cfd_coupled_temperature’].

#### GetVerticalOffset(unit: Optional[str] = None)

Get the value of “Vertical Offset”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetWallThickness(unit: Optional[str] = None)

Get the value of “Wall Thickness”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetWidth(unit: Optional[str] = None)

Get the value of “Width”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

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

Removes the process from the project.

#### SetAccelerationPeriod(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Acceleration Period”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetAlignmentAngle(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Alignment Angle”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “dega”.

#### SetBeginningStartTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Beginning Start Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetBeginningStopTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Beginning Stop Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetBeltInclineAngle(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Belt Incline Angle”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “rad”.

#### SetBeltProfile(belt_profile_name)

Set the belt profile object through its name as shown in the UI.

* **Parameters:**
  **belt_profile_name** (*str*) – Accepted values are the strings in the “Belt Profile” dropdown menu in the UI.
* **Return type:**
  ApiElementItem
* **Returns:**
  The API wrapper representing the belt profile.

#### SetBeltSpeed(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Belt Speed”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s”.

#### SetBeltThickness(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Belt Thickness”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetBeltWidth(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Belt Width”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetCurrentTimeStep(time_step)

Sets the current time step.

* **Parameters:**
  **time_step** (*ITimeStep*) – The time step to be considered the ‘current’ time step.

#### SetDecelerationPeriod(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Deceleration Period”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetDiameter(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Diameter”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetDropBoxHeight(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Drop Box Height”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetDropBoxLength(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Drop Box Length”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetDropBoxWidth(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Drop Box Width”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetFaceWidth(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Face Width”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetFrontPlateOffset(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Front Plate Offset”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetHeightOffset(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Height Offset”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetHorizontalOffset(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Horizontal Offset”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetLengthOffset(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Length Offset”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetLoadingLength(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Loading Length”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetMaterial(value)

Set the “Material”.

:param unicode, [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial) value:
: Either the API object wrapping the desired entity or its name.

#### SetModuleProperty(property_name: Union[str, ModulePropertyIdentifier], value: Union[float, bool, str], unit: Optional[str] = None)

Set the value of a module property.

* **Parameters:**
  * **property_name** (*Union**[**str**,* *ModulePropertyIdentifier**]*) – The name of the module property to set.
  * **value** (*float**,* *bool* *or* *str*) – The value to set.
    If the property_name references to an enum property then value must be an str value.
  * **unit** (*str*) – The unit for value, just for scalar properties. If no unit is provided,
    value is assumed to be the unit was set before.

#### SetOffsetToIdlers(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Offset To Idlers”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetOutOfPlaneOffset(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Out of Plane Offset”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetReturnBeltAngle(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Return Belt Angle”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “rad”.

#### SetSkirtboardHeight(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Skirtboard Height”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetSkirtboardLength(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Skirtboard Length”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetSphBoundaryType(value: str)

Set the value of “Sph Boundary Type”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘free_slip’, ‘no_slip_laminar’, ‘no_slip_turbulent’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Sph Boundary Type” option.

#### SetTemperature(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Temperature”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “K”.

#### SetThermalBoundaryConditionType(value: str)

Set the value of “Thermal Boundary Condition Type”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘adiabatic’, ‘prescribed_temperature’, ‘cfd_coupled_temperature’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Thermal Boundary Condition Type” option.

#### SetTransitionLength(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Transition Length”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetTriangleSize(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Triangle Size”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetVerticalOffset(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Vertical Offset”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetWallThickness(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Wall Thickness”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetWidth(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Width”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.
