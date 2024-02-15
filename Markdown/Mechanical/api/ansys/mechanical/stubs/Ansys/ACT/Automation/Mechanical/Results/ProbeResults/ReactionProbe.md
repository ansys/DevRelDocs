# ReactionProbe

### *class* ReactionProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ReactionProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#ReactionProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ReactionProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#ReactionProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ReactionProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#ReactionProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#ReactionProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ReactionProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ReactionProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ReactionProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ReactionProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ReactionProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ReactionProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ReactionProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ReactionProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ReactionProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ReactionProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ReactionProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ReactionProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ReactionProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ReactionProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`MaximumHeat`](#ReactionProbe.MaximumHeat)                                                                               | Gets the MaximumHeat.                                                                                                                                                      |
| [`MinimumHeat`](#ReactionProbe.MinimumHeat)                                                                               | Gets the MinimumHeat.                                                                                                                                                      |
| [`Heat`](#ReactionProbe.Heat)                                                                                             | Gets the Heat.                                                                                                                                                             |
| [`Extraction`](#ReactionProbe.Extraction)                                                                                 | Gets or sets the Extraction.                                                                                                                                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#ReactionProbe.Summation)                                                                                   | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#ReactionProbe.LocationMethod)                                                                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#ReactionProbe.GeometryLocation)                                                                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#ReactionProbe.CoordinateSystemSelection)                                                   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#ReactionProbe.BoundaryConditionSelection)                                                 | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#ReactionProbe.ContactRegionSelection)                                                         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#ReactionProbe.RemotePointSelection)                                                             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#ReactionProbe.BeamSelection)                                                                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#ReactionProbe.MeshConnectionSelection)                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#ReactionProbe.SurfaceSelection)                                                                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#ReactionProbe.SpringSelection)                                                                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#ReactionProbe.IsSolved)                                                                                     | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#ReactionProbe.Orientation)                                                                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#ReactionProbe.IterationNumber)                                                                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ReactionProbe.LoadStep)                                                                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ReactionProbe.LoadStepNumber)                                                                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#ReactionProbe.Substep)                                                                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#ReactionProbe.DisplayTime)                                                                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#ReactionProbe.MaximumTotal)                                                                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ReactionProbe.MaximumXAxis)                                                                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ReactionProbe.MaximumYAxis)                                                                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ReactionProbe.MaximumZAxis)                                                                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#ReactionProbe.MinimumTotal)                                                                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ReactionProbe.MinimumXAxis)                                                                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ReactionProbe.MinimumYAxis)                                                                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ReactionProbe.MinimumZAxis)                                                                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#ReactionProbe.Time)                                                                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#ReactionProbe.Total)                                                                                           | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#ReactionProbe.XAxis)                                                                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ReactionProbe.YAxis)                                                                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ReactionProbe.ZAxis)                                                                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#ReactionProbe.ResultSelection)                                                                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#ReactionProbe.SpatialResolution)                                                                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#ReactionProbe.Type)                                                                                             | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#ReactionProbe.DpfEvaluation)                                                                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#ReactionProbe.Suppressed)                                                                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#ReactionProbe.Children)                                                                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#ReactionProbe.Comments)                                                                                     | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#ReactionProbe.Figures)                                                                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#ReactionProbe.Images)                                                                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#ReactionProbe.Properties)                                                                                 | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#ReactionProbe.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import ReactionProbe
```

## Property detail

### *property* ReactionProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.MaximumHeat *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumHeat.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.MinimumHeat *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumHeat.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Heat *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Heat.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Extraction *: [Ansys.Mechanical.DataModel.Enums.ProbeExtractionType](../../../../../Mechanical/DataModel/Enums/ProbeExtractionType.md#ProbeExtractionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Extraction.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ReactionProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ReactionProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ReactionProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
