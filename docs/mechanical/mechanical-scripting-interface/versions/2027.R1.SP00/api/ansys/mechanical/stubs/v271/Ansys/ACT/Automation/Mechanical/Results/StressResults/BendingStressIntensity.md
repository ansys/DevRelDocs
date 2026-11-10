# `BendingStressIntensity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.StressResults.BendingStressIntensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressResults.BendingStressIntensity(internalObject: Any)

<a id="BendingStressIntensity"></a>

### *class* BendingStressIntensity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a BendingStressIntensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#BendingStressIntensity.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#BendingStressIntensity.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#BendingStressIntensity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#BendingStressIntensity.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#BendingStressIntensity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#BendingStressIntensity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#BendingStressIntensity.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#BendingStressIntensity.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#BendingStressIntensity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#BendingStressIntensity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#BendingStressIntensity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#BendingStressIntensity.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#BendingStressIntensity.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#BendingStressIntensity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#BendingStressIntensity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#BendingStressIntensity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#BendingStressIntensity.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#BendingStressIntensity.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#BendingStressIntensity.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#BendingStressIntensity.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#BendingStressIntensity.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#BendingStressIntensity.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#BendingStressIntensity.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#BendingStressIntensity.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#BendingStressIntensity.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#BendingStressIntensity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#BendingStressIntensity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#BendingStressIntensity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#BendingStressIntensity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#BendingStressIntensity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#BendingStressIntensity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#BendingStressIntensity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#BendingStressIntensity.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#BendingStressIntensity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#BendingStressIntensity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#BendingStressIntensity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#BendingStressIntensity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#BendingStressIntensity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#BendingStressIntensity.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#BendingStressIntensity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#BendingStressIntensity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#BendingStressIntensity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#BendingStressIntensity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#BendingStressIntensity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#BendingStressIntensity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#BendingStressIntensity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#BendingStressIntensity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#BendingStressIntensity.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#BendingStressIntensity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#BendingStressIntensity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#BendingStressIntensity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#BendingStressIntensity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#BendingStressIntensity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#BendingStressIntensity.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#BendingStressIntensity.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#BendingStressIntensity.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#BendingStressIntensity.Amplitude)                                                   | Gets or sets the Amplitude.                                                                                                                                                                         |
| [`AttachedRefs`](#BendingStressIntensity.AttachedRefs)                                             | AttachedRefs property.                                                                                                                                                                              |
| [`Average`](#BendingStressIntensity.Average)                                                       | Gets the Average.                                                                                                                                                                                   |
| [`AverageAcrossBodies`](#BendingStressIntensity.AverageAcrossBodies)                               | Gets or sets the AverageAcrossBodies.                                                                                                                                                               |
| [`AverageRadiusOfCurvature`](#BendingStressIntensity.AverageRadiusOfCurvature)                     | Gets or sets the AverageRadiusOfCurvature.                                                                                                                                                          |
| [`BendingInside`](#BendingStressIntensity.BendingInside)                                           | Gets the BendingInside.                                                                                                                                                                             |
| [`BendingOutside`](#BendingStressIntensity.BendingOutside)                                         | Gets the BendingOutside.                                                                                                                                                                            |
| [`By`](#BendingStressIntensity.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                                            |
| [`CalculateTimeHistory`](#BendingStressIntensity.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                                                                                                              |
| [`Children`](#BendingStressIntensity.Children)                                                     | Gets the list of children.                                                                                                                                                                          |
| [`ClsId`](#BendingStressIntensity.ClsId)                                                           | ClsId property.                                                                                                                                                                                     |
| [`CombinationNumber`](#BendingStressIntensity.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                                                                                                              |
| [`Comments`](#BendingStressIntensity.Comments)                                                     | Gets the list of associated comments.                                                                                                                                                               |
| [`CoordinateSystem`](#CoordinateSystem)                                   | Gets or sets the Coordinate System.                                                                                                                                                                 |
| [`CrackFrontNumber`](#BendingStressIntensity.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                                                                                                                  |
| [`CyclicMode`](#BendingStressIntensity.CyclicMode)                                                 | Gets or sets the CyclicMode.                                                                                                                                                                        |
| [`DataModelObjectCategory`](#BendingStressIntensity.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                                                                                                                        |
| [`DisplayOption`](#BendingStressIntensity.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                                                                                                                     |
| [`DisplayTime`](#BendingStressIntensity.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                                                                                                                       |
| [`DpfEvaluation`](#BendingStressIntensity.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                                                                                                                     |
| [`EnvironmentSelection`](#BendingStressIntensity.EnvironmentSelection)                             | Gets or sets the EnvironmentSelection.                                                                                                                                                              |
| [`Figures`](#BendingStressIntensity.Figures)                                                       | Gets the list of associated figures.                                                                                                                                                                |
| [`Frequency`](#BendingStressIntensity.Frequency)                                                   | Gets or sets the Frequency.                                                                                                                                                                         |
| [`GlobalIDs`](#BendingStressIntensity.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                                                                                                                         |
| [`GraphControlsXAxis`](#BendingStressIntensity.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                                                                                                                |
| [`GroupingFolder`](#BendingStressIntensity.GroupingFolder)                                         | GroupingFolder property.                                                                                                                                                                            |
| [`HarmonicIndex`](#BendingStressIntensity.HarmonicIndex)                                           | Gets or sets the HarmonicIndex.                                                                                                                                                                     |
| [`IconName`](#BendingStressIntensity.IconName)                                                     | IconName property.                                                                                                                                                                                  |
| [`Identifier`](#BendingStressIntensity.Identifier)                                                 | Gets or sets the Identifier.                                                                                                                                                                        |
| [`Images`](#BendingStressIntensity.Images)                                                         | Gets the list of associated images.                                                                                                                                                                 |
| [`InternalObject`](#BendingStressIntensity.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                                                                                                                  |
| [`IsSolved`](#BendingStressIntensity.IsSolved)                                                     | Gets the IsSolved.                                                                                                                                                                                  |
| [`ItemType`](#BendingStressIntensity.ItemType)                                                     | Gets or sets the ItemType.                                                                                                                                                                          |
| [`IterationNumber`](#BendingStressIntensity.IterationNumber)                                       | Gets the IterationNumber.                                                                                                                                                                           |
| [`IterationStep`](#BendingStressIntensity.IterationStep)                                           | Gets or sets the IterationStep.                                                                                                                                                                     |
| [`Layer`](#BendingStressIntensity.Layer)                                                           | Gets or sets the Layer.                                                                                                                                                                             |
| [`Linearized2DBehavior`](#BendingStressIntensity.Linearized2DBehavior)                             | Gets or sets the Linearized2DBehavior.                                                                                                                                                              |
| [`LoadMultiplier`](#BendingStressIntensity.LoadMultiplier)                                         | Gets the LoadMultiplier.                                                                                                                                                                            |
| [`LoadStep`](#BendingStressIntensity.LoadStep)                                                     | Gets the LoadStep.                                                                                                                                                                                  |
| [`LoadStepForMaximumOfMaximumValues`](#BendingStressIntensity.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                                                                                                                |
| [`LoadStepForMaximumOfMinimumValues`](#BendingStressIntensity.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMaximumValues`](#BendingStressIntensity.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMinimumValues`](#BendingStressIntensity.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                                                                                                                |
| [`LoadStepNumber`](#BendingStressIntensity.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                                                                                                                    |
| [`Location`](#BendingStressIntensity.Location)                                                     | Gets or sets the Location.                                                                                                                                                                          |
| [`Maximum`](#BendingStressIntensity.Maximum)                                                       | Gets the Maximum.                                                                                                                                                                                   |
| [`MaximumOccursOn`](#BendingStressIntensity.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                                                                                                           |
| [`MaximumOfMaximumOverTime`](#BendingStressIntensity.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                                                                                                                  |
| [`MaximumOfMinimumOverTime`](#BendingStressIntensity.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                                                                                                                  |
| [`Membrane`](#BendingStressIntensity.Membrane)                                                     | Gets the Membrane.                                                                                                                                                                                  |
| [`MembraneBendingCenter`](#BendingStressIntensity.MembraneBendingCenter)                           | Gets the MembraneBendingCenter.                                                                                                                                                                     |
| [`MembraneBendingInside`](#BendingStressIntensity.MembraneBendingInside)                           | Gets the MembraneBendingInside.                                                                                                                                                                     |
| [`MembraneBendingOutside`](#BendingStressIntensity.MembraneBendingOutside)                         | Gets the MembraneBendingOutside.                                                                                                                                                                    |
| [`Minimum`](#BendingStressIntensity.Minimum)                                                       | Gets the Minimum.                                                                                                                                                                                   |
| [`MinimumOccursOn`](#BendingStressIntensity.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                                                                                                           |
| [`MinimumOfMaximumOverTime`](#BendingStressIntensity.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                                                                                                                  |
| [`MinimumOfMinimumOverTime`](#BendingStressIntensity.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                                                                                                                  |
| [`Mode`](#BendingStressIntensity.Mode)                                                             | Gets or sets the Mode.                                                                                                                                                                              |
| [`Name`](#BendingStressIntensity.Name)                                                             | Name property.                                                                                                                                                                                      |
| [`NamedSelections`](#NamedSelections)                                      | Gets or sets the NamedSelections.                                                                                                                                                                   |
| [`NormalOrientation`](#BendingStressIntensity.NormalOrientation)                                   | Gets or sets the NormalOrientation.                                                                                                                                                                 |
| [`ObjectId`](#BendingStressIntensity.ObjectId)                                                     | ObjectId property.                                                                                                                                                                                  |
| [`ObjectState`](#BendingStressIntensity.ObjectState)                                               | ObjectState property.                                                                                                                                                                               |
| [`ObjectTags`](#BendingStressIntensity.ObjectTags)                                                 | ObjectTags property.                                                                                                                                                                                |
| [`Parent`](#BendingStressIntensity.Parent)                                                         | Parent property.                                                                                                                                                                                    |
| [`Path`](#Path)                                                                       | Path property.                                                                                                                                                                                      |
| [`PeakCenter`](#BendingStressIntensity.PeakCenter)                                                 | Gets the PeakCenter.                                                                                                                                                                                |
| [`PeakInside`](#BendingStressIntensity.PeakInside)                                                 | Gets the PeakInside.                                                                                                                                                                                |
| [`PeakOutside`](#BendingStressIntensity.PeakOutside)                                               | Gets the PeakOutside.                                                                                                                                                                               |
| [`PhaseIncrement`](#BendingStressIntensity.PhaseIncrement)                                         | Gets or sets the PhaseIncrement.                                                                                                                                                                    |
| [`Plies`](#BendingStressIntensity.Plies)                                                           | Plies property.                                                                                                                                                                                     |
| [`PlotData`](#BendingStressIntensity.PlotData)                                                     | Gets the result table.                                                                                                                                                                              |
| [`Ply`](#BendingStressIntensity.Ply)                                                               | Gets or sets the Ply selection.                                                                                                                                                                     |
| [`Position`](#Position)                                                 | Gets or sets the Position.                                                                                                                                                                          |
| [`Probability`](#BendingStressIntensity.Probability)                                               | Gets the Probability.                                                                                                                                                                               |
| [`Properties`](#BendingStressIntensity.Properties)                                                 | Gets the list of properties for this object.                                                                                                                                                        |
| [`RPMSelection`](#BendingStressIntensity.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                                            |
| [`ReportedFrequency`](#BendingStressIntensity.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                                                                                                                         |
| [`ResultType`](#BendingStressIntensity.ResultType)                                                 | Gets or sets the ResultType.                                                                                                                                                                        |
| [`RpmSetNumber`](#BendingStressIntensity.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                                                                                                                      |
| [`SaveAuxiliaryResult`](#BendingStressIntensity.SaveAuxiliaryResult)                               | Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise. |
| [`ScaleFactor`](#BendingStressIntensity.ScaleFactor)                                               | Gets or sets the ScaleFactor.                                                                                                                                                                       |
| [`ScopingMethod`](#BendingStressIntensity.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                                                                                                                     |
| [`SeparateDataByEntity`](#BendingStressIntensity.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                                                                                                              |
| [`SetNumber`](#BendingStressIntensity.SetNumber)                                                   | Gets or sets the Set Number.                                                                                                                                                                        |
| [`SolutionCombinationDriver`](#BendingStressIntensity.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                                                                                                                         |
| [`SolverComponentIDs`](#BendingStressIntensity.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                                                                                                                |
| [`State`](#BendingStressIntensity.State)                                                           | State property.                                                                                                                                                                                     |
| [`StressStrainType`](#BendingStressIntensity.StressStrainType)                                     | Gets or sets the StressStrainType.                                                                                                                                                                  |
| [`SubScopeBy`](#BendingStressIntensity.SubScopeBy)                                                 | Gets or sets the SubScopeBy.                                                                                                                                                                        |
| [`Substep`](#BendingStressIntensity.Substep)                                                       | Gets the Substep.                                                                                                                                                                                   |
| [`Subtype`](#BendingStressIntensity.Subtype)                                                       | Gets or sets the Subtype.                                                                                                                                                                           |
| [`Suppressed`](#BendingStressIntensity.Suppressed)                                                 | Gets or sets the Suppressed.                                                                                                                                                                        |
| [`Surface`](#Surface)                                                              | Surface property.                                                                                                                                                                                   |
| [`SurfaceCoating`](#SurfaceCoating)                                         | SurfaceCoating property.                                                                                                                                                                            |
| [`SweepingPhase`](#BendingStressIntensity.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                                                                                                                     |
| [`TabularData`](#BendingStressIntensity.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.                                                                                                        |
| [`ThroughThicknessBendingStress`](#BendingStressIntensity.ThroughThicknessBendingStress)           | Gets or sets the ThroughThicknessBendingStress.                                                                                                                                                     |
| [`Time`](#BendingStressIntensity.Time)                                                             | Gets the Time.                                                                                                                                                                                      |
| [`TimeForMaximumOfMaximumValues`](#BendingStressIntensity.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                                                                                                                     |
| [`TimeForMaximumOfMinimumValues`](#BendingStressIntensity.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                                                                                                                     |
| [`TimeForMinimumOfMaximumValues`](#BendingStressIntensity.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                                                                                                                     |
| [`TimeForMinimumOfMinimumValues`](#BendingStressIntensity.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                                                                                                                     |
| [`Total`](#BendingStressIntensity.Total)                                                           | Gets the Total.                                                                                                                                                                                     |
| [`TotalCenter`](#BendingStressIntensity.TotalCenter)                                               | Gets the TotalCenter.                                                                                                                                                                               |
| [`TotalInside`](#BendingStressIntensity.TotalInside)                                               | Gets the TotalInside.                                                                                                                                                                               |
| [`TotalOutside`](#BendingStressIntensity.TotalOutside)                                             | Gets the TotalOutside.                                                                                                                                                                              |
| [`VisibleProperties`](#BendingStressIntensity.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                                                                                                                       |
| [`WaterfallDisplayFilterBy`](#BendingStressIntensity.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                                                                                                                |
| [`WaterfallDisplayFrequencySelection`](#BendingStressIntensity.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                                                                                                               |
| [`WaterfallDisplayInterpolateData`](#BendingStressIntensity.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                                                                                                                         |
| [`WaterfallDisplayLowerBand`](#BendingStressIntensity.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayMaxRPM`](#BendingStressIntensity.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                                                                                                                   |
| [`WaterfallDisplayMinRPM`](#BendingStressIntensity.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                                                                                                                   |
| [`WaterfallDisplayModeSelection`](#BendingStressIntensity.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                                                                                                                    |
| [`WaterfallDisplayOrderSelection`](#BendingStressIntensity.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                                                                                                                   |
| [`WaterfallDisplayRpmSelection`](#BendingStressIntensity.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                                                                                                                     |
| [`WaterfallDisplayScopeToOrderLines`](#BendingStressIntensity.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                                                                                                                     |
| [`WaterfallDisplayTimeSelection`](#BendingStressIntensity.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                                                                                                                    |
| [`WaterfallDisplayUpperBand`](#BendingStressIntensity.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayXAxisMaximum`](#BendingStressIntensity.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayXAxisMinimum`](#BendingStressIntensity.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMaximum`](#BendingStressIntensity.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMinimum`](#BendingStressIntensity.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallShowTextOnMosaic`](#BendingStressIntensity.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                                                                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="BendingStressIntensity.Amplitude"></a>

### *property* BendingStressIntensity.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.AttachedRefs"></a>

### *property* BendingStressIntensity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Average"></a>

### *property* BendingStressIntensity.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.AverageAcrossBodies"></a>

### *property* BendingStressIntensity.AverageAcrossBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.AverageRadiusOfCurvature"></a>

### *property* BendingStressIntensity.AverageRadiusOfCurvature *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.BendingInside"></a>

### *property* BendingStressIntensity.BendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.BendingOutside"></a>

### *property* BendingStressIntensity.BendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.By"></a>

### *property* BendingStressIntensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.CalculateTimeHistory"></a>

### *property* BendingStressIntensity.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Children"></a>

### *property* BendingStressIntensity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ClsId"></a>

### *property* BendingStressIntensity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.CombinationNumber"></a>

### *property* BendingStressIntensity.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Comments"></a>

### *property* BendingStressIntensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.CoordinateSystem"></a>

### *property* BendingStressIntensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.CrackFrontNumber"></a>

### *property* BendingStressIntensity.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.CyclicMode"></a>

### *property* BendingStressIntensity.CyclicMode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.DataModelObjectCategory"></a>

### *property* BendingStressIntensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.DisplayOption"></a>

### *property* BendingStressIntensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.DisplayTime"></a>

### *property* BendingStressIntensity.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.DpfEvaluation"></a>

### *property* BendingStressIntensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.EnvironmentSelection"></a>

### *property* BendingStressIntensity.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Figures"></a>

### *property* BendingStressIntensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Frequency"></a>

### *property* BendingStressIntensity.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GlobalIDs"></a>

### *property* BendingStressIntensity.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GraphControlsXAxis"></a>

### *property* BendingStressIntensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GroupingFolder"></a>

### *property* BendingStressIntensity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.HarmonicIndex"></a>

### *property* BendingStressIntensity.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.IconName"></a>

### *property* BendingStressIntensity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Identifier"></a>

### *property* BendingStressIntensity.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Images"></a>

### *property* BendingStressIntensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.InternalObject"></a>

### *property* BendingStressIntensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.IsSolved"></a>

### *property* BendingStressIntensity.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ItemType"></a>

### *property* BendingStressIntensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.IterationNumber"></a>

### *property* BendingStressIntensity.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.IterationStep"></a>

### *property* BendingStressIntensity.IterationStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Layer"></a>

### *property* BendingStressIntensity.Layer *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Linearized2DBehavior"></a>

### *property* BendingStressIntensity.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.LoadMultiplier"></a>

### *property* BendingStressIntensity.LoadMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.LoadStep"></a>

### *property* BendingStressIntensity.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* BendingStressIntensity.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* BendingStressIntensity.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* BendingStressIntensity.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* BendingStressIntensity.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.LoadStepNumber"></a>

### *property* BendingStressIntensity.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Location"></a>

### *property* BendingStressIntensity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Maximum"></a>

### *property* BendingStressIntensity.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.MaximumOccursOn"></a>

### *property* BendingStressIntensity.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.MaximumOfMaximumOverTime"></a>

### *property* BendingStressIntensity.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.MaximumOfMinimumOverTime"></a>

### *property* BendingStressIntensity.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Membrane"></a>

### *property* BendingStressIntensity.Membrane *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.MembraneBendingCenter"></a>

### *property* BendingStressIntensity.MembraneBendingCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.MembraneBendingInside"></a>

### *property* BendingStressIntensity.MembraneBendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.MembraneBendingOutside"></a>

### *property* BendingStressIntensity.MembraneBendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Minimum"></a>

### *property* BendingStressIntensity.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.MinimumOccursOn"></a>

### *property* BendingStressIntensity.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.MinimumOfMaximumOverTime"></a>

### *property* BendingStressIntensity.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.MinimumOfMinimumOverTime"></a>

### *property* BendingStressIntensity.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Mode"></a>

### *property* BendingStressIntensity.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Name"></a>

### *property* BendingStressIntensity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.NamedSelections"></a>

### *property* BendingStressIntensity.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.NormalOrientation"></a>

### *property* BendingStressIntensity.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ObjectId"></a>

### *property* BendingStressIntensity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ObjectState"></a>

### *property* BendingStressIntensity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ObjectTags"></a>

### *property* BendingStressIntensity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Parent"></a>

### *property* BendingStressIntensity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Path"></a>

### *property* BendingStressIntensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.PeakCenter"></a>

### *property* BendingStressIntensity.PeakCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.PeakInside"></a>

### *property* BendingStressIntensity.PeakInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.PeakOutside"></a>

### *property* BendingStressIntensity.PeakOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.PhaseIncrement"></a>

### *property* BendingStressIntensity.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Plies"></a>

### *property* BendingStressIntensity.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.PlotData"></a>

### *property* BendingStressIntensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Ply"></a>

### *property* BendingStressIntensity.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Position"></a>

### *property* BendingStressIntensity.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Probability"></a>

### *property* BendingStressIntensity.Probability *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Properties"></a>

### *property* BendingStressIntensity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.RPMSelection"></a>

### *property* BendingStressIntensity.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ReportedFrequency"></a>

### *property* BendingStressIntensity.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ResultType"></a>

### *property* BendingStressIntensity.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.RpmSetNumber"></a>

### *property* BendingStressIntensity.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.SaveAuxiliaryResult"></a>

### *property* BendingStressIntensity.SaveAuxiliaryResult *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise.
Saving result data to disk improves result retrieval and display performance.
Note: The project file size will increase.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ScaleFactor"></a>

### *property* BendingStressIntensity.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ScopingMethod"></a>

### *property* BendingStressIntensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.SeparateDataByEntity"></a>

### *property* BendingStressIntensity.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.SetNumber"></a>

### *property* BendingStressIntensity.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.SolutionCombinationDriver"></a>

### *property* BendingStressIntensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.SolverComponentIDs"></a>

### *property* BendingStressIntensity.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.State"></a>

### *property* BendingStressIntensity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.StressStrainType"></a>

### *property* BendingStressIntensity.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.SubScopeBy"></a>

### *property* BendingStressIntensity.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Substep"></a>

### *property* BendingStressIntensity.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Subtype"></a>

### *property* BendingStressIntensity.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Suppressed"></a>

### *property* BendingStressIntensity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Surface"></a>

### *property* BendingStressIntensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.SurfaceCoating"></a>

### *property* BendingStressIntensity.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.SweepingPhase"></a>

### *property* BendingStressIntensity.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.TabularData"></a>

### *property* BendingStressIntensity.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ThroughThicknessBendingStress"></a>

### *property* BendingStressIntensity.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Time"></a>

### *property* BendingStressIntensity.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.TimeForMaximumOfMaximumValues"></a>

### *property* BendingStressIntensity.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.TimeForMaximumOfMinimumValues"></a>

### *property* BendingStressIntensity.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.TimeForMinimumOfMaximumValues"></a>

### *property* BendingStressIntensity.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.TimeForMinimumOfMinimumValues"></a>

### *property* BendingStressIntensity.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Total"></a>

### *property* BendingStressIntensity.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.TotalCenter"></a>

### *property* BendingStressIntensity.TotalCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.TotalInside"></a>

### *property* BendingStressIntensity.TotalInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.TotalOutside"></a>

### *property* BendingStressIntensity.TotalOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.VisibleProperties"></a>

### *property* BendingStressIntensity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayFilterBy"></a>

### *property* BendingStressIntensity.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayFrequencySelection"></a>

### *property* BendingStressIntensity.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayInterpolateData"></a>

### *property* BendingStressIntensity.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayLowerBand"></a>

### *property* BendingStressIntensity.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayMaxRPM"></a>

### *property* BendingStressIntensity.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayMinRPM"></a>

### *property* BendingStressIntensity.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayModeSelection"></a>

### *property* BendingStressIntensity.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayOrderSelection"></a>

### *property* BendingStressIntensity.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayRpmSelection"></a>

### *property* BendingStressIntensity.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayScopeToOrderLines"></a>

### *property* BendingStressIntensity.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayTimeSelection"></a>

### *property* BendingStressIntensity.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayUpperBand"></a>

### *property* BendingStressIntensity.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayXAxisMaximum"></a>

### *property* BendingStressIntensity.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayXAxisMinimum"></a>

### *property* BendingStressIntensity.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayYAxisMaximum"></a>

### *property* BendingStressIntensity.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallDisplayYAxisMinimum"></a>

### *property* BendingStressIntensity.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.WaterfallShowTextOnMosaic"></a>

### *property* BendingStressIntensity.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BendingStressIntensity.Activate"></a>

### BendingStressIntensity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.AddAlert"></a>

### BendingStressIntensity.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.AddComment"></a>

### BendingStressIntensity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.AddConvergence"></a>

### BendingStressIntensity.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.AddFigure"></a>

### BendingStressIntensity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.AddImage"></a>

### BendingStressIntensity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.BodyWhereMaximumOccurs"></a>

### BendingStressIntensity.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ClearGeneratedData"></a>

### BendingStressIntensity.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Copy"></a>

### BendingStressIntensity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.CopyTo"></a>

### BendingStressIntensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.CreateObjRef"></a>

### BendingStressIntensity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.CreateParameter"></a>

### BendingStressIntensity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.CreateResultsAtAllSets"></a>

### BendingStressIntensity.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Cut"></a>

### BendingStressIntensity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Delete"></a>

### BendingStressIntensity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Duplicate"></a>

### BendingStressIntensity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.DuplicateWithoutResults"></a>

### BendingStressIntensity.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Equals"></a>

### BendingStressIntensity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.EvaluateAllResults"></a>

### BendingStressIntensity.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ExportAnimation"></a>

### BendingStressIntensity.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ExportToSTLFile"></a>

### BendingStressIntensity.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.ExportToTextFile"></a>

### BendingStressIntensity.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### BendingStressIntensity.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.FetchRemoteResult"></a>

### BendingStressIntensity.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.FetchRemoteResults"></a>

### BendingStressIntensity.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetAPIName"></a>

### BendingStressIntensity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetAllProperties"></a>

### BendingStressIntensity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetChildren"></a>

### BendingStressIntensity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### BendingStressIntensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetDetailsView"></a>

### BendingStressIntensity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetEnumName"></a>

### BendingStressIntensity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetHashCode"></a>

### BendingStressIntensity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetIconFile"></a>

### BendingStressIntensity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetLifetimeService"></a>

### BendingStressIntensity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetNodalValues"></a>

### BendingStressIntensity.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetObjectData"></a>

### BendingStressIntensity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetParameter"></a>

### BendingStressIntensity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetPath"></a>

### BendingStressIntensity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetPropertyName"></a>

### BendingStressIntensity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetPropertyValue"></a>

### BendingStressIntensity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetQuantityName"></a>

### BendingStressIntensity.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetVisibleProperties"></a>

### BendingStressIntensity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GetVisiblePropertyNames"></a>

### BendingStressIntensity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GroupAllSimilarChildren"></a>

### BendingStressIntensity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.GroupSimilarObjects"></a>

### BendingStressIntensity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.InitializeLifetimeService"></a>

### BendingStressIntensity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.IsPropertyEditable"></a>

### BendingStressIntensity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BendingStressIntensity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.IsPropertyVisible"></a>

### BendingStressIntensity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### BendingStressIntensity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.Paste"></a>

### BendingStressIntensity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.PromoteToNamedSelection"></a>

### BendingStressIntensity.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.PropertyByAPIName"></a>

### BendingStressIntensity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.PropertyById"></a>

### BendingStressIntensity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.PropertyByName"></a>

### BendingStressIntensity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.RemoveFromGroup"></a>

### BendingStressIntensity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.RemoveParameter"></a>

### BendingStressIntensity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.RenameBasedOnDefinition"></a>

### BendingStressIntensity.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.RetrieveRemoteDPFResults"></a>

### BendingStressIntensity.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="BendingStressIntensity.RetrieveResult"></a>

### BendingStressIntensity.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

