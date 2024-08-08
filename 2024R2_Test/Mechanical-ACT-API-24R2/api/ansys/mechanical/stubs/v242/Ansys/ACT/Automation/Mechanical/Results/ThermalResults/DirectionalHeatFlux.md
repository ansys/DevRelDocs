# `DirectionalHeatFlux`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.DirectionalHeatFlux

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DirectionalHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#DirectionalHeatFlux.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DirectionalHeatFlux.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalHeatFlux.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalHeatFlux.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalHeatFlux.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalHeatFlux.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalHeatFlux.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalHeatFlux.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalHeatFlux.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalHeatFlux.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalHeatFlux.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalHeatFlux.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalHeatFlux.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalHeatFlux.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalHeatFlux.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalHeatFlux.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalHeatFlux.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalHeatFlux.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalHeatFlux.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalHeatFlux.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalHeatFlux.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalHeatFlux.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalHeatFlux.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalHeatFlux.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalHeatFlux.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`Ply`](#DirectionalHeatFlux.Ply)                                                             | Gets or sets the Ply selection.                                        |
| [`InternalObject`](#id0)                                                                      | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#DirectionalHeatFlux.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`Layer`](#DirectionalHeatFlux.Layer)                                                         | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#DirectionalHeatFlux.ThermalResultType)                                 | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#DirectionalHeatFlux.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`Position`](#DirectionalHeatFlux.Position)                                                   | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#DirectionalHeatFlux.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#DirectionalHeatFlux.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#DirectionalHeatFlux.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalHeatFlux.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalHeatFlux.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalHeatFlux.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalHeatFlux.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalHeatFlux.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalHeatFlux.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalHeatFlux.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalHeatFlux.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalHeatFlux.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#DirectionalHeatFlux.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalHeatFlux.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalHeatFlux.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalHeatFlux.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalHeatFlux.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#DirectionalHeatFlux.Path)                                                           | Path property.                                                         |
| [`Surface`](#DirectionalHeatFlux.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#DirectionalHeatFlux.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#DirectionalHeatFlux.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#DirectionalHeatFlux.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#DirectionalHeatFlux.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalHeatFlux.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalHeatFlux.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalHeatFlux.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalHeatFlux.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalHeatFlux.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalHeatFlux.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalHeatFlux.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalHeatFlux.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalHeatFlux.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#DirectionalHeatFlux.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#DirectionalHeatFlux.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalHeatFlux.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalHeatFlux.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalHeatFlux.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalHeatFlux.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalHeatFlux.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalHeatFlux.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalHeatFlux.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#DirectionalHeatFlux.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalHeatFlux.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalHeatFlux.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalHeatFlux.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalHeatFlux.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalHeatFlux.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalHeatFlux.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalHeatFlux.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#DirectionalHeatFlux.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalHeatFlux.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalHeatFlux.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                      | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalHeatFlux.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalHeatFlux.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="DirectionalHeatFlux.Ply"></a>

### *property* DirectionalHeatFlux.Ply *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.AnalysisPly](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/AnalysisPly.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisPly)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Ply selection.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.InternalObject"></a>

### *property* DirectionalHeatFlux.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.DataModelObjectCategory"></a>

### *property* DirectionalHeatFlux.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Layer"></a>

### *property* DirectionalHeatFlux.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.ThermalResultType"></a>

### *property* DirectionalHeatFlux.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.NormalOrientation"></a>

### *property* DirectionalHeatFlux.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Position"></a>

### *property* DirectionalHeatFlux.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.AverageAcrossBodies"></a>

### *property* DirectionalHeatFlux.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.PlotData"></a>

### *property* DirectionalHeatFlux.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Location"></a>

### *property* DirectionalHeatFlux.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalHeatFlux.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalHeatFlux.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalHeatFlux.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalHeatFlux.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalHeatFlux.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalHeatFlux.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalHeatFlux.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalHeatFlux.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.IsSolved"></a>

### *property* DirectionalHeatFlux.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CoordinateSystem"></a>

### *property* DirectionalHeatFlux.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.ScopingMethod"></a>

### *property* DirectionalHeatFlux.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.SetNumber"></a>

### *property* DirectionalHeatFlux.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CombinationNumber"></a>

### *property* DirectionalHeatFlux.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.SolutionCombinationDriver"></a>

### *property* DirectionalHeatFlux.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Path"></a>

### *property* DirectionalHeatFlux.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Surface"></a>

### *property* DirectionalHeatFlux.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.SurfaceCoating"></a>

### *property* DirectionalHeatFlux.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.NamedSelections"></a>

### *property* DirectionalHeatFlux.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.WaterfallShowTextOnMosaic"></a>

### *property* DirectionalHeatFlux.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CrackFrontNumber"></a>

### *property* DirectionalHeatFlux.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.GlobalIDs"></a>

### *property* DirectionalHeatFlux.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Identifier"></a>

### *property* DirectionalHeatFlux.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.IterationNumber"></a>

### *property* DirectionalHeatFlux.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.LoadStep"></a>

### *property* DirectionalHeatFlux.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.MaximumOccursOn"></a>

### *property* DirectionalHeatFlux.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.MinimumOccursOn"></a>

### *property* DirectionalHeatFlux.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.LoadStepNumber"></a>

### *property* DirectionalHeatFlux.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.SolverComponentIDs"></a>

### *property* DirectionalHeatFlux.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Substep"></a>

### *property* DirectionalHeatFlux.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Average"></a>

### *property* DirectionalHeatFlux.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Maximum"></a>

### *property* DirectionalHeatFlux.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

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

<a id="DirectionalHeatFlux.MinimumOfMaximumOverTime"></a>

### *property* DirectionalHeatFlux.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.MinimumOfMinimumOverTime"></a>

### *property* DirectionalHeatFlux.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Time"></a>

### *property* DirectionalHeatFlux.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.DisplayTime"></a>

### *property* DirectionalHeatFlux.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.GraphControlsXAxis"></a>

### *property* DirectionalHeatFlux.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.DisplayOption"></a>

### *property* DirectionalHeatFlux.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.DpfEvaluation"></a>

### *property* DirectionalHeatFlux.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.By"></a>

### *property* DirectionalHeatFlux.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.ItemType"></a>

### *property* DirectionalHeatFlux.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CalculateTimeHistory"></a>

### *property* DirectionalHeatFlux.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Suppressed"></a>

### *property* DirectionalHeatFlux.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Children"></a>

### *property* DirectionalHeatFlux.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Comments"></a>

### *property* DirectionalHeatFlux.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Figures"></a>

### *property* DirectionalHeatFlux.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Images"></a>

### *property* DirectionalHeatFlux.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalHeatFlux.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Properties"></a>

### *property* DirectionalHeatFlux.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.VisibleProperties"></a>

### *property* DirectionalHeatFlux.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalHeatFlux.ClearGeneratedData"></a>

### DirectionalHeatFlux.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.EvaluateAllResults"></a>

### DirectionalHeatFlux.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.FetchRemoteResults"></a>

### DirectionalHeatFlux.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.ExportToTextFile"></a>

### DirectionalHeatFlux.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.ExportAnimation"></a>

### DirectionalHeatFlux.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.DuplicateWithoutResults"></a>

### DirectionalHeatFlux.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CreateResultsAtAllSets"></a>

### DirectionalHeatFlux.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.PromoteToNamedSelection"></a>

### DirectionalHeatFlux.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CreateParameter"></a>

### DirectionalHeatFlux.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.AddAlert"></a>

### DirectionalHeatFlux.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.AddConvergence"></a>

### DirectionalHeatFlux.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.RenameBasedOnDefinition"></a>

### DirectionalHeatFlux.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Delete"></a>

### DirectionalHeatFlux.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.GetChildren"></a>

### DirectionalHeatFlux.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalHeatFlux.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.AddComment"></a>

### DirectionalHeatFlux.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.AddFigure"></a>

### DirectionalHeatFlux.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.AddImage"></a>

### DirectionalHeatFlux.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Activate"></a>

### DirectionalHeatFlux.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.CopyTo"></a>

### DirectionalHeatFlux.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.Duplicate"></a>

### DirectionalHeatFlux.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.GroupAllSimilarChildren"></a>

### DirectionalHeatFlux.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.GroupSimilarObjects"></a>

### DirectionalHeatFlux.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.PropertyByName"></a>

### DirectionalHeatFlux.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.PropertyByAPIName"></a>

### DirectionalHeatFlux.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.GetParameter"></a>

### DirectionalHeatFlux.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalHeatFlux.RemoveParameter"></a>

### DirectionalHeatFlux.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

