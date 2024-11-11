# `ContactPenetrationTracker`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPenetrationTracker"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.ContactPenetrationTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactPenetrationTracker.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactPenetrationTracker.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactPenetrationTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#ContactPenetrationTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ContactPenetrationTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ContactPenetrationTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactPenetrationTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactPenetrationTracker.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactPenetrationTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`EvaluateAllResults`](#ContactPenetrationTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#ContactPenetrationTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#ContactPenetrationTracker.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactPenetrationTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactPenetrationTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactPenetrationTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactPenetrationTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactPenetrationTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactPenetrationTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactPenetrationTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`AccelerationType`](#ContactPenetrationTracker.AccelerationType)                       | Gets or sets the AccelerationType.                                       |
| [`BoundaryCondition`](#ContactPenetrationTracker.BoundaryCondition)                     | Gets or sets the BoundaryCondition.                                      |
| [`ChartDimensions`](#ContactPenetrationTracker.ChartDimensions)                         | Gets or sets the Chart Dimensions                                        |
| [`ChartViewingStyle`](#ContactPenetrationTracker.ChartViewingStyle)                     | Gets or sets the ChartViewingStyle.                                      |
| [`Children`](#ContactPenetrationTracker.Children)                                       | Gets the list of children.                                               |
| [`Comments`](#ContactPenetrationTracker.Comments)                                       | Gets the list of associated comments.                                    |
| [`ContactRegion`](#ContactPenetrationTracker.ContactRegion)                             | Gets or sets the ContactRegion.                                          |
| [`ContactSide`](#ContactPenetrationTracker.ContactSide)                                 | Gets or sets the ContactSide.                                            |
| [`CoordinateSystem`](#ContactPenetrationTracker.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                       |
| [`CurvesAppearanceDisplay`](#ContactPenetrationTracker.CurvesAppearanceDisplay)         | Gets or sets the CurvesAppearanceDisplay.                                |
| [`CutFrequency`](#ContactPenetrationTracker.CutFrequency)                               | Gets or sets the CutFrequency.                                           |
| [`DataModelObjectCategory`](#ContactPenetrationTracker.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                             |
| [`DeformationType`](#ContactPenetrationTracker.DeformationType)                         | Gets or sets the DeformationType.                                        |
| [`DpfEvaluation`](#ContactPenetrationTracker.DpfEvaluation)                             | Gets or sets the DpfEvaluation.                                          |
| [`Duration`](#ContactPenetrationTracker.Duration)                                       | Gets or sets the Duration.                                               |
| [`EnhancedTracking`](#ContactPenetrationTracker.EnhancedTracking)                       | Gets the EnhancedTracking.                                               |
| [`FilterMaximum`](#ContactPenetrationTracker.FilterMaximum)                             | Gets the FilterMaximum.                                                  |
| [`FilterMinimum`](#ContactPenetrationTracker.FilterMinimum)                             | Gets the FilterMinimum.                                                  |
| [`FilterType`](#ContactPenetrationTracker.FilterType)                                   | Gets or sets the FilterType.                                             |
| [`FrequencyAtMaximumAmplitude`](#ContactPenetrationTracker.FrequencyAtMaximumAmplitude) | Gets the FrequencyAtMaximumAmplitude.                                    |
| [`GeometrySelectionString`](#ContactPenetrationTracker.GeometrySelectionString)         | Gets or sets the GeometrySelectionString.                                |
| [`Images`](#ContactPenetrationTracker.Images)                                           | Gets the list of associated images.                                      |
| [`ImaginaryAtMaximumAmplitude`](#ContactPenetrationTracker.ImaginaryAtMaximumAmplitude) | Gets the ImaginaryAtMaximumAmplitude.                                    |
| [`InternalObject`](#ContactPenetrationTracker.InternalObject)                           | Gets the internal object. For advanced usage only.                       |
| [`IsSolved`](#ContactPenetrationTracker.IsSolved)                                       | Gets the IsSolved.                                                       |
| [`LoadStepNumber`](#ContactPenetrationTracker.LoadStepNumber)                           | Gets or sets the LoadStepNumber.                                         |
| [`Location`](#ContactPenetrationTracker.Location)                                       | Gets or sets the Location.                                               |
| [`Maximum`](#ContactPenetrationTracker.Maximum)                                         | Gets the Maximum.                                                        |
| [`MaximumAmplitude`](#ContactPenetrationTracker.MaximumAmplitude)                       | Gets the MaximumAmplitude.                                               |
| [`MaximumFrequency`](#ContactPenetrationTracker.MaximumFrequency)                       | Gets or sets the MaximumFrequency.                                       |
| [`Minimum`](#ContactPenetrationTracker.Minimum)                                         | Gets the Minimum.                                                        |
| [`MinimumFrequency`](#ContactPenetrationTracker.MinimumFrequency)                       | Gets or sets the MinimumFrequency.                                       |
| [`NamedSelections`](#ContactPenetrationTracker.NamedSelections)                         | Gets or sets the NamedSelections.                                        |
| [`NormalOrientation`](#ContactPenetrationTracker.NormalOrientation)                     | Gets or sets the NormalOrientation.                                      |
| [`PhaseAngle`](#ContactPenetrationTracker.PhaseAngle)                                   | Gets the PhaseAngle.                                                     |
| [`Properties`](#ContactPenetrationTracker.Properties)                                   | Gets the list of properties for this object.                             |
| [`RPMSelection`](#ContactPenetrationTracker.RPMSelection)                               | Gets or sets the RPM Selection value at which the results are evaluated. |
| [`RealAtMaximumAmplitude`](#ContactPenetrationTracker.RealAtMaximumAmplitude)           | Gets the RealAtMaximumAmplitude.                                         |
| [`ReportedFrequency`](#ContactPenetrationTracker.ReportedFrequency)                     | Gets the ReportedFrequency.                                              |
| [`RequestedFrequency`](#ContactPenetrationTracker.RequestedFrequency)                   | Gets or sets the RequestedFrequency.                                     |
| [`ResultChartType`](#ContactPenetrationTracker.ResultChartType)                         | Gets the ResultChartType.                                                |
| [`SectorNumber`](#ContactPenetrationTracker.SectorNumber)                               | Gets or sets the SectorNumber.                                           |
| [`ShearOrientation`](#ContactPenetrationTracker.ShearOrientation)                       | Gets or sets the ShearOrientation.                                       |
| [`SpatialResolution`](#ContactPenetrationTracker.SpatialResolution)                     | Gets or sets the SpatialResolution.                                      |
| [`Spring`](#ContactPenetrationTracker.Spring)                                           | Gets or sets the Spring.                                                 |
| [`StressStrainType`](#ContactPenetrationTracker.StressStrainType)                       | Gets or sets the StressStrainType.                                       |
| [`Suppressed`](#ContactPenetrationTracker.Suppressed)                                   | Gets or sets the Suppressed.                                             |
| [`TimeHistoryDisplay`](#ContactPenetrationTracker.TimeHistoryDisplay)                   | Gets or sets the TimeHistoryDisplay.                                     |
| [`UseParentFrequencyRange`](#ContactPenetrationTracker.UseParentFrequencyRange)         | Gets or sets the UseParentFrequencyRange.                                |
| [`VelocityType`](#ContactPenetrationTracker.VelocityType)                               | Gets or sets the VelocityType.                                           |
| [`VisibleProperties`](#ContactPenetrationTracker.VisibleProperties)                     | Gets the list of properties that are visible for this object.            |
| [`XAxisValues`](#ContactPenetrationTracker.XAxisValues)                                 | Gets or sets the XAxisValues.                                            |

<a id="property-detail"></a>

## Property detail

<a id="ContactPenetrationTracker.AccelerationType"></a>

### *property* ContactPenetrationTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.BoundaryCondition"></a>

### *property* ContactPenetrationTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.ChartDimensions"></a>

### *property* ContactPenetrationTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.ChartViewingStyle"></a>

### *property* ContactPenetrationTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.Children"></a>

### *property* ContactPenetrationTracker.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.Comments"></a>

### *property* ContactPenetrationTracker.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.ContactRegion"></a>

### *property* ContactPenetrationTracker.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.ContactSide"></a>

### *property* ContactPenetrationTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.CoordinateSystem"></a>

### *property* ContactPenetrationTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.CurvesAppearanceDisplay"></a>

### *property* ContactPenetrationTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.CutFrequency"></a>

### *property* ContactPenetrationTracker.CutFrequency *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.DataModelObjectCategory"></a>

### *property* ContactPenetrationTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.DeformationType"></a>

### *property* ContactPenetrationTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.DpfEvaluation"></a>

### *property* ContactPenetrationTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.Duration"></a>

### *property* ContactPenetrationTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.EnhancedTracking"></a>

### *property* ContactPenetrationTracker.EnhancedTracking *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.FilterMaximum"></a>

### *property* ContactPenetrationTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.FilterMinimum"></a>

### *property* ContactPenetrationTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.FilterType"></a>

### *property* ContactPenetrationTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.FrequencyAtMaximumAmplitude"></a>

### *property* ContactPenetrationTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.GeometrySelectionString"></a>

### *property* ContactPenetrationTracker.GeometrySelectionString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.Images"></a>

### *property* ContactPenetrationTracker.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.ImaginaryAtMaximumAmplitude"></a>

### *property* ContactPenetrationTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.InternalObject"></a>

### *property* ContactPenetrationTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.IsSolved"></a>

### *property* ContactPenetrationTracker.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.LoadStepNumber"></a>

### *property* ContactPenetrationTracker.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.Location"></a>

### *property* ContactPenetrationTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.Maximum"></a>

### *property* ContactPenetrationTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.MaximumAmplitude"></a>

### *property* ContactPenetrationTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.MaximumFrequency"></a>

### *property* ContactPenetrationTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.Minimum"></a>

### *property* ContactPenetrationTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.MinimumFrequency"></a>

### *property* ContactPenetrationTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.NamedSelections"></a>

### *property* ContactPenetrationTracker.NamedSelections *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.NormalOrientation"></a>

### *property* ContactPenetrationTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.PhaseAngle"></a>

### *property* ContactPenetrationTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.Properties"></a>

### *property* ContactPenetrationTracker.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.RPMSelection"></a>

### *property* ContactPenetrationTracker.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.RealAtMaximumAmplitude"></a>

### *property* ContactPenetrationTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.ReportedFrequency"></a>

### *property* ContactPenetrationTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.RequestedFrequency"></a>

### *property* ContactPenetrationTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.ResultChartType"></a>

### *property* ContactPenetrationTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.SectorNumber"></a>

### *property* ContactPenetrationTracker.SectorNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.ShearOrientation"></a>

### *property* ContactPenetrationTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.SpatialResolution"></a>

### *property* ContactPenetrationTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.Spring"></a>

### *property* ContactPenetrationTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.StressStrainType"></a>

### *property* ContactPenetrationTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.Suppressed"></a>

### *property* ContactPenetrationTracker.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.TimeHistoryDisplay"></a>

### *property* ContactPenetrationTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.UseParentFrequencyRange"></a>

### *property* ContactPenetrationTracker.UseParentFrequencyRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.VelocityType"></a>

### *property* ContactPenetrationTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.VisibleProperties"></a>

### *property* ContactPenetrationTracker.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.XAxisValues"></a>

### *property* ContactPenetrationTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactPenetrationTracker.Activate"></a>

### ContactPenetrationTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.AddComment"></a>

### ContactPenetrationTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.AddImage"></a>

### ContactPenetrationTracker.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.ClearGeneratedData"></a>

### ContactPenetrationTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.CopyTo"></a>

### ContactPenetrationTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.CreateParameter"></a>

### ContactPenetrationTracker.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.Delete"></a>

### ContactPenetrationTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.Duplicate"></a>

### ContactPenetrationTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.EvaluateAllResults"></a>

### ContactPenetrationTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.ExportAnimation"></a>

### ContactPenetrationTracker.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.GetChildren"></a>

### ContactPenetrationTracker.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.GetParameter"></a>

### ContactPenetrationTracker.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.GroupAllSimilarChildren"></a>

### ContactPenetrationTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.GroupSimilarObjects"></a>

### ContactPenetrationTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.PropertyByAPIName"></a>

### ContactPenetrationTracker.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.PropertyByName"></a>

### ContactPenetrationTracker.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.RemoveParameter"></a>

### ContactPenetrationTracker.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactPenetrationTracker.RenameBasedOnDefinition"></a>

### ContactPenetrationTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

