# AngularVelocityProbe

<a id="AngularVelocityProbe"></a>

### *class* AngularVelocityProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AngularVelocityProbe.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#AngularVelocityProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
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

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import AngularVelocityProbe
```

<a id="property-detail"></a>

## Property detail

<a id="AngularVelocityProbe.InternalObject"></a>

### *property* AngularVelocityProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.DataModelObjectCategory"></a>

### *property* AngularVelocityProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Summation"></a>

### *property* AngularVelocityProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.LocationMethod"></a>

### *property* AngularVelocityProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.GeometryLocation"></a>

### *property* AngularVelocityProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.CoordinateSystemSelection"></a>

### *property* AngularVelocityProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.BoundaryConditionSelection"></a>

### *property* AngularVelocityProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.ContactRegionSelection"></a>

### *property* AngularVelocityProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.RemotePointSelection"></a>

### *property* AngularVelocityProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.BeamSelection"></a>

### *property* AngularVelocityProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.MeshConnectionSelection"></a>

### *property* AngularVelocityProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.SurfaceSelection"></a>

### *property* AngularVelocityProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.SpringSelection"></a>

### *property* AngularVelocityProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.IsSolved"></a>

### *property* AngularVelocityProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Orientation"></a>

### *property* AngularVelocityProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.IterationNumber"></a>

### *property* AngularVelocityProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.LoadStep"></a>

### *property* AngularVelocityProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.LoadStepNumber"></a>

### *property* AngularVelocityProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Substep"></a>

### *property* AngularVelocityProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.DisplayTime"></a>

### *property* AngularVelocityProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.MaximumTotal"></a>

### *property* AngularVelocityProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.MaximumXAxis"></a>

### *property* AngularVelocityProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.MaximumYAxis"></a>

### *property* AngularVelocityProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.MaximumZAxis"></a>

### *property* AngularVelocityProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.MinimumTotal"></a>

### *property* AngularVelocityProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.MinimumXAxis"></a>

### *property* AngularVelocityProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.MinimumYAxis"></a>

### *property* AngularVelocityProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.MinimumZAxis"></a>

### *property* AngularVelocityProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Time"></a>

### *property* AngularVelocityProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Total"></a>

### *property* AngularVelocityProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.XAxis"></a>

### *property* AngularVelocityProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.YAxis"></a>

### *property* AngularVelocityProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.ZAxis"></a>

### *property* AngularVelocityProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.ResultSelection"></a>

### *property* AngularVelocityProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.SpatialResolution"></a>

### *property* AngularVelocityProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Type"></a>

### *property* AngularVelocityProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.DpfEvaluation"></a>

### *property* AngularVelocityProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Suppressed"></a>

### *property* AngularVelocityProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Children"></a>

### *property* AngularVelocityProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Comments"></a>

### *property* AngularVelocityProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Figures"></a>

### *property* AngularVelocityProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Images"></a>

### *property* AngularVelocityProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AngularVelocityProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Properties"></a>

### *property* AngularVelocityProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.VisibleProperties"></a>

### *property* AngularVelocityProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AngularVelocityProbe.ExportAnimation"></a>

### AngularVelocityProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.ClearGeneratedData"></a>

### AngularVelocityProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.DuplicateWithoutResults"></a>

### AngularVelocityProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.EvaluateAllResults"></a>

### AngularVelocityProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.SnapToMeshNodes"></a>

### AngularVelocityProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.RenameBasedOnDefinition"></a>

### AngularVelocityProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Delete"></a>

### AngularVelocityProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.GetChildren"></a>

### AngularVelocityProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AngularVelocityProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.AddComment"></a>

### AngularVelocityProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.AddFigure"></a>

### AngularVelocityProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.AddImage"></a>

### AngularVelocityProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Activate"></a>

### AngularVelocityProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.CopyTo"></a>

### AngularVelocityProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.Duplicate"></a>

### AngularVelocityProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.GroupAllSimilarChildren"></a>

### AngularVelocityProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.GroupSimilarObjects"></a>

### AngularVelocityProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.PropertyByName"></a>

### AngularVelocityProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.PropertyByAPIName"></a>

### AngularVelocityProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.CreateParameter"></a>

### AngularVelocityProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.GetParameter"></a>

### AngularVelocityProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AngularVelocityProbe.RemoveParameter"></a>

### AngularVelocityProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
