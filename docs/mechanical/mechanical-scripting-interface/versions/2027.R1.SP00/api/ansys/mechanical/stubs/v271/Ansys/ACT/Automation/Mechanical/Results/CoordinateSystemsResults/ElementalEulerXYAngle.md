# `ElementalEulerXYAngle`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalEulerXYAngle"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalEulerXYAngle(internalObject: Any)

<a id="ElementalEulerXYAngle"></a>

### *class* ElementalEulerXYAngle(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ElementalEulerXYAngle.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ElementalEulerXYAngle.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#ElementalEulerXYAngle.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#ElementalEulerXYAngle.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#ElementalEulerXYAngle.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#ElementalEulerXYAngle.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ElementalEulerXYAngle.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#ElementalEulerXYAngle.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#ElementalEulerXYAngle.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ElementalEulerXYAngle.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ElementalEulerXYAngle.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ElementalEulerXYAngle.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ElementalEulerXYAngle.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#ElementalEulerXYAngle.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#ElementalEulerXYAngle.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ElementalEulerXYAngle.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ElementalEulerXYAngle.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#ElementalEulerXYAngle.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#ElementalEulerXYAngle.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#ElementalEulerXYAngle.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#ElementalEulerXYAngle.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#ElementalEulerXYAngle.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#ElementalEulerXYAngle.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#ElementalEulerXYAngle.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#ElementalEulerXYAngle.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#ElementalEulerXYAngle.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#ElementalEulerXYAngle.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ElementalEulerXYAngle.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ElementalEulerXYAngle.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ElementalEulerXYAngle.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ElementalEulerXYAngle.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ElementalEulerXYAngle.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ElementalEulerXYAngle.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#ElementalEulerXYAngle.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#ElementalEulerXYAngle.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ElementalEulerXYAngle.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ElementalEulerXYAngle.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ElementalEulerXYAngle.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ElementalEulerXYAngle.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#ElementalEulerXYAngle.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#ElementalEulerXYAngle.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ElementalEulerXYAngle.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ElementalEulerXYAngle.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ElementalEulerXYAngle.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ElementalEulerXYAngle.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ElementalEulerXYAngle.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ElementalEulerXYAngle.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ElementalEulerXYAngle.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#ElementalEulerXYAngle.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#ElementalEulerXYAngle.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ElementalEulerXYAngle.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ElementalEulerXYAngle.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ElementalEulerXYAngle.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ElementalEulerXYAngle.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ElementalEulerXYAngle.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#ElementalEulerXYAngle.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#ElementalEulerXYAngle.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`Amplitude`](#ElementalEulerXYAngle.Amplitude)                                                   | Gets or sets the Amplitude.                                                                              |
| [`AttachedRefs`](#ElementalEulerXYAngle.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#ElementalEulerXYAngle.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#ElementalEulerXYAngle.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#ElementalEulerXYAngle.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#ElementalEulerXYAngle.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#ElementalEulerXYAngle.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#ElementalEulerXYAngle.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#ElementalEulerXYAngle.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                  | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#ElementalEulerXYAngle.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#ElementalEulerXYAngle.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#ElementalEulerXYAngle.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#ElementalEulerXYAngle.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#ElementalEulerXYAngle.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#ElementalEulerXYAngle.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`Frequency`](#ElementalEulerXYAngle.Frequency)                                                   | Gets or sets the Frequency.                                                                              |
| [`GlobalIDs`](#ElementalEulerXYAngle.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#ElementalEulerXYAngle.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#ElementalEulerXYAngle.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#ElementalEulerXYAngle.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#ElementalEulerXYAngle.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#ElementalEulerXYAngle.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#ElementalEulerXYAngle.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#ElementalEulerXYAngle.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#ElementalEulerXYAngle.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#ElementalEulerXYAngle.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadMultiplier`](#ElementalEulerXYAngle.LoadMultiplier)                                         | Gets the LoadMultiplier.                                                                                 |
| [`LoadStep`](#ElementalEulerXYAngle.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#ElementalEulerXYAngle.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#ElementalEulerXYAngle.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#ElementalEulerXYAngle.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#ElementalEulerXYAngle.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#ElementalEulerXYAngle.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#ElementalEulerXYAngle.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#ElementalEulerXYAngle.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#ElementalEulerXYAngle.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#ElementalEulerXYAngle.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#ElementalEulerXYAngle.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#ElementalEulerXYAngle.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#ElementalEulerXYAngle.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#ElementalEulerXYAngle.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#ElementalEulerXYAngle.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Mode`](#ElementalEulerXYAngle.Mode)                                                             | Gets or sets the Mode.                                                                                   |
| [`Name`](#ElementalEulerXYAngle.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                     | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#ElementalEulerXYAngle.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#ElementalEulerXYAngle.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#ElementalEulerXYAngle.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#ElementalEulerXYAngle.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                      | Path property.                                                                                           |
| [`PhaseIncrement`](#ElementalEulerXYAngle.PhaseIncrement)                                         | Gets or sets the PhaseIncrement.                                                                         |
| [`PlotData`](#ElementalEulerXYAngle.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Ply`](#ElementalEulerXYAngle.Ply)                                                               | Gets or sets the Ply selection.                                                                          |
| [`Position`](#Position)                                                | Gets or sets the Position.                                                                               |
| [`Properties`](#ElementalEulerXYAngle.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#ElementalEulerXYAngle.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#ElementalEulerXYAngle.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#ElementalEulerXYAngle.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScaleFactor`](#ElementalEulerXYAngle.ScaleFactor)                                               | Gets or sets the ScaleFactor.                                                                            |
| [`ScaleFactorValue`](#ElementalEulerXYAngle.ScaleFactorValue)                                     | Gets or sets the ScaleFactorValue.                                                                       |
| [`ScopingMethod`](#ElementalEulerXYAngle.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#ElementalEulerXYAngle.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#ElementalEulerXYAngle.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#ElementalEulerXYAngle.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#ElementalEulerXYAngle.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#ElementalEulerXYAngle.State)                                                           | State property.                                                                                          |
| [`SubScopeBy`](#ElementalEulerXYAngle.SubScopeBy)                                                 | Gets or sets the SubScopeBy.                                                                             |
| [`Substep`](#ElementalEulerXYAngle.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#ElementalEulerXYAngle.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                             | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                        | SurfaceCoating property.                                                                                 |
| [`SweepingPhase`](#ElementalEulerXYAngle.SweepingPhase)                                           | Gets or sets the SweepingPhase.                                                                          |
| [`TabularData`](#ElementalEulerXYAngle.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#ElementalEulerXYAngle.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#ElementalEulerXYAngle.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#ElementalEulerXYAngle.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#ElementalEulerXYAngle.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#ElementalEulerXYAngle.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#ElementalEulerXYAngle.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#ElementalEulerXYAngle.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#ElementalEulerXYAngle.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#ElementalEulerXYAngle.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#ElementalEulerXYAngle.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#ElementalEulerXYAngle.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#ElementalEulerXYAngle.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#ElementalEulerXYAngle.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#ElementalEulerXYAngle.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#ElementalEulerXYAngle.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#ElementalEulerXYAngle.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#ElementalEulerXYAngle.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#ElementalEulerXYAngle.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#ElementalEulerXYAngle.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#ElementalEulerXYAngle.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#ElementalEulerXYAngle.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#ElementalEulerXYAngle.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#ElementalEulerXYAngle.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#ElementalEulerXYAngle.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="ElementalEulerXYAngle.Amplitude"></a>

### *property* ElementalEulerXYAngle.Amplitude *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.AttachedRefs"></a>

### *property* ElementalEulerXYAngle.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Average"></a>

### *property* ElementalEulerXYAngle.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.By"></a>

### *property* ElementalEulerXYAngle.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CalculateTimeHistory"></a>

### *property* ElementalEulerXYAngle.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Children"></a>

### *property* ElementalEulerXYAngle.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ClsId"></a>

### *property* ElementalEulerXYAngle.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CombinationNumber"></a>

### *property* ElementalEulerXYAngle.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Comments"></a>

### *property* ElementalEulerXYAngle.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CoordinateSystem"></a>

### *property* ElementalEulerXYAngle.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CrackFrontNumber"></a>

### *property* ElementalEulerXYAngle.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.DataModelObjectCategory"></a>

### *property* ElementalEulerXYAngle.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.DisplayOption"></a>

### *property* ElementalEulerXYAngle.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.DisplayTime"></a>

### *property* ElementalEulerXYAngle.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.DpfEvaluation"></a>

### *property* ElementalEulerXYAngle.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Figures"></a>

### *property* ElementalEulerXYAngle.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Frequency"></a>

### *property* ElementalEulerXYAngle.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GlobalIDs"></a>

### *property* ElementalEulerXYAngle.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GraphControlsXAxis"></a>

### *property* ElementalEulerXYAngle.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GroupingFolder"></a>

### *property* ElementalEulerXYAngle.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.IconName"></a>

### *property* ElementalEulerXYAngle.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Identifier"></a>

### *property* ElementalEulerXYAngle.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Images"></a>

### *property* ElementalEulerXYAngle.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.InternalObject"></a>

### *property* ElementalEulerXYAngle.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.IsSolved"></a>

### *property* ElementalEulerXYAngle.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ItemType"></a>

### *property* ElementalEulerXYAngle.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.IterationNumber"></a>

### *property* ElementalEulerXYAngle.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadMultiplier"></a>

### *property* ElementalEulerXYAngle.LoadMultiplier *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadStep"></a>

### *property* ElementalEulerXYAngle.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadStepForMaximumOfMaximumValues"></a>

### *property* ElementalEulerXYAngle.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadStepForMaximumOfMinimumValues"></a>

### *property* ElementalEulerXYAngle.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadStepForMinimumOfMaximumValues"></a>

### *property* ElementalEulerXYAngle.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadStepForMinimumOfMinimumValues"></a>

### *property* ElementalEulerXYAngle.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.LoadStepNumber"></a>

### *property* ElementalEulerXYAngle.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Location"></a>

### *property* ElementalEulerXYAngle.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Maximum"></a>

### *property* ElementalEulerXYAngle.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.MaximumOccursOn"></a>

### *property* ElementalEulerXYAngle.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.MaximumOfMaximumOverTime"></a>

### *property* ElementalEulerXYAngle.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.MaximumOfMinimumOverTime"></a>

### *property* ElementalEulerXYAngle.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Minimum"></a>

### *property* ElementalEulerXYAngle.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.MinimumOccursOn"></a>

### *property* ElementalEulerXYAngle.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.MinimumOfMaximumOverTime"></a>

### *property* ElementalEulerXYAngle.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.MinimumOfMinimumOverTime"></a>

### *property* ElementalEulerXYAngle.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Mode"></a>

### *property* ElementalEulerXYAngle.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Name"></a>

### *property* ElementalEulerXYAngle.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.NamedSelections"></a>

### *property* ElementalEulerXYAngle.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ObjectId"></a>

### *property* ElementalEulerXYAngle.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ObjectState"></a>

### *property* ElementalEulerXYAngle.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ObjectTags"></a>

### *property* ElementalEulerXYAngle.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Parent"></a>

### *property* ElementalEulerXYAngle.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Path"></a>

### *property* ElementalEulerXYAngle.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.PhaseIncrement"></a>

### *property* ElementalEulerXYAngle.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.PlotData"></a>

### *property* ElementalEulerXYAngle.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Ply"></a>

### *property* ElementalEulerXYAngle.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Position"></a>

### *property* ElementalEulerXYAngle.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Properties"></a>

### *property* ElementalEulerXYAngle.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.RPMSelection"></a>

### *property* ElementalEulerXYAngle.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ResultType"></a>

### *property* ElementalEulerXYAngle.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.RpmSetNumber"></a>

### *property* ElementalEulerXYAngle.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ScaleFactor"></a>

### *property* ElementalEulerXYAngle.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ScaleFactorValue"></a>

### *property* ElementalEulerXYAngle.ScaleFactorValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ScopingMethod"></a>

### *property* ElementalEulerXYAngle.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.SeparateDataByEntity"></a>

### *property* ElementalEulerXYAngle.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.SetNumber"></a>

### *property* ElementalEulerXYAngle.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.SolutionCombinationDriver"></a>

### *property* ElementalEulerXYAngle.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.SolverComponentIDs"></a>

### *property* ElementalEulerXYAngle.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.State"></a>

### *property* ElementalEulerXYAngle.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.SubScopeBy"></a>

### *property* ElementalEulerXYAngle.SubScopeBy *: [Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType](../../../../../Mechanical/DataModel/Enums/SubScopingDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SubScopingDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SubScopeBy.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Substep"></a>

### *property* ElementalEulerXYAngle.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Suppressed"></a>

### *property* ElementalEulerXYAngle.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Surface"></a>

### *property* ElementalEulerXYAngle.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.SurfaceCoating"></a>

### *property* ElementalEulerXYAngle.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.SweepingPhase"></a>

### *property* ElementalEulerXYAngle.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.TabularData"></a>

### *property* ElementalEulerXYAngle.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Time"></a>

### *property* ElementalEulerXYAngle.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.TimeForMaximumOfMaximumValues"></a>

### *property* ElementalEulerXYAngle.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.TimeForMaximumOfMinimumValues"></a>

### *property* ElementalEulerXYAngle.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.TimeForMinimumOfMaximumValues"></a>

### *property* ElementalEulerXYAngle.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.TimeForMinimumOfMinimumValues"></a>

### *property* ElementalEulerXYAngle.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Total"></a>

### *property* ElementalEulerXYAngle.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.VisibleProperties"></a>

### *property* ElementalEulerXYAngle.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayFilterBy"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayFrequencySelection"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayInterpolateData"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayLowerBand"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayMaxRPM"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayMinRPM"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayModeSelection"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayOrderSelection"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayRpmSelection"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayScopeToOrderLines"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayTimeSelection"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayUpperBand"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayXAxisMaximum"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayXAxisMinimum"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayYAxisMaximum"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallDisplayYAxisMinimum"></a>

### *property* ElementalEulerXYAngle.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.WaterfallShowTextOnMosaic"></a>

### *property* ElementalEulerXYAngle.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementalEulerXYAngle.Activate"></a>

### ElementalEulerXYAngle.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.AddAlert"></a>

### ElementalEulerXYAngle.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.AddComment"></a>

### ElementalEulerXYAngle.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.AddConvergence"></a>

### ElementalEulerXYAngle.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.AddFigure"></a>

### ElementalEulerXYAngle.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.AddImage"></a>

### ElementalEulerXYAngle.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.BodyWhereMaximumOccurs"></a>

### ElementalEulerXYAngle.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ClearGeneratedData"></a>

### ElementalEulerXYAngle.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Copy"></a>

### ElementalEulerXYAngle.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CopyTo"></a>

### ElementalEulerXYAngle.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CreateObjRef"></a>

### ElementalEulerXYAngle.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CreateParameter"></a>

### ElementalEulerXYAngle.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.CreateResultsAtAllSets"></a>

### ElementalEulerXYAngle.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Cut"></a>

### ElementalEulerXYAngle.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Delete"></a>

### ElementalEulerXYAngle.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Duplicate"></a>

### ElementalEulerXYAngle.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.DuplicateWithoutResults"></a>

### ElementalEulerXYAngle.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Equals"></a>

### ElementalEulerXYAngle.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.EvaluateAllResults"></a>

### ElementalEulerXYAngle.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ExportAnimation"></a>

### ElementalEulerXYAngle.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ExportToSTLFile"></a>

### ElementalEulerXYAngle.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.ExportToTextFile"></a>

### ElementalEulerXYAngle.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ElementalEulerXYAngle.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.FetchRemoteResult"></a>

### ElementalEulerXYAngle.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.FetchRemoteResults"></a>

### ElementalEulerXYAngle.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetAPIName"></a>

### ElementalEulerXYAngle.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetAllProperties"></a>

### ElementalEulerXYAngle.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetChildren"></a>

### ElementalEulerXYAngle.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ElementalEulerXYAngle.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetDetailsView"></a>

### ElementalEulerXYAngle.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetEnumName"></a>

### ElementalEulerXYAngle.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetHashCode"></a>

### ElementalEulerXYAngle.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetIconFile"></a>

### ElementalEulerXYAngle.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetLifetimeService"></a>

### ElementalEulerXYAngle.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetNodalValues"></a>

### ElementalEulerXYAngle.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetObjectData"></a>

### ElementalEulerXYAngle.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetParameter"></a>

### ElementalEulerXYAngle.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetPath"></a>

### ElementalEulerXYAngle.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetPropertyName"></a>

### ElementalEulerXYAngle.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetPropertyValue"></a>

### ElementalEulerXYAngle.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetQuantityName"></a>

### ElementalEulerXYAngle.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetVisibleProperties"></a>

### ElementalEulerXYAngle.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GetVisiblePropertyNames"></a>

### ElementalEulerXYAngle.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GroupAllSimilarChildren"></a>

### ElementalEulerXYAngle.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.GroupSimilarObjects"></a>

### ElementalEulerXYAngle.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.InitializeLifetimeService"></a>

### ElementalEulerXYAngle.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.IsPropertyEditable"></a>

### ElementalEulerXYAngle.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ElementalEulerXYAngle.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.IsPropertyVisible"></a>

### ElementalEulerXYAngle.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ElementalEulerXYAngle.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.Paste"></a>

### ElementalEulerXYAngle.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.PromoteToNamedSelection"></a>

### ElementalEulerXYAngle.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.PropertyByAPIName"></a>

### ElementalEulerXYAngle.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.PropertyById"></a>

### ElementalEulerXYAngle.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.PropertyByName"></a>

### ElementalEulerXYAngle.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.RemoveFromGroup"></a>

### ElementalEulerXYAngle.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.RemoveParameter"></a>

### ElementalEulerXYAngle.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.RenameBasedOnDefinition"></a>

### ElementalEulerXYAngle.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.RetrieveRemoteDPFResults"></a>

### ElementalEulerXYAngle.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalEulerXYAngle.RetrieveResult"></a>

### ElementalEulerXYAngle.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

