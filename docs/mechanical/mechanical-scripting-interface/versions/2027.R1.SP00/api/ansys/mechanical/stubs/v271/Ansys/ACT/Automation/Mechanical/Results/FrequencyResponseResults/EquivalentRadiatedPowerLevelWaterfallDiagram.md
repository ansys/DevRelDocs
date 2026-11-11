# `EquivalentRadiatedPowerLevelWaterfallDiagram`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerLevelWaterfallDiagram"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerLevelWaterfallDiagram(internalObject: Any)

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram"></a>

### *class* EquivalentRadiatedPowerLevelWaterfallDiagram(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a EquivalentRadiatedPowerLevelWaterfallDiagram.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#EquivalentRadiatedPowerLevelWaterfallDiagram.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#EquivalentRadiatedPowerLevelWaterfallDiagram.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#EquivalentRadiatedPowerLevelWaterfallDiagram.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#EquivalentRadiatedPowerLevelWaterfallDiagram.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#EquivalentRadiatedPowerLevelWaterfallDiagram.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#EquivalentRadiatedPowerLevelWaterfallDiagram.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#EquivalentRadiatedPowerLevelWaterfallDiagram.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#EquivalentRadiatedPowerLevelWaterfallDiagram.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#EquivalentRadiatedPowerLevelWaterfallDiagram.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#EquivalentRadiatedPowerLevelWaterfallDiagram.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#EquivalentRadiatedPowerLevelWaterfallDiagram.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`ExportToWAVFile`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToWAVFile)                     | Run the ExportToWAVFile action.                                                             |
| [`ExportToXMLFile`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToXMLFile)                     | Run the ExportToXMLFile action.                                                             |
| [`FetchRemoteResult`](#EquivalentRadiatedPowerLevelWaterfallDiagram.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#EquivalentRadiatedPowerLevelWaterfallDiagram.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#EquivalentRadiatedPowerLevelWaterfallDiagram.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#EquivalentRadiatedPowerLevelWaterfallDiagram.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#EquivalentRadiatedPowerLevelWaterfallDiagram.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#EquivalentRadiatedPowerLevelWaterfallDiagram.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#EquivalentRadiatedPowerLevelWaterfallDiagram.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#EquivalentRadiatedPowerLevelWaterfallDiagram.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#EquivalentRadiatedPowerLevelWaterfallDiagram.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#EquivalentRadiatedPowerLevelWaterfallDiagram.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#EquivalentRadiatedPowerLevelWaterfallDiagram.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#EquivalentRadiatedPowerLevelWaterfallDiagram.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#EquivalentRadiatedPowerLevelWaterfallDiagram.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#EquivalentRadiatedPowerLevelWaterfallDiagram.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#EquivalentRadiatedPowerLevelWaterfallDiagram.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#EquivalentRadiatedPowerLevelWaterfallDiagram.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#EquivalentRadiatedPowerLevelWaterfallDiagram.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#EquivalentRadiatedPowerLevelWaterfallDiagram.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                                         | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#EquivalentRadiatedPowerLevelWaterfallDiagram.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DBWeighting`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DBWeighting)                                               | Gets or sets the DBWeighting.                                                                            |
| [`DataModelObjectCategory`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayOrder`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayOrder)                                             | Gets or sets the DisplayOrder.                                                                           |
| [`DisplayPanel`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayPanel)                                             | Gets or sets the DisplayPanel.                                                                           |
| [`DisplayTime`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#EquivalentRadiatedPowerLevelWaterfallDiagram.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`ErpFormulation`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ErpFormulation)                                         | Gets or sets the ErpFormulation.                                                                         |
| [`Figures`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`FrequencySelection`](#EquivalentRadiatedPowerLevelWaterfallDiagram.FrequencySelection)                                 | Gets or sets the FrequencySelection.                                                                     |
| [`GlobalIDs`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#EquivalentRadiatedPowerLevelWaterfallDiagram.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#EquivalentRadiatedPowerLevelWaterfallDiagram.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#EquivalentRadiatedPowerLevelWaterfallDiagram.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#EquivalentRadiatedPowerLevelWaterfallDiagram.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#EquivalentRadiatedPowerLevelWaterfallDiagram.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`MosaicChartLegendMax`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MosaicChartLegendMax)                             | Gets or sets the MosaicChartLegendMax.                                                                   |
| [`MosaicChartLegendMin`](#EquivalentRadiatedPowerLevelWaterfallDiagram.MosaicChartLegendMin)                             | Gets or sets the MosaicChartLegendMin.                                                                   |
| [`Name`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                                            | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`OrderSelection`](#EquivalentRadiatedPowerLevelWaterfallDiagram.OrderSelection)                                         | Gets or sets the OrderSelection.                                                                         |
| [`OrdersToDisplay`](#EquivalentRadiatedPowerLevelWaterfallDiagram.OrdersToDisplay)                                       | Gets or sets the OrdersToDisplay.                                                                        |
| [`PanelContribution`](#EquivalentRadiatedPowerLevelWaterfallDiagram.PanelContribution)                                   | Gets or sets the PanelContribution.                                                                      |
| [`PanelsToDisplay`](#EquivalentRadiatedPowerLevelWaterfallDiagram.PanelsToDisplay)                                       | Gets or sets the PanelsToDisplay.                                                                        |
| [`Parent`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                                             | Path property.                                                                                           |
| [`PlotData`](#EquivalentRadiatedPowerLevelWaterfallDiagram.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#EquivalentRadiatedPowerLevelWaterfallDiagram.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSelection`](#EquivalentRadiatedPowerLevelWaterfallDiagram.RpmSelection)                                             | Gets or sets the RpmSelection.                                                                           |
| [`RpmSelectionUnit`](#EquivalentRadiatedPowerLevelWaterfallDiagram.RpmSelectionUnit)                                     | Gets the RpmSelectionUnit.                                                                               |
| [`RpmSetNumber`](#EquivalentRadiatedPowerLevelWaterfallDiagram.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#EquivalentRadiatedPowerLevelWaterfallDiagram.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#EquivalentRadiatedPowerLevelWaterfallDiagram.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`ShowTextOnMosaic`](#EquivalentRadiatedPowerLevelWaterfallDiagram.ShowTextOnMosaic)                                     | Gets or sets the ShowTextOnMosaic.                                                                       |
| [`SolutionCombinationDriver`](#EquivalentRadiatedPowerLevelWaterfallDiagram.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#EquivalentRadiatedPowerLevelWaterfallDiagram.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#EquivalentRadiatedPowerLevelWaterfallDiagram.State)                                                           | State property.                                                                                          |
| [`Substep`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                                    | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                               | SurfaceCoating property.                                                                                 |
| [`TabularData`](#EquivalentRadiatedPowerLevelWaterfallDiagram.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#EquivalentRadiatedPowerLevelWaterfallDiagram.Total)                                                           | Gets the Total.                                                                                          |
| [`UsePanelContribution`](#EquivalentRadiatedPowerLevelWaterfallDiagram.UsePanelContribution)                             | Gets or sets the UsePanelContribution.                                                                   |
| [`VisibleProperties`](#EquivalentRadiatedPowerLevelWaterfallDiagram.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.AttachedRefs"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Average"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.By"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.CalculateTimeHistory"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Children"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ClsId"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.CombinationNumber"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Comments"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.CoordinateSystem"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.CrackFrontNumber"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.DBWeighting"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.DBWeighting *: [Ansys.Mechanical.DataModel.Enums.DBWeightingType](../../../../../Mechanical/DataModel/Enums/DBWeightingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DBWeightingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DBWeighting.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.DataModelObjectCategory"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayOption"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayOrder"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayOrder *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOrder.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayPanel"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayPanel *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayPanel.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayTime"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.DpfEvaluation"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ErpFormulation"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.ErpFormulation *: Ansys.Mechanical.DataModel.Enums.ErpFormulationType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ErpFormulation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Figures"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.FrequencySelection"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.FrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrequencySelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GlobalIDs"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GraphControlsXAxis"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GroupingFolder"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.IconName"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Identifier"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Images"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.InternalObject"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.IsSolved"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ItemType"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.IterationNumber"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStep"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepNumber"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Location"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Maximum"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOccursOn"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOfMaximumOverTime"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOfMinimumOverTime"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Minimum"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOccursOn"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOfMaximumOverTime"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOfMinimumOverTime"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.MosaicChartLegendMax"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MosaicChartLegendMax *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MosaicChartLegendMax.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.MosaicChartLegendMin"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.MosaicChartLegendMin *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MosaicChartLegendMin.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Name"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.NamedSelections"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ObjectId"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ObjectState"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ObjectTags"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.OrderSelection"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.OrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OrderSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.OrdersToDisplay"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.OrdersToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OrdersToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.PanelContribution"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.PanelContribution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PanelContribution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.PanelsToDisplay"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.PanelsToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PanelsToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Parent"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Path"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.PlotData"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Properties"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.RPMSelection"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ResultType"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.RpmSelection"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.RpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.RpmSelectionUnit"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.RpmSelectionUnit *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RpmSelectionUnit.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.RpmSetNumber"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ScopingMethod"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.SeparateDataByEntity"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.SetNumber"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ShowTextOnMosaic"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.ShowTextOnMosaic *: Ansys.Mechanical.DataModel.Enums.ShowTextOnMosaicMode | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowTextOnMosaic.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.SolutionCombinationDriver"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.SolverComponentIDs"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.State"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Substep"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Suppressed"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Surface"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.SurfaceCoating"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.TabularData"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Time"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Total"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.UsePanelContribution"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.UsePanelContribution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UsePanelContribution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.VisibleProperties"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayFilterBy"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayFrequencySelection"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayInterpolateData"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayLowerBand"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayMaxRPM"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayMinRPM"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayModeSelection"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayOrderSelection"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayRpmSelection"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayScopeToOrderLines"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayTimeSelection"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayUpperBand"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayXAxisMaximum"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayXAxisMinimum"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayYAxisMaximum"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayYAxisMinimum"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallShowTextOnMosaic"></a>

### *property* EquivalentRadiatedPowerLevelWaterfallDiagram.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Activate"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.AddAlert"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.AddComment"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.AddConvergence"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.AddFigure"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.AddImage"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.BodyWhereMaximumOccurs"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ClearGeneratedData"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Copy"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.CopyTo"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.CreateObjRef"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.CreateParameter"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.CreateResultsAtAllSets"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Cut"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Delete"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Duplicate"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.DuplicateWithoutResults"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Equals"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.EvaluateAllResults"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ExportAnimation"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToSTLFile"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToTextFile"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToWAVFile"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToWAVFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToXMLFile"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.ExportToXMLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.FetchRemoteResult"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.FetchRemoteResults"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetAPIName"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetAllProperties"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetChildren"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetDetailsView"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetEnumName"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetHashCode"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetIconFile"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetLifetimeService"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetNodalValues"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetObjectData"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetParameter"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetPath"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetPropertyName"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetPropertyValue"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetQuantityName"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetVisibleProperties"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GetVisiblePropertyNames"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GroupAllSimilarChildren"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.GroupSimilarObjects"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.InitializeLifetimeService"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.IsPropertyEditable"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EquivalentRadiatedPowerLevelWaterfallDiagram.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.IsPropertyVisible"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EquivalentRadiatedPowerLevelWaterfallDiagram.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.Paste"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.PromoteToNamedSelection"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.PropertyByAPIName"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.PropertyById"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.PropertyByName"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.RemoveFromGroup"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.RemoveParameter"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.RenameBasedOnDefinition"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.RetrieveRemoteDPFResults"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevelWaterfallDiagram.RetrieveResult"></a>

### EquivalentRadiatedPowerLevelWaterfallDiagram.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

