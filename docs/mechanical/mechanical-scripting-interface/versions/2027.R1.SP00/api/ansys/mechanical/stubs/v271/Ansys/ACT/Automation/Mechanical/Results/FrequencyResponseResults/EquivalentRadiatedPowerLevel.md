# `EquivalentRadiatedPowerLevel`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerLevel"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerLevel(internalObject: Any)

<a id="EquivalentRadiatedPowerLevel"></a>

### *class* EquivalentRadiatedPowerLevel(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a EquivalentRadiatedPowerLevel.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#EquivalentRadiatedPowerLevel.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#EquivalentRadiatedPowerLevel.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#EquivalentRadiatedPowerLevel.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#EquivalentRadiatedPowerLevel.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#EquivalentRadiatedPowerLevel.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#EquivalentRadiatedPowerLevel.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#EquivalentRadiatedPowerLevel.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#EquivalentRadiatedPowerLevel.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#EquivalentRadiatedPowerLevel.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#EquivalentRadiatedPowerLevel.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#EquivalentRadiatedPowerLevel.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#EquivalentRadiatedPowerLevel.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#EquivalentRadiatedPowerLevel.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#EquivalentRadiatedPowerLevel.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#EquivalentRadiatedPowerLevel.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#EquivalentRadiatedPowerLevel.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#EquivalentRadiatedPowerLevel.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#EquivalentRadiatedPowerLevel.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#EquivalentRadiatedPowerLevel.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#EquivalentRadiatedPowerLevel.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#EquivalentRadiatedPowerLevel.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#EquivalentRadiatedPowerLevel.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`ExportToWAVFile`](#EquivalentRadiatedPowerLevel.ExportToWAVFile)                     | Run the ExportToWAVFile action.                                                             |
| [`ExportToXMLFile`](#EquivalentRadiatedPowerLevel.ExportToXMLFile)                     | Run the ExportToXMLFile action.                                                             |
| [`FetchRemoteResult`](#EquivalentRadiatedPowerLevel.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#EquivalentRadiatedPowerLevel.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#EquivalentRadiatedPowerLevel.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#EquivalentRadiatedPowerLevel.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChartAxisDisplayUnit`](#EquivalentRadiatedPowerLevel.GetChartAxisDisplayUnit)     | GetChartAxisDisplayUnit method.                                                             |
| [`GetChildren`](#EquivalentRadiatedPowerLevel.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#EquivalentRadiatedPowerLevel.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#EquivalentRadiatedPowerLevel.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetGraphInteractionEvent`](#EquivalentRadiatedPowerLevel.GetGraphInteractionEvent)   | GetGraphInteractionEvent method.                                                            |
| [`GetHashCode`](#EquivalentRadiatedPowerLevel.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#EquivalentRadiatedPowerLevel.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#EquivalentRadiatedPowerLevel.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#EquivalentRadiatedPowerLevel.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetNumberOfCharts`](#EquivalentRadiatedPowerLevel.GetNumberOfCharts)                 | GetNumberOfCharts method.                                                                   |
| [`GetObjectData`](#EquivalentRadiatedPowerLevel.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#EquivalentRadiatedPowerLevel.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#EquivalentRadiatedPowerLevel.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#EquivalentRadiatedPowerLevel.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#EquivalentRadiatedPowerLevel.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#EquivalentRadiatedPowerLevel.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#EquivalentRadiatedPowerLevel.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#EquivalentRadiatedPowerLevel.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#EquivalentRadiatedPowerLevel.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#EquivalentRadiatedPowerLevel.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#EquivalentRadiatedPowerLevel.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#EquivalentRadiatedPowerLevel.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#EquivalentRadiatedPowerLevel.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#EquivalentRadiatedPowerLevel.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#EquivalentRadiatedPowerLevel.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#EquivalentRadiatedPowerLevel.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#EquivalentRadiatedPowerLevel.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#EquivalentRadiatedPowerLevel.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#EquivalentRadiatedPowerLevel.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#EquivalentRadiatedPowerLevel.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#EquivalentRadiatedPowerLevel.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#EquivalentRadiatedPowerLevel.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#EquivalentRadiatedPowerLevel.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |
| [`SetGraphInteractionEvent`](#EquivalentRadiatedPowerLevel.SetGraphInteractionEvent)   | SetGraphInteractionEvent method.                                                            |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#EquivalentRadiatedPowerLevel.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#EquivalentRadiatedPowerLevel.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#EquivalentRadiatedPowerLevel.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#EquivalentRadiatedPowerLevel.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Charts`](#EquivalentRadiatedPowerLevel.Charts)                                                         | Charts property.                                                                                         |
| [`Children`](#EquivalentRadiatedPowerLevel.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#EquivalentRadiatedPowerLevel.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#EquivalentRadiatedPowerLevel.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#EquivalentRadiatedPowerLevel.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                         | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#EquivalentRadiatedPowerLevel.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DBWeighting`](#EquivalentRadiatedPowerLevel.DBWeighting)                                               | Gets or sets the DBWeighting.                                                                            |
| [`DataModelObjectCategory`](#EquivalentRadiatedPowerLevel.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#EquivalentRadiatedPowerLevel.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayOrder`](#EquivalentRadiatedPowerLevel.DisplayOrder)                                             | Gets or sets the DisplayOrder.                                                                           |
| [`DisplayPanel`](#EquivalentRadiatedPowerLevel.DisplayPanel)                                             | Gets or sets the DisplayPanel.                                                                           |
| [`DisplayTime`](#EquivalentRadiatedPowerLevel.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#EquivalentRadiatedPowerLevel.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`ErpFormulation`](#EquivalentRadiatedPowerLevel.ErpFormulation)                                         | Gets or sets the ErpFormulation.                                                                         |
| [`Figures`](#EquivalentRadiatedPowerLevel.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`FrequencyRange`](#EquivalentRadiatedPowerLevel.FrequencyRange)                                         | Gets or sets the FrequencyRange.                                                                         |
| [`FrequencySelection`](#EquivalentRadiatedPowerLevel.FrequencySelection)                                 | Gets or sets the FrequencySelection.                                                                     |
| [`FrequencySelectionUnit`](#EquivalentRadiatedPowerLevel.FrequencySelectionUnit)                         | Gets the FrequencySelectionUnit.                                                                         |
| [`GlobalIDs`](#EquivalentRadiatedPowerLevel.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#EquivalentRadiatedPowerLevel.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#EquivalentRadiatedPowerLevel.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#EquivalentRadiatedPowerLevel.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#EquivalentRadiatedPowerLevel.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#EquivalentRadiatedPowerLevel.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#EquivalentRadiatedPowerLevel.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#EquivalentRadiatedPowerLevel.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#EquivalentRadiatedPowerLevel.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#EquivalentRadiatedPowerLevel.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#EquivalentRadiatedPowerLevel.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#EquivalentRadiatedPowerLevel.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#EquivalentRadiatedPowerLevel.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#EquivalentRadiatedPowerLevel.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumFrequency`](#EquivalentRadiatedPowerLevel.MaximumFrequency)                                     | Gets or sets the MaximumFrequency.                                                                       |
| [`MaximumOccursOn`](#EquivalentRadiatedPowerLevel.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#EquivalentRadiatedPowerLevel.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#EquivalentRadiatedPowerLevel.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#EquivalentRadiatedPowerLevel.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumFrequency`](#EquivalentRadiatedPowerLevel.MinimumFrequency)                                     | Gets or sets the MinimumFrequency.                                                                       |
| [`MinimumOccursOn`](#EquivalentRadiatedPowerLevel.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#EquivalentRadiatedPowerLevel.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#EquivalentRadiatedPowerLevel.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`MosaicChartLegendMax`](#EquivalentRadiatedPowerLevel.MosaicChartLegendMax)                             | Gets or sets the MosaicChartLegendMax.                                                                   |
| [`MosaicChartLegendMin`](#EquivalentRadiatedPowerLevel.MosaicChartLegendMin)                             | Gets or sets the MosaicChartLegendMin.                                                                   |
| [`Name`](#EquivalentRadiatedPowerLevel.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                            | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#EquivalentRadiatedPowerLevel.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#EquivalentRadiatedPowerLevel.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#EquivalentRadiatedPowerLevel.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`OrderSelection`](#EquivalentRadiatedPowerLevel.OrderSelection)                                         | Gets or sets the OrderSelection.                                                                         |
| [`OrdersToDisplay`](#EquivalentRadiatedPowerLevel.OrdersToDisplay)                                       | Gets or sets the OrdersToDisplay.                                                                        |
| [`PanelContribution`](#EquivalentRadiatedPowerLevel.PanelContribution)                                   | Gets or sets the PanelContribution.                                                                      |
| [`PanelsToDisplay`](#EquivalentRadiatedPowerLevel.PanelsToDisplay)                                       | Gets or sets the PanelsToDisplay.                                                                        |
| [`Parent`](#EquivalentRadiatedPowerLevel.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                             | Path property.                                                                                           |
| [`PlotData`](#EquivalentRadiatedPowerLevel.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#EquivalentRadiatedPowerLevel.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#EquivalentRadiatedPowerLevel.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#EquivalentRadiatedPowerLevel.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#EquivalentRadiatedPowerLevel.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#EquivalentRadiatedPowerLevel.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#EquivalentRadiatedPowerLevel.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#EquivalentRadiatedPowerLevel.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`ShowTextOnMosaic`](#EquivalentRadiatedPowerLevel.ShowTextOnMosaic)                                     | Gets or sets the ShowTextOnMosaic.                                                                       |
| [`SolutionCombinationDriver`](#EquivalentRadiatedPowerLevel.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#EquivalentRadiatedPowerLevel.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#EquivalentRadiatedPowerLevel.State)                                                           | State property.                                                                                          |
| [`Substep`](#EquivalentRadiatedPowerLevel.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#EquivalentRadiatedPowerLevel.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                    | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                               | SurfaceCoating property.                                                                                 |
| [`TabularData`](#EquivalentRadiatedPowerLevel.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#EquivalentRadiatedPowerLevel.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#EquivalentRadiatedPowerLevel.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#EquivalentRadiatedPowerLevel.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#EquivalentRadiatedPowerLevel.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#EquivalentRadiatedPowerLevel.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#EquivalentRadiatedPowerLevel.Total)                                                           | Gets the Total.                                                                                          |
| [`UsePanelContribution`](#EquivalentRadiatedPowerLevel.UsePanelContribution)                             | Gets or sets the UsePanelContribution.                                                                   |
| [`VisibleProperties`](#EquivalentRadiatedPowerLevel.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#EquivalentRadiatedPowerLevel.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#EquivalentRadiatedPowerLevel.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#EquivalentRadiatedPowerLevel.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#EquivalentRadiatedPowerLevel.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#EquivalentRadiatedPowerLevel.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#EquivalentRadiatedPowerLevel.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#EquivalentRadiatedPowerLevel.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#EquivalentRadiatedPowerLevel.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#EquivalentRadiatedPowerLevel.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#EquivalentRadiatedPowerLevel.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#EquivalentRadiatedPowerLevel.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#EquivalentRadiatedPowerLevel.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#EquivalentRadiatedPowerLevel.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#EquivalentRadiatedPowerLevel.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#EquivalentRadiatedPowerLevel.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#EquivalentRadiatedPowerLevel.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#EquivalentRadiatedPowerLevel.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="EquivalentRadiatedPowerLevel.AttachedRefs"></a>

### *property* EquivalentRadiatedPowerLevel.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Average"></a>

### *property* EquivalentRadiatedPowerLevel.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.By"></a>

### *property* EquivalentRadiatedPowerLevel.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CalculateTimeHistory"></a>

### *property* EquivalentRadiatedPowerLevel.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Charts"></a>

### *property* EquivalentRadiatedPowerLevel.Charts *: List[Ansys.ACT.Interfaces.Mechanical.IReadOnlyChart] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Charts property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Children"></a>

### *property* EquivalentRadiatedPowerLevel.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ClsId"></a>

### *property* EquivalentRadiatedPowerLevel.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CombinationNumber"></a>

### *property* EquivalentRadiatedPowerLevel.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Comments"></a>

### *property* EquivalentRadiatedPowerLevel.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CoordinateSystem"></a>

### *property* EquivalentRadiatedPowerLevel.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CrackFrontNumber"></a>

### *property* EquivalentRadiatedPowerLevel.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.DBWeighting"></a>

### *property* EquivalentRadiatedPowerLevel.DBWeighting *: [Ansys.Mechanical.DataModel.Enums.DBWeightingType](../../../../../Mechanical/DataModel/Enums/DBWeightingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DBWeightingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DBWeighting.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.DataModelObjectCategory"></a>

### *property* EquivalentRadiatedPowerLevel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.DisplayOption"></a>

### *property* EquivalentRadiatedPowerLevel.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.DisplayOrder"></a>

### *property* EquivalentRadiatedPowerLevel.DisplayOrder *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOrder.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.DisplayPanel"></a>

### *property* EquivalentRadiatedPowerLevel.DisplayPanel *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayPanel.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.DisplayTime"></a>

### *property* EquivalentRadiatedPowerLevel.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.DpfEvaluation"></a>

### *property* EquivalentRadiatedPowerLevel.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ErpFormulation"></a>

### *property* EquivalentRadiatedPowerLevel.ErpFormulation *: Ansys.Mechanical.DataModel.Enums.ErpFormulationType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ErpFormulation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Figures"></a>

### *property* EquivalentRadiatedPowerLevel.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.FrequencyRange"></a>

### *property* EquivalentRadiatedPowerLevel.FrequencyRange *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.FrequencySelection"></a>

### *property* EquivalentRadiatedPowerLevel.FrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrequencySelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.FrequencySelectionUnit"></a>

### *property* EquivalentRadiatedPowerLevel.FrequencySelectionUnit *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FrequencySelectionUnit.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GlobalIDs"></a>

### *property* EquivalentRadiatedPowerLevel.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GraphControlsXAxis"></a>

### *property* EquivalentRadiatedPowerLevel.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GroupingFolder"></a>

### *property* EquivalentRadiatedPowerLevel.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.IconName"></a>

### *property* EquivalentRadiatedPowerLevel.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Identifier"></a>

### *property* EquivalentRadiatedPowerLevel.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Images"></a>

### *property* EquivalentRadiatedPowerLevel.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.InternalObject"></a>

### *property* EquivalentRadiatedPowerLevel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.IsSolved"></a>

### *property* EquivalentRadiatedPowerLevel.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ItemType"></a>

### *property* EquivalentRadiatedPowerLevel.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.IterationNumber"></a>

### *property* EquivalentRadiatedPowerLevel.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.LoadStep"></a>

### *property* EquivalentRadiatedPowerLevel.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.LoadStepNumber"></a>

### *property* EquivalentRadiatedPowerLevel.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Location"></a>

### *property* EquivalentRadiatedPowerLevel.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Maximum"></a>

### *property* EquivalentRadiatedPowerLevel.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MaximumFrequency"></a>

### *property* EquivalentRadiatedPowerLevel.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MaximumOccursOn"></a>

### *property* EquivalentRadiatedPowerLevel.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MaximumOfMaximumOverTime"></a>

### *property* EquivalentRadiatedPowerLevel.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MaximumOfMinimumOverTime"></a>

### *property* EquivalentRadiatedPowerLevel.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Minimum"></a>

### *property* EquivalentRadiatedPowerLevel.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MinimumFrequency"></a>

### *property* EquivalentRadiatedPowerLevel.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MinimumOccursOn"></a>

### *property* EquivalentRadiatedPowerLevel.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MinimumOfMaximumOverTime"></a>

### *property* EquivalentRadiatedPowerLevel.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MinimumOfMinimumOverTime"></a>

### *property* EquivalentRadiatedPowerLevel.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MosaicChartLegendMax"></a>

### *property* EquivalentRadiatedPowerLevel.MosaicChartLegendMax *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MosaicChartLegendMax.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MosaicChartLegendMin"></a>

### *property* EquivalentRadiatedPowerLevel.MosaicChartLegendMin *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MosaicChartLegendMin.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Name"></a>

### *property* EquivalentRadiatedPowerLevel.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.NamedSelections"></a>

### *property* EquivalentRadiatedPowerLevel.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ObjectId"></a>

### *property* EquivalentRadiatedPowerLevel.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ObjectState"></a>

### *property* EquivalentRadiatedPowerLevel.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ObjectTags"></a>

### *property* EquivalentRadiatedPowerLevel.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.OrderSelection"></a>

### *property* EquivalentRadiatedPowerLevel.OrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OrderSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.OrdersToDisplay"></a>

### *property* EquivalentRadiatedPowerLevel.OrdersToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OrdersToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.PanelContribution"></a>

### *property* EquivalentRadiatedPowerLevel.PanelContribution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PanelContribution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.PanelsToDisplay"></a>

### *property* EquivalentRadiatedPowerLevel.PanelsToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PanelsToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Parent"></a>

### *property* EquivalentRadiatedPowerLevel.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Path"></a>

### *property* EquivalentRadiatedPowerLevel.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.PlotData"></a>

### *property* EquivalentRadiatedPowerLevel.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Properties"></a>

### *property* EquivalentRadiatedPowerLevel.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.RPMSelection"></a>

### *property* EquivalentRadiatedPowerLevel.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ResultType"></a>

### *property* EquivalentRadiatedPowerLevel.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.RpmSetNumber"></a>

### *property* EquivalentRadiatedPowerLevel.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ScopingMethod"></a>

### *property* EquivalentRadiatedPowerLevel.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.SeparateDataByEntity"></a>

### *property* EquivalentRadiatedPowerLevel.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.SetNumber"></a>

### *property* EquivalentRadiatedPowerLevel.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ShowTextOnMosaic"></a>

### *property* EquivalentRadiatedPowerLevel.ShowTextOnMosaic *: Ansys.Mechanical.DataModel.Enums.ShowTextOnMosaicMode | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowTextOnMosaic.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.SolutionCombinationDriver"></a>

### *property* EquivalentRadiatedPowerLevel.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.SolverComponentIDs"></a>

### *property* EquivalentRadiatedPowerLevel.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.State"></a>

### *property* EquivalentRadiatedPowerLevel.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Substep"></a>

### *property* EquivalentRadiatedPowerLevel.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Suppressed"></a>

### *property* EquivalentRadiatedPowerLevel.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Surface"></a>

### *property* EquivalentRadiatedPowerLevel.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.SurfaceCoating"></a>

### *property* EquivalentRadiatedPowerLevel.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.TabularData"></a>

### *property* EquivalentRadiatedPowerLevel.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Time"></a>

### *property* EquivalentRadiatedPowerLevel.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerLevel.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerLevel.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerLevel.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerLevel.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Total"></a>

### *property* EquivalentRadiatedPowerLevel.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.UsePanelContribution"></a>

### *property* EquivalentRadiatedPowerLevel.UsePanelContribution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UsePanelContribution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.VisibleProperties"></a>

### *property* EquivalentRadiatedPowerLevel.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayFilterBy"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayFrequencySelection"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayInterpolateData"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayLowerBand"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayMaxRPM"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayMinRPM"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayModeSelection"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayOrderSelection"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayRpmSelection"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayScopeToOrderLines"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayTimeSelection"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayUpperBand"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayXAxisMaximum"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayXAxisMinimum"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayYAxisMaximum"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallDisplayYAxisMinimum"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallShowTextOnMosaic"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentRadiatedPowerLevel.Activate"></a>

### EquivalentRadiatedPowerLevel.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.AddAlert"></a>

### EquivalentRadiatedPowerLevel.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.AddComment"></a>

### EquivalentRadiatedPowerLevel.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.AddConvergence"></a>

### EquivalentRadiatedPowerLevel.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.AddFigure"></a>

### EquivalentRadiatedPowerLevel.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.AddImage"></a>

### EquivalentRadiatedPowerLevel.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.BodyWhereMaximumOccurs"></a>

### EquivalentRadiatedPowerLevel.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ClearGeneratedData"></a>

### EquivalentRadiatedPowerLevel.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Copy"></a>

### EquivalentRadiatedPowerLevel.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CopyTo"></a>

### EquivalentRadiatedPowerLevel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CreateObjRef"></a>

### EquivalentRadiatedPowerLevel.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CreateParameter"></a>

### EquivalentRadiatedPowerLevel.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CreateResultsAtAllSets"></a>

### EquivalentRadiatedPowerLevel.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Cut"></a>

### EquivalentRadiatedPowerLevel.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Delete"></a>

### EquivalentRadiatedPowerLevel.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Duplicate"></a>

### EquivalentRadiatedPowerLevel.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.DuplicateWithoutResults"></a>

### EquivalentRadiatedPowerLevel.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Equals"></a>

### EquivalentRadiatedPowerLevel.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.EvaluateAllResults"></a>

### EquivalentRadiatedPowerLevel.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ExportAnimation"></a>

### EquivalentRadiatedPowerLevel.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ExportToSTLFile"></a>

### EquivalentRadiatedPowerLevel.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ExportToTextFile"></a>

### EquivalentRadiatedPowerLevel.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### EquivalentRadiatedPowerLevel.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ExportToWAVFile"></a>

### EquivalentRadiatedPowerLevel.ExportToWAVFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ExportToXMLFile"></a>

### EquivalentRadiatedPowerLevel.ExportToXMLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.FetchRemoteResult"></a>

### EquivalentRadiatedPowerLevel.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.FetchRemoteResults"></a>

### EquivalentRadiatedPowerLevel.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetAPIName"></a>

### EquivalentRadiatedPowerLevel.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetAllProperties"></a>

### EquivalentRadiatedPowerLevel.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetChartAxisDisplayUnit"></a>

### EquivalentRadiatedPowerLevel.GetChartAxisDisplayUnit(chart_idx: [int](https://docs.python.org/3/builtins/functions.html#int), axis_id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetChartAxisDisplayUnit method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetChildren"></a>

### EquivalentRadiatedPowerLevel.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### EquivalentRadiatedPowerLevel.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetDetailsView"></a>

### EquivalentRadiatedPowerLevel.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetEnumName"></a>

### EquivalentRadiatedPowerLevel.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetGraphInteractionEvent"></a>

### EquivalentRadiatedPowerLevel.GetGraphInteractionEvent(ppEventArgs: Any, chartIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetGraphInteractionEvent method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetHashCode"></a>

### EquivalentRadiatedPowerLevel.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetIconFile"></a>

### EquivalentRadiatedPowerLevel.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetLifetimeService"></a>

### EquivalentRadiatedPowerLevel.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetNodalValues"></a>

### EquivalentRadiatedPowerLevel.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetNumberOfCharts"></a>

### EquivalentRadiatedPowerLevel.GetNumberOfCharts() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetNumberOfCharts method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetObjectData"></a>

### EquivalentRadiatedPowerLevel.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetParameter"></a>

### EquivalentRadiatedPowerLevel.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetPath"></a>

### EquivalentRadiatedPowerLevel.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetPropertyName"></a>

### EquivalentRadiatedPowerLevel.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetPropertyValue"></a>

### EquivalentRadiatedPowerLevel.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetQuantityName"></a>

### EquivalentRadiatedPowerLevel.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetVisibleProperties"></a>

### EquivalentRadiatedPowerLevel.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetVisiblePropertyNames"></a>

### EquivalentRadiatedPowerLevel.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GroupAllSimilarChildren"></a>

### EquivalentRadiatedPowerLevel.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GroupSimilarObjects"></a>

### EquivalentRadiatedPowerLevel.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.InitializeLifetimeService"></a>

### EquivalentRadiatedPowerLevel.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.IsPropertyEditable"></a>

### EquivalentRadiatedPowerLevel.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EquivalentRadiatedPowerLevel.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.IsPropertyVisible"></a>

### EquivalentRadiatedPowerLevel.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EquivalentRadiatedPowerLevel.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Paste"></a>

### EquivalentRadiatedPowerLevel.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.PromoteToNamedSelection"></a>

### EquivalentRadiatedPowerLevel.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.PropertyByAPIName"></a>

### EquivalentRadiatedPowerLevel.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.PropertyById"></a>

### EquivalentRadiatedPowerLevel.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.PropertyByName"></a>

### EquivalentRadiatedPowerLevel.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.RemoveFromGroup"></a>

### EquivalentRadiatedPowerLevel.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.RemoveParameter"></a>

### EquivalentRadiatedPowerLevel.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.RenameBasedOnDefinition"></a>

### EquivalentRadiatedPowerLevel.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.RetrieveRemoteDPFResults"></a>

### EquivalentRadiatedPowerLevel.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.RetrieveResult"></a>

### EquivalentRadiatedPowerLevel.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.SetGraphInteractionEvent"></a>

### EquivalentRadiatedPowerLevel.SetGraphInteractionEvent(pEventArgs: Any, chartIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetGraphInteractionEvent method.

<!-- !! processed by numpydoc !! -->

