# GeneralizedPlaneStrainProbe

### *class* GeneralizedPlaneStrainProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GeneralizedPlaneStrainProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#GeneralizedPlaneStrainProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#GeneralizedPlaneStrainProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#GeneralizedPlaneStrainProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#GeneralizedPlaneStrainProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#GeneralizedPlaneStrainProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#GeneralizedPlaneStrainProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#GeneralizedPlaneStrainProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GeneralizedPlaneStrainProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeneralizedPlaneStrainProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GeneralizedPlaneStrainProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#GeneralizedPlaneStrainProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#GeneralizedPlaneStrainProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GeneralizedPlaneStrainProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GeneralizedPlaneStrainProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeneralizedPlaneStrainProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GeneralizedPlaneStrainProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GeneralizedPlaneStrainProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#GeneralizedPlaneStrainProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GeneralizedPlaneStrainProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GeneralizedPlaneStrainProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#GeneralizedPlaneStrainProbe.Summation)                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#GeneralizedPlaneStrainProbe.LocationMethod)                                                           | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#GeneralizedPlaneStrainProbe.GeometryLocation)                                                       | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#GeneralizedPlaneStrainProbe.CoordinateSystemSelection)                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#GeneralizedPlaneStrainProbe.BoundaryConditionSelection)                                   | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#GeneralizedPlaneStrainProbe.ContactRegionSelection)                                           | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#GeneralizedPlaneStrainProbe.RemotePointSelection)                                               | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#GeneralizedPlaneStrainProbe.BeamSelection)                                                             | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#GeneralizedPlaneStrainProbe.MeshConnectionSelection)                                         | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#GeneralizedPlaneStrainProbe.SurfaceSelection)                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#GeneralizedPlaneStrainProbe.SpringSelection)                                                         | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#GeneralizedPlaneStrainProbe.IsSolved)                                                                       | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#GeneralizedPlaneStrainProbe.Orientation)                                                                 | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#GeneralizedPlaneStrainProbe.IterationNumber)                                                         | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#GeneralizedPlaneStrainProbe.LoadStep)                                                                       | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#GeneralizedPlaneStrainProbe.LoadStepNumber)                                                           | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#GeneralizedPlaneStrainProbe.Substep)                                                                         | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#GeneralizedPlaneStrainProbe.DisplayTime)                                                                 | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#GeneralizedPlaneStrainProbe.MaximumTotal)                                                               | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#GeneralizedPlaneStrainProbe.MaximumXAxis)                                                               | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#GeneralizedPlaneStrainProbe.MaximumYAxis)                                                               | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#GeneralizedPlaneStrainProbe.MaximumZAxis)                                                               | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#GeneralizedPlaneStrainProbe.MinimumTotal)                                                               | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#GeneralizedPlaneStrainProbe.MinimumXAxis)                                                               | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#GeneralizedPlaneStrainProbe.MinimumYAxis)                                                               | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#GeneralizedPlaneStrainProbe.MinimumZAxis)                                                               | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#GeneralizedPlaneStrainProbe.Time)                                                                               | Gets the Time.                                                                                                                                                             |
| [`Total`](#GeneralizedPlaneStrainProbe.Total)                                                                             | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#GeneralizedPlaneStrainProbe.XAxis)                                                                             | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#GeneralizedPlaneStrainProbe.YAxis)                                                                             | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#GeneralizedPlaneStrainProbe.ZAxis)                                                                             | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#GeneralizedPlaneStrainProbe.ResultSelection)                                                         | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#GeneralizedPlaneStrainProbe.SpatialResolution)                                                     | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#GeneralizedPlaneStrainProbe.Type)                                                                               | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#GeneralizedPlaneStrainProbe.DpfEvaluation)                                                             | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#GeneralizedPlaneStrainProbe.Suppressed)                                                                   | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#GeneralizedPlaneStrainProbe.Children)                                                                       | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#GeneralizedPlaneStrainProbe.Comments)                                                                       | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#GeneralizedPlaneStrainProbe.Figures)                                                                         | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#GeneralizedPlaneStrainProbe.Images)                                                                           | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#GeneralizedPlaneStrainProbe.Properties)                                                                   | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#GeneralizedPlaneStrainProbe.VisibleProperties)                                                     | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import GeneralizedPlaneStrainProbe
```

## Property detail

### *property* GeneralizedPlaneStrainProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* GeneralizedPlaneStrainProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### GeneralizedPlaneStrainProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### GeneralizedPlaneStrainProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
