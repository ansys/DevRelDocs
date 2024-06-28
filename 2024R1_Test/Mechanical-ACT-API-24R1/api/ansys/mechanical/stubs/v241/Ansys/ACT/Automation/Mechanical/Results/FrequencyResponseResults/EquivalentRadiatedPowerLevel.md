<!-- vale off -->

<a id="equivalentradiatedpowerlevel"></a>

# `EquivalentRadiatedPowerLevel`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerLevel"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerLevel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EquivalentRadiatedPowerLevel.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToXMLFile`](#EquivalentRadiatedPowerLevel.ExportToXMLFile)                 | Run the ExportToXMLFile action.                                                   |
| [`ExportToWAVFile`](#EquivalentRadiatedPowerLevel.ExportToWAVFile)                 | Run the ExportToWAVFile action.                                                   |
| [`ClearGeneratedData`](#EquivalentRadiatedPowerLevel.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#EquivalentRadiatedPowerLevel.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#EquivalentRadiatedPowerLevel.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#EquivalentRadiatedPowerLevel.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#EquivalentRadiatedPowerLevel.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#EquivalentRadiatedPowerLevel.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#EquivalentRadiatedPowerLevel.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#EquivalentRadiatedPowerLevel.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#EquivalentRadiatedPowerLevel.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#EquivalentRadiatedPowerLevel.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#EquivalentRadiatedPowerLevel.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#EquivalentRadiatedPowerLevel.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#EquivalentRadiatedPowerLevel.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EquivalentRadiatedPowerLevel.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EquivalentRadiatedPowerLevel.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EquivalentRadiatedPowerLevel.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EquivalentRadiatedPowerLevel.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EquivalentRadiatedPowerLevel.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EquivalentRadiatedPowerLevel.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EquivalentRadiatedPowerLevel.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EquivalentRadiatedPowerLevel.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EquivalentRadiatedPowerLevel.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EquivalentRadiatedPowerLevel.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#EquivalentRadiatedPowerLevel.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EquivalentRadiatedPowerLevel.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`DBWeighting`](#EquivalentRadiatedPowerLevel.DBWeighting)                                             | Gets or sets the DBWeighting.                                          |
| [`InternalObject`](#id0)                                                                               | Gets the internal object. For advanced usage only.                     |
| [`MaximumFrequency`](#EquivalentRadiatedPowerLevel.MaximumFrequency)                                   | Gets or sets the MaximumFrequency.                                     |
| [`MinimumFrequency`](#EquivalentRadiatedPowerLevel.MinimumFrequency)                                   | Gets or sets the MinimumFrequency.                                     |
| [`FrequencyRange`](#EquivalentRadiatedPowerLevel.FrequencyRange)                                       | Gets or sets the FrequencyRange.                                       |
| [`DataModelObjectCategory`](#EquivalentRadiatedPowerLevel.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#EquivalentRadiatedPowerLevel.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#EquivalentRadiatedPowerLevel.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#EquivalentRadiatedPowerLevel.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#EquivalentRadiatedPowerLevel.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#EquivalentRadiatedPowerLevel.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#EquivalentRadiatedPowerLevel.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#EquivalentRadiatedPowerLevel.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#EquivalentRadiatedPowerLevel.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#EquivalentRadiatedPowerLevel.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#EquivalentRadiatedPowerLevel.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#EquivalentRadiatedPowerLevel.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#EquivalentRadiatedPowerLevel.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#EquivalentRadiatedPowerLevel.Path)                                                           | Path property.                                                         |
| [`Surface`](#EquivalentRadiatedPowerLevel.Surface)                                                     | Surface property.                                                      |
| [`NamedSelections`](#EquivalentRadiatedPowerLevel.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#EquivalentRadiatedPowerLevel.WaterfallPanelShowTextOnMosaic)       | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#EquivalentRadiatedPowerLevel.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#EquivalentRadiatedPowerLevel.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#EquivalentRadiatedPowerLevel.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#EquivalentRadiatedPowerLevel.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#EquivalentRadiatedPowerLevel.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#EquivalentRadiatedPowerLevel.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#EquivalentRadiatedPowerLevel.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#EquivalentRadiatedPowerLevel.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#EquivalentRadiatedPowerLevel.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#EquivalentRadiatedPowerLevel.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#EquivalentRadiatedPowerLevel.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#EquivalentRadiatedPowerLevel.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#EquivalentRadiatedPowerLevel.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#EquivalentRadiatedPowerLevel.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#EquivalentRadiatedPowerLevel.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#EquivalentRadiatedPowerLevel.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#EquivalentRadiatedPowerLevel.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#EquivalentRadiatedPowerLevel.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#EquivalentRadiatedPowerLevel.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#EquivalentRadiatedPowerLevel.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#EquivalentRadiatedPowerLevel.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#EquivalentRadiatedPowerLevel.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#EquivalentRadiatedPowerLevel.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#EquivalentRadiatedPowerLevel.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#EquivalentRadiatedPowerLevel.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#EquivalentRadiatedPowerLevel.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#EquivalentRadiatedPowerLevel.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#EquivalentRadiatedPowerLevel.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#EquivalentRadiatedPowerLevel.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#EquivalentRadiatedPowerLevel.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                               | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#EquivalentRadiatedPowerLevel.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#EquivalentRadiatedPowerLevel.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="EquivalentRadiatedPowerLevel.DBWeighting"></a>

### *property* EquivalentRadiatedPowerLevel.DBWeighting *: [Ansys.Mechanical.DataModel.Enums.DBWeightingType](../../../../../Mechanical/DataModel/Enums/DBWeightingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DBWeightingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DBWeighting.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.InternalObject"></a>

### *property* EquivalentRadiatedPowerLevel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MaximumFrequency"></a>

### *property* EquivalentRadiatedPowerLevel.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MinimumFrequency"></a>

### *property* EquivalentRadiatedPowerLevel.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.FrequencyRange"></a>

### *property* EquivalentRadiatedPowerLevel.FrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.DataModelObjectCategory"></a>

### *property* EquivalentRadiatedPowerLevel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.PlotData"></a>

### *property* EquivalentRadiatedPowerLevel.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Location"></a>

### *property* EquivalentRadiatedPowerLevel.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.TimeForMinimumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerLevel.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.TimeForMinimumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerLevel.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerLevel.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.TimeForMaximumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerLevel.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.TimeForMaximumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerLevel.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMinimumValues"></a>

### *property* EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMaximumValues"></a>

### *property* EquivalentRadiatedPowerLevel.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.IsSolved"></a>

### *property* EquivalentRadiatedPowerLevel.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CoordinateSystem"></a>

### *property* EquivalentRadiatedPowerLevel.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ScopingMethod"></a>

### *property* EquivalentRadiatedPowerLevel.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.SetNumber"></a>

### *property* EquivalentRadiatedPowerLevel.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CombinationNumber"></a>

### *property* EquivalentRadiatedPowerLevel.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.SolutionCombinationDriver"></a>

### *property* EquivalentRadiatedPowerLevel.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Path"></a>

### *property* EquivalentRadiatedPowerLevel.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Surface"></a>

### *property* EquivalentRadiatedPowerLevel.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.NamedSelections"></a>

### *property* EquivalentRadiatedPowerLevel.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.WaterfallPanelShowTextOnMosaic"></a>

### *property* EquivalentRadiatedPowerLevel.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CrackFrontNumber"></a>

### *property* EquivalentRadiatedPowerLevel.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GlobalIDs"></a>

### *property* EquivalentRadiatedPowerLevel.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Identifier"></a>

### *property* EquivalentRadiatedPowerLevel.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.IterationNumber"></a>

### *property* EquivalentRadiatedPowerLevel.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.LoadStep"></a>

### *property* EquivalentRadiatedPowerLevel.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MaximumOccursOn"></a>

### *property* EquivalentRadiatedPowerLevel.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MinimumOccursOn"></a>

### *property* EquivalentRadiatedPowerLevel.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.LoadStepNumber"></a>

### *property* EquivalentRadiatedPowerLevel.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.SolverComponentIDs"></a>

### *property* EquivalentRadiatedPowerLevel.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Substep"></a>

### *property* EquivalentRadiatedPowerLevel.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Average"></a>

### *property* EquivalentRadiatedPowerLevel.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Maximum"></a>

### *property* EquivalentRadiatedPowerLevel.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MaximumOfMaximumOverTime"></a>

### *property* EquivalentRadiatedPowerLevel.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MaximumOfMinimumOverTime"></a>

### *property* EquivalentRadiatedPowerLevel.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Minimum"></a>

### *property* EquivalentRadiatedPowerLevel.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MinimumOfMaximumOverTime"></a>

### *property* EquivalentRadiatedPowerLevel.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.MinimumOfMinimumOverTime"></a>

### *property* EquivalentRadiatedPowerLevel.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Time"></a>

### *property* EquivalentRadiatedPowerLevel.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.DisplayTime"></a>

### *property* EquivalentRadiatedPowerLevel.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GraphControlsXAxis"></a>

### *property* EquivalentRadiatedPowerLevel.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.DisplayOption"></a>

### *property* EquivalentRadiatedPowerLevel.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.DpfEvaluation"></a>

### *property* EquivalentRadiatedPowerLevel.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.By"></a>

### *property* EquivalentRadiatedPowerLevel.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ItemType"></a>

### *property* EquivalentRadiatedPowerLevel.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CalculateTimeHistory"></a>

### *property* EquivalentRadiatedPowerLevel.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Suppressed"></a>

### *property* EquivalentRadiatedPowerLevel.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Children"></a>

### *property* EquivalentRadiatedPowerLevel.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Comments"></a>

### *property* EquivalentRadiatedPowerLevel.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Figures"></a>

### *property* EquivalentRadiatedPowerLevel.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Images"></a>

### *property* EquivalentRadiatedPowerLevel.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* EquivalentRadiatedPowerLevel.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Properties"></a>

### *property* EquivalentRadiatedPowerLevel.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.VisibleProperties"></a>

### *property* EquivalentRadiatedPowerLevel.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EquivalentRadiatedPowerLevel.ExportToXMLFile"></a>

### EquivalentRadiatedPowerLevel.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ExportToWAVFile"></a>

### EquivalentRadiatedPowerLevel.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ClearGeneratedData"></a>

### EquivalentRadiatedPowerLevel.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.EvaluateAllResults"></a>

### EquivalentRadiatedPowerLevel.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.FetchRemoteResults"></a>

### EquivalentRadiatedPowerLevel.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ExportToTextFile"></a>

### EquivalentRadiatedPowerLevel.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.ExportAnimation"></a>

### EquivalentRadiatedPowerLevel.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.DuplicateWithoutResults"></a>

### EquivalentRadiatedPowerLevel.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CreateResultsAtAllSets"></a>

### EquivalentRadiatedPowerLevel.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.PromoteToNamedSelection"></a>

### EquivalentRadiatedPowerLevel.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CreateParameter"></a>

### EquivalentRadiatedPowerLevel.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.AddAlert"></a>

### EquivalentRadiatedPowerLevel.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.AddConvergence"></a>

### EquivalentRadiatedPowerLevel.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.RenameBasedOnDefinition"></a>

### EquivalentRadiatedPowerLevel.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Delete"></a>

### EquivalentRadiatedPowerLevel.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetChildren"></a>

### EquivalentRadiatedPowerLevel.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### EquivalentRadiatedPowerLevel.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.AddComment"></a>

### EquivalentRadiatedPowerLevel.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.AddFigure"></a>

### EquivalentRadiatedPowerLevel.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.AddImage"></a>

### EquivalentRadiatedPowerLevel.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Activate"></a>

### EquivalentRadiatedPowerLevel.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.CopyTo"></a>

### EquivalentRadiatedPowerLevel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.Duplicate"></a>

### EquivalentRadiatedPowerLevel.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GroupAllSimilarChildren"></a>

### EquivalentRadiatedPowerLevel.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GroupSimilarObjects"></a>

### EquivalentRadiatedPowerLevel.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.PropertyByName"></a>

### EquivalentRadiatedPowerLevel.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.PropertyByAPIName"></a>

### EquivalentRadiatedPowerLevel.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.GetParameter"></a>

### EquivalentRadiatedPowerLevel.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EquivalentRadiatedPowerLevel.RemoveParameter"></a>

### EquivalentRadiatedPowerLevel.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
