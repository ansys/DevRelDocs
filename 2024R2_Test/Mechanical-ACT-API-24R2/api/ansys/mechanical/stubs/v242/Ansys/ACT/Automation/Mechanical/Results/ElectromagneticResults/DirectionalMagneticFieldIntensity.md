# `DirectionalMagneticFieldIntensity`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.DirectionalMagneticFieldIntensity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DirectionalMagneticFieldIntensity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#DirectionalMagneticFieldIntensity.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#DirectionalMagneticFieldIntensity.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#DirectionalMagneticFieldIntensity.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#DirectionalMagneticFieldIntensity.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#DirectionalMagneticFieldIntensity.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#DirectionalMagneticFieldIntensity.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#DirectionalMagneticFieldIntensity.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#DirectionalMagneticFieldIntensity.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#DirectionalMagneticFieldIntensity.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#DirectionalMagneticFieldIntensity.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#DirectionalMagneticFieldIntensity.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#DirectionalMagneticFieldIntensity.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DirectionalMagneticFieldIntensity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DirectionalMagneticFieldIntensity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DirectionalMagneticFieldIntensity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DirectionalMagneticFieldIntensity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DirectionalMagneticFieldIntensity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DirectionalMagneticFieldIntensity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DirectionalMagneticFieldIntensity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DirectionalMagneticFieldIntensity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DirectionalMagneticFieldIntensity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DirectionalMagneticFieldIntensity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DirectionalMagneticFieldIntensity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#DirectionalMagneticFieldIntensity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DirectionalMagneticFieldIntensity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`NormalOrientation`](#DirectionalMagneticFieldIntensity.NormalOrientation)                                 | Gets or sets the NormalOrientation.                                    |
| [`DataModelObjectCategory`](#DirectionalMagneticFieldIntensity.DataModelObjectCategory)                     | Gets the current DataModelObjectâ€™s category.                           |
| [`ElectromagneticResultType`](#DirectionalMagneticFieldIntensity.ElectromagneticResultType)                 | Gets or sets the ElectromagneticResultType.                            |
| [`AverageAcrossBodies`](#DirectionalMagneticFieldIntensity.AverageAcrossBodies)                             | Gets or sets the AverageAcrossBodies.                                  |
| [`PlotData`](#DirectionalMagneticFieldIntensity.PlotData)                                                   | Gets the result table.                                                 |
| [`Location`](#DirectionalMagneticFieldIntensity.Location)                                                   | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#DirectionalMagneticFieldIntensity.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#DirectionalMagneticFieldIntensity.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#DirectionalMagneticFieldIntensity.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#DirectionalMagneticFieldIntensity.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#DirectionalMagneticFieldIntensity.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#DirectionalMagneticFieldIntensity.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#DirectionalMagneticFieldIntensity.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#DirectionalMagneticFieldIntensity.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#DirectionalMagneticFieldIntensity.IsSolved)                                                   | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#DirectionalMagneticFieldIntensity.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#DirectionalMagneticFieldIntensity.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#DirectionalMagneticFieldIntensity.SetNumber)                                                 | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#DirectionalMagneticFieldIntensity.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#DirectionalMagneticFieldIntensity.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#DirectionalMagneticFieldIntensity.Path)                                                           | Path property.                                                         |
| [`Surface`](#DirectionalMagneticFieldIntensity.Surface)                                                     | Surface property.                                                      |
| [`SurfaceCoating`](#DirectionalMagneticFieldIntensity.SurfaceCoating)                                       | SurfaceCoating property.                                               |
| [`NamedSelections`](#DirectionalMagneticFieldIntensity.NamedSelections)                                     | Gets or sets the NamedSelections.                                      |
| [`WaterfallShowTextOnMosaic`](#DirectionalMagneticFieldIntensity.WaterfallShowTextOnMosaic)                 | Gets or sets the Waterfall Mosaic Text Property.                       |
| [`CrackFrontNumber`](#DirectionalMagneticFieldIntensity.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#DirectionalMagneticFieldIntensity.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#DirectionalMagneticFieldIntensity.Identifier)                                               | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#DirectionalMagneticFieldIntensity.IterationNumber)                                     | Gets the IterationNumber.                                              |
| [`LoadStep`](#DirectionalMagneticFieldIntensity.LoadStep)                                                   | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#DirectionalMagneticFieldIntensity.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#DirectionalMagneticFieldIntensity.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#DirectionalMagneticFieldIntensity.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#DirectionalMagneticFieldIntensity.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#DirectionalMagneticFieldIntensity.Substep)                                                     | Gets the Substep.                                                      |
| [`Average`](#DirectionalMagneticFieldIntensity.Average)                                                     | Gets the Average.                                                      |
| [`Maximum`](#DirectionalMagneticFieldIntensity.Maximum)                                                     | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#DirectionalMagneticFieldIntensity.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#DirectionalMagneticFieldIntensity.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#DirectionalMagneticFieldIntensity.Minimum)                                                     | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#DirectionalMagneticFieldIntensity.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#DirectionalMagneticFieldIntensity.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#DirectionalMagneticFieldIntensity.Time)                                                           | Gets the Time.                                                         |
| [`DisplayTime`](#DirectionalMagneticFieldIntensity.DisplayTime)                                             | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#DirectionalMagneticFieldIntensity.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#DirectionalMagneticFieldIntensity.DisplayOption)                                         | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#DirectionalMagneticFieldIntensity.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                        |
| [`By`](#DirectionalMagneticFieldIntensity.By)                                                               | Gets or sets the By.                                                   |
| [`ItemType`](#DirectionalMagneticFieldIntensity.ItemType)                                                   | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#DirectionalMagneticFieldIntensity.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#DirectionalMagneticFieldIntensity.Suppressed)                                               | Gets or sets the Suppressed.                                           |
| [`Children`](#DirectionalMagneticFieldIntensity.Children)                                                   | Gets the list of children.                                             |
| [`Comments`](#DirectionalMagneticFieldIntensity.Comments)                                                   | Gets the list of associated comments.                                  |
| [`Figures`](#DirectionalMagneticFieldIntensity.Figures)                                                     | Gets the list of associated figures.                                   |
| [`Images`](#DirectionalMagneticFieldIntensity.Images)                                                       | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                                    | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#DirectionalMagneticFieldIntensity.Properties)                                               | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#DirectionalMagneticFieldIntensity.VisibleProperties)                                 | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="DirectionalMagneticFieldIntensity.InternalObject"></a>

### *property* DirectionalMagneticFieldIntensity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.NormalOrientation"></a>

### *property* DirectionalMagneticFieldIntensity.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.DataModelObjectCategory"></a>

### *property* DirectionalMagneticFieldIntensity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.ElectromagneticResultType"></a>

### *property* DirectionalMagneticFieldIntensity.ElectromagneticResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticResultType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.AverageAcrossBodies"></a>

### *property* DirectionalMagneticFieldIntensity.AverageAcrossBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AverageAcrossBodies.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.PlotData"></a>

### *property* DirectionalMagneticFieldIntensity.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../../../v241/Ansys/Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Location"></a>

### *property* DirectionalMagneticFieldIntensity.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.TimeForMinimumOfMinimumValues"></a>

### *property* DirectionalMagneticFieldIntensity.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.TimeForMinimumOfMaximumValues"></a>

### *property* DirectionalMagneticFieldIntensity.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.LoadStepForMinimumOfMinimumValues"></a>

### *property* DirectionalMagneticFieldIntensity.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.LoadStepForMinimumOfMaximumValues"></a>

### *property* DirectionalMagneticFieldIntensity.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.TimeForMaximumOfMinimumValues"></a>

### *property* DirectionalMagneticFieldIntensity.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.TimeForMaximumOfMaximumValues"></a>

### *property* DirectionalMagneticFieldIntensity.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.LoadStepForMaximumOfMinimumValues"></a>

### *property* DirectionalMagneticFieldIntensity.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.LoadStepForMaximumOfMaximumValues"></a>

### *property* DirectionalMagneticFieldIntensity.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.IsSolved"></a>

### *property* DirectionalMagneticFieldIntensity.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.CoordinateSystem"></a>

### *property* DirectionalMagneticFieldIntensity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.ScopingMethod"></a>

### *property* DirectionalMagneticFieldIntensity.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.SetNumber"></a>

### *property* DirectionalMagneticFieldIntensity.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.CombinationNumber"></a>

### *property* DirectionalMagneticFieldIntensity.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.SolutionCombinationDriver"></a>

### *property* DirectionalMagneticFieldIntensity.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Path"></a>

### *property* DirectionalMagneticFieldIntensity.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Surface"></a>

### *property* DirectionalMagneticFieldIntensity.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.SurfaceCoating"></a>

### *property* DirectionalMagneticFieldIntensity.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/SurfaceCoating.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.NamedSelections"></a>

### *property* DirectionalMagneticFieldIntensity.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.WaterfallShowTextOnMosaic"></a>

### *property* DirectionalMagneticFieldIntensity.WaterfallShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.CrackFrontNumber"></a>

### *property* DirectionalMagneticFieldIntensity.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.GlobalIDs"></a>

### *property* DirectionalMagneticFieldIntensity.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Identifier"></a>

### *property* DirectionalMagneticFieldIntensity.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.IterationNumber"></a>

### *property* DirectionalMagneticFieldIntensity.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.LoadStep"></a>

### *property* DirectionalMagneticFieldIntensity.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.MaximumOccursOn"></a>

### *property* DirectionalMagneticFieldIntensity.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.MinimumOccursOn"></a>

### *property* DirectionalMagneticFieldIntensity.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.LoadStepNumber"></a>

### *property* DirectionalMagneticFieldIntensity.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.SolverComponentIDs"></a>

### *property* DirectionalMagneticFieldIntensity.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Substep"></a>

### *property* DirectionalMagneticFieldIntensity.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Average"></a>

### *property* DirectionalMagneticFieldIntensity.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Maximum"></a>

### *property* DirectionalMagneticFieldIntensity.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.MaximumOfMaximumOverTime"></a>

### *property* DirectionalMagneticFieldIntensity.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.MaximumOfMinimumOverTime"></a>

### *property* DirectionalMagneticFieldIntensity.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Minimum"></a>

### *property* DirectionalMagneticFieldIntensity.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.MinimumOfMaximumOverTime"></a>

### *property* DirectionalMagneticFieldIntensity.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.MinimumOfMinimumOverTime"></a>

### *property* DirectionalMagneticFieldIntensity.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Time"></a>

### *property* DirectionalMagneticFieldIntensity.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.DisplayTime"></a>

### *property* DirectionalMagneticFieldIntensity.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.GraphControlsXAxis"></a>

### *property* DirectionalMagneticFieldIntensity.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.DisplayOption"></a>

### *property* DirectionalMagneticFieldIntensity.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.DpfEvaluation"></a>

### *property* DirectionalMagneticFieldIntensity.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.By"></a>

### *property* DirectionalMagneticFieldIntensity.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.ItemType"></a>

### *property* DirectionalMagneticFieldIntensity.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.CalculateTimeHistory"></a>

### *property* DirectionalMagneticFieldIntensity.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Suppressed"></a>

### *property* DirectionalMagneticFieldIntensity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Children"></a>

### *property* DirectionalMagneticFieldIntensity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Comments"></a>

### *property* DirectionalMagneticFieldIntensity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Figures"></a>

### *property* DirectionalMagneticFieldIntensity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Images"></a>

### *property* DirectionalMagneticFieldIntensity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DirectionalMagneticFieldIntensity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Properties"></a>

### *property* DirectionalMagneticFieldIntensity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.VisibleProperties"></a>

### *property* DirectionalMagneticFieldIntensity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DirectionalMagneticFieldIntensity.ClearGeneratedData"></a>

### DirectionalMagneticFieldIntensity.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.EvaluateAllResults"></a>

### DirectionalMagneticFieldIntensity.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.FetchRemoteResults"></a>

### DirectionalMagneticFieldIntensity.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.ExportToTextFile"></a>

### DirectionalMagneticFieldIntensity.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.ExportAnimation"></a>

### DirectionalMagneticFieldIntensity.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.DuplicateWithoutResults"></a>

### DirectionalMagneticFieldIntensity.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.CreateResultsAtAllSets"></a>

### DirectionalMagneticFieldIntensity.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.PromoteToNamedSelection"></a>

### DirectionalMagneticFieldIntensity.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.CreateParameter"></a>

### DirectionalMagneticFieldIntensity.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.AddAlert"></a>

### DirectionalMagneticFieldIntensity.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.AddConvergence"></a>

### DirectionalMagneticFieldIntensity.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.RenameBasedOnDefinition"></a>

### DirectionalMagneticFieldIntensity.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Delete"></a>

### DirectionalMagneticFieldIntensity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.GetChildren"></a>

### DirectionalMagneticFieldIntensity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DirectionalMagneticFieldIntensity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.AddComment"></a>

### DirectionalMagneticFieldIntensity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.AddFigure"></a>

### DirectionalMagneticFieldIntensity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.AddImage"></a>

### DirectionalMagneticFieldIntensity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Activate"></a>

### DirectionalMagneticFieldIntensity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.CopyTo"></a>

### DirectionalMagneticFieldIntensity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.Duplicate"></a>

### DirectionalMagneticFieldIntensity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.GroupAllSimilarChildren"></a>

### DirectionalMagneticFieldIntensity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.GroupSimilarObjects"></a>

### DirectionalMagneticFieldIntensity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.PropertyByName"></a>

### DirectionalMagneticFieldIntensity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.PropertyByAPIName"></a>

### DirectionalMagneticFieldIntensity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.GetParameter"></a>

### DirectionalMagneticFieldIntensity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DirectionalMagneticFieldIntensity.RemoveParameter"></a>

### DirectionalMagneticFieldIntensity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

