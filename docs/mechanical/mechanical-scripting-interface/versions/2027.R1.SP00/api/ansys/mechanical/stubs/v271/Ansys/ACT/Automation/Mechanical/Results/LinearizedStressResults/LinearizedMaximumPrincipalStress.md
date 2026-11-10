# `LinearizedMaximumPrincipalStress`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedMaximumPrincipalStress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedMaximumPrincipalStress(internalObject: Any)

<a id="LinearizedMaximumPrincipalStress"></a>

### *class* LinearizedMaximumPrincipalStress(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a LinearizedMaximumPrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#LinearizedMaximumPrincipalStress.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#LinearizedMaximumPrincipalStress.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#LinearizedMaximumPrincipalStress.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#LinearizedMaximumPrincipalStress.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#LinearizedMaximumPrincipalStress.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#LinearizedMaximumPrincipalStress.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#LinearizedMaximumPrincipalStress.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#LinearizedMaximumPrincipalStress.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#LinearizedMaximumPrincipalStress.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#LinearizedMaximumPrincipalStress.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#LinearizedMaximumPrincipalStress.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#LinearizedMaximumPrincipalStress.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#LinearizedMaximumPrincipalStress.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#LinearizedMaximumPrincipalStress.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#LinearizedMaximumPrincipalStress.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#LinearizedMaximumPrincipalStress.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#LinearizedMaximumPrincipalStress.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#LinearizedMaximumPrincipalStress.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#LinearizedMaximumPrincipalStress.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#LinearizedMaximumPrincipalStress.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#LinearizedMaximumPrincipalStress.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#LinearizedMaximumPrincipalStress.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#LinearizedMaximumPrincipalStress.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#LinearizedMaximumPrincipalStress.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#LinearizedMaximumPrincipalStress.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#LinearizedMaximumPrincipalStress.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#LinearizedMaximumPrincipalStress.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#LinearizedMaximumPrincipalStress.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#LinearizedMaximumPrincipalStress.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#LinearizedMaximumPrincipalStress.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#LinearizedMaximumPrincipalStress.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#LinearizedMaximumPrincipalStress.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#LinearizedMaximumPrincipalStress.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#LinearizedMaximumPrincipalStress.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#LinearizedMaximumPrincipalStress.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#LinearizedMaximumPrincipalStress.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#LinearizedMaximumPrincipalStress.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#LinearizedMaximumPrincipalStress.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#LinearizedMaximumPrincipalStress.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#LinearizedMaximumPrincipalStress.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#LinearizedMaximumPrincipalStress.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#LinearizedMaximumPrincipalStress.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#LinearizedMaximumPrincipalStress.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#LinearizedMaximumPrincipalStress.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#LinearizedMaximumPrincipalStress.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#LinearizedMaximumPrincipalStress.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#LinearizedMaximumPrincipalStress.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#LinearizedMaximumPrincipalStress.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#LinearizedMaximumPrincipalStress.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#LinearizedMaximumPrincipalStress.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#LinearizedMaximumPrincipalStress.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#LinearizedMaximumPrincipalStress.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#LinearizedMaximumPrincipalStress.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#LinearizedMaximumPrincipalStress.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#LinearizedMaximumPrincipalStress.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#LinearizedMaximumPrincipalStress.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#LinearizedMaximumPrincipalStress.Amplitude)                                                   | Gets or sets the Amplitude.                                                                              |
| [`AttachedRefs`](#LinearizedMaximumPrincipalStress.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#LinearizedMaximumPrincipalStress.Average)                                                       | Gets the Average.                                                                                        |
| [`AverageRadiusOfCurvature`](#LinearizedMaximumPrincipalStress.AverageRadiusOfCurvature)                     | Gets or sets the AverageRadiusOfCurvature.                                                               |
| [`BendingInside`](#LinearizedMaximumPrincipalStress.BendingInside)                                           | Gets the BendingInside.                                                                                  |
| [`BendingOutside`](#LinearizedMaximumPrincipalStress.BendingOutside)                                         | Gets the BendingOutside.                                                                                 |
| [`By`](#LinearizedMaximumPrincipalStress.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#LinearizedMaximumPrincipalStress.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#LinearizedMaximumPrincipalStress.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#LinearizedMaximumPrincipalStress.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#LinearizedMaximumPrincipalStress.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#LinearizedMaximumPrincipalStress.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#LinearizedMaximumPrincipalStress.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#LinearizedMaximumPrincipalStress.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#LinearizedMaximumPrincipalStress.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#LinearizedMaximumPrincipalStress.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#LinearizedMaximumPrincipalStress.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#LinearizedMaximumPrincipalStress.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`Frequency`](#LinearizedMaximumPrincipalStress.Frequency)                                                   | Gets or sets the Frequency.                                                                              |
| [`GlobalIDs`](#LinearizedMaximumPrincipalStress.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#LinearizedMaximumPrincipalStress.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#LinearizedMaximumPrincipalStress.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#LinearizedMaximumPrincipalStress.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#LinearizedMaximumPrincipalStress.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#LinearizedMaximumPrincipalStress.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#LinearizedMaximumPrincipalStress.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#LinearizedMaximumPrincipalStress.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#LinearizedMaximumPrincipalStress.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#LinearizedMaximumPrincipalStress.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`Linearized2DBehavior`](#LinearizedMaximumPrincipalStress.Linearized2DBehavior)                             | Gets or sets the Linearized2DBehavior.                                                                   |
| [`LoadMultiplier`](#LinearizedMaximumPrincipalStress.LoadMultiplier)                                         | Gets the LoadMultiplier.                                                                                 |
| [`LoadStep`](#LinearizedMaximumPrincipalStress.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#LinearizedMaximumPrincipalStress.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#LinearizedMaximumPrincipalStress.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#LinearizedMaximumPrincipalStress.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#LinearizedMaximumPrincipalStress.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#LinearizedMaximumPrincipalStress.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#LinearizedMaximumPrincipalStress.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#LinearizedMaximumPrincipalStress.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#LinearizedMaximumPrincipalStress.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#LinearizedMaximumPrincipalStress.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#LinearizedMaximumPrincipalStress.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Membrane`](#LinearizedMaximumPrincipalStress.Membrane)                                                     | Gets the Membrane.                                                                                       |
| [`MembraneBendingCenter`](#LinearizedMaximumPrincipalStress.MembraneBendingCenter)                           | Gets the MembraneBendingCenter.                                                                          |
| [`MembraneBendingInside`](#LinearizedMaximumPrincipalStress.MembraneBendingInside)                           | Gets the MembraneBendingInside.                                                                          |
| [`MembraneBendingOutside`](#LinearizedMaximumPrincipalStress.MembraneBendingOutside)                         | Gets the MembraneBendingOutside.                                                                         |
| [`Minimum`](#LinearizedMaximumPrincipalStress.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#LinearizedMaximumPrincipalStress.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#LinearizedMaximumPrincipalStress.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#LinearizedMaximumPrincipalStress.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#LinearizedMaximumPrincipalStress.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                                | Gets or sets the NamedSelections.                                                                        |
| [`NormalOrientation`](#LinearizedMaximumPrincipalStress.NormalOrientation)                                   | Gets or sets the NormalOrientation.                                                                      |
| [`ObjectId`](#LinearizedMaximumPrincipalStress.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#LinearizedMaximumPrincipalStress.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#LinearizedMaximumPrincipalStress.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#LinearizedMaximumPrincipalStress.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                                 | Path property.                                                                                           |
| [`PeakCenter`](#LinearizedMaximumPrincipalStress.PeakCenter)                                                 | Gets the PeakCenter.                                                                                     |
| [`PeakInside`](#LinearizedMaximumPrincipalStress.PeakInside)                                                 | Gets the PeakInside.                                                                                     |
| [`PeakOutside`](#LinearizedMaximumPrincipalStress.PeakOutside)                                               | Gets the PeakOutside.                                                                                    |
| [`PlotData`](#LinearizedMaximumPrincipalStress.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Position`](#Position)                                                           | Gets or sets the Position.                                                                               |
| [`Properties`](#LinearizedMaximumPrincipalStress.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#LinearizedMaximumPrincipalStress.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#LinearizedMaximumPrincipalStress.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#LinearizedMaximumPrincipalStress.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#LinearizedMaximumPrincipalStress.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#LinearizedMaximumPrincipalStress.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#LinearizedMaximumPrincipalStress.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#LinearizedMaximumPrincipalStress.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#LinearizedMaximumPrincipalStress.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#LinearizedMaximumPrincipalStress.State)                                                           | State property.                                                                                          |
| [`StressStrainType`](#LinearizedMaximumPrincipalStress.StressStrainType)                                     | Gets or sets the StressStrainType.                                                                       |
| [`Substep`](#LinearizedMaximumPrincipalStress.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Subtype`](#LinearizedMaximumPrincipalStress.Subtype)                                                       | Gets or sets the Subtype.                                                                                |
| [`Suppressed`](#LinearizedMaximumPrincipalStress.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                        | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                   | SurfaceCoating property.                                                                                 |
| [`SweepingPhase`](#LinearizedMaximumPrincipalStress.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                          |
| [`TabularData`](#LinearizedMaximumPrincipalStress.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`ThroughThicknessBendingStress`](#LinearizedMaximumPrincipalStress.ThroughThicknessBendingStress)           | Gets or sets the ThroughThicknessBendingStress.                                                          |
| [`Time`](#LinearizedMaximumPrincipalStress.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#LinearizedMaximumPrincipalStress.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#LinearizedMaximumPrincipalStress.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#LinearizedMaximumPrincipalStress.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#LinearizedMaximumPrincipalStress.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#LinearizedMaximumPrincipalStress.Total)                                                           | Gets the Total.                                                                                          |
| [`TotalCenter`](#LinearizedMaximumPrincipalStress.TotalCenter)                                               | Gets the TotalCenter.                                                                                    |
| [`TotalInside`](#LinearizedMaximumPrincipalStress.TotalInside)                                               | Gets the TotalInside.                                                                                    |
| [`TotalOutside`](#LinearizedMaximumPrincipalStress.TotalOutside)                                             | Gets the TotalOutside.                                                                                   |
| [`VisibleProperties`](#LinearizedMaximumPrincipalStress.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#LinearizedMaximumPrincipalStress.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#LinearizedMaximumPrincipalStress.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#LinearizedMaximumPrincipalStress.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#LinearizedMaximumPrincipalStress.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#LinearizedMaximumPrincipalStress.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#LinearizedMaximumPrincipalStress.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#LinearizedMaximumPrincipalStress.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#LinearizedMaximumPrincipalStress.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#LinearizedMaximumPrincipalStress.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#LinearizedMaximumPrincipalStress.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#LinearizedMaximumPrincipalStress.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#LinearizedMaximumPrincipalStress.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#LinearizedMaximumPrincipalStress.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#LinearizedMaximumPrincipalStress.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#LinearizedMaximumPrincipalStress.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#LinearizedMaximumPrincipalStress.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#LinearizedMaximumPrincipalStress.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |
| [`ZeroThroughThicknessBendingStress`](#LinearizedMaximumPrincipalStress.ZeroThroughThicknessBendingStress)   | Gets or sets the ZeroThroughThicknessBendingStress.                                                      |

<a id="property-detail"></a>

## Property detail

<a id="LinearizedMaximumPrincipalStress.Amplitude"></a>

### *property* LinearizedMaximumPrincipalStress.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.AttachedRefs"></a>

### *property* LinearizedMaximumPrincipalStress.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Average"></a>

### *property* LinearizedMaximumPrincipalStress.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.AverageRadiusOfCurvature"></a>

### *property* LinearizedMaximumPrincipalStress.AverageRadiusOfCurvature *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.BendingInside"></a>

### *property* LinearizedMaximumPrincipalStress.BendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.BendingOutside"></a>

### *property* LinearizedMaximumPrincipalStress.BendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.By"></a>

### *property* LinearizedMaximumPrincipalStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.CalculateTimeHistory"></a>

### *property* LinearizedMaximumPrincipalStress.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Children"></a>

### *property* LinearizedMaximumPrincipalStress.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.ClsId"></a>

### *property* LinearizedMaximumPrincipalStress.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.CombinationNumber"></a>

### *property* LinearizedMaximumPrincipalStress.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Comments"></a>

### *property* LinearizedMaximumPrincipalStress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.CoordinateSystem"></a>

### *property* LinearizedMaximumPrincipalStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.CrackFrontNumber"></a>

### *property* LinearizedMaximumPrincipalStress.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.DataModelObjectCategory"></a>

### *property* LinearizedMaximumPrincipalStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.DisplayOption"></a>

### *property* LinearizedMaximumPrincipalStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.DisplayTime"></a>

### *property* LinearizedMaximumPrincipalStress.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.DpfEvaluation"></a>

### *property* LinearizedMaximumPrincipalStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Figures"></a>

### *property* LinearizedMaximumPrincipalStress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Frequency"></a>

### *property* LinearizedMaximumPrincipalStress.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GlobalIDs"></a>

### *property* LinearizedMaximumPrincipalStress.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GraphControlsXAxis"></a>

### *property* LinearizedMaximumPrincipalStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GroupingFolder"></a>

### *property* LinearizedMaximumPrincipalStress.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.IconName"></a>

### *property* LinearizedMaximumPrincipalStress.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Identifier"></a>

### *property* LinearizedMaximumPrincipalStress.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Images"></a>

### *property* LinearizedMaximumPrincipalStress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.InternalObject"></a>

### *property* LinearizedMaximumPrincipalStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.IsSolved"></a>

### *property* LinearizedMaximumPrincipalStress.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.ItemType"></a>

### *property* LinearizedMaximumPrincipalStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.IterationNumber"></a>

### *property* LinearizedMaximumPrincipalStress.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Linearized2DBehavior"></a>

### *property* LinearizedMaximumPrincipalStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.LoadMultiplier"></a>

### *property* LinearizedMaximumPrincipalStress.LoadMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.LoadStep"></a>

### *property* LinearizedMaximumPrincipalStress.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* LinearizedMaximumPrincipalStress.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* LinearizedMaximumPrincipalStress.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* LinearizedMaximumPrincipalStress.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* LinearizedMaximumPrincipalStress.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.LoadStepNumber"></a>

### *property* LinearizedMaximumPrincipalStress.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Location"></a>

### *property* LinearizedMaximumPrincipalStress.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Maximum"></a>

### *property* LinearizedMaximumPrincipalStress.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.MaximumOccursOn"></a>

### *property* LinearizedMaximumPrincipalStress.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.MaximumOfMaximumOverTime"></a>

### *property* LinearizedMaximumPrincipalStress.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.MaximumOfMinimumOverTime"></a>

### *property* LinearizedMaximumPrincipalStress.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Membrane"></a>

### *property* LinearizedMaximumPrincipalStress.Membrane *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.MembraneBendingCenter"></a>

### *property* LinearizedMaximumPrincipalStress.MembraneBendingCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.MembraneBendingInside"></a>

### *property* LinearizedMaximumPrincipalStress.MembraneBendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.MembraneBendingOutside"></a>

### *property* LinearizedMaximumPrincipalStress.MembraneBendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Minimum"></a>

### *property* LinearizedMaximumPrincipalStress.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.MinimumOccursOn"></a>

### *property* LinearizedMaximumPrincipalStress.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.MinimumOfMaximumOverTime"></a>

### *property* LinearizedMaximumPrincipalStress.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.MinimumOfMinimumOverTime"></a>

### *property* LinearizedMaximumPrincipalStress.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Name"></a>

### *property* LinearizedMaximumPrincipalStress.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.NamedSelections"></a>

### *property* LinearizedMaximumPrincipalStress.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.NormalOrientation"></a>

### *property* LinearizedMaximumPrincipalStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.ObjectId"></a>

### *property* LinearizedMaximumPrincipalStress.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.ObjectState"></a>

### *property* LinearizedMaximumPrincipalStress.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.ObjectTags"></a>

### *property* LinearizedMaximumPrincipalStress.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Parent"></a>

### *property* LinearizedMaximumPrincipalStress.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Path"></a>

### *property* LinearizedMaximumPrincipalStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.PeakCenter"></a>

### *property* LinearizedMaximumPrincipalStress.PeakCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.PeakInside"></a>

### *property* LinearizedMaximumPrincipalStress.PeakInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.PeakOutside"></a>

### *property* LinearizedMaximumPrincipalStress.PeakOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.PlotData"></a>

### *property* LinearizedMaximumPrincipalStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Position"></a>

### *property* LinearizedMaximumPrincipalStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Properties"></a>

### *property* LinearizedMaximumPrincipalStress.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.RPMSelection"></a>

### *property* LinearizedMaximumPrincipalStress.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.ResultType"></a>

### *property* LinearizedMaximumPrincipalStress.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.RpmSetNumber"></a>

### *property* LinearizedMaximumPrincipalStress.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.ScopingMethod"></a>

### *property* LinearizedMaximumPrincipalStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.SeparateDataByEntity"></a>

### *property* LinearizedMaximumPrincipalStress.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.SetNumber"></a>

### *property* LinearizedMaximumPrincipalStress.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.SolutionCombinationDriver"></a>

### *property* LinearizedMaximumPrincipalStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.SolverComponentIDs"></a>

### *property* LinearizedMaximumPrincipalStress.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.State"></a>

### *property* LinearizedMaximumPrincipalStress.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.StressStrainType"></a>

### *property* LinearizedMaximumPrincipalStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Substep"></a>

### *property* LinearizedMaximumPrincipalStress.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Subtype"></a>

### *property* LinearizedMaximumPrincipalStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Suppressed"></a>

### *property* LinearizedMaximumPrincipalStress.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Surface"></a>

### *property* LinearizedMaximumPrincipalStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.SurfaceCoating"></a>

### *property* LinearizedMaximumPrincipalStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.SweepingPhase"></a>

### *property* LinearizedMaximumPrincipalStress.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.TabularData"></a>

### *property* LinearizedMaximumPrincipalStress.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.ThroughThicknessBendingStress"></a>

### *property* LinearizedMaximumPrincipalStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Time"></a>

### *property* LinearizedMaximumPrincipalStress.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.TimeForMaximumOfMaximumValues"></a>

### *property* LinearizedMaximumPrincipalStress.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.TimeForMaximumOfMinimumValues"></a>

### *property* LinearizedMaximumPrincipalStress.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.TimeForMinimumOfMaximumValues"></a>

### *property* LinearizedMaximumPrincipalStress.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.TimeForMinimumOfMinimumValues"></a>

### *property* LinearizedMaximumPrincipalStress.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Total"></a>

### *property* LinearizedMaximumPrincipalStress.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.TotalCenter"></a>

### *property* LinearizedMaximumPrincipalStress.TotalCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.TotalInside"></a>

### *property* LinearizedMaximumPrincipalStress.TotalInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.TotalOutside"></a>

### *property* LinearizedMaximumPrincipalStress.TotalOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.VisibleProperties"></a>

### *property* LinearizedMaximumPrincipalStress.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayFilterBy"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayFrequencySelection"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayInterpolateData"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayLowerBand"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayMaxRPM"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayMinRPM"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayModeSelection"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayOrderSelection"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayRpmSelection"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayScopeToOrderLines"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayTimeSelection"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayUpperBand"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayXAxisMaximum"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayXAxisMinimum"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayYAxisMaximum"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallDisplayYAxisMinimum"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.WaterfallShowTextOnMosaic"></a>

### *property* LinearizedMaximumPrincipalStress.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.ZeroThroughThicknessBendingStress"></a>

### *property* LinearizedMaximumPrincipalStress.ZeroThroughThicknessBendingStress *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LinearizedMaximumPrincipalStress.Activate"></a>

### LinearizedMaximumPrincipalStress.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.AddAlert"></a>

### LinearizedMaximumPrincipalStress.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.AddComment"></a>

### LinearizedMaximumPrincipalStress.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.AddConvergence"></a>

### LinearizedMaximumPrincipalStress.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.AddFigure"></a>

### LinearizedMaximumPrincipalStress.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.AddImage"></a>

### LinearizedMaximumPrincipalStress.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.BodyWhereMaximumOccurs"></a>

### LinearizedMaximumPrincipalStress.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.ClearGeneratedData"></a>

### LinearizedMaximumPrincipalStress.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Copy"></a>

### LinearizedMaximumPrincipalStress.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.CopyTo"></a>

### LinearizedMaximumPrincipalStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.CreateObjRef"></a>

### LinearizedMaximumPrincipalStress.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.CreateParameter"></a>

### LinearizedMaximumPrincipalStress.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.CreateResultsAtAllSets"></a>

### LinearizedMaximumPrincipalStress.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Cut"></a>

### LinearizedMaximumPrincipalStress.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Delete"></a>

### LinearizedMaximumPrincipalStress.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Duplicate"></a>

### LinearizedMaximumPrincipalStress.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.DuplicateWithoutResults"></a>

### LinearizedMaximumPrincipalStress.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Equals"></a>

### LinearizedMaximumPrincipalStress.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.EvaluateAllResults"></a>

### LinearizedMaximumPrincipalStress.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.ExportAnimation"></a>

### LinearizedMaximumPrincipalStress.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.ExportToSTLFile"></a>

### LinearizedMaximumPrincipalStress.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.ExportToTextFile"></a>

### LinearizedMaximumPrincipalStress.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### LinearizedMaximumPrincipalStress.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.FetchRemoteResult"></a>

### LinearizedMaximumPrincipalStress.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.FetchRemoteResults"></a>

### LinearizedMaximumPrincipalStress.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetAPIName"></a>

### LinearizedMaximumPrincipalStress.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetAllProperties"></a>

### LinearizedMaximumPrincipalStress.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetChildren"></a>

### LinearizedMaximumPrincipalStress.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### LinearizedMaximumPrincipalStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetDetailsView"></a>

### LinearizedMaximumPrincipalStress.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetEnumName"></a>

### LinearizedMaximumPrincipalStress.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetHashCode"></a>

### LinearizedMaximumPrincipalStress.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetIconFile"></a>

### LinearizedMaximumPrincipalStress.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetLifetimeService"></a>

### LinearizedMaximumPrincipalStress.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetNodalValues"></a>

### LinearizedMaximumPrincipalStress.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetObjectData"></a>

### LinearizedMaximumPrincipalStress.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetParameter"></a>

### LinearizedMaximumPrincipalStress.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetPath"></a>

### LinearizedMaximumPrincipalStress.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetPropertyName"></a>

### LinearizedMaximumPrincipalStress.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetPropertyValue"></a>

### LinearizedMaximumPrincipalStress.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetQuantityName"></a>

### LinearizedMaximumPrincipalStress.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetVisibleProperties"></a>

### LinearizedMaximumPrincipalStress.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GetVisiblePropertyNames"></a>

### LinearizedMaximumPrincipalStress.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GroupAllSimilarChildren"></a>

### LinearizedMaximumPrincipalStress.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.GroupSimilarObjects"></a>

### LinearizedMaximumPrincipalStress.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.InitializeLifetimeService"></a>

### LinearizedMaximumPrincipalStress.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.IsPropertyEditable"></a>

### LinearizedMaximumPrincipalStress.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LinearizedMaximumPrincipalStress.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.IsPropertyVisible"></a>

### LinearizedMaximumPrincipalStress.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LinearizedMaximumPrincipalStress.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.Paste"></a>

### LinearizedMaximumPrincipalStress.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.PromoteToNamedSelection"></a>

### LinearizedMaximumPrincipalStress.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.PropertyByAPIName"></a>

### LinearizedMaximumPrincipalStress.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.PropertyById"></a>

### LinearizedMaximumPrincipalStress.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.PropertyByName"></a>

### LinearizedMaximumPrincipalStress.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.RemoveFromGroup"></a>

### LinearizedMaximumPrincipalStress.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.RemoveParameter"></a>

### LinearizedMaximumPrincipalStress.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.RenameBasedOnDefinition"></a>

### LinearizedMaximumPrincipalStress.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.RetrieveRemoteDPFResults"></a>

### LinearizedMaximumPrincipalStress.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMaximumPrincipalStress.RetrieveResult"></a>

### LinearizedMaximumPrincipalStress.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

