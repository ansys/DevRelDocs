# `ContactNumberWithLargePenetrationTracker`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactNumberWithLargePenetrationTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactNumberWithLargePenetrationTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactNumberWithLargePenetrationTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactNumberWithLargePenetrationTracker.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactNumberWithLargePenetrationTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactNumberWithLargePenetrationTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ContactNumberWithLargePenetrationTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ContactNumberWithLargePenetrationTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactNumberWithLargePenetrationTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactNumberWithLargePenetrationTracker.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactNumberWithLargePenetrationTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ContactNumberWithLargePenetrationTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ContactNumberWithLargePenetrationTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#ContactNumberWithLargePenetrationTracker.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactNumberWithLargePenetrationTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactNumberWithLargePenetrationTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactNumberWithLargePenetrationTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactNumberWithLargePenetrationTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactNumberWithLargePenetrationTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactNumberWithLargePenetrationTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactNumberWithLargePenetrationTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AccelerationType`](#ContactNumberWithLargePenetrationTracker.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`BoundaryCondition`](#ContactNumberWithLargePenetrationTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`ChartDimensions`](#ContactNumberWithLargePenetrationTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`ChartViewingStyle`](#ContactNumberWithLargePenetrationTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`Children`](#ContactNumberWithLargePenetrationTracker.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#ContactNumberWithLargePenetrationTracker.Comments)                                       | Gets the list of associated comments.                         |
| [`ContactRegion`](#ContactNumberWithLargePenetrationTracker.ContactRegion)                             | Gets or sets the ContactRegion.                               |
| [`CoordinateSystem`](#ContactNumberWithLargePenetrationTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`CurvesAppearanceDisplay`](#ContactNumberWithLargePenetrationTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`CutFrequency`](#ContactNumberWithLargePenetrationTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`DataModelObjectCategory`](#ContactNumberWithLargePenetrationTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`DeformationType`](#ContactNumberWithLargePenetrationTracker.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`DpfEvaluation`](#ContactNumberWithLargePenetrationTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`Duration`](#ContactNumberWithLargePenetrationTracker.Duration)                                       | Gets or sets the Duration.                                    |
| [`EnhancedTracking`](#ContactNumberWithLargePenetrationTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`FilterMaximum`](#ContactNumberWithLargePenetrationTracker.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactNumberWithLargePenetrationTracker.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FilterType`](#ContactNumberWithLargePenetrationTracker.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`FrequencyAtMaximumAmplitude`](#ContactNumberWithLargePenetrationTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`GeometrySelectionString`](#ContactNumberWithLargePenetrationTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`Images`](#ContactNumberWithLargePenetrationTracker.Images)                                           | Gets the list of associated images.                           |
| [`ImaginaryAtMaximumAmplitude`](#ContactNumberWithLargePenetrationTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`InternalObject`](#ContactNumberWithLargePenetrationTracker.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`IsSolved`](#ContactNumberWithLargePenetrationTracker.IsSolved)                                       | Gets the IsSolved.                                            |
| [`LoadStepNumber`](#ContactNumberWithLargePenetrationTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`Location`](#ContactNumberWithLargePenetrationTracker.Location)                                       | Gets or sets the Location.                                    |
| [`Maximum`](#ContactNumberWithLargePenetrationTracker.Maximum)                                         | Gets the Maximum.                                             |
| [`MaximumAmplitude`](#ContactNumberWithLargePenetrationTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactNumberWithLargePenetrationTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Minimum`](#ContactNumberWithLargePenetrationTracker.Minimum)                                         | Gets the Minimum.                                             |
| [`MinimumFrequency`](#ContactNumberWithLargePenetrationTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`NormalOrientation`](#ContactNumberWithLargePenetrationTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`PhaseAngle`](#ContactNumberWithLargePenetrationTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`Properties`](#ContactNumberWithLargePenetrationTracker.Properties)                                   | Gets the list of properties for this object.                  |
| [`RealAtMaximumAmplitude`](#ContactNumberWithLargePenetrationTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`ReportedFrequency`](#ContactNumberWithLargePenetrationTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`RequestedFrequency`](#ContactNumberWithLargePenetrationTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`ResultChartType`](#ContactNumberWithLargePenetrationTracker.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`SectorNumber`](#ContactNumberWithLargePenetrationTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`ShearOrientation`](#ContactNumberWithLargePenetrationTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`SpatialResolution`](#ContactNumberWithLargePenetrationTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`Spring`](#ContactNumberWithLargePenetrationTracker.Spring)                                           | Gets or sets the Spring.                                      |
| [`StressStrainType`](#ContactNumberWithLargePenetrationTracker.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`Suppressed`](#ContactNumberWithLargePenetrationTracker.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TimeHistoryDisplay`](#ContactNumberWithLargePenetrationTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`UseParentFrequencyRange`](#ContactNumberWithLargePenetrationTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`VelocityType`](#ContactNumberWithLargePenetrationTracker.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`VisibleProperties`](#ContactNumberWithLargePenetrationTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XAxisValues`](#ContactNumberWithLargePenetrationTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |

<a id="property-detail"></a>

## Property detail

<a id="ContactNumberWithLargePenetrationTracker.AccelerationType"></a>

### *property* ContactNumberWithLargePenetrationTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.BoundaryCondition"></a>

### *property* ContactNumberWithLargePenetrationTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ChartDimensions"></a>

### *property* ContactNumberWithLargePenetrationTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ChartViewingStyle"></a>

### *property* ContactNumberWithLargePenetrationTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Children"></a>

### *property* ContactNumberWithLargePenetrationTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Comments"></a>

### *property* ContactNumberWithLargePenetrationTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ContactRegion"></a>

### *property* ContactNumberWithLargePenetrationTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.CoordinateSystem"></a>

### *property* ContactNumberWithLargePenetrationTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.CurvesAppearanceDisplay"></a>

### *property* ContactNumberWithLargePenetrationTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.CutFrequency"></a>

### *property* ContactNumberWithLargePenetrationTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.DataModelObjectCategory"></a>

### *property* ContactNumberWithLargePenetrationTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.DeformationType"></a>

### *property* ContactNumberWithLargePenetrationTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.DpfEvaluation"></a>

### *property* ContactNumberWithLargePenetrationTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Duration"></a>

### *property* ContactNumberWithLargePenetrationTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.EnhancedTracking"></a>

### *property* ContactNumberWithLargePenetrationTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.FilterMaximum"></a>

### *property* ContactNumberWithLargePenetrationTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.FilterMinimum"></a>

### *property* ContactNumberWithLargePenetrationTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.FilterType"></a>

### *property* ContactNumberWithLargePenetrationTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactNumberWithLargePenetrationTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GeometrySelectionString"></a>

### *property* ContactNumberWithLargePenetrationTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Images"></a>

### *property* ContactNumberWithLargePenetrationTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactNumberWithLargePenetrationTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.InternalObject"></a>

### *property* ContactNumberWithLargePenetrationTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.IsSolved"></a>

### *property* ContactNumberWithLargePenetrationTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.LoadStepNumber"></a>

### *property* ContactNumberWithLargePenetrationTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Location"></a>

### *property* ContactNumberWithLargePenetrationTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Maximum"></a>

### *property* ContactNumberWithLargePenetrationTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.MaximumAmplitude"></a>

### *property* ContactNumberWithLargePenetrationTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.MaximumFrequency"></a>

### *property* ContactNumberWithLargePenetrationTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Minimum"></a>

### *property* ContactNumberWithLargePenetrationTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.MinimumFrequency"></a>

### *property* ContactNumberWithLargePenetrationTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.NormalOrientation"></a>

### *property* ContactNumberWithLargePenetrationTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.PhaseAngle"></a>

### *property* ContactNumberWithLargePenetrationTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Properties"></a>

### *property* ContactNumberWithLargePenetrationTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.RealAtMaximumAmplitude"></a>

### *property* ContactNumberWithLargePenetrationTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ReportedFrequency"></a>

### *property* ContactNumberWithLargePenetrationTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.RequestedFrequency"></a>

### *property* ContactNumberWithLargePenetrationTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ResultChartType"></a>

### *property* ContactNumberWithLargePenetrationTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.SectorNumber"></a>

### *property* ContactNumberWithLargePenetrationTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ShearOrientation"></a>

### *property* ContactNumberWithLargePenetrationTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.SpatialResolution"></a>

### *property* ContactNumberWithLargePenetrationTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Spring"></a>

### *property* ContactNumberWithLargePenetrationTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.StressStrainType"></a>

### *property* ContactNumberWithLargePenetrationTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Suppressed"></a>

### *property* ContactNumberWithLargePenetrationTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.TimeHistoryDisplay"></a>

### *property* ContactNumberWithLargePenetrationTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.UseParentFrequencyRange"></a>

### *property* ContactNumberWithLargePenetrationTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.VelocityType"></a>

### *property* ContactNumberWithLargePenetrationTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.VisibleProperties"></a>

### *property* ContactNumberWithLargePenetrationTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.XAxisValues"></a>

### *property* ContactNumberWithLargePenetrationTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactNumberWithLargePenetrationTracker.Activate"></a>

### ContactNumberWithLargePenetrationTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.AddComment"></a>

### ContactNumberWithLargePenetrationTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.AddImage"></a>

### ContactNumberWithLargePenetrationTracker.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ClearGeneratedData"></a>

### ContactNumberWithLargePenetrationTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.CopyTo"></a>

### ContactNumberWithLargePenetrationTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.CreateParameter"></a>

### ContactNumberWithLargePenetrationTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Delete"></a>

### ContactNumberWithLargePenetrationTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.Duplicate"></a>

### ContactNumberWithLargePenetrationTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.EvaluateAllResults"></a>

### ContactNumberWithLargePenetrationTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.ExportAnimation"></a>

### ContactNumberWithLargePenetrationTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v242/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v242/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetChildren"></a>

### ContactNumberWithLargePenetrationTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GetParameter"></a>

### ContactNumberWithLargePenetrationTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GroupAllSimilarChildren"></a>

### ContactNumberWithLargePenetrationTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.GroupSimilarObjects"></a>

### ContactNumberWithLargePenetrationTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.PropertyByAPIName"></a>

### ContactNumberWithLargePenetrationTracker.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.PropertyByName"></a>

### ContactNumberWithLargePenetrationTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.RemoveParameter"></a>

### ContactNumberWithLargePenetrationTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactNumberWithLargePenetrationTracker.RenameBasedOnDefinition"></a>

### ContactNumberWithLargePenetrationTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

