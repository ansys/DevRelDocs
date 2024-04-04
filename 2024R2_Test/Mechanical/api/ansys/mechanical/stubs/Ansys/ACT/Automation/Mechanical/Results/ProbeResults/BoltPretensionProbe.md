# BoltPretensionProbe

### *class* BoltPretensionProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BoltPretensionProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#BoltPretensionProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#BoltPretensionProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#BoltPretensionProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#BoltPretensionProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#BoltPretensionProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#BoltPretensionProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#BoltPretensionProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BoltPretensionProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BoltPretensionProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BoltPretensionProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#BoltPretensionProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#BoltPretensionProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BoltPretensionProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BoltPretensionProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BoltPretensionProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BoltPretensionProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BoltPretensionProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#BoltPretensionProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#BoltPretensionProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BoltPretensionProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ScaleFactorValue`](#BoltPretensionProbe.ScaleFactorValue)                                                               | Gets or sets the ScaleFactorValue.                                                                                                                                         |
| [`Adjustment`](#BoltPretensionProbe.Adjustment)                                                                           | Gets the Adjustment.                                                                                                                                                       |
| [`MaximumAdjustment`](#BoltPretensionProbe.MaximumAdjustment)                                                             | Gets the MaximumAdjustment.                                                                                                                                                |
| [`MaximumWorkingLoad`](#BoltPretensionProbe.MaximumWorkingLoad)                                                           | Gets the MaximumWorkingLoad.                                                                                                                                               |
| [`MinimumAdjustment`](#BoltPretensionProbe.MinimumAdjustment)                                                             | Gets the MinimumAdjustment.                                                                                                                                                |
| [`MinimumWorkingLoad`](#BoltPretensionProbe.MinimumWorkingLoad)                                                           | Gets the MinimumWorkingLoad.                                                                                                                                               |
| [`WorkingLoad`](#BoltPretensionProbe.WorkingLoad)                                                                         | Gets the WorkingLoad.                                                                                                                                                      |
| [`ScaleFactor`](#BoltPretensionProbe.ScaleFactor)                                                                         | Gets or sets the ScaleFactor.                                                                                                                                              |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#BoltPretensionProbe.Summation)                                                                             | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#BoltPretensionProbe.LocationMethod)                                                                   | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#BoltPretensionProbe.GeometryLocation)                                                               | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#BoltPretensionProbe.CoordinateSystemSelection)                                             | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#BoltPretensionProbe.BoundaryConditionSelection)                                           | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#BoltPretensionProbe.ContactRegionSelection)                                                   | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#BoltPretensionProbe.RemotePointSelection)                                                       | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#BoltPretensionProbe.BeamSelection)                                                                     | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#BoltPretensionProbe.MeshConnectionSelection)                                                 | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#BoltPretensionProbe.SurfaceSelection)                                                               | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#BoltPretensionProbe.SpringSelection)                                                                 | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#BoltPretensionProbe.IsSolved)                                                                               | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#BoltPretensionProbe.Orientation)                                                                         | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#BoltPretensionProbe.IterationNumber)                                                                 | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#BoltPretensionProbe.LoadStep)                                                                               | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#BoltPretensionProbe.LoadStepNumber)                                                                   | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#BoltPretensionProbe.Substep)                                                                                 | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#BoltPretensionProbe.DisplayTime)                                                                         | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#BoltPretensionProbe.MaximumTotal)                                                                       | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#BoltPretensionProbe.MaximumXAxis)                                                                       | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#BoltPretensionProbe.MaximumYAxis)                                                                       | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#BoltPretensionProbe.MaximumZAxis)                                                                       | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#BoltPretensionProbe.MinimumTotal)                                                                       | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#BoltPretensionProbe.MinimumXAxis)                                                                       | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#BoltPretensionProbe.MinimumYAxis)                                                                       | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#BoltPretensionProbe.MinimumZAxis)                                                                       | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#BoltPretensionProbe.Time)                                                                                       | Gets the Time.                                                                                                                                                             |
| [`Total`](#BoltPretensionProbe.Total)                                                                                     | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#BoltPretensionProbe.XAxis)                                                                                     | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#BoltPretensionProbe.YAxis)                                                                                     | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#BoltPretensionProbe.ZAxis)                                                                                     | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#BoltPretensionProbe.ResultSelection)                                                                 | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#BoltPretensionProbe.SpatialResolution)                                                             | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#BoltPretensionProbe.Type)                                                                                       | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#BoltPretensionProbe.DpfEvaluation)                                                                     | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#BoltPretensionProbe.Suppressed)                                                                           | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#BoltPretensionProbe.Children)                                                                               | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#BoltPretensionProbe.Comments)                                                                               | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#BoltPretensionProbe.Figures)                                                                                 | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#BoltPretensionProbe.Images)                                                                                   | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#BoltPretensionProbe.Properties)                                                                           | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#BoltPretensionProbe.VisibleProperties)                                                             | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import BoltPretensionProbe
```

## Property detail

### *property* BoltPretensionProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.Adjustment *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Adjustment.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.MaximumAdjustment *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAdjustment.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.MaximumWorkingLoad *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumWorkingLoad.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.MinimumAdjustment *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumAdjustment.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.MinimumWorkingLoad *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumWorkingLoad.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.WorkingLoad *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the WorkingLoad.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* BoltPretensionProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### BoltPretensionProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### BoltPretensionProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
