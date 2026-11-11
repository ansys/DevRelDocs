# `CompositeFailureResult`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureResult(internalObject: Any)

<a id="CompositeFailureResult"></a>

### *class* CompositeFailureResult(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CompositeFailureResult.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#CompositeFailureResult.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#CompositeFailureResult.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#CompositeFailureResult.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#CompositeFailureResult.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CompositeFailureResult.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#CompositeFailureResult.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#CompositeFailureResult.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#CompositeFailureResult.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CompositeFailureResult.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CompositeFailureResult.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CompositeFailureResult.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#CompositeFailureResult.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#CompositeFailureResult.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CompositeFailureResult.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CompositeFailureResult.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#CompositeFailureResult.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#CompositeFailureResult.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#CompositeFailureResult.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#CompositeFailureResult.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#CompositeFailureResult.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#CompositeFailureResult.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#CompositeFailureResult.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#CompositeFailureResult.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#CompositeFailureResult.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#CompositeFailureResult.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CompositeFailureResult.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CompositeFailureResult.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CompositeFailureResult.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CompositeFailureResult.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CompositeFailureResult.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CompositeFailureResult.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#CompositeFailureResult.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#CompositeFailureResult.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CompositeFailureResult.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CompositeFailureResult.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CompositeFailureResult.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CompositeFailureResult.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#CompositeFailureResult.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#CompositeFailureResult.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CompositeFailureResult.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CompositeFailureResult.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CompositeFailureResult.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CompositeFailureResult.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CompositeFailureResult.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CompositeFailureResult.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CompositeFailureResult.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#CompositeFailureResult.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#CompositeFailureResult.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CompositeFailureResult.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CompositeFailureResult.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CompositeFailureResult.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CompositeFailureResult.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#CompositeFailureResult.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#CompositeFailureResult.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#CompositeFailureResult.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#CompositeFailureResult.AttachedRefs)                                             | AttachedRefs property.                                                                                                                                                                                                                                                                                  |
| [`Average`](#CompositeFailureResult.Average)                                                       | Gets the Average.                                                                                                                                                                                                                                                                                       |
| [`By`](#CompositeFailureResult.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                                                                                                                                                |
| [`CalculateTimeHistory`](#CompositeFailureResult.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                                                                                                                                                                                                                  |
| [`Children`](#CompositeFailureResult.Children)                                                     | Gets the list of children.                                                                                                                                                                                                                                                                              |
| [`ClsId`](#CompositeFailureResult.ClsId)                                                           | ClsId property.                                                                                                                                                                                                                                                                                         |
| [`CombinationNumber`](#CompositeFailureResult.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                                                                                                                                                                                                                  |
| [`Comments`](#CompositeFailureResult.Comments)                                                     | Gets the list of associated comments.                                                                                                                                                                                                                                                                   |
| [`CoordinateSystem`](#CoordinateSystem)                                   | Gets or sets the Coordinate System.                                                                                                                                                                                                                                                                     |
| [`CrackFrontNumber`](#CompositeFailureResult.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                                                                                                                                                                                                                      |
| [`CriticalTextVisualizationMode`](#CompositeFailureResult.CriticalTextVisualizationMode)           | Controls whether the Critical Text Visualization Threshold is defined automatically by the product or manually by the user. Default:                                                                                                                                                                    |
| [`CriticalTextVisualizationThreshold`](#CompositeFailureResult.CriticalTextVisualizationThreshold) | Gets or sets the text plot threshold value when CriticalTextVisualizationMode is set to Manual. Text will not be displayed for elements with result values below the threshold for Inverse Reserve Factor results or result values exceeding the threshold for Safety factor and Safety Margin results. |
| [`DataModelObjectCategory`](#CompositeFailureResult.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                            |
| [`DisplayOption`](#CompositeFailureResult.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                                                                                                                                                                                                                         |
| [`DisplayTime`](#CompositeFailureResult.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                                                                                                                                                                                                                           |
| [`DpfEvaluation`](#CompositeFailureResult.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                                                                                                                                                                                                                         |
| [`Figures`](#CompositeFailureResult.Figures)                                                       | Gets the list of associated figures.                                                                                                                                                                                                                                                                    |
| [`GlobalIDs`](#CompositeFailureResult.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                                                                                                                                                                                                                             |
| [`GraphControlsXAxis`](#CompositeFailureResult.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                                                                                                                                                                                                                    |
| [`GroupingFolder`](#CompositeFailureResult.GroupingFolder)                                         | GroupingFolder property.                                                                                                                                                                                                                                                                                |
| [`IconName`](#CompositeFailureResult.IconName)                                                     | IconName property.                                                                                                                                                                                                                                                                                      |
| [`Identifier`](#CompositeFailureResult.Identifier)                                                 | Gets or sets the Identifier.                                                                                                                                                                                                                                                                            |
| [`Images`](#CompositeFailureResult.Images)                                                         | Gets the list of associated images.                                                                                                                                                                                                                                                                     |
| [`InternalObject`](#CompositeFailureResult.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                      |
| [`IsSolved`](#CompositeFailureResult.IsSolved)                                                     | Gets the IsSolved.                                                                                                                                                                                                                                                                                      |
| [`ItemType`](#CompositeFailureResult.ItemType)                                                     | Gets or sets the ItemType.                                                                                                                                                                                                                                                                              |
| [`IterationNumber`](#CompositeFailureResult.IterationNumber)                                       | Gets the IterationNumber.                                                                                                                                                                                                                                                                               |
| [`LoadStep`](#CompositeFailureResult.LoadStep)                                                     | Gets the LoadStep.                                                                                                                                                                                                                                                                                      |
| [`LoadStepForMaximumOfMaximumValues`](#CompositeFailureResult.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                                                                                                                                                                                                                    |
| [`LoadStepForMaximumOfMinimumValues`](#CompositeFailureResult.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                                                                                                                                                                                                                    |
| [`LoadStepForMinimumOfMaximumValues`](#CompositeFailureResult.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                                                                                                                                                                                                                    |
| [`LoadStepForMinimumOfMinimumValues`](#CompositeFailureResult.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                                                                                                                                                                                                                    |
| [`LoadStepNumber`](#CompositeFailureResult.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                                                                                                                                                                                                                        |
| [`Location`](#CompositeFailureResult.Location)                                                     | Gets or sets the Location.                                                                                                                                                                                                                                                                              |
| [`Maximum`](#CompositeFailureResult.Maximum)                                                       | Gets the Maximum.                                                                                                                                                                                                                                                                                       |
| [`MaximumOccursOn`](#CompositeFailureResult.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                                                                                                                                                                                                               |
| [`MaximumOfMaximumOverTime`](#CompositeFailureResult.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                                                                                                                                                                                                                      |
| [`MaximumOfMinimumOverTime`](#CompositeFailureResult.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                                                                                                                                                                                                                      |
| [`Minimum`](#CompositeFailureResult.Minimum)                                                       | Gets the Minimum.                                                                                                                                                                                                                                                                                       |
| [`MinimumOccursOn`](#CompositeFailureResult.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                                                                                                                                                                                                               |
| [`MinimumOfMaximumOverTime`](#CompositeFailureResult.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                                                                                                                                                                                                                      |
| [`MinimumOfMinimumOverTime`](#CompositeFailureResult.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                                                                                                                                                                                                                      |
| [`Name`](#CompositeFailureResult.Name)                                                             | Name property.                                                                                                                                                                                                                                                                                          |
| [`NamedSelections`](#NamedSelections)                                      | Gets or sets the NamedSelections.                                                                                                                                                                                                                                                                       |
| [`ObjectId`](#CompositeFailureResult.ObjectId)                                                     | ObjectId property.                                                                                                                                                                                                                                                                                      |
| [`ObjectState`](#CompositeFailureResult.ObjectState)                                               | ObjectState property.                                                                                                                                                                                                                                                                                   |
| [`ObjectTags`](#CompositeFailureResult.ObjectTags)                                                 | ObjectTags property.                                                                                                                                                                                                                                                                                    |
| [`Parent`](#CompositeFailureResult.Parent)                                                         | Parent property.                                                                                                                                                                                                                                                                                        |
| [`Path`](#Path)                                                                       | Path property.                                                                                                                                                                                                                                                                                          |
| [`PlotData`](#CompositeFailureResult.PlotData)                                                     | Gets the result table.                                                                                                                                                                                                                                                                                  |
| [`Ply`](#CompositeFailureResult.Ply)                                                               | Gets or sets the Ply selection.                                                                                                                                                                                                                                                                         |
| [`Properties`](#CompositeFailureResult.Properties)                                                 | Gets the list of properties for this object.                                                                                                                                                                                                                                                            |
| [`RPMSelection`](#CompositeFailureResult.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                                                                                                                                                |
| [`ResultType`](#CompositeFailureResult.ResultType)                                                 | Gets or sets the ResultType.                                                                                                                                                                                                                                                                            |
| [`RpmSetNumber`](#CompositeFailureResult.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                                                                                                                                                                                                                          |
| [`ScopingMethod`](#CompositeFailureResult.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                                                                                                                                                                                                                         |
| [`SeparateDataByEntity`](#CompositeFailureResult.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                                                                                                                                                                                                                  |
| [`SetNumber`](#CompositeFailureResult.SetNumber)                                                   | Gets or sets the Set Number.                                                                                                                                                                                                                                                                            |
| [`ShowCriticalFailureMode`](#CompositeFailureResult.ShowCriticalFailureMode)                       | Controls whether to show the critical failure mode text plot in graphics. Default: true                                                                                                                                                                                                                 |
| [`ShowCriticalLayer`](#CompositeFailureResult.ShowCriticalLayer)                                   | Controls whether to show the critical layer text plot in graphics. Default: false                                                                                                                                                                                                                       |
| [`ShowCriticalLoadCase`](#CompositeFailureResult.ShowCriticalLoadCase)                             | Controls whether to show the critical load case text plot in graphics. Only supported for Envelope Solution Combinations. Default: false                                                                                                                                                                |
| [`ShowOnReferenceSurface`](#CompositeFailureResult.ShowOnReferenceSurface)                         | Gets or sets the Show On Reference Surface property.                                                                                                                                                                                                                                                    |
| [`SolutionCombinationDriver`](#CompositeFailureResult.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                                                                                                                                                                                                                             |
| [`SolverComponentIDs`](#CompositeFailureResult.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                                                                                                                                                                                                                    |
| [`State`](#CompositeFailureResult.State)                                                           | State property.                                                                                                                                                                                                                                                                                         |
| [`Substep`](#CompositeFailureResult.Substep)                                                       | Gets the Substep.                                                                                                                                                                                                                                                                                       |
| [`Suppressed`](#CompositeFailureResult.Suppressed)                                                 | Gets or sets the Suppressed.                                                                                                                                                                                                                                                                            |
| [`Surface`](#Surface)                                                              | Surface property.                                                                                                                                                                                                                                                                                       |
| [`SurfaceCoating`](#SurfaceCoating)                                         | SurfaceCoating property.                                                                                                                                                                                                                                                                                |
| [`TabularData`](#CompositeFailureResult.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.                                                                                                                                                                                                            |
| [`Time`](#CompositeFailureResult.Time)                                                             | Gets the Time.                                                                                                                                                                                                                                                                                          |
| [`TimeForMaximumOfMaximumValues`](#CompositeFailureResult.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                                                                                                                                                                                                                         |
| [`TimeForMaximumOfMinimumValues`](#CompositeFailureResult.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                                                                                                                                                                                                                         |
| [`TimeForMinimumOfMaximumValues`](#CompositeFailureResult.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                                                                                                                                                                                                                         |
| [`TimeForMinimumOfMinimumValues`](#CompositeFailureResult.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                                                                                                                                                                                                                         |
| [`Total`](#CompositeFailureResult.Total)                                                           | Gets the Total.                                                                                                                                                                                                                                                                                         |
| [`VisibleProperties`](#CompositeFailureResult.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                           |
| [`WaterfallDisplayFilterBy`](#CompositeFailureResult.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                                                                                                                                                                                                                    |
| [`WaterfallDisplayFrequencySelection`](#CompositeFailureResult.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                                                                                                                                                                                                                   |
| [`WaterfallDisplayInterpolateData`](#CompositeFailureResult.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                                                                                                                                                                                                                             |
| [`WaterfallDisplayLowerBand`](#CompositeFailureResult.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                                                                                                                                                                                                                      |
| [`WaterfallDisplayMaxRPM`](#CompositeFailureResult.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                                                                                                                                                                                                                       |
| [`WaterfallDisplayMinRPM`](#CompositeFailureResult.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                                                                                                                                                                                                                       |
| [`WaterfallDisplayModeSelection`](#CompositeFailureResult.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                                                                                                                                                                                                                        |
| [`WaterfallDisplayOrderSelection`](#CompositeFailureResult.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                                                                                                                                                                                                                       |
| [`WaterfallDisplayRpmSelection`](#CompositeFailureResult.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                                                                                                                                                                                                                         |
| [`WaterfallDisplayScopeToOrderLines`](#CompositeFailureResult.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                                                                                                                                                                                                                         |
| [`WaterfallDisplayTimeSelection`](#CompositeFailureResult.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                                                                                                                                                                                                                        |
| [`WaterfallDisplayUpperBand`](#CompositeFailureResult.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                                                                                                                                                                                                                      |
| [`WaterfallDisplayXAxisMaximum`](#CompositeFailureResult.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                                                                                                                                                                                                                  |
| [`WaterfallDisplayXAxisMinimum`](#CompositeFailureResult.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                                                                                                                                                                                                                  |
| [`WaterfallDisplayYAxisMaximum`](#CompositeFailureResult.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                                                                                                                                                                                                                  |
| [`WaterfallDisplayYAxisMinimum`](#CompositeFailureResult.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                                                                                                                                                                                                                  |
| [`WaterfallShowTextOnMosaic`](#CompositeFailureResult.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                                                                                                                                                                                                                        |

<a id="property-detail"></a>

## Property detail

<a id="CompositeFailureResult.AttachedRefs"></a>

### *property* CompositeFailureResult.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Average"></a>

### *property* CompositeFailureResult.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.By"></a>

### *property* CompositeFailureResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CalculateTimeHistory"></a>

### *property* CompositeFailureResult.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Children"></a>

### *property* CompositeFailureResult.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ClsId"></a>

### *property* CompositeFailureResult.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CombinationNumber"></a>

### *property* CompositeFailureResult.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Comments"></a>

### *property* CompositeFailureResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CoordinateSystem"></a>

### *property* CompositeFailureResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CrackFrontNumber"></a>

### *property* CompositeFailureResult.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CriticalTextVisualizationMode"></a>

### *property* CompositeFailureResult.CriticalTextVisualizationMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Controls whether the Critical Text Visualization Threshold is defined automatically by the product or manually by the user. Default:

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CriticalTextVisualizationThreshold"></a>

### *property* CompositeFailureResult.CriticalTextVisualizationThreshold *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the text plot threshold value when CriticalTextVisualizationMode is set to Manual. Text will not be displayed for elements with result values below the threshold for Inverse Reserve Factor results or result values exceeding the threshold for Safety factor and Safety Margin results.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.DataModelObjectCategory"></a>

### *property* CompositeFailureResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.DisplayOption"></a>

### *property* CompositeFailureResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.DisplayTime"></a>

### *property* CompositeFailureResult.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.DpfEvaluation"></a>

### *property* CompositeFailureResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Figures"></a>

### *property* CompositeFailureResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GlobalIDs"></a>

### *property* CompositeFailureResult.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GraphControlsXAxis"></a>

### *property* CompositeFailureResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GroupingFolder"></a>

### *property* CompositeFailureResult.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.IconName"></a>

### *property* CompositeFailureResult.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Identifier"></a>

### *property* CompositeFailureResult.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Images"></a>

### *property* CompositeFailureResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.InternalObject"></a>

### *property* CompositeFailureResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.IsSolved"></a>

### *property* CompositeFailureResult.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ItemType"></a>

### *property* CompositeFailureResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.IterationNumber"></a>

### *property* CompositeFailureResult.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.LoadStep"></a>

### *property* CompositeFailureResult.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* CompositeFailureResult.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* CompositeFailureResult.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* CompositeFailureResult.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* CompositeFailureResult.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.LoadStepNumber"></a>

### *property* CompositeFailureResult.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Location"></a>

### *property* CompositeFailureResult.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Maximum"></a>

### *property* CompositeFailureResult.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.MaximumOccursOn"></a>

### *property* CompositeFailureResult.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.MaximumOfMaximumOverTime"></a>

### *property* CompositeFailureResult.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.MaximumOfMinimumOverTime"></a>

### *property* CompositeFailureResult.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Minimum"></a>

### *property* CompositeFailureResult.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.MinimumOccursOn"></a>

### *property* CompositeFailureResult.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.MinimumOfMaximumOverTime"></a>

### *property* CompositeFailureResult.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.MinimumOfMinimumOverTime"></a>

### *property* CompositeFailureResult.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Name"></a>

### *property* CompositeFailureResult.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.NamedSelections"></a>

### *property* CompositeFailureResult.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ObjectId"></a>

### *property* CompositeFailureResult.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ObjectState"></a>

### *property* CompositeFailureResult.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ObjectTags"></a>

### *property* CompositeFailureResult.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Parent"></a>

### *property* CompositeFailureResult.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Path"></a>

### *property* CompositeFailureResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.PlotData"></a>

### *property* CompositeFailureResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Ply"></a>

### *property* CompositeFailureResult.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Properties"></a>

### *property* CompositeFailureResult.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.RPMSelection"></a>

### *property* CompositeFailureResult.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ResultType"></a>

### *property* CompositeFailureResult.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.RpmSetNumber"></a>

### *property* CompositeFailureResult.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ScopingMethod"></a>

### *property* CompositeFailureResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.SeparateDataByEntity"></a>

### *property* CompositeFailureResult.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.SetNumber"></a>

### *property* CompositeFailureResult.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ShowCriticalFailureMode"></a>

### *property* CompositeFailureResult.ShowCriticalFailureMode *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Controls whether to show the critical failure mode text plot in graphics. Default: true

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ShowCriticalLayer"></a>

### *property* CompositeFailureResult.ShowCriticalLayer *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Controls whether to show the critical layer text plot in graphics. Default: false

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ShowCriticalLoadCase"></a>

### *property* CompositeFailureResult.ShowCriticalLoadCase *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Controls whether to show the critical load case text plot in graphics. Only supported for Envelope Solution Combinations. Default: false

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ShowOnReferenceSurface"></a>

### *property* CompositeFailureResult.ShowOnReferenceSurface *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Show On Reference Surface property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.SolutionCombinationDriver"></a>

### *property* CompositeFailureResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.SolverComponentIDs"></a>

### *property* CompositeFailureResult.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.State"></a>

### *property* CompositeFailureResult.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Substep"></a>

### *property* CompositeFailureResult.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Suppressed"></a>

### *property* CompositeFailureResult.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Surface"></a>

### *property* CompositeFailureResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.SurfaceCoating"></a>

### *property* CompositeFailureResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.TabularData"></a>

### *property* CompositeFailureResult.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Time"></a>

### *property* CompositeFailureResult.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.TimeForMaximumOfMaximumValues"></a>

### *property* CompositeFailureResult.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.TimeForMaximumOfMinimumValues"></a>

### *property* CompositeFailureResult.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.TimeForMinimumOfMaximumValues"></a>

### *property* CompositeFailureResult.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.TimeForMinimumOfMinimumValues"></a>

### *property* CompositeFailureResult.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Total"></a>

### *property* CompositeFailureResult.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.VisibleProperties"></a>

### *property* CompositeFailureResult.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayFilterBy"></a>

### *property* CompositeFailureResult.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayFrequencySelection"></a>

### *property* CompositeFailureResult.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayInterpolateData"></a>

### *property* CompositeFailureResult.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayLowerBand"></a>

### *property* CompositeFailureResult.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayMaxRPM"></a>

### *property* CompositeFailureResult.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayMinRPM"></a>

### *property* CompositeFailureResult.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayModeSelection"></a>

### *property* CompositeFailureResult.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayOrderSelection"></a>

### *property* CompositeFailureResult.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayRpmSelection"></a>

### *property* CompositeFailureResult.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayScopeToOrderLines"></a>

### *property* CompositeFailureResult.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayTimeSelection"></a>

### *property* CompositeFailureResult.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayUpperBand"></a>

### *property* CompositeFailureResult.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayXAxisMaximum"></a>

### *property* CompositeFailureResult.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayXAxisMinimum"></a>

### *property* CompositeFailureResult.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayYAxisMaximum"></a>

### *property* CompositeFailureResult.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallDisplayYAxisMinimum"></a>

### *property* CompositeFailureResult.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.WaterfallShowTextOnMosaic"></a>

### *property* CompositeFailureResult.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeFailureResult.Activate"></a>

### CompositeFailureResult.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.AddAlert"></a>

### CompositeFailureResult.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.AddComment"></a>

### CompositeFailureResult.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.AddConvergence"></a>

### CompositeFailureResult.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.AddFigure"></a>

### CompositeFailureResult.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.AddImage"></a>

### CompositeFailureResult.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.BodyWhereMaximumOccurs"></a>

### CompositeFailureResult.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ClearGeneratedData"></a>

### CompositeFailureResult.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Copy"></a>

### CompositeFailureResult.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CopyTo"></a>

### CompositeFailureResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CreateObjRef"></a>

### CompositeFailureResult.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CreateParameter"></a>

### CompositeFailureResult.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.CreateResultsAtAllSets"></a>

### CompositeFailureResult.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Cut"></a>

### CompositeFailureResult.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Delete"></a>

### CompositeFailureResult.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Duplicate"></a>

### CompositeFailureResult.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.DuplicateWithoutResults"></a>

### CompositeFailureResult.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Equals"></a>

### CompositeFailureResult.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.EvaluateAllResults"></a>

### CompositeFailureResult.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ExportAnimation"></a>

### CompositeFailureResult.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ExportToSTLFile"></a>

### CompositeFailureResult.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.ExportToTextFile"></a>

### CompositeFailureResult.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### CompositeFailureResult.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.FetchRemoteResult"></a>

### CompositeFailureResult.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.FetchRemoteResults"></a>

### CompositeFailureResult.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetAPIName"></a>

### CompositeFailureResult.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetAllProperties"></a>

### CompositeFailureResult.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetChildren"></a>

### CompositeFailureResult.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CompositeFailureResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetDetailsView"></a>

### CompositeFailureResult.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetEnumName"></a>

### CompositeFailureResult.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetHashCode"></a>

### CompositeFailureResult.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetIconFile"></a>

### CompositeFailureResult.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetLifetimeService"></a>

### CompositeFailureResult.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetNodalValues"></a>

### CompositeFailureResult.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetObjectData"></a>

### CompositeFailureResult.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetParameter"></a>

### CompositeFailureResult.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetPath"></a>

### CompositeFailureResult.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetPropertyName"></a>

### CompositeFailureResult.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetPropertyValue"></a>

### CompositeFailureResult.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetQuantityName"></a>

### CompositeFailureResult.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetVisibleProperties"></a>

### CompositeFailureResult.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GetVisiblePropertyNames"></a>

### CompositeFailureResult.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GroupAllSimilarChildren"></a>

### CompositeFailureResult.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.GroupSimilarObjects"></a>

### CompositeFailureResult.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.InitializeLifetimeService"></a>

### CompositeFailureResult.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.IsPropertyEditable"></a>

### CompositeFailureResult.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompositeFailureResult.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.IsPropertyVisible"></a>

### CompositeFailureResult.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompositeFailureResult.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.Paste"></a>

### CompositeFailureResult.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.PromoteToNamedSelection"></a>

### CompositeFailureResult.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.PropertyByAPIName"></a>

### CompositeFailureResult.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.PropertyById"></a>

### CompositeFailureResult.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.PropertyByName"></a>

### CompositeFailureResult.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.RemoveFromGroup"></a>

### CompositeFailureResult.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.RemoveParameter"></a>

### CompositeFailureResult.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.RenameBasedOnDefinition"></a>

### CompositeFailureResult.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.RetrieveRemoteDPFResults"></a>

### CompositeFailureResult.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="CompositeFailureResult.RetrieveResult"></a>

### CompositeFailureResult.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

