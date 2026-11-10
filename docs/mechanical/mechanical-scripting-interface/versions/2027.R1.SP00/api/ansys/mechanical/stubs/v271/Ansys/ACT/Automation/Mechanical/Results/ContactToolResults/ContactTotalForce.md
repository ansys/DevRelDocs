# `ContactTotalForce`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactTotalForce"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ContactToolResults.ContactTotalForce(internalObject: Any)

<a id="ContactTotalForce"></a>

### *class* ContactTotalForce(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactTotalForce.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ContactTotalForce.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#ContactTotalForce.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#ContactTotalForce.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#ContactTotalForce.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#ContactTotalForce.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ContactTotalForce.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#ContactTotalForce.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#ContactTotalForce.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ContactTotalForce.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ContactTotalForce.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ContactTotalForce.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ContactTotalForce.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#ContactTotalForce.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#ContactTotalForce.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ContactTotalForce.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ContactTotalForce.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#ContactTotalForce.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#ContactTotalForce.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#ContactTotalForce.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#ContactTotalForce.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#ContactTotalForce.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#ContactTotalForce.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#ContactTotalForce.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#ContactTotalForce.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#ContactTotalForce.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#ContactTotalForce.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ContactTotalForce.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ContactTotalForce.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ContactTotalForce.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ContactTotalForce.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ContactTotalForce.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ContactTotalForce.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#ContactTotalForce.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#ContactTotalForce.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ContactTotalForce.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ContactTotalForce.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ContactTotalForce.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ContactTotalForce.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#ContactTotalForce.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#ContactTotalForce.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ContactTotalForce.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ContactTotalForce.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ContactTotalForce.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ContactTotalForce.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ContactTotalForce.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ContactTotalForce.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ContactTotalForce.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#ContactTotalForce.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#ContactTotalForce.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ContactTotalForce.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ContactTotalForce.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ContactTotalForce.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ContactTotalForce.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ContactTotalForce.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#ContactTotalForce.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#ContactTotalForce.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#ContactTotalForce.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#ContactTotalForce.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#ContactTotalForce.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#ContactTotalForce.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#ContactTotalForce.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#ContactTotalForce.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#ContactTotalForce.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#ContactTotalForce.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`ContactResultType`](#ContactTotalForce.ContactResultType)                                   | Gets or sets the ContactResultType.                                                                      |
| [`CoordinateSystem`](#CoordinateSystem)                              | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#ContactTotalForce.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#ContactTotalForce.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#ContactTotalForce.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#ContactTotalForce.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#ContactTotalForce.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#ContactTotalForce.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#ContactTotalForce.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#ContactTotalForce.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#ContactTotalForce.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#ContactTotalForce.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#ContactTotalForce.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#ContactTotalForce.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#ContactTotalForce.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#ContactTotalForce.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#ContactTotalForce.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#ContactTotalForce.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#ContactTotalForce.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#ContactTotalForce.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#ContactTotalForce.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#ContactTotalForce.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#ContactTotalForce.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#ContactTotalForce.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#ContactTotalForce.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#ContactTotalForce.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#ContactTotalForce.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#ContactTotalForce.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#ContactTotalForce.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#ContactTotalForce.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#ContactTotalForce.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#ContactTotalForce.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#ContactTotalForce.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#ContactTotalForce.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                 | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#ContactTotalForce.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#ContactTotalForce.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#ContactTotalForce.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#ContactTotalForce.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                  | Path property.                                                                                           |
| [`PlotData`](#ContactTotalForce.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#ContactTotalForce.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#ContactTotalForce.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#ContactTotalForce.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#ContactTotalForce.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#ContactTotalForce.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#ContactTotalForce.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#ContactTotalForce.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#ContactTotalForce.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#ContactTotalForce.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#ContactTotalForce.State)                                                           | State property.                                                                                          |
| [`Substep`](#ContactTotalForce.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#ContactTotalForce.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                         | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                    | SurfaceCoating property.                                                                                 |
| [`TabularData`](#ContactTotalForce.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#ContactTotalForce.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#ContactTotalForce.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#ContactTotalForce.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#ContactTotalForce.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#ContactTotalForce.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#ContactTotalForce.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#ContactTotalForce.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#ContactTotalForce.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#ContactTotalForce.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#ContactTotalForce.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#ContactTotalForce.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#ContactTotalForce.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#ContactTotalForce.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#ContactTotalForce.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#ContactTotalForce.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#ContactTotalForce.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#ContactTotalForce.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#ContactTotalForce.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#ContactTotalForce.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#ContactTotalForce.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#ContactTotalForce.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#ContactTotalForce.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#ContactTotalForce.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#ContactTotalForce.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="ContactTotalForce.AttachedRefs"></a>

### *property* ContactTotalForce.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Average"></a>

### *property* ContactTotalForce.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.By"></a>

### *property* ContactTotalForce.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.CalculateTimeHistory"></a>

### *property* ContactTotalForce.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Children"></a>

### *property* ContactTotalForce.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.ClsId"></a>

### *property* ContactTotalForce.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.CombinationNumber"></a>

### *property* ContactTotalForce.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Comments"></a>

### *property* ContactTotalForce.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.ContactResultType"></a>

### *property* ContactTotalForce.ContactResultType *: [Ansys.Mechanical.DataModel.Enums.ContactResultType](../../../../../Mechanical/DataModel/Enums/ContactResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactResultType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.CoordinateSystem"></a>

### *property* ContactTotalForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.CrackFrontNumber"></a>

### *property* ContactTotalForce.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.DataModelObjectCategory"></a>

### *property* ContactTotalForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.DisplayOption"></a>

### *property* ContactTotalForce.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.DisplayTime"></a>

### *property* ContactTotalForce.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.DpfEvaluation"></a>

### *property* ContactTotalForce.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Figures"></a>

### *property* ContactTotalForce.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GlobalIDs"></a>

### *property* ContactTotalForce.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GraphControlsXAxis"></a>

### *property* ContactTotalForce.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GroupingFolder"></a>

### *property* ContactTotalForce.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.IconName"></a>

### *property* ContactTotalForce.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Identifier"></a>

### *property* ContactTotalForce.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Images"></a>

### *property* ContactTotalForce.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.InternalObject"></a>

### *property* ContactTotalForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.IsSolved"></a>

### *property* ContactTotalForce.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.ItemType"></a>

### *property* ContactTotalForce.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.IterationNumber"></a>

### *property* ContactTotalForce.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.LoadStep"></a>

### *property* ContactTotalForce.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.LoadStepForMaximumOfMaximumValues"></a>

### *property* ContactTotalForce.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.LoadStepForMaximumOfMinimumValues"></a>

### *property* ContactTotalForce.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.LoadStepForMinimumOfMaximumValues"></a>

### *property* ContactTotalForce.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.LoadStepForMinimumOfMinimumValues"></a>

### *property* ContactTotalForce.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.LoadStepNumber"></a>

### *property* ContactTotalForce.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Location"></a>

### *property* ContactTotalForce.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Maximum"></a>

### *property* ContactTotalForce.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.MaximumOccursOn"></a>

### *property* ContactTotalForce.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.MaximumOfMaximumOverTime"></a>

### *property* ContactTotalForce.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.MaximumOfMinimumOverTime"></a>

### *property* ContactTotalForce.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Minimum"></a>

### *property* ContactTotalForce.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.MinimumOccursOn"></a>

### *property* ContactTotalForce.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.MinimumOfMaximumOverTime"></a>

### *property* ContactTotalForce.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.MinimumOfMinimumOverTime"></a>

### *property* ContactTotalForce.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Name"></a>

### *property* ContactTotalForce.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.NamedSelections"></a>

### *property* ContactTotalForce.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.ObjectId"></a>

### *property* ContactTotalForce.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.ObjectState"></a>

### *property* ContactTotalForce.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.ObjectTags"></a>

### *property* ContactTotalForce.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Parent"></a>

### *property* ContactTotalForce.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Path"></a>

### *property* ContactTotalForce.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.PlotData"></a>

### *property* ContactTotalForce.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Properties"></a>

### *property* ContactTotalForce.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.RPMSelection"></a>

### *property* ContactTotalForce.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.ResultType"></a>

### *property* ContactTotalForce.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.RpmSetNumber"></a>

### *property* ContactTotalForce.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.ScopingMethod"></a>

### *property* ContactTotalForce.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.SeparateDataByEntity"></a>

### *property* ContactTotalForce.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.SetNumber"></a>

### *property* ContactTotalForce.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.SolutionCombinationDriver"></a>

### *property* ContactTotalForce.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.SolverComponentIDs"></a>

### *property* ContactTotalForce.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.State"></a>

### *property* ContactTotalForce.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Substep"></a>

### *property* ContactTotalForce.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Suppressed"></a>

### *property* ContactTotalForce.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Surface"></a>

### *property* ContactTotalForce.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.SurfaceCoating"></a>

### *property* ContactTotalForce.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.TabularData"></a>

### *property* ContactTotalForce.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Time"></a>

### *property* ContactTotalForce.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.TimeForMaximumOfMaximumValues"></a>

### *property* ContactTotalForce.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.TimeForMaximumOfMinimumValues"></a>

### *property* ContactTotalForce.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.TimeForMinimumOfMaximumValues"></a>

### *property* ContactTotalForce.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.TimeForMinimumOfMinimumValues"></a>

### *property* ContactTotalForce.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Total"></a>

### *property* ContactTotalForce.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.VisibleProperties"></a>

### *property* ContactTotalForce.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayFilterBy"></a>

### *property* ContactTotalForce.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayFrequencySelection"></a>

### *property* ContactTotalForce.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayInterpolateData"></a>

### *property* ContactTotalForce.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayLowerBand"></a>

### *property* ContactTotalForce.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayMaxRPM"></a>

### *property* ContactTotalForce.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayMinRPM"></a>

### *property* ContactTotalForce.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayModeSelection"></a>

### *property* ContactTotalForce.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayOrderSelection"></a>

### *property* ContactTotalForce.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayRpmSelection"></a>

### *property* ContactTotalForce.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayScopeToOrderLines"></a>

### *property* ContactTotalForce.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayTimeSelection"></a>

### *property* ContactTotalForce.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayUpperBand"></a>

### *property* ContactTotalForce.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayXAxisMaximum"></a>

### *property* ContactTotalForce.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayXAxisMinimum"></a>

### *property* ContactTotalForce.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayYAxisMaximum"></a>

### *property* ContactTotalForce.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallDisplayYAxisMinimum"></a>

### *property* ContactTotalForce.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.WaterfallShowTextOnMosaic"></a>

### *property* ContactTotalForce.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactTotalForce.Activate"></a>

### ContactTotalForce.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.AddAlert"></a>

### ContactTotalForce.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.AddComment"></a>

### ContactTotalForce.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.AddConvergence"></a>

### ContactTotalForce.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.AddFigure"></a>

### ContactTotalForce.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.AddImage"></a>

### ContactTotalForce.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.BodyWhereMaximumOccurs"></a>

### ContactTotalForce.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.ClearGeneratedData"></a>

### ContactTotalForce.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Copy"></a>

### ContactTotalForce.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.CopyTo"></a>

### ContactTotalForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.CreateObjRef"></a>

### ContactTotalForce.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.CreateParameter"></a>

### ContactTotalForce.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.CreateResultsAtAllSets"></a>

### ContactTotalForce.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Cut"></a>

### ContactTotalForce.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Delete"></a>

### ContactTotalForce.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Duplicate"></a>

### ContactTotalForce.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.DuplicateWithoutResults"></a>

### ContactTotalForce.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Equals"></a>

### ContactTotalForce.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.EvaluateAllResults"></a>

### ContactTotalForce.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.ExportAnimation"></a>

### ContactTotalForce.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.ExportToSTLFile"></a>

### ContactTotalForce.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.ExportToTextFile"></a>

### ContactTotalForce.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ContactTotalForce.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.FetchRemoteResult"></a>

### ContactTotalForce.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.FetchRemoteResults"></a>

### ContactTotalForce.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetAPIName"></a>

### ContactTotalForce.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetAllProperties"></a>

### ContactTotalForce.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetChildren"></a>

### ContactTotalForce.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactTotalForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetDetailsView"></a>

### ContactTotalForce.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetEnumName"></a>

### ContactTotalForce.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetHashCode"></a>

### ContactTotalForce.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetIconFile"></a>

### ContactTotalForce.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetLifetimeService"></a>

### ContactTotalForce.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetNodalValues"></a>

### ContactTotalForce.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetObjectData"></a>

### ContactTotalForce.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetParameter"></a>

### ContactTotalForce.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetPath"></a>

### ContactTotalForce.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetPropertyName"></a>

### ContactTotalForce.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetPropertyValue"></a>

### ContactTotalForce.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetQuantityName"></a>

### ContactTotalForce.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetVisibleProperties"></a>

### ContactTotalForce.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GetVisiblePropertyNames"></a>

### ContactTotalForce.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GroupAllSimilarChildren"></a>

### ContactTotalForce.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.GroupSimilarObjects"></a>

### ContactTotalForce.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.InitializeLifetimeService"></a>

### ContactTotalForce.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.IsPropertyEditable"></a>

### ContactTotalForce.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactTotalForce.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.IsPropertyVisible"></a>

### ContactTotalForce.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactTotalForce.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.Paste"></a>

### ContactTotalForce.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.PromoteToNamedSelection"></a>

### ContactTotalForce.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.PropertyByAPIName"></a>

### ContactTotalForce.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.PropertyById"></a>

### ContactTotalForce.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.PropertyByName"></a>

### ContactTotalForce.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.RemoveFromGroup"></a>

### ContactTotalForce.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.RemoveParameter"></a>

### ContactTotalForce.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.RenameBasedOnDefinition"></a>

### ContactTotalForce.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.RetrieveRemoteDPFResults"></a>

### ContactTotalForce.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="ContactTotalForce.RetrieveResult"></a>

### ContactTotalForce.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

