# ForceSummationProbe

### *class* ForceSummationProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ForceSummationProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#ForceSummationProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ForceSummationProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#ForceSummationProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ForceSummationProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#ForceSummationProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#ForceSummationProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ForceSummationProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ForceSummationProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ForceSummationProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ForceSummationProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ForceSummationProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ForceSummationProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ForceSummationProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ForceSummationProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ForceSummationProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ForceSummationProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ForceSummationProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ForceSummationProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ForceSummationProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ForceSummationProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`SymmetryMultiplier`](#ForceSummationProbe.SymmetryMultiplier)                                                           | Gets or sets the SymmetryMultiplier.                                                                                                                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#ForceSummationProbe.Summation)                                                                             | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#ForceSummationProbe.LocationMethod)                                                                   | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#ForceSummationProbe.GeometryLocation)                                                               | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#ForceSummationProbe.CoordinateSystemSelection)                                             | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#ForceSummationProbe.BoundaryConditionSelection)                                           | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#ForceSummationProbe.ContactRegionSelection)                                                   | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#ForceSummationProbe.RemotePointSelection)                                                       | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#ForceSummationProbe.BeamSelection)                                                                     | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#ForceSummationProbe.MeshConnectionSelection)                                                 | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#ForceSummationProbe.SurfaceSelection)                                                               | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#ForceSummationProbe.SpringSelection)                                                                 | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#ForceSummationProbe.IsSolved)                                                                               | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#ForceSummationProbe.Orientation)                                                                         | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#ForceSummationProbe.IterationNumber)                                                                 | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ForceSummationProbe.LoadStep)                                                                               | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ForceSummationProbe.LoadStepNumber)                                                                   | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#ForceSummationProbe.Substep)                                                                                 | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#ForceSummationProbe.DisplayTime)                                                                         | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#ForceSummationProbe.MaximumTotal)                                                                       | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ForceSummationProbe.MaximumXAxis)                                                                       | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ForceSummationProbe.MaximumYAxis)                                                                       | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ForceSummationProbe.MaximumZAxis)                                                                       | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#ForceSummationProbe.MinimumTotal)                                                                       | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ForceSummationProbe.MinimumXAxis)                                                                       | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ForceSummationProbe.MinimumYAxis)                                                                       | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ForceSummationProbe.MinimumZAxis)                                                                       | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#ForceSummationProbe.Time)                                                                                       | Gets the Time.                                                                                                                                                             |
| [`Total`](#ForceSummationProbe.Total)                                                                                     | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#ForceSummationProbe.XAxis)                                                                                     | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ForceSummationProbe.YAxis)                                                                                     | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ForceSummationProbe.ZAxis)                                                                                     | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#ForceSummationProbe.ResultSelection)                                                                 | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#ForceSummationProbe.SpatialResolution)                                                             | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#ForceSummationProbe.Type)                                                                                       | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#ForceSummationProbe.DpfEvaluation)                                                                     | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#ForceSummationProbe.Suppressed)                                                                           | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#ForceSummationProbe.Children)                                                                               | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#ForceSummationProbe.Comments)                                                                               | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#ForceSummationProbe.Figures)                                                                                 | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#ForceSummationProbe.Images)                                                                                   | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#ForceSummationProbe.Properties)                                                                           | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#ForceSummationProbe.VisibleProperties)                                                             | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import ForceSummationProbe
```

## Property detail

### *property* ForceSummationProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.SymmetryMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SymmetryMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ForceSummationProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ForceSummationProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ForceSummationProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
