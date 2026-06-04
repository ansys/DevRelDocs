# `AcousticFarFieldSPLMicWaterfallDiagram`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldSPLMicWaterfallDiagram"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldSPLMicWaterfallDiagram

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticFarFieldSPLMicWaterfallDiagram.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticFarFieldSPLMicWaterfallDiagram.Activate)                               | Activate the current object.                                                             |
| [`AddAlert`](#AcousticFarFieldSPLMicWaterfallDiagram.AddAlert)                               | Creates a new Alert                                                                      |
| [`AddComment`](#AcousticFarFieldSPLMicWaterfallDiagram.AddComment)                           | Creates a new child Comment.                                                             |
| [`AddConvergence`](#AcousticFarFieldSPLMicWaterfallDiagram.AddConvergence)                   | Creates a new Convergence                                                                |
| [`AddFigure`](#AcousticFarFieldSPLMicWaterfallDiagram.AddFigure)                             | Creates a new child Figure.                                                              |
| [`AddImage`](#AcousticFarFieldSPLMicWaterfallDiagram.AddImage)                               | Creates a new child Image.                                                               |
| [`ClearGeneratedData`](#AcousticFarFieldSPLMicWaterfallDiagram.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                       |
| [`CopyTo`](#AcousticFarFieldSPLMicWaterfallDiagram.CopyTo)                                   | Copies all visible properties from this object to another.                               |
| [`CreateParameter`](#AcousticFarFieldSPLMicWaterfallDiagram.CreateParameter)                 | CreateParameter method.                                                                  |
| [`CreateResultsAtAllSets`](#AcousticFarFieldSPLMicWaterfallDiagram.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                                |
| [`Delete`](#AcousticFarFieldSPLMicWaterfallDiagram.Delete)                                   | Run the Delete action.                                                                   |
| [`Duplicate`](#AcousticFarFieldSPLMicWaterfallDiagram.Duplicate)                             | Creates a copy of the current DataModelObject.                                           |
| [`DuplicateWithoutResults`](#AcousticFarFieldSPLMicWaterfallDiagram.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                  |
| [`EvaluateAllResults`](#AcousticFarFieldSPLMicWaterfallDiagram.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                       |
| [`ExportAnimation`](#AcousticFarFieldSPLMicWaterfallDiagram.ExportAnimation)                 | Run the ExportAnimation action.                                                          |
| [`ExportToTextFile`](#AcousticFarFieldSPLMicWaterfallDiagram.ExportToTextFile)               | Run the ExportToTextFile action.                                                         |
| [`ExportToWAVFile`](#AcousticFarFieldSPLMicWaterfallDiagram.ExportToWAVFile)                 | Run the ExportToWAVFile action.                                                          |
| [`ExportToXMLFile`](#AcousticFarFieldSPLMicWaterfallDiagram.ExportToXMLFile)                 | Run the ExportToXMLFile action.                                                          |
| [`FetchRemoteResults`](#AcousticFarFieldSPLMicWaterfallDiagram.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                        |
| [`GetChildren`](#AcousticFarFieldSPLMicWaterfallDiagram.GetChildren)                         | Gets the list of children, filtered by type.                                             |
| [`GetParameter`](#AcousticFarFieldSPLMicWaterfallDiagram.GetParameter)                       | Gets the parameter corresponding to the given property.                                  |
| [`GroupAllSimilarChildren`](#AcousticFarFieldSPLMicWaterfallDiagram.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                  |
| [`GroupSimilarObjects`](#AcousticFarFieldSPLMicWaterfallDiagram.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                      |
| [`PromoteToNamedSelection`](#AcousticFarFieldSPLMicWaterfallDiagram.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                                  |
| [`PropertyByAPIName`](#AcousticFarFieldSPLMicWaterfallDiagram.PropertyByAPIName)             | Get a property by its API name.                                                          |
| [`PropertyByName`](#AcousticFarFieldSPLMicWaterfallDiagram.PropertyByName)                   | Get a property by its unique name.                                                       |
| [`RemoveParameter`](#AcousticFarFieldSPLMicWaterfallDiagram.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.        |
| [`RenameBasedOnDefinition`](#AcousticFarFieldSPLMicWaterfallDiagram.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                  |
| [`RetrieveResult`](#AcousticFarFieldSPLMicWaterfallDiagram.RetrieveResult)                   | Evaluates the individual result without evaluating all the results in the same solution. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Average`](#AcousticFarFieldSPLMicWaterfallDiagram.Average)                                                       | Gets the Average.                                                        |
| [`By`](#AcousticFarFieldSPLMicWaterfallDiagram.By)                                                                 | Gets or sets the By.                                                     |
| [`CalculateTimeHistory`](#AcousticFarFieldSPLMicWaterfallDiagram.CalculateTimeHistory)                             | Gets or sets the CalculateTimeHistory.                                   |
| [`Children`](#AcousticFarFieldSPLMicWaterfallDiagram.Children)                                                     | Gets the list of children.                                               |
| [`CombinationNumber`](#AcousticFarFieldSPLMicWaterfallDiagram.CombinationNumber)                                   | Gets or sets the Combination Number for a Solution Combination result.   |
| [`Comments`](#AcousticFarFieldSPLMicWaterfallDiagram.Comments)                                                     | Gets the list of associated comments.                                    |
| [`CoordinateSystem`](#AcousticFarFieldSPLMicWaterfallDiagram.CoordinateSystem)                                     | Gets or sets the Coordinate System.                                      |
| [`CrackFrontNumber`](#AcousticFarFieldSPLMicWaterfallDiagram.CrackFrontNumber)                                     | Gets or sets the CrackFrontNumber.                                       |
| [`DampedFrequency`](#AcousticFarFieldSPLMicWaterfallDiagram.DampedFrequency)                                       | Gets the DampedFrequency.                                                |
| [`DataModelObjectCategory`](#AcousticFarFieldSPLMicWaterfallDiagram.DataModelObjectCategory)                       | Gets the current DataModelObject’s category.                             |
| [`Density`](#AcousticFarFieldSPLMicWaterfallDiagram.Density)                                                       | Gets or sets the Density.                                                |
| [`DisplayOption`](#AcousticFarFieldSPLMicWaterfallDiagram.DisplayOption)                                           | Gets or sets the DisplayOption.                                          |
| [`DisplayTime`](#AcousticFarFieldSPLMicWaterfallDiagram.DisplayTime)                                               | Gets or sets the DisplayTime.                                            |
| [`DpfEvaluation`](#AcousticFarFieldSPLMicWaterfallDiagram.DpfEvaluation)                                           | Gets or sets the DpfEvaluation.                                          |
| [`EndingRadiationAnglePhi`](#AcousticFarFieldSPLMicWaterfallDiagram.EndingRadiationAnglePhi)                       | Gets or sets the EndingRadiationAnglePhi.                                |
| [`EndingRadiationAngleTheta`](#AcousticFarFieldSPLMicWaterfallDiagram.EndingRadiationAngleTheta)                   | Gets or sets the EndingRadiationAngleTheta.                              |
| [`FarFieldMicrophoneDefinitionMethod`](#AcousticFarFieldSPLMicWaterfallDiagram.FarFieldMicrophoneDefinitionMethod) | Gets or sets the FarFieldMicrophoneDefinitionMethod.                     |
| [`Figures`](#AcousticFarFieldSPLMicWaterfallDiagram.Figures)                                                       | Gets the list of associated figures.                                     |
| [`Frequency`](#AcousticFarFieldSPLMicWaterfallDiagram.Frequency)                                                   | Gets or sets the Frequency.                                              |
| [`GlobalIDs`](#AcousticFarFieldSPLMicWaterfallDiagram.GlobalIDs)                                                   | Gets or sets the GlobalIDs.                                              |
| [`GraphControlsXAxis`](#AcousticFarFieldSPLMicWaterfallDiagram.GraphControlsXAxis)                                 | Gets or sets the GraphControlsXAxis.                                     |
| [`Identifier`](#AcousticFarFieldSPLMicWaterfallDiagram.Identifier)                                                 | Gets or sets the Identifier.                                             |
| [`Images`](#AcousticFarFieldSPLMicWaterfallDiagram.Images)                                                         | Gets the list of associated images.                                      |
| [`InternalObject`](#AcousticFarFieldSPLMicWaterfallDiagram.InternalObject)                                         | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#AcousticFarFieldSPLMicWaterfallDiagram.IsSolved)                                                     | Gets the IsSolved.                                                       |
| [`ItemType`](#AcousticFarFieldSPLMicWaterfallDiagram.ItemType)                                                     | Gets or sets the ItemType.                                               |
| [`IterationNumber`](#AcousticFarFieldSPLMicWaterfallDiagram.IterationNumber)                                       | Gets the IterationNumber.                                                |
| [`LoadStep`](#AcousticFarFieldSPLMicWaterfallDiagram.LoadStep)                                                     | Gets the LoadStep.                                                       |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMaximumOfMaximumValues)   | Get the Load Step for the maximum of maximum values.                     |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMaximumOfMinimumValues)   | Get the Load Step for the maximum of minimum values.                     |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMinimumOfMaximumValues)   | Get the Load Step for the minimum of maximum values.                     |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMinimumOfMinimumValues)   | Get the Load Step for the minimum of minimum values.                     |
| [`LoadStepNumber`](#AcousticFarFieldSPLMicWaterfallDiagram.LoadStepNumber)                                         | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#AcousticFarFieldSPLMicWaterfallDiagram.Location)                                                     | Gets or sets the Location.                                               |
| [`LogarithmicDecrement`](#AcousticFarFieldSPLMicWaterfallDiagram.LogarithmicDecrement)                             | Gets the LogarithmicDecrement.                                           |
| [`Maximum`](#AcousticFarFieldSPLMicWaterfallDiagram.Maximum)                                                       | Gets the Maximum.                                                        |
| [`MaximumOccursOn`](#AcousticFarFieldSPLMicWaterfallDiagram.MaximumOccursOn)                                       | Gets the MaximumOccursOn.                                                |
| [`MaximumOfMaximumOverTime`](#AcousticFarFieldSPLMicWaterfallDiagram.MaximumOfMaximumOverTime)                     | Gets the MaximumOfMaximumOverTime.                                       |
| [`MaximumOfMinimumOverTime`](#AcousticFarFieldSPLMicWaterfallDiagram.MaximumOfMinimumOverTime)                     | Gets the MaximumOfMinimumOverTime.                                       |
| [`Minimum`](#AcousticFarFieldSPLMicWaterfallDiagram.Minimum)                                                       | Gets the Minimum.                                                        |
| [`MinimumOccursOn`](#AcousticFarFieldSPLMicWaterfallDiagram.MinimumOccursOn)                                       | Gets the MinimumOccursOn.                                                |
| [`MinimumOfMaximumOverTime`](#AcousticFarFieldSPLMicWaterfallDiagram.MinimumOfMaximumOverTime)                     | Gets the MinimumOfMaximumOverTime.                                       |
| [`MinimumOfMinimumOverTime`](#AcousticFarFieldSPLMicWaterfallDiagram.MinimumOfMinimumOverTime)                     | Gets the MinimumOfMinimumOverTime.                                       |
| [`ModalDampingRatio`](#AcousticFarFieldSPLMicWaterfallDiagram.ModalDampingRatio)                                   | Gets the ModalDampingRatio.                                              |
| [`ModelThicknessInZDirection`](#AcousticFarFieldSPLMicWaterfallDiagram.ModelThicknessInZDirection)                 | Gets or sets the ModelThicknessInZDirection.                             |
| [`ModelType`](#AcousticFarFieldSPLMicWaterfallDiagram.ModelType)                                                   | Gets or sets the ModelType.                                              |
| [`NamedSelections`](#AcousticFarFieldSPLMicWaterfallDiagram.NamedSelections)                                       | Gets or sets the NamedSelections.                                        |
| [`Path`](#AcousticFarFieldSPLMicWaterfallDiagram.Path)                                                             | Path property.                                                           |
| [`PhiAngleEnd`](#AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleEnd)                                               | Gets or sets the PhiAngleEnd.                                            |
| [`PhiAngleNoOfDivisions`](#AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleNoOfDivisions)                           | Gets or sets the PhiAngleNoOfDivisions.                                  |
| [`PhiAngleStart`](#AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleStart)                                           | Gets or sets the PhiAngleStart.                                          |
| [`PlotData`](#AcousticFarFieldSPLMicWaterfallDiagram.PlotData)                                                     | Gets the result table.                                                   |
| [`Properties`](#AcousticFarFieldSPLMicWaterfallDiagram.Properties)                                                 | Gets the list of properties for this object.                             |
| [`RPMSelection`](#AcousticFarFieldSPLMicWaterfallDiagram.RPMSelection)                                             | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`ReferenceRMSSoundPressure`](#AcousticFarFieldSPLMicWaterfallDiagram.ReferenceRMSSoundPressure)                   | Gets or sets the ReferenceRMSSoundPressure.                              |
| [`ReferenceSoundPower`](#AcousticFarFieldSPLMicWaterfallDiagram.ReferenceSoundPower)                               | Gets or sets the ReferenceSoundPower.                                    |
| [`ReportedFrequency`](#AcousticFarFieldSPLMicWaterfallDiagram.ReportedFrequency)                                   | Gets the ReportedFrequency.                                              |
| [`ScopingMethod`](#AcousticFarFieldSPLMicWaterfallDiagram.ScopingMethod)                                           | Gets or sets the ScopingMethod.                                          |
| [`SetNumber`](#AcousticFarFieldSPLMicWaterfallDiagram.SetNumber)                                                   | Gets or sets the Set Number.                                             |
| [`SolutionCombinationDriver`](#AcousticFarFieldSPLMicWaterfallDiagram.SolutionCombinationDriver)                   | Gets or sets the SolutionCombinationDriver.                              |
| [`SolverComponentIDs`](#AcousticFarFieldSPLMicWaterfallDiagram.SolverComponentIDs)                                 | Gets or sets the SolverComponentIDs.                                     |
| [`SoundSpeed`](#AcousticFarFieldSPLMicWaterfallDiagram.SoundSpeed)                                                 | Gets or sets the SoundSpeed.                                             |
| [`SpatialRadiationAngle`](#AcousticFarFieldSPLMicWaterfallDiagram.SpatialRadiationAngle)                           | Gets or sets the SpatialRadiationAngle.                                  |
| [`SphereRadius`](#AcousticFarFieldSPLMicWaterfallDiagram.SphereRadius)                                             | Gets or sets the SphereRadius.                                           |
| [`Stability`](#AcousticFarFieldSPLMicWaterfallDiagram.Stability)                                                   | Gets the Stability.                                                      |
| [`StartingRadiationAnglePhi`](#AcousticFarFieldSPLMicWaterfallDiagram.StartingRadiationAnglePhi)                   | Gets or sets the StartingRadiationAnglePhi.                              |
| [`StartingRadiationAngleTheta`](#AcousticFarFieldSPLMicWaterfallDiagram.StartingRadiationAngleTheta)               | Gets or sets the StartingRadiationAngleTheta.                            |
| [`Substep`](#AcousticFarFieldSPLMicWaterfallDiagram.Substep)                                                       | Gets the Substep.                                                        |
| [`Suppressed`](#AcousticFarFieldSPLMicWaterfallDiagram.Suppressed)                                                 | Gets or sets the Suppressed.                                             |
| [`Surface`](#AcousticFarFieldSPLMicWaterfallDiagram.Surface)                                                       | Surface property.                                                        |
| [`SurfaceCoating`](#AcousticFarFieldSPLMicWaterfallDiagram.SurfaceCoating)                                         | SurfaceCoating property.                                                 |
| [`ThetaAngleEnd`](#AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleEnd)                                           | Gets or sets the ThetaAngleEnd.                                          |
| [`ThetaAngleNoOfDivisions`](#AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleNoOfDivisions)                       | Gets or sets the ThetaAngleNoOfDivisions.                                |
| [`ThetaAngleStart`](#AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleStart)                                       | Gets or sets the ThetaAngleStart.                                        |
| [`Time`](#AcousticFarFieldSPLMicWaterfallDiagram.Time)                                                             | Gets the Time.                                                           |
| [`TimeForMaximumOfMaximumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.TimeForMaximumOfMaximumValues)           | Get the Time for the maximum of maximum values.                          |
| [`TimeForMaximumOfMinimumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.TimeForMaximumOfMinimumValues)           | Get the Time for the maximum of minimum values.                          |
| [`TimeForMinimumOfMaximumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.TimeForMinimumOfMaximumValues)           | Get the Time for the minimum of maximum values.                          |
| [`TimeForMinimumOfMinimumValues`](#AcousticFarFieldSPLMicWaterfallDiagram.TimeForMinimumOfMinimumValues)           | Get the Time for the minimum of minimum values.                          |
| [`Total`](#AcousticFarFieldSPLMicWaterfallDiagram.Total)                                                           | Gets the Total.                                                          |
| [`VisibleProperties`](#AcousticFarFieldSPLMicWaterfallDiagram.VisibleProperties)                                   | Gets the list of properties that are visible for this object.            |
| [`Worksheet`](#AcousticFarFieldSPLMicWaterfallDiagram.Worksheet)                                                   | Get the ObjectiveWorksheet action.                                       |
| [`XCoordinate`](#AcousticFarFieldSPLMicWaterfallDiagram.XCoordinate)                                               | Gets or sets the XCoordinate.                                            |
| [`YAxisExtrusionAngle`](#AcousticFarFieldSPLMicWaterfallDiagram.YAxisExtrusionAngle)                               | Gets or sets the YAxisExtrusionAngle.                                    |
| [`YCoordinate`](#AcousticFarFieldSPLMicWaterfallDiagram.YCoordinate)                                               | Gets or sets the YCoordinate.                                            |
| [`ZCoordinate`](#AcousticFarFieldSPLMicWaterfallDiagram.ZCoordinate)                                               | Gets or sets the ZCoordinate.                                            |

<a id="property-detail"></a>

## Property detail

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Average"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Average *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.By"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.CalculateTimeHistory"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.CalculateTimeHistory *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Children"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.CombinationNumber"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.CombinationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Comments"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.CoordinateSystem"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.CrackFrontNumber"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.CrackFrontNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.DampedFrequency"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.DampedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.DataModelObjectCategory"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Density"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Density *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Density.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.DisplayOption"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.DisplayTime"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.DpfEvaluation"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.EndingRadiationAnglePhi"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.EndingRadiationAnglePhi *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.EndingRadiationAngleTheta"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.EndingRadiationAngleTheta *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.FarFieldMicrophoneDefinitionMethod"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.FarFieldMicrophoneDefinitionMethod *: [Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType](../../../../../Mechanical/DataModel/Enums/FarFieldMicrophoneDefinitionMethodType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldMicrophoneDefinitionMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Figures"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Frequency"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.GlobalIDs"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.GlobalIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.GraphControlsXAxis"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Identifier"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Identifier *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Images"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.InternalObject"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.IsSolved"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ItemType"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.IterationNumber"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.LoadStep"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMaximumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMaximumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMinimumOfMaximumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LoadStepForMinimumOfMinimumValues *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.LoadStepNumber"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Location"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.LogarithmicDecrement"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.LogarithmicDecrement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Maximum"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Maximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.MaximumOccursOn"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.MaximumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.MaximumOfMaximumOverTime"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.MaximumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.MaximumOfMinimumOverTime"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.MaximumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Minimum"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Minimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.MinimumOccursOn"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.MinimumOccursOn *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.MinimumOfMaximumOverTime"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.MinimumOfMaximumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.MinimumOfMinimumOverTime"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.MinimumOfMinimumOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ModalDampingRatio"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ModalDampingRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ModelThicknessInZDirection"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ModelThicknessInZDirection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelThicknessInZDirection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ModelType"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ModelType *: [Ansys.Mechanical.DataModel.Enums.ModelType](../../../../../Mechanical/DataModel/Enums/ModelType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.NamedSelections"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.NamedSelections *: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Path"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleEnd"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleEnd *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleNoOfDivisions"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleNoOfDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleStart"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.PhiAngleStart *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.PlotData"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Properties"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.RPMSelection"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ReferenceRMSSoundPressure"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ReferenceRMSSoundPressure *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRMSSoundPressure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ReferenceSoundPower"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ReferenceSoundPower *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceSoundPower.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ReportedFrequency"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ScopingMethod"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.SetNumber"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.SolutionCombinationDriver"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.SolverComponentIDs"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.SolverComponentIDs *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.SoundSpeed"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.SoundSpeed *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SoundSpeed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.SpatialRadiationAngle"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.SpatialRadiationAngle *: [Ansys.Mechanical.DataModel.Enums.SpatialRadiationType](../../../../../Mechanical/DataModel/Enums/SpatialRadiationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SpatialRadiationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialRadiationAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.SphereRadius"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.SphereRadius *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Stability"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Stability *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.StartingRadiationAnglePhi"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.StartingRadiationAnglePhi *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.StartingRadiationAngleTheta"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.StartingRadiationAngleTheta *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Substep"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Suppressed"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Surface"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.SurfaceCoating"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.SurfaceCoating *: [Ansys.ACT.Automation.Mechanical.SurfaceCoating](../../SurfaceCoating.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SurfaceCoating) | [None](https://docs.python.org/3/library/constants.html#None)*

SurfaceCoating property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleEnd"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleEnd *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleNoOfDivisions"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleNoOfDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleStart"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ThetaAngleStart *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Time"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.TimeForMaximumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.TimeForMaximumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.TimeForMinimumOfMaximumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.TimeForMinimumOfMinimumValues *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Total"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.VisibleProperties"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Worksheet"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.Worksheet *: [Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet](../../AcousticsFarFieldResultWorksheet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.XCoordinate"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.YAxisExtrusionAngle"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.YAxisExtrusionAngle *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisExtrusionAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.YCoordinate"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ZCoordinate"></a>

### *property* AcousticFarFieldSPLMicWaterfallDiagram.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Activate"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.AddAlert"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.AddAlert() → [Ansys.ACT.Automation.Mechanical.Results.Alert](../Alert.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Alert)

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.AddComment"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.AddConvergence"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.AddConvergence() → [Ansys.ACT.Automation.Mechanical.Results.Convergence](../Convergence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Convergence)

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.AddFigure"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.AddImage"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ClearGeneratedData"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.CopyTo"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.CreateParameter"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.CreateResultsAtAllSets"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.CreateResultsAtAllSets() → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Delete"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.Duplicate"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.DuplicateWithoutResults"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.DuplicateWithoutResults() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.EvaluateAllResults"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ExportAnimation"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ExportToTextFile"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.ExportToTextFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ExportToWAVFile"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.ExportToWAVFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.ExportToXMLFile"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.ExportToXMLFile(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.FetchRemoteResults"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.GetChildren"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.GetParameter"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.GroupAllSimilarChildren"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.GroupSimilarObjects"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.PromoteToNamedSelection"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.PropertyByAPIName"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.PropertyByName"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.RemoveParameter"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.RenameBasedOnDefinition"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldSPLMicWaterfallDiagram.RetrieveResult"></a>

### AcousticFarFieldSPLMicWaterfallDiagram.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

