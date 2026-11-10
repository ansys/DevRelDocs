# `LinearizedMiddlePrincipalStress`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedMiddlePrincipalStress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedMiddlePrincipalStress(internalObject: Any)

<a id="LinearizedMiddlePrincipalStress"></a>

### *class* LinearizedMiddlePrincipalStress(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a LinearizedMiddlePrincipalStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#LinearizedMiddlePrincipalStress.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#LinearizedMiddlePrincipalStress.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#LinearizedMiddlePrincipalStress.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#LinearizedMiddlePrincipalStress.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#LinearizedMiddlePrincipalStress.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#LinearizedMiddlePrincipalStress.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#LinearizedMiddlePrincipalStress.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#LinearizedMiddlePrincipalStress.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#LinearizedMiddlePrincipalStress.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#LinearizedMiddlePrincipalStress.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#LinearizedMiddlePrincipalStress.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#LinearizedMiddlePrincipalStress.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#LinearizedMiddlePrincipalStress.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#LinearizedMiddlePrincipalStress.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#LinearizedMiddlePrincipalStress.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#LinearizedMiddlePrincipalStress.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#LinearizedMiddlePrincipalStress.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#LinearizedMiddlePrincipalStress.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#LinearizedMiddlePrincipalStress.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#LinearizedMiddlePrincipalStress.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#LinearizedMiddlePrincipalStress.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#LinearizedMiddlePrincipalStress.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#LinearizedMiddlePrincipalStress.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#LinearizedMiddlePrincipalStress.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#LinearizedMiddlePrincipalStress.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#LinearizedMiddlePrincipalStress.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#LinearizedMiddlePrincipalStress.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#LinearizedMiddlePrincipalStress.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#LinearizedMiddlePrincipalStress.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#LinearizedMiddlePrincipalStress.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#LinearizedMiddlePrincipalStress.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#LinearizedMiddlePrincipalStress.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#LinearizedMiddlePrincipalStress.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#LinearizedMiddlePrincipalStress.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#LinearizedMiddlePrincipalStress.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#LinearizedMiddlePrincipalStress.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#LinearizedMiddlePrincipalStress.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#LinearizedMiddlePrincipalStress.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#LinearizedMiddlePrincipalStress.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#LinearizedMiddlePrincipalStress.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#LinearizedMiddlePrincipalStress.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#LinearizedMiddlePrincipalStress.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#LinearizedMiddlePrincipalStress.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#LinearizedMiddlePrincipalStress.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#LinearizedMiddlePrincipalStress.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#LinearizedMiddlePrincipalStress.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#LinearizedMiddlePrincipalStress.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#LinearizedMiddlePrincipalStress.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#LinearizedMiddlePrincipalStress.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#LinearizedMiddlePrincipalStress.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#LinearizedMiddlePrincipalStress.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#LinearizedMiddlePrincipalStress.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#LinearizedMiddlePrincipalStress.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#LinearizedMiddlePrincipalStress.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#LinearizedMiddlePrincipalStress.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#LinearizedMiddlePrincipalStress.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#LinearizedMiddlePrincipalStress.Amplitude)                                                   | Gets or sets the Amplitude.                                                                              |
| [`AttachedRefs`](#LinearizedMiddlePrincipalStress.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#LinearizedMiddlePrincipalStress.Average)                                                       | Gets the Average.                                                                                        |
| [`AverageRadiusOfCurvature`](#LinearizedMiddlePrincipalStress.AverageRadiusOfCurvature)                     | Gets or sets the AverageRadiusOfCurvature.                                                               |
| [`BendingInside`](#LinearizedMiddlePrincipalStress.BendingInside)                                           | Gets the BendingInside.                                                                                  |
| [`BendingOutside`](#LinearizedMiddlePrincipalStress.BendingOutside)                                         | Gets the BendingOutside.                                                                                 |
| [`By`](#LinearizedMiddlePrincipalStress.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#LinearizedMiddlePrincipalStress.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#LinearizedMiddlePrincipalStress.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#LinearizedMiddlePrincipalStress.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#LinearizedMiddlePrincipalStress.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#LinearizedMiddlePrincipalStress.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                            | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#LinearizedMiddlePrincipalStress.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#LinearizedMiddlePrincipalStress.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#LinearizedMiddlePrincipalStress.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#LinearizedMiddlePrincipalStress.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#LinearizedMiddlePrincipalStress.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#LinearizedMiddlePrincipalStress.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`Frequency`](#LinearizedMiddlePrincipalStress.Frequency)                                                   | Gets or sets the Frequency.                                                                              |
| [`GlobalIDs`](#LinearizedMiddlePrincipalStress.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#LinearizedMiddlePrincipalStress.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#LinearizedMiddlePrincipalStress.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#LinearizedMiddlePrincipalStress.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#LinearizedMiddlePrincipalStress.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#LinearizedMiddlePrincipalStress.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#LinearizedMiddlePrincipalStress.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#LinearizedMiddlePrincipalStress.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#LinearizedMiddlePrincipalStress.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#LinearizedMiddlePrincipalStress.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`Linearized2DBehavior`](#LinearizedMiddlePrincipalStress.Linearized2DBehavior)                             | Gets or sets the Linearized2DBehavior.                                                                   |
| [`LoadMultiplier`](#LinearizedMiddlePrincipalStress.LoadMultiplier)                                         | Gets the LoadMultiplier.                                                                                 |
| [`LoadStep`](#LinearizedMiddlePrincipalStress.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#LinearizedMiddlePrincipalStress.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#LinearizedMiddlePrincipalStress.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#LinearizedMiddlePrincipalStress.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#LinearizedMiddlePrincipalStress.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#LinearizedMiddlePrincipalStress.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#LinearizedMiddlePrincipalStress.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#LinearizedMiddlePrincipalStress.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#LinearizedMiddlePrincipalStress.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#LinearizedMiddlePrincipalStress.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#LinearizedMiddlePrincipalStress.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Membrane`](#LinearizedMiddlePrincipalStress.Membrane)                                                     | Gets the Membrane.                                                                                       |
| [`MembraneBendingCenter`](#LinearizedMiddlePrincipalStress.MembraneBendingCenter)                           | Gets the MembraneBendingCenter.                                                                          |
| [`MembraneBendingInside`](#LinearizedMiddlePrincipalStress.MembraneBendingInside)                           | Gets the MembraneBendingInside.                                                                          |
| [`MembraneBendingOutside`](#LinearizedMiddlePrincipalStress.MembraneBendingOutside)                         | Gets the MembraneBendingOutside.                                                                         |
| [`Minimum`](#LinearizedMiddlePrincipalStress.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#LinearizedMiddlePrincipalStress.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#LinearizedMiddlePrincipalStress.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#LinearizedMiddlePrincipalStress.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#LinearizedMiddlePrincipalStress.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                               | Gets or sets the NamedSelections.                                                                        |
| [`NormalOrientation`](#LinearizedMiddlePrincipalStress.NormalOrientation)                                   | Gets or sets the NormalOrientation.                                                                      |
| [`ObjectId`](#LinearizedMiddlePrincipalStress.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#LinearizedMiddlePrincipalStress.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#LinearizedMiddlePrincipalStress.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#LinearizedMiddlePrincipalStress.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                                | Path property.                                                                                           |
| [`PeakCenter`](#LinearizedMiddlePrincipalStress.PeakCenter)                                                 | Gets the PeakCenter.                                                                                     |
| [`PeakInside`](#LinearizedMiddlePrincipalStress.PeakInside)                                                 | Gets the PeakInside.                                                                                     |
| [`PeakOutside`](#LinearizedMiddlePrincipalStress.PeakOutside)                                               | Gets the PeakOutside.                                                                                    |
| [`PlotData`](#LinearizedMiddlePrincipalStress.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Position`](#Position)                                                          | Gets or sets the Position.                                                                               |
| [`Properties`](#LinearizedMiddlePrincipalStress.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#LinearizedMiddlePrincipalStress.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#LinearizedMiddlePrincipalStress.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#LinearizedMiddlePrincipalStress.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#LinearizedMiddlePrincipalStress.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#LinearizedMiddlePrincipalStress.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#LinearizedMiddlePrincipalStress.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#LinearizedMiddlePrincipalStress.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#LinearizedMiddlePrincipalStress.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#LinearizedMiddlePrincipalStress.State)                                                           | State property.                                                                                          |
| [`StressStrainType`](#LinearizedMiddlePrincipalStress.StressStrainType)                                     | Gets or sets the StressStrainType.                                                                       |
| [`Substep`](#LinearizedMiddlePrincipalStress.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Subtype`](#LinearizedMiddlePrincipalStress.Subtype)                                                       | Gets or sets the Subtype.                                                                                |
| [`Suppressed`](#LinearizedMiddlePrincipalStress.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                       | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                  | SurfaceCoating property.                                                                                 |
| [`SweepingPhase`](#LinearizedMiddlePrincipalStress.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                          |
| [`TabularData`](#LinearizedMiddlePrincipalStress.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`ThroughThicknessBendingStress`](#LinearizedMiddlePrincipalStress.ThroughThicknessBendingStress)           | Gets or sets the ThroughThicknessBendingStress.                                                          |
| [`Time`](#LinearizedMiddlePrincipalStress.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#LinearizedMiddlePrincipalStress.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#LinearizedMiddlePrincipalStress.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#LinearizedMiddlePrincipalStress.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#LinearizedMiddlePrincipalStress.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#LinearizedMiddlePrincipalStress.Total)                                                           | Gets the Total.                                                                                          |
| [`TotalCenter`](#LinearizedMiddlePrincipalStress.TotalCenter)                                               | Gets the TotalCenter.                                                                                    |
| [`TotalInside`](#LinearizedMiddlePrincipalStress.TotalInside)                                               | Gets the TotalInside.                                                                                    |
| [`TotalOutside`](#LinearizedMiddlePrincipalStress.TotalOutside)                                             | Gets the TotalOutside.                                                                                   |
| [`VisibleProperties`](#LinearizedMiddlePrincipalStress.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#LinearizedMiddlePrincipalStress.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#LinearizedMiddlePrincipalStress.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#LinearizedMiddlePrincipalStress.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#LinearizedMiddlePrincipalStress.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#LinearizedMiddlePrincipalStress.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#LinearizedMiddlePrincipalStress.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#LinearizedMiddlePrincipalStress.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#LinearizedMiddlePrincipalStress.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#LinearizedMiddlePrincipalStress.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#LinearizedMiddlePrincipalStress.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#LinearizedMiddlePrincipalStress.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#LinearizedMiddlePrincipalStress.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#LinearizedMiddlePrincipalStress.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#LinearizedMiddlePrincipalStress.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#LinearizedMiddlePrincipalStress.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#LinearizedMiddlePrincipalStress.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#LinearizedMiddlePrincipalStress.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |
| [`ZeroThroughThicknessBendingStress`](#LinearizedMiddlePrincipalStress.ZeroThroughThicknessBendingStress)   | Gets or sets the ZeroThroughThicknessBendingStress.                                                      |

<a id="property-detail"></a>

## Property detail

<a id="LinearizedMiddlePrincipalStress.Amplitude"></a>

### *property* LinearizedMiddlePrincipalStress.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.AttachedRefs"></a>

### *property* LinearizedMiddlePrincipalStress.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Average"></a>

### *property* LinearizedMiddlePrincipalStress.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.AverageRadiusOfCurvature"></a>

### *property* LinearizedMiddlePrincipalStress.AverageRadiusOfCurvature *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.BendingInside"></a>

### *property* LinearizedMiddlePrincipalStress.BendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.BendingOutside"></a>

### *property* LinearizedMiddlePrincipalStress.BendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.By"></a>

### *property* LinearizedMiddlePrincipalStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.CalculateTimeHistory"></a>

### *property* LinearizedMiddlePrincipalStress.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Children"></a>

### *property* LinearizedMiddlePrincipalStress.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.ClsId"></a>

### *property* LinearizedMiddlePrincipalStress.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.CombinationNumber"></a>

### *property* LinearizedMiddlePrincipalStress.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Comments"></a>

### *property* LinearizedMiddlePrincipalStress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.CoordinateSystem"></a>

### *property* LinearizedMiddlePrincipalStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.CrackFrontNumber"></a>

### *property* LinearizedMiddlePrincipalStress.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.DataModelObjectCategory"></a>

### *property* LinearizedMiddlePrincipalStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.DisplayOption"></a>

### *property* LinearizedMiddlePrincipalStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.DisplayTime"></a>

### *property* LinearizedMiddlePrincipalStress.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.DpfEvaluation"></a>

### *property* LinearizedMiddlePrincipalStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Figures"></a>

### *property* LinearizedMiddlePrincipalStress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Frequency"></a>

### *property* LinearizedMiddlePrincipalStress.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GlobalIDs"></a>

### *property* LinearizedMiddlePrincipalStress.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GraphControlsXAxis"></a>

### *property* LinearizedMiddlePrincipalStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GroupingFolder"></a>

### *property* LinearizedMiddlePrincipalStress.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.IconName"></a>

### *property* LinearizedMiddlePrincipalStress.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Identifier"></a>

### *property* LinearizedMiddlePrincipalStress.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Images"></a>

### *property* LinearizedMiddlePrincipalStress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.InternalObject"></a>

### *property* LinearizedMiddlePrincipalStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.IsSolved"></a>

### *property* LinearizedMiddlePrincipalStress.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.ItemType"></a>

### *property* LinearizedMiddlePrincipalStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.IterationNumber"></a>

### *property* LinearizedMiddlePrincipalStress.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Linearized2DBehavior"></a>

### *property* LinearizedMiddlePrincipalStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.LoadMultiplier"></a>

### *property* LinearizedMiddlePrincipalStress.LoadMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.LoadStep"></a>

### *property* LinearizedMiddlePrincipalStress.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* LinearizedMiddlePrincipalStress.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* LinearizedMiddlePrincipalStress.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* LinearizedMiddlePrincipalStress.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* LinearizedMiddlePrincipalStress.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.LoadStepNumber"></a>

### *property* LinearizedMiddlePrincipalStress.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Location"></a>

### *property* LinearizedMiddlePrincipalStress.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Maximum"></a>

### *property* LinearizedMiddlePrincipalStress.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.MaximumOccursOn"></a>

### *property* LinearizedMiddlePrincipalStress.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.MaximumOfMaximumOverTime"></a>

### *property* LinearizedMiddlePrincipalStress.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.MaximumOfMinimumOverTime"></a>

### *property* LinearizedMiddlePrincipalStress.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Membrane"></a>

### *property* LinearizedMiddlePrincipalStress.Membrane *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.MembraneBendingCenter"></a>

### *property* LinearizedMiddlePrincipalStress.MembraneBendingCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.MembraneBendingInside"></a>

### *property* LinearizedMiddlePrincipalStress.MembraneBendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.MembraneBendingOutside"></a>

### *property* LinearizedMiddlePrincipalStress.MembraneBendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Minimum"></a>

### *property* LinearizedMiddlePrincipalStress.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.MinimumOccursOn"></a>

### *property* LinearizedMiddlePrincipalStress.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.MinimumOfMaximumOverTime"></a>

### *property* LinearizedMiddlePrincipalStress.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.MinimumOfMinimumOverTime"></a>

### *property* LinearizedMiddlePrincipalStress.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Name"></a>

### *property* LinearizedMiddlePrincipalStress.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.NamedSelections"></a>

### *property* LinearizedMiddlePrincipalStress.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.NormalOrientation"></a>

### *property* LinearizedMiddlePrincipalStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.ObjectId"></a>

### *property* LinearizedMiddlePrincipalStress.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.ObjectState"></a>

### *property* LinearizedMiddlePrincipalStress.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.ObjectTags"></a>

### *property* LinearizedMiddlePrincipalStress.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Parent"></a>

### *property* LinearizedMiddlePrincipalStress.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Path"></a>

### *property* LinearizedMiddlePrincipalStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.PeakCenter"></a>

### *property* LinearizedMiddlePrincipalStress.PeakCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.PeakInside"></a>

### *property* LinearizedMiddlePrincipalStress.PeakInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.PeakOutside"></a>

### *property* LinearizedMiddlePrincipalStress.PeakOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.PlotData"></a>

### *property* LinearizedMiddlePrincipalStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Position"></a>

### *property* LinearizedMiddlePrincipalStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Properties"></a>

### *property* LinearizedMiddlePrincipalStress.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.RPMSelection"></a>

### *property* LinearizedMiddlePrincipalStress.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.ResultType"></a>

### *property* LinearizedMiddlePrincipalStress.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.RpmSetNumber"></a>

### *property* LinearizedMiddlePrincipalStress.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.ScopingMethod"></a>

### *property* LinearizedMiddlePrincipalStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.SeparateDataByEntity"></a>

### *property* LinearizedMiddlePrincipalStress.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.SetNumber"></a>

### *property* LinearizedMiddlePrincipalStress.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.SolutionCombinationDriver"></a>

### *property* LinearizedMiddlePrincipalStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.SolverComponentIDs"></a>

### *property* LinearizedMiddlePrincipalStress.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.State"></a>

### *property* LinearizedMiddlePrincipalStress.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.StressStrainType"></a>

### *property* LinearizedMiddlePrincipalStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Substep"></a>

### *property* LinearizedMiddlePrincipalStress.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Subtype"></a>

### *property* LinearizedMiddlePrincipalStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Suppressed"></a>

### *property* LinearizedMiddlePrincipalStress.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Surface"></a>

### *property* LinearizedMiddlePrincipalStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.SurfaceCoating"></a>

### *property* LinearizedMiddlePrincipalStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.SweepingPhase"></a>

### *property* LinearizedMiddlePrincipalStress.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.TabularData"></a>

### *property* LinearizedMiddlePrincipalStress.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.ThroughThicknessBendingStress"></a>

### *property* LinearizedMiddlePrincipalStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Time"></a>

### *property* LinearizedMiddlePrincipalStress.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.TimeForMaximumOfMaximumValues"></a>

### *property* LinearizedMiddlePrincipalStress.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.TimeForMaximumOfMinimumValues"></a>

### *property* LinearizedMiddlePrincipalStress.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.TimeForMinimumOfMaximumValues"></a>

### *property* LinearizedMiddlePrincipalStress.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.TimeForMinimumOfMinimumValues"></a>

### *property* LinearizedMiddlePrincipalStress.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Total"></a>

### *property* LinearizedMiddlePrincipalStress.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.TotalCenter"></a>

### *property* LinearizedMiddlePrincipalStress.TotalCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.TotalInside"></a>

### *property* LinearizedMiddlePrincipalStress.TotalInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.TotalOutside"></a>

### *property* LinearizedMiddlePrincipalStress.TotalOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.VisibleProperties"></a>

### *property* LinearizedMiddlePrincipalStress.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayFilterBy"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayFrequencySelection"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayInterpolateData"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayLowerBand"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayMaxRPM"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayMinRPM"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayModeSelection"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayOrderSelection"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayRpmSelection"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayScopeToOrderLines"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayTimeSelection"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayUpperBand"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayXAxisMaximum"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayXAxisMinimum"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayYAxisMaximum"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallDisplayYAxisMinimum"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.WaterfallShowTextOnMosaic"></a>

### *property* LinearizedMiddlePrincipalStress.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.ZeroThroughThicknessBendingStress"></a>

### *property* LinearizedMiddlePrincipalStress.ZeroThroughThicknessBendingStress *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LinearizedMiddlePrincipalStress.Activate"></a>

### LinearizedMiddlePrincipalStress.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.AddAlert"></a>

### LinearizedMiddlePrincipalStress.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.AddComment"></a>

### LinearizedMiddlePrincipalStress.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.AddConvergence"></a>

### LinearizedMiddlePrincipalStress.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.AddFigure"></a>

### LinearizedMiddlePrincipalStress.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.AddImage"></a>

### LinearizedMiddlePrincipalStress.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.BodyWhereMaximumOccurs"></a>

### LinearizedMiddlePrincipalStress.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.ClearGeneratedData"></a>

### LinearizedMiddlePrincipalStress.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Copy"></a>

### LinearizedMiddlePrincipalStress.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.CopyTo"></a>

### LinearizedMiddlePrincipalStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.CreateObjRef"></a>

### LinearizedMiddlePrincipalStress.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.CreateParameter"></a>

### LinearizedMiddlePrincipalStress.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.CreateResultsAtAllSets"></a>

### LinearizedMiddlePrincipalStress.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Cut"></a>

### LinearizedMiddlePrincipalStress.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Delete"></a>

### LinearizedMiddlePrincipalStress.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Duplicate"></a>

### LinearizedMiddlePrincipalStress.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.DuplicateWithoutResults"></a>

### LinearizedMiddlePrincipalStress.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Equals"></a>

### LinearizedMiddlePrincipalStress.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.EvaluateAllResults"></a>

### LinearizedMiddlePrincipalStress.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.ExportAnimation"></a>

### LinearizedMiddlePrincipalStress.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.ExportToSTLFile"></a>

### LinearizedMiddlePrincipalStress.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.ExportToTextFile"></a>

### LinearizedMiddlePrincipalStress.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### LinearizedMiddlePrincipalStress.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.FetchRemoteResult"></a>

### LinearizedMiddlePrincipalStress.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.FetchRemoteResults"></a>

### LinearizedMiddlePrincipalStress.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetAPIName"></a>

### LinearizedMiddlePrincipalStress.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetAllProperties"></a>

### LinearizedMiddlePrincipalStress.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetChildren"></a>

### LinearizedMiddlePrincipalStress.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### LinearizedMiddlePrincipalStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetDetailsView"></a>

### LinearizedMiddlePrincipalStress.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetEnumName"></a>

### LinearizedMiddlePrincipalStress.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetHashCode"></a>

### LinearizedMiddlePrincipalStress.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetIconFile"></a>

### LinearizedMiddlePrincipalStress.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetLifetimeService"></a>

### LinearizedMiddlePrincipalStress.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetNodalValues"></a>

### LinearizedMiddlePrincipalStress.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetObjectData"></a>

### LinearizedMiddlePrincipalStress.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetParameter"></a>

### LinearizedMiddlePrincipalStress.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetPath"></a>

### LinearizedMiddlePrincipalStress.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetPropertyName"></a>

### LinearizedMiddlePrincipalStress.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetPropertyValue"></a>

### LinearizedMiddlePrincipalStress.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetQuantityName"></a>

### LinearizedMiddlePrincipalStress.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetVisibleProperties"></a>

### LinearizedMiddlePrincipalStress.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GetVisiblePropertyNames"></a>

### LinearizedMiddlePrincipalStress.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GroupAllSimilarChildren"></a>

### LinearizedMiddlePrincipalStress.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.GroupSimilarObjects"></a>

### LinearizedMiddlePrincipalStress.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.InitializeLifetimeService"></a>

### LinearizedMiddlePrincipalStress.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.IsPropertyEditable"></a>

### LinearizedMiddlePrincipalStress.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LinearizedMiddlePrincipalStress.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.IsPropertyVisible"></a>

### LinearizedMiddlePrincipalStress.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LinearizedMiddlePrincipalStress.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.Paste"></a>

### LinearizedMiddlePrincipalStress.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.PromoteToNamedSelection"></a>

### LinearizedMiddlePrincipalStress.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.PropertyByAPIName"></a>

### LinearizedMiddlePrincipalStress.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.PropertyById"></a>

### LinearizedMiddlePrincipalStress.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.PropertyByName"></a>

### LinearizedMiddlePrincipalStress.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.RemoveFromGroup"></a>

### LinearizedMiddlePrincipalStress.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.RemoveParameter"></a>

### LinearizedMiddlePrincipalStress.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.RenameBasedOnDefinition"></a>

### LinearizedMiddlePrincipalStress.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.RetrieveRemoteDPFResults"></a>

### LinearizedMiddlePrincipalStress.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedMiddlePrincipalStress.RetrieveResult"></a>

### LinearizedMiddlePrincipalStress.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

