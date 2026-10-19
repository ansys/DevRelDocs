# `VelocityWaterfallDiagram`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VelocityWaterfallDiagram"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VelocityWaterfallDiagram(internalObject: Any)

<a id="VelocityWaterfallDiagram"></a>

### *class* VelocityWaterfallDiagram(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a VelocityWaterfallDiagram.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#VelocityWaterfallDiagram.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#VelocityWaterfallDiagram.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#VelocityWaterfallDiagram.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#VelocityWaterfallDiagram.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#VelocityWaterfallDiagram.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#VelocityWaterfallDiagram.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#VelocityWaterfallDiagram.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#VelocityWaterfallDiagram.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#VelocityWaterfallDiagram.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#VelocityWaterfallDiagram.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#VelocityWaterfallDiagram.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#VelocityWaterfallDiagram.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#VelocityWaterfallDiagram.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#VelocityWaterfallDiagram.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#VelocityWaterfallDiagram.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#VelocityWaterfallDiagram.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#VelocityWaterfallDiagram.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#VelocityWaterfallDiagram.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#VelocityWaterfallDiagram.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#VelocityWaterfallDiagram.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#VelocityWaterfallDiagram.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#VelocityWaterfallDiagram.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#VelocityWaterfallDiagram.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#VelocityWaterfallDiagram.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#VelocityWaterfallDiagram.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#VelocityWaterfallDiagram.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#VelocityWaterfallDiagram.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#VelocityWaterfallDiagram.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#VelocityWaterfallDiagram.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#VelocityWaterfallDiagram.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#VelocityWaterfallDiagram.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#VelocityWaterfallDiagram.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#VelocityWaterfallDiagram.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#VelocityWaterfallDiagram.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#VelocityWaterfallDiagram.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#VelocityWaterfallDiagram.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#VelocityWaterfallDiagram.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#VelocityWaterfallDiagram.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#VelocityWaterfallDiagram.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#VelocityWaterfallDiagram.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#VelocityWaterfallDiagram.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#VelocityWaterfallDiagram.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#VelocityWaterfallDiagram.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#VelocityWaterfallDiagram.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#VelocityWaterfallDiagram.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#VelocityWaterfallDiagram.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#VelocityWaterfallDiagram.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#VelocityWaterfallDiagram.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#VelocityWaterfallDiagram.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#VelocityWaterfallDiagram.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#VelocityWaterfallDiagram.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#VelocityWaterfallDiagram.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#VelocityWaterfallDiagram.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#VelocityWaterfallDiagram.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#VelocityWaterfallDiagram.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#VelocityWaterfallDiagram.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#VelocityWaterfallDiagram.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#VelocityWaterfallDiagram.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#VelocityWaterfallDiagram.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#VelocityWaterfallDiagram.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#VelocityWaterfallDiagram.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#VelocityWaterfallDiagram.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#VelocityWaterfallDiagram.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#VelocityWaterfallDiagram.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                     | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#VelocityWaterfallDiagram.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#VelocityWaterfallDiagram.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#VelocityWaterfallDiagram.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayOrder`](#VelocityWaterfallDiagram.DisplayOrder)                                             | Gets or sets the DisplayOrder.                                                                           |
| [`DisplayPanel`](#VelocityWaterfallDiagram.DisplayPanel)                                             | Gets or sets the DisplayPanel.                                                                           |
| [`DisplayTime`](#VelocityWaterfallDiagram.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#VelocityWaterfallDiagram.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#VelocityWaterfallDiagram.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`FrequencySelection`](#VelocityWaterfallDiagram.FrequencySelection)                                 | Gets or sets the FrequencySelection.                                                                     |
| [`GlobalIDs`](#VelocityWaterfallDiagram.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#VelocityWaterfallDiagram.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#VelocityWaterfallDiagram.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#VelocityWaterfallDiagram.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#VelocityWaterfallDiagram.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#VelocityWaterfallDiagram.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#VelocityWaterfallDiagram.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#VelocityWaterfallDiagram.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#VelocityWaterfallDiagram.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#VelocityWaterfallDiagram.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#VelocityWaterfallDiagram.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#VelocityWaterfallDiagram.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#VelocityWaterfallDiagram.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#VelocityWaterfallDiagram.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#VelocityWaterfallDiagram.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#VelocityWaterfallDiagram.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#VelocityWaterfallDiagram.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#VelocityWaterfallDiagram.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#VelocityWaterfallDiagram.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#VelocityWaterfallDiagram.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#VelocityWaterfallDiagram.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#VelocityWaterfallDiagram.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#VelocityWaterfallDiagram.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#VelocityWaterfallDiagram.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#VelocityWaterfallDiagram.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`MosaicChartLegendMax`](#VelocityWaterfallDiagram.MosaicChartLegendMax)                             | Gets or sets the MosaicChartLegendMax.                                                                   |
| [`MosaicChartLegendMin`](#VelocityWaterfallDiagram.MosaicChartLegendMin)                             | Gets or sets the MosaicChartLegendMin.                                                                   |
| [`Name`](#VelocityWaterfallDiagram.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                        | Gets or sets the NamedSelections.                                                                        |
| [`NormalOrientation`](#VelocityWaterfallDiagram.NormalOrientation)                                   | Gets or sets the NormalOrientation.                                                                      |
| [`ObjectId`](#VelocityWaterfallDiagram.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#VelocityWaterfallDiagram.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#VelocityWaterfallDiagram.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`OrderSelection`](#VelocityWaterfallDiagram.OrderSelection)                                         | Gets or sets the OrderSelection.                                                                         |
| [`OrdersToDisplay`](#VelocityWaterfallDiagram.OrdersToDisplay)                                       | Gets or sets the OrdersToDisplay.                                                                        |
| [`PanelContribution`](#VelocityWaterfallDiagram.PanelContribution)                                   | Gets or sets the PanelContribution.                                                                      |
| [`PanelsToDisplay`](#VelocityWaterfallDiagram.PanelsToDisplay)                                       | Gets or sets the PanelsToDisplay.                                                                        |
| [`Parent`](#VelocityWaterfallDiagram.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                         | Path property.                                                                                           |
| [`PlotData`](#VelocityWaterfallDiagram.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#VelocityWaterfallDiagram.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#VelocityWaterfallDiagram.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#VelocityWaterfallDiagram.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSelection`](#VelocityWaterfallDiagram.RpmSelection)                                             | Gets or sets the RpmSelection.                                                                           |
| [`RpmSelectionUnit`](#VelocityWaterfallDiagram.RpmSelectionUnit)                                     | Gets the RpmSelectionUnit.                                                                               |
| [`RpmSetNumber`](#VelocityWaterfallDiagram.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`STFTCutoffFrequency`](#VelocityWaterfallDiagram.STFTCutoffFrequency)                               | Gets or sets the STFTCutoffFrequency.                                                                    |
| [`STFTEndTime`](#VelocityWaterfallDiagram.STFTEndTime)                                               | Gets or sets the STFTEndTime.                                                                            |
| [`STFTMinFreqResolution`](#VelocityWaterfallDiagram.STFTMinFreqResolution)                           | Gets or sets the STFTMinFreqResolution.                                                                  |
| [`STFTNumberSlice`](#VelocityWaterfallDiagram.STFTNumberSlice)                                       | Gets or sets the STFTNumberSlice.                                                                        |
| [`STFTOverlap`](#VelocityWaterfallDiagram.STFTOverlap)                                               | Gets or sets the STFTOverlap.                                                                            |
| [`STFTStartTime`](#VelocityWaterfallDiagram.STFTStartTime)                                           | Gets or sets the STFTStartTime.                                                                          |
| [`STFTWindowType`](#VelocityWaterfallDiagram.STFTWindowType)                                         | Gets or sets the STFTWindowType.                                                                         |
| [`ScopingMethod`](#VelocityWaterfallDiagram.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#VelocityWaterfallDiagram.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#VelocityWaterfallDiagram.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`ShowTextOnMosaic`](#VelocityWaterfallDiagram.ShowTextOnMosaic)                                     | Gets or sets the ShowTextOnMosaic.                                                                       |
| [`SolutionCombinationDriver`](#VelocityWaterfallDiagram.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#VelocityWaterfallDiagram.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`SpatialResolution`](#VelocityWaterfallDiagram.SpatialResolution)                                   | Gets or sets the SpatialResolution.                                                                      |
| [`State`](#VelocityWaterfallDiagram.State)                                                           | State property.                                                                                          |
| [`Substep`](#VelocityWaterfallDiagram.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#VelocityWaterfallDiagram.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                           | SurfaceCoating property.                                                                                 |
| [`TabularData`](#VelocityWaterfallDiagram.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#VelocityWaterfallDiagram.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#VelocityWaterfallDiagram.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#VelocityWaterfallDiagram.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#VelocityWaterfallDiagram.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#VelocityWaterfallDiagram.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#VelocityWaterfallDiagram.Total)                                                           | Gets the Total.                                                                                          |
| [`UseModeContribution`](#VelocityWaterfallDiagram.UseModeContribution)                               | Gets or sets the UseModeContribution.                                                                    |
| [`UsePanelContribution`](#VelocityWaterfallDiagram.UsePanelContribution)                             | Gets or sets the UsePanelContribution.                                                                   |
| [`VisibleProperties`](#VelocityWaterfallDiagram.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#VelocityWaterfallDiagram.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#VelocityWaterfallDiagram.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#VelocityWaterfallDiagram.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#VelocityWaterfallDiagram.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#VelocityWaterfallDiagram.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#VelocityWaterfallDiagram.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#VelocityWaterfallDiagram.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#VelocityWaterfallDiagram.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#VelocityWaterfallDiagram.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#VelocityWaterfallDiagram.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#VelocityWaterfallDiagram.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#VelocityWaterfallDiagram.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#VelocityWaterfallDiagram.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#VelocityWaterfallDiagram.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#VelocityWaterfallDiagram.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#VelocityWaterfallDiagram.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#VelocityWaterfallDiagram.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="VelocityWaterfallDiagram.AttachedRefs"></a>

### *property* VelocityWaterfallDiagram.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Average"></a>

### *property* VelocityWaterfallDiagram.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.By"></a>

### *property* VelocityWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CalculateTimeHistory"></a>

### *property* VelocityWaterfallDiagram.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Children"></a>

### *property* VelocityWaterfallDiagram.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ClsId"></a>

### *property* VelocityWaterfallDiagram.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CombinationNumber"></a>

### *property* VelocityWaterfallDiagram.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Comments"></a>

### *property* VelocityWaterfallDiagram.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CoordinateSystem"></a>

### *property* VelocityWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CrackFrontNumber"></a>

### *property* VelocityWaterfallDiagram.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.DataModelObjectCategory"></a>

### *property* VelocityWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.DisplayOption"></a>

### *property* VelocityWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.DisplayOrder"></a>

### *property* VelocityWaterfallDiagram.DisplayOrder *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOrder.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.DisplayPanel"></a>

### *property* VelocityWaterfallDiagram.DisplayPanel *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayPanel.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.DisplayTime"></a>

### *property* VelocityWaterfallDiagram.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.DpfEvaluation"></a>

### *property* VelocityWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Figures"></a>

### *property* VelocityWaterfallDiagram.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.FrequencySelection"></a>

### *property* VelocityWaterfallDiagram.FrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrequencySelection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GlobalIDs"></a>

### *property* VelocityWaterfallDiagram.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GraphControlsXAxis"></a>

### *property* VelocityWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GroupingFolder"></a>

### *property* VelocityWaterfallDiagram.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.IconName"></a>

### *property* VelocityWaterfallDiagram.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Identifier"></a>

### *property* VelocityWaterfallDiagram.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Images"></a>

### *property* VelocityWaterfallDiagram.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.InternalObject"></a>

### *property* VelocityWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.IsSolved"></a>

### *property* VelocityWaterfallDiagram.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ItemType"></a>

### *property* VelocityWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.IterationNumber"></a>

### *property* VelocityWaterfallDiagram.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.LoadStep"></a>

### *property* VelocityWaterfallDiagram.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.LoadStepForMaximumOfMaximumValues"></a>

### *property* VelocityWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.LoadStepForMaximumOfMinimumValues"></a>

### *property* VelocityWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.LoadStepForMinimumOfMaximumValues"></a>

### *property* VelocityWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.LoadStepForMinimumOfMinimumValues"></a>

### *property* VelocityWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.LoadStepNumber"></a>

### *property* VelocityWaterfallDiagram.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Location"></a>

### *property* VelocityWaterfallDiagram.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Maximum"></a>

### *property* VelocityWaterfallDiagram.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MaximumOccursOn"></a>

### *property* VelocityWaterfallDiagram.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MaximumOfMaximumOverTime"></a>

### *property* VelocityWaterfallDiagram.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MaximumOfMinimumOverTime"></a>

### *property* VelocityWaterfallDiagram.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Minimum"></a>

### *property* VelocityWaterfallDiagram.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MinimumOccursOn"></a>

### *property* VelocityWaterfallDiagram.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MinimumOfMaximumOverTime"></a>

### *property* VelocityWaterfallDiagram.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MinimumOfMinimumOverTime"></a>

### *property* VelocityWaterfallDiagram.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MosaicChartLegendMax"></a>

### *property* VelocityWaterfallDiagram.MosaicChartLegendMax *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MosaicChartLegendMax.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.MosaicChartLegendMin"></a>

### *property* VelocityWaterfallDiagram.MosaicChartLegendMin *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MosaicChartLegendMin.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Name"></a>

### *property* VelocityWaterfallDiagram.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.NamedSelections"></a>

### *property* VelocityWaterfallDiagram.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.NormalOrientation"></a>

### *property* VelocityWaterfallDiagram.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ObjectId"></a>

### *property* VelocityWaterfallDiagram.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ObjectState"></a>

### *property* VelocityWaterfallDiagram.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ObjectTags"></a>

### *property* VelocityWaterfallDiagram.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.OrderSelection"></a>

### *property* VelocityWaterfallDiagram.OrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OrderSelection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.OrdersToDisplay"></a>

### *property* VelocityWaterfallDiagram.OrdersToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OrdersToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.PanelContribution"></a>

### *property* VelocityWaterfallDiagram.PanelContribution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PanelContribution.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.PanelsToDisplay"></a>

### *property* VelocityWaterfallDiagram.PanelsToDisplay *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PanelsToDisplay.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Parent"></a>

### *property* VelocityWaterfallDiagram.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Path"></a>

### *property* VelocityWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.PlotData"></a>

### *property* VelocityWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Properties"></a>

### *property* VelocityWaterfallDiagram.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.RPMSelection"></a>

### *property* VelocityWaterfallDiagram.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ResultType"></a>

### *property* VelocityWaterfallDiagram.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.RpmSelection"></a>

### *property* VelocityWaterfallDiagram.RpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSelection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.RpmSelectionUnit"></a>

### *property* VelocityWaterfallDiagram.RpmSelectionUnit *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RpmSelectionUnit.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.RpmSetNumber"></a>

### *property* VelocityWaterfallDiagram.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.STFTCutoffFrequency"></a>

### *property* VelocityWaterfallDiagram.STFTCutoffFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTCutoffFrequency.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.STFTEndTime"></a>

### *property* VelocityWaterfallDiagram.STFTEndTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTEndTime.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.STFTMinFreqResolution"></a>

### *property* VelocityWaterfallDiagram.STFTMinFreqResolution *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTMinFreqResolution.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.STFTNumberSlice"></a>

### *property* VelocityWaterfallDiagram.STFTNumberSlice *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTNumberSlice.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.STFTOverlap"></a>

### *property* VelocityWaterfallDiagram.STFTOverlap *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTOverlap.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.STFTStartTime"></a>

### *property* VelocityWaterfallDiagram.STFTStartTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTStartTime.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.STFTWindowType"></a>

### *property* VelocityWaterfallDiagram.STFTWindowType *: [Ansys.Mechanical.DataModel.Enums.WindowType](../../../../../Mechanical/DataModel/Enums/WindowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WindowType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the STFTWindowType.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ScopingMethod"></a>

### *property* VelocityWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.SeparateDataByEntity"></a>

### *property* VelocityWaterfallDiagram.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.SetNumber"></a>

### *property* VelocityWaterfallDiagram.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ShowTextOnMosaic"></a>

### *property* VelocityWaterfallDiagram.ShowTextOnMosaic *: Ansys.Mechanical.DataModel.Enums.ShowTextOnMosaicMode | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShowTextOnMosaic.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.SolutionCombinationDriver"></a>

### *property* VelocityWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.SolverComponentIDs"></a>

### *property* VelocityWaterfallDiagram.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.SpatialResolution"></a>

### *property* VelocityWaterfallDiagram.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.State"></a>

### *property* VelocityWaterfallDiagram.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Substep"></a>

### *property* VelocityWaterfallDiagram.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Suppressed"></a>

### *property* VelocityWaterfallDiagram.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Surface"></a>

### *property* VelocityWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.SurfaceCoating"></a>

### *property* VelocityWaterfallDiagram.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.TabularData"></a>

### *property* VelocityWaterfallDiagram.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Time"></a>

### *property* VelocityWaterfallDiagram.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.TimeForMaximumOfMaximumValues"></a>

### *property* VelocityWaterfallDiagram.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.TimeForMaximumOfMinimumValues"></a>

### *property* VelocityWaterfallDiagram.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.TimeForMinimumOfMaximumValues"></a>

### *property* VelocityWaterfallDiagram.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.TimeForMinimumOfMinimumValues"></a>

### *property* VelocityWaterfallDiagram.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Total"></a>

### *property* VelocityWaterfallDiagram.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.UseModeContribution"></a>

### *property* VelocityWaterfallDiagram.UseModeContribution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseModeContribution.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.UsePanelContribution"></a>

### *property* VelocityWaterfallDiagram.UsePanelContribution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UsePanelContribution.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.VisibleProperties"></a>

### *property* VelocityWaterfallDiagram.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayFilterBy"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayFrequencySelection"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayInterpolateData"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayLowerBand"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayMaxRPM"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayMinRPM"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayModeSelection"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayOrderSelection"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayRpmSelection"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayScopeToOrderLines"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayTimeSelection"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayUpperBand"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayXAxisMaximum"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayXAxisMinimum"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayYAxisMaximum"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallDisplayYAxisMinimum"></a>

### *property* VelocityWaterfallDiagram.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.WaterfallShowTextOnMosaic"></a>

### *property* VelocityWaterfallDiagram.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VelocityWaterfallDiagram.Activate"></a>

### VelocityWaterfallDiagram.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.AddAlert"></a>

### VelocityWaterfallDiagram.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.AddComment"></a>

### VelocityWaterfallDiagram.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.AddConvergence"></a>

### VelocityWaterfallDiagram.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.AddFigure"></a>

### VelocityWaterfallDiagram.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.AddImage"></a>

### VelocityWaterfallDiagram.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.BodyWhereMaximumOccurs"></a>

### VelocityWaterfallDiagram.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ClearGeneratedData"></a>

### VelocityWaterfallDiagram.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Copy"></a>

### VelocityWaterfallDiagram.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CopyTo"></a>

### VelocityWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CreateObjRef"></a>

### VelocityWaterfallDiagram.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CreateParameter"></a>

### VelocityWaterfallDiagram.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.CreateResultsAtAllSets"></a>

### VelocityWaterfallDiagram.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Cut"></a>

### VelocityWaterfallDiagram.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Delete"></a>

### VelocityWaterfallDiagram.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Duplicate"></a>

### VelocityWaterfallDiagram.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.DuplicateWithoutResults"></a>

### VelocityWaterfallDiagram.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Equals"></a>

### VelocityWaterfallDiagram.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.EvaluateAllResults"></a>

### VelocityWaterfallDiagram.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ExportAnimation"></a>

### VelocityWaterfallDiagram.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ExportToSTLFile"></a>

### VelocityWaterfallDiagram.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.ExportToTextFile"></a>

### VelocityWaterfallDiagram.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### VelocityWaterfallDiagram.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.FetchRemoteResult"></a>

### VelocityWaterfallDiagram.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.FetchRemoteResults"></a>

### VelocityWaterfallDiagram.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetAPIName"></a>

### VelocityWaterfallDiagram.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetAllProperties"></a>

### VelocityWaterfallDiagram.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetChildren"></a>

### VelocityWaterfallDiagram.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### VelocityWaterfallDiagram.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetDetailsView"></a>

### VelocityWaterfallDiagram.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetEnumName"></a>

### VelocityWaterfallDiagram.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetHashCode"></a>

### VelocityWaterfallDiagram.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetIconFile"></a>

### VelocityWaterfallDiagram.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetLifetimeService"></a>

### VelocityWaterfallDiagram.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetNodalValues"></a>

### VelocityWaterfallDiagram.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetObjectData"></a>

### VelocityWaterfallDiagram.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetParameter"></a>

### VelocityWaterfallDiagram.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetPath"></a>

### VelocityWaterfallDiagram.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetPropertyName"></a>

### VelocityWaterfallDiagram.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetPropertyValue"></a>

### VelocityWaterfallDiagram.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetQuantityName"></a>

### VelocityWaterfallDiagram.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetVisibleProperties"></a>

### VelocityWaterfallDiagram.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GetVisiblePropertyNames"></a>

### VelocityWaterfallDiagram.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GroupAllSimilarChildren"></a>

### VelocityWaterfallDiagram.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.GroupSimilarObjects"></a>

### VelocityWaterfallDiagram.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.InitializeLifetimeService"></a>

### VelocityWaterfallDiagram.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.IsPropertyEditable"></a>

### VelocityWaterfallDiagram.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### VelocityWaterfallDiagram.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.IsPropertyVisible"></a>

### VelocityWaterfallDiagram.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### VelocityWaterfallDiagram.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.Paste"></a>

### VelocityWaterfallDiagram.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.PromoteToNamedSelection"></a>

### VelocityWaterfallDiagram.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.PropertyByAPIName"></a>

### VelocityWaterfallDiagram.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.PropertyById"></a>

### VelocityWaterfallDiagram.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.PropertyByName"></a>

### VelocityWaterfallDiagram.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.RemoveFromGroup"></a>

### VelocityWaterfallDiagram.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.RemoveParameter"></a>

### VelocityWaterfallDiagram.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.RenameBasedOnDefinition"></a>

### VelocityWaterfallDiagram.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.RetrieveRemoteDPFResults"></a>

### VelocityWaterfallDiagram.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="VelocityWaterfallDiagram.RetrieveResult"></a>

### VelocityWaterfallDiagram.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

