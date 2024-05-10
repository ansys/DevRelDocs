# CurrentDensityProbe

<a id="CurrentDensityProbe"></a>

### *class* CurrentDensityProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CurrentDensityProbe.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#CurrentDensityProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#CurrentDensityProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#CurrentDensityProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#CurrentDensityProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#CurrentDensityProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#CurrentDensityProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#CurrentDensityProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#CurrentDensityProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CurrentDensityProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CurrentDensityProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#CurrentDensityProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CurrentDensityProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CurrentDensityProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CurrentDensityProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CurrentDensityProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CurrentDensityProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CurrentDensityProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#CurrentDensityProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CurrentDensityProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CurrentDensityProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`CurrentDensityTotal`](#CurrentDensityProbe.CurrentDensityTotal)                                                         | Gets the CurrentDensityTotal.                                                                                                                                              |
| [`XAxisCurrentDensity`](#CurrentDensityProbe.XAxisCurrentDensity)                                                         | Gets the XAxisCurrentDensity.                                                                                                                                              |
| [`YAxisCurrentDensity`](#CurrentDensityProbe.YAxisCurrentDensity)                                                         | Gets the YAxisCurrentDensity.                                                                                                                                              |
| [`ZAxisCurrentDensity`](#CurrentDensityProbe.ZAxisCurrentDensity)                                                         | Gets the ZAxisCurrentDensity.                                                                                                                                              |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#CurrentDensityProbe.Summation)                                                                             | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#CurrentDensityProbe.LocationMethod)                                                                   | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#CurrentDensityProbe.GeometryLocation)                                                               | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#CurrentDensityProbe.CoordinateSystemSelection)                                             | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#CurrentDensityProbe.BoundaryConditionSelection)                                           | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#CurrentDensityProbe.ContactRegionSelection)                                                   | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#CurrentDensityProbe.RemotePointSelection)                                                       | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#CurrentDensityProbe.BeamSelection)                                                                     | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#CurrentDensityProbe.MeshConnectionSelection)                                                 | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#CurrentDensityProbe.SurfaceSelection)                                                               | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#CurrentDensityProbe.SpringSelection)                                                                 | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#CurrentDensityProbe.IsSolved)                                                                               | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#CurrentDensityProbe.Orientation)                                                                         | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#CurrentDensityProbe.IterationNumber)                                                                 | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#CurrentDensityProbe.LoadStep)                                                                               | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#CurrentDensityProbe.LoadStepNumber)                                                                   | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#CurrentDensityProbe.Substep)                                                                                 | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#CurrentDensityProbe.DisplayTime)                                                                         | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#CurrentDensityProbe.MaximumTotal)                                                                       | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#CurrentDensityProbe.MaximumXAxis)                                                                       | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#CurrentDensityProbe.MaximumYAxis)                                                                       | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#CurrentDensityProbe.MaximumZAxis)                                                                       | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#CurrentDensityProbe.MinimumTotal)                                                                       | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#CurrentDensityProbe.MinimumXAxis)                                                                       | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#CurrentDensityProbe.MinimumYAxis)                                                                       | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#CurrentDensityProbe.MinimumZAxis)                                                                       | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#CurrentDensityProbe.Time)                                                                                       | Gets the Time.                                                                                                                                                             |
| [`Total`](#CurrentDensityProbe.Total)                                                                                     | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#CurrentDensityProbe.XAxis)                                                                                     | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#CurrentDensityProbe.YAxis)                                                                                     | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#CurrentDensityProbe.ZAxis)                                                                                     | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#CurrentDensityProbe.ResultSelection)                                                                 | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#CurrentDensityProbe.SpatialResolution)                                                             | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#CurrentDensityProbe.Type)                                                                                       | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#CurrentDensityProbe.DpfEvaluation)                                                                     | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#CurrentDensityProbe.Suppressed)                                                                           | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#CurrentDensityProbe.Children)                                                                               | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#CurrentDensityProbe.Comments)                                                                               | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#CurrentDensityProbe.Figures)                                                                                 | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#CurrentDensityProbe.Images)                                                                                   | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#CurrentDensityProbe.Properties)                                                                           | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#CurrentDensityProbe.VisibleProperties)                                                             | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import CurrentDensityProbe
```

<a id="property-detail"></a>

## Property detail

<a id="CurrentDensityProbe.InternalObject"></a>

### *property* CurrentDensityProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.CurrentDensityTotal"></a>

### *property* CurrentDensityProbe.CurrentDensityTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CurrentDensityTotal.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.XAxisCurrentDensity"></a>

### *property* CurrentDensityProbe.XAxisCurrentDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxisCurrentDensity.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.YAxisCurrentDensity"></a>

### *property* CurrentDensityProbe.YAxisCurrentDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxisCurrentDensity.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.ZAxisCurrentDensity"></a>

### *property* CurrentDensityProbe.ZAxisCurrentDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxisCurrentDensity.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.DataModelObjectCategory"></a>

### *property* CurrentDensityProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Summation"></a>

### *property* CurrentDensityProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](./../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.LocationMethod"></a>

### *property* CurrentDensityProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](./../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.GeometryLocation"></a>

### *property* CurrentDensityProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.CoordinateSystemSelection"></a>

### *property* CurrentDensityProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.BoundaryConditionSelection"></a>

### *property* CurrentDensityProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.ContactRegionSelection"></a>

### *property* CurrentDensityProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](./../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.RemotePointSelection"></a>

### *property* CurrentDensityProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](./../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.BeamSelection"></a>

### *property* CurrentDensityProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](./../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MeshConnectionSelection"></a>

### *property* CurrentDensityProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](./../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.SurfaceSelection"></a>

### *property* CurrentDensityProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](./../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.SpringSelection"></a>

### *property* CurrentDensityProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.IsSolved"></a>

### *property* CurrentDensityProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Orientation"></a>

### *property* CurrentDensityProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.IterationNumber"></a>

### *property* CurrentDensityProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.LoadStep"></a>

### *property* CurrentDensityProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.LoadStepNumber"></a>

### *property* CurrentDensityProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Substep"></a>

### *property* CurrentDensityProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.DisplayTime"></a>

### *property* CurrentDensityProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MaximumTotal"></a>

### *property* CurrentDensityProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MaximumXAxis"></a>

### *property* CurrentDensityProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MaximumYAxis"></a>

### *property* CurrentDensityProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MaximumZAxis"></a>

### *property* CurrentDensityProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MinimumTotal"></a>

### *property* CurrentDensityProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MinimumXAxis"></a>

### *property* CurrentDensityProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MinimumYAxis"></a>

### *property* CurrentDensityProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MinimumZAxis"></a>

### *property* CurrentDensityProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Time"></a>

### *property* CurrentDensityProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Total"></a>

### *property* CurrentDensityProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.XAxis"></a>

### *property* CurrentDensityProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.YAxis"></a>

### *property* CurrentDensityProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.ZAxis"></a>

### *property* CurrentDensityProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.ResultSelection"></a>

### *property* CurrentDensityProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](./../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.SpatialResolution"></a>

### *property* CurrentDensityProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](./../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Type"></a>

### *property* CurrentDensityProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](./../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.DpfEvaluation"></a>

### *property* CurrentDensityProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Suppressed"></a>

### *property* CurrentDensityProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Children"></a>

### *property* CurrentDensityProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Comments"></a>

### *property* CurrentDensityProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Figures"></a>

### *property* CurrentDensityProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Images"></a>

### *property* CurrentDensityProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CurrentDensityProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Properties"></a>

### *property* CurrentDensityProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.VisibleProperties"></a>

### *property* CurrentDensityProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CurrentDensityProbe.ExportAnimation"></a>

### CurrentDensityProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.ClearGeneratedData"></a>

### CurrentDensityProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.DuplicateWithoutResults"></a>

### CurrentDensityProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.EvaluateAllResults"></a>

### CurrentDensityProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.SnapToMeshNodes"></a>

### CurrentDensityProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.RenameBasedOnDefinition"></a>

### CurrentDensityProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Delete"></a>

### CurrentDensityProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.GetChildren"></a>

### CurrentDensityProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CurrentDensityProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.AddComment"></a>

### CurrentDensityProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.AddFigure"></a>

### CurrentDensityProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.AddImage"></a>

### CurrentDensityProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Activate"></a>

### CurrentDensityProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.CopyTo"></a>

### CurrentDensityProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Duplicate"></a>

### CurrentDensityProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.GroupAllSimilarChildren"></a>

### CurrentDensityProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.GroupSimilarObjects"></a>

### CurrentDensityProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.PropertyByName"></a>

### CurrentDensityProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.PropertyByAPIName"></a>

### CurrentDensityProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.CreateParameter"></a>

### CurrentDensityProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.GetParameter"></a>

### CurrentDensityProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.RemoveParameter"></a>

### CurrentDensityProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
