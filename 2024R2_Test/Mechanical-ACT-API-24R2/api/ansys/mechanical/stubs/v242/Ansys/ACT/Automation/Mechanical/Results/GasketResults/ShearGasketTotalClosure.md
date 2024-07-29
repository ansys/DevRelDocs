# `ShearGasketTotalClosure`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.GasketResults.ShearGasketTotalClosure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ShearGasketTotalClosure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ShearGasketTotalClosure.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#ShearGasketTotalClosure.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#ShearGasketTotalClosure.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#ShearGasketTotalClosure.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#ShearGasketTotalClosure.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#ShearGasketTotalClosure.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#ShearGasketTotalClosure.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#ShearGasketTotalClosure.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#ShearGasketTotalClosure.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#ShearGasketTotalClosure.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#ShearGasketTotalClosure.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#ShearGasketTotalClosure.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ShearGasketTotalClosure.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ShearGasketTotalClosure.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ShearGasketTotalClosure.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ShearGasketTotalClosure.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ShearGasketTotalClosure.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ShearGasketTotalClosure.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ShearGasketTotalClosure.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ShearGasketTotalClosure.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ShearGasketTotalClosure.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ShearGasketTotalClosure.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ShearGasketTotalClosure.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#ShearGasketTotalClosure.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ShearGasketTotalClosure.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                          | Gets the internal object. For advanced usage only.                     |
| [`ShearOrientation`](#ShearGasketTotalClosure.ShearOrientation)                                   | Gets or sets the ShearOrientation.                                     |
| [`DataModelObjectCategory`](#ShearGasketTotalClosure.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`GasketResultType`](#ShearGasketTotalClosure.GasketResultType)                                   | Gets or sets the GasketResultType.                                     |
| [`PlotData`](#ShearGasketTotalClosure.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#ShearGasketTotalClosure.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#ShearGasketTotalClosure.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#ShearGasketTotalClosure.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#ShearGasketTotalClosure.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#ShearGasketTotalClosure.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#ShearGasketTotalClosure.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#ShearGasketTotalClosure.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#ShearGasketTotalClosure.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#ShearGasketTotalClosure.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#ShearGasketTotalClosure.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#ShearGasketTotalClosure.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#ShearGasketTotalClosure.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#ShearGasketTotalClosure.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#ShearGasketTotalClosure.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#ShearGasketTotalClosure.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#ShearGasketTotalClosure.Path)                                                           | Path property.                                                         |
| [`Surface`](#ShearGasketTotalClosure.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#ShearGasketTotalClosure.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#ShearGasketTotalClosure.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#ShearGasketTotalClosure.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#ShearGasketTotalClosure.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#ShearGasketTotalClosure.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#ShearGasketTotalClosure.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#ShearGasketTotalClosure.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#ShearGasketTotalClosure.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#ShearGasketTotalClosure.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#ShearGasketTotalClosure.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#ShearGasketTotalClosure.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#ShearGasketTotalClosure.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#ShearGasketTotalClosure.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#ShearGasketTotalClosure.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#ShearGasketTotalClosure.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#ShearGasketTotalClosure.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#ShearGasketTotalClosure.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#ShearGasketTotalClosure.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#ShearGasketTotalClosure.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#ShearGasketTotalClosure.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#ShearGasketTotalClosure.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#ShearGasketTotalClosure.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#ShearGasketTotalClosure.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#ShearGasketTotalClosure.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#ShearGasketTotalClosure.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#ShearGasketTotalClosure.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#ShearGasketTotalClosure.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#ShearGasketTotalClosure.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#ShearGasketTotalClosure.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#ShearGasketTotalClosure.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#ShearGasketTotalClosure.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#ShearGasketTotalClosure.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#ShearGasketTotalClosure.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                          | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#ShearGasketTotalClosure.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#ShearGasketTotalClosure.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="ShearGasketTotalClosure.InternalObject"></a>

### *property* ShearGasketTotalClosure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ShearOrientation"></a>

### *property* ShearGasketTotalClosure.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.DataModelObjectCategory"></a>

### *property* ShearGasketTotalClosure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GasketResultType"></a>

### *property* ShearGasketTotalClosure.GasketResultType *: [Ansys.Mechanical.DataModel.Enums.GasketResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GasketResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GasketResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GasketResultType.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.PlotData"></a>

### *property* ShearGasketTotalClosure.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Location"></a>

### *property* ShearGasketTotalClosure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.TimeForMinimumOfMinimumValues"></a>

### *property* ShearGasketTotalClosure.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.TimeForMinimumOfMaximumValues"></a>

### *property* ShearGasketTotalClosure.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.LoadStepForMinimumOfMinimumValues"></a>

### *property* ShearGasketTotalClosure.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.LoadStepForMinimumOfMaximumValues"></a>

### *property* ShearGasketTotalClosure.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.TimeForMaximumOfMinimumValues"></a>

### *property* ShearGasketTotalClosure.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.TimeForMaximumOfMaximumValues"></a>

### *property* ShearGasketTotalClosure.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.LoadStepForMaximumOfMinimumValues"></a>

### *property* ShearGasketTotalClosure.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.LoadStepForMaximumOfMaximumValues"></a>

### *property* ShearGasketTotalClosure.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.IsSolved"></a>

### *property* ShearGasketTotalClosure.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CoordinateSystem"></a>

### *property* ShearGasketTotalClosure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ScopingMethod"></a>

### *property* ShearGasketTotalClosure.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.SetNumber"></a>

### *property* ShearGasketTotalClosure.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CombinationNumber"></a>

### *property* ShearGasketTotalClosure.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.SolutionCombinationDriver"></a>

### *property* ShearGasketTotalClosure.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Path"></a>

### *property* ShearGasketTotalClosure.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Surface"></a>

### *property* ShearGasketTotalClosure.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.SurfaceCoating"></a>

### *property* ShearGasketTotalClosure.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.NamedSelections"></a>

### *property* ShearGasketTotalClosure.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.WaterfallShowTextOnMosaic"></a>

### *property* ShearGasketTotalClosure.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CrackFrontNumber"></a>

### *property* ShearGasketTotalClosure.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GlobalIDs"></a>

### *property* ShearGasketTotalClosure.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Identifier"></a>

### *property* ShearGasketTotalClosure.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.IterationNumber"></a>

### *property* ShearGasketTotalClosure.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.LoadStep"></a>

### *property* ShearGasketTotalClosure.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.MaximumOccursOn"></a>

### *property* ShearGasketTotalClosure.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.MinimumOccursOn"></a>

### *property* ShearGasketTotalClosure.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.LoadStepNumber"></a>

### *property* ShearGasketTotalClosure.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.SolverComponentIDs"></a>

### *property* ShearGasketTotalClosure.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Substep"></a>

### *property* ShearGasketTotalClosure.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Average"></a>

### *property* ShearGasketTotalClosure.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Maximum"></a>

### *property* ShearGasketTotalClosure.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.MaximumOfMaximumOverTime"></a>

### *property* ShearGasketTotalClosure.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.MaximumOfMinimumOverTime"></a>

### *property* ShearGasketTotalClosure.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Minimum"></a>

### *property* ShearGasketTotalClosure.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.MinimumOfMaximumOverTime"></a>

### *property* ShearGasketTotalClosure.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.MinimumOfMinimumOverTime"></a>

### *property* ShearGasketTotalClosure.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Time"></a>

### *property* ShearGasketTotalClosure.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.DisplayTime"></a>

### *property* ShearGasketTotalClosure.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GraphControlsXAxis"></a>

### *property* ShearGasketTotalClosure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.DisplayOption"></a>

### *property* ShearGasketTotalClosure.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.DpfEvaluation"></a>

### *property* ShearGasketTotalClosure.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.By"></a>

### *property* ShearGasketTotalClosure.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ItemType"></a>

### *property* ShearGasketTotalClosure.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CalculateTimeHistory"></a>

### *property* ShearGasketTotalClosure.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Suppressed"></a>

### *property* ShearGasketTotalClosure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Children"></a>

### *property* ShearGasketTotalClosure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Comments"></a>

### *property* ShearGasketTotalClosure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Figures"></a>

### *property* ShearGasketTotalClosure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Images"></a>

### *property* ShearGasketTotalClosure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ShearGasketTotalClosure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Properties"></a>

### *property* ShearGasketTotalClosure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.VisibleProperties"></a>

### *property* ShearGasketTotalClosure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ShearGasketTotalClosure.ClearGeneratedData"></a>

### ShearGasketTotalClosure.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.EvaluateAllResults"></a>

### ShearGasketTotalClosure.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.FetchRemoteResults"></a>

### ShearGasketTotalClosure.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ExportToTextFile"></a>

### ShearGasketTotalClosure.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.ExportAnimation"></a>

### ShearGasketTotalClosure.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.DuplicateWithoutResults"></a>

### ShearGasketTotalClosure.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CreateResultsAtAllSets"></a>

### ShearGasketTotalClosure.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.PromoteToNamedSelection"></a>

### ShearGasketTotalClosure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CreateParameter"></a>

### ShearGasketTotalClosure.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.AddAlert"></a>

### ShearGasketTotalClosure.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.AddConvergence"></a>

### ShearGasketTotalClosure.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.RenameBasedOnDefinition"></a>

### ShearGasketTotalClosure.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Delete"></a>

### ShearGasketTotalClosure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetChildren"></a>

### ShearGasketTotalClosure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ShearGasketTotalClosure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.AddComment"></a>

### ShearGasketTotalClosure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.AddFigure"></a>

### ShearGasketTotalClosure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.AddImage"></a>

### ShearGasketTotalClosure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Activate"></a>

### ShearGasketTotalClosure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.CopyTo"></a>

### ShearGasketTotalClosure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.Duplicate"></a>

### ShearGasketTotalClosure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GroupAllSimilarChildren"></a>

### ShearGasketTotalClosure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GroupSimilarObjects"></a>

### ShearGasketTotalClosure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.PropertyByName"></a>

### ShearGasketTotalClosure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.PropertyByAPIName"></a>

### ShearGasketTotalClosure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.GetParameter"></a>

### ShearGasketTotalClosure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ShearGasketTotalClosure.RemoveParameter"></a>

### ShearGasketTotalClosure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

