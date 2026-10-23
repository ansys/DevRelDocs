# `MatrixTensileFailureCriterion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixTensileFailureCriterion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixTensileFailureCriterion(internalObject: Any)

<a id="MatrixTensileFailureCriterion"></a>

### *class* MatrixTensileFailureCriterion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MatrixTensileFailureCriterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MatrixTensileFailureCriterion.Activate)                                   | Activate the current object.                                                                |
| [`AddAlert`](#MatrixTensileFailureCriterion.AddAlert)                                   | Creates a new Alert                                                                         |
| [`AddComment`](#MatrixTensileFailureCriterion.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddConvergence`](#MatrixTensileFailureCriterion.AddConvergence)                       | Creates a new Convergence                                                                   |
| [`AddFigure`](#MatrixTensileFailureCriterion.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MatrixTensileFailureCriterion.AddImage)                                   | Creates a new child Image.                                                                  |
| [`BodyWhereMaximumOccurs`](#MatrixTensileFailureCriterion.BodyWhereMaximumOccurs)       | Gets the body that has the maximum result value.                                            |
| [`ClearGeneratedData`](#MatrixTensileFailureCriterion.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#MatrixTensileFailureCriterion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MatrixTensileFailureCriterion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MatrixTensileFailureCriterion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MatrixTensileFailureCriterion.CreateParameter)                     | CreateParameter method.                                                                     |
| [`CreateResultsAtAllSets`](#MatrixTensileFailureCriterion.CreateResultsAtAllSets)       | Creates results at all sets for results under a solution.                                   |
| [`Cut`](#MatrixTensileFailureCriterion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MatrixTensileFailureCriterion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MatrixTensileFailureCriterion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`DuplicateWithoutResults`](#MatrixTensileFailureCriterion.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                     |
| [`Equals`](#MatrixTensileFailureCriterion.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#MatrixTensileFailureCriterion.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`ExportAnimation`](#MatrixTensileFailureCriterion.ExportAnimation)                     | Run the ExportAnimation action.                                                             |
| [`ExportToSTLFile`](#MatrixTensileFailureCriterion.ExportToSTLFile)                     | ExportToSTLFile method.                                                                     |
| [`ExportToTextFile`](#MatrixTensileFailureCriterion.ExportToTextFile)                   | ExportToTextFile method.                                                                    |
| [`FetchRemoteResult`](#MatrixTensileFailureCriterion.FetchRemoteResult)                 | Run the FetchRemoteResult action.                                                           |
| [`FetchRemoteResults`](#MatrixTensileFailureCriterion.FetchRemoteResults)               | Run the FetchRemoteResult action.                                                           |
| [`GetAPIName`](#MatrixTensileFailureCriterion.GetAPIName)                               | GetAPIName method.                                                                          |
| [`GetAllProperties`](#MatrixTensileFailureCriterion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MatrixTensileFailureCriterion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MatrixTensileFailureCriterion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MatrixTensileFailureCriterion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MatrixTensileFailureCriterion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MatrixTensileFailureCriterion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MatrixTensileFailureCriterion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetNodalValues`](#MatrixTensileFailureCriterion.GetNodalValues)                       | GetNodalValues method.                                                                      |
| [`GetObjectData`](#MatrixTensileFailureCriterion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MatrixTensileFailureCriterion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MatrixTensileFailureCriterion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MatrixTensileFailureCriterion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MatrixTensileFailureCriterion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#MatrixTensileFailureCriterion.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#MatrixTensileFailureCriterion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MatrixTensileFailureCriterion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MatrixTensileFailureCriterion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MatrixTensileFailureCriterion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MatrixTensileFailureCriterion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MatrixTensileFailureCriterion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MatrixTensileFailureCriterion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MatrixTensileFailureCriterion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#MatrixTensileFailureCriterion.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#MatrixTensileFailureCriterion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MatrixTensileFailureCriterion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MatrixTensileFailureCriterion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MatrixTensileFailureCriterion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MatrixTensileFailureCriterion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MatrixTensileFailureCriterion.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |
| [`RetrieveRemoteDPFResults`](#MatrixTensileFailureCriterion.RetrieveRemoteDPFResults)   | RetrieveRemoteDPFResults method.                                                            |
| [`RetrieveResult`](#MatrixTensileFailureCriterion.RetrieveResult)                       | Evaluates the individual result without evaluating all the results in the same solution.    |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#MatrixTensileFailureCriterion.AttachedRefs)                                             | AttachedRefs property.                                                                                   |
| [`Average`](#MatrixTensileFailureCriterion.Average)                                                       | Gets the Average.                                                                                        |
| [`By`](#MatrixTensileFailureCriterion.By)                                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets. |
| [`CalculateTimeHistory`](#MatrixTensileFailureCriterion.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                                                   |
| [`Children`](#MatrixTensileFailureCriterion.Children)                                                     | Gets the list of children.                                                                               |
| [`ClsId`](#MatrixTensileFailureCriterion.ClsId)                                                           | ClsId property.                                                                                          |
| [`CombinationNumber`](#MatrixTensileFailureCriterion.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.                                   |
| [`Comments`](#MatrixTensileFailureCriterion.Comments)                                                     | Gets the list of associated comments.                                                                    |
| [`CoordinateSystem`](#CoordinateSystem)                                          | Gets or sets the Coordinate System.                                                                      |
| [`CrackFrontNumber`](#MatrixTensileFailureCriterion.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                                                       |
| [`DamageResultType`](#MatrixTensileFailureCriterion.DamageResultType)                                     | Gets the DamageResultType.                                                                               |
| [`DataModelObjectCategory`](#MatrixTensileFailureCriterion.DataModelObjectCategory)                       | Gets the current DataModelObject's category.                                                             |
| [`DisplayOption`](#MatrixTensileFailureCriterion.DisplayOption)                                           | Gets or sets the DisplayOption.                                                                          |
| [`DisplayTime`](#MatrixTensileFailureCriterion.DisplayTime)                                               | Gets or sets the DisplayTime.                                                                            |
| [`DpfEvaluation`](#MatrixTensileFailureCriterion.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                                                          |
| [`Figures`](#MatrixTensileFailureCriterion.Figures)                                                       | Gets the list of associated figures.                                                                     |
| [`GlobalIDs`](#MatrixTensileFailureCriterion.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                                                              |
| [`GraphControlsXAxis`](#MatrixTensileFailureCriterion.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                                                     |
| [`GroupingFolder`](#MatrixTensileFailureCriterion.GroupingFolder)                                         | GroupingFolder property.                                                                                 |
| [`IconName`](#MatrixTensileFailureCriterion.IconName)                                                     | IconName property.                                                                                       |
| [`Identifier`](#MatrixTensileFailureCriterion.Identifier)                                                 | Gets or sets the Identifier.                                                                             |
| [`Images`](#MatrixTensileFailureCriterion.Images)                                                         | Gets the list of associated images.                                                                      |
| [`InternalObject`](#MatrixTensileFailureCriterion.InternalObject)                                         | Gets the internal object. For advanced usage only.                                                       |
| [`IsSolved`](#MatrixTensileFailureCriterion.IsSolved)                                                     | Gets the IsSolved.                                                                                       |
| [`ItemType`](#MatrixTensileFailureCriterion.ItemType)                                                     | Gets or sets the ItemType.                                                                               |
| [`IterationNumber`](#MatrixTensileFailureCriterion.IterationNumber)                                       | Gets the IterationNumber.                                                                                |
| [`LoadStep`](#MatrixTensileFailureCriterion.LoadStep)                                                     | Gets the LoadStep.                                                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#MatrixTensileFailureCriterion.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                                                     |
| [`LoadStepForMaximumOfMinimumValues`](#MatrixTensileFailureCriterion.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                                                     |
| [`LoadStepForMinimumOfMaximumValues`](#MatrixTensileFailureCriterion.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                                                     |
| [`LoadStepForMinimumOfMinimumValues`](#MatrixTensileFailureCriterion.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                                                     |
| [`LoadStepNumber`](#MatrixTensileFailureCriterion.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                                                         |
| [`Location`](#MatrixTensileFailureCriterion.Location)                                                     | Gets or sets the Location.                                                                               |
| [`Maximum`](#MatrixTensileFailureCriterion.Maximum)                                                       | Gets the Maximum.                                                                                        |
| [`MaximumOccursOn`](#MatrixTensileFailureCriterion.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                                                |
| [`MaximumOfMaximumOverTime`](#MatrixTensileFailureCriterion.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                                                       |
| [`MaximumOfMinimumOverTime`](#MatrixTensileFailureCriterion.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                                                       |
| [`Minimum`](#MatrixTensileFailureCriterion.Minimum)                                                       | Gets the Minimum.                                                                                        |
| [`MinimumOccursOn`](#MatrixTensileFailureCriterion.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                                                |
| [`MinimumOfMaximumOverTime`](#MatrixTensileFailureCriterion.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                                                       |
| [`MinimumOfMinimumOverTime`](#MatrixTensileFailureCriterion.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                                                       |
| [`Mode`](#MatrixTensileFailureCriterion.Mode)                                                             | Gets or sets the Mode.                                                                                   |
| [`Name`](#MatrixTensileFailureCriterion.Name)                                                             | Name property.                                                                                           |
| [`NamedSelections`](#NamedSelections)                                             | Gets or sets the NamedSelections.                                                                        |
| [`ObjectId`](#MatrixTensileFailureCriterion.ObjectId)                                                     | ObjectId property.                                                                                       |
| [`ObjectState`](#MatrixTensileFailureCriterion.ObjectState)                                               | ObjectState property.                                                                                    |
| [`ObjectTags`](#MatrixTensileFailureCriterion.ObjectTags)                                                 | ObjectTags property.                                                                                     |
| [`Parent`](#MatrixTensileFailureCriterion.Parent)                                                         | Parent property.                                                                                         |
| [`Path`](#Path)                                                                              | Path property.                                                                                           |
| [`Plies`](#MatrixTensileFailureCriterion.Plies)                                                           | Plies property.                                                                                          |
| [`PlotData`](#MatrixTensileFailureCriterion.PlotData)                                                     | Gets the result table.                                                                                   |
| [`Ply`](#MatrixTensileFailureCriterion.Ply)                                                               | Gets or sets the Ply selection.                                                                          |
| [`Position`](#Position)                                                        | Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.                  |
| [`Properties`](#MatrixTensileFailureCriterion.Properties)                                                 | Gets the list of properties for this object.                                                             |
| [`RPMSelection`](#MatrixTensileFailureCriterion.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated.                                 |
| [`ResultType`](#MatrixTensileFailureCriterion.ResultType)                                                 | Gets or sets the ResultType.                                                                             |
| [`RpmSetNumber`](#MatrixTensileFailureCriterion.RpmSetNumber)                                             | Gets or sets the RpmSetNumber.                                                                           |
| [`ScopingMethod`](#MatrixTensileFailureCriterion.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                                                          |
| [`SeparateDataByEntity`](#MatrixTensileFailureCriterion.SeparateDataByEntity)                             | Gets or sets the SeparateDataByEntity.                                                                   |
| [`SetNumber`](#MatrixTensileFailureCriterion.SetNumber)                                                   | Gets or sets the Set Number.                                                                             |
| [`SolutionCombinationDriver`](#MatrixTensileFailureCriterion.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                                                              |
| [`SolverComponentIDs`](#MatrixTensileFailureCriterion.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                                                     |
| [`State`](#MatrixTensileFailureCriterion.State)                                                           | State property.                                                                                          |
| [`Substep`](#MatrixTensileFailureCriterion.Substep)                                                       | Gets the Substep.                                                                                        |
| [`Suppressed`](#MatrixTensileFailureCriterion.Suppressed)                                                 | Gets or sets the Suppressed.                                                                             |
| [`Surface`](#Surface)                                                                     | Surface property.                                                                                        |
| [`SurfaceCoating`](#SurfaceCoating)                                                | SurfaceCoating property.                                                                                 |
| [`TabularData`](#MatrixTensileFailureCriterion.TabularData)                                               | Gets the tabular data of the result.  Use a to get index to each column of the tabular data.             |
| [`Time`](#MatrixTensileFailureCriterion.Time)                                                             | Gets the Time.                                                                                           |
| [`TimeForMaximumOfMaximumValues`](#MatrixTensileFailureCriterion.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                                                          |
| [`TimeForMaximumOfMinimumValues`](#MatrixTensileFailureCriterion.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                                                          |
| [`TimeForMinimumOfMaximumValues`](#MatrixTensileFailureCriterion.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                                                          |
| [`TimeForMinimumOfMinimumValues`](#MatrixTensileFailureCriterion.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                                                          |
| [`Total`](#MatrixTensileFailureCriterion.Total)                                                           | Gets the Total.                                                                                          |
| [`VisibleProperties`](#MatrixTensileFailureCriterion.VisibleProperties)                                   | Gets the list of properties that are visible for this object.                                            |
| [`WaterfallDisplayFilterBy`](#MatrixTensileFailureCriterion.WaterfallDisplayFilterBy)                     | Gets or sets the Filer in Waterfall.                                                                     |
| [`WaterfallDisplayFrequencySelection`](#MatrixTensileFailureCriterion.WaterfallDisplayFrequencySelection) | Gets or sets the Frequency Selection.                                                                    |
| [`WaterfallDisplayInterpolateData`](#MatrixTensileFailureCriterion.WaterfallDisplayInterpolateData)       | Gets or sets the Interpolate Data Property.                                                              |
| [`WaterfallDisplayLowerBand`](#MatrixTensileFailureCriterion.WaterfallDisplayLowerBand)                   | Gets or sets the Lower Band Value.                                                                       |
| [`WaterfallDisplayMaxRPM`](#MatrixTensileFailureCriterion.WaterfallDisplayMaxRPM)                         | Gets or sets the Display Max RPM.                                                                        |
| [`WaterfallDisplayMinRPM`](#MatrixTensileFailureCriterion.WaterfallDisplayMinRPM)                         | Gets or sets the Display Min RPM.                                                                        |
| [`WaterfallDisplayModeSelection`](#MatrixTensileFailureCriterion.WaterfallDisplayModeSelection)           | Gets or sets the Mode Selection.                                                                         |
| [`WaterfallDisplayOrderSelection`](#MatrixTensileFailureCriterion.WaterfallDisplayOrderSelection)         | Gets or sets the Order Selection.                                                                        |
| [`WaterfallDisplayRpmSelection`](#MatrixTensileFailureCriterion.WaterfallDisplayRpmSelection)             | Gets or sets the RPM Selection.                                                                          |
| [`WaterfallDisplayScopeToOrderLines`](#MatrixTensileFailureCriterion.WaterfallDisplayScopeToOrderLines)   | Gets or sets the Scope to Order Lines Property.                                                          |
| [`WaterfallDisplayTimeSelection`](#MatrixTensileFailureCriterion.WaterfallDisplayTimeSelection)           | Gets or sets the Time Selection.                                                                         |
| [`WaterfallDisplayUpperBand`](#MatrixTensileFailureCriterion.WaterfallDisplayUpperBand)                   | Gets or sets the Upper Band Value.                                                                       |
| [`WaterfallDisplayXAxisMaximum`](#MatrixTensileFailureCriterion.WaterfallDisplayXAxisMaximum)             | Gets or sets the Maximum X-Axis Value.                                                                   |
| [`WaterfallDisplayXAxisMinimum`](#MatrixTensileFailureCriterion.WaterfallDisplayXAxisMinimum)             | Gets or sets the Minimum X-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMaximum`](#MatrixTensileFailureCriterion.WaterfallDisplayYAxisMaximum)             | Gets or sets the Maximum Y-Axis Value.                                                                   |
| [`WaterfallDisplayYAxisMinimum`](#MatrixTensileFailureCriterion.WaterfallDisplayYAxisMinimum)             | Gets or sets the Minimum Y-Axis Value.                                                                   |
| [`WaterfallShowTextOnMosaic`](#MatrixTensileFailureCriterion.WaterfallShowTextOnMosaic)                   | Gets or sets the Waterfall Mosaic Text Property.                                                         |

<a id="property-detail"></a>

## Property detail

<a id="MatrixTensileFailureCriterion.AttachedRefs"></a>

### *property* MatrixTensileFailureCriterion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Average"></a>

### *property* MatrixTensileFailureCriterion.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.By"></a>

### *property* MatrixTensileFailureCriterion.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CalculateTimeHistory"></a>

### *property* MatrixTensileFailureCriterion.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Children"></a>

### *property* MatrixTensileFailureCriterion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ClsId"></a>

### *property* MatrixTensileFailureCriterion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CombinationNumber"></a>

### *property* MatrixTensileFailureCriterion.CombinationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Comments"></a>

### *property* MatrixTensileFailureCriterion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CoordinateSystem"></a>

### *property* MatrixTensileFailureCriterion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CrackFrontNumber"></a>

### *property* MatrixTensileFailureCriterion.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.DamageResultType"></a>

### *property* MatrixTensileFailureCriterion.DamageResultType *: [Ansys.Mechanical.DataModel.Enums.DamageResultType](../../../../../Mechanical/DataModel/Enums/DamageResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DamageResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the DamageResultType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.DataModelObjectCategory"></a>

### *property* MatrixTensileFailureCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.DisplayOption"></a>

### *property* MatrixTensileFailureCriterion.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.DisplayTime"></a>

### *property* MatrixTensileFailureCriterion.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.DpfEvaluation"></a>

### *property* MatrixTensileFailureCriterion.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Figures"></a>

### *property* MatrixTensileFailureCriterion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GlobalIDs"></a>

### *property* MatrixTensileFailureCriterion.GlobalIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GraphControlsXAxis"></a>

### *property* MatrixTensileFailureCriterion.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GroupingFolder"></a>

### *property* MatrixTensileFailureCriterion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.IconName"></a>

### *property* MatrixTensileFailureCriterion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Identifier"></a>

### *property* MatrixTensileFailureCriterion.Identifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Images"></a>

### *property* MatrixTensileFailureCriterion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.InternalObject"></a>

### *property* MatrixTensileFailureCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.IsSolved"></a>

### *property* MatrixTensileFailureCriterion.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ItemType"></a>

### *property* MatrixTensileFailureCriterion.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.IterationNumber"></a>

### *property* MatrixTensileFailureCriterion.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.LoadStep"></a>

### *property* MatrixTensileFailureCriterion.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.LoadStepForMaximumOfMaximumValues"></a>

### *property* MatrixTensileFailureCriterion.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.LoadStepForMaximumOfMinimumValues"></a>

### *property* MatrixTensileFailureCriterion.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.LoadStepForMinimumOfMaximumValues"></a>

### *property* MatrixTensileFailureCriterion.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.LoadStepForMinimumOfMinimumValues"></a>

### *property* MatrixTensileFailureCriterion.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.LoadStepNumber"></a>

### *property* MatrixTensileFailureCriterion.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Location"></a>

### *property* MatrixTensileFailureCriterion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Maximum"></a>

### *property* MatrixTensileFailureCriterion.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.MaximumOccursOn"></a>

### *property* MatrixTensileFailureCriterion.MaximumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.MaximumOfMaximumOverTime"></a>

### *property* MatrixTensileFailureCriterion.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.MaximumOfMinimumOverTime"></a>

### *property* MatrixTensileFailureCriterion.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Minimum"></a>

### *property* MatrixTensileFailureCriterion.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.MinimumOccursOn"></a>

### *property* MatrixTensileFailureCriterion.MinimumOccursOn *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.MinimumOfMaximumOverTime"></a>

### *property* MatrixTensileFailureCriterion.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.MinimumOfMinimumOverTime"></a>

### *property* MatrixTensileFailureCriterion.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Mode"></a>

### *property* MatrixTensileFailureCriterion.Mode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Name"></a>

### *property* MatrixTensileFailureCriterion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.NamedSelections"></a>

### *property* MatrixTensileFailureCriterion.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ObjectId"></a>

### *property* MatrixTensileFailureCriterion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ObjectState"></a>

### *property* MatrixTensileFailureCriterion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ObjectTags"></a>

### *property* MatrixTensileFailureCriterion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Parent"></a>

### *property* MatrixTensileFailureCriterion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Path"></a>

### *property* MatrixTensileFailureCriterion.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Plies"></a>

### *property* MatrixTensileFailureCriterion.Plies *: Iterable[[Ansys.ACT.Automation.Mechanical.ImportedPliesCollection](../../ImportedPliesCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Plies property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.PlotData"></a>

### *property* MatrixTensileFailureCriterion.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Ply"></a>

### *property* MatrixTensileFailureCriterion.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Position"></a>

### *property* MatrixTensileFailureCriterion.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the surface location where the result is evaluated. Default: TopAndBottom.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Properties"></a>

### *property* MatrixTensileFailureCriterion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.RPMSelection"></a>

### *property* MatrixTensileFailureCriterion.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ResultType"></a>

### *property* MatrixTensileFailureCriterion.ResultType *: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.RpmSetNumber"></a>

### *property* MatrixTensileFailureCriterion.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ScopingMethod"></a>

### *property* MatrixTensileFailureCriterion.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.SeparateDataByEntity"></a>

### *property* MatrixTensileFailureCriterion.SeparateDataByEntity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SeparateDataByEntity.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.SetNumber"></a>

### *property* MatrixTensileFailureCriterion.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.SolutionCombinationDriver"></a>

### *property* MatrixTensileFailureCriterion.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.SolverComponentIDs"></a>

### *property* MatrixTensileFailureCriterion.SolverComponentIDs *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.State"></a>

### *property* MatrixTensileFailureCriterion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Substep"></a>

### *property* MatrixTensileFailureCriterion.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Suppressed"></a>

### *property* MatrixTensileFailureCriterion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Surface"></a>

### *property* MatrixTensileFailureCriterion.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.SurfaceCoating"></a>

### *property* MatrixTensileFailureCriterion.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.TabularData"></a>

### *property* MatrixTensileFailureCriterion.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result.  Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Time"></a>

### *property* MatrixTensileFailureCriterion.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.TimeForMaximumOfMaximumValues"></a>

### *property* MatrixTensileFailureCriterion.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.TimeForMaximumOfMinimumValues"></a>

### *property* MatrixTensileFailureCriterion.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.TimeForMinimumOfMaximumValues"></a>

### *property* MatrixTensileFailureCriterion.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.TimeForMinimumOfMinimumValues"></a>

### *property* MatrixTensileFailureCriterion.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Total"></a>

### *property* MatrixTensileFailureCriterion.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.VisibleProperties"></a>

### *property* MatrixTensileFailureCriterion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayFilterBy"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayFilterBy *: Ansys.Mechanical.DataModel.Enums.WaterfallDisplayFilterBy | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Filer in Waterfall.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayFrequencySelection"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayFrequencySelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency Selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayInterpolateData"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayInterpolateData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Interpolate Data Property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayLowerBand"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayLowerBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Lower Band Value.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayMaxRPM"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayMaxRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Max RPM.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayMinRPM"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayMinRPM *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Display Min RPM.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayModeSelection"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayModeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Mode Selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayOrderSelection"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayOrderSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Order Selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayRpmSelection"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayRpmSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayScopeToOrderLines"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayScopeToOrderLines *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Scope to Order Lines Property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayTimeSelection"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayTimeSelection *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Time Selection.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayUpperBand"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayUpperBand *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Upper Band Value.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayXAxisMaximum"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayXAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayXAxisMinimum"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayXAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum X-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayYAxisMaximum"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayYAxisMaximum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Maximum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallDisplayYAxisMinimum"></a>

### *property* MatrixTensileFailureCriterion.WaterfallDisplayYAxisMinimum *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Minimum Y-Axis Value.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.WaterfallShowTextOnMosaic"></a>

### *property* MatrixTensileFailureCriterion.WaterfallShowTextOnMosaic *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MatrixTensileFailureCriterion.Activate"></a>

### MatrixTensileFailureCriterion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.AddAlert"></a>

### MatrixTensileFailureCriterion.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.AddComment"></a>

### MatrixTensileFailureCriterion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.AddConvergence"></a>

### MatrixTensileFailureCriterion.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.AddFigure"></a>

### MatrixTensileFailureCriterion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.AddImage"></a>

### MatrixTensileFailureCriterion.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.BodyWhereMaximumOccurs"></a>

### MatrixTensileFailureCriterion.BodyWhereMaximumOccurs() → [Ansys.ACT.Automation.Mechanical.Body](../../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body)

```text
Gets the body that has the maximum result value.
Throws an exception if body not found.
```

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ClearGeneratedData"></a>

### MatrixTensileFailureCriterion.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Copy"></a>

### MatrixTensileFailureCriterion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CopyTo"></a>

### MatrixTensileFailureCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CreateObjRef"></a>

### MatrixTensileFailureCriterion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CreateParameter"></a>

### MatrixTensileFailureCriterion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.CreateResultsAtAllSets"></a>

### MatrixTensileFailureCriterion.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Cut"></a>

### MatrixTensileFailureCriterion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Delete"></a>

### MatrixTensileFailureCriterion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Duplicate"></a>

### MatrixTensileFailureCriterion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.DuplicateWithoutResults"></a>

### MatrixTensileFailureCriterion.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Equals"></a>

### MatrixTensileFailureCriterion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.EvaluateAllResults"></a>

### MatrixTensileFailureCriterion.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ExportAnimation"></a>

### MatrixTensileFailureCriterion.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ExportToSTLFile"></a>

### MatrixTensileFailureCriterion.ExportToSTLFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToSTLFile method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.ExportToTextFile"></a>

### MatrixTensileFailureCriterion.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### MatrixTensileFailureCriterion.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.FetchRemoteResult"></a>

### MatrixTensileFailureCriterion.FetchRemoteResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.FetchRemoteResults"></a>

### MatrixTensileFailureCriterion.FetchRemoteResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetAPIName"></a>

### MatrixTensileFailureCriterion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetAllProperties"></a>

### MatrixTensileFailureCriterion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetChildren"></a>

### MatrixTensileFailureCriterion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MatrixTensileFailureCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetDetailsView"></a>

### MatrixTensileFailureCriterion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetEnumName"></a>

### MatrixTensileFailureCriterion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetHashCode"></a>

### MatrixTensileFailureCriterion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetIconFile"></a>

### MatrixTensileFailureCriterion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetLifetimeService"></a>

### MatrixTensileFailureCriterion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetNodalValues"></a>

### MatrixTensileFailureCriterion.GetNodalValues(bodyRefId: [int](https://docs.python.org/3/builtins/functions.html#int)) → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [float](https://docs.python.org/3/builtins/functions.html#float)]

GetNodalValues method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetObjectData"></a>

### MatrixTensileFailureCriterion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetParameter"></a>

### MatrixTensileFailureCriterion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetPath"></a>

### MatrixTensileFailureCriterion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetPropertyName"></a>

### MatrixTensileFailureCriterion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetPropertyValue"></a>

### MatrixTensileFailureCriterion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetQuantityName"></a>

### MatrixTensileFailureCriterion.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetVisibleProperties"></a>

### MatrixTensileFailureCriterion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GetVisiblePropertyNames"></a>

### MatrixTensileFailureCriterion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GroupAllSimilarChildren"></a>

### MatrixTensileFailureCriterion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.GroupSimilarObjects"></a>

### MatrixTensileFailureCriterion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.InitializeLifetimeService"></a>

### MatrixTensileFailureCriterion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.IsPropertyEditable"></a>

### MatrixTensileFailureCriterion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MatrixTensileFailureCriterion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.IsPropertyVisible"></a>

### MatrixTensileFailureCriterion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MatrixTensileFailureCriterion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.Paste"></a>

### MatrixTensileFailureCriterion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.PromoteToNamedSelection"></a>

### MatrixTensileFailureCriterion.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.PropertyByAPIName"></a>

### MatrixTensileFailureCriterion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.PropertyById"></a>

### MatrixTensileFailureCriterion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.PropertyByName"></a>

### MatrixTensileFailureCriterion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.RemoveFromGroup"></a>

### MatrixTensileFailureCriterion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.RemoveParameter"></a>

### MatrixTensileFailureCriterion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.RenameBasedOnDefinition"></a>

### MatrixTensileFailureCriterion.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.RetrieveRemoteDPFResults"></a>

### MatrixTensileFailureCriterion.RetrieveRemoteDPFResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

RetrieveRemoteDPFResults method.

<!-- !! processed by numpydoc !! -->

<a id="MatrixTensileFailureCriterion.RetrieveResult"></a>

### MatrixTensileFailureCriterion.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

