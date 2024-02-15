# AngularAccelerationProbe

### *class* AngularAccelerationProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AngularAccelerationProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#AngularAccelerationProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#AngularAccelerationProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#AngularAccelerationProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#AngularAccelerationProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#AngularAccelerationProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#AngularAccelerationProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AngularAccelerationProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AngularAccelerationProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AngularAccelerationProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AngularAccelerationProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AngularAccelerationProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AngularAccelerationProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AngularAccelerationProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AngularAccelerationProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AngularAccelerationProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AngularAccelerationProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AngularAccelerationProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#AngularAccelerationProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AngularAccelerationProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AngularAccelerationProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#AngularAccelerationProbe.Summation)                                                                        | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#AngularAccelerationProbe.LocationMethod)                                                              | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#AngularAccelerationProbe.GeometryLocation)                                                          | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#AngularAccelerationProbe.CoordinateSystemSelection)                                        | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#AngularAccelerationProbe.BoundaryConditionSelection)                                      | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#AngularAccelerationProbe.ContactRegionSelection)                                              | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#AngularAccelerationProbe.RemotePointSelection)                                                  | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#AngularAccelerationProbe.BeamSelection)                                                                | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#AngularAccelerationProbe.MeshConnectionSelection)                                            | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#AngularAccelerationProbe.SurfaceSelection)                                                          | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#AngularAccelerationProbe.SpringSelection)                                                            | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#AngularAccelerationProbe.IsSolved)                                                                          | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#AngularAccelerationProbe.Orientation)                                                                    | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#AngularAccelerationProbe.IterationNumber)                                                            | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#AngularAccelerationProbe.LoadStep)                                                                          | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#AngularAccelerationProbe.LoadStepNumber)                                                              | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#AngularAccelerationProbe.Substep)                                                                            | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#AngularAccelerationProbe.DisplayTime)                                                                    | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#AngularAccelerationProbe.MaximumTotal)                                                                  | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#AngularAccelerationProbe.MaximumXAxis)                                                                  | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#AngularAccelerationProbe.MaximumYAxis)                                                                  | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#AngularAccelerationProbe.MaximumZAxis)                                                                  | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#AngularAccelerationProbe.MinimumTotal)                                                                  | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#AngularAccelerationProbe.MinimumXAxis)                                                                  | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#AngularAccelerationProbe.MinimumYAxis)                                                                  | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#AngularAccelerationProbe.MinimumZAxis)                                                                  | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#AngularAccelerationProbe.Time)                                                                                  | Gets the Time.                                                                                                                                                             |
| [`Total`](#AngularAccelerationProbe.Total)                                                                                | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#AngularAccelerationProbe.XAxis)                                                                                | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#AngularAccelerationProbe.YAxis)                                                                                | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#AngularAccelerationProbe.ZAxis)                                                                                | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#AngularAccelerationProbe.ResultSelection)                                                            | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#AngularAccelerationProbe.SpatialResolution)                                                        | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#AngularAccelerationProbe.Type)                                                                                  | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#AngularAccelerationProbe.DpfEvaluation)                                                                | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#AngularAccelerationProbe.Suppressed)                                                                      | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#AngularAccelerationProbe.Children)                                                                          | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#AngularAccelerationProbe.Comments)                                                                          | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#AngularAccelerationProbe.Figures)                                                                            | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#AngularAccelerationProbe.Images)                                                                              | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#AngularAccelerationProbe.Properties)                                                                      | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#AngularAccelerationProbe.VisibleProperties)                                                        | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import AngularAccelerationProbe
```

## Property detail

### *property* AngularAccelerationProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AngularAccelerationProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AngularAccelerationProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AngularAccelerationProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
