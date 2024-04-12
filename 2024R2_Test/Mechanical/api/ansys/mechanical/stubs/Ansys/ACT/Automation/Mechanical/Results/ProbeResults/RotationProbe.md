<a id="rotationprobe"></a>

# RotationProbe

<a id="RotationProbe"></a>

### *class* RotationProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RotationProbe.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#RotationProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#RotationProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#RotationProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#RotationProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#RotationProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#RotationProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#RotationProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RotationProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RotationProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RotationProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RotationProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RotationProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RotationProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RotationProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RotationProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RotationProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RotationProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RotationProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RotationProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RotationProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`MaximumXAxisRotation`](#RotationProbe.MaximumXAxisRotation)                                                             | Gets the MaximumXAxisRotation.                                                                                                                                             |
| [`MaximumYAxisRotation`](#RotationProbe.MaximumYAxisRotation)                                                             | Gets the MaximumYAxisRotation.                                                                                                                                             |
| [`MaximumZAxisRotation`](#RotationProbe.MaximumZAxisRotation)                                                             | Gets the MaximumZAxisRotation.                                                                                                                                             |
| [`MinimumXAxisRotation`](#RotationProbe.MinimumXAxisRotation)                                                             | Gets the MinimumXAxisRotation.                                                                                                                                             |
| [`MinimumYAxisRotation`](#RotationProbe.MinimumYAxisRotation)                                                             | Gets the MinimumYAxisRotation.                                                                                                                                             |
| [`MinimumZAxisRotation`](#RotationProbe.MinimumZAxisRotation)                                                             | Gets the MinimumZAxisRotation.                                                                                                                                             |
| [`XAxisRotation`](#RotationProbe.XAxisRotation)                                                                           | Gets the XAxisRotation.                                                                                                                                                    |
| [`YAxisRotation`](#RotationProbe.YAxisRotation)                                                                           | Gets the YAxisRotation.                                                                                                                                                    |
| [`ZAxisRotation`](#RotationProbe.ZAxisRotation)                                                                           | Gets the ZAxisRotation.                                                                                                                                                    |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#RotationProbe.Summation)                                                                                   | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#RotationProbe.LocationMethod)                                                                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#RotationProbe.GeometryLocation)                                                                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#RotationProbe.CoordinateSystemSelection)                                                   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#RotationProbe.BoundaryConditionSelection)                                                 | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#RotationProbe.ContactRegionSelection)                                                         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#RotationProbe.RemotePointSelection)                                                             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#RotationProbe.BeamSelection)                                                                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#RotationProbe.MeshConnectionSelection)                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#RotationProbe.SurfaceSelection)                                                                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#RotationProbe.SpringSelection)                                                                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#RotationProbe.IsSolved)                                                                                     | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#RotationProbe.Orientation)                                                                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#RotationProbe.IterationNumber)                                                                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#RotationProbe.LoadStep)                                                                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#RotationProbe.LoadStepNumber)                                                                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#RotationProbe.Substep)                                                                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#RotationProbe.DisplayTime)                                                                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#RotationProbe.MaximumTotal)                                                                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#RotationProbe.MaximumXAxis)                                                                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#RotationProbe.MaximumYAxis)                                                                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#RotationProbe.MaximumZAxis)                                                                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#RotationProbe.MinimumTotal)                                                                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#RotationProbe.MinimumXAxis)                                                                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#RotationProbe.MinimumYAxis)                                                                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#RotationProbe.MinimumZAxis)                                                                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#RotationProbe.Time)                                                                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#RotationProbe.Total)                                                                                           | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#RotationProbe.XAxis)                                                                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#RotationProbe.YAxis)                                                                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#RotationProbe.ZAxis)                                                                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#RotationProbe.ResultSelection)                                                                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#RotationProbe.SpatialResolution)                                                                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#RotationProbe.Type)                                                                                             | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#RotationProbe.DpfEvaluation)                                                                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#RotationProbe.Suppressed)                                                                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#RotationProbe.Children)                                                                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#RotationProbe.Comments)                                                                                     | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#RotationProbe.Figures)                                                                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#RotationProbe.Images)                                                                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#RotationProbe.Properties)                                                                                 | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#RotationProbe.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import RotationProbe
```

<a id="property-detail"></a>

## Property detail

<a id="RotationProbe.InternalObject"></a>

### *property* RotationProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MaximumXAxisRotation"></a>

### *property* RotationProbe.MaximumXAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxisRotation.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MaximumYAxisRotation"></a>

### *property* RotationProbe.MaximumYAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxisRotation.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MaximumZAxisRotation"></a>

### *property* RotationProbe.MaximumZAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxisRotation.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MinimumXAxisRotation"></a>

### *property* RotationProbe.MinimumXAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxisRotation.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MinimumYAxisRotation"></a>

### *property* RotationProbe.MinimumYAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxisRotation.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MinimumZAxisRotation"></a>

### *property* RotationProbe.MinimumZAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxisRotation.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.XAxisRotation"></a>

### *property* RotationProbe.XAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxisRotation.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.YAxisRotation"></a>

### *property* RotationProbe.YAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxisRotation.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.ZAxisRotation"></a>

### *property* RotationProbe.ZAxisRotation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxisRotation.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.DataModelObjectCategory"></a>

### *property* RotationProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Summation"></a>

### *property* RotationProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.LocationMethod"></a>

### *property* RotationProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.GeometryLocation"></a>

### *property* RotationProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.CoordinateSystemSelection"></a>

### *property* RotationProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.BoundaryConditionSelection"></a>

### *property* RotationProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.ContactRegionSelection"></a>

### *property* RotationProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.RemotePointSelection"></a>

### *property* RotationProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.BeamSelection"></a>

### *property* RotationProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MeshConnectionSelection"></a>

### *property* RotationProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.SurfaceSelection"></a>

### *property* RotationProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.SpringSelection"></a>

### *property* RotationProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.IsSolved"></a>

### *property* RotationProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Orientation"></a>

### *property* RotationProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.IterationNumber"></a>

### *property* RotationProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.LoadStep"></a>

### *property* RotationProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.LoadStepNumber"></a>

### *property* RotationProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Substep"></a>

### *property* RotationProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.DisplayTime"></a>

### *property* RotationProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MaximumTotal"></a>

### *property* RotationProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MaximumXAxis"></a>

### *property* RotationProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MaximumYAxis"></a>

### *property* RotationProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MaximumZAxis"></a>

### *property* RotationProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MinimumTotal"></a>

### *property* RotationProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MinimumXAxis"></a>

### *property* RotationProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MinimumYAxis"></a>

### *property* RotationProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.MinimumZAxis"></a>

### *property* RotationProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Time"></a>

### *property* RotationProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Total"></a>

### *property* RotationProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.XAxis"></a>

### *property* RotationProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.YAxis"></a>

### *property* RotationProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.ZAxis"></a>

### *property* RotationProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.ResultSelection"></a>

### *property* RotationProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.SpatialResolution"></a>

### *property* RotationProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Type"></a>

### *property* RotationProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.DpfEvaluation"></a>

### *property* RotationProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Suppressed"></a>

### *property* RotationProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Children"></a>

### *property* RotationProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Comments"></a>

### *property* RotationProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Figures"></a>

### *property* RotationProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Images"></a>

### *property* RotationProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* RotationProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Properties"></a>

### *property* RotationProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.VisibleProperties"></a>

### *property* RotationProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RotationProbe.ExportAnimation"></a>

### RotationProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.ClearGeneratedData"></a>

### RotationProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.DuplicateWithoutResults"></a>

### RotationProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.EvaluateAllResults"></a>

### RotationProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.SnapToMeshNodes"></a>

### RotationProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.RenameBasedOnDefinition"></a>

### RotationProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Delete"></a>

### RotationProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.GetChildren"></a>

### RotationProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### RotationProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.AddComment"></a>

### RotationProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.AddFigure"></a>

### RotationProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.AddImage"></a>

### RotationProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Activate"></a>

### RotationProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.CopyTo"></a>

### RotationProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.Duplicate"></a>

### RotationProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.GroupAllSimilarChildren"></a>

### RotationProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.GroupSimilarObjects"></a>

### RotationProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.PropertyByName"></a>

### RotationProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.PropertyByAPIName"></a>

### RotationProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.CreateParameter"></a>

### RotationProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.GetParameter"></a>

### RotationProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RotationProbe.RemoveParameter"></a>

### RotationProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
