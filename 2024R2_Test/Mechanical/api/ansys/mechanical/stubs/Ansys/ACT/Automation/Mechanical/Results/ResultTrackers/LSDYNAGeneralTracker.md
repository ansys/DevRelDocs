# LSDYNAGeneralTracker

### *class* LSDYNAGeneralTracker

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a LSDYNAGeneralTracker.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetBranches`](#LSDYNAGeneralTracker.GetBranches)                         | GetBranches method.                                                               |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetComponents`](#LSDYNAGeneralTracker.GetComponents)                     | GetComponents method.                                                             |
| [`ExportAnimation`](#LSDYNAGeneralTracker.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#LSDYNAGeneralTracker.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`EvaluateAllResults`](#LSDYNAGeneralTracker.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#LSDYNAGeneralTracker.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#LSDYNAGeneralTracker.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LSDYNAGeneralTracker.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#LSDYNAGeneralTracker.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#LSDYNAGeneralTracker.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#LSDYNAGeneralTracker.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LSDYNAGeneralTracker.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LSDYNAGeneralTracker.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LSDYNAGeneralTracker.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LSDYNAGeneralTracker.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LSDYNAGeneralTracker.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#LSDYNAGeneralTracker.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#LSDYNAGeneralTracker.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LSDYNAGeneralTracker.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`LSDYNABranchName`](#LSDYNAGeneralTracker.LSDYNABranchName)                                                              | Gets or sets the LSDYNA BranchName.                           |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`LSDYNASubBranchName`](#LSDYNAGeneralTracker.LSDYNASubBranchName)                                                        | Gets or sets the LSDYNA SubBranchName.                        |
| [`LSDYNAComponentName`](#LSDYNAGeneralTracker.LSDYNAComponentName)                                                        | Gets or sets the LSDYNA ComponentName.                        |
| [`ContactRegion`](../../Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`Joint`](../../Connections/Joint.md#Joint)                                                                               | Gets or sets the Joint.                                       |
| [`ACTLoad`](#LSDYNAGeneralTracker.ACTLoad)                                                                                | Gets or sets the ACT Load.                                    |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`ContactSide`](#LSDYNAGeneralTracker.ContactSide)                                                                        | Gets or sets the ContactSide.                                 |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`IsSolved`](#LSDYNAGeneralTracker.IsSolved)                                                                              | Gets the IsSolved.                                            |
| [`ChartDimensions`](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions)                         | Gets or sets the Chart Dimensions                             |
| [`BoundaryCondition`](#LSDYNAGeneralTracker.BoundaryCondition)                                                            | Gets or sets the BoundaryCondition.                           |
| [`CutFrequency`](#LSDYNAGeneralTracker.CutFrequency)                                                                      | Gets or sets the CutFrequency.                                |
| [`SectorNumber`](#LSDYNAGeneralTracker.SectorNumber)                                                                      | Gets or sets the SectorNumber.                                |
| [`GeometrySelectionString`](#LSDYNAGeneralTracker.GeometrySelectionString)                                                | Gets or sets the GeometrySelectionString.                     |
| [`LoadStepNumber`](#LSDYNAGeneralTracker.LoadStepNumber)                                                                  | Gets or sets the LoadStepNumber.                              |
| [`ReportedFrequency`](#LSDYNAGeneralTracker.ReportedFrequency)                                                            | Gets the ReportedFrequency.                                   |
| [`Duration`](#LSDYNAGeneralTracker.Duration)                                                                              | Gets or sets the Duration.                                    |
| [`FilterMaximum`](#LSDYNAGeneralTracker.FilterMaximum)                                                                    | Gets the FilterMaximum.                                       |
| [`FilterMinimum`](#LSDYNAGeneralTracker.FilterMinimum)                                                                    | Gets the FilterMinimum.                                       |
| [`FrequencyAtMaximumAmplitude`](#LSDYNAGeneralTracker.FrequencyAtMaximumAmplitude)                                        | Gets the FrequencyAtMaximumAmplitude.                         |
| [`ImaginaryAtMaximumAmplitude`](#LSDYNAGeneralTracker.ImaginaryAtMaximumAmplitude)                                        | Gets the ImaginaryAtMaximumAmplitude.                         |
| [`MaximumAmplitude`](#LSDYNAGeneralTracker.MaximumAmplitude)                                                              | Gets the MaximumAmplitude.                                    |
| [`MaximumFrequency`](#LSDYNAGeneralTracker.MaximumFrequency)                                                              | Gets or sets the MaximumFrequency.                            |
| [`Maximum`](#LSDYNAGeneralTracker.Maximum)                                                                                | Gets the Maximum.                                             |
| [`MinimumFrequency`](#LSDYNAGeneralTracker.MinimumFrequency)                                                              | Gets or sets the MinimumFrequency.                            |
| [`Minimum`](#LSDYNAGeneralTracker.Minimum)                                                                                | Gets the Minimum.                                             |
| [`PhaseAngle`](#LSDYNAGeneralTracker.PhaseAngle)                                                                          | Gets the PhaseAngle.                                          |
| [`RealAtMaximumAmplitude`](#LSDYNAGeneralTracker.RealAtMaximumAmplitude)                                                  | Gets the RealAtMaximumAmplitude.                              |
| [`RequestedFrequency`](#LSDYNAGeneralTracker.RequestedFrequency)                                                          | Gets or sets the RequestedFrequency.                          |
| [`AccelerationType`](#LSDYNAGeneralTracker.AccelerationType)                                                              | Gets or sets the AccelerationType.                            |
| [`ChartViewingStyle`](#LSDYNAGeneralTracker.ChartViewingStyle)                                                            | Gets or sets the ChartViewingStyle.                           |
| [`DeformationType`](../../../../../Mechanical/DataModel/Enums/DeformationType.md#DeformationType)                         | Gets or sets the DeformationType.                             |
| [`FilterType`](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType)                                        | Gets or sets the FilterType.                                  |
| [`SpatialResolution`](#LSDYNAGeneralTracker.SpatialResolution)                                                            | Gets or sets the SpatialResolution.                           |
| [`NormalOrientation`](#LSDYNAGeneralTracker.NormalOrientation)                                                            | Gets or sets the NormalOrientation.                           |
| [`CurvesAppearanceDisplay`](#LSDYNAGeneralTracker.CurvesAppearanceDisplay)                                                | Gets or sets the CurvesAppearanceDisplay.                     |
| [`ResultChartType`](#LSDYNAGeneralTracker.ResultChartType)                                                                | Gets the ResultChartType.                                     |
| [`DpfEvaluation`](#LSDYNAGeneralTracker.DpfEvaluation)                                                                    | Gets or sets the DpfEvaluation.                               |
| [`XAxisValues`](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues)                                     | Gets or sets the XAxisValues.                                 |
| [`ShearOrientation`](#LSDYNAGeneralTracker.ShearOrientation)                                                              | Gets or sets the ShearOrientation.                            |
| [`StressStrainType`](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType)                      | Gets or sets the StressStrainType.                            |
| [`TimeHistoryDisplay`](#LSDYNAGeneralTracker.TimeHistoryDisplay)                                                          | Gets or sets the TimeHistoryDisplay.                          |
| [`VelocityType`](#LSDYNAGeneralTracker.VelocityType)                                                                      | Gets or sets the VelocityType.                                |
| [`Suppressed`](#LSDYNAGeneralTracker.Suppressed)                                                                          | Gets or sets the Suppressed.                                  |
| [`EnhancedTracking`](#LSDYNAGeneralTracker.EnhancedTracking)                                                              | Gets the EnhancedTracking.                                    |
| [`UseParentFrequencyRange`](#LSDYNAGeneralTracker.UseParentFrequencyRange)                                                | Gets or sets the UseParentFrequencyRange.                     |
| [`CoordinateSystem`](../../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                      |
| [`Location`](#LSDYNAGeneralTracker.Location)                                                                              | Gets or sets the Location.                                    |
| [`Children`](#LSDYNAGeneralTracker.Children)                                                                              | Gets the list of children.                                    |
| [`Comments`](#LSDYNAGeneralTracker.Comments)                                                                              | Gets the list of associated comments.                         |
| [`Images`](#LSDYNAGeneralTracker.Images)                                                                                  | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LSDYNAGeneralTracker.Properties)                                                                          | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#LSDYNAGeneralTracker.VisibleProperties)                                                            | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers import LSDYNAGeneralTracker
```

## Property detail

### *property* LSDYNAGeneralTracker.LSDYNABranchName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LSDYNA BranchName.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.LSDYNASubBranchName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LSDYNA SubBranchName.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.LSDYNAComponentName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LSDYNA ComponentName.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.ContactRegion *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.Joint *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Joint.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.ACTLoad *: Ansys.ACT.Interfaces.DataModel.IDataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ACT Load.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultChartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.ContactSide *: [Ansys.Mechanical.DataModel.Enums.ContactScopingType](../../../../../Mechanical/DataModel/Enums/ContactScopingType.md#ContactScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSide.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.ChartDimensions *: [Ansys.Mechanical.DataModel.Enums.ChartDimensions](../../../../../Mechanical/DataModel/Enums/ChartDimensions.md#ChartDimensions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Chart Dimensions

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.BoundaryCondition *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition](../../BoundaryConditions/GenericBoundaryCondition.md#GenericBoundaryCondition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.CutFrequency *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CutFrequency.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.SectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.GeometrySelectionString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelectionString.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.Duration *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Duration.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.FilterMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMaximum.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.FilterMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilterMinimum.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.FrequencyAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FrequencyAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.ImaginaryAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImaginaryAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.MaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.Maximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Maximum.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.Minimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Minimum.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.RealAtMaximumAmplitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RealAtMaximumAmplitude.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.RequestedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RequestedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.AccelerationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AccelerationType.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.ChartViewingStyle *: [Ansys.Mechanical.DataModel.Enums.ChartAxisScaleType](../../../../../Mechanical/DataModel/Enums/ChartAxisScaleType.md#ChartAxisScaleType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChartViewingStyle.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.DeformationType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeformationType.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.FilterType *: [Ansys.Mechanical.DataModel.Enums.FilterType](../../../../../Mechanical/DataModel/Enums/FilterType.md#FilterType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FilterType.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MultipleNodeType](../../../../../Mechanical/DataModel/Enums/MultipleNodeType.md#MultipleNodeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.NormalOrientation *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalOrientation.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.CurvesAppearanceDisplay *: [Ansys.Mechanical.DataModel.Enums.ChartPlotStyle](../../../../../Mechanical/DataModel/Enums/ChartPlotStyle.md#ChartPlotStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurvesAppearanceDisplay.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.ResultChartType *: [Ansys.Mechanical.DataModel.Enums.ChartResultType](../../../../../Mechanical/DataModel/Enums/ChartResultType.md#ChartResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultChartType.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.XAxisValues *: [Ansys.Mechanical.DataModel.Enums.XAxisValues](../../../../../Mechanical/DataModel/Enums/XAxisValues.md#XAxisValues) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XAxisValues.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.ShearOrientation *: [Ansys.Mechanical.DataModel.Enums.ShearOrientationType](../../../../../Mechanical/DataModel/Enums/ShearOrientationType.md#ShearOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearOrientation.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.StressStrainType *: [Ansys.Mechanical.DataModel.Enums.StressStrainType](../../../../../Mechanical/DataModel/Enums/StressStrainType.md#StressStrainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StressStrainType.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.TimeHistoryDisplay *: [Ansys.Mechanical.DataModel.Enums.TimeHistoryDisplayType](../../../../../Mechanical/DataModel/Enums/TimeHistoryDisplayType.md#TimeHistoryDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeHistoryDisplay.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.VelocityType *: [Ansys.Mechanical.DataModel.Enums.TotalOrDirectional](../../../../../Mechanical/DataModel/Enums/TotalOrDirectional.md#TotalOrDirectional) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VelocityType.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.EnhancedTracking *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EnhancedTracking.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.UseParentFrequencyRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UseParentFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* LSDYNAGeneralTracker.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### LSDYNAGeneralTracker.GetBranches()

GetBranches method.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.GetComponents(branch: System.String)

GetComponents method.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### LSDYNAGeneralTracker.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
