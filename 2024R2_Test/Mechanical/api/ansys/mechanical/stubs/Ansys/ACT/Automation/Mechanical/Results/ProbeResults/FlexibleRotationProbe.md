# FlexibleRotationProbe

### *class* FlexibleRotationProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FlexibleRotationProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#FlexibleRotationProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FlexibleRotationProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#FlexibleRotationProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#FlexibleRotationProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#FlexibleRotationProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#FlexibleRotationProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FlexibleRotationProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FlexibleRotationProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FlexibleRotationProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FlexibleRotationProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FlexibleRotationProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FlexibleRotationProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FlexibleRotationProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FlexibleRotationProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FlexibleRotationProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FlexibleRotationProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FlexibleRotationProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FlexibleRotationProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FlexibleRotationProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FlexibleRotationProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`MaximumXAxisRotation`](#FlexibleRotationProbe.MaximumXAxisRotation)                                                     | Gets the MaximumXAxisRotation.                                                                                                                                             |
| [`MaximumYAxisRotation`](#FlexibleRotationProbe.MaximumYAxisRotation)                                                     | Gets the MaximumYAxisRotation.                                                                                                                                             |
| [`MaximumZAxisRotation`](#FlexibleRotationProbe.MaximumZAxisRotation)                                                     | Gets the MaximumZAxisRotation.                                                                                                                                             |
| [`MinimumXAxisRotation`](#FlexibleRotationProbe.MinimumXAxisRotation)                                                     | Gets the MinimumXAxisRotation.                                                                                                                                             |
| [`MinimumYAxisRotation`](#FlexibleRotationProbe.MinimumYAxisRotation)                                                     | Gets the MinimumYAxisRotation.                                                                                                                                             |
| [`MinimumZAxisRotation`](#FlexibleRotationProbe.MinimumZAxisRotation)                                                     | Gets the MinimumZAxisRotation.                                                                                                                                             |
| [`XAxisRotation`](#FlexibleRotationProbe.XAxisRotation)                                                                   | Gets the XAxisRotation.                                                                                                                                                    |
| [`YAxisRotation`](#FlexibleRotationProbe.YAxisRotation)                                                                   | Gets the YAxisRotation.                                                                                                                                                    |
| [`ZAxisRotation`](#FlexibleRotationProbe.ZAxisRotation)                                                                   | Gets the ZAxisRotation.                                                                                                                                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#FlexibleRotationProbe.Summation)                                                                           | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#FlexibleRotationProbe.LocationMethod)                                                                 | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#FlexibleRotationProbe.GeometryLocation)                                                             | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#FlexibleRotationProbe.CoordinateSystemSelection)                                           | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#FlexibleRotationProbe.BoundaryConditionSelection)                                         | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#FlexibleRotationProbe.ContactRegionSelection)                                                 | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#FlexibleRotationProbe.RemotePointSelection)                                                     | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#FlexibleRotationProbe.BeamSelection)                                                                   | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#FlexibleRotationProbe.MeshConnectionSelection)                                               | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#FlexibleRotationProbe.SurfaceSelection)                                                             | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#FlexibleRotationProbe.SpringSelection)                                                               | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#FlexibleRotationProbe.IsSolved)                                                                             | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#FlexibleRotationProbe.Orientation)                                                                       | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#FlexibleRotationProbe.IterationNumber)                                                               | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#FlexibleRotationProbe.LoadStep)                                                                             | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#FlexibleRotationProbe.LoadStepNumber)                                                                 | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#FlexibleRotationProbe.Substep)                                                                               | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#FlexibleRotationProbe.DisplayTime)                                                                       | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#FlexibleRotationProbe.MaximumTotal)                                                                     | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#FlexibleRotationProbe.MaximumXAxis)                                                                     | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#FlexibleRotationProbe.MaximumYAxis)                                                                     | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#FlexibleRotationProbe.MaximumZAxis)                                                                     | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#FlexibleRotationProbe.MinimumTotal)                                                                     | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#FlexibleRotationProbe.MinimumXAxis)                                                                     | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#FlexibleRotationProbe.MinimumYAxis)                                                                     | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#FlexibleRotationProbe.MinimumZAxis)                                                                     | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#FlexibleRotationProbe.Time)                                                                                     | Gets the Time.                                                                                                                                                             |
| [`Total`](#FlexibleRotationProbe.Total)                                                                                   | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#FlexibleRotationProbe.XAxis)                                                                                   | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#FlexibleRotationProbe.YAxis)                                                                                   | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#FlexibleRotationProbe.ZAxis)                                                                                   | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#FlexibleRotationProbe.ResultSelection)                                                               | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#FlexibleRotationProbe.SpatialResolution)                                                           | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#FlexibleRotationProbe.Type)                                                                                     | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#FlexibleRotationProbe.DpfEvaluation)                                                                   | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#FlexibleRotationProbe.Suppressed)                                                                         | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#FlexibleRotationProbe.Children)                                                                             | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#FlexibleRotationProbe.Comments)                                                                             | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#FlexibleRotationProbe.Figures)                                                                               | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#FlexibleRotationProbe.Images)                                                                                 | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#FlexibleRotationProbe.Properties)                                                                         | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#FlexibleRotationProbe.VisibleProperties)                                                           | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import FlexibleRotationProbe
```

## Property detail

### *property* FlexibleRotationProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MaximumXAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxisRotation.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MaximumYAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxisRotation.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MaximumZAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxisRotation.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MinimumXAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxisRotation.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MinimumYAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxisRotation.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MinimumZAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxisRotation.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.XAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxisRotation.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.YAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxisRotation.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.ZAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxisRotation.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FlexibleRotationProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FlexibleRotationProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FlexibleRotationProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
