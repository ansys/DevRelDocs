# `MatrixCompressiveFailureCriterion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixCompressiveFailureCriterion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixCompressiveFailureCriterion(internalObject: Any)

<a id="MatrixCompressiveFailureCriterion"></a>

### *class* MatrixCompressiveFailureCriterion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MatrixCompressiveFailureCriterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MatrixCompressiveFailureCriterion.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#MatrixCompressiveFailureCriterion.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#MatrixCompressiveFailureCriterion.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#MatrixCompressiveFailureCriterion.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#MatrixCompressiveFailureCriterion.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MatrixCompressiveFailureCriterion.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#MatrixCompressiveFailureCriterion.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#MatrixCompressiveFailureCriterion.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#MatrixCompressiveFailureCriterion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MatrixCompressiveFailureCriterion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MatrixCompressiveFailureCriterion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MatrixCompressiveFailureCriterion.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#MatrixCompressiveFailureCriterion.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#MatrixCompressiveFailureCriterion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MatrixCompressiveFailureCriterion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MatrixCompressiveFailureCriterion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#MatrixCompressiveFailureCriterion.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#MatrixCompressiveFailureCriterion.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#MatrixCompressiveFailureCriterion.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#MatrixCompressiveFailureCriterion.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#MatrixCompressiveFailureCriterion.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#MatrixCompressiveFailureCriterion.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#MatrixCompressiveFailureCriterion.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#MatrixCompressiveFailureCriterion.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#MatrixCompressiveFailureCriterion.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#MatrixCompressiveFailureCriterion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MatrixCompressiveFailureCriterion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MatrixCompressiveFailureCriterion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MatrixCompressiveFailureCriterion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MatrixCompressiveFailureCriterion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MatrixCompressiveFailureCriterion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MatrixCompressiveFailureCriterion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#MatrixCompressiveFailureCriterion.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#MatrixCompressiveFailureCriterion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MatrixCompressiveFailureCriterion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MatrixCompressiveFailureCriterion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MatrixCompressiveFailureCriterion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MatrixCompressiveFailureCriterion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#MatrixCompressiveFailureCriterion.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#MatrixCompressiveFailureCriterion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MatrixCompressiveFailureCriterion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MatrixCompressiveFailureCriterion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MatrixCompressiveFailureCriterion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MatrixCompressiveFailureCriterion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MatrixCompressiveFailureCriterion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MatrixCompressiveFailureCriterion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MatrixCompressiveFailureCriterion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#MatrixCompressiveFailureCriterion.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#MatrixCompressiveFailureCriterion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MatrixCompressiveFailureCriterion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MatrixCompressiveFailureCriterion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MatrixCompressiveFailureCriterion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MatrixCompressiveFailureCriterion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MatrixCompressiveFailureCriterion.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#MatrixCompressiveFailureCriterion.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#MatrixCompressiveFailureCriterion.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#MatrixCompressiveFailureCriterion.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#MatrixCompressiveFailureCriterion.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#MatrixCompressiveFailureCriterion.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#MatrixCompressiveFailureCriterion.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#MatrixCompressiveFailureCriterion.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#MatrixCompressiveFailureCriterion.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#MatrixCompressiveFailureCriterion.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#MatrixCompressiveFailureCriterion.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                              | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#MatrixCompressiveFailureCriterion.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DamageResultType`](#MatrixCompressiveFailureCriterion.DamageResultType)                                     | Gets the DamageResultType.                                                                               |
| [`DataModelObjectCategory`](#MatrixCompressiveFailureCriterion.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#MatrixCompressiveFailureCriterion.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#MatrixCompressiveFailureCriterion.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#MatrixCompressiveFailureCriterion.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#MatrixCompressiveFailureCriterion.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#MatrixCompressiveFailureCriterion.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#MatrixCompressiveFailureCriterion.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#MatrixCompressiveFailureCriterion.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#MatrixCompressiveFailureCriterion.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#MatrixCompressiveFailureCriterion.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#MatrixCompressiveFailureCriterion.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#MatrixCompressiveFailureCriterion.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#MatrixCompressiveFailureCriterion.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#MatrixCompressiveFailureCriterion.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#MatrixCompressiveFailureCriterion.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#MatrixCompressiveFailureCriterion.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#MatrixCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#MatrixCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#MatrixCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#MatrixCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#MatrixCompressiveFailureCriterion.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#MatrixCompressiveFailureCriterion.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#MatrixCompressiveFailureCriterion.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#MatrixCompressiveFailureCriterion.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#MatrixCompressiveFailureCriterion.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#MatrixCompressiveFailureCriterion.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#MatrixCompressiveFailureCriterion.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#MatrixCompressiveFailureCriterion.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#MatrixCompressiveFailureCriterion.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#MatrixCompressiveFailureCriterion.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Mode`](#MatrixCompressiveFailureCriterion.Mode)                                                             | Gets or sets the Mode.                                                                                   |
| [`Name`](#MatrixCompressiveFailureCriterion.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                                 | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#MatrixCompressiveFailureCriterion.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#MatrixCompressiveFailureCriterion.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#MatrixCompressiveFailureCriterion.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#MatrixCompressiveFailureCriterion.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                                  | Path property.                                                                                           |
| [`Plies`](#MatrixCompressiveFailureCriterion.Plies)                                                           | Plies property.                                                                                          |
| [`PlotData`](#MatrixCompressiveFailureCriterion.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Ply`](#MatrixCompressiveFailureCriterion.Ply)                                                               | Gets or sets the Ply selection.                                                                          |
| [`Position`](#Position)                                                            | Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.                  |
| [`Properties`](#MatrixCompressiveFailureCriterion.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#MatrixCompressiveFailureCriterion.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#MatrixCompressiveFailureCriterion.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#MatrixCompressiveFailureCriterion.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#MatrixCompressiveFailureCriterion.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#MatrixCompressiveFailureCriterion.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#MatrixCompressiveFailureCriterion.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#MatrixCompressiveFailureCriterion.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#MatrixCompressiveFailureCriterion.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#MatrixCompressiveFailureCriterion.State)                                                           | State property.                                                                                          |
| [`Substep`](#MatrixCompressiveFailureCriterion.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#MatrixCompressiveFailureCriterion.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                         | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                    | SurfaceCoating property.                                                                                 |
| [`TabularData`](#MatrixCompressiveFailureCriterion.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#MatrixCompressiveFailureCriterion.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#MatrixCompressiveFailureCriterion.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#MatrixCompressiveFailureCriterion.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#MatrixCompressiveFailureCriterion.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#MatrixCompressiveFailureCriterion.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#MatrixCompressiveFailureCriterion.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#MatrixCompressiveFailureCriterion.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#MatrixCompressiveFailureCriterion.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#MatrixCompressiveFailureCriterion.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#MatrixCompressiveFailureCriterion.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#MatrixCompressiveFailureCriterion.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#MatrixCompressiveFailureCriterion.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#MatrixCompressiveFailureCriterion.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#MatrixCompressiveFailureCriterion.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#MatrixCompressiveFailureCriterion.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#MatrixCompressiveFailureCriterion.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#MatrixCompressiveFailureCriterion.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#MatrixCompressiveFailureCriterion.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#MatrixCompressiveFailureCriterion.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#MatrixCompressiveFailureCriterion.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#MatrixCompressiveFailureCriterion.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#MatrixCompressiveFailureCriterion.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#MatrixCompressiveFailureCriterion.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#MatrixCompressiveFailureCriterion.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="MatrixCompressiveFailureCriterion.AttachedRefs"></a>

### *property* MatrixCompressiveFailureCriterion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Average"></a>

### *property* MatrixCompressiveFailureCriterion.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.By"></a>

### *property* MatrixCompressiveFailureCriterion.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CalculateTimeHistory"></a>

### *property* MatrixCompressiveFailureCriterion.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Children"></a>

### *property* MatrixCompressiveFailureCriterion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ClsId"></a>

### *property* MatrixCompressiveFailureCriterion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CombinationNumber"></a>

### *property* MatrixCompressiveFailureCriterion.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Comments"></a>

### *property* MatrixCompressiveFailureCriterion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CoordinateSystem"></a>

### *property* MatrixCompressiveFailureCriterion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CrackFrontNumber"></a>

### *property* MatrixCompressiveFailureCriterion.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.DamageResultType"></a>

### *property* MatrixCompressiveFailureCriterion.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.DataModelObjectCategory"></a>

### *property* MatrixCompressiveFailureCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.DisplayOption"></a>

### *property* MatrixCompressiveFailureCriterion.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.DisplayTime"></a>

### *property* MatrixCompressiveFailureCriterion.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.DpfEvaluation"></a>

### *property* MatrixCompressiveFailureCriterion.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Figures"></a>

### *property* MatrixCompressiveFailureCriterion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GlobalIDs"></a>

### *property* MatrixCompressiveFailureCriterion.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GraphControlsXAxis"></a>

### *property* MatrixCompressiveFailureCriterion.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GroupingFolder"></a>

### *property* MatrixCompressiveFailureCriterion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.IconName"></a>

### *property* MatrixCompressiveFailureCriterion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Identifier"></a>

### *property* MatrixCompressiveFailureCriterion.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Images"></a>

### *property* MatrixCompressiveFailureCriterion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.InternalObject"></a>

### *property* MatrixCompressiveFailureCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.IsSolved"></a>

### *property* MatrixCompressiveFailureCriterion.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ItemType"></a>

### *property* MatrixCompressiveFailureCriterion.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.IterationNumber"></a>

### *property* MatrixCompressiveFailureCriterion.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.LoadStep"></a>

### *property* MatrixCompressiveFailureCriterion.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues"></a>

### *property* MatrixCompressiveFailureCriterion.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues"></a>

### *property* MatrixCompressiveFailureCriterion.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues"></a>

### *property* MatrixCompressiveFailureCriterion.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues"></a>

### *property* MatrixCompressiveFailureCriterion.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.LoadStepNumber"></a>

### *property* MatrixCompressiveFailureCriterion.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Location"></a>

### *property* MatrixCompressiveFailureCriterion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Maximum"></a>

### *property* MatrixCompressiveFailureCriterion.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.MaximumOccursOn"></a>

### *property* MatrixCompressiveFailureCriterion.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.MaximumOfMaximumOverTime"></a>

### *property* MatrixCompressiveFailureCriterion.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.MaximumOfMinimumOverTime"></a>

### *property* MatrixCompressiveFailureCriterion.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Minimum"></a>

### *property* MatrixCompressiveFailureCriterion.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.MinimumOccursOn"></a>

### *property* MatrixCompressiveFailureCriterion.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.MinimumOfMaximumOverTime"></a>

### *property* MatrixCompressiveFailureCriterion.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.MinimumOfMinimumOverTime"></a>

### *property* MatrixCompressiveFailureCriterion.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Mode"></a>

### *property* MatrixCompressiveFailureCriterion.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Name"></a>

### *property* MatrixCompressiveFailureCriterion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.NamedSelections"></a>

### *property* MatrixCompressiveFailureCriterion.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ObjectId"></a>

### *property* MatrixCompressiveFailureCriterion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ObjectState"></a>

### *property* MatrixCompressiveFailureCriterion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ObjectTags"></a>

### *property* MatrixCompressiveFailureCriterion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Parent"></a>

### *property* MatrixCompressiveFailureCriterion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Path"></a>

### *property* MatrixCompressiveFailureCriterion.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Plies"></a>

### *property* MatrixCompressiveFailureCriterion.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.PlotData"></a>

### *property* MatrixCompressiveFailureCriterion.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Ply"></a>

### *property* MatrixCompressiveFailureCriterion.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Position"></a>

### *property* MatrixCompressiveFailureCriterion.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Properties"></a>

### *property* MatrixCompressiveFailureCriterion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.RPMSelection"></a>

### *property* MatrixCompressiveFailureCriterion.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ResultType"></a>

### *property* MatrixCompressiveFailureCriterion.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.RpmSetNumber"></a>

### *property* MatrixCompressiveFailureCriterion.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ScopingMethod"></a>

### *property* MatrixCompressiveFailureCriterion.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.SeparateDataByEntity"></a>

### *property* MatrixCompressiveFailureCriterion.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.SetNumber"></a>

### *property* MatrixCompressiveFailureCriterion.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.SolutionCombinationDriver"></a>

### *property* MatrixCompressiveFailureCriterion.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.SolverComponentIDs"></a>

### *property* MatrixCompressiveFailureCriterion.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.State"></a>

### *property* MatrixCompressiveFailureCriterion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Substep"></a>

### *property* MatrixCompressiveFailureCriterion.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Suppressed"></a>

### *property* MatrixCompressiveFailureCriterion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Surface"></a>

### *property* MatrixCompressiveFailureCriterion.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.SurfaceCoating"></a>

### *property* MatrixCompressiveFailureCriterion.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.TabularData"></a>

### *property* MatrixCompressiveFailureCriterion.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Time"></a>

### *property* MatrixCompressiveFailureCriterion.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.TimeForMaximumOfMaximumValues"></a>

### *property* MatrixCompressiveFailureCriterion.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.TimeForMaximumOfMinimumValues"></a>

### *property* MatrixCompressiveFailureCriterion.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.TimeForMinimumOfMaximumValues"></a>

### *property* MatrixCompressiveFailureCriterion.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.TimeForMinimumOfMinimumValues"></a>

### *property* MatrixCompressiveFailureCriterion.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Total"></a>

### *property* MatrixCompressiveFailureCriterion.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.VisibleProperties"></a>

### *property* MatrixCompressiveFailureCriterion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayFilterBy"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayFrequencySelection"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayInterpolateData"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayLowerBand"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayMaxRPM"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayMinRPM"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayModeSelection"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayOrderSelection"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayRpmSelection"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayScopeToOrderLines"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayTimeSelection"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayUpperBand"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayXAxisMaximum"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayXAxisMinimum"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayYAxisMaximum"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallDisplayYAxisMinimum"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.WaterfallShowTextOnMosaic"></a>

### *property* MatrixCompressiveFailureCriterion.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MatrixCompressiveFailureCriterion.Activate"></a>

### MatrixCompressiveFailureCriterion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.AddAlert"></a>

### MatrixCompressiveFailureCriterion.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.AddComment"></a>

### MatrixCompressiveFailureCriterion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.AddConvergence"></a>

### MatrixCompressiveFailureCriterion.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.AddFigure"></a>

### MatrixCompressiveFailureCriterion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.AddImage"></a>

### MatrixCompressiveFailureCriterion.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.BodyWhereMaximumOccurs"></a>

### MatrixCompressiveFailureCriterion.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ClearGeneratedData"></a>

### MatrixCompressiveFailureCriterion.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Copy"></a>

### MatrixCompressiveFailureCriterion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CopyTo"></a>

### MatrixCompressiveFailureCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CreateObjRef"></a>

### MatrixCompressiveFailureCriterion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CreateParameter"></a>

### MatrixCompressiveFailureCriterion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.CreateResultsAtAllSets"></a>

### MatrixCompressiveFailureCriterion.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Cut"></a>

### MatrixCompressiveFailureCriterion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Delete"></a>

### MatrixCompressiveFailureCriterion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Duplicate"></a>

### MatrixCompressiveFailureCriterion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.DuplicateWithoutResults"></a>

### MatrixCompressiveFailureCriterion.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Equals"></a>

### MatrixCompressiveFailureCriterion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.EvaluateAllResults"></a>

### MatrixCompressiveFailureCriterion.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ExportAnimation"></a>

### MatrixCompressiveFailureCriterion.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ExportToSTLFile"></a>

### MatrixCompressiveFailureCriterion.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.ExportToTextFile"></a>

### MatrixCompressiveFailureCriterion.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MatrixCompressiveFailureCriterion.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.FetchRemoteResult"></a>

### MatrixCompressiveFailureCriterion.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.FetchRemoteResults"></a>

### MatrixCompressiveFailureCriterion.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetAPIName"></a>

### MatrixCompressiveFailureCriterion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetAllProperties"></a>

### MatrixCompressiveFailureCriterion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetChildren"></a>

### MatrixCompressiveFailureCriterion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MatrixCompressiveFailureCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetDetailsView"></a>

### MatrixCompressiveFailureCriterion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetEnumName"></a>

### MatrixCompressiveFailureCriterion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetHashCode"></a>

### MatrixCompressiveFailureCriterion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetIconFile"></a>

### MatrixCompressiveFailureCriterion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetLifetimeService"></a>

### MatrixCompressiveFailureCriterion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetNodalValues"></a>

### MatrixCompressiveFailureCriterion.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetObjectData"></a>

### MatrixCompressiveFailureCriterion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetParameter"></a>

### MatrixCompressiveFailureCriterion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetPath"></a>

### MatrixCompressiveFailureCriterion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetPropertyName"></a>

### MatrixCompressiveFailureCriterion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetPropertyValue"></a>

### MatrixCompressiveFailureCriterion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetQuantityName"></a>

### MatrixCompressiveFailureCriterion.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetVisibleProperties"></a>

### MatrixCompressiveFailureCriterion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GetVisiblePropertyNames"></a>

### MatrixCompressiveFailureCriterion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GroupAllSimilarChildren"></a>

### MatrixCompressiveFailureCriterion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.GroupSimilarObjects"></a>

### MatrixCompressiveFailureCriterion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.InitializeLifetimeService"></a>

### MatrixCompressiveFailureCriterion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.IsPropertyEditable"></a>

### MatrixCompressiveFailureCriterion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MatrixCompressiveFailureCriterion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.IsPropertyVisible"></a>

### MatrixCompressiveFailureCriterion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MatrixCompressiveFailureCriterion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.Paste"></a>

### MatrixCompressiveFailureCriterion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.PromoteToNamedSelection"></a>

### MatrixCompressiveFailureCriterion.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.PropertyByAPIName"></a>

### MatrixCompressiveFailureCriterion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.PropertyById"></a>

### MatrixCompressiveFailureCriterion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.PropertyByName"></a>

### MatrixCompressiveFailureCriterion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.RemoveFromGroup"></a>

### MatrixCompressiveFailureCriterion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.RemoveParameter"></a>

### MatrixCompressiveFailureCriterion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.RenameBasedOnDefinition"></a>

### MatrixCompressiveFailureCriterion.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.RetrieveRemoteDPFResults"></a>

### MatrixCompressiveFailureCriterion.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixCompressiveFailureCriterion.RetrieveResult"></a>

### MatrixCompressiveFailureCriterion.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

