# `MinimumPrincipalStress`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.StressResults.MinimumPrincipalStress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressResults.MinimumPrincipalStress(internalObject: Any)

<a id="MinimumPrincipalStress"></a>

### *class* MinimumPrincipalStress(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MinimumPrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MinimumPrincipalStress.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#MinimumPrincipalStress.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#MinimumPrincipalStress.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#MinimumPrincipalStress.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#MinimumPrincipalStress.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MinimumPrincipalStress.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#MinimumPrincipalStress.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#MinimumPrincipalStress.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#MinimumPrincipalStress.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MinimumPrincipalStress.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MinimumPrincipalStress.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MinimumPrincipalStress.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#MinimumPrincipalStress.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#MinimumPrincipalStress.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MinimumPrincipalStress.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MinimumPrincipalStress.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#MinimumPrincipalStress.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#MinimumPrincipalStress.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#MinimumPrincipalStress.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#MinimumPrincipalStress.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#MinimumPrincipalStress.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#MinimumPrincipalStress.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#MinimumPrincipalStress.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#MinimumPrincipalStress.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#MinimumPrincipalStress.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#MinimumPrincipalStress.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MinimumPrincipalStress.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MinimumPrincipalStress.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MinimumPrincipalStress.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MinimumPrincipalStress.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MinimumPrincipalStress.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MinimumPrincipalStress.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#MinimumPrincipalStress.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#MinimumPrincipalStress.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MinimumPrincipalStress.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MinimumPrincipalStress.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MinimumPrincipalStress.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MinimumPrincipalStress.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#MinimumPrincipalStress.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#MinimumPrincipalStress.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MinimumPrincipalStress.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MinimumPrincipalStress.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MinimumPrincipalStress.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MinimumPrincipalStress.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MinimumPrincipalStress.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MinimumPrincipalStress.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MinimumPrincipalStress.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#MinimumPrincipalStress.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#MinimumPrincipalStress.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MinimumPrincipalStress.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MinimumPrincipalStress.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MinimumPrincipalStress.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MinimumPrincipalStress.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MinimumPrincipalStress.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#MinimumPrincipalStress.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#MinimumPrincipalStress.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#MinimumPrincipalStress.Amplitude)                                                   | Gets or sets the Amplitude.                                                                                                                                                                         |
| [`AttachedRefs`](#MinimumPrincipalStress.AttachedRefs)                                             | AttachedRefs property.                                                                                                                                                                              |
| [`Average`](#MinimumPrincipalStress.Average)                                                       | Gets the Average.                                                                                                                                                                                   |
| [`AverageAcrossBodies`](#MinimumPrincipalStress.AverageAcrossBodies)                               | Gets or sets the AverageAcrossBodies.                                                                                                                                                               |
| [`AverageRadiusOfCurvature`](#MinimumPrincipalStress.AverageRadiusOfCurvature)                     | Gets or sets the AverageRadiusOfCurvature.                                                                                                                                                          |
| [`BendingInside`](#MinimumPrincipalStress.BendingInside)                                           | Gets the BendingInside.                                                                                                                                                                             |
| [`BendingOutside`](#MinimumPrincipalStress.BendingOutside)                                         | Gets the BendingOutside.                                                                                                                                                                            |
| [`By`](#MinimumPrincipalStress.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                                            |
| [`CalculateTimeHistory`](#MinimumPrincipalStress.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                                                                                                              |
| [`Children`](#MinimumPrincipalStress.Children)                                                     | Gets the list of children.                                                                                                                                                                          |
| [`ClsId`](#MinimumPrincipalStress.ClsId)                                                           | ClsId property.                                                                                                                                                                                     |
| [`CombinationNumber`](#MinimumPrincipalStress.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                                                                                                              |
| [`Comments`](#MinimumPrincipalStress.Comments)                                                     | Gets the list of associated comments.                                                                                                                                                               |
| [`CoordinateSystem`](#CoordinateSystem)                                   | Gets or sets the Coordinate System.                                                                                                                                                                 |
| [`CrackFrontNumber`](#MinimumPrincipalStress.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                                                                                                                  |
| [`CyclicMode`](#MinimumPrincipalStress.CyclicMode)                                                 | Gets or sets the CyclicMode.                                                                                                                                                                        |
| [`DataModelObjectCategory`](#MinimumPrincipalStress.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                                                                                                                        |
| [`DisplayOption`](#MinimumPrincipalStress.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                                                                                                                     |
| [`DisplayTime`](#MinimumPrincipalStress.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                                                                                                                       |
| [`DpfEvaluation`](#MinimumPrincipalStress.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                                                                                                                     |
| [`EnvironmentSelection`](#MinimumPrincipalStress.EnvironmentSelection)                             | Gets or sets the EnvironmentSelection.                                                                                                                                                              |
| [`Figures`](#MinimumPrincipalStress.Figures)                                                       | Gets the list of associated figures.                                                                                                                                                                |
| [`Frequency`](#MinimumPrincipalStress.Frequency)                                                   | Gets or sets the Frequency.                                                                                                                                                                         |
| [`GlobalIDs`](#MinimumPrincipalStress.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                                                                                                                         |
| [`GraphControlsXAxis`](#MinimumPrincipalStress.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                                                                                                                |
| [`GroupingFolder`](#MinimumPrincipalStress.GroupingFolder)                                         | GroupingFolder property.                                                                                                                                                                            |
| [`HarmonicIndex`](#MinimumPrincipalStress.HarmonicIndex)                                           | Gets or sets the HarmonicIndex.                                                                                                                                                                     |
| [`IconName`](#MinimumPrincipalStress.IconName)                                                     | IconName property.                                                                                                                                                                                  |
| [`Identifier`](#MinimumPrincipalStress.Identifier)                                                 | Gets or sets the Identifier.                                                                                                                                                                        |
| [`Images`](#MinimumPrincipalStress.Images)                                                         | Gets the list of associated images.                                                                                                                                                                 |
| [`InternalObject`](#MinimumPrincipalStress.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                                                                                                                  |
| [`IsSolved`](#MinimumPrincipalStress.IsSolved)                                                     | Gets the IsSolved.                                                                                                                                                                                  |
| [`ItemType`](#MinimumPrincipalStress.ItemType)                                                     | Gets or sets the ItemType.                                                                                                                                                                          |
| [`IterationNumber`](#MinimumPrincipalStress.IterationNumber)                                       | Gets the IterationNumber.                                                                                                                                                                           |
| [`IterationStep`](#MinimumPrincipalStress.IterationStep)                                           | Gets or sets the IterationStep.                                                                                                                                                                     |
| [`Layer`](#MinimumPrincipalStress.Layer)                                                           | Gets or sets the Layer.                                                                                                                                                                             |
| [`Linearized2DBehavior`](#MinimumPrincipalStress.Linearized2DBehavior)                             | Gets or sets the Linearized2DBehavior.                                                                                                                                                              |
| [`LoadMultiplier`](#MinimumPrincipalStress.LoadMultiplier)                                         | Gets the LoadMultiplier.                                                                                                                                                                            |
| [`LoadStep`](#MinimumPrincipalStress.LoadStep)                                                     | Gets the LoadStep.                                                                                                                                                                                  |
| [`LoadStepForMaximumOfMaximumValues`](#MinimumPrincipalStress.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                                                                                                                |
| [`LoadStepForMaximumOfMinimumValues`](#MinimumPrincipalStress.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMaximumValues`](#MinimumPrincipalStress.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                                                                                                                |
| [`LoadStepForMinimumOfMinimumValues`](#MinimumPrincipalStress.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                                                                                                                |
| [`LoadStepNumber`](#MinimumPrincipalStress.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                                                                                                                    |
| [`Location`](#MinimumPrincipalStress.Location)                                                     | Gets or sets the Location.                                                                                                                                                                          |
| [`Maximum`](#MinimumPrincipalStress.Maximum)                                                       | Gets the Maximum.                                                                                                                                                                                   |
| [`MaximumOccursOn`](#MinimumPrincipalStress.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                                                                                                           |
| [`MaximumOfMaximumOverTime`](#MinimumPrincipalStress.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                                                                                                                  |
| [`MaximumOfMinimumOverTime`](#MinimumPrincipalStress.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                                                                                                                  |
| [`Membrane`](#MinimumPrincipalStress.Membrane)                                                     | Gets the Membrane.                                                                                                                                                                                  |
| [`MembraneBendingCenter`](#MinimumPrincipalStress.MembraneBendingCenter)                           | Gets the MembraneBendingCenter.                                                                                                                                                                     |
| [`MembraneBendingInside`](#MinimumPrincipalStress.MembraneBendingInside)                           | Gets the MembraneBendingInside.                                                                                                                                                                     |
| [`MembraneBendingOutside`](#MinimumPrincipalStress.MembraneBendingOutside)                         | Gets the MembraneBendingOutside.                                                                                                                                                                    |
| [`Minimum`](#MinimumPrincipalStress.Minimum)                                                       | Gets the Minimum.                                                                                                                                                                                   |
| [`MinimumOccursOn`](#MinimumPrincipalStress.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                                                                                                           |
| [`MinimumOfMaximumOverTime`](#MinimumPrincipalStress.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                                                                                                                  |
| [`MinimumOfMinimumOverTime`](#MinimumPrincipalStress.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                                                                                                                  |
| [`Mode`](#MinimumPrincipalStress.Mode)                                                             | Gets or sets the Mode.                                                                                                                                                                              |
| [`Name`](#MinimumPrincipalStress.Name)                                                             | Name property.                                                                                                                                                                                      |
| [`NamedSelections`](#NamedSelections)                                      | Gets or sets the NamedSelections.                                                                                                                                                                   |
| [`NormalOrientation`](#MinimumPrincipalStress.NormalOrientation)                                   | Gets or sets the NormalOrientation.                                                                                                                                                                 |
| [`ObjectId`](#MinimumPrincipalStress.ObjectId)                                                     | ObjectId property.                                                                                                                                                                                  |
| [`ObjectState`](#MinimumPrincipalStress.ObjectState)                                               | ObjectState property.                                                                                                                                                                               |
| [`ObjectTags`](#MinimumPrincipalStress.ObjectTags)                                                 | ObjectTags property.                                                                                                                                                                                |
| [`Parent`](#MinimumPrincipalStress.Parent)                                                         | Parent property.                                                                                                                                                                                    |
| [`Path`](#Path)                                                                       | Path property.                                                                                                                                                                                      |
| [`PeakCenter`](#MinimumPrincipalStress.PeakCenter)                                                 | Gets the PeakCenter.                                                                                                                                                                                |
| [`PeakInside`](#MinimumPrincipalStress.PeakInside)                                                 | Gets the PeakInside.                                                                                                                                                                                |
| [`PeakOutside`](#MinimumPrincipalStress.PeakOutside)                                               | Gets the PeakOutside.                                                                                                                                                                               |
| [`PhaseIncrement`](#MinimumPrincipalStress.PhaseIncrement)                                         | Gets or sets the PhaseIncrement.                                                                                                                                                                    |
| [`Plies`](#MinimumPrincipalStress.Plies)                                                           | Plies property.                                                                                                                                                                                     |
| [`PlotData`](#MinimumPrincipalStress.PlotData)                                                     | Gets the result table.                                                                                                                                                                              |
| [`Ply`](#MinimumPrincipalStress.Ply)                                                               | Gets or sets the Ply selection.                                                                                                                                                                     |
| [`Position`](#Position)                                                 | Gets or sets the Position.                                                                                                                                                                          |
| [`Probability`](#MinimumPrincipalStress.Probability)                                               | Gets the Probability.                                                                                                                                                                               |
| [`Properties`](#MinimumPrincipalStress.Properties)                                                 | Gets the list of properties for this object.                                                                                                                                                        |
| [`RPMSelection`](#MinimumPrincipalStress.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                                            |
| [`ReportedFrequency`](#MinimumPrincipalStress.ReportedFrequency)                                   | Gets the ReportedFrequency.                                                                                                                                                                         |
| [`ResultType`](#MinimumPrincipalStress.ResultType)                                                 | Gets or sets the ResultType.                                                                                                                                                                        |
| [`RpmSetNumber`](#MinimumPrincipalStress.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                                                                                                                      |
| [`SaveAuxiliaryResult`](#MinimumPrincipalStress.SaveAuxiliaryResult)                               | Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise. |
| [`ScaleFactor`](#MinimumPrincipalStress.ScaleFactor)                                               | Gets or sets the ScaleFactor.                                                                                                                                                                       |
| [`ScopingMethod`](#MinimumPrincipalStress.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                                                                                                                     |
| [`SeparateDataByEntity`](#MinimumPrincipalStress.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                                                                                                              |
| [`SetNumber`](#MinimumPrincipalStress.SetNumber)                                                   | Gets or sets the Set Number.                                                                                                                                                                        |
| [`SolutionCombinationDriver`](#MinimumPrincipalStress.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                                                                                                                         |
| [`SolverComponentIDs`](#MinimumPrincipalStress.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                                                                                                                |
| [`State`](#MinimumPrincipalStress.State)                                                           | State property.                                                                                                                                                                                     |
| [`StressStrainType`](#MinimumPrincipalStress.StressStrainType)                                     | Gets or sets the StressStrainType.                                                                                                                                                                  |
| [`SubScopeBy`](#MinimumPrincipalStress.SubScopeBy)                                                 | Gets or sets the SubScopeBy.                                                                                                                                                                        |
| [`Substep`](#MinimumPrincipalStress.Substep)                                                       | Gets the Substep.                                                                                                                                                                                   |
| [`Subtype`](#MinimumPrincipalStress.Subtype)                                                       | Gets or sets the Subtype.                                                                                                                                                                           |
| [`Suppressed`](#MinimumPrincipalStress.Suppressed)                                                 | Gets or sets the Suppressed.                                                                                                                                                                        |
| [`Surface`](#Surface)                                                              | Surface property.                                                                                                                                                                                   |
| [`SurfaceCoating`](#SurfaceCoating)                                         | SurfaceCoating property.                                                                                                                                                                            |
| [`SweepingPhase`](#MinimumPrincipalStress.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                                                                                                                     |
| [`TabularData`](#MinimumPrincipalStress.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.                                                                                                        |
| [`ThroughThicknessBendingStress`](#MinimumPrincipalStress.ThroughThicknessBendingStress)           | Gets or sets the ThroughThicknessBendingStress.                                                                                                                                                     |
| [`Time`](#MinimumPrincipalStress.Time)                                                             | Gets the Time.                                                                                                                                                                                      |
| [`TimeForMaximumOfMaximumValues`](#MinimumPrincipalStress.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                                                                                                                     |
| [`TimeForMaximumOfMinimumValues`](#MinimumPrincipalStress.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                                                                                                                     |
| [`TimeForMinimumOfMaximumValues`](#MinimumPrincipalStress.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                                                                                                                     |
| [`TimeForMinimumOfMinimumValues`](#MinimumPrincipalStress.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                                                                                                                     |
| [`Total`](#MinimumPrincipalStress.Total)                                                           | Gets the Total.                                                                                                                                                                                     |
| [`TotalCenter`](#MinimumPrincipalStress.TotalCenter)                                               | Gets the TotalCenter.                                                                                                                                                                               |
| [`TotalInside`](#MinimumPrincipalStress.TotalInside)                                               | Gets the TotalInside.                                                                                                                                                                               |
| [`TotalOutside`](#MinimumPrincipalStress.TotalOutside)                                             | Gets the TotalOutside.                                                                                                                                                                              |
| [`VisibleProperties`](#MinimumPrincipalStress.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                                                                                                                       |
| [`WaterfallDisplayFilterBy`](#MinimumPrincipalStress.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                                                                                                                |
| [`WaterfallDisplayFrequencySelection`](#MinimumPrincipalStress.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                                                                                                               |
| [`WaterfallDisplayInterpolateData`](#MinimumPrincipalStress.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                                                                                                                         |
| [`WaterfallDisplayLowerBand`](#MinimumPrincipalStress.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayMaxRPM`](#MinimumPrincipalStress.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                                                                                                                   |
| [`WaterfallDisplayMinRPM`](#MinimumPrincipalStress.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                                                                                                                   |
| [`WaterfallDisplayModeSelection`](#MinimumPrincipalStress.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                                                                                                                    |
| [`WaterfallDisplayOrderSelection`](#MinimumPrincipalStress.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                                                                                                                   |
| [`WaterfallDisplayRpmSelection`](#MinimumPrincipalStress.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                                                                                                                     |
| [`WaterfallDisplayScopeToOrderLines`](#MinimumPrincipalStress.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                                                                                                                     |
| [`WaterfallDisplayTimeSelection`](#MinimumPrincipalStress.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                                                                                                                    |
| [`WaterfallDisplayUpperBand`](#MinimumPrincipalStress.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                                                                                                                  |
| [`WaterfallDisplayXAxisMaximum`](#MinimumPrincipalStress.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayXAxisMinimum`](#MinimumPrincipalStress.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMaximum`](#MinimumPrincipalStress.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallDisplayYAxisMinimum`](#MinimumPrincipalStress.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                                                                                                              |
| [`WaterfallShowTextOnMosaic`](#MinimumPrincipalStress.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                                                                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="MinimumPrincipalStress.Amplitude"></a>

### *property* MinimumPrincipalStress.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AttachedRefs"></a>

### *property* MinimumPrincipalStress.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Average"></a>

### *property* MinimumPrincipalStress.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AverageAcrossBodies"></a>

### *property* MinimumPrincipalStress.AverageAcrossBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AverageRadiusOfCurvature"></a>

### *property* MinimumPrincipalStress.AverageRadiusOfCurvature *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.BendingInside"></a>

### *property* MinimumPrincipalStress.BendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.BendingOutside"></a>

### *property* MinimumPrincipalStress.BendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.By"></a>

### *property* MinimumPrincipalStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CalculateTimeHistory"></a>

### *property* MinimumPrincipalStress.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Children"></a>

### *property* MinimumPrincipalStress.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ClsId"></a>

### *property* MinimumPrincipalStress.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CombinationNumber"></a>

### *property* MinimumPrincipalStress.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Comments"></a>

### *property* MinimumPrincipalStress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CoordinateSystem"></a>

### *property* MinimumPrincipalStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CrackFrontNumber"></a>

### *property* MinimumPrincipalStress.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CyclicMode"></a>

### *property* MinimumPrincipalStress.CyclicMode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CyclicMode.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.DataModelObjectCategory"></a>

### *property* MinimumPrincipalStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.DisplayOption"></a>

### *property* MinimumPrincipalStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.DisplayTime"></a>

### *property* MinimumPrincipalStress.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.DpfEvaluation"></a>

### *property* MinimumPrincipalStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.EnvironmentSelection"></a>

### *property* MinimumPrincipalStress.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](../../Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EnvironmentSelection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Figures"></a>

### *property* MinimumPrincipalStress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Frequency"></a>

### *property* MinimumPrincipalStress.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GlobalIDs"></a>

### *property* MinimumPrincipalStress.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GraphControlsXAxis"></a>

### *property* MinimumPrincipalStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GroupingFolder"></a>

### *property* MinimumPrincipalStress.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.HarmonicIndex"></a>

### *property* MinimumPrincipalStress.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.IconName"></a>

### *property* MinimumPrincipalStress.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Identifier"></a>

### *property* MinimumPrincipalStress.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Images"></a>

### *property* MinimumPrincipalStress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.InternalObject"></a>

### *property* MinimumPrincipalStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.IsSolved"></a>

### *property* MinimumPrincipalStress.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ItemType"></a>

### *property* MinimumPrincipalStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.IterationNumber"></a>

### *property* MinimumPrincipalStress.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.IterationStep"></a>

### *property* MinimumPrincipalStress.IterationStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IterationStep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Layer"></a>

### *property* MinimumPrincipalStress.Layer *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Linearized2DBehavior"></a>

### *property* MinimumPrincipalStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadMultiplier"></a>

### *property* MinimumPrincipalStress.LoadMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadStep"></a>

### *property* MinimumPrincipalStress.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* MinimumPrincipalStress.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* MinimumPrincipalStress.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* MinimumPrincipalStress.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* MinimumPrincipalStress.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.LoadStepNumber"></a>

### *property* MinimumPrincipalStress.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Location"></a>

### *property* MinimumPrincipalStress.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Maximum"></a>

### *property* MinimumPrincipalStress.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MaximumOccursOn"></a>

### *property* MinimumPrincipalStress.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MaximumOfMaximumOverTime"></a>

### *property* MinimumPrincipalStress.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MaximumOfMinimumOverTime"></a>

### *property* MinimumPrincipalStress.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Membrane"></a>

### *property* MinimumPrincipalStress.Membrane *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MembraneBendingCenter"></a>

### *property* MinimumPrincipalStress.MembraneBendingCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MembraneBendingInside"></a>

### *property* MinimumPrincipalStress.MembraneBendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MembraneBendingOutside"></a>

### *property* MinimumPrincipalStress.MembraneBendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Minimum"></a>

### *property* MinimumPrincipalStress.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MinimumOccursOn"></a>

### *property* MinimumPrincipalStress.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MinimumOfMaximumOverTime"></a>

### *property* MinimumPrincipalStress.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.MinimumOfMinimumOverTime"></a>

### *property* MinimumPrincipalStress.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Mode"></a>

### *property* MinimumPrincipalStress.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Name"></a>

### *property* MinimumPrincipalStress.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.NamedSelections"></a>

### *property* MinimumPrincipalStress.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.NormalOrientation"></a>

### *property* MinimumPrincipalStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ObjectId"></a>

### *property* MinimumPrincipalStress.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ObjectState"></a>

### *property* MinimumPrincipalStress.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ObjectTags"></a>

### *property* MinimumPrincipalStress.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Parent"></a>

### *property* MinimumPrincipalStress.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Path"></a>

### *property* MinimumPrincipalStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PeakCenter"></a>

### *property* MinimumPrincipalStress.PeakCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PeakInside"></a>

### *property* MinimumPrincipalStress.PeakInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PeakOutside"></a>

### *property* MinimumPrincipalStress.PeakOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PhaseIncrement"></a>

### *property* MinimumPrincipalStress.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Plies"></a>

### *property* MinimumPrincipalStress.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PlotData"></a>

### *property* MinimumPrincipalStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Ply"></a>

### *property* MinimumPrincipalStress.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Position"></a>

### *property* MinimumPrincipalStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Probability"></a>

### *property* MinimumPrincipalStress.Probability *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Properties"></a>

### *property* MinimumPrincipalStress.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.RPMSelection"></a>

### *property* MinimumPrincipalStress.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ReportedFrequency"></a>

### *property* MinimumPrincipalStress.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ResultType"></a>

### *property* MinimumPrincipalStress.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.RpmSetNumber"></a>

### *property* MinimumPrincipalStress.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.SaveAuxiliaryResult"></a>

### *property* MinimumPrincipalStress.SaveAuxiliaryResult *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the option to save auxiliary results to disk. This property is valid for results under Modal and Harmonic analyses with On Demand Expansion enabled. An exception is thrown otherwise.
Saving result data to disk improves result retrieval and display performance.
Note: The project file size will increase.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ScaleFactor"></a>

### *property* MinimumPrincipalStress.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ScopingMethod"></a>

### *property* MinimumPrincipalStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.SeparateDataByEntity"></a>

### *property* MinimumPrincipalStress.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.SetNumber"></a>

### *property* MinimumPrincipalStress.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.SolutionCombinationDriver"></a>

### *property* MinimumPrincipalStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.SolverComponentIDs"></a>

### *property* MinimumPrincipalStress.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.State"></a>

### *property* MinimumPrincipalStress.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.StressStrainType"></a>

### *property* MinimumPrincipalStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.SubScopeBy"></a>

### *property* MinimumPrincipalStress.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Substep"></a>

### *property* MinimumPrincipalStress.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Subtype"></a>

### *property* MinimumPrincipalStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Suppressed"></a>

### *property* MinimumPrincipalStress.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Surface"></a>

### *property* MinimumPrincipalStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.SurfaceCoating"></a>

### *property* MinimumPrincipalStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.SweepingPhase"></a>

### *property* MinimumPrincipalStress.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TabularData"></a>

### *property* MinimumPrincipalStress.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ThroughThicknessBendingStress"></a>

### *property* MinimumPrincipalStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Time"></a>

### *property* MinimumPrincipalStress.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TimeForMaximumOfMaximumValues"></a>

### *property* MinimumPrincipalStress.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TimeForMaximumOfMinimumValues"></a>

### *property* MinimumPrincipalStress.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TimeForMinimumOfMaximumValues"></a>

### *property* MinimumPrincipalStress.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TimeForMinimumOfMinimumValues"></a>

### *property* MinimumPrincipalStress.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Total"></a>

### *property* MinimumPrincipalStress.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TotalCenter"></a>

### *property* MinimumPrincipalStress.TotalCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TotalInside"></a>

### *property* MinimumPrincipalStress.TotalInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.TotalOutside"></a>

### *property* MinimumPrincipalStress.TotalOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.VisibleProperties"></a>

### *property* MinimumPrincipalStress.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayFilterBy"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayFrequencySelection"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayInterpolateData"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayLowerBand"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayMaxRPM"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayMinRPM"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayModeSelection"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayOrderSelection"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayRpmSelection"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayScopeToOrderLines"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayTimeSelection"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayUpperBand"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayXAxisMaximum"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayXAxisMinimum"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayYAxisMaximum"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallDisplayYAxisMinimum"></a>

### *property* MinimumPrincipalStress.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.WaterfallShowTextOnMosaic"></a>

### *property* MinimumPrincipalStress.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MinimumPrincipalStress.Activate"></a>

### MinimumPrincipalStress.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AddAlert"></a>

### MinimumPrincipalStress.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AddComment"></a>

### MinimumPrincipalStress.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AddConvergence"></a>

### MinimumPrincipalStress.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AddFigure"></a>

### MinimumPrincipalStress.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.AddImage"></a>

### MinimumPrincipalStress.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.BodyWhereMaximumOccurs"></a>

### MinimumPrincipalStress.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ClearGeneratedData"></a>

### MinimumPrincipalStress.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Copy"></a>

### MinimumPrincipalStress.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CopyTo"></a>

### MinimumPrincipalStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CreateObjRef"></a>

### MinimumPrincipalStress.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CreateParameter"></a>

### MinimumPrincipalStress.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.CreateResultsAtAllSets"></a>

### MinimumPrincipalStress.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Cut"></a>

### MinimumPrincipalStress.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Delete"></a>

### MinimumPrincipalStress.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Duplicate"></a>

### MinimumPrincipalStress.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.DuplicateWithoutResults"></a>

### MinimumPrincipalStress.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Equals"></a>

### MinimumPrincipalStress.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.EvaluateAllResults"></a>

### MinimumPrincipalStress.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ExportAnimation"></a>

### MinimumPrincipalStress.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ExportToSTLFile"></a>

### MinimumPrincipalStress.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.ExportToTextFile"></a>

### MinimumPrincipalStress.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MinimumPrincipalStress.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.FetchRemoteResult"></a>

### MinimumPrincipalStress.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.FetchRemoteResults"></a>

### MinimumPrincipalStress.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetAPIName"></a>

### MinimumPrincipalStress.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetAllProperties"></a>

### MinimumPrincipalStress.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetChildren"></a>

### MinimumPrincipalStress.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MinimumPrincipalStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetDetailsView"></a>

### MinimumPrincipalStress.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetEnumName"></a>

### MinimumPrincipalStress.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetHashCode"></a>

### MinimumPrincipalStress.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetIconFile"></a>

### MinimumPrincipalStress.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetLifetimeService"></a>

### MinimumPrincipalStress.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetNodalValues"></a>

### MinimumPrincipalStress.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetObjectData"></a>

### MinimumPrincipalStress.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetParameter"></a>

### MinimumPrincipalStress.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetPath"></a>

### MinimumPrincipalStress.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetPropertyName"></a>

### MinimumPrincipalStress.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetPropertyValue"></a>

### MinimumPrincipalStress.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetQuantityName"></a>

### MinimumPrincipalStress.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetVisibleProperties"></a>

### MinimumPrincipalStress.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GetVisiblePropertyNames"></a>

### MinimumPrincipalStress.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GroupAllSimilarChildren"></a>

### MinimumPrincipalStress.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.GroupSimilarObjects"></a>

### MinimumPrincipalStress.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.InitializeLifetimeService"></a>

### MinimumPrincipalStress.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.IsPropertyEditable"></a>

### MinimumPrincipalStress.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MinimumPrincipalStress.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.IsPropertyVisible"></a>

### MinimumPrincipalStress.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MinimumPrincipalStress.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.Paste"></a>

### MinimumPrincipalStress.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PromoteToNamedSelection"></a>

### MinimumPrincipalStress.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PropertyByAPIName"></a>

### MinimumPrincipalStress.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PropertyById"></a>

### MinimumPrincipalStress.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.PropertyByName"></a>

### MinimumPrincipalStress.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.RemoveFromGroup"></a>

### MinimumPrincipalStress.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.RemoveParameter"></a>

### MinimumPrincipalStress.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.RenameBasedOnDefinition"></a>

### MinimumPrincipalStress.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.RetrieveRemoteDPFResults"></a>

### MinimumPrincipalStress.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumPrincipalStress.RetrieveResult"></a>

### MinimumPrincipalStress.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

