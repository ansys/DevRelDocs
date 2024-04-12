<a id="electricfieldprobe"></a>

# ElectricFieldProbe

<a id="ElectricFieldProbe"></a>

### *class* ElectricFieldProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElectricFieldProbe.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`ExportAnimation`](#ElectricFieldProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ElectricFieldProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#ElectricFieldProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ElectricFieldProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#ElectricFieldProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#ElectricFieldProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ElectricFieldProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElectricFieldProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElectricFieldProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElectricFieldProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElectricFieldProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElectricFieldProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElectricFieldProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElectricFieldProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElectricFieldProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElectricFieldProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElectricFieldProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ElectricFieldProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ElectricFieldProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElectricFieldProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Total`](#ElectricFieldProbe.Total)                                                                                      | Gets the Total.                                                                                                                                                            |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`YAxisFieldIntensity`](#ElectricFieldProbe.YAxisFieldIntensity)                                                          | Gets the YAxisFieldIntensity.                                                                                                                                              |
| [`ZAxisFieldIntensity`](#ElectricFieldProbe.ZAxisFieldIntensity)                                                          | Gets the ZAxisFieldIntensity.                                                                                                                                              |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#ElectricFieldProbe.Summation)                                                                              | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#ElectricFieldProbe.LocationMethod)                                                                    | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#ElectricFieldProbe.GeometryLocation)                                                                | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#ElectricFieldProbe.CoordinateSystemSelection)                                              | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#ElectricFieldProbe.BoundaryConditionSelection)                                            | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#ElectricFieldProbe.ContactRegionSelection)                                                    | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#ElectricFieldProbe.RemotePointSelection)                                                        | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#ElectricFieldProbe.BeamSelection)                                                                      | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#ElectricFieldProbe.MeshConnectionSelection)                                                  | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#ElectricFieldProbe.SurfaceSelection)                                                                | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#ElectricFieldProbe.SpringSelection)                                                                  | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#ElectricFieldProbe.IsSolved)                                                                                | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#ElectricFieldProbe.Orientation)                                                                          | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#ElectricFieldProbe.IterationNumber)                                                                  | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ElectricFieldProbe.LoadStep)                                                                                | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ElectricFieldProbe.LoadStepNumber)                                                                    | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#ElectricFieldProbe.Substep)                                                                                  | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#ElectricFieldProbe.DisplayTime)                                                                          | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#ElectricFieldProbe.MaximumTotal)                                                                        | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ElectricFieldProbe.MaximumXAxis)                                                                        | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ElectricFieldProbe.MaximumYAxis)                                                                        | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ElectricFieldProbe.MaximumZAxis)                                                                        | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#ElectricFieldProbe.MinimumTotal)                                                                        | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ElectricFieldProbe.MinimumXAxis)                                                                        | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ElectricFieldProbe.MinimumYAxis)                                                                        | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ElectricFieldProbe.MinimumZAxis)                                                                        | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#ElectricFieldProbe.Time)                                                                                        | Gets the Time.                                                                                                                                                             |
| [`XAxis`](#ElectricFieldProbe.XAxis)                                                                                      | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ElectricFieldProbe.YAxis)                                                                                      | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ElectricFieldProbe.ZAxis)                                                                                      | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#ElectricFieldProbe.ResultSelection)                                                                  | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#ElectricFieldProbe.SpatialResolution)                                                              | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#ElectricFieldProbe.Type)                                                                                        | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#ElectricFieldProbe.DpfEvaluation)                                                                      | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#ElectricFieldProbe.Suppressed)                                                                            | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#ElectricFieldProbe.Children)                                                                                | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#ElectricFieldProbe.Comments)                                                                                | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#ElectricFieldProbe.Figures)                                                                                  | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#ElectricFieldProbe.Images)                                                                                    | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#ElectricFieldProbe.Properties)                                                                            | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#ElectricFieldProbe.VisibleProperties)                                                              | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import ElectricFieldProbe
```

<a id="property-detail"></a>

## Property detail

<a id="ElectricFieldProbe.Total"></a>

### *property* ElectricFieldProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.InternalObject"></a>

### *property* ElectricFieldProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.YAxisFieldIntensity"></a>

### *property* ElectricFieldProbe.YAxisFieldIntensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxisFieldIntensity.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.ZAxisFieldIntensity"></a>

### *property* ElectricFieldProbe.ZAxisFieldIntensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxisFieldIntensity.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.DataModelObjectCategory"></a>

### *property* ElectricFieldProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Summation"></a>

### *property* ElectricFieldProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.LocationMethod"></a>

### *property* ElectricFieldProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.GeometryLocation"></a>

### *property* ElectricFieldProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.CoordinateSystemSelection"></a>

### *property* ElectricFieldProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.BoundaryConditionSelection"></a>

### *property* ElectricFieldProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.ContactRegionSelection"></a>

### *property* ElectricFieldProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.RemotePointSelection"></a>

### *property* ElectricFieldProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.BeamSelection"></a>

### *property* ElectricFieldProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.MeshConnectionSelection"></a>

### *property* ElectricFieldProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.SurfaceSelection"></a>

### *property* ElectricFieldProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.SpringSelection"></a>

### *property* ElectricFieldProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.IsSolved"></a>

### *property* ElectricFieldProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Orientation"></a>

### *property* ElectricFieldProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.IterationNumber"></a>

### *property* ElectricFieldProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.LoadStep"></a>

### *property* ElectricFieldProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.LoadStepNumber"></a>

### *property* ElectricFieldProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Substep"></a>

### *property* ElectricFieldProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.DisplayTime"></a>

### *property* ElectricFieldProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.MaximumTotal"></a>

### *property* ElectricFieldProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.MaximumXAxis"></a>

### *property* ElectricFieldProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.MaximumYAxis"></a>

### *property* ElectricFieldProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.MaximumZAxis"></a>

### *property* ElectricFieldProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.MinimumTotal"></a>

### *property* ElectricFieldProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.MinimumXAxis"></a>

### *property* ElectricFieldProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.MinimumYAxis"></a>

### *property* ElectricFieldProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.MinimumZAxis"></a>

### *property* ElectricFieldProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Time"></a>

### *property* ElectricFieldProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.XAxis"></a>

### *property* ElectricFieldProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.YAxis"></a>

### *property* ElectricFieldProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.ZAxis"></a>

### *property* ElectricFieldProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.ResultSelection"></a>

### *property* ElectricFieldProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.SpatialResolution"></a>

### *property* ElectricFieldProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Type"></a>

### *property* ElectricFieldProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.DpfEvaluation"></a>

### *property* ElectricFieldProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Suppressed"></a>

### *property* ElectricFieldProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Children"></a>

### *property* ElectricFieldProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Comments"></a>

### *property* ElectricFieldProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Figures"></a>

### *property* ElectricFieldProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Images"></a>

### *property* ElectricFieldProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElectricFieldProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Properties"></a>

### *property* ElectricFieldProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.VisibleProperties"></a>

### *property* ElectricFieldProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElectricFieldProbe.ExportAnimation"></a>

### ElectricFieldProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.ClearGeneratedData"></a>

### ElectricFieldProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.DuplicateWithoutResults"></a>

### ElectricFieldProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.EvaluateAllResults"></a>

### ElectricFieldProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.SnapToMeshNodes"></a>

### ElectricFieldProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.RenameBasedOnDefinition"></a>

### ElectricFieldProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Delete"></a>

### ElectricFieldProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.GetChildren"></a>

### ElectricFieldProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElectricFieldProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.AddComment"></a>

### ElectricFieldProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.AddFigure"></a>

### ElectricFieldProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.AddImage"></a>

### ElectricFieldProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Activate"></a>

### ElectricFieldProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.CopyTo"></a>

### ElectricFieldProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.Duplicate"></a>

### ElectricFieldProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.GroupAllSimilarChildren"></a>

### ElectricFieldProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.GroupSimilarObjects"></a>

### ElectricFieldProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.PropertyByName"></a>

### ElectricFieldProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.PropertyByAPIName"></a>

### ElectricFieldProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.CreateParameter"></a>

### ElectricFieldProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.GetParameter"></a>

### ElectricFieldProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricFieldProbe.RemoveParameter"></a>

### ElectricFieldProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
