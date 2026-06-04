# `TotalShearMomentDiagram`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalShearMomentDiagram"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalShearMomentDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TotalShearMomentDiagram.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TotalShearMomentDiagram.Activate)                               | Activate the current object.                                                      |
| [`AddAlert`](#TotalShearMomentDiagram.AddAlert)                               | Creates a new Alert                                                               |
| [`AddComment`](#TotalShearMomentDiagram.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddConvergence`](#TotalShearMomentDiagram.AddConvergence)                   | Creates a new Convergence                                                         |
| [`AddFigure`](#TotalShearMomentDiagram.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TotalShearMomentDiagram.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#TotalShearMomentDiagram.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#TotalShearMomentDiagram.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TotalShearMomentDiagram.CreateParameter)                 | CreateParameter method.                                                           |
| [`CreateResultsAtAllSets`](#TotalShearMomentDiagram.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`Delete`](#TotalShearMomentDiagram.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#TotalShearMomentDiagram.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#TotalShearMomentDiagram.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#TotalShearMomentDiagram.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#TotalShearMomentDiagram.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ExportToTextFile`](#TotalShearMomentDiagram.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`FetchRemoteResults`](#TotalShearMomentDiagram.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`GetChildren`](#TotalShearMomentDiagram.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TotalShearMomentDiagram.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TotalShearMomentDiagram.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TotalShearMomentDiagram.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#TotalShearMomentDiagram.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#TotalShearMomentDiagram.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#TotalShearMomentDiagram.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TotalShearMomentDiagram.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#TotalShearMomentDiagram.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#TotalShearMomentDiagram.Average)                                                     | Gets the Average.                                                        |
| [`BeamResultType`](#TotalShearMomentDiagram.BeamResultType)                                       | Gets or sets the BeamResultType.                                         |
| [`By`](#TotalShearMomentDiagram.By)                                                               | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#TotalShearMomentDiagram.CalculateTimeHistory)                           | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#TotalShearMomentDiagram.Children)                                                   | Gets the list of children.                                               |
| [`CombinationNumber`](#TotalShearMomentDiagram.CombinationNumber)                                 | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#TotalShearMomentDiagram.Comments)                                                   | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#TotalShearMomentDiagram.CoordinateSystem)                                   | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#TotalShearMomentDiagram.CrackFrontNumber)                                   | Gets or sets the CrackFrontNumber.                                       |
| [`DataModelObjectCategory`](#TotalShearMomentDiagram.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                             |
| [`DisplayOption`](#TotalShearMomentDiagram.DisplayOption)                                         | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#TotalShearMomentDiagram.DisplayTime)                                             | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#TotalShearMomentDiagram.DpfEvaluation)                                         | Gets or sets the DpfEvaluation.                                          |
| [`Figures`](#TotalShearMomentDiagram.Figures)                                                     | Gets the list of associated figures.                                     |
| [`GlobalIDs`](#TotalShearMomentDiagram.GlobalIDs)                                                 | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#TotalShearMomentDiagram.GraphControlsXAxis)                               | Gets or sets the GraphControlsXAxis.                                     |
| [`GraphicsDisplay`](#TotalShearMomentDiagram.GraphicsDisplay)                                     | Gets or sets the GraphicsDisplay.                                        |
| [`Identifier`](#TotalShearMomentDiagram.Identifier)                                               | Gets or sets the Identifier.                                             |
| [`Images`](#TotalShearMomentDiagram.Images)                                                       | Gets the list of associated images.                                      |
| [`InternalObject`](#TotalShearMomentDiagram.InternalObject)                                       | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#TotalShearMomentDiagram.IsSolved)                                                   | Gets the IsSolved.                                                       |
| [`ItemType`](#TotalShearMomentDiagram.ItemType)                                                   | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#TotalShearMomentDiagram.IterationNumber)                                     | Gets the IterationNumber.                                                |
| [`LoadStep`](#TotalShearMomentDiagram.LoadStep)                                                   | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#TotalShearMomentDiagram.LoadStepForMaximumOfMaximumValues) | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#TotalShearMomentDiagram.LoadStepForMaximumOfMinimumValues) | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#TotalShearMomentDiagram.LoadStepForMinimumOfMaximumValues) | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#TotalShearMomentDiagram.LoadStepForMinimumOfMinimumValues) | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#TotalShearMomentDiagram.LoadStepNumber)                                       | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#TotalShearMomentDiagram.Location)                                                   | Gets or sets the Location.                                               |
| [`Maximum`](#TotalShearMomentDiagram.Maximum)                                                     | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#TotalShearMomentDiagram.MaximumOccursOn)                                     | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#TotalShearMomentDiagram.MaximumOfMaximumOverTime)                   | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#TotalShearMomentDiagram.MaximumOfMinimumOverTime)                   | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#TotalShearMomentDiagram.Minimum)                                                     | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#TotalShearMomentDiagram.MinimumOccursOn)                                     | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#TotalShearMomentDiagram.MinimumOfMaximumOverTime)                   | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#TotalShearMomentDiagram.MinimumOfMinimumOverTime)                   | Gets the MinimumOfMinimumOverTime.                                       |
| [`NamedSelections`](#TotalShearMomentDiagram.NamedSelections)                                     | Gets or sets the NamedSelections.                                        |
| [`Path`](#TotalShearMomentDiagram.Path)                                                           | Path property.                                                           |
| [`PlotData`](#TotalShearMomentDiagram.PlotData)                                                   | Gets the result table.                                                   |
| [`Properties`](#TotalShearMomentDiagram.Properties)                                               | Gets the list of properties for this object.                             |
| [`RPMSelection`](#TotalShearMomentDiagram.RPMSelection)                                           | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ScopingMethod`](#TotalShearMomentDiagram.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#TotalShearMomentDiagram.SetNumber)                                                 | Gets or sets the Set Number.                                             |
| [`ShearMomentType`](#TotalShearMomentDiagram.ShearMomentType)                                     | Gets or sets the ShearMomentType.                                        |
| [`SolutionCombinationDriver`](#TotalShearMomentDiagram.SolutionCombinationDriver)                 | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#TotalShearMomentDiagram.SolverComponentIDs)                               | Gets or sets the SolverComponentIDs.                                     |
| [`Substep`](#TotalShearMomentDiagram.Substep)                                                     | Gets the Substep.                                                        |
| [`Suppressed`](#TotalShearMomentDiagram.Suppressed)                                               | Gets or sets the Suppressed.                                             |
| [`Surface`](#TotalShearMomentDiagram.Surface)                                                     | Surface property.                                                        |
| [`SurfaceCoating`](#TotalShearMomentDiagram.SurfaceCoating)                                       | SurfaceCoating property.                                                 |
| [`Time`](#TotalShearMomentDiagram.Time)                                                           | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#TotalShearMomentDiagram.TimeForMaximumOfMaximumValues)         | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#TotalShearMomentDiagram.TimeForMaximumOfMinimumValues)         | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#TotalShearMomentDiagram.TimeForMinimumOfMaximumValues)         | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#TotalShearMomentDiagram.TimeForMinimumOfMinimumValues)         | Get the Time for the minimum of minimum values.                          |
| [`Total`](#TotalShearMomentDiagram.Total)                                                         | Gets the Total.                                                          |
| [`VisibleProperties`](#TotalShearMomentDiagram.VisibleProperties)                                 | Gets the list of properties that are visible for this object.            |

<a id="property-detail"></a>

## Property detail

<a id="TotalShearMomentDiagram.Average"></a>

### *property* TotalShearMomentDiagram.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.BeamResultType"></a>

### *property* TotalShearMomentDiagram.BeamResultType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamResultType.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.By"></a>

### *property* TotalShearMomentDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.CalculateTimeHistory"></a>

### *property* TotalShearMomentDiagram.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Children"></a>

### *property* TotalShearMomentDiagram.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.CombinationNumber"></a>

### *property* TotalShearMomentDiagram.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Comments"></a>

### *property* TotalShearMomentDiagram.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.CoordinateSystem"></a>

### *property* TotalShearMomentDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.CrackFrontNumber"></a>

### *property* TotalShearMomentDiagram.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.DataModelObjectCategory"></a>

### *property* TotalShearMomentDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.DisplayOption"></a>

### *property* TotalShearMomentDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.DisplayTime"></a>

### *property* TotalShearMomentDiagram.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.DpfEvaluation"></a>

### *property* TotalShearMomentDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Figures"></a>

### *property* TotalShearMomentDiagram.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.GlobalIDs"></a>

### *property* TotalShearMomentDiagram.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.GraphControlsXAxis"></a>

### *property* TotalShearMomentDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.GraphicsDisplay"></a>

### *property* TotalShearMomentDiagram.GraphicsDisplay *: [Ansys.Mechanical.DataModel.Enums.ShearMomentDiagramOrientationType](../../../../../Mechanical/DataModel/Enums/ShearMomentDiagramOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearMomentDiagramOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphicsDisplay.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Identifier"></a>

### *property* TotalShearMomentDiagram.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Images"></a>

### *property* TotalShearMomentDiagram.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.InternalObject"></a>

### *property* TotalShearMomentDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.IsSolved"></a>

### *property* TotalShearMomentDiagram.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.ItemType"></a>

### *property* TotalShearMomentDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.IterationNumber"></a>

### *property* TotalShearMomentDiagram.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.LoadStep"></a>

### *property* TotalShearMomentDiagram.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.LoadStepForMaximumOfMaximumValues"></a>

### *property* TotalShearMomentDiagram.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.LoadStepForMaximumOfMinimumValues"></a>

### *property* TotalShearMomentDiagram.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.LoadStepForMinimumOfMaximumValues"></a>

### *property* TotalShearMomentDiagram.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.LoadStepForMinimumOfMinimumValues"></a>

### *property* TotalShearMomentDiagram.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.LoadStepNumber"></a>

### *property* TotalShearMomentDiagram.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Location"></a>

### *property* TotalShearMomentDiagram.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Maximum"></a>

### *property* TotalShearMomentDiagram.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.MaximumOccursOn"></a>

### *property* TotalShearMomentDiagram.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.MaximumOfMaximumOverTime"></a>

### *property* TotalShearMomentDiagram.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.MaximumOfMinimumOverTime"></a>

### *property* TotalShearMomentDiagram.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Minimum"></a>

### *property* TotalShearMomentDiagram.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.MinimumOccursOn"></a>

### *property* TotalShearMomentDiagram.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.MinimumOfMaximumOverTime"></a>

### *property* TotalShearMomentDiagram.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.MinimumOfMinimumOverTime"></a>

### *property* TotalShearMomentDiagram.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.NamedSelections"></a>

### *property* TotalShearMomentDiagram.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Path"></a>

### *property* TotalShearMomentDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.PlotData"></a>

### *property* TotalShearMomentDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Properties"></a>

### *property* TotalShearMomentDiagram.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.RPMSelection"></a>

### *property* TotalShearMomentDiagram.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.ScopingMethod"></a>

### *property* TotalShearMomentDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.SetNumber"></a>

### *property* TotalShearMomentDiagram.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.ShearMomentType"></a>

### *property* TotalShearMomentDiagram.ShearMomentType *: [Ansys.Mechanical.DataModel.Enums.ShearMomentType](../../../../../Mechanical/DataModel/Enums/ShearMomentType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearMomentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearMomentType.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.SolutionCombinationDriver"></a>

### *property* TotalShearMomentDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.SolverComponentIDs"></a>

### *property* TotalShearMomentDiagram.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Substep"></a>

### *property* TotalShearMomentDiagram.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Suppressed"></a>

### *property* TotalShearMomentDiagram.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Surface"></a>

### *property* TotalShearMomentDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.SurfaceCoating"></a>

### *property* TotalShearMomentDiagram.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Time"></a>

### *property* TotalShearMomentDiagram.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.TimeForMaximumOfMaximumValues"></a>

### *property* TotalShearMomentDiagram.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.TimeForMaximumOfMinimumValues"></a>

### *property* TotalShearMomentDiagram.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.TimeForMinimumOfMaximumValues"></a>

### *property* TotalShearMomentDiagram.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.TimeForMinimumOfMinimumValues"></a>

### *property* TotalShearMomentDiagram.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Total"></a>

### *property* TotalShearMomentDiagram.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.VisibleProperties"></a>

### *property* TotalShearMomentDiagram.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TotalShearMomentDiagram.Activate"></a>

### TotalShearMomentDiagram.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.AddAlert"></a>

### TotalShearMomentDiagram.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.AddComment"></a>

### TotalShearMomentDiagram.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.AddConvergence"></a>

### TotalShearMomentDiagram.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.AddFigure"></a>

### TotalShearMomentDiagram.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.AddImage"></a>

### TotalShearMomentDiagram.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.ClearGeneratedData"></a>

### TotalShearMomentDiagram.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.CopyTo"></a>

### TotalShearMomentDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.CreateParameter"></a>

### TotalShearMomentDiagram.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.CreateResultsAtAllSets"></a>

### TotalShearMomentDiagram.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Delete"></a>

### TotalShearMomentDiagram.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.Duplicate"></a>

### TotalShearMomentDiagram.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.DuplicateWithoutResults"></a>

### TotalShearMomentDiagram.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.EvaluateAllResults"></a>

### TotalShearMomentDiagram.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.ExportAnimation"></a>

### TotalShearMomentDiagram.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.ExportToTextFile"></a>

### TotalShearMomentDiagram.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.FetchRemoteResults"></a>

### TotalShearMomentDiagram.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.GetChildren"></a>

### TotalShearMomentDiagram.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.GetParameter"></a>

### TotalShearMomentDiagram.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.GroupAllSimilarChildren"></a>

### TotalShearMomentDiagram.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.GroupSimilarObjects"></a>

### TotalShearMomentDiagram.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.PromoteToNamedSelection"></a>

### TotalShearMomentDiagram.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.PropertyByAPIName"></a>

### TotalShearMomentDiagram.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.PropertyByName"></a>

### TotalShearMomentDiagram.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.RemoveParameter"></a>

### TotalShearMomentDiagram.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TotalShearMomentDiagram.RenameBasedOnDefinition"></a>

### TotalShearMomentDiagram.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

