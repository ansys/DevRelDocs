# `FiberCompressiveFailureCriterion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberCompressiveFailureCriterion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberCompressiveFailureCriterion(internalObject: Any)

<a id="FiberCompressiveFailureCriterion"></a>

### *class* FiberCompressiveFailureCriterion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FiberCompressiveFailureCriterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FiberCompressiveFailureCriterion.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#FiberCompressiveFailureCriterion.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#FiberCompressiveFailureCriterion.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#FiberCompressiveFailureCriterion.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#FiberCompressiveFailureCriterion.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#FiberCompressiveFailureCriterion.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#FiberCompressiveFailureCriterion.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#FiberCompressiveFailureCriterion.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#FiberCompressiveFailureCriterion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FiberCompressiveFailureCriterion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FiberCompressiveFailureCriterion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FiberCompressiveFailureCriterion.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#FiberCompressiveFailureCriterion.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#FiberCompressiveFailureCriterion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FiberCompressiveFailureCriterion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FiberCompressiveFailureCriterion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#FiberCompressiveFailureCriterion.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#FiberCompressiveFailureCriterion.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#FiberCompressiveFailureCriterion.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#FiberCompressiveFailureCriterion.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#FiberCompressiveFailureCriterion.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#FiberCompressiveFailureCriterion.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#FiberCompressiveFailureCriterion.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#FiberCompressiveFailureCriterion.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#FiberCompressiveFailureCriterion.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#FiberCompressiveFailureCriterion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FiberCompressiveFailureCriterion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FiberCompressiveFailureCriterion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FiberCompressiveFailureCriterion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FiberCompressiveFailureCriterion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FiberCompressiveFailureCriterion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FiberCompressiveFailureCriterion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#FiberCompressiveFailureCriterion.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#FiberCompressiveFailureCriterion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FiberCompressiveFailureCriterion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FiberCompressiveFailureCriterion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FiberCompressiveFailureCriterion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FiberCompressiveFailureCriterion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#FiberCompressiveFailureCriterion.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#FiberCompressiveFailureCriterion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FiberCompressiveFailureCriterion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FiberCompressiveFailureCriterion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FiberCompressiveFailureCriterion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FiberCompressiveFailureCriterion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FiberCompressiveFailureCriterion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FiberCompressiveFailureCriterion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FiberCompressiveFailureCriterion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#FiberCompressiveFailureCriterion.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#FiberCompressiveFailureCriterion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FiberCompressiveFailureCriterion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FiberCompressiveFailureCriterion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FiberCompressiveFailureCriterion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FiberCompressiveFailureCriterion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#FiberCompressiveFailureCriterion.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#FiberCompressiveFailureCriterion.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#FiberCompressiveFailureCriterion.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#FiberCompressiveFailureCriterion.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#FiberCompressiveFailureCriterion.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#FiberCompressiveFailureCriterion.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#FiberCompressiveFailureCriterion.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#FiberCompressiveFailureCriterion.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#FiberCompressiveFailureCriterion.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#FiberCompressiveFailureCriterion.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#FiberCompressiveFailureCriterion.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                             | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#FiberCompressiveFailureCriterion.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DamageResultType`](#FiberCompressiveFailureCriterion.DamageResultType)                                     | Gets the DamageResultType.                                                                               |
| [`DataModelObjectCategory`](#FiberCompressiveFailureCriterion.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#FiberCompressiveFailureCriterion.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#FiberCompressiveFailureCriterion.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#FiberCompressiveFailureCriterion.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#FiberCompressiveFailureCriterion.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#FiberCompressiveFailureCriterion.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#FiberCompressiveFailureCriterion.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#FiberCompressiveFailureCriterion.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#FiberCompressiveFailureCriterion.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#FiberCompressiveFailureCriterion.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#FiberCompressiveFailureCriterion.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#FiberCompressiveFailureCriterion.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#FiberCompressiveFailureCriterion.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#FiberCompressiveFailureCriterion.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#FiberCompressiveFailureCriterion.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#FiberCompressiveFailureCriterion.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#FiberCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#FiberCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#FiberCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#FiberCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#FiberCompressiveFailureCriterion.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#FiberCompressiveFailureCriterion.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#FiberCompressiveFailureCriterion.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#FiberCompressiveFailureCriterion.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#FiberCompressiveFailureCriterion.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#FiberCompressiveFailureCriterion.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#FiberCompressiveFailureCriterion.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#FiberCompressiveFailureCriterion.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#FiberCompressiveFailureCriterion.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#FiberCompressiveFailureCriterion.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Mode`](#FiberCompressiveFailureCriterion.Mode)                                                             | Gets or sets the Mode.                                                                                   |
| [`Name`](#FiberCompressiveFailureCriterion.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                                | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#FiberCompressiveFailureCriterion.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#FiberCompressiveFailureCriterion.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#FiberCompressiveFailureCriterion.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#FiberCompressiveFailureCriterion.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                                 | Path property.                                                                                           |
| [`Plies`](#FiberCompressiveFailureCriterion.Plies)                                                           | Plies property.                                                                                          |
| [`PlotData`](#FiberCompressiveFailureCriterion.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Ply`](#FiberCompressiveFailureCriterion.Ply)                                                               | Gets or sets the Ply selection.                                                                          |
| [`Position`](#Position)                                                           | Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.                  |
| [`Properties`](#FiberCompressiveFailureCriterion.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#FiberCompressiveFailureCriterion.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#FiberCompressiveFailureCriterion.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#FiberCompressiveFailureCriterion.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#FiberCompressiveFailureCriterion.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#FiberCompressiveFailureCriterion.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#FiberCompressiveFailureCriterion.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#FiberCompressiveFailureCriterion.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#FiberCompressiveFailureCriterion.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#FiberCompressiveFailureCriterion.State)                                                           | State property.                                                                                          |
| [`Substep`](#FiberCompressiveFailureCriterion.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#FiberCompressiveFailureCriterion.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                        | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                   | SurfaceCoating property.                                                                                 |
| [`TabularData`](#FiberCompressiveFailureCriterion.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#FiberCompressiveFailureCriterion.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#FiberCompressiveFailureCriterion.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#FiberCompressiveFailureCriterion.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#FiberCompressiveFailureCriterion.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#FiberCompressiveFailureCriterion.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#FiberCompressiveFailureCriterion.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#FiberCompressiveFailureCriterion.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#FiberCompressiveFailureCriterion.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#FiberCompressiveFailureCriterion.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#FiberCompressiveFailureCriterion.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#FiberCompressiveFailureCriterion.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#FiberCompressiveFailureCriterion.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#FiberCompressiveFailureCriterion.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#FiberCompressiveFailureCriterion.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#FiberCompressiveFailureCriterion.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#FiberCompressiveFailureCriterion.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#FiberCompressiveFailureCriterion.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#FiberCompressiveFailureCriterion.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#FiberCompressiveFailureCriterion.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#FiberCompressiveFailureCriterion.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#FiberCompressiveFailureCriterion.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#FiberCompressiveFailureCriterion.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#FiberCompressiveFailureCriterion.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#FiberCompressiveFailureCriterion.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="FiberCompressiveFailureCriterion.AttachedRefs"></a>

### *property* FiberCompressiveFailureCriterion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Average"></a>

### *property* FiberCompressiveFailureCriterion.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.By"></a>

### *property* FiberCompressiveFailureCriterion.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CalculateTimeHistory"></a>

### *property* FiberCompressiveFailureCriterion.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Children"></a>

### *property* FiberCompressiveFailureCriterion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ClsId"></a>

### *property* FiberCompressiveFailureCriterion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CombinationNumber"></a>

### *property* FiberCompressiveFailureCriterion.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Comments"></a>

### *property* FiberCompressiveFailureCriterion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CoordinateSystem"></a>

### *property* FiberCompressiveFailureCriterion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CrackFrontNumber"></a>

### *property* FiberCompressiveFailureCriterion.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DamageResultType"></a>

### *property* FiberCompressiveFailureCriterion.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DataModelObjectCategory"></a>

### *property* FiberCompressiveFailureCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DisplayOption"></a>

### *property* FiberCompressiveFailureCriterion.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DisplayTime"></a>

### *property* FiberCompressiveFailureCriterion.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DpfEvaluation"></a>

### *property* FiberCompressiveFailureCriterion.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Figures"></a>

### *property* FiberCompressiveFailureCriterion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GlobalIDs"></a>

### *property* FiberCompressiveFailureCriterion.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GraphControlsXAxis"></a>

### *property* FiberCompressiveFailureCriterion.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GroupingFolder"></a>

### *property* FiberCompressiveFailureCriterion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.IconName"></a>

### *property* FiberCompressiveFailureCriterion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Identifier"></a>

### *property* FiberCompressiveFailureCriterion.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Images"></a>

### *property* FiberCompressiveFailureCriterion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.InternalObject"></a>

### *property* FiberCompressiveFailureCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.IsSolved"></a>

### *property* FiberCompressiveFailureCriterion.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ItemType"></a>

### *property* FiberCompressiveFailureCriterion.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.IterationNumber"></a>

### *property* FiberCompressiveFailureCriterion.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStep"></a>

### *property* FiberCompressiveFailureCriterion.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.LoadStepNumber"></a>

### *property* FiberCompressiveFailureCriterion.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Location"></a>

### *property* FiberCompressiveFailureCriterion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Maximum"></a>

### *property* FiberCompressiveFailureCriterion.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MaximumOccursOn"></a>

### *property* FiberCompressiveFailureCriterion.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MaximumOfMaximumOverTime"></a>

### *property* FiberCompressiveFailureCriterion.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MaximumOfMinimumOverTime"></a>

### *property* FiberCompressiveFailureCriterion.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Minimum"></a>

### *property* FiberCompressiveFailureCriterion.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MinimumOccursOn"></a>

### *property* FiberCompressiveFailureCriterion.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MinimumOfMaximumOverTime"></a>

### *property* FiberCompressiveFailureCriterion.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.MinimumOfMinimumOverTime"></a>

### *property* FiberCompressiveFailureCriterion.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Mode"></a>

### *property* FiberCompressiveFailureCriterion.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Name"></a>

### *property* FiberCompressiveFailureCriterion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.NamedSelections"></a>

### *property* FiberCompressiveFailureCriterion.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ObjectId"></a>

### *property* FiberCompressiveFailureCriterion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ObjectState"></a>

### *property* FiberCompressiveFailureCriterion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ObjectTags"></a>

### *property* FiberCompressiveFailureCriterion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Parent"></a>

### *property* FiberCompressiveFailureCriterion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Path"></a>

### *property* FiberCompressiveFailureCriterion.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Plies"></a>

### *property* FiberCompressiveFailureCriterion.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.PlotData"></a>

### *property* FiberCompressiveFailureCriterion.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Ply"></a>

### *property* FiberCompressiveFailureCriterion.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Position"></a>

### *property* FiberCompressiveFailureCriterion.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Properties"></a>

### *property* FiberCompressiveFailureCriterion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.RPMSelection"></a>

### *property* FiberCompressiveFailureCriterion.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ResultType"></a>

### *property* FiberCompressiveFailureCriterion.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.RpmSetNumber"></a>

### *property* FiberCompressiveFailureCriterion.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ScopingMethod"></a>

### *property* FiberCompressiveFailureCriterion.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.SeparateDataByEntity"></a>

### *property* FiberCompressiveFailureCriterion.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.SetNumber"></a>

### *property* FiberCompressiveFailureCriterion.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.SolutionCombinationDriver"></a>

### *property* FiberCompressiveFailureCriterion.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.SolverComponentIDs"></a>

### *property* FiberCompressiveFailureCriterion.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.State"></a>

### *property* FiberCompressiveFailureCriterion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Substep"></a>

### *property* FiberCompressiveFailureCriterion.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Suppressed"></a>

### *property* FiberCompressiveFailureCriterion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Surface"></a>

### *property* FiberCompressiveFailureCriterion.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.SurfaceCoating"></a>

### *property* FiberCompressiveFailureCriterion.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.TabularData"></a>

### *property* FiberCompressiveFailureCriterion.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Time"></a>

### *property* FiberCompressiveFailureCriterion.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.TimeForMaximumOfMaximumValues"></a>

### *property* FiberCompressiveFailureCriterion.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.TimeForMaximumOfMinimumValues"></a>

### *property* FiberCompressiveFailureCriterion.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.TimeForMinimumOfMaximumValues"></a>

### *property* FiberCompressiveFailureCriterion.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.TimeForMinimumOfMinimumValues"></a>

### *property* FiberCompressiveFailureCriterion.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Total"></a>

### *property* FiberCompressiveFailureCriterion.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.VisibleProperties"></a>

### *property* FiberCompressiveFailureCriterion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayFilterBy"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayFrequencySelection"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayInterpolateData"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayLowerBand"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayMaxRPM"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayMinRPM"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayModeSelection"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayOrderSelection"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayRpmSelection"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayScopeToOrderLines"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayTimeSelection"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayUpperBand"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayXAxisMaximum"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayXAxisMinimum"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayYAxisMaximum"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallDisplayYAxisMinimum"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.WaterfallShowTextOnMosaic"></a>

### *property* FiberCompressiveFailureCriterion.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FiberCompressiveFailureCriterion.Activate"></a>

### FiberCompressiveFailureCriterion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddAlert"></a>

### FiberCompressiveFailureCriterion.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddComment"></a>

### FiberCompressiveFailureCriterion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddConvergence"></a>

### FiberCompressiveFailureCriterion.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddFigure"></a>

### FiberCompressiveFailureCriterion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.AddImage"></a>

### FiberCompressiveFailureCriterion.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.BodyWhereMaximumOccurs"></a>

### FiberCompressiveFailureCriterion.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ClearGeneratedData"></a>

### FiberCompressiveFailureCriterion.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Copy"></a>

### FiberCompressiveFailureCriterion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CopyTo"></a>

### FiberCompressiveFailureCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CreateObjRef"></a>

### FiberCompressiveFailureCriterion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CreateParameter"></a>

### FiberCompressiveFailureCriterion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.CreateResultsAtAllSets"></a>

### FiberCompressiveFailureCriterion.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Cut"></a>

### FiberCompressiveFailureCriterion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Delete"></a>

### FiberCompressiveFailureCriterion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Duplicate"></a>

### FiberCompressiveFailureCriterion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.DuplicateWithoutResults"></a>

### FiberCompressiveFailureCriterion.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Equals"></a>

### FiberCompressiveFailureCriterion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.EvaluateAllResults"></a>

### FiberCompressiveFailureCriterion.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ExportAnimation"></a>

### FiberCompressiveFailureCriterion.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ExportToSTLFile"></a>

### FiberCompressiveFailureCriterion.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.ExportToTextFile"></a>

### FiberCompressiveFailureCriterion.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### FiberCompressiveFailureCriterion.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.FetchRemoteResult"></a>

### FiberCompressiveFailureCriterion.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.FetchRemoteResults"></a>

### FiberCompressiveFailureCriterion.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetAPIName"></a>

### FiberCompressiveFailureCriterion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetAllProperties"></a>

### FiberCompressiveFailureCriterion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetChildren"></a>

### FiberCompressiveFailureCriterion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FiberCompressiveFailureCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetDetailsView"></a>

### FiberCompressiveFailureCriterion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetEnumName"></a>

### FiberCompressiveFailureCriterion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetHashCode"></a>

### FiberCompressiveFailureCriterion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetIconFile"></a>

### FiberCompressiveFailureCriterion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetLifetimeService"></a>

### FiberCompressiveFailureCriterion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetNodalValues"></a>

### FiberCompressiveFailureCriterion.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetObjectData"></a>

### FiberCompressiveFailureCriterion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetParameter"></a>

### FiberCompressiveFailureCriterion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetPath"></a>

### FiberCompressiveFailureCriterion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetPropertyName"></a>

### FiberCompressiveFailureCriterion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetPropertyValue"></a>

### FiberCompressiveFailureCriterion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetQuantityName"></a>

### FiberCompressiveFailureCriterion.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetVisibleProperties"></a>

### FiberCompressiveFailureCriterion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GetVisiblePropertyNames"></a>

### FiberCompressiveFailureCriterion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GroupAllSimilarChildren"></a>

### FiberCompressiveFailureCriterion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.GroupSimilarObjects"></a>

### FiberCompressiveFailureCriterion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.InitializeLifetimeService"></a>

### FiberCompressiveFailureCriterion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.IsPropertyEditable"></a>

### FiberCompressiveFailureCriterion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FiberCompressiveFailureCriterion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.IsPropertyVisible"></a>

### FiberCompressiveFailureCriterion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FiberCompressiveFailureCriterion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.Paste"></a>

### FiberCompressiveFailureCriterion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.PromoteToNamedSelection"></a>

### FiberCompressiveFailureCriterion.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.PropertyByAPIName"></a>

### FiberCompressiveFailureCriterion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.PropertyById"></a>

### FiberCompressiveFailureCriterion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.PropertyByName"></a>

### FiberCompressiveFailureCriterion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.RemoveFromGroup"></a>

### FiberCompressiveFailureCriterion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.RemoveParameter"></a>

### FiberCompressiveFailureCriterion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.RenameBasedOnDefinition"></a>

### FiberCompressiveFailureCriterion.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.RetrieveRemoteDPFResults"></a>

### FiberCompressiveFailureCriterion.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="FiberCompressiveFailureCriterion.RetrieveResult"></a>

### FiberCompressiveFailureCriterion.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

