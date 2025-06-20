# `MagneticFluxProbe`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.MagneticFluxProbe"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.MagneticFluxProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MagneticFluxProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#MagneticFluxProbe.Activate)                               | Activate the current object.                                                                   |
| [`AddComment`](#MagneticFluxProbe.AddComment)                           | Creates a new child Comment.                                                                   |
| [`AddFigure`](#MagneticFluxProbe.AddFigure)                             | Creates a new child Figure.                                                                    |
| [`AddImage`](#MagneticFluxProbe.AddImage)                               | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#MagneticFluxProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                             |
| [`CopyTo`](#MagneticFluxProbe.CopyTo)                                   | Copies all visible properties from this object to another.                                     |
| [`CreateParameter`](#MagneticFluxProbe.CreateParameter)                 | Creates a new parameter for a Property.                                                        |
| [`Delete`](#MagneticFluxProbe.Delete)                                   | Run the Delete action.                                                                         |
| [`Duplicate`](#MagneticFluxProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#MagneticFluxProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                        |
| [`EvaluateAllResults`](#MagneticFluxProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#MagneticFluxProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                                |
| [`GetChildren`](#MagneticFluxProbe.GetChildren)                         | Gets the list of children, filtered by type.                                                   |
| [`GetParameter`](#MagneticFluxProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                                        |
| [`GroupAllSimilarChildren`](#MagneticFluxProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#MagneticFluxProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                            |
| [`PropertyByAPIName`](#MagneticFluxProbe.PropertyByAPIName)             | Get a property by its API name.                                                                |
| [`PropertyByName`](#MagneticFluxProbe.PropertyByName)                   | Get a property by its unique name.                                                             |
| [`RemoveParameter`](#MagneticFluxProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#MagneticFluxProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#MagneticFluxProbe.RetrieveResult)                   | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#MagneticFluxProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`BeamSelection`](#MagneticFluxProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#MagneticFluxProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`Children`](#MagneticFluxProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#MagneticFluxProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#MagneticFluxProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#MagneticFluxProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#MagneticFluxProbe.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                                                                                                                               |
| [`DisplayTime`](#MagneticFluxProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#MagneticFluxProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Figures`](#MagneticFluxProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`GeometryLocation`](#MagneticFluxProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`Images`](#MagneticFluxProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#MagneticFluxProbe.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#MagneticFluxProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#MagneticFluxProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#MagneticFluxProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#MagneticFluxProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#MagneticFluxProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MagneticFlux`](#MagneticFluxProbe.MagneticFlux)                             | Gets the MagneticFlux.                                                                                                                                                     |
| [`MaximumMagneticFlux`](#MagneticFluxProbe.MaximumMagneticFlux)               | Gets the MaximumMagneticFlux.                                                                                                                                              |
| [`MaximumTotal`](#MagneticFluxProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#MagneticFluxProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#MagneticFluxProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#MagneticFluxProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#MagneticFluxProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumMagneticFlux`](#MagneticFluxProbe.MinimumMagneticFlux)               | Gets the MinimumMagneticFlux.                                                                                                                                              |
| [`MinimumTotal`](#MagneticFluxProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#MagneticFluxProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#MagneticFluxProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#MagneticFluxProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Orientation`](#MagneticFluxProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Properties`](#MagneticFluxProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#MagneticFluxProbe.RPMSelection)                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#MagneticFluxProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ResultSelection`](#MagneticFluxProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#MagneticFluxProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#MagneticFluxProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`Substep`](#MagneticFluxProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#MagneticFluxProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#MagneticFluxProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#MagneticFluxProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SymmetryMultiplier`](#MagneticFluxProbe.SymmetryMultiplier)                 | Gets or sets the SymmetryMultiplier.                                                                                                                                       |
| [`Time`](#MagneticFluxProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#MagneticFluxProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`Type`](#MagneticFluxProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#MagneticFluxProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#MagneticFluxProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#MagneticFluxProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#MagneticFluxProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="MagneticFluxProbe.BeamSelection"></a>

### *property* MagneticFluxProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.BoundaryConditionSelection"></a>

### *property* MagneticFluxProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Children"></a>

### *property* MagneticFluxProbe.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Comments"></a>

### *property* MagneticFluxProbe.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.ContactRegionSelection"></a>

### *property* MagneticFluxProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.CoordinateSystemSelection"></a>

### *property* MagneticFluxProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.DataModelObjectCategory"></a>

### *property* MagneticFluxProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.DisplayTime"></a>

### *property* MagneticFluxProbe.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.DpfEvaluation"></a>

### *property* MagneticFluxProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Figures"></a>

### *property* MagneticFluxProbe.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.GeometryLocation"></a>

### *property* MagneticFluxProbe.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Images"></a>

### *property* MagneticFluxProbe.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.InternalObject"></a>

### *property* MagneticFluxProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.IsSolved"></a>

### *property* MagneticFluxProbe.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.IterationNumber"></a>

### *property* MagneticFluxProbe.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.LoadStep"></a>

### *property* MagneticFluxProbe.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.LoadStepNumber"></a>

### *property* MagneticFluxProbe.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.LocationMethod"></a>

### *property* MagneticFluxProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.MagneticFlux"></a>

### *property* MagneticFluxProbe.MagneticFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagneticFlux.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.MaximumMagneticFlux"></a>

### *property* MagneticFluxProbe.MaximumMagneticFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMagneticFlux.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.MaximumTotal"></a>

### *property* MagneticFluxProbe.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.MaximumXAxis"></a>

### *property* MagneticFluxProbe.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.MaximumYAxis"></a>

### *property* MagneticFluxProbe.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.MaximumZAxis"></a>

### *property* MagneticFluxProbe.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.MeshConnectionSelection"></a>

### *property* MagneticFluxProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.MinimumMagneticFlux"></a>

### *property* MagneticFluxProbe.MinimumMagneticFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMagneticFlux.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.MinimumTotal"></a>

### *property* MagneticFluxProbe.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.MinimumXAxis"></a>

### *property* MagneticFluxProbe.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.MinimumYAxis"></a>

### *property* MagneticFluxProbe.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.MinimumZAxis"></a>

### *property* MagneticFluxProbe.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Orientation"></a>

### *property* MagneticFluxProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Properties"></a>

### *property* MagneticFluxProbe.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.RPMSelection"></a>

### *property* MagneticFluxProbe.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.RemotePointSelection"></a>

### *property* MagneticFluxProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.ResultSelection"></a>

### *property* MagneticFluxProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.SpatialResolution"></a>

### *property* MagneticFluxProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.SpringSelection"></a>

### *property* MagneticFluxProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Substep"></a>

### *property* MagneticFluxProbe.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Summation"></a>

### *property* MagneticFluxProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Suppressed"></a>

### *property* MagneticFluxProbe.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.SurfaceSelection"></a>

### *property* MagneticFluxProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.SymmetryMultiplier"></a>

### *property* MagneticFluxProbe.SymmetryMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SymmetryMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Time"></a>

### *property* MagneticFluxProbe.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Total"></a>

### *property* MagneticFluxProbe.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Type"></a>

### *property* MagneticFluxProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.VisibleProperties"></a>

### *property* MagneticFluxProbe.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.XAxis"></a>

### *property* MagneticFluxProbe.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.YAxis"></a>

### *property* MagneticFluxProbe.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.ZAxis"></a>

### *property* MagneticFluxProbe.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MagneticFluxProbe.Activate"></a>

### MagneticFluxProbe.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.AddComment"></a>

### MagneticFluxProbe.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.AddFigure"></a>

### MagneticFluxProbe.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.AddImage"></a>

### MagneticFluxProbe.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.ClearGeneratedData"></a>

### MagneticFluxProbe.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.CopyTo"></a>

### MagneticFluxProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.CreateParameter"></a>

### MagneticFluxProbe.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Delete"></a>

### MagneticFluxProbe.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.Duplicate"></a>

### MagneticFluxProbe.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.DuplicateWithoutResults"></a>

### MagneticFluxProbe.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.EvaluateAllResults"></a>

### MagneticFluxProbe.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.ExportAnimation"></a>

### MagneticFluxProbe.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.GetChildren"></a>

### MagneticFluxProbe.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.GetParameter"></a>

### MagneticFluxProbe.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.GroupAllSimilarChildren"></a>

### MagneticFluxProbe.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.GroupSimilarObjects"></a>

### MagneticFluxProbe.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.PropertyByAPIName"></a>

### MagneticFluxProbe.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.PropertyByName"></a>

### MagneticFluxProbe.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.RemoveParameter"></a>

### MagneticFluxProbe.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.RenameBasedOnDefinition"></a>

### MagneticFluxProbe.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.RetrieveResult"></a>

### MagneticFluxProbe.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxProbe.SnapToMeshNodes"></a>

### MagneticFluxProbe.SnapToMeshNodes() → [None](https://docs.python.org/3/library/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

