# TemperatureProbe

### *class* TemperatureProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TemperatureProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#TemperatureProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#TemperatureProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#TemperatureProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#TemperatureProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#TemperatureProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#TemperatureProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#TemperatureProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TemperatureProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TemperatureProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TemperatureProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TemperatureProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TemperatureProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TemperatureProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TemperatureProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TemperatureProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TemperatureProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TemperatureProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#TemperatureProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#TemperatureProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TemperatureProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`XCoordinate`](#TemperatureProbe.XCoordinate)                                                                            | Gets the XCoordinate.                                                                                                                                                      |
| [`YCoordinate`](#TemperatureProbe.YCoordinate)                                                                            | Gets the YCoordinate.                                                                                                                                                      |
| [`ZCoordinate`](#TemperatureProbe.ZCoordinate)                                                                            | Gets the ZCoordinate.                                                                                                                                                      |
| [`MaximumTemperature`](#TemperatureProbe.MaximumTemperature)                                                              | Gets the MaximumTemperature.                                                                                                                                               |
| [`MinimumTemperature`](#TemperatureProbe.MinimumTemperature)                                                              | Gets the MinimumTemperature.                                                                                                                                               |
| [`Temperature`](../../BoundaryConditions/Temperature.md#Temperature)                                                      | Gets the Temperature.                                                                                                                                                      |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#TemperatureProbe.Summation)                                                                                | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#TemperatureProbe.LocationMethod)                                                                      | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#TemperatureProbe.GeometryLocation)                                                                  | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#TemperatureProbe.CoordinateSystemSelection)                                                | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#TemperatureProbe.BoundaryConditionSelection)                                              | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#TemperatureProbe.ContactRegionSelection)                                                      | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#TemperatureProbe.RemotePointSelection)                                                          | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#TemperatureProbe.BeamSelection)                                                                        | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#TemperatureProbe.MeshConnectionSelection)                                                    | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#TemperatureProbe.SurfaceSelection)                                                                  | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#TemperatureProbe.SpringSelection)                                                                    | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#TemperatureProbe.IsSolved)                                                                                  | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#TemperatureProbe.Orientation)                                                                            | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#TemperatureProbe.IterationNumber)                                                                    | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#TemperatureProbe.LoadStep)                                                                                  | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#TemperatureProbe.LoadStepNumber)                                                                      | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#TemperatureProbe.Substep)                                                                                    | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#TemperatureProbe.DisplayTime)                                                                            | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#TemperatureProbe.MaximumTotal)                                                                          | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#TemperatureProbe.MaximumXAxis)                                                                          | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#TemperatureProbe.MaximumYAxis)                                                                          | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#TemperatureProbe.MaximumZAxis)                                                                          | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#TemperatureProbe.MinimumTotal)                                                                          | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#TemperatureProbe.MinimumXAxis)                                                                          | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#TemperatureProbe.MinimumYAxis)                                                                          | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#TemperatureProbe.MinimumZAxis)                                                                          | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#TemperatureProbe.Time)                                                                                          | Gets the Time.                                                                                                                                                             |
| [`Total`](#TemperatureProbe.Total)                                                                                        | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#TemperatureProbe.XAxis)                                                                                        | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#TemperatureProbe.YAxis)                                                                                        | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#TemperatureProbe.ZAxis)                                                                                        | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#TemperatureProbe.ResultSelection)                                                                    | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#TemperatureProbe.SpatialResolution)                                                                | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#TemperatureProbe.Type)                                                                                          | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#TemperatureProbe.DpfEvaluation)                                                                        | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#TemperatureProbe.Suppressed)                                                                              | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#TemperatureProbe.Children)                                                                                  | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#TemperatureProbe.Comments)                                                                                  | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#TemperatureProbe.Figures)                                                                                    | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#TemperatureProbe.Images)                                                                                      | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#TemperatureProbe.Properties)                                                                              | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#TemperatureProbe.VisibleProperties)                                                                | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import TemperatureProbe
```

## Property detail

### *property* TemperatureProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.MaximumTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTemperature.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.MinimumTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTemperature.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.Temperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Temperature.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* TemperatureProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### TemperatureProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### TemperatureProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
