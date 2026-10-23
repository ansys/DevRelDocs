# `EquivalentRadiatedPowerWaterfallDiagram`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerWaterfallDiagram"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerWaterfallDiagram(internalObject: Any)

<a id="EquivalentRadiatedPowerWaterfallDiagram"></a>

### *class* EquivalentRadiatedPowerWaterfallDiagram(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a EquivalentRadiatedPowerWaterfallDiagram.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#EquivalentRadiatedPowerWaterfallDiagram.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#EquivalentRadiatedPowerWaterfallDiagram.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#EquivalentRadiatedPowerWaterfallDiagram.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#EquivalentRadiatedPowerWaterfallDiagram.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#EquivalentRadiatedPowerWaterfallDiagram.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#EquivalentRadiatedPowerWaterfallDiagram.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#EquivalentRadiatedPowerWaterfallDiagram.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#EquivalentRadiatedPowerWaterfallDiagram.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#EquivalentRadiatedPowerWaterfallDiagram.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#EquivalentRadiatedPowerWaterfallDiagram.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#EquivalentRadiatedPowerWaterfallDiagram.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#EquivalentRadiatedPowerWaterfallDiagram.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#EquivalentRadiatedPowerWaterfallDiagram.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#EquivalentRadiatedPowerWaterfallDiagram.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#EquivalentRadiatedPowerWaterfallDiagram.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#EquivalentRadiatedPowerWaterfallDiagram.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#EquivalentRadiatedPowerWaterfallDiagram.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#EquivalentRadiatedPowerWaterfallDiagram.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#EquivalentRadiatedPowerWaterfallDiagram.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#EquivalentRadiatedPowerWaterfallDiagram.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#EquivalentRadiatedPowerWaterfallDiagram.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#EquivalentRadiatedPowerWaterfallDiagram.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#EquivalentRadiatedPowerWaterfallDiagram.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#EquivalentRadiatedPowerWaterfallDiagram.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#EquivalentRadiatedPowerWaterfallDiagram.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#EquivalentRadiatedPowerWaterfallDiagram.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#EquivalentRadiatedPowerWaterfallDiagram.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#EquivalentRadiatedPowerWaterfallDiagram.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#EquivalentRadiatedPowerWaterfallDiagram.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#EquivalentRadiatedPowerWaterfallDiagram.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#EquivalentRadiatedPowerWaterfallDiagram.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#EquivalentRadiatedPowerWaterfallDiagram.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#EquivalentRadiatedPowerWaterfallDiagram.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#EquivalentRadiatedPowerWaterfallDiagram.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#EquivalentRadiatedPowerWaterfallDiagram.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#EquivalentRadiatedPowerWaterfallDiagram.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#EquivalentRadiatedPowerWaterfallDiagram.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#EquivalentRadiatedPowerWaterfallDiagram.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#EquivalentRadiatedPowerWaterfallDiagram.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#EquivalentRadiatedPowerWaterfallDiagram.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#EquivalentRadiatedPowerWaterfallDiagram.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#EquivalentRadiatedPowerWaterfallDiagram.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#EquivalentRadiatedPowerWaterfallDiagram.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#EquivalentRadiatedPowerWaterfallDiagram.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#EquivalentRadiatedPowerWaterfallDiagram.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#EquivalentRadiatedPowerWaterfallDiagram.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#EquivalentRadiatedPowerWaterfallDiagram.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#EquivalentRadiatedPowerWaterfallDiagram.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#EquivalentRadiatedPowerWaterfallDiagram.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#EquivalentRadiatedPowerWaterfallDiagram.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#EquivalentRadiatedPowerWaterfallDiagram.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#EquivalentRadiatedPowerWaterfallDiagram.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#EquivalentRadiatedPowerWaterfallDiagram.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#EquivalentRadiatedPowerWaterfallDiagram.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#EquivalentRadiatedPowerWaterfallDiagram.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#EquivalentRadiatedPowerWaterfallDiagram.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#EquivalentRadiatedPowerWaterfallDiagram.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#EquivalentRadiatedPowerWaterfallDiagram.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#EquivalentRadiatedPowerWaterfallDiagram.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#EquivalentRadiatedPowerWaterfallDiagram.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#EquivalentRadiatedPowerWaterfallDiagram.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#EquivalentRadiatedPowerWaterfallDiagram.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#EquivalentRadiatedPowerWaterfallDiagram.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#EquivalentRadiatedPowerWaterfallDiagram.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                                    | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#EquivalentRadiatedPowerWaterfallDiagram.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#EquivalentRadiatedPowerWaterfallDiagram.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#EquivalentRadiatedPowerWaterfallDiagram.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayOrder`](#EquivalentRadiatedPowerWaterfallDiagram.DisplayOrder)                                             | Gets or sets the DisplayOrder.                                                                           |
| [`DisplayPanel`](#EquivalentRadiatedPowerWaterfallDiagram.DisplayPanel)                                             | Gets or sets the DisplayPanel.                                                                           |
| [`DisplayTime`](#EquivalentRadiatedPowerWaterfallDiagram.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#EquivalentRadiatedPowerWaterfallDiagram.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`ErpFormulation`](#EquivalentRadiatedPowerWaterfallDiagram.ErpFormulation)                                         | Gets or sets the ErpFormulation.                                                                         |
| [`Figures`](#EquivalentRadiatedPowerWaterfallDiagram.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`FrequencySelection`](#EquivalentRadiatedPowerWaterfallDiagram.FrequencySelection)                                 | Gets or sets the FrequencySelection.                                                                     |
| [`GlobalIDs`](#EquivalentRadiatedPowerWaterfallDiagram.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#EquivalentRadiatedPowerWaterfallDiagram.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#EquivalentRadiatedPowerWaterfallDiagram.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#EquivalentRadiatedPowerWaterfallDiagram.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#EquivalentRadiatedPowerWaterfallDiagram.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#EquivalentRadiatedPowerWaterfallDiagram.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#EquivalentRadiatedPowerWaterfallDiagram.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#EquivalentRadiatedPowerWaterfallDiagram.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#EquivalentRadiatedPowerWaterfallDiagram.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#EquivalentRadiatedPowerWaterfallDiagram.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#EquivalentRadiatedPowerWaterfallDiagram.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#EquivalentRadiatedPowerWaterfallDiagram.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#EquivalentRadiatedPowerWaterfallDiagram.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#EquivalentRadiatedPowerWaterfallDiagram.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#EquivalentRadiatedPowerWaterfallDiagram.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#EquivalentRadiatedPowerWaterfallDiagram.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#EquivalentRadiatedPowerWaterfallDiagram.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#EquivalentRadiatedPowerWaterfallDiagram.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#EquivalentRadiatedPowerWaterfallDiagram.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#EquivalentRadiatedPowerWaterfallDiagram.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#EquivalentRadiatedPowerWaterfallDiagram.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`MosaicChartLegendMax`](#EquivalentRadiatedPowerWaterfallDiagram.MosaicChartLegendMax)                             | Gets or sets the MosaicChartLegendMax.                                                                   |
| [`MosaicChartLegendMin`](#EquivalentRadiatedPowerWaterfallDiagram.MosaicChartLegendMin)                             | Gets or sets the MosaicChartLegendMin.                                                                   |
| [`Name`](#EquivalentRadiatedPowerWaterfallDiagram.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                                       | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#EquivalentRadiatedPowerWaterfallDiagram.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#EquivalentRadiatedPowerWaterfallDiagram.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#EquivalentRadiatedPowerWaterfallDiagram.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`OrderSelection`](#EquivalentRadiatedPowerWaterfallDiagram.OrderSelection)                                         | Gets or sets the OrderSelection.                                                                         |
| [`OrdersToDisplay`](#EquivalentRadiatedPowerWaterfallDiagram.OrdersToDisplay)                                       | Gets or sets the OrdersToDisplay.                                                                        |
| [`PanelContribution`](#EquivalentRadiatedPowerWaterfallDiagram.PanelContribution)                                   | Gets or sets the PanelContribution.                                                                      |
| [`PanelsToDisplay`](#EquivalentRadiatedPowerWaterfallDiagram.PanelsToDisplay)                                       | Gets or sets the PanelsToDisplay.                                                                        |
| [`Parent`](#EquivalentRadiatedPowerWaterfallDiagram.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                                        | Path property.                                                                                           |
| [`PlotData`](#EquivalentRadiatedPowerWaterfallDiagram.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#EquivalentRadiatedPowerWaterfallDiagram.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#EquivalentRadiatedPowerWaterfallDiagram.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#EquivalentRadiatedPowerWaterfallDiagram.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSelection`](#EquivalentRadiatedPowerWaterfallDiagram.RpmSelection)                                             | Gets or sets the RpmSelection.                                                                           |
| [`RpmSelectionUnit`](#EquivalentRadiatedPowerWaterfallDiagram.RpmSelectionUnit)                                     | Gets the RpmSelectionUnit.                                                                               |
| [`RpmSetNumber`](#EquivalentRadiatedPowerWaterfallDiagram.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#EquivalentRadiatedPowerWaterfallDiagram.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#EquivalentRadiatedPowerWaterfallDiagram.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#EquivalentRadiatedPowerWaterfallDiagram.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`ShowTextOnMosaic`](#EquivalentRadiatedPowerWaterfallDiagram.ShowTextOnMosaic)                                     | Gets or sets the ShowTextOnMosaic.                                                                       |
| [`SolutionCombinationDriver`](#EquivalentRadiatedPowerWaterfallDiagram.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#EquivalentRadiatedPowerWaterfallDiagram.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#EquivalentRadiatedPowerWaterfallDiagram.State)                                                           | State property.                                                                                          |
| [`Substep`](#EquivalentRadiatedPowerWaterfallDiagram.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#EquivalentRadiatedPowerWaterfallDiagram.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                               | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                          | SurfaceCoating property.                                                                                 |
| [`TabularData`](#EquivalentRadiatedPowerWaterfallDiagram.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#EquivalentRadiatedPowerWaterfallDiagram.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#EquivalentRadiatedPowerWaterfallDiagram.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#EquivalentRadiatedPowerWaterfallDiagram.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#EquivalentRadiatedPowerWaterfallDiagram.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#EquivalentRadiatedPowerWaterfallDiagram.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#EquivalentRadiatedPowerWaterfallDiagram.Total)                                                           | Gets the Total.                                                                                          |
| [`UsePanelContribution`](#EquivalentRadiatedPowerWaterfallDiagram.UsePanelContribution)                             | Gets or sets the UsePanelContribution.                                                                   |
| [`VisibleProperties`](#EquivalentRadiatedPowerWaterfallDiagram.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#EquivalentRadiatedPowerWaterfallDiagram.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="EquivalentRadiatedPowerWaterfallDiagram.AttachedRefs"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Average"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.By"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.CalculateTimeHistory"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Children"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.ClsId"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.CombinationNumber"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Comments"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.CoordinateSystem"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.CrackFrontNumber"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.DataModelObjectCategory"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.DisplayOption"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.DisplayOrder"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.DisplayOrder *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOrder.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.DisplayPanel"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.DisplayPanel *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayPanel.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.DisplayTime"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.DpfEvaluation"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.ErpFormulation"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.ErpFormulation *: Ansys.Mechanical.DataModel.Enums.ErpFormulationType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ErpFormulation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Figures"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.FrequencySelection"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.FrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrequencySelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GlobalIDs"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GraphControlsXAxis"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GroupingFolder"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.IconName"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Identifier"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Images"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.InternalObject"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.IsSolved"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.ItemType"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.IterationNumber"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.LoadStep"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.LoadStepNumber"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Location"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Maximum"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.MaximumOccursOn"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.MaximumOfMaximumOverTime"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.MaximumOfMinimumOverTime"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Minimum"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.MinimumOccursOn"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.MinimumOfMaximumOverTime"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.MinimumOfMinimumOverTime"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.MosaicChartLegendMax"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.MosaicChartLegendMax *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MosaicChartLegendMax.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.MosaicChartLegendMin"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.MosaicChartLegendMin *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MosaicChartLegendMin.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Name"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.NamedSelections"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.ObjectId"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.ObjectState"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.ObjectTags"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.OrderSelection"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.OrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OrderSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.OrdersToDisplay"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.OrdersToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OrdersToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.PanelContribution"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.PanelContribution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PanelContribution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.PanelsToDisplay"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.PanelsToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PanelsToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Parent"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Path"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.PlotData"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Properties"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.RPMSelection"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.ResultType"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.RpmSelection"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.RpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.RpmSelectionUnit"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.RpmSelectionUnit *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RpmSelectionUnit.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.RpmSetNumber"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.ScopingMethod"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.SeparateDataByEntity"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.SetNumber"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.ShowTextOnMosaic"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.ShowTextOnMosaic *: Ansys.Mechanical.DataModel.Enums.ShowTextOnMosaicMode | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowTextOnMosaic.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.SolutionCombinationDriver"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.SolverComponentIDs"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.State"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Substep"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Suppressed"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Surface"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.SurfaceCoating"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.TabularData"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Time"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Total"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.UsePanelContribution"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.UsePanelContribution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UsePanelContribution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.VisibleProperties"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayFilterBy"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayFrequencySelection"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayInterpolateData"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayLowerBand"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayMaxRPM"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayMinRPM"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayModeSelection"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayOrderSelection"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayRpmSelection"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayScopeToOrderLines"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayTimeSelection"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayUpperBand"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayXAxisMaximum"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayXAxisMinimum"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayYAxisMaximum"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayYAxisMinimum"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.WaterfallShowTextOnMosaic"></a>

### *property* EquivalentRadiatedPowerWaterfallDiagram.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentRadiatedPowerWaterfallDiagram.Activate"></a>

### EquivalentRadiatedPowerWaterfallDiagram.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.AddAlert"></a>

### EquivalentRadiatedPowerWaterfallDiagram.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.AddComment"></a>

### EquivalentRadiatedPowerWaterfallDiagram.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.AddConvergence"></a>

### EquivalentRadiatedPowerWaterfallDiagram.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.AddFigure"></a>

### EquivalentRadiatedPowerWaterfallDiagram.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.AddImage"></a>

### EquivalentRadiatedPowerWaterfallDiagram.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.BodyWhereMaximumOccurs"></a>

### EquivalentRadiatedPowerWaterfallDiagram.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.ClearGeneratedData"></a>

### EquivalentRadiatedPowerWaterfallDiagram.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Copy"></a>

### EquivalentRadiatedPowerWaterfallDiagram.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.CopyTo"></a>

### EquivalentRadiatedPowerWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.CreateObjRef"></a>

### EquivalentRadiatedPowerWaterfallDiagram.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.CreateParameter"></a>

### EquivalentRadiatedPowerWaterfallDiagram.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.CreateResultsAtAllSets"></a>

### EquivalentRadiatedPowerWaterfallDiagram.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Cut"></a>

### EquivalentRadiatedPowerWaterfallDiagram.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Delete"></a>

### EquivalentRadiatedPowerWaterfallDiagram.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Duplicate"></a>

### EquivalentRadiatedPowerWaterfallDiagram.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.DuplicateWithoutResults"></a>

### EquivalentRadiatedPowerWaterfallDiagram.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Equals"></a>

### EquivalentRadiatedPowerWaterfallDiagram.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.EvaluateAllResults"></a>

### EquivalentRadiatedPowerWaterfallDiagram.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.ExportAnimation"></a>

### EquivalentRadiatedPowerWaterfallDiagram.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.ExportToSTLFile"></a>

### EquivalentRadiatedPowerWaterfallDiagram.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.ExportToTextFile"></a>

### EquivalentRadiatedPowerWaterfallDiagram.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### EquivalentRadiatedPowerWaterfallDiagram.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.FetchRemoteResult"></a>

### EquivalentRadiatedPowerWaterfallDiagram.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.FetchRemoteResults"></a>

### EquivalentRadiatedPowerWaterfallDiagram.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetAPIName"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetAllProperties"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetChildren"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### EquivalentRadiatedPowerWaterfallDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetDetailsView"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetEnumName"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetHashCode"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetIconFile"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetLifetimeService"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetNodalValues"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetObjectData"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetParameter"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetPath"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetPropertyName"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetPropertyValue"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetQuantityName"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetVisibleProperties"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GetVisiblePropertyNames"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GroupAllSimilarChildren"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.GroupSimilarObjects"></a>

### EquivalentRadiatedPowerWaterfallDiagram.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.InitializeLifetimeService"></a>

### EquivalentRadiatedPowerWaterfallDiagram.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.IsPropertyEditable"></a>

### EquivalentRadiatedPowerWaterfallDiagram.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EquivalentRadiatedPowerWaterfallDiagram.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.IsPropertyVisible"></a>

### EquivalentRadiatedPowerWaterfallDiagram.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EquivalentRadiatedPowerWaterfallDiagram.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.Paste"></a>

### EquivalentRadiatedPowerWaterfallDiagram.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.PromoteToNamedSelection"></a>

### EquivalentRadiatedPowerWaterfallDiagram.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.PropertyByAPIName"></a>

### EquivalentRadiatedPowerWaterfallDiagram.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.PropertyById"></a>

### EquivalentRadiatedPowerWaterfallDiagram.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.PropertyByName"></a>

### EquivalentRadiatedPowerWaterfallDiagram.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.RemoveFromGroup"></a>

### EquivalentRadiatedPowerWaterfallDiagram.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.RemoveParameter"></a>

### EquivalentRadiatedPowerWaterfallDiagram.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.RenameBasedOnDefinition"></a>

### EquivalentRadiatedPowerWaterfallDiagram.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.RetrieveRemoteDPFResults"></a>

### EquivalentRadiatedPowerWaterfallDiagram.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerWaterfallDiagram.RetrieveResult"></a>

### EquivalentRadiatedPowerWaterfallDiagram.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

