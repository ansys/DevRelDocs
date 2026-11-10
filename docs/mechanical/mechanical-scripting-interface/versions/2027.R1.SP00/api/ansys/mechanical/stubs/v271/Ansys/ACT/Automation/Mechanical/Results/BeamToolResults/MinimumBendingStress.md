# `MinimumBendingStress`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults.MinimumBendingStress"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.BeamToolResults.MinimumBendingStress(internalObject: Any)

<a id="MinimumBendingStress"></a>

### *class* MinimumBendingStress(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MinimumBendingStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MinimumBendingStress.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#MinimumBendingStress.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#MinimumBendingStress.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#MinimumBendingStress.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#MinimumBendingStress.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MinimumBendingStress.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#MinimumBendingStress.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#MinimumBendingStress.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#MinimumBendingStress.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MinimumBendingStress.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MinimumBendingStress.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MinimumBendingStress.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#MinimumBendingStress.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#MinimumBendingStress.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MinimumBendingStress.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MinimumBendingStress.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#MinimumBendingStress.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#MinimumBendingStress.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#MinimumBendingStress.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#MinimumBendingStress.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#MinimumBendingStress.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#MinimumBendingStress.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#MinimumBendingStress.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#MinimumBendingStress.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#MinimumBendingStress.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#MinimumBendingStress.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MinimumBendingStress.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MinimumBendingStress.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MinimumBendingStress.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MinimumBendingStress.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MinimumBendingStress.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MinimumBendingStress.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#MinimumBendingStress.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#MinimumBendingStress.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MinimumBendingStress.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MinimumBendingStress.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MinimumBendingStress.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MinimumBendingStress.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#MinimumBendingStress.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#MinimumBendingStress.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MinimumBendingStress.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MinimumBendingStress.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MinimumBendingStress.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MinimumBendingStress.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MinimumBendingStress.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MinimumBendingStress.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MinimumBendingStress.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#MinimumBendingStress.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#MinimumBendingStress.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MinimumBendingStress.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MinimumBendingStress.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MinimumBendingStress.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MinimumBendingStress.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MinimumBendingStress.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#MinimumBendingStress.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#MinimumBendingStress.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#MinimumBendingStress.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#MinimumBendingStress.Average)                                                       | Gets the Average.                                                                                        |
| [`BeamToolStressResultType`](#MinimumBendingStress.BeamToolStressResultType)                     | Gets or sets the BeamToolStressResultType.                                                               |
| [`By`](#MinimumBendingStress.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#MinimumBendingStress.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#MinimumBendingStress.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#MinimumBendingStress.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#MinimumBendingStress.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#MinimumBendingStress.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                 | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#MinimumBendingStress.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DataModelObjectCategory`](#MinimumBendingStress.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#MinimumBendingStress.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#MinimumBendingStress.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#MinimumBendingStress.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#MinimumBendingStress.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#MinimumBendingStress.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#MinimumBendingStress.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#MinimumBendingStress.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#MinimumBendingStress.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#MinimumBendingStress.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#MinimumBendingStress.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#MinimumBendingStress.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#MinimumBendingStress.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#MinimumBendingStress.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#MinimumBendingStress.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#MinimumBendingStress.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#MinimumBendingStress.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#MinimumBendingStress.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#MinimumBendingStress.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#MinimumBendingStress.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#MinimumBendingStress.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#MinimumBendingStress.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#MinimumBendingStress.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#MinimumBendingStress.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#MinimumBendingStress.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#MinimumBendingStress.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#MinimumBendingStress.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#MinimumBendingStress.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#MinimumBendingStress.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#MinimumBendingStress.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Name`](#MinimumBendingStress.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                    | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#MinimumBendingStress.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#MinimumBendingStress.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#MinimumBendingStress.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#MinimumBendingStress.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                     | Path property.                                                                                           |
| [`PlotData`](#MinimumBendingStress.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Properties`](#MinimumBendingStress.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#MinimumBendingStress.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#MinimumBendingStress.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#MinimumBendingStress.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#MinimumBendingStress.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#MinimumBendingStress.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#MinimumBendingStress.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#MinimumBendingStress.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#MinimumBendingStress.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#MinimumBendingStress.State)                                                           | State property.                                                                                          |
| [`Substep`](#MinimumBendingStress.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#MinimumBendingStress.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                            | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                       | SurfaceCoating property.                                                                                 |
| [`TabularData`](#MinimumBendingStress.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#MinimumBendingStress.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#MinimumBendingStress.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#MinimumBendingStress.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#MinimumBendingStress.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#MinimumBendingStress.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#MinimumBendingStress.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#MinimumBendingStress.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#MinimumBendingStress.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#MinimumBendingStress.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#MinimumBendingStress.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#MinimumBendingStress.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#MinimumBendingStress.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#MinimumBendingStress.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#MinimumBendingStress.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#MinimumBendingStress.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#MinimumBendingStress.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#MinimumBendingStress.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#MinimumBendingStress.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#MinimumBendingStress.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#MinimumBendingStress.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#MinimumBendingStress.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#MinimumBendingStress.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#MinimumBendingStress.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#MinimumBendingStress.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="MinimumBendingStress.AttachedRefs"></a>

### *property* MinimumBendingStress.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Average"></a>

### *property* MinimumBendingStress.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.BeamToolStressResultType"></a>

### *property* MinimumBendingStress.BeamToolStressResultType *: [Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType](../../../../../Mechanical/DataModel/Enums/BeamToolStressResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BeamToolStressResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamToolStressResultType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.By"></a>

### *property* MinimumBendingStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CalculateTimeHistory"></a>

### *property* MinimumBendingStress.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Children"></a>

### *property* MinimumBendingStress.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ClsId"></a>

### *property* MinimumBendingStress.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CombinationNumber"></a>

### *property* MinimumBendingStress.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Comments"></a>

### *property* MinimumBendingStress.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CoordinateSystem"></a>

### *property* MinimumBendingStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CrackFrontNumber"></a>

### *property* MinimumBendingStress.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.DataModelObjectCategory"></a>

### *property* MinimumBendingStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.DisplayOption"></a>

### *property* MinimumBendingStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.DisplayTime"></a>

### *property* MinimumBendingStress.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.DpfEvaluation"></a>

### *property* MinimumBendingStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Figures"></a>

### *property* MinimumBendingStress.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GlobalIDs"></a>

### *property* MinimumBendingStress.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GraphControlsXAxis"></a>

### *property* MinimumBendingStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GroupingFolder"></a>

### *property* MinimumBendingStress.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.IconName"></a>

### *property* MinimumBendingStress.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Identifier"></a>

### *property* MinimumBendingStress.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Images"></a>

### *property* MinimumBendingStress.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.InternalObject"></a>

### *property* MinimumBendingStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.IsSolved"></a>

### *property* MinimumBendingStress.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ItemType"></a>

### *property* MinimumBendingStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.IterationNumber"></a>

### *property* MinimumBendingStress.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.LoadStep"></a>

### *property* MinimumBendingStress.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* MinimumBendingStress.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* MinimumBendingStress.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* MinimumBendingStress.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* MinimumBendingStress.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.LoadStepNumber"></a>

### *property* MinimumBendingStress.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Location"></a>

### *property* MinimumBendingStress.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Maximum"></a>

### *property* MinimumBendingStress.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.MaximumOccursOn"></a>

### *property* MinimumBendingStress.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.MaximumOfMaximumOverTime"></a>

### *property* MinimumBendingStress.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.MaximumOfMinimumOverTime"></a>

### *property* MinimumBendingStress.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Minimum"></a>

### *property* MinimumBendingStress.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.MinimumOccursOn"></a>

### *property* MinimumBendingStress.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.MinimumOfMaximumOverTime"></a>

### *property* MinimumBendingStress.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.MinimumOfMinimumOverTime"></a>

### *property* MinimumBendingStress.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Name"></a>

### *property* MinimumBendingStress.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.NamedSelections"></a>

### *property* MinimumBendingStress.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ObjectId"></a>

### *property* MinimumBendingStress.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ObjectState"></a>

### *property* MinimumBendingStress.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ObjectTags"></a>

### *property* MinimumBendingStress.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Parent"></a>

### *property* MinimumBendingStress.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Path"></a>

### *property* MinimumBendingStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.PlotData"></a>

### *property* MinimumBendingStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Properties"></a>

### *property* MinimumBendingStress.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.RPMSelection"></a>

### *property* MinimumBendingStress.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ResultType"></a>

### *property* MinimumBendingStress.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.RpmSetNumber"></a>

### *property* MinimumBendingStress.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ScopingMethod"></a>

### *property* MinimumBendingStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.SeparateDataByEntity"></a>

### *property* MinimumBendingStress.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.SetNumber"></a>

### *property* MinimumBendingStress.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.SolutionCombinationDriver"></a>

### *property* MinimumBendingStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.SolverComponentIDs"></a>

### *property* MinimumBendingStress.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.State"></a>

### *property* MinimumBendingStress.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Substep"></a>

### *property* MinimumBendingStress.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Suppressed"></a>

### *property* MinimumBendingStress.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Surface"></a>

### *property* MinimumBendingStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.SurfaceCoating"></a>

### *property* MinimumBendingStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.TabularData"></a>

### *property* MinimumBendingStress.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Time"></a>

### *property* MinimumBendingStress.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.TimeForMaximumOfMaximumValues"></a>

### *property* MinimumBendingStress.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.TimeForMaximumOfMinimumValues"></a>

### *property* MinimumBendingStress.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.TimeForMinimumOfMaximumValues"></a>

### *property* MinimumBendingStress.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.TimeForMinimumOfMinimumValues"></a>

### *property* MinimumBendingStress.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Total"></a>

### *property* MinimumBendingStress.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.VisibleProperties"></a>

### *property* MinimumBendingStress.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayFilterBy"></a>

### *property* MinimumBendingStress.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayFrequencySelection"></a>

### *property* MinimumBendingStress.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayInterpolateData"></a>

### *property* MinimumBendingStress.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayLowerBand"></a>

### *property* MinimumBendingStress.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayMaxRPM"></a>

### *property* MinimumBendingStress.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayMinRPM"></a>

### *property* MinimumBendingStress.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayModeSelection"></a>

### *property* MinimumBendingStress.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayOrderSelection"></a>

### *property* MinimumBendingStress.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayRpmSelection"></a>

### *property* MinimumBendingStress.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayScopeToOrderLines"></a>

### *property* MinimumBendingStress.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayTimeSelection"></a>

### *property* MinimumBendingStress.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayUpperBand"></a>

### *property* MinimumBendingStress.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayXAxisMaximum"></a>

### *property* MinimumBendingStress.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayXAxisMinimum"></a>

### *property* MinimumBendingStress.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayYAxisMaximum"></a>

### *property* MinimumBendingStress.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallDisplayYAxisMinimum"></a>

### *property* MinimumBendingStress.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.WaterfallShowTextOnMosaic"></a>

### *property* MinimumBendingStress.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MinimumBendingStress.Activate"></a>

### MinimumBendingStress.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.AddAlert"></a>

### MinimumBendingStress.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.AddComment"></a>

### MinimumBendingStress.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.AddConvergence"></a>

### MinimumBendingStress.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.AddFigure"></a>

### MinimumBendingStress.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.AddImage"></a>

### MinimumBendingStress.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.BodyWhereMaximumOccurs"></a>

### MinimumBendingStress.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ClearGeneratedData"></a>

### MinimumBendingStress.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Copy"></a>

### MinimumBendingStress.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CopyTo"></a>

### MinimumBendingStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CreateObjRef"></a>

### MinimumBendingStress.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CreateParameter"></a>

### MinimumBendingStress.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.CreateResultsAtAllSets"></a>

### MinimumBendingStress.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Cut"></a>

### MinimumBendingStress.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Delete"></a>

### MinimumBendingStress.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Duplicate"></a>

### MinimumBendingStress.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.DuplicateWithoutResults"></a>

### MinimumBendingStress.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Equals"></a>

### MinimumBendingStress.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.EvaluateAllResults"></a>

### MinimumBendingStress.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ExportAnimation"></a>

### MinimumBendingStress.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ExportToSTLFile"></a>

### MinimumBendingStress.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.ExportToTextFile"></a>

### MinimumBendingStress.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MinimumBendingStress.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.FetchRemoteResult"></a>

### MinimumBendingStress.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.FetchRemoteResults"></a>

### MinimumBendingStress.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetAPIName"></a>

### MinimumBendingStress.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetAllProperties"></a>

### MinimumBendingStress.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetChildren"></a>

### MinimumBendingStress.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MinimumBendingStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetDetailsView"></a>

### MinimumBendingStress.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetEnumName"></a>

### MinimumBendingStress.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetHashCode"></a>

### MinimumBendingStress.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetIconFile"></a>

### MinimumBendingStress.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetLifetimeService"></a>

### MinimumBendingStress.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetNodalValues"></a>

### MinimumBendingStress.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetObjectData"></a>

### MinimumBendingStress.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetParameter"></a>

### MinimumBendingStress.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetPath"></a>

### MinimumBendingStress.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetPropertyName"></a>

### MinimumBendingStress.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetPropertyValue"></a>

### MinimumBendingStress.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetQuantityName"></a>

### MinimumBendingStress.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetVisibleProperties"></a>

### MinimumBendingStress.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GetVisiblePropertyNames"></a>

### MinimumBendingStress.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GroupAllSimilarChildren"></a>

### MinimumBendingStress.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.GroupSimilarObjects"></a>

### MinimumBendingStress.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.InitializeLifetimeService"></a>

### MinimumBendingStress.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.IsPropertyEditable"></a>

### MinimumBendingStress.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MinimumBendingStress.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.IsPropertyVisible"></a>

### MinimumBendingStress.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MinimumBendingStress.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.Paste"></a>

### MinimumBendingStress.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.PromoteToNamedSelection"></a>

### MinimumBendingStress.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.PropertyByAPIName"></a>

### MinimumBendingStress.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.PropertyById"></a>

### MinimumBendingStress.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.PropertyByName"></a>

### MinimumBendingStress.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.RemoveFromGroup"></a>

### MinimumBendingStress.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.RemoveParameter"></a>

### MinimumBendingStress.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.RenameBasedOnDefinition"></a>

### MinimumBendingStress.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.RetrieveRemoteDPFResults"></a>

### MinimumBendingStress.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="MinimumBendingStress.RetrieveResult"></a>

### MinimumBendingStress.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

