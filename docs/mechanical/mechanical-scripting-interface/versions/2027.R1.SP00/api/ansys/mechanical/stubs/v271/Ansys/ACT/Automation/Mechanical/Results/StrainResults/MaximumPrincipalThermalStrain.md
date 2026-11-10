# `MaximumPrincipalThermalStrain`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MaximumPrincipalThermalStrain"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StrainResults.MaximumPrincipalThermalStrain(internalObject: Any)

<a id="MaximumPrincipalThermalStrain"></a>

### *class* MaximumPrincipalThermalStrain(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MaximumPrincipalThermalStrain.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MaximumPrincipalThermalStrain.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#MaximumPrincipalThermalStrain.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#MaximumPrincipalThermalStrain.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#MaximumPrincipalThermalStrain.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#MaximumPrincipalThermalStrain.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MaximumPrincipalThermalStrain.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#MaximumPrincipalThermalStrain.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#MaximumPrincipalThermalStrain.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#MaximumPrincipalThermalStrain.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MaximumPrincipalThermalStrain.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MaximumPrincipalThermalStrain.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MaximumPrincipalThermalStrain.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#MaximumPrincipalThermalStrain.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#MaximumPrincipalThermalStrain.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MaximumPrincipalThermalStrain.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MaximumPrincipalThermalStrain.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#MaximumPrincipalThermalStrain.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#MaximumPrincipalThermalStrain.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#MaximumPrincipalThermalStrain.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#MaximumPrincipalThermalStrain.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#MaximumPrincipalThermalStrain.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#MaximumPrincipalThermalStrain.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#MaximumPrincipalThermalStrain.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#MaximumPrincipalThermalStrain.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#MaximumPrincipalThermalStrain.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#MaximumPrincipalThermalStrain.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MaximumPrincipalThermalStrain.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MaximumPrincipalThermalStrain.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MaximumPrincipalThermalStrain.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MaximumPrincipalThermalStrain.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MaximumPrincipalThermalStrain.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MaximumPrincipalThermalStrain.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#MaximumPrincipalThermalStrain.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#MaximumPrincipalThermalStrain.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MaximumPrincipalThermalStrain.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MaximumPrincipalThermalStrain.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MaximumPrincipalThermalStrain.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MaximumPrincipalThermalStrain.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#MaximumPrincipalThermalStrain.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#MaximumPrincipalThermalStrain.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MaximumPrincipalThermalStrain.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MaximumPrincipalThermalStrain.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MaximumPrincipalThermalStrain.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MaximumPrincipalThermalStrain.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MaximumPrincipalThermalStrain.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MaximumPrincipalThermalStrain.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MaximumPrincipalThermalStrain.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#MaximumPrincipalThermalStrain.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#MaximumPrincipalThermalStrain.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MaximumPrincipalThermalStrain.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MaximumPrincipalThermalStrain.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MaximumPrincipalThermalStrain.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MaximumPrincipalThermalStrain.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MaximumPrincipalThermalStrain.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#MaximumPrincipalThermalStrain.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#MaximumPrincipalThermalStrain.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#MaximumPrincipalThermalStrain.Amplitude)                                                   | Gets or sets the Amplitude.                                                                                                                                                                         |
| [`AttachedRefs`](#MaximumPrincipalThermalStrain.AttachedRefs)                                             | AttachedRefs property.                                                                                                                                                                              |
| [`Average`](#MaximumPrincipalThermalStrain.Average)                                                       | Gets the Average.                                                                                                                                                                                   |
| [`AverageAcrossBodies`](#MaximumPrincipalThermalStrain.AverageAcrossBodies)                               | Gets or sets the AverageAcrossBodies.                                                                                                                                                               |
| [`By`](#MaximumPrincipalThermalStrain.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                                            |
| [`CalculateTimeHistory`](#MaximumPrincipalThermalStrain.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                                                                                                              |
| [`Children`](#MaximumPrincipalThermalStrain.Children)                                                     | Gets the list of children.                                                                                                                                                                          |
| [`ClsId`](#MaximumPrincipalThermalStrain.ClsId)                                                           | ClsId property.                                                                                                                                                                                     |
| [`CombinationNumber`](#MaximumPrincipalThermalStrain.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                                                                                                              |
| [`Comments`](#MaximumPrincipalThermalStrain.Comments)                                                     | Gets the list of associated comments.                                                                                                                                                               |
| [`CoordinateSystem`](#CoordinateSystem)                                          | Gets or sets the Coordinate System.                                                                                                                                                                 |
| [`CrackFrontNumber`](#MaximumPrincipalThermalStrain.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                                                                                                                  |
| [`CyclicMode`](#MaximumPrincipalThermalStrain.CyclicMode)                                                 | Gets or sets the CyclicMode.                                                                                                                                                                        |
| [`DataModelObjectCategory`](#MaximumPrincipalThermalStrain.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                                                                                                                        |
| [`DisplayOption`](#MaximumPrincipalThermalStrain.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                                                                                                                     |
| [`DisplayTime`](#MaximumPrincipalThermalStrain.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                                                                                                                       |
| [`DpfEvaluation`](#MaximumPrincipalThermalStrain.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                                                                                                                     |
| [`EnvironmentSelection`](#MaximumPrincipalThermalStrain.EnvironmentSelection)                             | Gets or sets the EnvironmentSelection.                                                                                                                                                              |
| [`Figures`](#MaximumPrincipalThermalStrain.Figures)                                                       | Gets the list of associated figures.                                                                                                                                                                |
| [`Frequency`](#MaximumPrincipalThermalStrain.Frequency)                                                   | Gets or sets the Frequency.                                                                                                                                                                         |
| [`GlobalIDs`](#MaximumPrincipalThermalStrain.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                                                                                                                         |
| [`GraphControlsXAxis`](#MaximumPrincipalThermalStrain.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                                                                                                                |
| [`GroupingFolder`](#MaximumPrincipalThermalStrain.GroupingFolder)                                         | GroupingFolder property.                                                                                                                                                                            |
| [`HarmonicIndex`](#MaximumPrincipalThermalStrain.HarmonicIndex)                                           | Gets or sets the HarmonicIndex.                                                                                                                                                                     |
| [`IconName`](#MaximumPrincipalThermalStrain.IconName)                                                     | IconName property.                                                                                                                                                                                  |
| [`Identifier`](#MaximumPrincipalThermalStrain.Identifier)                                                 | Gets or sets the Identifier.                                                                                                                                                                        |
| [`Images`](#MaximumPrincipalThermalStrain.Images)                                                         | Gets the list of associated images.                                                                                                                                                                 |
| [`InternalObject`](#MaximumPrincipalThermalStrain.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                                                                                                                  |
| [`IsSolved`](#MaximumPrincipalThermalStrain.IsSolved)                                                     | Gets the IsSolved.                                                                                                                                                                                  |
| [`ItemType`](#MaximumPrincipalThermalStrain.ItemType)                                                     | Gets or sets the ItemType.                                                                                                                                                                          |
| [`IterationNumber`](#MaximumPrincipalThermalStrain.IterationNumber)                                       | Gets the IterationNumber.                                                                                                                                                                           |
| [`IterationStep`](#MaximumPrincipalThermalStrain.IterationStep)                                           | Gets or sets the IterationStep.                                                                                                                                                                     |
| [`LoadMultiplier`](#MaximumPrincipalThermalStrain.LoadMultiplier)                                         | Gets the LoadMultiplier.                                                                                                                                                                            |
| [`LoadStep`](#MaximumPrincipalThermalStrain.LoadStep)                                                     | Gets the LoadStep.                                                                                                                                                                                  |
| [`LoadStepForMaximumOfMaximumValues`](#MaximumPrincipalThermalStrain.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                                                                                                                |
| [`LoadStepForMaximumOfMinimumValues`](#MaximumPrincipalThermalStrain.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMaximumValues`](#MaximumPrincipalThermalStrain.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMinimumValues`](#MaximumPrincipalThermalStrain.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                                                                                                                |
| [`LoadStepNumber`](#MaximumPrincipalThermalStrain.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                                                                                                                    |
| [`Location`](#MaximumPrincipalThermalStrain.Location)                                                     | Gets or sets the Location.                                                                                                                                                                          |
| [`Maximum`](#MaximumPrincipalThermalStrain.Maximum)                                                       | Gets the Maximum.                                                                                                                                                                                   |
| [`MaximumOccursOn`](#MaximumPrincipalThermalStrain.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                                                                                                           |
| [`MaximumOfMaximumOverTime`](#MaximumPrincipalThermalStrain.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                                                                                                                  |
| [`MaximumOfMinimumOverTime`](#MaximumPrincipalThermalStrain.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                                                                                                                  |
| [`Minimum`](#MaximumPrincipalThermalStrain.Minimum)                                                       | Gets the Minimum.                                                                                                                                                                                   |
| [`MinimumOccursOn`](#MaximumPrincipalThermalStrain.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                                                                                                           |
| [`MinimumOfMaximumOverTime`](#MaximumPrincipalThermalStrain.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                                                                                                                  |
| [`MinimumOfMinimumOverTime`](#MaximumPrincipalThermalStrain.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                                                                                                                  |
| [`Mode`](#MaximumPrincipalThermalStrain.Mode)                                                             | Gets or sets the Mode.                                                                                                                                                                              |
| [`Name`](#MaximumPrincipalThermalStrain.Name)                                                             | Name property.                                                                                                                                                                                      |
| [`NamedSelections`](#NamedSelections)                                             | Gets or sets the NamedSelections.                                                                                                                                                                   |
| [`ObjectId`](#MaximumPrincipalThermalStrain.ObjectId)                                                     | ObjectId property.                                                                                                                                                                                  |
| [`ObjectState`](#MaximumPrincipalThermalStrain.ObjectState)                                               | ObjectState property.                                                                                                                                                                               |
| [`ObjectTags`](#MaximumPrincipalThermalStrain.ObjectTags)                                                 | ObjectTags property.                                                                                                                                                                                |
| [`Parent`](#MaximumPrincipalThermalStrain.Parent)                                                         | Parent property.                                                                                                                                                                                    |
| [`Path`](#Path)                                                                              | Path property.                                                                                                                                                                                      |
| [`PhaseIncrement`](#MaximumPrincipalThermalStrain.PhaseIncrement)                                         | Gets or sets the PhaseIncrement.                                                                                                                                                                    |
| [`Plies`](#MaximumPrincipalThermalStrain.Plies)                                                           | Plies property.                                                                                                                                                                                     |
| [`PlotData`](#MaximumPrincipalThermalStrain.PlotData)                                                     | Gets the result table.                                                                                                                                                                              |
| [`Ply`](#MaximumPrincipalThermalStrain.Ply)                                                               | Gets or sets the Ply selection.                                                                                                                                                                     |
| [`Position`](#Position)                                                        | Gets or sets the Position.                                                                                                                                                                          |
| [`Properties`](#MaximumPrincipalThermalStrain.Properties)                                                 | Gets the list of properties for this object.                                                                                                                                                        |
| [`RPMSelection`](#MaximumPrincipalThermalStrain.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                                            |
| [`ReportedFrequency`](#MaximumPrincipalThermalStrain.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                                                                                                                         |
| [`ResultType`](#MaximumPrincipalThermalStrain.ResultType)                                                 | Gets or sets the ResultType.                                                                                                                                                                        |
| [`RpmSetNumber`](#MaximumPrincipalThermalStrain.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                                                                                                                      |
| [`SaveAuxiliaryResult`](#MaximumPrincipalThermalStrain.SaveAuxiliaryResult)                               | Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise. |
| [`ScopingMethod`](#MaximumPrincipalThermalStrain.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                                                                                                                     |
| [`SeparateDataByEntity`](#MaximumPrincipalThermalStrain.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                                                                                                              |
| [`SetNumber`](#MaximumPrincipalThermalStrain.SetNumber)                                                   | Gets or sets the Set Number.                                                                                                                                                                        |
| [`SolutionCombinationDriver`](#MaximumPrincipalThermalStrain.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                                                                                                                         |
| [`SolverComponentIDs`](#MaximumPrincipalThermalStrain.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                                                                                                                |
| [`State`](#MaximumPrincipalThermalStrain.State)                                                           | State property.                                                                                                                                                                                     |
| [`StressStrainType`](#MaximumPrincipalThermalStrain.StressStrainType)                                     | Gets or sets the StressStrainType.                                                                                                                                                                  |
| [`SubScopeBy`](#MaximumPrincipalThermalStrain.SubScopeBy)                                                 | Gets or sets the SubScopeBy.                                                                                                                                                                        |
| [`Substep`](#MaximumPrincipalThermalStrain.Substep)                                                       | Gets the Substep.                                                                                                                                                                                   |
| [`Suppressed`](#MaximumPrincipalThermalStrain.Suppressed)                                                 | Gets or sets the Suppressed.                                                                                                                                                                        |
| [`Surface`](#Surface)                                                                     | Surface property.                                                                                                                                                                                   |
| [`SurfaceCoating`](#SurfaceCoating)                                                | SurfaceCoating property.                                                                                                                                                                            |
| [`SweepingPhase`](#MaximumPrincipalThermalStrain.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                                                                                                                     |
| [`TabularData`](#MaximumPrincipalThermalStrain.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.                                                                                                        |
| [`Time`](#MaximumPrincipalThermalStrain.Time)                                                             | Gets the Time.                                                                                                                                                                                      |
| [`TimeForMaximumOfMaximumValues`](#MaximumPrincipalThermalStrain.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                                                                                                                     |
| [`TimeForMaximumOfMinimumValues`](#MaximumPrincipalThermalStrain.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                                                                                                                     |
| [`TimeForMinimumOfMaximumValues`](#MaximumPrincipalThermalStrain.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                                                                                                                     |
| [`TimeForMinimumOfMinimumValues`](#MaximumPrincipalThermalStrain.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                                                                                                                     |
| [`Total`](#MaximumPrincipalThermalStrain.Total)                                                           | Gets the Total.                                                                                                                                                                                     |
| [`VisibleProperties`](#MaximumPrincipalThermalStrain.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                                                                                                                       |
| [`WaterfallDisplayFilterBy`](#MaximumPrincipalThermalStrain.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                                                                                                                |
| [`WaterfallDisplayFrequencySelection`](#MaximumPrincipalThermalStrain.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                                                                                                               |
| [`WaterfallDisplayInterpolateData`](#MaximumPrincipalThermalStrain.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                                                                                                                         |
| [`WaterfallDisplayLowerBand`](#MaximumPrincipalThermalStrain.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayMaxRPM`](#MaximumPrincipalThermalStrain.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                                                                                                                   |
| [`WaterfallDisplayMinRPM`](#MaximumPrincipalThermalStrain.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                                                                                                                   |
| [`WaterfallDisplayModeSelection`](#MaximumPrincipalThermalStrain.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                                                                                                                    |
| [`WaterfallDisplayOrderSelection`](#MaximumPrincipalThermalStrain.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                                                                                                                   |
| [`WaterfallDisplayRpmSelection`](#MaximumPrincipalThermalStrain.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                                                                                                                     |
| [`WaterfallDisplayScopeToOrderLines`](#MaximumPrincipalThermalStrain.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                                                                                                                     |
| [`WaterfallDisplayTimeSelection`](#MaximumPrincipalThermalStrain.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                                                                                                                    |
| [`WaterfallDisplayUpperBand`](#MaximumPrincipalThermalStrain.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayXAxisMaximum`](#MaximumPrincipalThermalStrain.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayXAxisMinimum`](#MaximumPrincipalThermalStrain.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMaximum`](#MaximumPrincipalThermalStrain.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMinimum`](#MaximumPrincipalThermalStrain.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallShowTextOnMosaic`](#MaximumPrincipalThermalStrain.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                                                                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="MaximumPrincipalThermalStrain.Amplitude"></a>

### *property* MaximumPrincipalThermalStrain.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.AttachedRefs"></a>

### *property* MaximumPrincipalThermalStrain.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Average"></a>

### *property* MaximumPrincipalThermalStrain.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.AverageAcrossBodies"></a>

### *property* MaximumPrincipalThermalStrain.AverageAcrossBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.By"></a>

### *property* MaximumPrincipalThermalStrain.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CalculateTimeHistory"></a>

### *property* MaximumPrincipalThermalStrain.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Children"></a>

### *property* MaximumPrincipalThermalStrain.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ClsId"></a>

### *property* MaximumPrincipalThermalStrain.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CombinationNumber"></a>

### *property* MaximumPrincipalThermalStrain.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Comments"></a>

### *property* MaximumPrincipalThermalStrain.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CoordinateSystem"></a>

### *property* MaximumPrincipalThermalStrain.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CrackFrontNumber"></a>

### *property* MaximumPrincipalThermalStrain.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CyclicMode"></a>

### *property* MaximumPrincipalThermalStrain.CyclicMode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.DataModelObjectCategory"></a>

### *property* MaximumPrincipalThermalStrain.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.DisplayOption"></a>

### *property* MaximumPrincipalThermalStrain.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.DisplayTime"></a>

### *property* MaximumPrincipalThermalStrain.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.DpfEvaluation"></a>

### *property* MaximumPrincipalThermalStrain.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.EnvironmentSelection"></a>

### *property* MaximumPrincipalThermalStrain.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Figures"></a>

### *property* MaximumPrincipalThermalStrain.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Frequency"></a>

### *property* MaximumPrincipalThermalStrain.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GlobalIDs"></a>

### *property* MaximumPrincipalThermalStrain.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GraphControlsXAxis"></a>

### *property* MaximumPrincipalThermalStrain.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GroupingFolder"></a>

### *property* MaximumPrincipalThermalStrain.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.HarmonicIndex"></a>

### *property* MaximumPrincipalThermalStrain.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.IconName"></a>

### *property* MaximumPrincipalThermalStrain.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Identifier"></a>

### *property* MaximumPrincipalThermalStrain.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Images"></a>

### *property* MaximumPrincipalThermalStrain.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.InternalObject"></a>

### *property* MaximumPrincipalThermalStrain.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.IsSolved"></a>

### *property* MaximumPrincipalThermalStrain.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ItemType"></a>

### *property* MaximumPrincipalThermalStrain.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.IterationNumber"></a>

### *property* MaximumPrincipalThermalStrain.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.IterationStep"></a>

### *property* MaximumPrincipalThermalStrain.IterationStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadMultiplier"></a>

### *property* MaximumPrincipalThermalStrain.LoadMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadStep"></a>

### *property* MaximumPrincipalThermalStrain.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadStepForMaximumOfMaximumValues"></a>

### *property* MaximumPrincipalThermalStrain.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadStepForMaximumOfMinimumValues"></a>

### *property* MaximumPrincipalThermalStrain.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadStepForMinimumOfMaximumValues"></a>

### *property* MaximumPrincipalThermalStrain.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadStepForMinimumOfMinimumValues"></a>

### *property* MaximumPrincipalThermalStrain.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.LoadStepNumber"></a>

### *property* MaximumPrincipalThermalStrain.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Location"></a>

### *property* MaximumPrincipalThermalStrain.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Maximum"></a>

### *property* MaximumPrincipalThermalStrain.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.MaximumOccursOn"></a>

### *property* MaximumPrincipalThermalStrain.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.MaximumOfMaximumOverTime"></a>

### *property* MaximumPrincipalThermalStrain.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.MaximumOfMinimumOverTime"></a>

### *property* MaximumPrincipalThermalStrain.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Minimum"></a>

### *property* MaximumPrincipalThermalStrain.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.MinimumOccursOn"></a>

### *property* MaximumPrincipalThermalStrain.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.MinimumOfMaximumOverTime"></a>

### *property* MaximumPrincipalThermalStrain.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.MinimumOfMinimumOverTime"></a>

### *property* MaximumPrincipalThermalStrain.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Mode"></a>

### *property* MaximumPrincipalThermalStrain.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Name"></a>

### *property* MaximumPrincipalThermalStrain.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.NamedSelections"></a>

### *property* MaximumPrincipalThermalStrain.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ObjectId"></a>

### *property* MaximumPrincipalThermalStrain.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ObjectState"></a>

### *property* MaximumPrincipalThermalStrain.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ObjectTags"></a>

### *property* MaximumPrincipalThermalStrain.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Parent"></a>

### *property* MaximumPrincipalThermalStrain.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Path"></a>

### *property* MaximumPrincipalThermalStrain.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.PhaseIncrement"></a>

### *property* MaximumPrincipalThermalStrain.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Plies"></a>

### *property* MaximumPrincipalThermalStrain.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.PlotData"></a>

### *property* MaximumPrincipalThermalStrain.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Ply"></a>

### *property* MaximumPrincipalThermalStrain.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Position"></a>

### *property* MaximumPrincipalThermalStrain.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Properties"></a>

### *property* MaximumPrincipalThermalStrain.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.RPMSelection"></a>

### *property* MaximumPrincipalThermalStrain.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ReportedFrequency"></a>

### *property* MaximumPrincipalThermalStrain.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ResultType"></a>

### *property* MaximumPrincipalThermalStrain.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.RpmSetNumber"></a>

### *property* MaximumPrincipalThermalStrain.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SaveAuxiliaryResult"></a>

### *property* MaximumPrincipalThermalStrain.SaveAuxiliaryResult *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise.
Saving result data to disk improves result retrieval and display performance.
Note: The project file size will increase.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ScopingMethod"></a>

### *property* MaximumPrincipalThermalStrain.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SeparateDataByEntity"></a>

### *property* MaximumPrincipalThermalStrain.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SetNumber"></a>

### *property* MaximumPrincipalThermalStrain.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SolutionCombinationDriver"></a>

### *property* MaximumPrincipalThermalStrain.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SolverComponentIDs"></a>

### *property* MaximumPrincipalThermalStrain.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.State"></a>

### *property* MaximumPrincipalThermalStrain.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.StressStrainType"></a>

### *property* MaximumPrincipalThermalStrain.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SubScopeBy"></a>

### *property* MaximumPrincipalThermalStrain.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Substep"></a>

### *property* MaximumPrincipalThermalStrain.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Suppressed"></a>

### *property* MaximumPrincipalThermalStrain.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Surface"></a>

### *property* MaximumPrincipalThermalStrain.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SurfaceCoating"></a>

### *property* MaximumPrincipalThermalStrain.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.SweepingPhase"></a>

### *property* MaximumPrincipalThermalStrain.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.TabularData"></a>

### *property* MaximumPrincipalThermalStrain.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Time"></a>

### *property* MaximumPrincipalThermalStrain.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.TimeForMaximumOfMaximumValues"></a>

### *property* MaximumPrincipalThermalStrain.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.TimeForMaximumOfMinimumValues"></a>

### *property* MaximumPrincipalThermalStrain.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.TimeForMinimumOfMaximumValues"></a>

### *property* MaximumPrincipalThermalStrain.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.TimeForMinimumOfMinimumValues"></a>

### *property* MaximumPrincipalThermalStrain.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Total"></a>

### *property* MaximumPrincipalThermalStrain.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.VisibleProperties"></a>

### *property* MaximumPrincipalThermalStrain.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayFilterBy"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayFrequencySelection"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayInterpolateData"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayLowerBand"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayMaxRPM"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayMinRPM"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayModeSelection"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayOrderSelection"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayRpmSelection"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayScopeToOrderLines"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayTimeSelection"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayUpperBand"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayXAxisMaximum"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayXAxisMinimum"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayYAxisMaximum"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallDisplayYAxisMinimum"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.WaterfallShowTextOnMosaic"></a>

### *property* MaximumPrincipalThermalStrain.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaximumPrincipalThermalStrain.Activate"></a>

### MaximumPrincipalThermalStrain.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.AddAlert"></a>

### MaximumPrincipalThermalStrain.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.AddComment"></a>

### MaximumPrincipalThermalStrain.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.AddConvergence"></a>

### MaximumPrincipalThermalStrain.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.AddFigure"></a>

### MaximumPrincipalThermalStrain.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.AddImage"></a>

### MaximumPrincipalThermalStrain.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.BodyWhereMaximumOccurs"></a>

### MaximumPrincipalThermalStrain.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ClearGeneratedData"></a>

### MaximumPrincipalThermalStrain.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Copy"></a>

### MaximumPrincipalThermalStrain.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CopyTo"></a>

### MaximumPrincipalThermalStrain.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CreateObjRef"></a>

### MaximumPrincipalThermalStrain.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CreateParameter"></a>

### MaximumPrincipalThermalStrain.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.CreateResultsAtAllSets"></a>

### MaximumPrincipalThermalStrain.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Cut"></a>

### MaximumPrincipalThermalStrain.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Delete"></a>

### MaximumPrincipalThermalStrain.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Duplicate"></a>

### MaximumPrincipalThermalStrain.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.DuplicateWithoutResults"></a>

### MaximumPrincipalThermalStrain.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Equals"></a>

### MaximumPrincipalThermalStrain.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.EvaluateAllResults"></a>

### MaximumPrincipalThermalStrain.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ExportAnimation"></a>

### MaximumPrincipalThermalStrain.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ExportToSTLFile"></a>

### MaximumPrincipalThermalStrain.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.ExportToTextFile"></a>

### MaximumPrincipalThermalStrain.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MaximumPrincipalThermalStrain.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.FetchRemoteResult"></a>

### MaximumPrincipalThermalStrain.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.FetchRemoteResults"></a>

### MaximumPrincipalThermalStrain.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetAPIName"></a>

### MaximumPrincipalThermalStrain.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetAllProperties"></a>

### MaximumPrincipalThermalStrain.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetChildren"></a>

### MaximumPrincipalThermalStrain.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MaximumPrincipalThermalStrain.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetDetailsView"></a>

### MaximumPrincipalThermalStrain.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetEnumName"></a>

### MaximumPrincipalThermalStrain.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetHashCode"></a>

### MaximumPrincipalThermalStrain.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetIconFile"></a>

### MaximumPrincipalThermalStrain.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetLifetimeService"></a>

### MaximumPrincipalThermalStrain.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetNodalValues"></a>

### MaximumPrincipalThermalStrain.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetObjectData"></a>

### MaximumPrincipalThermalStrain.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetParameter"></a>

### MaximumPrincipalThermalStrain.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetPath"></a>

### MaximumPrincipalThermalStrain.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetPropertyName"></a>

### MaximumPrincipalThermalStrain.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetPropertyValue"></a>

### MaximumPrincipalThermalStrain.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetQuantityName"></a>

### MaximumPrincipalThermalStrain.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetVisibleProperties"></a>

### MaximumPrincipalThermalStrain.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GetVisiblePropertyNames"></a>

### MaximumPrincipalThermalStrain.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GroupAllSimilarChildren"></a>

### MaximumPrincipalThermalStrain.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.GroupSimilarObjects"></a>

### MaximumPrincipalThermalStrain.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.InitializeLifetimeService"></a>

### MaximumPrincipalThermalStrain.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.IsPropertyEditable"></a>

### MaximumPrincipalThermalStrain.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MaximumPrincipalThermalStrain.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.IsPropertyVisible"></a>

### MaximumPrincipalThermalStrain.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MaximumPrincipalThermalStrain.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.Paste"></a>

### MaximumPrincipalThermalStrain.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.PromoteToNamedSelection"></a>

### MaximumPrincipalThermalStrain.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.PropertyByAPIName"></a>

### MaximumPrincipalThermalStrain.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.PropertyById"></a>

### MaximumPrincipalThermalStrain.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.PropertyByName"></a>

### MaximumPrincipalThermalStrain.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.RemoveFromGroup"></a>

### MaximumPrincipalThermalStrain.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.RemoveParameter"></a>

### MaximumPrincipalThermalStrain.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.RenameBasedOnDefinition"></a>

### MaximumPrincipalThermalStrain.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.RetrieveRemoteDPFResults"></a>

### MaximumPrincipalThermalStrain.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="MaximumPrincipalThermalStrain.RetrieveResult"></a>

### MaximumPrincipalThermalStrain.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

