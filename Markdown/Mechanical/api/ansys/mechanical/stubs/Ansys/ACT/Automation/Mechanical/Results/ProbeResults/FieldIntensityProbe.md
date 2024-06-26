# FieldIntensityProbe

### *class* FieldIntensityProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FieldIntensityProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#FieldIntensityProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FieldIntensityProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#FieldIntensityProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#FieldIntensityProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#FieldIntensityProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#FieldIntensityProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FieldIntensityProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FieldIntensityProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FieldIntensityProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FieldIntensityProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FieldIntensityProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FieldIntensityProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FieldIntensityProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FieldIntensityProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FieldIntensityProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FieldIntensityProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FieldIntensityProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FieldIntensityProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FieldIntensityProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FieldIntensityProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`TotalFieldIntensity`](#FieldIntensityProbe.TotalFieldIntensity)                                                         | Gets the TotalFieldIntensity.                                                                                                                                              |
| [`YAxisFieldIntensity`](#FieldIntensityProbe.YAxisFieldIntensity)                                                         | Gets the YAxisFieldIntensity.                                                                                                                                              |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#FieldIntensityProbe.Summation)                                                                             | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#FieldIntensityProbe.LocationMethod)                                                                   | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#FieldIntensityProbe.GeometryLocation)                                                               | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#FieldIntensityProbe.CoordinateSystemSelection)                                             | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#FieldIntensityProbe.BoundaryConditionSelection)                                           | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#FieldIntensityProbe.ContactRegionSelection)                                                   | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#FieldIntensityProbe.RemotePointSelection)                                                       | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#FieldIntensityProbe.BeamSelection)                                                                     | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#FieldIntensityProbe.MeshConnectionSelection)                                                 | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#FieldIntensityProbe.SurfaceSelection)                                                               | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#FieldIntensityProbe.SpringSelection)                                                                 | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#FieldIntensityProbe.IsSolved)                                                                               | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#FieldIntensityProbe.Orientation)                                                                         | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#FieldIntensityProbe.IterationNumber)                                                                 | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#FieldIntensityProbe.LoadStep)                                                                               | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#FieldIntensityProbe.LoadStepNumber)                                                                   | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#FieldIntensityProbe.Substep)                                                                                 | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#FieldIntensityProbe.DisplayTime)                                                                         | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#FieldIntensityProbe.MaximumTotal)                                                                       | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#FieldIntensityProbe.MaximumXAxis)                                                                       | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#FieldIntensityProbe.MaximumYAxis)                                                                       | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#FieldIntensityProbe.MaximumZAxis)                                                                       | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#FieldIntensityProbe.MinimumTotal)                                                                       | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#FieldIntensityProbe.MinimumXAxis)                                                                       | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#FieldIntensityProbe.MinimumYAxis)                                                                       | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#FieldIntensityProbe.MinimumZAxis)                                                                       | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#FieldIntensityProbe.Time)                                                                                       | Gets the Time.                                                                                                                                                             |
| [`Total`](#FieldIntensityProbe.Total)                                                                                     | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#FieldIntensityProbe.XAxis)                                                                                     | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#FieldIntensityProbe.YAxis)                                                                                     | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#FieldIntensityProbe.ZAxis)                                                                                     | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#FieldIntensityProbe.ResultSelection)                                                                 | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#FieldIntensityProbe.SpatialResolution)                                                             | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#FieldIntensityProbe.Type)                                                                                       | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#FieldIntensityProbe.DpfEvaluation)                                                                     | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#FieldIntensityProbe.Suppressed)                                                                           | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#FieldIntensityProbe.Children)                                                                               | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#FieldIntensityProbe.Comments)                                                                               | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#FieldIntensityProbe.Figures)                                                                                 | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#FieldIntensityProbe.Images)                                                                                   | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#FieldIntensityProbe.Properties)                                                                           | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#FieldIntensityProbe.VisibleProperties)                                                             | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import FieldIntensityProbe
```

## Property detail

### *property* FieldIntensityProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.TotalFieldIntensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalFieldIntensity.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.YAxisFieldIntensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxisFieldIntensity.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FieldIntensityProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FieldIntensityProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FieldIntensityProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
