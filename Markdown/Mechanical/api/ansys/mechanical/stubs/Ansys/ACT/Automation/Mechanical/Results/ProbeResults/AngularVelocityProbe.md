# AngularVelocityProbe

### *class* AngularVelocityProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AngularVelocityProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#AngularVelocityProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#AngularVelocityProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#AngularVelocityProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#AngularVelocityProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#AngularVelocityProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#AngularVelocityProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#AngularVelocityProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AngularVelocityProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AngularVelocityProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AngularVelocityProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#AngularVelocityProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#AngularVelocityProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AngularVelocityProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AngularVelocityProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AngularVelocityProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AngularVelocityProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AngularVelocityProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#AngularVelocityProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AngularVelocityProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AngularVelocityProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#AngularVelocityProbe.Summation)                                                                            | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#AngularVelocityProbe.LocationMethod)                                                                  | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#AngularVelocityProbe.GeometryLocation)                                                              | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#AngularVelocityProbe.CoordinateSystemSelection)                                            | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#AngularVelocityProbe.BoundaryConditionSelection)                                          | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#AngularVelocityProbe.ContactRegionSelection)                                                  | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#AngularVelocityProbe.RemotePointSelection)                                                      | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#AngularVelocityProbe.BeamSelection)                                                                    | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#AngularVelocityProbe.MeshConnectionSelection)                                                | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#AngularVelocityProbe.SurfaceSelection)                                                              | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#AngularVelocityProbe.SpringSelection)                                                                | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#AngularVelocityProbe.IsSolved)                                                                              | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#AngularVelocityProbe.Orientation)                                                                        | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#AngularVelocityProbe.IterationNumber)                                                                | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#AngularVelocityProbe.LoadStep)                                                                              | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#AngularVelocityProbe.LoadStepNumber)                                                                  | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#AngularVelocityProbe.Substep)                                                                                | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#AngularVelocityProbe.DisplayTime)                                                                        | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#AngularVelocityProbe.MaximumTotal)                                                                      | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#AngularVelocityProbe.MaximumXAxis)                                                                      | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#AngularVelocityProbe.MaximumYAxis)                                                                      | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#AngularVelocityProbe.MaximumZAxis)                                                                      | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#AngularVelocityProbe.MinimumTotal)                                                                      | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#AngularVelocityProbe.MinimumXAxis)                                                                      | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#AngularVelocityProbe.MinimumYAxis)                                                                      | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#AngularVelocityProbe.MinimumZAxis)                                                                      | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#AngularVelocityProbe.Time)                                                                                      | Gets the Time.                                                                                                                                                             |
| [`Total`](#AngularVelocityProbe.Total)                                                                                    | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#AngularVelocityProbe.XAxis)                                                                                    | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#AngularVelocityProbe.YAxis)                                                                                    | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#AngularVelocityProbe.ZAxis)                                                                                    | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#AngularVelocityProbe.ResultSelection)                                                                | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#AngularVelocityProbe.SpatialResolution)                                                            | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#AngularVelocityProbe.Type)                                                                                      | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#AngularVelocityProbe.DpfEvaluation)                                                                    | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#AngularVelocityProbe.Suppressed)                                                                          | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#AngularVelocityProbe.Children)                                                                              | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#AngularVelocityProbe.Comments)                                                                              | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#AngularVelocityProbe.Figures)                                                                                | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#AngularVelocityProbe.Images)                                                                                  | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#AngularVelocityProbe.Properties)                                                                          | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#AngularVelocityProbe.VisibleProperties)                                                            | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import AngularVelocityProbe
```

## Property detail

### *property* AngularVelocityProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AngularVelocityProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AngularVelocityProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AngularVelocityProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
