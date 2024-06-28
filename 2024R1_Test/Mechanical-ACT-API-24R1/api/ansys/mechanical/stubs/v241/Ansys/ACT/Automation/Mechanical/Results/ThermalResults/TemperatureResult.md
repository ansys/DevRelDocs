<!-- vale off -->

<a id="temperatureresult"></a>

# `TemperatureResult`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.TemperatureResult"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.TemperatureResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TemperatureResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#TemperatureResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#TemperatureResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#TemperatureResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#TemperatureResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#TemperatureResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#TemperatureResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#TemperatureResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#TemperatureResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#TemperatureResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#TemperatureResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#TemperatureResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#TemperatureResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#TemperatureResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TemperatureResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TemperatureResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TemperatureResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TemperatureResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TemperatureResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TemperatureResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TemperatureResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TemperatureResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TemperatureResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TemperatureResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#TemperatureResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TemperatureResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                    | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#TemperatureResult.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`Layer`](#TemperatureResult.Layer)                                                         | Gets or sets the Layer.                                                |
| [`ThermalResultType`](#TemperatureResult.ThermalResultType)                                 | Gets or sets the ThermalResultType.                                    |
| [`NormalOrientation`](#TemperatureResult.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`Position`](#TemperatureResult.Position)                                                   | Gets or sets the Position.                                             |
| [`AverageAcrossBodies`](#TemperatureResult.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#TemperatureResult.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#TemperatureResult.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#TemperatureResult.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#TemperatureResult.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#TemperatureResult.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#TemperatureResult.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#TemperatureResult.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#TemperatureResult.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#TemperatureResult.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#TemperatureResult.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#TemperatureResult.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#TemperatureResult.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#TemperatureResult.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#TemperatureResult.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#TemperatureResult.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#TemperatureResult.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#TemperatureResult.Path)                                                           | Path property.                                                         |
| [`Surface`](#TemperatureResult.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](#TemperatureResult.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#TemperatureResult.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#TemperatureResult.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#TemperatureResult.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#TemperatureResult.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#TemperatureResult.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#TemperatureResult.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#TemperatureResult.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#TemperatureResult.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#TemperatureResult.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#TemperatureResult.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#TemperatureResult.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#TemperatureResult.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#TemperatureResult.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#TemperatureResult.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#TemperatureResult.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#TemperatureResult.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#TemperatureResult.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#TemperatureResult.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#TemperatureResult.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#TemperatureResult.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#TemperatureResult.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#TemperatureResult.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#TemperatureResult.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#TemperatureResult.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#TemperatureResult.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#TemperatureResult.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#TemperatureResult.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#TemperatureResult.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#TemperatureResult.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#TemperatureResult.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#TemperatureResult.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#TemperatureResult.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#TemperatureResult.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="TemperatureResult.InternalObject"></a>

### *property* TemperatureResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.DataModelObjectCategory"></a>

### *property* TemperatureResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Layer"></a>

### *property* TemperatureResult.Layer *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Layer.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.ThermalResultType"></a>

### *property* TemperatureResult.ThermalResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalResultType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.NormalOrientation"></a>

### *property* TemperatureResult.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Position"></a>

### *property* TemperatureResult.Position *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Position.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.AverageAcrossBodies"></a>

### *property* TemperatureResult.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.PlotData"></a>

### *property* TemperatureResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Location"></a>

### *property* TemperatureResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.TimeForMinimumOfMinimumValues"></a>

### *property* TemperatureResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.TimeForMinimumOfMaximumValues"></a>

### *property* TemperatureResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* TemperatureResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* TemperatureResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.TimeForMaximumOfMinimumValues"></a>

### *property* TemperatureResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.TimeForMaximumOfMaximumValues"></a>

### *property* TemperatureResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* TemperatureResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* TemperatureResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.IsSolved"></a>

### *property* TemperatureResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.CoordinateSystem"></a>

### *property* TemperatureResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.ScopingMethod"></a>

### *property* TemperatureResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.SetNumber"></a>

### *property* TemperatureResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.CombinationNumber"></a>

### *property* TemperatureResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.SolutionCombinationDriver"></a>

### *property* TemperatureResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Path"></a>

### *property* TemperatureResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Surface"></a>

### *property* TemperatureResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.NamedSelections"></a>

### *property* TemperatureResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.WaterfallPanelShowTextOnMosaic"></a>

### *property* TemperatureResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.CrackFrontNumber"></a>

### *property* TemperatureResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.GlobalIDs"></a>

### *property* TemperatureResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Identifier"></a>

### *property* TemperatureResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.IterationNumber"></a>

### *property* TemperatureResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.LoadStep"></a>

### *property* TemperatureResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.MaximumOccursOn"></a>

### *property* TemperatureResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.MinimumOccursOn"></a>

### *property* TemperatureResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.LoadStepNumber"></a>

### *property* TemperatureResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.SolverComponentIDs"></a>

### *property* TemperatureResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Substep"></a>

### *property* TemperatureResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Average"></a>

### *property* TemperatureResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Maximum"></a>

### *property* TemperatureResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.MaximumOfMaximumOverTime"></a>

### *property* TemperatureResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.MaximumOfMinimumOverTime"></a>

### *property* TemperatureResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Minimum"></a>

### *property* TemperatureResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.MinimumOfMaximumOverTime"></a>

### *property* TemperatureResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.MinimumOfMinimumOverTime"></a>

### *property* TemperatureResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Time"></a>

### *property* TemperatureResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.DisplayTime"></a>

### *property* TemperatureResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.GraphControlsXAxis"></a>

### *property* TemperatureResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.DisplayOption"></a>

### *property* TemperatureResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.DpfEvaluation"></a>

### *property* TemperatureResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.By"></a>

### *property* TemperatureResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.ItemType"></a>

### *property* TemperatureResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.CalculateTimeHistory"></a>

### *property* TemperatureResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Suppressed"></a>

### *property* TemperatureResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Children"></a>

### *property* TemperatureResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Comments"></a>

### *property* TemperatureResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Figures"></a>

### *property* TemperatureResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Images"></a>

### *property* TemperatureResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* TemperatureResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Properties"></a>

### *property* TemperatureResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.VisibleProperties"></a>

### *property* TemperatureResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TemperatureResult.ClearGeneratedData"></a>

### TemperatureResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.EvaluateAllResults"></a>

### TemperatureResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.FetchRemoteResults"></a>

### TemperatureResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.ExportToTextFile"></a>

### TemperatureResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.ExportAnimation"></a>

### TemperatureResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.DuplicateWithoutResults"></a>

### TemperatureResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.CreateResultsAtAllSets"></a>

### TemperatureResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.PromoteToNamedSelection"></a>

### TemperatureResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.CreateParameter"></a>

### TemperatureResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.AddAlert"></a>

### TemperatureResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.AddConvergence"></a>

### TemperatureResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.RenameBasedOnDefinition"></a>

### TemperatureResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Delete"></a>

### TemperatureResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.GetChildren"></a>

### TemperatureResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### TemperatureResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.AddComment"></a>

### TemperatureResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.AddFigure"></a>

### TemperatureResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.AddImage"></a>

### TemperatureResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Activate"></a>

### TemperatureResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.CopyTo"></a>

### TemperatureResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.Duplicate"></a>

### TemperatureResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.GroupAllSimilarChildren"></a>

### TemperatureResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.GroupSimilarObjects"></a>

### TemperatureResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.PropertyByName"></a>

### TemperatureResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.PropertyByAPIName"></a>

### TemperatureResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.GetParameter"></a>

### TemperatureResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureResult.RemoveParameter"></a>

### TemperatureResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
