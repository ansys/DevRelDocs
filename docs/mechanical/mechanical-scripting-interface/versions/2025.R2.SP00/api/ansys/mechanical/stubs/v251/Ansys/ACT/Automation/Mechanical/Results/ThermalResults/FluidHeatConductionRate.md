# `FluidHeatConductionRate`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.FluidHeatConductionRate"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ThermalResults.FluidHeatConductionRate

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FluidHeatConductionRate.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FluidHeatConductionRate.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#FluidHeatConductionRate.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#FluidHeatConductionRate.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#FluidHeatConductionRate.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#FluidHeatConductionRate.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FluidHeatConductionRate.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#FluidHeatConductionRate.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#FluidHeatConductionRate.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FluidHeatConductionRate.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#FluidHeatConductionRate.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#FluidHeatConductionRate.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FluidHeatConductionRate.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#FluidHeatConductionRate.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#FluidHeatConductionRate.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#FluidHeatConductionRate.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#FluidHeatConductionRate.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#FluidHeatConductionRate.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#FluidHeatConductionRate.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FluidHeatConductionRate.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FluidHeatConductionRate.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluidHeatConductionRate.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#FluidHeatConductionRate.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#FluidHeatConductionRate.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FluidHeatConductionRate.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FluidHeatConductionRate.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#FluidHeatConductionRate.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#FluidHeatConductionRate.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#FluidHeatConductionRate.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`By`](#FluidHeatConductionRate.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#FluidHeatConductionRate.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#FluidHeatConductionRate.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#FluidHeatConductionRate.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#FluidHeatConductionRate.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#FluidHeatConductionRate.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#FluidHeatConductionRate.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#FluidHeatConductionRate.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#FluidHeatConductionRate.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#FluidHeatConductionRate.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#FluidHeatConductionRate.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#FluidHeatConductionRate.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#FluidHeatConductionRate.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#FluidHeatConductionRate.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#FluidHeatConductionRate.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#FluidHeatConductionRate.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#FluidHeatConductionRate.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#FluidHeatConductionRate.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#FluidHeatConductionRate.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#FluidHeatConductionRate.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`Layer`](#FluidHeatConductionRate.Layer)                                                         | Gets or sets the Layer.                                                  |
| [`LoadStep`](#FluidHeatConductionRate.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#FluidHeatConductionRate.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#FluidHeatConductionRate.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#FluidHeatConductionRate.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#FluidHeatConductionRate.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#FluidHeatConductionRate.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#FluidHeatConductionRate.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#FluidHeatConductionRate.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#FluidHeatConductionRate.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#FluidHeatConductionRate.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#FluidHeatConductionRate.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#FluidHeatConductionRate.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#FluidHeatConductionRate.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#FluidHeatConductionRate.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#FluidHeatConductionRate.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#FluidHeatConductionRate.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#FluidHeatConductionRate.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#FluidHeatConductionRate.Path)                                                           | Path property.                                                           |
| [`PlotData`](#FluidHeatConductionRate.PlotData)                                                   | Gets the result table.                                                   |
| [`Position`](#FluidHeatConductionRate.Position)                                                   | Gets or sets the Position.                                               |
| [`Properties`](#FluidHeatConductionRate.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#FluidHeatConductionRate.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#FluidHeatConductionRate.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#FluidHeatConductionRate.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#FluidHeatConductionRate.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#FluidHeatConductionRate.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#FluidHeatConductionRate.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#FluidHeatConductionRate.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#FluidHeatConductionRate.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#FluidHeatConductionRate.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`ThermalResultType`](#FluidHeatConductionRate.ThermalResultType)                                 | Gets or sets the ThermalResultType.                                      |
| [`Time`](#FluidHeatConductionRate.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#FluidHeatConductionRate.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#FluidHeatConductionRate.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#FluidHeatConductionRate.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#FluidHeatConductionRate.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#FluidHeatConductionRate.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#FluidHeatConductionRate.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="FluidHeatConductionRate.Average"></a>

### *property* FluidHeatConductionRate.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.AverageAcrossBodies"></a>

### *property* FluidHeatConductionRate.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.By"></a>

### *property* FluidHeatConductionRate.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.CalculateTimeHistory"></a>

### *property* FluidHeatConductionRate.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Children"></a>

### *property* FluidHeatConductionRate.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.CombinationNumber"></a>

### *property* FluidHeatConductionRate.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Comments"></a>

### *property* FluidHeatConductionRate.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.CoordinateSystem"></a>

### *property* FluidHeatConductionRate.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.CrackFrontNumber"></a>

### *property* FluidHeatConductionRate.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.DataModelObjectCategory"></a>

### *property* FluidHeatConductionRate.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.DisplayOption"></a>

### *property* FluidHeatConductionRate.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.DisplayTime"></a>

### *property* FluidHeatConductionRate.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.DpfEvaluation"></a>

### *property* FluidHeatConductionRate.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Figures"></a>

### *property* FluidHeatConductionRate.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.GlobalIDs"></a>

### *property* FluidHeatConductionRate.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.GraphControlsXAxis"></a>

### *property* FluidHeatConductionRate.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Identifier"></a>

### *property* FluidHeatConductionRate.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Images"></a>

### *property* FluidHeatConductionRate.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.InternalObject"></a>

### *property* FluidHeatConductionRate.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.IsSolved"></a>

### *property* FluidHeatConductionRate.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.ItemType"></a>

### *property* FluidHeatConductionRate.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.IterationNumber"></a>

### *property* FluidHeatConductionRate.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Layer"></a>

### *property* FluidHeatConductionRate.Layer *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.LoadStep"></a>

### *property* FluidHeatConductionRate.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.LoadStepForMaximumOfMaximumValues"></a>

### *property* FluidHeatConductionRate.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.LoadStepForMaximumOfMinimumValues"></a>

### *property* FluidHeatConductionRate.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.LoadStepForMinimumOfMaximumValues"></a>

### *property* FluidHeatConductionRate.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.LoadStepForMinimumOfMinimumValues"></a>

### *property* FluidHeatConductionRate.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.LoadStepNumber"></a>

### *property* FluidHeatConductionRate.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Location"></a>

### *property* FluidHeatConductionRate.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Maximum"></a>

### *property* FluidHeatConductionRate.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.MaximumOccursOn"></a>

### *property* FluidHeatConductionRate.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.MaximumOfMaximumOverTime"></a>

### *property* FluidHeatConductionRate.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.MaximumOfMinimumOverTime"></a>

### *property* FluidHeatConductionRate.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Minimum"></a>

### *property* FluidHeatConductionRate.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.MinimumOccursOn"></a>

### *property* FluidHeatConductionRate.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.MinimumOfMaximumOverTime"></a>

### *property* FluidHeatConductionRate.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.MinimumOfMinimumOverTime"></a>

### *property* FluidHeatConductionRate.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.NamedSelections"></a>

### *property* FluidHeatConductionRate.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.NormalOrientation"></a>

### *property* FluidHeatConductionRate.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Path"></a>

### *property* FluidHeatConductionRate.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.PlotData"></a>

### *property* FluidHeatConductionRate.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Position"></a>

### *property* FluidHeatConductionRate.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Properties"></a>

### *property* FluidHeatConductionRate.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.RPMSelection"></a>

### *property* FluidHeatConductionRate.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.ScopingMethod"></a>

### *property* FluidHeatConductionRate.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.SetNumber"></a>

### *property* FluidHeatConductionRate.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.SolutionCombinationDriver"></a>

### *property* FluidHeatConductionRate.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.SolverComponentIDs"></a>

### *property* FluidHeatConductionRate.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Substep"></a>

### *property* FluidHeatConductionRate.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Suppressed"></a>

### *property* FluidHeatConductionRate.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Surface"></a>

### *property* FluidHeatConductionRate.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.SurfaceCoating"></a>

### *property* FluidHeatConductionRate.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.ThermalResultType"></a>

### *property* FluidHeatConductionRate.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Time"></a>

### *property* FluidHeatConductionRate.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.TimeForMaximumOfMaximumValues"></a>

### *property* FluidHeatConductionRate.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.TimeForMaximumOfMinimumValues"></a>

### *property* FluidHeatConductionRate.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.TimeForMinimumOfMaximumValues"></a>

### *property* FluidHeatConductionRate.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.TimeForMinimumOfMinimumValues"></a>

### *property* FluidHeatConductionRate.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Total"></a>

### *property* FluidHeatConductionRate.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.VisibleProperties"></a>

### *property* FluidHeatConductionRate.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluidHeatConductionRate.Activate"></a>

### FluidHeatConductionRate.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.AddAlert"></a>

### FluidHeatConductionRate.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.AddComment"></a>

### FluidHeatConductionRate.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.AddConvergence"></a>

### FluidHeatConductionRate.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.AddFigure"></a>

### FluidHeatConductionRate.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.AddImage"></a>

### FluidHeatConductionRate.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.ClearGeneratedData"></a>

### FluidHeatConductionRate.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.CopyTo"></a>

### FluidHeatConductionRate.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.CreateParameter"></a>

### FluidHeatConductionRate.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.CreateResultsAtAllSets"></a>

### FluidHeatConductionRate.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Delete"></a>

### FluidHeatConductionRate.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.Duplicate"></a>

### FluidHeatConductionRate.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.DuplicateWithoutResults"></a>

### FluidHeatConductionRate.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.EvaluateAllResults"></a>

### FluidHeatConductionRate.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.ExportAnimation"></a>

### FluidHeatConductionRate.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.ExportToTextFile"></a>

### FluidHeatConductionRate.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.FetchRemoteResults"></a>

### FluidHeatConductionRate.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.GetChildren"></a>

### FluidHeatConductionRate.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.GetParameter"></a>

### FluidHeatConductionRate.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.GroupAllSimilarChildren"></a>

### FluidHeatConductionRate.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.GroupSimilarObjects"></a>

### FluidHeatConductionRate.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.PromoteToNamedSelection"></a>

### FluidHeatConductionRate.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.PropertyByAPIName"></a>

### FluidHeatConductionRate.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.PropertyByName"></a>

### FluidHeatConductionRate.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.RemoveParameter"></a>

### FluidHeatConductionRate.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatConductionRate.RenameBasedOnDefinition"></a>

### FluidHeatConductionRate.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

