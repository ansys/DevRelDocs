# `StressSafetyMargin`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressSafetyMargin"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressSafetyMargin(internalObject: Any)

<a id="StressSafetyMargin"></a>

### *class* StressSafetyMargin(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a StressSafetyMargin.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#StressSafetyMargin.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#StressSafetyMargin.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#StressSafetyMargin.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#StressSafetyMargin.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#StressSafetyMargin.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#StressSafetyMargin.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#StressSafetyMargin.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#StressSafetyMargin.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#StressSafetyMargin.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#StressSafetyMargin.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#StressSafetyMargin.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#StressSafetyMargin.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#StressSafetyMargin.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#StressSafetyMargin.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#StressSafetyMargin.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#StressSafetyMargin.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#StressSafetyMargin.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#StressSafetyMargin.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#StressSafetyMargin.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#StressSafetyMargin.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#StressSafetyMargin.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#StressSafetyMargin.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#StressSafetyMargin.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#StressSafetyMargin.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#StressSafetyMargin.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#StressSafetyMargin.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#StressSafetyMargin.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#StressSafetyMargin.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#StressSafetyMargin.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#StressSafetyMargin.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#StressSafetyMargin.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#StressSafetyMargin.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#StressSafetyMargin.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#StressSafetyMargin.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#StressSafetyMargin.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#StressSafetyMargin.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#StressSafetyMargin.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#StressSafetyMargin.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#StressSafetyMargin.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#StressSafetyMargin.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#StressSafetyMargin.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#StressSafetyMargin.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#StressSafetyMargin.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#StressSafetyMargin.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#StressSafetyMargin.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#StressSafetyMargin.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#StressSafetyMargin.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#StressSafetyMargin.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#StressSafetyMargin.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#StressSafetyMargin.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#StressSafetyMargin.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#StressSafetyMargin.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#StressSafetyMargin.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#StressSafetyMargin.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#StressSafetyMargin.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#StressSafetyMargin.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#StressSafetyMargin.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#StressSafetyMargin.Average)                                                       | Gets the Average.                                                                                        |
| [`AverageAcrossBodies`](#StressSafetyMargin.AverageAcrossBodies)                               | Gets or sets the AverageAcrossBodies.                                                                    |
| [`By`](#StressSafetyMargin.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#StressSafetyMargin.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#StressSafetyMargin.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#StressSafetyMargin.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#StressSafetyMargin.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#StressSafetyMargin.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                               | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#StressSafetyMargin.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#StressSafetyMargin.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#StressSafetyMargin.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#StressSafetyMargin.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#StressSafetyMargin.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#StressSafetyMargin.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#StressSafetyMargin.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#StressSafetyMargin.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#StressSafetyMargin.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#StressSafetyMargin.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#StressSafetyMargin.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#StressSafetyMargin.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#StressSafetyMargin.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#StressSafetyMargin.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#StressSafetyMargin.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#StressSafetyMargin.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#StressSafetyMargin.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#StressSafetyMargin.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#StressSafetyMargin.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#StressSafetyMargin.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#StressSafetyMargin.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#StressSafetyMargin.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#StressSafetyMargin.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#StressSafetyMargin.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#StressSafetyMargin.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#StressSafetyMargin.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#StressSafetyMargin.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#StressSafetyMargin.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#StressSafetyMargin.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#StressSafetyMargin.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#StressSafetyMargin.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#StressSafetyMargin.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                  | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#StressSafetyMargin.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#StressSafetyMargin.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#StressSafetyMargin.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#StressSafetyMargin.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                   | Path property.                                                                                           |
| [`PlotData`](#StressSafetyMargin.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#StressSafetyMargin.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#StressSafetyMargin.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#StressSafetyMargin.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#StressSafetyMargin.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#StressSafetyMargin.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#StressSafetyMargin.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#StressSafetyMargin.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#StressSafetyMargin.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#StressSafetyMargin.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#StressSafetyMargin.State)                                                           | State property.                                                                                          |
| [`Substep`](#StressSafetyMargin.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#StressSafetyMargin.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                          | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                     | SurfaceCoating property.                                                                                 |
| [`TabularData`](#StressSafetyMargin.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#StressSafetyMargin.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#StressSafetyMargin.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#StressSafetyMargin.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#StressSafetyMargin.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#StressSafetyMargin.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#StressSafetyMargin.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#StressSafetyMargin.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#StressSafetyMargin.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#StressSafetyMargin.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#StressSafetyMargin.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#StressSafetyMargin.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#StressSafetyMargin.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#StressSafetyMargin.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#StressSafetyMargin.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#StressSafetyMargin.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#StressSafetyMargin.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#StressSafetyMargin.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#StressSafetyMargin.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#StressSafetyMargin.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#StressSafetyMargin.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#StressSafetyMargin.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#StressSafetyMargin.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#StressSafetyMargin.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#StressSafetyMargin.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="StressSafetyMargin.AttachedRefs"></a>

### *property* StressSafetyMargin.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Average"></a>

### *property* StressSafetyMargin.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.AverageAcrossBodies"></a>

### *property* StressSafetyMargin.AverageAcrossBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.By"></a>

### *property* StressSafetyMargin.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.CalculateTimeHistory"></a>

### *property* StressSafetyMargin.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Children"></a>

### *property* StressSafetyMargin.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.ClsId"></a>

### *property* StressSafetyMargin.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.CombinationNumber"></a>

### *property* StressSafetyMargin.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Comments"></a>

### *property* StressSafetyMargin.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.CoordinateSystem"></a>

### *property* StressSafetyMargin.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.CrackFrontNumber"></a>

### *property* StressSafetyMargin.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.DataModelObjectCategory"></a>

### *property* StressSafetyMargin.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.DisplayOption"></a>

### *property* StressSafetyMargin.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.DisplayTime"></a>

### *property* StressSafetyMargin.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.DpfEvaluation"></a>

### *property* StressSafetyMargin.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Figures"></a>

### *property* StressSafetyMargin.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GlobalIDs"></a>

### *property* StressSafetyMargin.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GraphControlsXAxis"></a>

### *property* StressSafetyMargin.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GroupingFolder"></a>

### *property* StressSafetyMargin.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.IconName"></a>

### *property* StressSafetyMargin.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Identifier"></a>

### *property* StressSafetyMargin.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Images"></a>

### *property* StressSafetyMargin.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.InternalObject"></a>

### *property* StressSafetyMargin.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.IsSolved"></a>

### *property* StressSafetyMargin.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.ItemType"></a>

### *property* StressSafetyMargin.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.IterationNumber"></a>

### *property* StressSafetyMargin.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.LoadStep"></a>

### *property* StressSafetyMargin.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.LoadStepForMaximumOfMaximumValues"></a>

### *property* StressSafetyMargin.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.LoadStepForMaximumOfMinimumValues"></a>

### *property* StressSafetyMargin.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.LoadStepForMinimumOfMaximumValues"></a>

### *property* StressSafetyMargin.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.LoadStepForMinimumOfMinimumValues"></a>

### *property* StressSafetyMargin.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.LoadStepNumber"></a>

### *property* StressSafetyMargin.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Location"></a>

### *property* StressSafetyMargin.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Maximum"></a>

### *property* StressSafetyMargin.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.MaximumOccursOn"></a>

### *property* StressSafetyMargin.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.MaximumOfMaximumOverTime"></a>

### *property* StressSafetyMargin.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.MaximumOfMinimumOverTime"></a>

### *property* StressSafetyMargin.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Minimum"></a>

### *property* StressSafetyMargin.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.MinimumOccursOn"></a>

### *property* StressSafetyMargin.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.MinimumOfMaximumOverTime"></a>

### *property* StressSafetyMargin.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.MinimumOfMinimumOverTime"></a>

### *property* StressSafetyMargin.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Name"></a>

### *property* StressSafetyMargin.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.NamedSelections"></a>

### *property* StressSafetyMargin.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.ObjectId"></a>

### *property* StressSafetyMargin.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.ObjectState"></a>

### *property* StressSafetyMargin.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.ObjectTags"></a>

### *property* StressSafetyMargin.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Parent"></a>

### *property* StressSafetyMargin.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Path"></a>

### *property* StressSafetyMargin.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.PlotData"></a>

### *property* StressSafetyMargin.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Properties"></a>

### *property* StressSafetyMargin.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.RPMSelection"></a>

### *property* StressSafetyMargin.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.ResultType"></a>

### *property* StressSafetyMargin.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.RpmSetNumber"></a>

### *property* StressSafetyMargin.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.ScopingMethod"></a>

### *property* StressSafetyMargin.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.SeparateDataByEntity"></a>

### *property* StressSafetyMargin.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.SetNumber"></a>

### *property* StressSafetyMargin.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.SolutionCombinationDriver"></a>

### *property* StressSafetyMargin.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.SolverComponentIDs"></a>

### *property* StressSafetyMargin.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.State"></a>

### *property* StressSafetyMargin.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Substep"></a>

### *property* StressSafetyMargin.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Suppressed"></a>

### *property* StressSafetyMargin.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Surface"></a>

### *property* StressSafetyMargin.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.SurfaceCoating"></a>

### *property* StressSafetyMargin.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.TabularData"></a>

### *property* StressSafetyMargin.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Time"></a>

### *property* StressSafetyMargin.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.TimeForMaximumOfMaximumValues"></a>

### *property* StressSafetyMargin.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.TimeForMaximumOfMinimumValues"></a>

### *property* StressSafetyMargin.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.TimeForMinimumOfMaximumValues"></a>

### *property* StressSafetyMargin.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.TimeForMinimumOfMinimumValues"></a>

### *property* StressSafetyMargin.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Total"></a>

### *property* StressSafetyMargin.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.VisibleProperties"></a>

### *property* StressSafetyMargin.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayFilterBy"></a>

### *property* StressSafetyMargin.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayFrequencySelection"></a>

### *property* StressSafetyMargin.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayInterpolateData"></a>

### *property* StressSafetyMargin.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayLowerBand"></a>

### *property* StressSafetyMargin.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayMaxRPM"></a>

### *property* StressSafetyMargin.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayMinRPM"></a>

### *property* StressSafetyMargin.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayModeSelection"></a>

### *property* StressSafetyMargin.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayOrderSelection"></a>

### *property* StressSafetyMargin.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayRpmSelection"></a>

### *property* StressSafetyMargin.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayScopeToOrderLines"></a>

### *property* StressSafetyMargin.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayTimeSelection"></a>

### *property* StressSafetyMargin.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayUpperBand"></a>

### *property* StressSafetyMargin.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayXAxisMaximum"></a>

### *property* StressSafetyMargin.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayXAxisMinimum"></a>

### *property* StressSafetyMargin.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayYAxisMaximum"></a>

### *property* StressSafetyMargin.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallDisplayYAxisMinimum"></a>

### *property* StressSafetyMargin.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.WaterfallShowTextOnMosaic"></a>

### *property* StressSafetyMargin.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="StressSafetyMargin.Activate"></a>

### StressSafetyMargin.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.AddAlert"></a>

### StressSafetyMargin.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.AddComment"></a>

### StressSafetyMargin.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.AddConvergence"></a>

### StressSafetyMargin.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.AddFigure"></a>

### StressSafetyMargin.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.AddImage"></a>

### StressSafetyMargin.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.BodyWhereMaximumOccurs"></a>

### StressSafetyMargin.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.ClearGeneratedData"></a>

### StressSafetyMargin.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Copy"></a>

### StressSafetyMargin.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.CopyTo"></a>

### StressSafetyMargin.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.CreateObjRef"></a>

### StressSafetyMargin.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.CreateParameter"></a>

### StressSafetyMargin.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.CreateResultsAtAllSets"></a>

### StressSafetyMargin.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Cut"></a>

### StressSafetyMargin.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Delete"></a>

### StressSafetyMargin.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Duplicate"></a>

### StressSafetyMargin.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.DuplicateWithoutResults"></a>

### StressSafetyMargin.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Equals"></a>

### StressSafetyMargin.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.EvaluateAllResults"></a>

### StressSafetyMargin.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.ExportAnimation"></a>

### StressSafetyMargin.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.ExportToSTLFile"></a>

### StressSafetyMargin.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.ExportToTextFile"></a>

### StressSafetyMargin.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### StressSafetyMargin.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.FetchRemoteResult"></a>

### StressSafetyMargin.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.FetchRemoteResults"></a>

### StressSafetyMargin.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetAPIName"></a>

### StressSafetyMargin.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetAllProperties"></a>

### StressSafetyMargin.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetChildren"></a>

### StressSafetyMargin.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### StressSafetyMargin.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetDetailsView"></a>

### StressSafetyMargin.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetEnumName"></a>

### StressSafetyMargin.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetHashCode"></a>

### StressSafetyMargin.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetIconFile"></a>

### StressSafetyMargin.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetLifetimeService"></a>

### StressSafetyMargin.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetNodalValues"></a>

### StressSafetyMargin.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetObjectData"></a>

### StressSafetyMargin.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetParameter"></a>

### StressSafetyMargin.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetPath"></a>

### StressSafetyMargin.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetPropertyName"></a>

### StressSafetyMargin.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetPropertyValue"></a>

### StressSafetyMargin.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetQuantityName"></a>

### StressSafetyMargin.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetVisibleProperties"></a>

### StressSafetyMargin.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GetVisiblePropertyNames"></a>

### StressSafetyMargin.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GroupAllSimilarChildren"></a>

### StressSafetyMargin.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.GroupSimilarObjects"></a>

### StressSafetyMargin.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.InitializeLifetimeService"></a>

### StressSafetyMargin.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.IsPropertyEditable"></a>

### StressSafetyMargin.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### StressSafetyMargin.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.IsPropertyVisible"></a>

### StressSafetyMargin.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### StressSafetyMargin.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.Paste"></a>

### StressSafetyMargin.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.PromoteToNamedSelection"></a>

### StressSafetyMargin.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.PropertyByAPIName"></a>

### StressSafetyMargin.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.PropertyById"></a>

### StressSafetyMargin.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.PropertyByName"></a>

### StressSafetyMargin.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.RemoveFromGroup"></a>

### StressSafetyMargin.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.RemoveParameter"></a>

### StressSafetyMargin.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.RenameBasedOnDefinition"></a>

### StressSafetyMargin.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.RetrieveRemoteDPFResults"></a>

### StressSafetyMargin.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="StressSafetyMargin.RetrieveResult"></a>

### StressSafetyMargin.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

