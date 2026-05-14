# `DirectionalHeatFlux`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.DirectionalHeatFlux"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ThermalResults.DirectionalHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DirectionalHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#DirectionalHeatFlux.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#DirectionalHeatFlux.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#DirectionalHeatFlux.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#DirectionalHeatFlux.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#DirectionalHeatFlux.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalHeatFlux.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#DirectionalHeatFlux.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#DirectionalHeatFlux.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#DirectionalHeatFlux.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#DirectionalHeatFlux.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#DirectionalHeatFlux.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#DirectionalHeatFlux.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#DirectionalHeatFlux.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#DirectionalHeatFlux.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#DirectionalHeatFlux.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#DirectionalHeatFlux.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#DirectionalHeatFlux.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#DirectionalHeatFlux.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#DirectionalHeatFlux.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#DirectionalHeatFlux.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalHeatFlux.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#DirectionalHeatFlux.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#DirectionalHeatFlux.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#DirectionalHeatFlux.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#DirectionalHeatFlux.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#DirectionalHeatFlux.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#DirectionalHeatFlux.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#DirectionalHeatFlux.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`By`](#DirectionalHeatFlux.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#DirectionalHeatFlux.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#DirectionalHeatFlux.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#DirectionalHeatFlux.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#DirectionalHeatFlux.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#DirectionalHeatFlux.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#DirectionalHeatFlux.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#DirectionalHeatFlux.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#DirectionalHeatFlux.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#DirectionalHeatFlux.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#DirectionalHeatFlux.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#DirectionalHeatFlux.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#DirectionalHeatFlux.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#DirectionalHeatFlux.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#DirectionalHeatFlux.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#DirectionalHeatFlux.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#DirectionalHeatFlux.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#DirectionalHeatFlux.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#DirectionalHeatFlux.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#DirectionalHeatFlux.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`Layer`](#DirectionalHeatFlux.Layer)                                                         | Gets or sets the Layer.                                                  |
| [`LoadStep`](#DirectionalHeatFlux.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalHeatFlux.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalHeatFlux.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalHeatFlux.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalHeatFlux.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#DirectionalHeatFlux.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#DirectionalHeatFlux.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#DirectionalHeatFlux.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#DirectionalHeatFlux.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#DirectionalHeatFlux.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#DirectionalHeatFlux.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#DirectionalHeatFlux.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#DirectionalHeatFlux.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#DirectionalHeatFlux.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#DirectionalHeatFlux.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#DirectionalHeatFlux.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#DirectionalHeatFlux.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#DirectionalHeatFlux.Path)                                                           | Path property.                                                           |
| [`PlotData`](#DirectionalHeatFlux.PlotData)                                                   | Gets the result table.                                                   |
| [`Ply`](#DirectionalHeatFlux.Ply)                                                             | Gets or sets the Ply selection.                                          |
| [`Position`](#DirectionalHeatFlux.Position)                                                   | Gets or sets the Position.                                               |
| [`Properties`](#DirectionalHeatFlux.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#DirectionalHeatFlux.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#DirectionalHeatFlux.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#DirectionalHeatFlux.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#DirectionalHeatFlux.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#DirectionalHeatFlux.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#DirectionalHeatFlux.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#DirectionalHeatFlux.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#DirectionalHeatFlux.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#DirectionalHeatFlux.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`ThermalResultType`](#DirectionalHeatFlux.ThermalResultType)                                 | Gets or sets the ThermalResultType.                                      |
| [`Time`](#DirectionalHeatFlux.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#DirectionalHeatFlux.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#DirectionalHeatFlux.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#DirectionalHeatFlux.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#DirectionalHeatFlux.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#DirectionalHeatFlux.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#DirectionalHeatFlux.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="DirectionalHeatFlux.Average"></a>

### *property* DirectionalHeatFlux.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.AverageAcrossBodies"></a>

### *property* DirectionalHeatFlux.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.By"></a>

### *property* DirectionalHeatFlux.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CalculateTimeHistory"></a>

### *property* DirectionalHeatFlux.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Children"></a>

### *property* DirectionalHeatFlux.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CombinationNumber"></a>

### *property* DirectionalHeatFlux.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Comments"></a>

### *property* DirectionalHeatFlux.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CoordinateSystem"></a>

### *property* DirectionalHeatFlux.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CrackFrontNumber"></a>

### *property* DirectionalHeatFlux.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.DataModelObjectCategory"></a>

### *property* DirectionalHeatFlux.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.DisplayOption"></a>

### *property* DirectionalHeatFlux.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.DisplayTime"></a>

### *property* DirectionalHeatFlux.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.DpfEvaluation"></a>

### *property* DirectionalHeatFlux.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Figures"></a>

### *property* DirectionalHeatFlux.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.GlobalIDs"></a>

### *property* DirectionalHeatFlux.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.GraphControlsXAxis"></a>

### *property* DirectionalHeatFlux.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Identifier"></a>

### *property* DirectionalHeatFlux.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Images"></a>

### *property* DirectionalHeatFlux.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.InternalObject"></a>

### *property* DirectionalHeatFlux.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.IsSolved"></a>

### *property* DirectionalHeatFlux.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.ItemType"></a>

### *property* DirectionalHeatFlux.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.IterationNumber"></a>

### *property* DirectionalHeatFlux.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Layer"></a>

### *property* DirectionalHeatFlux.Layer *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.LoadStep"></a>

### *property* DirectionalHeatFlux.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalHeatFlux.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalHeatFlux.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalHeatFlux.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalHeatFlux.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.LoadStepNumber"></a>

### *property* DirectionalHeatFlux.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Location"></a>

### *property* DirectionalHeatFlux.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Maximum"></a>

### *property* DirectionalHeatFlux.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.MaximumOccursOn"></a>

### *property* DirectionalHeatFlux.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.MaximumOfMaximumOverTime"></a>

### *property* DirectionalHeatFlux.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.MaximumOfMinimumOverTime"></a>

### *property* DirectionalHeatFlux.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Minimum"></a>

### *property* DirectionalHeatFlux.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.MinimumOccursOn"></a>

### *property* DirectionalHeatFlux.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.MinimumOfMaximumOverTime"></a>

### *property* DirectionalHeatFlux.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.MinimumOfMinimumOverTime"></a>

### *property* DirectionalHeatFlux.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.NamedSelections"></a>

### *property* DirectionalHeatFlux.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.NormalOrientation"></a>

### *property* DirectionalHeatFlux.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Path"></a>

### *property* DirectionalHeatFlux.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.PlotData"></a>

### *property* DirectionalHeatFlux.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Ply"></a>

### *property* DirectionalHeatFlux.Ply *: Iterable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../AnalysisPly.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Position"></a>

### *property* DirectionalHeatFlux.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Properties"></a>

### *property* DirectionalHeatFlux.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.RPMSelection"></a>

### *property* DirectionalHeatFlux.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.ScopingMethod"></a>

### *property* DirectionalHeatFlux.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.SetNumber"></a>

### *property* DirectionalHeatFlux.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.SolutionCombinationDriver"></a>

### *property* DirectionalHeatFlux.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.SolverComponentIDs"></a>

### *property* DirectionalHeatFlux.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Substep"></a>

### *property* DirectionalHeatFlux.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Suppressed"></a>

### *property* DirectionalHeatFlux.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Surface"></a>

### *property* DirectionalHeatFlux.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.SurfaceCoating"></a>

### *property* DirectionalHeatFlux.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.ThermalResultType"></a>

### *property* DirectionalHeatFlux.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Time"></a>

### *property* DirectionalHeatFlux.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalHeatFlux.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalHeatFlux.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalHeatFlux.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalHeatFlux.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Total"></a>

### *property* DirectionalHeatFlux.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.VisibleProperties"></a>

### *property* DirectionalHeatFlux.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalHeatFlux.Activate"></a>

### DirectionalHeatFlux.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.AddAlert"></a>

### DirectionalHeatFlux.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.AddComment"></a>

### DirectionalHeatFlux.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.AddConvergence"></a>

### DirectionalHeatFlux.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.AddFigure"></a>

### DirectionalHeatFlux.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.AddImage"></a>

### DirectionalHeatFlux.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.ClearGeneratedData"></a>

### DirectionalHeatFlux.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CopyTo"></a>

### DirectionalHeatFlux.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CreateParameter"></a>

### DirectionalHeatFlux.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CreateResultsAtAllSets"></a>

### DirectionalHeatFlux.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Delete"></a>

### DirectionalHeatFlux.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Duplicate"></a>

### DirectionalHeatFlux.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.DuplicateWithoutResults"></a>

### DirectionalHeatFlux.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.EvaluateAllResults"></a>

### DirectionalHeatFlux.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.ExportAnimation"></a>

### DirectionalHeatFlux.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.ExportToTextFile"></a>

### DirectionalHeatFlux.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.FetchRemoteResults"></a>

### DirectionalHeatFlux.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.GetChildren"></a>

### DirectionalHeatFlux.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.GetParameter"></a>

### DirectionalHeatFlux.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.GroupAllSimilarChildren"></a>

### DirectionalHeatFlux.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.GroupSimilarObjects"></a>

### DirectionalHeatFlux.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.PromoteToNamedSelection"></a>

### DirectionalHeatFlux.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.PropertyByAPIName"></a>

### DirectionalHeatFlux.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.PropertyByName"></a>

### DirectionalHeatFlux.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.RemoveParameter"></a>

### DirectionalHeatFlux.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.RenameBasedOnDefinition"></a>

### DirectionalHeatFlux.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

