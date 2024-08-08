# `ElementalStrainEnergy`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.EnergyResults.ElementalStrainEnergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElementalStrainEnergy.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ElementalStrainEnergy.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ElementalStrainEnergy.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#ElementalStrainEnergy.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#ElementalStrainEnergy.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#ElementalStrainEnergy.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#ElementalStrainEnergy.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#ElementalStrainEnergy.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#ElementalStrainEnergy.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#ElementalStrainEnergy.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#ElementalStrainEnergy.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#ElementalStrainEnergy.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#ElementalStrainEnergy.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ElementalStrainEnergy.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElementalStrainEnergy.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElementalStrainEnergy.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElementalStrainEnergy.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElementalStrainEnergy.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElementalStrainEnergy.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElementalStrainEnergy.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElementalStrainEnergy.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElementalStrainEnergy.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElementalStrainEnergy.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElementalStrainEnergy.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#ElementalStrainEnergy.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElementalStrainEnergy.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                        | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#ElementalStrainEnergy.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`PlotData`](#ElementalStrainEnergy.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#ElementalStrainEnergy.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#ElementalStrainEnergy.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ElementalStrainEnergy.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#ElementalStrainEnergy.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ElementalStrainEnergy.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#ElementalStrainEnergy.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#ElementalStrainEnergy.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#ElementalStrainEnergy.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#ElementalStrainEnergy.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#ElementalStrainEnergy.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#ElementalStrainEnergy.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#ElementalStrainEnergy.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ElementalStrainEnergy.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#ElementalStrainEnergy.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#ElementalStrainEnergy.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#ElementalStrainEnergy.Path)                                                           | Path property.                                                         |
| [`Surface`](#ElementalStrainEnergy.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#ElementalStrainEnergy.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#ElementalStrainEnergy.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#ElementalStrainEnergy.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#ElementalStrainEnergy.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#ElementalStrainEnergy.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#ElementalStrainEnergy.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#ElementalStrainEnergy.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#ElementalStrainEnergy.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#ElementalStrainEnergy.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#ElementalStrainEnergy.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#ElementalStrainEnergy.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#ElementalStrainEnergy.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ElementalStrainEnergy.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#ElementalStrainEnergy.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#ElementalStrainEnergy.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#ElementalStrainEnergy.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ElementalStrainEnergy.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ElementalStrainEnergy.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#ElementalStrainEnergy.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ElementalStrainEnergy.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#ElementalStrainEnergy.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#ElementalStrainEnergy.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#ElementalStrainEnergy.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#ElementalStrainEnergy.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#ElementalStrainEnergy.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#ElementalStrainEnergy.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#ElementalStrainEnergy.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#ElementalStrainEnergy.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#ElementalStrainEnergy.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#ElementalStrainEnergy.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#ElementalStrainEnergy.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#ElementalStrainEnergy.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#ElementalStrainEnergy.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                        | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ElementalStrainEnergy.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ElementalStrainEnergy.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="ElementalStrainEnergy.InternalObject"></a>

### *property* ElementalStrainEnergy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.DataModelObjectCategory"></a>

### *property* ElementalStrainEnergy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.PlotData"></a>

### *property* ElementalStrainEnergy.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Location"></a>

### *property* ElementalStrainEnergy.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.TimeForMinimumOfMinimumValues"></a>

### *property* ElementalStrainEnergy.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.TimeForMinimumOfMaximumValues"></a>

### *property* ElementalStrainEnergy.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.LoadStepForMinimumOfMinimumValues"></a>

### *property* ElementalStrainEnergy.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.LoadStepForMinimumOfMaximumValues"></a>

### *property* ElementalStrainEnergy.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.TimeForMaximumOfMinimumValues"></a>

### *property* ElementalStrainEnergy.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.TimeForMaximumOfMaximumValues"></a>

### *property* ElementalStrainEnergy.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.LoadStepForMaximumOfMinimumValues"></a>

### *property* ElementalStrainEnergy.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.LoadStepForMaximumOfMaximumValues"></a>

### *property* ElementalStrainEnergy.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.IsSolved"></a>

### *property* ElementalStrainEnergy.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CoordinateSystem"></a>

### *property* ElementalStrainEnergy.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.ScopingMethod"></a>

### *property* ElementalStrainEnergy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.SetNumber"></a>

### *property* ElementalStrainEnergy.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CombinationNumber"></a>

### *property* ElementalStrainEnergy.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.SolutionCombinationDriver"></a>

### *property* ElementalStrainEnergy.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Path"></a>

### *property* ElementalStrainEnergy.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Surface"></a>

### *property* ElementalStrainEnergy.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.SurfaceCoating"></a>

### *property* ElementalStrainEnergy.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.NamedSelections"></a>

### *property* ElementalStrainEnergy.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.WaterfallShowTextOnMosaic"></a>

### *property* ElementalStrainEnergy.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CrackFrontNumber"></a>

### *property* ElementalStrainEnergy.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.GlobalIDs"></a>

### *property* ElementalStrainEnergy.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Identifier"></a>

### *property* ElementalStrainEnergy.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.IterationNumber"></a>

### *property* ElementalStrainEnergy.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.LoadStep"></a>

### *property* ElementalStrainEnergy.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.MaximumOccursOn"></a>

### *property* ElementalStrainEnergy.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.MinimumOccursOn"></a>

### *property* ElementalStrainEnergy.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.LoadStepNumber"></a>

### *property* ElementalStrainEnergy.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.SolverComponentIDs"></a>

### *property* ElementalStrainEnergy.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Substep"></a>

### *property* ElementalStrainEnergy.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Average"></a>

### *property* ElementalStrainEnergy.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Maximum"></a>

### *property* ElementalStrainEnergy.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

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

<a id="ElementalStrainEnergy.MinimumOfMaximumOverTime"></a>

### *property* ElementalStrainEnergy.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.MinimumOfMinimumOverTime"></a>

### *property* ElementalStrainEnergy.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Time"></a>

### *property* ElementalStrainEnergy.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.DisplayTime"></a>

### *property* ElementalStrainEnergy.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.GraphControlsXAxis"></a>

### *property* ElementalStrainEnergy.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.DisplayOption"></a>

### *property* ElementalStrainEnergy.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.DpfEvaluation"></a>

### *property* ElementalStrainEnergy.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.By"></a>

### *property* ElementalStrainEnergy.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.ItemType"></a>

### *property* ElementalStrainEnergy.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CalculateTimeHistory"></a>

### *property* ElementalStrainEnergy.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Suppressed"></a>

### *property* ElementalStrainEnergy.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Children"></a>

### *property* ElementalStrainEnergy.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Comments"></a>

### *property* ElementalStrainEnergy.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Figures"></a>

### *property* ElementalStrainEnergy.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Images"></a>

### *property* ElementalStrainEnergy.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElementalStrainEnergy.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Properties"></a>

### *property* ElementalStrainEnergy.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.VisibleProperties"></a>

### *property* ElementalStrainEnergy.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementalStrainEnergy.ClearGeneratedData"></a>

### ElementalStrainEnergy.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.EvaluateAllResults"></a>

### ElementalStrainEnergy.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.FetchRemoteResults"></a>

### ElementalStrainEnergy.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.ExportToTextFile"></a>

### ElementalStrainEnergy.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.ExportAnimation"></a>

### ElementalStrainEnergy.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.DuplicateWithoutResults"></a>

### ElementalStrainEnergy.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CreateResultsAtAllSets"></a>

### ElementalStrainEnergy.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.PromoteToNamedSelection"></a>

### ElementalStrainEnergy.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CreateParameter"></a>

### ElementalStrainEnergy.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.AddAlert"></a>

### ElementalStrainEnergy.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.AddConvergence"></a>

### ElementalStrainEnergy.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.RenameBasedOnDefinition"></a>

### ElementalStrainEnergy.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Delete"></a>

### ElementalStrainEnergy.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.GetChildren"></a>

### ElementalStrainEnergy.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElementalStrainEnergy.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.AddComment"></a>

### ElementalStrainEnergy.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.AddFigure"></a>

### ElementalStrainEnergy.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.AddImage"></a>

### ElementalStrainEnergy.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Activate"></a>

### ElementalStrainEnergy.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.CopyTo"></a>

### ElementalStrainEnergy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.Duplicate"></a>

### ElementalStrainEnergy.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.GroupAllSimilarChildren"></a>

### ElementalStrainEnergy.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.GroupSimilarObjects"></a>

### ElementalStrainEnergy.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.PropertyByName"></a>

### ElementalStrainEnergy.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.PropertyByAPIName"></a>

### ElementalStrainEnergy.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.GetParameter"></a>

### ElementalStrainEnergy.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementalStrainEnergy.RemoveParameter"></a>

### ElementalStrainEnergy.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

