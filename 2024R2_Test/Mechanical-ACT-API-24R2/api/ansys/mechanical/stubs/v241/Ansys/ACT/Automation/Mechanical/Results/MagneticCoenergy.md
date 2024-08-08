# `MagneticCoenergy`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.MagneticCoenergy

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MagneticCoenergy.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#id0)                                                                   | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`PlotData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Path)                                                           | Path property.                                                         |
| [`Surface`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#MagneticCoenergy.WaterfallPanelShowTextOnMosaic)                                                                                         | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#id0)                                                                   | Gets the internal object. For advanced usage only.                     |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="MagneticCoenergy.InternalObject"></a>

### *property* MagneticCoenergy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.DataModelObjectCategory"></a>

### *property* MagneticCoenergy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.PlotData"></a>

### *property* MagneticCoenergy.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Location"></a>

### *property* MagneticCoenergy.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.TimeForMinimumOfMinimumValues"></a>

### *property* MagneticCoenergy.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.TimeForMinimumOfMaximumValues"></a>

### *property* MagneticCoenergy.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.LoadStepForMinimumOfMinimumValues"></a>

### *property* MagneticCoenergy.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.LoadStepForMinimumOfMaximumValues"></a>

### *property* MagneticCoenergy.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.TimeForMaximumOfMinimumValues"></a>

### *property* MagneticCoenergy.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.TimeForMaximumOfMaximumValues"></a>

### *property* MagneticCoenergy.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.LoadStepForMaximumOfMinimumValues"></a>

### *property* MagneticCoenergy.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.LoadStepForMaximumOfMaximumValues"></a>

### *property* MagneticCoenergy.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.IsSolved"></a>

### *property* MagneticCoenergy.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CoordinateSystem"></a>

### *property* MagneticCoenergy.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.ScopingMethod"></a>

### *property* MagneticCoenergy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.SetNumber"></a>

### *property* MagneticCoenergy.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CombinationNumber"></a>

### *property* MagneticCoenergy.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.SolutionCombinationDriver"></a>

### *property* MagneticCoenergy.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Path"></a>

### *property* MagneticCoenergy.Path *: [Ansys.ACT.Automation.Mechanical.Path](../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Surface"></a>

### *property* MagneticCoenergy.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.NamedSelections"></a>

### *property* MagneticCoenergy.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.WaterfallPanelShowTextOnMosaic"></a>

### *property* MagneticCoenergy.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CrackFrontNumber"></a>

### *property* MagneticCoenergy.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.GlobalIDs"></a>

### *property* MagneticCoenergy.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Identifier"></a>

### *property* MagneticCoenergy.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.IterationNumber"></a>

### *property* MagneticCoenergy.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.LoadStep"></a>

### *property* MagneticCoenergy.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.MaximumOccursOn"></a>

### *property* MagneticCoenergy.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.MinimumOccursOn"></a>

### *property* MagneticCoenergy.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.LoadStepNumber"></a>

### *property* MagneticCoenergy.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.SolverComponentIDs"></a>

### *property* MagneticCoenergy.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Substep"></a>

### *property* MagneticCoenergy.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Average"></a>

### *property* MagneticCoenergy.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Maximum"></a>

### *property* MagneticCoenergy.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.MaximumOfMaximumOverTime"></a>

### *property* MagneticCoenergy.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.MaximumOfMinimumOverTime"></a>

### *property* MagneticCoenergy.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Minimum"></a>

### *property* MagneticCoenergy.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.MinimumOfMaximumOverTime"></a>

### *property* MagneticCoenergy.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.MinimumOfMinimumOverTime"></a>

### *property* MagneticCoenergy.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Time"></a>

### *property* MagneticCoenergy.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.DisplayTime"></a>

### *property* MagneticCoenergy.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.GraphControlsXAxis"></a>

### *property* MagneticCoenergy.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.DisplayOption"></a>

### *property* MagneticCoenergy.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.DpfEvaluation"></a>

### *property* MagneticCoenergy.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.By"></a>

### *property* MagneticCoenergy.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.ItemType"></a>

### *property* MagneticCoenergy.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CalculateTimeHistory"></a>

### *property* MagneticCoenergy.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Suppressed"></a>

### *property* MagneticCoenergy.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Children"></a>

### *property* MagneticCoenergy.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Comments"></a>

### *property* MagneticCoenergy.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Figures"></a>

### *property* MagneticCoenergy.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Images"></a>

### *property* MagneticCoenergy.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MagneticCoenergy.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Properties"></a>

### *property* MagneticCoenergy.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.VisibleProperties"></a>

### *property* MagneticCoenergy.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MagneticCoenergy.ClearGeneratedData"></a>

### MagneticCoenergy.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.EvaluateAllResults"></a>

### MagneticCoenergy.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.FetchRemoteResults"></a>

### MagneticCoenergy.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.ExportToTextFile"></a>

### MagneticCoenergy.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.ExportAnimation"></a>

### MagneticCoenergy.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.DuplicateWithoutResults"></a>

### MagneticCoenergy.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CreateResultsAtAllSets"></a>

### MagneticCoenergy.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.PromoteToNamedSelection"></a>

### MagneticCoenergy.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CreateParameter"></a>

### MagneticCoenergy.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.AddAlert"></a>

### MagneticCoenergy.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.AddConvergence"></a>

### MagneticCoenergy.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.RenameBasedOnDefinition"></a>

### MagneticCoenergy.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Delete"></a>

### MagneticCoenergy.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.GetChildren"></a>

### MagneticCoenergy.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MagneticCoenergy.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.AddComment"></a>

### MagneticCoenergy.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.AddFigure"></a>

### MagneticCoenergy.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.AddImage"></a>

### MagneticCoenergy.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Activate"></a>

### MagneticCoenergy.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.CopyTo"></a>

### MagneticCoenergy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.Duplicate"></a>

### MagneticCoenergy.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.GroupAllSimilarChildren"></a>

### MagneticCoenergy.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.GroupSimilarObjects"></a>

### MagneticCoenergy.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.PropertyByName"></a>

### MagneticCoenergy.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.PropertyByAPIName"></a>

### MagneticCoenergy.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.GetParameter"></a>

### MagneticCoenergy.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticCoenergy.RemoveParameter"></a>

### MagneticCoenergy.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

