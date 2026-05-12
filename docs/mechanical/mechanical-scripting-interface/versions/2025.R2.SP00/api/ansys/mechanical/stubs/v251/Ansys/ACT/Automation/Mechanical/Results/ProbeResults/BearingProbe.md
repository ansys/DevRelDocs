# `BearingProbe`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.BearingProbe"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.BearingProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BoltPretensionProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#BearingProbe.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#BearingProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BearingProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BearingProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#BearingProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#BearingProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#BearingProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#BearingProbe.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#BearingProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#BearingProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#BearingProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#BearingProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#BearingProbe.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#BearingProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#BearingProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BearingProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#BearingProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#BearingProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#BearingProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#BearingProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`SnapToMeshNodes`](#BearingProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`BeamSelection`](#BearingProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#BearingProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`By`](#BearingProbe.By)                                                 | Gets or sets the By.                                                                                                                                                       |
| [`Children`](#BearingProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#BearingProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#BearingProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#BearingProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DampingForce1`](#BearingProbe.DampingForce1)                           | Gets the DampingForce1.                                                                                                                                                    |
| [`DampingForce2`](#BearingProbe.DampingForce2)                           | Gets the DampingForce2.                                                                                                                                                    |
| [`DataModelObjectCategory`](#BearingProbe.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                                                                                                                               |
| [`DisplayTime`](#BearingProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#BearingProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`ElasticForce1`](#BearingProbe.ElasticForce1)                           | Gets the ElasticForce1.                                                                                                                                                    |
| [`ElasticForce2`](#BearingProbe.ElasticForce2)                           | Gets the ElasticForce2.                                                                                                                                                    |
| [`Elongation1`](#BearingProbe.Elongation1)                               | Gets the Elongation1.                                                                                                                                                      |
| [`Elongation2`](#BearingProbe.Elongation2)                               | Gets the Elongation2.                                                                                                                                                      |
| [`Figures`](#BearingProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`GeometryLocation`](#BearingProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`Images`](#BearingProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#BearingProbe.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#BearingProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#BearingProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#BearingProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#BearingProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#BearingProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumDampingForce1`](#BearingProbe.MaximumDampingForce1)             | Gets the MaximumDampingForce1.                                                                                                                                             |
| [`MaximumDampingForce2`](#BearingProbe.MaximumDampingForce2)             | Gets the MaximumDampingForce2.                                                                                                                                             |
| [`MaximumElasticForce1`](#BearingProbe.MaximumElasticForce1)             | Gets the MaximumElasticForce1.                                                                                                                                             |
| [`MaximumElasticForce2`](#BearingProbe.MaximumElasticForce2)             | Gets the MaximumElasticForce2.                                                                                                                                             |
| [`MaximumElongation1`](#BearingProbe.MaximumElongation1)                 | Gets the MaximumElongation1.                                                                                                                                               |
| [`MaximumElongation2`](#BearingProbe.MaximumElongation2)                 | Gets the MaximumElongation2.                                                                                                                                               |
| [`MaximumTotal`](#BearingProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumVelocity1`](#BearingProbe.MaximumVelocity1)                     | Gets the MaximumVelocity1.                                                                                                                                                 |
| [`MaximumVelocity2`](#BearingProbe.MaximumVelocity2)                     | Gets the MaximumVelocity2.                                                                                                                                                 |
| [`MaximumXAxis`](#BearingProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#BearingProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#BearingProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#BearingProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumDampingForce1`](#BearingProbe.MinimumDampingForce1)             | Gets the MinimumDampingForce1.                                                                                                                                             |
| [`MinimumDampingForce2`](#BearingProbe.MinimumDampingForce2)             | Gets the MinimumDampingForce2.                                                                                                                                             |
| [`MinimumElasticForce1`](#BearingProbe.MinimumElasticForce1)             | Gets the MinimumElasticForce1.                                                                                                                                             |
| [`MinimumElasticForce2`](#BearingProbe.MinimumElasticForce2)             | Gets the MinimumElasticForce2.                                                                                                                                             |
| [`MinimumElongation1`](#BearingProbe.MinimumElongation1)                 | Gets the MinimumElongation1.                                                                                                                                               |
| [`MinimumElongation2`](#BearingProbe.MinimumElongation2)                 | Gets the MinimumElongation2.                                                                                                                                               |
| [`MinimumTotal`](#BearingProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumVelocity1`](#BearingProbe.MinimumVelocity1)                     | Gets the MinimumVelocity1.                                                                                                                                                 |
| [`MinimumVelocity2`](#BearingProbe.MinimumVelocity2)                     | Gets the MinimumVelocity2.                                                                                                                                                 |
| [`MinimumXAxis`](#BearingProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#BearingProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#BearingProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Orientation`](#BearingProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`PhaseIncrement`](#BearingProbe.PhaseIncrement)                         | Gets or sets the PhaseIncrement.                                                                                                                                           |
| [`Properties`](#BearingProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#BearingProbe.RPMSelection)                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#BearingProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ReportedFrequency`](#BearingProbe.ReportedFrequency)                   | Gets the ReportedFrequency.                                                                                                                                                |
| [`ResultSelection`](#BearingProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`ScaleFactor`](#BearingProbe.ScaleFactor)                               | Gets or sets the ScaleFactor.                                                                                                                                              |
| [`ScaleFactorValue`](#BearingProbe.ScaleFactorValue)                     | Gets or sets the ScaleFactorValue.                                                                                                                                         |
| [`SpatialResolution`](#BearingProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#BearingProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`Substep`](#BearingProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#BearingProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#BearingProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#BearingProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SweepingPhase`](#BearingProbe.SweepingPhase)                           | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`Time`](#BearingProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#BearingProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`Type`](#BearingProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`Velocity1`](#BearingProbe.Velocity1)                                   | Gets the Velocity1.                                                                                                                                                        |
| [`Velocity2`](#BearingProbe.Velocity2)                                   | Gets the Velocity2.                                                                                                                                                        |
| [`VisibleProperties`](#BearingProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#BearingProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#BearingProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#BearingProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="BearingProbe.BeamSelection"></a>

### *property* BearingProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.BoundaryConditionSelection"></a>

### *property* BearingProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.By"></a>

### *property* BearingProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Children"></a>

### *property* BearingProbe.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Comments"></a>

### *property* BearingProbe.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.ContactRegionSelection"></a>

### *property* BearingProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.CoordinateSystemSelection"></a>

### *property* BearingProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.DampingForce1"></a>

### *property* BearingProbe.DampingForce1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingForce1.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.DampingForce2"></a>

### *property* BearingProbe.DampingForce2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingForce2.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.DataModelObjectCategory"></a>

### *property* BearingProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.DisplayTime"></a>

### *property* BearingProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.DpfEvaluation"></a>

### *property* BearingProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.ElasticForce1"></a>

### *property* BearingProbe.ElasticForce1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ElasticForce1.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.ElasticForce2"></a>

### *property* BearingProbe.ElasticForce2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ElasticForce2.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Elongation1"></a>

### *property* BearingProbe.Elongation1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elongation1.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Elongation2"></a>

### *property* BearingProbe.Elongation2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elongation2.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Figures"></a>

### *property* BearingProbe.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.GeometryLocation"></a>

### *property* BearingProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Images"></a>

### *property* BearingProbe.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.InternalObject"></a>

### *property* BearingProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.IsSolved"></a>

### *property* BearingProbe.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.IterationNumber"></a>

### *property* BearingProbe.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.LoadStep"></a>

### *property* BearingProbe.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.LoadStepNumber"></a>

### *property* BearingProbe.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.LocationMethod"></a>

### *property* BearingProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MaximumDampingForce1"></a>

### *property* BearingProbe.MaximumDampingForce1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumDampingForce1.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MaximumDampingForce2"></a>

### *property* BearingProbe.MaximumDampingForce2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumDampingForce2.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MaximumElasticForce1"></a>

### *property* BearingProbe.MaximumElasticForce1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumElasticForce1.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MaximumElasticForce2"></a>

### *property* BearingProbe.MaximumElasticForce2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumElasticForce2.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MaximumElongation1"></a>

### *property* BearingProbe.MaximumElongation1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumElongation1.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MaximumElongation2"></a>

### *property* BearingProbe.MaximumElongation2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumElongation2.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MaximumTotal"></a>

### *property* BearingProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MaximumVelocity1"></a>

### *property* BearingProbe.MaximumVelocity1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumVelocity1.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MaximumVelocity2"></a>

### *property* BearingProbe.MaximumVelocity2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumVelocity2.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MaximumXAxis"></a>

### *property* BearingProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MaximumYAxis"></a>

### *property* BearingProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MaximumZAxis"></a>

### *property* BearingProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MeshConnectionSelection"></a>

### *property* BearingProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MinimumDampingForce1"></a>

### *property* BearingProbe.MinimumDampingForce1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDampingForce1.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MinimumDampingForce2"></a>

### *property* BearingProbe.MinimumDampingForce2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDampingForce2.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MinimumElasticForce1"></a>

### *property* BearingProbe.MinimumElasticForce1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumElasticForce1.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MinimumElasticForce2"></a>

### *property* BearingProbe.MinimumElasticForce2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumElasticForce2.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MinimumElongation1"></a>

### *property* BearingProbe.MinimumElongation1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumElongation1.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MinimumElongation2"></a>

### *property* BearingProbe.MinimumElongation2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumElongation2.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MinimumTotal"></a>

### *property* BearingProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MinimumVelocity1"></a>

### *property* BearingProbe.MinimumVelocity1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumVelocity1.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MinimumVelocity2"></a>

### *property* BearingProbe.MinimumVelocity2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumVelocity2.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MinimumXAxis"></a>

### *property* BearingProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MinimumYAxis"></a>

### *property* BearingProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.MinimumZAxis"></a>

### *property* BearingProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Orientation"></a>

### *property* BearingProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.PhaseIncrement"></a>

### *property* BearingProbe.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Properties"></a>

### *property* BearingProbe.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.RPMSelection"></a>

### *property* BearingProbe.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.RemotePointSelection"></a>

### *property* BearingProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.ReportedFrequency"></a>

### *property* BearingProbe.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.ResultSelection"></a>

### *property* BearingProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.ScaleFactor"></a>

### *property* BearingProbe.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.ScaleFactorValue"></a>

### *property* BearingProbe.ScaleFactorValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.SpatialResolution"></a>

### *property* BearingProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.SpringSelection"></a>

### *property* BearingProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Substep"></a>

### *property* BearingProbe.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Summation"></a>

### *property* BearingProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Suppressed"></a>

### *property* BearingProbe.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.SurfaceSelection"></a>

### *property* BearingProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.SweepingPhase"></a>

### *property* BearingProbe.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Time"></a>

### *property* BearingProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Total"></a>

### *property* BearingProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Type"></a>

### *property* BearingProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Velocity1"></a>

### *property* BearingProbe.Velocity1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Velocity1.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Velocity2"></a>

### *property* BearingProbe.Velocity2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Velocity2.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.VisibleProperties"></a>

### *property* BearingProbe.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.XAxis"></a>

### *property* BearingProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.YAxis"></a>

### *property* BearingProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.ZAxis"></a>

### *property* BearingProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BearingProbe.Activate"></a>

### BearingProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.AddComment"></a>

### BearingProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.AddFigure"></a>

### BearingProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.AddImage"></a>

### BearingProbe.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.ClearGeneratedData"></a>

### BearingProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.CopyTo"></a>

### BearingProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.CreateParameter"></a>

### BearingProbe.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Delete"></a>

### BearingProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.Duplicate"></a>

### BearingProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.DuplicateWithoutResults"></a>

### BearingProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.EvaluateAllResults"></a>

### BearingProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.ExportAnimation"></a>

### BearingProbe.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.GetChildren"></a>

### BearingProbe.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.GetParameter"></a>

### BearingProbe.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.GroupAllSimilarChildren"></a>

### BearingProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.GroupSimilarObjects"></a>

### BearingProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.PropertyByAPIName"></a>

### BearingProbe.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.PropertyByName"></a>

### BearingProbe.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.RemoveParameter"></a>

### BearingProbe.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.RenameBasedOnDefinition"></a>

### BearingProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="BearingProbe.SnapToMeshNodes"></a>

### BearingProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

