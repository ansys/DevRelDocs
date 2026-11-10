# `ShellBottomPeakStress`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellBottomPeakStress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellBottomPeakStress(internalObject: Any)

<a id="ShellBottomPeakStress"></a>

### *class* ShellBottomPeakStress(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ShellBottomPeakStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ShellBottomPeakStress.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#ShellBottomPeakStress.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#ShellBottomPeakStress.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#ShellBottomPeakStress.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#ShellBottomPeakStress.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ShellBottomPeakStress.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#ShellBottomPeakStress.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#ShellBottomPeakStress.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ShellBottomPeakStress.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ShellBottomPeakStress.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ShellBottomPeakStress.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ShellBottomPeakStress.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#ShellBottomPeakStress.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#ShellBottomPeakStress.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ShellBottomPeakStress.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ShellBottomPeakStress.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#ShellBottomPeakStress.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#ShellBottomPeakStress.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#ShellBottomPeakStress.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#ShellBottomPeakStress.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#ShellBottomPeakStress.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#ShellBottomPeakStress.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#ShellBottomPeakStress.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#ShellBottomPeakStress.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#ShellBottomPeakStress.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#ShellBottomPeakStress.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ShellBottomPeakStress.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ShellBottomPeakStress.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ShellBottomPeakStress.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ShellBottomPeakStress.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ShellBottomPeakStress.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ShellBottomPeakStress.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#ShellBottomPeakStress.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#ShellBottomPeakStress.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ShellBottomPeakStress.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ShellBottomPeakStress.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ShellBottomPeakStress.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ShellBottomPeakStress.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#ShellBottomPeakStress.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#ShellBottomPeakStress.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ShellBottomPeakStress.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ShellBottomPeakStress.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ShellBottomPeakStress.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ShellBottomPeakStress.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ShellBottomPeakStress.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ShellBottomPeakStress.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ShellBottomPeakStress.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#ShellBottomPeakStress.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#ShellBottomPeakStress.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ShellBottomPeakStress.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ShellBottomPeakStress.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ShellBottomPeakStress.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ShellBottomPeakStress.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ShellBottomPeakStress.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#ShellBottomPeakStress.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#ShellBottomPeakStress.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#ShellBottomPeakStress.Amplitude)                                                   | Gets or sets the Amplitude.                                                                                                                                                                         |
| [`AttachedRefs`](#ShellBottomPeakStress.AttachedRefs)                                             | AttachedRefs property.                                                                                                                                                                              |
| [`Average`](#ShellBottomPeakStress.Average)                                                       | Gets the Average.                                                                                                                                                                                   |
| [`AverageAcrossBodies`](#ShellBottomPeakStress.AverageAcrossBodies)                               | Gets or sets the AverageAcrossBodies.                                                                                                                                                               |
| [`AverageRadiusOfCurvature`](#ShellBottomPeakStress.AverageRadiusOfCurvature)                     | Gets or sets the AverageRadiusOfCurvature.                                                                                                                                                          |
| [`BendingInside`](#ShellBottomPeakStress.BendingInside)                                           | Gets the BendingInside.                                                                                                                                                                             |
| [`BendingOutside`](#ShellBottomPeakStress.BendingOutside)                                         | Gets the BendingOutside.                                                                                                                                                                            |
| [`By`](#ShellBottomPeakStress.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                                            |
| [`CalculateTimeHistory`](#ShellBottomPeakStress.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                                                                                                              |
| [`Children`](#ShellBottomPeakStress.Children)                                                     | Gets the list of children.                                                                                                                                                                          |
| [`ClsId`](#ShellBottomPeakStress.ClsId)                                                           | ClsId property.                                                                                                                                                                                     |
| [`CombinationNumber`](#ShellBottomPeakStress.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                                                                                                              |
| [`Comments`](#ShellBottomPeakStress.Comments)                                                     | Gets the list of associated comments.                                                                                                                                                               |
| [`CoordinateSystem`](#CoordinateSystem)                                  | Gets or sets the Coordinate System.                                                                                                                                                                 |
| [`CrackFrontNumber`](#ShellBottomPeakStress.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                                                                                                                  |
| [`CyclicMode`](#ShellBottomPeakStress.CyclicMode)                                                 | Gets or sets the CyclicMode.                                                                                                                                                                        |
| [`DataModelObjectCategory`](#ShellBottomPeakStress.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                                                                                                                        |
| [`DisplayOption`](#ShellBottomPeakStress.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                                                                                                                     |
| [`DisplayTime`](#ShellBottomPeakStress.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                                                                                                                       |
| [`DpfEvaluation`](#ShellBottomPeakStress.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                                                                                                                     |
| [`EnvironmentSelection`](#ShellBottomPeakStress.EnvironmentSelection)                             | Gets or sets the EnvironmentSelection.                                                                                                                                                              |
| [`Figures`](#ShellBottomPeakStress.Figures)                                                       | Gets the list of associated figures.                                                                                                                                                                |
| [`Frequency`](#ShellBottomPeakStress.Frequency)                                                   | Gets or sets the Frequency.                                                                                                                                                                         |
| [`GlobalIDs`](#ShellBottomPeakStress.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                                                                                                                         |
| [`GraphControlsXAxis`](#ShellBottomPeakStress.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                                                                                                                |
| [`GroupingFolder`](#ShellBottomPeakStress.GroupingFolder)                                         | GroupingFolder property.                                                                                                                                                                            |
| [`HarmonicIndex`](#ShellBottomPeakStress.HarmonicIndex)                                           | Gets or sets the HarmonicIndex.                                                                                                                                                                     |
| [`IconName`](#ShellBottomPeakStress.IconName)                                                     | IconName property.                                                                                                                                                                                  |
| [`Identifier`](#ShellBottomPeakStress.Identifier)                                                 | Gets or sets the Identifier.                                                                                                                                                                        |
| [`Images`](#ShellBottomPeakStress.Images)                                                         | Gets the list of associated images.                                                                                                                                                                 |
| [`InternalObject`](#ShellBottomPeakStress.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                                                                                                                  |
| [`IsSolved`](#ShellBottomPeakStress.IsSolved)                                                     | Gets the IsSolved.                                                                                                                                                                                  |
| [`ItemType`](#ShellBottomPeakStress.ItemType)                                                     | Gets or sets the ItemType.                                                                                                                                                                          |
| [`IterationNumber`](#ShellBottomPeakStress.IterationNumber)                                       | Gets the IterationNumber.                                                                                                                                                                           |
| [`IterationStep`](#ShellBottomPeakStress.IterationStep)                                           | Gets or sets the IterationStep.                                                                                                                                                                     |
| [`Layer`](#ShellBottomPeakStress.Layer)                                                           | Gets or sets the Layer.                                                                                                                                                                             |
| [`Linearized2DBehavior`](#ShellBottomPeakStress.Linearized2DBehavior)                             | Gets or sets the Linearized2DBehavior.                                                                                                                                                              |
| [`LoadMultiplier`](#ShellBottomPeakStress.LoadMultiplier)                                         | Gets the LoadMultiplier.                                                                                                                                                                            |
| [`LoadStep`](#ShellBottomPeakStress.LoadStep)                                                     | Gets the LoadStep.                                                                                                                                                                                  |
| [`LoadStepForMaximumOfMaximumValues`](#ShellBottomPeakStress.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                                                                                                                |
| [`LoadStepForMaximumOfMinimumValues`](#ShellBottomPeakStress.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMaximumValues`](#ShellBottomPeakStress.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMinimumValues`](#ShellBottomPeakStress.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                                                                                                                |
| [`LoadStepNumber`](#ShellBottomPeakStress.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                                                                                                                    |
| [`Location`](#ShellBottomPeakStress.Location)                                                     | Gets or sets the Location.                                                                                                                                                                          |
| [`Maximum`](#ShellBottomPeakStress.Maximum)                                                       | Gets the Maximum.                                                                                                                                                                                   |
| [`MaximumOccursOn`](#ShellBottomPeakStress.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                                                                                                           |
| [`MaximumOfMaximumOverTime`](#ShellBottomPeakStress.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                                                                                                                  |
| [`MaximumOfMinimumOverTime`](#ShellBottomPeakStress.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                                                                                                                  |
| [`Membrane`](#ShellBottomPeakStress.Membrane)                                                     | Gets the Membrane.                                                                                                                                                                                  |
| [`MembraneBendingCenter`](#ShellBottomPeakStress.MembraneBendingCenter)                           | Gets the MembraneBendingCenter.                                                                                                                                                                     |
| [`MembraneBendingInside`](#ShellBottomPeakStress.MembraneBendingInside)                           | Gets the MembraneBendingInside.                                                                                                                                                                     |
| [`MembraneBendingOutside`](#ShellBottomPeakStress.MembraneBendingOutside)                         | Gets the MembraneBendingOutside.                                                                                                                                                                    |
| [`Minimum`](#ShellBottomPeakStress.Minimum)                                                       | Gets the Minimum.                                                                                                                                                                                   |
| [`MinimumOccursOn`](#ShellBottomPeakStress.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                                                                                                           |
| [`MinimumOfMaximumOverTime`](#ShellBottomPeakStress.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                                                                                                                  |
| [`MinimumOfMinimumOverTime`](#ShellBottomPeakStress.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                                                                                                                  |
| [`Mode`](#ShellBottomPeakStress.Mode)                                                             | Gets or sets the Mode.                                                                                                                                                                              |
| [`Name`](#ShellBottomPeakStress.Name)                                                             | Name property.                                                                                                                                                                                      |
| [`NamedSelections`](#NamedSelections)                                     | Gets or sets the NamedSelections.                                                                                                                                                                   |
| [`NormalOrientation`](#ShellBottomPeakStress.NormalOrientation)                                   | Gets or sets the NormalOrientation.                                                                                                                                                                 |
| [`ObjectId`](#ShellBottomPeakStress.ObjectId)                                                     | ObjectId property.                                                                                                                                                                                  |
| [`ObjectState`](#ShellBottomPeakStress.ObjectState)                                               | ObjectState property.                                                                                                                                                                               |
| [`ObjectTags`](#ShellBottomPeakStress.ObjectTags)                                                 | ObjectTags property.                                                                                                                                                                                |
| [`Parent`](#ShellBottomPeakStress.Parent)                                                         | Parent property.                                                                                                                                                                                    |
| [`Path`](#Path)                                                                      | Path property.                                                                                                                                                                                      |
| [`PeakCenter`](#ShellBottomPeakStress.PeakCenter)                                                 | Gets the PeakCenter.                                                                                                                                                                                |
| [`PeakInside`](#ShellBottomPeakStress.PeakInside)                                                 | Gets the PeakInside.                                                                                                                                                                                |
| [`PeakOutside`](#ShellBottomPeakStress.PeakOutside)                                               | Gets the PeakOutside.                                                                                                                                                                               |
| [`PhaseIncrement`](#ShellBottomPeakStress.PhaseIncrement)                                         | Gets or sets the PhaseIncrement.                                                                                                                                                                    |
| [`Plies`](#ShellBottomPeakStress.Plies)                                                           | Plies property.                                                                                                                                                                                     |
| [`PlotData`](#ShellBottomPeakStress.PlotData)                                                     | Gets the result table.                                                                                                                                                                              |
| [`Ply`](#ShellBottomPeakStress.Ply)                                                               | Gets or sets the Ply selection.                                                                                                                                                                     |
| [`Position`](#Position)                                                | Gets or sets the Position.                                                                                                                                                                          |
| [`Probability`](#ShellBottomPeakStress.Probability)                                               | Gets the Probability.                                                                                                                                                                               |
| [`Properties`](#ShellBottomPeakStress.Properties)                                                 | Gets the list of properties for this object.                                                                                                                                                        |
| [`RPMSelection`](#ShellBottomPeakStress.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                                            |
| [`ReportedFrequency`](#ShellBottomPeakStress.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                                                                                                                         |
| [`ResultType`](#ShellBottomPeakStress.ResultType)                                                 | Gets or sets the ResultType.                                                                                                                                                                        |
| [`RpmSetNumber`](#ShellBottomPeakStress.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                                                                                                                      |
| [`SaveAuxiliaryResult`](#ShellBottomPeakStress.SaveAuxiliaryResult)                               | Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise. |
| [`ScaleFactor`](#ShellBottomPeakStress.ScaleFactor)                                               | Gets or sets the ScaleFactor.                                                                                                                                                                       |
| [`ScopingMethod`](#ShellBottomPeakStress.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                                                                                                                     |
| [`SeparateDataByEntity`](#ShellBottomPeakStress.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                                                                                                              |
| [`SetNumber`](#ShellBottomPeakStress.SetNumber)                                                   | Gets or sets the Set Number.                                                                                                                                                                        |
| [`ShellMBPType`](#ShellBottomPeakStress.ShellMBPType)                                             | Gets the ShellMBPType.                                                                                                                                                                              |
| [`SolutionCombinationDriver`](#ShellBottomPeakStress.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                                                                                                                         |
| [`SolverComponentIDs`](#ShellBottomPeakStress.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                                                                                                                |
| [`State`](#ShellBottomPeakStress.State)                                                           | State property.                                                                                                                                                                                     |
| [`StressStrainType`](#ShellBottomPeakStress.StressStrainType)                                     | Gets or sets the StressStrainType.                                                                                                                                                                  |
| [`SubScopeBy`](#ShellBottomPeakStress.SubScopeBy)                                                 | Gets or sets the SubScopeBy.                                                                                                                                                                        |
| [`Substep`](#ShellBottomPeakStress.Substep)                                                       | Gets the Substep.                                                                                                                                                                                   |
| [`Subtype`](#ShellBottomPeakStress.Subtype)                                                       | Gets or sets the Subtype.                                                                                                                                                                           |
| [`Suppressed`](#ShellBottomPeakStress.Suppressed)                                                 | Gets or sets the Suppressed.                                                                                                                                                                        |
| [`Surface`](#Surface)                                                             | Surface property.                                                                                                                                                                                   |
| [`SurfaceCoating`](#SurfaceCoating)                                        | SurfaceCoating property.                                                                                                                                                                            |
| [`SweepingPhase`](#ShellBottomPeakStress.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                                                                                                                     |
| [`TabularData`](#ShellBottomPeakStress.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.                                                                                                        |
| [`ThroughThicknessBendingStress`](#ShellBottomPeakStress.ThroughThicknessBendingStress)           | Gets or sets the ThroughThicknessBendingStress.                                                                                                                                                     |
| [`Time`](#ShellBottomPeakStress.Time)                                                             | Gets the Time.                                                                                                                                                                                      |
| [`TimeForMaximumOfMaximumValues`](#ShellBottomPeakStress.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                                                                                                                     |
| [`TimeForMaximumOfMinimumValues`](#ShellBottomPeakStress.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                                                                                                                     |
| [`TimeForMinimumOfMaximumValues`](#ShellBottomPeakStress.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                                                                                                                     |
| [`TimeForMinimumOfMinimumValues`](#ShellBottomPeakStress.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                                                                                                                     |
| [`Total`](#ShellBottomPeakStress.Total)                                                           | Gets the Total.                                                                                                                                                                                     |
| [`TotalCenter`](#ShellBottomPeakStress.TotalCenter)                                               | Gets the TotalCenter.                                                                                                                                                                               |
| [`TotalInside`](#ShellBottomPeakStress.TotalInside)                                               | Gets the TotalInside.                                                                                                                                                                               |
| [`TotalOutside`](#ShellBottomPeakStress.TotalOutside)                                             | Gets the TotalOutside.                                                                                                                                                                              |
| [`VisibleProperties`](#ShellBottomPeakStress.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                                                                                                                       |
| [`WaterfallDisplayFilterBy`](#ShellBottomPeakStress.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                                                                                                                |
| [`WaterfallDisplayFrequencySelection`](#ShellBottomPeakStress.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                                                                                                               |
| [`WaterfallDisplayInterpolateData`](#ShellBottomPeakStress.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                                                                                                                         |
| [`WaterfallDisplayLowerBand`](#ShellBottomPeakStress.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayMaxRPM`](#ShellBottomPeakStress.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                                                                                                                   |
| [`WaterfallDisplayMinRPM`](#ShellBottomPeakStress.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                                                                                                                   |
| [`WaterfallDisplayModeSelection`](#ShellBottomPeakStress.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                                                                                                                    |
| [`WaterfallDisplayOrderSelection`](#ShellBottomPeakStress.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                                                                                                                   |
| [`WaterfallDisplayRpmSelection`](#ShellBottomPeakStress.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                                                                                                                     |
| [`WaterfallDisplayScopeToOrderLines`](#ShellBottomPeakStress.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                                                                                                                     |
| [`WaterfallDisplayTimeSelection`](#ShellBottomPeakStress.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                                                                                                                    |
| [`WaterfallDisplayUpperBand`](#ShellBottomPeakStress.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayXAxisMaximum`](#ShellBottomPeakStress.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayXAxisMinimum`](#ShellBottomPeakStress.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMaximum`](#ShellBottomPeakStress.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMinimum`](#ShellBottomPeakStress.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallShowTextOnMosaic`](#ShellBottomPeakStress.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                                                                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="ShellBottomPeakStress.Amplitude"></a>

### *property* ShellBottomPeakStress.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AttachedRefs"></a>

### *property* ShellBottomPeakStress.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Average"></a>

### *property* ShellBottomPeakStress.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AverageAcrossBodies"></a>

### *property* ShellBottomPeakStress.AverageAcrossBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AverageRadiusOfCurvature"></a>

### *property* ShellBottomPeakStress.AverageRadiusOfCurvature *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.BendingInside"></a>

### *property* ShellBottomPeakStress.BendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.BendingOutside"></a>

### *property* ShellBottomPeakStress.BendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.By"></a>

### *property* ShellBottomPeakStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CalculateTimeHistory"></a>

### *property* ShellBottomPeakStress.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Children"></a>

### *property* ShellBottomPeakStress.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ClsId"></a>

### *property* ShellBottomPeakStress.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CombinationNumber"></a>

### *property* ShellBottomPeakStress.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Comments"></a>

### *property* ShellBottomPeakStress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CoordinateSystem"></a>

### *property* ShellBottomPeakStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CrackFrontNumber"></a>

### *property* ShellBottomPeakStress.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CyclicMode"></a>

### *property* ShellBottomPeakStress.CyclicMode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DataModelObjectCategory"></a>

### *property* ShellBottomPeakStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DisplayOption"></a>

### *property* ShellBottomPeakStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DisplayTime"></a>

### *property* ShellBottomPeakStress.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DpfEvaluation"></a>

### *property* ShellBottomPeakStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.EnvironmentSelection"></a>

### *property* ShellBottomPeakStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Figures"></a>

### *property* ShellBottomPeakStress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Frequency"></a>

### *property* ShellBottomPeakStress.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GlobalIDs"></a>

### *property* ShellBottomPeakStress.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GraphControlsXAxis"></a>

### *property* ShellBottomPeakStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GroupingFolder"></a>

### *property* ShellBottomPeakStress.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.HarmonicIndex"></a>

### *property* ShellBottomPeakStress.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.IconName"></a>

### *property* ShellBottomPeakStress.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Identifier"></a>

### *property* ShellBottomPeakStress.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Images"></a>

### *property* ShellBottomPeakStress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.InternalObject"></a>

### *property* ShellBottomPeakStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.IsSolved"></a>

### *property* ShellBottomPeakStress.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ItemType"></a>

### *property* ShellBottomPeakStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.IterationNumber"></a>

### *property* ShellBottomPeakStress.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.IterationStep"></a>

### *property* ShellBottomPeakStress.IterationStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Layer"></a>

### *property* ShellBottomPeakStress.Layer *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Linearized2DBehavior"></a>

### *property* ShellBottomPeakStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadMultiplier"></a>

### *property* ShellBottomPeakStress.LoadMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStep"></a>

### *property* ShellBottomPeakStress.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* ShellBottomPeakStress.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* ShellBottomPeakStress.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* ShellBottomPeakStress.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* ShellBottomPeakStress.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.LoadStepNumber"></a>

### *property* ShellBottomPeakStress.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Location"></a>

### *property* ShellBottomPeakStress.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Maximum"></a>

### *property* ShellBottomPeakStress.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MaximumOccursOn"></a>

### *property* ShellBottomPeakStress.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MaximumOfMaximumOverTime"></a>

### *property* ShellBottomPeakStress.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MaximumOfMinimumOverTime"></a>

### *property* ShellBottomPeakStress.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Membrane"></a>

### *property* ShellBottomPeakStress.Membrane *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MembraneBendingCenter"></a>

### *property* ShellBottomPeakStress.MembraneBendingCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MembraneBendingInside"></a>

### *property* ShellBottomPeakStress.MembraneBendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MembraneBendingOutside"></a>

### *property* ShellBottomPeakStress.MembraneBendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Minimum"></a>

### *property* ShellBottomPeakStress.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MinimumOccursOn"></a>

### *property* ShellBottomPeakStress.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MinimumOfMaximumOverTime"></a>

### *property* ShellBottomPeakStress.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.MinimumOfMinimumOverTime"></a>

### *property* ShellBottomPeakStress.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Mode"></a>

### *property* ShellBottomPeakStress.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Name"></a>

### *property* ShellBottomPeakStress.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.NamedSelections"></a>

### *property* ShellBottomPeakStress.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.NormalOrientation"></a>

### *property* ShellBottomPeakStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.ShellMBPOrientationType](../../../../../Mechanical/DataModel/Enums/ShellMBPOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellMBPOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ObjectId"></a>

### *property* ShellBottomPeakStress.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ObjectState"></a>

### *property* ShellBottomPeakStress.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ObjectTags"></a>

### *property* ShellBottomPeakStress.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Parent"></a>

### *property* ShellBottomPeakStress.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Path"></a>

### *property* ShellBottomPeakStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PeakCenter"></a>

### *property* ShellBottomPeakStress.PeakCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PeakInside"></a>

### *property* ShellBottomPeakStress.PeakInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PeakOutside"></a>

### *property* ShellBottomPeakStress.PeakOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PhaseIncrement"></a>

### *property* ShellBottomPeakStress.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Plies"></a>

### *property* ShellBottomPeakStress.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PlotData"></a>

### *property* ShellBottomPeakStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Ply"></a>

### *property* ShellBottomPeakStress.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Position"></a>

### *property* ShellBottomPeakStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Probability"></a>

### *property* ShellBottomPeakStress.Probability *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Properties"></a>

### *property* ShellBottomPeakStress.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.RPMSelection"></a>

### *property* ShellBottomPeakStress.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ReportedFrequency"></a>

### *property* ShellBottomPeakStress.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ResultType"></a>

### *property* ShellBottomPeakStress.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.RpmSetNumber"></a>

### *property* ShellBottomPeakStress.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SaveAuxiliaryResult"></a>

### *property* ShellBottomPeakStress.SaveAuxiliaryResult *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise.
Saving result data to disk improves result retrieval and display performance.
Note: The project file size will increase.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ScaleFactor"></a>

### *property* ShellBottomPeakStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ScopingMethod"></a>

### *property* ShellBottomPeakStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SeparateDataByEntity"></a>

### *property* ShellBottomPeakStress.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SetNumber"></a>

### *property* ShellBottomPeakStress.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ShellMBPType"></a>

### *property* ShellBottomPeakStress.ShellMBPType *: [Ansys.Mechanical.DataModel.Enums.ShellMBPType](../../../../../Mechanical/DataModel/Enums/ShellMBPType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellMBPType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ShellMBPType.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SolutionCombinationDriver"></a>

### *property* ShellBottomPeakStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SolverComponentIDs"></a>

### *property* ShellBottomPeakStress.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.State"></a>

### *property* ShellBottomPeakStress.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.StressStrainType"></a>

### *property* ShellBottomPeakStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SubScopeBy"></a>

### *property* ShellBottomPeakStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Substep"></a>

### *property* ShellBottomPeakStress.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Subtype"></a>

### *property* ShellBottomPeakStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Suppressed"></a>

### *property* ShellBottomPeakStress.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Surface"></a>

### *property* ShellBottomPeakStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SurfaceCoating"></a>

### *property* ShellBottomPeakStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.SweepingPhase"></a>

### *property* ShellBottomPeakStress.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TabularData"></a>

### *property* ShellBottomPeakStress.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ThroughThicknessBendingStress"></a>

### *property* ShellBottomPeakStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Time"></a>

### *property* ShellBottomPeakStress.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TimeForMaximumOfMaximumValues"></a>

### *property* ShellBottomPeakStress.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TimeForMaximumOfMinimumValues"></a>

### *property* ShellBottomPeakStress.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TimeForMinimumOfMaximumValues"></a>

### *property* ShellBottomPeakStress.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TimeForMinimumOfMinimumValues"></a>

### *property* ShellBottomPeakStress.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Total"></a>

### *property* ShellBottomPeakStress.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TotalCenter"></a>

### *property* ShellBottomPeakStress.TotalCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TotalInside"></a>

### *property* ShellBottomPeakStress.TotalInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.TotalOutside"></a>

### *property* ShellBottomPeakStress.TotalOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.VisibleProperties"></a>

### *property* ShellBottomPeakStress.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayFilterBy"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayFrequencySelection"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayInterpolateData"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayLowerBand"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayMaxRPM"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayMinRPM"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayModeSelection"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayOrderSelection"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayRpmSelection"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayScopeToOrderLines"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayTimeSelection"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayUpperBand"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayXAxisMaximum"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayXAxisMinimum"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayYAxisMaximum"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallDisplayYAxisMinimum"></a>

### *property* ShellBottomPeakStress.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.WaterfallShowTextOnMosaic"></a>

### *property* ShellBottomPeakStress.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ShellBottomPeakStress.Activate"></a>

### ShellBottomPeakStress.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddAlert"></a>

### ShellBottomPeakStress.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddComment"></a>

### ShellBottomPeakStress.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddConvergence"></a>

### ShellBottomPeakStress.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddFigure"></a>

### ShellBottomPeakStress.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.AddImage"></a>

### ShellBottomPeakStress.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.BodyWhereMaximumOccurs"></a>

### ShellBottomPeakStress.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ClearGeneratedData"></a>

### ShellBottomPeakStress.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Copy"></a>

### ShellBottomPeakStress.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CopyTo"></a>

### ShellBottomPeakStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CreateObjRef"></a>

### ShellBottomPeakStress.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CreateParameter"></a>

### ShellBottomPeakStress.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.CreateResultsAtAllSets"></a>

### ShellBottomPeakStress.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Cut"></a>

### ShellBottomPeakStress.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Delete"></a>

### ShellBottomPeakStress.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Duplicate"></a>

### ShellBottomPeakStress.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.DuplicateWithoutResults"></a>

### ShellBottomPeakStress.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Equals"></a>

### ShellBottomPeakStress.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.EvaluateAllResults"></a>

### ShellBottomPeakStress.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ExportAnimation"></a>

### ShellBottomPeakStress.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ExportToSTLFile"></a>

### ShellBottomPeakStress.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.ExportToTextFile"></a>

### ShellBottomPeakStress.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ShellBottomPeakStress.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.FetchRemoteResult"></a>

### ShellBottomPeakStress.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.FetchRemoteResults"></a>

### ShellBottomPeakStress.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetAPIName"></a>

### ShellBottomPeakStress.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetAllProperties"></a>

### ShellBottomPeakStress.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetChildren"></a>

### ShellBottomPeakStress.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ShellBottomPeakStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetDetailsView"></a>

### ShellBottomPeakStress.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetEnumName"></a>

### ShellBottomPeakStress.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetHashCode"></a>

### ShellBottomPeakStress.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetIconFile"></a>

### ShellBottomPeakStress.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetLifetimeService"></a>

### ShellBottomPeakStress.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetNodalValues"></a>

### ShellBottomPeakStress.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetObjectData"></a>

### ShellBottomPeakStress.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetParameter"></a>

### ShellBottomPeakStress.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetPath"></a>

### ShellBottomPeakStress.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetPropertyName"></a>

### ShellBottomPeakStress.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetPropertyValue"></a>

### ShellBottomPeakStress.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetQuantityName"></a>

### ShellBottomPeakStress.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetVisibleProperties"></a>

### ShellBottomPeakStress.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GetVisiblePropertyNames"></a>

### ShellBottomPeakStress.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GroupAllSimilarChildren"></a>

### ShellBottomPeakStress.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.GroupSimilarObjects"></a>

### ShellBottomPeakStress.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.InitializeLifetimeService"></a>

### ShellBottomPeakStress.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.IsPropertyEditable"></a>

### ShellBottomPeakStress.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ShellBottomPeakStress.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.IsPropertyVisible"></a>

### ShellBottomPeakStress.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ShellBottomPeakStress.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.Paste"></a>

### ShellBottomPeakStress.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PromoteToNamedSelection"></a>

### ShellBottomPeakStress.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PropertyByAPIName"></a>

### ShellBottomPeakStress.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PropertyById"></a>

### ShellBottomPeakStress.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.PropertyByName"></a>

### ShellBottomPeakStress.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.RemoveFromGroup"></a>

### ShellBottomPeakStress.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.RemoveParameter"></a>

### ShellBottomPeakStress.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.RenameBasedOnDefinition"></a>

### ShellBottomPeakStress.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.RetrieveRemoteDPFResults"></a>

### ShellBottomPeakStress.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="ShellBottomPeakStress.RetrieveResult"></a>

### ShellBottomPeakStress.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

