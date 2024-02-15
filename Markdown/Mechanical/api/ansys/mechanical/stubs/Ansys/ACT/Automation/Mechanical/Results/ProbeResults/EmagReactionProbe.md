# EmagReactionProbe

### *class* EmagReactionProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EmagReactionProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#EmagReactionProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#EmagReactionProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#EmagReactionProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#EmagReactionProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#EmagReactionProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#EmagReactionProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#EmagReactionProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EmagReactionProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EmagReactionProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EmagReactionProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EmagReactionProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EmagReactionProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EmagReactionProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EmagReactionProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EmagReactionProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EmagReactionProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EmagReactionProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#EmagReactionProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#EmagReactionProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EmagReactionProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`MaximumCurrent`](#EmagReactionProbe.MaximumCurrent)                                                                     | Gets the MaximumCurrent.                                                                                                                                                   |
| [`MinimumCurrent`](#EmagReactionProbe.MinimumCurrent)                                                                     | Gets the MinimumCurrent.                                                                                                                                                   |
| [`Current`](../../BoundaryConditions/Current.md#Current)                                                                  | Gets the Current.                                                                                                                                                          |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#EmagReactionProbe.Summation)                                                                               | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#EmagReactionProbe.LocationMethod)                                                                     | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#EmagReactionProbe.GeometryLocation)                                                                 | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#EmagReactionProbe.CoordinateSystemSelection)                                               | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#EmagReactionProbe.BoundaryConditionSelection)                                             | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#EmagReactionProbe.ContactRegionSelection)                                                     | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#EmagReactionProbe.RemotePointSelection)                                                         | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#EmagReactionProbe.BeamSelection)                                                                       | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#EmagReactionProbe.MeshConnectionSelection)                                                   | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#EmagReactionProbe.SurfaceSelection)                                                                 | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#EmagReactionProbe.SpringSelection)                                                                   | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#EmagReactionProbe.IsSolved)                                                                                 | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#EmagReactionProbe.Orientation)                                                                           | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#EmagReactionProbe.IterationNumber)                                                                   | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#EmagReactionProbe.LoadStep)                                                                                 | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#EmagReactionProbe.LoadStepNumber)                                                                     | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#EmagReactionProbe.Substep)                                                                                   | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#EmagReactionProbe.DisplayTime)                                                                           | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#EmagReactionProbe.MaximumTotal)                                                                         | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#EmagReactionProbe.MaximumXAxis)                                                                         | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#EmagReactionProbe.MaximumYAxis)                                                                         | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#EmagReactionProbe.MaximumZAxis)                                                                         | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#EmagReactionProbe.MinimumTotal)                                                                         | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#EmagReactionProbe.MinimumXAxis)                                                                         | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#EmagReactionProbe.MinimumYAxis)                                                                         | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#EmagReactionProbe.MinimumZAxis)                                                                         | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#EmagReactionProbe.Time)                                                                                         | Gets the Time.                                                                                                                                                             |
| [`Total`](#EmagReactionProbe.Total)                                                                                       | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#EmagReactionProbe.XAxis)                                                                                       | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#EmagReactionProbe.YAxis)                                                                                       | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#EmagReactionProbe.ZAxis)                                                                                       | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#EmagReactionProbe.ResultSelection)                                                                   | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#EmagReactionProbe.SpatialResolution)                                                               | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#EmagReactionProbe.Type)                                                                                         | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#EmagReactionProbe.DpfEvaluation)                                                                       | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#EmagReactionProbe.Suppressed)                                                                             | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#EmagReactionProbe.Children)                                                                                 | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#EmagReactionProbe.Comments)                                                                                 | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#EmagReactionProbe.Figures)                                                                                   | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#EmagReactionProbe.Images)                                                                                     | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#EmagReactionProbe.Properties)                                                                             | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#EmagReactionProbe.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import EmagReactionProbe
```

## Property detail

### *property* EmagReactionProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.MaximumCurrent *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumCurrent.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.MinimumCurrent *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumCurrent.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.Current *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Current.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* EmagReactionProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### EmagReactionProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### EmagReactionProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
