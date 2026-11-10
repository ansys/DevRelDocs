# `FiberTensileFailureCriterion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberTensileFailureCriterion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberTensileFailureCriterion(internalObject: Any)

<a id="FiberTensileFailureCriterion"></a>

### *class* FiberTensileFailureCriterion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FiberTensileFailureCriterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FiberTensileFailureCriterion.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#FiberTensileFailureCriterion.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#FiberTensileFailureCriterion.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#FiberTensileFailureCriterion.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#FiberTensileFailureCriterion.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#FiberTensileFailureCriterion.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#FiberTensileFailureCriterion.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#FiberTensileFailureCriterion.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#FiberTensileFailureCriterion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FiberTensileFailureCriterion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FiberTensileFailureCriterion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FiberTensileFailureCriterion.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#FiberTensileFailureCriterion.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#FiberTensileFailureCriterion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FiberTensileFailureCriterion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FiberTensileFailureCriterion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#FiberTensileFailureCriterion.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#FiberTensileFailureCriterion.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#FiberTensileFailureCriterion.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#FiberTensileFailureCriterion.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#FiberTensileFailureCriterion.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#FiberTensileFailureCriterion.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#FiberTensileFailureCriterion.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#FiberTensileFailureCriterion.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#FiberTensileFailureCriterion.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#FiberTensileFailureCriterion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FiberTensileFailureCriterion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FiberTensileFailureCriterion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FiberTensileFailureCriterion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FiberTensileFailureCriterion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FiberTensileFailureCriterion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FiberTensileFailureCriterion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#FiberTensileFailureCriterion.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#FiberTensileFailureCriterion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FiberTensileFailureCriterion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FiberTensileFailureCriterion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FiberTensileFailureCriterion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FiberTensileFailureCriterion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#FiberTensileFailureCriterion.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#FiberTensileFailureCriterion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FiberTensileFailureCriterion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FiberTensileFailureCriterion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FiberTensileFailureCriterion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FiberTensileFailureCriterion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FiberTensileFailureCriterion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FiberTensileFailureCriterion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FiberTensileFailureCriterion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#FiberTensileFailureCriterion.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#FiberTensileFailureCriterion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FiberTensileFailureCriterion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FiberTensileFailureCriterion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FiberTensileFailureCriterion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FiberTensileFailureCriterion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#FiberTensileFailureCriterion.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#FiberTensileFailureCriterion.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#FiberTensileFailureCriterion.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#FiberTensileFailureCriterion.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#FiberTensileFailureCriterion.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#FiberTensileFailureCriterion.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#FiberTensileFailureCriterion.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#FiberTensileFailureCriterion.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#FiberTensileFailureCriterion.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#FiberTensileFailureCriterion.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#FiberTensileFailureCriterion.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                         | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#FiberTensileFailureCriterion.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DamageResultType`](#FiberTensileFailureCriterion.DamageResultType)                                     | Gets the DamageResultType.                                                                               |
| [`DataModelObjectCategory`](#FiberTensileFailureCriterion.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#FiberTensileFailureCriterion.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#FiberTensileFailureCriterion.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#FiberTensileFailureCriterion.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#FiberTensileFailureCriterion.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#FiberTensileFailureCriterion.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#FiberTensileFailureCriterion.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#FiberTensileFailureCriterion.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#FiberTensileFailureCriterion.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#FiberTensileFailureCriterion.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#FiberTensileFailureCriterion.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#FiberTensileFailureCriterion.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#FiberTensileFailureCriterion.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#FiberTensileFailureCriterion.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#FiberTensileFailureCriterion.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#FiberTensileFailureCriterion.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#FiberTensileFailureCriterion.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#FiberTensileFailureCriterion.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#FiberTensileFailureCriterion.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#FiberTensileFailureCriterion.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#FiberTensileFailureCriterion.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#FiberTensileFailureCriterion.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#FiberTensileFailureCriterion.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#FiberTensileFailureCriterion.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#FiberTensileFailureCriterion.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#FiberTensileFailureCriterion.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#FiberTensileFailureCriterion.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#FiberTensileFailureCriterion.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#FiberTensileFailureCriterion.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#FiberTensileFailureCriterion.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Mode`](#FiberTensileFailureCriterion.Mode)                                                             | Gets or sets the Mode.                                                                                   |
| [`Name`](#FiberTensileFailureCriterion.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                            | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#FiberTensileFailureCriterion.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#FiberTensileFailureCriterion.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#FiberTensileFailureCriterion.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#FiberTensileFailureCriterion.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                             | Path property.                                                                                           |
| [`Plies`](#FiberTensileFailureCriterion.Plies)                                                           | Plies property.                                                                                          |
| [`PlotData`](#FiberTensileFailureCriterion.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Ply`](#FiberTensileFailureCriterion.Ply)                                                               | Gets or sets the Ply selection.                                                                          |
| [`Position`](#Position)                                                       | Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.                  |
| [`Properties`](#FiberTensileFailureCriterion.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#FiberTensileFailureCriterion.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#FiberTensileFailureCriterion.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#FiberTensileFailureCriterion.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#FiberTensileFailureCriterion.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#FiberTensileFailureCriterion.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#FiberTensileFailureCriterion.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#FiberTensileFailureCriterion.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#FiberTensileFailureCriterion.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#FiberTensileFailureCriterion.State)                                                           | State property.                                                                                          |
| [`Substep`](#FiberTensileFailureCriterion.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#FiberTensileFailureCriterion.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                    | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                               | SurfaceCoating property.                                                                                 |
| [`TabularData`](#FiberTensileFailureCriterion.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#FiberTensileFailureCriterion.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#FiberTensileFailureCriterion.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#FiberTensileFailureCriterion.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#FiberTensileFailureCriterion.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#FiberTensileFailureCriterion.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#FiberTensileFailureCriterion.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#FiberTensileFailureCriterion.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#FiberTensileFailureCriterion.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#FiberTensileFailureCriterion.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#FiberTensileFailureCriterion.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#FiberTensileFailureCriterion.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#FiberTensileFailureCriterion.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#FiberTensileFailureCriterion.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#FiberTensileFailureCriterion.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#FiberTensileFailureCriterion.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#FiberTensileFailureCriterion.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#FiberTensileFailureCriterion.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#FiberTensileFailureCriterion.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#FiberTensileFailureCriterion.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#FiberTensileFailureCriterion.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#FiberTensileFailureCriterion.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#FiberTensileFailureCriterion.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#FiberTensileFailureCriterion.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#FiberTensileFailureCriterion.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="FiberTensileFailureCriterion.AttachedRefs"></a>

### *property* FiberTensileFailureCriterion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Average"></a>

### *property* FiberTensileFailureCriterion.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.By"></a>

### *property* FiberTensileFailureCriterion.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CalculateTimeHistory"></a>

### *property* FiberTensileFailureCriterion.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Children"></a>

### *property* FiberTensileFailureCriterion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ClsId"></a>

### *property* FiberTensileFailureCriterion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CombinationNumber"></a>

### *property* FiberTensileFailureCriterion.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Comments"></a>

### *property* FiberTensileFailureCriterion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CoordinateSystem"></a>

### *property* FiberTensileFailureCriterion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CrackFrontNumber"></a>

### *property* FiberTensileFailureCriterion.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.DamageResultType"></a>

### *property* FiberTensileFailureCriterion.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.DataModelObjectCategory"></a>

### *property* FiberTensileFailureCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.DisplayOption"></a>

### *property* FiberTensileFailureCriterion.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.DisplayTime"></a>

### *property* FiberTensileFailureCriterion.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.DpfEvaluation"></a>

### *property* FiberTensileFailureCriterion.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Figures"></a>

### *property* FiberTensileFailureCriterion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GlobalIDs"></a>

### *property* FiberTensileFailureCriterion.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GraphControlsXAxis"></a>

### *property* FiberTensileFailureCriterion.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GroupingFolder"></a>

### *property* FiberTensileFailureCriterion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.IconName"></a>

### *property* FiberTensileFailureCriterion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Identifier"></a>

### *property* FiberTensileFailureCriterion.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Images"></a>

### *property* FiberTensileFailureCriterion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.InternalObject"></a>

### *property* FiberTensileFailureCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.IsSolved"></a>

### *property* FiberTensileFailureCriterion.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ItemType"></a>

### *property* FiberTensileFailureCriterion.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.IterationNumber"></a>

### *property* FiberTensileFailureCriterion.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.LoadStep"></a>

### *property* FiberTensileFailureCriterion.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.LoadStepForMaximumOfMaximumValues"></a>

### *property* FiberTensileFailureCriterion.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.LoadStepForMaximumOfMinimumValues"></a>

### *property* FiberTensileFailureCriterion.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.LoadStepForMinimumOfMaximumValues"></a>

### *property* FiberTensileFailureCriterion.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.LoadStepForMinimumOfMinimumValues"></a>

### *property* FiberTensileFailureCriterion.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.LoadStepNumber"></a>

### *property* FiberTensileFailureCriterion.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Location"></a>

### *property* FiberTensileFailureCriterion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Maximum"></a>

### *property* FiberTensileFailureCriterion.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.MaximumOccursOn"></a>

### *property* FiberTensileFailureCriterion.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.MaximumOfMaximumOverTime"></a>

### *property* FiberTensileFailureCriterion.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.MaximumOfMinimumOverTime"></a>

### *property* FiberTensileFailureCriterion.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Minimum"></a>

### *property* FiberTensileFailureCriterion.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.MinimumOccursOn"></a>

### *property* FiberTensileFailureCriterion.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.MinimumOfMaximumOverTime"></a>

### *property* FiberTensileFailureCriterion.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.MinimumOfMinimumOverTime"></a>

### *property* FiberTensileFailureCriterion.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Mode"></a>

### *property* FiberTensileFailureCriterion.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Name"></a>

### *property* FiberTensileFailureCriterion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.NamedSelections"></a>

### *property* FiberTensileFailureCriterion.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ObjectId"></a>

### *property* FiberTensileFailureCriterion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ObjectState"></a>

### *property* FiberTensileFailureCriterion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ObjectTags"></a>

### *property* FiberTensileFailureCriterion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Parent"></a>

### *property* FiberTensileFailureCriterion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Path"></a>

### *property* FiberTensileFailureCriterion.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Plies"></a>

### *property* FiberTensileFailureCriterion.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.PlotData"></a>

### *property* FiberTensileFailureCriterion.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Ply"></a>

### *property* FiberTensileFailureCriterion.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Position"></a>

### *property* FiberTensileFailureCriterion.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Properties"></a>

### *property* FiberTensileFailureCriterion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.RPMSelection"></a>

### *property* FiberTensileFailureCriterion.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ResultType"></a>

### *property* FiberTensileFailureCriterion.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.RpmSetNumber"></a>

### *property* FiberTensileFailureCriterion.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ScopingMethod"></a>

### *property* FiberTensileFailureCriterion.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.SeparateDataByEntity"></a>

### *property* FiberTensileFailureCriterion.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.SetNumber"></a>

### *property* FiberTensileFailureCriterion.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.SolutionCombinationDriver"></a>

### *property* FiberTensileFailureCriterion.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.SolverComponentIDs"></a>

### *property* FiberTensileFailureCriterion.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.State"></a>

### *property* FiberTensileFailureCriterion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Substep"></a>

### *property* FiberTensileFailureCriterion.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Suppressed"></a>

### *property* FiberTensileFailureCriterion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Surface"></a>

### *property* FiberTensileFailureCriterion.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.SurfaceCoating"></a>

### *property* FiberTensileFailureCriterion.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.TabularData"></a>

### *property* FiberTensileFailureCriterion.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Time"></a>

### *property* FiberTensileFailureCriterion.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.TimeForMaximumOfMaximumValues"></a>

### *property* FiberTensileFailureCriterion.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.TimeForMaximumOfMinimumValues"></a>

### *property* FiberTensileFailureCriterion.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.TimeForMinimumOfMaximumValues"></a>

### *property* FiberTensileFailureCriterion.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.TimeForMinimumOfMinimumValues"></a>

### *property* FiberTensileFailureCriterion.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Total"></a>

### *property* FiberTensileFailureCriterion.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.VisibleProperties"></a>

### *property* FiberTensileFailureCriterion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayFilterBy"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayFrequencySelection"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayInterpolateData"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayLowerBand"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayMaxRPM"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayMinRPM"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayModeSelection"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayOrderSelection"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayRpmSelection"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayScopeToOrderLines"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayTimeSelection"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayUpperBand"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayXAxisMaximum"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayXAxisMinimum"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayYAxisMaximum"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallDisplayYAxisMinimum"></a>

### *property* FiberTensileFailureCriterion.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.WaterfallShowTextOnMosaic"></a>

### *property* FiberTensileFailureCriterion.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FiberTensileFailureCriterion.Activate"></a>

### FiberTensileFailureCriterion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.AddAlert"></a>

### FiberTensileFailureCriterion.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.AddComment"></a>

### FiberTensileFailureCriterion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.AddConvergence"></a>

### FiberTensileFailureCriterion.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.AddFigure"></a>

### FiberTensileFailureCriterion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.AddImage"></a>

### FiberTensileFailureCriterion.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.BodyWhereMaximumOccurs"></a>

### FiberTensileFailureCriterion.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ClearGeneratedData"></a>

### FiberTensileFailureCriterion.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Copy"></a>

### FiberTensileFailureCriterion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CopyTo"></a>

### FiberTensileFailureCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CreateObjRef"></a>

### FiberTensileFailureCriterion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CreateParameter"></a>

### FiberTensileFailureCriterion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.CreateResultsAtAllSets"></a>

### FiberTensileFailureCriterion.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Cut"></a>

### FiberTensileFailureCriterion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Delete"></a>

### FiberTensileFailureCriterion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Duplicate"></a>

### FiberTensileFailureCriterion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.DuplicateWithoutResults"></a>

### FiberTensileFailureCriterion.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Equals"></a>

### FiberTensileFailureCriterion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.EvaluateAllResults"></a>

### FiberTensileFailureCriterion.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ExportAnimation"></a>

### FiberTensileFailureCriterion.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ExportToSTLFile"></a>

### FiberTensileFailureCriterion.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.ExportToTextFile"></a>

### FiberTensileFailureCriterion.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### FiberTensileFailureCriterion.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.FetchRemoteResult"></a>

### FiberTensileFailureCriterion.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.FetchRemoteResults"></a>

### FiberTensileFailureCriterion.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetAPIName"></a>

### FiberTensileFailureCriterion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetAllProperties"></a>

### FiberTensileFailureCriterion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetChildren"></a>

### FiberTensileFailureCriterion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FiberTensileFailureCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetDetailsView"></a>

### FiberTensileFailureCriterion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetEnumName"></a>

### FiberTensileFailureCriterion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetHashCode"></a>

### FiberTensileFailureCriterion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetIconFile"></a>

### FiberTensileFailureCriterion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetLifetimeService"></a>

### FiberTensileFailureCriterion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetNodalValues"></a>

### FiberTensileFailureCriterion.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetObjectData"></a>

### FiberTensileFailureCriterion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetParameter"></a>

### FiberTensileFailureCriterion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetPath"></a>

### FiberTensileFailureCriterion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetPropertyName"></a>

### FiberTensileFailureCriterion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetPropertyValue"></a>

### FiberTensileFailureCriterion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetQuantityName"></a>

### FiberTensileFailureCriterion.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetVisibleProperties"></a>

### FiberTensileFailureCriterion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GetVisiblePropertyNames"></a>

### FiberTensileFailureCriterion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GroupAllSimilarChildren"></a>

### FiberTensileFailureCriterion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.GroupSimilarObjects"></a>

### FiberTensileFailureCriterion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.InitializeLifetimeService"></a>

### FiberTensileFailureCriterion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.IsPropertyEditable"></a>

### FiberTensileFailureCriterion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FiberTensileFailureCriterion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.IsPropertyVisible"></a>

### FiberTensileFailureCriterion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FiberTensileFailureCriterion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.Paste"></a>

### FiberTensileFailureCriterion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.PromoteToNamedSelection"></a>

### FiberTensileFailureCriterion.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.PropertyByAPIName"></a>

### FiberTensileFailureCriterion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.PropertyById"></a>

### FiberTensileFailureCriterion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.PropertyByName"></a>

### FiberTensileFailureCriterion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.RemoveFromGroup"></a>

### FiberTensileFailureCriterion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.RemoveParameter"></a>

### FiberTensileFailureCriterion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.RenameBasedOnDefinition"></a>

### FiberTensileFailureCriterion.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.RetrieveRemoteDPFResults"></a>

### FiberTensileFailureCriterion.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileFailureCriterion.RetrieveResult"></a>

### FiberTensileFailureCriterion.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

