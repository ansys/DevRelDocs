# `AcousticDiffuseSoundTransmissionLoss`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticDiffuseSoundTransmissionLoss"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticDiffuseSoundTransmissionLoss(internalObject: Any)

<a id="AcousticDiffuseSoundTransmissionLoss"></a>

### *class* AcousticDiffuseSoundTransmissionLoss(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticDiffuseSoundTransmissionLoss.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticDiffuseSoundTransmissionLoss.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#AcousticDiffuseSoundTransmissionLoss.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#AcousticDiffuseSoundTransmissionLoss.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#AcousticDiffuseSoundTransmissionLoss.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#AcousticDiffuseSoundTransmissionLoss.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticDiffuseSoundTransmissionLoss.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#AcousticDiffuseSoundTransmissionLoss.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#AcousticDiffuseSoundTransmissionLoss.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#AcousticDiffuseSoundTransmissionLoss.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticDiffuseSoundTransmissionLoss.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticDiffuseSoundTransmissionLoss.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticDiffuseSoundTransmissionLoss.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#AcousticDiffuseSoundTransmissionLoss.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#AcousticDiffuseSoundTransmissionLoss.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticDiffuseSoundTransmissionLoss.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticDiffuseSoundTransmissionLoss.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#AcousticDiffuseSoundTransmissionLoss.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#AcousticDiffuseSoundTransmissionLoss.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#AcousticDiffuseSoundTransmissionLoss.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#AcousticDiffuseSoundTransmissionLoss.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#AcousticDiffuseSoundTransmissionLoss.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#AcousticDiffuseSoundTransmissionLoss.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#AcousticDiffuseSoundTransmissionLoss.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#AcousticDiffuseSoundTransmissionLoss.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#AcousticDiffuseSoundTransmissionLoss.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#AcousticDiffuseSoundTransmissionLoss.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticDiffuseSoundTransmissionLoss.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticDiffuseSoundTransmissionLoss.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticDiffuseSoundTransmissionLoss.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticDiffuseSoundTransmissionLoss.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticDiffuseSoundTransmissionLoss.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticDiffuseSoundTransmissionLoss.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#AcousticDiffuseSoundTransmissionLoss.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#AcousticDiffuseSoundTransmissionLoss.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticDiffuseSoundTransmissionLoss.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticDiffuseSoundTransmissionLoss.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticDiffuseSoundTransmissionLoss.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticDiffuseSoundTransmissionLoss.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#AcousticDiffuseSoundTransmissionLoss.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#AcousticDiffuseSoundTransmissionLoss.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticDiffuseSoundTransmissionLoss.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticDiffuseSoundTransmissionLoss.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticDiffuseSoundTransmissionLoss.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticDiffuseSoundTransmissionLoss.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticDiffuseSoundTransmissionLoss.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticDiffuseSoundTransmissionLoss.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticDiffuseSoundTransmissionLoss.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticDiffuseSoundTransmissionLoss.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticDiffuseSoundTransmissionLoss.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticDiffuseSoundTransmissionLoss.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticDiffuseSoundTransmissionLoss.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticDiffuseSoundTransmissionLoss.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticDiffuseSoundTransmissionLoss.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#AcousticDiffuseSoundTransmissionLoss.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#AcousticDiffuseSoundTransmissionLoss.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#AcousticDiffuseSoundTransmissionLoss.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#AcousticDiffuseSoundTransmissionLoss.Amplitude)                                                   | Gets or sets the Amplitude.                                                                              |
| [`AttachedRefs`](#AcousticDiffuseSoundTransmissionLoss.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#AcousticDiffuseSoundTransmissionLoss.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#AcousticDiffuseSoundTransmissionLoss.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#AcousticDiffuseSoundTransmissionLoss.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#AcousticDiffuseSoundTransmissionLoss.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#AcousticDiffuseSoundTransmissionLoss.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#AcousticDiffuseSoundTransmissionLoss.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#AcousticDiffuseSoundTransmissionLoss.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                                 | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#AcousticDiffuseSoundTransmissionLoss.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DampedFrequency`](#AcousticDiffuseSoundTransmissionLoss.DampedFrequency)                                       | Gets the DampedFrequency.                                                                                |
| [`DataModelObjectCategory`](#AcousticDiffuseSoundTransmissionLoss.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#AcousticDiffuseSoundTransmissionLoss.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#AcousticDiffuseSoundTransmissionLoss.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#AcousticDiffuseSoundTransmissionLoss.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#AcousticDiffuseSoundTransmissionLoss.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`Frequency`](#AcousticDiffuseSoundTransmissionLoss.Frequency)                                                   | Gets or sets the Frequency.                                                                              |
| [`FrequencyRange`](#AcousticDiffuseSoundTransmissionLoss.FrequencyRange)                                         | Gets or sets the FrequencyRange.                                                                         |
| [`GlobalIDs`](#AcousticDiffuseSoundTransmissionLoss.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#AcousticDiffuseSoundTransmissionLoss.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#AcousticDiffuseSoundTransmissionLoss.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#AcousticDiffuseSoundTransmissionLoss.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#AcousticDiffuseSoundTransmissionLoss.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#AcousticDiffuseSoundTransmissionLoss.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#AcousticDiffuseSoundTransmissionLoss.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#AcousticDiffuseSoundTransmissionLoss.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#AcousticDiffuseSoundTransmissionLoss.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#AcousticDiffuseSoundTransmissionLoss.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#AcousticDiffuseSoundTransmissionLoss.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#AcousticDiffuseSoundTransmissionLoss.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#AcousticDiffuseSoundTransmissionLoss.Location)                                                     | Gets or sets the Location.                                                                               |
| [`LogarithmicDecrement`](#AcousticDiffuseSoundTransmissionLoss.LogarithmicDecrement)                             | Gets the LogarithmicDecrement.                                                                           |
| [`Maximum`](#AcousticDiffuseSoundTransmissionLoss.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumFrequency`](#AcousticDiffuseSoundTransmissionLoss.MaximumFrequency)                                     | Gets or sets the MaximumFrequency.                                                                       |
| [`MaximumOccursOn`](#AcousticDiffuseSoundTransmissionLoss.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#AcousticDiffuseSoundTransmissionLoss.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumFrequency`](#AcousticDiffuseSoundTransmissionLoss.MinimumFrequency)                                     | Gets or sets the MinimumFrequency.                                                                       |
| [`MinimumOccursOn`](#AcousticDiffuseSoundTransmissionLoss.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#AcousticDiffuseSoundTransmissionLoss.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`ModalDampingRatio`](#AcousticDiffuseSoundTransmissionLoss.ModalDampingRatio)                                   | Gets the ModalDampingRatio.                                                                              |
| [`Mode`](#AcousticDiffuseSoundTransmissionLoss.Mode)                                                             | Gets or sets the Mode.                                                                                   |
| [`Name`](#AcousticDiffuseSoundTransmissionLoss.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                                    | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#AcousticDiffuseSoundTransmissionLoss.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#AcousticDiffuseSoundTransmissionLoss.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#AcousticDiffuseSoundTransmissionLoss.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#AcousticDiffuseSoundTransmissionLoss.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                                     | Path property.                                                                                           |
| [`PlotData`](#AcousticDiffuseSoundTransmissionLoss.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#AcousticDiffuseSoundTransmissionLoss.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#AcousticDiffuseSoundTransmissionLoss.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ReportedFrequency`](#AcousticDiffuseSoundTransmissionLoss.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                              |
| [`ResultType`](#AcousticDiffuseSoundTransmissionLoss.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#AcousticDiffuseSoundTransmissionLoss.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#AcousticDiffuseSoundTransmissionLoss.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#AcousticDiffuseSoundTransmissionLoss.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#AcousticDiffuseSoundTransmissionLoss.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#AcousticDiffuseSoundTransmissionLoss.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#AcousticDiffuseSoundTransmissionLoss.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`Stability`](#AcousticDiffuseSoundTransmissionLoss.Stability)                                                   | Gets the Stability.                                                                                      |
| [`State`](#AcousticDiffuseSoundTransmissionLoss.State)                                                           | State property.                                                                                          |
| [`Substep`](#AcousticDiffuseSoundTransmissionLoss.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#AcousticDiffuseSoundTransmissionLoss.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                            | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                       | SurfaceCoating property.                                                                                 |
| [`SweepingPhase`](#AcousticDiffuseSoundTransmissionLoss.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                          |
| [`TabularData`](#AcousticDiffuseSoundTransmissionLoss.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#AcousticDiffuseSoundTransmissionLoss.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#AcousticDiffuseSoundTransmissionLoss.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#AcousticDiffuseSoundTransmissionLoss.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#AcousticDiffuseSoundTransmissionLoss.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="AcousticDiffuseSoundTransmissionLoss.Amplitude"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AttachedRefs"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Average"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.By"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CalculateTimeHistory"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Children"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ClsId"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CombinationNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Comments"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CoordinateSystem"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CrackFrontNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DampedFrequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DataModelObjectCategory"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DisplayOption"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DisplayTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DpfEvaluation"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Figures"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Frequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.FrequencyRange"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.FrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GlobalIDs"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GraphControlsXAxis"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GroupingFolder"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.IconName"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Identifier"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Images"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.InternalObject"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.IsSolved"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ItemType"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.IterationNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStep"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LoadStepNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Location"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.LogarithmicDecrement"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.LogarithmicDecrement *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Maximum"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MaximumFrequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MaximumOccursOn"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MaximumOfMaximumOverTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MaximumOfMinimumOverTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Minimum"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MinimumFrequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MinimumOccursOn"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MinimumOfMaximumOverTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.MinimumOfMinimumOverTime"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ModalDampingRatio"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ModalDampingRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Mode"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Name"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.NamedSelections"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ObjectId"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ObjectState"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ObjectTags"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Parent"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Path"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.PlotData"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Properties"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.RPMSelection"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ReportedFrequency"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ResultType"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.RpmSetNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ScopingMethod"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SeparateDataByEntity"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SetNumber"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SolutionCombinationDriver"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SolverComponentIDs"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Stability"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.State"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Substep"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Suppressed"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Surface"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SurfaceCoating"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.SweepingPhase"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.TabularData"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Time"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Total"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.VisibleProperties"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayFilterBy"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayFrequencySelection"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayInterpolateData"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayLowerBand"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayMaxRPM"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayMinRPM"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayModeSelection"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayOrderSelection"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayRpmSelection"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayScopeToOrderLines"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayTimeSelection"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayUpperBand"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayXAxisMaximum"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayXAxisMinimum"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayYAxisMaximum"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayYAxisMinimum"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.WaterfallShowTextOnMosaic"></a>

### *property* AcousticDiffuseSoundTransmissionLoss.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticDiffuseSoundTransmissionLoss.Activate"></a>

### AcousticDiffuseSoundTransmissionLoss.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddAlert"></a>

### AcousticDiffuseSoundTransmissionLoss.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddComment"></a>

### AcousticDiffuseSoundTransmissionLoss.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddConvergence"></a>

### AcousticDiffuseSoundTransmissionLoss.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddFigure"></a>

### AcousticDiffuseSoundTransmissionLoss.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.AddImage"></a>

### AcousticDiffuseSoundTransmissionLoss.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.BodyWhereMaximumOccurs"></a>

### AcousticDiffuseSoundTransmissionLoss.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ClearGeneratedData"></a>

### AcousticDiffuseSoundTransmissionLoss.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Copy"></a>

### AcousticDiffuseSoundTransmissionLoss.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CopyTo"></a>

### AcousticDiffuseSoundTransmissionLoss.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CreateObjRef"></a>

### AcousticDiffuseSoundTransmissionLoss.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CreateParameter"></a>

### AcousticDiffuseSoundTransmissionLoss.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.CreateResultsAtAllSets"></a>

### AcousticDiffuseSoundTransmissionLoss.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Cut"></a>

### AcousticDiffuseSoundTransmissionLoss.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Delete"></a>

### AcousticDiffuseSoundTransmissionLoss.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Duplicate"></a>

### AcousticDiffuseSoundTransmissionLoss.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.DuplicateWithoutResults"></a>

### AcousticDiffuseSoundTransmissionLoss.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Equals"></a>

### AcousticDiffuseSoundTransmissionLoss.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.EvaluateAllResults"></a>

### AcousticDiffuseSoundTransmissionLoss.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ExportAnimation"></a>

### AcousticDiffuseSoundTransmissionLoss.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ExportToSTLFile"></a>

### AcousticDiffuseSoundTransmissionLoss.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.ExportToTextFile"></a>

### AcousticDiffuseSoundTransmissionLoss.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### AcousticDiffuseSoundTransmissionLoss.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.FetchRemoteResult"></a>

### AcousticDiffuseSoundTransmissionLoss.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.FetchRemoteResults"></a>

### AcousticDiffuseSoundTransmissionLoss.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetAPIName"></a>

### AcousticDiffuseSoundTransmissionLoss.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetAllProperties"></a>

### AcousticDiffuseSoundTransmissionLoss.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetChildren"></a>

### AcousticDiffuseSoundTransmissionLoss.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticDiffuseSoundTransmissionLoss.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetDetailsView"></a>

### AcousticDiffuseSoundTransmissionLoss.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetEnumName"></a>

### AcousticDiffuseSoundTransmissionLoss.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetHashCode"></a>

### AcousticDiffuseSoundTransmissionLoss.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetIconFile"></a>

### AcousticDiffuseSoundTransmissionLoss.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetLifetimeService"></a>

### AcousticDiffuseSoundTransmissionLoss.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetNodalValues"></a>

### AcousticDiffuseSoundTransmissionLoss.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetObjectData"></a>

### AcousticDiffuseSoundTransmissionLoss.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetParameter"></a>

### AcousticDiffuseSoundTransmissionLoss.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetPath"></a>

### AcousticDiffuseSoundTransmissionLoss.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetPropertyName"></a>

### AcousticDiffuseSoundTransmissionLoss.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetPropertyValue"></a>

### AcousticDiffuseSoundTransmissionLoss.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetQuantityName"></a>

### AcousticDiffuseSoundTransmissionLoss.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetVisibleProperties"></a>

### AcousticDiffuseSoundTransmissionLoss.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GetVisiblePropertyNames"></a>

### AcousticDiffuseSoundTransmissionLoss.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GroupAllSimilarChildren"></a>

### AcousticDiffuseSoundTransmissionLoss.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.GroupSimilarObjects"></a>

### AcousticDiffuseSoundTransmissionLoss.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.InitializeLifetimeService"></a>

### AcousticDiffuseSoundTransmissionLoss.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.IsPropertyEditable"></a>

### AcousticDiffuseSoundTransmissionLoss.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticDiffuseSoundTransmissionLoss.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.IsPropertyVisible"></a>

### AcousticDiffuseSoundTransmissionLoss.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticDiffuseSoundTransmissionLoss.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.Paste"></a>

### AcousticDiffuseSoundTransmissionLoss.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.PromoteToNamedSelection"></a>

### AcousticDiffuseSoundTransmissionLoss.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.PropertyByAPIName"></a>

### AcousticDiffuseSoundTransmissionLoss.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.PropertyById"></a>

### AcousticDiffuseSoundTransmissionLoss.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.PropertyByName"></a>

### AcousticDiffuseSoundTransmissionLoss.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.RemoveFromGroup"></a>

### AcousticDiffuseSoundTransmissionLoss.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.RemoveParameter"></a>

### AcousticDiffuseSoundTransmissionLoss.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.RenameBasedOnDefinition"></a>

### AcousticDiffuseSoundTransmissionLoss.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.RetrieveRemoteDPFResults"></a>

### AcousticDiffuseSoundTransmissionLoss.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticDiffuseSoundTransmissionLoss.RetrieveResult"></a>

### AcousticDiffuseSoundTransmissionLoss.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

