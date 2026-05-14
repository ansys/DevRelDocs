# `DirectionalElectricFieldIntensity`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.DirectionalElectricFieldIntensity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ElectricResults.DirectionalElectricFieldIntensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DirectionalElectricFieldIntensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#DirectionalElectricFieldIntensity.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#DirectionalElectricFieldIntensity.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#DirectionalElectricFieldIntensity.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#DirectionalElectricFieldIntensity.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#DirectionalElectricFieldIntensity.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#DirectionalElectricFieldIntensity.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#DirectionalElectricFieldIntensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#DirectionalElectricFieldIntensity.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#DirectionalElectricFieldIntensity.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#DirectionalElectricFieldIntensity.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#DirectionalElectricFieldIntensity.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#DirectionalElectricFieldIntensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#DirectionalElectricFieldIntensity.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#DirectionalElectricFieldIntensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#DirectionalElectricFieldIntensity.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#DirectionalElectricFieldIntensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`FetchRemoteResults`](#DirectionalElectricFieldIntensity.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#DirectionalElectricFieldIntensity.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#DirectionalElectricFieldIntensity.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#DirectionalElectricFieldIntensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#DirectionalElectricFieldIntensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#DirectionalElectricFieldIntensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#DirectionalElectricFieldIntensity.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#DirectionalElectricFieldIntensity.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#DirectionalElectricFieldIntensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#DirectionalElectricFieldIntensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#DirectionalElectricFieldIntensity.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Amplitude`](#DirectionalElectricFieldIntensity.Amplitude)                                                 | Gets or sets the Amplitude.                                              |
| [`Average`](#DirectionalElectricFieldIntensity.Average)                                                     | Gets the Average.                                                        |
| [`AverageAcrossBodies`](#DirectionalElectricFieldIntensity.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                    |
| [`By`](#DirectionalElectricFieldIntensity.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#DirectionalElectricFieldIntensity.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#DirectionalElectricFieldIntensity.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#DirectionalElectricFieldIntensity.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#DirectionalElectricFieldIntensity.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#DirectionalElectricFieldIntensity.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#DirectionalElectricFieldIntensity.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#DirectionalElectricFieldIntensity.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#DirectionalElectricFieldIntensity.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#DirectionalElectricFieldIntensity.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#DirectionalElectricFieldIntensity.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`ElectricResultType`](#DirectionalElectricFieldIntensity.ElectricResultType)                               | Gets or sets the ElectricResultType.                                     |
| [`Figures`](#DirectionalElectricFieldIntensity.Figures)                                                     | Gets the list of associated figures.                                     |
| [`Frequency`](#DirectionalElectricFieldIntensity.Frequency)                                                 | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#DirectionalElectricFieldIntensity.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#DirectionalElectricFieldIntensity.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#DirectionalElectricFieldIntensity.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#DirectionalElectricFieldIntensity.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#DirectionalElectricFieldIntensity.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#DirectionalElectricFieldIntensity.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#DirectionalElectricFieldIntensity.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#DirectionalElectricFieldIntensity.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#DirectionalElectricFieldIntensity.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalElectricFieldIntensity.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalElectricFieldIntensity.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalElectricFieldIntensity.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalElectricFieldIntensity.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#DirectionalElectricFieldIntensity.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#DirectionalElectricFieldIntensity.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#DirectionalElectricFieldIntensity.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#DirectionalElectricFieldIntensity.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#DirectionalElectricFieldIntensity.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#DirectionalElectricFieldIntensity.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#DirectionalElectricFieldIntensity.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#DirectionalElectricFieldIntensity.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#DirectionalElectricFieldIntensity.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#DirectionalElectricFieldIntensity.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#DirectionalElectricFieldIntensity.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#DirectionalElectricFieldIntensity.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                      |
| [`Path`](#DirectionalElectricFieldIntensity.Path)                                                           | Path property.                                                           |
| [`PhaseIncrement`](#DirectionalElectricFieldIntensity.PhaseIncrement)                                       | Gets or sets the PhaseIncrement.                                         |
| [`PlotData`](#DirectionalElectricFieldIntensity.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#DirectionalElectricFieldIntensity.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#DirectionalElectricFieldIntensity.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReportedFrequency`](#DirectionalElectricFieldIntensity.ReportedFrequency)                                 | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#DirectionalElectricFieldIntensity.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#DirectionalElectricFieldIntensity.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#DirectionalElectricFieldIntensity.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#DirectionalElectricFieldIntensity.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#DirectionalElectricFieldIntensity.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#DirectionalElectricFieldIntensity.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#DirectionalElectricFieldIntensity.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#DirectionalElectricFieldIntensity.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`SweepingPhase`](#DirectionalElectricFieldIntensity.SweepingPhase)                                         | Gets or sets the SweepingPhase.                                          |
| [`Time`](#DirectionalElectricFieldIntensity.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#DirectionalElectricFieldIntensity.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#DirectionalElectricFieldIntensity.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#DirectionalElectricFieldIntensity.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#DirectionalElectricFieldIntensity.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#DirectionalElectricFieldIntensity.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#DirectionalElectricFieldIntensity.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="DirectionalElectricFieldIntensity.Amplitude"></a>

### *property* DirectionalElectricFieldIntensity.Amplitude *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Amplitude.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Average"></a>

### *property* DirectionalElectricFieldIntensity.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.AverageAcrossBodies"></a>

### *property* DirectionalElectricFieldIntensity.AverageAcrossBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.By"></a>

### *property* DirectionalElectricFieldIntensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CalculateTimeHistory"></a>

### *property* DirectionalElectricFieldIntensity.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Children"></a>

### *property* DirectionalElectricFieldIntensity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CombinationNumber"></a>

### *property* DirectionalElectricFieldIntensity.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Comments"></a>

### *property* DirectionalElectricFieldIntensity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CoordinateSystem"></a>

### *property* DirectionalElectricFieldIntensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CrackFrontNumber"></a>

### *property* DirectionalElectricFieldIntensity.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.DataModelObjectCategory"></a>

### *property* DirectionalElectricFieldIntensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.DisplayOption"></a>

### *property* DirectionalElectricFieldIntensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.DisplayTime"></a>

### *property* DirectionalElectricFieldIntensity.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.DpfEvaluation"></a>

### *property* DirectionalElectricFieldIntensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.ElectricResultType"></a>

### *property* DirectionalElectricFieldIntensity.ElectricResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Figures"></a>

### *property* DirectionalElectricFieldIntensity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Frequency"></a>

### *property* DirectionalElectricFieldIntensity.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.GlobalIDs"></a>

### *property* DirectionalElectricFieldIntensity.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.GraphControlsXAxis"></a>

### *property* DirectionalElectricFieldIntensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Identifier"></a>

### *property* DirectionalElectricFieldIntensity.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Images"></a>

### *property* DirectionalElectricFieldIntensity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.InternalObject"></a>

### *property* DirectionalElectricFieldIntensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.IsSolved"></a>

### *property* DirectionalElectricFieldIntensity.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.ItemType"></a>

### *property* DirectionalElectricFieldIntensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.IterationNumber"></a>

### *property* DirectionalElectricFieldIntensity.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.LoadStep"></a>

### *property* DirectionalElectricFieldIntensity.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalElectricFieldIntensity.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalElectricFieldIntensity.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalElectricFieldIntensity.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalElectricFieldIntensity.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.LoadStepNumber"></a>

### *property* DirectionalElectricFieldIntensity.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Location"></a>

### *property* DirectionalElectricFieldIntensity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Maximum"></a>

### *property* DirectionalElectricFieldIntensity.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.MaximumOccursOn"></a>

### *property* DirectionalElectricFieldIntensity.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.MaximumOfMaximumOverTime"></a>

### *property* DirectionalElectricFieldIntensity.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.MaximumOfMinimumOverTime"></a>

### *property* DirectionalElectricFieldIntensity.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Minimum"></a>

### *property* DirectionalElectricFieldIntensity.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.MinimumOccursOn"></a>

### *property* DirectionalElectricFieldIntensity.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.MinimumOfMaximumOverTime"></a>

### *property* DirectionalElectricFieldIntensity.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.MinimumOfMinimumOverTime"></a>

### *property* DirectionalElectricFieldIntensity.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.NamedSelections"></a>

### *property* DirectionalElectricFieldIntensity.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.NormalOrientation"></a>

### *property* DirectionalElectricFieldIntensity.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Path"></a>

### *property* DirectionalElectricFieldIntensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.PhaseIncrement"></a>

### *property* DirectionalElectricFieldIntensity.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.PlotData"></a>

### *property* DirectionalElectricFieldIntensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Properties"></a>

### *property* DirectionalElectricFieldIntensity.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.RPMSelection"></a>

### *property* DirectionalElectricFieldIntensity.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.ReportedFrequency"></a>

### *property* DirectionalElectricFieldIntensity.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.ScopingMethod"></a>

### *property* DirectionalElectricFieldIntensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.SetNumber"></a>

### *property* DirectionalElectricFieldIntensity.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.SolutionCombinationDriver"></a>

### *property* DirectionalElectricFieldIntensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.SolverComponentIDs"></a>

### *property* DirectionalElectricFieldIntensity.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Substep"></a>

### *property* DirectionalElectricFieldIntensity.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Suppressed"></a>

### *property* DirectionalElectricFieldIntensity.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Surface"></a>

### *property* DirectionalElectricFieldIntensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.SurfaceCoating"></a>

### *property* DirectionalElectricFieldIntensity.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.SweepingPhase"></a>

### *property* DirectionalElectricFieldIntensity.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Time"></a>

### *property* DirectionalElectricFieldIntensity.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalElectricFieldIntensity.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalElectricFieldIntensity.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalElectricFieldIntensity.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalElectricFieldIntensity.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Total"></a>

### *property* DirectionalElectricFieldIntensity.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.VisibleProperties"></a>

### *property* DirectionalElectricFieldIntensity.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalElectricFieldIntensity.Activate"></a>

### DirectionalElectricFieldIntensity.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.AddAlert"></a>

### DirectionalElectricFieldIntensity.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.AddComment"></a>

### DirectionalElectricFieldIntensity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.AddConvergence"></a>

### DirectionalElectricFieldIntensity.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.AddFigure"></a>

### DirectionalElectricFieldIntensity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.AddImage"></a>

### DirectionalElectricFieldIntensity.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.ClearGeneratedData"></a>

### DirectionalElectricFieldIntensity.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CopyTo"></a>

### DirectionalElectricFieldIntensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CreateParameter"></a>

### DirectionalElectricFieldIntensity.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.CreateResultsAtAllSets"></a>

### DirectionalElectricFieldIntensity.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Delete"></a>

### DirectionalElectricFieldIntensity.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.Duplicate"></a>

### DirectionalElectricFieldIntensity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.DuplicateWithoutResults"></a>

### DirectionalElectricFieldIntensity.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.EvaluateAllResults"></a>

### DirectionalElectricFieldIntensity.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.ExportAnimation"></a>

### DirectionalElectricFieldIntensity.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.ExportToTextFile"></a>

### DirectionalElectricFieldIntensity.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.FetchRemoteResults"></a>

### DirectionalElectricFieldIntensity.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.GetChildren"></a>

### DirectionalElectricFieldIntensity.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.GetParameter"></a>

### DirectionalElectricFieldIntensity.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.GroupAllSimilarChildren"></a>

### DirectionalElectricFieldIntensity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.GroupSimilarObjects"></a>

### DirectionalElectricFieldIntensity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.PromoteToNamedSelection"></a>

### DirectionalElectricFieldIntensity.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.PropertyByAPIName"></a>

### DirectionalElectricFieldIntensity.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.PropertyByName"></a>

### DirectionalElectricFieldIntensity.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.RemoveParameter"></a>

### DirectionalElectricFieldIntensity.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.RenameBasedOnDefinition"></a>

### DirectionalElectricFieldIntensity.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalElectricFieldIntensity.RetrieveResult"></a>

### DirectionalElectricFieldIntensity.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

