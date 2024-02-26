# RAWall

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAWall

Rocky API Geometry model.

**Methods:**

| [`AddCurve`](#generated.RAWall.AddCurve)(curve_name, timesteps, values, unit)                                   | Add a curve to the element with a time-steps domain                                                                                                                                                                                                                                                                                                                                                                         |
|-----------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AddGridFunction`](#generated.RAWall.AddGridFunction)(grid_function_name, ...[, ...])                          | Adds a grid function to the grid.                                                                                                                                                                                                                                                                                                                                                                                           |
| [`CreateCurveOutputVariable`](#generated.RAWall.CreateCurveOutputVariable)(curve_name[, ...])                   | Used to create an output variable based on a curve which doesn't change at each new timestep (i.e.: a curve with a single value for each time).                                                                                                                                                                                                                                                                             |
| [`CreateGridFunction`](#generated.RAWall.CreateGridFunction)(values[, location, time_step])                     | Create a grid function from the given values, location and time-step.                                                                                                                                                                                                                                                                                                                                                       |
| [`CreateGridFunctionArrayOnCells`](#generated.RAWall.CreateGridFunctionArrayOnCells)([time_step])               | Creates a numpy array with the number of elements based on the cells and returns it.                                                                                                                                                                                                                                                                                                                                        |
| [`CreateGridFunctionStatisticOutputVariable`](#generated.RAWall.CreateGridFunctionStatisticOutputVariable)(...) | Used to create an output variable based on a grid function statistic (i.e.: will get a grid function, compute its statistic based on statistic_operation and then based on the statistic values will apply the operation to get a single scalar).                                                                                                                                                                           |
| [`CreateTransientCurveOutputVariable`](#generated.RAWall.CreateTransientCurveOutputVariable)(curve_name)        | Used to create an output variable based on a curve for which there's a completely new representation for each time step -- such as Power : Impact X Belt Width (i.e.: will get the curve multiple times based on the time range, compute a value for each time based on the operation, to convert the multiple curves into a single curve and then will apply the time_operation to get a single scalar from those values). |
| [`GetActivesArray`](#generated.RAWall.GetActivesArray)([time_step])                                             | Get an array representing the cells' "active" status.                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetAvailableMaterials`](#generated.RAWall.GetAvailableMaterials)()                                            | Get all available Materials.                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetBoundaryMass`](#generated.RAWall.GetBoundaryMass)([unit])                                                  | Get the value of "Boundary Mass".                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetBoundingBox`](#generated.RAWall.GetBoundingBox)([unit, time_step])                                         | Get the element's bounding box.                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetCellAreaAsArray`](#generated.RAWall.GetCellAreaAsArray)([time_step])                                       | Get an array containing the area of each cell.                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetCellCenterAsArray`](#generated.RAWall.GetCellCenterAsArray)([time_step])                                   | Get an array containing the center coordinates of each cell.                                                                                                                                                                                                                                                                                                                                                                |
| [`GetCellDzAsArray`](#generated.RAWall.GetCellDzAsArray)([time_step])                                           | Get an array containing the thickness (in Z) of each cell.                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellFromIJK`](#generated.RAWall.GetCellFromIJK)(i, j, k[, time_step])                                      | Creates a grid cell handle from the current I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetCellIJK`](#generated.RAWall.GetCellIJK)(cell_handle[, time_step])                                          | Converts the given cell handle to it's I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetCellNumberOfVertices`](#generated.RAWall.GetCellNumberOfVertices)(cell[, time_step])                       | Get an array containing the number of vertices of each cell.                                                                                                                                                                                                                                                                                                                                                                |
| [`GetCellPointsAsFunction`](#generated.RAWall.GetCellPointsAsFunction)([time_step])                             | Get a function for the points (vertices) of each cell.                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetCellVolumeAsArray`](#generated.RAWall.GetCellVolumeAsArray)([time_step])                                   | Get an array with the volume of each cell.                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCurve`](#generated.RAWall.GetCurve)(curve_name[, simulation_name, ...])                                    | Override base class method to check for a request of a grid function statistic.                                                                                                                                                                                                                                                                                                                                             |
| [`GetCurveNames`](#generated.RAWall.GetCurveNames)([simulation_name])                                           | @param simulation_name: unicode                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetCurveNamesAssociation`](#generated.RAWall.GetCurveNamesAssociation)([simulation_name])                     | Get this element's curve names.                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetDisableTime`](#generated.RAWall.GetDisableTime)([unit])                                                    | Get the value of "Disable Time".                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetElementCurve`](#generated.RAWall.GetElementCurve)(element_name, curve_name[, ...])                         | Return the curves for the given element and name.                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetEnableTime`](#generated.RAWall.GetEnableTime)([unit])                                                      | Get the value of "Enable Time".                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetGeometryQuantity`](#generated.RAWall.GetGeometryQuantity)()                                                | Get the quantity corresponding to the grid's geometry.                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetGeometryUnit`](#generated.RAWall.GetGeometryUnit)()                                                        | Get the grid's geometry's unit.                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetGravityCenter`](#generated.RAWall.GetGravityCenter)([unit])                                                | Get the value of "Gravity Center".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetGridFunction`](#generated.RAWall.GetGridFunction)(grid_function_name[, ...])                               | Gets a grid function given its name.                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetGridFunctionNames`](#generated.RAWall.GetGridFunctionNames)([translated, context])                         | Get a list of the available grid functions for this grid.                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetHorizontalOffset`](#generated.RAWall.GetHorizontalOffset)([unit])                                          | Deprecated: Use [`GetTranslation()`](#generated.RAWall.GetTranslation) instead.                                                                                                                                                                                                                                                                                                                                             |
| [`GetMaterial`](#generated.RAWall.GetMaterial)()                                                                | Get the "Material".                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetModuleProperties`](#generated.RAWall.GetModuleProperties)()                                                | Get the names of the module properties.                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetModuleProperty`](#generated.RAWall.GetModuleProperty)(property_name[, unit])                               | Get the value of a module property.                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetMomentXDirection`](#generated.RAWall.GetMomentXDirection)()                                                | Get the value of "Moment X Direction".                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetMomentYDirection`](#generated.RAWall.GetMomentYDirection)()                                                | Get the value of "Moment Y Direction".                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetMomentZDirection`](#generated.RAWall.GetMomentZDirection)()                                                | Get the value of "Moment Z Direction".                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetNumberOfCells`](#generated.RAWall.GetNumberOfCells)([time_step])                                           | Get the total number of cells.                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetNumberOfNodes`](#generated.RAWall.GetNumberOfNodes)([time_step])                                           | Get the total number of nodes (vertices).                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetNumberOfReplications`](#generated.RAWall.GetNumberOfReplications)()                                        | Get the value of "Number of Replications".                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetNumpyCurve`](#generated.RAWall.GetNumpyCurve)(curve_name[, unit, realization])                             | Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.                                                                                                                                                                                                                                                                                                                                 |
| [`GetOrientation`](#generated.RAWall.GetOrientation)([unit])                                                    | Get the orientation angles.                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetOrientationFromAngleAndVector`](#generated.RAWall.GetOrientationFromAngleAndVector)([unit])                | Get the current orientation in the form of an angle and a vector.                                                                                                                                                                                                                                                                                                                                                           |
| [`GetOrientationFromAngles`](#generated.RAWall.GetOrientationFromAngles)([unit])                                | Get the current orientation in the form of angles.                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetOrientationFromBasisVector`](#generated.RAWall.GetOrientationFromBasisVector)()                            | Get the current orientation in the form of three basis vectors.                                                                                                                                                                                                                                                                                                                                                             |
| [`GetOutOfPlaneOffset`](#generated.RAWall.GetOutOfPlaneOffset)([unit])                                          | Deprecated: Use [`GetTranslation()`](#generated.RAWall.GetTranslation) instead.                                                                                                                                                                                                                                                                                                                                             |
| [`GetOutputVariableValue`](#generated.RAWall.GetOutputVariableValue)(variable_name)                             | Get the value of a previously-created output variable.                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetPeriodicReplication`](#generated.RAWall.GetPeriodicReplication)()                                          | Get the value of "Periodic Replication".                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetPivotPoint`](#generated.RAWall.GetPivotPoint)([unit])                                                      | Get the value of "Pivot Point".                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetPrincipalMomentOfInertia`](#generated.RAWall.GetPrincipalMomentOfInertia)([unit])                          | Get the value of "Principal Moment of Inertia".                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetReplicateGeometry`](#generated.RAWall.GetReplicateGeometry)()                                              | Get the value of "Replicate Geometry".                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetReplicateTime`](#generated.RAWall.GetReplicateTime)([unit])                                                | Get the value of "Replicate Time".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetSphBoundaryType`](#generated.RAWall.GetSphBoundaryType)()                                                  | Get "Sph Boundary Type" as a string.                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetTemperature`](#generated.RAWall.GetTemperature)([unit])                                                    | Get the value of "Temperature".                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetThermalBoundaryConditionType`](#generated.RAWall.GetThermalBoundaryConditionType)()                        | Get "Thermal Boundary Condition Type" as a string.                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetTimeSet`](#generated.RAWall.GetTimeSet)()                                                                  | Get the list of time-steps associated to the grid.                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetTimeStatistics`](#generated.RAWall.GetTimeStatistics)()                                                    | Get the object responsible for handling time-statistics grid functions for this process.                                                                                                                                                                                                                                                                                                                                    |
| [`GetTimeStep`](#generated.RAWall.GetTimeStep)(time_step[, accept_global])                                      | Get the timestep corresponding to the given time.                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetTopologyShape`](#generated.RAWall.GetTopologyShape)([time_step])                                           | Get the shape of the topology (similar to the shape of numpy arrays).                                                                                                                                                                                                                                                                                                                                                       |
| [`GetTranslation`](#generated.RAWall.GetTranslation)([unit])                                                    | Get the value of "Translation".                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetTriangleSize`](#generated.RAWall.GetTriangleSize)([unit])                                                  | Get the value of "Triangle Size".                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetValidOptionsForModuleProperty`](#generated.RAWall.GetValidOptionsForModuleProperty)(property_name)         | Get all valid options only for properties that have a list of possible options.                                                                                                                                                                                                                                                                                                                                             |
| [`GetValidSphBoundaryTypeValues`](#generated.RAWall.GetValidSphBoundaryTypeValues)()                            | Get a list of all possible values for "Sph Boundary Type".                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetValidThermalBoundaryConditionTypeValues`](#generated.RAWall.GetValidThermalBoundaryConditionTypeValues)()  | Get a list of all possible values for "Thermal Boundary Condition Type".                                                                                                                                                                                                                                                                                                                                                    |
| [`GetValidWearModelValues`](#generated.RAWall.GetValidWearModelValues)()                                        | Get a list of all possible values for "Wear Model".                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetVerticalOffset`](#generated.RAWall.GetVerticalOffset)([unit])                                              | Deprecated: Use [`GetTranslation()`](#generated.RAWall.GetTranslation) instead.                                                                                                                                                                                                                                                                                                                                             |
| [`GetVolumeShearWorkRatio`](#generated.RAWall.GetVolumeShearWorkRatio)([unit])                                  | Get the value of "Volume Shear Work Ratio".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetWearModel`](#generated.RAWall.GetWearModel)()                                                              | Get "Wear Model" as a string.                                                                                                                                                                                                                                                                                                                                                                                               |
| [`HasGridFunction`](#generated.RAWall.HasGridFunction)(grid_function_name)                                      | Whether the grid has the given grid function.                                                                                                                                                                                                                                                                                                                                                                               |
| [`HasMotionFrame`](#generated.RAWall.HasMotionFrame)()                                                          | Whether the boundary is linked to a motion frame.                                                                                                                                                                                                                                                                                                                                                                           |
| [`IsCellActive`](#generated.RAWall.IsCellActive)(i, j, k[, time_step])                                          | Checks if the given cell is active or not                                                                                                                                                                                                                                                                                                                                                                                   |
| [`IterCellVertices`](#generated.RAWall.IterCellVertices)(cell[, time_step])                                     | Iterate on the vertices of active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                             |
| [`IterCells`](#generated.RAWall.IterCells)([time_step])                                                         | Iterate on the active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                         |
| [`LoadFile`](#generated.RAWall.LoadFile)(file_path[, import_scale, convert_yz])                                 | Replace the geometry representation for a new one contained on a file.                                                                                                                                                                                                                                                                                                                                                      |
| [`Modified`](#generated.RAWall.Modified)(\*args, \*\*kwargs)                                                    | Resets all the cache information after a change in the subject being tracked.                                                                                                                                                                                                                                                                                                                                               |
| [`RemoveOutputVariable`](#generated.RAWall.RemoveOutputVariable)(variable_name)                                 | Removes some output variable.                                                                                                                                                                                                                                                                                                                                                                                               |
| [`RemoveProcess`](#generated.RAWall.RemoveProcess)()                                                            | Removes the process from the project.                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetBoundaryMass`](#generated.RAWall.SetBoundaryMass)(value[, unit])                                           | Set the value of "Boundary Mass".                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetCurrentTimeStep`](#generated.RAWall.SetCurrentTimeStep)(time_step)                                         | Sets the current time step.                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetDisableTime`](#generated.RAWall.SetDisableTime)(value[, unit])                                             | Set the value of "Disable Time".                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetEnableTime`](#generated.RAWall.SetEnableTime)(value[, unit])                                               | Set the value of "Enable Time".                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetGravityCenter`](#generated.RAWall.SetGravityCenter)(values[, unit])                                        | Set the values of "Gravity Center".                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetHorizontalOffset`](#generated.RAWall.SetHorizontalOffset)(value[, unit])                                   | Deprecated: Use [`SetTranslation()`](#generated.RAWall.SetTranslation) instead.                                                                                                                                                                                                                                                                                                                                             |
| [`SetMaterial`](#generated.RAWall.SetMaterial)(value)                                                           | Set the "Material".                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetModuleProperty`](#generated.RAWall.SetModuleProperty)(property_name, value[, unit])                        | Set the value of a module property.                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetMomentXDirection`](#generated.RAWall.SetMomentXDirection)(values)                                          | Set the values of "Moment X Direction".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetMomentYDirection`](#generated.RAWall.SetMomentYDirection)(values)                                          | Set the values of "Moment Y Direction".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetMomentZDirection`](#generated.RAWall.SetMomentZDirection)(values)                                          | Set the values of "Moment Z Direction".                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetNumberOfReplications`](#generated.RAWall.SetNumberOfReplications)(value)                                   | Set the value of "Number of Replications".                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetOrientation`](#generated.RAWall.SetOrientation)(rotation[, unit])                                          | The rotation is the angles in x, y and z of the rotation in the given unit.                                                                                                                                                                                                                                                                                                                                                 |
| [`SetOrientationFromAngleAndVector`](#generated.RAWall.SetOrientationFromAngleAndVector)(angle, vector)         | The rotation uses the angle and a vector, using unit and changes the orientation mode to Angle and Vector.                                                                                                                                                                                                                                                                                                                  |
| [`SetOrientationFromAngles`](#generated.RAWall.SetOrientationFromAngles)(rotation[, unit, ...])                 | The rotation is the angles in x, y and z of the rotation.                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetOrientationFromBasisVector`](#generated.RAWall.SetOrientationFromBasisVector)(vector_x, ...)               | Sets the rotation using three basis vector and changes the orientation mode to Basis Vector.                                                                                                                                                                                                                                                                                                                                |
| [`SetOutOfPlaneOffset`](#generated.RAWall.SetOutOfPlaneOffset)(value[, unit])                                   | Deprecated: Use [`SetTranslation()`](#generated.RAWall.SetTranslation) instead.                                                                                                                                                                                                                                                                                                                                             |
| [`SetPeriodicReplication`](#generated.RAWall.SetPeriodicReplication)(value)                                     | Set the value of "Periodic Replication".                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetPivotPoint`](#generated.RAWall.SetPivotPoint)(values[, unit])                                              | Set the values of "Pivot Point".                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetPrincipalMomentOfInertia`](#generated.RAWall.SetPrincipalMomentOfInertia)(values[, unit])                  | Set the values of "Principal Moment of Inertia".                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetReplicateGeometry`](#generated.RAWall.SetReplicateGeometry)(value)                                         | Set the value of "Replicate Geometry".                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetReplicateTime`](#generated.RAWall.SetReplicateTime)(value[, unit])                                         | Set the value of "Replicate Time".                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetSphBoundaryType`](#generated.RAWall.SetSphBoundaryType)(value)                                             | Set the value of "Sph Boundary Type".                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetTemperature`](#generated.RAWall.SetTemperature)(value[, unit])                                             | Set the value of "Temperature".                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetThermalBoundaryConditionType`](#generated.RAWall.SetThermalBoundaryConditionType)(value)                   | Set the value of "Thermal Boundary Condition Type".                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetTranslation`](#generated.RAWall.SetTranslation)(values[, unit])                                            | Set the values of "Translation".                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetTriangleSize`](#generated.RAWall.SetTriangleSize)(value[, unit])                                           | Set the value of "Triangle Size".                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetUseWear`](#generated.RAWall.SetUseWear)(value)                                                             | Deprecated: Use [`SetWearModel()`](#generated.RAWall.SetWearModel) instead.                                                                                                                                                                                                                                                                                                                                                 |
| [`SetVerticalOffset`](#generated.RAWall.SetVerticalOffset)(value[, unit])                                       | Deprecated: Use [`SetTranslation()`](#generated.RAWall.SetTranslation) instead.                                                                                                                                                                                                                                                                                                                                             |
| [`SetVolumeShearWorkRatio`](#generated.RAWall.SetVolumeShearWorkRatio)(value[, unit])                           | Set the value of "Volume Shear Work Ratio".                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetWearModel`](#generated.RAWall.SetWearModel)(value)                                                         | Set the value of "Wear Model".                                                                                                                                                                                                                                                                                                                                                                                              |

**Classes:**

| [`OrientationAnglesOrder`](#generated.RAWall.OrientationAnglesOrder)(value)   | An enumeration.   |
|-------------------------------------------------------------------------------|-------------------|

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

#### GetAvailableMaterials()

Get all available Materials.

* **Return type:**
  List[[`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)]
  A list of [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial).

#### GetBoundaryMass(unit: Optional[str] = None)

Get the value of “Boundary Mass”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “kg”.

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

#### GetDisableTime(unit: Optional[str] = None)

Get the value of “Disable Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetElementCurve(element_name, curve_name, simulation_name=None, realization=None, time_step=None)

Return the curves for the given element and name.

* **Parameters:**
  * **element_name** (*unicode*) – The name of the element
  * **curve_name** (*unicode*) – The name of the curve
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the curve from.
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **time_step** (*TimeStep*) – For transient curves a time-step must be given.

#### GetEnableTime(unit: Optional[str] = None)

Get the value of “Enable Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

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

#### GetGravityCenter(unit: Optional[str] = None)

Get the value of “Gravity Center”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

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

#### GetHorizontalOffset(unit: Optional[str] = None)

Deprecated: Use [`GetTranslation()`](#generated.RAWall.GetTranslation) instead.

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

#### GetMomentXDirection()

Get the value of “Moment X Direction”.

#### GetMomentYDirection()

Get the value of “Moment Y Direction”.

#### GetMomentZDirection()

Get the value of “Moment Z Direction”.

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

#### GetNumberOfReplications()

Get the value of “Number of Replications”.

#### GetNumpyCurve(curve_name, unit=None, realization=None)

Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.

#### GetOrientation(unit: str = 'dega')

Get the orientation angles. For more specific cases, see: “GetOrientationFromAngles”,
“GetOrientationFromAngleAndVector” and “GetOrientationFromBasisVector”.

#### GetOrientationFromAngleAndVector(unit: str = 'dega')

Get the current orientation in the form of an angle and a vector.

#### GetOrientationFromAngles(unit: str = 'dega')

Get the current orientation in the form of angles.

#### GetOrientationFromBasisVector()

Get the current orientation in the form of three basis vectors.

#### GetOutOfPlaneOffset(unit: Optional[str] = None)

Deprecated: Use [`GetTranslation()`](#generated.RAWall.GetTranslation) instead.

#### GetOutputVariableValue(variable_name: str)

Get the value of a previously-created output variable.

* **Parameters:**
  **variable_name** (*unicode*) – The variable name whose value we want.
* **Returns:**
  Returns a scalar with the value and unit for the given variable_name or None if no
  variable was found with the given name or if it couldn’t be computed.

#### GetPeriodicReplication()

Get the value of “Periodic Replication”.

#### GetPivotPoint(unit: Optional[str] = None)

Get the value of “Pivot Point”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

#### GetPrincipalMomentOfInertia(unit: Optional[str] = None)

Get the value of “Principal Moment of Inertia”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “kg.m2”.

#### GetReplicateGeometry()

Get the value of “Replicate Geometry”.

#### GetReplicateTime(unit: Optional[str] = None)

Get the value of “Replicate Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

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

#### GetTranslation(unit: Optional[str] = None)

Get the value of “Translation”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

#### GetTriangleSize(unit: Optional[str] = None)

Get the value of “Triangle Size”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

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

#### GetValidWearModelValues()

Get a list of all possible values for “Wear Model”.

* **Returns:**
  The returned list is [‘none’, ‘archard’, ‘custom’].

#### GetVerticalOffset(unit: Optional[str] = None)

Deprecated: Use [`GetTranslation()`](#generated.RAWall.GetTranslation) instead.

#### GetVolumeShearWorkRatio(unit: Optional[str] = None)

Get the value of “Volume Shear Work Ratio”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m3/J”.

#### GetWearModel()

Get “Wear Model” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘archard’, ‘custom’].

#### HasGridFunction(grid_function_name)

Whether the grid has the given grid function.

* **Parameters:**
  **grid_function_name** (*unicode*) – The name of the grid function to be checked.
* **Return type:**
  bool
* **Returns:**
  Returns True if the grid function exists and False otherwise.

#### HasMotionFrame()

Whether the boundary is linked to a motion frame.

* **Returns:**
  True if boundary is linked to a motion frame False otherwise

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

#### LoadFile(file_path: str, import_scale: float = 1.0, convert_yz: bool = False)

Replace the geometry representation for a new one contained on a file.

* **Parameters:**
  * **file_path** – The file path of the STL, DXF or XGL file to import.
  * **import_scale** – The import scale to be applied to the imported geometry.
  * **convert_yz** – Whether the y and z axes of the imported geometry should be converted.

#### Modified(\*args, \*\*kwargs)

Resets all the cache information after a change in the subject being tracked.

#### *class* OrientationAnglesOrder(value)

An enumeration.

#### RemoveOutputVariable(variable_name: str)

Removes some output variable.

* **Parameters:**
  **variable_name** – The name of the variable to be removed.

#### RemoveProcess()

Removes the process from the project.

#### SetBoundaryMass(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Boundary Mass”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “kg”.

#### SetCurrentTimeStep(time_step)

Sets the current time step.

* **Parameters:**
  **time_step** (*ITimeStep*) – The time step to be considered the ‘current’ time step.

#### SetDisableTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Disable Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetEnableTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Enable Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetGravityCenter(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Gravity Center”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetHorizontalOffset(value: Union[str, float], unit: Optional[str] = None)

Deprecated: Use [`SetTranslation()`](#generated.RAWall.SetTranslation) instead.

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

#### SetMomentXDirection(values: List[Union[str, float]])

Set the values of “Moment X Direction”.

* **Parameters:**
  **values** – The values to set. The values can be heterogeneous, the element of values can be an
  expression with input variables or a float. Must have exactly 3 elements.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetMomentYDirection(values: List[Union[str, float]])

Set the values of “Moment Y Direction”.

* **Parameters:**
  **values** – The values to set. The values can be heterogeneous, the element of values can be an
  expression with input variables or a float. Must have exactly 3 elements.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetMomentZDirection(values: List[Union[str, float]])

Set the values of “Moment Z Direction”.

* **Parameters:**
  **values** – The values to set. The values can be heterogeneous, the element of values can be an
  expression with input variables or a float. Must have exactly 3 elements.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetNumberOfReplications(value: Union[str, int])

Set the value of “Number of Replications”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

#### SetOrientation(rotation: Tuple[float, float, float], unit: str = 'dega')

The rotation is the angles in x, y and z of the rotation in the given unit. For more
specific methods, see: “SetOrientationFromAngles”, “SetOrientationFromAngleAndVector” and
“SetOrientationFromBasisVector”.

#### SetOrientationFromAngleAndVector(angle: float, vector: Tuple[float, float, float], unit: str = 'dega')

The rotation uses the angle and a vector, using unit and changes the orientation mode to
Angle and Vector.

#### SetOrientationFromAngles(rotation: Tuple[float, float, float], unit: str = 'dega', local_angles: bool = True, order: str = 'XYZ')

The rotation is the angles in x, y and z of the rotation. The default unit is dega.
Additionally, local_angles can be used as well an order of the values via kwargs.

#### SetOrientationFromBasisVector(vector_x: Tuple[float, float, float], vector_y: Tuple[float, float, float], vector_z: Tuple[float, float, float])

Sets the rotation using three basis vector and changes the orientation mode to Basis Vector.

#### SetOutOfPlaneOffset(value: Union[str, float], unit: Optional[str] = None)

Deprecated: Use [`SetTranslation()`](#generated.RAWall.SetTranslation) instead.

#### SetPeriodicReplication(value: bool)

Set the value of “Periodic Replication”.

* **Parameters:**
  **value** – The value to set.

#### SetPivotPoint(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Pivot Point”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetPrincipalMomentOfInertia(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Principal Moment of Inertia”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “kg.m2”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetReplicateGeometry(value: bool)

Set the value of “Replicate Geometry”.

* **Parameters:**
  **value** – The value to set.

#### SetReplicateTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Replicate Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

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

#### SetTranslation(values: Sequence[Union[str, float]], unit: Optional[str] = None)

Set the values of “Translation”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

#### SetTriangleSize(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Triangle Size”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetUseWear(value: bool)

Deprecated: Use [`SetWearModel()`](#generated.RAWall.SetWearModel) instead.

#### SetVerticalOffset(value: Union[str, float], unit: Optional[str] = None)

Deprecated: Use [`SetTranslation()`](#generated.RAWall.SetTranslation) instead.

#### SetVolumeShearWorkRatio(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Volume Shear Work Ratio”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m3/J”.

#### SetWearModel(value: str)

Set the value of “Wear Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘none’, ‘archard’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Wear Model” option.
