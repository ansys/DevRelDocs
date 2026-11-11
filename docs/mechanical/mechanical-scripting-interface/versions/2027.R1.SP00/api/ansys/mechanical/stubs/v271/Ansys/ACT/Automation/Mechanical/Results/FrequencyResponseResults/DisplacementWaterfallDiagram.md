# `DisplacementWaterfallDiagram`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.DisplacementWaterfallDiagram"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.DisplacementWaterfallDiagram(internalObject: Any)

<a id="DisplacementWaterfallDiagram"></a>

### *class* DisplacementWaterfallDiagram(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a DisplacementWaterfallDiagram.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#DisplacementWaterfallDiagram.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#DisplacementWaterfallDiagram.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#DisplacementWaterfallDiagram.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#DisplacementWaterfallDiagram.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#DisplacementWaterfallDiagram.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#DisplacementWaterfallDiagram.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#DisplacementWaterfallDiagram.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#DisplacementWaterfallDiagram.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#DisplacementWaterfallDiagram.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#DisplacementWaterfallDiagram.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#DisplacementWaterfallDiagram.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#DisplacementWaterfallDiagram.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#DisplacementWaterfallDiagram.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#DisplacementWaterfallDiagram.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#DisplacementWaterfallDiagram.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#DisplacementWaterfallDiagram.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#DisplacementWaterfallDiagram.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#DisplacementWaterfallDiagram.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#DisplacementWaterfallDiagram.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#DisplacementWaterfallDiagram.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#DisplacementWaterfallDiagram.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#DisplacementWaterfallDiagram.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#DisplacementWaterfallDiagram.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#DisplacementWaterfallDiagram.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#DisplacementWaterfallDiagram.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#DisplacementWaterfallDiagram.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#DisplacementWaterfallDiagram.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#DisplacementWaterfallDiagram.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#DisplacementWaterfallDiagram.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#DisplacementWaterfallDiagram.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#DisplacementWaterfallDiagram.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#DisplacementWaterfallDiagram.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#DisplacementWaterfallDiagram.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#DisplacementWaterfallDiagram.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#DisplacementWaterfallDiagram.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#DisplacementWaterfallDiagram.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#DisplacementWaterfallDiagram.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#DisplacementWaterfallDiagram.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#DisplacementWaterfallDiagram.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#DisplacementWaterfallDiagram.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#DisplacementWaterfallDiagram.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#DisplacementWaterfallDiagram.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#DisplacementWaterfallDiagram.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#DisplacementWaterfallDiagram.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#DisplacementWaterfallDiagram.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#DisplacementWaterfallDiagram.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#DisplacementWaterfallDiagram.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#DisplacementWaterfallDiagram.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#DisplacementWaterfallDiagram.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#DisplacementWaterfallDiagram.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#DisplacementWaterfallDiagram.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#DisplacementWaterfallDiagram.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#DisplacementWaterfallDiagram.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#DisplacementWaterfallDiagram.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#DisplacementWaterfallDiagram.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#DisplacementWaterfallDiagram.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#DisplacementWaterfallDiagram.AttachedRefs)                                             | AttachedRefs property.                                                                                                                                 |
| [`Average`](#DisplacementWaterfallDiagram.Average)                                                       | Gets the Average.                                                                                                                                      |
| [`By`](#DisplacementWaterfallDiagram.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                               |
| [`CalculateTimeHistory`](#DisplacementWaterfallDiagram.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                                                                 |
| [`Children`](#DisplacementWaterfallDiagram.Children)                                                     | Gets the list of children.                                                                                                                             |
| [`ClsId`](#DisplacementWaterfallDiagram.ClsId)                                                           | ClsId property.                                                                                                                                        |
| [`CombinationNumber`](#DisplacementWaterfallDiagram.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                                                                 |
| [`Comments`](#DisplacementWaterfallDiagram.Comments)                                                     | Gets the list of associated comments.                                                                                                                  |
| [`CoordinateSystem`](#CoordinateSystem)                                         | Gets or sets the Coordinate System.                                                                                                                    |
| [`CrackFrontNumber`](#DisplacementWaterfallDiagram.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                                                                     |
| [`DataModelObjectCategory`](#DisplacementWaterfallDiagram.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                                                                           |
| [`DisplayOption`](#DisplacementWaterfallDiagram.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                                                                        |
| [`DisplayOrder`](#DisplacementWaterfallDiagram.DisplayOrder)                                             | Gets or sets the DisplayOrder.                                                                                                                         |
| [`DisplayTime`](#DisplacementWaterfallDiagram.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                                                                          |
| [`DpfEvaluation`](#DisplacementWaterfallDiagram.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                                                                        |
| [`Figures`](#DisplacementWaterfallDiagram.Figures)                                                       | Gets the list of associated figures.                                                                                                                   |
| [`FrequencySelection`](#DisplacementWaterfallDiagram.FrequencySelection)                                 | Gets or sets the FrequencySelection.                                                                                                                   |
| [`GlobalIDs`](#DisplacementWaterfallDiagram.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                                                                            |
| [`GraphControlsXAxis`](#DisplacementWaterfallDiagram.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                                                                   |
| [`GroupingFolder`](#DisplacementWaterfallDiagram.GroupingFolder)                                         | GroupingFolder property.                                                                                                                               |
| [`IconName`](#DisplacementWaterfallDiagram.IconName)                                                     | IconName property.                                                                                                                                     |
| [`Identifier`](#DisplacementWaterfallDiagram.Identifier)                                                 | Gets or sets the Identifier.                                                                                                                           |
| [`Images`](#DisplacementWaterfallDiagram.Images)                                                         | Gets the list of associated images.                                                                                                                    |
| [`InternalObject`](#DisplacementWaterfallDiagram.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                                                                     |
| [`IsSolved`](#DisplacementWaterfallDiagram.IsSolved)                                                     | Gets the IsSolved.                                                                                                                                     |
| [`ItemType`](#DisplacementWaterfallDiagram.ItemType)                                                     | Gets or sets the ItemType.                                                                                                                             |
| [`IterationNumber`](#DisplacementWaterfallDiagram.IterationNumber)                                       | Gets the IterationNumber.                                                                                                                              |
| [`LoadStep`](#DisplacementWaterfallDiagram.LoadStep)                                                     | Gets the LoadStep.                                                                                                                                     |
| [`LoadStepForMaximumOfMaximumValues`](#DisplacementWaterfallDiagram.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                                                                   |
| [`LoadStepForMaximumOfMinimumValues`](#DisplacementWaterfallDiagram.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                                                                   |
| [`LoadStepForMinimumOfMaximumValues`](#DisplacementWaterfallDiagram.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                                                                   |
| [`LoadStepForMinimumOfMinimumValues`](#DisplacementWaterfallDiagram.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                                                                   |
| [`LoadStepNumber`](#DisplacementWaterfallDiagram.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                                                                       |
| [`Location`](#DisplacementWaterfallDiagram.Location)                                                     | Gets or sets the Location.                                                                                                                             |
| [`Maximum`](#DisplacementWaterfallDiagram.Maximum)                                                       | Gets the Maximum.                                                                                                                                      |
| [`MaximumOccursOn`](#DisplacementWaterfallDiagram.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                                                              |
| [`MaximumOfMaximumOverTime`](#DisplacementWaterfallDiagram.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                                                                     |
| [`MaximumOfMinimumOverTime`](#DisplacementWaterfallDiagram.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                                                                     |
| [`Minimum`](#DisplacementWaterfallDiagram.Minimum)                                                       | Gets the Minimum.                                                                                                                                      |
| [`MinimumOccursOn`](#DisplacementWaterfallDiagram.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                                                              |
| [`MinimumOfMaximumOverTime`](#DisplacementWaterfallDiagram.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                                                                     |
| [`MinimumOfMinimumOverTime`](#DisplacementWaterfallDiagram.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                                                                     |
| [`MosaicChartLegendMax`](#DisplacementWaterfallDiagram.MosaicChartLegendMax)                             | Gets or sets the MosaicChartLegendMax.                                                                                                                 |
| [`MosaicChartLegendMin`](#DisplacementWaterfallDiagram.MosaicChartLegendMin)                             | Gets or sets the MosaicChartLegendMin.                                                                                                                 |
| [`Name`](#DisplacementWaterfallDiagram.Name)                                                             | Name property.                                                                                                                                         |
| [`NamedSelections`](#NamedSelections)                                            | Gets or sets the NamedSelections.                                                                                                                      |
| [`NormalOrientation`](#DisplacementWaterfallDiagram.NormalOrientation)                                   | Gets or sets the directional component(s) of the displacement vector used for plotting.                                                                |
| [`ObjectId`](#DisplacementWaterfallDiagram.ObjectId)                                                     | ObjectId property.                                                                                                                                     |
| [`ObjectState`](#DisplacementWaterfallDiagram.ObjectState)                                               | ObjectState property.                                                                                                                                  |
| [`ObjectTags`](#DisplacementWaterfallDiagram.ObjectTags)                                                 | ObjectTags property.                                                                                                                                   |
| [`OrderSelection`](#DisplacementWaterfallDiagram.OrderSelection)                                         | Gets or sets the OrderSelection.                                                                                                                       |
| [`OrdersToDisplay`](#DisplacementWaterfallDiagram.OrdersToDisplay)                                       | Gets or sets the OrdersToDisplay.                                                                                                                      |
| [`Parent`](#DisplacementWaterfallDiagram.Parent)                                                         | Parent property.                                                                                                                                       |
| [`Path`](#Path)                                                                             | Path property.                                                                                                                                         |
| [`PlotData`](#DisplacementWaterfallDiagram.PlotData)                                                     | Gets the result table.                                                                                                                                 |
| [`Properties`](#DisplacementWaterfallDiagram.Properties)                                                 | Gets the list of properties for this object.                                                                                                           |
| [`RPMSelection`](#DisplacementWaterfallDiagram.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                               |
| [`ResultType`](#DisplacementWaterfallDiagram.ResultType)                                                 | Gets or sets the ResultType.                                                                                                                           |
| [`RpmSelection`](#DisplacementWaterfallDiagram.RpmSelection)                                             | Gets or sets the RpmSelection.                                                                                                                         |
| [`RpmSetNumber`](#DisplacementWaterfallDiagram.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                                                                         |
| [`STFTCutoffFrequency`](#DisplacementWaterfallDiagram.STFTCutoffFrequency)                               | Gets or sets the STFTCutoffFrequency.                                                                                                                  |
| [`STFTEndTime`](#DisplacementWaterfallDiagram.STFTEndTime)                                               | Gets or sets the STFTEndTime.                                                                                                                          |
| [`STFTMinFreqResolution`](#DisplacementWaterfallDiagram.STFTMinFreqResolution)                           | Gets or sets the STFTMinFreqResolution.                                                                                                                |
| [`STFTNumberSlice`](#DisplacementWaterfallDiagram.STFTNumberSlice)                                       | Gets or sets the STFTNumberSlice.                                                                                                                      |
| [`STFTOverlap`](#DisplacementWaterfallDiagram.STFTOverlap)                                               | Gets or sets the STFTOverlap.                                                                                                                          |
| [`STFTStartTime`](#DisplacementWaterfallDiagram.STFTStartTime)                                           | Gets or sets the STFTStartTime.                                                                                                                        |
| [`STFTWindowType`](#DisplacementWaterfallDiagram.STFTWindowType)                                         | Gets or sets the STFTWindowType.                                                                                                                       |
| [`ScopingMethod`](#DisplacementWaterfallDiagram.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                                                                        |
| [`SeparateDataByEntity`](#DisplacementWaterfallDiagram.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                                                                 |
| [`SetNumber`](#DisplacementWaterfallDiagram.SetNumber)                                                   | Gets or sets the Set Number.                                                                                                                           |
| [`ShowTextOnMosaic`](#DisplacementWaterfallDiagram.ShowTextOnMosaic)                                     | Gets or sets the ShowTextOnMosaic.                                                                                                                     |
| [`SolutionCombinationDriver`](#DisplacementWaterfallDiagram.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                                                                            |
| [`SolverComponentIDs`](#DisplacementWaterfallDiagram.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                                                                   |
| [`SpatialResolution`](#DisplacementWaterfallDiagram.SpatialResolution)                                   | Gets or sets how solution data from multiple nodes for the given scoping are combined into a single representative result. The default is Use Average. |
| [`State`](#DisplacementWaterfallDiagram.State)                                                           | State property.                                                                                                                                        |
| [`Substep`](#DisplacementWaterfallDiagram.Substep)                                                       | Gets the Substep.                                                                                                                                      |
| [`Suppressed`](#DisplacementWaterfallDiagram.Suppressed)                                                 | Gets or sets the Suppressed.                                                                                                                           |
| [`Surface`](#Surface)                                                                    | Surface property.                                                                                                                                      |
| [`SurfaceCoating`](#SurfaceCoating)                                               | SurfaceCoating property.                                                                                                                               |
| [`TabularData`](#DisplacementWaterfallDiagram.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.                                                           |
| [`Time`](#DisplacementWaterfallDiagram.Time)                                                             | Gets the Time.                                                                                                                                         |
| [`TimeForMaximumOfMaximumValues`](#DisplacementWaterfallDiagram.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                                                                        |
| [`TimeForMaximumOfMinimumValues`](#DisplacementWaterfallDiagram.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                                                                        |
| [`TimeForMinimumOfMaximumValues`](#DisplacementWaterfallDiagram.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                                                                        |
| [`TimeForMinimumOfMinimumValues`](#DisplacementWaterfallDiagram.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                                                                        |
| [`Total`](#DisplacementWaterfallDiagram.Total)                                                           | Gets the Total.                                                                                                                                        |
| [`UseModeContribution`](#DisplacementWaterfallDiagram.UseModeContribution)                               | Gets or sets the UseModeContribution.                                                                                                                  |
| [`UsePanelContribution`](#DisplacementWaterfallDiagram.UsePanelContribution)                             | Gets or sets the UsePanelContribution.                                                                                                                 |
| [`VisibleProperties`](#DisplacementWaterfallDiagram.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                                                                          |
| [`WaterfallDisplayFilterBy`](#DisplacementWaterfallDiagram.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                                                                   |
| [`WaterfallDisplayFrequencySelection`](#DisplacementWaterfallDiagram.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                                                                  |
| [`WaterfallDisplayInterpolateData`](#DisplacementWaterfallDiagram.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                                                                            |
| [`WaterfallDisplayLowerBand`](#DisplacementWaterfallDiagram.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                                                                     |
| [`WaterfallDisplayMaxRPM`](#DisplacementWaterfallDiagram.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                                                                      |
| [`WaterfallDisplayMinRPM`](#DisplacementWaterfallDiagram.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                                                                      |
| [`WaterfallDisplayModeSelection`](#DisplacementWaterfallDiagram.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                                                                       |
| [`WaterfallDisplayOrderSelection`](#DisplacementWaterfallDiagram.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                                                                      |
| [`WaterfallDisplayRpmSelection`](#DisplacementWaterfallDiagram.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                                                                        |
| [`WaterfallDisplayScopeToOrderLines`](#DisplacementWaterfallDiagram.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                                                                        |
| [`WaterfallDisplayTimeSelection`](#DisplacementWaterfallDiagram.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                                                                       |
| [`WaterfallDisplayUpperBand`](#DisplacementWaterfallDiagram.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                                                                     |
| [`WaterfallDisplayXAxisMaximum`](#DisplacementWaterfallDiagram.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                                                                 |
| [`WaterfallDisplayXAxisMinimum`](#DisplacementWaterfallDiagram.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                                                                 |
| [`WaterfallDisplayYAxisMaximum`](#DisplacementWaterfallDiagram.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                                                                 |
| [`WaterfallDisplayYAxisMinimum`](#DisplacementWaterfallDiagram.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                                                                 |
| [`WaterfallShowTextOnMosaic`](#DisplacementWaterfallDiagram.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                                                                       |

<a id="property-detail"></a>

## Property detail

<a id="DisplacementWaterfallDiagram.AttachedRefs"></a>

### *property* DisplacementWaterfallDiagram.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Average"></a>

### *property* DisplacementWaterfallDiagram.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.By"></a>

### *property* DisplacementWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.CalculateTimeHistory"></a>

### *property* DisplacementWaterfallDiagram.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Children"></a>

### *property* DisplacementWaterfallDiagram.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.ClsId"></a>

### *property* DisplacementWaterfallDiagram.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.CombinationNumber"></a>

### *property* DisplacementWaterfallDiagram.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Comments"></a>

### *property* DisplacementWaterfallDiagram.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.CoordinateSystem"></a>

### *property* DisplacementWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.CrackFrontNumber"></a>

### *property* DisplacementWaterfallDiagram.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.DataModelObjectCategory"></a>

### *property* DisplacementWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.DisplayOption"></a>

### *property* DisplacementWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.DisplayOrder"></a>

### *property* DisplacementWaterfallDiagram.DisplayOrder *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOrder.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.DisplayTime"></a>

### *property* DisplacementWaterfallDiagram.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.DpfEvaluation"></a>

### *property* DisplacementWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Figures"></a>

### *property* DisplacementWaterfallDiagram.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.FrequencySelection"></a>

### *property* DisplacementWaterfallDiagram.FrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrequencySelection.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GlobalIDs"></a>

### *property* DisplacementWaterfallDiagram.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GraphControlsXAxis"></a>

### *property* DisplacementWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GroupingFolder"></a>

### *property* DisplacementWaterfallDiagram.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.IconName"></a>

### *property* DisplacementWaterfallDiagram.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Identifier"></a>

### *property* DisplacementWaterfallDiagram.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Images"></a>

### *property* DisplacementWaterfallDiagram.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.InternalObject"></a>

### *property* DisplacementWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.IsSolved"></a>

### *property* DisplacementWaterfallDiagram.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.ItemType"></a>

### *property* DisplacementWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.IterationNumber"></a>

### *property* DisplacementWaterfallDiagram.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.LoadStep"></a>

### *property* DisplacementWaterfallDiagram.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.LoadStepForMaximumOfMaximumValues"></a>

### *property* DisplacementWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.LoadStepForMaximumOfMinimumValues"></a>

### *property* DisplacementWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.LoadStepForMinimumOfMaximumValues"></a>

### *property* DisplacementWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.LoadStepForMinimumOfMinimumValues"></a>

### *property* DisplacementWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.LoadStepNumber"></a>

### *property* DisplacementWaterfallDiagram.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Location"></a>

### *property* DisplacementWaterfallDiagram.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Maximum"></a>

### *property* DisplacementWaterfallDiagram.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.MaximumOccursOn"></a>

### *property* DisplacementWaterfallDiagram.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.MaximumOfMaximumOverTime"></a>

### *property* DisplacementWaterfallDiagram.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.MaximumOfMinimumOverTime"></a>

### *property* DisplacementWaterfallDiagram.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Minimum"></a>

### *property* DisplacementWaterfallDiagram.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.MinimumOccursOn"></a>

### *property* DisplacementWaterfallDiagram.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.MinimumOfMaximumOverTime"></a>

### *property* DisplacementWaterfallDiagram.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.MinimumOfMinimumOverTime"></a>

### *property* DisplacementWaterfallDiagram.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.MosaicChartLegendMax"></a>

### *property* DisplacementWaterfallDiagram.MosaicChartLegendMax *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MosaicChartLegendMax.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.MosaicChartLegendMin"></a>

### *property* DisplacementWaterfallDiagram.MosaicChartLegendMin *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MosaicChartLegendMin.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Name"></a>

### *property* DisplacementWaterfallDiagram.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.NamedSelections"></a>

### *property* DisplacementWaterfallDiagram.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.NormalOrientation"></a>

### *property* DisplacementWaterfallDiagram.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the directional component(s) of the displacement vector used for plotting.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.ObjectId"></a>

### *property* DisplacementWaterfallDiagram.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.ObjectState"></a>

### *property* DisplacementWaterfallDiagram.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.ObjectTags"></a>

### *property* DisplacementWaterfallDiagram.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.OrderSelection"></a>

### *property* DisplacementWaterfallDiagram.OrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OrderSelection.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.OrdersToDisplay"></a>

### *property* DisplacementWaterfallDiagram.OrdersToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OrdersToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Parent"></a>

### *property* DisplacementWaterfallDiagram.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Path"></a>

### *property* DisplacementWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.PlotData"></a>

### *property* DisplacementWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Properties"></a>

### *property* DisplacementWaterfallDiagram.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.RPMSelection"></a>

### *property* DisplacementWaterfallDiagram.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.ResultType"></a>

### *property* DisplacementWaterfallDiagram.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.RpmSelection"></a>

### *property* DisplacementWaterfallDiagram.RpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSelection.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.RpmSetNumber"></a>

### *property* DisplacementWaterfallDiagram.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.STFTCutoffFrequency"></a>

### *property* DisplacementWaterfallDiagram.STFTCutoffFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTCutoffFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.STFTEndTime"></a>

### *property* DisplacementWaterfallDiagram.STFTEndTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTEndTime.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.STFTMinFreqResolution"></a>

### *property* DisplacementWaterfallDiagram.STFTMinFreqResolution *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTMinFreqResolution.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.STFTNumberSlice"></a>

### *property* DisplacementWaterfallDiagram.STFTNumberSlice *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTNumberSlice.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.STFTOverlap"></a>

### *property* DisplacementWaterfallDiagram.STFTOverlap *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTOverlap.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.STFTStartTime"></a>

### *property* DisplacementWaterfallDiagram.STFTStartTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTStartTime.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.STFTWindowType"></a>

### *property* DisplacementWaterfallDiagram.STFTWindowType *: [Ansys.Mechanical.DataModel.Enums.WindowType](../../../../../Mechanical/DataModel/Enums/WindowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WindowType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTWindowType.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.ScopingMethod"></a>

### *property* DisplacementWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.SeparateDataByEntity"></a>

### *property* DisplacementWaterfallDiagram.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.SetNumber"></a>

### *property* DisplacementWaterfallDiagram.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.ShowTextOnMosaic"></a>

### *property* DisplacementWaterfallDiagram.ShowTextOnMosaic *: Ansys.Mechanical.DataModel.Enums.ShowTextOnMosaicMode | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowTextOnMosaic.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.SolutionCombinationDriver"></a>

### *property* DisplacementWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.SolverComponentIDs"></a>

### *property* DisplacementWaterfallDiagram.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.SpatialResolution"></a>

### *property* DisplacementWaterfallDiagram.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets how solution data from multiple nodes for the given scoping are combined into a single representative result. The default is Use Average.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.State"></a>

### *property* DisplacementWaterfallDiagram.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Substep"></a>

### *property* DisplacementWaterfallDiagram.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Suppressed"></a>

### *property* DisplacementWaterfallDiagram.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Surface"></a>

### *property* DisplacementWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.SurfaceCoating"></a>

### *property* DisplacementWaterfallDiagram.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.TabularData"></a>

### *property* DisplacementWaterfallDiagram.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Time"></a>

### *property* DisplacementWaterfallDiagram.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.TimeForMaximumOfMaximumValues"></a>

### *property* DisplacementWaterfallDiagram.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.TimeForMaximumOfMinimumValues"></a>

### *property* DisplacementWaterfallDiagram.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.TimeForMinimumOfMaximumValues"></a>

### *property* DisplacementWaterfallDiagram.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.TimeForMinimumOfMinimumValues"></a>

### *property* DisplacementWaterfallDiagram.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Total"></a>

### *property* DisplacementWaterfallDiagram.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.UseModeContribution"></a>

### *property* DisplacementWaterfallDiagram.UseModeContribution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseModeContribution.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.UsePanelContribution"></a>

### *property* DisplacementWaterfallDiagram.UsePanelContribution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UsePanelContribution.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.VisibleProperties"></a>

### *property* DisplacementWaterfallDiagram.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayFilterBy"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayFrequencySelection"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayInterpolateData"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayLowerBand"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayMaxRPM"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayMinRPM"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayModeSelection"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayOrderSelection"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayRpmSelection"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayScopeToOrderLines"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayTimeSelection"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayUpperBand"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayXAxisMaximum"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayXAxisMinimum"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayYAxisMaximum"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallDisplayYAxisMinimum"></a>

### *property* DisplacementWaterfallDiagram.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.WaterfallShowTextOnMosaic"></a>

### *property* DisplacementWaterfallDiagram.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DisplacementWaterfallDiagram.Activate"></a>

### DisplacementWaterfallDiagram.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.AddAlert"></a>

### DisplacementWaterfallDiagram.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.AddComment"></a>

### DisplacementWaterfallDiagram.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.AddConvergence"></a>

### DisplacementWaterfallDiagram.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.AddFigure"></a>

### DisplacementWaterfallDiagram.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.AddImage"></a>

### DisplacementWaterfallDiagram.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.BodyWhereMaximumOccurs"></a>

### DisplacementWaterfallDiagram.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.ClearGeneratedData"></a>

### DisplacementWaterfallDiagram.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Copy"></a>

### DisplacementWaterfallDiagram.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.CopyTo"></a>

### DisplacementWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.CreateObjRef"></a>

### DisplacementWaterfallDiagram.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.CreateParameter"></a>

### DisplacementWaterfallDiagram.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.CreateResultsAtAllSets"></a>

### DisplacementWaterfallDiagram.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Cut"></a>

### DisplacementWaterfallDiagram.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Delete"></a>

### DisplacementWaterfallDiagram.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Duplicate"></a>

### DisplacementWaterfallDiagram.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.DuplicateWithoutResults"></a>

### DisplacementWaterfallDiagram.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Equals"></a>

### DisplacementWaterfallDiagram.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.EvaluateAllResults"></a>

### DisplacementWaterfallDiagram.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.ExportAnimation"></a>

### DisplacementWaterfallDiagram.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.ExportToSTLFile"></a>

### DisplacementWaterfallDiagram.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.ExportToTextFile"></a>

### DisplacementWaterfallDiagram.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### DisplacementWaterfallDiagram.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.FetchRemoteResult"></a>

### DisplacementWaterfallDiagram.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.FetchRemoteResults"></a>

### DisplacementWaterfallDiagram.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetAPIName"></a>

### DisplacementWaterfallDiagram.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetAllProperties"></a>

### DisplacementWaterfallDiagram.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetChildren"></a>

### DisplacementWaterfallDiagram.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### DisplacementWaterfallDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetDetailsView"></a>

### DisplacementWaterfallDiagram.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetEnumName"></a>

### DisplacementWaterfallDiagram.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetHashCode"></a>

### DisplacementWaterfallDiagram.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetIconFile"></a>

### DisplacementWaterfallDiagram.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetLifetimeService"></a>

### DisplacementWaterfallDiagram.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetNodalValues"></a>

### DisplacementWaterfallDiagram.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetObjectData"></a>

### DisplacementWaterfallDiagram.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetParameter"></a>

### DisplacementWaterfallDiagram.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetPath"></a>

### DisplacementWaterfallDiagram.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetPropertyName"></a>

### DisplacementWaterfallDiagram.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetPropertyValue"></a>

### DisplacementWaterfallDiagram.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetQuantityName"></a>

### DisplacementWaterfallDiagram.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetVisibleProperties"></a>

### DisplacementWaterfallDiagram.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GetVisiblePropertyNames"></a>

### DisplacementWaterfallDiagram.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GroupAllSimilarChildren"></a>

### DisplacementWaterfallDiagram.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.GroupSimilarObjects"></a>

### DisplacementWaterfallDiagram.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.InitializeLifetimeService"></a>

### DisplacementWaterfallDiagram.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.IsPropertyEditable"></a>

### DisplacementWaterfallDiagram.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DisplacementWaterfallDiagram.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.IsPropertyVisible"></a>

### DisplacementWaterfallDiagram.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DisplacementWaterfallDiagram.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.Paste"></a>

### DisplacementWaterfallDiagram.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.PromoteToNamedSelection"></a>

### DisplacementWaterfallDiagram.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.PropertyByAPIName"></a>

### DisplacementWaterfallDiagram.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.PropertyById"></a>

### DisplacementWaterfallDiagram.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.PropertyByName"></a>

### DisplacementWaterfallDiagram.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.RemoveFromGroup"></a>

### DisplacementWaterfallDiagram.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.RemoveParameter"></a>

### DisplacementWaterfallDiagram.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.RenameBasedOnDefinition"></a>

### DisplacementWaterfallDiagram.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.RetrieveRemoteDPFResults"></a>

### DisplacementWaterfallDiagram.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementWaterfallDiagram.RetrieveResult"></a>

### DisplacementWaterfallDiagram.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

