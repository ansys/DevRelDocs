# `MagneticDirectionalForces`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.MagneticDirectionalForces

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MagneticDirectionalForces.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MagneticDirectionalForces.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#MagneticDirectionalForces.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#MagneticDirectionalForces.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#MagneticDirectionalForces.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#MagneticDirectionalForces.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#MagneticDirectionalForces.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#MagneticDirectionalForces.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#MagneticDirectionalForces.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#MagneticDirectionalForces.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#MagneticDirectionalForces.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#MagneticDirectionalForces.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#MagneticDirectionalForces.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MagneticDirectionalForces.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MagneticDirectionalForces.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MagneticDirectionalForces.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MagneticDirectionalForces.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MagneticDirectionalForces.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MagneticDirectionalForces.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MagneticDirectionalForces.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MagneticDirectionalForces.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MagneticDirectionalForces.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MagneticDirectionalForces.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MagneticDirectionalForces.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#MagneticDirectionalForces.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MagneticDirectionalForces.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                            | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#MagneticDirectionalForces.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](#MagneticDirectionalForces.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`ElectromagneticResultType`](#MagneticDirectionalForces.ElectromagneticResultType)                 | Gets or sets the ElectromagneticResultType.                            |
| [`AverageAcrossBodies`](#MagneticDirectionalForces.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#MagneticDirectionalForces.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#MagneticDirectionalForces.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#MagneticDirectionalForces.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#MagneticDirectionalForces.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#MagneticDirectionalForces.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#MagneticDirectionalForces.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#MagneticDirectionalForces.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#MagneticDirectionalForces.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#MagneticDirectionalForces.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#MagneticDirectionalForces.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#MagneticDirectionalForces.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#MagneticDirectionalForces.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#MagneticDirectionalForces.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#MagneticDirectionalForces.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#MagneticDirectionalForces.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#MagneticDirectionalForces.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#MagneticDirectionalForces.Path)                                                           | Path property.                                                         |
| [`Surface`](#MagneticDirectionalForces.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#MagneticDirectionalForces.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#MagneticDirectionalForces.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#MagneticDirectionalForces.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#MagneticDirectionalForces.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#MagneticDirectionalForces.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#MagneticDirectionalForces.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#MagneticDirectionalForces.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#MagneticDirectionalForces.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#MagneticDirectionalForces.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#MagneticDirectionalForces.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#MagneticDirectionalForces.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#MagneticDirectionalForces.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#MagneticDirectionalForces.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#MagneticDirectionalForces.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#MagneticDirectionalForces.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#MagneticDirectionalForces.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#MagneticDirectionalForces.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#MagneticDirectionalForces.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#MagneticDirectionalForces.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#MagneticDirectionalForces.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#MagneticDirectionalForces.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#MagneticDirectionalForces.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#MagneticDirectionalForces.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#MagneticDirectionalForces.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#MagneticDirectionalForces.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#MagneticDirectionalForces.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#MagneticDirectionalForces.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#MagneticDirectionalForces.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#MagneticDirectionalForces.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#MagneticDirectionalForces.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#MagneticDirectionalForces.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#MagneticDirectionalForces.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#MagneticDirectionalForces.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                            | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#MagneticDirectionalForces.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#MagneticDirectionalForces.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="MagneticDirectionalForces.InternalObject"></a>

### *property* MagneticDirectionalForces.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.NormalOrientation"></a>

### *property* MagneticDirectionalForces.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.DataModelObjectCategory"></a>

### *property* MagneticDirectionalForces.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.ElectromagneticResultType"></a>

### *property* MagneticDirectionalForces.ElectromagneticResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticResultType.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.AverageAcrossBodies"></a>

### *property* MagneticDirectionalForces.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.PlotData"></a>

### *property* MagneticDirectionalForces.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Location"></a>

### *property* MagneticDirectionalForces.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.TimeForMinimumOfMinimumValues"></a>

### *property* MagneticDirectionalForces.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.TimeForMinimumOfMaximumValues"></a>

### *property* MagneticDirectionalForces.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.LoadStepForMinimumOfMinimumValues"></a>

### *property* MagneticDirectionalForces.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.LoadStepForMinimumOfMaximumValues"></a>

### *property* MagneticDirectionalForces.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.TimeForMaximumOfMinimumValues"></a>

### *property* MagneticDirectionalForces.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.TimeForMaximumOfMaximumValues"></a>

### *property* MagneticDirectionalForces.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.LoadStepForMaximumOfMinimumValues"></a>

### *property* MagneticDirectionalForces.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.LoadStepForMaximumOfMaximumValues"></a>

### *property* MagneticDirectionalForces.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.IsSolved"></a>

### *property* MagneticDirectionalForces.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.CoordinateSystem"></a>

### *property* MagneticDirectionalForces.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.ScopingMethod"></a>

### *property* MagneticDirectionalForces.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.SetNumber"></a>

### *property* MagneticDirectionalForces.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.CombinationNumber"></a>

### *property* MagneticDirectionalForces.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.SolutionCombinationDriver"></a>

### *property* MagneticDirectionalForces.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Path"></a>

### *property* MagneticDirectionalForces.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Surface"></a>

### *property* MagneticDirectionalForces.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.SurfaceCoating"></a>

### *property* MagneticDirectionalForces.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.NamedSelections"></a>

### *property* MagneticDirectionalForces.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.WaterfallShowTextOnMosaic"></a>

### *property* MagneticDirectionalForces.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.CrackFrontNumber"></a>

### *property* MagneticDirectionalForces.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.GlobalIDs"></a>

### *property* MagneticDirectionalForces.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Identifier"></a>

### *property* MagneticDirectionalForces.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.IterationNumber"></a>

### *property* MagneticDirectionalForces.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.LoadStep"></a>

### *property* MagneticDirectionalForces.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.MaximumOccursOn"></a>

### *property* MagneticDirectionalForces.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.MinimumOccursOn"></a>

### *property* MagneticDirectionalForces.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.LoadStepNumber"></a>

### *property* MagneticDirectionalForces.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.SolverComponentIDs"></a>

### *property* MagneticDirectionalForces.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Substep"></a>

### *property* MagneticDirectionalForces.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Average"></a>

### *property* MagneticDirectionalForces.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Maximum"></a>

### *property* MagneticDirectionalForces.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.MaximumOfMaximumOverTime"></a>

### *property* MagneticDirectionalForces.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.MaximumOfMinimumOverTime"></a>

### *property* MagneticDirectionalForces.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Minimum"></a>

### *property* MagneticDirectionalForces.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.MinimumOfMaximumOverTime"></a>

### *property* MagneticDirectionalForces.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.MinimumOfMinimumOverTime"></a>

### *property* MagneticDirectionalForces.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Time"></a>

### *property* MagneticDirectionalForces.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.DisplayTime"></a>

### *property* MagneticDirectionalForces.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.GraphControlsXAxis"></a>

### *property* MagneticDirectionalForces.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.DisplayOption"></a>

### *property* MagneticDirectionalForces.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.DpfEvaluation"></a>

### *property* MagneticDirectionalForces.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.By"></a>

### *property* MagneticDirectionalForces.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.ItemType"></a>

### *property* MagneticDirectionalForces.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.CalculateTimeHistory"></a>

### *property* MagneticDirectionalForces.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Suppressed"></a>

### *property* MagneticDirectionalForces.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Children"></a>

### *property* MagneticDirectionalForces.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Comments"></a>

### *property* MagneticDirectionalForces.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Figures"></a>

### *property* MagneticDirectionalForces.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Images"></a>

### *property* MagneticDirectionalForces.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MagneticDirectionalForces.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Properties"></a>

### *property* MagneticDirectionalForces.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.VisibleProperties"></a>

### *property* MagneticDirectionalForces.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MagneticDirectionalForces.ClearGeneratedData"></a>

### MagneticDirectionalForces.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.EvaluateAllResults"></a>

### MagneticDirectionalForces.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.FetchRemoteResults"></a>

### MagneticDirectionalForces.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.ExportToTextFile"></a>

### MagneticDirectionalForces.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.ExportAnimation"></a>

### MagneticDirectionalForces.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.DuplicateWithoutResults"></a>

### MagneticDirectionalForces.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.CreateResultsAtAllSets"></a>

### MagneticDirectionalForces.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.PromoteToNamedSelection"></a>

### MagneticDirectionalForces.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.CreateParameter"></a>

### MagneticDirectionalForces.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.AddAlert"></a>

### MagneticDirectionalForces.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.AddConvergence"></a>

### MagneticDirectionalForces.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.RenameBasedOnDefinition"></a>

### MagneticDirectionalForces.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Delete"></a>

### MagneticDirectionalForces.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.GetChildren"></a>

### MagneticDirectionalForces.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MagneticDirectionalForces.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.AddComment"></a>

### MagneticDirectionalForces.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.AddFigure"></a>

### MagneticDirectionalForces.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.AddImage"></a>

### MagneticDirectionalForces.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Activate"></a>

### MagneticDirectionalForces.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.CopyTo"></a>

### MagneticDirectionalForces.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.Duplicate"></a>

### MagneticDirectionalForces.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.GroupAllSimilarChildren"></a>

### MagneticDirectionalForces.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.GroupSimilarObjects"></a>

### MagneticDirectionalForces.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.PropertyByName"></a>

### MagneticDirectionalForces.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.PropertyByAPIName"></a>

### MagneticDirectionalForces.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.GetParameter"></a>

### MagneticDirectionalForces.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticDirectionalForces.RemoveParameter"></a>

### MagneticDirectionalForces.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

