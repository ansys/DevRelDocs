# `EmagReactionProbe`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.EmagReactionProbe"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.EmagReactionProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EmagReactionProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#EmagReactionProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#EmagReactionProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#EmagReactionProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#EmagReactionProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#EmagReactionProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#EmagReactionProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#EmagReactionProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EmagReactionProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EmagReactionProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EmagReactionProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EmagReactionProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EmagReactionProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EmagReactionProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EmagReactionProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EmagReactionProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EmagReactionProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EmagReactionProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#EmagReactionProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#EmagReactionProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EmagReactionProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                      | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`MaximumCurrent`](#EmagReactionProbe.MaximumCurrent)                         | Gets the MaximumCurrent.                                                                                                                                                   |
| [`MinimumCurrent`](#EmagReactionProbe.MinimumCurrent)                         | Gets the MinimumCurrent.                                                                                                                                                   |
| [`Current`](#EmagReactionProbe.Current)                                       | Gets the Current.                                                                                                                                                          |
| [`DataModelObjectCategory`](#EmagReactionProbe.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#EmagReactionProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#EmagReactionProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#EmagReactionProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#EmagReactionProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#EmagReactionProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#EmagReactionProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#EmagReactionProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#EmagReactionProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#EmagReactionProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#EmagReactionProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#EmagReactionProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#EmagReactionProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#EmagReactionProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#EmagReactionProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#EmagReactionProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#EmagReactionProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#EmagReactionProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#EmagReactionProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#EmagReactionProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#EmagReactionProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#EmagReactionProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#EmagReactionProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#EmagReactionProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#EmagReactionProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#EmagReactionProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#EmagReactionProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#EmagReactionProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#EmagReactionProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#EmagReactionProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#EmagReactionProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#EmagReactionProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#EmagReactionProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#EmagReactionProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#EmagReactionProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#EmagReactionProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#EmagReactionProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#EmagReactionProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#EmagReactionProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#EmagReactionProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#EmagReactionProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                      | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#EmagReactionProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#EmagReactionProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="property-detail"></a>

## Property detail

<a id="EmagReactionProbe.InternalObject"></a>

### *property* EmagReactionProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.MaximumCurrent"></a>

### *property* EmagReactionProbe.MaximumCurrent *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumCurrent.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.MinimumCurrent"></a>

### *property* EmagReactionProbe.MinimumCurrent *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumCurrent.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Current"></a>

### *property* EmagReactionProbe.Current *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Current.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.DataModelObjectCategory"></a>

### *property* EmagReactionProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Summation"></a>

### *property* EmagReactionProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.LocationMethod"></a>

### *property* EmagReactionProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.GeometryLocation"></a>

### *property* EmagReactionProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.CoordinateSystemSelection"></a>

### *property* EmagReactionProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.BoundaryConditionSelection"></a>

### *property* EmagReactionProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.ContactRegionSelection"></a>

### *property* EmagReactionProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.RemotePointSelection"></a>

### *property* EmagReactionProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.BeamSelection"></a>

### *property* EmagReactionProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.MeshConnectionSelection"></a>

### *property* EmagReactionProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.SurfaceSelection"></a>

### *property* EmagReactionProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.SpringSelection"></a>

### *property* EmagReactionProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.IsSolved"></a>

### *property* EmagReactionProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Orientation"></a>

### *property* EmagReactionProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.IterationNumber"></a>

### *property* EmagReactionProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.LoadStep"></a>

### *property* EmagReactionProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.LoadStepNumber"></a>

### *property* EmagReactionProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Substep"></a>

### *property* EmagReactionProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.DisplayTime"></a>

### *property* EmagReactionProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.MaximumTotal"></a>

### *property* EmagReactionProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.MaximumXAxis"></a>

### *property* EmagReactionProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.MaximumYAxis"></a>

### *property* EmagReactionProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.MaximumZAxis"></a>

### *property* EmagReactionProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.MinimumTotal"></a>

### *property* EmagReactionProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.MinimumXAxis"></a>

### *property* EmagReactionProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.MinimumYAxis"></a>

### *property* EmagReactionProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.MinimumZAxis"></a>

### *property* EmagReactionProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Time"></a>

### *property* EmagReactionProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Total"></a>

### *property* EmagReactionProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.XAxis"></a>

### *property* EmagReactionProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.YAxis"></a>

### *property* EmagReactionProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.ZAxis"></a>

### *property* EmagReactionProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.ResultSelection"></a>

### *property* EmagReactionProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.SpatialResolution"></a>

### *property* EmagReactionProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Type"></a>

### *property* EmagReactionProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.DpfEvaluation"></a>

### *property* EmagReactionProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Suppressed"></a>

### *property* EmagReactionProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Children"></a>

### *property* EmagReactionProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Comments"></a>

### *property* EmagReactionProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Figures"></a>

### *property* EmagReactionProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Images"></a>

### *property* EmagReactionProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* EmagReactionProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Properties"></a>

### *property* EmagReactionProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.VisibleProperties"></a>

### *property* EmagReactionProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EmagReactionProbe.ExportAnimation"></a>

### EmagReactionProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.ClearGeneratedData"></a>

### EmagReactionProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.DuplicateWithoutResults"></a>

### EmagReactionProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.EvaluateAllResults"></a>

### EmagReactionProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.SnapToMeshNodes"></a>

### EmagReactionProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.RenameBasedOnDefinition"></a>

### EmagReactionProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Delete"></a>

### EmagReactionProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.GetChildren"></a>

### EmagReactionProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### EmagReactionProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.AddComment"></a>

### EmagReactionProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.AddFigure"></a>

### EmagReactionProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.AddImage"></a>

### EmagReactionProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Activate"></a>

### EmagReactionProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.CopyTo"></a>

### EmagReactionProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.Duplicate"></a>

### EmagReactionProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.GroupAllSimilarChildren"></a>

### EmagReactionProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.GroupSimilarObjects"></a>

### EmagReactionProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.PropertyByName"></a>

### EmagReactionProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.PropertyByAPIName"></a>

### EmagReactionProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.CreateParameter"></a>

### EmagReactionProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.GetParameter"></a>

### EmagReactionProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EmagReactionProbe.RemoveParameter"></a>

### EmagReactionProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

