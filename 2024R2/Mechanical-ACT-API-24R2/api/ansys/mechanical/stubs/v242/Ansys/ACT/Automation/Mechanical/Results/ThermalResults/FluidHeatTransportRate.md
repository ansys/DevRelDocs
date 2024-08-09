# `FluidHeatTransportRate`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.FluidHeatTransportRate

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FluidHeatTransportRate.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FluidHeatTransportRate.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#FluidHeatTransportRate.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FluidHeatTransportRate.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FluidHeatTransportRate.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FluidHeatTransportRate.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FluidHeatTransportRate.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FluidHeatTransportRate.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FluidHeatTransportRate.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FluidHeatTransportRate.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FluidHeatTransportRate.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FluidHeatTransportRate.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FluidHeatTransportRate.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FluidHeatTransportRate.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FluidHeatTransportRate.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FluidHeatTransportRate.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FluidHeatTransportRate.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FluidHeatTransportRate.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FluidHeatTransportRate.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FluidHeatTransportRate.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FluidHeatTransportRate.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluidHeatTransportRate.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FluidHeatTransportRate.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FluidHeatTransportRate.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FluidHeatTransportRate.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FluidHeatTransportRate.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                         | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#FluidHeatTransportRate.DataModelObjectCategory)                     | Gets the current DataModelObject's category.                           |
| [`Layer`](#FluidHeatTransportRate.Layer)                                                         | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#FluidHeatTransportRate.ThermalResultType)                                 | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#FluidHeatTransportRate.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`Position`](#FluidHeatTransportRate.Position)                                                   | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#FluidHeatTransportRate.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#FluidHeatTransportRate.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#FluidHeatTransportRate.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FluidHeatTransportRate.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FluidHeatTransportRate.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FluidHeatTransportRate.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FluidHeatTransportRate.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FluidHeatTransportRate.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FluidHeatTransportRate.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FluidHeatTransportRate.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FluidHeatTransportRate.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FluidHeatTransportRate.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#FluidHeatTransportRate.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FluidHeatTransportRate.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FluidHeatTransportRate.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FluidHeatTransportRate.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FluidHeatTransportRate.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#FluidHeatTransportRate.Path)                                                           | Path property.                                                         |
| [`Surface`](#FluidHeatTransportRate.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#FluidHeatTransportRate.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#FluidHeatTransportRate.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#FluidHeatTransportRate.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#FluidHeatTransportRate.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FluidHeatTransportRate.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FluidHeatTransportRate.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FluidHeatTransportRate.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#FluidHeatTransportRate.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FluidHeatTransportRate.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FluidHeatTransportRate.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FluidHeatTransportRate.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FluidHeatTransportRate.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FluidHeatTransportRate.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#FluidHeatTransportRate.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#FluidHeatTransportRate.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FluidHeatTransportRate.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FluidHeatTransportRate.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FluidHeatTransportRate.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FluidHeatTransportRate.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FluidHeatTransportRate.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FluidHeatTransportRate.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#FluidHeatTransportRate.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#FluidHeatTransportRate.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FluidHeatTransportRate.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FluidHeatTransportRate.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FluidHeatTransportRate.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#FluidHeatTransportRate.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FluidHeatTransportRate.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FluidHeatTransportRate.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#FluidHeatTransportRate.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#FluidHeatTransportRate.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#FluidHeatTransportRate.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#FluidHeatTransportRate.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                         | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FluidHeatTransportRate.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FluidHeatTransportRate.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="FluidHeatTransportRate.InternalObject"></a>

### *property* FluidHeatTransportRate.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.DataModelObjectCategory"></a>

### *property* FluidHeatTransportRate.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Layer"></a>

### *property* FluidHeatTransportRate.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.ThermalResultType"></a>

### *property* FluidHeatTransportRate.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.NormalOrientation"></a>

### *property* FluidHeatTransportRate.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Position"></a>

### *property* FluidHeatTransportRate.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.AverageAcrossBodies"></a>

### *property* FluidHeatTransportRate.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.PlotData"></a>

### *property* FluidHeatTransportRate.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Location"></a>

### *property* FluidHeatTransportRate.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.TimeForMinimumOfMinimumValues"></a>

### *property* FluidHeatTransportRate.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.TimeForMinimumOfMaximumValues"></a>

### *property* FluidHeatTransportRate.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.LoadStepForMinimumOfMinimumValues"></a>

### *property* FluidHeatTransportRate.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.LoadStepForMinimumOfMaximumValues"></a>

### *property* FluidHeatTransportRate.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.TimeForMaximumOfMinimumValues"></a>

### *property* FluidHeatTransportRate.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.TimeForMaximumOfMaximumValues"></a>

### *property* FluidHeatTransportRate.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.LoadStepForMaximumOfMinimumValues"></a>

### *property* FluidHeatTransportRate.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.LoadStepForMaximumOfMaximumValues"></a>

### *property* FluidHeatTransportRate.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.IsSolved"></a>

### *property* FluidHeatTransportRate.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CoordinateSystem"></a>

### *property* FluidHeatTransportRate.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.ScopingMethod"></a>

### *property* FluidHeatTransportRate.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.SetNumber"></a>

### *property* FluidHeatTransportRate.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CombinationNumber"></a>

### *property* FluidHeatTransportRate.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.SolutionCombinationDriver"></a>

### *property* FluidHeatTransportRate.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Path"></a>

### *property* FluidHeatTransportRate.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Surface"></a>

### *property* FluidHeatTransportRate.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.SurfaceCoating"></a>

### *property* FluidHeatTransportRate.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.NamedSelections"></a>

### *property* FluidHeatTransportRate.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.WaterfallShowTextOnMosaic"></a>

### *property* FluidHeatTransportRate.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CrackFrontNumber"></a>

### *property* FluidHeatTransportRate.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.GlobalIDs"></a>

### *property* FluidHeatTransportRate.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Identifier"></a>

### *property* FluidHeatTransportRate.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.IterationNumber"></a>

### *property* FluidHeatTransportRate.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.LoadStep"></a>

### *property* FluidHeatTransportRate.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.MaximumOccursOn"></a>

### *property* FluidHeatTransportRate.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.MinimumOccursOn"></a>

### *property* FluidHeatTransportRate.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.LoadStepNumber"></a>

### *property* FluidHeatTransportRate.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.SolverComponentIDs"></a>

### *property* FluidHeatTransportRate.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Substep"></a>

### *property* FluidHeatTransportRate.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Average"></a>

### *property* FluidHeatTransportRate.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Maximum"></a>

### *property* FluidHeatTransportRate.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

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

<a id="FluidHeatTransportRate.MinimumOfMaximumOverTime"></a>

### *property* FluidHeatTransportRate.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.MinimumOfMinimumOverTime"></a>

### *property* FluidHeatTransportRate.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Time"></a>

### *property* FluidHeatTransportRate.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.DisplayTime"></a>

### *property* FluidHeatTransportRate.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.GraphControlsXAxis"></a>

### *property* FluidHeatTransportRate.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.DisplayOption"></a>

### *property* FluidHeatTransportRate.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.DpfEvaluation"></a>

### *property* FluidHeatTransportRate.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.By"></a>

### *property* FluidHeatTransportRate.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.ItemType"></a>

### *property* FluidHeatTransportRate.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CalculateTimeHistory"></a>

### *property* FluidHeatTransportRate.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Suppressed"></a>

### *property* FluidHeatTransportRate.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Children"></a>

### *property* FluidHeatTransportRate.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Comments"></a>

### *property* FluidHeatTransportRate.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Figures"></a>

### *property* FluidHeatTransportRate.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Images"></a>

### *property* FluidHeatTransportRate.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FluidHeatTransportRate.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Properties"></a>

### *property* FluidHeatTransportRate.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.VisibleProperties"></a>

### *property* FluidHeatTransportRate.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluidHeatTransportRate.ClearGeneratedData"></a>

### FluidHeatTransportRate.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.EvaluateAllResults"></a>

### FluidHeatTransportRate.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.FetchRemoteResults"></a>

### FluidHeatTransportRate.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.ExportToTextFile"></a>

### FluidHeatTransportRate.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.ExportAnimation"></a>

### FluidHeatTransportRate.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.DuplicateWithoutResults"></a>

### FluidHeatTransportRate.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CreateResultsAtAllSets"></a>

### FluidHeatTransportRate.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.PromoteToNamedSelection"></a>

### FluidHeatTransportRate.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CreateParameter"></a>

### FluidHeatTransportRate.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.AddAlert"></a>

### FluidHeatTransportRate.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.AddConvergence"></a>

### FluidHeatTransportRate.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.RenameBasedOnDefinition"></a>

### FluidHeatTransportRate.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Delete"></a>

### FluidHeatTransportRate.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.GetChildren"></a>

### FluidHeatTransportRate.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FluidHeatTransportRate.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.AddComment"></a>

### FluidHeatTransportRate.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.AddFigure"></a>

### FluidHeatTransportRate.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.AddImage"></a>

### FluidHeatTransportRate.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Activate"></a>

### FluidHeatTransportRate.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.CopyTo"></a>

### FluidHeatTransportRate.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.Duplicate"></a>

### FluidHeatTransportRate.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.GroupAllSimilarChildren"></a>

### FluidHeatTransportRate.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.GroupSimilarObjects"></a>

### FluidHeatTransportRate.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.PropertyByName"></a>

### FluidHeatTransportRate.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.PropertyByAPIName"></a>

### FluidHeatTransportRate.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.GetParameter"></a>

### FluidHeatTransportRate.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidHeatTransportRate.RemoveParameter"></a>

### FluidHeatTransportRate.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

