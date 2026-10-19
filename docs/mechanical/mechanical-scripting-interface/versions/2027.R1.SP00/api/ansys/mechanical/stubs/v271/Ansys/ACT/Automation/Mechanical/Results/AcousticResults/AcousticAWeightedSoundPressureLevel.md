# `AcousticAWeightedSoundPressureLevel`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticAWeightedSoundPressureLevel"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticAWeightedSoundPressureLevel(internalObject: Any)

<a id="AcousticAWeightedSoundPressureLevel"></a>

### *class* AcousticAWeightedSoundPressureLevel(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticAWeightedSoundPressureLevel.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticAWeightedSoundPressureLevel.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#AcousticAWeightedSoundPressureLevel.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#AcousticAWeightedSoundPressureLevel.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#AcousticAWeightedSoundPressureLevel.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#AcousticAWeightedSoundPressureLevel.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticAWeightedSoundPressureLevel.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#AcousticAWeightedSoundPressureLevel.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#AcousticAWeightedSoundPressureLevel.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#AcousticAWeightedSoundPressureLevel.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticAWeightedSoundPressureLevel.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticAWeightedSoundPressureLevel.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticAWeightedSoundPressureLevel.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#AcousticAWeightedSoundPressureLevel.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#AcousticAWeightedSoundPressureLevel.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticAWeightedSoundPressureLevel.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticAWeightedSoundPressureLevel.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#AcousticAWeightedSoundPressureLevel.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#AcousticAWeightedSoundPressureLevel.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#AcousticAWeightedSoundPressureLevel.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#AcousticAWeightedSoundPressureLevel.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#AcousticAWeightedSoundPressureLevel.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#AcousticAWeightedSoundPressureLevel.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#AcousticAWeightedSoundPressureLevel.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#AcousticAWeightedSoundPressureLevel.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#AcousticAWeightedSoundPressureLevel.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#AcousticAWeightedSoundPressureLevel.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticAWeightedSoundPressureLevel.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticAWeightedSoundPressureLevel.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticAWeightedSoundPressureLevel.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticAWeightedSoundPressureLevel.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticAWeightedSoundPressureLevel.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticAWeightedSoundPressureLevel.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#AcousticAWeightedSoundPressureLevel.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#AcousticAWeightedSoundPressureLevel.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticAWeightedSoundPressureLevel.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticAWeightedSoundPressureLevel.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticAWeightedSoundPressureLevel.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticAWeightedSoundPressureLevel.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#AcousticAWeightedSoundPressureLevel.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#AcousticAWeightedSoundPressureLevel.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticAWeightedSoundPressureLevel.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticAWeightedSoundPressureLevel.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticAWeightedSoundPressureLevel.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticAWeightedSoundPressureLevel.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticAWeightedSoundPressureLevel.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticAWeightedSoundPressureLevel.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticAWeightedSoundPressureLevel.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticAWeightedSoundPressureLevel.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticAWeightedSoundPressureLevel.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticAWeightedSoundPressureLevel.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticAWeightedSoundPressureLevel.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticAWeightedSoundPressureLevel.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticAWeightedSoundPressureLevel.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#AcousticAWeightedSoundPressureLevel.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#AcousticAWeightedSoundPressureLevel.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#AcousticAWeightedSoundPressureLevel.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#AcousticAWeightedSoundPressureLevel.Amplitude)                                                   | Gets or sets the Amplitude.                                                                              |
| [`AttachedRefs`](#AcousticAWeightedSoundPressureLevel.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#AcousticAWeightedSoundPressureLevel.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#AcousticAWeightedSoundPressureLevel.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#AcousticAWeightedSoundPressureLevel.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#AcousticAWeightedSoundPressureLevel.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#AcousticAWeightedSoundPressureLevel.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#AcousticAWeightedSoundPressureLevel.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#AcousticAWeightedSoundPressureLevel.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                                | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#AcousticAWeightedSoundPressureLevel.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DampedFrequency`](#AcousticAWeightedSoundPressureLevel.DampedFrequency)                                       | Gets the DampedFrequency.                                                                                |
| [`DataModelObjectCategory`](#AcousticAWeightedSoundPressureLevel.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#AcousticAWeightedSoundPressureLevel.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#AcousticAWeightedSoundPressureLevel.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#AcousticAWeightedSoundPressureLevel.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#AcousticAWeightedSoundPressureLevel.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`Frequency`](#AcousticAWeightedSoundPressureLevel.Frequency)                                                   | Gets or sets the Frequency.                                                                              |
| [`GlobalIDs`](#AcousticAWeightedSoundPressureLevel.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#AcousticAWeightedSoundPressureLevel.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#AcousticAWeightedSoundPressureLevel.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#AcousticAWeightedSoundPressureLevel.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#AcousticAWeightedSoundPressureLevel.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#AcousticAWeightedSoundPressureLevel.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#AcousticAWeightedSoundPressureLevel.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#AcousticAWeightedSoundPressureLevel.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#AcousticAWeightedSoundPressureLevel.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#AcousticAWeightedSoundPressureLevel.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#AcousticAWeightedSoundPressureLevel.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#AcousticAWeightedSoundPressureLevel.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#AcousticAWeightedSoundPressureLevel.Location)                                                     | Gets or sets the Location.                                                                               |
| [`LogarithmicDecrement`](#AcousticAWeightedSoundPressureLevel.LogarithmicDecrement)                             | Gets the LogarithmicDecrement.                                                                           |
| [`Maximum`](#AcousticAWeightedSoundPressureLevel.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#AcousticAWeightedSoundPressureLevel.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#AcousticAWeightedSoundPressureLevel.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#AcousticAWeightedSoundPressureLevel.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#AcousticAWeightedSoundPressureLevel.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#AcousticAWeightedSoundPressureLevel.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#AcousticAWeightedSoundPressureLevel.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#AcousticAWeightedSoundPressureLevel.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`ModalDampingRatio`](#AcousticAWeightedSoundPressureLevel.ModalDampingRatio)                                   | Gets the ModalDampingRatio.                                                                              |
| [`Mode`](#AcousticAWeightedSoundPressureLevel.Mode)                                                             | Gets or sets the Mode.                                                                                   |
| [`Name`](#AcousticAWeightedSoundPressureLevel.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                                   | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#AcousticAWeightedSoundPressureLevel.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#AcousticAWeightedSoundPressureLevel.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#AcousticAWeightedSoundPressureLevel.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#AcousticAWeightedSoundPressureLevel.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                                    | Path property.                                                                                           |
| [`PlotData`](#AcousticAWeightedSoundPressureLevel.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#AcousticAWeightedSoundPressureLevel.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#AcousticAWeightedSoundPressureLevel.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ReportedFrequency`](#AcousticAWeightedSoundPressureLevel.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                              |
| [`ResultType`](#AcousticAWeightedSoundPressureLevel.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#AcousticAWeightedSoundPressureLevel.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#AcousticAWeightedSoundPressureLevel.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#AcousticAWeightedSoundPressureLevel.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#AcousticAWeightedSoundPressureLevel.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#AcousticAWeightedSoundPressureLevel.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#AcousticAWeightedSoundPressureLevel.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`Stability`](#AcousticAWeightedSoundPressureLevel.Stability)                                                   | Gets the Stability.                                                                                      |
| [`State`](#AcousticAWeightedSoundPressureLevel.State)                                                           | State property.                                                                                          |
| [`Substep`](#AcousticAWeightedSoundPressureLevel.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#AcousticAWeightedSoundPressureLevel.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                           | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                      | SurfaceCoating property.                                                                                 |
| [`SweepingPhase`](#AcousticAWeightedSoundPressureLevel.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                          |
| [`TabularData`](#AcousticAWeightedSoundPressureLevel.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#AcousticAWeightedSoundPressureLevel.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#AcousticAWeightedSoundPressureLevel.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#AcousticAWeightedSoundPressureLevel.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#AcousticAWeightedSoundPressureLevel.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#AcousticAWeightedSoundPressureLevel.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="AcousticAWeightedSoundPressureLevel.Amplitude"></a>

### *property* AcousticAWeightedSoundPressureLevel.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.AttachedRefs"></a>

### *property* AcousticAWeightedSoundPressureLevel.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Average"></a>

### *property* AcousticAWeightedSoundPressureLevel.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.By"></a>

### *property* AcousticAWeightedSoundPressureLevel.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CalculateTimeHistory"></a>

### *property* AcousticAWeightedSoundPressureLevel.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Children"></a>

### *property* AcousticAWeightedSoundPressureLevel.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ClsId"></a>

### *property* AcousticAWeightedSoundPressureLevel.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CombinationNumber"></a>

### *property* AcousticAWeightedSoundPressureLevel.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Comments"></a>

### *property* AcousticAWeightedSoundPressureLevel.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CoordinateSystem"></a>

### *property* AcousticAWeightedSoundPressureLevel.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CrackFrontNumber"></a>

### *property* AcousticAWeightedSoundPressureLevel.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.DampedFrequency"></a>

### *property* AcousticAWeightedSoundPressureLevel.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.DataModelObjectCategory"></a>

### *property* AcousticAWeightedSoundPressureLevel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.DisplayOption"></a>

### *property* AcousticAWeightedSoundPressureLevel.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.DisplayTime"></a>

### *property* AcousticAWeightedSoundPressureLevel.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.DpfEvaluation"></a>

### *property* AcousticAWeightedSoundPressureLevel.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Figures"></a>

### *property* AcousticAWeightedSoundPressureLevel.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Frequency"></a>

### *property* AcousticAWeightedSoundPressureLevel.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GlobalIDs"></a>

### *property* AcousticAWeightedSoundPressureLevel.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GraphControlsXAxis"></a>

### *property* AcousticAWeightedSoundPressureLevel.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GroupingFolder"></a>

### *property* AcousticAWeightedSoundPressureLevel.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.IconName"></a>

### *property* AcousticAWeightedSoundPressureLevel.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Identifier"></a>

### *property* AcousticAWeightedSoundPressureLevel.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Images"></a>

### *property* AcousticAWeightedSoundPressureLevel.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.InternalObject"></a>

### *property* AcousticAWeightedSoundPressureLevel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.IsSolved"></a>

### *property* AcousticAWeightedSoundPressureLevel.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ItemType"></a>

### *property* AcousticAWeightedSoundPressureLevel.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.IterationNumber"></a>

### *property* AcousticAWeightedSoundPressureLevel.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LoadStep"></a>

### *property* AcousticAWeightedSoundPressureLevel.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LoadStepNumber"></a>

### *property* AcousticAWeightedSoundPressureLevel.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Location"></a>

### *property* AcousticAWeightedSoundPressureLevel.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.LogarithmicDecrement"></a>

### *property* AcousticAWeightedSoundPressureLevel.LogarithmicDecrement *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Maximum"></a>

### *property* AcousticAWeightedSoundPressureLevel.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.MaximumOccursOn"></a>

### *property* AcousticAWeightedSoundPressureLevel.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.MaximumOfMaximumOverTime"></a>

### *property* AcousticAWeightedSoundPressureLevel.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.MaximumOfMinimumOverTime"></a>

### *property* AcousticAWeightedSoundPressureLevel.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Minimum"></a>

### *property* AcousticAWeightedSoundPressureLevel.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.MinimumOccursOn"></a>

### *property* AcousticAWeightedSoundPressureLevel.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.MinimumOfMaximumOverTime"></a>

### *property* AcousticAWeightedSoundPressureLevel.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.MinimumOfMinimumOverTime"></a>

### *property* AcousticAWeightedSoundPressureLevel.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ModalDampingRatio"></a>

### *property* AcousticAWeightedSoundPressureLevel.ModalDampingRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Mode"></a>

### *property* AcousticAWeightedSoundPressureLevel.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Name"></a>

### *property* AcousticAWeightedSoundPressureLevel.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.NamedSelections"></a>

### *property* AcousticAWeightedSoundPressureLevel.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ObjectId"></a>

### *property* AcousticAWeightedSoundPressureLevel.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ObjectState"></a>

### *property* AcousticAWeightedSoundPressureLevel.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ObjectTags"></a>

### *property* AcousticAWeightedSoundPressureLevel.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Parent"></a>

### *property* AcousticAWeightedSoundPressureLevel.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Path"></a>

### *property* AcousticAWeightedSoundPressureLevel.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.PlotData"></a>

### *property* AcousticAWeightedSoundPressureLevel.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Properties"></a>

### *property* AcousticAWeightedSoundPressureLevel.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.RPMSelection"></a>

### *property* AcousticAWeightedSoundPressureLevel.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ReportedFrequency"></a>

### *property* AcousticAWeightedSoundPressureLevel.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ResultType"></a>

### *property* AcousticAWeightedSoundPressureLevel.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.RpmSetNumber"></a>

### *property* AcousticAWeightedSoundPressureLevel.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ScopingMethod"></a>

### *property* AcousticAWeightedSoundPressureLevel.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.SeparateDataByEntity"></a>

### *property* AcousticAWeightedSoundPressureLevel.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.SetNumber"></a>

### *property* AcousticAWeightedSoundPressureLevel.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.SolutionCombinationDriver"></a>

### *property* AcousticAWeightedSoundPressureLevel.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.SolverComponentIDs"></a>

### *property* AcousticAWeightedSoundPressureLevel.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Stability"></a>

### *property* AcousticAWeightedSoundPressureLevel.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.State"></a>

### *property* AcousticAWeightedSoundPressureLevel.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Substep"></a>

### *property* AcousticAWeightedSoundPressureLevel.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Suppressed"></a>

### *property* AcousticAWeightedSoundPressureLevel.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Surface"></a>

### *property* AcousticAWeightedSoundPressureLevel.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.SurfaceCoating"></a>

### *property* AcousticAWeightedSoundPressureLevel.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.SweepingPhase"></a>

### *property* AcousticAWeightedSoundPressureLevel.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.TabularData"></a>

### *property* AcousticAWeightedSoundPressureLevel.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Time"></a>

### *property* AcousticAWeightedSoundPressureLevel.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticAWeightedSoundPressureLevel.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Total"></a>

### *property* AcousticAWeightedSoundPressureLevel.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.VisibleProperties"></a>

### *property* AcousticAWeightedSoundPressureLevel.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayFilterBy"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayFrequencySelection"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayInterpolateData"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayLowerBand"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayMaxRPM"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayMinRPM"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayModeSelection"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayOrderSelection"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayRpmSelection"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayScopeToOrderLines"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayTimeSelection"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayUpperBand"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayXAxisMaximum"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayXAxisMinimum"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayYAxisMaximum"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallDisplayYAxisMinimum"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.WaterfallShowTextOnMosaic"></a>

### *property* AcousticAWeightedSoundPressureLevel.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticAWeightedSoundPressureLevel.Activate"></a>

### AcousticAWeightedSoundPressureLevel.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.AddAlert"></a>

### AcousticAWeightedSoundPressureLevel.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.AddComment"></a>

### AcousticAWeightedSoundPressureLevel.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.AddConvergence"></a>

### AcousticAWeightedSoundPressureLevel.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.AddFigure"></a>

### AcousticAWeightedSoundPressureLevel.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.AddImage"></a>

### AcousticAWeightedSoundPressureLevel.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.BodyWhereMaximumOccurs"></a>

### AcousticAWeightedSoundPressureLevel.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ClearGeneratedData"></a>

### AcousticAWeightedSoundPressureLevel.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Copy"></a>

### AcousticAWeightedSoundPressureLevel.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CopyTo"></a>

### AcousticAWeightedSoundPressureLevel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CreateObjRef"></a>

### AcousticAWeightedSoundPressureLevel.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CreateParameter"></a>

### AcousticAWeightedSoundPressureLevel.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.CreateResultsAtAllSets"></a>

### AcousticAWeightedSoundPressureLevel.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Cut"></a>

### AcousticAWeightedSoundPressureLevel.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Delete"></a>

### AcousticAWeightedSoundPressureLevel.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Duplicate"></a>

### AcousticAWeightedSoundPressureLevel.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.DuplicateWithoutResults"></a>

### AcousticAWeightedSoundPressureLevel.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Equals"></a>

### AcousticAWeightedSoundPressureLevel.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.EvaluateAllResults"></a>

### AcousticAWeightedSoundPressureLevel.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ExportAnimation"></a>

### AcousticAWeightedSoundPressureLevel.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ExportToSTLFile"></a>

### AcousticAWeightedSoundPressureLevel.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.ExportToTextFile"></a>

### AcousticAWeightedSoundPressureLevel.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### AcousticAWeightedSoundPressureLevel.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.FetchRemoteResult"></a>

### AcousticAWeightedSoundPressureLevel.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.FetchRemoteResults"></a>

### AcousticAWeightedSoundPressureLevel.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetAPIName"></a>

### AcousticAWeightedSoundPressureLevel.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetAllProperties"></a>

### AcousticAWeightedSoundPressureLevel.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetChildren"></a>

### AcousticAWeightedSoundPressureLevel.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticAWeightedSoundPressureLevel.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetDetailsView"></a>

### AcousticAWeightedSoundPressureLevel.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetEnumName"></a>

### AcousticAWeightedSoundPressureLevel.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetHashCode"></a>

### AcousticAWeightedSoundPressureLevel.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetIconFile"></a>

### AcousticAWeightedSoundPressureLevel.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetLifetimeService"></a>

### AcousticAWeightedSoundPressureLevel.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetNodalValues"></a>

### AcousticAWeightedSoundPressureLevel.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetObjectData"></a>

### AcousticAWeightedSoundPressureLevel.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetParameter"></a>

### AcousticAWeightedSoundPressureLevel.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetPath"></a>

### AcousticAWeightedSoundPressureLevel.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetPropertyName"></a>

### AcousticAWeightedSoundPressureLevel.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetPropertyValue"></a>

### AcousticAWeightedSoundPressureLevel.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetQuantityName"></a>

### AcousticAWeightedSoundPressureLevel.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetVisibleProperties"></a>

### AcousticAWeightedSoundPressureLevel.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GetVisiblePropertyNames"></a>

### AcousticAWeightedSoundPressureLevel.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GroupAllSimilarChildren"></a>

### AcousticAWeightedSoundPressureLevel.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.GroupSimilarObjects"></a>

### AcousticAWeightedSoundPressureLevel.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.InitializeLifetimeService"></a>

### AcousticAWeightedSoundPressureLevel.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.IsPropertyEditable"></a>

### AcousticAWeightedSoundPressureLevel.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticAWeightedSoundPressureLevel.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.IsPropertyVisible"></a>

### AcousticAWeightedSoundPressureLevel.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticAWeightedSoundPressureLevel.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.Paste"></a>

### AcousticAWeightedSoundPressureLevel.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.PromoteToNamedSelection"></a>

### AcousticAWeightedSoundPressureLevel.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.PropertyByAPIName"></a>

### AcousticAWeightedSoundPressureLevel.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.PropertyById"></a>

### AcousticAWeightedSoundPressureLevel.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.PropertyByName"></a>

### AcousticAWeightedSoundPressureLevel.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.RemoveFromGroup"></a>

### AcousticAWeightedSoundPressureLevel.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.RemoveParameter"></a>

### AcousticAWeightedSoundPressureLevel.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.RenameBasedOnDefinition"></a>

### AcousticAWeightedSoundPressureLevel.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.RetrieveRemoteDPFResults"></a>

### AcousticAWeightedSoundPressureLevel.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAWeightedSoundPressureLevel.RetrieveResult"></a>

### AcousticAWeightedSoundPressureLevel.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

