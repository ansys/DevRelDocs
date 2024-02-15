# MagneticFluxProbe

### *class* MagneticFluxProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MagneticFluxProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#MagneticFluxProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MagneticFluxProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#MagneticFluxProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#MagneticFluxProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#MagneticFluxProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#MagneticFluxProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MagneticFluxProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MagneticFluxProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MagneticFluxProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MagneticFluxProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MagneticFluxProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MagneticFluxProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MagneticFluxProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MagneticFluxProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MagneticFluxProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MagneticFluxProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MagneticFluxProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MagneticFluxProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MagneticFluxProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MagneticFluxProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`SymmetryMultiplier`](#MagneticFluxProbe.SymmetryMultiplier)                                                             | Gets or sets the SymmetryMultiplier.                                                                                                                                       |
| [`MagneticFlux`](#MagneticFluxProbe.MagneticFlux)                                                                         | Gets the MagneticFlux.                                                                                                                                                     |
| [`MaximumMagneticFlux`](#MagneticFluxProbe.MaximumMagneticFlux)                                                           | Gets the MaximumMagneticFlux.                                                                                                                                              |
| [`MinimumMagneticFlux`](#MagneticFluxProbe.MinimumMagneticFlux)                                                           | Gets the MinimumMagneticFlux.                                                                                                                                              |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#MagneticFluxProbe.Summation)                                                                               | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#MagneticFluxProbe.LocationMethod)                                                                     | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#MagneticFluxProbe.GeometryLocation)                                                                 | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#MagneticFluxProbe.CoordinateSystemSelection)                                               | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#MagneticFluxProbe.BoundaryConditionSelection)                                             | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#MagneticFluxProbe.ContactRegionSelection)                                                     | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#MagneticFluxProbe.RemotePointSelection)                                                         | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#MagneticFluxProbe.BeamSelection)                                                                       | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#MagneticFluxProbe.MeshConnectionSelection)                                                   | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#MagneticFluxProbe.SurfaceSelection)                                                                 | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#MagneticFluxProbe.SpringSelection)                                                                   | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#MagneticFluxProbe.IsSolved)                                                                                 | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#MagneticFluxProbe.Orientation)                                                                           | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#MagneticFluxProbe.IterationNumber)                                                                   | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#MagneticFluxProbe.LoadStep)                                                                                 | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#MagneticFluxProbe.LoadStepNumber)                                                                     | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#MagneticFluxProbe.Substep)                                                                                   | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#MagneticFluxProbe.DisplayTime)                                                                           | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#MagneticFluxProbe.MaximumTotal)                                                                         | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#MagneticFluxProbe.MaximumXAxis)                                                                         | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#MagneticFluxProbe.MaximumYAxis)                                                                         | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#MagneticFluxProbe.MaximumZAxis)                                                                         | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#MagneticFluxProbe.MinimumTotal)                                                                         | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#MagneticFluxProbe.MinimumXAxis)                                                                         | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#MagneticFluxProbe.MinimumYAxis)                                                                         | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#MagneticFluxProbe.MinimumZAxis)                                                                         | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#MagneticFluxProbe.Time)                                                                                         | Gets the Time.                                                                                                                                                             |
| [`Total`](#MagneticFluxProbe.Total)                                                                                       | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#MagneticFluxProbe.XAxis)                                                                                       | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#MagneticFluxProbe.YAxis)                                                                                       | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#MagneticFluxProbe.ZAxis)                                                                                       | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#MagneticFluxProbe.ResultSelection)                                                                   | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#MagneticFluxProbe.SpatialResolution)                                                               | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#MagneticFluxProbe.Type)                                                                                         | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#MagneticFluxProbe.DpfEvaluation)                                                                       | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#MagneticFluxProbe.Suppressed)                                                                             | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#MagneticFluxProbe.Children)                                                                                 | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#MagneticFluxProbe.Comments)                                                                                 | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#MagneticFluxProbe.Figures)                                                                                   | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#MagneticFluxProbe.Images)                                                                                     | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#MagneticFluxProbe.Properties)                                                                             | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#MagneticFluxProbe.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import MagneticFluxProbe
```

## Property detail

### *property* MagneticFluxProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.SymmetryMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SymmetryMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.MagneticFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagneticFlux.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.MaximumMagneticFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMagneticFlux.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.MinimumMagneticFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMagneticFlux.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MagneticFluxProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MagneticFluxProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MagneticFluxProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
