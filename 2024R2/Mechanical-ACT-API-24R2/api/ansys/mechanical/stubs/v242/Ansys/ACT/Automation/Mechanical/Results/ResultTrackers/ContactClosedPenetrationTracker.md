# `ContactClosedPenetrationTracker`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactClosedPenetrationTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactClosedPenetrationTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactClosedPenetrationTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactClosedPenetrationTracker.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactClosedPenetrationTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactClosedPenetrationTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ContactClosedPenetrationTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ContactClosedPenetrationTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactClosedPenetrationTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactClosedPenetrationTracker.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactClosedPenetrationTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ContactClosedPenetrationTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ContactClosedPenetrationTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#ContactClosedPenetrationTracker.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactClosedPenetrationTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactClosedPenetrationTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactClosedPenetrationTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactClosedPenetrationTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactClosedPenetrationTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactClosedPenetrationTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactClosedPenetrationTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AccelerationType`](#ContactClosedPenetrationTracker.AccelerationType)                       | Gets or sets the AccelerationType.                            |
| [`BoundaryCondition`](#ContactClosedPenetrationTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                           |
| [`ChartDimensions`](#ContactClosedPenetrationTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`ChartViewingStyle`](#ContactClosedPenetrationTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                           |
| [`Children`](#ContactClosedPenetrationTracker.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#ContactClosedPenetrationTracker.Comments)                                       | Gets the list of associated comments.                         |
| [`ContactRegion`](#ContactClosedPenetrationTracker.ContactRegion)                             | Gets or sets the ContactRegion.                               |
| [`CoordinateSystem`](#ContactClosedPenetrationTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`CurvesAppearanceDisplay`](#ContactClosedPenetrationTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                     |
| [`CutFrequency`](#ContactClosedPenetrationTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                |
| [`DataModelObjectCategory`](#ContactClosedPenetrationTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`DeformationType`](#ContactClosedPenetrationTracker.DeformationType)                         | Gets or sets the DeformationType.                             |
| [`DpfEvaluation`](#ContactClosedPenetrationTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                               |
| [`Duration`](#ContactClosedPenetrationTracker.Duration)                                       | Gets or sets the Duration.                                    |
| [`EnhancedTracking`](#ContactClosedPenetrationTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                    |
| [`FilterMaximum`](#ContactClosedPenetrationTracker.FilterMaximum)                             | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#ContactClosedPenetrationTracker.FilterMinimum)                             | Gets the FilterMinimum.                                       |
| [`FilterType`](#ContactClosedPenetrationTracker.FilterType)                                   | Gets or sets the FilterType.                                  |
| [`FrequencyAtMaximumAmplitude`](#ContactClosedPenetrationTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                         |
| [`GeometrySelectionString`](#ContactClosedPenetrationTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                     |
| [`Images`](#ContactClosedPenetrationTracker.Images)                                           | Gets the list of associated images.                           |
| [`ImaginaryAtMaximumAmplitude`](#ContactClosedPenetrationTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`InternalObject`](#ContactClosedPenetrationTracker.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`IsSolved`](#ContactClosedPenetrationTracker.IsSolved)                                       | Gets the IsSolved.                                            |
| [`LoadStepNumber`](#ContactClosedPenetrationTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                              |
| [`Location`](#ContactClosedPenetrationTracker.Location)                                       | Gets or sets the Location.                                    |
| [`Maximum`](#ContactClosedPenetrationTracker.Maximum)                                         | Gets the Maximum.                                             |
| [`MaximumAmplitude`](#ContactClosedPenetrationTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#ContactClosedPenetrationTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                            |
| [`Minimum`](#ContactClosedPenetrationTracker.Minimum)                                         | Gets the Minimum.                                             |
| [`MinimumFrequency`](#ContactClosedPenetrationTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                            |
| [`NormalOrientation`](#ContactClosedPenetrationTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                           |
| [`PhaseAngle`](#ContactClosedPenetrationTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`Properties`](#ContactClosedPenetrationTracker.Properties)                                   | Gets the list of properties for this object.                  |
| [`RealAtMaximumAmplitude`](#ContactClosedPenetrationTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                              |
| [`ReportedFrequency`](#ContactClosedPenetrationTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                   |
| [`RequestedFrequency`](#ContactClosedPenetrationTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                          |
| [`ResultChartType`](#ContactClosedPenetrationTracker.ResultChartType)                         | Gets the ResultChartType.                                     |
| [`SectorNumber`](#ContactClosedPenetrationTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`ShearOrientation`](#ContactClosedPenetrationTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                            |
| [`SpatialResolution`](#ContactClosedPenetrationTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                           |
| [`Spring`](#ContactClosedPenetrationTracker.Spring)                                           | Gets or sets the Spring.                                      |
| [`StressStrainType`](#ContactClosedPenetrationTracker.StressStrainType)                       | Gets or sets the StressStrainType.                            |
| [`Suppressed`](#ContactClosedPenetrationTracker.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TimeHistoryDisplay`](#ContactClosedPenetrationTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                          |
| [`UseParentFrequencyRange`](#ContactClosedPenetrationTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                     |
| [`VelocityType`](#ContactClosedPenetrationTracker.VelocityType)                               | Gets or sets the VelocityType.                                |
| [`VisibleProperties`](#ContactClosedPenetrationTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XAxisValues`](#ContactClosedPenetrationTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                 |

<a id="property-detail"></a>

## Property detail

<a id="ContactClosedPenetrationTracker.AccelerationType"></a>

### *property* ContactClosedPenetrationTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.BoundaryCondition"></a>

### *property* ContactClosedPenetrationTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ChartDimensions"></a>

### *property* ContactClosedPenetrationTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ChartViewingStyle"></a>

### *property* ContactClosedPenetrationTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Children"></a>

### *property* ContactClosedPenetrationTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Comments"></a>

### *property* ContactClosedPenetrationTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ContactRegion"></a>

### *property* ContactClosedPenetrationTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.CoordinateSystem"></a>

### *property* ContactClosedPenetrationTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.CurvesAppearanceDisplay"></a>

### *property* ContactClosedPenetrationTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.CutFrequency"></a>

### *property* ContactClosedPenetrationTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.DataModelObjectCategory"></a>

### *property* ContactClosedPenetrationTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.DeformationType"></a>

### *property* ContactClosedPenetrationTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.DpfEvaluation"></a>

### *property* ContactClosedPenetrationTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Duration"></a>

### *property* ContactClosedPenetrationTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.EnhancedTracking"></a>

### *property* ContactClosedPenetrationTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.FilterMaximum"></a>

### *property* ContactClosedPenetrationTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.FilterMinimum"></a>

### *property* ContactClosedPenetrationTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.FilterType"></a>

### *property* ContactClosedPenetrationTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactClosedPenetrationTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.GeometrySelectionString"></a>

### *property* ContactClosedPenetrationTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Images"></a>

### *property* ContactClosedPenetrationTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactClosedPenetrationTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.InternalObject"></a>

### *property* ContactClosedPenetrationTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.IsSolved"></a>

### *property* ContactClosedPenetrationTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.LoadStepNumber"></a>

### *property* ContactClosedPenetrationTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Location"></a>

### *property* ContactClosedPenetrationTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Maximum"></a>

### *property* ContactClosedPenetrationTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.MaximumAmplitude"></a>

### *property* ContactClosedPenetrationTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.MaximumFrequency"></a>

### *property* ContactClosedPenetrationTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Minimum"></a>

### *property* ContactClosedPenetrationTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.MinimumFrequency"></a>

### *property* ContactClosedPenetrationTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.NormalOrientation"></a>

### *property* ContactClosedPenetrationTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.PhaseAngle"></a>

### *property* ContactClosedPenetrationTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Properties"></a>

### *property* ContactClosedPenetrationTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.RealAtMaximumAmplitude"></a>

### *property* ContactClosedPenetrationTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ReportedFrequency"></a>

### *property* ContactClosedPenetrationTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.RequestedFrequency"></a>

### *property* ContactClosedPenetrationTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ResultChartType"></a>

### *property* ContactClosedPenetrationTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.SectorNumber"></a>

### *property* ContactClosedPenetrationTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ShearOrientation"></a>

### *property* ContactClosedPenetrationTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.SpatialResolution"></a>

### *property* ContactClosedPenetrationTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Spring"></a>

### *property* ContactClosedPenetrationTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.StressStrainType"></a>

### *property* ContactClosedPenetrationTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Suppressed"></a>

### *property* ContactClosedPenetrationTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.TimeHistoryDisplay"></a>

### *property* ContactClosedPenetrationTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.UseParentFrequencyRange"></a>

### *property* ContactClosedPenetrationTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.VelocityType"></a>

### *property* ContactClosedPenetrationTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.VisibleProperties"></a>

### *property* ContactClosedPenetrationTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.XAxisValues"></a>

### *property* ContactClosedPenetrationTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactClosedPenetrationTracker.Activate"></a>

### ContactClosedPenetrationTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.AddComment"></a>

### ContactClosedPenetrationTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.AddImage"></a>

### ContactClosedPenetrationTracker.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ClearGeneratedData"></a>

### ContactClosedPenetrationTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.CopyTo"></a>

### ContactClosedPenetrationTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.CreateParameter"></a>

### ContactClosedPenetrationTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Delete"></a>

### ContactClosedPenetrationTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.Duplicate"></a>

### ContactClosedPenetrationTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.EvaluateAllResults"></a>

### ContactClosedPenetrationTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.ExportAnimation"></a>

### ContactClosedPenetrationTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.GetChildren"></a>

### ContactClosedPenetrationTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.GetParameter"></a>

### ContactClosedPenetrationTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.GroupAllSimilarChildren"></a>

### ContactClosedPenetrationTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.GroupSimilarObjects"></a>

### ContactClosedPenetrationTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.PropertyByAPIName"></a>

### ContactClosedPenetrationTracker.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.PropertyByName"></a>

### ContactClosedPenetrationTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.RemoveParameter"></a>

### ContactClosedPenetrationTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactClosedPenetrationTracker.RenameBasedOnDefinition"></a>

### ContactClosedPenetrationTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

