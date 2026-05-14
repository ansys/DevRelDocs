# `ElementalStrainEnergy`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.EnergyResults.ElementalStrainEnergy"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.EnergyResults.ElementalStrainEnergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElementalStrainEnergy.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ElementalStrainEnergy.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#ElementalStrainEnergy.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#ElementalStrainEnergy.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#ElementalStrainEnergy.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#ElementalStrainEnergy.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElementalStrainEnergy.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ElementalStrainEnergy.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ElementalStrainEnergy.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ElementalStrainEnergy.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#ElementalStrainEnergy.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#ElementalStrainEnergy.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ElementalStrainEnergy.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#ElementalStrainEnergy.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ElementalStrainEnergy.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ElementalStrainEnergy.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#ElementalStrainEnergy.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#ElementalStrainEnergy.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#ElementalStrainEnergy.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ElementalStrainEnergy.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ElementalStrainEnergy.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElementalStrainEnergy.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ElementalStrainEnergy.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ElementalStrainEnergy.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ElementalStrainEnergy.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ElementalStrainEnergy.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ElementalStrainEnergy.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#ElementalStrainEnergy.Average)                                                     | Gets the Average.                                                        |
| [`By`](#ElementalStrainEnergy.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#ElementalStrainEnergy.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#ElementalStrainEnergy.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#ElementalStrainEnergy.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#ElementalStrainEnergy.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#ElementalStrainEnergy.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#ElementalStrainEnergy.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#ElementalStrainEnergy.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#ElementalStrainEnergy.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#ElementalStrainEnergy.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#ElementalStrainEnergy.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#ElementalStrainEnergy.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#ElementalStrainEnergy.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#ElementalStrainEnergy.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#ElementalStrainEnergy.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#ElementalStrainEnergy.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#ElementalStrainEnergy.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ElementalStrainEnergy.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#ElementalStrainEnergy.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#ElementalStrainEnergy.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#ElementalStrainEnergy.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#ElementalStrainEnergy.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#ElementalStrainEnergy.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#ElementalStrainEnergy.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#ElementalStrainEnergy.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#ElementalStrainEnergy.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ElementalStrainEnergy.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#ElementalStrainEnergy.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#ElementalStrainEnergy.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#ElementalStrainEnergy.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#ElementalStrainEnergy.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#ElementalStrainEnergy.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#ElementalStrainEnergy.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#ElementalStrainEnergy.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#ElementalStrainEnergy.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#ElementalStrainEnergy.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#ElementalStrainEnergy.Path)                                                           | Path property.                                                           |
| [`PlotData`](#ElementalStrainEnergy.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#ElementalStrainEnergy.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ElementalStrainEnergy.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#ElementalStrainEnergy.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#ElementalStrainEnergy.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#ElementalStrainEnergy.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#ElementalStrainEnergy.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#ElementalStrainEnergy.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#ElementalStrainEnergy.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#ElementalStrainEnergy.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#ElementalStrainEnergy.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#ElementalStrainEnergy.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#ElementalStrainEnergy.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#ElementalStrainEnergy.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#ElementalStrainEnergy.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#ElementalStrainEnergy.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#ElementalStrainEnergy.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#ElementalStrainEnergy.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="ElementalStrainEnergy.Average"></a>

### *property* ElementalStrainEnergy.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.By"></a>

### *property* ElementalStrainEnergy.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CalculateTimeHistory"></a>

### *property* ElementalStrainEnergy.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Children"></a>

### *property* ElementalStrainEnergy.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CombinationNumber"></a>

### *property* ElementalStrainEnergy.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Comments"></a>

### *property* ElementalStrainEnergy.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CoordinateSystem"></a>

### *property* ElementalStrainEnergy.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CrackFrontNumber"></a>

### *property* ElementalStrainEnergy.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.DataModelObjectCategory"></a>

### *property* ElementalStrainEnergy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.DisplayOption"></a>

### *property* ElementalStrainEnergy.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.DisplayTime"></a>

### *property* ElementalStrainEnergy.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.DpfEvaluation"></a>

### *property* ElementalStrainEnergy.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Figures"></a>

### *property* ElementalStrainEnergy.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.GlobalIDs"></a>

### *property* ElementalStrainEnergy.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.GraphControlsXAxis"></a>

### *property* ElementalStrainEnergy.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Identifier"></a>

### *property* ElementalStrainEnergy.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Images"></a>

### *property* ElementalStrainEnergy.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.InternalObject"></a>

### *property* ElementalStrainEnergy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.IsSolved"></a>

### *property* ElementalStrainEnergy.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.ItemType"></a>

### *property* ElementalStrainEnergy.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.IterationNumber"></a>

### *property* ElementalStrainEnergy.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.LoadStep"></a>

### *property* ElementalStrainEnergy.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.LoadStepForMaximumOfMaximumValues"></a>

### *property* ElementalStrainEnergy.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.LoadStepForMaximumOfMinimumValues"></a>

### *property* ElementalStrainEnergy.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.LoadStepForMinimumOfMaximumValues"></a>

### *property* ElementalStrainEnergy.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.LoadStepForMinimumOfMinimumValues"></a>

### *property* ElementalStrainEnergy.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.LoadStepNumber"></a>

### *property* ElementalStrainEnergy.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Location"></a>

### *property* ElementalStrainEnergy.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Maximum"></a>

### *property* ElementalStrainEnergy.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.MaximumOccursOn"></a>

### *property* ElementalStrainEnergy.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.MaximumOfMaximumOverTime"></a>

### *property* ElementalStrainEnergy.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.MaximumOfMinimumOverTime"></a>

### *property* ElementalStrainEnergy.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Minimum"></a>

### *property* ElementalStrainEnergy.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.MinimumOccursOn"></a>

### *property* ElementalStrainEnergy.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.MinimumOfMaximumOverTime"></a>

### *property* ElementalStrainEnergy.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.MinimumOfMinimumOverTime"></a>

### *property* ElementalStrainEnergy.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.NamedSelections"></a>

### *property* ElementalStrainEnergy.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Path"></a>

### *property* ElementalStrainEnergy.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.PlotData"></a>

### *property* ElementalStrainEnergy.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Properties"></a>

### *property* ElementalStrainEnergy.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.RPMSelection"></a>

### *property* ElementalStrainEnergy.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.ScopingMethod"></a>

### *property* ElementalStrainEnergy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.SetNumber"></a>

### *property* ElementalStrainEnergy.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.SolutionCombinationDriver"></a>

### *property* ElementalStrainEnergy.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.SolverComponentIDs"></a>

### *property* ElementalStrainEnergy.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Substep"></a>

### *property* ElementalStrainEnergy.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Suppressed"></a>

### *property* ElementalStrainEnergy.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Surface"></a>

### *property* ElementalStrainEnergy.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.SurfaceCoating"></a>

### *property* ElementalStrainEnergy.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Time"></a>

### *property* ElementalStrainEnergy.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.TimeForMaximumOfMaximumValues"></a>

### *property* ElementalStrainEnergy.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.TimeForMaximumOfMinimumValues"></a>

### *property* ElementalStrainEnergy.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.TimeForMinimumOfMaximumValues"></a>

### *property* ElementalStrainEnergy.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.TimeForMinimumOfMinimumValues"></a>

### *property* ElementalStrainEnergy.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Total"></a>

### *property* ElementalStrainEnergy.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.VisibleProperties"></a>

### *property* ElementalStrainEnergy.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementalStrainEnergy.Activate"></a>

### ElementalStrainEnergy.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.AddAlert"></a>

### ElementalStrainEnergy.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.AddComment"></a>

### ElementalStrainEnergy.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.AddConvergence"></a>

### ElementalStrainEnergy.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.AddFigure"></a>

### ElementalStrainEnergy.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.AddImage"></a>

### ElementalStrainEnergy.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.ClearGeneratedData"></a>

### ElementalStrainEnergy.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CopyTo"></a>

### ElementalStrainEnergy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CreateParameter"></a>

### ElementalStrainEnergy.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CreateResultsAtAllSets"></a>

### ElementalStrainEnergy.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Delete"></a>

### ElementalStrainEnergy.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Duplicate"></a>

### ElementalStrainEnergy.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.DuplicateWithoutResults"></a>

### ElementalStrainEnergy.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.EvaluateAllResults"></a>

### ElementalStrainEnergy.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.ExportAnimation"></a>

### ElementalStrainEnergy.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.ExportToTextFile"></a>

### ElementalStrainEnergy.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.FetchRemoteResults"></a>

### ElementalStrainEnergy.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.GetChildren"></a>

### ElementalStrainEnergy.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.GetParameter"></a>

### ElementalStrainEnergy.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.GroupAllSimilarChildren"></a>

### ElementalStrainEnergy.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.GroupSimilarObjects"></a>

### ElementalStrainEnergy.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.PromoteToNamedSelection"></a>

### ElementalStrainEnergy.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.PropertyByAPIName"></a>

### ElementalStrainEnergy.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.PropertyByName"></a>

### ElementalStrainEnergy.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.RemoveParameter"></a>

### ElementalStrainEnergy.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.RenameBasedOnDefinition"></a>

### ElementalStrainEnergy.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

