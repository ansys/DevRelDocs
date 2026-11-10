# `TotalTorsionalMoment`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalTorsionalMoment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalTorsionalMoment(internalObject: Any)

<a id="TotalTorsionalMoment"></a>

### *class* TotalTorsionalMoment(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a TotalTorsionalMoment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#TotalTorsionalMoment.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#TotalTorsionalMoment.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#TotalTorsionalMoment.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#TotalTorsionalMoment.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#TotalTorsionalMoment.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#TotalTorsionalMoment.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#TotalTorsionalMoment.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#TotalTorsionalMoment.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#TotalTorsionalMoment.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#TotalTorsionalMoment.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#TotalTorsionalMoment.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#TotalTorsionalMoment.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#TotalTorsionalMoment.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#TotalTorsionalMoment.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#TotalTorsionalMoment.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#TotalTorsionalMoment.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#TotalTorsionalMoment.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#TotalTorsionalMoment.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#TotalTorsionalMoment.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#TotalTorsionalMoment.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#TotalTorsionalMoment.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#TotalTorsionalMoment.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#TotalTorsionalMoment.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#TotalTorsionalMoment.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#TotalTorsionalMoment.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#TotalTorsionalMoment.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#TotalTorsionalMoment.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#TotalTorsionalMoment.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#TotalTorsionalMoment.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#TotalTorsionalMoment.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#TotalTorsionalMoment.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#TotalTorsionalMoment.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#TotalTorsionalMoment.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#TotalTorsionalMoment.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#TotalTorsionalMoment.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#TotalTorsionalMoment.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#TotalTorsionalMoment.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#TotalTorsionalMoment.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#TotalTorsionalMoment.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#TotalTorsionalMoment.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#TotalTorsionalMoment.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#TotalTorsionalMoment.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#TotalTorsionalMoment.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#TotalTorsionalMoment.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#TotalTorsionalMoment.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#TotalTorsionalMoment.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#TotalTorsionalMoment.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#TotalTorsionalMoment.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#TotalTorsionalMoment.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#TotalTorsionalMoment.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#TotalTorsionalMoment.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#TotalTorsionalMoment.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#TotalTorsionalMoment.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#TotalTorsionalMoment.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#TotalTorsionalMoment.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#TotalTorsionalMoment.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#TotalTorsionalMoment.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#TotalTorsionalMoment.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#TotalTorsionalMoment.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#TotalTorsionalMoment.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#TotalTorsionalMoment.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#TotalTorsionalMoment.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#TotalTorsionalMoment.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#TotalTorsionalMoment.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                 | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#TotalTorsionalMoment.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#TotalTorsionalMoment.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#TotalTorsionalMoment.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#TotalTorsionalMoment.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#TotalTorsionalMoment.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#TotalTorsionalMoment.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#TotalTorsionalMoment.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#TotalTorsionalMoment.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#TotalTorsionalMoment.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#TotalTorsionalMoment.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#TotalTorsionalMoment.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#TotalTorsionalMoment.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#TotalTorsionalMoment.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#TotalTorsionalMoment.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#TotalTorsionalMoment.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#TotalTorsionalMoment.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#TotalTorsionalMoment.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#TotalTorsionalMoment.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#TotalTorsionalMoment.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#TotalTorsionalMoment.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#TotalTorsionalMoment.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#TotalTorsionalMoment.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#TotalTorsionalMoment.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#TotalTorsionalMoment.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#TotalTorsionalMoment.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#TotalTorsionalMoment.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#TotalTorsionalMoment.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#TotalTorsionalMoment.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#TotalTorsionalMoment.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#TotalTorsionalMoment.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#TotalTorsionalMoment.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#TotalTorsionalMoment.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                    | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#TotalTorsionalMoment.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#TotalTorsionalMoment.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#TotalTorsionalMoment.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#TotalTorsionalMoment.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                     | Path property.                                                                                           |
| [`PlotData`](#TotalTorsionalMoment.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#TotalTorsionalMoment.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#TotalTorsionalMoment.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#TotalTorsionalMoment.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#TotalTorsionalMoment.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#TotalTorsionalMoment.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#TotalTorsionalMoment.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#TotalTorsionalMoment.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#TotalTorsionalMoment.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#TotalTorsionalMoment.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#TotalTorsionalMoment.State)                                                           | State property.                                                                                          |
| [`Substep`](#TotalTorsionalMoment.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#TotalTorsionalMoment.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                            | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                       | SurfaceCoating property.                                                                                 |
| [`TabularData`](#TotalTorsionalMoment.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#TotalTorsionalMoment.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#TotalTorsionalMoment.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#TotalTorsionalMoment.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#TotalTorsionalMoment.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#TotalTorsionalMoment.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#TotalTorsionalMoment.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#TotalTorsionalMoment.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#TotalTorsionalMoment.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#TotalTorsionalMoment.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#TotalTorsionalMoment.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#TotalTorsionalMoment.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#TotalTorsionalMoment.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#TotalTorsionalMoment.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#TotalTorsionalMoment.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#TotalTorsionalMoment.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#TotalTorsionalMoment.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#TotalTorsionalMoment.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#TotalTorsionalMoment.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#TotalTorsionalMoment.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#TotalTorsionalMoment.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#TotalTorsionalMoment.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#TotalTorsionalMoment.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#TotalTorsionalMoment.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#TotalTorsionalMoment.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="TotalTorsionalMoment.AttachedRefs"></a>

### *property* TotalTorsionalMoment.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Average"></a>

### *property* TotalTorsionalMoment.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.By"></a>

### *property* TotalTorsionalMoment.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CalculateTimeHistory"></a>

### *property* TotalTorsionalMoment.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Children"></a>

### *property* TotalTorsionalMoment.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ClsId"></a>

### *property* TotalTorsionalMoment.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CombinationNumber"></a>

### *property* TotalTorsionalMoment.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Comments"></a>

### *property* TotalTorsionalMoment.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CoordinateSystem"></a>

### *property* TotalTorsionalMoment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CrackFrontNumber"></a>

### *property* TotalTorsionalMoment.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.DataModelObjectCategory"></a>

### *property* TotalTorsionalMoment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.DisplayOption"></a>

### *property* TotalTorsionalMoment.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.DisplayTime"></a>

### *property* TotalTorsionalMoment.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.DpfEvaluation"></a>

### *property* TotalTorsionalMoment.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Figures"></a>

### *property* TotalTorsionalMoment.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GlobalIDs"></a>

### *property* TotalTorsionalMoment.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GraphControlsXAxis"></a>

### *property* TotalTorsionalMoment.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GroupingFolder"></a>

### *property* TotalTorsionalMoment.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.IconName"></a>

### *property* TotalTorsionalMoment.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Identifier"></a>

### *property* TotalTorsionalMoment.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Images"></a>

### *property* TotalTorsionalMoment.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.InternalObject"></a>

### *property* TotalTorsionalMoment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.IsSolved"></a>

### *property* TotalTorsionalMoment.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ItemType"></a>

### *property* TotalTorsionalMoment.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.IterationNumber"></a>

### *property* TotalTorsionalMoment.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.LoadStep"></a>

### *property* TotalTorsionalMoment.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalTorsionalMoment.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalTorsionalMoment.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalTorsionalMoment.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalTorsionalMoment.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.LoadStepNumber"></a>

### *property* TotalTorsionalMoment.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Location"></a>

### *property* TotalTorsionalMoment.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Maximum"></a>

### *property* TotalTorsionalMoment.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.MaximumOccursOn"></a>

### *property* TotalTorsionalMoment.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.MaximumOfMaximumOverTime"></a>

### *property* TotalTorsionalMoment.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.MaximumOfMinimumOverTime"></a>

### *property* TotalTorsionalMoment.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Minimum"></a>

### *property* TotalTorsionalMoment.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.MinimumOccursOn"></a>

### *property* TotalTorsionalMoment.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.MinimumOfMaximumOverTime"></a>

### *property* TotalTorsionalMoment.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.MinimumOfMinimumOverTime"></a>

### *property* TotalTorsionalMoment.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Name"></a>

### *property* TotalTorsionalMoment.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.NamedSelections"></a>

### *property* TotalTorsionalMoment.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ObjectId"></a>

### *property* TotalTorsionalMoment.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ObjectState"></a>

### *property* TotalTorsionalMoment.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ObjectTags"></a>

### *property* TotalTorsionalMoment.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Parent"></a>

### *property* TotalTorsionalMoment.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Path"></a>

### *property* TotalTorsionalMoment.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.PlotData"></a>

### *property* TotalTorsionalMoment.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Properties"></a>

### *property* TotalTorsionalMoment.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.RPMSelection"></a>

### *property* TotalTorsionalMoment.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ResultType"></a>

### *property* TotalTorsionalMoment.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.RpmSetNumber"></a>

### *property* TotalTorsionalMoment.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ScopingMethod"></a>

### *property* TotalTorsionalMoment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.SeparateDataByEntity"></a>

### *property* TotalTorsionalMoment.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.SetNumber"></a>

### *property* TotalTorsionalMoment.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.SolutionCombinationDriver"></a>

### *property* TotalTorsionalMoment.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.SolverComponentIDs"></a>

### *property* TotalTorsionalMoment.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.State"></a>

### *property* TotalTorsionalMoment.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Substep"></a>

### *property* TotalTorsionalMoment.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Suppressed"></a>

### *property* TotalTorsionalMoment.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Surface"></a>

### *property* TotalTorsionalMoment.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.SurfaceCoating"></a>

### *property* TotalTorsionalMoment.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.TabularData"></a>

### *property* TotalTorsionalMoment.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Time"></a>

### *property* TotalTorsionalMoment.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.TimeForMaximumOfMaximumValues"></a>

### *property* TotalTorsionalMoment.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.TimeForMaximumOfMinimumValues"></a>

### *property* TotalTorsionalMoment.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.TimeForMinimumOfMaximumValues"></a>

### *property* TotalTorsionalMoment.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.TimeForMinimumOfMinimumValues"></a>

### *property* TotalTorsionalMoment.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Total"></a>

### *property* TotalTorsionalMoment.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.VisibleProperties"></a>

### *property* TotalTorsionalMoment.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayFilterBy"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayFrequencySelection"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayInterpolateData"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayLowerBand"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayMaxRPM"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayMinRPM"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayModeSelection"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayOrderSelection"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayRpmSelection"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayScopeToOrderLines"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayTimeSelection"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayUpperBand"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayXAxisMaximum"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayXAxisMinimum"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayYAxisMaximum"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallDisplayYAxisMinimum"></a>

### *property* TotalTorsionalMoment.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.WaterfallShowTextOnMosaic"></a>

### *property* TotalTorsionalMoment.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalTorsionalMoment.Activate"></a>

### TotalTorsionalMoment.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.AddAlert"></a>

### TotalTorsionalMoment.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.AddComment"></a>

### TotalTorsionalMoment.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.AddConvergence"></a>

### TotalTorsionalMoment.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.AddFigure"></a>

### TotalTorsionalMoment.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.AddImage"></a>

### TotalTorsionalMoment.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.BodyWhereMaximumOccurs"></a>

### TotalTorsionalMoment.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ClearGeneratedData"></a>

### TotalTorsionalMoment.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Copy"></a>

### TotalTorsionalMoment.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CopyTo"></a>

### TotalTorsionalMoment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CreateObjRef"></a>

### TotalTorsionalMoment.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CreateParameter"></a>

### TotalTorsionalMoment.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.CreateResultsAtAllSets"></a>

### TotalTorsionalMoment.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Cut"></a>

### TotalTorsionalMoment.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Delete"></a>

### TotalTorsionalMoment.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Duplicate"></a>

### TotalTorsionalMoment.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.DuplicateWithoutResults"></a>

### TotalTorsionalMoment.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Equals"></a>

### TotalTorsionalMoment.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.EvaluateAllResults"></a>

### TotalTorsionalMoment.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ExportAnimation"></a>

### TotalTorsionalMoment.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ExportToSTLFile"></a>

### TotalTorsionalMoment.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.ExportToTextFile"></a>

### TotalTorsionalMoment.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### TotalTorsionalMoment.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.FetchRemoteResult"></a>

### TotalTorsionalMoment.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.FetchRemoteResults"></a>

### TotalTorsionalMoment.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetAPIName"></a>

### TotalTorsionalMoment.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetAllProperties"></a>

### TotalTorsionalMoment.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetChildren"></a>

### TotalTorsionalMoment.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### TotalTorsionalMoment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetDetailsView"></a>

### TotalTorsionalMoment.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetEnumName"></a>

### TotalTorsionalMoment.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetHashCode"></a>

### TotalTorsionalMoment.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetIconFile"></a>

### TotalTorsionalMoment.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetLifetimeService"></a>

### TotalTorsionalMoment.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetNodalValues"></a>

### TotalTorsionalMoment.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetObjectData"></a>

### TotalTorsionalMoment.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetParameter"></a>

### TotalTorsionalMoment.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetPath"></a>

### TotalTorsionalMoment.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetPropertyName"></a>

### TotalTorsionalMoment.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetPropertyValue"></a>

### TotalTorsionalMoment.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetQuantityName"></a>

### TotalTorsionalMoment.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetVisibleProperties"></a>

### TotalTorsionalMoment.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GetVisiblePropertyNames"></a>

### TotalTorsionalMoment.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GroupAllSimilarChildren"></a>

### TotalTorsionalMoment.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.GroupSimilarObjects"></a>

### TotalTorsionalMoment.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.InitializeLifetimeService"></a>

### TotalTorsionalMoment.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.IsPropertyEditable"></a>

### TotalTorsionalMoment.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TotalTorsionalMoment.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.IsPropertyVisible"></a>

### TotalTorsionalMoment.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### TotalTorsionalMoment.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.Paste"></a>

### TotalTorsionalMoment.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.PromoteToNamedSelection"></a>

### TotalTorsionalMoment.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.PropertyByAPIName"></a>

### TotalTorsionalMoment.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.PropertyById"></a>

### TotalTorsionalMoment.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.PropertyByName"></a>

### TotalTorsionalMoment.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.RemoveFromGroup"></a>

### TotalTorsionalMoment.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.RemoveParameter"></a>

### TotalTorsionalMoment.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.RenameBasedOnDefinition"></a>

### TotalTorsionalMoment.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.RetrieveRemoteDPFResults"></a>

### TotalTorsionalMoment.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="TotalTorsionalMoment.RetrieveResult"></a>

### TotalTorsionalMoment.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

