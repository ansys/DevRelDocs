# `BeamProbe`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.BeamProbe"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.BeamProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BoltPretensionProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#BeamProbe.Activate)                               | Activate the current object.                                                                   |
| [`AddComment`](#BeamProbe.AddComment)                           | Creates a new child Comment.                                                                   |
| [`AddFigure`](#BeamProbe.AddFigure)                             | Creates a new child Figure.                                                                    |
| [`AddImage`](#BeamProbe.AddImage)                               | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#BeamProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                             |
| [`CopyTo`](#BeamProbe.CopyTo)                                   | Copies all visible properties from this object to another.                                     |
| [`CreateParameter`](#BeamProbe.CreateParameter)                 | Creates a new parameter for a Property.                                                        |
| [`Delete`](#BeamProbe.Delete)                                   | Run the Delete action.                                                                         |
| [`Duplicate`](#BeamProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#BeamProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                        |
| [`EvaluateAllResults`](#BeamProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#BeamProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                                |
| [`GetChildren`](#BeamProbe.GetChildren)                         | Gets the list of children, filtered by type.                                                   |
| [`GetParameter`](#BeamProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                                        |
| [`GroupAllSimilarChildren`](#BeamProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#BeamProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                            |
| [`PropertyByAPIName`](#BeamProbe.PropertyByAPIName)             | Get a property by its API name.                                                                |
| [`PropertyByName`](#BeamProbe.PropertyByName)                   | Get a property by its unique name.                                                             |
| [`RemoveParameter`](#BeamProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#BeamProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#BeamProbe.RetrieveResult)                   | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#BeamProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AxialForce`](#BeamProbe.AxialForce)                                 | Gets the AxialForce.                                                                                                                                                       |
| [`BeamSelection`](#BeamProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#BeamProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`Children`](#BeamProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#BeamProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#BeamProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#BeamProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#BeamProbe.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                                                                                                                               |
| [`DisplayTime`](#BeamProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#BeamProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Figures`](#BeamProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`GeometryLocation`](#BeamProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`Images`](#BeamProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#BeamProbe.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#BeamProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#BeamProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#BeamProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#BeamProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#BeamProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumAxialForce`](#BeamProbe.MaximumAxialForce)                   | Gets the MaximumAxialForce.                                                                                                                                                |
| [`MaximumMomentAtI`](#BeamProbe.MaximumMomentAtI)                     | Gets the MaximumMomentAtI.                                                                                                                                                 |
| [`MaximumMomentAtJ`](#BeamProbe.MaximumMomentAtJ)                     | Gets the MaximumMomentAtJ.                                                                                                                                                 |
| [`MaximumShearForceAtI`](#BeamProbe.MaximumShearForceAtI)             | Gets the MaximumShearForceAtI.                                                                                                                                             |
| [`MaximumShearForceAtJ`](#BeamProbe.MaximumShearForceAtJ)             | Gets the MaximumShearForceAtJ.                                                                                                                                             |
| [`MaximumTorque`](#BeamProbe.MaximumTorque)                           | Gets the MaximumTorque.                                                                                                                                                    |
| [`MaximumTotal`](#BeamProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#BeamProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#BeamProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#BeamProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#BeamProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumAxialForce`](#BeamProbe.MinimumAxialForce)                   | Gets the MinimumAxialForce.                                                                                                                                                |
| [`MinimumMomentAtI`](#BeamProbe.MinimumMomentAtI)                     | Gets the MinimumMomentAtI.                                                                                                                                                 |
| [`MinimumMomentAtJ`](#BeamProbe.MinimumMomentAtJ)                     | Gets the MinimumMomentAtJ.                                                                                                                                                 |
| [`MinimumShearForceAtI`](#BeamProbe.MinimumShearForceAtI)             | Gets the MinimumShearForceAtI.                                                                                                                                             |
| [`MinimumShearForceAtJ`](#BeamProbe.MinimumShearForceAtJ)             | Gets the MinimumShearForceAtJ.                                                                                                                                             |
| [`MinimumTorque`](#BeamProbe.MinimumTorque)                           | Gets the MinimumTorque.                                                                                                                                                    |
| [`MinimumTotal`](#BeamProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#BeamProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#BeamProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#BeamProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`MomentAtI`](#BeamProbe.MomentAtI)                                   | Gets the MomentAtI.                                                                                                                                                        |
| [`MomentAtJ`](#BeamProbe.MomentAtJ)                                   | Gets the MomentAtJ.                                                                                                                                                        |
| [`Orientation`](#BeamProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Properties`](#BeamProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#BeamProbe.RPMSelection)                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#BeamProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ResultSelection`](#BeamProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`ShearForceAtI`](#BeamProbe.ShearForceAtI)                           | Gets the ShearForceAtI.                                                                                                                                                    |
| [`ShearForceAtJ`](#BeamProbe.ShearForceAtJ)                           | Gets the ShearForceAtJ.                                                                                                                                                    |
| [`SpatialResolution`](#BeamProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#BeamProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`Substep`](#BeamProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#BeamProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#BeamProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#BeamProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`Time`](#BeamProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Torque`](#BeamProbe.Torque)                                         | Gets the Torque.                                                                                                                                                           |
| [`Total`](#BeamProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`Type`](#BeamProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#BeamProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#BeamProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#BeamProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#BeamProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="BeamProbe.AxialForce"></a>

### *property* BeamProbe.AxialForce *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxialForce.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.BeamSelection"></a>

### *property* BeamProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.BoundaryConditionSelection"></a>

### *property* BeamProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Children"></a>

### *property* BeamProbe.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Comments"></a>

### *property* BeamProbe.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.ContactRegionSelection"></a>

### *property* BeamProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.CoordinateSystemSelection"></a>

### *property* BeamProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.DataModelObjectCategory"></a>

### *property* BeamProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.DisplayTime"></a>

### *property* BeamProbe.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.DpfEvaluation"></a>

### *property* BeamProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Figures"></a>

### *property* BeamProbe.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.GeometryLocation"></a>

### *property* BeamProbe.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Images"></a>

### *property* BeamProbe.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.InternalObject"></a>

### *property* BeamProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.IsSolved"></a>

### *property* BeamProbe.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.IterationNumber"></a>

### *property* BeamProbe.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.LoadStep"></a>

### *property* BeamProbe.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.LoadStepNumber"></a>

### *property* BeamProbe.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.LocationMethod"></a>

### *property* BeamProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumAxialForce"></a>

### *property* BeamProbe.MaximumAxialForce *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAxialForce.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumMomentAtI"></a>

### *property* BeamProbe.MaximumMomentAtI *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMomentAtI.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumMomentAtJ"></a>

### *property* BeamProbe.MaximumMomentAtJ *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMomentAtJ.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumShearForceAtI"></a>

### *property* BeamProbe.MaximumShearForceAtI *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumShearForceAtI.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumShearForceAtJ"></a>

### *property* BeamProbe.MaximumShearForceAtJ *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumShearForceAtJ.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumTorque"></a>

### *property* BeamProbe.MaximumTorque *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTorque.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumTotal"></a>

### *property* BeamProbe.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumXAxis"></a>

### *property* BeamProbe.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumYAxis"></a>

### *property* BeamProbe.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumZAxis"></a>

### *property* BeamProbe.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MeshConnectionSelection"></a>

### *property* BeamProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumAxialForce"></a>

### *property* BeamProbe.MinimumAxialForce *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumAxialForce.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumMomentAtI"></a>

### *property* BeamProbe.MinimumMomentAtI *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMomentAtI.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumMomentAtJ"></a>

### *property* BeamProbe.MinimumMomentAtJ *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMomentAtJ.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumShearForceAtI"></a>

### *property* BeamProbe.MinimumShearForceAtI *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumShearForceAtI.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumShearForceAtJ"></a>

### *property* BeamProbe.MinimumShearForceAtJ *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumShearForceAtJ.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumTorque"></a>

### *property* BeamProbe.MinimumTorque *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTorque.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumTotal"></a>

### *property* BeamProbe.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumXAxis"></a>

### *property* BeamProbe.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumYAxis"></a>

### *property* BeamProbe.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumZAxis"></a>

### *property* BeamProbe.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MomentAtI"></a>

### *property* BeamProbe.MomentAtI *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentAtI.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MomentAtJ"></a>

### *property* BeamProbe.MomentAtJ *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentAtJ.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Orientation"></a>

### *property* BeamProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Properties"></a>

### *property* BeamProbe.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.RPMSelection"></a>

### *property* BeamProbe.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.RemotePointSelection"></a>

### *property* BeamProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.ResultSelection"></a>

### *property* BeamProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.ShearForceAtI"></a>

### *property* BeamProbe.ShearForceAtI *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShearForceAtI.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.ShearForceAtJ"></a>

### *property* BeamProbe.ShearForceAtJ *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShearForceAtJ.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.SpatialResolution"></a>

### *property* BeamProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.SpringSelection"></a>

### *property* BeamProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Substep"></a>

### *property* BeamProbe.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Summation"></a>

### *property* BeamProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Suppressed"></a>

### *property* BeamProbe.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.SurfaceSelection"></a>

### *property* BeamProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Time"></a>

### *property* BeamProbe.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Torque"></a>

### *property* BeamProbe.Torque *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Torque.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Total"></a>

### *property* BeamProbe.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Type"></a>

### *property* BeamProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.VisibleProperties"></a>

### *property* BeamProbe.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.XAxis"></a>

### *property* BeamProbe.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.YAxis"></a>

### *property* BeamProbe.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.ZAxis"></a>

### *property* BeamProbe.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BeamProbe.Activate"></a>

### BeamProbe.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.AddComment"></a>

### BeamProbe.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.AddFigure"></a>

### BeamProbe.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.AddImage"></a>

### BeamProbe.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.ClearGeneratedData"></a>

### BeamProbe.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.CopyTo"></a>

### BeamProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.CreateParameter"></a>

### BeamProbe.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Delete"></a>

### BeamProbe.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Duplicate"></a>

### BeamProbe.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.DuplicateWithoutResults"></a>

### BeamProbe.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.EvaluateAllResults"></a>

### BeamProbe.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.ExportAnimation"></a>

### BeamProbe.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.GetChildren"></a>

### BeamProbe.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.GetParameter"></a>

### BeamProbe.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.GroupAllSimilarChildren"></a>

### BeamProbe.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.GroupSimilarObjects"></a>

### BeamProbe.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.PropertyByAPIName"></a>

### BeamProbe.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.PropertyByName"></a>

### BeamProbe.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.RemoveParameter"></a>

### BeamProbe.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.RenameBasedOnDefinition"></a>

### BeamProbe.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.RetrieveResult"></a>

### BeamProbe.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.SnapToMeshNodes"></a>

### BeamProbe.SnapToMeshNodes() → [None](https://docs.python.org/3/library/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

