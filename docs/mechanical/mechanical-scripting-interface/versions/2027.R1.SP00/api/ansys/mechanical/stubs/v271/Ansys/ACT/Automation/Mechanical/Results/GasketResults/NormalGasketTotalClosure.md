# `NormalGasketTotalClosure`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.GasketResults.NormalGasketTotalClosure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.GasketResults.NormalGasketTotalClosure(internalObject: Any)

<a id="NormalGasketTotalClosure"></a>

### *class* NormalGasketTotalClosure(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NormalGasketTotalClosure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#NormalGasketTotalClosure.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#NormalGasketTotalClosure.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#NormalGasketTotalClosure.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#NormalGasketTotalClosure.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#NormalGasketTotalClosure.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#NormalGasketTotalClosure.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#NormalGasketTotalClosure.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#NormalGasketTotalClosure.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#NormalGasketTotalClosure.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#NormalGasketTotalClosure.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#NormalGasketTotalClosure.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#NormalGasketTotalClosure.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#NormalGasketTotalClosure.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#NormalGasketTotalClosure.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#NormalGasketTotalClosure.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#NormalGasketTotalClosure.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#NormalGasketTotalClosure.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#NormalGasketTotalClosure.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#NormalGasketTotalClosure.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#NormalGasketTotalClosure.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#NormalGasketTotalClosure.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#NormalGasketTotalClosure.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#NormalGasketTotalClosure.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#NormalGasketTotalClosure.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#NormalGasketTotalClosure.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#NormalGasketTotalClosure.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#NormalGasketTotalClosure.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#NormalGasketTotalClosure.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#NormalGasketTotalClosure.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#NormalGasketTotalClosure.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#NormalGasketTotalClosure.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#NormalGasketTotalClosure.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#NormalGasketTotalClosure.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#NormalGasketTotalClosure.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#NormalGasketTotalClosure.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#NormalGasketTotalClosure.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#NormalGasketTotalClosure.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#NormalGasketTotalClosure.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#NormalGasketTotalClosure.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#NormalGasketTotalClosure.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#NormalGasketTotalClosure.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#NormalGasketTotalClosure.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#NormalGasketTotalClosure.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#NormalGasketTotalClosure.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#NormalGasketTotalClosure.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#NormalGasketTotalClosure.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#NormalGasketTotalClosure.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#NormalGasketTotalClosure.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#NormalGasketTotalClosure.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#NormalGasketTotalClosure.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#NormalGasketTotalClosure.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#NormalGasketTotalClosure.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#NormalGasketTotalClosure.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#NormalGasketTotalClosure.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#NormalGasketTotalClosure.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#NormalGasketTotalClosure.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#NormalGasketTotalClosure.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#NormalGasketTotalClosure.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#NormalGasketTotalClosure.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#NormalGasketTotalClosure.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#NormalGasketTotalClosure.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#NormalGasketTotalClosure.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#NormalGasketTotalClosure.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#NormalGasketTotalClosure.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                     | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#NormalGasketTotalClosure.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#NormalGasketTotalClosure.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#NormalGasketTotalClosure.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#NormalGasketTotalClosure.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#NormalGasketTotalClosure.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#NormalGasketTotalClosure.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GasketResultType`](#NormalGasketTotalClosure.GasketResultType)                                     | Gets or sets the GasketResultType.                                                                       |
| [`GlobalIDs`](#NormalGasketTotalClosure.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#NormalGasketTotalClosure.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#NormalGasketTotalClosure.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#NormalGasketTotalClosure.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#NormalGasketTotalClosure.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#NormalGasketTotalClosure.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#NormalGasketTotalClosure.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#NormalGasketTotalClosure.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#NormalGasketTotalClosure.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#NormalGasketTotalClosure.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#NormalGasketTotalClosure.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#NormalGasketTotalClosure.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#NormalGasketTotalClosure.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#NormalGasketTotalClosure.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#NormalGasketTotalClosure.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#NormalGasketTotalClosure.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#NormalGasketTotalClosure.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#NormalGasketTotalClosure.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#NormalGasketTotalClosure.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#NormalGasketTotalClosure.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#NormalGasketTotalClosure.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#NormalGasketTotalClosure.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#NormalGasketTotalClosure.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#NormalGasketTotalClosure.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#NormalGasketTotalClosure.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#NormalGasketTotalClosure.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                        | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#NormalGasketTotalClosure.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#NormalGasketTotalClosure.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#NormalGasketTotalClosure.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#NormalGasketTotalClosure.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                         | Path property.                                                                                           |
| [`PlotData`](#NormalGasketTotalClosure.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#NormalGasketTotalClosure.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#NormalGasketTotalClosure.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#NormalGasketTotalClosure.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#NormalGasketTotalClosure.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#NormalGasketTotalClosure.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#NormalGasketTotalClosure.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#NormalGasketTotalClosure.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#NormalGasketTotalClosure.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#NormalGasketTotalClosure.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#NormalGasketTotalClosure.State)                                                           | State property.                                                                                          |
| [`Substep`](#NormalGasketTotalClosure.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#NormalGasketTotalClosure.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                           | SurfaceCoating property.                                                                                 |
| [`TabularData`](#NormalGasketTotalClosure.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#NormalGasketTotalClosure.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#NormalGasketTotalClosure.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#NormalGasketTotalClosure.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#NormalGasketTotalClosure.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#NormalGasketTotalClosure.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#NormalGasketTotalClosure.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#NormalGasketTotalClosure.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#NormalGasketTotalClosure.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#NormalGasketTotalClosure.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#NormalGasketTotalClosure.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#NormalGasketTotalClosure.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#NormalGasketTotalClosure.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#NormalGasketTotalClosure.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#NormalGasketTotalClosure.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#NormalGasketTotalClosure.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#NormalGasketTotalClosure.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#NormalGasketTotalClosure.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#NormalGasketTotalClosure.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#NormalGasketTotalClosure.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#NormalGasketTotalClosure.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#NormalGasketTotalClosure.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#NormalGasketTotalClosure.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#NormalGasketTotalClosure.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#NormalGasketTotalClosure.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="NormalGasketTotalClosure.AttachedRefs"></a>

### *property* NormalGasketTotalClosure.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Average"></a>

### *property* NormalGasketTotalClosure.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.By"></a>

### *property* NormalGasketTotalClosure.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CalculateTimeHistory"></a>

### *property* NormalGasketTotalClosure.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Children"></a>

### *property* NormalGasketTotalClosure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ClsId"></a>

### *property* NormalGasketTotalClosure.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CombinationNumber"></a>

### *property* NormalGasketTotalClosure.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Comments"></a>

### *property* NormalGasketTotalClosure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CoordinateSystem"></a>

### *property* NormalGasketTotalClosure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CrackFrontNumber"></a>

### *property* NormalGasketTotalClosure.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.DataModelObjectCategory"></a>

### *property* NormalGasketTotalClosure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.DisplayOption"></a>

### *property* NormalGasketTotalClosure.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.DisplayTime"></a>

### *property* NormalGasketTotalClosure.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.DpfEvaluation"></a>

### *property* NormalGasketTotalClosure.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Figures"></a>

### *property* NormalGasketTotalClosure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GasketResultType"></a>

### *property* NormalGasketTotalClosure.GasketResultType *: [Ansys.Mechanical.DataModel.Enums.GasketResultType](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GasketResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GasketResultType.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GlobalIDs"></a>

### *property* NormalGasketTotalClosure.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GraphControlsXAxis"></a>

### *property* NormalGasketTotalClosure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GroupingFolder"></a>

### *property* NormalGasketTotalClosure.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.IconName"></a>

### *property* NormalGasketTotalClosure.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Identifier"></a>

### *property* NormalGasketTotalClosure.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Images"></a>

### *property* NormalGasketTotalClosure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.InternalObject"></a>

### *property* NormalGasketTotalClosure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.IsSolved"></a>

### *property* NormalGasketTotalClosure.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ItemType"></a>

### *property* NormalGasketTotalClosure.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.IterationNumber"></a>

### *property* NormalGasketTotalClosure.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.LoadStep"></a>

### *property* NormalGasketTotalClosure.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.LoadStepForMaximumOfMaximumValues"></a>

### *property* NormalGasketTotalClosure.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.LoadStepForMaximumOfMinimumValues"></a>

### *property* NormalGasketTotalClosure.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.LoadStepForMinimumOfMaximumValues"></a>

### *property* NormalGasketTotalClosure.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.LoadStepForMinimumOfMinimumValues"></a>

### *property* NormalGasketTotalClosure.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.LoadStepNumber"></a>

### *property* NormalGasketTotalClosure.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Location"></a>

### *property* NormalGasketTotalClosure.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Maximum"></a>

### *property* NormalGasketTotalClosure.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.MaximumOccursOn"></a>

### *property* NormalGasketTotalClosure.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.MaximumOfMaximumOverTime"></a>

### *property* NormalGasketTotalClosure.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.MaximumOfMinimumOverTime"></a>

### *property* NormalGasketTotalClosure.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Minimum"></a>

### *property* NormalGasketTotalClosure.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.MinimumOccursOn"></a>

### *property* NormalGasketTotalClosure.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.MinimumOfMaximumOverTime"></a>

### *property* NormalGasketTotalClosure.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.MinimumOfMinimumOverTime"></a>

### *property* NormalGasketTotalClosure.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Name"></a>

### *property* NormalGasketTotalClosure.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.NamedSelections"></a>

### *property* NormalGasketTotalClosure.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ObjectId"></a>

### *property* NormalGasketTotalClosure.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ObjectState"></a>

### *property* NormalGasketTotalClosure.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ObjectTags"></a>

### *property* NormalGasketTotalClosure.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Parent"></a>

### *property* NormalGasketTotalClosure.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Path"></a>

### *property* NormalGasketTotalClosure.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.PlotData"></a>

### *property* NormalGasketTotalClosure.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Properties"></a>

### *property* NormalGasketTotalClosure.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.RPMSelection"></a>

### *property* NormalGasketTotalClosure.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ResultType"></a>

### *property* NormalGasketTotalClosure.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.RpmSetNumber"></a>

### *property* NormalGasketTotalClosure.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ScopingMethod"></a>

### *property* NormalGasketTotalClosure.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.SeparateDataByEntity"></a>

### *property* NormalGasketTotalClosure.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.SetNumber"></a>

### *property* NormalGasketTotalClosure.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.SolutionCombinationDriver"></a>

### *property* NormalGasketTotalClosure.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.SolverComponentIDs"></a>

### *property* NormalGasketTotalClosure.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.State"></a>

### *property* NormalGasketTotalClosure.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Substep"></a>

### *property* NormalGasketTotalClosure.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Suppressed"></a>

### *property* NormalGasketTotalClosure.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Surface"></a>

### *property* NormalGasketTotalClosure.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.SurfaceCoating"></a>

### *property* NormalGasketTotalClosure.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.TabularData"></a>

### *property* NormalGasketTotalClosure.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Time"></a>

### *property* NormalGasketTotalClosure.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.TimeForMaximumOfMaximumValues"></a>

### *property* NormalGasketTotalClosure.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.TimeForMaximumOfMinimumValues"></a>

### *property* NormalGasketTotalClosure.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.TimeForMinimumOfMaximumValues"></a>

### *property* NormalGasketTotalClosure.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.TimeForMinimumOfMinimumValues"></a>

### *property* NormalGasketTotalClosure.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Total"></a>

### *property* NormalGasketTotalClosure.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.VisibleProperties"></a>

### *property* NormalGasketTotalClosure.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayFilterBy"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayFrequencySelection"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayInterpolateData"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayLowerBand"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayMaxRPM"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayMinRPM"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayModeSelection"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayOrderSelection"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayRpmSelection"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayScopeToOrderLines"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayTimeSelection"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayUpperBand"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayXAxisMaximum"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayXAxisMinimum"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayYAxisMaximum"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallDisplayYAxisMinimum"></a>

### *property* NormalGasketTotalClosure.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.WaterfallShowTextOnMosaic"></a>

### *property* NormalGasketTotalClosure.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NormalGasketTotalClosure.Activate"></a>

### NormalGasketTotalClosure.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.AddAlert"></a>

### NormalGasketTotalClosure.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.AddComment"></a>

### NormalGasketTotalClosure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.AddConvergence"></a>

### NormalGasketTotalClosure.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.AddFigure"></a>

### NormalGasketTotalClosure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.AddImage"></a>

### NormalGasketTotalClosure.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.BodyWhereMaximumOccurs"></a>

### NormalGasketTotalClosure.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ClearGeneratedData"></a>

### NormalGasketTotalClosure.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Copy"></a>

### NormalGasketTotalClosure.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CopyTo"></a>

### NormalGasketTotalClosure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CreateObjRef"></a>

### NormalGasketTotalClosure.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CreateParameter"></a>

### NormalGasketTotalClosure.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.CreateResultsAtAllSets"></a>

### NormalGasketTotalClosure.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Cut"></a>

### NormalGasketTotalClosure.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Delete"></a>

### NormalGasketTotalClosure.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Duplicate"></a>

### NormalGasketTotalClosure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.DuplicateWithoutResults"></a>

### NormalGasketTotalClosure.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Equals"></a>

### NormalGasketTotalClosure.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.EvaluateAllResults"></a>

### NormalGasketTotalClosure.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ExportAnimation"></a>

### NormalGasketTotalClosure.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ExportToSTLFile"></a>

### NormalGasketTotalClosure.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.ExportToTextFile"></a>

### NormalGasketTotalClosure.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### NormalGasketTotalClosure.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.FetchRemoteResult"></a>

### NormalGasketTotalClosure.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.FetchRemoteResults"></a>

### NormalGasketTotalClosure.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetAPIName"></a>

### NormalGasketTotalClosure.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetAllProperties"></a>

### NormalGasketTotalClosure.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetChildren"></a>

### NormalGasketTotalClosure.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NormalGasketTotalClosure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetDetailsView"></a>

### NormalGasketTotalClosure.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetEnumName"></a>

### NormalGasketTotalClosure.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetHashCode"></a>

### NormalGasketTotalClosure.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetIconFile"></a>

### NormalGasketTotalClosure.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetLifetimeService"></a>

### NormalGasketTotalClosure.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetNodalValues"></a>

### NormalGasketTotalClosure.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetObjectData"></a>

### NormalGasketTotalClosure.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetParameter"></a>

### NormalGasketTotalClosure.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetPath"></a>

### NormalGasketTotalClosure.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetPropertyName"></a>

### NormalGasketTotalClosure.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetPropertyValue"></a>

### NormalGasketTotalClosure.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetQuantityName"></a>

### NormalGasketTotalClosure.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetVisibleProperties"></a>

### NormalGasketTotalClosure.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GetVisiblePropertyNames"></a>

### NormalGasketTotalClosure.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GroupAllSimilarChildren"></a>

### NormalGasketTotalClosure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.GroupSimilarObjects"></a>

### NormalGasketTotalClosure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.InitializeLifetimeService"></a>

### NormalGasketTotalClosure.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.IsPropertyEditable"></a>

### NormalGasketTotalClosure.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NormalGasketTotalClosure.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.IsPropertyVisible"></a>

### NormalGasketTotalClosure.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NormalGasketTotalClosure.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.Paste"></a>

### NormalGasketTotalClosure.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.PromoteToNamedSelection"></a>

### NormalGasketTotalClosure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.PropertyByAPIName"></a>

### NormalGasketTotalClosure.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.PropertyById"></a>

### NormalGasketTotalClosure.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.PropertyByName"></a>

### NormalGasketTotalClosure.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.RemoveFromGroup"></a>

### NormalGasketTotalClosure.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.RemoveParameter"></a>

### NormalGasketTotalClosure.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.RenameBasedOnDefinition"></a>

### NormalGasketTotalClosure.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.RetrieveRemoteDPFResults"></a>

### NormalGasketTotalClosure.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="NormalGasketTotalClosure.RetrieveResult"></a>

### NormalGasketTotalClosure.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

