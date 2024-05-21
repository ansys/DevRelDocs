# ContactDistanceProbe

<a id="ContactDistanceProbe"></a>

### *class* ContactDistanceProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactDistanceProbe.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ContactDistanceProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ContactDistanceProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#ContactDistanceProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ContactDistanceProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#ContactDistanceProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#ContactDistanceProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactDistanceProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactDistanceProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactDistanceProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactDistanceProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactDistanceProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactDistanceProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactDistanceProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactDistanceProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactDistanceProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactDistanceProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactDistanceProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactDistanceProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactDistanceProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactDistanceProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Results`](#ContactDistanceProbe.Results)                                                                                | Gets the Results.                                                                                                                                                          |
| [`MaximumValueOverTime`](#ContactDistanceProbe.MaximumValueOverTime)                                                      | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MinimumValueOverTime`](#ContactDistanceProbe.MinimumValueOverTime)                                                      | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#ContactDistanceProbe.Summation)                                                                            | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#ContactDistanceProbe.LocationMethod)                                                                  | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#ContactDistanceProbe.GeometryLocation)                                                              | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#ContactDistanceProbe.CoordinateSystemSelection)                                            | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#ContactDistanceProbe.BoundaryConditionSelection)                                          | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#ContactDistanceProbe.ContactRegionSelection)                                                  | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#ContactDistanceProbe.RemotePointSelection)                                                      | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#ContactDistanceProbe.BeamSelection)                                                                    | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#ContactDistanceProbe.MeshConnectionSelection)                                                | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#ContactDistanceProbe.SurfaceSelection)                                                              | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#ContactDistanceProbe.SpringSelection)                                                                | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#ContactDistanceProbe.IsSolved)                                                                              | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#ContactDistanceProbe.Orientation)                                                                        | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#ContactDistanceProbe.IterationNumber)                                                                | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ContactDistanceProbe.LoadStep)                                                                              | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ContactDistanceProbe.LoadStepNumber)                                                                  | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#ContactDistanceProbe.Substep)                                                                                | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#ContactDistanceProbe.DisplayTime)                                                                        | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#ContactDistanceProbe.MaximumTotal)                                                                      | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ContactDistanceProbe.MaximumXAxis)                                                                      | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ContactDistanceProbe.MaximumYAxis)                                                                      | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ContactDistanceProbe.MaximumZAxis)                                                                      | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#ContactDistanceProbe.MinimumTotal)                                                                      | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ContactDistanceProbe.MinimumXAxis)                                                                      | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ContactDistanceProbe.MinimumYAxis)                                                                      | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ContactDistanceProbe.MinimumZAxis)                                                                      | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#ContactDistanceProbe.Time)                                                                                      | Gets the Time.                                                                                                                                                             |
| [`Total`](#ContactDistanceProbe.Total)                                                                                    | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#ContactDistanceProbe.XAxis)                                                                                    | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ContactDistanceProbe.YAxis)                                                                                    | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ContactDistanceProbe.ZAxis)                                                                                    | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#ContactDistanceProbe.ResultSelection)                                                                | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#ContactDistanceProbe.SpatialResolution)                                                            | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#ContactDistanceProbe.Type)                                                                                      | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#ContactDistanceProbe.DpfEvaluation)                                                                    | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#ContactDistanceProbe.Suppressed)                                                                          | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#ContactDistanceProbe.Children)                                                                              | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#ContactDistanceProbe.Comments)                                                                              | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#ContactDistanceProbe.Figures)                                                                                | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#ContactDistanceProbe.Images)                                                                                  | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#ContactDistanceProbe.Properties)                                                                          | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#ContactDistanceProbe.VisibleProperties)                                                            | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import ContactDistanceProbe
```

<a id="property-detail"></a>

## Property detail

<a id="ContactDistanceProbe.InternalObject"></a>

### *property* ContactDistanceProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Results"></a>

### *property* ContactDistanceProbe.Results *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Results.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MaximumValueOverTime"></a>

### *property* ContactDistanceProbe.MaximumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MinimumValueOverTime"></a>

### *property* ContactDistanceProbe.MinimumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.DataModelObjectCategory"></a>

### *property* ContactDistanceProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Summation"></a>

### *property* ContactDistanceProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.LocationMethod"></a>

### *property* ContactDistanceProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GeometryLocation"></a>

### *property* ContactDistanceProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.CoordinateSystemSelection"></a>

### *property* ContactDistanceProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.BoundaryConditionSelection"></a>

### *property* ContactDistanceProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.ContactRegionSelection"></a>

### *property* ContactDistanceProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.RemotePointSelection"></a>

### *property* ContactDistanceProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.BeamSelection"></a>

### *property* ContactDistanceProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MeshConnectionSelection"></a>

### *property* ContactDistanceProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.SurfaceSelection"></a>

### *property* ContactDistanceProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.SpringSelection"></a>

### *property* ContactDistanceProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.IsSolved"></a>

### *property* ContactDistanceProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Orientation"></a>

### *property* ContactDistanceProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.IterationNumber"></a>

### *property* ContactDistanceProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.LoadStep"></a>

### *property* ContactDistanceProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.LoadStepNumber"></a>

### *property* ContactDistanceProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Substep"></a>

### *property* ContactDistanceProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.DisplayTime"></a>

### *property* ContactDistanceProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MaximumTotal"></a>

### *property* ContactDistanceProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MaximumXAxis"></a>

### *property* ContactDistanceProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MaximumYAxis"></a>

### *property* ContactDistanceProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MaximumZAxis"></a>

### *property* ContactDistanceProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MinimumTotal"></a>

### *property* ContactDistanceProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MinimumXAxis"></a>

### *property* ContactDistanceProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MinimumYAxis"></a>

### *property* ContactDistanceProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MinimumZAxis"></a>

### *property* ContactDistanceProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Time"></a>

### *property* ContactDistanceProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Total"></a>

### *property* ContactDistanceProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.XAxis"></a>

### *property* ContactDistanceProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.YAxis"></a>

### *property* ContactDistanceProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.ZAxis"></a>

### *property* ContactDistanceProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.ResultSelection"></a>

### *property* ContactDistanceProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.SpatialResolution"></a>

### *property* ContactDistanceProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Type"></a>

### *property* ContactDistanceProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.DpfEvaluation"></a>

### *property* ContactDistanceProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Suppressed"></a>

### *property* ContactDistanceProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Children"></a>

### *property* ContactDistanceProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Comments"></a>

### *property* ContactDistanceProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Figures"></a>

### *property* ContactDistanceProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Images"></a>

### *property* ContactDistanceProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactDistanceProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Properties"></a>

### *property* ContactDistanceProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.VisibleProperties"></a>

### *property* ContactDistanceProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactDistanceProbe.ExportAnimation"></a>

### ContactDistanceProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.ClearGeneratedData"></a>

### ContactDistanceProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.DuplicateWithoutResults"></a>

### ContactDistanceProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.EvaluateAllResults"></a>

### ContactDistanceProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.SnapToMeshNodes"></a>

### ContactDistanceProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.RenameBasedOnDefinition"></a>

### ContactDistanceProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Delete"></a>

### ContactDistanceProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetChildren"></a>

### ContactDistanceProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactDistanceProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.AddComment"></a>

### ContactDistanceProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.AddFigure"></a>

### ContactDistanceProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.AddImage"></a>

### ContactDistanceProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Activate"></a>

### ContactDistanceProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.CopyTo"></a>

### ContactDistanceProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Duplicate"></a>

### ContactDistanceProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GroupAllSimilarChildren"></a>

### ContactDistanceProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GroupSimilarObjects"></a>

### ContactDistanceProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.PropertyByName"></a>

### ContactDistanceProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.PropertyByAPIName"></a>

### ContactDistanceProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.CreateParameter"></a>

### ContactDistanceProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetParameter"></a>

### ContactDistanceProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.RemoveParameter"></a>

### ContactDistanceProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
