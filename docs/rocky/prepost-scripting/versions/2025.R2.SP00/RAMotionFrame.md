

# RAMotionFrame

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAMotionFrame"></a>

### *class* RAMotionFrame

Rocky PrePost Scripting wrapper for a motion frame.

The class contains methods to configure a motion frame and its motions. There are some options
to retrieve a specific [`RAMotionFrame`](#generated.RAMotionFrame) in a project from a [`RAStudy`](RAStudy.md#generated.RAStudy), a
[`RAMotionFrameSource`](RAMotionFrameSource.md#generated.RAMotionFrameSource) or another [`RAMotionFrame`](#generated.RAMotionFrame):

```python
# From the RAStudy
motion_frame = study.GetElement('<motion frame name>')

# From the RAMotionFrameSource
frame_source = study.GetMotionFrameSource()
motion_frame = frame_source.GetMotionFrame('<motion frame name>')

# From a "parent" motion frame
frame_1 = study.GetElement('<frame 1 name>')
frame_2 = frame_1.GetMotionFrame('<frame 2 name>')
```

A motion frame comprises frame properties (relative position, rotation angle, free body limits,
etc) and a list of motions. The properties are manipulated via direct Get\*() and Set\*()
methods, while the motions are accessed separately via the list returned by [`GetMotions()`](#generated.RAMotionFrame.GetMotions).

Motion frames can be created on the “root” of the project’s motion frames (the source returned
in [`RAStudy.GetMotionFrameSource()`](RAStudy.md#generated.RAStudy.GetMotionFrameSource)), or as a ‘child’ frame of a pre-existing motion frame:

```python
frame_source = study.GetMotionFrameSource()

# Create a motion frame with no parent frame
frame_1 = frame_source.NewFrame()
# Configure this new frame frame_1
frame_1.SetRelativePosition(...)
frame_1.SetEnablePeriodicMotion(...)
# ... configure motions, etc.

# Create a new frame, as a child of `frame_1`
frame_2 = frame_1.NewFrame()
# Configure this new frame frame_2
frame_2.SetRelativePosition(...)
# ... configure motions, etc.
```

**Methods:**

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AddCurve`](#generated.RAMotionFrame.AddCurve)(curve_name, timesteps, values, unit)                                   | Add a curve to the element with a time-steps domain                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`AddCustomCurve`](#generated.RAMotionFrame.AddCustomCurve)(name[, curve_type, ...])                                   | Add a custom curve in the database. :param name:     The name of the curve to be set. :param curve_type:     The type of the custom curve to be added. :param output_unit:     The output unit, in which case the unit database will be queried for a quantity that makes sense. If None, the quantity is considered unknown. :param scope:     The scope to be set. :param sources:     A dict pointing the variable used to the curve association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set. |
| [`AddCustomProperty`](#generated.RAMotionFrame.AddCustomProperty)(name[, property_type, ...])                          | Add a custom property to the database                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`AddGridFunction`](#generated.RAMotionFrame.AddGridFunction)(grid_function_name, ...[, ...])                          | Adds a grid function to the grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`AddPendulumMotion`](#generated.RAMotionFrame.AddPendulumMotion)([start_time, stop_time, ...])                        | Adds a pendulum motion to the frame.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`AddRotationMotion`](#generated.RAMotionFrame.AddRotationMotion)([start_time, stop_time, ...])                        | Adds a rotation motion to the frame.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`AddTranslationMotion`](#generated.RAMotionFrame.AddTranslationMotion)([start_time, ...])                             | Adds a translation motion to the frame.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`AddVibrationMotion`](#generated.RAMotionFrame.AddVibrationMotion)([start_time, stop_time, ...])                      | Adds a vibration motion to the frame.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`ApplyTo`](#generated.RAMotionFrame.ApplyTo)(obj)                                                                     | Link this motion frame to the given geometry.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`CreateCurveOutputVariable`](#generated.RAMotionFrame.CreateCurveOutputVariable)(curve_name[, ...])                   | Used to create an output variable based on a curve which doesn't change at each new timestep (i.e.: a curve with a single value for each time).                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`CreateGridFunction`](#generated.RAMotionFrame.CreateGridFunction)(values[, location, time_step])                     | Create a grid function from the given values, location and time-step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`CreateGridFunctionArrayOnCells`](#generated.RAMotionFrame.CreateGridFunctionArrayOnCells)([time_step])               | Creates a numpy array with the number of elements based on the cells and returns it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`CreateGridFunctionStatisticOutputVariable`](#generated.RAMotionFrame.CreateGridFunctionStatisticOutputVariable)(...) | Used to create an output variable based on a grid function statistic (i.e.: will get a grid function, compute its statistic based on statistic_operation and then based on the statistic values will apply the operation to get a single scalar).                                                                                                                                                                                                                                                                                                                                             |
| [`CreateTransientCurveOutputVariable`](#generated.RAMotionFrame.CreateTransientCurveOutputVariable)(curve_name)        | Used to create an output variable based on a curve for which there's a completely new representation for each time step -- such as Power : Impact X Belt Width (i.e.: will get the curve multiple times based on the time range, compute a value for each time based on the operation, to convert the multiple curves into a single curve and then will apply the time_operation to get a single scalar from those values).                                                                                                                                                                   |
| [`EditCustomCurve`](#generated.RAMotionFrame.EditCustomCurve)(edit_curve[, new_name, ...])                             | Edit a custom curve saved in the database. :param edit_curve:     The name of the curve to be edited. :param new_name:     The new name of the curve to be set. :param sources:     A dict pointing the variable used to the curve association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set.                                                                                                                                                                                                      |
| [`EditCustomProperty`](#generated.RAMotionFrame.EditCustomProperty)(edit_property[, ...])                              | Edit a custom property saved in the database. :param edit_property:     The name of the property to be edited. :param new_name:     The new name of the property to be set. :param sources:     A dict pointing the variable used to the property association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set.                                                                                                                                                                                       |
| [`GetActivesArray`](#generated.RAMotionFrame.GetActivesArray)([time_step])                                             | Get an array representing the cells' "active" status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetBoundingBox`](#generated.RAMotionFrame.GetBoundingBox)([unit, time_step])                                         | Get the element's bounding box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCellAreaAsArray`](#generated.RAMotionFrame.GetCellAreaAsArray)([time_step])                                       | Get an array containing the area of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetCellCenterAsArray`](#generated.RAMotionFrame.GetCellCenterAsArray)([time_step])                                   | Get an array containing the center coordinates of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellDzAsArray`](#generated.RAMotionFrame.GetCellDzAsArray)([time_step])                                           | Get an array containing the thickness (in Z) of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetCellFromIJK`](#generated.RAMotionFrame.GetCellFromIJK)(i, j, k[, time_step])                                      | Creates a grid cell handle from the current I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetCellIJK`](#generated.RAMotionFrame.GetCellIJK)(cell_handle[, time_step])                                          | Converts the given cell handle to it's I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetCellNumberOfVertices`](#generated.RAMotionFrame.GetCellNumberOfVertices)(cell[, time_step])                       | Get an array containing the number of vertices of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellPointsAsFunction`](#generated.RAMotionFrame.GetCellPointsAsFunction)([time_step])                             | Get a function for the points (vertices) of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetCellVolumeAsArray`](#generated.RAMotionFrame.GetCellVolumeAsArray)([time_step])                                   | Get an array with the volume of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetCurve`](#generated.RAMotionFrame.GetCurve)(curve_name[, simulation_name, ...])                                    | Override base class method to check for a request of a grid function statistic.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCurveNames`](#generated.RAMotionFrame.GetCurveNames)([simulation_name])                                           | @param simulation_name: unicode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCurveNamesAssociation`](#generated.RAMotionFrame.GetCurveNamesAssociation)([simulation_name])                     | Get this element's curve names.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetElementCurve`](#generated.RAMotionFrame.GetElementCurve)(element_name, curve_name[, ...])                         | Return the curves for the given element and name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetEnableFbmAngularLimits`](#generated.RAMotionFrame.GetEnableFbmAngularLimits)()                                    | Get the value of "Enable Fbm Angular Limits".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetEnableFbmLinearLimits`](#generated.RAMotionFrame.GetEnableFbmLinearLimits)()                                      | Get the value of "Enable Fbm Linear Limits".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetEnablePeriodicMotion`](#generated.RAMotionFrame.GetEnablePeriodicMotion)()                                        | Get the value of "Enable Periodic Motion".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetFbmMaxAngularLimits`](#generated.RAMotionFrame.GetFbmMaxAngularLimits)([unit])                                    | Get the value of "Fbm Max Angular Limits".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetFbmMaxLinearLimits`](#generated.RAMotionFrame.GetFbmMaxLinearLimits)([unit])                                      | Get the value of "Fbm Max Linear Limits".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetFbmMinAngularLimits`](#generated.RAMotionFrame.GetFbmMinAngularLimits)([unit])                                    | Get the value of "Fbm Min Angular Limits".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetFbmMinLinearLimits`](#generated.RAMotionFrame.GetFbmMinLinearLimits)([unit])                                      | Get the value of "Fbm Min Linear Limits".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetGeometryQuantity`](#generated.RAMotionFrame.GetGeometryQuantity)()                                                | Get the quantity corresponding to the grid's geometry.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetGeometryUnit`](#generated.RAMotionFrame.GetGeometryUnit)()                                                        | Get the grid's geometry's unit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetGridFunction`](#generated.RAMotionFrame.GetGridFunction)(grid_function_name[, ...])                               | Gets a grid function given its name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetGridFunctionNames`](#generated.RAMotionFrame.GetGridFunctionNames)([translated, context])                         | Get a list of the available grid functions for this grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetKeepInPlace`](#generated.RAMotionFrame.GetKeepInPlace)()                                                          | Get the value of "Keep In Place".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetMeshColoring`](#generated.RAMotionFrame.GetMeshColoring)(window)                                                  | Get the RAMeshColoring related to the current object and a window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetMotionFrame`](#generated.RAMotionFrame.GetMotionFrame)(frame_name)                                                | Get a specific motion frame given its name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetMotions`](#generated.RAMotionFrame.GetMotions)()                                                                  | Get the list of motions in the motion frame.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetNumberOfCells`](#generated.RAMotionFrame.GetNumberOfCells)([time_step])                                           | Get the total number of cells.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetNumberOfNodes`](#generated.RAMotionFrame.GetNumberOfNodes)([time_step])                                           | Get the total number of nodes (vertices).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetNumpyCurve`](#generated.RAMotionFrame.GetNumpyCurve)(curve_name[, unit, realization])                             | Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetOrientation`](#generated.RAMotionFrame.GetOrientation)([unit])                                                    | Get the orientation angles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetOrientationFromAngleAndVector`](#generated.RAMotionFrame.GetOrientationFromAngleAndVector)([unit])                | Get the current orientation in the form of an angle and a vector.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetOrientationFromAngles`](#generated.RAMotionFrame.GetOrientationFromAngles)([unit])                                | Get the current orientation in the form of angles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetOrientationFromBasisVector`](#generated.RAMotionFrame.GetOrientationFromBasisVector)()                            | Get the current orientation in the form of three basis vectors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetOutputVariableValue`](#generated.RAMotionFrame.GetOutputVariableValue)(variable_name)                             | Get the value of a previously-created output variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetParentMotionFrame`](#generated.RAMotionFrame.GetParentMotionFrame)()                                              | Gets the parent motion frame.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetPeriodicMotionPeriod`](#generated.RAMotionFrame.GetPeriodicMotionPeriod)([unit])                                  | Get the value of "Periodic Motion Period".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetPeriodicMotionStartTime`](#generated.RAMotionFrame.GetPeriodicMotionStartTime)([unit])                            | Get the value of "Periodic Motion Start Time".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetPeriodicMotionStopTime`](#generated.RAMotionFrame.GetPeriodicMotionStopTime)([unit])                              | Get the value of "Periodic Motion Stop Time".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetRelativePosition`](#generated.RAMotionFrame.GetRelativePosition)([unit])                                          | Get the value of "Relative Position".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetRelativeRotationVector`](#generated.RAMotionFrame.GetRelativeRotationVector)([unit])                              | Deprecated: Use [`GetOrientationFromAngleAndVector()`](#generated.RAMotionFrame.GetOrientationFromAngleAndVector) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetRotationAngle`](#generated.RAMotionFrame.GetRotationAngle)([unit])                                                | Deprecated: Use [`GetOrientationFromAngleAndVector()`](#generated.RAMotionFrame.GetOrientationFromAngleAndVector) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetTimeSet`](#generated.RAMotionFrame.GetTimeSet)()                                                                  | Get the list of time-steps associated to the grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetTimeStatistics`](#generated.RAMotionFrame.GetTimeStatistics)()                                                    | Get the object responsible for handling time-statistics grid functions for this process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetTimeStep`](#generated.RAMotionFrame.GetTimeStep)(time_step[, accept_global])                                      | Get the timestep corresponding to the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetTopologyShape`](#generated.RAMotionFrame.GetTopologyShape)([time_step])                                           | Get the shape of the topology (similar to the shape of numpy arrays).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`HasGridFunction`](#generated.RAMotionFrame.HasGridFunction)(grid_function_name)                                      | Whether the grid has the given grid function.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`IsCellActive`](#generated.RAMotionFrame.IsCellActive)(i, j, k[, time_step])                                          | Checks if the given cell is active or not                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`IterCellVertices`](#generated.RAMotionFrame.IterCellVertices)(cell[, time_step])                                     | Iterate on the vertices of active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`IterCells`](#generated.RAMotionFrame.IterCells)([time_step])                                                         | Iterate on the active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`IterMotionFrames`](#generated.RAMotionFrame.IterMotionFrames)()                                                      | Iterates over all the motion frames available (recursively).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`Modified`](#generated.RAMotionFrame.Modified)(\*args, \*\*kwargs)                                                    | Resets all the cache information after a change in the subject being tracked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`NewConeCrusherFrame`](#generated.RAMotionFrame.NewConeCrusherFrame)()                                                | Creates a new cone crusher frame.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`NewFrame`](#generated.RAMotionFrame.NewFrame)()                                                                      | Creates a new motion frame.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`RemoveCustomCurve`](#generated.RAMotionFrame.RemoveCustomCurve)(name)                                                | Remove the curve from the database :param name:     The name of the curve to be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`RemoveCustomProperty`](#generated.RAMotionFrame.RemoveCustomProperty)(name)                                          | Remove the property from the database :param name:     The name of the property to be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RemoveFrame`](#generated.RAMotionFrame.RemoveFrame)(motion_frame)                                                    | Removes a previously-created motion frame.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`RemoveOutputVariable`](#generated.RAMotionFrame.RemoveOutputVariable)(variable_name)                                 | Removes some output variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RemoveProcess`](#generated.RAMotionFrame.RemoveProcess)()                                                            | Removes the process from the project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetCurrentTimeStep`](#generated.RAMotionFrame.SetCurrentTimeStep)(time_step)                                         | Sets the current time step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetEnableFbmAngularLimits`](#generated.RAMotionFrame.SetEnableFbmAngularLimits)(value)                               | Set the value of "Enable Fbm Angular Limits".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetEnableFbmLinearLimits`](#generated.RAMotionFrame.SetEnableFbmLinearLimits)(value)                                 | Set the value of "Enable Fbm Linear Limits".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetEnablePeriodicMotion`](#generated.RAMotionFrame.SetEnablePeriodicMotion)(value)                                   | Set the value of "Enable Periodic Motion".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetFbmMaxAngularLimits`](#generated.RAMotionFrame.SetFbmMaxAngularLimits)(values[, unit])                            | Set the values of "Fbm Max Angular Limits".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetFbmMaxLinearLimits`](#generated.RAMotionFrame.SetFbmMaxLinearLimits)(values[, unit])                              | Set the values of "Fbm Max Linear Limits".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetFbmMinAngularLimits`](#generated.RAMotionFrame.SetFbmMinAngularLimits)(values[, unit])                            | Set the values of "Fbm Min Angular Limits".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetFbmMinLinearLimits`](#generated.RAMotionFrame.SetFbmMinLinearLimits)(values[, unit])                              | Set the values of "Fbm Min Linear Limits".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetKeepInPlace`](#generated.RAMotionFrame.SetKeepInPlace)(value)                                                     | Set the value of "Keep In Place".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetOrientation`](#generated.RAMotionFrame.SetOrientation)(rotation[, unit])                                          | The rotation is the angles in x, y and z of the rotation in the given unit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetOrientationFromAngleAndVector`](#generated.RAMotionFrame.SetOrientationFromAngleAndVector)(angle, vector)         | The rotation uses the angle and a vector, using unit and changes the orientation mode to Angle and Vector.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetOrientationFromAngles`](#generated.RAMotionFrame.SetOrientationFromAngles)(rotation[, unit, ...])                 | The rotation is the angles in x, y and z of the rotation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetOrientationFromBasisVector`](#generated.RAMotionFrame.SetOrientationFromBasisVector)(vector_x, ...)               | Sets the rotation using three basis vector and changes the orientation mode to Basis Vector.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetPeriodicMotionPeriod`](#generated.RAMotionFrame.SetPeriodicMotionPeriod)(value[, unit])                           | Set the value of "Periodic Motion Period".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetPeriodicMotionStartTime`](#generated.RAMotionFrame.SetPeriodicMotionStartTime)(value[, unit])                     | Set the value of "Periodic Motion Start Time".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`SetPeriodicMotionStopTime`](#generated.RAMotionFrame.SetPeriodicMotionStopTime)(value[, unit])                       | Set the value of "Periodic Motion Stop Time".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetRelativePosition`](#generated.RAMotionFrame.SetRelativePosition)(values[, unit])                                  | Set the values of "Relative Position".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetRelativeRotationVector`](#generated.RAMotionFrame.SetRelativeRotationVector)(values[, unit])                      | Deprecated: Use [`SetOrientationFromAngleAndVector()`](#generated.RAMotionFrame.SetOrientationFromAngleAndVector) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetRotationAngle`](#generated.RAMotionFrame.SetRotationAngle)(value[, unit])                                         | Deprecated: Use [`SetOrientationFromAngleAndVector()`](#generated.RAMotionFrame.SetOrientationFromAngleAndVector) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

<a id="generated.RAMotionFrame.AddCurve"></a>

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

<a id="generated.RAMotionFrame.AddCustomCurve"></a>

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

<a id="generated.RAMotionFrame.AddCustomProperty"></a>

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

<a id="generated.RAMotionFrame.AddGridFunction"></a>

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

<a id="generated.RAMotionFrame.AddPendulumMotion"></a>

#### AddPendulumMotion(start_time=(0.0, 's'), stop_time=(1000.0, 's'), initial_frequency=(0.0, 'Hz'), angular_initial_amplitude=(0.0, 'rad'), direction=((0.0, 0.0, 0.0), 'm'), angular_initial_phase=(0.0, 'rad'), frequency_variation=(0.0, 'Hz/s'), angular_amplitude_variation=(0.0, 'rad/s'))

Adds a pendulum motion to the frame.

* **Parameters:**
  * **start_time** (*float*) – The start time for the motion.
  * **stop_time** (*float*) – The end time for the motion.
  * **initial_frequency** (*float*) – The initial frequency of the rotation (in Hz).
  * **angular_initial_amplitude** (*float*) – The initial angular amplitude of the rotation (in rad).
  * **direction** (*list* *(**float* *)*) – The direction of the rotation (in m).
  * **angular_initial_phase** (*list* *(**float* *)*) – The initial angular phase of the rotation (in rad).
  * **frequency_variation** (*float*) – The variation of the frequency (in Hz/s).
  * **angular_amplitude_variation** (*float*) – The angular amplitude variation (in rad/s).

<a id="generated.RAMotionFrame.AddRotationMotion"></a>

#### AddRotationMotion(start_time=(0.0, 's'), stop_time=(1000.0, 's'), angular_velocity=((0.0, 0.0, 0.0), 'rad/s'), angular_acceleration=((0.0, 0.0, 0.0), 'rad/s2'))

Adds a rotation motion to the frame.

* **Parameters:**
  * **start_time** (*float*) – The start time for the motion.
  * **stop_time** (*float*) – The end time for the motion.
  * **angular_velocity** (*list* *(**float* *)*) – The motion angular velocity (x, y, z).
  * **angular_acceleration** (*list* *(**float* *)*) – The motion angular acceleration (x, y, z).
* **Return RAMotion:**
  Returns the motion created.

<a id="generated.RAMotionFrame.AddTranslationMotion"></a>

#### AddTranslationMotion(start_time=(0.0, 's'), stop_time=(1000.0, 's'), velocity=((0.0, 0.0, 0.0), 'm/s'), acceleration=((0.0, 0.0, 0.0), 'm/s2'), define_as='fixed_velocity', final_velocity=((0.0, 0.0, 0.0), 'm/s'))

Adds a translation motion to the frame.

* **Parameters:**
  * **start_time** (*float*) – The start time for the motion.
  * **stop_time** (*float*) – The end time for the motion.
  * **velocity** (*list* *(**float* *,**float* *,**float* *)*) – The motion velocity (x, y, z) in m/s.
  * **acceleration** (*list* *(**float* *,**float* *,**float* *)*) – The motion acceleration (x, y, z) in m/s2
  * **displace_geometry** (*bool*) – Whether the geometry should be displaced with the movement or not.
  * **define_as** (*unicode*) – 

    How it should be defined. Valid values are:
    : ’fixed_velocity’
      ‘initial_and_final_velocity’
      ‘initial_velocity_and_acceleration’
  * **final_velocity** (*list* *(**float* *,**float* *,**float* *)*) – 

    The final motion velocity (x, y, z) in m/2.

    Used only if define_as == ‘initial_and_final_velocity’, in which case
    the initial velocity is given by the velocity parameter.
* **Return RAMotion:**
  Returns the motion created.

<a id="generated.RAMotionFrame.AddVibrationMotion"></a>

#### AddVibrationMotion(start_time=(0.0, 's'), stop_time=(1000.0, 's'), initial_frequency=(0.0, 'Hz'), initial_amplitude=(0.0, 'm'), direction=((0.0, 0.0, 0.0), 'm'), frequency_variation=(0.0, 'Hz/s'), amplitude_variation=(0.0, 'm/s'))

Adds a vibration motion to the frame.

* **Parameters:**
  * **start_time** (*float*) – The start time for the motion.
  * **stop_time** (*float*) – The end time for the motion.
  * **initial_frequency** (*float*) – The initial frequency of the vibration (in Hz).
  * **initial_amplitude** (*float*) – The initial amplitude of the vibration (in m).
  * **direction** (*list* *(**float* *)*) – The direction of the vibration (in m).
  * **frequency_variation** (*float*) – The variation of the frequency (in Hz/s).
  * **amplitude_variation** (*float*) – The amplitude variation (in m/s).

<a id="generated.RAMotionFrame.ApplyTo"></a>

#### ApplyTo(obj)

Link this motion frame to the given geometry.

* **Parameters:**
  **obj** (*Subject* *|**ScriptingWrapper*) – Either the actual object or the wrapper in the scripting for the object.

<a id="generated.RAMotionFrame.CreateCurveOutputVariable"></a>

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

<a id="generated.RAMotionFrame.CreateGridFunction"></a>

#### CreateGridFunction(values, location='cell', time_step='current')

Create a grid function from the given values, location and time-step.

* **Parameters:**
  * **values** (*list* *(**double* *) or* *numpy array*) – The values of the grid function to be added.
  * **time_step**

#### SEE ALSO
KAContextDependentElement.GetTimeStep

<a id="generated.RAMotionFrame.CreateGridFunctionArrayOnCells"></a>

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

<a id="generated.RAMotionFrame.CreateGridFunctionStatisticOutputVariable"></a>

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

<a id="generated.RAMotionFrame.CreateTransientCurveOutputVariable"></a>

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

<a id="generated.RAMotionFrame.EditCustomCurve"></a>

#### EditCustomCurve(edit_curve: str, new_name: str | None = None, sources: dict[str, str] | None = None, expression: str | None = None)

Edit a custom curve saved in the database.
:param edit_curve:

> The name of the curve to be edited.
* **Parameters:**
  * **new_name** – The new name of the curve to be set.
  * **sources** – A dict pointing the variable used to the curve association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RAMotionFrame.EditCustomProperty"></a>

#### EditCustomProperty(edit_property: str, new_name: str | None = None, sources: dict[str, str] | None = None, expression: str | None = None)

Edit a custom property saved in the database.
:param edit_property:

> The name of the property to be edited.
* **Parameters:**
  * **new_name** – The new name of the property to be set.
  * **sources** – A dict pointing the variable used to the property association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RAMotionFrame.GetActivesArray"></a>

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

<a id="generated.RAMotionFrame.GetBoundingBox"></a>

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

<a id="generated.RAMotionFrame.GetCellAreaAsArray"></a>

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

<a id="generated.RAMotionFrame.GetCellCenterAsArray"></a>

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

<a id="generated.RAMotionFrame.GetCellDzAsArray"></a>

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

<a id="generated.RAMotionFrame.GetCellFromIJK"></a>

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

<a id="generated.RAMotionFrame.GetCellIJK"></a>

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

<a id="generated.RAMotionFrame.GetCellNumberOfVertices"></a>

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

<a id="generated.RAMotionFrame.GetCellPointsAsFunction"></a>

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

<a id="generated.RAMotionFrame.GetCellVolumeAsArray"></a>

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

<a id="generated.RAMotionFrame.GetCurve"></a>

#### GetCurve(curve_name, simulation_name=None, realization=None, time_step=None)

Override base class method to check for a request of a grid function statistic.

<a id="generated.RAMotionFrame.GetCurveNames"></a>

#### GetCurveNames(simulation_name=None)

@param simulation_name: unicode
: An optional parameter for defining the simulation to get the curve from.

* **Returns:**
  list(str)
  The list of curve names

<a id="generated.RAMotionFrame.GetCurveNamesAssociation"></a>

#### GetCurveNamesAssociation(simulation_name=None)

Get this element’s curve names.

* **Parameters:**
  **simulation_name** (*unicode*) – The name of the simulation to query the curve names
  If None is given the current element simulation will be used
* **Return type:**
  dict(unicode, ISemanticAssociation)
* **Returns:**
  The curve names for this element in the given simulation name

<a id="generated.RAMotionFrame.GetElementCurve"></a>

#### GetElementCurve(element_name, curve_name, simulation_name=None, realization=None, time_step=None)

Return the curves for the given element and name.

* **Parameters:**
  * **element_name** (*unicode*) – The name of the element
  * **curve_name** (*unicode*) – The name of the curve
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the curve from.
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **time_step** (*TimeStep*) – For transient curves a time-step must be given.

<a id="generated.RAMotionFrame.GetEnableFbmAngularLimits"></a>

#### GetEnableFbmAngularLimits()

Get the value of “Enable Fbm Angular Limits”.

<a id="generated.RAMotionFrame.GetEnableFbmLinearLimits"></a>

#### GetEnableFbmLinearLimits()

Get the value of “Enable Fbm Linear Limits”.

<a id="generated.RAMotionFrame.GetEnablePeriodicMotion"></a>

#### GetEnablePeriodicMotion()

Get the value of “Enable Periodic Motion”.

<a id="generated.RAMotionFrame.GetFbmMaxAngularLimits"></a>

#### GetFbmMaxAngularLimits(unit: str | None = None)

Get the value of “Fbm Max Angular Limits”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “dega”.

<a id="generated.RAMotionFrame.GetFbmMaxLinearLimits"></a>

#### GetFbmMaxLinearLimits(unit: str | None = None)

Get the value of “Fbm Max Linear Limits”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

<a id="generated.RAMotionFrame.GetFbmMinAngularLimits"></a>

#### GetFbmMinAngularLimits(unit: str | None = None)

Get the value of “Fbm Min Angular Limits”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “dega”.

<a id="generated.RAMotionFrame.GetFbmMinLinearLimits"></a>

#### GetFbmMinLinearLimits(unit: str | None = None)

Get the value of “Fbm Min Linear Limits”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

<a id="generated.RAMotionFrame.GetGeometryQuantity"></a>

#### GetGeometryQuantity()

Get the quantity corresponding to the grid’s geometry.

* **Return type:**
  IQuantity
* **Returns:**
  The grid geometry quantity

<a id="generated.RAMotionFrame.GetGeometryUnit"></a>

#### GetGeometryUnit()

Get the grid’s geometry’s unit.

* **Return type:**
  unicode
* **Returns:**
  The unit for the grid geometry

<a id="generated.RAMotionFrame.GetGridFunction"></a>

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

<a id="generated.RAMotionFrame.GetGridFunctionNames"></a>

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

<a id="generated.RAMotionFrame.GetKeepInPlace"></a>

#### GetKeepInPlace()

Get the value of “Keep In Place”.

<a id="generated.RAMotionFrame.GetMeshColoring"></a>

#### GetMeshColoring(window: str | type[KAWorkspaceWindow])

Get the RAMeshColoring related to the current object and a window.

* **Parameters:**
  **window** – The window that the coloring is acting. The window must be a str of the name of the
  window or a KAWorkspaceWindow.
* **Raises:**
  **RockyApiError** – If window is not a str or KAWorkspaceWindow. Additionally, raises an error if no window
  is found or no coloring for the given item exists.

<a id="generated.RAMotionFrame.GetMotionFrame"></a>

#### GetMotionFrame(frame_name)

Get a specific motion frame given its name.

* **Parameters:**
  **frame_name** (*unicode*)
* **Return type:**
  [RAMotionFrame](#generated.RAMotionFrame)

<a id="generated.RAMotionFrame.GetMotions"></a>

#### GetMotions()

Get the list of motions in the motion frame.

* **Returns:**
  Returns a list with the motions configured.

<a id="generated.RAMotionFrame.GetNumberOfCells"></a>

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

<a id="generated.RAMotionFrame.GetNumberOfNodes"></a>

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

<a id="generated.RAMotionFrame.GetNumpyCurve"></a>

#### GetNumpyCurve(curve_name, unit=None, realization=None)

Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.

<a id="generated.RAMotionFrame.GetOrientation"></a>

#### GetOrientation(unit: str = 'dega')

Get the orientation angles. For more specific cases, see: “GetOrientationFromAngles”,
“GetOrientationFromAngleAndVector” and “GetOrientationFromBasisVector”.

<a id="generated.RAMotionFrame.GetOrientationFromAngleAndVector"></a>

#### GetOrientationFromAngleAndVector(unit: str = 'dega')

Get the current orientation in the form of an angle and a vector.

<a id="generated.RAMotionFrame.GetOrientationFromAngles"></a>

#### GetOrientationFromAngles(unit: str = 'dega')

Get the current orientation in the form of angles.

<a id="generated.RAMotionFrame.GetOrientationFromBasisVector"></a>

#### GetOrientationFromBasisVector()

Get the current orientation in the form of three basis vectors.

<a id="generated.RAMotionFrame.GetOutputVariableValue"></a>

#### GetOutputVariableValue(variable_name: str)

Get the value of a previously-created output variable.

* **Parameters:**
  **variable_name** (*unicode*) – The variable name whose value we want.
* **Returns:**
  Returns a scalar with the value and unit for the given variable_name or None if no
  variable was found with the given name or if it couldn’t be computed.

<a id="generated.RAMotionFrame.GetParentMotionFrame"></a>

#### GetParentMotionFrame()

Gets the parent motion frame.
If the Motion Frame is a RAMotionFrameSource it returns None.

* **Return type:**
  [RAMotionFrame](#generated.RAMotionFrame)

<a id="generated.RAMotionFrame.GetPeriodicMotionPeriod"></a>

#### GetPeriodicMotionPeriod(unit: str | None = None)

Get the value of “Periodic Motion Period”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAMotionFrame.GetPeriodicMotionStartTime"></a>

#### GetPeriodicMotionStartTime(unit: str | None = None)

Get the value of “Periodic Motion Start Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAMotionFrame.GetPeriodicMotionStopTime"></a>

#### GetPeriodicMotionStopTime(unit: str | None = None)

Get the value of “Periodic Motion Stop Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAMotionFrame.GetRelativePosition"></a>

#### GetRelativePosition(unit: str | None = None)

Get the value of “Relative Position”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

<a id="generated.RAMotionFrame.GetRelativeRotationVector"></a>

#### GetRelativeRotationVector(unit: str | None = None)

Deprecated: Use [`GetOrientationFromAngleAndVector()`](#generated.RAMotionFrame.GetOrientationFromAngleAndVector) instead.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m”.

<a id="generated.RAMotionFrame.GetRotationAngle"></a>

#### GetRotationAngle(unit: str | None = None)

Deprecated: Use [`GetOrientationFromAngleAndVector()`](#generated.RAMotionFrame.GetOrientationFromAngleAndVector) instead.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “dega”.

<a id="generated.RAMotionFrame.GetTimeSet"></a>

#### GetTimeSet()

Get the list of time-steps associated to the grid.

* **Return type:**
  ITimeSet
* **Returns:**
  The list of time-steps associated to the grid

<a id="generated.RAMotionFrame.GetTimeStatistics"></a>

#### GetTimeStatistics()

Get the object responsible for handling time-statistics grid functions for this process.
This call will return None if the process doesn’t support time statistics.

<a id="generated.RAMotionFrame.GetTimeStep"></a>

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

<a id="generated.RAMotionFrame.GetTopologyShape"></a>

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

<a id="generated.RAMotionFrame.HasGridFunction"></a>

#### HasGridFunction(grid_function_name)

Whether the grid has the given grid function.

* **Parameters:**
  **grid_function_name** (*unicode*) – The name of the grid function to be checked.
* **Return type:**
  bool
* **Returns:**
  Returns True if the grid function exists and False otherwise.

<a id="generated.RAMotionFrame.IsCellActive"></a>

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

<a id="generated.RAMotionFrame.IterCellVertices"></a>

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

<a id="generated.RAMotionFrame.IterCells"></a>

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

<a id="generated.RAMotionFrame.IterMotionFrames"></a>

#### IterMotionFrames()

Iterates over all the motion frames available (recursively).

* **Return iter(RAMotionFrame):**

<a id="generated.RAMotionFrame.Modified"></a>

#### Modified(\*args, \*\*kwargs)

Resets all the cache information after a change in the subject being tracked.

<a id="generated.RAMotionFrame.NewConeCrusherFrame"></a>

#### NewConeCrusherFrame()

Creates a new cone crusher frame.

* **Return type:**
  [RAConeCrusherFrame](RAConeCrusherFrame.md#generated.RAConeCrusherFrame)

<a id="generated.RAMotionFrame.NewFrame"></a>

#### NewFrame()

Creates a new motion frame.

<a id="generated.RAMotionFrame.RemoveCustomCurve"></a>

#### RemoveCustomCurve(name: str)

Remove the curve from the database
:param name:

> The name of the curve to be removed.

<a id="generated.RAMotionFrame.RemoveCustomProperty"></a>

#### RemoveCustomProperty(name: str)

Remove the property from the database
:param name:

> The name of the property to be removed.

<a id="generated.RAMotionFrame.RemoveFrame"></a>

#### RemoveFrame(motion_frame)

Removes a previously-created motion frame.

* **Parameters:**
  **motion_frame** ([*RAMotionFrame*](#generated.RAMotionFrame) *or* [*RAConeCrusherFrame*](RAConeCrusherFrame.md#generated.RAConeCrusherFrame))

<a id="generated.RAMotionFrame.RemoveOutputVariable"></a>

#### RemoveOutputVariable(variable_name: str)

Removes some output variable.

* **Parameters:**
  **variable_name** – The name of the variable to be removed.

<a id="generated.RAMotionFrame.RemoveProcess"></a>

#### RemoveProcess()

Removes the process from the project.

<a id="generated.RAMotionFrame.SetCurrentTimeStep"></a>

#### SetCurrentTimeStep(time_step)

Sets the current time step.

* **Parameters:**
  **time_step** (*ITimeStep*) – The time step to be considered the ‘current’ time step.

<a id="generated.RAMotionFrame.SetEnableFbmAngularLimits"></a>

#### SetEnableFbmAngularLimits(value: bool)

Set the value of “Enable Fbm Angular Limits”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAMotionFrame.SetEnableFbmLinearLimits"></a>

#### SetEnableFbmLinearLimits(value: bool)

Set the value of “Enable Fbm Linear Limits”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAMotionFrame.SetEnablePeriodicMotion"></a>

#### SetEnablePeriodicMotion(value: bool)

Set the value of “Enable Periodic Motion”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAMotionFrame.SetFbmMaxAngularLimits"></a>

#### SetFbmMaxAngularLimits(values: Sequence[str | float], unit: str | None = None)

Set the values of “Fbm Max Angular Limits”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “dega”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAMotionFrame.SetFbmMaxLinearLimits"></a>

#### SetFbmMaxLinearLimits(values: Sequence[str | float], unit: str | None = None)

Set the values of “Fbm Max Linear Limits”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAMotionFrame.SetFbmMinAngularLimits"></a>

#### SetFbmMinAngularLimits(values: Sequence[str | float], unit: str | None = None)

Set the values of “Fbm Min Angular Limits”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “dega”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAMotionFrame.SetFbmMinLinearLimits"></a>

#### SetFbmMinLinearLimits(values: Sequence[str | float], unit: str | None = None)

Set the values of “Fbm Min Linear Limits”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAMotionFrame.SetKeepInPlace"></a>

#### SetKeepInPlace(value: str | int)

Set the value of “Keep In Place”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAMotionFrame.SetOrientation"></a>

#### SetOrientation(rotation: tuple[float, float, float], unit: str = 'dega')

The rotation is the angles in x, y and z of the rotation in the given unit. For more
specific methods, see: “SetOrientationFromAngles”, “SetOrientationFromAngleAndVector” and
“SetOrientationFromBasisVector”.

<a id="generated.RAMotionFrame.SetOrientationFromAngleAndVector"></a>

#### SetOrientationFromAngleAndVector(angle: float, vector: tuple[float, float, float], unit: str = 'dega')

The rotation uses the angle and a vector, using unit and changes the orientation mode to
Angle and Vector.

<a id="generated.RAMotionFrame.SetOrientationFromAngles"></a>

#### SetOrientationFromAngles(rotation: tuple[float, float, float], unit: str = 'dega', local_angles: bool = True, order: str = 'XYZ')

The rotation is the angles in x, y and z of the rotation. The default unit is dega.
Additionally, local_angles can be used as well an order of the values via kwargs.

<a id="generated.RAMotionFrame.SetOrientationFromBasisVector"></a>

#### SetOrientationFromBasisVector(vector_x: tuple[float, float, float], vector_y: tuple[float, float, float], vector_z: tuple[float, float, float])

Sets the rotation using three basis vector and changes the orientation mode to Basis Vector.

<a id="generated.RAMotionFrame.SetPeriodicMotionPeriod"></a>

#### SetPeriodicMotionPeriod(value: str | float, unit: str | None = None)

Set the value of “Periodic Motion Period”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAMotionFrame.SetPeriodicMotionStartTime"></a>

#### SetPeriodicMotionStartTime(value: str | float, unit: str | None = None)

Set the value of “Periodic Motion Start Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAMotionFrame.SetPeriodicMotionStopTime"></a>

#### SetPeriodicMotionStopTime(value: str | float, unit: str | None = None)

Set the value of “Periodic Motion Stop Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAMotionFrame.SetRelativePosition"></a>

#### SetRelativePosition(values: Sequence[str | float], unit: str | None = None)

Set the values of “Relative Position”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAMotionFrame.SetRelativeRotationVector"></a>

#### SetRelativeRotationVector(values: Sequence[str | float], unit: str | None = None)

Deprecated: Use [`SetOrientationFromAngleAndVector()`](#generated.RAMotionFrame.SetOrientationFromAngleAndVector) instead.

<a id="generated.RAMotionFrame.SetRotationAngle"></a>

#### SetRotationAngle(value: str | float, unit: str | None = None)

Deprecated: Use [`SetOrientationFromAngleAndVector()`](#generated.RAMotionFrame.SetOrientationFromAngleAndVector) instead.
