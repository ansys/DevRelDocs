# `AcousticFarFieldResult`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult(internalObject: Any)

<a id="AcousticFarFieldResult"></a>

### *class* AcousticFarFieldResult(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticFarFieldResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticFarFieldResult.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#AcousticFarFieldResult.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#AcousticFarFieldResult.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#AcousticFarFieldResult.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#AcousticFarFieldResult.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticFarFieldResult.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#AcousticFarFieldResult.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#AcousticFarFieldResult.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#AcousticFarFieldResult.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticFarFieldResult.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticFarFieldResult.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticFarFieldResult.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#AcousticFarFieldResult.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#AcousticFarFieldResult.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticFarFieldResult.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticFarFieldResult.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#AcousticFarFieldResult.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#AcousticFarFieldResult.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#AcousticFarFieldResult.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#AcousticFarFieldResult.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#AcousticFarFieldResult.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#AcousticFarFieldResult.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`ExportToWAVFile`](#AcousticFarFieldResult.ExportToWAVFile)                     | Run the ExportToWAVFile action.                                                             |
| [`ExportToXMLFile`](#AcousticFarFieldResult.ExportToXMLFile)                     | Run the ExportToXMLFile action.                                                             |
| [`FetchRemoteResult`](#AcousticFarFieldResult.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#AcousticFarFieldResult.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#AcousticFarFieldResult.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#AcousticFarFieldResult.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticFarFieldResult.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticFarFieldResult.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticFarFieldResult.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticFarFieldResult.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticFarFieldResult.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetJSON`](#AcousticFarFieldResult.GetJSON)                                     | GetJSON method.                                                                             |
| [`GetLifetimeService`](#AcousticFarFieldResult.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#AcousticFarFieldResult.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#AcousticFarFieldResult.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticFarFieldResult.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticFarFieldResult.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticFarFieldResult.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticFarFieldResult.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#AcousticFarFieldResult.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#AcousticFarFieldResult.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticFarFieldResult.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticFarFieldResult.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticFarFieldResult.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticFarFieldResult.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticFarFieldResult.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticFarFieldResult.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticFarFieldResult.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticFarFieldResult.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticFarFieldResult.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticFarFieldResult.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticFarFieldResult.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticFarFieldResult.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticFarFieldResult.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#AcousticFarFieldResult.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#AcousticFarFieldResult.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#AcousticFarFieldResult.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#AcousticFarFieldResult.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#AcousticFarFieldResult.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#AcousticFarFieldResult.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#AcousticFarFieldResult.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#AcousticFarFieldResult.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#AcousticFarFieldResult.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#AcousticFarFieldResult.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#AcousticFarFieldResult.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                   | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#AcousticFarFieldResult.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DampedFrequency`](#AcousticFarFieldResult.DampedFrequency)                                       | Gets the DampedFrequency.                                                                                |
| [`DataModelObjectCategory`](#AcousticFarFieldResult.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`Density`](#AcousticFarFieldResult.Density)                                                       | Gets or sets the Density.                                                                                |
| [`DisplayOption`](#AcousticFarFieldResult.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#AcousticFarFieldResult.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#AcousticFarFieldResult.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`EndingRadiationAnglePhi`](#AcousticFarFieldResult.EndingRadiationAnglePhi)                       | Gets or sets the EndingRadiationAnglePhi.                                                                |
| [`EndingRadiationAngleTheta`](#AcousticFarFieldResult.EndingRadiationAngleTheta)                   | Gets or sets the EndingRadiationAngleTheta.                                                              |
| [`FarFieldMicrophoneDefinitionMethod`](#AcousticFarFieldResult.FarFieldMicrophoneDefinitionMethod) | Gets or sets the FarFieldMicrophoneDefinitionMethod.                                                     |
| [`Figures`](#AcousticFarFieldResult.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`Frequency`](#AcousticFarFieldResult.Frequency)                                                   | Gets or sets the Frequency.                                                                              |
| [`GlobalIDs`](#AcousticFarFieldResult.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#AcousticFarFieldResult.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#AcousticFarFieldResult.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#AcousticFarFieldResult.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#AcousticFarFieldResult.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#AcousticFarFieldResult.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#AcousticFarFieldResult.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#AcousticFarFieldResult.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#AcousticFarFieldResult.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#AcousticFarFieldResult.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#AcousticFarFieldResult.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticFarFieldResult.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticFarFieldResult.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticFarFieldResult.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticFarFieldResult.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#AcousticFarFieldResult.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#AcousticFarFieldResult.Location)                                                     | Gets or sets the Location.                                                                               |
| [`LogarithmicDecrement`](#AcousticFarFieldResult.LogarithmicDecrement)                             | Gets the LogarithmicDecrement.                                                                           |
| [`Maximum`](#AcousticFarFieldResult.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#AcousticFarFieldResult.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#AcousticFarFieldResult.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#AcousticFarFieldResult.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#AcousticFarFieldResult.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#AcousticFarFieldResult.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#AcousticFarFieldResult.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#AcousticFarFieldResult.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`ModalDampingRatio`](#AcousticFarFieldResult.ModalDampingRatio)                                   | Gets the ModalDampingRatio.                                                                              |
| [`ModelThicknessInZDirection`](#AcousticFarFieldResult.ModelThicknessInZDirection)                 | Gets or sets the ModelThicknessInZDirection.                                                             |
| [`ModelType`](#AcousticFarFieldResult.ModelType)                                                   | Gets or sets the ModelType.                                                                              |
| [`Name`](#AcousticFarFieldResult.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                      | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#AcousticFarFieldResult.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#AcousticFarFieldResult.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#AcousticFarFieldResult.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#AcousticFarFieldResult.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                       | Path property.                                                                                           |
| [`PhiAngleEnd`](#AcousticFarFieldResult.PhiAngleEnd)                                               | Gets or sets the PhiAngleEnd.                                                                            |
| [`PhiAngleNoOfDivisions`](#AcousticFarFieldResult.PhiAngleNoOfDivisions)                           | Gets or sets the PhiAngleNoOfDivisions.                                                                  |
| [`PhiAngleStart`](#AcousticFarFieldResult.PhiAngleStart)                                           | Gets or sets the PhiAngleStart.                                                                          |
| [`PlotData`](#AcousticFarFieldResult.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#AcousticFarFieldResult.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#AcousticFarFieldResult.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ReferenceRMSSoundPressure`](#AcousticFarFieldResult.ReferenceRMSSoundPressure)                   | Gets or sets the ReferenceRMSSoundPressure.                                                              |
| [`ReferenceSoundPower`](#AcousticFarFieldResult.ReferenceSoundPower)                               | Gets or sets the ReferenceSoundPower.                                                                    |
| [`ReportedFrequency`](#AcousticFarFieldResult.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                              |
| [`ResultType`](#AcousticFarFieldResult.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#AcousticFarFieldResult.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#AcousticFarFieldResult.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#AcousticFarFieldResult.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#AcousticFarFieldResult.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#AcousticFarFieldResult.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#AcousticFarFieldResult.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`SoundSpeed`](#AcousticFarFieldResult.SoundSpeed)                                                 | Gets or sets the SoundSpeed.                                                                             |
| [`SpatialRadiationAngle`](#AcousticFarFieldResult.SpatialRadiationAngle)                           | Gets or sets the SpatialRadiationAngle.                                                                  |
| [`SphereRadius`](#AcousticFarFieldResult.SphereRadius)                                             | Gets or sets the SphereRadius.                                                                           |
| [`Stability`](#AcousticFarFieldResult.Stability)                                                   | Gets the Stability.                                                                                      |
| [`StartingRadiationAnglePhi`](#AcousticFarFieldResult.StartingRadiationAnglePhi)                   | Gets or sets the StartingRadiationAnglePhi.                                                              |
| [`StartingRadiationAngleTheta`](#AcousticFarFieldResult.StartingRadiationAngleTheta)               | Gets or sets the StartingRadiationAngleTheta.                                                            |
| [`State`](#AcousticFarFieldResult.State)                                                           | State property.                                                                                          |
| [`Substep`](#AcousticFarFieldResult.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#AcousticFarFieldResult.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                              | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                         | SurfaceCoating property.                                                                                 |
| [`TabularData`](#AcousticFarFieldResult.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`ThetaAngleEnd`](#AcousticFarFieldResult.ThetaAngleEnd)                                           | Gets or sets the ThetaAngleEnd.                                                                          |
| [`ThetaAngleNoOfDivisions`](#AcousticFarFieldResult.ThetaAngleNoOfDivisions)                       | Gets or sets the ThetaAngleNoOfDivisions.                                                                |
| [`ThetaAngleStart`](#AcousticFarFieldResult.ThetaAngleStart)                                       | Gets or sets the ThetaAngleStart.                                                                        |
| [`Time`](#AcousticFarFieldResult.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#AcousticFarFieldResult.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#AcousticFarFieldResult.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#AcousticFarFieldResult.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#AcousticFarFieldResult.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#AcousticFarFieldResult.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#AcousticFarFieldResult.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#AcousticFarFieldResult.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#AcousticFarFieldResult.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#AcousticFarFieldResult.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#AcousticFarFieldResult.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#AcousticFarFieldResult.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#AcousticFarFieldResult.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#AcousticFarFieldResult.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#AcousticFarFieldResult.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#AcousticFarFieldResult.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#AcousticFarFieldResult.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#AcousticFarFieldResult.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#AcousticFarFieldResult.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#AcousticFarFieldResult.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#AcousticFarFieldResult.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#AcousticFarFieldResult.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#AcousticFarFieldResult.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#AcousticFarFieldResult.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |
| [`Worksheet`](#AcousticFarFieldResult.Worksheet)                                                   | Get the ObjectiveWorksheet action.                                                                       |
| [`XCoordinate`](#AcousticFarFieldResult.XCoordinate)                                               | Gets or sets the XCoordinate.                                                                            |
| [`YAxisExtrusionAngle`](#AcousticFarFieldResult.YAxisExtrusionAngle)                               | Gets or sets the YAxisExtrusionAngle.                                                                    |
| [`YCoordinate`](#AcousticFarFieldResult.YCoordinate)                                               | Gets or sets the YCoordinate.                                                                            |
| [`ZCoordinate`](#AcousticFarFieldResult.ZCoordinate)                                               | Gets or sets the ZCoordinate.                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="AcousticFarFieldResult.AttachedRefs"></a>

### *property* AcousticFarFieldResult.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Average"></a>

### *property* AcousticFarFieldResult.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.By"></a>

### *property* AcousticFarFieldResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CalculateTimeHistory"></a>

### *property* AcousticFarFieldResult.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Children"></a>

### *property* AcousticFarFieldResult.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ClsId"></a>

### *property* AcousticFarFieldResult.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CombinationNumber"></a>

### *property* AcousticFarFieldResult.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Comments"></a>

### *property* AcousticFarFieldResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CoordinateSystem"></a>

### *property* AcousticFarFieldResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CrackFrontNumber"></a>

### *property* AcousticFarFieldResult.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.DampedFrequency"></a>

### *property* AcousticFarFieldResult.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.DataModelObjectCategory"></a>

### *property* AcousticFarFieldResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Density"></a>

### *property* AcousticFarFieldResult.Density *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Density.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.DisplayOption"></a>

### *property* AcousticFarFieldResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.DisplayTime"></a>

### *property* AcousticFarFieldResult.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.DpfEvaluation"></a>

### *property* AcousticFarFieldResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.EndingRadiationAnglePhi"></a>

### *property* AcousticFarFieldResult.EndingRadiationAnglePhi *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.EndingRadiationAngleTheta"></a>

### *property* AcousticFarFieldResult.EndingRadiationAngleTheta *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.FarFieldMicrophoneDefinitionMethod"></a>

### *property* AcousticFarFieldResult.FarFieldMicrophoneDefinitionMethod *: [Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType](../../../../../Mechanical/DataModel/Enums/FarFieldMicrophoneDefinitionMethodType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FarFieldMicrophoneDefinitionMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Figures"></a>

### *property* AcousticFarFieldResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Frequency"></a>

### *property* AcousticFarFieldResult.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GlobalIDs"></a>

### *property* AcousticFarFieldResult.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GraphControlsXAxis"></a>

### *property* AcousticFarFieldResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GroupingFolder"></a>

### *property* AcousticFarFieldResult.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.IconName"></a>

### *property* AcousticFarFieldResult.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Identifier"></a>

### *property* AcousticFarFieldResult.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Images"></a>

### *property* AcousticFarFieldResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.InternalObject"></a>

### *property* AcousticFarFieldResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.IsSolved"></a>

### *property* AcousticFarFieldResult.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ItemType"></a>

### *property* AcousticFarFieldResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.IterationNumber"></a>

### *property* AcousticFarFieldResult.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LoadStep"></a>

### *property* AcousticFarFieldResult.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticFarFieldResult.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticFarFieldResult.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticFarFieldResult.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticFarFieldResult.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LoadStepNumber"></a>

### *property* AcousticFarFieldResult.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Location"></a>

### *property* AcousticFarFieldResult.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LogarithmicDecrement"></a>

### *property* AcousticFarFieldResult.LogarithmicDecrement *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Maximum"></a>

### *property* AcousticFarFieldResult.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.MaximumOccursOn"></a>

### *property* AcousticFarFieldResult.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.MaximumOfMaximumOverTime"></a>

### *property* AcousticFarFieldResult.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.MaximumOfMinimumOverTime"></a>

### *property* AcousticFarFieldResult.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Minimum"></a>

### *property* AcousticFarFieldResult.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.MinimumOccursOn"></a>

### *property* AcousticFarFieldResult.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.MinimumOfMaximumOverTime"></a>

### *property* AcousticFarFieldResult.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.MinimumOfMinimumOverTime"></a>

### *property* AcousticFarFieldResult.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ModalDampingRatio"></a>

### *property* AcousticFarFieldResult.ModalDampingRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ModelThicknessInZDirection"></a>

### *property* AcousticFarFieldResult.ModelThicknessInZDirection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModelThicknessInZDirection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ModelType"></a>

### *property* AcousticFarFieldResult.ModelType *: [Ansys.Mechanical.DataModel.Enums.ModelType](../../../../../Mechanical/DataModel/Enums/ModelType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ModelType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModelType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Name"></a>

### *property* AcousticFarFieldResult.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.NamedSelections"></a>

### *property* AcousticFarFieldResult.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ObjectId"></a>

### *property* AcousticFarFieldResult.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ObjectState"></a>

### *property* AcousticFarFieldResult.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ObjectTags"></a>

### *property* AcousticFarFieldResult.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Parent"></a>

### *property* AcousticFarFieldResult.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Path"></a>

### *property* AcousticFarFieldResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PhiAngleEnd"></a>

### *property* AcousticFarFieldResult.PhiAngleEnd *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhiAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PhiAngleNoOfDivisions"></a>

### *property* AcousticFarFieldResult.PhiAngleNoOfDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhiAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PhiAngleStart"></a>

### *property* AcousticFarFieldResult.PhiAngleStart *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhiAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PlotData"></a>

### *property* AcousticFarFieldResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Properties"></a>

### *property* AcousticFarFieldResult.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.RPMSelection"></a>

### *property* AcousticFarFieldResult.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ReferenceRMSSoundPressure"></a>

### *property* AcousticFarFieldResult.ReferenceRMSSoundPressure *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceRMSSoundPressure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ReferenceSoundPower"></a>

### *property* AcousticFarFieldResult.ReferenceSoundPower *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceSoundPower.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ReportedFrequency"></a>

### *property* AcousticFarFieldResult.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ResultType"></a>

### *property* AcousticFarFieldResult.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.RpmSetNumber"></a>

### *property* AcousticFarFieldResult.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ScopingMethod"></a>

### *property* AcousticFarFieldResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SeparateDataByEntity"></a>

### *property* AcousticFarFieldResult.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SetNumber"></a>

### *property* AcousticFarFieldResult.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SolutionCombinationDriver"></a>

### *property* AcousticFarFieldResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SolverComponentIDs"></a>

### *property* AcousticFarFieldResult.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SoundSpeed"></a>

### *property* AcousticFarFieldResult.SoundSpeed *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SoundSpeed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SpatialRadiationAngle"></a>

### *property* AcousticFarFieldResult.SpatialRadiationAngle *: [Ansys.Mechanical.DataModel.Enums.SpatialRadiationType](../../../../../Mechanical/DataModel/Enums/SpatialRadiationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SpatialRadiationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialRadiationAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SphereRadius"></a>

### *property* AcousticFarFieldResult.SphereRadius *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Stability"></a>

### *property* AcousticFarFieldResult.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.StartingRadiationAnglePhi"></a>

### *property* AcousticFarFieldResult.StartingRadiationAnglePhi *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StartingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.StartingRadiationAngleTheta"></a>

### *property* AcousticFarFieldResult.StartingRadiationAngleTheta *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StartingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.State"></a>

### *property* AcousticFarFieldResult.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Substep"></a>

### *property* AcousticFarFieldResult.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Suppressed"></a>

### *property* AcousticFarFieldResult.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Surface"></a>

### *property* AcousticFarFieldResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SurfaceCoating"></a>

### *property* AcousticFarFieldResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.TabularData"></a>

### *property* AcousticFarFieldResult.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ThetaAngleEnd"></a>

### *property* AcousticFarFieldResult.ThetaAngleEnd *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThetaAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ThetaAngleNoOfDivisions"></a>

### *property* AcousticFarFieldResult.ThetaAngleNoOfDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThetaAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ThetaAngleStart"></a>

### *property* AcousticFarFieldResult.ThetaAngleStart *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThetaAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Time"></a>

### *property* AcousticFarFieldResult.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticFarFieldResult.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticFarFieldResult.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticFarFieldResult.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticFarFieldResult.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Total"></a>

### *property* AcousticFarFieldResult.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.VisibleProperties"></a>

### *property* AcousticFarFieldResult.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayFilterBy"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayFrequencySelection"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayInterpolateData"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayLowerBand"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayMaxRPM"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayMinRPM"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayModeSelection"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayOrderSelection"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayRpmSelection"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayScopeToOrderLines"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayTimeSelection"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayUpperBand"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayXAxisMaximum"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayXAxisMinimum"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayYAxisMaximum"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallDisplayYAxisMinimum"></a>

### *property* AcousticFarFieldResult.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallShowTextOnMosaic"></a>

### *property* AcousticFarFieldResult.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Worksheet"></a>

### *property* AcousticFarFieldResult.Worksheet *: [Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet](../../AcousticsFarFieldResultWorksheet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.XCoordinate"></a>

### *property* AcousticFarFieldResult.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.YAxisExtrusionAngle"></a>

### *property* AcousticFarFieldResult.YAxisExtrusionAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YAxisExtrusionAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.YCoordinate"></a>

### *property* AcousticFarFieldResult.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ZCoordinate"></a>

### *property* AcousticFarFieldResult.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticFarFieldResult.Activate"></a>

### AcousticFarFieldResult.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.AddAlert"></a>

### AcousticFarFieldResult.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.AddComment"></a>

### AcousticFarFieldResult.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.AddConvergence"></a>

### AcousticFarFieldResult.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.AddFigure"></a>

### AcousticFarFieldResult.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.AddImage"></a>

### AcousticFarFieldResult.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.BodyWhereMaximumOccurs"></a>

### AcousticFarFieldResult.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ClearGeneratedData"></a>

### AcousticFarFieldResult.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Copy"></a>

### AcousticFarFieldResult.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CopyTo"></a>

### AcousticFarFieldResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CreateObjRef"></a>

### AcousticFarFieldResult.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CreateParameter"></a>

### AcousticFarFieldResult.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CreateResultsAtAllSets"></a>

### AcousticFarFieldResult.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Cut"></a>

### AcousticFarFieldResult.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Delete"></a>

### AcousticFarFieldResult.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Duplicate"></a>

### AcousticFarFieldResult.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.DuplicateWithoutResults"></a>

### AcousticFarFieldResult.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Equals"></a>

### AcousticFarFieldResult.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.EvaluateAllResults"></a>

### AcousticFarFieldResult.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ExportAnimation"></a>

### AcousticFarFieldResult.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ExportToSTLFile"></a>

### AcousticFarFieldResult.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ExportToTextFile"></a>

### AcousticFarFieldResult.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### AcousticFarFieldResult.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ExportToWAVFile"></a>

### AcousticFarFieldResult.ExportToWAVFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ExportToXMLFile"></a>

### AcousticFarFieldResult.ExportToXMLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.FetchRemoteResult"></a>

### AcousticFarFieldResult.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.FetchRemoteResults"></a>

### AcousticFarFieldResult.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetAPIName"></a>

### AcousticFarFieldResult.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetAllProperties"></a>

### AcousticFarFieldResult.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetChildren"></a>

### AcousticFarFieldResult.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticFarFieldResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetDetailsView"></a>

### AcousticFarFieldResult.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetEnumName"></a>

### AcousticFarFieldResult.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetHashCode"></a>

### AcousticFarFieldResult.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetIconFile"></a>

### AcousticFarFieldResult.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetJSON"></a>

### AcousticFarFieldResult.GetJSON() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetJSON method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetLifetimeService"></a>

### AcousticFarFieldResult.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetNodalValues"></a>

### AcousticFarFieldResult.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetObjectData"></a>

### AcousticFarFieldResult.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetParameter"></a>

### AcousticFarFieldResult.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetPath"></a>

### AcousticFarFieldResult.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetPropertyName"></a>

### AcousticFarFieldResult.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetPropertyValue"></a>

### AcousticFarFieldResult.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetQuantityName"></a>

### AcousticFarFieldResult.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetVisibleProperties"></a>

### AcousticFarFieldResult.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetVisiblePropertyNames"></a>

### AcousticFarFieldResult.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GroupAllSimilarChildren"></a>

### AcousticFarFieldResult.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GroupSimilarObjects"></a>

### AcousticFarFieldResult.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.InitializeLifetimeService"></a>

### AcousticFarFieldResult.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.IsPropertyEditable"></a>

### AcousticFarFieldResult.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticFarFieldResult.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.IsPropertyVisible"></a>

### AcousticFarFieldResult.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticFarFieldResult.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Paste"></a>

### AcousticFarFieldResult.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PromoteToNamedSelection"></a>

### AcousticFarFieldResult.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PropertyByAPIName"></a>

### AcousticFarFieldResult.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PropertyById"></a>

### AcousticFarFieldResult.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PropertyByName"></a>

### AcousticFarFieldResult.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.RemoveFromGroup"></a>

### AcousticFarFieldResult.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.RemoveParameter"></a>

### AcousticFarFieldResult.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.RenameBasedOnDefinition"></a>

### AcousticFarFieldResult.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.RetrieveRemoteDPFResults"></a>

### AcousticFarFieldResult.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.RetrieveResult"></a>

### AcousticFarFieldResult.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

