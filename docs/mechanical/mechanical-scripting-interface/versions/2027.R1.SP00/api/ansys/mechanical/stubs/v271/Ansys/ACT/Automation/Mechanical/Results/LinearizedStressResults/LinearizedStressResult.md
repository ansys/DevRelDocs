# `LinearizedStressResult`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedStressResult"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedStressResult(internalObject: Any)

<a id="LinearizedStressResult"></a>

### *class* LinearizedStressResult(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a LinearizedStressResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#LinearizedStressResult.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#LinearizedStressResult.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#LinearizedStressResult.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#LinearizedStressResult.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#LinearizedStressResult.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#LinearizedStressResult.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#LinearizedStressResult.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#LinearizedStressResult.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#LinearizedStressResult.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#LinearizedStressResult.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#LinearizedStressResult.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#LinearizedStressResult.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#LinearizedStressResult.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#LinearizedStressResult.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#LinearizedStressResult.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#LinearizedStressResult.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#LinearizedStressResult.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#LinearizedStressResult.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#LinearizedStressResult.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#LinearizedStressResult.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#LinearizedStressResult.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#LinearizedStressResult.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#LinearizedStressResult.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#LinearizedStressResult.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#LinearizedStressResult.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#LinearizedStressResult.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#LinearizedStressResult.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#LinearizedStressResult.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#LinearizedStressResult.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#LinearizedStressResult.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#LinearizedStressResult.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#LinearizedStressResult.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#LinearizedStressResult.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#LinearizedStressResult.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#LinearizedStressResult.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#LinearizedStressResult.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#LinearizedStressResult.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#LinearizedStressResult.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#LinearizedStressResult.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#LinearizedStressResult.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#LinearizedStressResult.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#LinearizedStressResult.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#LinearizedStressResult.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#LinearizedStressResult.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#LinearizedStressResult.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#LinearizedStressResult.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#LinearizedStressResult.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#LinearizedStressResult.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#LinearizedStressResult.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#LinearizedStressResult.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#LinearizedStressResult.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#LinearizedStressResult.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#LinearizedStressResult.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#LinearizedStressResult.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#LinearizedStressResult.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#LinearizedStressResult.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#LinearizedStressResult.Amplitude)                                                   | Gets or sets the Amplitude.                                                                              |
| [`AttachedRefs`](#LinearizedStressResult.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#LinearizedStressResult.Average)                                                       | Gets the Average.                                                                                        |
| [`AverageRadiusOfCurvature`](#LinearizedStressResult.AverageRadiusOfCurvature)                     | Gets or sets the AverageRadiusOfCurvature.                                                               |
| [`BendingInside`](#LinearizedStressResult.BendingInside)                                           | Gets the BendingInside.                                                                                  |
| [`BendingOutside`](#LinearizedStressResult.BendingOutside)                                         | Gets the BendingOutside.                                                                                 |
| [`By`](#LinearizedStressResult.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#LinearizedStressResult.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#LinearizedStressResult.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#LinearizedStressResult.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#LinearizedStressResult.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#LinearizedStressResult.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                   | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#LinearizedStressResult.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#LinearizedStressResult.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#LinearizedStressResult.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#LinearizedStressResult.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#LinearizedStressResult.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#LinearizedStressResult.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`Frequency`](#LinearizedStressResult.Frequency)                                                   | Gets or sets the Frequency.                                                                              |
| [`GlobalIDs`](#LinearizedStressResult.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#LinearizedStressResult.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#LinearizedStressResult.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#LinearizedStressResult.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#LinearizedStressResult.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#LinearizedStressResult.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#LinearizedStressResult.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#LinearizedStressResult.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#LinearizedStressResult.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#LinearizedStressResult.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`Linearized2DBehavior`](#LinearizedStressResult.Linearized2DBehavior)                             | Gets or sets the Linearized2DBehavior.                                                                   |
| [`LoadMultiplier`](#LinearizedStressResult.LoadMultiplier)                                         | Gets the LoadMultiplier.                                                                                 |
| [`LoadStep`](#LinearizedStressResult.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#LinearizedStressResult.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#LinearizedStressResult.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#LinearizedStressResult.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#LinearizedStressResult.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#LinearizedStressResult.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#LinearizedStressResult.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#LinearizedStressResult.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#LinearizedStressResult.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#LinearizedStressResult.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#LinearizedStressResult.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Membrane`](#LinearizedStressResult.Membrane)                                                     | Gets the Membrane.                                                                                       |
| [`MembraneBendingCenter`](#LinearizedStressResult.MembraneBendingCenter)                           | Gets the MembraneBendingCenter.                                                                          |
| [`MembraneBendingInside`](#LinearizedStressResult.MembraneBendingInside)                           | Gets the MembraneBendingInside.                                                                          |
| [`MembraneBendingOutside`](#LinearizedStressResult.MembraneBendingOutside)                         | Gets the MembraneBendingOutside.                                                                         |
| [`Minimum`](#LinearizedStressResult.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#LinearizedStressResult.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#LinearizedStressResult.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#LinearizedStressResult.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#LinearizedStressResult.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                      | Gets or sets the NamedSelections.                                                                        |
| [`NormalOrientation`](#LinearizedStressResult.NormalOrientation)                                   | Gets or sets the NormalOrientation.                                                                      |
| [`ObjectId`](#LinearizedStressResult.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#LinearizedStressResult.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#LinearizedStressResult.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#LinearizedStressResult.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                       | Path property.                                                                                           |
| [`PeakCenter`](#LinearizedStressResult.PeakCenter)                                                 | Gets the PeakCenter.                                                                                     |
| [`PeakInside`](#LinearizedStressResult.PeakInside)                                                 | Gets the PeakInside.                                                                                     |
| [`PeakOutside`](#LinearizedStressResult.PeakOutside)                                               | Gets the PeakOutside.                                                                                    |
| [`PlotData`](#LinearizedStressResult.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Position`](#Position)                                                 | Gets or sets the Position.                                                                               |
| [`Properties`](#LinearizedStressResult.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#LinearizedStressResult.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#LinearizedStressResult.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#LinearizedStressResult.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#LinearizedStressResult.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#LinearizedStressResult.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#LinearizedStressResult.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#LinearizedStressResult.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#LinearizedStressResult.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#LinearizedStressResult.State)                                                           | State property.                                                                                          |
| [`StressStrainType`](#LinearizedStressResult.StressStrainType)                                     | Gets or sets the StressStrainType.                                                                       |
| [`Substep`](#LinearizedStressResult.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Subtype`](#LinearizedStressResult.Subtype)                                                       | Gets or sets the Subtype.                                                                                |
| [`Suppressed`](#LinearizedStressResult.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                              | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                         | SurfaceCoating property.                                                                                 |
| [`SweepingPhase`](#LinearizedStressResult.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                          |
| [`TabularData`](#LinearizedStressResult.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`ThroughThicknessBendingStress`](#LinearizedStressResult.ThroughThicknessBendingStress)           | Gets or sets the ThroughThicknessBendingStress.                                                          |
| [`Time`](#LinearizedStressResult.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#LinearizedStressResult.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#LinearizedStressResult.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#LinearizedStressResult.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#LinearizedStressResult.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#LinearizedStressResult.Total)                                                           | Gets the Total.                                                                                          |
| [`TotalCenter`](#LinearizedStressResult.TotalCenter)                                               | Gets the TotalCenter.                                                                                    |
| [`TotalInside`](#LinearizedStressResult.TotalInside)                                               | Gets the TotalInside.                                                                                    |
| [`TotalOutside`](#LinearizedStressResult.TotalOutside)                                             | Gets the TotalOutside.                                                                                   |
| [`VisibleProperties`](#LinearizedStressResult.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#LinearizedStressResult.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#LinearizedStressResult.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#LinearizedStressResult.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#LinearizedStressResult.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#LinearizedStressResult.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#LinearizedStressResult.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#LinearizedStressResult.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#LinearizedStressResult.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#LinearizedStressResult.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#LinearizedStressResult.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#LinearizedStressResult.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#LinearizedStressResult.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#LinearizedStressResult.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#LinearizedStressResult.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#LinearizedStressResult.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#LinearizedStressResult.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#LinearizedStressResult.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |
| [`ZeroThroughThicknessBendingStress`](#LinearizedStressResult.ZeroThroughThicknessBendingStress)   | Gets or sets the ZeroThroughThicknessBendingStress.                                                      |

<a id="property-detail"></a>

## Property detail

<a id="LinearizedStressResult.Amplitude"></a>

### *property* LinearizedStressResult.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.AttachedRefs"></a>

### *property* LinearizedStressResult.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Average"></a>

### *property* LinearizedStressResult.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.AverageRadiusOfCurvature"></a>

### *property* LinearizedStressResult.AverageRadiusOfCurvature *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.BendingInside"></a>

### *property* LinearizedStressResult.BendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.BendingOutside"></a>

### *property* LinearizedStressResult.BendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.By"></a>

### *property* LinearizedStressResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CalculateTimeHistory"></a>

### *property* LinearizedStressResult.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Children"></a>

### *property* LinearizedStressResult.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ClsId"></a>

### *property* LinearizedStressResult.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CombinationNumber"></a>

### *property* LinearizedStressResult.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Comments"></a>

### *property* LinearizedStressResult.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CoordinateSystem"></a>

### *property* LinearizedStressResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CrackFrontNumber"></a>

### *property* LinearizedStressResult.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.DataModelObjectCategory"></a>

### *property* LinearizedStressResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.DisplayOption"></a>

### *property* LinearizedStressResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.DisplayTime"></a>

### *property* LinearizedStressResult.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.DpfEvaluation"></a>

### *property* LinearizedStressResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Figures"></a>

### *property* LinearizedStressResult.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Frequency"></a>

### *property* LinearizedStressResult.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GlobalIDs"></a>

### *property* LinearizedStressResult.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GraphControlsXAxis"></a>

### *property* LinearizedStressResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GroupingFolder"></a>

### *property* LinearizedStressResult.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.IconName"></a>

### *property* LinearizedStressResult.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Identifier"></a>

### *property* LinearizedStressResult.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Images"></a>

### *property* LinearizedStressResult.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.InternalObject"></a>

### *property* LinearizedStressResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.IsSolved"></a>

### *property* LinearizedStressResult.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ItemType"></a>

### *property* LinearizedStressResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.IterationNumber"></a>

### *property* LinearizedStressResult.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Linearized2DBehavior"></a>

### *property* LinearizedStressResult.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadMultiplier"></a>

### *property* LinearizedStressResult.LoadMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadStep"></a>

### *property* LinearizedStressResult.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* LinearizedStressResult.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* LinearizedStressResult.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* LinearizedStressResult.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* LinearizedStressResult.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.LoadStepNumber"></a>

### *property* LinearizedStressResult.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Location"></a>

### *property* LinearizedStressResult.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Maximum"></a>

### *property* LinearizedStressResult.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MaximumOccursOn"></a>

### *property* LinearizedStressResult.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MaximumOfMaximumOverTime"></a>

### *property* LinearizedStressResult.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MaximumOfMinimumOverTime"></a>

### *property* LinearizedStressResult.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Membrane"></a>

### *property* LinearizedStressResult.Membrane *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MembraneBendingCenter"></a>

### *property* LinearizedStressResult.MembraneBendingCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MembraneBendingInside"></a>

### *property* LinearizedStressResult.MembraneBendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MembraneBendingOutside"></a>

### *property* LinearizedStressResult.MembraneBendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Minimum"></a>

### *property* LinearizedStressResult.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MinimumOccursOn"></a>

### *property* LinearizedStressResult.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MinimumOfMaximumOverTime"></a>

### *property* LinearizedStressResult.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.MinimumOfMinimumOverTime"></a>

### *property* LinearizedStressResult.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Name"></a>

### *property* LinearizedStressResult.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.NamedSelections"></a>

### *property* LinearizedStressResult.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.NormalOrientation"></a>

### *property* LinearizedStressResult.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ObjectId"></a>

### *property* LinearizedStressResult.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ObjectState"></a>

### *property* LinearizedStressResult.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ObjectTags"></a>

### *property* LinearizedStressResult.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Parent"></a>

### *property* LinearizedStressResult.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Path"></a>

### *property* LinearizedStressResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PeakCenter"></a>

### *property* LinearizedStressResult.PeakCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PeakInside"></a>

### *property* LinearizedStressResult.PeakInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PeakOutside"></a>

### *property* LinearizedStressResult.PeakOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PlotData"></a>

### *property* LinearizedStressResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Position"></a>

### *property* LinearizedStressResult.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Properties"></a>

### *property* LinearizedStressResult.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.RPMSelection"></a>

### *property* LinearizedStressResult.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ResultType"></a>

### *property* LinearizedStressResult.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.RpmSetNumber"></a>

### *property* LinearizedStressResult.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ScopingMethod"></a>

### *property* LinearizedStressResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.SeparateDataByEntity"></a>

### *property* LinearizedStressResult.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.SetNumber"></a>

### *property* LinearizedStressResult.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.SolutionCombinationDriver"></a>

### *property* LinearizedStressResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.SolverComponentIDs"></a>

### *property* LinearizedStressResult.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.State"></a>

### *property* LinearizedStressResult.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.StressStrainType"></a>

### *property* LinearizedStressResult.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Substep"></a>

### *property* LinearizedStressResult.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Subtype"></a>

### *property* LinearizedStressResult.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Suppressed"></a>

### *property* LinearizedStressResult.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Surface"></a>

### *property* LinearizedStressResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.SurfaceCoating"></a>

### *property* LinearizedStressResult.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.SweepingPhase"></a>

### *property* LinearizedStressResult.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TabularData"></a>

### *property* LinearizedStressResult.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ThroughThicknessBendingStress"></a>

### *property* LinearizedStressResult.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Time"></a>

### *property* LinearizedStressResult.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TimeForMaximumOfMaximumValues"></a>

### *property* LinearizedStressResult.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TimeForMaximumOfMinimumValues"></a>

### *property* LinearizedStressResult.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TimeForMinimumOfMaximumValues"></a>

### *property* LinearizedStressResult.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TimeForMinimumOfMinimumValues"></a>

### *property* LinearizedStressResult.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Total"></a>

### *property* LinearizedStressResult.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TotalCenter"></a>

### *property* LinearizedStressResult.TotalCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TotalInside"></a>

### *property* LinearizedStressResult.TotalInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.TotalOutside"></a>

### *property* LinearizedStressResult.TotalOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.VisibleProperties"></a>

### *property* LinearizedStressResult.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayFilterBy"></a>

### *property* LinearizedStressResult.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayFrequencySelection"></a>

### *property* LinearizedStressResult.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayInterpolateData"></a>

### *property* LinearizedStressResult.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayLowerBand"></a>

### *property* LinearizedStressResult.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayMaxRPM"></a>

### *property* LinearizedStressResult.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayMinRPM"></a>

### *property* LinearizedStressResult.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayModeSelection"></a>

### *property* LinearizedStressResult.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayOrderSelection"></a>

### *property* LinearizedStressResult.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayRpmSelection"></a>

### *property* LinearizedStressResult.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayScopeToOrderLines"></a>

### *property* LinearizedStressResult.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayTimeSelection"></a>

### *property* LinearizedStressResult.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayUpperBand"></a>

### *property* LinearizedStressResult.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayXAxisMaximum"></a>

### *property* LinearizedStressResult.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayXAxisMinimum"></a>

### *property* LinearizedStressResult.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayYAxisMaximum"></a>

### *property* LinearizedStressResult.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallDisplayYAxisMinimum"></a>

### *property* LinearizedStressResult.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.WaterfallShowTextOnMosaic"></a>

### *property* LinearizedStressResult.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ZeroThroughThicknessBendingStress"></a>

### *property* LinearizedStressResult.ZeroThroughThicknessBendingStress *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LinearizedStressResult.Activate"></a>

### LinearizedStressResult.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.AddAlert"></a>

### LinearizedStressResult.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.AddComment"></a>

### LinearizedStressResult.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.AddConvergence"></a>

### LinearizedStressResult.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.AddFigure"></a>

### LinearizedStressResult.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.AddImage"></a>

### LinearizedStressResult.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.BodyWhereMaximumOccurs"></a>

### LinearizedStressResult.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ClearGeneratedData"></a>

### LinearizedStressResult.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Copy"></a>

### LinearizedStressResult.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CopyTo"></a>

### LinearizedStressResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CreateObjRef"></a>

### LinearizedStressResult.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CreateParameter"></a>

### LinearizedStressResult.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.CreateResultsAtAllSets"></a>

### LinearizedStressResult.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Cut"></a>

### LinearizedStressResult.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Delete"></a>

### LinearizedStressResult.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Duplicate"></a>

### LinearizedStressResult.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.DuplicateWithoutResults"></a>

### LinearizedStressResult.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Equals"></a>

### LinearizedStressResult.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.EvaluateAllResults"></a>

### LinearizedStressResult.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ExportAnimation"></a>

### LinearizedStressResult.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ExportToSTLFile"></a>

### LinearizedStressResult.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.ExportToTextFile"></a>

### LinearizedStressResult.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### LinearizedStressResult.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.FetchRemoteResult"></a>

### LinearizedStressResult.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.FetchRemoteResults"></a>

### LinearizedStressResult.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetAPIName"></a>

### LinearizedStressResult.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetAllProperties"></a>

### LinearizedStressResult.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetChildren"></a>

### LinearizedStressResult.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### LinearizedStressResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetDetailsView"></a>

### LinearizedStressResult.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetEnumName"></a>

### LinearizedStressResult.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetHashCode"></a>

### LinearizedStressResult.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetIconFile"></a>

### LinearizedStressResult.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetLifetimeService"></a>

### LinearizedStressResult.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetNodalValues"></a>

### LinearizedStressResult.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetObjectData"></a>

### LinearizedStressResult.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetParameter"></a>

### LinearizedStressResult.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetPath"></a>

### LinearizedStressResult.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetPropertyName"></a>

### LinearizedStressResult.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetPropertyValue"></a>

### LinearizedStressResult.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetQuantityName"></a>

### LinearizedStressResult.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetVisibleProperties"></a>

### LinearizedStressResult.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GetVisiblePropertyNames"></a>

### LinearizedStressResult.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GroupAllSimilarChildren"></a>

### LinearizedStressResult.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.GroupSimilarObjects"></a>

### LinearizedStressResult.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.InitializeLifetimeService"></a>

### LinearizedStressResult.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.IsPropertyEditable"></a>

### LinearizedStressResult.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LinearizedStressResult.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.IsPropertyVisible"></a>

### LinearizedStressResult.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LinearizedStressResult.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.Paste"></a>

### LinearizedStressResult.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PromoteToNamedSelection"></a>

### LinearizedStressResult.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PropertyByAPIName"></a>

### LinearizedStressResult.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PropertyById"></a>

### LinearizedStressResult.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.PropertyByName"></a>

### LinearizedStressResult.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.RemoveFromGroup"></a>

### LinearizedStressResult.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.RemoveParameter"></a>

### LinearizedStressResult.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.RenameBasedOnDefinition"></a>

### LinearizedStressResult.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.RetrieveRemoteDPFResults"></a>

### LinearizedStressResult.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedStressResult.RetrieveResult"></a>

### LinearizedStressResult.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

