# `LinearizedShearStress`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedShearStress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedShearStress(internalObject: Any)

<a id="LinearizedShearStress"></a>

### *class* LinearizedShearStress(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a LinearizedShearStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#LinearizedShearStress.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#LinearizedShearStress.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#LinearizedShearStress.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#LinearizedShearStress.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#LinearizedShearStress.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#LinearizedShearStress.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#LinearizedShearStress.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#LinearizedShearStress.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#LinearizedShearStress.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#LinearizedShearStress.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#LinearizedShearStress.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#LinearizedShearStress.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#LinearizedShearStress.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#LinearizedShearStress.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#LinearizedShearStress.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#LinearizedShearStress.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#LinearizedShearStress.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#LinearizedShearStress.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#LinearizedShearStress.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#LinearizedShearStress.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#LinearizedShearStress.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#LinearizedShearStress.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#LinearizedShearStress.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#LinearizedShearStress.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#LinearizedShearStress.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#LinearizedShearStress.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#LinearizedShearStress.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#LinearizedShearStress.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#LinearizedShearStress.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#LinearizedShearStress.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#LinearizedShearStress.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#LinearizedShearStress.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#LinearizedShearStress.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#LinearizedShearStress.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#LinearizedShearStress.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#LinearizedShearStress.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#LinearizedShearStress.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#LinearizedShearStress.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#LinearizedShearStress.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#LinearizedShearStress.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#LinearizedShearStress.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#LinearizedShearStress.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#LinearizedShearStress.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#LinearizedShearStress.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#LinearizedShearStress.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#LinearizedShearStress.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#LinearizedShearStress.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#LinearizedShearStress.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#LinearizedShearStress.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#LinearizedShearStress.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#LinearizedShearStress.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#LinearizedShearStress.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#LinearizedShearStress.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#LinearizedShearStress.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#LinearizedShearStress.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#LinearizedShearStress.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#LinearizedShearStress.Amplitude)                                                   | Gets or sets the Amplitude.                                                                              |
| [`AttachedRefs`](#LinearizedShearStress.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#LinearizedShearStress.Average)                                                       | Gets the Average.                                                                                        |
| [`AverageRadiusOfCurvature`](#LinearizedShearStress.AverageRadiusOfCurvature)                     | Gets or sets the AverageRadiusOfCurvature.                                                               |
| [`BendingInside`](#LinearizedShearStress.BendingInside)                                           | Gets the BendingInside.                                                                                  |
| [`BendingOutside`](#LinearizedShearStress.BendingOutside)                                         | Gets the BendingOutside.                                                                                 |
| [`By`](#LinearizedShearStress.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#LinearizedShearStress.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#LinearizedShearStress.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#LinearizedShearStress.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#LinearizedShearStress.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#LinearizedShearStress.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                  | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#LinearizedShearStress.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#LinearizedShearStress.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#LinearizedShearStress.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#LinearizedShearStress.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#LinearizedShearStress.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#LinearizedShearStress.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`Frequency`](#LinearizedShearStress.Frequency)                                                   | Gets or sets the Frequency.                                                                              |
| [`GlobalIDs`](#LinearizedShearStress.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#LinearizedShearStress.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#LinearizedShearStress.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#LinearizedShearStress.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#LinearizedShearStress.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#LinearizedShearStress.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#LinearizedShearStress.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#LinearizedShearStress.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#LinearizedShearStress.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#LinearizedShearStress.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`Linearized2DBehavior`](#LinearizedShearStress.Linearized2DBehavior)                             | Gets or sets the Linearized2DBehavior.                                                                   |
| [`LoadMultiplier`](#LinearizedShearStress.LoadMultiplier)                                         | Gets the LoadMultiplier.                                                                                 |
| [`LoadStep`](#LinearizedShearStress.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#LinearizedShearStress.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#LinearizedShearStress.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#LinearizedShearStress.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#LinearizedShearStress.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#LinearizedShearStress.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#LinearizedShearStress.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#LinearizedShearStress.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#LinearizedShearStress.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#LinearizedShearStress.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#LinearizedShearStress.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Membrane`](#LinearizedShearStress.Membrane)                                                     | Gets the Membrane.                                                                                       |
| [`MembraneBendingCenter`](#LinearizedShearStress.MembraneBendingCenter)                           | Gets the MembraneBendingCenter.                                                                          |
| [`MembraneBendingInside`](#LinearizedShearStress.MembraneBendingInside)                           | Gets the MembraneBendingInside.                                                                          |
| [`MembraneBendingOutside`](#LinearizedShearStress.MembraneBendingOutside)                         | Gets the MembraneBendingOutside.                                                                         |
| [`Minimum`](#LinearizedShearStress.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#LinearizedShearStress.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#LinearizedShearStress.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#LinearizedShearStress.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#LinearizedShearStress.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                     | Gets or sets the NamedSelections.                                                                        |
| [`NormalOrientation`](#LinearizedShearStress.NormalOrientation)                                   | Gets or sets the NormalOrientation.                                                                      |
| [`ObjectId`](#LinearizedShearStress.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#LinearizedShearStress.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#LinearizedShearStress.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#LinearizedShearStress.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                      | Path property.                                                                                           |
| [`PeakCenter`](#LinearizedShearStress.PeakCenter)                                                 | Gets the PeakCenter.                                                                                     |
| [`PeakInside`](#LinearizedShearStress.PeakInside)                                                 | Gets the PeakInside.                                                                                     |
| [`PeakOutside`](#LinearizedShearStress.PeakOutside)                                               | Gets the PeakOutside.                                                                                    |
| [`PlotData`](#LinearizedShearStress.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Position`](#Position)                                                | Gets or sets the Position.                                                                               |
| [`Properties`](#LinearizedShearStress.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#LinearizedShearStress.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#LinearizedShearStress.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#LinearizedShearStress.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#LinearizedShearStress.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#LinearizedShearStress.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#LinearizedShearStress.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`ShearOrientation`](#LinearizedShearStress.ShearOrientation)                                     | Gets or sets the ShearOrientation.                                                                       |
| [`SolutionCombinationDriver`](#LinearizedShearStress.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#LinearizedShearStress.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#LinearizedShearStress.State)                                                           | State property.                                                                                          |
| [`StressStrainType`](#LinearizedShearStress.StressStrainType)                                     | Gets or sets the StressStrainType.                                                                       |
| [`Substep`](#LinearizedShearStress.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Subtype`](#LinearizedShearStress.Subtype)                                                       | Gets or sets the Subtype.                                                                                |
| [`Suppressed`](#LinearizedShearStress.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                             | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                        | SurfaceCoating property.                                                                                 |
| [`SweepingPhase`](#LinearizedShearStress.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                          |
| [`TabularData`](#LinearizedShearStress.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`ThroughThicknessBendingStress`](#LinearizedShearStress.ThroughThicknessBendingStress)           | Gets or sets the ThroughThicknessBendingStress.                                                          |
| [`Time`](#LinearizedShearStress.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#LinearizedShearStress.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#LinearizedShearStress.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#LinearizedShearStress.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#LinearizedShearStress.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#LinearizedShearStress.Total)                                                           | Gets the Total.                                                                                          |
| [`TotalCenter`](#LinearizedShearStress.TotalCenter)                                               | Gets the TotalCenter.                                                                                    |
| [`TotalInside`](#LinearizedShearStress.TotalInside)                                               | Gets the TotalInside.                                                                                    |
| [`TotalOutside`](#LinearizedShearStress.TotalOutside)                                             | Gets the TotalOutside.                                                                                   |
| [`VisibleProperties`](#LinearizedShearStress.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#LinearizedShearStress.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#LinearizedShearStress.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#LinearizedShearStress.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#LinearizedShearStress.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#LinearizedShearStress.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#LinearizedShearStress.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#LinearizedShearStress.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#LinearizedShearStress.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#LinearizedShearStress.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#LinearizedShearStress.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#LinearizedShearStress.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#LinearizedShearStress.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#LinearizedShearStress.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#LinearizedShearStress.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#LinearizedShearStress.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#LinearizedShearStress.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#LinearizedShearStress.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |
| [`ZeroThroughThicknessBendingStress`](#LinearizedShearStress.ZeroThroughThicknessBendingStress)   | Gets or sets the ZeroThroughThicknessBendingStress.                                                      |

<a id="property-detail"></a>

## Property detail

<a id="LinearizedShearStress.Amplitude"></a>

### *property* LinearizedShearStress.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.AttachedRefs"></a>

### *property* LinearizedShearStress.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Average"></a>

### *property* LinearizedShearStress.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.AverageRadiusOfCurvature"></a>

### *property* LinearizedShearStress.AverageRadiusOfCurvature *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageRadiusOfCurvature.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.BendingInside"></a>

### *property* LinearizedShearStress.BendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.BendingOutside"></a>

### *property* LinearizedShearStress.BendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the BendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.By"></a>

### *property* LinearizedShearStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.CalculateTimeHistory"></a>

### *property* LinearizedShearStress.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Children"></a>

### *property* LinearizedShearStress.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ClsId"></a>

### *property* LinearizedShearStress.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.CombinationNumber"></a>

### *property* LinearizedShearStress.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Comments"></a>

### *property* LinearizedShearStress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.CoordinateSystem"></a>

### *property* LinearizedShearStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.CrackFrontNumber"></a>

### *property* LinearizedShearStress.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.DataModelObjectCategory"></a>

### *property* LinearizedShearStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.DisplayOption"></a>

### *property* LinearizedShearStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.DisplayTime"></a>

### *property* LinearizedShearStress.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.DpfEvaluation"></a>

### *property* LinearizedShearStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Figures"></a>

### *property* LinearizedShearStress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Frequency"></a>

### *property* LinearizedShearStress.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GlobalIDs"></a>

### *property* LinearizedShearStress.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GraphControlsXAxis"></a>

### *property* LinearizedShearStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GroupingFolder"></a>

### *property* LinearizedShearStress.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.IconName"></a>

### *property* LinearizedShearStress.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Identifier"></a>

### *property* LinearizedShearStress.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Images"></a>

### *property* LinearizedShearStress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.InternalObject"></a>

### *property* LinearizedShearStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.IsSolved"></a>

### *property* LinearizedShearStress.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ItemType"></a>

### *property* LinearizedShearStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.IterationNumber"></a>

### *property* LinearizedShearStress.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Linearized2DBehavior"></a>

### *property* LinearizedShearStress.Linearized2DBehavior *: [Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior](../../../../../Mechanical/DataModel/Enums/Linearized2DBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.Linearized2DBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Linearized2DBehavior.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.LoadMultiplier"></a>

### *property* LinearizedShearStress.LoadMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.LoadStep"></a>

### *property* LinearizedShearStress.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* LinearizedShearStress.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* LinearizedShearStress.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* LinearizedShearStress.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* LinearizedShearStress.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.LoadStepNumber"></a>

### *property* LinearizedShearStress.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Location"></a>

### *property* LinearizedShearStress.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Maximum"></a>

### *property* LinearizedShearStress.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.MaximumOccursOn"></a>

### *property* LinearizedShearStress.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.MaximumOfMaximumOverTime"></a>

### *property* LinearizedShearStress.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.MaximumOfMinimumOverTime"></a>

### *property* LinearizedShearStress.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Membrane"></a>

### *property* LinearizedShearStress.Membrane *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Membrane.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.MembraneBendingCenter"></a>

### *property* LinearizedShearStress.MembraneBendingCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.MembraneBendingInside"></a>

### *property* LinearizedShearStress.MembraneBendingInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.MembraneBendingOutside"></a>

### *property* LinearizedShearStress.MembraneBendingOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MembraneBendingOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Minimum"></a>

### *property* LinearizedShearStress.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.MinimumOccursOn"></a>

### *property* LinearizedShearStress.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.MinimumOfMaximumOverTime"></a>

### *property* LinearizedShearStress.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.MinimumOfMinimumOverTime"></a>

### *property* LinearizedShearStress.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Name"></a>

### *property* LinearizedShearStress.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.NamedSelections"></a>

### *property* LinearizedShearStress.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.NormalOrientation"></a>

### *property* LinearizedShearStress.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ObjectId"></a>

### *property* LinearizedShearStress.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ObjectState"></a>

### *property* LinearizedShearStress.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ObjectTags"></a>

### *property* LinearizedShearStress.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Parent"></a>

### *property* LinearizedShearStress.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Path"></a>

### *property* LinearizedShearStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.PeakCenter"></a>

### *property* LinearizedShearStress.PeakCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.PeakInside"></a>

### *property* LinearizedShearStress.PeakInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.PeakOutside"></a>

### *property* LinearizedShearStress.PeakOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PeakOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.PlotData"></a>

### *property* LinearizedShearStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Position"></a>

### *property* LinearizedShearStress.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Properties"></a>

### *property* LinearizedShearStress.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.RPMSelection"></a>

### *property* LinearizedShearStress.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ResultType"></a>

### *property* LinearizedShearStress.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.RpmSetNumber"></a>

### *property* LinearizedShearStress.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ScopingMethod"></a>

### *property* LinearizedShearStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.SeparateDataByEntity"></a>

### *property* LinearizedShearStress.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.SetNumber"></a>

### *property* LinearizedShearStress.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ShearOrientation"></a>

### *property* LinearizedShearStress.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.SolutionCombinationDriver"></a>

### *property* LinearizedShearStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.SolverComponentIDs"></a>

### *property* LinearizedShearStress.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.State"></a>

### *property* LinearizedShearStress.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.StressStrainType"></a>

### *property* LinearizedShearStress.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Substep"></a>

### *property* LinearizedShearStress.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Subtype"></a>

### *property* LinearizedShearStress.Subtype *: [Ansys.Mechanical.DataModel.Enums.LinearizedSubtype](../../../../../Mechanical/DataModel/Enums/LinearizedSubtype.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LinearizedSubtype) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Subtype.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Suppressed"></a>

### *property* LinearizedShearStress.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Surface"></a>

### *property* LinearizedShearStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.SurfaceCoating"></a>

### *property* LinearizedShearStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.SweepingPhase"></a>

### *property* LinearizedShearStress.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.TabularData"></a>

### *property* LinearizedShearStress.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ThroughThicknessBendingStress"></a>

### *property* LinearizedShearStress.ThroughThicknessBendingStress *: [Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress](../../../../../Mechanical/DataModel/Enums/ThroughThicknessBendingStress.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ThroughThicknessBendingStress) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Time"></a>

### *property* LinearizedShearStress.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.TimeForMaximumOfMaximumValues"></a>

### *property* LinearizedShearStress.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.TimeForMaximumOfMinimumValues"></a>

### *property* LinearizedShearStress.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.TimeForMinimumOfMaximumValues"></a>

### *property* LinearizedShearStress.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.TimeForMinimumOfMinimumValues"></a>

### *property* LinearizedShearStress.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Total"></a>

### *property* LinearizedShearStress.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.TotalCenter"></a>

### *property* LinearizedShearStress.TotalCenter *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalCenter.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.TotalInside"></a>

### *property* LinearizedShearStress.TotalInside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalInside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.TotalOutside"></a>

### *property* LinearizedShearStress.TotalOutside *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalOutside.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.VisibleProperties"></a>

### *property* LinearizedShearStress.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayFilterBy"></a>

### *property* LinearizedShearStress.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayFrequencySelection"></a>

### *property* LinearizedShearStress.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayInterpolateData"></a>

### *property* LinearizedShearStress.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayLowerBand"></a>

### *property* LinearizedShearStress.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayMaxRPM"></a>

### *property* LinearizedShearStress.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayMinRPM"></a>

### *property* LinearizedShearStress.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayModeSelection"></a>

### *property* LinearizedShearStress.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayOrderSelection"></a>

### *property* LinearizedShearStress.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayRpmSelection"></a>

### *property* LinearizedShearStress.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayScopeToOrderLines"></a>

### *property* LinearizedShearStress.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayTimeSelection"></a>

### *property* LinearizedShearStress.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayUpperBand"></a>

### *property* LinearizedShearStress.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayXAxisMaximum"></a>

### *property* LinearizedShearStress.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayXAxisMinimum"></a>

### *property* LinearizedShearStress.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayYAxisMaximum"></a>

### *property* LinearizedShearStress.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallDisplayYAxisMinimum"></a>

### *property* LinearizedShearStress.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.WaterfallShowTextOnMosaic"></a>

### *property* LinearizedShearStress.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ZeroThroughThicknessBendingStress"></a>

### *property* LinearizedShearStress.ZeroThroughThicknessBendingStress *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZeroThroughThicknessBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LinearizedShearStress.Activate"></a>

### LinearizedShearStress.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.AddAlert"></a>

### LinearizedShearStress.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.AddComment"></a>

### LinearizedShearStress.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.AddConvergence"></a>

### LinearizedShearStress.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.AddFigure"></a>

### LinearizedShearStress.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.AddImage"></a>

### LinearizedShearStress.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.BodyWhereMaximumOccurs"></a>

### LinearizedShearStress.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ClearGeneratedData"></a>

### LinearizedShearStress.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Copy"></a>

### LinearizedShearStress.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.CopyTo"></a>

### LinearizedShearStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.CreateObjRef"></a>

### LinearizedShearStress.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.CreateParameter"></a>

### LinearizedShearStress.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.CreateResultsAtAllSets"></a>

### LinearizedShearStress.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Cut"></a>

### LinearizedShearStress.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Delete"></a>

### LinearizedShearStress.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Duplicate"></a>

### LinearizedShearStress.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.DuplicateWithoutResults"></a>

### LinearizedShearStress.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Equals"></a>

### LinearizedShearStress.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.EvaluateAllResults"></a>

### LinearizedShearStress.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ExportAnimation"></a>

### LinearizedShearStress.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ExportToSTLFile"></a>

### LinearizedShearStress.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.ExportToTextFile"></a>

### LinearizedShearStress.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### LinearizedShearStress.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.FetchRemoteResult"></a>

### LinearizedShearStress.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.FetchRemoteResults"></a>

### LinearizedShearStress.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetAPIName"></a>

### LinearizedShearStress.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetAllProperties"></a>

### LinearizedShearStress.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetChildren"></a>

### LinearizedShearStress.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### LinearizedShearStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetDetailsView"></a>

### LinearizedShearStress.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetEnumName"></a>

### LinearizedShearStress.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetHashCode"></a>

### LinearizedShearStress.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetIconFile"></a>

### LinearizedShearStress.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetLifetimeService"></a>

### LinearizedShearStress.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetNodalValues"></a>

### LinearizedShearStress.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetObjectData"></a>

### LinearizedShearStress.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetParameter"></a>

### LinearizedShearStress.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetPath"></a>

### LinearizedShearStress.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetPropertyName"></a>

### LinearizedShearStress.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetPropertyValue"></a>

### LinearizedShearStress.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetQuantityName"></a>

### LinearizedShearStress.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetVisibleProperties"></a>

### LinearizedShearStress.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GetVisiblePropertyNames"></a>

### LinearizedShearStress.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GroupAllSimilarChildren"></a>

### LinearizedShearStress.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.GroupSimilarObjects"></a>

### LinearizedShearStress.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.InitializeLifetimeService"></a>

### LinearizedShearStress.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.IsPropertyEditable"></a>

### LinearizedShearStress.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LinearizedShearStress.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.IsPropertyVisible"></a>

### LinearizedShearStress.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LinearizedShearStress.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.Paste"></a>

### LinearizedShearStress.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.PromoteToNamedSelection"></a>

### LinearizedShearStress.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.PropertyByAPIName"></a>

### LinearizedShearStress.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.PropertyById"></a>

### LinearizedShearStress.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.PropertyByName"></a>

### LinearizedShearStress.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.RemoveFromGroup"></a>

### LinearizedShearStress.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.RemoveParameter"></a>

### LinearizedShearStress.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.RenameBasedOnDefinition"></a>

### LinearizedShearStress.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.RetrieveRemoteDPFResults"></a>

### LinearizedShearStress.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="LinearizedShearStress.RetrieveResult"></a>

### LinearizedShearStress.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

