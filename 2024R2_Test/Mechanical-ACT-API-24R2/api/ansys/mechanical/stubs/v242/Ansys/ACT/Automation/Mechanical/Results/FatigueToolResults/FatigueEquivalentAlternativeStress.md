# `FatigueEquivalentAlternativeStress`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.FatigueToolResults.FatigueEquivalentAlternativeStress

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FatigueEquivalentAlternativeStress.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FatigueEquivalentAlternativeStress.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#FatigueEquivalentAlternativeStress.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#FatigueEquivalentAlternativeStress.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#FatigueEquivalentAlternativeStress.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#FatigueEquivalentAlternativeStress.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#FatigueEquivalentAlternativeStress.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#FatigueEquivalentAlternativeStress.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#FatigueEquivalentAlternativeStress.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#FatigueEquivalentAlternativeStress.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#FatigueEquivalentAlternativeStress.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#FatigueEquivalentAlternativeStress.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#FatigueEquivalentAlternativeStress.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FatigueEquivalentAlternativeStress.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FatigueEquivalentAlternativeStress.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FatigueEquivalentAlternativeStress.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FatigueEquivalentAlternativeStress.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FatigueEquivalentAlternativeStress.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FatigueEquivalentAlternativeStress.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FatigueEquivalentAlternativeStress.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FatigueEquivalentAlternativeStress.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueEquivalentAlternativeStress.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FatigueEquivalentAlternativeStress.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FatigueEquivalentAlternativeStress.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#FatigueEquivalentAlternativeStress.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FatigueEquivalentAlternativeStress.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                     | Gets the internal object. For advanced usage only.                     |
| [`DataModelObjectCategory`](#FatigueEquivalentAlternativeStress.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                           |
| [`Method`](#FatigueEquivalentAlternativeStress.Method)                                                       | Gets the Method.                                                       |
| [`DesignLife`](#FatigueEquivalentAlternativeStress.DesignLife)                                               | Gets or sets the DesignLife.                                           |
| [`AverageAcrossBodies`](#FatigueEquivalentAlternativeStress.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#FatigueEquivalentAlternativeStress.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#FatigueEquivalentAlternativeStress.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#FatigueEquivalentAlternativeStress.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#FatigueEquivalentAlternativeStress.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#FatigueEquivalentAlternativeStress.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#FatigueEquivalentAlternativeStress.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#FatigueEquivalentAlternativeStress.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#FatigueEquivalentAlternativeStress.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#FatigueEquivalentAlternativeStress.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#FatigueEquivalentAlternativeStress.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#FatigueEquivalentAlternativeStress.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#FatigueEquivalentAlternativeStress.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#FatigueEquivalentAlternativeStress.Path)                                                           | Path property.                                                         |
| [`Surface`](#FatigueEquivalentAlternativeStress.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#FatigueEquivalentAlternativeStress.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#FatigueEquivalentAlternativeStress.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#FatigueEquivalentAlternativeStress.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#FatigueEquivalentAlternativeStress.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#FatigueEquivalentAlternativeStress.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#FatigueEquivalentAlternativeStress.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#FatigueEquivalentAlternativeStress.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#FatigueEquivalentAlternativeStress.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#FatigueEquivalentAlternativeStress.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#FatigueEquivalentAlternativeStress.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#FatigueEquivalentAlternativeStress.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#FatigueEquivalentAlternativeStress.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#FatigueEquivalentAlternativeStress.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#FatigueEquivalentAlternativeStress.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#FatigueEquivalentAlternativeStress.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#FatigueEquivalentAlternativeStress.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#FatigueEquivalentAlternativeStress.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#FatigueEquivalentAlternativeStress.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#FatigueEquivalentAlternativeStress.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#FatigueEquivalentAlternativeStress.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#FatigueEquivalentAlternativeStress.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#FatigueEquivalentAlternativeStress.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#FatigueEquivalentAlternativeStress.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#FatigueEquivalentAlternativeStress.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#FatigueEquivalentAlternativeStress.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#FatigueEquivalentAlternativeStress.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#FatigueEquivalentAlternativeStress.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#FatigueEquivalentAlternativeStress.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#FatigueEquivalentAlternativeStress.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#FatigueEquivalentAlternativeStress.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#FatigueEquivalentAlternativeStress.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#FatigueEquivalentAlternativeStress.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#FatigueEquivalentAlternativeStress.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                     | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#FatigueEquivalentAlternativeStress.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#FatigueEquivalentAlternativeStress.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="FatigueEquivalentAlternativeStress.InternalObject"></a>

### *property* FatigueEquivalentAlternativeStress.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.DataModelObjectCategory"></a>

### *property* FatigueEquivalentAlternativeStress.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Method"></a>

### *property* FatigueEquivalentAlternativeStress.Method *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.DesignLife"></a>

### *property* FatigueEquivalentAlternativeStress.DesignLife *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DesignLife.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.AverageAcrossBodies"></a>

### *property* FatigueEquivalentAlternativeStress.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.PlotData"></a>

### *property* FatigueEquivalentAlternativeStress.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Location"></a>

### *property* FatigueEquivalentAlternativeStress.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.TimeForMinimumOfMinimumValues"></a>

### *property* FatigueEquivalentAlternativeStress.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.TimeForMinimumOfMaximumValues"></a>

### *property* FatigueEquivalentAlternativeStress.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMinimumValues"></a>

### *property* FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMaximumValues"></a>

### *property* FatigueEquivalentAlternativeStress.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.TimeForMaximumOfMinimumValues"></a>

### *property* FatigueEquivalentAlternativeStress.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.TimeForMaximumOfMaximumValues"></a>

### *property* FatigueEquivalentAlternativeStress.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMinimumValues"></a>

### *property* FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMaximumValues"></a>

### *property* FatigueEquivalentAlternativeStress.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.IsSolved"></a>

### *property* FatigueEquivalentAlternativeStress.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CoordinateSystem"></a>

### *property* FatigueEquivalentAlternativeStress.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ScopingMethod"></a>

### *property* FatigueEquivalentAlternativeStress.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.SetNumber"></a>

### *property* FatigueEquivalentAlternativeStress.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CombinationNumber"></a>

### *property* FatigueEquivalentAlternativeStress.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.SolutionCombinationDriver"></a>

### *property* FatigueEquivalentAlternativeStress.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Path"></a>

### *property* FatigueEquivalentAlternativeStress.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Surface"></a>

### *property* FatigueEquivalentAlternativeStress.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.SurfaceCoating"></a>

### *property* FatigueEquivalentAlternativeStress.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.NamedSelections"></a>

### *property* FatigueEquivalentAlternativeStress.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.WaterfallShowTextOnMosaic"></a>

### *property* FatigueEquivalentAlternativeStress.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CrackFrontNumber"></a>

### *property* FatigueEquivalentAlternativeStress.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GlobalIDs"></a>

### *property* FatigueEquivalentAlternativeStress.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Identifier"></a>

### *property* FatigueEquivalentAlternativeStress.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.IterationNumber"></a>

### *property* FatigueEquivalentAlternativeStress.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.LoadStep"></a>

### *property* FatigueEquivalentAlternativeStress.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.MaximumOccursOn"></a>

### *property* FatigueEquivalentAlternativeStress.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.MinimumOccursOn"></a>

### *property* FatigueEquivalentAlternativeStress.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.LoadStepNumber"></a>

### *property* FatigueEquivalentAlternativeStress.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.SolverComponentIDs"></a>

### *property* FatigueEquivalentAlternativeStress.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Substep"></a>

### *property* FatigueEquivalentAlternativeStress.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Average"></a>

### *property* FatigueEquivalentAlternativeStress.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Maximum"></a>

### *property* FatigueEquivalentAlternativeStress.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.MaximumOfMaximumOverTime"></a>

### *property* FatigueEquivalentAlternativeStress.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.MaximumOfMinimumOverTime"></a>

### *property* FatigueEquivalentAlternativeStress.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Minimum"></a>

### *property* FatigueEquivalentAlternativeStress.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.MinimumOfMaximumOverTime"></a>

### *property* FatigueEquivalentAlternativeStress.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.MinimumOfMinimumOverTime"></a>

### *property* FatigueEquivalentAlternativeStress.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Time"></a>

### *property* FatigueEquivalentAlternativeStress.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.DisplayTime"></a>

### *property* FatigueEquivalentAlternativeStress.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GraphControlsXAxis"></a>

### *property* FatigueEquivalentAlternativeStress.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.DisplayOption"></a>

### *property* FatigueEquivalentAlternativeStress.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.DpfEvaluation"></a>

### *property* FatigueEquivalentAlternativeStress.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.By"></a>

### *property* FatigueEquivalentAlternativeStress.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ItemType"></a>

### *property* FatigueEquivalentAlternativeStress.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CalculateTimeHistory"></a>

### *property* FatigueEquivalentAlternativeStress.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Suppressed"></a>

### *property* FatigueEquivalentAlternativeStress.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Children"></a>

### *property* FatigueEquivalentAlternativeStress.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Comments"></a>

### *property* FatigueEquivalentAlternativeStress.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Figures"></a>

### *property* FatigueEquivalentAlternativeStress.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Images"></a>

### *property* FatigueEquivalentAlternativeStress.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FatigueEquivalentAlternativeStress.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Properties"></a>

### *property* FatigueEquivalentAlternativeStress.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.VisibleProperties"></a>

### *property* FatigueEquivalentAlternativeStress.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueEquivalentAlternativeStress.ClearGeneratedData"></a>

### FatigueEquivalentAlternativeStress.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.EvaluateAllResults"></a>

### FatigueEquivalentAlternativeStress.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.FetchRemoteResults"></a>

### FatigueEquivalentAlternativeStress.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ExportToTextFile"></a>

### FatigueEquivalentAlternativeStress.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.ExportAnimation"></a>

### FatigueEquivalentAlternativeStress.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.DuplicateWithoutResults"></a>

### FatigueEquivalentAlternativeStress.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CreateResultsAtAllSets"></a>

### FatigueEquivalentAlternativeStress.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.PromoteToNamedSelection"></a>

### FatigueEquivalentAlternativeStress.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CreateParameter"></a>

### FatigueEquivalentAlternativeStress.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.AddAlert"></a>

### FatigueEquivalentAlternativeStress.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.AddConvergence"></a>

### FatigueEquivalentAlternativeStress.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.RenameBasedOnDefinition"></a>

### FatigueEquivalentAlternativeStress.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Delete"></a>

### FatigueEquivalentAlternativeStress.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetChildren"></a>

### FatigueEquivalentAlternativeStress.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FatigueEquivalentAlternativeStress.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.AddComment"></a>

### FatigueEquivalentAlternativeStress.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.AddFigure"></a>

### FatigueEquivalentAlternativeStress.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.AddImage"></a>

### FatigueEquivalentAlternativeStress.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Activate"></a>

### FatigueEquivalentAlternativeStress.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.CopyTo"></a>

### FatigueEquivalentAlternativeStress.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.Duplicate"></a>

### FatigueEquivalentAlternativeStress.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GroupAllSimilarChildren"></a>

### FatigueEquivalentAlternativeStress.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GroupSimilarObjects"></a>

### FatigueEquivalentAlternativeStress.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.PropertyByName"></a>

### FatigueEquivalentAlternativeStress.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.PropertyByAPIName"></a>

### FatigueEquivalentAlternativeStress.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.GetParameter"></a>

### FatigueEquivalentAlternativeStress.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueEquivalentAlternativeStress.RemoveParameter"></a>

### FatigueEquivalentAlternativeStress.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

