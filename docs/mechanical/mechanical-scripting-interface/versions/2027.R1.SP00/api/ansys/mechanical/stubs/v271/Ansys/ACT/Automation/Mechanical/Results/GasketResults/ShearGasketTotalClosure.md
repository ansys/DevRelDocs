# `ShearGasketTotalClosure`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.GasketResults.ShearGasketTotalClosure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.GasketResults.ShearGasketTotalClosure(internalObject: Any)

<a id="ShearGasketTotalClosure"></a>

### *class* ShearGasketTotalClosure(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ShearGasketTotalClosure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ShearGasketTotalClosure.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#ShearGasketTotalClosure.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#ShearGasketTotalClosure.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#ShearGasketTotalClosure.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#ShearGasketTotalClosure.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ShearGasketTotalClosure.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#ShearGasketTotalClosure.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#ShearGasketTotalClosure.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#ShearGasketTotalClosure.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ShearGasketTotalClosure.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ShearGasketTotalClosure.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ShearGasketTotalClosure.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#ShearGasketTotalClosure.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#ShearGasketTotalClosure.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ShearGasketTotalClosure.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ShearGasketTotalClosure.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#ShearGasketTotalClosure.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#ShearGasketTotalClosure.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#ShearGasketTotalClosure.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#ShearGasketTotalClosure.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#ShearGasketTotalClosure.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#ShearGasketTotalClosure.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#ShearGasketTotalClosure.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#ShearGasketTotalClosure.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#ShearGasketTotalClosure.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#ShearGasketTotalClosure.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ShearGasketTotalClosure.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ShearGasketTotalClosure.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ShearGasketTotalClosure.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ShearGasketTotalClosure.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ShearGasketTotalClosure.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ShearGasketTotalClosure.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#ShearGasketTotalClosure.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#ShearGasketTotalClosure.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ShearGasketTotalClosure.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ShearGasketTotalClosure.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ShearGasketTotalClosure.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ShearGasketTotalClosure.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#ShearGasketTotalClosure.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#ShearGasketTotalClosure.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ShearGasketTotalClosure.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ShearGasketTotalClosure.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ShearGasketTotalClosure.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ShearGasketTotalClosure.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ShearGasketTotalClosure.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ShearGasketTotalClosure.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ShearGasketTotalClosure.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#ShearGasketTotalClosure.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#ShearGasketTotalClosure.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ShearGasketTotalClosure.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ShearGasketTotalClosure.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ShearGasketTotalClosure.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ShearGasketTotalClosure.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#ShearGasketTotalClosure.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#ShearGasketTotalClosure.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#ShearGasketTotalClosure.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#ShearGasketTotalClosure.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#ShearGasketTotalClosure.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#ShearGasketTotalClosure.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#ShearGasketTotalClosure.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#ShearGasketTotalClosure.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#ShearGasketTotalClosure.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#ShearGasketTotalClosure.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#ShearGasketTotalClosure.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                    | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#ShearGasketTotalClosure.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#ShearGasketTotalClosure.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#ShearGasketTotalClosure.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#ShearGasketTotalClosure.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#ShearGasketTotalClosure.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#ShearGasketTotalClosure.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GasketResultType`](#ShearGasketTotalClosure.GasketResultType)                                     | Gets or sets the GasketResultType.                                                                       |
| [`GlobalIDs`](#ShearGasketTotalClosure.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#ShearGasketTotalClosure.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#ShearGasketTotalClosure.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#ShearGasketTotalClosure.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#ShearGasketTotalClosure.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#ShearGasketTotalClosure.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#ShearGasketTotalClosure.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#ShearGasketTotalClosure.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#ShearGasketTotalClosure.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#ShearGasketTotalClosure.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#ShearGasketTotalClosure.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#ShearGasketTotalClosure.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#ShearGasketTotalClosure.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#ShearGasketTotalClosure.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#ShearGasketTotalClosure.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#ShearGasketTotalClosure.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#ShearGasketTotalClosure.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#ShearGasketTotalClosure.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#ShearGasketTotalClosure.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#ShearGasketTotalClosure.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#ShearGasketTotalClosure.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#ShearGasketTotalClosure.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#ShearGasketTotalClosure.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#ShearGasketTotalClosure.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#ShearGasketTotalClosure.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#ShearGasketTotalClosure.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                       | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#ShearGasketTotalClosure.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#ShearGasketTotalClosure.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#ShearGasketTotalClosure.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#ShearGasketTotalClosure.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                        | Path property.                                                                                           |
| [`PlotData`](#ShearGasketTotalClosure.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#ShearGasketTotalClosure.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#ShearGasketTotalClosure.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#ShearGasketTotalClosure.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#ShearGasketTotalClosure.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#ShearGasketTotalClosure.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#ShearGasketTotalClosure.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#ShearGasketTotalClosure.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`ShearOrientation`](#ShearGasketTotalClosure.ShearOrientation)                                     | Gets or sets the ShearOrientation.                                                                       |
| [`SolutionCombinationDriver`](#ShearGasketTotalClosure.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#ShearGasketTotalClosure.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#ShearGasketTotalClosure.State)                                                           | State property.                                                                                          |
| [`Substep`](#ShearGasketTotalClosure.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#ShearGasketTotalClosure.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                               | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                          | SurfaceCoating property.                                                                                 |
| [`TabularData`](#ShearGasketTotalClosure.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#ShearGasketTotalClosure.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#ShearGasketTotalClosure.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#ShearGasketTotalClosure.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#ShearGasketTotalClosure.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#ShearGasketTotalClosure.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#ShearGasketTotalClosure.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#ShearGasketTotalClosure.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#ShearGasketTotalClosure.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#ShearGasketTotalClosure.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#ShearGasketTotalClosure.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#ShearGasketTotalClosure.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#ShearGasketTotalClosure.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#ShearGasketTotalClosure.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#ShearGasketTotalClosure.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#ShearGasketTotalClosure.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#ShearGasketTotalClosure.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#ShearGasketTotalClosure.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#ShearGasketTotalClosure.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#ShearGasketTotalClosure.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#ShearGasketTotalClosure.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#ShearGasketTotalClosure.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#ShearGasketTotalClosure.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#ShearGasketTotalClosure.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#ShearGasketTotalClosure.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="ShearGasketTotalClosure.AttachedRefs"></a>

### *property* ShearGasketTotalClosure.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Average"></a>

### *property* ShearGasketTotalClosure.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.By"></a>

### *property* ShearGasketTotalClosure.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CalculateTimeHistory"></a>

### *property* ShearGasketTotalClosure.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Children"></a>

### *property* ShearGasketTotalClosure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ClsId"></a>

### *property* ShearGasketTotalClosure.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CombinationNumber"></a>

### *property* ShearGasketTotalClosure.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Comments"></a>

### *property* ShearGasketTotalClosure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CoordinateSystem"></a>

### *property* ShearGasketTotalClosure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CrackFrontNumber"></a>

### *property* ShearGasketTotalClosure.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.DataModelObjectCategory"></a>

### *property* ShearGasketTotalClosure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.DisplayOption"></a>

### *property* ShearGasketTotalClosure.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.DisplayTime"></a>

### *property* ShearGasketTotalClosure.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.DpfEvaluation"></a>

### *property* ShearGasketTotalClosure.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Figures"></a>

### *property* ShearGasketTotalClosure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GasketResultType"></a>

### *property* ShearGasketTotalClosure.GasketResultType *: [Ansys.Mechanical.DataModel.Enums.GasketResultType](../../../../../Mechanical/DataModel/Enums/GasketResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GasketResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GasketResultType.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GlobalIDs"></a>

### *property* ShearGasketTotalClosure.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GraphControlsXAxis"></a>

### *property* ShearGasketTotalClosure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GroupingFolder"></a>

### *property* ShearGasketTotalClosure.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.IconName"></a>

### *property* ShearGasketTotalClosure.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Identifier"></a>

### *property* ShearGasketTotalClosure.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Images"></a>

### *property* ShearGasketTotalClosure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.InternalObject"></a>

### *property* ShearGasketTotalClosure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.IsSolved"></a>

### *property* ShearGasketTotalClosure.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ItemType"></a>

### *property* ShearGasketTotalClosure.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.IterationNumber"></a>

### *property* ShearGasketTotalClosure.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.LoadStep"></a>

### *property* ShearGasketTotalClosure.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.LoadStepForMaximumOfMaximumValues"></a>

### *property* ShearGasketTotalClosure.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.LoadStepForMaximumOfMinimumValues"></a>

### *property* ShearGasketTotalClosure.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.LoadStepForMinimumOfMaximumValues"></a>

### *property* ShearGasketTotalClosure.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.LoadStepForMinimumOfMinimumValues"></a>

### *property* ShearGasketTotalClosure.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.LoadStepNumber"></a>

### *property* ShearGasketTotalClosure.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Location"></a>

### *property* ShearGasketTotalClosure.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Maximum"></a>

### *property* ShearGasketTotalClosure.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.MaximumOccursOn"></a>

### *property* ShearGasketTotalClosure.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.MaximumOfMaximumOverTime"></a>

### *property* ShearGasketTotalClosure.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.MaximumOfMinimumOverTime"></a>

### *property* ShearGasketTotalClosure.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Minimum"></a>

### *property* ShearGasketTotalClosure.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.MinimumOccursOn"></a>

### *property* ShearGasketTotalClosure.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.MinimumOfMaximumOverTime"></a>

### *property* ShearGasketTotalClosure.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.MinimumOfMinimumOverTime"></a>

### *property* ShearGasketTotalClosure.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Name"></a>

### *property* ShearGasketTotalClosure.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.NamedSelections"></a>

### *property* ShearGasketTotalClosure.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ObjectId"></a>

### *property* ShearGasketTotalClosure.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ObjectState"></a>

### *property* ShearGasketTotalClosure.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ObjectTags"></a>

### *property* ShearGasketTotalClosure.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Parent"></a>

### *property* ShearGasketTotalClosure.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Path"></a>

### *property* ShearGasketTotalClosure.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.PlotData"></a>

### *property* ShearGasketTotalClosure.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Properties"></a>

### *property* ShearGasketTotalClosure.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.RPMSelection"></a>

### *property* ShearGasketTotalClosure.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ResultType"></a>

### *property* ShearGasketTotalClosure.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.RpmSetNumber"></a>

### *property* ShearGasketTotalClosure.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ScopingMethod"></a>

### *property* ShearGasketTotalClosure.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.SeparateDataByEntity"></a>

### *property* ShearGasketTotalClosure.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.SetNumber"></a>

### *property* ShearGasketTotalClosure.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ShearOrientation"></a>

### *property* ShearGasketTotalClosure.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.SolutionCombinationDriver"></a>

### *property* ShearGasketTotalClosure.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.SolverComponentIDs"></a>

### *property* ShearGasketTotalClosure.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.State"></a>

### *property* ShearGasketTotalClosure.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Substep"></a>

### *property* ShearGasketTotalClosure.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Suppressed"></a>

### *property* ShearGasketTotalClosure.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Surface"></a>

### *property* ShearGasketTotalClosure.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.SurfaceCoating"></a>

### *property* ShearGasketTotalClosure.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.TabularData"></a>

### *property* ShearGasketTotalClosure.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Time"></a>

### *property* ShearGasketTotalClosure.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.TimeForMaximumOfMaximumValues"></a>

### *property* ShearGasketTotalClosure.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.TimeForMaximumOfMinimumValues"></a>

### *property* ShearGasketTotalClosure.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.TimeForMinimumOfMaximumValues"></a>

### *property* ShearGasketTotalClosure.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.TimeForMinimumOfMinimumValues"></a>

### *property* ShearGasketTotalClosure.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Total"></a>

### *property* ShearGasketTotalClosure.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.VisibleProperties"></a>

### *property* ShearGasketTotalClosure.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayFilterBy"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayFrequencySelection"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayInterpolateData"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayLowerBand"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayMaxRPM"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayMinRPM"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayModeSelection"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayOrderSelection"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayRpmSelection"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayScopeToOrderLines"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayTimeSelection"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayUpperBand"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayXAxisMaximum"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayXAxisMinimum"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayYAxisMaximum"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallDisplayYAxisMinimum"></a>

### *property* ShearGasketTotalClosure.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallShowTextOnMosaic"></a>

### *property* ShearGasketTotalClosure.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ShearGasketTotalClosure.Activate"></a>

### ShearGasketTotalClosure.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.AddAlert"></a>

### ShearGasketTotalClosure.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.AddComment"></a>

### ShearGasketTotalClosure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.AddConvergence"></a>

### ShearGasketTotalClosure.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.AddFigure"></a>

### ShearGasketTotalClosure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.AddImage"></a>

### ShearGasketTotalClosure.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.BodyWhereMaximumOccurs"></a>

### ShearGasketTotalClosure.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ClearGeneratedData"></a>

### ShearGasketTotalClosure.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Copy"></a>

### ShearGasketTotalClosure.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CopyTo"></a>

### ShearGasketTotalClosure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CreateObjRef"></a>

### ShearGasketTotalClosure.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CreateParameter"></a>

### ShearGasketTotalClosure.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CreateResultsAtAllSets"></a>

### ShearGasketTotalClosure.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Cut"></a>

### ShearGasketTotalClosure.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Delete"></a>

### ShearGasketTotalClosure.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Duplicate"></a>

### ShearGasketTotalClosure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.DuplicateWithoutResults"></a>

### ShearGasketTotalClosure.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Equals"></a>

### ShearGasketTotalClosure.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.EvaluateAllResults"></a>

### ShearGasketTotalClosure.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ExportAnimation"></a>

### ShearGasketTotalClosure.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ExportToSTLFile"></a>

### ShearGasketTotalClosure.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ExportToTextFile"></a>

### ShearGasketTotalClosure.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### ShearGasketTotalClosure.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.FetchRemoteResult"></a>

### ShearGasketTotalClosure.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.FetchRemoteResults"></a>

### ShearGasketTotalClosure.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetAPIName"></a>

### ShearGasketTotalClosure.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetAllProperties"></a>

### ShearGasketTotalClosure.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetChildren"></a>

### ShearGasketTotalClosure.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ShearGasketTotalClosure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetDetailsView"></a>

### ShearGasketTotalClosure.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetEnumName"></a>

### ShearGasketTotalClosure.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetHashCode"></a>

### ShearGasketTotalClosure.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetIconFile"></a>

### ShearGasketTotalClosure.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetLifetimeService"></a>

### ShearGasketTotalClosure.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetNodalValues"></a>

### ShearGasketTotalClosure.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetObjectData"></a>

### ShearGasketTotalClosure.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetParameter"></a>

### ShearGasketTotalClosure.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetPath"></a>

### ShearGasketTotalClosure.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetPropertyName"></a>

### ShearGasketTotalClosure.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetPropertyValue"></a>

### ShearGasketTotalClosure.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetQuantityName"></a>

### ShearGasketTotalClosure.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetVisibleProperties"></a>

### ShearGasketTotalClosure.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetVisiblePropertyNames"></a>

### ShearGasketTotalClosure.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GroupAllSimilarChildren"></a>

### ShearGasketTotalClosure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GroupSimilarObjects"></a>

### ShearGasketTotalClosure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.InitializeLifetimeService"></a>

### ShearGasketTotalClosure.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.IsPropertyEditable"></a>

### ShearGasketTotalClosure.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ShearGasketTotalClosure.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.IsPropertyVisible"></a>

### ShearGasketTotalClosure.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ShearGasketTotalClosure.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Paste"></a>

### ShearGasketTotalClosure.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.PromoteToNamedSelection"></a>

### ShearGasketTotalClosure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.PropertyByAPIName"></a>

### ShearGasketTotalClosure.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.PropertyById"></a>

### ShearGasketTotalClosure.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.PropertyByName"></a>

### ShearGasketTotalClosure.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.RemoveFromGroup"></a>

### ShearGasketTotalClosure.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.RemoveParameter"></a>

### ShearGasketTotalClosure.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.RenameBasedOnDefinition"></a>

### ShearGasketTotalClosure.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.RetrieveRemoteDPFResults"></a>

### ShearGasketTotalClosure.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.RetrieveResult"></a>

### ShearGasketTotalClosure.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

