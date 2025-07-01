

# RAParticle

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAParticle"></a>

### *class* RAParticle

Rocky PrePost Scripting wrapper for a particle in the project.

The wrapper corresponds to an individual Particle entry in the project’s data tree, below the
“Particles” item. Particles can be retrieved from the [`RAStudy`](RAStudy.md#generated.RAStudy) or the
[`RAParticleCollection`](RAParticleCollection.md#generated.RAParticleCollection) via:

```python
particle_1 = study.GetElement('Particle 1')
particle_2 = particle_collection[1]
particle_3 = particle_collection.GetParticle('Particle 3')
```

Most particle properties, such as name, shape, aspect ratios, etc can be set directly via methods
in this wrapper class. An exception is size-related methods, which must be configured via the
[`RASizeDistributionList`](RASizeDistributionList.md#generated.RASizeDistributionList) returned in [`GetSizeDistributionList()`](#generated.RAParticle.GetSizeDistributionList).

**Methods:**

| [`AddCurve`](#generated.RAParticle.AddCurve)(curve_name, timesteps, values, unit)                                           | Add a curve to the element with a time-steps domain                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AddCustomCurve`](#generated.RAParticle.AddCustomCurve)(name[, curve_type, ...])                                           | Add a custom curve in the database. :param name:     The name of the curve to be set. :param curve_type:     The type of the custom curve to be added. :param output_unit:     The output unit, in which case the unit database will be queried for a quantity that makes sense. If None, the quantity is considered unknown. :param scope:     The scope to be set. :param sources:     A dict pointing the variable used to the curve association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set. |
| [`AddCustomProperty`](#generated.RAParticle.AddCustomProperty)(name[, property_type, ...])                                  | Add a custom property to the database                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`AddGridFunction`](#generated.RAParticle.AddGridFunction)(grid_function_name, ...[, ...])                                  | Adds a grid function to the grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`CreateCurveOutputVariable`](#generated.RAParticle.CreateCurveOutputVariable)(curve_name[, ...])                           | Used to create an output variable based on a curve which doesn't change at each new timestep (i.e.: a curve with a single value for each time).                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`CreateGridFunction`](#generated.RAParticle.CreateGridFunction)(values[, location, time_step])                             | Create a grid function from the given values, location and time-step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`CreateGridFunctionArrayOnCells`](#generated.RAParticle.CreateGridFunctionArrayOnCells)([time_step])                       | Creates a numpy array with the number of elements based on the cells and returns it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`CreateGridFunctionStatisticOutputVariable`](#generated.RAParticle.CreateGridFunctionStatisticOutputVariable)(...)         | Used to create an output variable based on a grid function statistic (i.e.: will get a grid function, compute its statistic based on statistic_operation and then based on the statistic values will apply the operation to get a single scalar).                                                                                                                                                                                                                                                                                                                                             |
| [`CreateTransientCurveOutputVariable`](#generated.RAParticle.CreateTransientCurveOutputVariable)(curve_name)                | Used to create an output variable based on a curve for which there's a completely new representation for each time step -- such as Power : Impact X Belt Width (i.e.: will get the curve multiple times based on the time range, compute a value for each time based on the operation, to convert the multiple curves into a single curve and then will apply the time_operation to get a single scalar from those values).                                                                                                                                                                   |
| [`DisableBreakage`](#generated.RAParticle.DisableBreakage)()                                                                | Set the value of "Breakage" to False.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`DisableIncludeRotationalDeformations`](#generated.RAParticle.DisableIncludeRotationalDeformations)()                      | Set the value of "Include Rotational Deformations" to False.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`DisableRandomOrientation`](#generated.RAParticle.DisableRandomOrientation)()                                              | Set the value of "Random Orientation" to False.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`EditCustomCurve`](#generated.RAParticle.EditCustomCurve)(edit_curve[, new_name, ...])                                     | Edit a custom curve saved in the database. :param edit_curve:     The name of the curve to be edited. :param new_name:     The new name of the curve to be set. :param sources:     A dict pointing the variable used to the curve association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set.                                                                                                                                                                                                      |
| [`EditCustomProperty`](#generated.RAParticle.EditCustomProperty)(edit_property[, ...])                                      | Edit a custom property saved in the database. :param edit_property:     The name of the property to be edited. :param new_name:     The new name of the property to be set. :param sources:     A dict pointing the variable used to the property association it represents and a     string indicating in which unit the input data should be gotten. :param expression:     The expression to be set.                                                                                                                                                                                       |
| [`EnableBreakage`](#generated.RAParticle.EnableBreakage)()                                                                  | Set the value of "Breakage" to True.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`EnableIncludeRotationalDeformations`](#generated.RAParticle.EnableIncludeRotationalDeformations)()                        | Set the value of "Include Rotational Deformations" to True.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`EnableRandomOrientation`](#generated.RAParticle.EnableRandomOrientation)()                                                | Set the value of "Random Orientation" to True.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetAbt10MaximumT10Value`](#generated.RAParticle.GetAbt10MaximumT10Value)([unit])                                          | Get the value of "Abt10 Maximum T10 Value".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetAbt10MinimumSpecificEnergy`](#generated.RAParticle.GetAbt10MinimumSpecificEnergy)([unit])                              | Deprecated: Use [`GetAbt10ReferenceMinimumSpecificEnergy()`](#generated.RAParticle.GetAbt10ReferenceMinimumSpecificEnergy) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetAbt10ReferenceMinimumSpecificEnergy`](#generated.RAParticle.GetAbt10ReferenceMinimumSpecificEnergy)([unit])            | Get the value of "Abt10 Reference Minimum Specific Energy".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetAbt10ReferenceSize`](#generated.RAParticle.GetAbt10ReferenceSize)([unit])                                              | Get the value of "Abt10 Reference Size".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetAbt10SelectFunctionCoefficient`](#generated.RAParticle.GetAbt10SelectFunctionCoefficient)([unit])                      | Get the value of "Abt10 Select Function Coefficient".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetActivesArray`](#generated.RAParticle.GetActivesArray)([time_step])                                                     | Get an array representing the cells' "active" status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetAllowSelfContacts`](#generated.RAParticle.GetAllowSelfContacts)()                                                      | Get the value of "Allow Self Contacts".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetAnisotropic`](#generated.RAParticle.GetAnisotropic)()                                                                  | Deprecated: Use [`GetElasticity()`](#generated.RAParticle.GetElasticity) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetAvailableMaterials`](#generated.RAParticle.GetAvailableMaterials)()                                                    | Get all available Materials.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetBendingAngleLimit`](#generated.RAParticle.GetBendingAngleLimit)([unit])                                                | Get the value of "Bending Angle Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetBoundingBox`](#generated.RAParticle.GetBoundingBox)([unit, time_step])                                                 | Get the element's bounding box.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetBreakageModel`](#generated.RAParticle.GetBreakageModel)()                                                              | Get "Breakage Model" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetCellAreaAsArray`](#generated.RAParticle.GetCellAreaAsArray)([time_step])                                               | Get an array containing the area of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetCellCenterAsArray`](#generated.RAParticle.GetCellCenterAsArray)([time_step])                                           | Get an array containing the center coordinates of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellDzAsArray`](#generated.RAParticle.GetCellDzAsArray)([time_step])                                                   | Get an array containing the thickness (in Z) of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetCellFromIJK`](#generated.RAParticle.GetCellFromIJK)(i, j, k[, time_step])                                              | Creates a grid cell handle from the current I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetCellIJK`](#generated.RAParticle.GetCellIJK)(cell_handle[, time_step])                                                  | Converts the given cell handle to it's I, J, K indexes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetCellNumberOfVertices`](#generated.RAParticle.GetCellNumberOfVertices)(cell[, time_step])                               | Get an array containing the number of vertices of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetCellPointsAsFunction`](#generated.RAParticle.GetCellPointsAsFunction)([time_step])                                     | Get a function for the points (vertices) of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetCellVolumeAsArray`](#generated.RAParticle.GetCellVolumeAsArray)([time_step])                                           | Get an array with the volume of each cell.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetCenterOfMassOffset`](#generated.RAParticle.GetCenterOfMassOffset)([unit])                                              | Get the value of "Center of Mass Offset".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetCgmScaleFactor`](#generated.RAParticle.GetCgmScaleFactor)()                                                            | Get the value of "Cgm Scale Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetChangeMassProperties`](#generated.RAParticle.GetChangeMassProperties)()                                                | Get the value of "Change Mass Properties".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetCurve`](#generated.RAParticle.GetCurve)(curve_name[, simulation_name, ...])                                            | Override base class method to check for a request of a grid function statistic.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCurveNames`](#generated.RAParticle.GetCurveNames)([simulation_name])                                                   | @param simulation_name: unicode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetCurveNamesAssociation`](#generated.RAParticle.GetCurveNamesAssociation)([simulation_name])                             | Get this element's curve names.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetDeformationModel`](#generated.RAParticle.GetDeformationModel)()                                                        | Get "Deformation Model" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetDistributionModel`](#generated.RAParticle.GetDistributionModel)()                                                      | Get "Distribution Model" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetEdgeAngle`](#generated.RAParticle.GetEdgeAngle)([unit])                                                                | Get the value of "Edge Angle".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetElasticRatioBending`](#generated.RAParticle.GetElasticRatioBending)()                                                  | Get the value of "Elastic Ratio Bending".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetElasticRatioNormal`](#generated.RAParticle.GetElasticRatioNormal)()                                                    | Get the value of "Elastic Ratio Normal".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetElasticRatioTangential`](#generated.RAParticle.GetElasticRatioTangential)()                                            | Get the value of "Elastic Ratio Tangential".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetElasticRatioTorsion`](#generated.RAParticle.GetElasticRatioTorsion)()                                                  | Get the value of "Elastic Ratio Torsion".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetElasticity`](#generated.RAParticle.GetElasticity)()                                                                    | Get "Elasticity" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetElementCurve`](#generated.RAParticle.GetElementCurve)(element_name, curve_name[, ...])                                 | Return the curves for the given element and name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetElementDampingRatio`](#generated.RAParticle.GetElementDampingRatio)()                                                  | Get the value of "Element Damping Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetEnableBreakage`](#generated.RAParticle.GetEnableBreakage)()                                                            | Get the value of "Enable Breakage".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetEnableRandomAngle`](#generated.RAParticle.GetEnableRandomAngle)()                                                      | Get the value of "Enable Random Angle".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetEnableRotations`](#generated.RAParticle.GetEnableRotations)()                                                          | Get the value of "Enable Rotations".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetFailureRatio`](#generated.RAParticle.GetFailureRatio)()                                                                | Get the value of "Failure Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetFlexible`](#generated.RAParticle.GetFlexible)()                                                                        | Get the value of "Flexible".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetGeometryQuantity`](#generated.RAParticle.GetGeometryQuantity)()                                                        | Get the quantity corresponding to the grid's geometry.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetGeometryUnit`](#generated.RAParticle.GetGeometryUnit)()                                                                | Get the grid's geometry's unit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetGridFunction`](#generated.RAParticle.GetGridFunction)(grid_function_name[, ...])                                       | Gets a grid function given its name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetGridFunctionNames`](#generated.RAParticle.GetGridFunctionNames)([translated, context])                                 | Get a list of the available grid functions for this grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetHorizontalAspectRatio`](#generated.RAParticle.GetHorizontalAspectRatio)()                                              | Get the value of "Horizontal Aspect Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetIncludeRotationalDeformations`](#generated.RAParticle.GetIncludeRotationalDeformations)()                              | Get the value of "Include Rotational Deformations".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetInternalFriction`](#generated.RAParticle.GetInternalFriction)()                                                        | Get the value of "Internal Friction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetJointDampingRatio`](#generated.RAParticle.GetJointDampingRatio)()                                                      | Get the value of "Joint Damping Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetJointElasticRatio`](#generated.RAParticle.GetJointElasticRatio)()                                                      | Get the value of "Joint Elastic Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetJointThermalRatio`](#generated.RAParticle.GetJointThermalRatio)()                                                      | Get the value of "Joint Thermal Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetMaterial`](#generated.RAParticle.GetMaterial)()                                                                        | Get the "Material".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetMeshColoring`](#generated.RAParticle.GetMeshColoring)(window)                                                          | Get the RAMeshColoring related to the current object and a window.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetMinimumSize`](#generated.RAParticle.GetMinimumSize)([unit])                                                            | Get the value of "Minimum Size".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetMinimumSizeRatio`](#generated.RAParticle.GetMinimumSizeRatio)()                                                        | Get the value of "Minimum Size Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetMinimumVolumeFractionForFragmentDisabling`](#generated.RAParticle.GetMinimumVolumeFractionForFragmentDisabling)()      | Get the value of "Minimum Volume Fraction For Fragment Disabling".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetModuleProperties`](#generated.RAParticle.GetModuleProperties)()                                                        | Get the names of the module properties.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetModuleProperty`](#generated.RAParticle.GetModuleProperty)(property_name[, unit])                                       | Get the value of a module property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetNumberOfCells`](#generated.RAParticle.GetNumberOfCells)([time_step])                                                   | Get the total number of cells.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetNumberOfCorners`](#generated.RAParticle.GetNumberOfCorners)()                                                          | Get the value of "Number of Corners".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetNumberOfNodes`](#generated.RAParticle.GetNumberOfNodes)([time_step])                                                   | Get the total number of nodes (vertices).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetNumpyCurve`](#generated.RAParticle.GetNumpyCurve)(curve_name[, unit, realization])                                     | Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetOrientation`](#generated.RAParticle.GetOrientation)([unit])                                                            | Get the orientation angles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetOrientationFromAngleAndVector`](#generated.RAParticle.GetOrientationFromAngleAndVector)([unit])                        | Get the current orientation in the form of an angle and a vector.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetOrientationFromAngles`](#generated.RAParticle.GetOrientationFromAngles)([unit])                                        | Get the current orientation in the form of angles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetOrientationFromBasisVector`](#generated.RAParticle.GetOrientationFromBasisVector)()                                    | Get the current orientation in the form of three basis vectors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetOutputVariableValue`](#generated.RAParticle.GetOutputVariableValue)(variable_name)                                     | Get the value of a previously-created output variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetPlasticLimit`](#generated.RAParticle.GetPlasticLimit)([unit])                                                          | Get the value of "Plastic Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetPlasticRatio`](#generated.RAParticle.GetPlasticRatio)()                                                                | Get the value of "Plastic Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetPlasticityModel`](#generated.RAParticle.GetPlasticityModel)()                                                          | Get "Plasticity Model" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetPorosity`](#generated.RAParticle.GetPorosity)([unit])                                                                  | Get the value of "Porosity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetPrincipalMomentOfInertia`](#generated.RAParticle.GetPrincipalMomentOfInertia)([unit])                                  | Get the value of "Principal Moment of Inertia".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetRandomAnglesHalfRange`](#generated.RAParticle.GetRandomAnglesHalfRange)([unit])                                        | Get the value of "Random Angles Half Range".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetRatioEnergyAfterBreakage`](#generated.RAParticle.GetRatioEnergyAfterBreakage)([unit])                                  | Get the value of "Ratio Energy After Breakage".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetRemeshToTarget`](#generated.RAParticle.GetRemeshToTarget)()                                                            | Get the value of "Remesh To Target".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetRollingResistance`](#generated.RAParticle.GetRollingResistance)()                                                      | Get the value of "Rolling Resistance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetRotationAngle`](#generated.RAParticle.GetRotationAngle)([unit])                                                        | Get the value of "Rotation Angle".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetRotationVector`](#generated.RAParticle.GetRotationVector)([unit])                                                      | Get the value of "Rotation Vector".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetSecondBendingAngleLimit`](#generated.RAParticle.GetSecondBendingAngleLimit)([unit])                                    | Get the value of "Second Bending Angle Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetShape`](#generated.RAParticle.GetShape)()                                                                              | Get "Shape" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetShearStressLimit`](#generated.RAParticle.GetShearStressLimit)([unit])                                                  | Get the value of "Shear Stress Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetSideAngle`](#generated.RAParticle.GetSideAngle)()                                                                      | Get the value of "Side Angle".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetSizeDistributionList`](#generated.RAParticle.GetSizeDistributionList)()                                                | Get a list of size distribution entries                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetSizeType`](#generated.RAParticle.GetSizeType)()                                                                        | Get "Size Type" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`GetSmoothness`](#generated.RAParticle.GetSmoothness)()                                                                    | Get the value of "Smoothness".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetSuperquadricDegree`](#generated.RAParticle.GetSuperquadricDegree)()                                                    | Get the value of "Superquadric Degree".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetSurfaceEnergy`](#generated.RAParticle.GetSurfaceEnergy)([unit])                                                        | Get the value of "Surface Energy".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetT10Formula`](#generated.RAParticle.GetT10Formula)()                                                                    | Get "T10 Formula" as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetTargetNumberOfElements`](#generated.RAParticle.GetTargetNumberOfElements)()                                            | Get the value of "Target Number of Elements".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetTavaresA`](#generated.RAParticle.GetTavaresA)([unit])                                                                  | Get the value of "Tavares A".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetTavaresB`](#generated.RAParticle.GetTavaresB)([unit])                                                                  | Get the value of "Tavares B".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetTavaresD0`](#generated.RAParticle.GetTavaresD0)([unit])                                                                | Get the value of "Tavares D0".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetTavaresEInf`](#generated.RAParticle.GetTavaresEInf)([unit])                                                            | Get the value of "Tavares E Inf".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetTavaresGamma`](#generated.RAParticle.GetTavaresGamma)([unit])                                                          | Get the value of "Tavares Gamma".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetTavaresMinimumEnergy`](#generated.RAParticle.GetTavaresMinimumEnergy)([unit])                                          | Get the value of "Tavares Minimum Energy".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetTavaresPhi`](#generated.RAParticle.GetTavaresPhi)([unit])                                                              | Get the value of "Tavares Phi".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetTavaresRatioEmax`](#generated.RAParticle.GetTavaresRatioEmax)([unit])                                                  | Get the value of "Tavares Ratio Emax".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`GetTavaresSigmaSquared`](#generated.RAParticle.GetTavaresSigmaSquared)([unit])                                            | Get the value of "Tavares Sigma Squared".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetTensileStressLimit`](#generated.RAParticle.GetTensileStressLimit)([unit])                                              | Get the value of "Tensile Stress Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetThickness`](#generated.RAParticle.GetThickness)([unit])                                                                | Get the value of "Thickness".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`GetTimeSet`](#generated.RAParticle.GetTimeSet)()                                                                          | Get the list of time-steps associated to the grid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetTimeStatistics`](#generated.RAParticle.GetTimeStatistics)()                                                            | Get the object responsible for handling time-statistics grid functions for this process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`GetTimeStep`](#generated.RAParticle.GetTimeStep)(time_step[, accept_global])                                              | Get the timestep corresponding to the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`GetTopologyShape`](#generated.RAParticle.GetTopologyShape)([time_step])                                                   | Get the shape of the topology (similar to the shape of numpy arrays).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`GetTorsionAngleLimit`](#generated.RAParticle.GetTorsionAngleLimit)([unit])                                                | Get the value of "Torsion Angle Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetUseMultipleElements`](#generated.RAParticle.GetUseMultipleElements)()                                                  | Whether the particle's Composition is "Multiple Elements".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetValidBreakageModelValues`](#generated.RAParticle.GetValidBreakageModelValues)()                                        | Get a list of all possible values for "Breakage Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`GetValidDeformationModelValues`](#generated.RAParticle.GetValidDeformationModelValues)()                                  | Get a list of all possible values for "Deformation Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetValidDistributionModelValues`](#generated.RAParticle.GetValidDistributionModelValues)()                                | Get a list of all possible values for "Distribution Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`GetValidElasticityValues`](#generated.RAParticle.GetValidElasticityValues)()                                              | Get a list of all possible values for "Elasticity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`GetValidOptionsForModuleProperty`](#generated.RAParticle.GetValidOptionsForModuleProperty)(property_name)                 | Get all valid options only for properties that have a list of possible options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetValidPlasticityModelValues`](#generated.RAParticle.GetValidPlasticityModelValues)()                                    | Get a list of all possible values for "Plasticity Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetValidShapeValues`](#generated.RAParticle.GetValidShapeValues)()                                                        | Get a list of all possible values for "Shape".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GetValidSizeTypeValues`](#generated.RAParticle.GetValidSizeTypeValues)()                                                  | Get a list of all possible values for "Size Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`GetValidT10FormulaValues`](#generated.RAParticle.GetValidT10FormulaValues)()                                              | Get a list of all possible values for "T10 Formula".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`GetVerticalAspectRatio`](#generated.RAParticle.GetVerticalAspectRatio)()                                                  | Get the value of "Vertical Aspect Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`GetVonMisesStressLimit`](#generated.RAParticle.GetVonMisesStressLimit)([unit])                                            | Get the value of "Von Mises Stress Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`GetWithFailure`](#generated.RAParticle.GetWithFailure)()                                                                  | Get the value of "With Failure".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`GetXDirection`](#generated.RAParticle.GetXDirection)([unit])                                                              | Get the value of "X Direction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetYDirection`](#generated.RAParticle.GetYDirection)([unit])                                                              | Get the value of "Y Direction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`GetZDirection`](#generated.RAParticle.GetZDirection)([unit])                                                              | Get the value of "Z Direction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`HasGridFunction`](#generated.RAParticle.HasGridFunction)(grid_function_name)                                              | Whether the grid has the given grid function.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`ImportCustomFiber`](#generated.RAParticle.ImportCustomFiber)(filename)                                                    | Import a custom fiber shape from the given filename into this particle.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`ImportFiberFromTXT`](#generated.RAParticle.ImportFiberFromTXT)(stl_filename)                                              | Import a custom fiber shape from the given txt filename into this particle.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`ImportFromSTL`](#generated.RAParticle.ImportFromSTL)(stl_filename, as_concave[, ...])                                     | Import a custom shape from the given stl filename into this particle.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`IsBreakageEnabled`](#generated.RAParticle.IsBreakageEnabled)()                                                            | Check if the "Breakage" is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`IsCellActive`](#generated.RAParticle.IsCellActive)(i, j, k[, time_step])                                                  | Checks if the given cell is active or not                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`IsConcave`](#generated.RAParticle.IsConcave)()                                                                            | Returns True if the particle is a concave custom polyhedron, and False otherwise.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`IsIncludeRotationalDeformationsEnabled`](#generated.RAParticle.IsIncludeRotationalDeformationsEnabled)()                  | Check if the "Include Rotational Deformations" is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`IsRandomOrientationEnabled`](#generated.RAParticle.IsRandomOrientationEnabled)()                                          | Check if the "Random Orientation" is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`IterCellVertices`](#generated.RAParticle.IterCellVertices)(cell[, time_step])                                             | Iterate on the vertices of active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`IterCells`](#generated.RAParticle.IterCells)([time_step])                                                                 | Iterate on the active grid cells at the given time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`Modified`](#generated.RAParticle.Modified)(\*args, \*\*kwargs)                                                            | Resets all the cache information after a change in the subject being tracked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RemoveCustomCurve`](#generated.RAParticle.RemoveCustomCurve)(name)                                                        | Remove the curve from the database :param name:     The name of the curve to be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`RemoveCustomProperty`](#generated.RAParticle.RemoveCustomProperty)(name)                                                  | Remove the property from the database :param name:     The name of the property to be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`RemoveOutputVariable`](#generated.RAParticle.RemoveOutputVariable)(variable_name)                                         | Removes some output variable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`RemoveProcess`](#generated.RAParticle.RemoveProcess)()                                                                    | Removes the process from the project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetAbt10MaximumT10Value`](#generated.RAParticle.SetAbt10MaximumT10Value)(value[, unit])                                   | Set the value of "Abt10 Maximum T10 Value".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetAbt10MinimumSpecificEnergy`](#generated.RAParticle.SetAbt10MinimumSpecificEnergy)(value[, unit])                       | Deprecated: Use [`SetAbt10ReferenceMinimumSpecificEnergy()`](#generated.RAParticle.SetAbt10ReferenceMinimumSpecificEnergy) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetAbt10ReferenceMinimumSpecificEnergy`](#generated.RAParticle.SetAbt10ReferenceMinimumSpecificEnergy)(value)             | Set the value of "Abt10 Reference Minimum Specific Energy".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetAbt10ReferenceSize`](#generated.RAParticle.SetAbt10ReferenceSize)(value[, unit])                                       | Set the value of "Abt10 Reference Size".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetAbt10SelectFunctionCoefficient`](#generated.RAParticle.SetAbt10SelectFunctionCoefficient)(value[, unit])               | Set the value of "Abt10 Select Function Coefficient".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetAllowSelfContacts`](#generated.RAParticle.SetAllowSelfContacts)(value)                                                 | Set the value of "Allow Self Contacts".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetAnisotropic`](#generated.RAParticle.SetAnisotropic)(value)                                                             | Set the value of "Anisotropic".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetBendingAngleLimit`](#generated.RAParticle.SetBendingAngleLimit)(value[, unit])                                         | Set the value of "Bending Angle Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetBreakageModel`](#generated.RAParticle.SetBreakageModel)(value)                                                         | Set the value of "Breakage Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetCenterOfMassOffset`](#generated.RAParticle.SetCenterOfMassOffset)(values[, unit])                                      | Set the values of "Center of Mass Offset".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetCgmScaleFactor`](#generated.RAParticle.SetCgmScaleFactor)(value)                                                       | Set the value of "Cgm Scale Factor".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetChangeMassProperties`](#generated.RAParticle.SetChangeMassProperties)(value)                                           | Set the value of "Change Mass Properties".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetCurrentTimeStep`](#generated.RAParticle.SetCurrentTimeStep)(time_step)                                                 | Sets the current time step.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetDeformationModel`](#generated.RAParticle.SetDeformationModel)(value)                                                   | Set the value of "Deformation Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetDistributionModel`](#generated.RAParticle.SetDistributionModel)(value)                                                 | Set the value of "Distribution Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetEdgeAngle`](#generated.RAParticle.SetEdgeAngle)(value[, unit])                                                         | Set the value of "Edge Angle".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`SetElasticRatioBending`](#generated.RAParticle.SetElasticRatioBending)(value)                                             | Set the value of "Elastic Ratio Bending".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetElasticRatioNormal`](#generated.RAParticle.SetElasticRatioNormal)(value)                                               | Set the value of "Elastic Ratio Normal".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetElasticRatioTangential`](#generated.RAParticle.SetElasticRatioTangential)(value)                                       | Set the value of "Elastic Ratio Tangential".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetElasticRatioTorsion`](#generated.RAParticle.SetElasticRatioTorsion)(value)                                             | Set the value of "Elastic Ratio Torsion".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetElasticity`](#generated.RAParticle.SetElasticity)(value)                                                               | Set the value of "Elasticity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`SetElementDampingRatio`](#generated.RAParticle.SetElementDampingRatio)(value)                                             | Set the value of "Element Damping Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetEnableBreakage`](#generated.RAParticle.SetEnableBreakage)(value)                                                       | Set the value of "Enable Breakage".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetEnableRandomAngle`](#generated.RAParticle.SetEnableRandomAngle)(value)                                                 | Set the value of "Enable Random Angle".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetEnableRotations`](#generated.RAParticle.SetEnableRotations)(value)                                                     | Set the value of "Enable Rotations".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetFailureRatio`](#generated.RAParticle.SetFailureRatio)(value)                                                           | Set the value of "Failure Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetFlexible`](#generated.RAParticle.SetFlexible)(value)                                                                   | Set the value of "Flexible".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetHorizontalAspectRatio`](#generated.RAParticle.SetHorizontalAspectRatio)(value)                                         | Set the value of "Horizontal Aspect Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetIncludeRotationalDeformations`](#generated.RAParticle.SetIncludeRotationalDeformations)(value)                         | Set the value of "Include Rotational Deformations".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetInternalFriction`](#generated.RAParticle.SetInternalFriction)(value)                                                   | Set the value of "Internal Friction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetJointDampingRatio`](#generated.RAParticle.SetJointDampingRatio)(value)                                                 | Set the value of "Joint Damping Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetJointElasticRatio`](#generated.RAParticle.SetJointElasticRatio)(value)                                                 | Set the value of "Joint Elastic Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetJointThermalRatio`](#generated.RAParticle.SetJointThermalRatio)(value)                                                 | Set the value of "Joint Thermal Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetMaterial`](#generated.RAParticle.SetMaterial)(value)                                                                   | Set the "Material".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetMinimumSize`](#generated.RAParticle.SetMinimumSize)(value[, unit])                                                     | Set the value of "Minimum Size".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetMinimumSizeRatio`](#generated.RAParticle.SetMinimumSizeRatio)(value)                                                   | Set the value of "Minimum Size Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetMinimumVolumeFractionForFragmentDisabling`](#generated.RAParticle.SetMinimumVolumeFractionForFragmentDisabling)(value) | Set the value of "Minimum Volume Fraction For Fragment Disabling".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetModuleProperty`](#generated.RAParticle.SetModuleProperty)(property_name, value[, unit])                                | Set the value of a module property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`SetNumberOfCorners`](#generated.RAParticle.SetNumberOfCorners)(value)                                                     | Set the value of "Number of Corners".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`SetOrientation`](#generated.RAParticle.SetOrientation)(rotation[, unit])                                                  | The rotation is the angles in x, y and z of the rotation in the given unit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`SetOrientationFromAngleAndVector`](#generated.RAParticle.SetOrientationFromAngleAndVector)(angle, vector)                 | The rotation uses the angle and a vector, using unit and changes the orientation mode to Angle and Vector.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetOrientationFromAngles`](#generated.RAParticle.SetOrientationFromAngles)(rotation[, unit, ...])                         | The rotation is the angles in x, y and z of the rotation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetOrientationFromBasisVector`](#generated.RAParticle.SetOrientationFromBasisVector)(vector_x, ...)                       | Sets the rotation using three basis vector and changes the orientation mode to Basis Vector.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetPlasticLimit`](#generated.RAParticle.SetPlasticLimit)(value[, unit])                                                   | Set the value of "Plastic Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetPlasticRatio`](#generated.RAParticle.SetPlasticRatio)(value)                                                           | Set the value of "Plastic Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetPlasticityModel`](#generated.RAParticle.SetPlasticityModel)(value)                                                     | Set the value of "Plasticity Model".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetPorosity`](#generated.RAParticle.SetPorosity)(value[, unit])                                                           | Set the value of "Porosity".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`SetPrincipalMomentOfInertia`](#generated.RAParticle.SetPrincipalMomentOfInertia)(values[, unit])                          | Set the values of "Principal Moment of Inertia".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetRandomAnglesHalfRange`](#generated.RAParticle.SetRandomAnglesHalfRange)(values[, unit])                                | Set the values of "Random Angles Half Range".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetRatioEnergyAfterBreakage`](#generated.RAParticle.SetRatioEnergyAfterBreakage)(value[, unit])                           | Set the value of "Ratio Energy After Breakage".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetRemeshToTarget`](#generated.RAParticle.SetRemeshToTarget)(value)                                                       | Set the value of "Remesh To Target".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetRollingResistance`](#generated.RAParticle.SetRollingResistance)(value)                                                 | Set the value of "Rolling Resistance".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetRotationAngle`](#generated.RAParticle.SetRotationAngle)(value[, unit])                                                 | Set the value of "Rotation Angle".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetRotationVector`](#generated.RAParticle.SetRotationVector)(values[, unit])                                              | Set the values of "Rotation Vector".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`SetSecondBendingAngleLimit`](#generated.RAParticle.SetSecondBendingAngleLimit)(value[, unit])                             | Set the value of "Second Bending Angle Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`SetShape`](#generated.RAParticle.SetShape)(value)                                                                         | Set the value of "Shape".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetShearStressLimit`](#generated.RAParticle.SetShearStressLimit)(value[, unit])                                           | Set the value of "Shear Stress Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetSideAngle`](#generated.RAParticle.SetSideAngle)(value)                                                                 | Set the value of "Side Angle".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`SetSizeType`](#generated.RAParticle.SetSizeType)(value)                                                                   | Set the value of "Size Type".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetSmoothness`](#generated.RAParticle.SetSmoothness)(value)                                                               | Set the value of "Smoothness".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`SetSuperquadricDegree`](#generated.RAParticle.SetSuperquadricDegree)(value)                                               | Set the value of "Superquadric Degree".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetSurfaceEnergy`](#generated.RAParticle.SetSurfaceEnergy)(value[, unit])                                                 | Set the value of "Surface Energy".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`SetT10Formula`](#generated.RAParticle.SetT10Formula)(value)                                                               | Set the value of "T10 Formula".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetTargetNumberOfElements`](#generated.RAParticle.SetTargetNumberOfElements)(value)                                       | Set the value of "Target Number of Elements".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetTavaresA`](#generated.RAParticle.SetTavaresA)(value[, unit])                                                           | Set the value of "Tavares A".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetTavaresB`](#generated.RAParticle.SetTavaresB)(value[, unit])                                                           | Set the value of "Tavares B".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetTavaresD0`](#generated.RAParticle.SetTavaresD0)(value[, unit])                                                         | Set the value of "Tavares D0".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`SetTavaresEInf`](#generated.RAParticle.SetTavaresEInf)(value[, unit])                                                     | Set the value of "Tavares E Inf".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetTavaresGamma`](#generated.RAParticle.SetTavaresGamma)(value[, unit])                                                   | Set the value of "Tavares Gamma".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`SetTavaresMinimumEnergy`](#generated.RAParticle.SetTavaresMinimumEnergy)(value[, unit])                                   | Set the value of "Tavares Minimum Energy".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetTavaresPhi`](#generated.RAParticle.SetTavaresPhi)(value[, unit])                                                       | Set the value of "Tavares Phi".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`SetTavaresRatioEmax`](#generated.RAParticle.SetTavaresRatioEmax)(value[, unit])                                           | Set the value of "Tavares Ratio Emax".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`SetTavaresSigmaSquared`](#generated.RAParticle.SetTavaresSigmaSquared)(value[, unit])                                     | Set the value of "Tavares Sigma Squared".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetTensileStressLimit`](#generated.RAParticle.SetTensileStressLimit)(value[, unit])                                       | Set the value of "Tensile Stress Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`SetThickness`](#generated.RAParticle.SetThickness)(value[, unit])                                                         | Set the value of "Thickness".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`SetTorsionAngleLimit`](#generated.RAParticle.SetTorsionAngleLimit)(value[, unit])                                         | Set the value of "Torsion Angle Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`SetUseMultipleElements`](#generated.RAParticle.SetUseMultipleElements)(value)                                             | Set the particle's Composition to "Multiple Elements" (True) or "Single Elements" (False).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetVerticalAspectRatio`](#generated.RAParticle.SetVerticalAspectRatio)(value)                                             | Set the value of "Vertical Aspect Ratio".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`SetVonMisesStressLimit`](#generated.RAParticle.SetVonMisesStressLimit)(value[, unit])                                     | Set the value of "Von Mises Stress Limit".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`SetWithFailure`](#generated.RAParticle.SetWithFailure)(value)                                                             | Set the value of "With Failure".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetXDirection`](#generated.RAParticle.SetXDirection)(values[, unit])                                                      | Set the values of "X Direction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetYDirection`](#generated.RAParticle.SetYDirection)(values[, unit])                                                      | Set the values of "Y Direction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`SetZDirection`](#generated.RAParticle.SetZDirection)(values[, unit])                                                      | Set the values of "Z Direction".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

<a id="generated.RAParticle.AddCurve"></a>

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

<a id="generated.RAParticle.AddCustomCurve"></a>

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

<a id="generated.RAParticle.AddCustomProperty"></a>

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

<a id="generated.RAParticle.AddGridFunction"></a>

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

<a id="generated.RAParticle.CreateCurveOutputVariable"></a>

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

<a id="generated.RAParticle.CreateGridFunction"></a>

#### CreateGridFunction(values, location='cell', time_step='current')

Create a grid function from the given values, location and time-step.

* **Parameters:**
  * **values** (*list* *(**double* *) or* *numpy array*) – The values of the grid function to be added.
  * **time_step**

#### SEE ALSO
KAContextDependentElement.GetTimeStep

<a id="generated.RAParticle.CreateGridFunctionArrayOnCells"></a>

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

<a id="generated.RAParticle.CreateGridFunctionStatisticOutputVariable"></a>

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

<a id="generated.RAParticle.CreateTransientCurveOutputVariable"></a>

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

<a id="generated.RAParticle.DisableBreakage"></a>

#### DisableBreakage()

Set the value of “Breakage” to False.

<a id="generated.RAParticle.DisableIncludeRotationalDeformations"></a>

#### DisableIncludeRotationalDeformations()

Set the value of “Include Rotational Deformations” to False.

<a id="generated.RAParticle.DisableRandomOrientation"></a>

#### DisableRandomOrientation()

Set the value of “Random Orientation” to False.

<a id="generated.RAParticle.EditCustomCurve"></a>

#### EditCustomCurve(edit_curve: str, new_name: str | None = None, sources: dict[str, str] | None = None, expression: str | None = None)

Edit a custom curve saved in the database.
:param edit_curve:

> The name of the curve to be edited.
* **Parameters:**
  * **new_name** – The new name of the curve to be set.
  * **sources** – A dict pointing the variable used to the curve association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RAParticle.EditCustomProperty"></a>

#### EditCustomProperty(edit_property: str, new_name: str | None = None, sources: dict[str, str] | None = None, expression: str | None = None)

Edit a custom property saved in the database.
:param edit_property:

> The name of the property to be edited.
* **Parameters:**
  * **new_name** – The new name of the property to be set.
  * **sources** – A dict pointing the variable used to the property association it represents and a
    string indicating in which unit the input data should be gotten.
  * **expression** – The expression to be set.

<a id="generated.RAParticle.EnableBreakage"></a>

#### EnableBreakage()

Set the value of “Breakage” to True.

<a id="generated.RAParticle.EnableIncludeRotationalDeformations"></a>

#### EnableIncludeRotationalDeformations()

Set the value of “Include Rotational Deformations” to True.

<a id="generated.RAParticle.EnableRandomOrientation"></a>

#### EnableRandomOrientation()

Set the value of “Random Orientation” to True.

<a id="generated.RAParticle.GetAbt10MaximumT10Value"></a>

#### GetAbt10MaximumT10Value(unit: str | None = None)

Get the value of “Abt10 Maximum T10 Value”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “%”.

<a id="generated.RAParticle.GetAbt10MinimumSpecificEnergy"></a>

#### GetAbt10MinimumSpecificEnergy(unit: str | None = None)

Deprecated: Use [`GetAbt10ReferenceMinimumSpecificEnergy()`](#generated.RAParticle.GetAbt10ReferenceMinimumSpecificEnergy) instead.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “J/kg”.

<a id="generated.RAParticle.GetAbt10ReferenceMinimumSpecificEnergy"></a>

#### GetAbt10ReferenceMinimumSpecificEnergy(unit: str | None = None)

Get the value of “Abt10 Reference Minimum Specific Energy”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “J/kg”.

<a id="generated.RAParticle.GetAbt10ReferenceSize"></a>

#### GetAbt10ReferenceSize(unit: str | None = None)

Get the value of “Abt10 Reference Size”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RAParticle.GetAbt10SelectFunctionCoefficient"></a>

#### GetAbt10SelectFunctionCoefficient(unit: str | None = None)

Get the value of “Abt10 Select Function Coefficient”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “kg/J”.

<a id="generated.RAParticle.GetActivesArray"></a>

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

<a id="generated.RAParticle.GetAllowSelfContacts"></a>

#### GetAllowSelfContacts()

Get the value of “Allow Self Contacts”.

<a id="generated.RAParticle.GetAnisotropic"></a>

#### GetAnisotropic()

Deprecated: Use [`GetElasticity()`](#generated.RAParticle.GetElasticity) instead.

* **Return type:**
  bool

<a id="generated.RAParticle.GetAvailableMaterials"></a>

#### GetAvailableMaterials()

Get all available Materials.

* **Return type:**
  List[[`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)]
  A list of [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial).

<a id="generated.RAParticle.GetBendingAngleLimit"></a>

#### GetBendingAngleLimit(unit: str | None = None)

Get the value of “Bending Angle Limit”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “dega”.

<a id="generated.RAParticle.GetBoundingBox"></a>

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

<a id="generated.RAParticle.GetBreakageModel"></a>

#### GetBreakageModel()

Get “Breakage Model” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘ab_t10’, ‘professor_tavares’, ‘instantaneous_custom’, ‘griffith_surface_energy’, ‘shear_stress_criterion’, ‘tensile_stress_criterion’, ‘tensile_or_shear_criterion’, ‘von_mises_stress_criterion’, ‘discrete_custom’].

<a id="generated.RAParticle.GetCellAreaAsArray"></a>

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

<a id="generated.RAParticle.GetCellCenterAsArray"></a>

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

<a id="generated.RAParticle.GetCellDzAsArray"></a>

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

<a id="generated.RAParticle.GetCellFromIJK"></a>

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

<a id="generated.RAParticle.GetCellIJK"></a>

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

<a id="generated.RAParticle.GetCellNumberOfVertices"></a>

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

<a id="generated.RAParticle.GetCellPointsAsFunction"></a>

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

<a id="generated.RAParticle.GetCellVolumeAsArray"></a>

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

<a id="generated.RAParticle.GetCenterOfMassOffset"></a>

#### GetCenterOfMassOffset(unit: str | None = None)

Get the value of “Center of Mass Offset”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “%”.

<a id="generated.RAParticle.GetCgmScaleFactor"></a>

#### GetCgmScaleFactor()

Get the value of “Cgm Scale Factor”.

<a id="generated.RAParticle.GetChangeMassProperties"></a>

#### GetChangeMassProperties()

Get the value of “Change Mass Properties”.

<a id="generated.RAParticle.GetCurve"></a>

#### GetCurve(curve_name, simulation_name=None, realization=None, time_step=None)

Override base class method to check for a request of a grid function statistic.

<a id="generated.RAParticle.GetCurveNames"></a>

#### GetCurveNames(simulation_name=None)

@param simulation_name: unicode
: An optional parameter for defining the simulation to get the curve from.

* **Returns:**
  list(str)
  The list of curve names

<a id="generated.RAParticle.GetCurveNamesAssociation"></a>

#### GetCurveNamesAssociation(simulation_name=None)

Get this element’s curve names.

* **Parameters:**
  **simulation_name** (*unicode*) – The name of the simulation to query the curve names
  If None is given the current element simulation will be used
* **Return type:**
  dict(unicode, ISemanticAssociation)
* **Returns:**
  The curve names for this element in the given simulation name

<a id="generated.RAParticle.GetDeformationModel"></a>

#### GetDeformationModel()

Get “Deformation Model” as a string.

* **Returns:**
  The returned value will be one of [‘none’, ‘elastic’, ‘plastic’].

<a id="generated.RAParticle.GetDistributionModel"></a>

#### GetDistributionModel()

Get “Distribution Model” as a string.

* **Returns:**
  The returned value will be one of [‘gaudin_schumann’, ‘incomplete_beta’, ‘custom’].

<a id="generated.RAParticle.GetEdgeAngle"></a>

#### GetEdgeAngle(unit: str | None = None)

Get the value of “Edge Angle”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “dega”.

<a id="generated.RAParticle.GetElasticRatioBending"></a>

#### GetElasticRatioBending()

Get the value of “Elastic Ratio Bending”.

<a id="generated.RAParticle.GetElasticRatioNormal"></a>

#### GetElasticRatioNormal()

Get the value of “Elastic Ratio Normal”.

<a id="generated.RAParticle.GetElasticRatioTangential"></a>

#### GetElasticRatioTangential()

Get the value of “Elastic Ratio Tangential”.

<a id="generated.RAParticle.GetElasticRatioTorsion"></a>

#### GetElasticRatioTorsion()

Get the value of “Elastic Ratio Torsion”.

<a id="generated.RAParticle.GetElasticity"></a>

#### GetElasticity()

Get “Elasticity” as a string.

* **Returns:**
  The returned value will be one of [‘isotropic’, ‘anisotropic’].

<a id="generated.RAParticle.GetElementCurve"></a>

#### GetElementCurve(element_name, curve_name, simulation_name=None, realization=None, time_step=None)

Return the curves for the given element and name.

* **Parameters:**
  * **element_name** (*unicode*) – The name of the element
  * **curve_name** (*unicode*) – The name of the curve
  * **simulation_name** (*unicode*) – An optional parameter for defining the simulation to get the curve from.
  * **realization** (*unicode*) – An additional keyword to identify the curve realization
  * **time_step** (*TimeStep*) – For transient curves a time-step must be given.

<a id="generated.RAParticle.GetElementDampingRatio"></a>

#### GetElementDampingRatio()

Get the value of “Element Damping Ratio”.

<a id="generated.RAParticle.GetEnableBreakage"></a>

#### GetEnableBreakage()

Get the value of “Enable Breakage”.

<a id="generated.RAParticle.GetEnableRandomAngle"></a>

#### GetEnableRandomAngle()

Get the value of “Enable Random Angle”.

<a id="generated.RAParticle.GetEnableRotations"></a>

#### GetEnableRotations()

Get the value of “Enable Rotations”.

<a id="generated.RAParticle.GetFailureRatio"></a>

#### GetFailureRatio()

Get the value of “Failure Ratio”.

<a id="generated.RAParticle.GetFlexible"></a>

#### GetFlexible()

Get the value of “Flexible”.

<a id="generated.RAParticle.GetGeometryQuantity"></a>

#### GetGeometryQuantity()

Get the quantity corresponding to the grid’s geometry.

* **Return type:**
  IQuantity
* **Returns:**
  The grid geometry quantity

<a id="generated.RAParticle.GetGeometryUnit"></a>

#### GetGeometryUnit()

Get the grid’s geometry’s unit.

* **Return type:**
  unicode
* **Returns:**
  The unit for the grid geometry

<a id="generated.RAParticle.GetGridFunction"></a>

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

<a id="generated.RAParticle.GetGridFunctionNames"></a>

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

<a id="generated.RAParticle.GetHorizontalAspectRatio"></a>

#### GetHorizontalAspectRatio()

Get the value of “Horizontal Aspect Ratio”.

<a id="generated.RAParticle.GetIncludeRotationalDeformations"></a>

#### GetIncludeRotationalDeformations()

Get the value of “Include Rotational Deformations”.

<a id="generated.RAParticle.GetInternalFriction"></a>

#### GetInternalFriction()

Get the value of “Internal Friction”.

<a id="generated.RAParticle.GetJointDampingRatio"></a>

#### GetJointDampingRatio()

Get the value of “Joint Damping Ratio”.

<a id="generated.RAParticle.GetJointElasticRatio"></a>

#### GetJointElasticRatio()

Get the value of “Joint Elastic Ratio”.

<a id="generated.RAParticle.GetJointThermalRatio"></a>

#### GetJointThermalRatio()

Get the value of “Joint Thermal Ratio”.

<a id="generated.RAParticle.GetMaterial"></a>

#### GetMaterial()

Get the “Material”.

* **Return type:**
  [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)

<a id="generated.RAParticle.GetMeshColoring"></a>

#### GetMeshColoring(window: str | type[KAWorkspaceWindow])

Get the RAMeshColoring related to the current object and a window.

* **Parameters:**
  **window** – The window that the coloring is acting. The window must be a str of the name of the
  window or a KAWorkspaceWindow.
* **Raises:**
  **RockyApiError** – If window is not a str or KAWorkspaceWindow. Additionally, raises an error if no window
  is found or no coloring for the given item exists.

<a id="generated.RAParticle.GetMinimumSize"></a>

#### GetMinimumSize(unit: str | None = None)

Get the value of “Minimum Size”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RAParticle.GetMinimumSizeRatio"></a>

#### GetMinimumSizeRatio()

Get the value of “Minimum Size Ratio”.

<a id="generated.RAParticle.GetMinimumVolumeFractionForFragmentDisabling"></a>

#### GetMinimumVolumeFractionForFragmentDisabling()

Get the value of “Minimum Volume Fraction For Fragment Disabling”.

<a id="generated.RAParticle.GetModuleProperties"></a>

#### GetModuleProperties()

Get the names of the module properties.

* **Return type:**
  tuple(ModulePropertyIdentifier)

<a id="generated.RAParticle.GetModuleProperty"></a>

#### GetModuleProperty(property_name: str | ModulePropertyIdentifier, unit: str | None = None)

Get the value of a module property.

* **Parameters:**
  * **property_name** (*Union* *[**str* *,* *ModulePropertyIdentifier* *]*) – The name of the module property to get.
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

<a id="generated.RAParticle.GetNumberOfCells"></a>

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

<a id="generated.RAParticle.GetNumberOfCorners"></a>

#### GetNumberOfCorners()

Get the value of “Number of Corners”.

<a id="generated.RAParticle.GetNumberOfNodes"></a>

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

<a id="generated.RAParticle.GetNumpyCurve"></a>

#### GetNumpyCurve(curve_name, unit=None, realization=None)

Returns a curve as a tuple of numpy arrays (time, property) for the given element and name.

<a id="generated.RAParticle.GetOrientation"></a>

#### GetOrientation(unit: str = 'dega')

Get the orientation angles. For more specific cases, see: “GetOrientationFromAngles”,
“GetOrientationFromAngleAndVector” and “GetOrientationFromBasisVector”.

<a id="generated.RAParticle.GetOrientationFromAngleAndVector"></a>

#### GetOrientationFromAngleAndVector(unit: str = 'dega')

Get the current orientation in the form of an angle and a vector.

<a id="generated.RAParticle.GetOrientationFromAngles"></a>

#### GetOrientationFromAngles(unit: str = 'dega')

Get the current orientation in the form of angles.

<a id="generated.RAParticle.GetOrientationFromBasisVector"></a>

#### GetOrientationFromBasisVector()

Get the current orientation in the form of three basis vectors.

<a id="generated.RAParticle.GetOutputVariableValue"></a>

#### GetOutputVariableValue(variable_name: str)

Get the value of a previously-created output variable.

* **Parameters:**
  **variable_name** (*unicode*) – The variable name whose value we want.
* **Returns:**
  Returns a scalar with the value and unit for the given variable_name or None if no
  variable was found with the given name or if it couldn’t be computed.

<a id="generated.RAParticle.GetPlasticLimit"></a>

#### GetPlasticLimit(unit: str | None = None)

Get the value of “Plastic Limit”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “Pa”.

<a id="generated.RAParticle.GetPlasticRatio"></a>

#### GetPlasticRatio()

Get the value of “Plastic Ratio”.

<a id="generated.RAParticle.GetPlasticityModel"></a>

#### GetPlasticityModel()

Get “Plasticity Model” as a string.

* **Returns:**
  The returned value will be one of [‘LinearElastic’, ‘BilinearElastoplastic’, ‘Custom’].

<a id="generated.RAParticle.GetPorosity"></a>

#### GetPorosity(unit: str | None = None)

Get the value of “Porosity”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “<fraction>”.

<a id="generated.RAParticle.GetPrincipalMomentOfInertia"></a>

#### GetPrincipalMomentOfInertia(unit: str | None = None)

Get the value of “Principal Moment of Inertia”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “m5”.

<a id="generated.RAParticle.GetRandomAnglesHalfRange"></a>

#### GetRandomAnglesHalfRange(unit: str | None = None)

Get the value of “Random Angles Half Range”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “rad”.

<a id="generated.RAParticle.GetRatioEnergyAfterBreakage"></a>

#### GetRatioEnergyAfterBreakage(unit: str | None = None)

Get the value of “Ratio Energy After Breakage”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAParticle.GetRemeshToTarget"></a>

#### GetRemeshToTarget()

Get the value of “Remesh To Target”.

<a id="generated.RAParticle.GetRollingResistance"></a>

#### GetRollingResistance()

Get the value of “Rolling Resistance”.

<a id="generated.RAParticle.GetRotationAngle"></a>

#### GetRotationAngle(unit: str = 'rad')

Get the value of “Rotation Angle”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in
  “rad”.

<a id="generated.RAParticle.GetRotationVector"></a>

#### GetRotationVector(unit: str = '-')

Get the value of “Rotation Vector”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in
  “m”.

<a id="generated.RAParticle.GetSecondBendingAngleLimit"></a>

#### GetSecondBendingAngleLimit(unit: str | None = None)

Get the value of “Second Bending Angle Limit”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “dega”.

<a id="generated.RAParticle.GetShape"></a>

#### GetShape()

Get “Shape” as a string.

* **Returns:**
  The returned value will be one of [‘sphere’, ‘polyhedron’, ‘sphero_cylinder’, ‘sphero_polygon’, ‘sphero_polyhedron’, ‘briquete’, ‘faceted_cylinder’, ‘assembly’, ‘straight_fiber’, ‘custom_fiber’, ‘custom_shell’, ‘custom_polyhedron’].

<a id="generated.RAParticle.GetShearStressLimit"></a>

#### GetShearStressLimit(unit: str | None = None)

Get the value of “Shear Stress Limit”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “N/m2”.

<a id="generated.RAParticle.GetSideAngle"></a>

#### GetSideAngle()

Get the value of “Side Angle”.

<a id="generated.RAParticle.GetSizeDistributionList"></a>

#### GetSizeDistributionList()

Get a list of size distribution entries

<a id="generated.RAParticle.GetSizeType"></a>

#### GetSizeType()

Get “Size Type” as a string.

* **Returns:**
  The returned value will be one of [‘sieve’, ‘equivalent_diameter’, ‘original_size_scale’].

<a id="generated.RAParticle.GetSmoothness"></a>

#### GetSmoothness()

Get the value of “Smoothness”.

<a id="generated.RAParticle.GetSuperquadricDegree"></a>

#### GetSuperquadricDegree()

Get the value of “Superquadric Degree”.

<a id="generated.RAParticle.GetSurfaceEnergy"></a>

#### GetSurfaceEnergy(unit: str | None = None)

Get the value of “Surface Energy”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “J/m2”.

<a id="generated.RAParticle.GetT10Formula"></a>

#### GetT10Formula()

Get “T10 Formula” as a string.

* **Returns:**
  The returned value will be one of [‘it10E_50b’, ‘it10E_fract’].

<a id="generated.RAParticle.GetTargetNumberOfElements"></a>

#### GetTargetNumberOfElements()

Get the value of “Target Number of Elements”.

<a id="generated.RAParticle.GetTavaresA"></a>

#### GetTavaresA(unit: str | None = None)

Get the value of “Tavares A”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “%”.

<a id="generated.RAParticle.GetTavaresB"></a>

#### GetTavaresB(unit: str | None = None)

Get the value of “Tavares B”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAParticle.GetTavaresD0"></a>

#### GetTavaresD0(unit: str | None = None)

Get the value of “Tavares D0”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RAParticle.GetTavaresEInf"></a>

#### GetTavaresEInf(unit: str | None = None)

Get the value of “Tavares E Inf”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “J/kg”.

<a id="generated.RAParticle.GetTavaresGamma"></a>

#### GetTavaresGamma(unit: str | None = None)

Get the value of “Tavares Gamma”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAParticle.GetTavaresMinimumEnergy"></a>

#### GetTavaresMinimumEnergy(unit: str | None = None)

Get the value of “Tavares Minimum Energy”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “J/kg”.

<a id="generated.RAParticle.GetTavaresPhi"></a>

#### GetTavaresPhi(unit: str | None = None)

Get the value of “Tavares Phi”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAParticle.GetTavaresRatioEmax"></a>

#### GetTavaresRatioEmax(unit: str | None = None)

Get the value of “Tavares Ratio Emax”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAParticle.GetTavaresSigmaSquared"></a>

#### GetTavaresSigmaSquared(unit: str | None = None)

Get the value of “Tavares Sigma Squared”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAParticle.GetTensileStressLimit"></a>

#### GetTensileStressLimit(unit: str | None = None)

Get the value of “Tensile Stress Limit”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “N/m2”.

<a id="generated.RAParticle.GetThickness"></a>

#### GetThickness(unit: str | None = None)

Get the value of “Thickness”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RAParticle.GetTimeSet"></a>

#### GetTimeSet()

Get the list of time-steps associated to the grid.

* **Return type:**
  ITimeSet
* **Returns:**
  The list of time-steps associated to the grid

<a id="generated.RAParticle.GetTimeStatistics"></a>

#### GetTimeStatistics()

Get the object responsible for handling time-statistics grid functions for this process.
This call will return None if the process doesn’t support time statistics.

<a id="generated.RAParticle.GetTimeStep"></a>

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

<a id="generated.RAParticle.GetTopologyShape"></a>

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

<a id="generated.RAParticle.GetTorsionAngleLimit"></a>

#### GetTorsionAngleLimit(unit: str | None = None)

Get the value of “Torsion Angle Limit”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “dega”.

<a id="generated.RAParticle.GetUseMultipleElements"></a>

#### GetUseMultipleElements()

Whether the particle’s Composition is “Multiple Elements”.

<a id="generated.RAParticle.GetValidBreakageModelValues"></a>

#### GetValidBreakageModelValues()

Get a list of all possible values for “Breakage Model”.

* **Returns:**
  The returned list is [‘none’, ‘ab_t10’, ‘professor_tavares’, ‘instantaneous_custom’, ‘griffith_surface_energy’, ‘shear_stress_criterion’, ‘tensile_stress_criterion’, ‘tensile_or_shear_criterion’, ‘von_mises_stress_criterion’, ‘discrete_custom’].

<a id="generated.RAParticle.GetValidDeformationModelValues"></a>

#### GetValidDeformationModelValues()

Get a list of all possible values for “Deformation Model”.

* **Returns:**
  The returned list is [‘none’, ‘elastic’, ‘plastic’].

<a id="generated.RAParticle.GetValidDistributionModelValues"></a>

#### GetValidDistributionModelValues()

Get a list of all possible values for “Distribution Model”.

* **Returns:**
  The returned list is [‘gaudin_schumann’, ‘incomplete_beta’, ‘custom’].

<a id="generated.RAParticle.GetValidElasticityValues"></a>

#### GetValidElasticityValues()

Get a list of all possible values for “Elasticity”.

* **Returns:**
  The returned list is [‘isotropic’, ‘anisotropic’].

<a id="generated.RAParticle.GetValidOptionsForModuleProperty"></a>

#### GetValidOptionsForModuleProperty(property_name)

Get all valid options only for properties that have a list of possible options.

* **Parameters:**
  **property_name** (*str*) – The name of the module property.
* **Return type:**
  List[str]

<a id="generated.RAParticle.GetValidPlasticityModelValues"></a>

#### GetValidPlasticityModelValues()

Get a list of all possible values for “Plasticity Model”.

* **Returns:**
  The returned list is [‘LinearElastic’, ‘BilinearElastoplastic’, ‘Custom’].

<a id="generated.RAParticle.GetValidShapeValues"></a>

#### GetValidShapeValues()

Get a list of all possible values for “Shape”.

* **Returns:**
  The returned list is [‘sphere’, ‘polyhedron’, ‘sphero_cylinder’, ‘sphero_polygon’, ‘sphero_polyhedron’, ‘briquete’, ‘faceted_cylinder’, ‘assembly’, ‘straight_fiber’, ‘custom_fiber’, ‘custom_shell’, ‘custom_polyhedron’].

<a id="generated.RAParticle.GetValidSizeTypeValues"></a>

#### GetValidSizeTypeValues()

Get a list of all possible values for “Size Type”.

* **Returns:**
  The returned list is [‘sieve’, ‘equivalent_diameter’, ‘original_size_scale’].

<a id="generated.RAParticle.GetValidT10FormulaValues"></a>

#### GetValidT10FormulaValues()

Get a list of all possible values for “T10 Formula”.

* **Returns:**
  The returned list is [‘it10E_50b’, ‘it10E_fract’].

<a id="generated.RAParticle.GetVerticalAspectRatio"></a>

#### GetVerticalAspectRatio()

Get the value of “Vertical Aspect Ratio”.

<a id="generated.RAParticle.GetVonMisesStressLimit"></a>

#### GetVonMisesStressLimit(unit: str | None = None)

Get the value of “Von Mises Stress Limit”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “N/m2”.

<a id="generated.RAParticle.GetWithFailure"></a>

#### GetWithFailure()

Get the value of “With Failure”.

<a id="generated.RAParticle.GetXDirection"></a>

#### GetXDirection(unit: str | None = None)

Get the value of “X Direction”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “-“.

<a id="generated.RAParticle.GetYDirection"></a>

#### GetYDirection(unit: str | None = None)

Get the value of “Y Direction”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “-“.

<a id="generated.RAParticle.GetZDirection"></a>

#### GetZDirection(unit: str | None = None)

Get the value of “Z Direction”.

* **Parameters:**
  **unit** – The unit for the returned values. If no unit is provided, the returned values will be in “-“.

<a id="generated.RAParticle.HasGridFunction"></a>

#### HasGridFunction(grid_function_name)

Whether the grid has the given grid function.

* **Parameters:**
  **grid_function_name** (*unicode*) – The name of the grid function to be checked.
* **Return type:**
  bool
* **Returns:**
  Returns True if the grid function exists and False otherwise.

<a id="generated.RAParticle.ImportCustomFiber"></a>

#### ImportCustomFiber(filename: str)

Import a custom fiber shape from the given filename into this particle.

* **Parameters:**
  **filename** – The full path to the TXT/CSV/Excel file.
* **Returns:**
  Whether it was possible to import the particle

<a id="generated.RAParticle.ImportFiberFromTXT"></a>

#### ImportFiberFromTXT(stl_filename)

Import a custom fiber shape from the given txt filename into this particle.

Deprecated: Use [`ImportCustomFiber()`](#generated.RAParticle.ImportCustomFiber) instead.

<a id="generated.RAParticle.ImportFromSTL"></a>

#### ImportFromSTL(stl_filename: str, as_concave: bool, is_open: bool = False)

Import a custom shape from the given stl filename into this particle.

* **Parameters:**
  * **stl_filename** – The full path to the STL file.
  * **as_concave** – True whether the particle should be treated as Concave, or False otherwise
  * **is_open** – True whether the stl is an open one
* **Returns:**
  Possible return values:
  \* True if everything went fine with the import process.
  \* False if the import process failed.

<a id="generated.RAParticle.IsBreakageEnabled"></a>

#### IsBreakageEnabled()

Check if the “Breakage” is enabled.

<a id="generated.RAParticle.IsCellActive"></a>

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

<a id="generated.RAParticle.IsConcave"></a>

#### IsConcave()

Returns True if the particle is a concave custom polyhedron, and False otherwise.

* **Return type:**
  bool

<a id="generated.RAParticle.IsIncludeRotationalDeformationsEnabled"></a>

#### IsIncludeRotationalDeformationsEnabled()

Check if the “Include Rotational Deformations” is enabled.

<a id="generated.RAParticle.IsRandomOrientationEnabled"></a>

#### IsRandomOrientationEnabled()

Check if the “Random Orientation” is enabled.

<a id="generated.RAParticle.IterCellVertices"></a>

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

<a id="generated.RAParticle.IterCells"></a>

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

<a id="generated.RAParticle.Modified"></a>

#### Modified(\*args, \*\*kwargs)

Resets all the cache information after a change in the subject being tracked.

<a id="generated.RAParticle.RemoveCustomCurve"></a>

#### RemoveCustomCurve(name: str)

Remove the curve from the database
:param name:

> The name of the curve to be removed.

<a id="generated.RAParticle.RemoveCustomProperty"></a>

#### RemoveCustomProperty(name: str)

Remove the property from the database
:param name:

> The name of the property to be removed.

<a id="generated.RAParticle.RemoveOutputVariable"></a>

#### RemoveOutputVariable(variable_name: str)

Removes some output variable.

* **Parameters:**
  **variable_name** – The name of the variable to be removed.

<a id="generated.RAParticle.RemoveProcess"></a>

#### RemoveProcess()

Removes the process from the project.

<a id="generated.RAParticle.SetAbt10MaximumT10Value"></a>

#### SetAbt10MaximumT10Value(value: str | float, unit: str | None = None)

Set the value of “Abt10 Maximum T10 Value”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “%”.

<a id="generated.RAParticle.SetAbt10MinimumSpecificEnergy"></a>

#### SetAbt10MinimumSpecificEnergy(value: float, unit: str | None = None)

Deprecated: Use [`SetAbt10ReferenceMinimumSpecificEnergy()`](#generated.RAParticle.SetAbt10ReferenceMinimumSpecificEnergy) instead.

* **Parameters:**
  * **value** – The value to set.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “J/kg”.

<a id="generated.RAParticle.SetAbt10ReferenceMinimumSpecificEnergy"></a>

#### SetAbt10ReferenceMinimumSpecificEnergy(value: str | float, unit: str | None = None)

Set the value of “Abt10 Reference Minimum Specific Energy”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “J/kg”.

<a id="generated.RAParticle.SetAbt10ReferenceSize"></a>

#### SetAbt10ReferenceSize(value: str | float, unit: str | None = None)

Set the value of “Abt10 Reference Size”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RAParticle.SetAbt10SelectFunctionCoefficient"></a>

#### SetAbt10SelectFunctionCoefficient(value: str | float, unit: str | None = None)

Set the value of “Abt10 Select Function Coefficient”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “kg/J”.

<a id="generated.RAParticle.SetAllowSelfContacts"></a>

#### SetAllowSelfContacts(value: bool)

Set the value of “Allow Self Contacts”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticle.SetAnisotropic"></a>

#### SetAnisotropic(value: bool)

Set the value of “Anisotropic”.

* **Parameters:**
  **value** (*bool*) – The value to set.

<a id="generated.RAParticle.SetBendingAngleLimit"></a>

#### SetBendingAngleLimit(value: str | float, unit: str | None = None)

Set the value of “Bending Angle Limit”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “dega”.

<a id="generated.RAParticle.SetBreakageModel"></a>

#### SetBreakageModel(value: str)

Set the value of “Breakage Model”.
If the particle is not flexible, setting the model to any value other than “none” also enables breakage.

* **Parameters:**
  **value** (*str*) – The value to set. Must be one of [‘none’, ‘ab_t10’, ‘professor_tavares’, ‘instantaneous_custom’, ‘griffith_surface_energy’, ‘shear_stress_criterion’, ‘tensile_stress_criterion’, ‘tensile_or_shear_criterion’, ‘von_mises_stress_criterion’, ‘discrete_custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Breakage Model” option.

<a id="generated.RAParticle.SetCenterOfMassOffset"></a>

#### SetCenterOfMassOffset(values: Sequence[str | float], unit: str | None = None)

Set the values of “Center of Mass Offset”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “%”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAParticle.SetCgmScaleFactor"></a>

#### SetCgmScaleFactor(value: str | float)

Set the value of “Cgm Scale Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetChangeMassProperties"></a>

#### SetChangeMassProperties(value: bool)

Set the value of “Change Mass Properties”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticle.SetCurrentTimeStep"></a>

#### SetCurrentTimeStep(time_step)

Sets the current time step.

* **Parameters:**
  **time_step** (*ITimeStep*) – The time step to be considered the ‘current’ time step.

<a id="generated.RAParticle.SetDeformationModel"></a>

#### SetDeformationModel(value: str)

Set the value of “Deformation Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘none’, ‘elastic’, ‘plastic’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Deformation Model” option.

<a id="generated.RAParticle.SetDistributionModel"></a>

#### SetDistributionModel(value: str)

Set the value of “Distribution Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘gaudin_schumann’, ‘incomplete_beta’, ‘custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Distribution Model” option.

<a id="generated.RAParticle.SetEdgeAngle"></a>

#### SetEdgeAngle(value: str | float, unit: str | None = None)

Set the value of “Edge Angle”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “dega”.

<a id="generated.RAParticle.SetElasticRatioBending"></a>

#### SetElasticRatioBending(value: str | float)

Set the value of “Elastic Ratio Bending”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetElasticRatioNormal"></a>

#### SetElasticRatioNormal(value: str | float)

Set the value of “Elastic Ratio Normal”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetElasticRatioTangential"></a>

#### SetElasticRatioTangential(value: str | float)

Set the value of “Elastic Ratio Tangential”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetElasticRatioTorsion"></a>

#### SetElasticRatioTorsion(value: str | float)

Set the value of “Elastic Ratio Torsion”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetElasticity"></a>

#### SetElasticity(value: str)

Set the value of “Elasticity”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘isotropic’, ‘anisotropic’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Elasticity” option.

<a id="generated.RAParticle.SetElementDampingRatio"></a>

#### SetElementDampingRatio(value: str | float)

Set the value of “Element Damping Ratio”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetEnableBreakage"></a>

#### SetEnableBreakage(value: bool)

Set the value of “Enable Breakage”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticle.SetEnableRandomAngle"></a>

#### SetEnableRandomAngle(value: bool)

Set the value of “Enable Random Angle”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticle.SetEnableRotations"></a>

#### SetEnableRotations(value: bool)

Set the value of “Enable Rotations”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticle.SetFailureRatio"></a>

#### SetFailureRatio(value: str | float)

Set the value of “Failure Ratio”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetFlexible"></a>

#### SetFlexible(value: bool)

Set the value of “Flexible”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticle.SetHorizontalAspectRatio"></a>

#### SetHorizontalAspectRatio(value: str | float)

Set the value of “Horizontal Aspect Ratio”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetIncludeRotationalDeformations"></a>

#### SetIncludeRotationalDeformations(value: bool)

Set the value of “Include Rotational Deformations”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticle.SetInternalFriction"></a>

#### SetInternalFriction(value: str | float)

Set the value of “Internal Friction”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetJointDampingRatio"></a>

#### SetJointDampingRatio(value: str | float)

Set the value of “Joint Damping Ratio”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetJointElasticRatio"></a>

#### SetJointElasticRatio(value: str | float)

Set the value of “Joint Elastic Ratio”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetJointThermalRatio"></a>

#### SetJointThermalRatio(value: str | float)

Set the value of “Joint Thermal Ratio”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetMaterial"></a>

#### SetMaterial(value)

Set the “Material”.

:param unicode, [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial) value:
: Either the API object wrapping the desired entity or its name.

<a id="generated.RAParticle.SetMinimumSize"></a>

#### SetMinimumSize(value: str | float, unit: str | None = None)

Set the value of “Minimum Size”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RAParticle.SetMinimumSizeRatio"></a>

#### SetMinimumSizeRatio(value: str | float)

Set the value of “Minimum Size Ratio”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetMinimumVolumeFractionForFragmentDisabling"></a>

#### SetMinimumVolumeFractionForFragmentDisabling(value: str | float)

Set the value of “Minimum Volume Fraction For Fragment Disabling”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetModuleProperty"></a>

#### SetModuleProperty(property_name: str | ModulePropertyIdentifier, value: float | bool | str, unit: str | None = None)

Set the value of a module property.

* **Parameters:**
  * **property_name** (*Union* *[**str* *,* *ModulePropertyIdentifier* *]*) – The name of the module property to set.
  * **value** (*float* *,* *bool* *or* *str*) – The value to set.
    If the property_name references to an enum property then value must be an str value.
  * **unit** (*str*) – The unit for value, just for scalar properties. If no unit is provided,
    value is assumed to be the unit was set before.

<a id="generated.RAParticle.SetNumberOfCorners"></a>

#### SetNumberOfCorners(value: str | int)

Set the value of “Number of Corners”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAParticle.SetOrientation"></a>

#### SetOrientation(rotation: tuple[float, float, float], unit: str = 'dega')

The rotation is the angles in x, y and z of the rotation in the given unit. For more
specific methods, see: “SetOrientationFromAngles”, “SetOrientationFromAngleAndVector” and
“SetOrientationFromBasisVector”.

<a id="generated.RAParticle.SetOrientationFromAngleAndVector"></a>

#### SetOrientationFromAngleAndVector(angle: float, vector: tuple[float, float, float], unit: str = 'dega')

The rotation uses the angle and a vector, using unit and changes the orientation mode to
Angle and Vector.

<a id="generated.RAParticle.SetOrientationFromAngles"></a>

#### SetOrientationFromAngles(rotation: tuple[float, float, float], unit: str = 'dega', local_angles: bool = True, order: str = 'XYZ')

The rotation is the angles in x, y and z of the rotation. The default unit is dega.
Additionally, local_angles can be used as well an order of the values via kwargs.

<a id="generated.RAParticle.SetOrientationFromBasisVector"></a>

#### SetOrientationFromBasisVector(vector_x: tuple[float, float, float], vector_y: tuple[float, float, float], vector_z: tuple[float, float, float])

Sets the rotation using three basis vector and changes the orientation mode to Basis Vector.

<a id="generated.RAParticle.SetPlasticLimit"></a>

#### SetPlasticLimit(value: str | float, unit: str | None = None)

Set the value of “Plastic Limit”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “Pa”.

<a id="generated.RAParticle.SetPlasticRatio"></a>

#### SetPlasticRatio(value: str | float)

Set the value of “Plastic Ratio”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetPlasticityModel"></a>

#### SetPlasticityModel(value: str)

Set the value of “Plasticity Model”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘LinearElastic’, ‘BilinearElastoplastic’, ‘Custom’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Plasticity Model” option.

<a id="generated.RAParticle.SetPorosity"></a>

#### SetPorosity(value: str | float, unit: str | None = None)

Set the value of “Porosity”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “<fraction>”.

<a id="generated.RAParticle.SetPrincipalMomentOfInertia"></a>

#### SetPrincipalMomentOfInertia(values: Sequence[str | float], unit: str | None = None)

Set the values of “Principal Moment of Inertia”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m5”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAParticle.SetRandomAnglesHalfRange"></a>

#### SetRandomAnglesHalfRange(values: Sequence[str | float], unit: str | None = None)

Set the values of “Random Angles Half Range”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “rad”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAParticle.SetRatioEnergyAfterBreakage"></a>

#### SetRatioEnergyAfterBreakage(value: str | float, unit: str | None = None)

Set the value of “Ratio Energy After Breakage”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAParticle.SetRemeshToTarget"></a>

#### SetRemeshToTarget(value: bool)

Set the value of “Remesh To Target”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticle.SetRollingResistance"></a>

#### SetRollingResistance(value: str | float)

Set the value of “Rolling Resistance”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetRotationAngle"></a>

#### SetRotationAngle(value: str | float, unit: str = 'rad')

Set the value of “Rotation Angle”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “rad”.

<a id="generated.RAParticle.SetRotationVector"></a>

#### SetRotationVector(values: Sequence[str | float], unit: str = '-')

Set the values of “Rotation Vector”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “m”.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAParticle.SetSecondBendingAngleLimit"></a>

#### SetSecondBendingAngleLimit(value: str | float, unit: str | None = None)

Set the value of “Second Bending Angle Limit”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “dega”.

<a id="generated.RAParticle.SetShape"></a>

#### SetShape(value: str)

Set the value of “Shape”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘sphere’, ‘polyhedron’, ‘sphero_cylinder’, ‘sphero_polygon’, ‘sphero_polyhedron’, ‘briquete’, ‘faceted_cylinder’, ‘assembly’, ‘straight_fiber’, ‘custom_fiber’, ‘custom_shell’, ‘custom_polyhedron’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Shape” option.

<a id="generated.RAParticle.SetShearStressLimit"></a>

#### SetShearStressLimit(value: str | float, unit: str | None = None)

Set the value of “Shear Stress Limit”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “N/m2”.

<a id="generated.RAParticle.SetSideAngle"></a>

#### SetSideAngle(value: str | float)

Set the value of “Side Angle”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetSizeType"></a>

#### SetSizeType(value: str)

Set the value of “Size Type”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘sieve’, ‘equivalent_diameter’, ‘original_size_scale’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Size Type” option.

<a id="generated.RAParticle.SetSmoothness"></a>

#### SetSmoothness(value: str | float)

Set the value of “Smoothness”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetSuperquadricDegree"></a>

#### SetSuperquadricDegree(value: str | float)

Set the value of “Superquadric Degree”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetSurfaceEnergy"></a>

#### SetSurfaceEnergy(value: str | float, unit: str | None = None)

Set the value of “Surface Energy”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “J/m2”.

<a id="generated.RAParticle.SetT10Formula"></a>

#### SetT10Formula(value: str)

Set the value of “T10 Formula”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘it10E_50b’, ‘it10E_fract’].
* **Raises:**
  **RockyApiError** – If value is not a valid “T10 Formula” option.

<a id="generated.RAParticle.SetTargetNumberOfElements"></a>

#### SetTargetNumberOfElements(value: str | int)

Set the value of “Target Number of Elements”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAParticle.SetTavaresA"></a>

#### SetTavaresA(value: str | float, unit: str | None = None)

Set the value of “Tavares A”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “%”.

<a id="generated.RAParticle.SetTavaresB"></a>

#### SetTavaresB(value: str | float, unit: str | None = None)

Set the value of “Tavares B”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAParticle.SetTavaresD0"></a>

#### SetTavaresD0(value: str | float, unit: str | None = None)

Set the value of “Tavares D0”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RAParticle.SetTavaresEInf"></a>

#### SetTavaresEInf(value: str | float, unit: str | None = None)

Set the value of “Tavares E Inf”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “J/kg”.

<a id="generated.RAParticle.SetTavaresGamma"></a>

#### SetTavaresGamma(value: str | float, unit: str | None = None)

Set the value of “Tavares Gamma”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAParticle.SetTavaresMinimumEnergy"></a>

#### SetTavaresMinimumEnergy(value: str | float, unit: str | None = None)

Set the value of “Tavares Minimum Energy”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “J/kg”.

<a id="generated.RAParticle.SetTavaresPhi"></a>

#### SetTavaresPhi(value: str | float, unit: str | None = None)

Set the value of “Tavares Phi”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAParticle.SetTavaresRatioEmax"></a>

#### SetTavaresRatioEmax(value: str | float, unit: str | None = None)

Set the value of “Tavares Ratio Emax”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAParticle.SetTavaresSigmaSquared"></a>

#### SetTavaresSigmaSquared(value: str | float, unit: str | None = None)

Set the value of “Tavares Sigma Squared”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAParticle.SetTensileStressLimit"></a>

#### SetTensileStressLimit(value: str | float, unit: str | None = None)

Set the value of “Tensile Stress Limit”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “N/m2”.

<a id="generated.RAParticle.SetThickness"></a>

#### SetThickness(value: str | float, unit: str | None = None)

Set the value of “Thickness”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RAParticle.SetTorsionAngleLimit"></a>

#### SetTorsionAngleLimit(value: str | float, unit: str | None = None)

Set the value of “Torsion Angle Limit”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “dega”.

<a id="generated.RAParticle.SetUseMultipleElements"></a>

#### SetUseMultipleElements(value)

Set the particle’s Composition to “Multiple Elements” (True) or “Single Elements” (False).

* **Parameters:**
  **value** (*bool*)

<a id="generated.RAParticle.SetVerticalAspectRatio"></a>

#### SetVerticalAspectRatio(value: str | float)

Set the value of “Vertical Aspect Ratio”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAParticle.SetVonMisesStressLimit"></a>

#### SetVonMisesStressLimit(value: str | float, unit: str | None = None)

Set the value of “Von Mises Stress Limit”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “N/m2”.

<a id="generated.RAParticle.SetWithFailure"></a>

#### SetWithFailure(value: bool)

Set the value of “With Failure”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAParticle.SetXDirection"></a>

#### SetXDirection(values: Sequence[str | float], unit: str | None = None)

Set the values of “X Direction”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “-“.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAParticle.SetYDirection"></a>

#### SetYDirection(values: Sequence[str | float], unit: str | None = None)

Set the values of “Y Direction”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “-“.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.

<a id="generated.RAParticle.SetZDirection"></a>

#### SetZDirection(values: Sequence[str | float], unit: str | None = None)

Set the values of “Z Direction”.

* **Parameters:**
  * **values** – The values to set. The values can be heterogeneous, the element of values can be an
    expression with input variables or a float. Must have exactly 3 elements.
  * **unit** – The unit for values. If no unit is provided, values is assumed to be in “-“.
* **Raises:**
  **RockyApiError** – If values doesn’t have exactly 3 elements.
