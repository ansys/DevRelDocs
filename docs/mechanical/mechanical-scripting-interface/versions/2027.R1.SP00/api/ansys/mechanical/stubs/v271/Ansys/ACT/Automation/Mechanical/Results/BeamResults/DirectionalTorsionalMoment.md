# `DirectionalTorsionalMoment`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalTorsionalMoment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalTorsionalMoment(internalObject: Any)

<a id="DirectionalTorsionalMoment"></a>

### *class* DirectionalTorsionalMoment(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a DirectionalTorsionalMoment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#DirectionalTorsionalMoment.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#DirectionalTorsionalMoment.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#DirectionalTorsionalMoment.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#DirectionalTorsionalMoment.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#DirectionalTorsionalMoment.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#DirectionalTorsionalMoment.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#DirectionalTorsionalMoment.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#DirectionalTorsionalMoment.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#DirectionalTorsionalMoment.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#DirectionalTorsionalMoment.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#DirectionalTorsionalMoment.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#DirectionalTorsionalMoment.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#DirectionalTorsionalMoment.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#DirectionalTorsionalMoment.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#DirectionalTorsionalMoment.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#DirectionalTorsionalMoment.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#DirectionalTorsionalMoment.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#DirectionalTorsionalMoment.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#DirectionalTorsionalMoment.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#DirectionalTorsionalMoment.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#DirectionalTorsionalMoment.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#DirectionalTorsionalMoment.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#DirectionalTorsionalMoment.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#DirectionalTorsionalMoment.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#DirectionalTorsionalMoment.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#DirectionalTorsionalMoment.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#DirectionalTorsionalMoment.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#DirectionalTorsionalMoment.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#DirectionalTorsionalMoment.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#DirectionalTorsionalMoment.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#DirectionalTorsionalMoment.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#DirectionalTorsionalMoment.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#DirectionalTorsionalMoment.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#DirectionalTorsionalMoment.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#DirectionalTorsionalMoment.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#DirectionalTorsionalMoment.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#DirectionalTorsionalMoment.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#DirectionalTorsionalMoment.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#DirectionalTorsionalMoment.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#DirectionalTorsionalMoment.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#DirectionalTorsionalMoment.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#DirectionalTorsionalMoment.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#DirectionalTorsionalMoment.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#DirectionalTorsionalMoment.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#DirectionalTorsionalMoment.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#DirectionalTorsionalMoment.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#DirectionalTorsionalMoment.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#DirectionalTorsionalMoment.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#DirectionalTorsionalMoment.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#DirectionalTorsionalMoment.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#DirectionalTorsionalMoment.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#DirectionalTorsionalMoment.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#DirectionalTorsionalMoment.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#DirectionalTorsionalMoment.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#DirectionalTorsionalMoment.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#DirectionalTorsionalMoment.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#DirectionalTorsionalMoment.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#DirectionalTorsionalMoment.Average)                                                       | Gets the Average.                                                                                        |
| [`BeamResultType`](#DirectionalTorsionalMoment.BeamResultType)                                         | Gets or sets the BeamResultType.                                                                         |
| [`By`](#DirectionalTorsionalMoment.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#DirectionalTorsionalMoment.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#DirectionalTorsionalMoment.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#DirectionalTorsionalMoment.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#DirectionalTorsionalMoment.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#DirectionalTorsionalMoment.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                       | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#DirectionalTorsionalMoment.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#DirectionalTorsionalMoment.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#DirectionalTorsionalMoment.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#DirectionalTorsionalMoment.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#DirectionalTorsionalMoment.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#DirectionalTorsionalMoment.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#DirectionalTorsionalMoment.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#DirectionalTorsionalMoment.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#DirectionalTorsionalMoment.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#DirectionalTorsionalMoment.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#DirectionalTorsionalMoment.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#DirectionalTorsionalMoment.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#DirectionalTorsionalMoment.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#DirectionalTorsionalMoment.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#DirectionalTorsionalMoment.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#DirectionalTorsionalMoment.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#DirectionalTorsionalMoment.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalTorsionalMoment.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalTorsionalMoment.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalTorsionalMoment.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalTorsionalMoment.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#DirectionalTorsionalMoment.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#DirectionalTorsionalMoment.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#DirectionalTorsionalMoment.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#DirectionalTorsionalMoment.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#DirectionalTorsionalMoment.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#DirectionalTorsionalMoment.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#DirectionalTorsionalMoment.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#DirectionalTorsionalMoment.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#DirectionalTorsionalMoment.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#DirectionalTorsionalMoment.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#DirectionalTorsionalMoment.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                          | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#DirectionalTorsionalMoment.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#DirectionalTorsionalMoment.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#DirectionalTorsionalMoment.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#DirectionalTorsionalMoment.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                           | Path property.                                                                                           |
| [`PlotData`](#DirectionalTorsionalMoment.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#DirectionalTorsionalMoment.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#DirectionalTorsionalMoment.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#DirectionalTorsionalMoment.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#DirectionalTorsionalMoment.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#DirectionalTorsionalMoment.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#DirectionalTorsionalMoment.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#DirectionalTorsionalMoment.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#DirectionalTorsionalMoment.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#DirectionalTorsionalMoment.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#DirectionalTorsionalMoment.State)                                                           | State property.                                                                                          |
| [`Substep`](#DirectionalTorsionalMoment.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#DirectionalTorsionalMoment.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                  | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                             | SurfaceCoating property.                                                                                 |
| [`TabularData`](#DirectionalTorsionalMoment.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#DirectionalTorsionalMoment.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#DirectionalTorsionalMoment.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#DirectionalTorsionalMoment.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#DirectionalTorsionalMoment.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#DirectionalTorsionalMoment.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#DirectionalTorsionalMoment.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#DirectionalTorsionalMoment.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#DirectionalTorsionalMoment.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#DirectionalTorsionalMoment.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#DirectionalTorsionalMoment.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#DirectionalTorsionalMoment.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#DirectionalTorsionalMoment.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#DirectionalTorsionalMoment.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#DirectionalTorsionalMoment.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#DirectionalTorsionalMoment.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#DirectionalTorsionalMoment.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#DirectionalTorsionalMoment.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#DirectionalTorsionalMoment.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#DirectionalTorsionalMoment.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#DirectionalTorsionalMoment.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#DirectionalTorsionalMoment.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#DirectionalTorsionalMoment.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#DirectionalTorsionalMoment.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#DirectionalTorsionalMoment.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="DirectionalTorsionalMoment.AttachedRefs"></a>

### *property* DirectionalTorsionalMoment.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Average"></a>

### *property* DirectionalTorsionalMoment.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.BeamResultType"></a>

### *property* DirectionalTorsionalMoment.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.By"></a>

### *property* DirectionalTorsionalMoment.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CalculateTimeHistory"></a>

### *property* DirectionalTorsionalMoment.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Children"></a>

### *property* DirectionalTorsionalMoment.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ClsId"></a>

### *property* DirectionalTorsionalMoment.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CombinationNumber"></a>

### *property* DirectionalTorsionalMoment.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Comments"></a>

### *property* DirectionalTorsionalMoment.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CoordinateSystem"></a>

### *property* DirectionalTorsionalMoment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CrackFrontNumber"></a>

### *property* DirectionalTorsionalMoment.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.DataModelObjectCategory"></a>

### *property* DirectionalTorsionalMoment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.DisplayOption"></a>

### *property* DirectionalTorsionalMoment.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.DisplayTime"></a>

### *property* DirectionalTorsionalMoment.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.DpfEvaluation"></a>

### *property* DirectionalTorsionalMoment.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Figures"></a>

### *property* DirectionalTorsionalMoment.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GlobalIDs"></a>

### *property* DirectionalTorsionalMoment.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GraphControlsXAxis"></a>

### *property* DirectionalTorsionalMoment.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GroupingFolder"></a>

### *property* DirectionalTorsionalMoment.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.IconName"></a>

### *property* DirectionalTorsionalMoment.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Identifier"></a>

### *property* DirectionalTorsionalMoment.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Images"></a>

### *property* DirectionalTorsionalMoment.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.InternalObject"></a>

### *property* DirectionalTorsionalMoment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.IsSolved"></a>

### *property* DirectionalTorsionalMoment.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ItemType"></a>

### *property* DirectionalTorsionalMoment.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.IterationNumber"></a>

### *property* DirectionalTorsionalMoment.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.LoadStep"></a>

### *property* DirectionalTorsionalMoment.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalTorsionalMoment.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalTorsionalMoment.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalTorsionalMoment.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalTorsionalMoment.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.LoadStepNumber"></a>

### *property* DirectionalTorsionalMoment.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Location"></a>

### *property* DirectionalTorsionalMoment.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Maximum"></a>

### *property* DirectionalTorsionalMoment.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.MaximumOccursOn"></a>

### *property* DirectionalTorsionalMoment.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.MaximumOfMaximumOverTime"></a>

### *property* DirectionalTorsionalMoment.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.MaximumOfMinimumOverTime"></a>

### *property* DirectionalTorsionalMoment.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Minimum"></a>

### *property* DirectionalTorsionalMoment.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.MinimumOccursOn"></a>

### *property* DirectionalTorsionalMoment.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.MinimumOfMaximumOverTime"></a>

### *property* DirectionalTorsionalMoment.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.MinimumOfMinimumOverTime"></a>

### *property* DirectionalTorsionalMoment.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Name"></a>

### *property* DirectionalTorsionalMoment.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.NamedSelections"></a>

### *property* DirectionalTorsionalMoment.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ObjectId"></a>

### *property* DirectionalTorsionalMoment.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ObjectState"></a>

### *property* DirectionalTorsionalMoment.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ObjectTags"></a>

### *property* DirectionalTorsionalMoment.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Parent"></a>

### *property* DirectionalTorsionalMoment.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Path"></a>

### *property* DirectionalTorsionalMoment.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.PlotData"></a>

### *property* DirectionalTorsionalMoment.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Properties"></a>

### *property* DirectionalTorsionalMoment.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.RPMSelection"></a>

### *property* DirectionalTorsionalMoment.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ResultType"></a>

### *property* DirectionalTorsionalMoment.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.RpmSetNumber"></a>

### *property* DirectionalTorsionalMoment.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ScopingMethod"></a>

### *property* DirectionalTorsionalMoment.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.SeparateDataByEntity"></a>

### *property* DirectionalTorsionalMoment.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.SetNumber"></a>

### *property* DirectionalTorsionalMoment.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.SolutionCombinationDriver"></a>

### *property* DirectionalTorsionalMoment.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.SolverComponentIDs"></a>

### *property* DirectionalTorsionalMoment.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.State"></a>

### *property* DirectionalTorsionalMoment.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Substep"></a>

### *property* DirectionalTorsionalMoment.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Suppressed"></a>

### *property* DirectionalTorsionalMoment.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Surface"></a>

### *property* DirectionalTorsionalMoment.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.SurfaceCoating"></a>

### *property* DirectionalTorsionalMoment.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.TabularData"></a>

### *property* DirectionalTorsionalMoment.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Time"></a>

### *property* DirectionalTorsionalMoment.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalTorsionalMoment.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalTorsionalMoment.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalTorsionalMoment.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalTorsionalMoment.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Total"></a>

### *property* DirectionalTorsionalMoment.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.VisibleProperties"></a>

### *property* DirectionalTorsionalMoment.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayFilterBy"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayFrequencySelection"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayInterpolateData"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayLowerBand"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayMaxRPM"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayMinRPM"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayModeSelection"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayOrderSelection"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayRpmSelection"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayScopeToOrderLines"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayTimeSelection"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayUpperBand"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayXAxisMaximum"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayXAxisMinimum"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayYAxisMaximum"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallDisplayYAxisMinimum"></a>

### *property* DirectionalTorsionalMoment.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.WaterfallShowTextOnMosaic"></a>

### *property* DirectionalTorsionalMoment.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalTorsionalMoment.Activate"></a>

### DirectionalTorsionalMoment.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.AddAlert"></a>

### DirectionalTorsionalMoment.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.AddComment"></a>

### DirectionalTorsionalMoment.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.AddConvergence"></a>

### DirectionalTorsionalMoment.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.AddFigure"></a>

### DirectionalTorsionalMoment.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.AddImage"></a>

### DirectionalTorsionalMoment.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.BodyWhereMaximumOccurs"></a>

### DirectionalTorsionalMoment.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ClearGeneratedData"></a>

### DirectionalTorsionalMoment.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Copy"></a>

### DirectionalTorsionalMoment.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CopyTo"></a>

### DirectionalTorsionalMoment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CreateObjRef"></a>

### DirectionalTorsionalMoment.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CreateParameter"></a>

### DirectionalTorsionalMoment.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.CreateResultsAtAllSets"></a>

### DirectionalTorsionalMoment.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Cut"></a>

### DirectionalTorsionalMoment.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Delete"></a>

### DirectionalTorsionalMoment.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Duplicate"></a>

### DirectionalTorsionalMoment.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.DuplicateWithoutResults"></a>

### DirectionalTorsionalMoment.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Equals"></a>

### DirectionalTorsionalMoment.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.EvaluateAllResults"></a>

### DirectionalTorsionalMoment.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ExportAnimation"></a>

### DirectionalTorsionalMoment.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ExportToSTLFile"></a>

### DirectionalTorsionalMoment.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.ExportToTextFile"></a>

### DirectionalTorsionalMoment.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### DirectionalTorsionalMoment.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.FetchRemoteResult"></a>

### DirectionalTorsionalMoment.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.FetchRemoteResults"></a>

### DirectionalTorsionalMoment.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetAPIName"></a>

### DirectionalTorsionalMoment.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetAllProperties"></a>

### DirectionalTorsionalMoment.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetChildren"></a>

### DirectionalTorsionalMoment.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### DirectionalTorsionalMoment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetDetailsView"></a>

### DirectionalTorsionalMoment.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetEnumName"></a>

### DirectionalTorsionalMoment.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetHashCode"></a>

### DirectionalTorsionalMoment.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetIconFile"></a>

### DirectionalTorsionalMoment.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetLifetimeService"></a>

### DirectionalTorsionalMoment.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetNodalValues"></a>

### DirectionalTorsionalMoment.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetObjectData"></a>

### DirectionalTorsionalMoment.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetParameter"></a>

### DirectionalTorsionalMoment.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetPath"></a>

### DirectionalTorsionalMoment.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetPropertyName"></a>

### DirectionalTorsionalMoment.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetPropertyValue"></a>

### DirectionalTorsionalMoment.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetQuantityName"></a>

### DirectionalTorsionalMoment.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetVisibleProperties"></a>

### DirectionalTorsionalMoment.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GetVisiblePropertyNames"></a>

### DirectionalTorsionalMoment.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GroupAllSimilarChildren"></a>

### DirectionalTorsionalMoment.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.GroupSimilarObjects"></a>

### DirectionalTorsionalMoment.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.InitializeLifetimeService"></a>

### DirectionalTorsionalMoment.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.IsPropertyEditable"></a>

### DirectionalTorsionalMoment.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DirectionalTorsionalMoment.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.IsPropertyVisible"></a>

### DirectionalTorsionalMoment.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DirectionalTorsionalMoment.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.Paste"></a>

### DirectionalTorsionalMoment.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.PromoteToNamedSelection"></a>

### DirectionalTorsionalMoment.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.PropertyByAPIName"></a>

### DirectionalTorsionalMoment.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.PropertyById"></a>

### DirectionalTorsionalMoment.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.PropertyByName"></a>

### DirectionalTorsionalMoment.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.RemoveFromGroup"></a>

### DirectionalTorsionalMoment.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.RemoveParameter"></a>

### DirectionalTorsionalMoment.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.RenameBasedOnDefinition"></a>

### DirectionalTorsionalMoment.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.RetrieveRemoteDPFResults"></a>

### DirectionalTorsionalMoment.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalTorsionalMoment.RetrieveResult"></a>

### DirectionalTorsionalMoment.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

