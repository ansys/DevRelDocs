# `AcousticFarFieldResult`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticFarFieldResult.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportToXMLFile`](#AcousticFarFieldResult.ExportToXMLFile)                 | Run the ExportToXMLFile action.                                                   |
| [`ExportToWAVFile`](#AcousticFarFieldResult.ExportToWAVFile)                 | Run the ExportToWAVFile action.                                                   |
| [`ClearGeneratedData`](#AcousticFarFieldResult.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#AcousticFarFieldResult.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`FetchRemoteResults`](#AcousticFarFieldResult.FetchRemoteResults)           | Run the FetchRemoteResult action.                                                 |
| [`ExportToTextFile`](#AcousticFarFieldResult.ExportToTextFile)               | Run the ExportToTextFile action.                                                  |
| [`ExportAnimation`](#AcousticFarFieldResult.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`DuplicateWithoutResults`](#AcousticFarFieldResult.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`CreateResultsAtAllSets`](#AcousticFarFieldResult.CreateResultsAtAllSets)   | Creates results at all sets for results under a solution.                         |
| [`PromoteToNamedSelection`](#AcousticFarFieldResult.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`CreateParameter`](#AcousticFarFieldResult.CreateParameter)                 | CreateParameter method.                                                           |
| [`AddAlert`](#AcousticFarFieldResult.AddAlert)                               | Creates a new Alert                                                               |
| [`AddConvergence`](#AcousticFarFieldResult.AddConvergence)                   | Creates a new Convergence                                                         |
| [`RenameBasedOnDefinition`](#AcousticFarFieldResult.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AcousticFarFieldResult.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticFarFieldResult.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticFarFieldResult.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticFarFieldResult.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AcousticFarFieldResult.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AcousticFarFieldResult.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticFarFieldResult.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticFarFieldResult.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticFarFieldResult.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticFarFieldResult.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticFarFieldResult.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`GetParameter`](#AcousticFarFieldResult.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticFarFieldResult.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`FarFieldMicrophoneDefinitionMethod`](#AcousticFarFieldResult.FarFieldMicrophoneDefinitionMethod)   | Gets or sets the FarFieldMicrophoneDefinitionMethod.                   |
| [`Worksheet`](#AcousticFarFieldResult.Worksheet)                                                     | Get the ObjectiveWorksheet action.                                     |
| [`ReportedFrequency`](#AcousticFarFieldResult.ReportedFrequency)                                     | Gets the ReportedFrequency.                                            |
| [`DampedFrequency`](#AcousticFarFieldResult.DampedFrequency)                                         | Gets the DampedFrequency.                                              |
| [`InternalObject`](#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`LogarithmicDecrement`](#AcousticFarFieldResult.LogarithmicDecrement)                               | Gets the LogarithmicDecrement.                                         |
| [`ModalDampingRatio`](#AcousticFarFieldResult.ModalDampingRatio)                                     | Gets the ModalDampingRatio.                                            |
| [`PhiAngleNoOfDivisions`](#AcousticFarFieldResult.PhiAngleNoOfDivisions)                             | Gets or sets the PhiAngleNoOfDivisions.                                |
| [`ThetaAngleNoOfDivisions`](#AcousticFarFieldResult.ThetaAngleNoOfDivisions)                         | Gets or sets the ThetaAngleNoOfDivisions.                              |
| [`Stability`](#AcousticFarFieldResult.Stability)                                                     | Gets the Stability.                                                    |
| [`Density`](#AcousticFarFieldResult.Density)                                                         | Gets or sets the Density.                                              |
| [`XCoordinate`](#AcousticFarFieldResult.XCoordinate)                                                 | Gets or sets the XCoordinate.                                          |
| [`YCoordinate`](#AcousticFarFieldResult.YCoordinate)                                                 | Gets or sets the YCoordinate.                                          |
| [`ZCoordinate`](#AcousticFarFieldResult.ZCoordinate)                                                 | Gets or sets the ZCoordinate.                                          |
| [`ModelThicknessInZDirection`](#AcousticFarFieldResult.ModelThicknessInZDirection)                   | Gets or sets the ModelThicknessInZDirection.                           |
| [`ReferenceRMSSoundPressure`](#AcousticFarFieldResult.ReferenceRMSSoundPressure)                     | Gets or sets the ReferenceRMSSoundPressure.                            |
| [`ReferenceSoundPower`](#AcousticFarFieldResult.ReferenceSoundPower)                                 | Gets or sets the ReferenceSoundPower.                                  |
| [`Frequency`](#AcousticFarFieldResult.Frequency)                                                     | Gets or sets the Frequency.                                            |
| [`SoundSpeed`](#AcousticFarFieldResult.SoundSpeed)                                                   | Gets or sets the SoundSpeed.                                           |
| [`EndingRadiationAnglePhi`](#AcousticFarFieldResult.EndingRadiationAnglePhi)                         | Gets or sets the EndingRadiationAnglePhi.                              |
| [`EndingRadiationAngleTheta`](#AcousticFarFieldResult.EndingRadiationAngleTheta)                     | Gets or sets the EndingRadiationAngleTheta.                            |
| [`StartingRadiationAnglePhi`](#AcousticFarFieldResult.StartingRadiationAnglePhi)                     | Gets or sets the StartingRadiationAnglePhi.                            |
| [`StartingRadiationAngleTheta`](#AcousticFarFieldResult.StartingRadiationAngleTheta)                 | Gets or sets the StartingRadiationAngleTheta.                          |
| [`PhiAngleEnd`](#AcousticFarFieldResult.PhiAngleEnd)                                                 | Gets or sets the PhiAngleEnd.                                          |
| [`ThetaAngleEnd`](#AcousticFarFieldResult.ThetaAngleEnd)                                             | Gets or sets the ThetaAngleEnd.                                        |
| [`SphereRadius`](#AcousticFarFieldResult.SphereRadius)                                               | Gets or sets the SphereRadius.                                         |
| [`PhiAngleStart`](#AcousticFarFieldResult.PhiAngleStart)                                             | Gets or sets the PhiAngleStart.                                        |
| [`ThetaAngleStart`](#AcousticFarFieldResult.ThetaAngleStart)                                         | Gets or sets the ThetaAngleStart.                                      |
| [`YAxisExtrusionAngle`](#AcousticFarFieldResult.YAxisExtrusionAngle)                                 | Gets or sets the YAxisExtrusionAngle.                                  |
| [`ModelType`](#AcousticFarFieldResult.ModelType)                                                     | Gets or sets the ModelType.                                            |
| [`SpatialRadiationAngle`](#AcousticFarFieldResult.SpatialRadiationAngle)                             | Gets or sets the SpatialRadiationAngle.                                |
| [`DataModelObjectCategory`](#AcousticFarFieldResult.DataModelObjectCategory)                         | Gets the current DataModelObject’s category.                           |
| [`PlotData`](#AcousticFarFieldResult.PlotData)                                                       | Gets the result table.                                                 |
| [`Location`](#AcousticFarFieldResult.Location)                                                       | Gets or sets the Location.                                             |
| [`TimeForMinimumOfMinimumValues`](#AcousticFarFieldResult.TimeForMinimumOfMinimumValues)             | Get the Time for the minimum of minimum values.                        |
| [`TimeForMinimumOfMaximumValues`](#AcousticFarFieldResult.TimeForMinimumOfMaximumValues)             | Get the Time for the minimum of maximum values.                        |
| [`LoadStepForMinimumOfMinimumValues`](#AcousticFarFieldResult.LoadStepForMinimumOfMinimumValues)     | Get the Load Step for the minimum of minimum values.                   |
| [`LoadStepForMinimumOfMaximumValues`](#AcousticFarFieldResult.LoadStepForMinimumOfMaximumValues)     | Get the Load Step for the minimum of maximum values.                   |
| [`TimeForMaximumOfMinimumValues`](#AcousticFarFieldResult.TimeForMaximumOfMinimumValues)             | Get the Time for the maximum of minimum values.                        |
| [`TimeForMaximumOfMaximumValues`](#AcousticFarFieldResult.TimeForMaximumOfMaximumValues)             | Get the Time for the maximum of maximum values.                        |
| [`LoadStepForMaximumOfMinimumValues`](#AcousticFarFieldResult.LoadStepForMaximumOfMinimumValues)     | Get the Load Step for the maximum of minimum values.                   |
| [`LoadStepForMaximumOfMaximumValues`](#AcousticFarFieldResult.LoadStepForMaximumOfMaximumValues)     | Get the Load Step for the maximum of maximum values.                   |
| [`IsSolved`](#AcousticFarFieldResult.IsSolved)                                                       | Gets the IsSolved.                                                     |
| [`CoordinateSystem`](#AcousticFarFieldResult.CoordinateSystem)                                       | Gets or sets the Coordinate System.                                    |
| [`ScopingMethod`](#AcousticFarFieldResult.ScopingMethod)                                             | Gets or sets the ScopingMethod.                                        |
| [`SetNumber`](#AcousticFarFieldResult.SetNumber)                                                     | Gets or sets the Set Number.                                           |
| [`CombinationNumber`](#AcousticFarFieldResult.CombinationNumber)                                     | Gets or sets the Combination Number for a Solution Combination result. |
| [`SolutionCombinationDriver`](#AcousticFarFieldResult.SolutionCombinationDriver)                     | Gets or sets the SolutionCombinationDriver.                            |
| [`Path`](#AcousticFarFieldResult.Path)                                                               | Path property.                                                         |
| [`Surface`](#AcousticFarFieldResult.Surface)                                                         | Surface property.                                                      |
| [`NamedSelections`](#AcousticFarFieldResult.NamedSelections)                                         | Gets or sets the NamedSelections.                                      |
| [`WaterfallPanelShowTextOnMosaic`](#AcousticFarFieldResult.WaterfallPanelShowTextOnMosaic)           | Gets or sets the Waterfall Panel Mosaic Text Property.                 |
| [`CrackFrontNumber`](#AcousticFarFieldResult.CrackFrontNumber)                                       | Gets or sets the CrackFrontNumber.                                     |
| [`GlobalIDs`](#AcousticFarFieldResult.GlobalIDs)                                                     | Gets or sets the GlobalIDs.                                            |
| [`Identifier`](#AcousticFarFieldResult.Identifier)                                                   | Gets or sets the Identifier.                                           |
| [`IterationNumber`](#AcousticFarFieldResult.IterationNumber)                                         | Gets the IterationNumber.                                              |
| [`LoadStep`](#AcousticFarFieldResult.LoadStep)                                                       | Gets the LoadStep.                                                     |
| [`MaximumOccursOn`](#AcousticFarFieldResult.MaximumOccursOn)                                         | Gets the MaximumOccursOn.                                              |
| [`MinimumOccursOn`](#AcousticFarFieldResult.MinimumOccursOn)                                         | Gets the MinimumOccursOn.                                              |
| [`LoadStepNumber`](#AcousticFarFieldResult.LoadStepNumber)                                           | Gets or sets the LoadStepNumber.                                       |
| [`SolverComponentIDs`](#AcousticFarFieldResult.SolverComponentIDs)                                   | Gets or sets the SolverComponentIDs.                                   |
| [`Substep`](#AcousticFarFieldResult.Substep)                                                         | Gets the Substep.                                                      |
| [`Average`](#AcousticFarFieldResult.Average)                                                         | Gets the Average.                                                      |
| [`Maximum`](#AcousticFarFieldResult.Maximum)                                                         | Gets the Maximum.                                                      |
| [`MaximumOfMaximumOverTime`](#AcousticFarFieldResult.MaximumOfMaximumOverTime)                       | Gets the MaximumOfMaximumOverTime.                                     |
| [`MaximumOfMinimumOverTime`](#AcousticFarFieldResult.MaximumOfMinimumOverTime)                       | Gets the MaximumOfMinimumOverTime.                                     |
| [`Minimum`](#AcousticFarFieldResult.Minimum)                                                         | Gets the Minimum.                                                      |
| [`MinimumOfMaximumOverTime`](#AcousticFarFieldResult.MinimumOfMaximumOverTime)                       | Gets the MinimumOfMaximumOverTime.                                     |
| [`MinimumOfMinimumOverTime`](#AcousticFarFieldResult.MinimumOfMinimumOverTime)                       | Gets the MinimumOfMinimumOverTime.                                     |
| [`Time`](#AcousticFarFieldResult.Time)                                                               | Gets the Time.                                                         |
| [`DisplayTime`](#AcousticFarFieldResult.DisplayTime)                                                 | Gets or sets the DisplayTime.                                          |
| [`GraphControlsXAxis`](#AcousticFarFieldResult.GraphControlsXAxis)                                   | Gets or sets the GraphControlsXAxis.                                   |
| [`DisplayOption`](#AcousticFarFieldResult.DisplayOption)                                             | Gets or sets the DisplayOption.                                        |
| [`DpfEvaluation`](#AcousticFarFieldResult.DpfEvaluation)                                             | Gets or sets the DpfEvaluation.                                        |
| [`By`](#AcousticFarFieldResult.By)                                                                   | Gets or sets the By.                                                   |
| [`ItemType`](#AcousticFarFieldResult.ItemType)                                                       | Gets or sets the ItemType.                                             |
| [`CalculateTimeHistory`](#AcousticFarFieldResult.CalculateTimeHistory)                               | Gets or sets the CalculateTimeHistory.                                 |
| [`Suppressed`](#AcousticFarFieldResult.Suppressed)                                                   | Gets or sets the Suppressed.                                           |
| [`Children`](#AcousticFarFieldResult.Children)                                                       | Gets the list of children.                                             |
| [`Comments`](#AcousticFarFieldResult.Comments)                                                       | Gets the list of associated comments.                                  |
| [`Figures`](#AcousticFarFieldResult.Figures)                                                         | Gets the list of associated figures.                                   |
| [`Images`](#AcousticFarFieldResult.Images)                                                           | Gets the list of associated images.                                    |
| [`InternalObject`](#id0)                                                                             | Gets the internal object. For advanced usage only.                     |
| [`Properties`](#AcousticFarFieldResult.Properties)                                                   | Gets the list of properties for this object.                           |
| [`VisibleProperties`](#AcousticFarFieldResult.VisibleProperties)                                     | Gets the list of properties that are visible for this object.          |

<a id="property-detail"></a>

## Property detail

<a id="AcousticFarFieldResult.FarFieldMicrophoneDefinitionMethod"></a>

### *property* AcousticFarFieldResult.FarFieldMicrophoneDefinitionMethod *: [Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType](../../../../../Mechanical/DataModel/Enums/FarFieldMicrophoneDefinitionMethodType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FarFieldMicrophoneDefinitionMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldMicrophoneDefinitionMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Worksheet"></a>

### *property* AcousticFarFieldResult.Worksheet *: [Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet](../../AcousticsFarFieldResultWorksheet.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AcousticsFarFieldResultWorksheet) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the ObjectiveWorksheet action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ReportedFrequency"></a>

### *property* AcousticFarFieldResult.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.DampedFrequency"></a>

### *property* AcousticFarFieldResult.DampedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.InternalObject"></a>

### *property* AcousticFarFieldResult.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LogarithmicDecrement"></a>

### *property* AcousticFarFieldResult.LogarithmicDecrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LogarithmicDecrement.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ModalDampingRatio"></a>

### *property* AcousticFarFieldResult.ModalDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ModalDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PhiAngleNoOfDivisions"></a>

### *property* AcousticFarFieldResult.PhiAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ThetaAngleNoOfDivisions"></a>

### *property* AcousticFarFieldResult.ThetaAngleNoOfDivisions *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleNoOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Stability"></a>

### *property* AcousticFarFieldResult.Stability *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Stability.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Density"></a>

### *property* AcousticFarFieldResult.Density *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Density.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.XCoordinate"></a>

### *property* AcousticFarFieldResult.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.YCoordinate"></a>

### *property* AcousticFarFieldResult.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ZCoordinate"></a>

### *property* AcousticFarFieldResult.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ModelThicknessInZDirection"></a>

### *property* AcousticFarFieldResult.ModelThicknessInZDirection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelThicknessInZDirection.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ReferenceRMSSoundPressure"></a>

### *property* AcousticFarFieldResult.ReferenceRMSSoundPressure *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceRMSSoundPressure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ReferenceSoundPower"></a>

### *property* AcousticFarFieldResult.ReferenceSoundPower *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceSoundPower.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Frequency"></a>

### *property* AcousticFarFieldResult.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SoundSpeed"></a>

### *property* AcousticFarFieldResult.SoundSpeed *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SoundSpeed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.EndingRadiationAnglePhi"></a>

### *property* AcousticFarFieldResult.EndingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.EndingRadiationAngleTheta"></a>

### *property* AcousticFarFieldResult.EndingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.StartingRadiationAnglePhi"></a>

### *property* AcousticFarFieldResult.StartingRadiationAnglePhi *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAnglePhi.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.StartingRadiationAngleTheta"></a>

### *property* AcousticFarFieldResult.StartingRadiationAngleTheta *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartingRadiationAngleTheta.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PhiAngleEnd"></a>

### *property* AcousticFarFieldResult.PhiAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ThetaAngleEnd"></a>

### *property* AcousticFarFieldResult.ThetaAngleEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleEnd.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SphereRadius"></a>

### *property* AcousticFarFieldResult.SphereRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SphereRadius.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PhiAngleStart"></a>

### *property* AcousticFarFieldResult.PhiAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhiAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ThetaAngleStart"></a>

### *property* AcousticFarFieldResult.ThetaAngleStart *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThetaAngleStart.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.YAxisExtrusionAngle"></a>

### *property* AcousticFarFieldResult.YAxisExtrusionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YAxisExtrusionAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ModelType"></a>

### *property* AcousticFarFieldResult.ModelType *: [Ansys.Mechanical.DataModel.Enums.ModelType](../../../../../Mechanical/DataModel/Enums/ModelType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ModelType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SpatialRadiationAngle"></a>

### *property* AcousticFarFieldResult.SpatialRadiationAngle *: [Ansys.Mechanical.DataModel.Enums.SpatialRadiationType](../../../../../Mechanical/DataModel/Enums/SpatialRadiationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpatialRadiationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialRadiationAngle.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.DataModelObjectCategory"></a>

### *property* AcousticFarFieldResult.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PlotData"></a>

### *property* AcousticFarFieldResult.PlotData *: [Ansys.Mechanical.DataModel.Results.ResultDataTable](../../../../../Mechanical/DataModel/Results/ResultDataTable.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Results.ResultDataTable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the result table.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Location"></a>

### *property* AcousticFarFieldResult.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.TimeForMinimumOfMinimumValues"></a>

### *property* AcousticFarFieldResult.TimeForMinimumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.TimeForMinimumOfMaximumValues"></a>

### *property* AcousticFarFieldResult.TimeForMinimumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LoadStepForMinimumOfMinimumValues"></a>

### *property* AcousticFarFieldResult.LoadStepForMinimumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LoadStepForMinimumOfMaximumValues"></a>

### *property* AcousticFarFieldResult.LoadStepForMinimumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the minimum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.TimeForMaximumOfMinimumValues"></a>

### *property* AcousticFarFieldResult.TimeForMaximumOfMinimumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.TimeForMaximumOfMaximumValues"></a>

### *property* AcousticFarFieldResult.TimeForMaximumOfMaximumValues *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Time for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LoadStepForMaximumOfMinimumValues"></a>

### *property* AcousticFarFieldResult.LoadStepForMaximumOfMinimumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of minimum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LoadStepForMaximumOfMaximumValues"></a>

### *property* AcousticFarFieldResult.LoadStepForMaximumOfMaximumValues *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Load Step for the maximum of maximum values.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.IsSolved"></a>

### *property* AcousticFarFieldResult.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CoordinateSystem"></a>

### *property* AcousticFarFieldResult.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.
Accepts/Returns None for Solution Coordinate System in the general case (if applicable).
Accepts/Returns None for Fiber Coordinate System for a result that is sub scoped by ply.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ScopingMethod"></a>

### *property* AcousticFarFieldResult.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SetNumber"></a>

### *property* AcousticFarFieldResult.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Set Number.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CombinationNumber"></a>

### *property* AcousticFarFieldResult.CombinationNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Combination Number for a Solution Combination result.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SolutionCombinationDriver"></a>

### *property* AcousticFarFieldResult.SolutionCombinationDriver *: [Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle](../../../../../Mechanical/DataModel/Enums/SolutionCombinationDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionCombinationDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionCombinationDriver.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Path"></a>

### *property* AcousticFarFieldResult.Path *: [Ansys.ACT.Automation.Mechanical.Path](../../Path.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path) | [None](https://docs.python.org/3/library/constants.html#None)*

Path property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Surface"></a>

### *property* AcousticFarFieldResult.Surface *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Surface property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.NamedSelections"></a>

### *property* AcousticFarFieldResult.NamedSelections *: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.WaterfallPanelShowTextOnMosaic"></a>

### *property* AcousticFarFieldResult.WaterfallPanelShowTextOnMosaic *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Waterfall Panel Mosaic Text Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CrackFrontNumber"></a>

### *property* AcousticFarFieldResult.CrackFrontNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GlobalIDs"></a>

### *property* AcousticFarFieldResult.GlobalIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Identifier"></a>

### *property* AcousticFarFieldResult.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Identifier.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.IterationNumber"></a>

### *property* AcousticFarFieldResult.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LoadStep"></a>

### *property* AcousticFarFieldResult.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.MaximumOccursOn"></a>

### *property* AcousticFarFieldResult.MaximumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.MinimumOccursOn"></a>

### *property* AcousticFarFieldResult.MinimumOccursOn *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOccursOn.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.LoadStepNumber"></a>

### *property* AcousticFarFieldResult.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.SolverComponentIDs"></a>

### *property* AcousticFarFieldResult.SolverComponentIDs *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverComponentIDs.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Substep"></a>

### *property* AcousticFarFieldResult.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Average"></a>

### *property* AcousticFarFieldResult.Average *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Average.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Maximum"></a>

### *property* AcousticFarFieldResult.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.MaximumOfMaximumOverTime"></a>

### *property* AcousticFarFieldResult.MaximumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.MaximumOfMinimumOverTime"></a>

### *property* AcousticFarFieldResult.MaximumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Minimum"></a>

### *property* AcousticFarFieldResult.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.MinimumOfMaximumOverTime"></a>

### *property* AcousticFarFieldResult.MinimumOfMaximumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMaximumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.MinimumOfMinimumOverTime"></a>

### *property* AcousticFarFieldResult.MinimumOfMinimumOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumOfMinimumOverTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Time"></a>

### *property* AcousticFarFieldResult.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.DisplayTime"></a>

### *property* AcousticFarFieldResult.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GraphControlsXAxis"></a>

### *property* AcousticFarFieldResult.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis](../../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphControlsXAxis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.DisplayOption"></a>

### *property* AcousticFarFieldResult.DisplayOption *: [Ansys.Mechanical.DataModel.Enums.ResultAveragingType](../../../../../Mechanical/DataModel/Enums/ResultAveragingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultAveragingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayOption.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.DpfEvaluation"></a>

### *property* AcousticFarFieldResult.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.By"></a>

### *property* AcousticFarFieldResult.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ItemType"></a>

### *property* AcousticFarFieldResult.ItemType *: [Ansys.Mechanical.DataModel.Enums.ResultFileItemType](../../../../../Mechanical/DataModel/Enums/ResultFileItemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileItemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ItemType.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CalculateTimeHistory"></a>

### *property* AcousticFarFieldResult.CalculateTimeHistory *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateTimeHistory.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Suppressed"></a>

### *property* AcousticFarFieldResult.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Children"></a>

### *property* AcousticFarFieldResult.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Comments"></a>

### *property* AcousticFarFieldResult.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Figures"></a>

### *property* AcousticFarFieldResult.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Images"></a>

### *property* AcousticFarFieldResult.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticFarFieldResult.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Properties"></a>

### *property* AcousticFarFieldResult.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.VisibleProperties"></a>

### *property* AcousticFarFieldResult.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticFarFieldResult.ExportToXMLFile"></a>

### AcousticFarFieldResult.ExportToXMLFile(filePath: System.String)

Run the ExportToXMLFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ExportToWAVFile"></a>

### AcousticFarFieldResult.ExportToWAVFile(filePath: System.String)

Run the ExportToWAVFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ClearGeneratedData"></a>

### AcousticFarFieldResult.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.EvaluateAllResults"></a>

### AcousticFarFieldResult.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.FetchRemoteResults"></a>

### AcousticFarFieldResult.FetchRemoteResults()

Run the FetchRemoteResult action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ExportToTextFile"></a>

### AcousticFarFieldResult.ExportToTextFile(filePath: System.String)

Run the ExportToTextFile action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.ExportAnimation"></a>

### AcousticFarFieldResult.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.DuplicateWithoutResults"></a>

### AcousticFarFieldResult.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CreateResultsAtAllSets"></a>

### AcousticFarFieldResult.CreateResultsAtAllSets()

Creates results at all sets for results under a solution.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PromoteToNamedSelection"></a>

### AcousticFarFieldResult.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CreateParameter"></a>

### AcousticFarFieldResult.CreateParameter(propName: System.String)

CreateParameter method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.AddAlert"></a>

### AcousticFarFieldResult.AddAlert()

Creates a new Alert

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.AddConvergence"></a>

### AcousticFarFieldResult.AddConvergence()

Creates a new Convergence

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.RenameBasedOnDefinition"></a>

### AcousticFarFieldResult.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Delete"></a>

### AcousticFarFieldResult.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetChildren"></a>

### AcousticFarFieldResult.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticFarFieldResult.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.AddComment"></a>

### AcousticFarFieldResult.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.AddFigure"></a>

### AcousticFarFieldResult.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.AddImage"></a>

### AcousticFarFieldResult.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Activate"></a>

### AcousticFarFieldResult.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.CopyTo"></a>

### AcousticFarFieldResult.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.Duplicate"></a>

### AcousticFarFieldResult.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GroupAllSimilarChildren"></a>

### AcousticFarFieldResult.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GroupSimilarObjects"></a>

### AcousticFarFieldResult.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PropertyByName"></a>

### AcousticFarFieldResult.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.PropertyByAPIName"></a>

### AcousticFarFieldResult.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.GetParameter"></a>

### AcousticFarFieldResult.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldResult.RemoveParameter"></a>

### AcousticFarFieldResult.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

