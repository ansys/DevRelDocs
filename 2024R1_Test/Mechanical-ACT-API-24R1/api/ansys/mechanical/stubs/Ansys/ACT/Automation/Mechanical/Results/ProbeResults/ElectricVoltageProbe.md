# ElectricVoltageProbe

<a id="ElectricVoltageProbe"></a>

### *class* ElectricVoltageProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElectricVoltageProbe.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ElectricVoltageProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ElectricVoltageProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#ElectricVoltageProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ElectricVoltageProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#ElectricVoltageProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#ElectricVoltageProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ElectricVoltageProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElectricVoltageProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElectricVoltageProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElectricVoltageProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElectricVoltageProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElectricVoltageProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElectricVoltageProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElectricVoltageProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElectricVoltageProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElectricVoltageProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElectricVoltageProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ElectricVoltageProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ElectricVoltageProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElectricVoltageProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`VoltageProbe`](#ElectricVoltageProbe.VoltageProbe)                                                                      | Gets the VoltageProbe.                                                                                                                                                     |
| [`MaximumVoltageProbe`](#ElectricVoltageProbe.MaximumVoltageProbe)                                                        | Gets the MaximumVoltageProbe.                                                                                                                                              |
| [`MinimumVoltageProbe`](#ElectricVoltageProbe.MinimumVoltageProbe)                                                        | Gets the MinimumVoltageProbe.                                                                                                                                              |
| [`DataModelObjectCategory`](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#ElectricVoltageProbe.Summation)                                                                            | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#ElectricVoltageProbe.LocationMethod)                                                                  | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#ElectricVoltageProbe.GeometryLocation)                                                              | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#ElectricVoltageProbe.CoordinateSystemSelection)                                            | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#ElectricVoltageProbe.BoundaryConditionSelection)                                          | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#ElectricVoltageProbe.ContactRegionSelection)                                                  | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#ElectricVoltageProbe.RemotePointSelection)                                                      | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#ElectricVoltageProbe.BeamSelection)                                                                    | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#ElectricVoltageProbe.MeshConnectionSelection)                                                | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#ElectricVoltageProbe.SurfaceSelection)                                                              | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#ElectricVoltageProbe.SpringSelection)                                                                | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#ElectricVoltageProbe.IsSolved)                                                                              | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#ElectricVoltageProbe.Orientation)                                                                        | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#ElectricVoltageProbe.IterationNumber)                                                                | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ElectricVoltageProbe.LoadStep)                                                                              | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ElectricVoltageProbe.LoadStepNumber)                                                                  | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#ElectricVoltageProbe.Substep)                                                                                | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#ElectricVoltageProbe.DisplayTime)                                                                        | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#ElectricVoltageProbe.MaximumTotal)                                                                      | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ElectricVoltageProbe.MaximumXAxis)                                                                      | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ElectricVoltageProbe.MaximumYAxis)                                                                      | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ElectricVoltageProbe.MaximumZAxis)                                                                      | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#ElectricVoltageProbe.MinimumTotal)                                                                      | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ElectricVoltageProbe.MinimumXAxis)                                                                      | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ElectricVoltageProbe.MinimumYAxis)                                                                      | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ElectricVoltageProbe.MinimumZAxis)                                                                      | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#ElectricVoltageProbe.Time)                                                                                      | Gets the Time.                                                                                                                                                             |
| [`Total`](#ElectricVoltageProbe.Total)                                                                                    | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#ElectricVoltageProbe.XAxis)                                                                                    | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ElectricVoltageProbe.YAxis)                                                                                    | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ElectricVoltageProbe.ZAxis)                                                                                    | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#ElectricVoltageProbe.ResultSelection)                                                                | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#ElectricVoltageProbe.SpatialResolution)                                                            | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#ElectricVoltageProbe.Type)                                                                                      | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#ElectricVoltageProbe.DpfEvaluation)                                                                    | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#ElectricVoltageProbe.Suppressed)                                                                          | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#ElectricVoltageProbe.Children)                                                                              | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#ElectricVoltageProbe.Comments)                                                                              | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#ElectricVoltageProbe.Figures)                                                                                | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#ElectricVoltageProbe.Images)                                                                                  | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#ElectricVoltageProbe.Properties)                                                                          | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#ElectricVoltageProbe.VisibleProperties)                                                            | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import ElectricVoltageProbe
```

<a id="property-detail"></a>

## Property detail

<a id="ElectricVoltageProbe.InternalObject"></a>

### *property* ElectricVoltageProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.VoltageProbe"></a>

### *property* ElectricVoltageProbe.VoltageProbe *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the VoltageProbe.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MaximumVoltageProbe"></a>

### *property* ElectricVoltageProbe.MaximumVoltageProbe *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumVoltageProbe.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MinimumVoltageProbe"></a>

### *property* ElectricVoltageProbe.MinimumVoltageProbe *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumVoltageProbe.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.DataModelObjectCategory"></a>

### *property* ElectricVoltageProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Summation"></a>

### *property* ElectricVoltageProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](./../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.LocationMethod"></a>

### *property* ElectricVoltageProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](./../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GeometryLocation"></a>

### *property* ElectricVoltageProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.CoordinateSystemSelection"></a>

### *property* ElectricVoltageProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.BoundaryConditionSelection"></a>

### *property* ElectricVoltageProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.ContactRegionSelection"></a>

### *property* ElectricVoltageProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](./../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.RemotePointSelection"></a>

### *property* ElectricVoltageProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](./../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.BeamSelection"></a>

### *property* ElectricVoltageProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](./../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MeshConnectionSelection"></a>

### *property* ElectricVoltageProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](./../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.SurfaceSelection"></a>

### *property* ElectricVoltageProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](./../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.SpringSelection"></a>

### *property* ElectricVoltageProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](./../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.IsSolved"></a>

### *property* ElectricVoltageProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Orientation"></a>

### *property* ElectricVoltageProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.IterationNumber"></a>

### *property* ElectricVoltageProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.LoadStep"></a>

### *property* ElectricVoltageProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.LoadStepNumber"></a>

### *property* ElectricVoltageProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Substep"></a>

### *property* ElectricVoltageProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.DisplayTime"></a>

### *property* ElectricVoltageProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MaximumTotal"></a>

### *property* ElectricVoltageProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MaximumXAxis"></a>

### *property* ElectricVoltageProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MaximumYAxis"></a>

### *property* ElectricVoltageProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MaximumZAxis"></a>

### *property* ElectricVoltageProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MinimumTotal"></a>

### *property* ElectricVoltageProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MinimumXAxis"></a>

### *property* ElectricVoltageProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MinimumYAxis"></a>

### *property* ElectricVoltageProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.MinimumZAxis"></a>

### *property* ElectricVoltageProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Time"></a>

### *property* ElectricVoltageProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Total"></a>

### *property* ElectricVoltageProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.XAxis"></a>

### *property* ElectricVoltageProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.YAxis"></a>

### *property* ElectricVoltageProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.ZAxis"></a>

### *property* ElectricVoltageProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.ResultSelection"></a>

### *property* ElectricVoltageProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](./../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.SpatialResolution"></a>

### *property* ElectricVoltageProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](./../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Type"></a>

### *property* ElectricVoltageProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](./../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.DpfEvaluation"></a>

### *property* ElectricVoltageProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](./../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Suppressed"></a>

### *property* ElectricVoltageProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Children"></a>

### *property* ElectricVoltageProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Comments"></a>

### *property* ElectricVoltageProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Figures"></a>

### *property* ElectricVoltageProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Images"></a>

### *property* ElectricVoltageProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElectricVoltageProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Properties"></a>

### *property* ElectricVoltageProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.VisibleProperties"></a>

### *property* ElectricVoltageProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElectricVoltageProbe.ExportAnimation"></a>

### ElectricVoltageProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](./../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](./../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.ClearGeneratedData"></a>

### ElectricVoltageProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.DuplicateWithoutResults"></a>

### ElectricVoltageProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.EvaluateAllResults"></a>

### ElectricVoltageProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.SnapToMeshNodes"></a>

### ElectricVoltageProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.RenameBasedOnDefinition"></a>

### ElectricVoltageProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Delete"></a>

### ElectricVoltageProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetChildren"></a>

### ElectricVoltageProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElectricVoltageProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.AddComment"></a>

### ElectricVoltageProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.AddFigure"></a>

### ElectricVoltageProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.AddImage"></a>

### ElectricVoltageProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Activate"></a>

### ElectricVoltageProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.CopyTo"></a>

### ElectricVoltageProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.Duplicate"></a>

### ElectricVoltageProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GroupAllSimilarChildren"></a>

### ElectricVoltageProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GroupSimilarObjects"></a>

### ElectricVoltageProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.PropertyByName"></a>

### ElectricVoltageProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.PropertyByAPIName"></a>

### ElectricVoltageProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.CreateParameter"></a>

### ElectricVoltageProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.GetParameter"></a>

### ElectricVoltageProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricVoltageProbe.RemoveParameter"></a>

### ElectricVoltageProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
