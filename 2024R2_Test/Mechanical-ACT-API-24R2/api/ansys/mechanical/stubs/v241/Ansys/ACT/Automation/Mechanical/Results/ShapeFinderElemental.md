# `ShapeFinderElemental`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ShapeFinderElemental

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ShapeFinderElemental.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#id0)                                                                       | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.DataModelObjectCategory)                     | Gets the current DataModelObject's category.                           |
| [`PlotData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#ShapeFinderElemental.WaterfallPanelShowTextOnMosaic)                                                                                             | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#id0)                                                                       | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="ShapeFinderElemental.InternalObject"></a>

### *property* ShapeFinderElemental.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.DataModelObjectCategory"></a>

### *property* ShapeFinderElemental.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.PlotData"></a>

### *property* ShapeFinderElemental.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Location"></a>

### *property* ShapeFinderElemental.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.TimeForMinimumOfMinimumValues"></a>

### *property* ShapeFinderElemental.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.TimeForMinimumOfMaximumValues"></a>

### *property* ShapeFinderElemental.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.LoadStepForMinimumOfMinimumValues"></a>

### *property* ShapeFinderElemental.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.LoadStepForMinimumOfMaximumValues"></a>

### *property* ShapeFinderElemental.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.TimeForMaximumOfMinimumValues"></a>

### *property* ShapeFinderElemental.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.TimeForMaximumOfMaximumValues"></a>

### *property* ShapeFinderElemental.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.LoadStepForMaximumOfMinimumValues"></a>

### *property* ShapeFinderElemental.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.LoadStepForMaximumOfMaximumValues"></a>

### *property* ShapeFinderElemental.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.IsSolved"></a>

### *property* ShapeFinderElemental.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CoordinateSystem"></a>

### *property* ShapeFinderElemental.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.ScopingMethod"></a>

### *property* ShapeFinderElemental.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.SetNumber"></a>

### *property* ShapeFinderElemental.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CombinationNumber"></a>

### *property* ShapeFinderElemental.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.SolutionCombinationDriver"></a>

### *property* ShapeFinderElemental.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Path"></a>

### *property* ShapeFinderElemental.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Surface"></a>

### *property* ShapeFinderElemental.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.NamedSelections"></a>

### *property* ShapeFinderElemental.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.WaterfallPanelShowTextOnMosaic"></a>

### *property* ShapeFinderElemental.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CrackFrontNumber"></a>

### *property* ShapeFinderElemental.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.GlobalIDs"></a>

### *property* ShapeFinderElemental.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Identifier"></a>

### *property* ShapeFinderElemental.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.IterationNumber"></a>

### *property* ShapeFinderElemental.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.LoadStep"></a>

### *property* ShapeFinderElemental.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.MaximumOccursOn"></a>

### *property* ShapeFinderElemental.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.MinimumOccursOn"></a>

### *property* ShapeFinderElemental.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.LoadStepNumber"></a>

### *property* ShapeFinderElemental.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.SolverComponentIDs"></a>

### *property* ShapeFinderElemental.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Substep"></a>

### *property* ShapeFinderElemental.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Average"></a>

### *property* ShapeFinderElemental.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Maximum"></a>

### *property* ShapeFinderElemental.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.MaximumOfMaximumOverTime"></a>

### *property* ShapeFinderElemental.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.MaximumOfMinimumOverTime"></a>

### *property* ShapeFinderElemental.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Minimum"></a>

### *property* ShapeFinderElemental.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.MinimumOfMaximumOverTime"></a>

### *property* ShapeFinderElemental.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.MinimumOfMinimumOverTime"></a>

### *property* ShapeFinderElemental.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Time"></a>

### *property* ShapeFinderElemental.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.DisplayTime"></a>

### *property* ShapeFinderElemental.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.GraphControlsXAxis"></a>

### *property* ShapeFinderElemental.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.DisplayOption"></a>

### *property* ShapeFinderElemental.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.DpfEvaluation"></a>

### *property* ShapeFinderElemental.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.By"></a>

### *property* ShapeFinderElemental.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.ItemType"></a>

### *property* ShapeFinderElemental.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CalculateTimeHistory"></a>

### *property* ShapeFinderElemental.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Suppressed"></a>

### *property* ShapeFinderElemental.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Children"></a>

### *property* ShapeFinderElemental.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Comments"></a>

### *property* ShapeFinderElemental.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Figures"></a>

### *property* ShapeFinderElemental.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Images"></a>

### *property* ShapeFinderElemental.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ShapeFinderElemental.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Properties"></a>

### *property* ShapeFinderElemental.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.VisibleProperties"></a>

### *property* ShapeFinderElemental.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ShapeFinderElemental.ClearGeneratedData"></a>

### ShapeFinderElemental.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.EvaluateAllResults"></a>

### ShapeFinderElemental.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.FetchRemoteResults"></a>

### ShapeFinderElemental.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.ExportToTextFile"></a>

### ShapeFinderElemental.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.ExportAnimation"></a>

### ShapeFinderElemental.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.DuplicateWithoutResults"></a>

### ShapeFinderElemental.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CreateResultsAtAllSets"></a>

### ShapeFinderElemental.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.PromoteToNamedSelection"></a>

### ShapeFinderElemental.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CreateParameter"></a>

### ShapeFinderElemental.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.AddAlert"></a>

### ShapeFinderElemental.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.AddConvergence"></a>

### ShapeFinderElemental.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.RenameBasedOnDefinition"></a>

### ShapeFinderElemental.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Delete"></a>

### ShapeFinderElemental.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.GetChildren"></a>

### ShapeFinderElemental.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ShapeFinderElemental.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.AddComment"></a>

### ShapeFinderElemental.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.AddFigure"></a>

### ShapeFinderElemental.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.AddImage"></a>

### ShapeFinderElemental.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Activate"></a>

### ShapeFinderElemental.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.CopyTo"></a>

### ShapeFinderElemental.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.Duplicate"></a>

### ShapeFinderElemental.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.GroupAllSimilarChildren"></a>

### ShapeFinderElemental.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.GroupSimilarObjects"></a>

### ShapeFinderElemental.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.PropertyByName"></a>

### ShapeFinderElemental.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.PropertyByAPIName"></a>

### ShapeFinderElemental.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.GetParameter"></a>

### ShapeFinderElemental.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShapeFinderElemental.RemoveParameter"></a>

### ShapeFinderElemental.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

