# `FluidHeatTransportRate`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.FluidHeatTransportRate"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ThermalResults.FluidHeatTransportRate

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FluidHeatTransportRate.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FluidHeatTransportRate.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#FluidHeatTransportRate.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#FluidHeatTransportRate.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#FluidHeatTransportRate.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#FluidHeatTransportRate.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FluidHeatTransportRate.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#FluidHeatTransportRate.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#FluidHeatTransportRate.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FluidHeatTransportRate.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#FluidHeatTransportRate.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#FluidHeatTransportRate.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FluidHeatTransportRate.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#FluidHeatTransportRate.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#FluidHeatTransportRate.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#FluidHeatTransportRate.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#FluidHeatTransportRate.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#FluidHeatTransportRate.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#FluidHeatTransportRate.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FluidHeatTransportRate.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FluidHeatTransportRate.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluidHeatTransportRate.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#FluidHeatTransportRate.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#FluidHeatTransportRate.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FluidHeatTransportRate.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FluidHeatTransportRate.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#FluidHeatTransportRate.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#FluidHeatTransportRate.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#FluidHeatTransportRate.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`By`](#FluidHeatTransportRate.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#FluidHeatTransportRate.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#FluidHeatTransportRate.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#FluidHeatTransportRate.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#FluidHeatTransportRate.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#FluidHeatTransportRate.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#FluidHeatTransportRate.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#FluidHeatTransportRate.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#FluidHeatTransportRate.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#FluidHeatTransportRate.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#FluidHeatTransportRate.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#FluidHeatTransportRate.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#FluidHeatTransportRate.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#FluidHeatTransportRate.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#FluidHeatTransportRate.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#FluidHeatTransportRate.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#FluidHeatTransportRate.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#FluidHeatTransportRate.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#FluidHeatTransportRate.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#FluidHeatTransportRate.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`Layer`](#FluidHeatTransportRate.Layer)                                                         | Gets or sets the Layer.                                                  |
| [`LoadStep`](#FluidHeatTransportRate.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#FluidHeatTransportRate.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#FluidHeatTransportRate.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#FluidHeatTransportRate.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#FluidHeatTransportRate.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#FluidHeatTransportRate.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#FluidHeatTransportRate.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#FluidHeatTransportRate.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#FluidHeatTransportRate.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#FluidHeatTransportRate.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#FluidHeatTransportRate.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#FluidHeatTransportRate.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#FluidHeatTransportRate.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#FluidHeatTransportRate.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#FluidHeatTransportRate.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#FluidHeatTransportRate.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#FluidHeatTransportRate.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#FluidHeatTransportRate.Path)                                                           | Path property.                                                           |
| [`PlotData`](#FluidHeatTransportRate.PlotData)                                                   | Gets the result table.                                                   |
| [`Position`](#FluidHeatTransportRate.Position)                                                   | Gets or sets the Position.                                               |
| [`Properties`](#FluidHeatTransportRate.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#FluidHeatTransportRate.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#FluidHeatTransportRate.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#FluidHeatTransportRate.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#FluidHeatTransportRate.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#FluidHeatTransportRate.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#FluidHeatTransportRate.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#FluidHeatTransportRate.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#FluidHeatTransportRate.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#FluidHeatTransportRate.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`ThermalResultType`](#FluidHeatTransportRate.ThermalResultType)                                 | Gets or sets the ThermalResultType.                                      |
| [`Time`](#FluidHeatTransportRate.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#FluidHeatTransportRate.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#FluidHeatTransportRate.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#FluidHeatTransportRate.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#FluidHeatTransportRate.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#FluidHeatTransportRate.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#FluidHeatTransportRate.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="FluidHeatTransportRate.Average"></a>

### *property* FluidHeatTransportRate.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.AverageAcrossBodies"></a>

### *property* FluidHeatTransportRate.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.By"></a>

### *property* FluidHeatTransportRate.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CalculateTimeHistory"></a>

### *property* FluidHeatTransportRate.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Children"></a>

### *property* FluidHeatTransportRate.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CombinationNumber"></a>

### *property* FluidHeatTransportRate.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Comments"></a>

### *property* FluidHeatTransportRate.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CoordinateSystem"></a>

### *property* FluidHeatTransportRate.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CrackFrontNumber"></a>

### *property* FluidHeatTransportRate.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.DataModelObjectCategory"></a>

### *property* FluidHeatTransportRate.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.DisplayOption"></a>

### *property* FluidHeatTransportRate.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.DisplayTime"></a>

### *property* FluidHeatTransportRate.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.DpfEvaluation"></a>

### *property* FluidHeatTransportRate.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Figures"></a>

### *property* FluidHeatTransportRate.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.GlobalIDs"></a>

### *property* FluidHeatTransportRate.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.GraphControlsXAxis"></a>

### *property* FluidHeatTransportRate.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Identifier"></a>

### *property* FluidHeatTransportRate.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Images"></a>

### *property* FluidHeatTransportRate.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.InternalObject"></a>

### *property* FluidHeatTransportRate.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.IsSolved"></a>

### *property* FluidHeatTransportRate.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.ItemType"></a>

### *property* FluidHeatTransportRate.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.IterationNumber"></a>

### *property* FluidHeatTransportRate.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Layer"></a>

### *property* FluidHeatTransportRate.Layer *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.LoadStep"></a>

### *property* FluidHeatTransportRate.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.LoadStepForMaximumOfMaximumValues"></a>

### *property* FluidHeatTransportRate.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.LoadStepForMaximumOfMinimumValues"></a>

### *property* FluidHeatTransportRate.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.LoadStepForMinimumOfMaximumValues"></a>

### *property* FluidHeatTransportRate.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.LoadStepForMinimumOfMinimumValues"></a>

### *property* FluidHeatTransportRate.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.LoadStepNumber"></a>

### *property* FluidHeatTransportRate.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Location"></a>

### *property* FluidHeatTransportRate.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Maximum"></a>

### *property* FluidHeatTransportRate.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.MaximumOccursOn"></a>

### *property* FluidHeatTransportRate.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.MaximumOfMaximumOverTime"></a>

### *property* FluidHeatTransportRate.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.MaximumOfMinimumOverTime"></a>

### *property* FluidHeatTransportRate.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Minimum"></a>

### *property* FluidHeatTransportRate.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.MinimumOccursOn"></a>

### *property* FluidHeatTransportRate.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.MinimumOfMaximumOverTime"></a>

### *property* FluidHeatTransportRate.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.MinimumOfMinimumOverTime"></a>

### *property* FluidHeatTransportRate.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.NamedSelections"></a>

### *property* FluidHeatTransportRate.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.NormalOrientation"></a>

### *property* FluidHeatTransportRate.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Path"></a>

### *property* FluidHeatTransportRate.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.PlotData"></a>

### *property* FluidHeatTransportRate.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Position"></a>

### *property* FluidHeatTransportRate.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Properties"></a>

### *property* FluidHeatTransportRate.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.RPMSelection"></a>

### *property* FluidHeatTransportRate.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.ScopingMethod"></a>

### *property* FluidHeatTransportRate.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.SetNumber"></a>

### *property* FluidHeatTransportRate.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.SolutionCombinationDriver"></a>

### *property* FluidHeatTransportRate.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.SolverComponentIDs"></a>

### *property* FluidHeatTransportRate.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Substep"></a>

### *property* FluidHeatTransportRate.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Suppressed"></a>

### *property* FluidHeatTransportRate.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Surface"></a>

### *property* FluidHeatTransportRate.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.SurfaceCoating"></a>

### *property* FluidHeatTransportRate.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.ThermalResultType"></a>

### *property* FluidHeatTransportRate.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Time"></a>

### *property* FluidHeatTransportRate.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.TimeForMaximumOfMaximumValues"></a>

### *property* FluidHeatTransportRate.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.TimeForMaximumOfMinimumValues"></a>

### *property* FluidHeatTransportRate.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.TimeForMinimumOfMaximumValues"></a>

### *property* FluidHeatTransportRate.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.TimeForMinimumOfMinimumValues"></a>

### *property* FluidHeatTransportRate.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Total"></a>

### *property* FluidHeatTransportRate.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.VisibleProperties"></a>

### *property* FluidHeatTransportRate.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluidHeatTransportRate.Activate"></a>

### FluidHeatTransportRate.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.AddAlert"></a>

### FluidHeatTransportRate.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.AddComment"></a>

### FluidHeatTransportRate.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.AddConvergence"></a>

### FluidHeatTransportRate.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.AddFigure"></a>

### FluidHeatTransportRate.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.AddImage"></a>

### FluidHeatTransportRate.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.ClearGeneratedData"></a>

### FluidHeatTransportRate.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CopyTo"></a>

### FluidHeatTransportRate.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CreateParameter"></a>

### FluidHeatTransportRate.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CreateResultsAtAllSets"></a>

### FluidHeatTransportRate.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Delete"></a>

### FluidHeatTransportRate.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Duplicate"></a>

### FluidHeatTransportRate.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.DuplicateWithoutResults"></a>

### FluidHeatTransportRate.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.EvaluateAllResults"></a>

### FluidHeatTransportRate.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.ExportAnimation"></a>

### FluidHeatTransportRate.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.ExportToTextFile"></a>

### FluidHeatTransportRate.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.FetchRemoteResults"></a>

### FluidHeatTransportRate.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.GetChildren"></a>

### FluidHeatTransportRate.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.GetParameter"></a>

### FluidHeatTransportRate.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.GroupAllSimilarChildren"></a>

### FluidHeatTransportRate.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.GroupSimilarObjects"></a>

### FluidHeatTransportRate.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.PromoteToNamedSelection"></a>

### FluidHeatTransportRate.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.PropertyByAPIName"></a>

### FluidHeatTransportRate.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.PropertyByName"></a>

### FluidHeatTransportRate.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.RemoveParameter"></a>

### FluidHeatTransportRate.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.RenameBasedOnDefinition"></a>

### FluidHeatTransportRate.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

