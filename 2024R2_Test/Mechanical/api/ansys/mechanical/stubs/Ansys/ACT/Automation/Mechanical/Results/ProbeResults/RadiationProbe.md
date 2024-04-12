<a id="radiationprobe"></a>

# RadiationProbe

<a id="RadiationProbe"></a>

### *class* RadiationProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RadiationProbe.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#RadiationProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#RadiationProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#RadiationProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#RadiationProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#RadiationProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#RadiationProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#RadiationProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RadiationProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RadiationProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RadiationProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RadiationProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RadiationProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RadiationProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RadiationProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RadiationProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RadiationProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RadiationProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RadiationProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RadiationProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RadiationProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`EmittedRadiation`](#RadiationProbe.EmittedRadiation)                                                                    | Gets the EmittedRadiation.                                                                                                                                                 |
| [`IncidentRadiation`](#RadiationProbe.IncidentRadiation)                                                                  | Gets the IncidentRadiation.                                                                                                                                                |
| [`NetRadiation`](#RadiationProbe.NetRadiation)                                                                            | Gets the NetRadiation.                                                                                                                                                     |
| [`ReflectedRadiation`](#RadiationProbe.ReflectedRadiation)                                                                | Gets the ReflectedRadiation.                                                                                                                                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#RadiationProbe.Summation)                                                                                  | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#RadiationProbe.LocationMethod)                                                                        | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#RadiationProbe.GeometryLocation)                                                                    | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#RadiationProbe.CoordinateSystemSelection)                                                  | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#RadiationProbe.BoundaryConditionSelection)                                                | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#RadiationProbe.ContactRegionSelection)                                                        | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#RadiationProbe.RemotePointSelection)                                                            | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#RadiationProbe.BeamSelection)                                                                          | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#RadiationProbe.MeshConnectionSelection)                                                      | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#RadiationProbe.SurfaceSelection)                                                                    | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#RadiationProbe.SpringSelection)                                                                      | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#RadiationProbe.IsSolved)                                                                                    | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#RadiationProbe.Orientation)                                                                              | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#RadiationProbe.IterationNumber)                                                                      | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#RadiationProbe.LoadStep)                                                                                    | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#RadiationProbe.LoadStepNumber)                                                                        | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#RadiationProbe.Substep)                                                                                      | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#RadiationProbe.DisplayTime)                                                                              | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#RadiationProbe.MaximumTotal)                                                                            | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#RadiationProbe.MaximumXAxis)                                                                            | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#RadiationProbe.MaximumYAxis)                                                                            | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#RadiationProbe.MaximumZAxis)                                                                            | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#RadiationProbe.MinimumTotal)                                                                            | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#RadiationProbe.MinimumXAxis)                                                                            | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#RadiationProbe.MinimumYAxis)                                                                            | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#RadiationProbe.MinimumZAxis)                                                                            | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#RadiationProbe.Time)                                                                                            | Gets the Time.                                                                                                                                                             |
| [`Total`](#RadiationProbe.Total)                                                                                          | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#RadiationProbe.XAxis)                                                                                          | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#RadiationProbe.YAxis)                                                                                          | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#RadiationProbe.ZAxis)                                                                                          | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#RadiationProbe.ResultSelection)                                                                      | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#RadiationProbe.SpatialResolution)                                                                  | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#RadiationProbe.Type)                                                                                            | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#RadiationProbe.DpfEvaluation)                                                                          | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#RadiationProbe.Suppressed)                                                                                | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#RadiationProbe.Children)                                                                                    | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#RadiationProbe.Comments)                                                                                    | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#RadiationProbe.Figures)                                                                                      | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#RadiationProbe.Images)                                                                                        | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#RadiationProbe.Properties)                                                                                | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#RadiationProbe.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import RadiationProbe
```

<a id="property-detail"></a>

## Property detail

<a id="RadiationProbe.InternalObject"></a>

### *property* RadiationProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.EmittedRadiation"></a>

### *property* RadiationProbe.EmittedRadiation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the EmittedRadiation.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.IncidentRadiation"></a>

### *property* RadiationProbe.IncidentRadiation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IncidentRadiation.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.NetRadiation"></a>

### *property* RadiationProbe.NetRadiation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NetRadiation.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.ReflectedRadiation"></a>

### *property* RadiationProbe.ReflectedRadiation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReflectedRadiation.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.DataModelObjectCategory"></a>

### *property* RadiationProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Summation"></a>

### *property* RadiationProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.LocationMethod"></a>

### *property* RadiationProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.GeometryLocation"></a>

### *property* RadiationProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.CoordinateSystemSelection"></a>

### *property* RadiationProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.BoundaryConditionSelection"></a>

### *property* RadiationProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.ContactRegionSelection"></a>

### *property* RadiationProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.RemotePointSelection"></a>

### *property* RadiationProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.BeamSelection"></a>

### *property* RadiationProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.MeshConnectionSelection"></a>

### *property* RadiationProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.SurfaceSelection"></a>

### *property* RadiationProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.SpringSelection"></a>

### *property* RadiationProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.IsSolved"></a>

### *property* RadiationProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Orientation"></a>

### *property* RadiationProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.IterationNumber"></a>

### *property* RadiationProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.LoadStep"></a>

### *property* RadiationProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.LoadStepNumber"></a>

### *property* RadiationProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Substep"></a>

### *property* RadiationProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.DisplayTime"></a>

### *property* RadiationProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.MaximumTotal"></a>

### *property* RadiationProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.MaximumXAxis"></a>

### *property* RadiationProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.MaximumYAxis"></a>

### *property* RadiationProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.MaximumZAxis"></a>

### *property* RadiationProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.MinimumTotal"></a>

### *property* RadiationProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.MinimumXAxis"></a>

### *property* RadiationProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.MinimumYAxis"></a>

### *property* RadiationProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.MinimumZAxis"></a>

### *property* RadiationProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Time"></a>

### *property* RadiationProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Total"></a>

### *property* RadiationProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.XAxis"></a>

### *property* RadiationProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.YAxis"></a>

### *property* RadiationProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.ZAxis"></a>

### *property* RadiationProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.ResultSelection"></a>

### *property* RadiationProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.SpatialResolution"></a>

### *property* RadiationProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Type"></a>

### *property* RadiationProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.DpfEvaluation"></a>

### *property* RadiationProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Suppressed"></a>

### *property* RadiationProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Children"></a>

### *property* RadiationProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Comments"></a>

### *property* RadiationProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Figures"></a>

### *property* RadiationProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Images"></a>

### *property* RadiationProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* RadiationProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Properties"></a>

### *property* RadiationProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.VisibleProperties"></a>

### *property* RadiationProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RadiationProbe.ExportAnimation"></a>

### RadiationProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.ClearGeneratedData"></a>

### RadiationProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.DuplicateWithoutResults"></a>

### RadiationProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.EvaluateAllResults"></a>

### RadiationProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.SnapToMeshNodes"></a>

### RadiationProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.RenameBasedOnDefinition"></a>

### RadiationProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Delete"></a>

### RadiationProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.GetChildren"></a>

### RadiationProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### RadiationProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.AddComment"></a>

### RadiationProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.AddFigure"></a>

### RadiationProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.AddImage"></a>

### RadiationProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Activate"></a>

### RadiationProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.CopyTo"></a>

### RadiationProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.Duplicate"></a>

### RadiationProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.GroupAllSimilarChildren"></a>

### RadiationProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.GroupSimilarObjects"></a>

### RadiationProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.PropertyByName"></a>

### RadiationProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.PropertyByAPIName"></a>

### RadiationProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.CreateParameter"></a>

### RadiationProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.GetParameter"></a>

### RadiationProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RadiationProbe.RemoveParameter"></a>

### RadiationProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
