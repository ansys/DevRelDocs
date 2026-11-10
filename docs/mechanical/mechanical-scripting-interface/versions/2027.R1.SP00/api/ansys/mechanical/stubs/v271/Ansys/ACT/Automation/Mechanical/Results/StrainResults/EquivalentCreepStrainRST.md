# `EquivalentCreepStrainRST`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentCreepStrainRST"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentCreepStrainRST(internalObject: Any)

<a id="EquivalentCreepStrainRST"></a>

### *class* EquivalentCreepStrainRST(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a EquivalentCreepStrainRST.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#EquivalentCreepStrainRST.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#EquivalentCreepStrainRST.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#EquivalentCreepStrainRST.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#EquivalentCreepStrainRST.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#EquivalentCreepStrainRST.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#EquivalentCreepStrainRST.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#EquivalentCreepStrainRST.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#EquivalentCreepStrainRST.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#EquivalentCreepStrainRST.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#EquivalentCreepStrainRST.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#EquivalentCreepStrainRST.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#EquivalentCreepStrainRST.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#EquivalentCreepStrainRST.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#EquivalentCreepStrainRST.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#EquivalentCreepStrainRST.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#EquivalentCreepStrainRST.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#EquivalentCreepStrainRST.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#EquivalentCreepStrainRST.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#EquivalentCreepStrainRST.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#EquivalentCreepStrainRST.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#EquivalentCreepStrainRST.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#EquivalentCreepStrainRST.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#EquivalentCreepStrainRST.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#EquivalentCreepStrainRST.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#EquivalentCreepStrainRST.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#EquivalentCreepStrainRST.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#EquivalentCreepStrainRST.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#EquivalentCreepStrainRST.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#EquivalentCreepStrainRST.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#EquivalentCreepStrainRST.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#EquivalentCreepStrainRST.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#EquivalentCreepStrainRST.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#EquivalentCreepStrainRST.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#EquivalentCreepStrainRST.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#EquivalentCreepStrainRST.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#EquivalentCreepStrainRST.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#EquivalentCreepStrainRST.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#EquivalentCreepStrainRST.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#EquivalentCreepStrainRST.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#EquivalentCreepStrainRST.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#EquivalentCreepStrainRST.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#EquivalentCreepStrainRST.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#EquivalentCreepStrainRST.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#EquivalentCreepStrainRST.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#EquivalentCreepStrainRST.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#EquivalentCreepStrainRST.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#EquivalentCreepStrainRST.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#EquivalentCreepStrainRST.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#EquivalentCreepStrainRST.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#EquivalentCreepStrainRST.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#EquivalentCreepStrainRST.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#EquivalentCreepStrainRST.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#EquivalentCreepStrainRST.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#EquivalentCreepStrainRST.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#EquivalentCreepStrainRST.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#EquivalentCreepStrainRST.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#EquivalentCreepStrainRST.Amplitude)                                                   | Gets or sets the Amplitude.                                                                                                                                                                         |
| [`AttachedRefs`](#EquivalentCreepStrainRST.AttachedRefs)                                             | AttachedRefs property.                                                                                                                                                                              |
| [`Average`](#EquivalentCreepStrainRST.Average)                                                       | Gets the Average.                                                                                                                                                                                   |
| [`AverageAcrossBodies`](#EquivalentCreepStrainRST.AverageAcrossBodies)                               | Gets or sets the AverageAcrossBodies.                                                                                                                                                               |
| [`By`](#EquivalentCreepStrainRST.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                                            |
| [`CalculateTimeHistory`](#EquivalentCreepStrainRST.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                                                                                                              |
| [`Children`](#EquivalentCreepStrainRST.Children)                                                     | Gets the list of children.                                                                                                                                                                          |
| [`ClsId`](#EquivalentCreepStrainRST.ClsId)                                                           | ClsId property.                                                                                                                                                                                     |
| [`CombinationNumber`](#EquivalentCreepStrainRST.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                                                                                                              |
| [`Comments`](#EquivalentCreepStrainRST.Comments)                                                     | Gets the list of associated comments.                                                                                                                                                               |
| [`CoordinateSystem`](#CoordinateSystem)                                     | Gets or sets the Coordinate System.                                                                                                                                                                 |
| [`CrackFrontNumber`](#EquivalentCreepStrainRST.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                                                                                                                  |
| [`CyclicMode`](#EquivalentCreepStrainRST.CyclicMode)                                                 | Gets or sets the CyclicMode.                                                                                                                                                                        |
| [`DataModelObjectCategory`](#EquivalentCreepStrainRST.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                                                                                                                        |
| [`DisplayOption`](#EquivalentCreepStrainRST.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                                                                                                                     |
| [`DisplayTime`](#EquivalentCreepStrainRST.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                                                                                                                       |
| [`DpfEvaluation`](#EquivalentCreepStrainRST.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                                                                                                                     |
| [`EnvironmentSelection`](#EquivalentCreepStrainRST.EnvironmentSelection)                             | Gets or sets the EnvironmentSelection.                                                                                                                                                              |
| [`Figures`](#EquivalentCreepStrainRST.Figures)                                                       | Gets the list of associated figures.                                                                                                                                                                |
| [`Frequency`](#EquivalentCreepStrainRST.Frequency)                                                   | Gets or sets the Frequency.                                                                                                                                                                         |
| [`GlobalIDs`](#EquivalentCreepStrainRST.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                                                                                                                         |
| [`GraphControlsXAxis`](#EquivalentCreepStrainRST.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                                                                                                                |
| [`GroupingFolder`](#EquivalentCreepStrainRST.GroupingFolder)                                         | GroupingFolder property.                                                                                                                                                                            |
| [`HarmonicIndex`](#EquivalentCreepStrainRST.HarmonicIndex)                                           | Gets or sets the HarmonicIndex.                                                                                                                                                                     |
| [`IconName`](#EquivalentCreepStrainRST.IconName)                                                     | IconName property.                                                                                                                                                                                  |
| [`Identifier`](#EquivalentCreepStrainRST.Identifier)                                                 | Gets or sets the Identifier.                                                                                                                                                                        |
| [`Images`](#EquivalentCreepStrainRST.Images)                                                         | Gets the list of associated images.                                                                                                                                                                 |
| [`InternalObject`](#EquivalentCreepStrainRST.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                                                                                                                  |
| [`IsSolved`](#EquivalentCreepStrainRST.IsSolved)                                                     | Gets the IsSolved.                                                                                                                                                                                  |
| [`ItemType`](#EquivalentCreepStrainRST.ItemType)                                                     | Gets or sets the ItemType.                                                                                                                                                                          |
| [`IterationNumber`](#EquivalentCreepStrainRST.IterationNumber)                                       | Gets the IterationNumber.                                                                                                                                                                           |
| [`IterationStep`](#EquivalentCreepStrainRST.IterationStep)                                           | Gets or sets the IterationStep.                                                                                                                                                                     |
| [`LoadMultiplier`](#EquivalentCreepStrainRST.LoadMultiplier)                                         | Gets the LoadMultiplier.                                                                                                                                                                            |
| [`LoadStep`](#EquivalentCreepStrainRST.LoadStep)                                                     | Gets the LoadStep.                                                                                                                                                                                  |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentCreepStrainRST.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                                                                                                                |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentCreepStrainRST.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentCreepStrainRST.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentCreepStrainRST.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                                                                                                                |
| [`LoadStepNumber`](#EquivalentCreepStrainRST.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                                                                                                                    |
| [`Location`](#EquivalentCreepStrainRST.Location)                                                     | Gets or sets the Location.                                                                                                                                                                          |
| [`Maximum`](#EquivalentCreepStrainRST.Maximum)                                                       | Gets the Maximum.                                                                                                                                                                                   |
| [`MaximumOccursOn`](#EquivalentCreepStrainRST.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                                                                                                           |
| [`MaximumOfMaximumOverTime`](#EquivalentCreepStrainRST.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                                                                                                                  |
| [`MaximumOfMinimumOverTime`](#EquivalentCreepStrainRST.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                                                                                                                  |
| [`Minimum`](#EquivalentCreepStrainRST.Minimum)                                                       | Gets the Minimum.                                                                                                                                                                                   |
| [`MinimumOccursOn`](#EquivalentCreepStrainRST.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                                                                                                           |
| [`MinimumOfMaximumOverTime`](#EquivalentCreepStrainRST.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                                                                                                                  |
| [`MinimumOfMinimumOverTime`](#EquivalentCreepStrainRST.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                                                                                                                  |
| [`Mode`](#EquivalentCreepStrainRST.Mode)                                                             | Gets or sets the Mode.                                                                                                                                                                              |
| [`Name`](#EquivalentCreepStrainRST.Name)                                                             | Name property.                                                                                                                                                                                      |
| [`NamedSelections`](#NamedSelections)                                        | Gets or sets the NamedSelections.                                                                                                                                                                   |
| [`ObjectId`](#EquivalentCreepStrainRST.ObjectId)                                                     | ObjectId property.                                                                                                                                                                                  |
| [`ObjectState`](#EquivalentCreepStrainRST.ObjectState)                                               | ObjectState property.                                                                                                                                                                               |
| [`ObjectTags`](#EquivalentCreepStrainRST.ObjectTags)                                                 | ObjectTags property.                                                                                                                                                                                |
| [`Parent`](#EquivalentCreepStrainRST.Parent)                                                         | Parent property.                                                                                                                                                                                    |
| [`Path`](#Path)                                                                         | Path property.                                                                                                                                                                                      |
| [`PhaseIncrement`](#EquivalentCreepStrainRST.PhaseIncrement)                                         | Gets or sets the PhaseIncrement.                                                                                                                                                                    |
| [`Plies`](#EquivalentCreepStrainRST.Plies)                                                           | Plies property.                                                                                                                                                                                     |
| [`PlotData`](#EquivalentCreepStrainRST.PlotData)                                                     | Gets the result table.                                                                                                                                                                              |
| [`Ply`](#EquivalentCreepStrainRST.Ply)                                                               | Gets or sets the Ply selection.                                                                                                                                                                     |
| [`Position`](#Position)                                                   | Gets or sets the Position.                                                                                                                                                                          |
| [`Properties`](#EquivalentCreepStrainRST.Properties)                                                 | Gets the list of properties for this object.                                                                                                                                                        |
| [`RPMSelection`](#EquivalentCreepStrainRST.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                                            |
| [`ReportedFrequency`](#EquivalentCreepStrainRST.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                                                                                                                         |
| [`ResultType`](#EquivalentCreepStrainRST.ResultType)                                                 | Gets or sets the ResultType.                                                                                                                                                                        |
| [`RpmSetNumber`](#EquivalentCreepStrainRST.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                                                                                                                      |
| [`SaveAuxiliaryResult`](#EquivalentCreepStrainRST.SaveAuxiliaryResult)                               | Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise. |
| [`ScopingMethod`](#EquivalentCreepStrainRST.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                                                                                                                     |
| [`SeparateDataByEntity`](#EquivalentCreepStrainRST.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                                                                                                              |
| [`SetNumber`](#EquivalentCreepStrainRST.SetNumber)                                                   | Gets or sets the Set Number.                                                                                                                                                                        |
| [`SolutionCombinationDriver`](#EquivalentCreepStrainRST.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                                                                                                                         |
| [`SolverComponentIDs`](#EquivalentCreepStrainRST.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                                                                                                                |
| [`State`](#EquivalentCreepStrainRST.State)                                                           | State property.                                                                                                                                                                                     |
| [`StressStrainType`](#EquivalentCreepStrainRST.StressStrainType)                                     | Gets or sets the StressStrainType.                                                                                                                                                                  |
| [`SubScopeBy`](#EquivalentCreepStrainRST.SubScopeBy)                                                 | Gets or sets the SubScopeBy.                                                                                                                                                                        |
| [`Substep`](#EquivalentCreepStrainRST.Substep)                                                       | Gets the Substep.                                                                                                                                                                                   |
| [`Suppressed`](#EquivalentCreepStrainRST.Suppressed)                                                 | Gets or sets the Suppressed.                                                                                                                                                                        |
| [`Surface`](#Surface)                                                                | Surface property.                                                                                                                                                                                   |
| [`SurfaceCoating`](#SurfaceCoating)                                           | SurfaceCoating property.                                                                                                                                                                            |
| [`SweepingPhase`](#EquivalentCreepStrainRST.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                                                                                                                     |
| [`TabularData`](#EquivalentCreepStrainRST.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.                                                                                                        |
| [`Time`](#EquivalentCreepStrainRST.Time)                                                             | Gets the Time.                                                                                                                                                                                      |
| [`TimeForMaximumOfMaximumValues`](#EquivalentCreepStrainRST.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                                                                                                                     |
| [`TimeForMaximumOfMinimumValues`](#EquivalentCreepStrainRST.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                                                                                                                     |
| [`TimeForMinimumOfMaximumValues`](#EquivalentCreepStrainRST.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                                                                                                                     |
| [`TimeForMinimumOfMinimumValues`](#EquivalentCreepStrainRST.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                                                                                                                     |
| [`Total`](#EquivalentCreepStrainRST.Total)                                                           | Gets the Total.                                                                                                                                                                                     |
| [`VisibleProperties`](#EquivalentCreepStrainRST.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                                                                                                                       |
| [`WaterfallDisplayFilterBy`](#EquivalentCreepStrainRST.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                                                                                                                |
| [`WaterfallDisplayFrequencySelection`](#EquivalentCreepStrainRST.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                                                                                                               |
| [`WaterfallDisplayInterpolateData`](#EquivalentCreepStrainRST.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                                                                                                                         |
| [`WaterfallDisplayLowerBand`](#EquivalentCreepStrainRST.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayMaxRPM`](#EquivalentCreepStrainRST.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                                                                                                                   |
| [`WaterfallDisplayMinRPM`](#EquivalentCreepStrainRST.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                                                                                                                   |
| [`WaterfallDisplayModeSelection`](#EquivalentCreepStrainRST.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                                                                                                                    |
| [`WaterfallDisplayOrderSelection`](#EquivalentCreepStrainRST.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                                                                                                                   |
| [`WaterfallDisplayRpmSelection`](#EquivalentCreepStrainRST.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                                                                                                                     |
| [`WaterfallDisplayScopeToOrderLines`](#EquivalentCreepStrainRST.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                                                                                                                     |
| [`WaterfallDisplayTimeSelection`](#EquivalentCreepStrainRST.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                                                                                                                    |
| [`WaterfallDisplayUpperBand`](#EquivalentCreepStrainRST.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayXAxisMaximum`](#EquivalentCreepStrainRST.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayXAxisMinimum`](#EquivalentCreepStrainRST.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMaximum`](#EquivalentCreepStrainRST.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMinimum`](#EquivalentCreepStrainRST.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallShowTextOnMosaic`](#EquivalentCreepStrainRST.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                                                                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="EquivalentCreepStrainRST.Amplitude"></a>

### *property* EquivalentCreepStrainRST.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.AttachedRefs"></a>

### *property* EquivalentCreepStrainRST.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Average"></a>

### *property* EquivalentCreepStrainRST.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.AverageAcrossBodies"></a>

### *property* EquivalentCreepStrainRST.AverageAcrossBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.By"></a>

### *property* EquivalentCreepStrainRST.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CalculateTimeHistory"></a>

### *property* EquivalentCreepStrainRST.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Children"></a>

### *property* EquivalentCreepStrainRST.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ClsId"></a>

### *property* EquivalentCreepStrainRST.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CombinationNumber"></a>

### *property* EquivalentCreepStrainRST.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Comments"></a>

### *property* EquivalentCreepStrainRST.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CoordinateSystem"></a>

### *property* EquivalentCreepStrainRST.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CrackFrontNumber"></a>

### *property* EquivalentCreepStrainRST.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CyclicMode"></a>

### *property* EquivalentCreepStrainRST.CyclicMode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.DataModelObjectCategory"></a>

### *property* EquivalentCreepStrainRST.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.DisplayOption"></a>

### *property* EquivalentCreepStrainRST.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.DisplayTime"></a>

### *property* EquivalentCreepStrainRST.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.DpfEvaluation"></a>

### *property* EquivalentCreepStrainRST.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.EnvironmentSelection"></a>

### *property* EquivalentCreepStrainRST.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Figures"></a>

### *property* EquivalentCreepStrainRST.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Frequency"></a>

### *property* EquivalentCreepStrainRST.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GlobalIDs"></a>

### *property* EquivalentCreepStrainRST.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GraphControlsXAxis"></a>

### *property* EquivalentCreepStrainRST.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GroupingFolder"></a>

### *property* EquivalentCreepStrainRST.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.HarmonicIndex"></a>

### *property* EquivalentCreepStrainRST.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.IconName"></a>

### *property* EquivalentCreepStrainRST.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Identifier"></a>

### *property* EquivalentCreepStrainRST.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Images"></a>

### *property* EquivalentCreepStrainRST.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.InternalObject"></a>

### *property* EquivalentCreepStrainRST.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.IsSolved"></a>

### *property* EquivalentCreepStrainRST.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ItemType"></a>

### *property* EquivalentCreepStrainRST.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.IterationNumber"></a>

### *property* EquivalentCreepStrainRST.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.IterationStep"></a>

### *property* EquivalentCreepStrainRST.IterationStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadMultiplier"></a>

### *property* EquivalentCreepStrainRST.LoadMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadStep"></a>

### *property* EquivalentCreepStrainRST.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentCreepStrainRST.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentCreepStrainRST.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentCreepStrainRST.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentCreepStrainRST.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.LoadStepNumber"></a>

### *property* EquivalentCreepStrainRST.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Location"></a>

### *property* EquivalentCreepStrainRST.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Maximum"></a>

### *property* EquivalentCreepStrainRST.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.MaximumOccursOn"></a>

### *property* EquivalentCreepStrainRST.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.MaximumOfMaximumOverTime"></a>

### *property* EquivalentCreepStrainRST.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.MaximumOfMinimumOverTime"></a>

### *property* EquivalentCreepStrainRST.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Minimum"></a>

### *property* EquivalentCreepStrainRST.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.MinimumOccursOn"></a>

### *property* EquivalentCreepStrainRST.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.MinimumOfMaximumOverTime"></a>

### *property* EquivalentCreepStrainRST.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.MinimumOfMinimumOverTime"></a>

### *property* EquivalentCreepStrainRST.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Mode"></a>

### *property* EquivalentCreepStrainRST.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Name"></a>

### *property* EquivalentCreepStrainRST.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.NamedSelections"></a>

### *property* EquivalentCreepStrainRST.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ObjectId"></a>

### *property* EquivalentCreepStrainRST.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ObjectState"></a>

### *property* EquivalentCreepStrainRST.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ObjectTags"></a>

### *property* EquivalentCreepStrainRST.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Parent"></a>

### *property* EquivalentCreepStrainRST.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Path"></a>

### *property* EquivalentCreepStrainRST.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.PhaseIncrement"></a>

### *property* EquivalentCreepStrainRST.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Plies"></a>

### *property* EquivalentCreepStrainRST.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.PlotData"></a>

### *property* EquivalentCreepStrainRST.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Ply"></a>

### *property* EquivalentCreepStrainRST.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Position"></a>

### *property* EquivalentCreepStrainRST.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Properties"></a>

### *property* EquivalentCreepStrainRST.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.RPMSelection"></a>

### *property* EquivalentCreepStrainRST.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ReportedFrequency"></a>

### *property* EquivalentCreepStrainRST.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ResultType"></a>

### *property* EquivalentCreepStrainRST.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.RpmSetNumber"></a>

### *property* EquivalentCreepStrainRST.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.SaveAuxiliaryResult"></a>

### *property* EquivalentCreepStrainRST.SaveAuxiliaryResult *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise.
Saving result data to disk improves result retrieval and display performance.
Note: The project file size will increase.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ScopingMethod"></a>

### *property* EquivalentCreepStrainRST.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.SeparateDataByEntity"></a>

### *property* EquivalentCreepStrainRST.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.SetNumber"></a>

### *property* EquivalentCreepStrainRST.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.SolutionCombinationDriver"></a>

### *property* EquivalentCreepStrainRST.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.SolverComponentIDs"></a>

### *property* EquivalentCreepStrainRST.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.State"></a>

### *property* EquivalentCreepStrainRST.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.StressStrainType"></a>

### *property* EquivalentCreepStrainRST.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.SubScopeBy"></a>

### *property* EquivalentCreepStrainRST.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Substep"></a>

### *property* EquivalentCreepStrainRST.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Suppressed"></a>

### *property* EquivalentCreepStrainRST.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Surface"></a>

### *property* EquivalentCreepStrainRST.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.SurfaceCoating"></a>

### *property* EquivalentCreepStrainRST.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.SweepingPhase"></a>

### *property* EquivalentCreepStrainRST.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.TabularData"></a>

### *property* EquivalentCreepStrainRST.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Time"></a>

### *property* EquivalentCreepStrainRST.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentCreepStrainRST.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentCreepStrainRST.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentCreepStrainRST.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentCreepStrainRST.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Total"></a>

### *property* EquivalentCreepStrainRST.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.VisibleProperties"></a>

### *property* EquivalentCreepStrainRST.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayFilterBy"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayFrequencySelection"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayInterpolateData"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayLowerBand"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayMaxRPM"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayMinRPM"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayModeSelection"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayOrderSelection"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayRpmSelection"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayScopeToOrderLines"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayTimeSelection"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayUpperBand"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayXAxisMaximum"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayXAxisMinimum"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayYAxisMaximum"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallDisplayYAxisMinimum"></a>

### *property* EquivalentCreepStrainRST.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.WaterfallShowTextOnMosaic"></a>

### *property* EquivalentCreepStrainRST.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentCreepStrainRST.Activate"></a>

### EquivalentCreepStrainRST.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.AddAlert"></a>

### EquivalentCreepStrainRST.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.AddComment"></a>

### EquivalentCreepStrainRST.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.AddConvergence"></a>

### EquivalentCreepStrainRST.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.AddFigure"></a>

### EquivalentCreepStrainRST.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.AddImage"></a>

### EquivalentCreepStrainRST.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.BodyWhereMaximumOccurs"></a>

### EquivalentCreepStrainRST.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ClearGeneratedData"></a>

### EquivalentCreepStrainRST.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Copy"></a>

### EquivalentCreepStrainRST.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CopyTo"></a>

### EquivalentCreepStrainRST.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CreateObjRef"></a>

### EquivalentCreepStrainRST.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CreateParameter"></a>

### EquivalentCreepStrainRST.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.CreateResultsAtAllSets"></a>

### EquivalentCreepStrainRST.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Cut"></a>

### EquivalentCreepStrainRST.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Delete"></a>

### EquivalentCreepStrainRST.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Duplicate"></a>

### EquivalentCreepStrainRST.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.DuplicateWithoutResults"></a>

### EquivalentCreepStrainRST.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Equals"></a>

### EquivalentCreepStrainRST.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.EvaluateAllResults"></a>

### EquivalentCreepStrainRST.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ExportAnimation"></a>

### EquivalentCreepStrainRST.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ExportToSTLFile"></a>

### EquivalentCreepStrainRST.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.ExportToTextFile"></a>

### EquivalentCreepStrainRST.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### EquivalentCreepStrainRST.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.FetchRemoteResult"></a>

### EquivalentCreepStrainRST.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.FetchRemoteResults"></a>

### EquivalentCreepStrainRST.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetAPIName"></a>

### EquivalentCreepStrainRST.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetAllProperties"></a>

### EquivalentCreepStrainRST.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetChildren"></a>

### EquivalentCreepStrainRST.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### EquivalentCreepStrainRST.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetDetailsView"></a>

### EquivalentCreepStrainRST.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetEnumName"></a>

### EquivalentCreepStrainRST.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetHashCode"></a>

### EquivalentCreepStrainRST.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetIconFile"></a>

### EquivalentCreepStrainRST.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetLifetimeService"></a>

### EquivalentCreepStrainRST.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetNodalValues"></a>

### EquivalentCreepStrainRST.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetObjectData"></a>

### EquivalentCreepStrainRST.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetParameter"></a>

### EquivalentCreepStrainRST.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetPath"></a>

### EquivalentCreepStrainRST.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetPropertyName"></a>

### EquivalentCreepStrainRST.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetPropertyValue"></a>

### EquivalentCreepStrainRST.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetQuantityName"></a>

### EquivalentCreepStrainRST.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetVisibleProperties"></a>

### EquivalentCreepStrainRST.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GetVisiblePropertyNames"></a>

### EquivalentCreepStrainRST.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GroupAllSimilarChildren"></a>

### EquivalentCreepStrainRST.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.GroupSimilarObjects"></a>

### EquivalentCreepStrainRST.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.InitializeLifetimeService"></a>

### EquivalentCreepStrainRST.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.IsPropertyEditable"></a>

### EquivalentCreepStrainRST.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EquivalentCreepStrainRST.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.IsPropertyVisible"></a>

### EquivalentCreepStrainRST.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EquivalentCreepStrainRST.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.Paste"></a>

### EquivalentCreepStrainRST.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.PromoteToNamedSelection"></a>

### EquivalentCreepStrainRST.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.PropertyByAPIName"></a>

### EquivalentCreepStrainRST.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.PropertyById"></a>

### EquivalentCreepStrainRST.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.PropertyByName"></a>

### EquivalentCreepStrainRST.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.RemoveFromGroup"></a>

### EquivalentCreepStrainRST.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.RemoveParameter"></a>

### EquivalentCreepStrainRST.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.RenameBasedOnDefinition"></a>

### EquivalentCreepStrainRST.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.RetrieveRemoteDPFResults"></a>

### EquivalentCreepStrainRST.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentCreepStrainRST.RetrieveResult"></a>

### EquivalentCreepStrainRST.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

