# `FiberTensileDamageVariable`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberTensileDamageVariable"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberTensileDamageVariable(internalObject: Any)

<a id="FiberTensileDamageVariable"></a>

### *class* FiberTensileDamageVariable(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FiberTensileDamageVariable.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FiberTensileDamageVariable.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#FiberTensileDamageVariable.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#FiberTensileDamageVariable.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#FiberTensileDamageVariable.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#FiberTensileDamageVariable.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#FiberTensileDamageVariable.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#FiberTensileDamageVariable.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#FiberTensileDamageVariable.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#FiberTensileDamageVariable.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FiberTensileDamageVariable.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FiberTensileDamageVariable.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FiberTensileDamageVariable.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#FiberTensileDamageVariable.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#FiberTensileDamageVariable.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FiberTensileDamageVariable.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FiberTensileDamageVariable.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#FiberTensileDamageVariable.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#FiberTensileDamageVariable.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#FiberTensileDamageVariable.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#FiberTensileDamageVariable.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#FiberTensileDamageVariable.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#FiberTensileDamageVariable.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#FiberTensileDamageVariable.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#FiberTensileDamageVariable.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#FiberTensileDamageVariable.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#FiberTensileDamageVariable.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FiberTensileDamageVariable.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FiberTensileDamageVariable.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FiberTensileDamageVariable.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FiberTensileDamageVariable.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FiberTensileDamageVariable.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FiberTensileDamageVariable.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#FiberTensileDamageVariable.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#FiberTensileDamageVariable.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FiberTensileDamageVariable.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FiberTensileDamageVariable.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FiberTensileDamageVariable.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FiberTensileDamageVariable.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#FiberTensileDamageVariable.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#FiberTensileDamageVariable.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FiberTensileDamageVariable.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FiberTensileDamageVariable.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FiberTensileDamageVariable.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FiberTensileDamageVariable.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FiberTensileDamageVariable.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FiberTensileDamageVariable.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FiberTensileDamageVariable.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#FiberTensileDamageVariable.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#FiberTensileDamageVariable.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FiberTensileDamageVariable.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FiberTensileDamageVariable.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FiberTensileDamageVariable.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FiberTensileDamageVariable.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#FiberTensileDamageVariable.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#FiberTensileDamageVariable.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#FiberTensileDamageVariable.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#FiberTensileDamageVariable.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#FiberTensileDamageVariable.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#FiberTensileDamageVariable.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#FiberTensileDamageVariable.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#FiberTensileDamageVariable.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#FiberTensileDamageVariable.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#FiberTensileDamageVariable.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#FiberTensileDamageVariable.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                       | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#FiberTensileDamageVariable.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DamageResultType`](#FiberTensileDamageVariable.DamageResultType)                                     | Gets the DamageResultType.                                                                               |
| [`DataModelObjectCategory`](#FiberTensileDamageVariable.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#FiberTensileDamageVariable.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#FiberTensileDamageVariable.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#FiberTensileDamageVariable.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#FiberTensileDamageVariable.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#FiberTensileDamageVariable.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#FiberTensileDamageVariable.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#FiberTensileDamageVariable.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#FiberTensileDamageVariable.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#FiberTensileDamageVariable.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#FiberTensileDamageVariable.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#FiberTensileDamageVariable.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#FiberTensileDamageVariable.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#FiberTensileDamageVariable.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#FiberTensileDamageVariable.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#FiberTensileDamageVariable.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#FiberTensileDamageVariable.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#FiberTensileDamageVariable.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#FiberTensileDamageVariable.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#FiberTensileDamageVariable.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#FiberTensileDamageVariable.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#FiberTensileDamageVariable.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#FiberTensileDamageVariable.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#FiberTensileDamageVariable.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#FiberTensileDamageVariable.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#FiberTensileDamageVariable.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#FiberTensileDamageVariable.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#FiberTensileDamageVariable.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#FiberTensileDamageVariable.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#FiberTensileDamageVariable.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Mode`](#FiberTensileDamageVariable.Mode)                                                             | Gets or sets the Mode.                                                                                   |
| [`Name`](#FiberTensileDamageVariable.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                          | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#FiberTensileDamageVariable.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#FiberTensileDamageVariable.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#FiberTensileDamageVariable.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#FiberTensileDamageVariable.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                           | Path property.                                                                                           |
| [`Plies`](#FiberTensileDamageVariable.Plies)                                                           | Plies property.                                                                                          |
| [`PlotData`](#FiberTensileDamageVariable.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Ply`](#FiberTensileDamageVariable.Ply)                                                               | Gets or sets the Ply selection.                                                                          |
| [`Position`](#Position)                                                     | Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.                  |
| [`Properties`](#FiberTensileDamageVariable.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#FiberTensileDamageVariable.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#FiberTensileDamageVariable.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#FiberTensileDamageVariable.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#FiberTensileDamageVariable.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#FiberTensileDamageVariable.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#FiberTensileDamageVariable.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#FiberTensileDamageVariable.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#FiberTensileDamageVariable.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#FiberTensileDamageVariable.State)                                                           | State property.                                                                                          |
| [`Substep`](#FiberTensileDamageVariable.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#FiberTensileDamageVariable.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                  | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                             | SurfaceCoating property.                                                                                 |
| [`TabularData`](#FiberTensileDamageVariable.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#FiberTensileDamageVariable.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#FiberTensileDamageVariable.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#FiberTensileDamageVariable.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#FiberTensileDamageVariable.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#FiberTensileDamageVariable.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#FiberTensileDamageVariable.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#FiberTensileDamageVariable.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#FiberTensileDamageVariable.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#FiberTensileDamageVariable.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#FiberTensileDamageVariable.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#FiberTensileDamageVariable.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#FiberTensileDamageVariable.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#FiberTensileDamageVariable.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#FiberTensileDamageVariable.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#FiberTensileDamageVariable.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#FiberTensileDamageVariable.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#FiberTensileDamageVariable.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#FiberTensileDamageVariable.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#FiberTensileDamageVariable.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#FiberTensileDamageVariable.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#FiberTensileDamageVariable.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#FiberTensileDamageVariable.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#FiberTensileDamageVariable.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#FiberTensileDamageVariable.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="FiberTensileDamageVariable.AttachedRefs"></a>

### *property* FiberTensileDamageVariable.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Average"></a>

### *property* FiberTensileDamageVariable.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.By"></a>

### *property* FiberTensileDamageVariable.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CalculateTimeHistory"></a>

### *property* FiberTensileDamageVariable.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Children"></a>

### *property* FiberTensileDamageVariable.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ClsId"></a>

### *property* FiberTensileDamageVariable.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CombinationNumber"></a>

### *property* FiberTensileDamageVariable.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Comments"></a>

### *property* FiberTensileDamageVariable.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CoordinateSystem"></a>

### *property* FiberTensileDamageVariable.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CrackFrontNumber"></a>

### *property* FiberTensileDamageVariable.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.DamageResultType"></a>

### *property* FiberTensileDamageVariable.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.DataModelObjectCategory"></a>

### *property* FiberTensileDamageVariable.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.DisplayOption"></a>

### *property* FiberTensileDamageVariable.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.DisplayTime"></a>

### *property* FiberTensileDamageVariable.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.DpfEvaluation"></a>

### *property* FiberTensileDamageVariable.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Figures"></a>

### *property* FiberTensileDamageVariable.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GlobalIDs"></a>

### *property* FiberTensileDamageVariable.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GraphControlsXAxis"></a>

### *property* FiberTensileDamageVariable.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GroupingFolder"></a>

### *property* FiberTensileDamageVariable.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.IconName"></a>

### *property* FiberTensileDamageVariable.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Identifier"></a>

### *property* FiberTensileDamageVariable.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Images"></a>

### *property* FiberTensileDamageVariable.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.InternalObject"></a>

### *property* FiberTensileDamageVariable.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.IsSolved"></a>

### *property* FiberTensileDamageVariable.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ItemType"></a>

### *property* FiberTensileDamageVariable.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.IterationNumber"></a>

### *property* FiberTensileDamageVariable.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.LoadStep"></a>

### *property* FiberTensileDamageVariable.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.LoadStepForMaximumOfMaximumValues"></a>

### *property* FiberTensileDamageVariable.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.LoadStepForMaximumOfMinimumValues"></a>

### *property* FiberTensileDamageVariable.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.LoadStepForMinimumOfMaximumValues"></a>

### *property* FiberTensileDamageVariable.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.LoadStepForMinimumOfMinimumValues"></a>

### *property* FiberTensileDamageVariable.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.LoadStepNumber"></a>

### *property* FiberTensileDamageVariable.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Location"></a>

### *property* FiberTensileDamageVariable.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Maximum"></a>

### *property* FiberTensileDamageVariable.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.MaximumOccursOn"></a>

### *property* FiberTensileDamageVariable.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.MaximumOfMaximumOverTime"></a>

### *property* FiberTensileDamageVariable.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.MaximumOfMinimumOverTime"></a>

### *property* FiberTensileDamageVariable.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Minimum"></a>

### *property* FiberTensileDamageVariable.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.MinimumOccursOn"></a>

### *property* FiberTensileDamageVariable.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.MinimumOfMaximumOverTime"></a>

### *property* FiberTensileDamageVariable.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.MinimumOfMinimumOverTime"></a>

### *property* FiberTensileDamageVariable.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Mode"></a>

### *property* FiberTensileDamageVariable.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Name"></a>

### *property* FiberTensileDamageVariable.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.NamedSelections"></a>

### *property* FiberTensileDamageVariable.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ObjectId"></a>

### *property* FiberTensileDamageVariable.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ObjectState"></a>

### *property* FiberTensileDamageVariable.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ObjectTags"></a>

### *property* FiberTensileDamageVariable.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Parent"></a>

### *property* FiberTensileDamageVariable.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Path"></a>

### *property* FiberTensileDamageVariable.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Plies"></a>

### *property* FiberTensileDamageVariable.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.PlotData"></a>

### *property* FiberTensileDamageVariable.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Ply"></a>

### *property* FiberTensileDamageVariable.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Position"></a>

### *property* FiberTensileDamageVariable.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Properties"></a>

### *property* FiberTensileDamageVariable.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.RPMSelection"></a>

### *property* FiberTensileDamageVariable.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ResultType"></a>

### *property* FiberTensileDamageVariable.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.RpmSetNumber"></a>

### *property* FiberTensileDamageVariable.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ScopingMethod"></a>

### *property* FiberTensileDamageVariable.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.SeparateDataByEntity"></a>

### *property* FiberTensileDamageVariable.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.SetNumber"></a>

### *property* FiberTensileDamageVariable.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.SolutionCombinationDriver"></a>

### *property* FiberTensileDamageVariable.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.SolverComponentIDs"></a>

### *property* FiberTensileDamageVariable.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.State"></a>

### *property* FiberTensileDamageVariable.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Substep"></a>

### *property* FiberTensileDamageVariable.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Suppressed"></a>

### *property* FiberTensileDamageVariable.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Surface"></a>

### *property* FiberTensileDamageVariable.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.SurfaceCoating"></a>

### *property* FiberTensileDamageVariable.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.TabularData"></a>

### *property* FiberTensileDamageVariable.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Time"></a>

### *property* FiberTensileDamageVariable.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.TimeForMaximumOfMaximumValues"></a>

### *property* FiberTensileDamageVariable.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.TimeForMaximumOfMinimumValues"></a>

### *property* FiberTensileDamageVariable.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.TimeForMinimumOfMaximumValues"></a>

### *property* FiberTensileDamageVariable.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.TimeForMinimumOfMinimumValues"></a>

### *property* FiberTensileDamageVariable.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Total"></a>

### *property* FiberTensileDamageVariable.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.VisibleProperties"></a>

### *property* FiberTensileDamageVariable.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayFilterBy"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayFrequencySelection"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayInterpolateData"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayLowerBand"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayMaxRPM"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayMinRPM"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayModeSelection"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayOrderSelection"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayRpmSelection"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayScopeToOrderLines"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayTimeSelection"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayUpperBand"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayXAxisMaximum"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayXAxisMinimum"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayYAxisMaximum"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallDisplayYAxisMinimum"></a>

### *property* FiberTensileDamageVariable.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.WaterfallShowTextOnMosaic"></a>

### *property* FiberTensileDamageVariable.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FiberTensileDamageVariable.Activate"></a>

### FiberTensileDamageVariable.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.AddAlert"></a>

### FiberTensileDamageVariable.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.AddComment"></a>

### FiberTensileDamageVariable.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.AddConvergence"></a>

### FiberTensileDamageVariable.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.AddFigure"></a>

### FiberTensileDamageVariable.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.AddImage"></a>

### FiberTensileDamageVariable.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.BodyWhereMaximumOccurs"></a>

### FiberTensileDamageVariable.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ClearGeneratedData"></a>

### FiberTensileDamageVariable.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Copy"></a>

### FiberTensileDamageVariable.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CopyTo"></a>

### FiberTensileDamageVariable.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CreateObjRef"></a>

### FiberTensileDamageVariable.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CreateParameter"></a>

### FiberTensileDamageVariable.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.CreateResultsAtAllSets"></a>

### FiberTensileDamageVariable.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Cut"></a>

### FiberTensileDamageVariable.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Delete"></a>

### FiberTensileDamageVariable.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Duplicate"></a>

### FiberTensileDamageVariable.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.DuplicateWithoutResults"></a>

### FiberTensileDamageVariable.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Equals"></a>

### FiberTensileDamageVariable.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.EvaluateAllResults"></a>

### FiberTensileDamageVariable.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ExportAnimation"></a>

### FiberTensileDamageVariable.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ExportToSTLFile"></a>

### FiberTensileDamageVariable.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.ExportToTextFile"></a>

### FiberTensileDamageVariable.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### FiberTensileDamageVariable.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.FetchRemoteResult"></a>

### FiberTensileDamageVariable.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.FetchRemoteResults"></a>

### FiberTensileDamageVariable.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetAPIName"></a>

### FiberTensileDamageVariable.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetAllProperties"></a>

### FiberTensileDamageVariable.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetChildren"></a>

### FiberTensileDamageVariable.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FiberTensileDamageVariable.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetDetailsView"></a>

### FiberTensileDamageVariable.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetEnumName"></a>

### FiberTensileDamageVariable.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetHashCode"></a>

### FiberTensileDamageVariable.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetIconFile"></a>

### FiberTensileDamageVariable.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetLifetimeService"></a>

### FiberTensileDamageVariable.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetNodalValues"></a>

### FiberTensileDamageVariable.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetObjectData"></a>

### FiberTensileDamageVariable.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetParameter"></a>

### FiberTensileDamageVariable.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetPath"></a>

### FiberTensileDamageVariable.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetPropertyName"></a>

### FiberTensileDamageVariable.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetPropertyValue"></a>

### FiberTensileDamageVariable.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetQuantityName"></a>

### FiberTensileDamageVariable.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetVisibleProperties"></a>

### FiberTensileDamageVariable.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GetVisiblePropertyNames"></a>

### FiberTensileDamageVariable.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GroupAllSimilarChildren"></a>

### FiberTensileDamageVariable.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.GroupSimilarObjects"></a>

### FiberTensileDamageVariable.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.InitializeLifetimeService"></a>

### FiberTensileDamageVariable.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.IsPropertyEditable"></a>

### FiberTensileDamageVariable.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FiberTensileDamageVariable.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.IsPropertyVisible"></a>

### FiberTensileDamageVariable.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FiberTensileDamageVariable.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.Paste"></a>

### FiberTensileDamageVariable.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.PromoteToNamedSelection"></a>

### FiberTensileDamageVariable.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.PropertyByAPIName"></a>

### FiberTensileDamageVariable.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.PropertyById"></a>

### FiberTensileDamageVariable.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.PropertyByName"></a>

### FiberTensileDamageVariable.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.RemoveFromGroup"></a>

### FiberTensileDamageVariable.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.RemoveParameter"></a>

### FiberTensileDamageVariable.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.RenameBasedOnDefinition"></a>

### FiberTensileDamageVariable.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.RetrieveRemoteDPFResults"></a>

### FiberTensileDamageVariable.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="FiberTensileDamageVariable.RetrieveResult"></a>

### FiberTensileDamageVariable.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

