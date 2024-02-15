# FractureToolProbe

### *class* FractureToolProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureToolProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#FractureToolProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FractureToolProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#FractureToolProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#FractureToolProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#FractureToolProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#FractureToolProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FractureToolProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FractureToolProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FractureToolProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FractureToolProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FractureToolProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FractureToolProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FractureToolProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FractureToolProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FractureToolProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FractureToolProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FractureToolProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FractureToolProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FractureToolProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FractureToolProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ActiveContour`](#FractureToolProbe.ActiveContour)                                                                       | Gets or sets the ActiveContour.                                                                                                                                            |
| [`CrackLengthPercentage`](#FractureToolProbe.CrackLengthPercentage)                                                       | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`SolverID`](#FractureToolProbe.SolverID)                                                                                 | Gets or sets the SolverID.                                                                                                                                                 |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#FractureToolProbe.Summation)                                                                               | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#FractureToolProbe.LocationMethod)                                                                     | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#FractureToolProbe.GeometryLocation)                                                                 | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#FractureToolProbe.CoordinateSystemSelection)                                               | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#FractureToolProbe.BoundaryConditionSelection)                                             | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#FractureToolProbe.ContactRegionSelection)                                                     | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#FractureToolProbe.RemotePointSelection)                                                         | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#FractureToolProbe.BeamSelection)                                                                       | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#FractureToolProbe.MeshConnectionSelection)                                                   | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#FractureToolProbe.SurfaceSelection)                                                                 | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#FractureToolProbe.SpringSelection)                                                                   | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#FractureToolProbe.IsSolved)                                                                                 | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#FractureToolProbe.Orientation)                                                                           | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#FractureToolProbe.IterationNumber)                                                                   | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#FractureToolProbe.LoadStep)                                                                                 | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#FractureToolProbe.LoadStepNumber)                                                                     | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#FractureToolProbe.Substep)                                                                                   | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#FractureToolProbe.DisplayTime)                                                                           | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#FractureToolProbe.MaximumTotal)                                                                         | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#FractureToolProbe.MaximumXAxis)                                                                         | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#FractureToolProbe.MaximumYAxis)                                                                         | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#FractureToolProbe.MaximumZAxis)                                                                         | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#FractureToolProbe.MinimumTotal)                                                                         | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#FractureToolProbe.MinimumXAxis)                                                                         | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#FractureToolProbe.MinimumYAxis)                                                                         | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#FractureToolProbe.MinimumZAxis)                                                                         | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#FractureToolProbe.Time)                                                                                         | Gets the Time.                                                                                                                                                             |
| [`Total`](#FractureToolProbe.Total)                                                                                       | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#FractureToolProbe.XAxis)                                                                                       | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#FractureToolProbe.YAxis)                                                                                       | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#FractureToolProbe.ZAxis)                                                                                       | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#FractureToolProbe.ResultSelection)                                                                   | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#FractureToolProbe.SpatialResolution)                                                               | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#FractureToolProbe.Type)                                                                                         | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#FractureToolProbe.DpfEvaluation)                                                                       | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#FractureToolProbe.Suppressed)                                                                             | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#FractureToolProbe.Children)                                                                                 | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#FractureToolProbe.Comments)                                                                                 | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#FractureToolProbe.Figures)                                                                                   | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#FractureToolProbe.Images)                                                                                     | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#FractureToolProbe.Properties)                                                                             | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#FractureToolProbe.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureToolProbe
```

## Property detail

### *property* FractureToolProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.CrackLengthPercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.SolverID *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FractureToolProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FractureToolProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FractureToolProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
